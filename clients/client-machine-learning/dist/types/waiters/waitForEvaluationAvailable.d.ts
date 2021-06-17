import { MachineLearningClient } from "../MachineLearningClient";
import { DescribeEvaluationsCommandInput } from "../commands/DescribeEvaluationsCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilEvaluationAvailable instead. waitForEvaluationAvailable does not throw error in non-success cases.
 */
export declare const waitForEvaluationAvailable: (params: WaiterConfiguration<MachineLearningClient>, input: DescribeEvaluationsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeEvaluationsCommand for polling.
 */
export declare const waitUntilEvaluationAvailable: (params: WaiterConfiguration<MachineLearningClient>, input: DescribeEvaluationsCommandInput) => Promise<WaiterResult>;
