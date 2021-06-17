import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "../commands/ListPipelinesCommand";
import { IoTAnalyticsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPipelines(config: IoTAnalyticsPaginationConfiguration, input: ListPipelinesCommandInput, ...additionalArguments: any): Paginator<ListPipelinesCommandOutput>;
