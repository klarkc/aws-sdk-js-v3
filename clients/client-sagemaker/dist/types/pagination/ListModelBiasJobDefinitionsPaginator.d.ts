import { ListModelBiasJobDefinitionsCommandInput, ListModelBiasJobDefinitionsCommandOutput } from "../commands/ListModelBiasJobDefinitionsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListModelBiasJobDefinitions(config: SageMakerPaginationConfiguration, input: ListModelBiasJobDefinitionsCommandInput, ...additionalArguments: any): Paginator<ListModelBiasJobDefinitionsCommandOutput>;
