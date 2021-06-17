import { GetProductsCommandInput, GetProductsCommandOutput } from "../commands/GetProductsCommand";
import { PricingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetProducts(config: PricingPaginationConfiguration, input: GetProductsCommandInput, ...additionalArguments: any): Paginator<GetProductsCommandOutput>;
