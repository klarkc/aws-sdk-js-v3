import { GetWorkflowExecutionHistoryCommandInput, GetWorkflowExecutionHistoryCommandOutput } from "../commands/GetWorkflowExecutionHistoryCommand";
import { SWFPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetWorkflowExecutionHistory(config: SWFPaginationConfiguration, input: GetWorkflowExecutionHistoryCommandInput, ...additionalArguments: any): Paginator<GetWorkflowExecutionHistoryCommandOutput>;
