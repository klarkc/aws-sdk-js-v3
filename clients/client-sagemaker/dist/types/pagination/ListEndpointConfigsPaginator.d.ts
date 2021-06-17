import { ListEndpointConfigsCommandInput, ListEndpointConfigsCommandOutput } from "../commands/ListEndpointConfigsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEndpointConfigs(config: SageMakerPaginationConfiguration, input: ListEndpointConfigsCommandInput, ...additionalArguments: any): Paginator<ListEndpointConfigsCommandOutput>;
