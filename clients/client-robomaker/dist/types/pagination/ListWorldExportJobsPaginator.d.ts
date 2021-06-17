import { ListWorldExportJobsCommandInput, ListWorldExportJobsCommandOutput } from "../commands/ListWorldExportJobsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWorldExportJobs(config: RoboMakerPaginationConfiguration, input: ListWorldExportJobsCommandInput, ...additionalArguments: any): Paginator<ListWorldExportJobsCommandOutput>;
