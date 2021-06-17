import { ListResolverQueryLogConfigsCommandInput, ListResolverQueryLogConfigsCommandOutput } from "../commands/ListResolverQueryLogConfigsCommand";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResolverQueryLogConfigs(config: Route53ResolverPaginationConfiguration, input: ListResolverQueryLogConfigsCommandInput, ...additionalArguments: any): Paginator<ListResolverQueryLogConfigsCommandOutput>;
