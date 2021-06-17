import { ListLaunchPathsCommandInput, ListLaunchPathsCommandOutput } from "../commands/ListLaunchPathsCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListLaunchPaths(config: ServiceCatalogPaginationConfiguration, input: ListLaunchPathsCommandInput, ...additionalArguments: any): Paginator<ListLaunchPathsCommandOutput>;
