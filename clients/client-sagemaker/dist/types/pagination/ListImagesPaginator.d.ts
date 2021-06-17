import { ListImagesCommandInput, ListImagesCommandOutput } from "../commands/ListImagesCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListImages(config: SageMakerPaginationConfiguration, input: ListImagesCommandInput, ...additionalArguments: any): Paginator<ListImagesCommandOutput>;
