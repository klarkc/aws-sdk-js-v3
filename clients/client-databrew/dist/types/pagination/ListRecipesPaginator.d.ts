import { ListRecipesCommandInput, ListRecipesCommandOutput } from "../commands/ListRecipesCommand";
import { DataBrewPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRecipes(config: DataBrewPaginationConfiguration, input: ListRecipesCommandInput, ...additionalArguments: any): Paginator<ListRecipesCommandOutput>;
