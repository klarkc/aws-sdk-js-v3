import { ListModelQualityJobDefinitionsCommandInput, ListModelQualityJobDefinitionsCommandOutput } from "../commands/ListModelQualityJobDefinitionsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListModelQualityJobDefinitions(config: SageMakerPaginationConfiguration, input: ListModelQualityJobDefinitionsCommandInput, ...additionalArguments: any): Paginator<ListModelQualityJobDefinitionsCommandOutput>;
