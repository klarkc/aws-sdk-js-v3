"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilClusterDeleted = exports.waitForClusterDeleted = void 0;
const DescribeClusterCommand_1 = require("../commands/DescribeClusterCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeClusterCommand_1.DescribeClusterCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.cluster.status;
            };
            if (returnComparator() === "ACTIVE") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.cluster.status;
            };
            if (returnComparator() === "CREATING") {
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
 *  @deprecated Use waitUntilClusterDeleted instead. waitForClusterDeleted does not throw error in non-success cases.
 */
const waitForClusterDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForClusterDeleted = waitForClusterDeleted;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeClusterCommand for polling.
 */
const waitUntilClusterDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilClusterDeleted = waitUntilClusterDeleted;
//# sourceMappingURL=waitForClusterDeleted.js.map