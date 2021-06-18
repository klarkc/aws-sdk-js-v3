import { ListMeetingsCommandInput, ListMeetingsCommandOutput } from "../commands/ListMeetingsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMeetings(
  config: ChimePaginationConfiguration,
  input: ListMeetingsCommandInput,
  ...additionalArguments: any
): Paginator<ListMeetingsCommandOutput>;
