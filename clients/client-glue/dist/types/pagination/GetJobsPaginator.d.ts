import { GetJobsCommandInput, GetJobsCommandOutput } from "../commands/GetJobsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetJobs(config: GluePaginationConfiguration, input: GetJobsCommandInput, ...additionalArguments: any): Paginator<GetJobsCommandOutput>;
