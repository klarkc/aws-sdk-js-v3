import { ListAggregateDiscoveredResourcesCommandInput, ListAggregateDiscoveredResourcesCommandOutput } from "../commands/ListAggregateDiscoveredResourcesCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAggregateDiscoveredResources(config: ConfigServicePaginationConfiguration, input: ListAggregateDiscoveredResourcesCommandInput, ...additionalArguments: any): Paginator<ListAggregateDiscoveredResourcesCommandOutput>;
