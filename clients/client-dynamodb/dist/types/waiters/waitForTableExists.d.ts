import { DynamoDBClient } from "../DynamoDBClient";
import { DescribeTableCommandInput } from "../commands/DescribeTableCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilTableExists instead. waitForTableExists does not throw error in non-success cases.
 */
export declare const waitForTableExists: (params: WaiterConfiguration<DynamoDBClient>, input: DescribeTableCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTableCommand for polling.
 */
export declare const waitUntilTableExists: (params: WaiterConfiguration<DynamoDBClient>, input: DescribeTableCommandInput) => Promise<WaiterResult>;
