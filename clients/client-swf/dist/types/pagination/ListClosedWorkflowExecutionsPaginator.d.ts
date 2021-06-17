import { ListClosedWorkflowExecutionsCommandInput, ListClosedWorkflowExecutionsCommandOutput } from "../commands/ListClosedWorkflowExecutionsCommand";
import { SWFPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListClosedWorkflowExecutions(config: SWFPaginationConfiguration, input: ListClosedWorkflowExecutionsCommandInput, ...additionalArguments: any): Paginator<ListClosedWorkflowExecutionsCommandOutput>;
