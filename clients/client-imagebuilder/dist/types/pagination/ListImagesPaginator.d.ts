import { ListImagesCommandInput, ListImagesCommandOutput } from "../commands/ListImagesCommand";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListImages(config: ImagebuilderPaginationConfiguration, input: ListImagesCommandInput, ...additionalArguments: any): Paginator<ListImagesCommandOutput>;
