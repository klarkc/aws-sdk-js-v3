import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "../commands/ListDataSourcesCommand";
import { KendraPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDataSources(config: KendraPaginationConfiguration, input: ListDataSourcesCommandInput, ...additionalArguments: any): Paginator<ListDataSourcesCommandOutput>;
