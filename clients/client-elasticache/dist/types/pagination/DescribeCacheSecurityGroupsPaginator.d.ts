import { DescribeCacheSecurityGroupsCommandInput, DescribeCacheSecurityGroupsCommandOutput } from "../commands/DescribeCacheSecurityGroupsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCacheSecurityGroups(config: ElastiCachePaginationConfiguration, input: DescribeCacheSecurityGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeCacheSecurityGroupsCommandOutput>;
