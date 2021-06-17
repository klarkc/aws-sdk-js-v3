import { ListEndpointsCommandInput, ListEndpointsCommandOutput } from "../commands/ListEndpointsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEndpoints(config: SageMakerPaginationConfiguration, input: ListEndpointsCommandInput, ...additionalArguments: any): Paginator<ListEndpointsCommandOutput>;
