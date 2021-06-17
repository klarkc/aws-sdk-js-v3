import { ListFirewallDomainsCommandInput, ListFirewallDomainsCommandOutput } from "../commands/ListFirewallDomainsCommand";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFirewallDomains(config: Route53ResolverPaginationConfiguration, input: ListFirewallDomainsCommandInput, ...additionalArguments: any): Paginator<ListFirewallDomainsCommandOutput>;
