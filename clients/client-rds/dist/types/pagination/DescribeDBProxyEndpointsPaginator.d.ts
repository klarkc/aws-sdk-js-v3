import { DescribeDBProxyEndpointsCommandInput, DescribeDBProxyEndpointsCommandOutput } from "../commands/DescribeDBProxyEndpointsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBProxyEndpoints(config: RDSPaginationConfiguration, input: DescribeDBProxyEndpointsCommandInput, ...additionalArguments: any): Paginator<DescribeDBProxyEndpointsCommandOutput>;
