import { ListForecastExportJobsCommandInput, ListForecastExportJobsCommandOutput } from "../commands/ListForecastExportJobsCommand";
import { ForecastPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListForecastExportJobs(config: ForecastPaginationConfiguration, input: ListForecastExportJobsCommandInput, ...additionalArguments: any): Paginator<ListForecastExportJobsCommandOutput>;
