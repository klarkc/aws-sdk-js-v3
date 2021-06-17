import { ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput } from "../commands/ListSubscriptionsCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSubscriptions(config: SNSPaginationConfiguration, input: ListSubscriptionsCommandInput, ...additionalArguments: any): Paginator<ListSubscriptionsCommandOutput>;
