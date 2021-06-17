import { ListDataIngestionJobsCommandInput, ListDataIngestionJobsCommandOutput } from "../commands/ListDataIngestionJobsCommand";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDataIngestionJobs(config: LookoutEquipmentPaginationConfiguration, input: ListDataIngestionJobsCommandInput, ...additionalArguments: any): Paginator<ListDataIngestionJobsCommandOutput>;
