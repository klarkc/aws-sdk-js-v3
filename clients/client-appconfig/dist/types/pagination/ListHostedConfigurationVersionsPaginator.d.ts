import {
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
} from "../commands/ListHostedConfigurationVersionsCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListHostedConfigurationVersions(
  config: AppConfigPaginationConfiguration,
  input: ListHostedConfigurationVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListHostedConfigurationVersionsCommandOutput>;
