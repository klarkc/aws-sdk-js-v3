import { ListRecipeVersionsCommandInput, ListRecipeVersionsCommandOutput } from "../commands/ListRecipeVersionsCommand";
import { DataBrewPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRecipeVersions(config: DataBrewPaginationConfiguration, input: ListRecipeVersionsCommandInput, ...additionalArguments: any): Paginator<ListRecipeVersionsCommandOutput>;
