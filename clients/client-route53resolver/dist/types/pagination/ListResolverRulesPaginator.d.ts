import { ListResolverRulesCommandInput, ListResolverRulesCommandOutput } from "../commands/ListResolverRulesCommand";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResolverRules(config: Route53ResolverPaginationConfiguration, input: ListResolverRulesCommandInput, ...additionalArguments: any): Paginator<ListResolverRulesCommandOutput>;
