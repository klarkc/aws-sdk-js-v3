import { EC2Client } from "../EC2Client";
import { DescribeImagesCommandInput } from "../commands/DescribeImagesCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilImageAvailable instead. waitForImageAvailable does not throw error in non-success cases.
 */
export declare const waitForImageAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeImagesCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeImagesCommand for polling.
 */
export declare const waitUntilImageAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeImagesCommandInput) => Promise<WaiterResult>;
