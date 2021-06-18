import {
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput,
} from "../commands/ListFacetAttributesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListFacetAttributes(
  config: CloudDirectoryPaginationConfiguration,
  input: ListFacetAttributesCommandInput,
  ...additionalArguments: any
): Paginator<ListFacetAttributesCommandOutput>;
