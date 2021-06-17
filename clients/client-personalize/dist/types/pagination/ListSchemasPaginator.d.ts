import { ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSchemas(config: PersonalizePaginationConfiguration, input: ListSchemasCommandInput, ...additionalArguments: any): Paginator<ListSchemasCommandOutput>;
