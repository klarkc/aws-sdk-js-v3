import { ListHostsCommandInput, ListHostsCommandOutput } from "../commands/ListHostsCommand";
import { CodeStarConnectionsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListHosts(config: CodeStarConnectionsPaginationConfiguration, input: ListHostsCommandInput, ...additionalArguments: any): Paginator<ListHostsCommandOutput>;
