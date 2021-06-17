import { GetExecutionHistoryCommandInput, GetExecutionHistoryCommandOutput } from "../commands/GetExecutionHistoryCommand";
import { SFNPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetExecutionHistory(config: SFNPaginationConfiguration, input: GetExecutionHistoryCommandInput, ...additionalArguments: any): Paginator<GetExecutionHistoryCommandOutput>;
