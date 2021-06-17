import { ElastiCacheClient } from "../ElastiCacheClient";
import { DescribeReplicationGroupsCommandInput } from "../commands/DescribeReplicationGroupsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until ElastiCache replication group is deleted.
 *  @deprecated Use waitUntilReplicationGroupDeleted instead. waitForReplicationGroupDeleted does not throw error in non-success cases.
 */
export declare const waitForReplicationGroupDeleted: (params: WaiterConfiguration<ElastiCacheClient>, input: DescribeReplicationGroupsCommandInput) => Promise<WaiterResult>;
/**
 * Wait until ElastiCache replication group is deleted.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeReplicationGroupsCommand for polling.
 */
export declare const waitUntilReplicationGroupDeleted: (params: WaiterConfiguration<ElastiCacheClient>, input: DescribeReplicationGroupsCommandInput) => Promise<WaiterResult>;
