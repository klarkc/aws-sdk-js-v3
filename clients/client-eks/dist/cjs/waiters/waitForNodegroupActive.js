"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilNodegroupActive = exports.waitForNodegroupActive = void 0;
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
            if (returnComparator() === "CREATE_FAILED") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.nodegroup.status;
            };
            if (returnComparator() === "ACTIVE") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilNodegroupActive instead. waitForNodegroupActive does not throw error in non-success cases.
 */
const waitForNodegroupActive = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForNodegroupActive = waitForNodegroupActive;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeNodegroupCommand for polling.
 */
const waitUntilNodegroupActive = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilNodegroupActive = waitUntilNodegroupActive;
//# sourceMappingURL=waitForNodegroupActive.js.map