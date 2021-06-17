import { ListTopicRulesCommandInput, ListTopicRulesCommandOutput } from "../commands/ListTopicRulesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTopicRules(config: IoTPaginationConfiguration, input: ListTopicRulesCommandInput, ...additionalArguments: any): Paginator<ListTopicRulesCommandOutput>;
