import { ListDetectMitigationActionsTasksCommandInput, ListDetectMitigationActionsTasksCommandOutput } from "../commands/ListDetectMitigationActionsTasksCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDetectMitigationActionsTasks(config: IoTPaginationConfiguration, input: ListDetectMitigationActionsTasksCommandInput, ...additionalArguments: any): Paginator<ListDetectMitigationActionsTasksCommandOutput>;
