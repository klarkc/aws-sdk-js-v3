import { DescribeCacheClustersCommandInput, DescribeCacheClustersCommandOutput } from "../commands/DescribeCacheClustersCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCacheClusters(config: ElastiCachePaginationConfiguration, input: DescribeCacheClustersCommandInput, ...additionalArguments: any): Paginator<DescribeCacheClustersCommandOutput>;
