import { ListTaskDefinitionFamiliesCommandInput, ListTaskDefinitionFamiliesCommandOutput } from "../commands/ListTaskDefinitionFamiliesCommand";
import { ECSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTaskDefinitionFamilies(config: ECSPaginationConfiguration, input: ListTaskDefinitionFamiliesCommandInput, ...additionalArguments: any): Paginator<ListTaskDefinitionFamiliesCommandOutput>;
