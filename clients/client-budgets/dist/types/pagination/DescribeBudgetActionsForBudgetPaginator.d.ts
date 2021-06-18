import {
  DescribeBudgetActionsForBudgetCommandInput,
  DescribeBudgetActionsForBudgetCommandOutput,
} from "../commands/DescribeBudgetActionsForBudgetCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeBudgetActionsForBudget(
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetActionsForBudgetCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBudgetActionsForBudgetCommandOutput>;
