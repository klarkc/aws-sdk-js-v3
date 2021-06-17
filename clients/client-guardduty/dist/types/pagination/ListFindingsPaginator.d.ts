import { ListFindingsCommandInput, ListFindingsCommandOutput } from "../commands/ListFindingsCommand";
import { GuardDutyPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFindings(config: GuardDutyPaginationConfiguration, input: ListFindingsCommandInput, ...additionalArguments: any): Paginator<ListFindingsCommandOutput>;
