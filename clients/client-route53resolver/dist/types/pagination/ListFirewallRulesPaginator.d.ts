import { ListFirewallRulesCommandInput, ListFirewallRulesCommandOutput } from "../commands/ListFirewallRulesCommand";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFirewallRules(config: Route53ResolverPaginationConfiguration, input: ListFirewallRulesCommandInput, ...additionalArguments: any): Paginator<ListFirewallRulesCommandOutput>;
