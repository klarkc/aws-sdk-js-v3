import { ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput } from "../commands/ListSchemaVersionsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSchemaVersions(config: GluePaginationConfiguration, input: ListSchemaVersionsCommandInput, ...additionalArguments: any): Paginator<ListSchemaVersionsCommandOutput>;
