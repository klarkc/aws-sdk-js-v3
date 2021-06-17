import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import { DataBrewPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDatasets(config: DataBrewPaginationConfiguration, input: ListDatasetsCommandInput, ...additionalArguments: any): Paginator<ListDatasetsCommandOutput>;
