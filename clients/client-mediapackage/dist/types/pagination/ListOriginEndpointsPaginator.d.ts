import { ListOriginEndpointsCommandInput, ListOriginEndpointsCommandOutput } from "../commands/ListOriginEndpointsCommand";
import { MediaPackagePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListOriginEndpoints(config: MediaPackagePaginationConfiguration, input: ListOriginEndpointsCommandInput, ...additionalArguments: any): Paginator<ListOriginEndpointsCommandOutput>;
