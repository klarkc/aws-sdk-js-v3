import { ListModelExplainabilityJobDefinitionsCommandInput, ListModelExplainabilityJobDefinitionsCommandOutput } from "../commands/ListModelExplainabilityJobDefinitionsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListModelExplainabilityJobDefinitions(config: SageMakerPaginationConfiguration, input: ListModelExplainabilityJobDefinitionsCommandInput, ...additionalArguments: any): Paginator<ListModelExplainabilityJobDefinitionsCommandOutput>;
