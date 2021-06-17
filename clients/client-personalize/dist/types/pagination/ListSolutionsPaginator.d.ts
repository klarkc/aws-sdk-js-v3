import { ListSolutionsCommandInput, ListSolutionsCommandOutput } from "../commands/ListSolutionsCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSolutions(config: PersonalizePaginationConfiguration, input: ListSolutionsCommandInput, ...additionalArguments: any): Paginator<ListSolutionsCommandOutput>;
