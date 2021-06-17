import { QueryTableRowsCommandInput, QueryTableRowsCommandOutput } from "../commands/QueryTableRowsCommand";
import { HoneycodePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateQueryTableRows(config: HoneycodePaginationConfiguration, input: QueryTableRowsCommandInput, ...additionalArguments: any): Paginator<QueryTableRowsCommandOutput>;
