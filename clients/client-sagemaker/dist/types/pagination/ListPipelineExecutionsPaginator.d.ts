import { ListPipelineExecutionsCommandInput, ListPipelineExecutionsCommandOutput } from "../commands/ListPipelineExecutionsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPipelineExecutions(config: SageMakerPaginationConfiguration, input: ListPipelineExecutionsCommandInput, ...additionalArguments: any): Paginator<ListPipelineExecutionsCommandOutput>;
