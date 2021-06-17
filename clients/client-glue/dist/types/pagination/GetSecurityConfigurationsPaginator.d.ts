import { GetSecurityConfigurationsCommandInput, GetSecurityConfigurationsCommandOutput } from "../commands/GetSecurityConfigurationsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetSecurityConfigurations(config: GluePaginationConfiguration, input: GetSecurityConfigurationsCommandInput, ...additionalArguments: any): Paginator<GetSecurityConfigurationsCommandOutput>;
