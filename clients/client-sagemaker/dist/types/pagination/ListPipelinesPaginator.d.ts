import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "../commands/ListPipelinesCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPipelines(config: SageMakerPaginationConfiguration, input: ListPipelinesCommandInput, ...additionalArguments: any): Paginator<ListPipelinesCommandOutput>;
