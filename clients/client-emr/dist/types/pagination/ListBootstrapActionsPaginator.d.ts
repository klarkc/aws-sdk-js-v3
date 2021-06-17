import { ListBootstrapActionsCommandInput, ListBootstrapActionsCommandOutput } from "../commands/ListBootstrapActionsCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBootstrapActions(config: EMRPaginationConfiguration, input: ListBootstrapActionsCommandInput, ...additionalArguments: any): Paginator<ListBootstrapActionsCommandOutput>;
