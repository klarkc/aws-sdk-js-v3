"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilReplicationGroupAvailable = exports.waitForReplicationGroupAvailable = void 0;
const DescribeReplicationGroupsCommand_1 = require("../commands/DescribeReplicationGroupsCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeReplicationGroupsCommand_1.DescribeReplicationGroupsCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.ReplicationGroups);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Status;
                });
                return projection_3;
            };
            let allStringEq_5 = returnComparator().length > 0;
            for (let element_4 of returnComparator()) {
                allStringEq_5 = allStringEq_5 && element_4 == "available";
            }
            if (allStringEq_5) {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.ReplicationGroups);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.Status;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "deleted") {
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
 * Wait until ElastiCache replication group is available.
 *  @deprecated Use waitUntilReplicationGroupAvailable instead. waitForReplicationGroupAvailable does not throw error in non-success cases.
 */
const waitForReplicationGroupAvailable = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForReplicationGroupAvailable = waitForReplicationGroupAvailable;
/**
 * Wait until ElastiCache replication group is available.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeReplicationGroupsCommand for polling.
 */
const waitUntilReplicationGroupAvailable = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilReplicationGroupAvailable = waitUntilReplicationGroupAvailable;
//# sourceMappingURL=waitForReplicationGroupAvailable.js.map