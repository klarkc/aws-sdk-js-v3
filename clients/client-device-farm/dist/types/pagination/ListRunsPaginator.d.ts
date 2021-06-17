import { ListRunsCommandInput, ListRunsCommandOutput } from "../commands/ListRunsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRuns(config: DeviceFarmPaginationConfiguration, input: ListRunsCommandInput, ...additionalArguments: any): Paginator<ListRunsCommandOutput>;
