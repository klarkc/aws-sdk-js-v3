import { ListMailboxExportJobsCommandInput, ListMailboxExportJobsCommandOutput } from "../commands/ListMailboxExportJobsCommand";
import { WorkMailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMailboxExportJobs(config: WorkMailPaginationConfiguration, input: ListMailboxExportJobsCommandInput, ...additionalArguments: any): Paginator<ListMailboxExportJobsCommandOutput>;
