import { DescribeDBClusterEndpointsCommandInput, DescribeDBClusterEndpointsCommandOutput } from "../commands/DescribeDBClusterEndpointsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeDBClusterEndpoints(config: RDSPaginationConfiguration, input: DescribeDBClusterEndpointsCommandInput, ...additionalArguments: any): Paginator<DescribeDBClusterEndpointsCommandOutput>;
