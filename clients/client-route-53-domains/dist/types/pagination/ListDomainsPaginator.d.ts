import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { Route53DomainsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDomains(config: Route53DomainsPaginationConfiguration, input: ListDomainsCommandInput, ...additionalArguments: any): Paginator<ListDomainsCommandOutput>;
