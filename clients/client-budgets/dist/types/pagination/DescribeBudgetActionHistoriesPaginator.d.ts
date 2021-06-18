import {
  DescribeBudgetActionHistoriesCommandInput,
  DescribeBudgetActionHistoriesCommandOutput,
} from "../commands/DescribeBudgetActionHistoriesCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeBudgetActionHistories(
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetActionHistoriesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBudgetActionHistoriesCommandOutput>;
