import { ListDevEndpointsCommandInput, ListDevEndpointsCommandOutput } from "../commands/ListDevEndpointsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDevEndpoints(config: GluePaginationConfiguration, input: ListDevEndpointsCommandInput, ...additionalArguments: any): Paginator<ListDevEndpointsCommandOutput>;
