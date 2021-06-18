import { SearchContactsCommandInput, SearchContactsCommandOutput } from "../commands/SearchContactsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchContacts(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchContactsCommandInput,
  ...additionalArguments: any
): Paginator<SearchContactsCommandOutput>;
