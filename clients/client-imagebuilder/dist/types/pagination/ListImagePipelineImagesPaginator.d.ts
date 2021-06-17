import { ListImagePipelineImagesCommandInput, ListImagePipelineImagesCommandOutput } from "../commands/ListImagePipelineImagesCommand";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListImagePipelineImages(config: ImagebuilderPaginationConfiguration, input: ListImagePipelineImagesCommandInput, ...additionalArguments: any): Paginator<ListImagePipelineImagesCommandOutput>;
