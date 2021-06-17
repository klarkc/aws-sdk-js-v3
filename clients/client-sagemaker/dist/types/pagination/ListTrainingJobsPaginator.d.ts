import { ListTrainingJobsCommandInput, ListTrainingJobsCommandOutput } from "../commands/ListTrainingJobsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTrainingJobs(config: SageMakerPaginationConfiguration, input: ListTrainingJobsCommandInput, ...additionalArguments: any): Paginator<ListTrainingJobsCommandOutput>;
