import { ListPortfoliosCommandInput, ListPortfoliosCommandOutput } from "../commands/ListPortfoliosCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPortfolios(config: ServiceCatalogPaginationConfiguration, input: ListPortfoliosCommandInput, ...additionalArguments: any): Paginator<ListPortfoliosCommandOutput>;
