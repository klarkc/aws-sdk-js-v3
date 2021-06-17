import { ListAlgorithmsCommandInput, ListAlgorithmsCommandOutput } from "../commands/ListAlgorithmsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAlgorithms(config: SageMakerPaginationConfiguration, input: ListAlgorithmsCommandInput, ...additionalArguments: any): Paginator<ListAlgorithmsCommandOutput>;
