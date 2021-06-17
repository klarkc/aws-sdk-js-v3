import { ListResolverEndpointsCommandInput, ListResolverEndpointsCommandOutput } from "../commands/ListResolverEndpointsCommand";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResolverEndpoints(config: Route53ResolverPaginationConfiguration, input: ListResolverEndpointsCommandInput, ...additionalArguments: any): Paginator<ListResolverEndpointsCommandOutput>;
