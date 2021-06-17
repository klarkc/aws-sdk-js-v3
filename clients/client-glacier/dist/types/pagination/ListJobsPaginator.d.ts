import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { GlacierPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListJobs(config: GlacierPaginationConfiguration, input: ListJobsCommandInput, ...additionalArguments: any): Paginator<ListJobsCommandOutput>;
