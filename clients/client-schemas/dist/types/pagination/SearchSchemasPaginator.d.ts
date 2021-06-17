import { SearchSchemasCommandInput, SearchSchemasCommandOutput } from "../commands/SearchSchemasCommand";
import { SchemasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchSchemas(config: SchemasPaginationConfiguration, input: SearchSchemasCommandInput, ...additionalArguments: any): Paginator<SearchSchemasCommandOutput>;
