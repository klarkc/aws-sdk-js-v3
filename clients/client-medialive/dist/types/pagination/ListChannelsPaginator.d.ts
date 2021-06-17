import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListChannels(config: MediaLivePaginationConfiguration, input: ListChannelsCommandInput, ...additionalArguments: any): Paginator<ListChannelsCommandOutput>;
