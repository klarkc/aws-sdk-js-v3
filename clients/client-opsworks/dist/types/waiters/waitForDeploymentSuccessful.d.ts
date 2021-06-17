import { OpsWorksClient } from "../OpsWorksClient";
import { DescribeDeploymentsCommandInput } from "../commands/DescribeDeploymentsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a deployment has completed successfully.
 *  @deprecated Use waitUntilDeploymentSuccessful instead. waitForDeploymentSuccessful does not throw error in non-success cases.
 */
export declare const waitForDeploymentSuccessful: (params: WaiterConfiguration<OpsWorksClient>, input: DescribeDeploymentsCommandInput) => Promise<WaiterResult>;
/**
 * Wait until a deployment has completed successfully.
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeDeploymentsCommand for polling.
 */
export declare const waitUntilDeploymentSuccessful: (params: WaiterConfiguration<OpsWorksClient>, input: DescribeDeploymentsCommandInput) => Promise<WaiterResult>;
