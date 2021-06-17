import { ListModelsCommandInput, ListModelsCommandOutput } from "../commands/ListModelsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListModels(config: SageMakerPaginationConfiguration, input: ListModelsCommandInput, ...additionalArguments: any): Paginator<ListModelsCommandOutput>;
