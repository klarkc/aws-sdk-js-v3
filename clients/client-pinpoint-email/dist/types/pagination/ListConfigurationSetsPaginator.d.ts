import { ListConfigurationSetsCommandInput, ListConfigurationSetsCommandOutput } from "../commands/ListConfigurationSetsCommand";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListConfigurationSets(config: PinpointEmailPaginationConfiguration, input: ListConfigurationSetsCommandInput, ...additionalArguments: any): Paginator<ListConfigurationSetsCommandOutput>;
