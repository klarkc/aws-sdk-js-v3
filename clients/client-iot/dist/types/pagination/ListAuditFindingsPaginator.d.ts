import { ListAuditFindingsCommandInput, ListAuditFindingsCommandOutput } from "../commands/ListAuditFindingsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAuditFindings(config: IoTPaginationConfiguration, input: ListAuditFindingsCommandInput, ...additionalArguments: any): Paginator<ListAuditFindingsCommandOutput>;
