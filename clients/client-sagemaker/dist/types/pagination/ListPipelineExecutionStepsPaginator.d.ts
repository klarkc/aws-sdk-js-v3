import { ListPipelineExecutionStepsCommandInput, ListPipelineExecutionStepsCommandOutput } from "../commands/ListPipelineExecutionStepsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPipelineExecutionSteps(config: SageMakerPaginationConfiguration, input: ListPipelineExecutionStepsCommandInput, ...additionalArguments: any): Paginator<ListPipelineExecutionStepsCommandOutput>;
