import { ListAcceptedPortfolioSharesCommandInput, ListAcceptedPortfolioSharesCommandOutput } from "../commands/ListAcceptedPortfolioSharesCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAcceptedPortfolioShares(config: ServiceCatalogPaginationConfiguration, input: ListAcceptedPortfolioSharesCommandInput, ...additionalArguments: any): Paginator<ListAcceptedPortfolioSharesCommandOutput>;
