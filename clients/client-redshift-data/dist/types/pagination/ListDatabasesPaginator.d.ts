import { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "../commands/ListDatabasesCommand";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDatabases(config: RedshiftDataPaginationConfiguration, input: ListDatabasesCommandInput, ...additionalArguments: any): Paginator<ListDatabasesCommandOutput>;
