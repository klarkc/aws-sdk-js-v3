import {
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "../commands/SearchAvailablePhoneNumbersCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchAvailablePhoneNumbers(
  config: ChimePaginationConfiguration,
  input: SearchAvailablePhoneNumbersCommandInput,
  ...additionalArguments: any
): Paginator<SearchAvailablePhoneNumbersCommandOutput>;
