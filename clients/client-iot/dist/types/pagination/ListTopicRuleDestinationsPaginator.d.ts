import { ListTopicRuleDestinationsCommandInput, ListTopicRuleDestinationsCommandOutput } from "../commands/ListTopicRuleDestinationsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTopicRuleDestinations(config: IoTPaginationConfiguration, input: ListTopicRuleDestinationsCommandInput, ...additionalArguments: any): Paginator<ListTopicRuleDestinationsCommandOutput>;
