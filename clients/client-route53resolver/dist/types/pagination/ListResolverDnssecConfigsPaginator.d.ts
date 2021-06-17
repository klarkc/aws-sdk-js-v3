import { ListResolverDnssecConfigsCommandInput, ListResolverDnssecConfigsCommandOutput } from "../commands/ListResolverDnssecConfigsCommand";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResolverDnssecConfigs(config: Route53ResolverPaginationConfiguration, input: ListResolverDnssecConfigsCommandInput, ...additionalArguments: any): Paginator<ListResolverDnssecConfigsCommandOutput>;
