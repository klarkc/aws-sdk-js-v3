import { ListPortfolioAccessCommandInput, ListPortfolioAccessCommandOutput } from "../commands/ListPortfolioAccessCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPortfolioAccess(config: ServiceCatalogPaginationConfiguration, input: ListPortfolioAccessCommandInput, ...additionalArguments: any): Paginator<ListPortfolioAccessCommandOutput>;
