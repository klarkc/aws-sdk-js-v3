import { GetTablesCommandInput, GetTablesCommandOutput } from "../commands/GetTablesCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetTables(config: GluePaginationConfiguration, input: GetTablesCommandInput, ...additionalArguments: any): Paginator<GetTablesCommandOutput>;
