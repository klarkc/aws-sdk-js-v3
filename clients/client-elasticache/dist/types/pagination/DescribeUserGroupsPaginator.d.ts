import { DescribeUserGroupsCommandInput, DescribeUserGroupsCommandOutput } from "../commands/DescribeUserGroupsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeUserGroups(config: ElastiCachePaginationConfiguration, input: DescribeUserGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeUserGroupsCommandOutput>;
