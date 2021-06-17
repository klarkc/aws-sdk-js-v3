import { DescribeRegistriesCommandInput, DescribeRegistriesCommandOutput } from "../commands/DescribeRegistriesCommand";
import { ECRPUBLICPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeRegistries(config: ECRPUBLICPaginationConfiguration, input: DescribeRegistriesCommandInput, ...additionalArguments: any): Paginator<DescribeRegistriesCommandOutput>;
