import { ListJobsByPipelineCommandInput, ListJobsByPipelineCommandOutput } from "../commands/ListJobsByPipelineCommand";
import { ElasticTranscoderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListJobsByPipeline(config: ElasticTranscoderPaginationConfiguration, input: ListJobsByPipelineCommandInput, ...additionalArguments: any): Paginator<ListJobsByPipelineCommandOutput>;
