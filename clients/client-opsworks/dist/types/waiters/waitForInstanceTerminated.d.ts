import { OpsWorksClient } from "../OpsWorksClient";
import { DescribeInstancesCommandInput } from "../commands/DescribeInstancesCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until OpsWorks instance is terminated.
 *  @deprecated Use waitUntilInstanceTerminated instead. waitForInstanceTerminated does not throw error in non-success cases.
 */
export declare const waitForInstanceTerminated: (params: WaiterConfiguration<OpsWorksClient>, input: DescribeInstancesCommandInput) => Promise<WaiterResult>;
/**
 * Wait until OpsWorks instance is terminated.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstancesCommand for polling.
 */
export declare const waitUntilInstanceTerminated: (params: WaiterConfiguration<OpsWorksClient>, input: DescribeInstancesCommandInput) => Promise<WaiterResult>;
