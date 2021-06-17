import { ListNotificationsCommandInput, ListNotificationsCommandOutput } from "../commands/ListNotificationsCommand";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListNotifications(config: WellArchitectedPaginationConfiguration, input: ListNotificationsCommandInput, ...additionalArguments: any): Paginator<ListNotificationsCommandOutput>;
