import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "../commands/ListWorkflowsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWorkflows(config: GluePaginationConfiguration, input: ListWorkflowsCommandInput, ...additionalArguments: any): Paginator<ListWorkflowsCommandOutput>;
