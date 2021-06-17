import { ListAuditSuppressionsCommandInput, ListAuditSuppressionsCommandOutput } from "../commands/ListAuditSuppressionsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAuditSuppressions(config: IoTPaginationConfiguration, input: ListAuditSuppressionsCommandInput, ...additionalArguments: any): Paginator<ListAuditSuppressionsCommandOutput>;
