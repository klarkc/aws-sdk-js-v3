import { ListApplicationDependenciesCommandInput, ListApplicationDependenciesCommandOutput } from "../commands/ListApplicationDependenciesCommand";
import { ServerlessApplicationRepositoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListApplicationDependencies(config: ServerlessApplicationRepositoryPaginationConfiguration, input: ListApplicationDependenciesCommandInput, ...additionalArguments: any): Paginator<ListApplicationDependenciesCommandOutput>;
