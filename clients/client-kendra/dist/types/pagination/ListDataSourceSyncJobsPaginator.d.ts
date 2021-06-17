import { ListDataSourceSyncJobsCommandInput, ListDataSourceSyncJobsCommandOutput } from "../commands/ListDataSourceSyncJobsCommand";
import { KendraPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDataSourceSyncJobs(config: KendraPaginationConfiguration, input: ListDataSourceSyncJobsCommandInput, ...additionalArguments: any): Paginator<ListDataSourceSyncJobsCommandOutput>;
