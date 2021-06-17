import { ListActionsCommandInput, ListActionsCommandOutput } from "../commands/ListActionsCommand";
import { FisPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListActions(config: FisPaginationConfiguration, input: ListActionsCommandInput, ...additionalArguments: any): Paginator<ListActionsCommandOutput>;
