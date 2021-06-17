import { DescribeProductsCommandInput, DescribeProductsCommandOutput } from "../commands/DescribeProductsCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeProducts(config: SecurityHubPaginationConfiguration, input: DescribeProductsCommandInput, ...additionalArguments: any): Paginator<DescribeProductsCommandOutput>;
