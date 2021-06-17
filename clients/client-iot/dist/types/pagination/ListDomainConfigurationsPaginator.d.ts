import { ListDomainConfigurationsCommandInput, ListDomainConfigurationsCommandOutput } from "../commands/ListDomainConfigurationsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDomainConfigurations(config: IoTPaginationConfiguration, input: ListDomainConfigurationsCommandInput, ...additionalArguments: any): Paginator<ListDomainConfigurationsCommandOutput>;
