import { DescribeServicesCommandInput, DescribeServicesCommandOutput } from "../commands/DescribeServicesCommand";
import { PricingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeServices(config: PricingPaginationConfiguration, input: DescribeServicesCommandInput, ...additionalArguments: any): Paginator<DescribeServicesCommandOutput>;
