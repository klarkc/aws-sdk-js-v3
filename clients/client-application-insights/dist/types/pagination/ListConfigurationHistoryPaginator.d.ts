import {
  ListConfigurationHistoryCommandInput,
  ListConfigurationHistoryCommandOutput,
} from "../commands/ListConfigurationHistoryCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListConfigurationHistory(
  config: ApplicationInsightsPaginationConfiguration,
  input: ListConfigurationHistoryCommandInput,
  ...additionalArguments: any
): Paginator<ListConfigurationHistoryCommandOutput>;
