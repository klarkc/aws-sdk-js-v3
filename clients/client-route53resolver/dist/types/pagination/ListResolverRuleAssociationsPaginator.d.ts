import { ListResolverRuleAssociationsCommandInput, ListResolverRuleAssociationsCommandOutput } from "../commands/ListResolverRuleAssociationsCommand";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListResolverRuleAssociations(config: Route53ResolverPaginationConfiguration, input: ListResolverRuleAssociationsCommandInput, ...additionalArguments: any): Paginator<ListResolverRuleAssociationsCommandOutput>;
