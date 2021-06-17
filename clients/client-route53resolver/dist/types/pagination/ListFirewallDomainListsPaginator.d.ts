import { ListFirewallDomainListsCommandInput, ListFirewallDomainListsCommandOutput } from "../commands/ListFirewallDomainListsCommand";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFirewallDomainLists(config: Route53ResolverPaginationConfiguration, input: ListFirewallDomainListsCommandInput, ...additionalArguments: any): Paginator<ListFirewallDomainListsCommandOutput>;
