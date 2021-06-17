import { GetDatabasesCommandInput, GetDatabasesCommandOutput } from "../commands/GetDatabasesCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetDatabases(config: GluePaginationConfiguration, input: GetDatabasesCommandInput, ...additionalArguments: any): Paginator<GetDatabasesCommandOutput>;
