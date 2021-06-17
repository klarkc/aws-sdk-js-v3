import { DescribeGlobalReplicationGroupsCommandInput, DescribeGlobalReplicationGroupsCommandOutput } from "../commands/DescribeGlobalReplicationGroupsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeGlobalReplicationGroups(config: ElastiCachePaginationConfiguration, input: DescribeGlobalReplicationGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeGlobalReplicationGroupsCommandOutput>;
