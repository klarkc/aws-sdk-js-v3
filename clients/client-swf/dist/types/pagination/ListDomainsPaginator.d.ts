import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { SWFPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDomains(config: SWFPaginationConfiguration, input: ListDomainsCommandInput, ...additionalArguments: any): Paginator<ListDomainsCommandOutput>;
