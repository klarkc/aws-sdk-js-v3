import { ListFirewallPoliciesCommandInput, ListFirewallPoliciesCommandOutput } from "../commands/ListFirewallPoliciesCommand";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFirewallPolicies(config: NetworkFirewallPaginationConfiguration, input: ListFirewallPoliciesCommandInput, ...additionalArguments: any): Paginator<ListFirewallPoliciesCommandOutput>;
