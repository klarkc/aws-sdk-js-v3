import { EC2Client } from "../EC2Client";
import { DescribeInstanceStatusCommandInput } from "../commands/DescribeInstanceStatusCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilSystemStatusOk instead. waitForSystemStatusOk does not throw error in non-success cases.
 */
export declare const waitForSystemStatusOk: (params: WaiterConfiguration<EC2Client>, input: DescribeInstanceStatusCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstanceStatusCommand for polling.
 */
export declare const waitUntilSystemStatusOk: (params: WaiterConfiguration<EC2Client>, input: DescribeInstanceStatusCommandInput) => Promise<WaiterResult>;
