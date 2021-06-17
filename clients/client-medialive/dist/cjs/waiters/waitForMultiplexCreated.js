"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilMultiplexCreated = exports.waitForMultiplexCreated = void 0;
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
            if (returnComparator() === "IDLE") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "CREATING") {
                return { state: util_waiter_1.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "CREATE_FAILED") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
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
 * Wait until a multiplex has been created
 *  @deprecated Use waitUntilMultiplexCreated instead. waitForMultiplexCreated does not throw error in non-success cases.
 */
const waitForMultiplexCreated = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForMultiplexCreated = waitForMultiplexCreated;
/**
 * Wait until a multiplex has been created
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeMultiplexCommand for polling.
 */
const waitUntilMultiplexCreated = async (params, input) => {
    const serviceDefaults = { minDelay: 3, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilMultiplexCreated = waitUntilMultiplexCreated;
//# sourceMappingURL=waitForMultiplexCreated.js.map