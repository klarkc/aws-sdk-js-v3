import {
  ListAccessPreviewFindingsCommandInput,
  ListAccessPreviewFindingsCommandOutput,
} from "../commands/ListAccessPreviewFindingsCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAccessPreviewFindings(
  config: AccessAnalyzerPaginationConfiguration,
  input: ListAccessPreviewFindingsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessPreviewFindingsCommandOutput>;
