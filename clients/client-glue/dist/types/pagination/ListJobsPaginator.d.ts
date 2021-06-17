import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListJobs(config: GluePaginationConfiguration, input: ListJobsCommandInput, ...additionalArguments: any): Paginator<ListJobsCommandOutput>;
