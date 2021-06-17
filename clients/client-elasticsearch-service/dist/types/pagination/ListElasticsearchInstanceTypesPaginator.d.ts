import { ListElasticsearchInstanceTypesCommandInput, ListElasticsearchInstanceTypesCommandOutput } from "../commands/ListElasticsearchInstanceTypesCommand";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListElasticsearchInstanceTypes(config: ElasticsearchServicePaginationConfiguration, input: ListElasticsearchInstanceTypesCommandInput, ...additionalArguments: any): Paginator<ListElasticsearchInstanceTypesCommandOutput>;
