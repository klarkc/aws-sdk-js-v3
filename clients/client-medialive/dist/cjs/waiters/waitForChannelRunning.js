"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilChannelRunning = exports.waitForChannelRunning = void 0;
const DescribeChannelCommand_1 = require("../commands/DescribeChannelCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeChannelCommand_1.DescribeChannelCommand(input));
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
 * Wait until a channel is running
 *  @deprecated Use waitUntilChannelRunning instead. waitForChannelRunning does not throw error in non-success cases.
 */
const waitForChannelRunning = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForChannelRunning = waitForChannelRunning;
/**
 * Wait until a channel is running
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeChannelCommand for polling.
 */
const waitUntilChannelRunning = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilChannelRunning = waitUntilChannelRunning;
//# sourceMappingURL=waitForChannelRunning.js.map