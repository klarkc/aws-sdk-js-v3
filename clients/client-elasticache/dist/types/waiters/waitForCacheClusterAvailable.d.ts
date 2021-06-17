import { ElastiCacheClient } from "../ElastiCacheClient";
import { DescribeCacheClustersCommandInput } from "../commands/DescribeCacheClustersCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until ElastiCache cluster is available.
 *  @deprecated Use waitUntilCacheClusterAvailable instead. waitForCacheClusterAvailable does not throw error in non-success cases.
 */
export declare const waitForCacheClusterAvailable: (params: WaiterConfiguration<ElastiCacheClient>, input: DescribeCacheClustersCommandInput) => Promise<WaiterResult>;
/**
 * Wait until ElastiCache cluster is available.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeCacheClustersCommand for polling.
 */
export declare const waitUntilCacheClusterAvailable: (params: WaiterConfiguration<ElastiCacheClient>, input: DescribeCacheClustersCommandInput) => Promise<WaiterResult>;
