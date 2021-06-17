import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import { ForecastPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDatasets(config: ForecastPaginationConfiguration, input: ListDatasetsCommandInput, ...additionalArguments: any): Paginator<ListDatasetsCommandOutput>;
