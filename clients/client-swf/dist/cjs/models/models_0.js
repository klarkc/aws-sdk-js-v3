"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleLambdaFunctionDecisionAttributes = exports.ScheduleActivityTaskDecisionAttributes = exports.RequestCancelExternalWorkflowExecutionDecisionAttributes = exports.RequestCancelActivityTaskDecisionAttributes = exports.RecordMarkerDecisionAttributes = exports.FailWorkflowExecutionDecisionAttributes = exports.CountPendingDecisionTasksInput = exports.PendingTaskCount = exports.CountPendingActivityTasksInput = exports.CountOpenWorkflowExecutionsInput = exports.WorkflowExecutionCount = exports.UnknownResourceFault = exports.OperationNotPermittedFault = exports.CountClosedWorkflowExecutionsInput = exports.WorkflowTypeFilter = exports.TagFilter = exports.WorkflowExecutionFilter = exports.ExecutionTimeFilter = exports.ContinueAsNewWorkflowExecutionFailedEventAttributes = exports.ContinueAsNewWorkflowExecutionDecisionAttributes = exports.CompleteWorkflowExecutionFailedEventAttributes = exports.CompleteWorkflowExecutionDecisionAttributes = exports.CloseStatusFilter = exports.ChildWorkflowExecutionTimedOutEventAttributes = exports.ChildWorkflowExecutionTerminatedEventAttributes = exports.ChildWorkflowExecutionStartedEventAttributes = exports.ChildWorkflowExecutionFailedEventAttributes = exports.ChildWorkflowExecutionCompletedEventAttributes = exports.ChildWorkflowExecutionCanceledEventAttributes = exports.WorkflowType = exports.CancelWorkflowExecutionFailedEventAttributes = exports.CancelWorkflowExecutionDecisionAttributes = exports.CancelTimerFailedEventAttributes = exports.CancelTimerDecisionAttributes = exports.ActivityTypeInfos = exports.ActivityTypeDetail = exports.ActivityTypeInfo = exports.ActivityTypeConfiguration = exports.ActivityTaskTimedOutEventAttributes = exports.ActivityTaskStatus = exports.ActivityTaskStartedEventAttributes = exports.ActivityTaskScheduledEventAttributes = exports.TaskList = exports.ActivityTaskFailedEventAttributes = exports.ActivityTaskCompletedEventAttributes = exports.ActivityTaskCancelRequestedEventAttributes = exports.ActivityTaskCanceledEventAttributes = exports.ActivityTask = exports.WorkflowExecution = exports.ActivityType = void 0;
exports.DescribeActivityTypeInput = exports.DeprecateWorkflowTypeInput = exports.DomainDeprecatedFault = exports.DeprecateDomainInput = exports.TypeDeprecatedFault = exports.DeprecateActivityTypeInput = exports.DefaultUndefinedFault = exports.DecisionTask = exports.HistoryEvent = exports.WorkflowExecutionTimedOutEventAttributes = exports.WorkflowExecutionTerminatedEventAttributes = exports.WorkflowExecutionStartedEventAttributes = exports.WorkflowExecutionSignaledEventAttributes = exports.WorkflowExecutionFailedEventAttributes = exports.WorkflowExecutionContinuedAsNewEventAttributes = exports.WorkflowExecutionCompletedEventAttributes = exports.WorkflowExecutionCancelRequestedEventAttributes = exports.WorkflowExecutionCanceledEventAttributes = exports.TimerStartedEventAttributes = exports.TimerFiredEventAttributes = exports.TimerCanceledEventAttributes = exports.StartTimerFailedEventAttributes = exports.StartLambdaFunctionFailedEventAttributes = exports.StartChildWorkflowExecutionInitiatedEventAttributes = exports.StartChildWorkflowExecutionFailedEventAttributes = exports.SignalExternalWorkflowExecutionInitiatedEventAttributes = exports.SignalExternalWorkflowExecutionFailedEventAttributes = exports.ScheduleLambdaFunctionFailedEventAttributes = exports.ScheduleActivityTaskFailedEventAttributes = exports.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = exports.RequestCancelExternalWorkflowExecutionFailedEventAttributes = exports.RequestCancelActivityTaskFailedEventAttributes = exports.RecordMarkerFailedEventAttributes = exports.MarkerRecordedEventAttributes = exports.LambdaFunctionTimedOutEventAttributes = exports.LambdaFunctionStartedEventAttributes = exports.LambdaFunctionScheduledEventAttributes = exports.LambdaFunctionFailedEventAttributes = exports.LambdaFunctionCompletedEventAttributes = exports.FailWorkflowExecutionFailedEventAttributes = exports.ExternalWorkflowExecutionSignaledEventAttributes = exports.ExternalWorkflowExecutionCancelRequestedEventAttributes = exports.DecisionTaskTimedOutEventAttributes = exports.DecisionTaskStartedEventAttributes = exports.DecisionTaskScheduledEventAttributes = exports.DecisionTaskCompletedEventAttributes = exports.Decision = exports.StartTimerDecisionAttributes = exports.StartChildWorkflowExecutionDecisionAttributes = exports.SignalExternalWorkflowExecutionDecisionAttributes = void 0;
exports.UndeprecateWorkflowTypeInput = exports.UndeprecateDomainInput = exports.UndeprecateActivityTypeInput = exports.TerminateWorkflowExecutionInput = exports.TagResourceInput = exports.WorkflowExecutionAlreadyStartedFault = exports.StartWorkflowExecutionInput = exports.SignalWorkflowExecutionInput = exports.Run = exports.RespondDecisionTaskCompletedInput = exports.RespondActivityTaskFailedInput = exports.RespondActivityTaskCompletedInput = exports.RespondActivityTaskCanceledInput = exports.RequestCancelWorkflowExecutionInput = exports.RegisterWorkflowTypeInput = exports.TooManyTagsFault = exports.RegisterDomainInput = exports.TypeAlreadyExistsFault = exports.RegisterActivityTypeInput = exports.RecordActivityTaskHeartbeatInput = exports.PollForDecisionTaskInput = exports.PollForActivityTaskInput = exports.WorkflowTypeInfos = exports.ListWorkflowTypesInput = exports.ListTagsForResourceOutput = exports.ResourceTag = exports.ListTagsForResourceInput = exports.ListOpenWorkflowExecutionsInput = exports.ListDomainsInput = exports.WorkflowExecutionInfos = exports.ListClosedWorkflowExecutionsInput = exports.ListActivityTypesInput = exports.LimitExceededFault = exports.History = exports.GetWorkflowExecutionHistoryInput = exports.DomainInfos = exports.DomainAlreadyExistsFault = exports.WorkflowTypeDetail = exports.WorkflowTypeInfo = exports.WorkflowTypeConfiguration = exports.DescribeWorkflowTypeInput = exports.WorkflowExecutionDetail = exports.WorkflowExecutionOpenCounts = exports.WorkflowExecutionInfo = exports.WorkflowExecutionConfiguration = exports.DescribeWorkflowExecutionInput = exports.DomainDetail = exports.DomainInfo = exports.DomainConfiguration = exports.DescribeDomainInput = void 0;
exports.UntagResourceInput = void 0;
var ActivityType;
(function (ActivityType) {
    /**
     * @internal
     */
    ActivityType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityType = exports.ActivityType || (exports.ActivityType = {}));
var WorkflowExecution;
(function (WorkflowExecution) {
    /**
     * @internal
     */
    WorkflowExecution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecution = exports.WorkflowExecution || (exports.WorkflowExecution = {}));
var ActivityTask;
(function (ActivityTask) {
    /**
     * @internal
     */
    ActivityTask.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityTask = exports.ActivityTask || (exports.ActivityTask = {}));
var ActivityTaskCanceledEventAttributes;
(function (ActivityTaskCanceledEventAttributes) {
    /**
     * @internal
     */
    ActivityTaskCanceledEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityTaskCanceledEventAttributes = exports.ActivityTaskCanceledEventAttributes || (exports.ActivityTaskCanceledEventAttributes = {}));
var ActivityTaskCancelRequestedEventAttributes;
(function (ActivityTaskCancelRequestedEventAttributes) {
    /**
     * @internal
     */
    ActivityTaskCancelRequestedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityTaskCancelRequestedEventAttributes = exports.ActivityTaskCancelRequestedEventAttributes || (exports.ActivityTaskCancelRequestedEventAttributes = {}));
var ActivityTaskCompletedEventAttributes;
(function (ActivityTaskCompletedEventAttributes) {
    /**
     * @internal
     */
    ActivityTaskCompletedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityTaskCompletedEventAttributes = exports.ActivityTaskCompletedEventAttributes || (exports.ActivityTaskCompletedEventAttributes = {}));
var ActivityTaskFailedEventAttributes;
(function (ActivityTaskFailedEventAttributes) {
    /**
     * @internal
     */
    ActivityTaskFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityTaskFailedEventAttributes = exports.ActivityTaskFailedEventAttributes || (exports.ActivityTaskFailedEventAttributes = {}));
var TaskList;
(function (TaskList) {
    /**
     * @internal
     */
    TaskList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskList = exports.TaskList || (exports.TaskList = {}));
var ActivityTaskScheduledEventAttributes;
(function (ActivityTaskScheduledEventAttributes) {
    /**
     * @internal
     */
    ActivityTaskScheduledEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityTaskScheduledEventAttributes = exports.ActivityTaskScheduledEventAttributes || (exports.ActivityTaskScheduledEventAttributes = {}));
var ActivityTaskStartedEventAttributes;
(function (ActivityTaskStartedEventAttributes) {
    /**
     * @internal
     */
    ActivityTaskStartedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityTaskStartedEventAttributes = exports.ActivityTaskStartedEventAttributes || (exports.ActivityTaskStartedEventAttributes = {}));
var ActivityTaskStatus;
(function (ActivityTaskStatus) {
    /**
     * @internal
     */
    ActivityTaskStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityTaskStatus = exports.ActivityTaskStatus || (exports.ActivityTaskStatus = {}));
var ActivityTaskTimedOutEventAttributes;
(function (ActivityTaskTimedOutEventAttributes) {
    /**
     * @internal
     */
    ActivityTaskTimedOutEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityTaskTimedOutEventAttributes = exports.ActivityTaskTimedOutEventAttributes || (exports.ActivityTaskTimedOutEventAttributes = {}));
var ActivityTypeConfiguration;
(function (ActivityTypeConfiguration) {
    /**
     * @internal
     */
    ActivityTypeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityTypeConfiguration = exports.ActivityTypeConfiguration || (exports.ActivityTypeConfiguration = {}));
var ActivityTypeInfo;
(function (ActivityTypeInfo) {
    /**
     * @internal
     */
    ActivityTypeInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityTypeInfo = exports.ActivityTypeInfo || (exports.ActivityTypeInfo = {}));
var ActivityTypeDetail;
(function (ActivityTypeDetail) {
    /**
     * @internal
     */
    ActivityTypeDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityTypeDetail = exports.ActivityTypeDetail || (exports.ActivityTypeDetail = {}));
var ActivityTypeInfos;
(function (ActivityTypeInfos) {
    /**
     * @internal
     */
    ActivityTypeInfos.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityTypeInfos = exports.ActivityTypeInfos || (exports.ActivityTypeInfos = {}));
var CancelTimerDecisionAttributes;
(function (CancelTimerDecisionAttributes) {
    /**
     * @internal
     */
    CancelTimerDecisionAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelTimerDecisionAttributes = exports.CancelTimerDecisionAttributes || (exports.CancelTimerDecisionAttributes = {}));
var CancelTimerFailedEventAttributes;
(function (CancelTimerFailedEventAttributes) {
    /**
     * @internal
     */
    CancelTimerFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelTimerFailedEventAttributes = exports.CancelTimerFailedEventAttributes || (exports.CancelTimerFailedEventAttributes = {}));
var CancelWorkflowExecutionDecisionAttributes;
(function (CancelWorkflowExecutionDecisionAttributes) {
    /**
     * @internal
     */
    CancelWorkflowExecutionDecisionAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelWorkflowExecutionDecisionAttributes = exports.CancelWorkflowExecutionDecisionAttributes || (exports.CancelWorkflowExecutionDecisionAttributes = {}));
var CancelWorkflowExecutionFailedEventAttributes;
(function (CancelWorkflowExecutionFailedEventAttributes) {
    /**
     * @internal
     */
    CancelWorkflowExecutionFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelWorkflowExecutionFailedEventAttributes = exports.CancelWorkflowExecutionFailedEventAttributes || (exports.CancelWorkflowExecutionFailedEventAttributes = {}));
var WorkflowType;
(function (WorkflowType) {
    /**
     * @internal
     */
    WorkflowType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowType = exports.WorkflowType || (exports.WorkflowType = {}));
var ChildWorkflowExecutionCanceledEventAttributes;
(function (ChildWorkflowExecutionCanceledEventAttributes) {
    /**
     * @internal
     */
    ChildWorkflowExecutionCanceledEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChildWorkflowExecutionCanceledEventAttributes = exports.ChildWorkflowExecutionCanceledEventAttributes || (exports.ChildWorkflowExecutionCanceledEventAttributes = {}));
var ChildWorkflowExecutionCompletedEventAttributes;
(function (ChildWorkflowExecutionCompletedEventAttributes) {
    /**
     * @internal
     */
    ChildWorkflowExecutionCompletedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChildWorkflowExecutionCompletedEventAttributes = exports.ChildWorkflowExecutionCompletedEventAttributes || (exports.ChildWorkflowExecutionCompletedEventAttributes = {}));
var ChildWorkflowExecutionFailedEventAttributes;
(function (ChildWorkflowExecutionFailedEventAttributes) {
    /**
     * @internal
     */
    ChildWorkflowExecutionFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChildWorkflowExecutionFailedEventAttributes = exports.ChildWorkflowExecutionFailedEventAttributes || (exports.ChildWorkflowExecutionFailedEventAttributes = {}));
var ChildWorkflowExecutionStartedEventAttributes;
(function (ChildWorkflowExecutionStartedEventAttributes) {
    /**
     * @internal
     */
    ChildWorkflowExecutionStartedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChildWorkflowExecutionStartedEventAttributes = exports.ChildWorkflowExecutionStartedEventAttributes || (exports.ChildWorkflowExecutionStartedEventAttributes = {}));
var ChildWorkflowExecutionTerminatedEventAttributes;
(function (ChildWorkflowExecutionTerminatedEventAttributes) {
    /**
     * @internal
     */
    ChildWorkflowExecutionTerminatedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChildWorkflowExecutionTerminatedEventAttributes = exports.ChildWorkflowExecutionTerminatedEventAttributes || (exports.ChildWorkflowExecutionTerminatedEventAttributes = {}));
var ChildWorkflowExecutionTimedOutEventAttributes;
(function (ChildWorkflowExecutionTimedOutEventAttributes) {
    /**
     * @internal
     */
    ChildWorkflowExecutionTimedOutEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChildWorkflowExecutionTimedOutEventAttributes = exports.ChildWorkflowExecutionTimedOutEventAttributes || (exports.ChildWorkflowExecutionTimedOutEventAttributes = {}));
var CloseStatusFilter;
(function (CloseStatusFilter) {
    /**
     * @internal
     */
    CloseStatusFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloseStatusFilter = exports.CloseStatusFilter || (exports.CloseStatusFilter = {}));
var CompleteWorkflowExecutionDecisionAttributes;
(function (CompleteWorkflowExecutionDecisionAttributes) {
    /**
     * @internal
     */
    CompleteWorkflowExecutionDecisionAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteWorkflowExecutionDecisionAttributes = exports.CompleteWorkflowExecutionDecisionAttributes || (exports.CompleteWorkflowExecutionDecisionAttributes = {}));
var CompleteWorkflowExecutionFailedEventAttributes;
(function (CompleteWorkflowExecutionFailedEventAttributes) {
    /**
     * @internal
     */
    CompleteWorkflowExecutionFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteWorkflowExecutionFailedEventAttributes = exports.CompleteWorkflowExecutionFailedEventAttributes || (exports.CompleteWorkflowExecutionFailedEventAttributes = {}));
var ContinueAsNewWorkflowExecutionDecisionAttributes;
(function (ContinueAsNewWorkflowExecutionDecisionAttributes) {
    /**
     * @internal
     */
    ContinueAsNewWorkflowExecutionDecisionAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContinueAsNewWorkflowExecutionDecisionAttributes = exports.ContinueAsNewWorkflowExecutionDecisionAttributes || (exports.ContinueAsNewWorkflowExecutionDecisionAttributes = {}));
var ContinueAsNewWorkflowExecutionFailedEventAttributes;
(function (ContinueAsNewWorkflowExecutionFailedEventAttributes) {
    /**
     * @internal
     */
    ContinueAsNewWorkflowExecutionFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContinueAsNewWorkflowExecutionFailedEventAttributes = exports.ContinueAsNewWorkflowExecutionFailedEventAttributes || (exports.ContinueAsNewWorkflowExecutionFailedEventAttributes = {}));
var ExecutionTimeFilter;
(function (ExecutionTimeFilter) {
    /**
     * @internal
     */
    ExecutionTimeFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecutionTimeFilter = exports.ExecutionTimeFilter || (exports.ExecutionTimeFilter = {}));
var WorkflowExecutionFilter;
(function (WorkflowExecutionFilter) {
    /**
     * @internal
     */
    WorkflowExecutionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionFilter = exports.WorkflowExecutionFilter || (exports.WorkflowExecutionFilter = {}));
var TagFilter;
(function (TagFilter) {
    /**
     * @internal
     */
    TagFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagFilter = exports.TagFilter || (exports.TagFilter = {}));
var WorkflowTypeFilter;
(function (WorkflowTypeFilter) {
    /**
     * @internal
     */
    WorkflowTypeFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowTypeFilter = exports.WorkflowTypeFilter || (exports.WorkflowTypeFilter = {}));
var CountClosedWorkflowExecutionsInput;
(function (CountClosedWorkflowExecutionsInput) {
    /**
     * @internal
     */
    CountClosedWorkflowExecutionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CountClosedWorkflowExecutionsInput = exports.CountClosedWorkflowExecutionsInput || (exports.CountClosedWorkflowExecutionsInput = {}));
var OperationNotPermittedFault;
(function (OperationNotPermittedFault) {
    /**
     * @internal
     */
    OperationNotPermittedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationNotPermittedFault = exports.OperationNotPermittedFault || (exports.OperationNotPermittedFault = {}));
var UnknownResourceFault;
(function (UnknownResourceFault) {
    /**
     * @internal
     */
    UnknownResourceFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnknownResourceFault = exports.UnknownResourceFault || (exports.UnknownResourceFault = {}));
var WorkflowExecutionCount;
(function (WorkflowExecutionCount) {
    /**
     * @internal
     */
    WorkflowExecutionCount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionCount = exports.WorkflowExecutionCount || (exports.WorkflowExecutionCount = {}));
var CountOpenWorkflowExecutionsInput;
(function (CountOpenWorkflowExecutionsInput) {
    /**
     * @internal
     */
    CountOpenWorkflowExecutionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CountOpenWorkflowExecutionsInput = exports.CountOpenWorkflowExecutionsInput || (exports.CountOpenWorkflowExecutionsInput = {}));
var CountPendingActivityTasksInput;
(function (CountPendingActivityTasksInput) {
    /**
     * @internal
     */
    CountPendingActivityTasksInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CountPendingActivityTasksInput = exports.CountPendingActivityTasksInput || (exports.CountPendingActivityTasksInput = {}));
var PendingTaskCount;
(function (PendingTaskCount) {
    /**
     * @internal
     */
    PendingTaskCount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingTaskCount = exports.PendingTaskCount || (exports.PendingTaskCount = {}));
var CountPendingDecisionTasksInput;
(function (CountPendingDecisionTasksInput) {
    /**
     * @internal
     */
    CountPendingDecisionTasksInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CountPendingDecisionTasksInput = exports.CountPendingDecisionTasksInput || (exports.CountPendingDecisionTasksInput = {}));
var FailWorkflowExecutionDecisionAttributes;
(function (FailWorkflowExecutionDecisionAttributes) {
    /**
     * @internal
     */
    FailWorkflowExecutionDecisionAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailWorkflowExecutionDecisionAttributes = exports.FailWorkflowExecutionDecisionAttributes || (exports.FailWorkflowExecutionDecisionAttributes = {}));
var RecordMarkerDecisionAttributes;
(function (RecordMarkerDecisionAttributes) {
    /**
     * @internal
     */
    RecordMarkerDecisionAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecordMarkerDecisionAttributes = exports.RecordMarkerDecisionAttributes || (exports.RecordMarkerDecisionAttributes = {}));
var RequestCancelActivityTaskDecisionAttributes;
(function (RequestCancelActivityTaskDecisionAttributes) {
    /**
     * @internal
     */
    RequestCancelActivityTaskDecisionAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestCancelActivityTaskDecisionAttributes = exports.RequestCancelActivityTaskDecisionAttributes || (exports.RequestCancelActivityTaskDecisionAttributes = {}));
var RequestCancelExternalWorkflowExecutionDecisionAttributes;
(function (RequestCancelExternalWorkflowExecutionDecisionAttributes) {
    /**
     * @internal
     */
    RequestCancelExternalWorkflowExecutionDecisionAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestCancelExternalWorkflowExecutionDecisionAttributes = exports.RequestCancelExternalWorkflowExecutionDecisionAttributes || (exports.RequestCancelExternalWorkflowExecutionDecisionAttributes = {}));
var ScheduleActivityTaskDecisionAttributes;
(function (ScheduleActivityTaskDecisionAttributes) {
    /**
     * @internal
     */
    ScheduleActivityTaskDecisionAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleActivityTaskDecisionAttributes = exports.ScheduleActivityTaskDecisionAttributes || (exports.ScheduleActivityTaskDecisionAttributes = {}));
var ScheduleLambdaFunctionDecisionAttributes;
(function (ScheduleLambdaFunctionDecisionAttributes) {
    /**
     * @internal
     */
    ScheduleLambdaFunctionDecisionAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleLambdaFunctionDecisionAttributes = exports.ScheduleLambdaFunctionDecisionAttributes || (exports.ScheduleLambdaFunctionDecisionAttributes = {}));
var SignalExternalWorkflowExecutionDecisionAttributes;
(function (SignalExternalWorkflowExecutionDecisionAttributes) {
    /**
     * @internal
     */
    SignalExternalWorkflowExecutionDecisionAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SignalExternalWorkflowExecutionDecisionAttributes = exports.SignalExternalWorkflowExecutionDecisionAttributes || (exports.SignalExternalWorkflowExecutionDecisionAttributes = {}));
var StartChildWorkflowExecutionDecisionAttributes;
(function (StartChildWorkflowExecutionDecisionAttributes) {
    /**
     * @internal
     */
    StartChildWorkflowExecutionDecisionAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartChildWorkflowExecutionDecisionAttributes = exports.StartChildWorkflowExecutionDecisionAttributes || (exports.StartChildWorkflowExecutionDecisionAttributes = {}));
var StartTimerDecisionAttributes;
(function (StartTimerDecisionAttributes) {
    /**
     * @internal
     */
    StartTimerDecisionAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTimerDecisionAttributes = exports.StartTimerDecisionAttributes || (exports.StartTimerDecisionAttributes = {}));
var Decision;
(function (Decision) {
    /**
     * @internal
     */
    Decision.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Decision = exports.Decision || (exports.Decision = {}));
var DecisionTaskCompletedEventAttributes;
(function (DecisionTaskCompletedEventAttributes) {
    /**
     * @internal
     */
    DecisionTaskCompletedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecisionTaskCompletedEventAttributes = exports.DecisionTaskCompletedEventAttributes || (exports.DecisionTaskCompletedEventAttributes = {}));
var DecisionTaskScheduledEventAttributes;
(function (DecisionTaskScheduledEventAttributes) {
    /**
     * @internal
     */
    DecisionTaskScheduledEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecisionTaskScheduledEventAttributes = exports.DecisionTaskScheduledEventAttributes || (exports.DecisionTaskScheduledEventAttributes = {}));
var DecisionTaskStartedEventAttributes;
(function (DecisionTaskStartedEventAttributes) {
    /**
     * @internal
     */
    DecisionTaskStartedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecisionTaskStartedEventAttributes = exports.DecisionTaskStartedEventAttributes || (exports.DecisionTaskStartedEventAttributes = {}));
var DecisionTaskTimedOutEventAttributes;
(function (DecisionTaskTimedOutEventAttributes) {
    /**
     * @internal
     */
    DecisionTaskTimedOutEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecisionTaskTimedOutEventAttributes = exports.DecisionTaskTimedOutEventAttributes || (exports.DecisionTaskTimedOutEventAttributes = {}));
var ExternalWorkflowExecutionCancelRequestedEventAttributes;
(function (ExternalWorkflowExecutionCancelRequestedEventAttributes) {
    /**
     * @internal
     */
    ExternalWorkflowExecutionCancelRequestedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExternalWorkflowExecutionCancelRequestedEventAttributes = exports.ExternalWorkflowExecutionCancelRequestedEventAttributes || (exports.ExternalWorkflowExecutionCancelRequestedEventAttributes = {}));
var ExternalWorkflowExecutionSignaledEventAttributes;
(function (ExternalWorkflowExecutionSignaledEventAttributes) {
    /**
     * @internal
     */
    ExternalWorkflowExecutionSignaledEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExternalWorkflowExecutionSignaledEventAttributes = exports.ExternalWorkflowExecutionSignaledEventAttributes || (exports.ExternalWorkflowExecutionSignaledEventAttributes = {}));
var FailWorkflowExecutionFailedEventAttributes;
(function (FailWorkflowExecutionFailedEventAttributes) {
    /**
     * @internal
     */
    FailWorkflowExecutionFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailWorkflowExecutionFailedEventAttributes = exports.FailWorkflowExecutionFailedEventAttributes || (exports.FailWorkflowExecutionFailedEventAttributes = {}));
var LambdaFunctionCompletedEventAttributes;
(function (LambdaFunctionCompletedEventAttributes) {
    /**
     * @internal
     */
    LambdaFunctionCompletedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaFunctionCompletedEventAttributes = exports.LambdaFunctionCompletedEventAttributes || (exports.LambdaFunctionCompletedEventAttributes = {}));
var LambdaFunctionFailedEventAttributes;
(function (LambdaFunctionFailedEventAttributes) {
    /**
     * @internal
     */
    LambdaFunctionFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaFunctionFailedEventAttributes = exports.LambdaFunctionFailedEventAttributes || (exports.LambdaFunctionFailedEventAttributes = {}));
var LambdaFunctionScheduledEventAttributes;
(function (LambdaFunctionScheduledEventAttributes) {
    /**
     * @internal
     */
    LambdaFunctionScheduledEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaFunctionScheduledEventAttributes = exports.LambdaFunctionScheduledEventAttributes || (exports.LambdaFunctionScheduledEventAttributes = {}));
var LambdaFunctionStartedEventAttributes;
(function (LambdaFunctionStartedEventAttributes) {
    /**
     * @internal
     */
    LambdaFunctionStartedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaFunctionStartedEventAttributes = exports.LambdaFunctionStartedEventAttributes || (exports.LambdaFunctionStartedEventAttributes = {}));
var LambdaFunctionTimedOutEventAttributes;
(function (LambdaFunctionTimedOutEventAttributes) {
    /**
     * @internal
     */
    LambdaFunctionTimedOutEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaFunctionTimedOutEventAttributes = exports.LambdaFunctionTimedOutEventAttributes || (exports.LambdaFunctionTimedOutEventAttributes = {}));
var MarkerRecordedEventAttributes;
(function (MarkerRecordedEventAttributes) {
    /**
     * @internal
     */
    MarkerRecordedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MarkerRecordedEventAttributes = exports.MarkerRecordedEventAttributes || (exports.MarkerRecordedEventAttributes = {}));
var RecordMarkerFailedEventAttributes;
(function (RecordMarkerFailedEventAttributes) {
    /**
     * @internal
     */
    RecordMarkerFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecordMarkerFailedEventAttributes = exports.RecordMarkerFailedEventAttributes || (exports.RecordMarkerFailedEventAttributes = {}));
var RequestCancelActivityTaskFailedEventAttributes;
(function (RequestCancelActivityTaskFailedEventAttributes) {
    /**
     * @internal
     */
    RequestCancelActivityTaskFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestCancelActivityTaskFailedEventAttributes = exports.RequestCancelActivityTaskFailedEventAttributes || (exports.RequestCancelActivityTaskFailedEventAttributes = {}));
var RequestCancelExternalWorkflowExecutionFailedEventAttributes;
(function (RequestCancelExternalWorkflowExecutionFailedEventAttributes) {
    /**
     * @internal
     */
    RequestCancelExternalWorkflowExecutionFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestCancelExternalWorkflowExecutionFailedEventAttributes = exports.RequestCancelExternalWorkflowExecutionFailedEventAttributes || (exports.RequestCancelExternalWorkflowExecutionFailedEventAttributes = {}));
var RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;
(function (RequestCancelExternalWorkflowExecutionInitiatedEventAttributes) {
    /**
     * @internal
     */
    RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = exports.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes || (exports.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = {}));
var ScheduleActivityTaskFailedEventAttributes;
(function (ScheduleActivityTaskFailedEventAttributes) {
    /**
     * @internal
     */
    ScheduleActivityTaskFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleActivityTaskFailedEventAttributes = exports.ScheduleActivityTaskFailedEventAttributes || (exports.ScheduleActivityTaskFailedEventAttributes = {}));
var ScheduleLambdaFunctionFailedEventAttributes;
(function (ScheduleLambdaFunctionFailedEventAttributes) {
    /**
     * @internal
     */
    ScheduleLambdaFunctionFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduleLambdaFunctionFailedEventAttributes = exports.ScheduleLambdaFunctionFailedEventAttributes || (exports.ScheduleLambdaFunctionFailedEventAttributes = {}));
var SignalExternalWorkflowExecutionFailedEventAttributes;
(function (SignalExternalWorkflowExecutionFailedEventAttributes) {
    /**
     * @internal
     */
    SignalExternalWorkflowExecutionFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SignalExternalWorkflowExecutionFailedEventAttributes = exports.SignalExternalWorkflowExecutionFailedEventAttributes || (exports.SignalExternalWorkflowExecutionFailedEventAttributes = {}));
var SignalExternalWorkflowExecutionInitiatedEventAttributes;
(function (SignalExternalWorkflowExecutionInitiatedEventAttributes) {
    /**
     * @internal
     */
    SignalExternalWorkflowExecutionInitiatedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SignalExternalWorkflowExecutionInitiatedEventAttributes = exports.SignalExternalWorkflowExecutionInitiatedEventAttributes || (exports.SignalExternalWorkflowExecutionInitiatedEventAttributes = {}));
var StartChildWorkflowExecutionFailedEventAttributes;
(function (StartChildWorkflowExecutionFailedEventAttributes) {
    /**
     * @internal
     */
    StartChildWorkflowExecutionFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartChildWorkflowExecutionFailedEventAttributes = exports.StartChildWorkflowExecutionFailedEventAttributes || (exports.StartChildWorkflowExecutionFailedEventAttributes = {}));
var StartChildWorkflowExecutionInitiatedEventAttributes;
(function (StartChildWorkflowExecutionInitiatedEventAttributes) {
    /**
     * @internal
     */
    StartChildWorkflowExecutionInitiatedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartChildWorkflowExecutionInitiatedEventAttributes = exports.StartChildWorkflowExecutionInitiatedEventAttributes || (exports.StartChildWorkflowExecutionInitiatedEventAttributes = {}));
var StartLambdaFunctionFailedEventAttributes;
(function (StartLambdaFunctionFailedEventAttributes) {
    /**
     * @internal
     */
    StartLambdaFunctionFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartLambdaFunctionFailedEventAttributes = exports.StartLambdaFunctionFailedEventAttributes || (exports.StartLambdaFunctionFailedEventAttributes = {}));
var StartTimerFailedEventAttributes;
(function (StartTimerFailedEventAttributes) {
    /**
     * @internal
     */
    StartTimerFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTimerFailedEventAttributes = exports.StartTimerFailedEventAttributes || (exports.StartTimerFailedEventAttributes = {}));
var TimerCanceledEventAttributes;
(function (TimerCanceledEventAttributes) {
    /**
     * @internal
     */
    TimerCanceledEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimerCanceledEventAttributes = exports.TimerCanceledEventAttributes || (exports.TimerCanceledEventAttributes = {}));
var TimerFiredEventAttributes;
(function (TimerFiredEventAttributes) {
    /**
     * @internal
     */
    TimerFiredEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimerFiredEventAttributes = exports.TimerFiredEventAttributes || (exports.TimerFiredEventAttributes = {}));
var TimerStartedEventAttributes;
(function (TimerStartedEventAttributes) {
    /**
     * @internal
     */
    TimerStartedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimerStartedEventAttributes = exports.TimerStartedEventAttributes || (exports.TimerStartedEventAttributes = {}));
var WorkflowExecutionCanceledEventAttributes;
(function (WorkflowExecutionCanceledEventAttributes) {
    /**
     * @internal
     */
    WorkflowExecutionCanceledEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionCanceledEventAttributes = exports.WorkflowExecutionCanceledEventAttributes || (exports.WorkflowExecutionCanceledEventAttributes = {}));
var WorkflowExecutionCancelRequestedEventAttributes;
(function (WorkflowExecutionCancelRequestedEventAttributes) {
    /**
     * @internal
     */
    WorkflowExecutionCancelRequestedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionCancelRequestedEventAttributes = exports.WorkflowExecutionCancelRequestedEventAttributes || (exports.WorkflowExecutionCancelRequestedEventAttributes = {}));
var WorkflowExecutionCompletedEventAttributes;
(function (WorkflowExecutionCompletedEventAttributes) {
    /**
     * @internal
     */
    WorkflowExecutionCompletedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionCompletedEventAttributes = exports.WorkflowExecutionCompletedEventAttributes || (exports.WorkflowExecutionCompletedEventAttributes = {}));
var WorkflowExecutionContinuedAsNewEventAttributes;
(function (WorkflowExecutionContinuedAsNewEventAttributes) {
    /**
     * @internal
     */
    WorkflowExecutionContinuedAsNewEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionContinuedAsNewEventAttributes = exports.WorkflowExecutionContinuedAsNewEventAttributes || (exports.WorkflowExecutionContinuedAsNewEventAttributes = {}));
var WorkflowExecutionFailedEventAttributes;
(function (WorkflowExecutionFailedEventAttributes) {
    /**
     * @internal
     */
    WorkflowExecutionFailedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionFailedEventAttributes = exports.WorkflowExecutionFailedEventAttributes || (exports.WorkflowExecutionFailedEventAttributes = {}));
var WorkflowExecutionSignaledEventAttributes;
(function (WorkflowExecutionSignaledEventAttributes) {
    /**
     * @internal
     */
    WorkflowExecutionSignaledEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionSignaledEventAttributes = exports.WorkflowExecutionSignaledEventAttributes || (exports.WorkflowExecutionSignaledEventAttributes = {}));
var WorkflowExecutionStartedEventAttributes;
(function (WorkflowExecutionStartedEventAttributes) {
    /**
     * @internal
     */
    WorkflowExecutionStartedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionStartedEventAttributes = exports.WorkflowExecutionStartedEventAttributes || (exports.WorkflowExecutionStartedEventAttributes = {}));
var WorkflowExecutionTerminatedEventAttributes;
(function (WorkflowExecutionTerminatedEventAttributes) {
    /**
     * @internal
     */
    WorkflowExecutionTerminatedEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionTerminatedEventAttributes = exports.WorkflowExecutionTerminatedEventAttributes || (exports.WorkflowExecutionTerminatedEventAttributes = {}));
var WorkflowExecutionTimedOutEventAttributes;
(function (WorkflowExecutionTimedOutEventAttributes) {
    /**
     * @internal
     */
    WorkflowExecutionTimedOutEventAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionTimedOutEventAttributes = exports.WorkflowExecutionTimedOutEventAttributes || (exports.WorkflowExecutionTimedOutEventAttributes = {}));
var HistoryEvent;
(function (HistoryEvent) {
    /**
     * @internal
     */
    HistoryEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HistoryEvent = exports.HistoryEvent || (exports.HistoryEvent = {}));
var DecisionTask;
(function (DecisionTask) {
    /**
     * @internal
     */
    DecisionTask.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DecisionTask = exports.DecisionTask || (exports.DecisionTask = {}));
var DefaultUndefinedFault;
(function (DefaultUndefinedFault) {
    /**
     * @internal
     */
    DefaultUndefinedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultUndefinedFault = exports.DefaultUndefinedFault || (exports.DefaultUndefinedFault = {}));
var DeprecateActivityTypeInput;
(function (DeprecateActivityTypeInput) {
    /**
     * @internal
     */
    DeprecateActivityTypeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeprecateActivityTypeInput = exports.DeprecateActivityTypeInput || (exports.DeprecateActivityTypeInput = {}));
var TypeDeprecatedFault;
(function (TypeDeprecatedFault) {
    /**
     * @internal
     */
    TypeDeprecatedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TypeDeprecatedFault = exports.TypeDeprecatedFault || (exports.TypeDeprecatedFault = {}));
var DeprecateDomainInput;
(function (DeprecateDomainInput) {
    /**
     * @internal
     */
    DeprecateDomainInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeprecateDomainInput = exports.DeprecateDomainInput || (exports.DeprecateDomainInput = {}));
var DomainDeprecatedFault;
(function (DomainDeprecatedFault) {
    /**
     * @internal
     */
    DomainDeprecatedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainDeprecatedFault = exports.DomainDeprecatedFault || (exports.DomainDeprecatedFault = {}));
var DeprecateWorkflowTypeInput;
(function (DeprecateWorkflowTypeInput) {
    /**
     * @internal
     */
    DeprecateWorkflowTypeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeprecateWorkflowTypeInput = exports.DeprecateWorkflowTypeInput || (exports.DeprecateWorkflowTypeInput = {}));
var DescribeActivityTypeInput;
(function (DescribeActivityTypeInput) {
    /**
     * @internal
     */
    DescribeActivityTypeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeActivityTypeInput = exports.DescribeActivityTypeInput || (exports.DescribeActivityTypeInput = {}));
var DescribeDomainInput;
(function (DescribeDomainInput) {
    /**
     * @internal
     */
    DescribeDomainInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainInput = exports.DescribeDomainInput || (exports.DescribeDomainInput = {}));
var DomainConfiguration;
(function (DomainConfiguration) {
    /**
     * @internal
     */
    DomainConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainConfiguration = exports.DomainConfiguration || (exports.DomainConfiguration = {}));
var DomainInfo;
(function (DomainInfo) {
    /**
     * @internal
     */
    DomainInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainInfo = exports.DomainInfo || (exports.DomainInfo = {}));
var DomainDetail;
(function (DomainDetail) {
    /**
     * @internal
     */
    DomainDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainDetail = exports.DomainDetail || (exports.DomainDetail = {}));
var DescribeWorkflowExecutionInput;
(function (DescribeWorkflowExecutionInput) {
    /**
     * @internal
     */
    DescribeWorkflowExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkflowExecutionInput = exports.DescribeWorkflowExecutionInput || (exports.DescribeWorkflowExecutionInput = {}));
var WorkflowExecutionConfiguration;
(function (WorkflowExecutionConfiguration) {
    /**
     * @internal
     */
    WorkflowExecutionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionConfiguration = exports.WorkflowExecutionConfiguration || (exports.WorkflowExecutionConfiguration = {}));
var WorkflowExecutionInfo;
(function (WorkflowExecutionInfo) {
    /**
     * @internal
     */
    WorkflowExecutionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionInfo = exports.WorkflowExecutionInfo || (exports.WorkflowExecutionInfo = {}));
var WorkflowExecutionOpenCounts;
(function (WorkflowExecutionOpenCounts) {
    /**
     * @internal
     */
    WorkflowExecutionOpenCounts.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionOpenCounts = exports.WorkflowExecutionOpenCounts || (exports.WorkflowExecutionOpenCounts = {}));
var WorkflowExecutionDetail;
(function (WorkflowExecutionDetail) {
    /**
     * @internal
     */
    WorkflowExecutionDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionDetail = exports.WorkflowExecutionDetail || (exports.WorkflowExecutionDetail = {}));
var DescribeWorkflowTypeInput;
(function (DescribeWorkflowTypeInput) {
    /**
     * @internal
     */
    DescribeWorkflowTypeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorkflowTypeInput = exports.DescribeWorkflowTypeInput || (exports.DescribeWorkflowTypeInput = {}));
var WorkflowTypeConfiguration;
(function (WorkflowTypeConfiguration) {
    /**
     * @internal
     */
    WorkflowTypeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowTypeConfiguration = exports.WorkflowTypeConfiguration || (exports.WorkflowTypeConfiguration = {}));
var WorkflowTypeInfo;
(function (WorkflowTypeInfo) {
    /**
     * @internal
     */
    WorkflowTypeInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowTypeInfo = exports.WorkflowTypeInfo || (exports.WorkflowTypeInfo = {}));
var WorkflowTypeDetail;
(function (WorkflowTypeDetail) {
    /**
     * @internal
     */
    WorkflowTypeDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowTypeDetail = exports.WorkflowTypeDetail || (exports.WorkflowTypeDetail = {}));
var DomainAlreadyExistsFault;
(function (DomainAlreadyExistsFault) {
    /**
     * @internal
     */
    DomainAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainAlreadyExistsFault = exports.DomainAlreadyExistsFault || (exports.DomainAlreadyExistsFault = {}));
var DomainInfos;
(function (DomainInfos) {
    /**
     * @internal
     */
    DomainInfos.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainInfos = exports.DomainInfos || (exports.DomainInfos = {}));
var GetWorkflowExecutionHistoryInput;
(function (GetWorkflowExecutionHistoryInput) {
    /**
     * @internal
     */
    GetWorkflowExecutionHistoryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWorkflowExecutionHistoryInput = exports.GetWorkflowExecutionHistoryInput || (exports.GetWorkflowExecutionHistoryInput = {}));
var History;
(function (History) {
    /**
     * @internal
     */
    History.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(History = exports.History || (exports.History = {}));
var LimitExceededFault;
(function (LimitExceededFault) {
    /**
     * @internal
     */
    LimitExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededFault = exports.LimitExceededFault || (exports.LimitExceededFault = {}));
var ListActivityTypesInput;
(function (ListActivityTypesInput) {
    /**
     * @internal
     */
    ListActivityTypesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActivityTypesInput = exports.ListActivityTypesInput || (exports.ListActivityTypesInput = {}));
var ListClosedWorkflowExecutionsInput;
(function (ListClosedWorkflowExecutionsInput) {
    /**
     * @internal
     */
    ListClosedWorkflowExecutionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClosedWorkflowExecutionsInput = exports.ListClosedWorkflowExecutionsInput || (exports.ListClosedWorkflowExecutionsInput = {}));
var WorkflowExecutionInfos;
(function (WorkflowExecutionInfos) {
    /**
     * @internal
     */
    WorkflowExecutionInfos.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionInfos = exports.WorkflowExecutionInfos || (exports.WorkflowExecutionInfos = {}));
var ListDomainsInput;
(function (ListDomainsInput) {
    /**
     * @internal
     */
    ListDomainsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainsInput = exports.ListDomainsInput || (exports.ListDomainsInput = {}));
var ListOpenWorkflowExecutionsInput;
(function (ListOpenWorkflowExecutionsInput) {
    /**
     * @internal
     */
    ListOpenWorkflowExecutionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOpenWorkflowExecutionsInput = exports.ListOpenWorkflowExecutionsInput || (exports.ListOpenWorkflowExecutionsInput = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ResourceTag;
(function (ResourceTag) {
    /**
     * @internal
     */
    ResourceTag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceTag = exports.ResourceTag || (exports.ResourceTag = {}));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    /**
     * @internal
     */
    ListTagsForResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {}));
var ListWorkflowTypesInput;
(function (ListWorkflowTypesInput) {
    /**
     * @internal
     */
    ListWorkflowTypesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorkflowTypesInput = exports.ListWorkflowTypesInput || (exports.ListWorkflowTypesInput = {}));
var WorkflowTypeInfos;
(function (WorkflowTypeInfos) {
    /**
     * @internal
     */
    WorkflowTypeInfos.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowTypeInfos = exports.WorkflowTypeInfos || (exports.WorkflowTypeInfos = {}));
var PollForActivityTaskInput;
(function (PollForActivityTaskInput) {
    /**
     * @internal
     */
    PollForActivityTaskInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PollForActivityTaskInput = exports.PollForActivityTaskInput || (exports.PollForActivityTaskInput = {}));
var PollForDecisionTaskInput;
(function (PollForDecisionTaskInput) {
    /**
     * @internal
     */
    PollForDecisionTaskInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PollForDecisionTaskInput = exports.PollForDecisionTaskInput || (exports.PollForDecisionTaskInput = {}));
var RecordActivityTaskHeartbeatInput;
(function (RecordActivityTaskHeartbeatInput) {
    /**
     * @internal
     */
    RecordActivityTaskHeartbeatInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecordActivityTaskHeartbeatInput = exports.RecordActivityTaskHeartbeatInput || (exports.RecordActivityTaskHeartbeatInput = {}));
var RegisterActivityTypeInput;
(function (RegisterActivityTypeInput) {
    /**
     * @internal
     */
    RegisterActivityTypeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterActivityTypeInput = exports.RegisterActivityTypeInput || (exports.RegisterActivityTypeInput = {}));
var TypeAlreadyExistsFault;
(function (TypeAlreadyExistsFault) {
    /**
     * @internal
     */
    TypeAlreadyExistsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TypeAlreadyExistsFault = exports.TypeAlreadyExistsFault || (exports.TypeAlreadyExistsFault = {}));
var RegisterDomainInput;
(function (RegisterDomainInput) {
    /**
     * @internal
     */
    RegisterDomainInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterDomainInput = exports.RegisterDomainInput || (exports.RegisterDomainInput = {}));
var TooManyTagsFault;
(function (TooManyTagsFault) {
    /**
     * @internal
     */
    TooManyTagsFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsFault = exports.TooManyTagsFault || (exports.TooManyTagsFault = {}));
var RegisterWorkflowTypeInput;
(function (RegisterWorkflowTypeInput) {
    /**
     * @internal
     */
    RegisterWorkflowTypeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterWorkflowTypeInput = exports.RegisterWorkflowTypeInput || (exports.RegisterWorkflowTypeInput = {}));
var RequestCancelWorkflowExecutionInput;
(function (RequestCancelWorkflowExecutionInput) {
    /**
     * @internal
     */
    RequestCancelWorkflowExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestCancelWorkflowExecutionInput = exports.RequestCancelWorkflowExecutionInput || (exports.RequestCancelWorkflowExecutionInput = {}));
var RespondActivityTaskCanceledInput;
(function (RespondActivityTaskCanceledInput) {
    /**
     * @internal
     */
    RespondActivityTaskCanceledInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RespondActivityTaskCanceledInput = exports.RespondActivityTaskCanceledInput || (exports.RespondActivityTaskCanceledInput = {}));
var RespondActivityTaskCompletedInput;
(function (RespondActivityTaskCompletedInput) {
    /**
     * @internal
     */
    RespondActivityTaskCompletedInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RespondActivityTaskCompletedInput = exports.RespondActivityTaskCompletedInput || (exports.RespondActivityTaskCompletedInput = {}));
var RespondActivityTaskFailedInput;
(function (RespondActivityTaskFailedInput) {
    /**
     * @internal
     */
    RespondActivityTaskFailedInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RespondActivityTaskFailedInput = exports.RespondActivityTaskFailedInput || (exports.RespondActivityTaskFailedInput = {}));
var RespondDecisionTaskCompletedInput;
(function (RespondDecisionTaskCompletedInput) {
    /**
     * @internal
     */
    RespondDecisionTaskCompletedInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RespondDecisionTaskCompletedInput = exports.RespondDecisionTaskCompletedInput || (exports.RespondDecisionTaskCompletedInput = {}));
var Run;
(function (Run) {
    /**
     * @internal
     */
    Run.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Run = exports.Run || (exports.Run = {}));
var SignalWorkflowExecutionInput;
(function (SignalWorkflowExecutionInput) {
    /**
     * @internal
     */
    SignalWorkflowExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SignalWorkflowExecutionInput = exports.SignalWorkflowExecutionInput || (exports.SignalWorkflowExecutionInput = {}));
var StartWorkflowExecutionInput;
(function (StartWorkflowExecutionInput) {
    /**
     * @internal
     */
    StartWorkflowExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartWorkflowExecutionInput = exports.StartWorkflowExecutionInput || (exports.StartWorkflowExecutionInput = {}));
var WorkflowExecutionAlreadyStartedFault;
(function (WorkflowExecutionAlreadyStartedFault) {
    /**
     * @internal
     */
    WorkflowExecutionAlreadyStartedFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorkflowExecutionAlreadyStartedFault = exports.WorkflowExecutionAlreadyStartedFault || (exports.WorkflowExecutionAlreadyStartedFault = {}));
var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TerminateWorkflowExecutionInput;
(function (TerminateWorkflowExecutionInput) {
    /**
     * @internal
     */
    TerminateWorkflowExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateWorkflowExecutionInput = exports.TerminateWorkflowExecutionInput || (exports.TerminateWorkflowExecutionInput = {}));
var UndeprecateActivityTypeInput;
(function (UndeprecateActivityTypeInput) {
    /**
     * @internal
     */
    UndeprecateActivityTypeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UndeprecateActivityTypeInput = exports.UndeprecateActivityTypeInput || (exports.UndeprecateActivityTypeInput = {}));
var UndeprecateDomainInput;
(function (UndeprecateDomainInput) {
    /**
     * @internal
     */
    UndeprecateDomainInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UndeprecateDomainInput = exports.UndeprecateDomainInput || (exports.UndeprecateDomainInput = {}));
var UndeprecateWorkflowTypeInput;
(function (UndeprecateWorkflowTypeInput) {
    /**
     * @internal
     */
    UndeprecateWorkflowTypeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UndeprecateWorkflowTypeInput = exports.UndeprecateWorkflowTypeInput || (exports.UndeprecateWorkflowTypeInput = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
//# sourceMappingURL=models_0.js.map