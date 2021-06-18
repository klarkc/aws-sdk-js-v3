import { ListLogPatternsCommandInput, ListLogPatternsCommandOutput } from "../commands/ListLogPatternsCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListLogPatterns(
  config: ApplicationInsightsPaginationConfiguration,
  input: ListLogPatternsCommandInput,
  ...additionalArguments: any
): Paginator<ListLogPatternsCommandOutput>;
