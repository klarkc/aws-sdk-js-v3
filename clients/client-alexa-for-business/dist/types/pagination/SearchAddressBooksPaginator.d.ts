import { SearchAddressBooksCommandInput, SearchAddressBooksCommandOutput } from "../commands/SearchAddressBooksCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchAddressBooks(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchAddressBooksCommandInput,
  ...additionalArguments: any
): Paginator<SearchAddressBooksCommandOutput>;
