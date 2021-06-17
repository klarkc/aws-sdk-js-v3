import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import { IoTAnalyticsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListChannels(config: IoTAnalyticsPaginationConfiguration, input: ListChannelsCommandInput, ...additionalArguments: any): Paginator<ListChannelsCommandOutput>;
