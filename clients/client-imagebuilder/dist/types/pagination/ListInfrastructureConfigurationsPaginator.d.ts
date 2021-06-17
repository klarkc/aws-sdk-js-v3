import { ListInfrastructureConfigurationsCommandInput, ListInfrastructureConfigurationsCommandOutput } from "../commands/ListInfrastructureConfigurationsCommand";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInfrastructureConfigurations(config: ImagebuilderPaginationConfiguration, input: ListInfrastructureConfigurationsCommandInput, ...additionalArguments: any): Paginator<ListInfrastructureConfigurationsCommandOutput>;
