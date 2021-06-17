import { ListForecastsCommandInput, ListForecastsCommandOutput } from "../commands/ListForecastsCommand";
import { ForecastPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListForecasts(config: ForecastPaginationConfiguration, input: ListForecastsCommandInput, ...additionalArguments: any): Paginator<ListForecastsCommandOutput>;
