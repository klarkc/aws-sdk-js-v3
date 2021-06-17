import { DescribeReservedCacheNodesOfferingsCommandInput, DescribeReservedCacheNodesOfferingsCommandOutput } from "../commands/DescribeReservedCacheNodesOfferingsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeReservedCacheNodesOfferings(config: ElastiCachePaginationConfiguration, input: DescribeReservedCacheNodesOfferingsCommandInput, ...additionalArguments: any): Paginator<DescribeReservedCacheNodesOfferingsCommandOutput>;
