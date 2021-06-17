import { ElastiCacheClient } from "../ElastiCacheClient";
import { DescribeReplicationGroupsCommandInput } from "../commands/DescribeReplicationGroupsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until ElastiCache replication group is available.
 *  @deprecated Use waitUntilReplicationGroupAvailable instead. waitForReplicationGroupAvailable does not throw error in non-success cases.
 */
export declare const waitForReplicationGroupAvailable: (params: WaiterConfiguration<ElastiCacheClient>, input: DescribeReplicationGroupsCommandInput) => Promise<WaiterResult>;
/**
 * Wait until ElastiCache replication group is available.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeReplicationGroupsCommand for polling.
 */
export declare const waitUntilReplicationGroupAvailable: (params: WaiterConfiguration<ElastiCacheClient>, input: DescribeReplicationGroupsCommandInput) => Promise<WaiterResult>;
