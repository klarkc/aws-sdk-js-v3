import { DescribeAddressesCommandInput, DescribeAddressesCommandOutput } from "../commands/DescribeAddressesCommand";
import { SnowballPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeAddresses(config: SnowballPaginationConfiguration, input: DescribeAddressesCommandInput, ...additionalArguments: any): Paginator<DescribeAddressesCommandOutput>;
