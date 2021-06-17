import { ListFindingsFiltersCommandInput, ListFindingsFiltersCommandOutput } from "../commands/ListFindingsFiltersCommand";
import { Macie2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFindingsFilters(config: Macie2PaginationConfiguration, input: ListFindingsFiltersCommandInput, ...additionalArguments: any): Paginator<ListFindingsFiltersCommandOutput>;
