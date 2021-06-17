"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilClusterRunning = exports.waitForClusterRunning = void 0;
const DescribeClusterCommand_1 = require("../commands/DescribeClusterCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeClusterCommand_1.DescribeClusterCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.Cluster.Status.State;
            };
            if (returnComparator() === "RUNNING") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Cluster.Status.State;
            };
            if (returnComparator() === "WAITING") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Cluster.Status.State;
            };
            if (returnComparator() === "TERMINATING") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Cluster.Status.State;
            };
            if (returnComparator() === "TERMINATED") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                return result.Cluster.Status.State;
            };
            if (returnComparator() === "TERMINATED_WITH_ERRORS") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
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
 *  @deprecated Use waitUntilClusterRunning instead. waitForClusterRunning does not throw error in non-success cases.
 */
const waitForClusterRunning = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForClusterRunning = waitForClusterRunning;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeClusterCommand for polling.
 */
const waitUntilClusterRunning = async (params, input) => {
    const serviceDefaults = { minDelay: 30, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilClusterRunning = waitUntilClusterRunning;
//# sourceMappingURL=waitForClusterRunning.js.map