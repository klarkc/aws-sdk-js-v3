"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilReplicationInstanceAvailable = exports.waitForReplicationInstanceAvailable = void 0;
const DescribeReplicationInstancesCommand_1 = require("../commands/DescribeReplicationInstancesCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeReplicationInstancesCommand_1.DescribeReplicationInstancesCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.ReplicationInstances);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.ReplicationInstanceStatus;
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
                let flat_1 = [].concat(...result.ReplicationInstances);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.ReplicationInstanceStatus;
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
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.ReplicationInstances);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.ReplicationInstanceStatus;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "incompatible-credentials") {
                    return { state: util_waiter_1.WaiterState.FAILURE, reason };
                }
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.ReplicationInstances);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.ReplicationInstanceStatus;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "incompatible-network") {
                    return { state: util_waiter_1.WaiterState.FAILURE, reason };
                }
            }
        }
        catch (e) { }
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.ReplicationInstances);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.ReplicationInstanceStatus;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "inaccessible-encryption-credentials") {
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
 * Wait until DMS replication instance is available.
 *  @deprecated Use waitUntilReplicationInstanceAvailable instead. waitForReplicationInstanceAvailable does not throw error in non-success cases.
 */
const waitForReplicationInstanceAvailable = async (params, input) => {
    const serviceDefaults = { minDelay: 60, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForReplicationInstanceAvailable = waitForReplicationInstanceAvailable;
/**
 * Wait until DMS replication instance is available.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeReplicationInstancesCommand for polling.
 */
const waitUntilReplicationInstanceAvailable = async (params, input) => {
    const serviceDefaults = { minDelay: 60, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilReplicationInstanceAvailable = waitUntilReplicationInstanceAvailable;
//# sourceMappingURL=waitForReplicationInstanceAvailable.js.map