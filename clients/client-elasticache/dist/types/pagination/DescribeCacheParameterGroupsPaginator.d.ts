import { DescribeCacheParameterGroupsCommandInput, DescribeCacheParameterGroupsCommandOutput } from "../commands/DescribeCacheParameterGroupsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCacheParameterGroups(config: ElastiCachePaginationConfiguration, input: DescribeCacheParameterGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeCacheParameterGroupsCommandOutput>;
