import { DescribeDBProxiesCommandInput, DescribeDBProxiesCommandOutput } from "../commands/DescribeDBProxiesCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBProxies(config: RDSPaginationConfiguration, input: DescribeDBProxiesCommandInput, ...additionalArguments: any): Paginator<DescribeDBProxiesCommandOutput>;
