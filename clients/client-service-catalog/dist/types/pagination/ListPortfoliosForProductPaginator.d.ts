import { ListPortfoliosForProductCommandInput, ListPortfoliosForProductCommandOutput } from "../commands/ListPortfoliosForProductCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPortfoliosForProduct(config: ServiceCatalogPaginationConfiguration, input: ListPortfoliosForProductCommandInput, ...additionalArguments: any): Paginator<ListPortfoliosForProductCommandOutput>;
