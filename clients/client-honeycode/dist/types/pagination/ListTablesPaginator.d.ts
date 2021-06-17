import { ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { HoneycodePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTables(config: HoneycodePaginationConfiguration, input: ListTablesCommandInput, ...additionalArguments: any): Paginator<ListTablesCommandOutput>;
