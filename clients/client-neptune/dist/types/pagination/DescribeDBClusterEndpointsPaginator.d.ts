import { DescribeDBClusterEndpointsCommandInput, DescribeDBClusterEndpointsCommandOutput } from "../commands/DescribeDBClusterEndpointsCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBClusterEndpoints(config: NeptunePaginationConfiguration, input: DescribeDBClusterEndpointsCommandInput, ...additionalArguments: any): Paginator<DescribeDBClusterEndpointsCommandOutput>;
