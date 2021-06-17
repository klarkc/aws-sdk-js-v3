import { ECRClient } from "../ECRClient";
import { GetLifecyclePolicyPreviewCommandInput } from "../commands/GetLifecyclePolicyPreviewCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Wait until a lifecycle policy preview request is complete and results can be accessed
 *  @deprecated Use waitUntilLifecyclePolicyPreviewComplete instead. waitForLifecyclePolicyPreviewComplete does not throw error in non-success cases.
 */
export declare const waitForLifecyclePolicyPreviewComplete: (params: WaiterConfiguration<ECRClient>, input: GetLifecyclePolicyPreviewCommandInput) => Promise<WaiterResult>;
/**
 * Wait until a lifecycle policy preview request is complete and results can be accessed
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetLifecyclePolicyPreviewCommand for polling.
 */
export declare const waitUntilLifecyclePolicyPreviewComplete: (params: WaiterConfiguration<ECRClient>, input: GetLifecyclePolicyPreviewCommandInput) => Promise<WaiterResult>;
