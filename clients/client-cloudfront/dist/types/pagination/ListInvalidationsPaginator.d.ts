import { ListInvalidationsCommandInput, ListInvalidationsCommandOutput } from "../commands/ListInvalidationsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListInvalidations(
  config: CloudFrontPaginationConfiguration,
  input: ListInvalidationsCommandInput,
  ...additionalArguments: any
): Paginator<ListInvalidationsCommandOutput>;
