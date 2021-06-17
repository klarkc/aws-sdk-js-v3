import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDomains(config: CodeartifactPaginationConfiguration, input: ListDomainsCommandInput, ...additionalArguments: any): Paginator<ListDomainsCommandOutput>;
