import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { SnowballPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListJobs(config: SnowballPaginationConfiguration, input: ListJobsCommandInput, ...additionalArguments: any): Paginator<ListJobsCommandOutput>;
