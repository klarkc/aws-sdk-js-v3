import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import { MediaTailorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListChannels(config: MediaTailorPaginationConfiguration, input: ListChannelsCommandInput, ...additionalArguments: any): Paginator<ListChannelsCommandOutput>;
