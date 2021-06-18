import { ListFacetNamesCommandInput, ListFacetNamesCommandOutput } from "../commands/ListFacetNamesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFacetNames(
  config: CloudDirectoryPaginationConfiguration,
  input: ListFacetNamesCommandInput,
  ...additionalArguments: any
): Paginator<ListFacetNamesCommandOutput>;
