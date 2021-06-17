import { ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSchemas(config: RedshiftDataPaginationConfiguration, input: ListSchemasCommandInput, ...additionalArguments: any): Paginator<ListSchemasCommandOutput>;
