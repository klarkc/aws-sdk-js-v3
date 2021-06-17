import { ListPredictorBacktestExportJobsCommandInput, ListPredictorBacktestExportJobsCommandOutput } from "../commands/ListPredictorBacktestExportJobsCommand";
import { ForecastPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPredictorBacktestExportJobs(config: ForecastPaginationConfiguration, input: ListPredictorBacktestExportJobsCommandInput, ...additionalArguments: any): Paginator<ListPredictorBacktestExportJobsCommandOutput>;
