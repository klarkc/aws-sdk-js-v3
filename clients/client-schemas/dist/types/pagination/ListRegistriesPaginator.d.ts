import { ListRegistriesCommandInput, ListRegistriesCommandOutput } from "../commands/ListRegistriesCommand";
import { SchemasPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRegistries(config: SchemasPaginationConfiguration, input: ListRegistriesCommandInput, ...additionalArguments: any): Paginator<ListRegistriesCommandOutput>;
