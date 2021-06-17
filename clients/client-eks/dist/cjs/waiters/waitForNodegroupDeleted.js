"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilNodegroupDeleted = exports.waitForNodegroupDeleted = void 0;
const DescribeNodegroupCommand_1 = require("../commands/DescribeNodegroupCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeNodegroupCommand_1.DescribeNodegroupCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.nodegroup.status;
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
 *  @deprecated Use waitUntilNodegroupDeleted instead. waitForNodegroupDeleted does not throw error in non-success cases.
 */
const waitForNodegroupDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForNodegroupDeleted = waitForNodegroupDeleted;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeNodegroupCommand for polling.
 */
const waitUntilNodegroupDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilNodegroupDeleted = waitUntilNodegroupDeleted;
//# sourceMappingURL=waitForNodegroupDeleted.js.map