import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DescribeEndpointsCommandInput } from "../commands/DescribeEndpointsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until testing endpoint is deleted.
 *  @deprecated Use waitUntilEndpointDeleted instead. waitForEndpointDeleted does not throw error in non-success cases.
 */
export declare const waitForEndpointDeleted: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeEndpointsCommandInput) => Promise<WaiterResult>;
/**
 * Wait until testing endpoint is deleted.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeEndpointsCommand for polling.
 */
export declare const waitUntilEndpointDeleted: (params: WaiterConfiguration<DatabaseMigrationServiceClient>, input: DescribeEndpointsCommandInput) => Promise<WaiterResult>;
