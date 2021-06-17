import { ListRegistriesCommandInput, ListRegistriesCommandOutput } from "../commands/ListRegistriesCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRegistries(config: GluePaginationConfiguration, input: ListRegistriesCommandInput, ...additionalArguments: any): Paginator<ListRegistriesCommandOutput>;
