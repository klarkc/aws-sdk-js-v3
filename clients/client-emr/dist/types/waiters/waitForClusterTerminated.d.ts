import { EMRClient } from "../EMRClient";
import { DescribeClusterCommandInput } from "../commands/DescribeClusterCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilClusterTerminated instead. waitForClusterTerminated does not throw error in non-success cases.
 */
export declare const waitForClusterTerminated: (params: WaiterConfiguration<EMRClient>, input: DescribeClusterCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeClusterCommand for polling.
 */
export declare const waitUntilClusterTerminated: (params: WaiterConfiguration<EMRClient>, input: DescribeClusterCommandInput) => Promise<WaiterResult>;
