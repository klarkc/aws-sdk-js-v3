import { GetAggregateDiscoveredResourceCountsCommandInput, GetAggregateDiscoveredResourceCountsCommandOutput } from "../commands/GetAggregateDiscoveredResourceCountsCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetAggregateDiscoveredResourceCounts(config: ConfigServicePaginationConfiguration, input: GetAggregateDiscoveredResourceCountsCommandInput, ...additionalArguments: any): Paginator<GetAggregateDiscoveredResourceCountsCommandOutput>;
