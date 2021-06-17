import { ListLayersCommandInput, ListLayersCommandOutput } from "../commands/ListLayersCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListLayers(config: LambdaPaginationConfiguration, input: ListLayersCommandInput, ...additionalArguments: any): Paginator<ListLayersCommandOutput>;
