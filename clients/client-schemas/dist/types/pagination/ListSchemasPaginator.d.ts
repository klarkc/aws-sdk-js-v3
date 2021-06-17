import { ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { SchemasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSchemas(config: SchemasPaginationConfiguration, input: ListSchemasCommandInput, ...additionalArguments: any): Paginator<ListSchemasCommandOutput>;
