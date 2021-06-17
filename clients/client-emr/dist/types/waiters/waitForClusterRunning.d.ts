import { EMRClient } from "../EMRClient";
import { DescribeClusterCommandInput } from "../commands/DescribeClusterCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilClusterRunning instead. waitForClusterRunning does not throw error in non-success cases.
 */
export declare const waitForClusterRunning: (params: WaiterConfiguration<EMRClient>, input: DescribeClusterCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeClusterCommand for polling.
 */
export declare const waitUntilClusterRunning: (params: WaiterConfiguration<EMRClient>, input: DescribeClusterCommandInput) => Promise<WaiterResult>;
