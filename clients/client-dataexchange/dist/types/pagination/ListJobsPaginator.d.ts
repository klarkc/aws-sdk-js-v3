import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { DataExchangePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListJobs(config: DataExchangePaginationConfiguration, input: ListJobsCommandInput, ...additionalArguments: any): Paginator<ListJobsCommandOutput>;
