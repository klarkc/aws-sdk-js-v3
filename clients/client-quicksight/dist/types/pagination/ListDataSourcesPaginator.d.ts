import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "../commands/ListDataSourcesCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDataSources(config: QuickSightPaginationConfiguration, input: ListDataSourcesCommandInput, ...additionalArguments: any): Paginator<ListDataSourcesCommandOutput>;
