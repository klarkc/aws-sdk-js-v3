import { ListChannelBansCommandInput, ListChannelBansCommandOutput } from "../commands/ListChannelBansCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListChannelBans(
  config: ChimePaginationConfiguration,
  input: ListChannelBansCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelBansCommandOutput>;
