import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { WorkLinkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDomains(config: WorkLinkPaginationConfiguration, input: ListDomainsCommandInput, ...additionalArguments: any): Paginator<ListDomainsCommandOutput>;
