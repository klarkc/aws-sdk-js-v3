import { ListEndpointsCommandInput, ListEndpointsCommandOutput } from "../commands/ListEndpointsCommand";
import { S3OutpostsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListEndpoints(config: S3OutpostsPaginationConfiguration, input: ListEndpointsCommandInput, ...additionalArguments: any): Paginator<ListEndpointsCommandOutput>;
