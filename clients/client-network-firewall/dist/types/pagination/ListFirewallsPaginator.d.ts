import { ListFirewallsCommandInput, ListFirewallsCommandOutput } from "../commands/ListFirewallsCommand";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFirewalls(config: NetworkFirewallPaginationConfiguration, input: ListFirewallsCommandInput, ...additionalArguments: any): Paginator<ListFirewallsCommandOutput>;
