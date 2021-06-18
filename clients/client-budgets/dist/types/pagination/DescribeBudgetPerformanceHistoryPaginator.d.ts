import {
  DescribeBudgetPerformanceHistoryCommandInput,
  DescribeBudgetPerformanceHistoryCommandOutput,
} from "../commands/DescribeBudgetPerformanceHistoryCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeBudgetPerformanceHistory(
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetPerformanceHistoryCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBudgetPerformanceHistoryCommandOutput>;
