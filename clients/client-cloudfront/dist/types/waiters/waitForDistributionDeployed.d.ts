import { CloudFrontClient } from "../CloudFrontClient";
import { GetDistributionCommandInput } from "../commands/GetDistributionCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a distribution is deployed.
 *  @deprecated Use waitUntilDistributionDeployed instead. waitForDistributionDeployed does not throw error in non-success cases.
 */
export declare const waitForDistributionDeployed: (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetDistributionCommandInput
) => Promise<WaiterResult>;
/**
 * Wait until a distribution is deployed.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetDistributionCommand for polling.
 */
export declare const waitUntilDistributionDeployed: (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetDistributionCommandInput
) => Promise<WaiterResult>;
