import { KinesisClient } from "../KinesisClient";
import { DescribeStreamCommandInput } from "../commands/DescribeStreamCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilStreamExists instead. waitForStreamExists does not throw error in non-success cases.
 */
export declare const waitForStreamExists: (params: WaiterConfiguration<KinesisClient>, input: DescribeStreamCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStreamCommand for polling.
 */
export declare const waitUntilStreamExists: (params: WaiterConfiguration<KinesisClient>, input: DescribeStreamCommandInput) => Promise<WaiterResult>;
