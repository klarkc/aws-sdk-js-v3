import { ListActionsCommandInput, ListActionsCommandOutput } from "../commands/ListActionsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListActions(config: SageMakerPaginationConfiguration, input: ListActionsCommandInput, ...additionalArguments: any): Paginator<ListActionsCommandOutput>;
