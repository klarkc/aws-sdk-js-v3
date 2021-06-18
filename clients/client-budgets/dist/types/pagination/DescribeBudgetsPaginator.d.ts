import { DescribeBudgetsCommandInput, DescribeBudgetsCommandOutput } from "../commands/DescribeBudgetsCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeBudgets(
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBudgetsCommandOutput>;
