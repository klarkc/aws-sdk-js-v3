import { ListConfigurationsCommandInput, ListConfigurationsCommandOutput } from "../commands/ListConfigurationsCommand";
import { KafkaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListConfigurations(config: KafkaPaginationConfiguration, input: ListConfigurationsCommandInput, ...additionalArguments: any): Paginator<ListConfigurationsCommandOutput>;
