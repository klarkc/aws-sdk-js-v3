import { ListFirewallRuleGroupAssociationsCommandInput, ListFirewallRuleGroupAssociationsCommandOutput } from "../commands/ListFirewallRuleGroupAssociationsCommand";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFirewallRuleGroupAssociations(config: Route53ResolverPaginationConfiguration, input: ListFirewallRuleGroupAssociationsCommandInput, ...additionalArguments: any): Paginator<ListFirewallRuleGroupAssociationsCommandOutput>;
