import { ListEdgePackagingJobsCommandInput, ListEdgePackagingJobsCommandOutput } from "../commands/ListEdgePackagingJobsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEdgePackagingJobs(config: SageMakerPaginationConfiguration, input: ListEdgePackagingJobsCommandInput, ...additionalArguments: any): Paginator<ListEdgePackagingJobsCommandOutput>;
