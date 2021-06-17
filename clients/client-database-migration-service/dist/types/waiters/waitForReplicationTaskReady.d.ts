import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationTasksCommandInput } from "../commands/DescribeReplicationTasksCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until DMS replication task is ready.
 *  @deprecated Use waitUntilReplicationTaskReady instead. waitForReplicationTaskReady does not throw error in non-success cases.
 */
export declare const waitForReplicationTaskReady: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeReplicationTasksCommandInput) => Promise<WaiterResult>;
/**
 * Wait until DMS replication task is ready.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeReplicationTasksCommand for polling.
 */
export declare const waitUntilReplicationTaskReady: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeReplicationTasksCommandInput) => Promise<WaiterResult>;
