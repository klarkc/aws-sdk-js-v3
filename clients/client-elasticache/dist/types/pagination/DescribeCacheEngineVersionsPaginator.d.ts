import { DescribeCacheEngineVersionsCommandInput, DescribeCacheEngineVersionsCommandOutput } from "../commands/DescribeCacheEngineVersionsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCacheEngineVersions(config: ElastiCachePaginationConfiguration, input: DescribeCacheEngineVersionsCommandInput, ...additionalArguments: any): Paginator<DescribeCacheEngineVersionsCommandOutput>;
