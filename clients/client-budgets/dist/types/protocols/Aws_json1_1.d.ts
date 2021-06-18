import { CreateBudgetActionCommandInput, CreateBudgetActionCommandOutput } from "../commands/CreateBudgetActionCommand";
import { CreateBudgetCommandInput, CreateBudgetCommandOutput } from "../commands/CreateBudgetCommand";
import { CreateNotificationCommandInput, CreateNotificationCommandOutput } from "../commands/CreateNotificationCommand";
import { CreateSubscriberCommandInput, CreateSubscriberCommandOutput } from "../commands/CreateSubscriberCommand";
import { DeleteBudgetActionCommandInput, DeleteBudgetActionCommandOutput } from "../commands/DeleteBudgetActionCommand";
import { DeleteBudgetCommandInput, DeleteBudgetCommandOutput } from "../commands/DeleteBudgetCommand";
import { DeleteNotificationCommandInput, DeleteNotificationCommandOutput } from "../commands/DeleteNotificationCommand";
import { DeleteSubscriberCommandInput, DeleteSubscriberCommandOutput } from "../commands/DeleteSubscriberCommand";
import {
  DescribeBudgetActionCommandInput,
  DescribeBudgetActionCommandOutput,
} from "../commands/DescribeBudgetActionCommand";
import {
  DescribeBudgetActionHistoriesCommandInput,
  DescribeBudgetActionHistoriesCommandOutput,
} from "../commands/DescribeBudgetActionHistoriesCommand";
import {
  DescribeBudgetActionsForAccountCommandInput,
  DescribeBudgetActionsForAccountCommandOutput,
} from "../commands/DescribeBudgetActionsForAccountCommand";
import {
  DescribeBudgetActionsForBudgetCommandInput,
  DescribeBudgetActionsForBudgetCommandOutput,
} from "../commands/DescribeBudgetActionsForBudgetCommand";
import { DescribeBudgetCommandInput, DescribeBudgetCommandOutput } from "../commands/DescribeBudgetCommand";
import {
  DescribeBudgetPerformanceHistoryCommandInput,
  DescribeBudgetPerformanceHistoryCommandOutput,
} from "../commands/DescribeBudgetPerformanceHistoryCommand";
import { DescribeBudgetsCommandInput, DescribeBudgetsCommandOutput } from "../commands/DescribeBudgetsCommand";
import {
  DescribeNotificationsForBudgetCommandInput,
  DescribeNotificationsForBudgetCommandOutput,
} from "../commands/DescribeNotificationsForBudgetCommand";
import {
  DescribeSubscribersForNotificationCommandInput,
  DescribeSubscribersForNotificationCommandOutput,
} from "../commands/DescribeSubscribersForNotificationCommand";
import {
  ExecuteBudgetActionCommandInput,
  ExecuteBudgetActionCommandOutput,
} from "../commands/ExecuteBudgetActionCommand";
import { UpdateBudgetActionCommandInput, UpdateBudgetActionCommandOutput } from "../commands/UpdateBudgetActionCommand";
import { UpdateBudgetCommandInput, UpdateBudgetCommandOutput } from "../commands/UpdateBudgetCommand";
import { UpdateNotificationCommandInput, UpdateNotificationCommandOutput } from "../commands/UpdateNotificationCommand";
import { UpdateSubscriberCommandInput, UpdateSubscriberCommandOutput } from "../commands/UpdateSubscriberCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1CreateBudgetCommand: (
  input: CreateBudgetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateBudgetActionCommand: (
  input: CreateBudgetActionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateNotificationCommand: (
  input: CreateNotificationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateSubscriberCommand: (
  input: CreateSubscriberCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteBudgetCommand: (
  input: DeleteBudgetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteBudgetActionCommand: (
  input: DeleteBudgetActionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteNotificationCommand: (
  input: DeleteNotificationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteSubscriberCommand: (
  input: DeleteSubscriberCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeBudgetCommand: (
  input: DescribeBudgetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeBudgetActionCommand: (
  input: DescribeBudgetActionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeBudgetActionHistoriesCommand: (
  input: DescribeBudgetActionHistoriesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeBudgetActionsForAccountCommand: (
  input: DescribeBudgetActionsForAccountCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeBudgetActionsForBudgetCommand: (
  input: DescribeBudgetActionsForBudgetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand: (
  input: DescribeBudgetPerformanceHistoryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeBudgetsCommand: (
  input: DescribeBudgetsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeNotificationsForBudgetCommand: (
  input: DescribeNotificationsForBudgetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeSubscribersForNotificationCommand: (
  input: DescribeSubscribersForNotificationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ExecuteBudgetActionCommand: (
  input: ExecuteBudgetActionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateBudgetCommand: (
  input: UpdateBudgetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateBudgetActionCommand: (
  input: UpdateBudgetActionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateNotificationCommand: (
  input: UpdateNotificationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateSubscriberCommand: (
  input: UpdateSubscriberCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1CreateBudgetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateBudgetCommandOutput>;
export declare const deserializeAws_json1_1CreateBudgetActionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateBudgetActionCommandOutput>;
export declare const deserializeAws_json1_1CreateNotificationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateNotificationCommandOutput>;
export declare const deserializeAws_json1_1CreateSubscriberCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateSubscriberCommandOutput>;
export declare const deserializeAws_json1_1DeleteBudgetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBudgetCommandOutput>;
export declare const deserializeAws_json1_1DeleteBudgetActionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBudgetActionCommandOutput>;
export declare const deserializeAws_json1_1DeleteNotificationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteNotificationCommandOutput>;
export declare const deserializeAws_json1_1DeleteSubscriberCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteSubscriberCommandOutput>;
export declare const deserializeAws_json1_1DescribeBudgetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeBudgetCommandOutput>;
export declare const deserializeAws_json1_1DescribeBudgetActionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeBudgetActionCommandOutput>;
export declare const deserializeAws_json1_1DescribeBudgetActionHistoriesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeBudgetActionHistoriesCommandOutput>;
export declare const deserializeAws_json1_1DescribeBudgetActionsForAccountCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeBudgetActionsForAccountCommandOutput>;
export declare const deserializeAws_json1_1DescribeBudgetActionsForBudgetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeBudgetActionsForBudgetCommandOutput>;
export declare const deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeBudgetPerformanceHistoryCommandOutput>;
export declare const deserializeAws_json1_1DescribeBudgetsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeBudgetsCommandOutput>;
export declare const deserializeAws_json1_1DescribeNotificationsForBudgetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeNotificationsForBudgetCommandOutput>;
export declare const deserializeAws_json1_1DescribeSubscribersForNotificationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeSubscribersForNotificationCommandOutput>;
export declare const deserializeAws_json1_1ExecuteBudgetActionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ExecuteBudgetActionCommandOutput>;
export declare const deserializeAws_json1_1UpdateBudgetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateBudgetCommandOutput>;
export declare const deserializeAws_json1_1UpdateBudgetActionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateBudgetActionCommandOutput>;
export declare const deserializeAws_json1_1UpdateNotificationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateNotificationCommandOutput>;
export declare const deserializeAws_json1_1UpdateSubscriberCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateSubscriberCommandOutput>;
