import { ListWorkflowTypesCommandInput, ListWorkflowTypesCommandOutput } from "../commands/ListWorkflowTypesCommand";
import { SWFPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWorkflowTypes(config: SWFPaginationConfiguration, input: ListWorkflowTypesCommandInput, ...additionalArguments: any): Paginator<ListWorkflowTypesCommandOutput>;
