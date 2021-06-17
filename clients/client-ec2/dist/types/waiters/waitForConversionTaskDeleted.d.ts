import { EC2Client } from "../EC2Client";
import { DescribeConversionTasksCommandInput } from "../commands/DescribeConversionTasksCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilConversionTaskDeleted instead. waitForConversionTaskDeleted does not throw error in non-success cases.
 */
export declare const waitForConversionTaskDeleted: (params: WaiterConfiguration<EC2Client>, input: DescribeConversionTasksCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeConversionTasksCommand for polling.
 */
export declare const waitUntilConversionTaskDeleted: (params: WaiterConfiguration<EC2Client>, input: DescribeConversionTasksCommandInput) => Promise<WaiterResult>;
