import { DescribeSubnetsCommandInput, DescribeSubnetsCommandOutput } from "../commands/DescribeSubnetsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeSubnets(config: EC2PaginationConfiguration, input: DescribeSubnetsCommandInput, ...additionalArguments: any): Paginator<DescribeSubnetsCommandOutput>;
