import { ListFiltersCommandInput, ListFiltersCommandOutput } from "../commands/ListFiltersCommand";
import { GuardDutyPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFilters(config: GuardDutyPaginationConfiguration, input: ListFiltersCommandInput, ...additionalArguments: any): Paginator<ListFiltersCommandOutput>;
