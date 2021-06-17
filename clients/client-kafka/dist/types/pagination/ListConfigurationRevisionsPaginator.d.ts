import { ListConfigurationRevisionsCommandInput, ListConfigurationRevisionsCommandOutput } from "../commands/ListConfigurationRevisionsCommand";
import { KafkaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListConfigurationRevisions(config: KafkaPaginationConfiguration, input: ListConfigurationRevisionsCommandInput, ...additionalArguments: any): Paginator<ListConfigurationRevisionsCommandOutput>;
