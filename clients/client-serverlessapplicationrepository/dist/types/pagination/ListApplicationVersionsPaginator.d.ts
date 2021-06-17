import { ListApplicationVersionsCommandInput, ListApplicationVersionsCommandOutput } from "../commands/ListApplicationVersionsCommand";
import { ServerlessApplicationRepositoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListApplicationVersions(config: ServerlessApplicationRepositoryPaginationConfiguration, input: ListApplicationVersionsCommandInput, ...additionalArguments: any): Paginator<ListApplicationVersionsCommandOutput>;
