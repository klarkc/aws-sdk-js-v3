import {
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
} from "../commands/ListConfigurationProfilesCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListConfigurationProfiles(
  config: AppConfigPaginationConfiguration,
  input: ListConfigurationProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListConfigurationProfilesCommandOutput>;
