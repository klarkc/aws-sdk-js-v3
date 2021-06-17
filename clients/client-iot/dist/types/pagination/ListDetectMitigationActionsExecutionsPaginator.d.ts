import { ListDetectMitigationActionsExecutionsCommandInput, ListDetectMitigationActionsExecutionsCommandOutput } from "../commands/ListDetectMitigationActionsExecutionsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDetectMitigationActionsExecutions(config: IoTPaginationConfiguration, input: ListDetectMitigationActionsExecutionsCommandInput, ...additionalArguments: any): Paginator<ListDetectMitigationActionsExecutionsCommandOutput>;
