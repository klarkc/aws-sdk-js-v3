import { ListBudgetsForResourceCommandInput, ListBudgetsForResourceCommandOutput } from "../commands/ListBudgetsForResourceCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBudgetsForResource(config: ServiceCatalogPaginationConfiguration, input: ListBudgetsForResourceCommandInput, ...additionalArguments: any): Paginator<ListBudgetsForResourceCommandOutput>;
