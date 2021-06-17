import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { S3ControlPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListJobs(config: S3ControlPaginationConfiguration, input: ListJobsCommandInput, ...additionalArguments: any): Paginator<ListJobsCommandOutput>;
