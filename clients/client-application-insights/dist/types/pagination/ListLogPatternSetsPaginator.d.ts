import { ListLogPatternSetsCommandInput, ListLogPatternSetsCommandOutput } from "../commands/ListLogPatternSetsCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListLogPatternSets(
  config: ApplicationInsightsPaginationConfiguration,
  input: ListLogPatternSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListLogPatternSetsCommandOutput>;
