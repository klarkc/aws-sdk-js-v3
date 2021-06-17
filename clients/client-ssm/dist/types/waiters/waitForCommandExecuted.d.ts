import { SSMClient } from "../SSMClient";
import { GetCommandInvocationCommandInput } from "../commands/GetCommandInvocationCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilCommandExecuted instead. waitForCommandExecuted does not throw error in non-success cases.
 */
export declare const waitForCommandExecuted: (params: WaiterConfiguration<SSMClient>, input: GetCommandInvocationCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to GetCommandInvocationCommand for polling.
 */
export declare const waitUntilCommandExecuted: (params: WaiterConfiguration<SSMClient>, input: GetCommandInvocationCommandInput) => Promise<WaiterResult>;
