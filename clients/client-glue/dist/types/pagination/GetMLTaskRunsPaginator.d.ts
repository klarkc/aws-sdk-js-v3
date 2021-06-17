import { GetMLTaskRunsCommandInput, GetMLTaskRunsCommandOutput } from "../commands/GetMLTaskRunsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetMLTaskRuns(config: GluePaginationConfiguration, input: GetMLTaskRunsCommandInput, ...additionalArguments: any): Paginator<GetMLTaskRunsCommandOutput>;
