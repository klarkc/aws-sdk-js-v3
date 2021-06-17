import { DescribeReplicationGroupsCommandInput, DescribeReplicationGroupsCommandOutput } from "../commands/DescribeReplicationGroupsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReplicationGroups(config: ElastiCachePaginationConfiguration, input: DescribeReplicationGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeReplicationGroupsCommandOutput>;
