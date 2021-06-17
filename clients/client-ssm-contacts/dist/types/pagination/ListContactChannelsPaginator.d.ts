import { ListContactChannelsCommandInput, ListContactChannelsCommandOutput } from "../commands/ListContactChannelsCommand";
import { SSMContactsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListContactChannels(config: SSMContactsPaginationConfiguration, input: ListContactChannelsCommandInput, ...additionalArguments: any): Paginator<ListContactChannelsCommandOutput>;
