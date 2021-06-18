import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccessDeniedException || (AccessDeniedException = {}));
export var ThresholdType;
(function (ThresholdType) {
  ThresholdType["ABSOLUTE_VALUE"] = "ABSOLUTE_VALUE";
  ThresholdType["PERCENTAGE"] = "PERCENTAGE";
})(ThresholdType || (ThresholdType = {}));
export var ActionThreshold;
(function (ActionThreshold) {
  /**
   * @internal
   */
  ActionThreshold.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ActionThreshold || (ActionThreshold = {}));
export var ActionType;
(function (ActionType) {
  ActionType["IAM"] = "APPLY_IAM_POLICY";
  ActionType["SCP"] = "APPLY_SCP_POLICY";
  ActionType["SSM"] = "RUN_SSM_DOCUMENTS";
})(ActionType || (ActionType = {}));
export var ApprovalModel;
(function (ApprovalModel) {
  ApprovalModel["AUTO"] = "AUTOMATIC";
  ApprovalModel["MANUAL"] = "MANUAL";
})(ApprovalModel || (ApprovalModel = {}));
export var IamActionDefinition;
(function (IamActionDefinition) {
  /**
   * @internal
   */
  IamActionDefinition.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(IamActionDefinition || (IamActionDefinition = {}));
export var ScpActionDefinition;
(function (ScpActionDefinition) {
  /**
   * @internal
   */
  ScpActionDefinition.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ScpActionDefinition || (ScpActionDefinition = {}));
export var ActionSubType;
(function (ActionSubType) {
  ActionSubType["STOP_EC2"] = "STOP_EC2_INSTANCES";
  ActionSubType["STOP_RDS"] = "STOP_RDS_INSTANCES";
})(ActionSubType || (ActionSubType = {}));
export var SsmActionDefinition;
(function (SsmActionDefinition) {
  /**
   * @internal
   */
  SsmActionDefinition.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SsmActionDefinition || (SsmActionDefinition = {}));
export var Definition;
(function (Definition) {
  /**
   * @internal
   */
  Definition.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Definition || (Definition = {}));
export var NotificationType;
(function (NotificationType) {
  NotificationType["ACTUAL"] = "ACTUAL";
  NotificationType["FORECASTED"] = "FORECASTED";
})(NotificationType || (NotificationType = {}));
export var ActionStatus;
(function (ActionStatus) {
  ActionStatus["Execution_Failure"] = "EXECUTION_FAILURE";
  ActionStatus["Execution_In_Progress"] = "EXECUTION_IN_PROGRESS";
  ActionStatus["Execution_Success"] = "EXECUTION_SUCCESS";
  ActionStatus["Pending"] = "PENDING";
  ActionStatus["Reset_Failure"] = "RESET_FAILURE";
  ActionStatus["Reset_In_Progress"] = "RESET_IN_PROGRESS";
  ActionStatus["Reverse_Failure"] = "REVERSE_FAILURE";
  ActionStatus["Reverse_In_Progress"] = "REVERSE_IN_PROGRESS";
  ActionStatus["Reverse_Success"] = "REVERSE_SUCCESS";
  ActionStatus["Standby"] = "STANDBY";
})(ActionStatus || (ActionStatus = {}));
export var SubscriptionType;
(function (SubscriptionType) {
  SubscriptionType["EMAIL"] = "EMAIL";
  SubscriptionType["SNS"] = "SNS";
})(SubscriptionType || (SubscriptionType = {}));
export var Subscriber;
(function (Subscriber) {
  /**
   * @internal
   */
  Subscriber.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Address && { Address: SENSITIVE_STRING });
  };
})(Subscriber || (Subscriber = {}));
export var Action;
(function (Action) {
  /**
   * @internal
   */
  Action.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Subscribers && {
        Subscribers: obj.Subscribers.map(function (item) {
          return Subscriber.filterSensitiveLog(item);
        }),
      }
    );
  };
})(Action || (Action = {}));
export var ActionHistoryDetails;
(function (ActionHistoryDetails) {
  /**
   * @internal
   */
  ActionHistoryDetails.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Action && { Action: Action.filterSensitiveLog(obj.Action) });
  };
})(ActionHistoryDetails || (ActionHistoryDetails = {}));
export var EventType;
(function (EventType) {
  EventType["CreateAction"] = "CREATE_ACTION";
  EventType["DeleteAction"] = "DELETE_ACTION";
  EventType["ExecuteAction"] = "EXECUTE_ACTION";
  EventType["System"] = "SYSTEM";
  EventType["UpdateAction"] = "UPDATE_ACTION";
})(EventType || (EventType = {}));
export var ActionHistory;
(function (ActionHistory) {
  /**
   * @internal
   */
  ActionHistory.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.ActionHistoryDetails && {
        ActionHistoryDetails: ActionHistoryDetails.filterSensitiveLog(obj.ActionHistoryDetails),
      }
    );
  };
})(ActionHistory || (ActionHistory = {}));
export var Spend;
(function (Spend) {
  /**
   * @internal
   */
  Spend.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Spend || (Spend = {}));
export var BudgetType;
(function (BudgetType) {
  BudgetType["Cost"] = "COST";
  BudgetType["RICoverage"] = "RI_COVERAGE";
  BudgetType["RIUtilization"] = "RI_UTILIZATION";
  BudgetType["SPCoverage"] = "SAVINGS_PLANS_COVERAGE";
  BudgetType["SPUtilization"] = "SAVINGS_PLANS_UTILIZATION";
  BudgetType["Usage"] = "USAGE";
})(BudgetType || (BudgetType = {}));
export var CalculatedSpend;
(function (CalculatedSpend) {
  /**
   * @internal
   */
  CalculatedSpend.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CalculatedSpend || (CalculatedSpend = {}));
export var CostTypes;
(function (CostTypes) {
  /**
   * @internal
   */
  CostTypes.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CostTypes || (CostTypes = {}));
export var TimePeriod;
(function (TimePeriod) {
  /**
   * @internal
   */
  TimePeriod.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TimePeriod || (TimePeriod = {}));
export var TimeUnit;
(function (TimeUnit) {
  TimeUnit["ANNUALLY"] = "ANNUALLY";
  TimeUnit["DAILY"] = "DAILY";
  TimeUnit["MONTHLY"] = "MONTHLY";
  TimeUnit["QUARTERLY"] = "QUARTERLY";
})(TimeUnit || (TimeUnit = {}));
export var Budget;
(function (Budget) {
  /**
   * @internal
   */
  Budget.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Budget || (Budget = {}));
export var ComparisonOperator;
(function (ComparisonOperator) {
  ComparisonOperator["EQUAL_TO"] = "EQUAL_TO";
  ComparisonOperator["GREATER_THAN"] = "GREATER_THAN";
  ComparisonOperator["LESS_THAN"] = "LESS_THAN";
})(ComparisonOperator || (ComparisonOperator = {}));
export var NotificationState;
(function (NotificationState) {
  NotificationState["ALARM"] = "ALARM";
  NotificationState["OK"] = "OK";
})(NotificationState || (NotificationState = {}));
export var Notification;
(function (Notification) {
  /**
   * @internal
   */
  Notification.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Notification || (Notification = {}));
export var NotificationWithSubscribers;
(function (NotificationWithSubscribers) {
  /**
   * @internal
   */
  NotificationWithSubscribers.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Subscribers && {
        Subscribers: obj.Subscribers.map(function (item) {
          return Subscriber.filterSensitiveLog(item);
        }),
      }
    );
  };
})(NotificationWithSubscribers || (NotificationWithSubscribers = {}));
export var CreateBudgetRequest;
(function (CreateBudgetRequest) {
  /**
   * @internal
   */
  CreateBudgetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBudgetRequest || (CreateBudgetRequest = {}));
export var CreateBudgetResponse;
(function (CreateBudgetResponse) {
  /**
   * @internal
   */
  CreateBudgetResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBudgetResponse || (CreateBudgetResponse = {}));
export var CreationLimitExceededException;
(function (CreationLimitExceededException) {
  /**
   * @internal
   */
  CreationLimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreationLimitExceededException || (CreationLimitExceededException = {}));
export var DuplicateRecordException;
(function (DuplicateRecordException) {
  /**
   * @internal
   */
  DuplicateRecordException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DuplicateRecordException || (DuplicateRecordException = {}));
export var InternalErrorException;
(function (InternalErrorException) {
  /**
   * @internal
   */
  InternalErrorException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InternalErrorException || (InternalErrorException = {}));
export var InvalidParameterException;
(function (InvalidParameterException) {
  /**
   * @internal
   */
  InvalidParameterException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidParameterException || (InvalidParameterException = {}));
export var CreateBudgetActionRequest;
(function (CreateBudgetActionRequest) {
  /**
   * @internal
   */
  CreateBudgetActionRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Subscribers && {
        Subscribers: obj.Subscribers.map(function (item) {
          return Subscriber.filterSensitiveLog(item);
        }),
      }
    );
  };
})(CreateBudgetActionRequest || (CreateBudgetActionRequest = {}));
export var CreateBudgetActionResponse;
(function (CreateBudgetActionResponse) {
  /**
   * @internal
   */
  CreateBudgetActionResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateBudgetActionResponse || (CreateBudgetActionResponse = {}));
export var NotFoundException;
(function (NotFoundException) {
  /**
   * @internal
   */
  NotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(NotFoundException || (NotFoundException = {}));
export var CreateNotificationRequest;
(function (CreateNotificationRequest) {
  /**
   * @internal
   */
  CreateNotificationRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Subscribers && {
        Subscribers: obj.Subscribers.map(function (item) {
          return Subscriber.filterSensitiveLog(item);
        }),
      }
    );
  };
})(CreateNotificationRequest || (CreateNotificationRequest = {}));
export var CreateNotificationResponse;
(function (CreateNotificationResponse) {
  /**
   * @internal
   */
  CreateNotificationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateNotificationResponse || (CreateNotificationResponse = {}));
export var CreateSubscriberRequest;
(function (CreateSubscriberRequest) {
  /**
   * @internal
   */
  CreateSubscriberRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Subscriber && { Subscriber: Subscriber.filterSensitiveLog(obj.Subscriber) });
  };
})(CreateSubscriberRequest || (CreateSubscriberRequest = {}));
export var CreateSubscriberResponse;
(function (CreateSubscriberResponse) {
  /**
   * @internal
   */
  CreateSubscriberResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateSubscriberResponse || (CreateSubscriberResponse = {}));
export var DeleteBudgetRequest;
(function (DeleteBudgetRequest) {
  /**
   * @internal
   */
  DeleteBudgetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBudgetRequest || (DeleteBudgetRequest = {}));
export var DeleteBudgetResponse;
(function (DeleteBudgetResponse) {
  /**
   * @internal
   */
  DeleteBudgetResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBudgetResponse || (DeleteBudgetResponse = {}));
export var DeleteBudgetActionRequest;
(function (DeleteBudgetActionRequest) {
  /**
   * @internal
   */
  DeleteBudgetActionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteBudgetActionRequest || (DeleteBudgetActionRequest = {}));
export var DeleteBudgetActionResponse;
(function (DeleteBudgetActionResponse) {
  /**
   * @internal
   */
  DeleteBudgetActionResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Action && { Action: Action.filterSensitiveLog(obj.Action) });
  };
})(DeleteBudgetActionResponse || (DeleteBudgetActionResponse = {}));
export var ResourceLockedException;
(function (ResourceLockedException) {
  /**
   * @internal
   */
  ResourceLockedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceLockedException || (ResourceLockedException = {}));
export var DeleteNotificationRequest;
(function (DeleteNotificationRequest) {
  /**
   * @internal
   */
  DeleteNotificationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteNotificationRequest || (DeleteNotificationRequest = {}));
export var DeleteNotificationResponse;
(function (DeleteNotificationResponse) {
  /**
   * @internal
   */
  DeleteNotificationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteNotificationResponse || (DeleteNotificationResponse = {}));
export var DeleteSubscriberRequest;
(function (DeleteSubscriberRequest) {
  /**
   * @internal
   */
  DeleteSubscriberRequest.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Subscriber && { Subscriber: Subscriber.filterSensitiveLog(obj.Subscriber) });
  };
})(DeleteSubscriberRequest || (DeleteSubscriberRequest = {}));
export var DeleteSubscriberResponse;
(function (DeleteSubscriberResponse) {
  /**
   * @internal
   */
  DeleteSubscriberResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteSubscriberResponse || (DeleteSubscriberResponse = {}));
export var DescribeBudgetRequest;
(function (DescribeBudgetRequest) {
  /**
   * @internal
   */
  DescribeBudgetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBudgetRequest || (DescribeBudgetRequest = {}));
export var DescribeBudgetResponse;
(function (DescribeBudgetResponse) {
  /**
   * @internal
   */
  DescribeBudgetResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBudgetResponse || (DescribeBudgetResponse = {}));
export var DescribeBudgetActionRequest;
(function (DescribeBudgetActionRequest) {
  /**
   * @internal
   */
  DescribeBudgetActionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBudgetActionRequest || (DescribeBudgetActionRequest = {}));
export var DescribeBudgetActionResponse;
(function (DescribeBudgetActionResponse) {
  /**
   * @internal
   */
  DescribeBudgetActionResponse.filterSensitiveLog = function (obj) {
    return __assign(__assign({}, obj), obj.Action && { Action: Action.filterSensitiveLog(obj.Action) });
  };
})(DescribeBudgetActionResponse || (DescribeBudgetActionResponse = {}));
export var DescribeBudgetActionHistoriesRequest;
(function (DescribeBudgetActionHistoriesRequest) {
  /**
   * @internal
   */
  DescribeBudgetActionHistoriesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBudgetActionHistoriesRequest || (DescribeBudgetActionHistoriesRequest = {}));
export var DescribeBudgetActionHistoriesResponse;
(function (DescribeBudgetActionHistoriesResponse) {
  /**
   * @internal
   */
  DescribeBudgetActionHistoriesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBudgetActionHistoriesResponse || (DescribeBudgetActionHistoriesResponse = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
  /**
   * @internal
   */
  InvalidNextTokenException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var DescribeBudgetActionsForAccountRequest;
(function (DescribeBudgetActionsForAccountRequest) {
  /**
   * @internal
   */
  DescribeBudgetActionsForAccountRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBudgetActionsForAccountRequest || (DescribeBudgetActionsForAccountRequest = {}));
export var DescribeBudgetActionsForAccountResponse;
(function (DescribeBudgetActionsForAccountResponse) {
  /**
   * @internal
   */
  DescribeBudgetActionsForAccountResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBudgetActionsForAccountResponse || (DescribeBudgetActionsForAccountResponse = {}));
export var DescribeBudgetActionsForBudgetRequest;
(function (DescribeBudgetActionsForBudgetRequest) {
  /**
   * @internal
   */
  DescribeBudgetActionsForBudgetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBudgetActionsForBudgetRequest || (DescribeBudgetActionsForBudgetRequest = {}));
export var DescribeBudgetActionsForBudgetResponse;
(function (DescribeBudgetActionsForBudgetResponse) {
  /**
   * @internal
   */
  DescribeBudgetActionsForBudgetResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBudgetActionsForBudgetResponse || (DescribeBudgetActionsForBudgetResponse = {}));
export var DescribeBudgetPerformanceHistoryRequest;
(function (DescribeBudgetPerformanceHistoryRequest) {
  /**
   * @internal
   */
  DescribeBudgetPerformanceHistoryRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBudgetPerformanceHistoryRequest || (DescribeBudgetPerformanceHistoryRequest = {}));
export var BudgetedAndActualAmounts;
(function (BudgetedAndActualAmounts) {
  /**
   * @internal
   */
  BudgetedAndActualAmounts.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BudgetedAndActualAmounts || (BudgetedAndActualAmounts = {}));
export var BudgetPerformanceHistory;
(function (BudgetPerformanceHistory) {
  /**
   * @internal
   */
  BudgetPerformanceHistory.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BudgetPerformanceHistory || (BudgetPerformanceHistory = {}));
export var DescribeBudgetPerformanceHistoryResponse;
(function (DescribeBudgetPerformanceHistoryResponse) {
  /**
   * @internal
   */
  DescribeBudgetPerformanceHistoryResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBudgetPerformanceHistoryResponse || (DescribeBudgetPerformanceHistoryResponse = {}));
export var ExpiredNextTokenException;
(function (ExpiredNextTokenException) {
  /**
   * @internal
   */
  ExpiredNextTokenException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExpiredNextTokenException || (ExpiredNextTokenException = {}));
export var DescribeBudgetsRequest;
(function (DescribeBudgetsRequest) {
  /**
   * @internal
   */
  DescribeBudgetsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBudgetsRequest || (DescribeBudgetsRequest = {}));
export var DescribeBudgetsResponse;
(function (DescribeBudgetsResponse) {
  /**
   * @internal
   */
  DescribeBudgetsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeBudgetsResponse || (DescribeBudgetsResponse = {}));
export var DescribeNotificationsForBudgetRequest;
(function (DescribeNotificationsForBudgetRequest) {
  /**
   * @internal
   */
  DescribeNotificationsForBudgetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeNotificationsForBudgetRequest || (DescribeNotificationsForBudgetRequest = {}));
export var DescribeNotificationsForBudgetResponse;
(function (DescribeNotificationsForBudgetResponse) {
  /**
   * @internal
   */
  DescribeNotificationsForBudgetResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeNotificationsForBudgetResponse || (DescribeNotificationsForBudgetResponse = {}));
export var DescribeSubscribersForNotificationRequest;
(function (DescribeSubscribersForNotificationRequest) {
  /**
   * @internal
   */
  DescribeSubscribersForNotificationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeSubscribersForNotificationRequest || (DescribeSubscribersForNotificationRequest = {}));
export var DescribeSubscribersForNotificationResponse;
(function (DescribeSubscribersForNotificationResponse) {
  /**
   * @internal
   */
  DescribeSubscribersForNotificationResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Subscribers && {
        Subscribers: obj.Subscribers.map(function (item) {
          return Subscriber.filterSensitiveLog(item);
        }),
      }
    );
  };
})(DescribeSubscribersForNotificationResponse || (DescribeSubscribersForNotificationResponse = {}));
export var ExecutionType;
(function (ExecutionType) {
  ExecutionType["ApproveBudgetAction"] = "APPROVE_BUDGET_ACTION";
  ExecutionType["ResetBudgetAction"] = "RESET_BUDGET_ACTION";
  ExecutionType["RetryBudgetAction"] = "RETRY_BUDGET_ACTION";
  ExecutionType["ReverseBudgetAction"] = "REVERSE_BUDGET_ACTION";
})(ExecutionType || (ExecutionType = {}));
export var ExecuteBudgetActionRequest;
(function (ExecuteBudgetActionRequest) {
  /**
   * @internal
   */
  ExecuteBudgetActionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExecuteBudgetActionRequest || (ExecuteBudgetActionRequest = {}));
export var ExecuteBudgetActionResponse;
(function (ExecuteBudgetActionResponse) {
  /**
   * @internal
   */
  ExecuteBudgetActionResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExecuteBudgetActionResponse || (ExecuteBudgetActionResponse = {}));
export var UpdateBudgetRequest;
(function (UpdateBudgetRequest) {
  /**
   * @internal
   */
  UpdateBudgetRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBudgetRequest || (UpdateBudgetRequest = {}));
export var UpdateBudgetResponse;
(function (UpdateBudgetResponse) {
  /**
   * @internal
   */
  UpdateBudgetResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateBudgetResponse || (UpdateBudgetResponse = {}));
export var UpdateBudgetActionRequest;
(function (UpdateBudgetActionRequest) {
  /**
   * @internal
   */
  UpdateBudgetActionRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign({}, obj),
      obj.Subscribers && {
        Subscribers: obj.Subscribers.map(function (item) {
          return Subscriber.filterSensitiveLog(item);
        }),
      }
    );
  };
})(UpdateBudgetActionRequest || (UpdateBudgetActionRequest = {}));
export var UpdateBudgetActionResponse;
(function (UpdateBudgetActionResponse) {
  /**
   * @internal
   */
  UpdateBudgetActionResponse.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(__assign({}, obj), obj.OldAction && { OldAction: Action.filterSensitiveLog(obj.OldAction) }),
      obj.NewAction && { NewAction: Action.filterSensitiveLog(obj.NewAction) }
    );
  };
})(UpdateBudgetActionResponse || (UpdateBudgetActionResponse = {}));
export var UpdateNotificationRequest;
(function (UpdateNotificationRequest) {
  /**
   * @internal
   */
  UpdateNotificationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateNotificationRequest || (UpdateNotificationRequest = {}));
export var UpdateNotificationResponse;
(function (UpdateNotificationResponse) {
  /**
   * @internal
   */
  UpdateNotificationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateNotificationResponse || (UpdateNotificationResponse = {}));
export var UpdateSubscriberRequest;
(function (UpdateSubscriberRequest) {
  /**
   * @internal
   */
  UpdateSubscriberRequest.filterSensitiveLog = function (obj) {
    return __assign(
      __assign(
        __assign({}, obj),
        obj.OldSubscriber && { OldSubscriber: Subscriber.filterSensitiveLog(obj.OldSubscriber) }
      ),
      obj.NewSubscriber && { NewSubscriber: Subscriber.filterSensitiveLog(obj.NewSubscriber) }
    );
  };
})(UpdateSubscriberRequest || (UpdateSubscriberRequest = {}));
export var UpdateSubscriberResponse;
(function (UpdateSubscriberResponse) {
  /**
   * @internal
   */
  UpdateSubscriberResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateSubscriberResponse || (UpdateSubscriberResponse = {}));
//# sourceMappingURL=models_0.js.map
