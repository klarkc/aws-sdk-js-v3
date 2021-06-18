import { CloudFrontClient } from "../CloudFrontClient";
import { GetStreamingDistributionCommandInput } from "../commands/GetStreamingDistributionCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a streaming distribution is deployed.
 *  @deprecated Use waitUntilStreamingDistributionDeployed instead. waitForStreamingDistributionDeployed does not throw error in non-success cases.
 */
export declare const waitForStreamingDistributionDeployed: (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetStreamingDistributionCommandInput
) => Promise<WaiterResult>;
/**
 * Wait until a streaming distribution is deployed.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetStreamingDistributionCommand for polling.
 */
export declare const waitUntilStreamingDistributionDeployed: (
  params: WaiterConfiguration<CloudFrontClient>,
  input: GetStreamingDistributionCommandInput
) => Promise<WaiterResult>;
