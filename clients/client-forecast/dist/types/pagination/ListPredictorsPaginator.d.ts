import { ListPredictorsCommandInput, ListPredictorsCommandOutput } from "../commands/ListPredictorsCommand";
import { ForecastPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPredictors(config: ForecastPaginationConfiguration, input: ListPredictorsCommandInput, ...additionalArguments: any): Paginator<ListPredictorsCommandOutput>;
