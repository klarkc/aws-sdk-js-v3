import { ListDirectoriesCommandInput, ListDirectoriesCommandOutput } from "../commands/ListDirectoriesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDirectories(
  config: CloudDirectoryPaginationConfiguration,
  input: ListDirectoriesCommandInput,
  ...additionalArguments: any
): Paginator<ListDirectoriesCommandOutput>;
