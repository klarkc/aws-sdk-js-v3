import { ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput } from "../commands/ListSchemaVersionsCommand";
import { SchemasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSchemaVersions(config: SchemasPaginationConfiguration, input: ListSchemaVersionsCommandInput, ...additionalArguments: any): Paginator<ListSchemaVersionsCommandOutput>;
