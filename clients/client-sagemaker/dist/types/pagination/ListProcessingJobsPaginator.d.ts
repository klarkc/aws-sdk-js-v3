import { ListProcessingJobsCommandInput, ListProcessingJobsCommandOutput } from "../commands/ListProcessingJobsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListProcessingJobs(config: SageMakerPaginationConfiguration, input: ListProcessingJobsCommandInput, ...additionalArguments: any): Paginator<ListProcessingJobsCommandOutput>;
