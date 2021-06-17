import { ListFirewallRuleGroupsCommandInput, ListFirewallRuleGroupsCommandOutput } from "../commands/ListFirewallRuleGroupsCommand";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFirewallRuleGroups(config: Route53ResolverPaginationConfiguration, input: ListFirewallRuleGroupsCommandInput, ...additionalArguments: any): Paginator<ListFirewallRuleGroupsCommandOutput>;
