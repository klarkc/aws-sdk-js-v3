"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilMultiplexRunning = exports.waitForMultiplexRunning = void 0;
const DescribeMultiplexCommand_1 = require("../commands/DescribeMultiplexCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeMultiplexCommand_1.DescribeMultiplexCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "RUNNING") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "STARTING") {
                return { state: util_waiter_1.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "InternalServerErrorException") {
            return { state: util_waiter_1.WaiterState.RETRY, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 * Wait until a multiplex is running
 *  @deprecated Use waitUntilMultiplexRunning instead. waitForMultiplexRunning does not throw error in non-success cases.
 */
const waitForMultiplexRunning = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForMultiplexRunning = waitForMultiplexRunning;
/**
 * Wait until a multiplex is running
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeMultiplexCommand for polling.
 */
const waitUntilMultiplexRunning = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilMultiplexRunning = waitUntilMultiplexRunning;
//# sourceMappingURL=waitForMultiplexRunning.js.map