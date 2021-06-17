import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "../commands/ListPipelinesCommand";
import { ElasticTranscoderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPipelines(config: ElasticTranscoderPaginationConfiguration, input: ListPipelinesCommandInput, ...additionalArguments: any): Paginator<ListPipelinesCommandOutput>;
