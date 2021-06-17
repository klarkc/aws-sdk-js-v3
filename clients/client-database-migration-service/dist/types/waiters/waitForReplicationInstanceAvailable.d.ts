import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationInstancesCommandInput } from "../commands/DescribeReplicationInstancesCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until DMS replication instance is available.
 *  @deprecated Use waitUntilReplicationInstanceAvailable instead. waitForReplicationInstanceAvailable does not throw error in non-success cases.
 */
export declare const waitForReplicationInstanceAvailable: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeReplicationInstancesCommandInput) => Promise<WaiterResult>;
/**
 * Wait until DMS replication instance is available.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeReplicationInstancesCommand for polling.
 */
export declare const waitUntilReplicationInstanceAvailable: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeReplicationInstancesCommandInput) => Promise<WaiterResult>;
