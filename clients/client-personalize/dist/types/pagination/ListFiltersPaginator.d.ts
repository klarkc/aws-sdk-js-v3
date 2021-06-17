import { ListFiltersCommandInput, ListFiltersCommandOutput } from "../commands/ListFiltersCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFilters(config: PersonalizePaginationConfiguration, input: ListFiltersCommandInput, ...additionalArguments: any): Paginator<ListFiltersCommandOutput>;
