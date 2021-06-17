import { ListPrincipalsForPortfolioCommandInput, ListPrincipalsForPortfolioCommandOutput } from "../commands/ListPrincipalsForPortfolioCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPrincipalsForPortfolio(config: ServiceCatalogPaginationConfiguration, input: ListPrincipalsForPortfolioCommandInput, ...additionalArguments: any): Paginator<ListPrincipalsForPortfolioCommandOutput>;
