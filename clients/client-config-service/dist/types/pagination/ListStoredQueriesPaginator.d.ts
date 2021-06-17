import { ListStoredQueriesCommandInput, ListStoredQueriesCommandOutput } from "../commands/ListStoredQueriesCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListStoredQueries(config: ConfigServicePaginationConfiguration, input: ListStoredQueriesCommandInput, ...additionalArguments: any): Paginator<ListStoredQueriesCommandOutput>;
