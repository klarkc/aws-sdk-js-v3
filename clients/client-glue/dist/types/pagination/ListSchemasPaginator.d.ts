import { ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSchemas(config: GluePaginationConfiguration, input: ListSchemasCommandInput, ...additionalArguments: any): Paginator<ListSchemasCommandOutput>;
