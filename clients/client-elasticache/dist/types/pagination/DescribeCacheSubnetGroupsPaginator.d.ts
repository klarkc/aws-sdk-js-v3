import { DescribeCacheSubnetGroupsCommandInput, DescribeCacheSubnetGroupsCommandOutput } from "../commands/DescribeCacheSubnetGroupsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCacheSubnetGroups(config: ElastiCachePaginationConfiguration, input: DescribeCacheSubnetGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeCacheSubnetGroupsCommandOutput>;
