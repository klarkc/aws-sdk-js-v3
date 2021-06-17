import { ListPlaybackConfigurationsCommandInput, ListPlaybackConfigurationsCommandOutput } from "../commands/ListPlaybackConfigurationsCommand";
import { MediaTailorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPlaybackConfigurations(config: MediaTailorPaginationConfiguration, input: ListPlaybackConfigurationsCommandInput, ...additionalArguments: any): Paginator<ListPlaybackConfigurationsCommandOutput>;
