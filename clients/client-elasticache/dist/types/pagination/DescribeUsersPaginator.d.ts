import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "../commands/DescribeUsersCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeUsers(config: ElastiCachePaginationConfiguration, input: DescribeUsersCommandInput, ...additionalArguments: any): Paginator<DescribeUsersCommandOutput>;
