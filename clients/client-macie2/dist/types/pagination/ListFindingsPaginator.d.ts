import { ListFindingsCommandInput, ListFindingsCommandOutput } from "../commands/ListFindingsCommand";
import { Macie2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFindings(config: Macie2PaginationConfiguration, input: ListFindingsCommandInput, ...additionalArguments: any): Paginator<ListFindingsCommandOutput>;
