import { ListDiscoverersCommandInput, ListDiscoverersCommandOutput } from "../commands/ListDiscoverersCommand";
import { SchemasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDiscoverers(config: SchemasPaginationConfiguration, input: ListDiscoverersCommandInput, ...additionalArguments: any): Paginator<ListDiscoverersCommandOutput>;
