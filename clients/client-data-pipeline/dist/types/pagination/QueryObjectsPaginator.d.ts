import { QueryObjectsCommandInput, QueryObjectsCommandOutput } from "../commands/QueryObjectsCommand";
import { DataPipelinePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateQueryObjects(config: DataPipelinePaginationConfiguration, input: QueryObjectsCommandInput, ...additionalArguments: any): Paginator<QueryObjectsCommandOutput>;
