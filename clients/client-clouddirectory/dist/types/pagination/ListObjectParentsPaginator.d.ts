import { ListObjectParentsCommandInput, ListObjectParentsCommandOutput } from "../commands/ListObjectParentsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListObjectParents(
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectParentsCommandInput,
  ...additionalArguments: any
): Paginator<ListObjectParentsCommandOutput>;
