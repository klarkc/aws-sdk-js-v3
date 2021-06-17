import { EMRClient } from "../EMRClient";
import { DescribeStepCommandInput } from "../commands/DescribeStepCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilStepComplete instead. waitForStepComplete does not throw error in non-success cases.
 */
export declare const waitForStepComplete: (params: WaiterConfiguration<EMRClient>, input: DescribeStepCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStepCommand for polling.
 */
export declare const waitUntilStepComplete: (params: WaiterConfiguration<EMRClient>, input: DescribeStepCommandInput) => Promise<WaiterResult>;
