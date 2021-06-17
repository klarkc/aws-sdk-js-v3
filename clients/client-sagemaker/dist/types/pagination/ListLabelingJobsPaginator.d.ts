import { ListLabelingJobsCommandInput, ListLabelingJobsCommandOutput } from "../commands/ListLabelingJobsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListLabelingJobs(config: SageMakerPaginationConfiguration, input: ListLabelingJobsCommandInput, ...additionalArguments: any): Paginator<ListLabelingJobsCommandOutput>;
