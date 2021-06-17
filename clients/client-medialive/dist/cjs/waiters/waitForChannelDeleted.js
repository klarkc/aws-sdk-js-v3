"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilChannelDeleted = exports.waitForChannelDeleted = void 0;
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
            if (returnComparator() === "DELETED") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "DELETING") {
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
 * Wait until a channel has been deleted
 *  @deprecated Use waitUntilChannelDeleted instead. waitForChannelDeleted does not throw error in non-success cases.
 */
const waitForChannelDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForChannelDeleted = waitForChannelDeleted;
/**
 * Wait until a channel has been deleted
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeChannelCommand for polling.
 */
const waitUntilChannelDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilChannelDeleted = waitUntilChannelDeleted;
//# sourceMappingURL=waitForChannelDeleted.js.map