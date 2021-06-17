import { ListContainerRecipesCommandInput, ListContainerRecipesCommandOutput } from "../commands/ListContainerRecipesCommand";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListContainerRecipes(config: ImagebuilderPaginationConfiguration, input: ListContainerRecipesCommandInput, ...additionalArguments: any): Paginator<ListContainerRecipesCommandOutput>;
