import { ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTables(config: RedshiftDataPaginationConfiguration, input: ListTablesCommandInput, ...additionalArguments: any): Paginator<ListTablesCommandOutput>;
