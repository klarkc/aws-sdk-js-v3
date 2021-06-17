import { EC2Client } from "../EC2Client";
import { DescribeVpcsCommandInput } from "../commands/DescribeVpcsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilVpcAvailable instead. waitForVpcAvailable does not throw error in non-success cases.
 */
export declare const waitForVpcAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeVpcsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeVpcsCommand for polling.
 */
export declare const waitUntilVpcAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeVpcsCommandInput) => Promise<WaiterResult>;
