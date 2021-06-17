import { ListRecipesCommandInput, ListRecipesCommandOutput } from "../commands/ListRecipesCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRecipes(config: PersonalizePaginationConfiguration, input: ListRecipesCommandInput, ...additionalArguments: any): Paginator<ListRecipesCommandOutput>;
