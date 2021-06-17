import { ListEventTypesCommandInput, ListEventTypesCommandOutput } from "../commands/ListEventTypesCommand";
import { CodestarNotificationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEventTypes(config: CodestarNotificationsPaginationConfiguration, input: ListEventTypesCommandInput, ...additionalArguments: any): Paginator<ListEventTypesCommandOutput>;
