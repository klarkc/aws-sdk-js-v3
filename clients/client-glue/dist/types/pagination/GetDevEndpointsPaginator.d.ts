import { GetDevEndpointsCommandInput, GetDevEndpointsCommandOutput } from "../commands/GetDevEndpointsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetDevEndpoints(config: GluePaginationConfiguration, input: GetDevEndpointsCommandInput, ...additionalArguments: any): Paginator<GetDevEndpointsCommandOutput>;
