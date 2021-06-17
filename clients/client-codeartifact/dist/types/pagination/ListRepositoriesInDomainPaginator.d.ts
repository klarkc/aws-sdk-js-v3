import { ListRepositoriesInDomainCommandInput, ListRepositoriesInDomainCommandOutput } from "../commands/ListRepositoriesInDomainCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRepositoriesInDomain(config: CodeartifactPaginationConfiguration, input: ListRepositoriesInDomainCommandInput, ...additionalArguments: any): Paginator<ListRepositoriesInDomainCommandOutput>;
