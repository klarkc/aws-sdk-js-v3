"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutionFailedEventDetails = exports.ExecutionAbortedEventDetails = exports.GetExecutionHistoryInput = exports.GetActivityTaskOutput = exports.GetActivityTaskInput = exports.DescribeStateMachineForExecutionOutput = exports.DescribeStateMachineForExecutionInput = exports.StateMachineDoesNotExist = exports.DescribeStateMachineOutput = exports.DescribeStateMachineInput = exports.ExecutionDoesNotExist = exports.DescribeExecutionOutput = exports.CloudWatchEventsExecutionDataDetails = exports.DescribeExecutionInput = exports.DescribeActivityOutput = exports.DescribeActivityInput = exports.DeleteStateMachineOutput = exports.DeleteStateMachineInput = exports.DeleteActivityOutput = exports.DeleteActivityInput = exports.StateMachineTypeNotSupported = exports.StateMachineLimitExceeded = exports.StateMachineDeleting = exports.StateMachineAlreadyExists = exports.InvalidTracingConfiguration = exports.InvalidLoggingConfiguration = exports.InvalidDefinition = exports.InvalidArn = exports.CreateStateMachineOutput = exports.CreateStateMachineInput = exports.TracingConfiguration = exports.LoggingConfiguration = exports.LogDestination = exports.CloudWatchLogsLogGroup = exports.TooManyTags = exports.InvalidName = exports.CreateActivityOutput = exports.CreateActivityInput = exports.Tag = exports.ActivityWorkerLimitExceeded = exports.ActivityTimedOutEventDetails = exports.ActivitySucceededEventDetails = exports.ActivityStartedEventDetails = exports.ActivityScheduleFailedEventDetails = exports.ActivityScheduledEventDetails = exports.HistoryEventExecutionDataDetails = exports.ActivityListItem = exports.ActivityLimitExceeded = exports.ActivityFailedEventDetails = exports.ActivityDoesNotExist = void 0;
exports.StartSyncExecutionInput = exports.StartExecutionOutput = exports.StartExecutionInput = exports.InvalidExecutionInput = exports.ExecutionLimitExceeded = exports.ExecutionAlreadyExists = exports.SendTaskSuccessOutput = exports.SendTaskSuccessInput = exports.InvalidOutput = exports.SendTaskHeartbeatOutput = exports.SendTaskHeartbeatInput = exports.TaskTimedOut = exports.TaskDoesNotExist = exports.SendTaskFailureOutput = exports.SendTaskFailureInput = exports.ResourceNotFound = exports.ListTagsForResourceOutput = exports.ListTagsForResourceInput = exports.ListStateMachinesOutput = exports.StateMachineListItem = exports.ListStateMachinesInput = exports.ListExecutionsOutput = exports.ExecutionListItem = exports.ListExecutionsInput = exports.ListActivitiesOutput = exports.ListActivitiesInput = exports.InvalidToken = exports.GetExecutionHistoryOutput = exports.HistoryEvent = exports.TaskTimedOutEventDetails = exports.TaskSucceededEventDetails = exports.TaskSubmittedEventDetails = exports.TaskSubmitFailedEventDetails = exports.TaskStartFailedEventDetails = exports.TaskStartedEventDetails = exports.TaskScheduledEventDetails = exports.TaskFailedEventDetails = exports.StateExitedEventDetails = exports.StateEnteredEventDetails = exports.MapStateStartedEventDetails = exports.MapIterationEventDetails = exports.LambdaFunctionTimedOutEventDetails = exports.LambdaFunctionSucceededEventDetails = exports.LambdaFunctionStartFailedEventDetails = exports.LambdaFunctionScheduleFailedEventDetails = exports.LambdaFunctionScheduledEventDetails = exports.LambdaFunctionFailedEventDetails = exports.ExecutionTimedOutEventDetails = exports.ExecutionSucceededEventDetails = exports.ExecutionStartedEventDetails = void 0;
exports.UpdateStateMachineOutput = exports.UpdateStateMachineInput = exports.MissingRequiredParameter = exports.UntagResourceOutput = exports.UntagResourceInput = exports.TagResourceOutput = exports.TagResourceInput = exports.StopExecutionOutput = exports.StopExecutionInput = exports.StartSyncExecutionOutput = exports.BillingDetails = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ActivityDoesNotExist;
(function (ActivityDoesNotExist) {
    /**
     * @internal
     */
    ActivityDoesNotExist.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityDoesNotExist = exports.ActivityDoesNotExist || (exports.ActivityDoesNotExist = {}));
var ActivityFailedEventDetails;
(function (ActivityFailedEventDetails) {
    /**
     * @internal
     */
    ActivityFailedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(ActivityFailedEventDetails = exports.ActivityFailedEventDetails || (exports.ActivityFailedEventDetails = {}));
var ActivityLimitExceeded;
(function (ActivityLimitExceeded) {
    /**
     * @internal
     */
    ActivityLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityLimitExceeded = exports.ActivityLimitExceeded || (exports.ActivityLimitExceeded = {}));
var ActivityListItem;
(function (ActivityListItem) {
    /**
     * @internal
     */
    ActivityListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityListItem = exports.ActivityListItem || (exports.ActivityListItem = {}));
var HistoryEventExecutionDataDetails;
(function (HistoryEventExecutionDataDetails) {
    /**
     * @internal
     */
    HistoryEventExecutionDataDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HistoryEventExecutionDataDetails = exports.HistoryEventExecutionDataDetails || (exports.HistoryEventExecutionDataDetails = {}));
var ActivityScheduledEventDetails;
(function (ActivityScheduledEventDetails) {
    /**
     * @internal
     */
    ActivityScheduledEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
    });
})(ActivityScheduledEventDetails = exports.ActivityScheduledEventDetails || (exports.ActivityScheduledEventDetails = {}));
var ActivityScheduleFailedEventDetails;
(function (ActivityScheduleFailedEventDetails) {
    /**
     * @internal
     */
    ActivityScheduleFailedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(ActivityScheduleFailedEventDetails = exports.ActivityScheduleFailedEventDetails || (exports.ActivityScheduleFailedEventDetails = {}));
var ActivityStartedEventDetails;
(function (ActivityStartedEventDetails) {
    /**
     * @internal
     */
    ActivityStartedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityStartedEventDetails = exports.ActivityStartedEventDetails || (exports.ActivityStartedEventDetails = {}));
var ActivitySucceededEventDetails;
(function (ActivitySucceededEventDetails) {
    /**
     * @internal
     */
    ActivitySucceededEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
    });
})(ActivitySucceededEventDetails = exports.ActivitySucceededEventDetails || (exports.ActivitySucceededEventDetails = {}));
var ActivityTimedOutEventDetails;
(function (ActivityTimedOutEventDetails) {
    /**
     * @internal
     */
    ActivityTimedOutEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(ActivityTimedOutEventDetails = exports.ActivityTimedOutEventDetails || (exports.ActivityTimedOutEventDetails = {}));
var ActivityWorkerLimitExceeded;
(function (ActivityWorkerLimitExceeded) {
    /**
     * @internal
     */
    ActivityWorkerLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityWorkerLimitExceeded = exports.ActivityWorkerLimitExceeded || (exports.ActivityWorkerLimitExceeded = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateActivityInput;
(function (CreateActivityInput) {
    /**
     * @internal
     */
    CreateActivityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateActivityInput = exports.CreateActivityInput || (exports.CreateActivityInput = {}));
var CreateActivityOutput;
(function (CreateActivityOutput) {
    /**
     * @internal
     */
    CreateActivityOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateActivityOutput = exports.CreateActivityOutput || (exports.CreateActivityOutput = {}));
var InvalidName;
(function (InvalidName) {
    /**
     * @internal
     */
    InvalidName.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidName = exports.InvalidName || (exports.InvalidName = {}));
var TooManyTags;
(function (TooManyTags) {
    /**
     * @internal
     */
    TooManyTags.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTags = exports.TooManyTags || (exports.TooManyTags = {}));
var CloudWatchLogsLogGroup;
(function (CloudWatchLogsLogGroup) {
    /**
     * @internal
     */
    CloudWatchLogsLogGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchLogsLogGroup = exports.CloudWatchLogsLogGroup || (exports.CloudWatchLogsLogGroup = {}));
var LogDestination;
(function (LogDestination) {
    /**
     * @internal
     */
    LogDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogDestination = exports.LogDestination || (exports.LogDestination = {}));
var LoggingConfiguration;
(function (LoggingConfiguration) {
    /**
     * @internal
     */
    LoggingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoggingConfiguration = exports.LoggingConfiguration || (exports.LoggingConfiguration = {}));
var TracingConfiguration;
(function (TracingConfiguration) {
    /**
     * @internal
     */
    TracingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TracingConfiguration = exports.TracingConfiguration || (exports.TracingConfiguration = {}));
var CreateStateMachineInput;
(function (CreateStateMachineInput) {
    /**
     * @internal
     */
    CreateStateMachineInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.definition && { definition: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateStateMachineInput = exports.CreateStateMachineInput || (exports.CreateStateMachineInput = {}));
var CreateStateMachineOutput;
(function (CreateStateMachineOutput) {
    /**
     * @internal
     */
    CreateStateMachineOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStateMachineOutput = exports.CreateStateMachineOutput || (exports.CreateStateMachineOutput = {}));
var InvalidArn;
(function (InvalidArn) {
    /**
     * @internal
     */
    InvalidArn.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidArn = exports.InvalidArn || (exports.InvalidArn = {}));
var InvalidDefinition;
(function (InvalidDefinition) {
    /**
     * @internal
     */
    InvalidDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDefinition = exports.InvalidDefinition || (exports.InvalidDefinition = {}));
var InvalidLoggingConfiguration;
(function (InvalidLoggingConfiguration) {
    /**
     * @internal
     */
    InvalidLoggingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidLoggingConfiguration = exports.InvalidLoggingConfiguration || (exports.InvalidLoggingConfiguration = {}));
var InvalidTracingConfiguration;
(function (InvalidTracingConfiguration) {
    /**
     * @internal
     */
    InvalidTracingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTracingConfiguration = exports.InvalidTracingConfiguration || (exports.InvalidTracingConfiguration = {}));
var StateMachineAlreadyExists;
(function (StateMachineAlreadyExists) {
    /**
     * @internal
     */
    StateMachineAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StateMachineAlreadyExists = exports.StateMachineAlreadyExists || (exports.StateMachineAlreadyExists = {}));
var StateMachineDeleting;
(function (StateMachineDeleting) {
    /**
     * @internal
     */
    StateMachineDeleting.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StateMachineDeleting = exports.StateMachineDeleting || (exports.StateMachineDeleting = {}));
var StateMachineLimitExceeded;
(function (StateMachineLimitExceeded) {
    /**
     * @internal
     */
    StateMachineLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StateMachineLimitExceeded = exports.StateMachineLimitExceeded || (exports.StateMachineLimitExceeded = {}));
var StateMachineTypeNotSupported;
(function (StateMachineTypeNotSupported) {
    /**
     * @internal
     */
    StateMachineTypeNotSupported.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StateMachineTypeNotSupported = exports.StateMachineTypeNotSupported || (exports.StateMachineTypeNotSupported = {}));
var DeleteActivityInput;
(function (DeleteActivityInput) {
    /**
     * @internal
     */
    DeleteActivityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteActivityInput = exports.DeleteActivityInput || (exports.DeleteActivityInput = {}));
var DeleteActivityOutput;
(function (DeleteActivityOutput) {
    /**
     * @internal
     */
    DeleteActivityOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteActivityOutput = exports.DeleteActivityOutput || (exports.DeleteActivityOutput = {}));
var DeleteStateMachineInput;
(function (DeleteStateMachineInput) {
    /**
     * @internal
     */
    DeleteStateMachineInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStateMachineInput = exports.DeleteStateMachineInput || (exports.DeleteStateMachineInput = {}));
var DeleteStateMachineOutput;
(function (DeleteStateMachineOutput) {
    /**
     * @internal
     */
    DeleteStateMachineOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStateMachineOutput = exports.DeleteStateMachineOutput || (exports.DeleteStateMachineOutput = {}));
var DescribeActivityInput;
(function (DescribeActivityInput) {
    /**
     * @internal
     */
    DescribeActivityInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeActivityInput = exports.DescribeActivityInput || (exports.DescribeActivityInput = {}));
var DescribeActivityOutput;
(function (DescribeActivityOutput) {
    /**
     * @internal
     */
    DescribeActivityOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeActivityOutput = exports.DescribeActivityOutput || (exports.DescribeActivityOutput = {}));
var DescribeExecutionInput;
(function (DescribeExecutionInput) {
    /**
     * @internal
     */
    DescribeExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeExecutionInput = exports.DescribeExecutionInput || (exports.DescribeExecutionInput = {}));
var CloudWatchEventsExecutionDataDetails;
(function (CloudWatchEventsExecutionDataDetails) {
    /**
     * @internal
     */
    CloudWatchEventsExecutionDataDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchEventsExecutionDataDetails = exports.CloudWatchEventsExecutionDataDetails || (exports.CloudWatchEventsExecutionDataDetails = {}));
var DescribeExecutionOutput;
(function (DescribeExecutionOutput) {
    /**
     * @internal
     */
    DescribeExecutionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeExecutionOutput = exports.DescribeExecutionOutput || (exports.DescribeExecutionOutput = {}));
var ExecutionDoesNotExist;
(function (ExecutionDoesNotExist) {
    /**
     * @internal
     */
    ExecutionDoesNotExist.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecutionDoesNotExist = exports.ExecutionDoesNotExist || (exports.ExecutionDoesNotExist = {}));
var DescribeStateMachineInput;
(function (DescribeStateMachineInput) {
    /**
     * @internal
     */
    DescribeStateMachineInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStateMachineInput = exports.DescribeStateMachineInput || (exports.DescribeStateMachineInput = {}));
var DescribeStateMachineOutput;
(function (DescribeStateMachineOutput) {
    /**
     * @internal
     */
    DescribeStateMachineOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.definition && { definition: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeStateMachineOutput = exports.DescribeStateMachineOutput || (exports.DescribeStateMachineOutput = {}));
var StateMachineDoesNotExist;
(function (StateMachineDoesNotExist) {
    /**
     * @internal
     */
    StateMachineDoesNotExist.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StateMachineDoesNotExist = exports.StateMachineDoesNotExist || (exports.StateMachineDoesNotExist = {}));
var DescribeStateMachineForExecutionInput;
(function (DescribeStateMachineForExecutionInput) {
    /**
     * @internal
     */
    DescribeStateMachineForExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStateMachineForExecutionInput = exports.DescribeStateMachineForExecutionInput || (exports.DescribeStateMachineForExecutionInput = {}));
var DescribeStateMachineForExecutionOutput;
(function (DescribeStateMachineForExecutionOutput) {
    /**
     * @internal
     */
    DescribeStateMachineForExecutionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.definition && { definition: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeStateMachineForExecutionOutput = exports.DescribeStateMachineForExecutionOutput || (exports.DescribeStateMachineForExecutionOutput = {}));
var GetActivityTaskInput;
(function (GetActivityTaskInput) {
    /**
     * @internal
     */
    GetActivityTaskInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetActivityTaskInput = exports.GetActivityTaskInput || (exports.GetActivityTaskInput = {}));
var GetActivityTaskOutput;
(function (GetActivityTaskOutput) {
    /**
     * @internal
     */
    GetActivityTaskOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetActivityTaskOutput = exports.GetActivityTaskOutput || (exports.GetActivityTaskOutput = {}));
var GetExecutionHistoryInput;
(function (GetExecutionHistoryInput) {
    /**
     * @internal
     */
    GetExecutionHistoryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExecutionHistoryInput = exports.GetExecutionHistoryInput || (exports.GetExecutionHistoryInput = {}));
var ExecutionAbortedEventDetails;
(function (ExecutionAbortedEventDetails) {
    /**
     * @internal
     */
    ExecutionAbortedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(ExecutionAbortedEventDetails = exports.ExecutionAbortedEventDetails || (exports.ExecutionAbortedEventDetails = {}));
var ExecutionFailedEventDetails;
(function (ExecutionFailedEventDetails) {
    /**
     * @internal
     */
    ExecutionFailedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(ExecutionFailedEventDetails = exports.ExecutionFailedEventDetails || (exports.ExecutionFailedEventDetails = {}));
var ExecutionStartedEventDetails;
(function (ExecutionStartedEventDetails) {
    /**
     * @internal
     */
    ExecutionStartedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
    });
})(ExecutionStartedEventDetails = exports.ExecutionStartedEventDetails || (exports.ExecutionStartedEventDetails = {}));
var ExecutionSucceededEventDetails;
(function (ExecutionSucceededEventDetails) {
    /**
     * @internal
     */
    ExecutionSucceededEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
    });
})(ExecutionSucceededEventDetails = exports.ExecutionSucceededEventDetails || (exports.ExecutionSucceededEventDetails = {}));
var ExecutionTimedOutEventDetails;
(function (ExecutionTimedOutEventDetails) {
    /**
     * @internal
     */
    ExecutionTimedOutEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(ExecutionTimedOutEventDetails = exports.ExecutionTimedOutEventDetails || (exports.ExecutionTimedOutEventDetails = {}));
var LambdaFunctionFailedEventDetails;
(function (LambdaFunctionFailedEventDetails) {
    /**
     * @internal
     */
    LambdaFunctionFailedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(LambdaFunctionFailedEventDetails = exports.LambdaFunctionFailedEventDetails || (exports.LambdaFunctionFailedEventDetails = {}));
var LambdaFunctionScheduledEventDetails;
(function (LambdaFunctionScheduledEventDetails) {
    /**
     * @internal
     */
    LambdaFunctionScheduledEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
    });
})(LambdaFunctionScheduledEventDetails = exports.LambdaFunctionScheduledEventDetails || (exports.LambdaFunctionScheduledEventDetails = {}));
var LambdaFunctionScheduleFailedEventDetails;
(function (LambdaFunctionScheduleFailedEventDetails) {
    /**
     * @internal
     */
    LambdaFunctionScheduleFailedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(LambdaFunctionScheduleFailedEventDetails = exports.LambdaFunctionScheduleFailedEventDetails || (exports.LambdaFunctionScheduleFailedEventDetails = {}));
var LambdaFunctionStartFailedEventDetails;
(function (LambdaFunctionStartFailedEventDetails) {
    /**
     * @internal
     */
    LambdaFunctionStartFailedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(LambdaFunctionStartFailedEventDetails = exports.LambdaFunctionStartFailedEventDetails || (exports.LambdaFunctionStartFailedEventDetails = {}));
var LambdaFunctionSucceededEventDetails;
(function (LambdaFunctionSucceededEventDetails) {
    /**
     * @internal
     */
    LambdaFunctionSucceededEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
    });
})(LambdaFunctionSucceededEventDetails = exports.LambdaFunctionSucceededEventDetails || (exports.LambdaFunctionSucceededEventDetails = {}));
var LambdaFunctionTimedOutEventDetails;
(function (LambdaFunctionTimedOutEventDetails) {
    /**
     * @internal
     */
    LambdaFunctionTimedOutEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(LambdaFunctionTimedOutEventDetails = exports.LambdaFunctionTimedOutEventDetails || (exports.LambdaFunctionTimedOutEventDetails = {}));
var MapIterationEventDetails;
(function (MapIterationEventDetails) {
    /**
     * @internal
     */
    MapIterationEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MapIterationEventDetails = exports.MapIterationEventDetails || (exports.MapIterationEventDetails = {}));
var MapStateStartedEventDetails;
(function (MapStateStartedEventDetails) {
    /**
     * @internal
     */
    MapStateStartedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MapStateStartedEventDetails = exports.MapStateStartedEventDetails || (exports.MapStateStartedEventDetails = {}));
var StateEnteredEventDetails;
(function (StateEnteredEventDetails) {
    /**
     * @internal
     */
    StateEnteredEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
    });
})(StateEnteredEventDetails = exports.StateEnteredEventDetails || (exports.StateEnteredEventDetails = {}));
var StateExitedEventDetails;
(function (StateExitedEventDetails) {
    /**
     * @internal
     */
    StateExitedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
    });
})(StateExitedEventDetails = exports.StateExitedEventDetails || (exports.StateExitedEventDetails = {}));
var TaskFailedEventDetails;
(function (TaskFailedEventDetails) {
    /**
     * @internal
     */
    TaskFailedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(TaskFailedEventDetails = exports.TaskFailedEventDetails || (exports.TaskFailedEventDetails = {}));
var TaskScheduledEventDetails;
(function (TaskScheduledEventDetails) {
    /**
     * @internal
     */
    TaskScheduledEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.parameters && { parameters: smithy_client_1.SENSITIVE_STRING }),
    });
})(TaskScheduledEventDetails = exports.TaskScheduledEventDetails || (exports.TaskScheduledEventDetails = {}));
var TaskStartedEventDetails;
(function (TaskStartedEventDetails) {
    /**
     * @internal
     */
    TaskStartedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskStartedEventDetails = exports.TaskStartedEventDetails || (exports.TaskStartedEventDetails = {}));
var TaskStartFailedEventDetails;
(function (TaskStartFailedEventDetails) {
    /**
     * @internal
     */
    TaskStartFailedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(TaskStartFailedEventDetails = exports.TaskStartFailedEventDetails || (exports.TaskStartFailedEventDetails = {}));
var TaskSubmitFailedEventDetails;
(function (TaskSubmitFailedEventDetails) {
    /**
     * @internal
     */
    TaskSubmitFailedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(TaskSubmitFailedEventDetails = exports.TaskSubmitFailedEventDetails || (exports.TaskSubmitFailedEventDetails = {}));
var TaskSubmittedEventDetails;
(function (TaskSubmittedEventDetails) {
    /**
     * @internal
     */
    TaskSubmittedEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
    });
})(TaskSubmittedEventDetails = exports.TaskSubmittedEventDetails || (exports.TaskSubmittedEventDetails = {}));
var TaskSucceededEventDetails;
(function (TaskSucceededEventDetails) {
    /**
     * @internal
     */
    TaskSucceededEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
    });
})(TaskSucceededEventDetails = exports.TaskSucceededEventDetails || (exports.TaskSucceededEventDetails = {}));
var TaskTimedOutEventDetails;
(function (TaskTimedOutEventDetails) {
    /**
     * @internal
     */
    TaskTimedOutEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(TaskTimedOutEventDetails = exports.TaskTimedOutEventDetails || (exports.TaskTimedOutEventDetails = {}));
var HistoryEvent;
(function (HistoryEvent) {
    /**
     * @internal
     */
    HistoryEvent.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.activityFailedEventDetails && {
            activityFailedEventDetails: ActivityFailedEventDetails.filterSensitiveLog(obj.activityFailedEventDetails),
        }),
        ...(obj.activityScheduleFailedEventDetails && {
            activityScheduleFailedEventDetails: ActivityScheduleFailedEventDetails.filterSensitiveLog(obj.activityScheduleFailedEventDetails),
        }),
        ...(obj.activityScheduledEventDetails && {
            activityScheduledEventDetails: ActivityScheduledEventDetails.filterSensitiveLog(obj.activityScheduledEventDetails),
        }),
        ...(obj.activitySucceededEventDetails && {
            activitySucceededEventDetails: ActivitySucceededEventDetails.filterSensitiveLog(obj.activitySucceededEventDetails),
        }),
        ...(obj.activityTimedOutEventDetails && {
            activityTimedOutEventDetails: ActivityTimedOutEventDetails.filterSensitiveLog(obj.activityTimedOutEventDetails),
        }),
        ...(obj.taskFailedEventDetails && {
            taskFailedEventDetails: TaskFailedEventDetails.filterSensitiveLog(obj.taskFailedEventDetails),
        }),
        ...(obj.taskScheduledEventDetails && {
            taskScheduledEventDetails: TaskScheduledEventDetails.filterSensitiveLog(obj.taskScheduledEventDetails),
        }),
        ...(obj.taskStartFailedEventDetails && {
            taskStartFailedEventDetails: TaskStartFailedEventDetails.filterSensitiveLog(obj.taskStartFailedEventDetails),
        }),
        ...(obj.taskSubmitFailedEventDetails && {
            taskSubmitFailedEventDetails: TaskSubmitFailedEventDetails.filterSensitiveLog(obj.taskSubmitFailedEventDetails),
        }),
        ...(obj.taskSubmittedEventDetails && {
            taskSubmittedEventDetails: TaskSubmittedEventDetails.filterSensitiveLog(obj.taskSubmittedEventDetails),
        }),
        ...(obj.taskSucceededEventDetails && {
            taskSucceededEventDetails: TaskSucceededEventDetails.filterSensitiveLog(obj.taskSucceededEventDetails),
        }),
        ...(obj.taskTimedOutEventDetails && {
            taskTimedOutEventDetails: TaskTimedOutEventDetails.filterSensitiveLog(obj.taskTimedOutEventDetails),
        }),
        ...(obj.executionFailedEventDetails && {
            executionFailedEventDetails: ExecutionFailedEventDetails.filterSensitiveLog(obj.executionFailedEventDetails),
        }),
        ...(obj.executionStartedEventDetails && {
            executionStartedEventDetails: ExecutionStartedEventDetails.filterSensitiveLog(obj.executionStartedEventDetails),
        }),
        ...(obj.executionSucceededEventDetails && {
            executionSucceededEventDetails: ExecutionSucceededEventDetails.filterSensitiveLog(obj.executionSucceededEventDetails),
        }),
        ...(obj.executionAbortedEventDetails && {
            executionAbortedEventDetails: ExecutionAbortedEventDetails.filterSensitiveLog(obj.executionAbortedEventDetails),
        }),
        ...(obj.executionTimedOutEventDetails && {
            executionTimedOutEventDetails: ExecutionTimedOutEventDetails.filterSensitiveLog(obj.executionTimedOutEventDetails),
        }),
        ...(obj.lambdaFunctionFailedEventDetails && {
            lambdaFunctionFailedEventDetails: LambdaFunctionFailedEventDetails.filterSensitiveLog(obj.lambdaFunctionFailedEventDetails),
        }),
        ...(obj.lambdaFunctionScheduleFailedEventDetails && {
            lambdaFunctionScheduleFailedEventDetails: LambdaFunctionScheduleFailedEventDetails.filterSensitiveLog(obj.lambdaFunctionScheduleFailedEventDetails),
        }),
        ...(obj.lambdaFunctionScheduledEventDetails && {
            lambdaFunctionScheduledEventDetails: LambdaFunctionScheduledEventDetails.filterSensitiveLog(obj.lambdaFunctionScheduledEventDetails),
        }),
        ...(obj.lambdaFunctionStartFailedEventDetails && {
            lambdaFunctionStartFailedEventDetails: LambdaFunctionStartFailedEventDetails.filterSensitiveLog(obj.lambdaFunctionStartFailedEventDetails),
        }),
        ...(obj.lambdaFunctionSucceededEventDetails && {
            lambdaFunctionSucceededEventDetails: LambdaFunctionSucceededEventDetails.filterSensitiveLog(obj.lambdaFunctionSucceededEventDetails),
        }),
        ...(obj.lambdaFunctionTimedOutEventDetails && {
            lambdaFunctionTimedOutEventDetails: LambdaFunctionTimedOutEventDetails.filterSensitiveLog(obj.lambdaFunctionTimedOutEventDetails),
        }),
        ...(obj.stateEnteredEventDetails && {
            stateEnteredEventDetails: StateEnteredEventDetails.filterSensitiveLog(obj.stateEnteredEventDetails),
        }),
        ...(obj.stateExitedEventDetails && {
            stateExitedEventDetails: StateExitedEventDetails.filterSensitiveLog(obj.stateExitedEventDetails),
        }),
    });
})(HistoryEvent = exports.HistoryEvent || (exports.HistoryEvent = {}));
var GetExecutionHistoryOutput;
(function (GetExecutionHistoryOutput) {
    /**
     * @internal
     */
    GetExecutionHistoryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.events && { events: obj.events.map((item) => HistoryEvent.filterSensitiveLog(item)) }),
    });
})(GetExecutionHistoryOutput = exports.GetExecutionHistoryOutput || (exports.GetExecutionHistoryOutput = {}));
var InvalidToken;
(function (InvalidToken) {
    /**
     * @internal
     */
    InvalidToken.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidToken = exports.InvalidToken || (exports.InvalidToken = {}));
var ListActivitiesInput;
(function (ListActivitiesInput) {
    /**
     * @internal
     */
    ListActivitiesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActivitiesInput = exports.ListActivitiesInput || (exports.ListActivitiesInput = {}));
var ListActivitiesOutput;
(function (ListActivitiesOutput) {
    /**
     * @internal
     */
    ListActivitiesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActivitiesOutput = exports.ListActivitiesOutput || (exports.ListActivitiesOutput = {}));
var ListExecutionsInput;
(function (ListExecutionsInput) {
    /**
     * @internal
     */
    ListExecutionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListExecutionsInput = exports.ListExecutionsInput || (exports.ListExecutionsInput = {}));
var ExecutionListItem;
(function (ExecutionListItem) {
    /**
     * @internal
     */
    ExecutionListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecutionListItem = exports.ExecutionListItem || (exports.ExecutionListItem = {}));
var ListExecutionsOutput;
(function (ListExecutionsOutput) {
    /**
     * @internal
     */
    ListExecutionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListExecutionsOutput = exports.ListExecutionsOutput || (exports.ListExecutionsOutput = {}));
var ListStateMachinesInput;
(function (ListStateMachinesInput) {
    /**
     * @internal
     */
    ListStateMachinesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStateMachinesInput = exports.ListStateMachinesInput || (exports.ListStateMachinesInput = {}));
var StateMachineListItem;
(function (StateMachineListItem) {
    /**
     * @internal
     */
    StateMachineListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StateMachineListItem = exports.StateMachineListItem || (exports.StateMachineListItem = {}));
var ListStateMachinesOutput;
(function (ListStateMachinesOutput) {
    /**
     * @internal
     */
    ListStateMachinesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStateMachinesOutput = exports.ListStateMachinesOutput || (exports.ListStateMachinesOutput = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    /**
     * @internal
     */
    ListTagsForResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {}));
var ResourceNotFound;
(function (ResourceNotFound) {
    /**
     * @internal
     */
    ResourceNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFound = exports.ResourceNotFound || (exports.ResourceNotFound = {}));
var SendTaskFailureInput;
(function (SendTaskFailureInput) {
    /**
     * @internal
     */
    SendTaskFailureInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(SendTaskFailureInput = exports.SendTaskFailureInput || (exports.SendTaskFailureInput = {}));
var SendTaskFailureOutput;
(function (SendTaskFailureOutput) {
    /**
     * @internal
     */
    SendTaskFailureOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendTaskFailureOutput = exports.SendTaskFailureOutput || (exports.SendTaskFailureOutput = {}));
var TaskDoesNotExist;
(function (TaskDoesNotExist) {
    /**
     * @internal
     */
    TaskDoesNotExist.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskDoesNotExist = exports.TaskDoesNotExist || (exports.TaskDoesNotExist = {}));
var TaskTimedOut;
(function (TaskTimedOut) {
    /**
     * @internal
     */
    TaskTimedOut.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskTimedOut = exports.TaskTimedOut || (exports.TaskTimedOut = {}));
var SendTaskHeartbeatInput;
(function (SendTaskHeartbeatInput) {
    /**
     * @internal
     */
    SendTaskHeartbeatInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendTaskHeartbeatInput = exports.SendTaskHeartbeatInput || (exports.SendTaskHeartbeatInput = {}));
var SendTaskHeartbeatOutput;
(function (SendTaskHeartbeatOutput) {
    /**
     * @internal
     */
    SendTaskHeartbeatOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendTaskHeartbeatOutput = exports.SendTaskHeartbeatOutput || (exports.SendTaskHeartbeatOutput = {}));
var InvalidOutput;
(function (InvalidOutput) {
    /**
     * @internal
     */
    InvalidOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidOutput = exports.InvalidOutput || (exports.InvalidOutput = {}));
var SendTaskSuccessInput;
(function (SendTaskSuccessInput) {
    /**
     * @internal
     */
    SendTaskSuccessInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
    });
})(SendTaskSuccessInput = exports.SendTaskSuccessInput || (exports.SendTaskSuccessInput = {}));
var SendTaskSuccessOutput;
(function (SendTaskSuccessOutput) {
    /**
     * @internal
     */
    SendTaskSuccessOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendTaskSuccessOutput = exports.SendTaskSuccessOutput || (exports.SendTaskSuccessOutput = {}));
var ExecutionAlreadyExists;
(function (ExecutionAlreadyExists) {
    /**
     * @internal
     */
    ExecutionAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecutionAlreadyExists = exports.ExecutionAlreadyExists || (exports.ExecutionAlreadyExists = {}));
var ExecutionLimitExceeded;
(function (ExecutionLimitExceeded) {
    /**
     * @internal
     */
    ExecutionLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecutionLimitExceeded = exports.ExecutionLimitExceeded || (exports.ExecutionLimitExceeded = {}));
var InvalidExecutionInput;
(function (InvalidExecutionInput) {
    /**
     * @internal
     */
    InvalidExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidExecutionInput = exports.InvalidExecutionInput || (exports.InvalidExecutionInput = {}));
var StartExecutionInput;
(function (StartExecutionInput) {
    /**
     * @internal
     */
    StartExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
    });
})(StartExecutionInput = exports.StartExecutionInput || (exports.StartExecutionInput = {}));
var StartExecutionOutput;
(function (StartExecutionOutput) {
    /**
     * @internal
     */
    StartExecutionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartExecutionOutput = exports.StartExecutionOutput || (exports.StartExecutionOutput = {}));
var StartSyncExecutionInput;
(function (StartSyncExecutionInput) {
    /**
     * @internal
     */
    StartSyncExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
    });
})(StartSyncExecutionInput = exports.StartSyncExecutionInput || (exports.StartSyncExecutionInput = {}));
var BillingDetails;
(function (BillingDetails) {
    /**
     * @internal
     */
    BillingDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BillingDetails = exports.BillingDetails || (exports.BillingDetails = {}));
var StartSyncExecutionOutput;
(function (StartSyncExecutionOutput) {
    /**
     * @internal
     */
    StartSyncExecutionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
    });
})(StartSyncExecutionOutput = exports.StartSyncExecutionOutput || (exports.StartSyncExecutionOutput = {}));
var StopExecutionInput;
(function (StopExecutionInput) {
    /**
     * @internal
     */
    StopExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    });
})(StopExecutionInput = exports.StopExecutionInput || (exports.StopExecutionInput = {}));
var StopExecutionOutput;
(function (StopExecutionOutput) {
    /**
     * @internal
     */
    StopExecutionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopExecutionOutput = exports.StopExecutionOutput || (exports.StopExecutionOutput = {}));
var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagResourceOutput;
(function (TagResourceOutput) {
    /**
     * @internal
     */
    TagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceOutput = exports.TagResourceOutput || (exports.TagResourceOutput = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var UntagResourceOutput;
(function (UntagResourceOutput) {
    /**
     * @internal
     */
    UntagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceOutput = exports.UntagResourceOutput || (exports.UntagResourceOutput = {}));
var MissingRequiredParameter;
(function (MissingRequiredParameter) {
    /**
     * @internal
     */
    MissingRequiredParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MissingRequiredParameter = exports.MissingRequiredParameter || (exports.MissingRequiredParameter = {}));
var UpdateStateMachineInput;
(function (UpdateStateMachineInput) {
    /**
     * @internal
     */
    UpdateStateMachineInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.definition && { definition: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateStateMachineInput = exports.UpdateStateMachineInput || (exports.UpdateStateMachineInput = {}));
var UpdateStateMachineOutput;
(function (UpdateStateMachineOutput) {
    /**
     * @internal
     */
    UpdateStateMachineOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStateMachineOutput = exports.UpdateStateMachineOutput || (exports.UpdateStateMachineOutput = {}));
//# sourceMappingURL=models_0.js.map