import { GetDiscoveredResourceCountsCommandInput, GetDiscoveredResourceCountsCommandOutput } from "../commands/GetDiscoveredResourceCountsCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetDiscoveredResourceCounts(config: ConfigServicePaginationConfiguration, input: GetDiscoveredResourceCountsCommandInput, ...additionalArguments: any): Paginator<GetDiscoveredResourceCountsCommandOutput>;
