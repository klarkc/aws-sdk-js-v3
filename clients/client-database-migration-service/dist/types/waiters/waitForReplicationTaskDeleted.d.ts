import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationTasksCommandInput } from "../commands/DescribeReplicationTasksCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until DMS replication task is deleted.
 *  @deprecated Use waitUntilReplicationTaskDeleted instead. waitForReplicationTaskDeleted does not throw error in non-success cases.
 */
export declare const waitForReplicationTaskDeleted: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeReplicationTasksCommandInput) => Promise<WaiterResult>;
/**
 * Wait until DMS replication task is deleted.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeReplicationTasksCommand for polling.
 */
export declare const waitUntilReplicationTaskDeleted: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeReplicationTasksCommandInput) => Promise<WaiterResult>;
