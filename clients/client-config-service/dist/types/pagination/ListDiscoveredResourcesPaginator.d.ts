import { ListDiscoveredResourcesCommandInput, ListDiscoveredResourcesCommandOutput } from "../commands/ListDiscoveredResourcesCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDiscoveredResources(config: ConfigServicePaginationConfiguration, input: ListDiscoveredResourcesCommandInput, ...additionalArguments: any): Paginator<ListDiscoveredResourcesCommandOutput>;
