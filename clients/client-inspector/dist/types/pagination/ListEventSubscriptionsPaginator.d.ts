import { ListEventSubscriptionsCommandInput, ListEventSubscriptionsCommandOutput } from "../commands/ListEventSubscriptionsCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEventSubscriptions(config: InspectorPaginationConfiguration, input: ListEventSubscriptionsCommandInput, ...additionalArguments: any): Paginator<ListEventSubscriptionsCommandOutput>;
