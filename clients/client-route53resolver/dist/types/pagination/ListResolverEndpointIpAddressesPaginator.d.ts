import { ListResolverEndpointIpAddressesCommandInput, ListResolverEndpointIpAddressesCommandOutput } from "../commands/ListResolverEndpointIpAddressesCommand";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResolverEndpointIpAddresses(config: Route53ResolverPaginationConfiguration, input: ListResolverEndpointIpAddressesCommandInput, ...additionalArguments: any): Paginator<ListResolverEndpointIpAddressesCommandOutput>;
