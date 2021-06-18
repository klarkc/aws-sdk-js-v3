import {
  ListObjectAttributesCommandInput,
  ListObjectAttributesCommandOutput,
} from "../commands/ListObjectAttributesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListObjectAttributes(
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectAttributesCommandInput,
  ...additionalArguments: any
): Paginator<ListObjectAttributesCommandOutput>;
