"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilReplicationInstanceDeleted = exports.waitForReplicationInstanceDeleted = void 0;
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
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "available") {
                    return { state: util_waiter_1.WaiterState.FAILURE, reason };
                }
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundFault") {
            return { state: util_waiter_1.WaiterState.SUCCESS, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 * Wait until DMS replication instance is deleted.
 *  @deprecated Use waitUntilReplicationInstanceDeleted instead. waitForReplicationInstanceDeleted does not throw error in non-success cases.
 */
const waitForReplicationInstanceDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForReplicationInstanceDeleted = waitForReplicationInstanceDeleted;
/**
 * Wait until DMS replication instance is deleted.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeReplicationInstancesCommand for polling.
 */
const waitUntilReplicationInstanceDeleted = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilReplicationInstanceDeleted = waitUntilReplicationInstanceDeleted;
//# sourceMappingURL=waitForReplicationInstanceDeleted.js.map