import { ListOpenWorkflowExecutionsCommandInput, ListOpenWorkflowExecutionsCommandOutput } from "../commands/ListOpenWorkflowExecutionsCommand";
import { SWFPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOpenWorkflowExecutions(config: SWFPaginationConfiguration, input: ListOpenWorkflowExecutionsCommandInput, ...additionalArguments: any): Paginator<ListOpenWorkflowExecutionsCommandOutput>;
