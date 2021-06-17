"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilAddonDeleted = exports.waitForAddonDeleted = void 0;
const DescribeAddonCommand_1 = require("../commands/DescribeAddonCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeAddonCommand_1.DescribeAddonCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.addon.status;
            };
            if (returnComparator() === "DELETE_FAILED") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: util_waiter_1.WaiterState.SUCCESS, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilAddonDeleted instead. waitForAddonDeleted does not throw error in non-success cases.
 */
const waitForAddonDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForAddonDeleted = waitForAddonDeleted;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAddonCommand for polling.
 */
const waitUntilAddonDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilAddonDeleted = waitUntilAddonDeleted;
//# sourceMappingURL=waitForAddonDeleted.js.map