import { ListAuditTasksCommandInput, ListAuditTasksCommandOutput } from "../commands/ListAuditTasksCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAuditTasks(config: IoTPaginationConfiguration, input: ListAuditTasksCommandInput, ...additionalArguments: any): Paginator<ListAuditTasksCommandOutput>;
