import { ListFirewallConfigsCommandInput, ListFirewallConfigsCommandOutput } from "../commands/ListFirewallConfigsCommand";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFirewallConfigs(config: Route53ResolverPaginationConfiguration, input: ListFirewallConfigsCommandInput, ...additionalArguments: any): Paginator<ListFirewallConfigsCommandOutput>;
