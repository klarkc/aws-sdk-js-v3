import { ListConfigurationSetsCommandInput, ListConfigurationSetsCommandOutput } from "../commands/ListConfigurationSetsCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListConfigurationSets(config: SESv2PaginationConfiguration, input: ListConfigurationSetsCommandInput, ...additionalArguments: any): Paginator<ListConfigurationSetsCommandOutput>;
