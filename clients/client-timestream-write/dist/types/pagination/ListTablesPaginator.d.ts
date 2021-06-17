import { ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { TimestreamWritePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTables(config: TimestreamWritePaginationConfiguration, input: ListTablesCommandInput, ...additionalArguments: any): Paginator<ListTablesCommandOutput>;
