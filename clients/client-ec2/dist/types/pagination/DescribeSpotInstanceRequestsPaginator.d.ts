import { DescribeSpotInstanceRequestsCommandInput, DescribeSpotInstanceRequestsCommandOutput } from "../commands/DescribeSpotInstanceRequestsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeSpotInstanceRequests(config: EC2PaginationConfiguration, input: DescribeSpotInstanceRequestsCommandInput, ...additionalArguments: any): Paginator<DescribeSpotInstanceRequestsCommandOutput>;
