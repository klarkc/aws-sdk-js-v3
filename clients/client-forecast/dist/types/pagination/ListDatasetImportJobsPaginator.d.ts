import { ListDatasetImportJobsCommandInput, ListDatasetImportJobsCommandOutput } from "../commands/ListDatasetImportJobsCommand";
import { ForecastPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDatasetImportJobs(config: ForecastPaginationConfiguration, input: ListDatasetImportJobsCommandInput, ...additionalArguments: any): Paginator<ListDatasetImportJobsCommandOutput>;
