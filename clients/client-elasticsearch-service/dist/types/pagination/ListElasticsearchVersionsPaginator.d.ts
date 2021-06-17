import { ListElasticsearchVersionsCommandInput, ListElasticsearchVersionsCommandOutput } from "../commands/ListElasticsearchVersionsCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListElasticsearchVersions(config: ElasticsearchServicePaginationConfiguration, input: ListElasticsearchVersionsCommandInput, ...additionalArguments: any): Paginator<ListElasticsearchVersionsCommandOutput>;
