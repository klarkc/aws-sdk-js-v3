import { GetWorkflowRunsCommandInput, GetWorkflowRunsCommandOutput } from "../commands/GetWorkflowRunsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetWorkflowRuns(config: GluePaginationConfiguration, input: GetWorkflowRunsCommandInput, ...additionalArguments: any): Paginator<GetWorkflowRunsCommandOutput>;
