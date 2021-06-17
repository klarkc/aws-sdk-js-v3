import { GetBatchPredictionJobsCommandInput, GetBatchPredictionJobsCommandOutput } from "../commands/GetBatchPredictionJobsCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetBatchPredictionJobs(config: FraudDetectorPaginationConfiguration, input: GetBatchPredictionJobsCommandInput, ...additionalArguments: any): Paginator<GetBatchPredictionJobsCommandOutput>;
