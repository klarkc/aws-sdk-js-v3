import { SearchRoomsCommandInput, SearchRoomsCommandOutput } from "../commands/SearchRoomsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateSearchRooms(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchRoomsCommandInput,
  ...additionalArguments: any
): Paginator<SearchRoomsCommandOutput>;
