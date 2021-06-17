import { ListAutoMLJobsCommandInput, ListAutoMLJobsCommandOutput } from "../commands/ListAutoMLJobsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAutoMLJobs(config: SageMakerPaginationConfiguration, input: ListAutoMLJobsCommandInput, ...additionalArguments: any): Paginator<ListAutoMLJobsCommandOutput>;
