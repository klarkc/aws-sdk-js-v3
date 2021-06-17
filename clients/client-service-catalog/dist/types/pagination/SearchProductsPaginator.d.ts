import { SearchProductsCommandInput, SearchProductsCommandOutput } from "../commands/SearchProductsCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchProducts(config: ServiceCatalogPaginationConfiguration, input: SearchProductsCommandInput, ...additionalArguments: any): Paginator<SearchProductsCommandOutput>;
