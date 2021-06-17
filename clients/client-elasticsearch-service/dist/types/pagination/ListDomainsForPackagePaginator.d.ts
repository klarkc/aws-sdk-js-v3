import { ListDomainsForPackageCommandInput, ListDomainsForPackageCommandOutput } from "../commands/ListDomainsForPackageCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDomainsForPackage(config: ElasticsearchServicePaginationConfiguration, input: ListDomainsForPackageCommandInput, ...additionalArguments: any): Paginator<ListDomainsForPackageCommandOutput>;
