import { EKSClient } from "../EKSClient";
import { DescribeClusterCommandInput } from "../commands/DescribeClusterCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilClusterActive instead. waitForClusterActive does not throw error in non-success cases.
 */
export declare const waitForClusterActive: (params: WaiterConfiguration<EKSClient>, input: DescribeClusterCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeClusterCommand for polling.
 */
export declare const waitUntilClusterActive: (params: WaiterConfiguration<EKSClient>, input: DescribeClusterCommandInput) => Promise<WaiterResult>;
