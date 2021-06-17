import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationInstancesCommandInput } from "../commands/DescribeReplicationInstancesCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until DMS replication instance is deleted.
 *  @deprecated Use waitUntilReplicationInstanceDeleted instead. waitForReplicationInstanceDeleted does not throw error in non-success cases.
 */
export declare const waitForReplicationInstanceDeleted: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeReplicationInstancesCommandInput) => Promise<WaiterResult>;
/**
 * Wait until DMS replication instance is deleted.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeReplicationInstancesCommand for polling.
 */
export declare const waitUntilReplicationInstanceDeleted: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeReplicationInstancesCommandInput) => Promise<WaiterResult>;
