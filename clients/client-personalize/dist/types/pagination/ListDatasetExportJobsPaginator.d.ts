import { ListDatasetExportJobsCommandInput, ListDatasetExportJobsCommandOutput } from "../commands/ListDatasetExportJobsCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDatasetExportJobs(config: PersonalizePaginationConfiguration, input: ListDatasetExportJobsCommandInput, ...additionalArguments: any): Paginator<ListDatasetExportJobsCommandOutput>;
