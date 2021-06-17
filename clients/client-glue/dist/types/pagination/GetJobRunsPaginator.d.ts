import { GetJobRunsCommandInput, GetJobRunsCommandOutput } from "../commands/GetJobRunsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetJobRuns(config: GluePaginationConfiguration, input: GetJobRunsCommandInput, ...additionalArguments: any): Paginator<GetJobRunsCommandOutput>;
