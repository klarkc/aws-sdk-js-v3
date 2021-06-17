import { DescribeReservedCacheNodesCommandInput, DescribeReservedCacheNodesCommandOutput } from "../commands/DescribeReservedCacheNodesCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReservedCacheNodes(config: ElastiCachePaginationConfiguration, input: DescribeReservedCacheNodesCommandInput, ...additionalArguments: any): Paginator<DescribeReservedCacheNodesCommandOutput>;
