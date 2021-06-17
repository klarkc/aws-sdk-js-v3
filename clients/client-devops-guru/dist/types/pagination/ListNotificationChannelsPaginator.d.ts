import { ListNotificationChannelsCommandInput, ListNotificationChannelsCommandOutput } from "../commands/ListNotificationChannelsCommand";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListNotificationChannels(config: DevOpsGuruPaginationConfiguration, input: ListNotificationChannelsCommandInput, ...additionalArguments: any): Paginator<ListNotificationChannelsCommandOutput>;
