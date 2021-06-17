import { ListAuditMitigationActionsTasksCommandInput, ListAuditMitigationActionsTasksCommandOutput } from "../commands/ListAuditMitigationActionsTasksCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAuditMitigationActionsTasks(config: IoTPaginationConfiguration, input: ListAuditMitigationActionsTasksCommandInput, ...additionalArguments: any): Paginator<ListAuditMitigationActionsTasksCommandOutput>;
