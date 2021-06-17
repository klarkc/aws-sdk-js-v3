import { ListServiceActionsCommandInput, ListServiceActionsCommandOutput } from "../commands/ListServiceActionsCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListServiceActions(config: ServiceCatalogPaginationConfiguration, input: ListServiceActionsCommandInput, ...additionalArguments: any): Paginator<ListServiceActionsCommandOutput>;
