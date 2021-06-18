import {
  DescribeSubscribersForNotificationCommandInput,
  DescribeSubscribersForNotificationCommandOutput,
} from "../commands/DescribeSubscribersForNotificationCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeSubscribersForNotification(
  config: BudgetsPaginationConfiguration,
  input: DescribeSubscribersForNotificationCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSubscribersForNotificationCommandOutput>;
