"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilClusterRestored = exports.waitForClusterRestored = void 0;
const DescribeClustersCommand_1 = require("../commands/DescribeClustersCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeClustersCommand_1.DescribeClustersCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Clusters);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.RestoreStatus.Status;
                });
                return projection_3;
            };
            let allStringEq_5 = returnComparator().length > 0;
            for (let element_4 of returnComparator()) {
                allStringEq_5 = allStringEq_5 && element_4 == "completed";
            }
            if (allStringEq_5) {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.Clusters);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.ClusterStatus;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "deleting") {
                    return { state: util_waiter_1.WaiterState.FAILURE, reason };
                }
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
 *  @deprecated Use waitUntilClusterRestored instead. waitForClusterRestored does not throw error in non-success cases.
 */
const waitForClusterRestored = async (params, input) => {
    const serviceDefaults = { minDelay: 60, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForClusterRestored = waitForClusterRestored;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeClustersCommand for polling.
 */
const waitUntilClusterRestored = async (params, input) => {
    const serviceDefaults = { minDelay: 60, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilClusterRestored = waitUntilClusterRestored;
//# sourceMappingURL=waitForClusterRestored.js.map