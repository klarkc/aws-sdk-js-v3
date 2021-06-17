import { ListAuditMitigationActionsExecutionsCommandInput, ListAuditMitigationActionsExecutionsCommandOutput } from "../commands/ListAuditMitigationActionsExecutionsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAuditMitigationActionsExecutions(config: IoTPaginationConfiguration, input: ListAuditMitigationActionsExecutionsCommandInput, ...additionalArguments: any): Paginator<ListAuditMitigationActionsExecutionsCommandOutput>;
