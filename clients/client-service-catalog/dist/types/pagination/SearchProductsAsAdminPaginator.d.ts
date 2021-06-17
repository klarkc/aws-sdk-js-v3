import { SearchProductsAsAdminCommandInput, SearchProductsAsAdminCommandOutput } from "../commands/SearchProductsAsAdminCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchProductsAsAdmin(config: ServiceCatalogPaginationConfiguration, input: SearchProductsAsAdminCommandInput, ...additionalArguments: any): Paginator<SearchProductsAsAdminCommandOutput>;
