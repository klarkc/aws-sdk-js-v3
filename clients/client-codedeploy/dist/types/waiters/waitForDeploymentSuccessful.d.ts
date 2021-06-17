import { CodeDeployClient } from "../CodeDeployClient";
import { GetDeploymentCommandInput } from "../commands/GetDeploymentCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilDeploymentSuccessful instead. waitForDeploymentSuccessful does not throw error in non-success cases.
 */
export declare const waitForDeploymentSuccessful: (params: WaiterConfiguration<CodeDeployClient>, input: GetDeploymentCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetDeploymentCommand for polling.
 */
export declare const waitUntilDeploymentSuccessful: (params: WaiterConfiguration<CodeDeployClient>, input: GetDeploymentCommandInput) => Promise<WaiterResult>;
