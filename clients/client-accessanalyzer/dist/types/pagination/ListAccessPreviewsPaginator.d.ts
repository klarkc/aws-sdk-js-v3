import { ListAccessPreviewsCommandInput, ListAccessPreviewsCommandOutput } from "../commands/ListAccessPreviewsCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccessPreviews(
  config: AccessAnalyzerPaginationConfiguration,
  input: ListAccessPreviewsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessPreviewsCommandOutput>;
