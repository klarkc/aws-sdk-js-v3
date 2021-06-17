import { ListResolverQueryLogConfigAssociationsCommandInput, ListResolverQueryLogConfigAssociationsCommandOutput } from "../commands/ListResolverQueryLogConfigAssociationsCommand";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResolverQueryLogConfigAssociations(config: Route53ResolverPaginationConfiguration, input: ListResolverQueryLogConfigAssociationsCommandInput, ...additionalArguments: any): Paginator<ListResolverQueryLogConfigAssociationsCommandOutput>;
