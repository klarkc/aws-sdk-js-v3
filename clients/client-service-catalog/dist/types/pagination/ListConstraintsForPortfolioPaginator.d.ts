import { ListConstraintsForPortfolioCommandInput, ListConstraintsForPortfolioCommandOutput } from "../commands/ListConstraintsForPortfolioCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListConstraintsForPortfolio(config: ServiceCatalogPaginationConfiguration, input: ListConstraintsForPortfolioCommandInput, ...additionalArguments: any): Paginator<ListConstraintsForPortfolioCommandOutput>;
