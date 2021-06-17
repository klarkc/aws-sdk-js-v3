import { EKSClient } from "../EKSClient";
import { DescribeClusterCommandInput } from "../commands/DescribeClusterCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilClusterDeleted instead. waitForClusterDeleted does not throw error in non-success cases.
 */
export declare const waitForClusterDeleted: (params: WaiterConfiguration<EKSClient>, input: DescribeClusterCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeClusterCommand for polling.
 */
export declare const waitUntilClusterDeleted: (params: WaiterConfiguration<EKSClient>, input: DescribeClusterCommandInput) => Promise<WaiterResult>;
