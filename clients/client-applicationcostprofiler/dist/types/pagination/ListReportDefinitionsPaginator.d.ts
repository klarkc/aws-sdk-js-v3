import {
  ListReportDefinitionsCommandInput,
  ListReportDefinitionsCommandOutput,
} from "../commands/ListReportDefinitionsCommand";
import { ApplicationCostProfilerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListReportDefinitions(
  config: ApplicationCostProfilerPaginationConfiguration,
  input: ListReportDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<ListReportDefinitionsCommandOutput>;
