import { ListImportJobsCommandInput, ListImportJobsCommandOutput } from "../commands/ListImportJobsCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListImportJobs(config: SESv2PaginationConfiguration, input: ListImportJobsCommandInput, ...additionalArguments: any): Paginator<ListImportJobsCommandOutput>;
