import { ListDiscoveredResourcesCommandInput, ListDiscoveredResourcesCommandOutput } from "../commands/ListDiscoveredResourcesCommand";
import { MigrationHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDiscoveredResources(config: MigrationHubPaginationConfiguration, input: ListDiscoveredResourcesCommandInput, ...additionalArguments: any): Paginator<ListDiscoveredResourcesCommandOutput>;
