import { ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListBots(
  config: ChimePaginationConfiguration,
  input: ListBotsCommandInput,
  ...additionalArguments: any
): Paginator<ListBotsCommandOutput>;
