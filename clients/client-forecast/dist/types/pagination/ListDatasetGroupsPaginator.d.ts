import { ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput } from "../commands/ListDatasetGroupsCommand";
import { ForecastPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDatasetGroups(config: ForecastPaginationConfiguration, input: ListDatasetGroupsCommandInput, ...additionalArguments: any): Paginator<ListDatasetGroupsCommandOutput>;
