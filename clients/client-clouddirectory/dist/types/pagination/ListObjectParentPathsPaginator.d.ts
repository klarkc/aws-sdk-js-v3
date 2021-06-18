import {
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput,
} from "../commands/ListObjectParentPathsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListObjectParentPaths(
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectParentPathsCommandInput,
  ...additionalArguments: any
): Paginator<ListObjectParentPathsCommandOutput>;
