import {
  ListChannelModeratorsCommandInput,
  ListChannelModeratorsCommandOutput,
} from "../commands/ListChannelModeratorsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListChannelModerators(
  config: ChimePaginationConfiguration,
  input: ListChannelModeratorsCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelModeratorsCommandOutput>;
