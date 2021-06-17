import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import { DataBrewPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListJobRuns(config: DataBrewPaginationConfiguration, input: ListJobRunsCommandInput, ...additionalArguments: any): Paginator<ListJobRunsCommandOutput>;
