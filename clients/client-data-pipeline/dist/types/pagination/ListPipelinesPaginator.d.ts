import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "../commands/ListPipelinesCommand";
import { DataPipelinePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPipelines(config: DataPipelinePaginationConfiguration, input: ListPipelinesCommandInput, ...additionalArguments: any): Paginator<ListPipelinesCommandOutput>;
