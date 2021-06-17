import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import { EMRContainersPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListJobRuns(config: EMRContainersPaginationConfiguration, input: ListJobRunsCommandInput, ...additionalArguments: any): Paginator<ListJobRunsCommandOutput>;
