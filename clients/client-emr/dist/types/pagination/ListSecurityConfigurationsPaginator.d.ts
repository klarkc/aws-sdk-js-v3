import { ListSecurityConfigurationsCommandInput, ListSecurityConfigurationsCommandOutput } from "../commands/ListSecurityConfigurationsCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSecurityConfigurations(config: EMRPaginationConfiguration, input: ListSecurityConfigurationsCommandInput, ...additionalArguments: any): Paginator<ListSecurityConfigurationsCommandOutput>;
