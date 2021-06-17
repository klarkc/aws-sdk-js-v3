import { ListDatasetImportJobsCommandInput, ListDatasetImportJobsCommandOutput } from "../commands/ListDatasetImportJobsCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDatasetImportJobs(config: PersonalizePaginationConfiguration, input: ListDatasetImportJobsCommandInput, ...additionalArguments: any): Paginator<ListDatasetImportJobsCommandOutput>;
