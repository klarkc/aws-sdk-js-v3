import { MachineLearningClient } from "../MachineLearningClient";
import { DescribeBatchPredictionsCommandInput } from "../commands/DescribeBatchPredictionsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilBatchPredictionAvailable instead. waitForBatchPredictionAvailable does not throw error in non-success cases.
 */
export declare const waitForBatchPredictionAvailable: (params: WaiterConfiguration<MachineLearningClient>, input: DescribeBatchPredictionsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeBatchPredictionsCommand for polling.
 */
export declare const waitUntilBatchPredictionAvailable: (params: WaiterConfiguration<MachineLearningClient>, input: DescribeBatchPredictionsCommandInput) => Promise<WaiterResult>;
