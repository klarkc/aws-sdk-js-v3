import { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "../commands/ListDatabasesCommand";
import { TimestreamWritePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDatabases(config: TimestreamWritePaginationConfiguration, input: ListDatabasesCommandInput, ...additionalArguments: any): Paginator<ListDatabasesCommandOutput>;
