import { ListObjectChildrenCommandInput, ListObjectChildrenCommandOutput } from "../commands/ListObjectChildrenCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListObjectChildren(
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectChildrenCommandInput,
  ...additionalArguments: any
): Paginator<ListObjectChildrenCommandOutput>;
