import { ListPipelineParametersForExecutionCommandInput, ListPipelineParametersForExecutionCommandOutput } from "../commands/ListPipelineParametersForExecutionCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPipelineParametersForExecution(config: SageMakerPaginationConfiguration, input: ListPipelineParametersForExecutionCommandInput, ...additionalArguments: any): Paginator<ListPipelineParametersForExecutionCommandOutput>;
