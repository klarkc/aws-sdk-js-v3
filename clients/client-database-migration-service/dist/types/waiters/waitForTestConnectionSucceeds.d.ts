import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DescribeConnectionsCommandInput } from "../commands/DescribeConnectionsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until testing connection succeeds.
 *  @deprecated Use waitUntilTestConnectionSucceeds instead. waitForTestConnectionSucceeds does not throw error in non-success cases.
 */
export declare const waitForTestConnectionSucceeds: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeConnectionsCommandInput) => Promise<WaiterResult>;
/**
 * Wait until testing connection succeeds.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeConnectionsCommand for polling.
 */
export declare const waitUntilTestConnectionSucceeds: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeConnectionsCommandInput) => Promise<WaiterResult>;
