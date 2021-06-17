import { MachineLearningClient } from "../MachineLearningClient";
import { DescribeMLModelsCommandInput } from "../commands/DescribeMLModelsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilMLModelAvailable instead. waitForMLModelAvailable does not throw error in non-success cases.
 */
export declare const waitForMLModelAvailable: (params: WaiterConfiguration<MachineLearningClient>, input: DescribeMLModelsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeMLModelsCommand for polling.
 */
export declare const waitUntilMLModelAvailable: (params: WaiterConfiguration<MachineLearningClient>, input: DescribeMLModelsCommandInput) => Promise<WaiterResult>;
