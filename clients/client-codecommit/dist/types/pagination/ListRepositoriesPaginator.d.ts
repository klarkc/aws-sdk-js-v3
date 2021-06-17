import { ListRepositoriesCommandInput, ListRepositoriesCommandOutput } from "../commands/ListRepositoriesCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRepositories(config: CodeCommitPaginationConfiguration, input: ListRepositoriesCommandInput, ...additionalArguments: any): Paginator<ListRepositoriesCommandOutput>;
