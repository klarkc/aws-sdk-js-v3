import { ListPackagesForDomainCommandInput, ListPackagesForDomainCommandOutput } from "../commands/ListPackagesForDomainCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPackagesForDomain(config: ElasticsearchServicePaginationConfiguration, input: ListPackagesForDomainCommandInput, ...additionalArguments: any): Paginator<ListPackagesForDomainCommandOutput>;
