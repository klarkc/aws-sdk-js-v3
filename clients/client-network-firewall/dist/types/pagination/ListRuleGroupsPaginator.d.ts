import { ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput } from "../commands/ListRuleGroupsCommand";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRuleGroups(config: NetworkFirewallPaginationConfiguration, input: ListRuleGroupsCommandInput, ...additionalArguments: any): Paginator<ListRuleGroupsCommandOutput>;
