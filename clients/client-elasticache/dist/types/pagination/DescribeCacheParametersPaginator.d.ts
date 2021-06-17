import { DescribeCacheParametersCommandInput, DescribeCacheParametersCommandOutput } from "../commands/DescribeCacheParametersCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeCacheParameters(config: ElastiCachePaginationConfiguration, input: DescribeCacheParametersCommandInput, ...additionalArguments: any): Paginator<DescribeCacheParametersCommandOutput>;
