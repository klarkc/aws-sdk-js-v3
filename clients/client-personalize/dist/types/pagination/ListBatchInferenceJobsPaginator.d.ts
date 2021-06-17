import { ListBatchInferenceJobsCommandInput, ListBatchInferenceJobsCommandOutput } from "../commands/ListBatchInferenceJobsCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBatchInferenceJobs(config: PersonalizePaginationConfiguration, input: ListBatchInferenceJobsCommandInput, ...additionalArguments: any): Paginator<ListBatchInferenceJobsCommandOutput>;
