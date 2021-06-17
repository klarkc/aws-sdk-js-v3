import { ListImagePipelinesCommandInput, ListImagePipelinesCommandOutput } from "../commands/ListImagePipelinesCommand";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListImagePipelines(config: ImagebuilderPaginationConfiguration, input: ListImagePipelinesCommandInput, ...additionalArguments: any): Paginator<ListImagePipelinesCommandOutput>;
