import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "../commands/DescribeEndpointsCommand";
import { MediaConvertPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeEndpoints(config: MediaConvertPaginationConfiguration, input: DescribeEndpointsCommandInput, ...additionalArguments: any): Paginator<DescribeEndpointsCommandOutput>;
