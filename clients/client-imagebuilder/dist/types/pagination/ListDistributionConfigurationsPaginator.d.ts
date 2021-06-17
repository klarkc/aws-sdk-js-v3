import { ListDistributionConfigurationsCommandInput, ListDistributionConfigurationsCommandOutput } from "../commands/ListDistributionConfigurationsCommand";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDistributionConfigurations(config: ImagebuilderPaginationConfiguration, input: ListDistributionConfigurationsCommandInput, ...additionalArguments: any): Paginator<ListDistributionConfigurationsCommandOutput>;
