import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import { MediaPackagePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListChannels(config: MediaPackagePaginationConfiguration, input: ListChannelsCommandInput, ...additionalArguments: any): Paginator<ListChannelsCommandOutput>;
