import { DescribePortfolioSharesCommandInput, DescribePortfolioSharesCommandOutput } from "../commands/DescribePortfolioSharesCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribePortfolioShares(config: ServiceCatalogPaginationConfiguration, input: DescribePortfolioSharesCommandInput, ...additionalArguments: any): Paginator<DescribePortfolioSharesCommandOutput>;
