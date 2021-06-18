import { ListIndexCommandInput, ListIndexCommandOutput } from "../commands/ListIndexCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListIndex(
  config: CloudDirectoryPaginationConfiguration,
  input: ListIndexCommandInput,
  ...additionalArguments: any
): Paginator<ListIndexCommandOutput>;
