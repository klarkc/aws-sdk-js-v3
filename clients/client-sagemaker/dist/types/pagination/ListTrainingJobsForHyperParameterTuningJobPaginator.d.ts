import { ListTrainingJobsForHyperParameterTuningJobCommandInput, ListTrainingJobsForHyperParameterTuningJobCommandOutput } from "../commands/ListTrainingJobsForHyperParameterTuningJobCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTrainingJobsForHyperParameterTuningJob(config: SageMakerPaginationConfiguration, input: ListTrainingJobsForHyperParameterTuningJobCommandInput, ...additionalArguments: any): Paginator<ListTrainingJobsForHyperParameterTuningJobCommandOutput>;
