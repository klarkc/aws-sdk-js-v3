import { LambdaClient } from "../LambdaClient";
import { GetFunctionConfigurationCommandInput } from "../commands/GetFunctionConfigurationCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 * Waits for the function's LastUpdateStatus to be Successful.
 *  @deprecated Use waitUntilFunctionUpdated instead. waitForFunctionUpdated does not throw error in non-success cases.
 */
export declare const waitForFunctionUpdated: (params: WaiterConfiguration<LambdaClient>, input: GetFunctionConfigurationCommandInput) => Promise<WaiterResult>;
/**
 * Waits for the function's LastUpdateStatus to be Successful.
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetFunctionConfigurationCommand for polling.
 */
export declare const waitUntilFunctionUpdated: (params: WaiterConfiguration<LambdaClient>, input: GetFunctionConfigurationCommandInput) => Promise<WaiterResult>;
