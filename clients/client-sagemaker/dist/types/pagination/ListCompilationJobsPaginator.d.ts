import { ListCompilationJobsCommandInput, ListCompilationJobsCommandOutput } from "../commands/ListCompilationJobsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCompilationJobs(config: SageMakerPaginationConfiguration, input: ListCompilationJobsCommandInput, ...additionalArguments: any): Paginator<ListCompilationJobsCommandOutput>;
