import { ListSignalingChannelsCommandInput, ListSignalingChannelsCommandOutput } from "../commands/ListSignalingChannelsCommand";
import { KinesisVideoPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSignalingChannels(config: KinesisVideoPaginationConfiguration, input: ListSignalingChannelsCommandInput, ...additionalArguments: any): Paginator<ListSignalingChannelsCommandOutput>;
