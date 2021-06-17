"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilCacheClusterAvailable = exports.waitForCacheClusterAvailable = void 0;
const DescribeCacheClustersCommand_1 = require("../commands/DescribeCacheClustersCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeCacheClustersCommand_1.DescribeCacheClustersCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.CacheClusters);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.CacheClusterStatus;
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
                let flat_1 = [].concat(...result.CacheClusters);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.CacheClusterStatus;
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
        try {
            let returnComparator = () => {
                let flat_1 = [].concat(...result.CacheClusters);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.CacheClusterStatus;
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
                let flat_1 = [].concat(...result.CacheClusters);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.CacheClusterStatus;
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
                let flat_1 = [].concat(...result.CacheClusters);
                let projection_3 = flat_1.map((element_2) => {
                    return element_2.CacheClusterStatus;
                });
                return projection_3;
            };
            for (let anyStringEq_4 of returnComparator()) {
                if (anyStringEq_4 == "restore-failed") {
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
 * Wait until ElastiCache cluster is available.
 *  @deprecated Use waitUntilCacheClusterAvailable instead. waitForCacheClusterAvailable does not throw error in non-success cases.
 */
const waitForCacheClusterAvailable = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForCacheClusterAvailable = waitForCacheClusterAvailable;
/**
 * Wait until ElastiCache cluster is available.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeCacheClustersCommand for polling.
 */
const waitUntilCacheClusterAvailable = async (params, input) => {
    const serviceDefaults = { minDelay: 15, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilCacheClusterAvailable = waitUntilCacheClusterAvailable;
//# sourceMappingURL=waitForCacheClusterAvailable.js.map