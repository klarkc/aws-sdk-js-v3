import { OpsWorksClient } from "../OpsWorksClient";
import { DescribeInstancesCommandInput } from "../commands/DescribeInstancesCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until OpsWorks instance is registered.
 *  @deprecated Use waitUntilInstanceRegistered instead. waitForInstanceRegistered does not throw error in non-success cases.
 */
export declare const waitForInstanceRegistered: (params: WaiterConfiguration<OpsWorksClient>, input: DescribeInstancesCommandInput) => Promise<WaiterResult>;
/**
 * Wait until OpsWorks instance is registered.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeInstancesCommand for polling.
 */
export declare const waitUntilInstanceRegistered: (params: WaiterConfiguration<OpsWorksClient>, input: DescribeInstancesCommandInput) => Promise<WaiterResult>;
