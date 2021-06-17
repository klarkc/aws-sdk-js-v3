import { ListSubscriptionsByTopicCommandInput, ListSubscriptionsByTopicCommandOutput } from "../commands/ListSubscriptionsByTopicCommand";
import { SNSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSubscriptionsByTopic(config: SNSPaginationConfiguration, input: ListSubscriptionsByTopicCommandInput, ...additionalArguments: any): Paginator<ListSubscriptionsByTopicCommandOutput>;
