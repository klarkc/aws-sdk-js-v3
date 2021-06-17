import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var ActivityDoesNotExist;
(function (ActivityDoesNotExist) {
    /**
     * @internal
     */
    ActivityDoesNotExist.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActivityDoesNotExist || (ActivityDoesNotExist = {}));
export var ActivityFailedEventDetails;
(function (ActivityFailedEventDetails) {
    /**
     * @internal
     */
    ActivityFailedEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(ActivityFailedEventDetails || (ActivityFailedEventDetails = {}));
export var ActivityLimitExceeded;
(function (ActivityLimitExceeded) {
    /**
     * @internal
     */
    ActivityLimitExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActivityLimitExceeded || (ActivityLimitExceeded = {}));
export var ActivityListItem;
(function (ActivityListItem) {
    /**
     * @internal
     */
    ActivityListItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActivityListItem || (ActivityListItem = {}));
export var HistoryEventExecutionDataDetails;
(function (HistoryEventExecutionDataDetails) {
    /**
     * @internal
     */
    HistoryEventExecutionDataDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HistoryEventExecutionDataDetails || (HistoryEventExecutionDataDetails = {}));
export var ActivityScheduledEventDetails;
(function (ActivityScheduledEventDetails) {
    /**
     * @internal
     */
    ActivityScheduledEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.input && { input: SENSITIVE_STRING }))); };
})(ActivityScheduledEventDetails || (ActivityScheduledEventDetails = {}));
export var ActivityScheduleFailedEventDetails;
(function (ActivityScheduleFailedEventDetails) {
    /**
     * @internal
     */
    ActivityScheduleFailedEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(ActivityScheduleFailedEventDetails || (ActivityScheduleFailedEventDetails = {}));
export var ActivityStartedEventDetails;
(function (ActivityStartedEventDetails) {
    /**
     * @internal
     */
    ActivityStartedEventDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActivityStartedEventDetails || (ActivityStartedEventDetails = {}));
export var ActivitySucceededEventDetails;
(function (ActivitySucceededEventDetails) {
    /**
     * @internal
     */
    ActivitySucceededEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.output && { output: SENSITIVE_STRING }))); };
})(ActivitySucceededEventDetails || (ActivitySucceededEventDetails = {}));
export var ActivityTimedOutEventDetails;
(function (ActivityTimedOutEventDetails) {
    /**
     * @internal
     */
    ActivityTimedOutEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(ActivityTimedOutEventDetails || (ActivityTimedOutEventDetails = {}));
export var ActivityWorkerLimitExceeded;
(function (ActivityWorkerLimitExceeded) {
    /**
     * @internal
     */
    ActivityWorkerLimitExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActivityWorkerLimitExceeded || (ActivityWorkerLimitExceeded = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateActivityInput;
(function (CreateActivityInput) {
    /**
     * @internal
     */
    CreateActivityInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateActivityInput || (CreateActivityInput = {}));
export var CreateActivityOutput;
(function (CreateActivityOutput) {
    /**
     * @internal
     */
    CreateActivityOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateActivityOutput || (CreateActivityOutput = {}));
export var InvalidName;
(function (InvalidName) {
    /**
     * @internal
     */
    InvalidName.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidName || (InvalidName = {}));
export var TooManyTags;
(function (TooManyTags) {
    /**
     * @internal
     */
    TooManyTags.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyTags || (TooManyTags = {}));
export var CloudWatchLogsLogGroup;
(function (CloudWatchLogsLogGroup) {
    /**
     * @internal
     */
    CloudWatchLogsLogGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudWatchLogsLogGroup || (CloudWatchLogsLogGroup = {}));
export var LogDestination;
(function (LogDestination) {
    /**
     * @internal
     */
    LogDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LogDestination || (LogDestination = {}));
export var LoggingConfiguration;
(function (LoggingConfiguration) {
    /**
     * @internal
     */
    LoggingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoggingConfiguration || (LoggingConfiguration = {}));
export var TracingConfiguration;
(function (TracingConfiguration) {
    /**
     * @internal
     */
    TracingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TracingConfiguration || (TracingConfiguration = {}));
export var CreateStateMachineInput;
(function (CreateStateMachineInput) {
    /**
     * @internal
     */
    CreateStateMachineInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.definition && { definition: SENSITIVE_STRING }))); };
})(CreateStateMachineInput || (CreateStateMachineInput = {}));
export var CreateStateMachineOutput;
(function (CreateStateMachineOutput) {
    /**
     * @internal
     */
    CreateStateMachineOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateStateMachineOutput || (CreateStateMachineOutput = {}));
export var InvalidArn;
(function (InvalidArn) {
    /**
     * @internal
     */
    InvalidArn.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidArn || (InvalidArn = {}));
export var InvalidDefinition;
(function (InvalidDefinition) {
    /**
     * @internal
     */
    InvalidDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidDefinition || (InvalidDefinition = {}));
export var InvalidLoggingConfiguration;
(function (InvalidLoggingConfiguration) {
    /**
     * @internal
     */
    InvalidLoggingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidLoggingConfiguration || (InvalidLoggingConfiguration = {}));
export var InvalidTracingConfiguration;
(function (InvalidTracingConfiguration) {
    /**
     * @internal
     */
    InvalidTracingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidTracingConfiguration || (InvalidTracingConfiguration = {}));
export var StateMachineAlreadyExists;
(function (StateMachineAlreadyExists) {
    /**
     * @internal
     */
    StateMachineAlreadyExists.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StateMachineAlreadyExists || (StateMachineAlreadyExists = {}));
export var StateMachineDeleting;
(function (StateMachineDeleting) {
    /**
     * @internal
     */
    StateMachineDeleting.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StateMachineDeleting || (StateMachineDeleting = {}));
export var StateMachineLimitExceeded;
(function (StateMachineLimitExceeded) {
    /**
     * @internal
     */
    StateMachineLimitExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StateMachineLimitExceeded || (StateMachineLimitExceeded = {}));
export var StateMachineTypeNotSupported;
(function (StateMachineTypeNotSupported) {
    /**
     * @internal
     */
    StateMachineTypeNotSupported.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StateMachineTypeNotSupported || (StateMachineTypeNotSupported = {}));
export var DeleteActivityInput;
(function (DeleteActivityInput) {
    /**
     * @internal
     */
    DeleteActivityInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteActivityInput || (DeleteActivityInput = {}));
export var DeleteActivityOutput;
(function (DeleteActivityOutput) {
    /**
     * @internal
     */
    DeleteActivityOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteActivityOutput || (DeleteActivityOutput = {}));
export var DeleteStateMachineInput;
(function (DeleteStateMachineInput) {
    /**
     * @internal
     */
    DeleteStateMachineInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStateMachineInput || (DeleteStateMachineInput = {}));
export var DeleteStateMachineOutput;
(function (DeleteStateMachineOutput) {
    /**
     * @internal
     */
    DeleteStateMachineOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStateMachineOutput || (DeleteStateMachineOutput = {}));
export var DescribeActivityInput;
(function (DescribeActivityInput) {
    /**
     * @internal
     */
    DescribeActivityInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeActivityInput || (DescribeActivityInput = {}));
export var DescribeActivityOutput;
(function (DescribeActivityOutput) {
    /**
     * @internal
     */
    DescribeActivityOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeActivityOutput || (DescribeActivityOutput = {}));
export var DescribeExecutionInput;
(function (DescribeExecutionInput) {
    /**
     * @internal
     */
    DescribeExecutionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeExecutionInput || (DescribeExecutionInput = {}));
export var CloudWatchEventsExecutionDataDetails;
(function (CloudWatchEventsExecutionDataDetails) {
    /**
     * @internal
     */
    CloudWatchEventsExecutionDataDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudWatchEventsExecutionDataDetails || (CloudWatchEventsExecutionDataDetails = {}));
export var DescribeExecutionOutput;
(function (DescribeExecutionOutput) {
    /**
     * @internal
     */
    DescribeExecutionOutput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.input && { input: SENSITIVE_STRING })), (obj.output && { output: SENSITIVE_STRING }))); };
})(DescribeExecutionOutput || (DescribeExecutionOutput = {}));
export var ExecutionDoesNotExist;
(function (ExecutionDoesNotExist) {
    /**
     * @internal
     */
    ExecutionDoesNotExist.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecutionDoesNotExist || (ExecutionDoesNotExist = {}));
export var DescribeStateMachineInput;
(function (DescribeStateMachineInput) {
    /**
     * @internal
     */
    DescribeStateMachineInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStateMachineInput || (DescribeStateMachineInput = {}));
export var DescribeStateMachineOutput;
(function (DescribeStateMachineOutput) {
    /**
     * @internal
     */
    DescribeStateMachineOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.definition && { definition: SENSITIVE_STRING }))); };
})(DescribeStateMachineOutput || (DescribeStateMachineOutput = {}));
export var StateMachineDoesNotExist;
(function (StateMachineDoesNotExist) {
    /**
     * @internal
     */
    StateMachineDoesNotExist.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StateMachineDoesNotExist || (StateMachineDoesNotExist = {}));
export var DescribeStateMachineForExecutionInput;
(function (DescribeStateMachineForExecutionInput) {
    /**
     * @internal
     */
    DescribeStateMachineForExecutionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeStateMachineForExecutionInput || (DescribeStateMachineForExecutionInput = {}));
export var DescribeStateMachineForExecutionOutput;
(function (DescribeStateMachineForExecutionOutput) {
    /**
     * @internal
     */
    DescribeStateMachineForExecutionOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.definition && { definition: SENSITIVE_STRING }))); };
})(DescribeStateMachineForExecutionOutput || (DescribeStateMachineForExecutionOutput = {}));
export var GetActivityTaskInput;
(function (GetActivityTaskInput) {
    /**
     * @internal
     */
    GetActivityTaskInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetActivityTaskInput || (GetActivityTaskInput = {}));
export var GetActivityTaskOutput;
(function (GetActivityTaskOutput) {
    /**
     * @internal
     */
    GetActivityTaskOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.input && { input: SENSITIVE_STRING }))); };
})(GetActivityTaskOutput || (GetActivityTaskOutput = {}));
export var GetExecutionHistoryInput;
(function (GetExecutionHistoryInput) {
    /**
     * @internal
     */
    GetExecutionHistoryInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetExecutionHistoryInput || (GetExecutionHistoryInput = {}));
export var ExecutionAbortedEventDetails;
(function (ExecutionAbortedEventDetails) {
    /**
     * @internal
     */
    ExecutionAbortedEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(ExecutionAbortedEventDetails || (ExecutionAbortedEventDetails = {}));
export var ExecutionFailedEventDetails;
(function (ExecutionFailedEventDetails) {
    /**
     * @internal
     */
    ExecutionFailedEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(ExecutionFailedEventDetails || (ExecutionFailedEventDetails = {}));
export var ExecutionStartedEventDetails;
(function (ExecutionStartedEventDetails) {
    /**
     * @internal
     */
    ExecutionStartedEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.input && { input: SENSITIVE_STRING }))); };
})(ExecutionStartedEventDetails || (ExecutionStartedEventDetails = {}));
export var ExecutionSucceededEventDetails;
(function (ExecutionSucceededEventDetails) {
    /**
     * @internal
     */
    ExecutionSucceededEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.output && { output: SENSITIVE_STRING }))); };
})(ExecutionSucceededEventDetails || (ExecutionSucceededEventDetails = {}));
export var ExecutionTimedOutEventDetails;
(function (ExecutionTimedOutEventDetails) {
    /**
     * @internal
     */
    ExecutionTimedOutEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(ExecutionTimedOutEventDetails || (ExecutionTimedOutEventDetails = {}));
export var LambdaFunctionFailedEventDetails;
(function (LambdaFunctionFailedEventDetails) {
    /**
     * @internal
     */
    LambdaFunctionFailedEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(LambdaFunctionFailedEventDetails || (LambdaFunctionFailedEventDetails = {}));
export var LambdaFunctionScheduledEventDetails;
(function (LambdaFunctionScheduledEventDetails) {
    /**
     * @internal
     */
    LambdaFunctionScheduledEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.input && { input: SENSITIVE_STRING }))); };
})(LambdaFunctionScheduledEventDetails || (LambdaFunctionScheduledEventDetails = {}));
export var LambdaFunctionScheduleFailedEventDetails;
(function (LambdaFunctionScheduleFailedEventDetails) {
    /**
     * @internal
     */
    LambdaFunctionScheduleFailedEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(LambdaFunctionScheduleFailedEventDetails || (LambdaFunctionScheduleFailedEventDetails = {}));
export var LambdaFunctionStartFailedEventDetails;
(function (LambdaFunctionStartFailedEventDetails) {
    /**
     * @internal
     */
    LambdaFunctionStartFailedEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(LambdaFunctionStartFailedEventDetails || (LambdaFunctionStartFailedEventDetails = {}));
export var LambdaFunctionSucceededEventDetails;
(function (LambdaFunctionSucceededEventDetails) {
    /**
     * @internal
     */
    LambdaFunctionSucceededEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.output && { output: SENSITIVE_STRING }))); };
})(LambdaFunctionSucceededEventDetails || (LambdaFunctionSucceededEventDetails = {}));
export var LambdaFunctionTimedOutEventDetails;
(function (LambdaFunctionTimedOutEventDetails) {
    /**
     * @internal
     */
    LambdaFunctionTimedOutEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(LambdaFunctionTimedOutEventDetails || (LambdaFunctionTimedOutEventDetails = {}));
export var MapIterationEventDetails;
(function (MapIterationEventDetails) {
    /**
     * @internal
     */
    MapIterationEventDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MapIterationEventDetails || (MapIterationEventDetails = {}));
export var MapStateStartedEventDetails;
(function (MapStateStartedEventDetails) {
    /**
     * @internal
     */
    MapStateStartedEventDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MapStateStartedEventDetails || (MapStateStartedEventDetails = {}));
export var StateEnteredEventDetails;
(function (StateEnteredEventDetails) {
    /**
     * @internal
     */
    StateEnteredEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.input && { input: SENSITIVE_STRING }))); };
})(StateEnteredEventDetails || (StateEnteredEventDetails = {}));
export var StateExitedEventDetails;
(function (StateExitedEventDetails) {
    /**
     * @internal
     */
    StateExitedEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.output && { output: SENSITIVE_STRING }))); };
})(StateExitedEventDetails || (StateExitedEventDetails = {}));
export var TaskFailedEventDetails;
(function (TaskFailedEventDetails) {
    /**
     * @internal
     */
    TaskFailedEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(TaskFailedEventDetails || (TaskFailedEventDetails = {}));
export var TaskScheduledEventDetails;
(function (TaskScheduledEventDetails) {
    /**
     * @internal
     */
    TaskScheduledEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.parameters && { parameters: SENSITIVE_STRING }))); };
})(TaskScheduledEventDetails || (TaskScheduledEventDetails = {}));
export var TaskStartedEventDetails;
(function (TaskStartedEventDetails) {
    /**
     * @internal
     */
    TaskStartedEventDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaskStartedEventDetails || (TaskStartedEventDetails = {}));
export var TaskStartFailedEventDetails;
(function (TaskStartFailedEventDetails) {
    /**
     * @internal
     */
    TaskStartFailedEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(TaskStartFailedEventDetails || (TaskStartFailedEventDetails = {}));
export var TaskSubmitFailedEventDetails;
(function (TaskSubmitFailedEventDetails) {
    /**
     * @internal
     */
    TaskSubmitFailedEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(TaskSubmitFailedEventDetails || (TaskSubmitFailedEventDetails = {}));
export var TaskSubmittedEventDetails;
(function (TaskSubmittedEventDetails) {
    /**
     * @internal
     */
    TaskSubmittedEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.output && { output: SENSITIVE_STRING }))); };
})(TaskSubmittedEventDetails || (TaskSubmittedEventDetails = {}));
export var TaskSucceededEventDetails;
(function (TaskSucceededEventDetails) {
    /**
     * @internal
     */
    TaskSucceededEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.output && { output: SENSITIVE_STRING }))); };
})(TaskSucceededEventDetails || (TaskSucceededEventDetails = {}));
export var TaskTimedOutEventDetails;
(function (TaskTimedOutEventDetails) {
    /**
     * @internal
     */
    TaskTimedOutEventDetails.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(TaskTimedOutEventDetails || (TaskTimedOutEventDetails = {}));
export var HistoryEvent;
(function (HistoryEvent) {
    /**
     * @internal
     */
    HistoryEvent.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, obj), (obj.activityFailedEventDetails && {
        activityFailedEventDetails: ActivityFailedEventDetails.filterSensitiveLog(obj.activityFailedEventDetails),
    })), (obj.activityScheduleFailedEventDetails && {
        activityScheduleFailedEventDetails: ActivityScheduleFailedEventDetails.filterSensitiveLog(obj.activityScheduleFailedEventDetails),
    })), (obj.activityScheduledEventDetails && {
        activityScheduledEventDetails: ActivityScheduledEventDetails.filterSensitiveLog(obj.activityScheduledEventDetails),
    })), (obj.activitySucceededEventDetails && {
        activitySucceededEventDetails: ActivitySucceededEventDetails.filterSensitiveLog(obj.activitySucceededEventDetails),
    })), (obj.activityTimedOutEventDetails && {
        activityTimedOutEventDetails: ActivityTimedOutEventDetails.filterSensitiveLog(obj.activityTimedOutEventDetails),
    })), (obj.taskFailedEventDetails && {
        taskFailedEventDetails: TaskFailedEventDetails.filterSensitiveLog(obj.taskFailedEventDetails),
    })), (obj.taskScheduledEventDetails && {
        taskScheduledEventDetails: TaskScheduledEventDetails.filterSensitiveLog(obj.taskScheduledEventDetails),
    })), (obj.taskStartFailedEventDetails && {
        taskStartFailedEventDetails: TaskStartFailedEventDetails.filterSensitiveLog(obj.taskStartFailedEventDetails),
    })), (obj.taskSubmitFailedEventDetails && {
        taskSubmitFailedEventDetails: TaskSubmitFailedEventDetails.filterSensitiveLog(obj.taskSubmitFailedEventDetails),
    })), (obj.taskSubmittedEventDetails && {
        taskSubmittedEventDetails: TaskSubmittedEventDetails.filterSensitiveLog(obj.taskSubmittedEventDetails),
    })), (obj.taskSucceededEventDetails && {
        taskSucceededEventDetails: TaskSucceededEventDetails.filterSensitiveLog(obj.taskSucceededEventDetails),
    })), (obj.taskTimedOutEventDetails && {
        taskTimedOutEventDetails: TaskTimedOutEventDetails.filterSensitiveLog(obj.taskTimedOutEventDetails),
    })), (obj.executionFailedEventDetails && {
        executionFailedEventDetails: ExecutionFailedEventDetails.filterSensitiveLog(obj.executionFailedEventDetails),
    })), (obj.executionStartedEventDetails && {
        executionStartedEventDetails: ExecutionStartedEventDetails.filterSensitiveLog(obj.executionStartedEventDetails),
    })), (obj.executionSucceededEventDetails && {
        executionSucceededEventDetails: ExecutionSucceededEventDetails.filterSensitiveLog(obj.executionSucceededEventDetails),
    })), (obj.executionAbortedEventDetails && {
        executionAbortedEventDetails: ExecutionAbortedEventDetails.filterSensitiveLog(obj.executionAbortedEventDetails),
    })), (obj.executionTimedOutEventDetails && {
        executionTimedOutEventDetails: ExecutionTimedOutEventDetails.filterSensitiveLog(obj.executionTimedOutEventDetails),
    })), (obj.lambdaFunctionFailedEventDetails && {
        lambdaFunctionFailedEventDetails: LambdaFunctionFailedEventDetails.filterSensitiveLog(obj.lambdaFunctionFailedEventDetails),
    })), (obj.lambdaFunctionScheduleFailedEventDetails && {
        lambdaFunctionScheduleFailedEventDetails: LambdaFunctionScheduleFailedEventDetails.filterSensitiveLog(obj.lambdaFunctionScheduleFailedEventDetails),
    })), (obj.lambdaFunctionScheduledEventDetails && {
        lambdaFunctionScheduledEventDetails: LambdaFunctionScheduledEventDetails.filterSensitiveLog(obj.lambdaFunctionScheduledEventDetails),
    })), (obj.lambdaFunctionStartFailedEventDetails && {
        lambdaFunctionStartFailedEventDetails: LambdaFunctionStartFailedEventDetails.filterSensitiveLog(obj.lambdaFunctionStartFailedEventDetails),
    })), (obj.lambdaFunctionSucceededEventDetails && {
        lambdaFunctionSucceededEventDetails: LambdaFunctionSucceededEventDetails.filterSensitiveLog(obj.lambdaFunctionSucceededEventDetails),
    })), (obj.lambdaFunctionTimedOutEventDetails && {
        lambdaFunctionTimedOutEventDetails: LambdaFunctionTimedOutEventDetails.filterSensitiveLog(obj.lambdaFunctionTimedOutEventDetails),
    })), (obj.stateEnteredEventDetails && {
        stateEnteredEventDetails: StateEnteredEventDetails.filterSensitiveLog(obj.stateEnteredEventDetails),
    })), (obj.stateExitedEventDetails && {
        stateExitedEventDetails: StateExitedEventDetails.filterSensitiveLog(obj.stateExitedEventDetails),
    }))); };
})(HistoryEvent || (HistoryEvent = {}));
export var GetExecutionHistoryOutput;
(function (GetExecutionHistoryOutput) {
    /**
     * @internal
     */
    GetExecutionHistoryOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.events && { events: obj.events.map(function (item) { return HistoryEvent.filterSensitiveLog(item); }) }))); };
})(GetExecutionHistoryOutput || (GetExecutionHistoryOutput = {}));
export var InvalidToken;
(function (InvalidToken) {
    /**
     * @internal
     */
    InvalidToken.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidToken || (InvalidToken = {}));
export var ListActivitiesInput;
(function (ListActivitiesInput) {
    /**
     * @internal
     */
    ListActivitiesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListActivitiesInput || (ListActivitiesInput = {}));
export var ListActivitiesOutput;
(function (ListActivitiesOutput) {
    /**
     * @internal
     */
    ListActivitiesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListActivitiesOutput || (ListActivitiesOutput = {}));
export var ListExecutionsInput;
(function (ListExecutionsInput) {
    /**
     * @internal
     */
    ListExecutionsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListExecutionsInput || (ListExecutionsInput = {}));
export var ExecutionListItem;
(function (ExecutionListItem) {
    /**
     * @internal
     */
    ExecutionListItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecutionListItem || (ExecutionListItem = {}));
export var ListExecutionsOutput;
(function (ListExecutionsOutput) {
    /**
     * @internal
     */
    ListExecutionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListExecutionsOutput || (ListExecutionsOutput = {}));
export var ListStateMachinesInput;
(function (ListStateMachinesInput) {
    /**
     * @internal
     */
    ListStateMachinesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStateMachinesInput || (ListStateMachinesInput = {}));
export var StateMachineListItem;
(function (StateMachineListItem) {
    /**
     * @internal
     */
    StateMachineListItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StateMachineListItem || (StateMachineListItem = {}));
export var ListStateMachinesOutput;
(function (ListStateMachinesOutput) {
    /**
     * @internal
     */
    ListStateMachinesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStateMachinesOutput || (ListStateMachinesOutput = {}));
export var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceInput || (ListTagsForResourceInput = {}));
export var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    /**
     * @internal
     */
    ListTagsForResourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceOutput || (ListTagsForResourceOutput = {}));
export var ResourceNotFound;
(function (ResourceNotFound) {
    /**
     * @internal
     */
    ResourceNotFound.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFound || (ResourceNotFound = {}));
export var SendTaskFailureInput;
(function (SendTaskFailureInput) {
    /**
     * @internal
     */
    SendTaskFailureInput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(SendTaskFailureInput || (SendTaskFailureInput = {}));
export var SendTaskFailureOutput;
(function (SendTaskFailureOutput) {
    /**
     * @internal
     */
    SendTaskFailureOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendTaskFailureOutput || (SendTaskFailureOutput = {}));
export var TaskDoesNotExist;
(function (TaskDoesNotExist) {
    /**
     * @internal
     */
    TaskDoesNotExist.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaskDoesNotExist || (TaskDoesNotExist = {}));
export var TaskTimedOut;
(function (TaskTimedOut) {
    /**
     * @internal
     */
    TaskTimedOut.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaskTimedOut || (TaskTimedOut = {}));
export var SendTaskHeartbeatInput;
(function (SendTaskHeartbeatInput) {
    /**
     * @internal
     */
    SendTaskHeartbeatInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendTaskHeartbeatInput || (SendTaskHeartbeatInput = {}));
export var SendTaskHeartbeatOutput;
(function (SendTaskHeartbeatOutput) {
    /**
     * @internal
     */
    SendTaskHeartbeatOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendTaskHeartbeatOutput || (SendTaskHeartbeatOutput = {}));
export var InvalidOutput;
(function (InvalidOutput) {
    /**
     * @internal
     */
    InvalidOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidOutput || (InvalidOutput = {}));
export var SendTaskSuccessInput;
(function (SendTaskSuccessInput) {
    /**
     * @internal
     */
    SendTaskSuccessInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.output && { output: SENSITIVE_STRING }))); };
})(SendTaskSuccessInput || (SendTaskSuccessInput = {}));
export var SendTaskSuccessOutput;
(function (SendTaskSuccessOutput) {
    /**
     * @internal
     */
    SendTaskSuccessOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendTaskSuccessOutput || (SendTaskSuccessOutput = {}));
export var ExecutionAlreadyExists;
(function (ExecutionAlreadyExists) {
    /**
     * @internal
     */
    ExecutionAlreadyExists.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecutionAlreadyExists || (ExecutionAlreadyExists = {}));
export var ExecutionLimitExceeded;
(function (ExecutionLimitExceeded) {
    /**
     * @internal
     */
    ExecutionLimitExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecutionLimitExceeded || (ExecutionLimitExceeded = {}));
export var InvalidExecutionInput;
(function (InvalidExecutionInput) {
    /**
     * @internal
     */
    InvalidExecutionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidExecutionInput || (InvalidExecutionInput = {}));
export var StartExecutionInput;
(function (StartExecutionInput) {
    /**
     * @internal
     */
    StartExecutionInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.input && { input: SENSITIVE_STRING }))); };
})(StartExecutionInput || (StartExecutionInput = {}));
export var StartExecutionOutput;
(function (StartExecutionOutput) {
    /**
     * @internal
     */
    StartExecutionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartExecutionOutput || (StartExecutionOutput = {}));
export var StartSyncExecutionInput;
(function (StartSyncExecutionInput) {
    /**
     * @internal
     */
    StartSyncExecutionInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.input && { input: SENSITIVE_STRING }))); };
})(StartSyncExecutionInput || (StartSyncExecutionInput = {}));
export var BillingDetails;
(function (BillingDetails) {
    /**
     * @internal
     */
    BillingDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BillingDetails || (BillingDetails = {}));
export var StartSyncExecutionOutput;
(function (StartSyncExecutionOutput) {
    /**
     * @internal
     */
    StartSyncExecutionOutput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING })), (obj.input && { input: SENSITIVE_STRING })), (obj.output && { output: SENSITIVE_STRING }))); };
})(StartSyncExecutionOutput || (StartSyncExecutionOutput = {}));
export var StopExecutionInput;
(function (StopExecutionInput) {
    /**
     * @internal
     */
    StopExecutionInput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.error && { error: SENSITIVE_STRING })), (obj.cause && { cause: SENSITIVE_STRING }))); };
})(StopExecutionInput || (StopExecutionInput = {}));
export var StopExecutionOutput;
(function (StopExecutionOutput) {
    /**
     * @internal
     */
    StopExecutionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopExecutionOutput || (StopExecutionOutput = {}));
export var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceInput || (TagResourceInput = {}));
export var TagResourceOutput;
(function (TagResourceOutput) {
    /**
     * @internal
     */
    TagResourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceOutput || (TagResourceOutput = {}));
export var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceInput || (UntagResourceInput = {}));
export var UntagResourceOutput;
(function (UntagResourceOutput) {
    /**
     * @internal
     */
    UntagResourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceOutput || (UntagResourceOutput = {}));
export var MissingRequiredParameter;
(function (MissingRequiredParameter) {
    /**
     * @internal
     */
    MissingRequiredParameter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MissingRequiredParameter || (MissingRequiredParameter = {}));
export var UpdateStateMachineInput;
(function (UpdateStateMachineInput) {
    /**
     * @internal
     */
    UpdateStateMachineInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.definition && { definition: SENSITIVE_STRING }))); };
})(UpdateStateMachineInput || (UpdateStateMachineInput = {}));
export var UpdateStateMachineOutput;
(function (UpdateStateMachineOutput) {
    /**
     * @internal
     */
    UpdateStateMachineOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateStateMachineOutput || (UpdateStateMachineOutput = {}));
//# sourceMappingURL=models_0.js.map