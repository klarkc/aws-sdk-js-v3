import { ListImageRecipesCommandInput, ListImageRecipesCommandOutput } from "../commands/ListImageRecipesCommand";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListImageRecipes(config: ImagebuilderPaginationConfiguration, input: ListImageRecipesCommandInput, ...additionalArguments: any): Paginator<ListImageRecipesCommandOutput>;
