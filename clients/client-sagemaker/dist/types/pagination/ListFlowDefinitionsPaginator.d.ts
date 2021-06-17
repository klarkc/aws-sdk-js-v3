import { ListFlowDefinitionsCommandInput, ListFlowDefinitionsCommandOutput } from "../commands/ListFlowDefinitionsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFlowDefinitions(config: SageMakerPaginationConfiguration, input: ListFlowDefinitionsCommandInput, ...additionalArguments: any): Paginator<ListFlowDefinitionsCommandOutput>;
