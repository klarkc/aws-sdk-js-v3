import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationTasksCommandInput } from "../commands/DescribeReplicationTasksCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until DMS replication task is stopped.
 *  @deprecated Use waitUntilReplicationTaskStopped instead. waitForReplicationTaskStopped does not throw error in non-success cases.
 */
export declare const waitForReplicationTaskStopped: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeReplicationTasksCommandInput) => Promise<WaiterResult>;
/**
 * Wait until DMS replication task is stopped.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeReplicationTasksCommand for polling.
 */
export declare const waitUntilReplicationTaskStopped: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeReplicationTasksCommandInput) => Promise<WaiterResult>;
