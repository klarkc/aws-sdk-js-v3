import { DescribePublicIpv4PoolsCommandInput, DescribePublicIpv4PoolsCommandOutput } from "../commands/DescribePublicIpv4PoolsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribePublicIpv4Pools(config: EC2PaginationConfiguration, input: DescribePublicIpv4PoolsCommandInput, ...additionalArguments: any): Paginator<DescribePublicIpv4PoolsCommandOutput>;
