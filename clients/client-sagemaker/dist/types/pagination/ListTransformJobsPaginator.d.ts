import { ListTransformJobsCommandInput, ListTransformJobsCommandOutput } from "../commands/ListTransformJobsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTransformJobs(config: SageMakerPaginationConfiguration, input: ListTransformJobsCommandInput, ...additionalArguments: any): Paginator<ListTransformJobsCommandOutput>;
