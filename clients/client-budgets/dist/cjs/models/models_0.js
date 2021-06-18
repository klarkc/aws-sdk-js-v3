"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSubscriberRequest =
  exports.DeleteNotificationResponse =
  exports.DeleteNotificationRequest =
  exports.ResourceLockedException =
  exports.DeleteBudgetActionResponse =
  exports.DeleteBudgetActionRequest =
  exports.DeleteBudgetResponse =
  exports.DeleteBudgetRequest =
  exports.CreateSubscriberResponse =
  exports.CreateSubscriberRequest =
  exports.CreateNotificationResponse =
  exports.CreateNotificationRequest =
  exports.NotFoundException =
  exports.CreateBudgetActionResponse =
  exports.CreateBudgetActionRequest =
  exports.InvalidParameterException =
  exports.InternalErrorException =
  exports.DuplicateRecordException =
  exports.CreationLimitExceededException =
  exports.CreateBudgetResponse =
  exports.CreateBudgetRequest =
  exports.NotificationWithSubscribers =
  exports.Notification =
  exports.NotificationState =
  exports.ComparisonOperator =
  exports.Budget =
  exports.TimeUnit =
  exports.TimePeriod =
  exports.CostTypes =
  exports.CalculatedSpend =
  exports.BudgetType =
  exports.Spend =
  exports.ActionHistory =
  exports.EventType =
  exports.ActionHistoryDetails =
  exports.Action =
  exports.Subscriber =
  exports.SubscriptionType =
  exports.ActionStatus =
  exports.NotificationType =
  exports.Definition =
  exports.SsmActionDefinition =
  exports.ActionSubType =
  exports.ScpActionDefinition =
  exports.IamActionDefinition =
  exports.ApprovalModel =
  exports.ActionType =
  exports.ActionThreshold =
  exports.ThresholdType =
  exports.AccessDeniedException =
    void 0;
exports.UpdateSubscriberResponse =
  exports.UpdateSubscriberRequest =
  exports.UpdateNotificationResponse =
  exports.UpdateNotificationRequest =
  exports.UpdateBudgetActionResponse =
  exports.UpdateBudgetActionRequest =
  exports.UpdateBudgetResponse =
  exports.UpdateBudgetRequest =
  exports.ExecuteBudgetActionResponse =
  exports.ExecuteBudgetActionRequest =
  exports.ExecutionType =
  exports.DescribeSubscribersForNotificationResponse =
  exports.DescribeSubscribersForNotificationRequest =
  exports.DescribeNotificationsForBudgetResponse =
  exports.DescribeNotificationsForBudgetRequest =
  exports.DescribeBudgetsResponse =
  exports.DescribeBudgetsRequest =
  exports.ExpiredNextTokenException =
  exports.DescribeBudgetPerformanceHistoryResponse =
  exports.BudgetPerformanceHistory =
  exports.BudgetedAndActualAmounts =
  exports.DescribeBudgetPerformanceHistoryRequest =
  exports.DescribeBudgetActionsForBudgetResponse =
  exports.DescribeBudgetActionsForBudgetRequest =
  exports.DescribeBudgetActionsForAccountResponse =
  exports.DescribeBudgetActionsForAccountRequest =
  exports.InvalidNextTokenException =
  exports.DescribeBudgetActionHistoriesResponse =
  exports.DescribeBudgetActionHistoriesRequest =
  exports.DescribeBudgetActionResponse =
  exports.DescribeBudgetActionRequest =
  exports.DescribeBudgetResponse =
  exports.DescribeBudgetRequest =
  exports.DeleteSubscriberResponse =
    void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {})));
var ThresholdType;
(function (ThresholdType) {
  ThresholdType["ABSOLUTE_VALUE"] = "ABSOLUTE_VALUE";
  ThresholdType["PERCENTAGE"] = "PERCENTAGE";
})((ThresholdType = exports.ThresholdType || (exports.ThresholdType = {})));
var ActionThreshold;
(function (ActionThreshold) {
  /**
   * @internal
   */
  ActionThreshold.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ActionThreshold = exports.ActionThreshold || (exports.ActionThreshold = {})));
var ActionType;
(function (ActionType) {
  ActionType["IAM"] = "APPLY_IAM_POLICY";
  ActionType["SCP"] = "APPLY_SCP_POLICY";
  ActionType["SSM"] = "RUN_SSM_DOCUMENTS";
})((ActionType = exports.ActionType || (exports.ActionType = {})));
var ApprovalModel;
(function (ApprovalModel) {
  ApprovalModel["AUTO"] = "AUTOMATIC";
  ApprovalModel["MANUAL"] = "MANUAL";
})((ApprovalModel = exports.ApprovalModel || (exports.ApprovalModel = {})));
var IamActionDefinition;
(function (IamActionDefinition) {
  /**
   * @internal
   */
  IamActionDefinition.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((IamActionDefinition = exports.IamActionDefinition || (exports.IamActionDefinition = {})));
var ScpActionDefinition;
(function (ScpActionDefinition) {
  /**
   * @internal
   */
  ScpActionDefinition.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ScpActionDefinition = exports.ScpActionDefinition || (exports.ScpActionDefinition = {})));
var ActionSubType;
(function (ActionSubType) {
  ActionSubType["STOP_EC2"] = "STOP_EC2_INSTANCES";
  ActionSubType["STOP_RDS"] = "STOP_RDS_INSTANCES";
})((ActionSubType = exports.ActionSubType || (exports.ActionSubType = {})));
var SsmActionDefinition;
(function (SsmActionDefinition) {
  /**
   * @internal
   */
  SsmActionDefinition.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SsmActionDefinition = exports.SsmActionDefinition || (exports.SsmActionDefinition = {})));
var Definition;
(function (Definition) {
  /**
   * @internal
   */
  Definition.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Definition = exports.Definition || (exports.Definition = {})));
var NotificationType;
(function (NotificationType) {
  NotificationType["ACTUAL"] = "ACTUAL";
  NotificationType["FORECASTED"] = "FORECASTED";
})((NotificationType = exports.NotificationType || (exports.NotificationType = {})));
var ActionStatus;
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
})((ActionStatus = exports.ActionStatus || (exports.ActionStatus = {})));
var SubscriptionType;
(function (SubscriptionType) {
  SubscriptionType["EMAIL"] = "EMAIL";
  SubscriptionType["SNS"] = "SNS";
})((SubscriptionType = exports.SubscriptionType || (exports.SubscriptionType = {})));
var Subscriber;
(function (Subscriber) {
  /**
   * @internal
   */
  Subscriber.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Address && { Address: smithy_client_1.SENSITIVE_STRING }),
  });
})((Subscriber = exports.Subscriber || (exports.Subscriber = {})));
var Action;
(function (Action) {
  /**
   * @internal
   */
  Action.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => Subscriber.filterSensitiveLog(item)) }),
  });
})((Action = exports.Action || (exports.Action = {})));
var ActionHistoryDetails;
(function (ActionHistoryDetails) {
  /**
   * @internal
   */
  ActionHistoryDetails.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Action && { Action: Action.filterSensitiveLog(obj.Action) }),
  });
})((ActionHistoryDetails = exports.ActionHistoryDetails || (exports.ActionHistoryDetails = {})));
var EventType;
(function (EventType) {
  EventType["CreateAction"] = "CREATE_ACTION";
  EventType["DeleteAction"] = "DELETE_ACTION";
  EventType["ExecuteAction"] = "EXECUTE_ACTION";
  EventType["System"] = "SYSTEM";
  EventType["UpdateAction"] = "UPDATE_ACTION";
})((EventType = exports.EventType || (exports.EventType = {})));
var ActionHistory;
(function (ActionHistory) {
  /**
   * @internal
   */
  ActionHistory.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ActionHistoryDetails && {
      ActionHistoryDetails: ActionHistoryDetails.filterSensitiveLog(obj.ActionHistoryDetails),
    }),
  });
})((ActionHistory = exports.ActionHistory || (exports.ActionHistory = {})));
var Spend;
(function (Spend) {
  /**
   * @internal
   */
  Spend.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Spend = exports.Spend || (exports.Spend = {})));
var BudgetType;
(function (BudgetType) {
  BudgetType["Cost"] = "COST";
  BudgetType["RICoverage"] = "RI_COVERAGE";
  BudgetType["RIUtilization"] = "RI_UTILIZATION";
  BudgetType["SPCoverage"] = "SAVINGS_PLANS_COVERAGE";
  BudgetType["SPUtilization"] = "SAVINGS_PLANS_UTILIZATION";
  BudgetType["Usage"] = "USAGE";
})((BudgetType = exports.BudgetType || (exports.BudgetType = {})));
var CalculatedSpend;
(function (CalculatedSpend) {
  /**
   * @internal
   */
  CalculatedSpend.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CalculatedSpend = exports.CalculatedSpend || (exports.CalculatedSpend = {})));
var CostTypes;
(function (CostTypes) {
  /**
   * @internal
   */
  CostTypes.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CostTypes = exports.CostTypes || (exports.CostTypes = {})));
var TimePeriod;
(function (TimePeriod) {
  /**
   * @internal
   */
  TimePeriod.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TimePeriod = exports.TimePeriod || (exports.TimePeriod = {})));
var TimeUnit;
(function (TimeUnit) {
  TimeUnit["ANNUALLY"] = "ANNUALLY";
  TimeUnit["DAILY"] = "DAILY";
  TimeUnit["MONTHLY"] = "MONTHLY";
  TimeUnit["QUARTERLY"] = "QUARTERLY";
})((TimeUnit = exports.TimeUnit || (exports.TimeUnit = {})));
var Budget;
(function (Budget) {
  /**
   * @internal
   */
  Budget.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Budget = exports.Budget || (exports.Budget = {})));
var ComparisonOperator;
(function (ComparisonOperator) {
  ComparisonOperator["EQUAL_TO"] = "EQUAL_TO";
  ComparisonOperator["GREATER_THAN"] = "GREATER_THAN";
  ComparisonOperator["LESS_THAN"] = "LESS_THAN";
})((ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {})));
var NotificationState;
(function (NotificationState) {
  NotificationState["ALARM"] = "ALARM";
  NotificationState["OK"] = "OK";
})((NotificationState = exports.NotificationState || (exports.NotificationState = {})));
var Notification;
(function (Notification) {
  /**
   * @internal
   */
  Notification.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Notification = exports.Notification || (exports.Notification = {})));
var NotificationWithSubscribers;
(function (NotificationWithSubscribers) {
  /**
   * @internal
   */
  NotificationWithSubscribers.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => Subscriber.filterSensitiveLog(item)) }),
  });
})((NotificationWithSubscribers = exports.NotificationWithSubscribers || (exports.NotificationWithSubscribers = {})));
var CreateBudgetRequest;
(function (CreateBudgetRequest) {
  /**
   * @internal
   */
  CreateBudgetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBudgetRequest = exports.CreateBudgetRequest || (exports.CreateBudgetRequest = {})));
var CreateBudgetResponse;
(function (CreateBudgetResponse) {
  /**
   * @internal
   */
  CreateBudgetResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBudgetResponse = exports.CreateBudgetResponse || (exports.CreateBudgetResponse = {})));
var CreationLimitExceededException;
(function (CreationLimitExceededException) {
  /**
   * @internal
   */
  CreationLimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreationLimitExceededException =
    exports.CreationLimitExceededException || (exports.CreationLimitExceededException = {}))
);
var DuplicateRecordException;
(function (DuplicateRecordException) {
  /**
   * @internal
   */
  DuplicateRecordException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DuplicateRecordException = exports.DuplicateRecordException || (exports.DuplicateRecordException = {})));
var InternalErrorException;
(function (InternalErrorException) {
  /**
   * @internal
   */
  InternalErrorException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternalErrorException = exports.InternalErrorException || (exports.InternalErrorException = {})));
var InvalidParameterException;
(function (InvalidParameterException) {
  /**
   * @internal
   */
  InvalidParameterException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {})));
var CreateBudgetActionRequest;
(function (CreateBudgetActionRequest) {
  /**
   * @internal
   */
  CreateBudgetActionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => Subscriber.filterSensitiveLog(item)) }),
  });
})((CreateBudgetActionRequest = exports.CreateBudgetActionRequest || (exports.CreateBudgetActionRequest = {})));
var CreateBudgetActionResponse;
(function (CreateBudgetActionResponse) {
  /**
   * @internal
   */
  CreateBudgetActionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateBudgetActionResponse = exports.CreateBudgetActionResponse || (exports.CreateBudgetActionResponse = {})));
var NotFoundException;
(function (NotFoundException) {
  /**
   * @internal
   */
  NotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NotFoundException = exports.NotFoundException || (exports.NotFoundException = {})));
var CreateNotificationRequest;
(function (CreateNotificationRequest) {
  /**
   * @internal
   */
  CreateNotificationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => Subscriber.filterSensitiveLog(item)) }),
  });
})((CreateNotificationRequest = exports.CreateNotificationRequest || (exports.CreateNotificationRequest = {})));
var CreateNotificationResponse;
(function (CreateNotificationResponse) {
  /**
   * @internal
   */
  CreateNotificationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateNotificationResponse = exports.CreateNotificationResponse || (exports.CreateNotificationResponse = {})));
var CreateSubscriberRequest;
(function (CreateSubscriberRequest) {
  /**
   * @internal
   */
  CreateSubscriberRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Subscriber && { Subscriber: Subscriber.filterSensitiveLog(obj.Subscriber) }),
  });
})((CreateSubscriberRequest = exports.CreateSubscriberRequest || (exports.CreateSubscriberRequest = {})));
var CreateSubscriberResponse;
(function (CreateSubscriberResponse) {
  /**
   * @internal
   */
  CreateSubscriberResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateSubscriberResponse = exports.CreateSubscriberResponse || (exports.CreateSubscriberResponse = {})));
var DeleteBudgetRequest;
(function (DeleteBudgetRequest) {
  /**
   * @internal
   */
  DeleteBudgetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBudgetRequest = exports.DeleteBudgetRequest || (exports.DeleteBudgetRequest = {})));
var DeleteBudgetResponse;
(function (DeleteBudgetResponse) {
  /**
   * @internal
   */
  DeleteBudgetResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBudgetResponse = exports.DeleteBudgetResponse || (exports.DeleteBudgetResponse = {})));
var DeleteBudgetActionRequest;
(function (DeleteBudgetActionRequest) {
  /**
   * @internal
   */
  DeleteBudgetActionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteBudgetActionRequest = exports.DeleteBudgetActionRequest || (exports.DeleteBudgetActionRequest = {})));
var DeleteBudgetActionResponse;
(function (DeleteBudgetActionResponse) {
  /**
   * @internal
   */
  DeleteBudgetActionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Action && { Action: Action.filterSensitiveLog(obj.Action) }),
  });
})((DeleteBudgetActionResponse = exports.DeleteBudgetActionResponse || (exports.DeleteBudgetActionResponse = {})));
var ResourceLockedException;
(function (ResourceLockedException) {
  /**
   * @internal
   */
  ResourceLockedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceLockedException = exports.ResourceLockedException || (exports.ResourceLockedException = {})));
var DeleteNotificationRequest;
(function (DeleteNotificationRequest) {
  /**
   * @internal
   */
  DeleteNotificationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteNotificationRequest = exports.DeleteNotificationRequest || (exports.DeleteNotificationRequest = {})));
var DeleteNotificationResponse;
(function (DeleteNotificationResponse) {
  /**
   * @internal
   */
  DeleteNotificationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteNotificationResponse = exports.DeleteNotificationResponse || (exports.DeleteNotificationResponse = {})));
var DeleteSubscriberRequest;
(function (DeleteSubscriberRequest) {
  /**
   * @internal
   */
  DeleteSubscriberRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Subscriber && { Subscriber: Subscriber.filterSensitiveLog(obj.Subscriber) }),
  });
})((DeleteSubscriberRequest = exports.DeleteSubscriberRequest || (exports.DeleteSubscriberRequest = {})));
var DeleteSubscriberResponse;
(function (DeleteSubscriberResponse) {
  /**
   * @internal
   */
  DeleteSubscriberResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteSubscriberResponse = exports.DeleteSubscriberResponse || (exports.DeleteSubscriberResponse = {})));
var DescribeBudgetRequest;
(function (DescribeBudgetRequest) {
  /**
   * @internal
   */
  DescribeBudgetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeBudgetRequest = exports.DescribeBudgetRequest || (exports.DescribeBudgetRequest = {})));
var DescribeBudgetResponse;
(function (DescribeBudgetResponse) {
  /**
   * @internal
   */
  DescribeBudgetResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeBudgetResponse = exports.DescribeBudgetResponse || (exports.DescribeBudgetResponse = {})));
var DescribeBudgetActionRequest;
(function (DescribeBudgetActionRequest) {
  /**
   * @internal
   */
  DescribeBudgetActionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeBudgetActionRequest = exports.DescribeBudgetActionRequest || (exports.DescribeBudgetActionRequest = {})));
var DescribeBudgetActionResponse;
(function (DescribeBudgetActionResponse) {
  /**
   * @internal
   */
  DescribeBudgetActionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Action && { Action: Action.filterSensitiveLog(obj.Action) }),
  });
})(
  (DescribeBudgetActionResponse = exports.DescribeBudgetActionResponse || (exports.DescribeBudgetActionResponse = {}))
);
var DescribeBudgetActionHistoriesRequest;
(function (DescribeBudgetActionHistoriesRequest) {
  /**
   * @internal
   */
  DescribeBudgetActionHistoriesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeBudgetActionHistoriesRequest =
    exports.DescribeBudgetActionHistoriesRequest || (exports.DescribeBudgetActionHistoriesRequest = {}))
);
var DescribeBudgetActionHistoriesResponse;
(function (DescribeBudgetActionHistoriesResponse) {
  /**
   * @internal
   */
  DescribeBudgetActionHistoriesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeBudgetActionHistoriesResponse =
    exports.DescribeBudgetActionHistoriesResponse || (exports.DescribeBudgetActionHistoriesResponse = {}))
);
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
  /**
   * @internal
   */
  InvalidNextTokenException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {})));
var DescribeBudgetActionsForAccountRequest;
(function (DescribeBudgetActionsForAccountRequest) {
  /**
   * @internal
   */
  DescribeBudgetActionsForAccountRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeBudgetActionsForAccountRequest =
    exports.DescribeBudgetActionsForAccountRequest || (exports.DescribeBudgetActionsForAccountRequest = {}))
);
var DescribeBudgetActionsForAccountResponse;
(function (DescribeBudgetActionsForAccountResponse) {
  /**
   * @internal
   */
  DescribeBudgetActionsForAccountResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeBudgetActionsForAccountResponse =
    exports.DescribeBudgetActionsForAccountResponse || (exports.DescribeBudgetActionsForAccountResponse = {}))
);
var DescribeBudgetActionsForBudgetRequest;
(function (DescribeBudgetActionsForBudgetRequest) {
  /**
   * @internal
   */
  DescribeBudgetActionsForBudgetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeBudgetActionsForBudgetRequest =
    exports.DescribeBudgetActionsForBudgetRequest || (exports.DescribeBudgetActionsForBudgetRequest = {}))
);
var DescribeBudgetActionsForBudgetResponse;
(function (DescribeBudgetActionsForBudgetResponse) {
  /**
   * @internal
   */
  DescribeBudgetActionsForBudgetResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeBudgetActionsForBudgetResponse =
    exports.DescribeBudgetActionsForBudgetResponse || (exports.DescribeBudgetActionsForBudgetResponse = {}))
);
var DescribeBudgetPerformanceHistoryRequest;
(function (DescribeBudgetPerformanceHistoryRequest) {
  /**
   * @internal
   */
  DescribeBudgetPerformanceHistoryRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeBudgetPerformanceHistoryRequest =
    exports.DescribeBudgetPerformanceHistoryRequest || (exports.DescribeBudgetPerformanceHistoryRequest = {}))
);
var BudgetedAndActualAmounts;
(function (BudgetedAndActualAmounts) {
  /**
   * @internal
   */
  BudgetedAndActualAmounts.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BudgetedAndActualAmounts = exports.BudgetedAndActualAmounts || (exports.BudgetedAndActualAmounts = {})));
var BudgetPerformanceHistory;
(function (BudgetPerformanceHistory) {
  /**
   * @internal
   */
  BudgetPerformanceHistory.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BudgetPerformanceHistory = exports.BudgetPerformanceHistory || (exports.BudgetPerformanceHistory = {})));
var DescribeBudgetPerformanceHistoryResponse;
(function (DescribeBudgetPerformanceHistoryResponse) {
  /**
   * @internal
   */
  DescribeBudgetPerformanceHistoryResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeBudgetPerformanceHistoryResponse =
    exports.DescribeBudgetPerformanceHistoryResponse || (exports.DescribeBudgetPerformanceHistoryResponse = {}))
);
var ExpiredNextTokenException;
(function (ExpiredNextTokenException) {
  /**
   * @internal
   */
  ExpiredNextTokenException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExpiredNextTokenException = exports.ExpiredNextTokenException || (exports.ExpiredNextTokenException = {})));
var DescribeBudgetsRequest;
(function (DescribeBudgetsRequest) {
  /**
   * @internal
   */
  DescribeBudgetsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeBudgetsRequest = exports.DescribeBudgetsRequest || (exports.DescribeBudgetsRequest = {})));
var DescribeBudgetsResponse;
(function (DescribeBudgetsResponse) {
  /**
   * @internal
   */
  DescribeBudgetsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeBudgetsResponse = exports.DescribeBudgetsResponse || (exports.DescribeBudgetsResponse = {})));
var DescribeNotificationsForBudgetRequest;
(function (DescribeNotificationsForBudgetRequest) {
  /**
   * @internal
   */
  DescribeNotificationsForBudgetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeNotificationsForBudgetRequest =
    exports.DescribeNotificationsForBudgetRequest || (exports.DescribeNotificationsForBudgetRequest = {}))
);
var DescribeNotificationsForBudgetResponse;
(function (DescribeNotificationsForBudgetResponse) {
  /**
   * @internal
   */
  DescribeNotificationsForBudgetResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeNotificationsForBudgetResponse =
    exports.DescribeNotificationsForBudgetResponse || (exports.DescribeNotificationsForBudgetResponse = {}))
);
var DescribeSubscribersForNotificationRequest;
(function (DescribeSubscribersForNotificationRequest) {
  /**
   * @internal
   */
  DescribeSubscribersForNotificationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeSubscribersForNotificationRequest =
    exports.DescribeSubscribersForNotificationRequest || (exports.DescribeSubscribersForNotificationRequest = {}))
);
var DescribeSubscribersForNotificationResponse;
(function (DescribeSubscribersForNotificationResponse) {
  /**
   * @internal
   */
  DescribeSubscribersForNotificationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => Subscriber.filterSensitiveLog(item)) }),
  });
})(
  (DescribeSubscribersForNotificationResponse =
    exports.DescribeSubscribersForNotificationResponse || (exports.DescribeSubscribersForNotificationResponse = {}))
);
var ExecutionType;
(function (ExecutionType) {
  ExecutionType["ApproveBudgetAction"] = "APPROVE_BUDGET_ACTION";
  ExecutionType["ResetBudgetAction"] = "RESET_BUDGET_ACTION";
  ExecutionType["RetryBudgetAction"] = "RETRY_BUDGET_ACTION";
  ExecutionType["ReverseBudgetAction"] = "REVERSE_BUDGET_ACTION";
})((ExecutionType = exports.ExecutionType || (exports.ExecutionType = {})));
var ExecuteBudgetActionRequest;
(function (ExecuteBudgetActionRequest) {
  /**
   * @internal
   */
  ExecuteBudgetActionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExecuteBudgetActionRequest = exports.ExecuteBudgetActionRequest || (exports.ExecuteBudgetActionRequest = {})));
var ExecuteBudgetActionResponse;
(function (ExecuteBudgetActionResponse) {
  /**
   * @internal
   */
  ExecuteBudgetActionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExecuteBudgetActionResponse = exports.ExecuteBudgetActionResponse || (exports.ExecuteBudgetActionResponse = {})));
var UpdateBudgetRequest;
(function (UpdateBudgetRequest) {
  /**
   * @internal
   */
  UpdateBudgetRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateBudgetRequest = exports.UpdateBudgetRequest || (exports.UpdateBudgetRequest = {})));
var UpdateBudgetResponse;
(function (UpdateBudgetResponse) {
  /**
   * @internal
   */
  UpdateBudgetResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateBudgetResponse = exports.UpdateBudgetResponse || (exports.UpdateBudgetResponse = {})));
var UpdateBudgetActionRequest;
(function (UpdateBudgetActionRequest) {
  /**
   * @internal
   */
  UpdateBudgetActionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Subscribers && { Subscribers: obj.Subscribers.map((item) => Subscriber.filterSensitiveLog(item)) }),
  });
})((UpdateBudgetActionRequest = exports.UpdateBudgetActionRequest || (exports.UpdateBudgetActionRequest = {})));
var UpdateBudgetActionResponse;
(function (UpdateBudgetActionResponse) {
  /**
   * @internal
   */
  UpdateBudgetActionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OldAction && { OldAction: Action.filterSensitiveLog(obj.OldAction) }),
    ...(obj.NewAction && { NewAction: Action.filterSensitiveLog(obj.NewAction) }),
  });
})((UpdateBudgetActionResponse = exports.UpdateBudgetActionResponse || (exports.UpdateBudgetActionResponse = {})));
var UpdateNotificationRequest;
(function (UpdateNotificationRequest) {
  /**
   * @internal
   */
  UpdateNotificationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateNotificationRequest = exports.UpdateNotificationRequest || (exports.UpdateNotificationRequest = {})));
var UpdateNotificationResponse;
(function (UpdateNotificationResponse) {
  /**
   * @internal
   */
  UpdateNotificationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateNotificationResponse = exports.UpdateNotificationResponse || (exports.UpdateNotificationResponse = {})));
var UpdateSubscriberRequest;
(function (UpdateSubscriberRequest) {
  /**
   * @internal
   */
  UpdateSubscriberRequest.filterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.OldSubscriber && { OldSubscriber: Subscriber.filterSensitiveLog(obj.OldSubscriber) }),
    ...(obj.NewSubscriber && { NewSubscriber: Subscriber.filterSensitiveLog(obj.NewSubscriber) }),
  });
})((UpdateSubscriberRequest = exports.UpdateSubscriberRequest || (exports.UpdateSubscriberRequest = {})));
var UpdateSubscriberResponse;
(function (UpdateSubscriberResponse) {
  /**
   * @internal
   */
  UpdateSubscriberResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateSubscriberResponse = exports.UpdateSubscriberResponse || (exports.UpdateSubscriberResponse = {})));
//# sourceMappingURL=models_0.js.map
