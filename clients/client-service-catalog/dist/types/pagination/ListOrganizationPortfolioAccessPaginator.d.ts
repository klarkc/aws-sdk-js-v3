import { ListOrganizationPortfolioAccessCommandInput, ListOrganizationPortfolioAccessCommandOutput } from "../commands/ListOrganizationPortfolioAccessCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOrganizationPortfolioAccess(config: ServiceCatalogPaginationConfiguration, input: ListOrganizationPortfolioAccessCommandInput, ...additionalArguments: any): Paginator<ListOrganizationPortfolioAccessCommandOutput>;
