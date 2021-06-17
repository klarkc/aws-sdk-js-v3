import { DescribeBatchPredictionsCommandInput, DescribeBatchPredictionsCommandOutput } from "../commands/DescribeBatchPredictionsCommand";
import { MachineLearningPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeBatchPredictions(config: MachineLearningPaginationConfiguration, input: DescribeBatchPredictionsCommandInput, ...additionalArguments: any): Paginator<DescribeBatchPredictionsCommandOutput>;
