import { SearchTablesCommandInput, SearchTablesCommandOutput } from "../commands/SearchTablesCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchTables(config: GluePaginationConfiguration, input: SearchTablesCommandInput, ...additionalArguments: any): Paginator<SearchTablesCommandOutput>;
