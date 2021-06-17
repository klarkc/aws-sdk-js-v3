import { ListJobsByStatusCommandInput, ListJobsByStatusCommandOutput } from "../commands/ListJobsByStatusCommand";
import { ElasticTranscoderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListJobsByStatus(config: ElasticTranscoderPaginationConfiguration, input: ListJobsByStatusCommandInput, ...additionalArguments: any): Paginator<ListJobsByStatusCommandOutput>;
