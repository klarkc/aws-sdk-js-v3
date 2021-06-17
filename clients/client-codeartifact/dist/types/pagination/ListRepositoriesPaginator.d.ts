import { ListRepositoriesCommandInput, ListRepositoriesCommandOutput } from "../commands/ListRepositoriesCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRepositories(config: CodeartifactPaginationConfiguration, input: ListRepositoriesCommandInput, ...additionalArguments: any): Paginator<ListRepositoriesCommandOutput>;
