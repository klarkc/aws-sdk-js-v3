import {
  DescribeNotificationsForBudgetCommandInput,
  DescribeNotificationsForBudgetCommandOutput,
} from "../commands/DescribeNotificationsForBudgetCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeNotificationsForBudget(
  config: BudgetsPaginationConfiguration,
  input: DescribeNotificationsForBudgetCommandInput,
  ...additionalArguments: any
): Paginator<DescribeNotificationsForBudgetCommandOutput>;
