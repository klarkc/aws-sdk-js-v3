import {
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
} from "../commands/ListChannelMessagesCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListChannelMessages(
  config: ChimePaginationConfiguration,
  input: ListChannelMessagesCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelMessagesCommandOutput>;
