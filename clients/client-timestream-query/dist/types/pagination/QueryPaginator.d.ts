import { QueryCommandInput, QueryCommandOutput } from "../commands/QueryCommand";
import { TimestreamQueryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateQuery(config: TimestreamQueryPaginationConfiguration, input: QueryCommandInput, ...additionalArguments: any): Paginator<QueryCommandOutput>;
