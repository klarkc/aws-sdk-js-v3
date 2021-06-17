"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchUpdateDetectorErrorEntry = exports.BatchUpdateDetectorRequest = exports.UpdateDetectorRequest = exports.DetectorStateDefinition = exports.VariableDefinition = exports.TimerDefinition = exports.BatchSnoozeAlarmResponse = exports.BatchSnoozeAlarmRequest = exports.SnoozeAlarmActionRequest = exports.BatchResetAlarmResponse = exports.BatchResetAlarmRequest = exports.ResetAlarmActionRequest = exports.BatchPutMessageResponse = exports.BatchPutMessageErrorEntry = exports.BatchPutMessageRequest = exports.Message = exports.TimestampValue = exports.BatchEnableAlarmResponse = exports.BatchEnableAlarmRequest = exports.EnableAlarmActionRequest = exports.BatchDisableAlarmResponse = exports.BatchDisableAlarmRequest = exports.DisableAlarmActionRequest = exports.ThrottlingException = exports.ServiceUnavailableException = exports.InvalidRequestException = exports.InternalFailureException = exports.BatchAcknowledgeAlarmResponse = exports.BatchAlarmActionErrorEntry = exports.ErrorCode = exports.BatchAcknowledgeAlarmRequest = exports.AlarmSummary = exports.Alarm = exports.AlarmState = exports.SystemEvent = exports.StateChangeConfiguration = exports.TriggerType = exports.EventType = exports.AlarmStateName = exports.RuleEvaluation = exports.SimpleRuleEvaluation = exports.ComparisonOperator = exports.CustomerAction = exports.SnoozeActionConfiguration = exports.ResetActionConfiguration = exports.EnableActionConfiguration = exports.DisableActionConfiguration = exports.CustomerActionName = exports.AcknowledgeAlarmActionRequest = exports.AcknowledgeActionConfiguration = void 0;
exports.ListDetectorsResponse = exports.ListDetectorsRequest = exports.ListAlarmsResponse = exports.ListAlarmsRequest = exports.DetectorSummary = exports.DetectorStateSummary = exports.DescribeDetectorResponse = exports.Detector = exports.DetectorState = exports.Variable = exports.Timer = exports.DescribeDetectorRequest = exports.ResourceNotFoundException = exports.DescribeAlarmResponse = exports.DescribeAlarmRequest = exports.BatchUpdateDetectorResponse = void 0;
var AcknowledgeActionConfiguration;
(function (AcknowledgeActionConfiguration) {
    /**
     * @internal
     */
    AcknowledgeActionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcknowledgeActionConfiguration = exports.AcknowledgeActionConfiguration || (exports.AcknowledgeActionConfiguration = {}));
var AcknowledgeAlarmActionRequest;
(function (AcknowledgeAlarmActionRequest) {
    /**
     * @internal
     */
    AcknowledgeAlarmActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcknowledgeAlarmActionRequest = exports.AcknowledgeAlarmActionRequest || (exports.AcknowledgeAlarmActionRequest = {}));
var CustomerActionName;
(function (CustomerActionName) {
    CustomerActionName["ACKNOWLEDGE"] = "ACKNOWLEDGE";
    CustomerActionName["DISABLE"] = "DISABLE";
    CustomerActionName["ENABLE"] = "ENABLE";
    CustomerActionName["RESET"] = "RESET";
    CustomerActionName["SNOOZE"] = "SNOOZE";
})(CustomerActionName = exports.CustomerActionName || (exports.CustomerActionName = {}));
var DisableActionConfiguration;
(function (DisableActionConfiguration) {
    /**
     * @internal
     */
    DisableActionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableActionConfiguration = exports.DisableActionConfiguration || (exports.DisableActionConfiguration = {}));
var EnableActionConfiguration;
(function (EnableActionConfiguration) {
    /**
     * @internal
     */
    EnableActionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableActionConfiguration = exports.EnableActionConfiguration || (exports.EnableActionConfiguration = {}));
var ResetActionConfiguration;
(function (ResetActionConfiguration) {
    /**
     * @internal
     */
    ResetActionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetActionConfiguration = exports.ResetActionConfiguration || (exports.ResetActionConfiguration = {}));
var SnoozeActionConfiguration;
(function (SnoozeActionConfiguration) {
    /**
     * @internal
     */
    SnoozeActionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnoozeActionConfiguration = exports.SnoozeActionConfiguration || (exports.SnoozeActionConfiguration = {}));
var CustomerAction;
(function (CustomerAction) {
    /**
     * @internal
     */
    CustomerAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomerAction = exports.CustomerAction || (exports.CustomerAction = {}));
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["EQUAL"] = "EQUAL";
    ComparisonOperator["GREATER"] = "GREATER";
    ComparisonOperator["GREATER_OR_EQUAL"] = "GREATER_OR_EQUAL";
    ComparisonOperator["LESS"] = "LESS";
    ComparisonOperator["LESS_OR_EQUAL"] = "LESS_OR_EQUAL";
    ComparisonOperator["NOT_EQUAL"] = "NOT_EQUAL";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var SimpleRuleEvaluation;
(function (SimpleRuleEvaluation) {
    /**
     * @internal
     */
    SimpleRuleEvaluation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimpleRuleEvaluation = exports.SimpleRuleEvaluation || (exports.SimpleRuleEvaluation = {}));
var RuleEvaluation;
(function (RuleEvaluation) {
    /**
     * @internal
     */
    RuleEvaluation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleEvaluation = exports.RuleEvaluation || (exports.RuleEvaluation = {}));
var AlarmStateName;
(function (AlarmStateName) {
    AlarmStateName["ACKNOWLEDGED"] = "ACKNOWLEDGED";
    AlarmStateName["ACTIVE"] = "ACTIVE";
    AlarmStateName["DISABLED"] = "DISABLED";
    AlarmStateName["LATCHED"] = "LATCHED";
    AlarmStateName["NORMAL"] = "NORMAL";
    AlarmStateName["SNOOZE_DISABLED"] = "SNOOZE_DISABLED";
})(AlarmStateName = exports.AlarmStateName || (exports.AlarmStateName = {}));
var EventType;
(function (EventType) {
    EventType["STATE_CHANGE"] = "STATE_CHANGE";
})(EventType = exports.EventType || (exports.EventType = {}));
var TriggerType;
(function (TriggerType) {
    TriggerType["SNOOZE_TIMEOUT"] = "SNOOZE_TIMEOUT";
})(TriggerType = exports.TriggerType || (exports.TriggerType = {}));
var StateChangeConfiguration;
(function (StateChangeConfiguration) {
    /**
     * @internal
     */
    StateChangeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StateChangeConfiguration = exports.StateChangeConfiguration || (exports.StateChangeConfiguration = {}));
var SystemEvent;
(function (SystemEvent) {
    /**
     * @internal
     */
    SystemEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SystemEvent = exports.SystemEvent || (exports.SystemEvent = {}));
var AlarmState;
(function (AlarmState) {
    /**
     * @internal
     */
    AlarmState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlarmState = exports.AlarmState || (exports.AlarmState = {}));
var Alarm;
(function (Alarm) {
    /**
     * @internal
     */
    Alarm.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Alarm = exports.Alarm || (exports.Alarm = {}));
var AlarmSummary;
(function (AlarmSummary) {
    /**
     * @internal
     */
    AlarmSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlarmSummary = exports.AlarmSummary || (exports.AlarmSummary = {}));
var BatchAcknowledgeAlarmRequest;
(function (BatchAcknowledgeAlarmRequest) {
    /**
     * @internal
     */
    BatchAcknowledgeAlarmRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchAcknowledgeAlarmRequest = exports.BatchAcknowledgeAlarmRequest || (exports.BatchAcknowledgeAlarmRequest = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["InternalFailureException"] = "InternalFailureException";
    ErrorCode["InvalidRequestException"] = "InvalidRequestException";
    ErrorCode["ResourceNotFoundException"] = "ResourceNotFoundException";
    ErrorCode["ServiceUnavailableException"] = "ServiceUnavailableException";
    ErrorCode["ThrottlingException"] = "ThrottlingException";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var BatchAlarmActionErrorEntry;
(function (BatchAlarmActionErrorEntry) {
    /**
     * @internal
     */
    BatchAlarmActionErrorEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchAlarmActionErrorEntry = exports.BatchAlarmActionErrorEntry || (exports.BatchAlarmActionErrorEntry = {}));
var BatchAcknowledgeAlarmResponse;
(function (BatchAcknowledgeAlarmResponse) {
    /**
     * @internal
     */
    BatchAcknowledgeAlarmResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchAcknowledgeAlarmResponse = exports.BatchAcknowledgeAlarmResponse || (exports.BatchAcknowledgeAlarmResponse = {}));
var InternalFailureException;
(function (InternalFailureException) {
    /**
     * @internal
     */
    InternalFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var DisableAlarmActionRequest;
(function (DisableAlarmActionRequest) {
    /**
     * @internal
     */
    DisableAlarmActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableAlarmActionRequest = exports.DisableAlarmActionRequest || (exports.DisableAlarmActionRequest = {}));
var BatchDisableAlarmRequest;
(function (BatchDisableAlarmRequest) {
    /**
     * @internal
     */
    BatchDisableAlarmRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDisableAlarmRequest = exports.BatchDisableAlarmRequest || (exports.BatchDisableAlarmRequest = {}));
var BatchDisableAlarmResponse;
(function (BatchDisableAlarmResponse) {
    /**
     * @internal
     */
    BatchDisableAlarmResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDisableAlarmResponse = exports.BatchDisableAlarmResponse || (exports.BatchDisableAlarmResponse = {}));
var EnableAlarmActionRequest;
(function (EnableAlarmActionRequest) {
    /**
     * @internal
     */
    EnableAlarmActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableAlarmActionRequest = exports.EnableAlarmActionRequest || (exports.EnableAlarmActionRequest = {}));
var BatchEnableAlarmRequest;
(function (BatchEnableAlarmRequest) {
    /**
     * @internal
     */
    BatchEnableAlarmRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchEnableAlarmRequest = exports.BatchEnableAlarmRequest || (exports.BatchEnableAlarmRequest = {}));
var BatchEnableAlarmResponse;
(function (BatchEnableAlarmResponse) {
    /**
     * @internal
     */
    BatchEnableAlarmResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchEnableAlarmResponse = exports.BatchEnableAlarmResponse || (exports.BatchEnableAlarmResponse = {}));
var TimestampValue;
(function (TimestampValue) {
    /**
     * @internal
     */
    TimestampValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimestampValue = exports.TimestampValue || (exports.TimestampValue = {}));
var Message;
(function (Message) {
    /**
     * @internal
     */
    Message.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Message = exports.Message || (exports.Message = {}));
var BatchPutMessageRequest;
(function (BatchPutMessageRequest) {
    /**
     * @internal
     */
    BatchPutMessageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutMessageRequest = exports.BatchPutMessageRequest || (exports.BatchPutMessageRequest = {}));
var BatchPutMessageErrorEntry;
(function (BatchPutMessageErrorEntry) {
    /**
     * @internal
     */
    BatchPutMessageErrorEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutMessageErrorEntry = exports.BatchPutMessageErrorEntry || (exports.BatchPutMessageErrorEntry = {}));
var BatchPutMessageResponse;
(function (BatchPutMessageResponse) {
    /**
     * @internal
     */
    BatchPutMessageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutMessageResponse = exports.BatchPutMessageResponse || (exports.BatchPutMessageResponse = {}));
var ResetAlarmActionRequest;
(function (ResetAlarmActionRequest) {
    /**
     * @internal
     */
    ResetAlarmActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetAlarmActionRequest = exports.ResetAlarmActionRequest || (exports.ResetAlarmActionRequest = {}));
var BatchResetAlarmRequest;
(function (BatchResetAlarmRequest) {
    /**
     * @internal
     */
    BatchResetAlarmRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchResetAlarmRequest = exports.BatchResetAlarmRequest || (exports.BatchResetAlarmRequest = {}));
var BatchResetAlarmResponse;
(function (BatchResetAlarmResponse) {
    /**
     * @internal
     */
    BatchResetAlarmResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchResetAlarmResponse = exports.BatchResetAlarmResponse || (exports.BatchResetAlarmResponse = {}));
var SnoozeAlarmActionRequest;
(function (SnoozeAlarmActionRequest) {
    /**
     * @internal
     */
    SnoozeAlarmActionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnoozeAlarmActionRequest = exports.SnoozeAlarmActionRequest || (exports.SnoozeAlarmActionRequest = {}));
var BatchSnoozeAlarmRequest;
(function (BatchSnoozeAlarmRequest) {
    /**
     * @internal
     */
    BatchSnoozeAlarmRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchSnoozeAlarmRequest = exports.BatchSnoozeAlarmRequest || (exports.BatchSnoozeAlarmRequest = {}));
var BatchSnoozeAlarmResponse;
(function (BatchSnoozeAlarmResponse) {
    /**
     * @internal
     */
    BatchSnoozeAlarmResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchSnoozeAlarmResponse = exports.BatchSnoozeAlarmResponse || (exports.BatchSnoozeAlarmResponse = {}));
var TimerDefinition;
(function (TimerDefinition) {
    /**
     * @internal
     */
    TimerDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimerDefinition = exports.TimerDefinition || (exports.TimerDefinition = {}));
var VariableDefinition;
(function (VariableDefinition) {
    /**
     * @internal
     */
    VariableDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VariableDefinition = exports.VariableDefinition || (exports.VariableDefinition = {}));
var DetectorStateDefinition;
(function (DetectorStateDefinition) {
    /**
     * @internal
     */
    DetectorStateDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectorStateDefinition = exports.DetectorStateDefinition || (exports.DetectorStateDefinition = {}));
var UpdateDetectorRequest;
(function (UpdateDetectorRequest) {
    /**
     * @internal
     */
    UpdateDetectorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDetectorRequest = exports.UpdateDetectorRequest || (exports.UpdateDetectorRequest = {}));
var BatchUpdateDetectorRequest;
(function (BatchUpdateDetectorRequest) {
    /**
     * @internal
     */
    BatchUpdateDetectorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpdateDetectorRequest = exports.BatchUpdateDetectorRequest || (exports.BatchUpdateDetectorRequest = {}));
var BatchUpdateDetectorErrorEntry;
(function (BatchUpdateDetectorErrorEntry) {
    /**
     * @internal
     */
    BatchUpdateDetectorErrorEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpdateDetectorErrorEntry = exports.BatchUpdateDetectorErrorEntry || (exports.BatchUpdateDetectorErrorEntry = {}));
var BatchUpdateDetectorResponse;
(function (BatchUpdateDetectorResponse) {
    /**
     * @internal
     */
    BatchUpdateDetectorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpdateDetectorResponse = exports.BatchUpdateDetectorResponse || (exports.BatchUpdateDetectorResponse = {}));
var DescribeAlarmRequest;
(function (DescribeAlarmRequest) {
    /**
     * @internal
     */
    DescribeAlarmRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAlarmRequest = exports.DescribeAlarmRequest || (exports.DescribeAlarmRequest = {}));
var DescribeAlarmResponse;
(function (DescribeAlarmResponse) {
    /**
     * @internal
     */
    DescribeAlarmResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAlarmResponse = exports.DescribeAlarmResponse || (exports.DescribeAlarmResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var DescribeDetectorRequest;
(function (DescribeDetectorRequest) {
    /**
     * @internal
     */
    DescribeDetectorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDetectorRequest = exports.DescribeDetectorRequest || (exports.DescribeDetectorRequest = {}));
var Timer;
(function (Timer) {
    /**
     * @internal
     */
    Timer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Timer = exports.Timer || (exports.Timer = {}));
var Variable;
(function (Variable) {
    /**
     * @internal
     */
    Variable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Variable = exports.Variable || (exports.Variable = {}));
var DetectorState;
(function (DetectorState) {
    /**
     * @internal
     */
    DetectorState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectorState = exports.DetectorState || (exports.DetectorState = {}));
var Detector;
(function (Detector) {
    /**
     * @internal
     */
    Detector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Detector = exports.Detector || (exports.Detector = {}));
var DescribeDetectorResponse;
(function (DescribeDetectorResponse) {
    /**
     * @internal
     */
    DescribeDetectorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDetectorResponse = exports.DescribeDetectorResponse || (exports.DescribeDetectorResponse = {}));
var DetectorStateSummary;
(function (DetectorStateSummary) {
    /**
     * @internal
     */
    DetectorStateSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectorStateSummary = exports.DetectorStateSummary || (exports.DetectorStateSummary = {}));
var DetectorSummary;
(function (DetectorSummary) {
    /**
     * @internal
     */
    DetectorSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectorSummary = exports.DetectorSummary || (exports.DetectorSummary = {}));
var ListAlarmsRequest;
(function (ListAlarmsRequest) {
    /**
     * @internal
     */
    ListAlarmsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAlarmsRequest = exports.ListAlarmsRequest || (exports.ListAlarmsRequest = {}));
var ListAlarmsResponse;
(function (ListAlarmsResponse) {
    /**
     * @internal
     */
    ListAlarmsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAlarmsResponse = exports.ListAlarmsResponse || (exports.ListAlarmsResponse = {}));
var ListDetectorsRequest;
(function (ListDetectorsRequest) {
    /**
     * @internal
     */
    ListDetectorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDetectorsRequest = exports.ListDetectorsRequest || (exports.ListDetectorsRequest = {}));
var ListDetectorsResponse;
(function (ListDetectorsResponse) {
    /**
     * @internal
     */
    ListDetectorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDetectorsResponse = exports.ListDetectorsResponse || (exports.ListDetectorsResponse = {}));
//# sourceMappingURL=models_0.js.map