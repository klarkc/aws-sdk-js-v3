import { __assign } from "tslib";
import { PatchSource, } from "./models_0";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var InvalidFilterOption;
(function (InvalidFilterOption) {
    /**
     * @internal
     */
    InvalidFilterOption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidFilterOption || (InvalidFilterOption = {}));
export var DescribePatchBaselinesRequest;
(function (DescribePatchBaselinesRequest) {
    /**
     * @internal
     */
    DescribePatchBaselinesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePatchBaselinesRequest || (DescribePatchBaselinesRequest = {}));
export var PatchBaselineIdentity;
(function (PatchBaselineIdentity) {
    /**
     * @internal
     */
    PatchBaselineIdentity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PatchBaselineIdentity || (PatchBaselineIdentity = {}));
export var DescribePatchBaselinesResult;
(function (DescribePatchBaselinesResult) {
    /**
     * @internal
     */
    DescribePatchBaselinesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePatchBaselinesResult || (DescribePatchBaselinesResult = {}));
export var DescribePatchGroupsRequest;
(function (DescribePatchGroupsRequest) {
    /**
     * @internal
     */
    DescribePatchGroupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePatchGroupsRequest || (DescribePatchGroupsRequest = {}));
export var PatchGroupPatchBaselineMapping;
(function (PatchGroupPatchBaselineMapping) {
    /**
     * @internal
     */
    PatchGroupPatchBaselineMapping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PatchGroupPatchBaselineMapping || (PatchGroupPatchBaselineMapping = {}));
export var DescribePatchGroupsResult;
(function (DescribePatchGroupsResult) {
    /**
     * @internal
     */
    DescribePatchGroupsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePatchGroupsResult || (DescribePatchGroupsResult = {}));
export var DescribePatchGroupStateRequest;
(function (DescribePatchGroupStateRequest) {
    /**
     * @internal
     */
    DescribePatchGroupStateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePatchGroupStateRequest || (DescribePatchGroupStateRequest = {}));
export var DescribePatchGroupStateResult;
(function (DescribePatchGroupStateResult) {
    /**
     * @internal
     */
    DescribePatchGroupStateResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePatchGroupStateResult || (DescribePatchGroupStateResult = {}));
export var PatchSet;
(function (PatchSet) {
    PatchSet["Application"] = "APPLICATION";
    PatchSet["Os"] = "OS";
})(PatchSet || (PatchSet = {}));
export var PatchProperty;
(function (PatchProperty) {
    PatchProperty["PatchClassification"] = "CLASSIFICATION";
    PatchProperty["PatchMsrcSeverity"] = "MSRC_SEVERITY";
    PatchProperty["PatchPriority"] = "PRIORITY";
    PatchProperty["PatchProductFamily"] = "PRODUCT_FAMILY";
    PatchProperty["PatchSeverity"] = "SEVERITY";
    PatchProperty["Product"] = "PRODUCT";
})(PatchProperty || (PatchProperty = {}));
export var DescribePatchPropertiesRequest;
(function (DescribePatchPropertiesRequest) {
    /**
     * @internal
     */
    DescribePatchPropertiesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePatchPropertiesRequest || (DescribePatchPropertiesRequest = {}));
export var DescribePatchPropertiesResult;
(function (DescribePatchPropertiesResult) {
    /**
     * @internal
     */
    DescribePatchPropertiesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePatchPropertiesResult || (DescribePatchPropertiesResult = {}));
export var SessionFilterKey;
(function (SessionFilterKey) {
    SessionFilterKey["INVOKED_AFTER"] = "InvokedAfter";
    SessionFilterKey["INVOKED_BEFORE"] = "InvokedBefore";
    SessionFilterKey["OWNER"] = "Owner";
    SessionFilterKey["SESSION_ID"] = "SessionId";
    SessionFilterKey["STATUS"] = "Status";
    SessionFilterKey["TARGET_ID"] = "Target";
})(SessionFilterKey || (SessionFilterKey = {}));
export var SessionFilter;
(function (SessionFilter) {
    /**
     * @internal
     */
    SessionFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SessionFilter || (SessionFilter = {}));
export var SessionState;
(function (SessionState) {
    SessionState["ACTIVE"] = "Active";
    SessionState["HISTORY"] = "History";
})(SessionState || (SessionState = {}));
export var DescribeSessionsRequest;
(function (DescribeSessionsRequest) {
    /**
     * @internal
     */
    DescribeSessionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSessionsRequest || (DescribeSessionsRequest = {}));
export var SessionManagerOutputUrl;
(function (SessionManagerOutputUrl) {
    /**
     * @internal
     */
    SessionManagerOutputUrl.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SessionManagerOutputUrl || (SessionManagerOutputUrl = {}));
export var SessionStatus;
(function (SessionStatus) {
    SessionStatus["CONNECTED"] = "Connected";
    SessionStatus["CONNECTING"] = "Connecting";
    SessionStatus["DISCONNECTED"] = "Disconnected";
    SessionStatus["FAILED"] = "Failed";
    SessionStatus["TERMINATED"] = "Terminated";
    SessionStatus["TERMINATING"] = "Terminating";
})(SessionStatus || (SessionStatus = {}));
export var Session;
(function (Session) {
    /**
     * @internal
     */
    Session.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Session || (Session = {}));
export var DescribeSessionsResponse;
(function (DescribeSessionsResponse) {
    /**
     * @internal
     */
    DescribeSessionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSessionsResponse || (DescribeSessionsResponse = {}));
export var DisassociateOpsItemRelatedItemRequest;
(function (DisassociateOpsItemRelatedItemRequest) {
    /**
     * @internal
     */
    DisassociateOpsItemRelatedItemRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateOpsItemRelatedItemRequest || (DisassociateOpsItemRelatedItemRequest = {}));
export var DisassociateOpsItemRelatedItemResponse;
(function (DisassociateOpsItemRelatedItemResponse) {
    /**
     * @internal
     */
    DisassociateOpsItemRelatedItemResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateOpsItemRelatedItemResponse || (DisassociateOpsItemRelatedItemResponse = {}));
export var OpsItemRelatedItemAssociationNotFoundException;
(function (OpsItemRelatedItemAssociationNotFoundException) {
    /**
     * @internal
     */
    OpsItemRelatedItemAssociationNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItemRelatedItemAssociationNotFoundException || (OpsItemRelatedItemAssociationNotFoundException = {}));
export var GetAutomationExecutionRequest;
(function (GetAutomationExecutionRequest) {
    /**
     * @internal
     */
    GetAutomationExecutionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAutomationExecutionRequest || (GetAutomationExecutionRequest = {}));
export var ProgressCounters;
(function (ProgressCounters) {
    /**
     * @internal
     */
    ProgressCounters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProgressCounters || (ProgressCounters = {}));
export var AutomationExecution;
(function (AutomationExecution) {
    /**
     * @internal
     */
    AutomationExecution.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomationExecution || (AutomationExecution = {}));
export var GetAutomationExecutionResult;
(function (GetAutomationExecutionResult) {
    /**
     * @internal
     */
    GetAutomationExecutionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAutomationExecutionResult || (GetAutomationExecutionResult = {}));
export var GetCalendarStateRequest;
(function (GetCalendarStateRequest) {
    /**
     * @internal
     */
    GetCalendarStateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCalendarStateRequest || (GetCalendarStateRequest = {}));
export var CalendarState;
(function (CalendarState) {
    CalendarState["CLOSED"] = "CLOSED";
    CalendarState["OPEN"] = "OPEN";
})(CalendarState || (CalendarState = {}));
export var GetCalendarStateResponse;
(function (GetCalendarStateResponse) {
    /**
     * @internal
     */
    GetCalendarStateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCalendarStateResponse || (GetCalendarStateResponse = {}));
export var InvalidDocumentType;
(function (InvalidDocumentType) {
    /**
     * @internal
     */
    InvalidDocumentType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidDocumentType || (InvalidDocumentType = {}));
export var UnsupportedCalendarException;
(function (UnsupportedCalendarException) {
    /**
     * @internal
     */
    UnsupportedCalendarException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedCalendarException || (UnsupportedCalendarException = {}));
export var GetCommandInvocationRequest;
(function (GetCommandInvocationRequest) {
    /**
     * @internal
     */
    GetCommandInvocationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCommandInvocationRequest || (GetCommandInvocationRequest = {}));
export var CloudWatchOutputConfig;
(function (CloudWatchOutputConfig) {
    /**
     * @internal
     */
    CloudWatchOutputConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudWatchOutputConfig || (CloudWatchOutputConfig = {}));
export var CommandInvocationStatus;
(function (CommandInvocationStatus) {
    CommandInvocationStatus["CANCELLED"] = "Cancelled";
    CommandInvocationStatus["CANCELLING"] = "Cancelling";
    CommandInvocationStatus["DELAYED"] = "Delayed";
    CommandInvocationStatus["FAILED"] = "Failed";
    CommandInvocationStatus["IN_PROGRESS"] = "InProgress";
    CommandInvocationStatus["PENDING"] = "Pending";
    CommandInvocationStatus["SUCCESS"] = "Success";
    CommandInvocationStatus["TIMED_OUT"] = "TimedOut";
})(CommandInvocationStatus || (CommandInvocationStatus = {}));
export var GetCommandInvocationResult;
(function (GetCommandInvocationResult) {
    /**
     * @internal
     */
    GetCommandInvocationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCommandInvocationResult || (GetCommandInvocationResult = {}));
export var InvalidPluginName;
(function (InvalidPluginName) {
    /**
     * @internal
     */
    InvalidPluginName.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidPluginName || (InvalidPluginName = {}));
export var InvocationDoesNotExist;
(function (InvocationDoesNotExist) {
    /**
     * @internal
     */
    InvocationDoesNotExist.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvocationDoesNotExist || (InvocationDoesNotExist = {}));
export var GetConnectionStatusRequest;
(function (GetConnectionStatusRequest) {
    /**
     * @internal
     */
    GetConnectionStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetConnectionStatusRequest || (GetConnectionStatusRequest = {}));
export var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["CONNECTED"] = "Connected";
    ConnectionStatus["NOT_CONNECTED"] = "NotConnected";
})(ConnectionStatus || (ConnectionStatus = {}));
export var GetConnectionStatusResponse;
(function (GetConnectionStatusResponse) {
    /**
     * @internal
     */
    GetConnectionStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetConnectionStatusResponse || (GetConnectionStatusResponse = {}));
export var GetDefaultPatchBaselineRequest;
(function (GetDefaultPatchBaselineRequest) {
    /**
     * @internal
     */
    GetDefaultPatchBaselineRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDefaultPatchBaselineRequest || (GetDefaultPatchBaselineRequest = {}));
export var GetDefaultPatchBaselineResult;
(function (GetDefaultPatchBaselineResult) {
    /**
     * @internal
     */
    GetDefaultPatchBaselineResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDefaultPatchBaselineResult || (GetDefaultPatchBaselineResult = {}));
export var BaselineOverride;
(function (BaselineOverride) {
    /**
     * @internal
     */
    BaselineOverride.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Sources && { Sources: obj.Sources.map(function (item) { return PatchSource.filterSensitiveLog(item); }) }))); };
})(BaselineOverride || (BaselineOverride = {}));
export var GetDeployablePatchSnapshotForInstanceRequest;
(function (GetDeployablePatchSnapshotForInstanceRequest) {
    /**
     * @internal
     */
    GetDeployablePatchSnapshotForInstanceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDeployablePatchSnapshotForInstanceRequest || (GetDeployablePatchSnapshotForInstanceRequest = {}));
export var GetDeployablePatchSnapshotForInstanceResult;
(function (GetDeployablePatchSnapshotForInstanceResult) {
    /**
     * @internal
     */
    GetDeployablePatchSnapshotForInstanceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDeployablePatchSnapshotForInstanceResult || (GetDeployablePatchSnapshotForInstanceResult = {}));
export var UnsupportedFeatureRequiredException;
(function (UnsupportedFeatureRequiredException) {
    /**
     * @internal
     */
    UnsupportedFeatureRequiredException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedFeatureRequiredException || (UnsupportedFeatureRequiredException = {}));
export var GetDocumentRequest;
(function (GetDocumentRequest) {
    /**
     * @internal
     */
    GetDocumentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDocumentRequest || (GetDocumentRequest = {}));
export var AttachmentHashType;
(function (AttachmentHashType) {
    AttachmentHashType["SHA256"] = "Sha256";
})(AttachmentHashType || (AttachmentHashType = {}));
export var AttachmentContent;
(function (AttachmentContent) {
    /**
     * @internal
     */
    AttachmentContent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachmentContent || (AttachmentContent = {}));
export var GetDocumentResult;
(function (GetDocumentResult) {
    /**
     * @internal
     */
    GetDocumentResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDocumentResult || (GetDocumentResult = {}));
export var InventoryQueryOperatorType;
(function (InventoryQueryOperatorType) {
    InventoryQueryOperatorType["BEGIN_WITH"] = "BeginWith";
    InventoryQueryOperatorType["EQUAL"] = "Equal";
    InventoryQueryOperatorType["EXISTS"] = "Exists";
    InventoryQueryOperatorType["GREATER_THAN"] = "GreaterThan";
    InventoryQueryOperatorType["LESS_THAN"] = "LessThan";
    InventoryQueryOperatorType["NOT_EQUAL"] = "NotEqual";
})(InventoryQueryOperatorType || (InventoryQueryOperatorType = {}));
export var InventoryFilter;
(function (InventoryFilter) {
    /**
     * @internal
     */
    InventoryFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InventoryFilter || (InventoryFilter = {}));
export var InventoryGroup;
(function (InventoryGroup) {
    /**
     * @internal
     */
    InventoryGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InventoryGroup || (InventoryGroup = {}));
export var ResultAttribute;
(function (ResultAttribute) {
    /**
     * @internal
     */
    ResultAttribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResultAttribute || (ResultAttribute = {}));
export var InventoryResultItem;
(function (InventoryResultItem) {
    /**
     * @internal
     */
    InventoryResultItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InventoryResultItem || (InventoryResultItem = {}));
export var InventoryResultEntity;
(function (InventoryResultEntity) {
    /**
     * @internal
     */
    InventoryResultEntity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InventoryResultEntity || (InventoryResultEntity = {}));
export var GetInventoryResult;
(function (GetInventoryResult) {
    /**
     * @internal
     */
    GetInventoryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInventoryResult || (GetInventoryResult = {}));
export var InvalidAggregatorException;
(function (InvalidAggregatorException) {
    /**
     * @internal
     */
    InvalidAggregatorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidAggregatorException || (InvalidAggregatorException = {}));
export var InvalidInventoryGroupException;
(function (InvalidInventoryGroupException) {
    /**
     * @internal
     */
    InvalidInventoryGroupException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInventoryGroupException || (InvalidInventoryGroupException = {}));
export var InvalidResultAttributeException;
(function (InvalidResultAttributeException) {
    /**
     * @internal
     */
    InvalidResultAttributeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidResultAttributeException || (InvalidResultAttributeException = {}));
export var GetInventorySchemaRequest;
(function (GetInventorySchemaRequest) {
    /**
     * @internal
     */
    GetInventorySchemaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInventorySchemaRequest || (GetInventorySchemaRequest = {}));
export var InventoryAttributeDataType;
(function (InventoryAttributeDataType) {
    InventoryAttributeDataType["NUMBER"] = "number";
    InventoryAttributeDataType["STRING"] = "string";
})(InventoryAttributeDataType || (InventoryAttributeDataType = {}));
export var InventoryItemAttribute;
(function (InventoryItemAttribute) {
    /**
     * @internal
     */
    InventoryItemAttribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InventoryItemAttribute || (InventoryItemAttribute = {}));
export var InventoryItemSchema;
(function (InventoryItemSchema) {
    /**
     * @internal
     */
    InventoryItemSchema.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InventoryItemSchema || (InventoryItemSchema = {}));
export var GetInventorySchemaResult;
(function (GetInventorySchemaResult) {
    /**
     * @internal
     */
    GetInventorySchemaResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInventorySchemaResult || (GetInventorySchemaResult = {}));
export var GetMaintenanceWindowRequest;
(function (GetMaintenanceWindowRequest) {
    /**
     * @internal
     */
    GetMaintenanceWindowRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMaintenanceWindowRequest || (GetMaintenanceWindowRequest = {}));
export var GetMaintenanceWindowResult;
(function (GetMaintenanceWindowResult) {
    /**
     * @internal
     */
    GetMaintenanceWindowResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(GetMaintenanceWindowResult || (GetMaintenanceWindowResult = {}));
export var GetMaintenanceWindowExecutionRequest;
(function (GetMaintenanceWindowExecutionRequest) {
    /**
     * @internal
     */
    GetMaintenanceWindowExecutionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMaintenanceWindowExecutionRequest || (GetMaintenanceWindowExecutionRequest = {}));
export var GetMaintenanceWindowExecutionResult;
(function (GetMaintenanceWindowExecutionResult) {
    /**
     * @internal
     */
    GetMaintenanceWindowExecutionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMaintenanceWindowExecutionResult || (GetMaintenanceWindowExecutionResult = {}));
export var GetMaintenanceWindowExecutionTaskRequest;
(function (GetMaintenanceWindowExecutionTaskRequest) {
    /**
     * @internal
     */
    GetMaintenanceWindowExecutionTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMaintenanceWindowExecutionTaskRequest || (GetMaintenanceWindowExecutionTaskRequest = {}));
export var GetMaintenanceWindowExecutionTaskResult;
(function (GetMaintenanceWindowExecutionTaskResult) {
    /**
     * @internal
     */
    GetMaintenanceWindowExecutionTaskResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.TaskParameters && { TaskParameters: SENSITIVE_STRING }))); };
})(GetMaintenanceWindowExecutionTaskResult || (GetMaintenanceWindowExecutionTaskResult = {}));
export var GetMaintenanceWindowExecutionTaskInvocationRequest;
(function (GetMaintenanceWindowExecutionTaskInvocationRequest) {
    /**
     * @internal
     */
    GetMaintenanceWindowExecutionTaskInvocationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMaintenanceWindowExecutionTaskInvocationRequest || (GetMaintenanceWindowExecutionTaskInvocationRequest = {}));
export var GetMaintenanceWindowExecutionTaskInvocationResult;
(function (GetMaintenanceWindowExecutionTaskInvocationResult) {
    /**
     * @internal
     */
    GetMaintenanceWindowExecutionTaskInvocationResult.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Parameters && { Parameters: SENSITIVE_STRING })), (obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }))); };
})(GetMaintenanceWindowExecutionTaskInvocationResult || (GetMaintenanceWindowExecutionTaskInvocationResult = {}));
export var GetMaintenanceWindowTaskRequest;
(function (GetMaintenanceWindowTaskRequest) {
    /**
     * @internal
     */
    GetMaintenanceWindowTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMaintenanceWindowTaskRequest || (GetMaintenanceWindowTaskRequest = {}));
export var MaintenanceWindowAutomationParameters;
(function (MaintenanceWindowAutomationParameters) {
    /**
     * @internal
     */
    MaintenanceWindowAutomationParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MaintenanceWindowAutomationParameters || (MaintenanceWindowAutomationParameters = {}));
export var MaintenanceWindowLambdaParameters;
(function (MaintenanceWindowLambdaParameters) {
    /**
     * @internal
     */
    MaintenanceWindowLambdaParameters.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Payload && { Payload: SENSITIVE_STRING }))); };
})(MaintenanceWindowLambdaParameters || (MaintenanceWindowLambdaParameters = {}));
export var NotificationEvent;
(function (NotificationEvent) {
    NotificationEvent["ALL"] = "All";
    NotificationEvent["CANCELLED"] = "Cancelled";
    NotificationEvent["FAILED"] = "Failed";
    NotificationEvent["IN_PROGRESS"] = "InProgress";
    NotificationEvent["SUCCESS"] = "Success";
    NotificationEvent["TIMED_OUT"] = "TimedOut";
})(NotificationEvent || (NotificationEvent = {}));
export var NotificationType;
(function (NotificationType) {
    NotificationType["Command"] = "Command";
    NotificationType["Invocation"] = "Invocation";
})(NotificationType || (NotificationType = {}));
export var NotificationConfig;
(function (NotificationConfig) {
    /**
     * @internal
     */
    NotificationConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotificationConfig || (NotificationConfig = {}));
export var MaintenanceWindowRunCommandParameters;
(function (MaintenanceWindowRunCommandParameters) {
    /**
     * @internal
     */
    MaintenanceWindowRunCommandParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MaintenanceWindowRunCommandParameters || (MaintenanceWindowRunCommandParameters = {}));
export var MaintenanceWindowStepFunctionsParameters;
(function (MaintenanceWindowStepFunctionsParameters) {
    /**
     * @internal
     */
    MaintenanceWindowStepFunctionsParameters.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Input && { Input: SENSITIVE_STRING }))); };
})(MaintenanceWindowStepFunctionsParameters || (MaintenanceWindowStepFunctionsParameters = {}));
export var MaintenanceWindowTaskInvocationParameters;
(function (MaintenanceWindowTaskInvocationParameters) {
    /**
     * @internal
     */
    MaintenanceWindowTaskInvocationParameters.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.StepFunctions && {
        StepFunctions: MaintenanceWindowStepFunctionsParameters.filterSensitiveLog(obj.StepFunctions),
    })), (obj.Lambda && { Lambda: MaintenanceWindowLambdaParameters.filterSensitiveLog(obj.Lambda) }))); };
})(MaintenanceWindowTaskInvocationParameters || (MaintenanceWindowTaskInvocationParameters = {}));
export var GetMaintenanceWindowTaskResult;
(function (GetMaintenanceWindowTaskResult) {
    /**
     * @internal
     */
    GetMaintenanceWindowTaskResult.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.TaskParameters && { TaskParameters: SENSITIVE_STRING })), (obj.TaskInvocationParameters && {
        TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(obj.TaskInvocationParameters),
    })), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(GetMaintenanceWindowTaskResult || (GetMaintenanceWindowTaskResult = {}));
export var GetOpsItemRequest;
(function (GetOpsItemRequest) {
    /**
     * @internal
     */
    GetOpsItemRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOpsItemRequest || (GetOpsItemRequest = {}));
export var OpsItem;
(function (OpsItem) {
    /**
     * @internal
     */
    OpsItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItem || (OpsItem = {}));
export var GetOpsItemResponse;
(function (GetOpsItemResponse) {
    /**
     * @internal
     */
    GetOpsItemResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOpsItemResponse || (GetOpsItemResponse = {}));
export var GetOpsMetadataRequest;
(function (GetOpsMetadataRequest) {
    /**
     * @internal
     */
    GetOpsMetadataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOpsMetadataRequest || (GetOpsMetadataRequest = {}));
export var GetOpsMetadataResult;
(function (GetOpsMetadataResult) {
    /**
     * @internal
     */
    GetOpsMetadataResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOpsMetadataResult || (GetOpsMetadataResult = {}));
export var OpsFilterOperatorType;
(function (OpsFilterOperatorType) {
    OpsFilterOperatorType["BEGIN_WITH"] = "BeginWith";
    OpsFilterOperatorType["EQUAL"] = "Equal";
    OpsFilterOperatorType["EXISTS"] = "Exists";
    OpsFilterOperatorType["GREATER_THAN"] = "GreaterThan";
    OpsFilterOperatorType["LESS_THAN"] = "LessThan";
    OpsFilterOperatorType["NOT_EQUAL"] = "NotEqual";
})(OpsFilterOperatorType || (OpsFilterOperatorType = {}));
export var OpsFilter;
(function (OpsFilter) {
    /**
     * @internal
     */
    OpsFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsFilter || (OpsFilter = {}));
export var OpsResultAttribute;
(function (OpsResultAttribute) {
    /**
     * @internal
     */
    OpsResultAttribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsResultAttribute || (OpsResultAttribute = {}));
export var OpsEntityItem;
(function (OpsEntityItem) {
    /**
     * @internal
     */
    OpsEntityItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsEntityItem || (OpsEntityItem = {}));
export var OpsEntity;
(function (OpsEntity) {
    /**
     * @internal
     */
    OpsEntity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsEntity || (OpsEntity = {}));
export var GetOpsSummaryResult;
(function (GetOpsSummaryResult) {
    /**
     * @internal
     */
    GetOpsSummaryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOpsSummaryResult || (GetOpsSummaryResult = {}));
export var GetParameterRequest;
(function (GetParameterRequest) {
    /**
     * @internal
     */
    GetParameterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetParameterRequest || (GetParameterRequest = {}));
export var Parameter;
(function (Parameter) {
    /**
     * @internal
     */
    Parameter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Parameter || (Parameter = {}));
export var GetParameterResult;
(function (GetParameterResult) {
    /**
     * @internal
     */
    GetParameterResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetParameterResult || (GetParameterResult = {}));
export var InvalidKeyId;
(function (InvalidKeyId) {
    /**
     * @internal
     */
    InvalidKeyId.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidKeyId || (InvalidKeyId = {}));
export var ParameterVersionNotFound;
(function (ParameterVersionNotFound) {
    /**
     * @internal
     */
    ParameterVersionNotFound.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParameterVersionNotFound || (ParameterVersionNotFound = {}));
export var GetParameterHistoryRequest;
(function (GetParameterHistoryRequest) {
    /**
     * @internal
     */
    GetParameterHistoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetParameterHistoryRequest || (GetParameterHistoryRequest = {}));
export var ParameterHistory;
(function (ParameterHistory) {
    /**
     * @internal
     */
    ParameterHistory.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParameterHistory || (ParameterHistory = {}));
export var GetParameterHistoryResult;
(function (GetParameterHistoryResult) {
    /**
     * @internal
     */
    GetParameterHistoryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetParameterHistoryResult || (GetParameterHistoryResult = {}));
export var GetParametersRequest;
(function (GetParametersRequest) {
    /**
     * @internal
     */
    GetParametersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetParametersRequest || (GetParametersRequest = {}));
export var GetParametersResult;
(function (GetParametersResult) {
    /**
     * @internal
     */
    GetParametersResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetParametersResult || (GetParametersResult = {}));
export var GetParametersByPathRequest;
(function (GetParametersByPathRequest) {
    /**
     * @internal
     */
    GetParametersByPathRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetParametersByPathRequest || (GetParametersByPathRequest = {}));
export var GetParametersByPathResult;
(function (GetParametersByPathResult) {
    /**
     * @internal
     */
    GetParametersByPathResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetParametersByPathResult || (GetParametersByPathResult = {}));
export var GetPatchBaselineRequest;
(function (GetPatchBaselineRequest) {
    /**
     * @internal
     */
    GetPatchBaselineRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPatchBaselineRequest || (GetPatchBaselineRequest = {}));
export var GetPatchBaselineResult;
(function (GetPatchBaselineResult) {
    /**
     * @internal
     */
    GetPatchBaselineResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Sources && { Sources: obj.Sources.map(function (item) { return PatchSource.filterSensitiveLog(item); }) }))); };
})(GetPatchBaselineResult || (GetPatchBaselineResult = {}));
export var GetPatchBaselineForPatchGroupRequest;
(function (GetPatchBaselineForPatchGroupRequest) {
    /**
     * @internal
     */
    GetPatchBaselineForPatchGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPatchBaselineForPatchGroupRequest || (GetPatchBaselineForPatchGroupRequest = {}));
export var GetPatchBaselineForPatchGroupResult;
(function (GetPatchBaselineForPatchGroupResult) {
    /**
     * @internal
     */
    GetPatchBaselineForPatchGroupResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPatchBaselineForPatchGroupResult || (GetPatchBaselineForPatchGroupResult = {}));
export var GetServiceSettingRequest;
(function (GetServiceSettingRequest) {
    /**
     * @internal
     */
    GetServiceSettingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceSettingRequest || (GetServiceSettingRequest = {}));
export var ServiceSetting;
(function (ServiceSetting) {
    /**
     * @internal
     */
    ServiceSetting.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceSetting || (ServiceSetting = {}));
export var GetServiceSettingResult;
(function (GetServiceSettingResult) {
    /**
     * @internal
     */
    GetServiceSettingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceSettingResult || (GetServiceSettingResult = {}));
export var ServiceSettingNotFound;
(function (ServiceSettingNotFound) {
    /**
     * @internal
     */
    ServiceSettingNotFound.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceSettingNotFound || (ServiceSettingNotFound = {}));
export var LabelParameterVersionRequest;
(function (LabelParameterVersionRequest) {
    /**
     * @internal
     */
    LabelParameterVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelParameterVersionRequest || (LabelParameterVersionRequest = {}));
export var LabelParameterVersionResult;
(function (LabelParameterVersionResult) {
    /**
     * @internal
     */
    LabelParameterVersionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelParameterVersionResult || (LabelParameterVersionResult = {}));
export var ParameterVersionLabelLimitExceeded;
(function (ParameterVersionLabelLimitExceeded) {
    /**
     * @internal
     */
    ParameterVersionLabelLimitExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParameterVersionLabelLimitExceeded || (ParameterVersionLabelLimitExceeded = {}));
export var AssociationFilterKey;
(function (AssociationFilterKey) {
    AssociationFilterKey["AssociationId"] = "AssociationId";
    AssociationFilterKey["AssociationName"] = "AssociationName";
    AssociationFilterKey["InstanceId"] = "InstanceId";
    AssociationFilterKey["LastExecutedAfter"] = "LastExecutedAfter";
    AssociationFilterKey["LastExecutedBefore"] = "LastExecutedBefore";
    AssociationFilterKey["Name"] = "Name";
    AssociationFilterKey["ResourceGroupName"] = "ResourceGroupName";
    AssociationFilterKey["Status"] = "AssociationStatusName";
})(AssociationFilterKey || (AssociationFilterKey = {}));
export var AssociationFilter;
(function (AssociationFilter) {
    /**
     * @internal
     */
    AssociationFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociationFilter || (AssociationFilter = {}));
export var ListAssociationsRequest;
(function (ListAssociationsRequest) {
    /**
     * @internal
     */
    ListAssociationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAssociationsRequest || (ListAssociationsRequest = {}));
export var Association;
(function (Association) {
    /**
     * @internal
     */
    Association.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Association || (Association = {}));
export var ListAssociationsResult;
(function (ListAssociationsResult) {
    /**
     * @internal
     */
    ListAssociationsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAssociationsResult || (ListAssociationsResult = {}));
export var ListAssociationVersionsRequest;
(function (ListAssociationVersionsRequest) {
    /**
     * @internal
     */
    ListAssociationVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAssociationVersionsRequest || (ListAssociationVersionsRequest = {}));
export var AssociationVersionInfo;
(function (AssociationVersionInfo) {
    /**
     * @internal
     */
    AssociationVersionInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociationVersionInfo || (AssociationVersionInfo = {}));
export var ListAssociationVersionsResult;
(function (ListAssociationVersionsResult) {
    /**
     * @internal
     */
    ListAssociationVersionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAssociationVersionsResult || (ListAssociationVersionsResult = {}));
export var CommandFilterKey;
(function (CommandFilterKey) {
    CommandFilterKey["DOCUMENT_NAME"] = "DocumentName";
    CommandFilterKey["EXECUTION_STAGE"] = "ExecutionStage";
    CommandFilterKey["INVOKED_AFTER"] = "InvokedAfter";
    CommandFilterKey["INVOKED_BEFORE"] = "InvokedBefore";
    CommandFilterKey["STATUS"] = "Status";
})(CommandFilterKey || (CommandFilterKey = {}));
export var CommandFilter;
(function (CommandFilter) {
    /**
     * @internal
     */
    CommandFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CommandFilter || (CommandFilter = {}));
export var ListCommandInvocationsRequest;
(function (ListCommandInvocationsRequest) {
    /**
     * @internal
     */
    ListCommandInvocationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCommandInvocationsRequest || (ListCommandInvocationsRequest = {}));
export var CommandPluginStatus;
(function (CommandPluginStatus) {
    CommandPluginStatus["CANCELLED"] = "Cancelled";
    CommandPluginStatus["FAILED"] = "Failed";
    CommandPluginStatus["IN_PROGRESS"] = "InProgress";
    CommandPluginStatus["PENDING"] = "Pending";
    CommandPluginStatus["SUCCESS"] = "Success";
    CommandPluginStatus["TIMED_OUT"] = "TimedOut";
})(CommandPluginStatus || (CommandPluginStatus = {}));
export var CommandPlugin;
(function (CommandPlugin) {
    /**
     * @internal
     */
    CommandPlugin.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CommandPlugin || (CommandPlugin = {}));
export var CommandInvocation;
(function (CommandInvocation) {
    /**
     * @internal
     */
    CommandInvocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CommandInvocation || (CommandInvocation = {}));
export var ListCommandInvocationsResult;
(function (ListCommandInvocationsResult) {
    /**
     * @internal
     */
    ListCommandInvocationsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCommandInvocationsResult || (ListCommandInvocationsResult = {}));
export var ListCommandsRequest;
(function (ListCommandsRequest) {
    /**
     * @internal
     */
    ListCommandsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCommandsRequest || (ListCommandsRequest = {}));
export var CommandStatus;
(function (CommandStatus) {
    CommandStatus["CANCELLED"] = "Cancelled";
    CommandStatus["CANCELLING"] = "Cancelling";
    CommandStatus["FAILED"] = "Failed";
    CommandStatus["IN_PROGRESS"] = "InProgress";
    CommandStatus["PENDING"] = "Pending";
    CommandStatus["SUCCESS"] = "Success";
    CommandStatus["TIMED_OUT"] = "TimedOut";
})(CommandStatus || (CommandStatus = {}));
export var Command;
(function (Command) {
    /**
     * @internal
     */
    Command.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Command || (Command = {}));
export var ListCommandsResult;
(function (ListCommandsResult) {
    /**
     * @internal
     */
    ListCommandsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCommandsResult || (ListCommandsResult = {}));
export var ComplianceQueryOperatorType;
(function (ComplianceQueryOperatorType) {
    ComplianceQueryOperatorType["BeginWith"] = "BEGIN_WITH";
    ComplianceQueryOperatorType["Equal"] = "EQUAL";
    ComplianceQueryOperatorType["GreaterThan"] = "GREATER_THAN";
    ComplianceQueryOperatorType["LessThan"] = "LESS_THAN";
    ComplianceQueryOperatorType["NotEqual"] = "NOT_EQUAL";
})(ComplianceQueryOperatorType || (ComplianceQueryOperatorType = {}));
export var ComplianceStringFilter;
(function (ComplianceStringFilter) {
    /**
     * @internal
     */
    ComplianceStringFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ComplianceStringFilter || (ComplianceStringFilter = {}));
export var ListComplianceItemsRequest;
(function (ListComplianceItemsRequest) {
    /**
     * @internal
     */
    ListComplianceItemsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListComplianceItemsRequest || (ListComplianceItemsRequest = {}));
export var ComplianceExecutionSummary;
(function (ComplianceExecutionSummary) {
    /**
     * @internal
     */
    ComplianceExecutionSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ComplianceExecutionSummary || (ComplianceExecutionSummary = {}));
export var ComplianceSeverity;
(function (ComplianceSeverity) {
    ComplianceSeverity["Critical"] = "CRITICAL";
    ComplianceSeverity["High"] = "HIGH";
    ComplianceSeverity["Informational"] = "INFORMATIONAL";
    ComplianceSeverity["Low"] = "LOW";
    ComplianceSeverity["Medium"] = "MEDIUM";
    ComplianceSeverity["Unspecified"] = "UNSPECIFIED";
})(ComplianceSeverity || (ComplianceSeverity = {}));
export var ComplianceStatus;
(function (ComplianceStatus) {
    ComplianceStatus["Compliant"] = "COMPLIANT";
    ComplianceStatus["NonCompliant"] = "NON_COMPLIANT";
})(ComplianceStatus || (ComplianceStatus = {}));
export var ComplianceItem;
(function (ComplianceItem) {
    /**
     * @internal
     */
    ComplianceItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ComplianceItem || (ComplianceItem = {}));
export var ListComplianceItemsResult;
(function (ListComplianceItemsResult) {
    /**
     * @internal
     */
    ListComplianceItemsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListComplianceItemsResult || (ListComplianceItemsResult = {}));
export var ListComplianceSummariesRequest;
(function (ListComplianceSummariesRequest) {
    /**
     * @internal
     */
    ListComplianceSummariesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListComplianceSummariesRequest || (ListComplianceSummariesRequest = {}));
export var SeveritySummary;
(function (SeveritySummary) {
    /**
     * @internal
     */
    SeveritySummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SeveritySummary || (SeveritySummary = {}));
export var CompliantSummary;
(function (CompliantSummary) {
    /**
     * @internal
     */
    CompliantSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompliantSummary || (CompliantSummary = {}));
export var NonCompliantSummary;
(function (NonCompliantSummary) {
    /**
     * @internal
     */
    NonCompliantSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NonCompliantSummary || (NonCompliantSummary = {}));
export var ComplianceSummaryItem;
(function (ComplianceSummaryItem) {
    /**
     * @internal
     */
    ComplianceSummaryItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ComplianceSummaryItem || (ComplianceSummaryItem = {}));
export var ListComplianceSummariesResult;
(function (ListComplianceSummariesResult) {
    /**
     * @internal
     */
    ListComplianceSummariesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListComplianceSummariesResult || (ListComplianceSummariesResult = {}));
export var DocumentMetadataEnum;
(function (DocumentMetadataEnum) {
    DocumentMetadataEnum["DocumentReviews"] = "DocumentReviews";
})(DocumentMetadataEnum || (DocumentMetadataEnum = {}));
export var ListDocumentMetadataHistoryRequest;
(function (ListDocumentMetadataHistoryRequest) {
    /**
     * @internal
     */
    ListDocumentMetadataHistoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDocumentMetadataHistoryRequest || (ListDocumentMetadataHistoryRequest = {}));
export var DocumentReviewCommentType;
(function (DocumentReviewCommentType) {
    DocumentReviewCommentType["Comment"] = "Comment";
})(DocumentReviewCommentType || (DocumentReviewCommentType = {}));
export var DocumentReviewCommentSource;
(function (DocumentReviewCommentSource) {
    /**
     * @internal
     */
    DocumentReviewCommentSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentReviewCommentSource || (DocumentReviewCommentSource = {}));
export var DocumentReviewerResponseSource;
(function (DocumentReviewerResponseSource) {
    /**
     * @internal
     */
    DocumentReviewerResponseSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentReviewerResponseSource || (DocumentReviewerResponseSource = {}));
export var DocumentMetadataResponseInfo;
(function (DocumentMetadataResponseInfo) {
    /**
     * @internal
     */
    DocumentMetadataResponseInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentMetadataResponseInfo || (DocumentMetadataResponseInfo = {}));
export var ListDocumentMetadataHistoryResponse;
(function (ListDocumentMetadataHistoryResponse) {
    /**
     * @internal
     */
    ListDocumentMetadataHistoryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDocumentMetadataHistoryResponse || (ListDocumentMetadataHistoryResponse = {}));
export var DocumentFilterKey;
(function (DocumentFilterKey) {
    DocumentFilterKey["DocumentType"] = "DocumentType";
    DocumentFilterKey["Name"] = "Name";
    DocumentFilterKey["Owner"] = "Owner";
    DocumentFilterKey["PlatformTypes"] = "PlatformTypes";
})(DocumentFilterKey || (DocumentFilterKey = {}));
export var DocumentFilter;
(function (DocumentFilter) {
    /**
     * @internal
     */
    DocumentFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentFilter || (DocumentFilter = {}));
export var DocumentKeyValuesFilter;
(function (DocumentKeyValuesFilter) {
    /**
     * @internal
     */
    DocumentKeyValuesFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentKeyValuesFilter || (DocumentKeyValuesFilter = {}));
export var ListDocumentsRequest;
(function (ListDocumentsRequest) {
    /**
     * @internal
     */
    ListDocumentsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDocumentsRequest || (ListDocumentsRequest = {}));
export var DocumentIdentifier;
(function (DocumentIdentifier) {
    /**
     * @internal
     */
    DocumentIdentifier.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentIdentifier || (DocumentIdentifier = {}));
export var ListDocumentsResult;
(function (ListDocumentsResult) {
    /**
     * @internal
     */
    ListDocumentsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDocumentsResult || (ListDocumentsResult = {}));
export var ListDocumentVersionsRequest;
(function (ListDocumentVersionsRequest) {
    /**
     * @internal
     */
    ListDocumentVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDocumentVersionsRequest || (ListDocumentVersionsRequest = {}));
export var DocumentVersionInfo;
(function (DocumentVersionInfo) {
    /**
     * @internal
     */
    DocumentVersionInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentVersionInfo || (DocumentVersionInfo = {}));
export var ListDocumentVersionsResult;
(function (ListDocumentVersionsResult) {
    /**
     * @internal
     */
    ListDocumentVersionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDocumentVersionsResult || (ListDocumentVersionsResult = {}));
export var ListInventoryEntriesRequest;
(function (ListInventoryEntriesRequest) {
    /**
     * @internal
     */
    ListInventoryEntriesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInventoryEntriesRequest || (ListInventoryEntriesRequest = {}));
export var ListInventoryEntriesResult;
(function (ListInventoryEntriesResult) {
    /**
     * @internal
     */
    ListInventoryEntriesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInventoryEntriesResult || (ListInventoryEntriesResult = {}));
export var OpsItemEventFilterKey;
(function (OpsItemEventFilterKey) {
    OpsItemEventFilterKey["OPSITEM_ID"] = "OpsItemId";
})(OpsItemEventFilterKey || (OpsItemEventFilterKey = {}));
export var OpsItemEventFilterOperator;
(function (OpsItemEventFilterOperator) {
    OpsItemEventFilterOperator["EQUAL"] = "Equal";
})(OpsItemEventFilterOperator || (OpsItemEventFilterOperator = {}));
export var OpsItemEventFilter;
(function (OpsItemEventFilter) {
    /**
     * @internal
     */
    OpsItemEventFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItemEventFilter || (OpsItemEventFilter = {}));
export var ListOpsItemEventsRequest;
(function (ListOpsItemEventsRequest) {
    /**
     * @internal
     */
    ListOpsItemEventsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOpsItemEventsRequest || (ListOpsItemEventsRequest = {}));
export var OpsItemIdentity;
(function (OpsItemIdentity) {
    /**
     * @internal
     */
    OpsItemIdentity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItemIdentity || (OpsItemIdentity = {}));
export var OpsItemEventSummary;
(function (OpsItemEventSummary) {
    /**
     * @internal
     */
    OpsItemEventSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItemEventSummary || (OpsItemEventSummary = {}));
export var ListOpsItemEventsResponse;
(function (ListOpsItemEventsResponse) {
    /**
     * @internal
     */
    ListOpsItemEventsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOpsItemEventsResponse || (ListOpsItemEventsResponse = {}));
export var OpsItemRelatedItemsFilterKey;
(function (OpsItemRelatedItemsFilterKey) {
    OpsItemRelatedItemsFilterKey["ASSOCIATION_ID"] = "AssociationId";
    OpsItemRelatedItemsFilterKey["RESOURCE_TYPE"] = "ResourceType";
    OpsItemRelatedItemsFilterKey["RESOURCE_URI"] = "ResourceUri";
})(OpsItemRelatedItemsFilterKey || (OpsItemRelatedItemsFilterKey = {}));
export var OpsItemRelatedItemsFilterOperator;
(function (OpsItemRelatedItemsFilterOperator) {
    OpsItemRelatedItemsFilterOperator["EQUAL"] = "Equal";
})(OpsItemRelatedItemsFilterOperator || (OpsItemRelatedItemsFilterOperator = {}));
export var OpsItemRelatedItemsFilter;
(function (OpsItemRelatedItemsFilter) {
    /**
     * @internal
     */
    OpsItemRelatedItemsFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItemRelatedItemsFilter || (OpsItemRelatedItemsFilter = {}));
export var ListOpsItemRelatedItemsRequest;
(function (ListOpsItemRelatedItemsRequest) {
    /**
     * @internal
     */
    ListOpsItemRelatedItemsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOpsItemRelatedItemsRequest || (ListOpsItemRelatedItemsRequest = {}));
export var OpsItemRelatedItemSummary;
(function (OpsItemRelatedItemSummary) {
    /**
     * @internal
     */
    OpsItemRelatedItemSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItemRelatedItemSummary || (OpsItemRelatedItemSummary = {}));
export var ListOpsItemRelatedItemsResponse;
(function (ListOpsItemRelatedItemsResponse) {
    /**
     * @internal
     */
    ListOpsItemRelatedItemsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOpsItemRelatedItemsResponse || (ListOpsItemRelatedItemsResponse = {}));
export var OpsMetadataFilter;
(function (OpsMetadataFilter) {
    /**
     * @internal
     */
    OpsMetadataFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsMetadataFilter || (OpsMetadataFilter = {}));
export var ListOpsMetadataRequest;
(function (ListOpsMetadataRequest) {
    /**
     * @internal
     */
    ListOpsMetadataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOpsMetadataRequest || (ListOpsMetadataRequest = {}));
export var OpsMetadata;
(function (OpsMetadata) {
    /**
     * @internal
     */
    OpsMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsMetadata || (OpsMetadata = {}));
export var ListOpsMetadataResult;
(function (ListOpsMetadataResult) {
    /**
     * @internal
     */
    ListOpsMetadataResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOpsMetadataResult || (ListOpsMetadataResult = {}));
export var ListResourceComplianceSummariesRequest;
(function (ListResourceComplianceSummariesRequest) {
    /**
     * @internal
     */
    ListResourceComplianceSummariesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResourceComplianceSummariesRequest || (ListResourceComplianceSummariesRequest = {}));
export var ResourceComplianceSummaryItem;
(function (ResourceComplianceSummaryItem) {
    /**
     * @internal
     */
    ResourceComplianceSummaryItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceComplianceSummaryItem || (ResourceComplianceSummaryItem = {}));
export var ListResourceComplianceSummariesResult;
(function (ListResourceComplianceSummariesResult) {
    /**
     * @internal
     */
    ListResourceComplianceSummariesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResourceComplianceSummariesResult || (ListResourceComplianceSummariesResult = {}));
export var ListResourceDataSyncRequest;
(function (ListResourceDataSyncRequest) {
    /**
     * @internal
     */
    ListResourceDataSyncRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResourceDataSyncRequest || (ListResourceDataSyncRequest = {}));
export var LastResourceDataSyncStatus;
(function (LastResourceDataSyncStatus) {
    LastResourceDataSyncStatus["FAILED"] = "Failed";
    LastResourceDataSyncStatus["INPROGRESS"] = "InProgress";
    LastResourceDataSyncStatus["SUCCESSFUL"] = "Successful";
})(LastResourceDataSyncStatus || (LastResourceDataSyncStatus = {}));
export var ResourceDataSyncSourceWithState;
(function (ResourceDataSyncSourceWithState) {
    /**
     * @internal
     */
    ResourceDataSyncSourceWithState.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDataSyncSourceWithState || (ResourceDataSyncSourceWithState = {}));
export var ResourceDataSyncItem;
(function (ResourceDataSyncItem) {
    /**
     * @internal
     */
    ResourceDataSyncItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDataSyncItem || (ResourceDataSyncItem = {}));
export var ListResourceDataSyncResult;
(function (ListResourceDataSyncResult) {
    /**
     * @internal
     */
    ListResourceDataSyncResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResourceDataSyncResult || (ListResourceDataSyncResult = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
    /**
     * @internal
     */
    ListTagsForResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResult || (ListTagsForResourceResult = {}));
export var DocumentPermissionLimit;
(function (DocumentPermissionLimit) {
    /**
     * @internal
     */
    DocumentPermissionLimit.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentPermissionLimit || (DocumentPermissionLimit = {}));
export var ModifyDocumentPermissionRequest;
(function (ModifyDocumentPermissionRequest) {
    /**
     * @internal
     */
    ModifyDocumentPermissionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyDocumentPermissionRequest || (ModifyDocumentPermissionRequest = {}));
export var ModifyDocumentPermissionResponse;
(function (ModifyDocumentPermissionResponse) {
    /**
     * @internal
     */
    ModifyDocumentPermissionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyDocumentPermissionResponse || (ModifyDocumentPermissionResponse = {}));
export var ComplianceTypeCountLimitExceededException;
(function (ComplianceTypeCountLimitExceededException) {
    /**
     * @internal
     */
    ComplianceTypeCountLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ComplianceTypeCountLimitExceededException || (ComplianceTypeCountLimitExceededException = {}));
export var InvalidItemContentException;
(function (InvalidItemContentException) {
    /**
     * @internal
     */
    InvalidItemContentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidItemContentException || (InvalidItemContentException = {}));
export var ItemSizeLimitExceededException;
(function (ItemSizeLimitExceededException) {
    /**
     * @internal
     */
    ItemSizeLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ItemSizeLimitExceededException || (ItemSizeLimitExceededException = {}));
export var ComplianceItemEntry;
(function (ComplianceItemEntry) {
    /**
     * @internal
     */
    ComplianceItemEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ComplianceItemEntry || (ComplianceItemEntry = {}));
export var ComplianceUploadType;
(function (ComplianceUploadType) {
    ComplianceUploadType["Complete"] = "COMPLETE";
    ComplianceUploadType["Partial"] = "PARTIAL";
})(ComplianceUploadType || (ComplianceUploadType = {}));
export var PutComplianceItemsRequest;
(function (PutComplianceItemsRequest) {
    /**
     * @internal
     */
    PutComplianceItemsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutComplianceItemsRequest || (PutComplianceItemsRequest = {}));
export var PutComplianceItemsResult;
(function (PutComplianceItemsResult) {
    /**
     * @internal
     */
    PutComplianceItemsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutComplianceItemsResult || (PutComplianceItemsResult = {}));
export var TotalSizeLimitExceededException;
(function (TotalSizeLimitExceededException) {
    /**
     * @internal
     */
    TotalSizeLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TotalSizeLimitExceededException || (TotalSizeLimitExceededException = {}));
export var CustomSchemaCountLimitExceededException;
(function (CustomSchemaCountLimitExceededException) {
    /**
     * @internal
     */
    CustomSchemaCountLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomSchemaCountLimitExceededException || (CustomSchemaCountLimitExceededException = {}));
export var InvalidInventoryItemContextException;
(function (InvalidInventoryItemContextException) {
    /**
     * @internal
     */
    InvalidInventoryItemContextException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInventoryItemContextException || (InvalidInventoryItemContextException = {}));
export var ItemContentMismatchException;
(function (ItemContentMismatchException) {
    /**
     * @internal
     */
    ItemContentMismatchException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ItemContentMismatchException || (ItemContentMismatchException = {}));
export var InventoryItem;
(function (InventoryItem) {
    /**
     * @internal
     */
    InventoryItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InventoryItem || (InventoryItem = {}));
export var PutInventoryRequest;
(function (PutInventoryRequest) {
    /**
     * @internal
     */
    PutInventoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutInventoryRequest || (PutInventoryRequest = {}));
export var PutInventoryResult;
(function (PutInventoryResult) {
    /**
     * @internal
     */
    PutInventoryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutInventoryResult || (PutInventoryResult = {}));
export var SubTypeCountLimitExceededException;
(function (SubTypeCountLimitExceededException) {
    /**
     * @internal
     */
    SubTypeCountLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubTypeCountLimitExceededException || (SubTypeCountLimitExceededException = {}));
export var UnsupportedInventoryItemContextException;
(function (UnsupportedInventoryItemContextException) {
    /**
     * @internal
     */
    UnsupportedInventoryItemContextException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedInventoryItemContextException || (UnsupportedInventoryItemContextException = {}));
export var UnsupportedInventorySchemaVersionException;
(function (UnsupportedInventorySchemaVersionException) {
    /**
     * @internal
     */
    UnsupportedInventorySchemaVersionException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedInventorySchemaVersionException || (UnsupportedInventorySchemaVersionException = {}));
export var HierarchyLevelLimitExceededException;
(function (HierarchyLevelLimitExceededException) {
    /**
     * @internal
     */
    HierarchyLevelLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HierarchyLevelLimitExceededException || (HierarchyLevelLimitExceededException = {}));
export var HierarchyTypeMismatchException;
(function (HierarchyTypeMismatchException) {
    /**
     * @internal
     */
    HierarchyTypeMismatchException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HierarchyTypeMismatchException || (HierarchyTypeMismatchException = {}));
export var IncompatiblePolicyException;
(function (IncompatiblePolicyException) {
    /**
     * @internal
     */
    IncompatiblePolicyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IncompatiblePolicyException || (IncompatiblePolicyException = {}));
export var InvalidAllowedPatternException;
(function (InvalidAllowedPatternException) {
    /**
     * @internal
     */
    InvalidAllowedPatternException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidAllowedPatternException || (InvalidAllowedPatternException = {}));
export var InvalidPolicyAttributeException;
(function (InvalidPolicyAttributeException) {
    /**
     * @internal
     */
    InvalidPolicyAttributeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidPolicyAttributeException || (InvalidPolicyAttributeException = {}));
export var InvalidPolicyTypeException;
(function (InvalidPolicyTypeException) {
    /**
     * @internal
     */
    InvalidPolicyTypeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidPolicyTypeException || (InvalidPolicyTypeException = {}));
export var ParameterAlreadyExists;
(function (ParameterAlreadyExists) {
    /**
     * @internal
     */
    ParameterAlreadyExists.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParameterAlreadyExists || (ParameterAlreadyExists = {}));
export var ParameterLimitExceeded;
(function (ParameterLimitExceeded) {
    /**
     * @internal
     */
    ParameterLimitExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParameterLimitExceeded || (ParameterLimitExceeded = {}));
export var ParameterMaxVersionLimitExceeded;
(function (ParameterMaxVersionLimitExceeded) {
    /**
     * @internal
     */
    ParameterMaxVersionLimitExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParameterMaxVersionLimitExceeded || (ParameterMaxVersionLimitExceeded = {}));
export var ParameterPatternMismatchException;
(function (ParameterPatternMismatchException) {
    /**
     * @internal
     */
    ParameterPatternMismatchException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParameterPatternMismatchException || (ParameterPatternMismatchException = {}));
export var PoliciesLimitExceededException;
(function (PoliciesLimitExceededException) {
    /**
     * @internal
     */
    PoliciesLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PoliciesLimitExceededException || (PoliciesLimitExceededException = {}));
export var PutParameterRequest;
(function (PutParameterRequest) {
    /**
     * @internal
     */
    PutParameterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutParameterRequest || (PutParameterRequest = {}));
export var PutParameterResult;
(function (PutParameterResult) {
    /**
     * @internal
     */
    PutParameterResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutParameterResult || (PutParameterResult = {}));
export var UnsupportedParameterType;
(function (UnsupportedParameterType) {
    /**
     * @internal
     */
    UnsupportedParameterType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedParameterType || (UnsupportedParameterType = {}));
export var RegisterDefaultPatchBaselineRequest;
(function (RegisterDefaultPatchBaselineRequest) {
    /**
     * @internal
     */
    RegisterDefaultPatchBaselineRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterDefaultPatchBaselineRequest || (RegisterDefaultPatchBaselineRequest = {}));
export var RegisterDefaultPatchBaselineResult;
(function (RegisterDefaultPatchBaselineResult) {
    /**
     * @internal
     */
    RegisterDefaultPatchBaselineResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterDefaultPatchBaselineResult || (RegisterDefaultPatchBaselineResult = {}));
export var RegisterPatchBaselineForPatchGroupRequest;
(function (RegisterPatchBaselineForPatchGroupRequest) {
    /**
     * @internal
     */
    RegisterPatchBaselineForPatchGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterPatchBaselineForPatchGroupRequest || (RegisterPatchBaselineForPatchGroupRequest = {}));
export var RegisterPatchBaselineForPatchGroupResult;
(function (RegisterPatchBaselineForPatchGroupResult) {
    /**
     * @internal
     */
    RegisterPatchBaselineForPatchGroupResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterPatchBaselineForPatchGroupResult || (RegisterPatchBaselineForPatchGroupResult = {}));
export var RegisterTargetWithMaintenanceWindowRequest;
(function (RegisterTargetWithMaintenanceWindowRequest) {
    /**
     * @internal
     */
    RegisterTargetWithMaintenanceWindowRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING })), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(RegisterTargetWithMaintenanceWindowRequest || (RegisterTargetWithMaintenanceWindowRequest = {}));
export var RegisterTargetWithMaintenanceWindowResult;
(function (RegisterTargetWithMaintenanceWindowResult) {
    /**
     * @internal
     */
    RegisterTargetWithMaintenanceWindowResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterTargetWithMaintenanceWindowResult || (RegisterTargetWithMaintenanceWindowResult = {}));
export var FeatureNotAvailableException;
(function (FeatureNotAvailableException) {
    /**
     * @internal
     */
    FeatureNotAvailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FeatureNotAvailableException || (FeatureNotAvailableException = {}));
export var RegisterTaskWithMaintenanceWindowRequest;
(function (RegisterTaskWithMaintenanceWindowRequest) {
    /**
     * @internal
     */
    RegisterTaskWithMaintenanceWindowRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.TaskParameters && { TaskParameters: SENSITIVE_STRING })), (obj.TaskInvocationParameters && {
        TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(obj.TaskInvocationParameters),
    })), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(RegisterTaskWithMaintenanceWindowRequest || (RegisterTaskWithMaintenanceWindowRequest = {}));
export var RegisterTaskWithMaintenanceWindowResult;
(function (RegisterTaskWithMaintenanceWindowResult) {
    /**
     * @internal
     */
    RegisterTaskWithMaintenanceWindowResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterTaskWithMaintenanceWindowResult || (RegisterTaskWithMaintenanceWindowResult = {}));
export var RemoveTagsFromResourceRequest;
(function (RemoveTagsFromResourceRequest) {
    /**
     * @internal
     */
    RemoveTagsFromResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTagsFromResourceRequest || (RemoveTagsFromResourceRequest = {}));
export var RemoveTagsFromResourceResult;
(function (RemoveTagsFromResourceResult) {
    /**
     * @internal
     */
    RemoveTagsFromResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTagsFromResourceResult || (RemoveTagsFromResourceResult = {}));
export var ResetServiceSettingRequest;
(function (ResetServiceSettingRequest) {
    /**
     * @internal
     */
    ResetServiceSettingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResetServiceSettingRequest || (ResetServiceSettingRequest = {}));
export var ResetServiceSettingResult;
(function (ResetServiceSettingResult) {
    /**
     * @internal
     */
    ResetServiceSettingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResetServiceSettingResult || (ResetServiceSettingResult = {}));
export var ResumeSessionRequest;
(function (ResumeSessionRequest) {
    /**
     * @internal
     */
    ResumeSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResumeSessionRequest || (ResumeSessionRequest = {}));
export var ResumeSessionResponse;
(function (ResumeSessionResponse) {
    /**
     * @internal
     */
    ResumeSessionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResumeSessionResponse || (ResumeSessionResponse = {}));
export var AutomationStepNotFoundException;
(function (AutomationStepNotFoundException) {
    /**
     * @internal
     */
    AutomationStepNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomationStepNotFoundException || (AutomationStepNotFoundException = {}));
export var InvalidAutomationSignalException;
(function (InvalidAutomationSignalException) {
    /**
     * @internal
     */
    InvalidAutomationSignalException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidAutomationSignalException || (InvalidAutomationSignalException = {}));
export var SignalType;
(function (SignalType) {
    SignalType["APPROVE"] = "Approve";
    SignalType["REJECT"] = "Reject";
    SignalType["RESUME"] = "Resume";
    SignalType["START_STEP"] = "StartStep";
    SignalType["STOP_STEP"] = "StopStep";
})(SignalType || (SignalType = {}));
export var SendAutomationSignalRequest;
(function (SendAutomationSignalRequest) {
    /**
     * @internal
     */
    SendAutomationSignalRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendAutomationSignalRequest || (SendAutomationSignalRequest = {}));
export var SendAutomationSignalResult;
(function (SendAutomationSignalResult) {
    /**
     * @internal
     */
    SendAutomationSignalResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendAutomationSignalResult || (SendAutomationSignalResult = {}));
export var InvalidNotificationConfig;
(function (InvalidNotificationConfig) {
    /**
     * @internal
     */
    InvalidNotificationConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNotificationConfig || (InvalidNotificationConfig = {}));
export var InvalidOutputFolder;
(function (InvalidOutputFolder) {
    /**
     * @internal
     */
    InvalidOutputFolder.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidOutputFolder || (InvalidOutputFolder = {}));
export var InvalidRole;
(function (InvalidRole) {
    /**
     * @internal
     */
    InvalidRole.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRole || (InvalidRole = {}));
export var SendCommandRequest;
(function (SendCommandRequest) {
    /**
     * @internal
     */
    SendCommandRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendCommandRequest || (SendCommandRequest = {}));
export var SendCommandResult;
(function (SendCommandResult) {
    /**
     * @internal
     */
    SendCommandResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendCommandResult || (SendCommandResult = {}));
export var InvalidAssociation;
(function (InvalidAssociation) {
    /**
     * @internal
     */
    InvalidAssociation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidAssociation || (InvalidAssociation = {}));
export var StartAssociationsOnceRequest;
(function (StartAssociationsOnceRequest) {
    /**
     * @internal
     */
    StartAssociationsOnceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartAssociationsOnceRequest || (StartAssociationsOnceRequest = {}));
export var StartAssociationsOnceResult;
(function (StartAssociationsOnceResult) {
    /**
     * @internal
     */
    StartAssociationsOnceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartAssociationsOnceResult || (StartAssociationsOnceResult = {}));
export var AutomationDefinitionNotFoundException;
(function (AutomationDefinitionNotFoundException) {
    /**
     * @internal
     */
    AutomationDefinitionNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomationDefinitionNotFoundException || (AutomationDefinitionNotFoundException = {}));
export var AutomationDefinitionVersionNotFoundException;
(function (AutomationDefinitionVersionNotFoundException) {
    /**
     * @internal
     */
    AutomationDefinitionVersionNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomationDefinitionVersionNotFoundException || (AutomationDefinitionVersionNotFoundException = {}));
export var AutomationExecutionLimitExceededException;
(function (AutomationExecutionLimitExceededException) {
    /**
     * @internal
     */
    AutomationExecutionLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomationExecutionLimitExceededException || (AutomationExecutionLimitExceededException = {}));
export var InvalidAutomationExecutionParametersException;
(function (InvalidAutomationExecutionParametersException) {
    /**
     * @internal
     */
    InvalidAutomationExecutionParametersException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidAutomationExecutionParametersException || (InvalidAutomationExecutionParametersException = {}));
export var StartAutomationExecutionRequest;
(function (StartAutomationExecutionRequest) {
    /**
     * @internal
     */
    StartAutomationExecutionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartAutomationExecutionRequest || (StartAutomationExecutionRequest = {}));
export var StartAutomationExecutionResult;
(function (StartAutomationExecutionResult) {
    /**
     * @internal
     */
    StartAutomationExecutionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartAutomationExecutionResult || (StartAutomationExecutionResult = {}));
export var AutomationDefinitionNotApprovedException;
(function (AutomationDefinitionNotApprovedException) {
    /**
     * @internal
     */
    AutomationDefinitionNotApprovedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomationDefinitionNotApprovedException || (AutomationDefinitionNotApprovedException = {}));
export var StartChangeRequestExecutionRequest;
(function (StartChangeRequestExecutionRequest) {
    /**
     * @internal
     */
    StartChangeRequestExecutionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartChangeRequestExecutionRequest || (StartChangeRequestExecutionRequest = {}));
export var StartChangeRequestExecutionResult;
(function (StartChangeRequestExecutionResult) {
    /**
     * @internal
     */
    StartChangeRequestExecutionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartChangeRequestExecutionResult || (StartChangeRequestExecutionResult = {}));
export var StartSessionRequest;
(function (StartSessionRequest) {
    /**
     * @internal
     */
    StartSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartSessionRequest || (StartSessionRequest = {}));
export var StartSessionResponse;
(function (StartSessionResponse) {
    /**
     * @internal
     */
    StartSessionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartSessionResponse || (StartSessionResponse = {}));
export var TargetNotConnected;
(function (TargetNotConnected) {
    /**
     * @internal
     */
    TargetNotConnected.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetNotConnected || (TargetNotConnected = {}));
export var InvalidAutomationStatusUpdateException;
(function (InvalidAutomationStatusUpdateException) {
    /**
     * @internal
     */
    InvalidAutomationStatusUpdateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidAutomationStatusUpdateException || (InvalidAutomationStatusUpdateException = {}));
export var StopType;
(function (StopType) {
    StopType["CANCEL"] = "Cancel";
    StopType["COMPLETE"] = "Complete";
})(StopType || (StopType = {}));
export var StopAutomationExecutionRequest;
(function (StopAutomationExecutionRequest) {
    /**
     * @internal
     */
    StopAutomationExecutionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopAutomationExecutionRequest || (StopAutomationExecutionRequest = {}));
export var StopAutomationExecutionResult;
(function (StopAutomationExecutionResult) {
    /**
     * @internal
     */
    StopAutomationExecutionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopAutomationExecutionResult || (StopAutomationExecutionResult = {}));
export var TerminateSessionRequest;
(function (TerminateSessionRequest) {
    /**
     * @internal
     */
    TerminateSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TerminateSessionRequest || (TerminateSessionRequest = {}));
export var TerminateSessionResponse;
(function (TerminateSessionResponse) {
    /**
     * @internal
     */
    TerminateSessionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TerminateSessionResponse || (TerminateSessionResponse = {}));
export var UnlabelParameterVersionRequest;
(function (UnlabelParameterVersionRequest) {
    /**
     * @internal
     */
    UnlabelParameterVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnlabelParameterVersionRequest || (UnlabelParameterVersionRequest = {}));
export var UnlabelParameterVersionResult;
(function (UnlabelParameterVersionResult) {
    /**
     * @internal
     */
    UnlabelParameterVersionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnlabelParameterVersionResult || (UnlabelParameterVersionResult = {}));
export var AssociationVersionLimitExceeded;
(function (AssociationVersionLimitExceeded) {
    /**
     * @internal
     */
    AssociationVersionLimitExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociationVersionLimitExceeded || (AssociationVersionLimitExceeded = {}));
export var InvalidUpdate;
(function (InvalidUpdate) {
    /**
     * @internal
     */
    InvalidUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidUpdate || (InvalidUpdate = {}));
export var UpdateAssociationRequest;
(function (UpdateAssociationRequest) {
    /**
     * @internal
     */
    UpdateAssociationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAssociationRequest || (UpdateAssociationRequest = {}));
export var UpdateAssociationResult;
(function (UpdateAssociationResult) {
    /**
     * @internal
     */
    UpdateAssociationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAssociationResult || (UpdateAssociationResult = {}));
export var StatusUnchanged;
(function (StatusUnchanged) {
    /**
     * @internal
     */
    StatusUnchanged.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StatusUnchanged || (StatusUnchanged = {}));
export var UpdateAssociationStatusRequest;
(function (UpdateAssociationStatusRequest) {
    /**
     * @internal
     */
    UpdateAssociationStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAssociationStatusRequest || (UpdateAssociationStatusRequest = {}));
export var UpdateAssociationStatusResult;
(function (UpdateAssociationStatusResult) {
    /**
     * @internal
     */
    UpdateAssociationStatusResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAssociationStatusResult || (UpdateAssociationStatusResult = {}));
export var DocumentVersionLimitExceeded;
(function (DocumentVersionLimitExceeded) {
    /**
     * @internal
     */
    DocumentVersionLimitExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentVersionLimitExceeded || (DocumentVersionLimitExceeded = {}));
export var DuplicateDocumentContent;
(function (DuplicateDocumentContent) {
    /**
     * @internal
     */
    DuplicateDocumentContent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicateDocumentContent || (DuplicateDocumentContent = {}));
export var DuplicateDocumentVersionName;
(function (DuplicateDocumentVersionName) {
    /**
     * @internal
     */
    DuplicateDocumentVersionName.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicateDocumentVersionName || (DuplicateDocumentVersionName = {}));
export var UpdateDocumentRequest;
(function (UpdateDocumentRequest) {
    /**
     * @internal
     */
    UpdateDocumentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDocumentRequest || (UpdateDocumentRequest = {}));
export var UpdateDocumentResult;
(function (UpdateDocumentResult) {
    /**
     * @internal
     */
    UpdateDocumentResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDocumentResult || (UpdateDocumentResult = {}));
export var UpdateDocumentDefaultVersionRequest;
(function (UpdateDocumentDefaultVersionRequest) {
    /**
     * @internal
     */
    UpdateDocumentDefaultVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDocumentDefaultVersionRequest || (UpdateDocumentDefaultVersionRequest = {}));
export var DocumentDefaultVersionDescription;
(function (DocumentDefaultVersionDescription) {
    /**
     * @internal
     */
    DocumentDefaultVersionDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentDefaultVersionDescription || (DocumentDefaultVersionDescription = {}));
export var UpdateDocumentDefaultVersionResult;
(function (UpdateDocumentDefaultVersionResult) {
    /**
     * @internal
     */
    UpdateDocumentDefaultVersionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDocumentDefaultVersionResult || (UpdateDocumentDefaultVersionResult = {}));
export var DocumentReviewAction;
(function (DocumentReviewAction) {
    DocumentReviewAction["Approve"] = "Approve";
    DocumentReviewAction["Reject"] = "Reject";
    DocumentReviewAction["SendForReview"] = "SendForReview";
    DocumentReviewAction["UpdateReview"] = "UpdateReview";
})(DocumentReviewAction || (DocumentReviewAction = {}));
export var DocumentReviews;
(function (DocumentReviews) {
    /**
     * @internal
     */
    DocumentReviews.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentReviews || (DocumentReviews = {}));
export var UpdateDocumentMetadataRequest;
(function (UpdateDocumentMetadataRequest) {
    /**
     * @internal
     */
    UpdateDocumentMetadataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDocumentMetadataRequest || (UpdateDocumentMetadataRequest = {}));
export var UpdateDocumentMetadataResponse;
(function (UpdateDocumentMetadataResponse) {
    /**
     * @internal
     */
    UpdateDocumentMetadataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDocumentMetadataResponse || (UpdateDocumentMetadataResponse = {}));
export var UpdateMaintenanceWindowRequest;
(function (UpdateMaintenanceWindowRequest) {
    /**
     * @internal
     */
    UpdateMaintenanceWindowRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(UpdateMaintenanceWindowRequest || (UpdateMaintenanceWindowRequest = {}));
export var UpdateMaintenanceWindowResult;
(function (UpdateMaintenanceWindowResult) {
    /**
     * @internal
     */
    UpdateMaintenanceWindowResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(UpdateMaintenanceWindowResult || (UpdateMaintenanceWindowResult = {}));
//# sourceMappingURL=models_1.js.map