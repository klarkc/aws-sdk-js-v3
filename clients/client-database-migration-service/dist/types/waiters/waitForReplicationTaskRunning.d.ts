import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationTasksCommandInput } from "../commands/DescribeReplicationTasksCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until DMS replication task is running.
 *  @deprecated Use waitUntilReplicationTaskRunning instead. waitForReplicationTaskRunning does not throw error in non-success cases.
 */
export declare const waitForReplicationTaskRunning: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeReplicationTasksCommandInput) => Promise<WaiterResult>;
/**
 * Wait until DMS replication task is running.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeReplicationTasksCommand for polling.
 */
export declare const waitUntilReplicationTaskRunning: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeReplicationTasksCommandInput) => Promise<WaiterResult>;
