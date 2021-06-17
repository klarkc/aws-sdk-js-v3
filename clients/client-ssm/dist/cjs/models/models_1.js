"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentHashType = exports.GetDocumentRequest = exports.UnsupportedFeatureRequiredException = exports.GetDeployablePatchSnapshotForInstanceResult = exports.GetDeployablePatchSnapshotForInstanceRequest = exports.BaselineOverride = exports.GetDefaultPatchBaselineResult = exports.GetDefaultPatchBaselineRequest = exports.GetConnectionStatusResponse = exports.ConnectionStatus = exports.GetConnectionStatusRequest = exports.InvocationDoesNotExist = exports.InvalidPluginName = exports.GetCommandInvocationResult = exports.CommandInvocationStatus = exports.CloudWatchOutputConfig = exports.GetCommandInvocationRequest = exports.UnsupportedCalendarException = exports.InvalidDocumentType = exports.GetCalendarStateResponse = exports.CalendarState = exports.GetCalendarStateRequest = exports.GetAutomationExecutionResult = exports.AutomationExecution = exports.ProgressCounters = exports.GetAutomationExecutionRequest = exports.OpsItemRelatedItemAssociationNotFoundException = exports.DisassociateOpsItemRelatedItemResponse = exports.DisassociateOpsItemRelatedItemRequest = exports.DescribeSessionsResponse = exports.Session = exports.SessionStatus = exports.SessionManagerOutputUrl = exports.DescribeSessionsRequest = exports.SessionState = exports.SessionFilter = exports.SessionFilterKey = exports.DescribePatchPropertiesResult = exports.DescribePatchPropertiesRequest = exports.PatchProperty = exports.PatchSet = exports.DescribePatchGroupStateResult = exports.DescribePatchGroupStateRequest = exports.DescribePatchGroupsResult = exports.PatchGroupPatchBaselineMapping = exports.DescribePatchGroupsRequest = exports.DescribePatchBaselinesResult = exports.PatchBaselineIdentity = exports.DescribePatchBaselinesRequest = exports.InvalidFilterOption = void 0;
exports.InvalidKeyId = exports.GetParameterResult = exports.Parameter = exports.GetParameterRequest = exports.GetOpsSummaryResult = exports.OpsEntity = exports.OpsEntityItem = exports.OpsResultAttribute = exports.OpsFilter = exports.OpsFilterOperatorType = exports.GetOpsMetadataResult = exports.GetOpsMetadataRequest = exports.GetOpsItemResponse = exports.OpsItem = exports.GetOpsItemRequest = exports.GetMaintenanceWindowTaskResult = exports.MaintenanceWindowTaskInvocationParameters = exports.MaintenanceWindowStepFunctionsParameters = exports.MaintenanceWindowRunCommandParameters = exports.NotificationConfig = exports.NotificationType = exports.NotificationEvent = exports.MaintenanceWindowLambdaParameters = exports.MaintenanceWindowAutomationParameters = exports.GetMaintenanceWindowTaskRequest = exports.GetMaintenanceWindowExecutionTaskInvocationResult = exports.GetMaintenanceWindowExecutionTaskInvocationRequest = exports.GetMaintenanceWindowExecutionTaskResult = exports.GetMaintenanceWindowExecutionTaskRequest = exports.GetMaintenanceWindowExecutionResult = exports.GetMaintenanceWindowExecutionRequest = exports.GetMaintenanceWindowResult = exports.GetMaintenanceWindowRequest = exports.GetInventorySchemaResult = exports.InventoryItemSchema = exports.InventoryItemAttribute = exports.InventoryAttributeDataType = exports.GetInventorySchemaRequest = exports.InvalidResultAttributeException = exports.InvalidInventoryGroupException = exports.InvalidAggregatorException = exports.GetInventoryResult = exports.InventoryResultEntity = exports.InventoryResultItem = exports.ResultAttribute = exports.InventoryGroup = exports.InventoryFilter = exports.InventoryQueryOperatorType = exports.GetDocumentResult = exports.AttachmentContent = void 0;
exports.NonCompliantSummary = exports.CompliantSummary = exports.SeveritySummary = exports.ListComplianceSummariesRequest = exports.ListComplianceItemsResult = exports.ComplianceItem = exports.ComplianceStatus = exports.ComplianceSeverity = exports.ComplianceExecutionSummary = exports.ListComplianceItemsRequest = exports.ComplianceStringFilter = exports.ComplianceQueryOperatorType = exports.ListCommandsResult = exports.Command = exports.CommandStatus = exports.ListCommandsRequest = exports.ListCommandInvocationsResult = exports.CommandInvocation = exports.CommandPlugin = exports.CommandPluginStatus = exports.ListCommandInvocationsRequest = exports.CommandFilter = exports.CommandFilterKey = exports.ListAssociationVersionsResult = exports.AssociationVersionInfo = exports.ListAssociationVersionsRequest = exports.ListAssociationsResult = exports.Association = exports.ListAssociationsRequest = exports.AssociationFilter = exports.AssociationFilterKey = exports.ParameterVersionLabelLimitExceeded = exports.LabelParameterVersionResult = exports.LabelParameterVersionRequest = exports.ServiceSettingNotFound = exports.GetServiceSettingResult = exports.ServiceSetting = exports.GetServiceSettingRequest = exports.GetPatchBaselineForPatchGroupResult = exports.GetPatchBaselineForPatchGroupRequest = exports.GetPatchBaselineResult = exports.GetPatchBaselineRequest = exports.GetParametersByPathResult = exports.GetParametersByPathRequest = exports.GetParametersResult = exports.GetParametersRequest = exports.GetParameterHistoryResult = exports.ParameterHistory = exports.GetParameterHistoryRequest = exports.ParameterVersionNotFound = void 0;
exports.ModifyDocumentPermissionResponse = exports.ModifyDocumentPermissionRequest = exports.DocumentPermissionLimit = exports.ListTagsForResourceResult = exports.ListTagsForResourceRequest = exports.ListResourceDataSyncResult = exports.ResourceDataSyncItem = exports.ResourceDataSyncSourceWithState = exports.LastResourceDataSyncStatus = exports.ListResourceDataSyncRequest = exports.ListResourceComplianceSummariesResult = exports.ResourceComplianceSummaryItem = exports.ListResourceComplianceSummariesRequest = exports.ListOpsMetadataResult = exports.OpsMetadata = exports.ListOpsMetadataRequest = exports.OpsMetadataFilter = exports.ListOpsItemRelatedItemsResponse = exports.OpsItemRelatedItemSummary = exports.ListOpsItemRelatedItemsRequest = exports.OpsItemRelatedItemsFilter = exports.OpsItemRelatedItemsFilterOperator = exports.OpsItemRelatedItemsFilterKey = exports.ListOpsItemEventsResponse = exports.OpsItemEventSummary = exports.OpsItemIdentity = exports.ListOpsItemEventsRequest = exports.OpsItemEventFilter = exports.OpsItemEventFilterOperator = exports.OpsItemEventFilterKey = exports.ListInventoryEntriesResult = exports.ListInventoryEntriesRequest = exports.ListDocumentVersionsResult = exports.DocumentVersionInfo = exports.ListDocumentVersionsRequest = exports.ListDocumentsResult = exports.DocumentIdentifier = exports.ListDocumentsRequest = exports.DocumentKeyValuesFilter = exports.DocumentFilter = exports.DocumentFilterKey = exports.ListDocumentMetadataHistoryResponse = exports.DocumentMetadataResponseInfo = exports.DocumentReviewerResponseSource = exports.DocumentReviewCommentSource = exports.DocumentReviewCommentType = exports.ListDocumentMetadataHistoryRequest = exports.DocumentMetadataEnum = exports.ListComplianceSummariesResult = exports.ComplianceSummaryItem = void 0;
exports.SendAutomationSignalRequest = exports.SignalType = exports.InvalidAutomationSignalException = exports.AutomationStepNotFoundException = exports.ResumeSessionResponse = exports.ResumeSessionRequest = exports.ResetServiceSettingResult = exports.ResetServiceSettingRequest = exports.RemoveTagsFromResourceResult = exports.RemoveTagsFromResourceRequest = exports.RegisterTaskWithMaintenanceWindowResult = exports.RegisterTaskWithMaintenanceWindowRequest = exports.FeatureNotAvailableException = exports.RegisterTargetWithMaintenanceWindowResult = exports.RegisterTargetWithMaintenanceWindowRequest = exports.RegisterPatchBaselineForPatchGroupResult = exports.RegisterPatchBaselineForPatchGroupRequest = exports.RegisterDefaultPatchBaselineResult = exports.RegisterDefaultPatchBaselineRequest = exports.UnsupportedParameterType = exports.PutParameterResult = exports.PutParameterRequest = exports.PoliciesLimitExceededException = exports.ParameterPatternMismatchException = exports.ParameterMaxVersionLimitExceeded = exports.ParameterLimitExceeded = exports.ParameterAlreadyExists = exports.InvalidPolicyTypeException = exports.InvalidPolicyAttributeException = exports.InvalidAllowedPatternException = exports.IncompatiblePolicyException = exports.HierarchyTypeMismatchException = exports.HierarchyLevelLimitExceededException = exports.UnsupportedInventorySchemaVersionException = exports.UnsupportedInventoryItemContextException = exports.SubTypeCountLimitExceededException = exports.PutInventoryResult = exports.PutInventoryRequest = exports.InventoryItem = exports.ItemContentMismatchException = exports.InvalidInventoryItemContextException = exports.CustomSchemaCountLimitExceededException = exports.TotalSizeLimitExceededException = exports.PutComplianceItemsResult = exports.PutComplianceItemsRequest = exports.ComplianceUploadType = exports.ComplianceItemEntry = exports.ItemSizeLimitExceededException = exports.InvalidItemContentException = exports.ComplianceTypeCountLimitExceededException = void 0;
exports.UpdateMaintenanceWindowResult = exports.UpdateMaintenanceWindowRequest = exports.UpdateDocumentMetadataResponse = exports.UpdateDocumentMetadataRequest = exports.DocumentReviews = exports.DocumentReviewAction = exports.UpdateDocumentDefaultVersionResult = exports.DocumentDefaultVersionDescription = exports.UpdateDocumentDefaultVersionRequest = exports.UpdateDocumentResult = exports.UpdateDocumentRequest = exports.DuplicateDocumentVersionName = exports.DuplicateDocumentContent = exports.DocumentVersionLimitExceeded = exports.UpdateAssociationStatusResult = exports.UpdateAssociationStatusRequest = exports.StatusUnchanged = exports.UpdateAssociationResult = exports.UpdateAssociationRequest = exports.InvalidUpdate = exports.AssociationVersionLimitExceeded = exports.UnlabelParameterVersionResult = exports.UnlabelParameterVersionRequest = exports.TerminateSessionResponse = exports.TerminateSessionRequest = exports.StopAutomationExecutionResult = exports.StopAutomationExecutionRequest = exports.StopType = exports.InvalidAutomationStatusUpdateException = exports.TargetNotConnected = exports.StartSessionResponse = exports.StartSessionRequest = exports.StartChangeRequestExecutionResult = exports.StartChangeRequestExecutionRequest = exports.AutomationDefinitionNotApprovedException = exports.StartAutomationExecutionResult = exports.StartAutomationExecutionRequest = exports.InvalidAutomationExecutionParametersException = exports.AutomationExecutionLimitExceededException = exports.AutomationDefinitionVersionNotFoundException = exports.AutomationDefinitionNotFoundException = exports.StartAssociationsOnceResult = exports.StartAssociationsOnceRequest = exports.InvalidAssociation = exports.SendCommandResult = exports.SendCommandRequest = exports.InvalidRole = exports.InvalidOutputFolder = exports.InvalidNotificationConfig = exports.SendAutomationSignalResult = void 0;
const models_0_1 = require("./models_0");
const smithy_client_1 = require("@aws-sdk/smithy-client");
var InvalidFilterOption;
(function (InvalidFilterOption) {
    /**
     * @internal
     */
    InvalidFilterOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidFilterOption = exports.InvalidFilterOption || (exports.InvalidFilterOption = {}));
var DescribePatchBaselinesRequest;
(function (DescribePatchBaselinesRequest) {
    /**
     * @internal
     */
    DescribePatchBaselinesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePatchBaselinesRequest = exports.DescribePatchBaselinesRequest || (exports.DescribePatchBaselinesRequest = {}));
var PatchBaselineIdentity;
(function (PatchBaselineIdentity) {
    /**
     * @internal
     */
    PatchBaselineIdentity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PatchBaselineIdentity = exports.PatchBaselineIdentity || (exports.PatchBaselineIdentity = {}));
var DescribePatchBaselinesResult;
(function (DescribePatchBaselinesResult) {
    /**
     * @internal
     */
    DescribePatchBaselinesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePatchBaselinesResult = exports.DescribePatchBaselinesResult || (exports.DescribePatchBaselinesResult = {}));
var DescribePatchGroupsRequest;
(function (DescribePatchGroupsRequest) {
    /**
     * @internal
     */
    DescribePatchGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePatchGroupsRequest = exports.DescribePatchGroupsRequest || (exports.DescribePatchGroupsRequest = {}));
var PatchGroupPatchBaselineMapping;
(function (PatchGroupPatchBaselineMapping) {
    /**
     * @internal
     */
    PatchGroupPatchBaselineMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PatchGroupPatchBaselineMapping = exports.PatchGroupPatchBaselineMapping || (exports.PatchGroupPatchBaselineMapping = {}));
var DescribePatchGroupsResult;
(function (DescribePatchGroupsResult) {
    /**
     * @internal
     */
    DescribePatchGroupsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePatchGroupsResult = exports.DescribePatchGroupsResult || (exports.DescribePatchGroupsResult = {}));
var DescribePatchGroupStateRequest;
(function (DescribePatchGroupStateRequest) {
    /**
     * @internal
     */
    DescribePatchGroupStateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePatchGroupStateRequest = exports.DescribePatchGroupStateRequest || (exports.DescribePatchGroupStateRequest = {}));
var DescribePatchGroupStateResult;
(function (DescribePatchGroupStateResult) {
    /**
     * @internal
     */
    DescribePatchGroupStateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePatchGroupStateResult = exports.DescribePatchGroupStateResult || (exports.DescribePatchGroupStateResult = {}));
var PatchSet;
(function (PatchSet) {
    PatchSet["Application"] = "APPLICATION";
    PatchSet["Os"] = "OS";
})(PatchSet = exports.PatchSet || (exports.PatchSet = {}));
var PatchProperty;
(function (PatchProperty) {
    PatchProperty["PatchClassification"] = "CLASSIFICATION";
    PatchProperty["PatchMsrcSeverity"] = "MSRC_SEVERITY";
    PatchProperty["PatchPriority"] = "PRIORITY";
    PatchProperty["PatchProductFamily"] = "PRODUCT_FAMILY";
    PatchProperty["PatchSeverity"] = "SEVERITY";
    PatchProperty["Product"] = "PRODUCT";
})(PatchProperty = exports.PatchProperty || (exports.PatchProperty = {}));
var DescribePatchPropertiesRequest;
(function (DescribePatchPropertiesRequest) {
    /**
     * @internal
     */
    DescribePatchPropertiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePatchPropertiesRequest = exports.DescribePatchPropertiesRequest || (exports.DescribePatchPropertiesRequest = {}));
var DescribePatchPropertiesResult;
(function (DescribePatchPropertiesResult) {
    /**
     * @internal
     */
    DescribePatchPropertiesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePatchPropertiesResult = exports.DescribePatchPropertiesResult || (exports.DescribePatchPropertiesResult = {}));
var SessionFilterKey;
(function (SessionFilterKey) {
    SessionFilterKey["INVOKED_AFTER"] = "InvokedAfter";
    SessionFilterKey["INVOKED_BEFORE"] = "InvokedBefore";
    SessionFilterKey["OWNER"] = "Owner";
    SessionFilterKey["SESSION_ID"] = "SessionId";
    SessionFilterKey["STATUS"] = "Status";
    SessionFilterKey["TARGET_ID"] = "Target";
})(SessionFilterKey = exports.SessionFilterKey || (exports.SessionFilterKey = {}));
var SessionFilter;
(function (SessionFilter) {
    /**
     * @internal
     */
    SessionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SessionFilter = exports.SessionFilter || (exports.SessionFilter = {}));
var SessionState;
(function (SessionState) {
    SessionState["ACTIVE"] = "Active";
    SessionState["HISTORY"] = "History";
})(SessionState = exports.SessionState || (exports.SessionState = {}));
var DescribeSessionsRequest;
(function (DescribeSessionsRequest) {
    /**
     * @internal
     */
    DescribeSessionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSessionsRequest = exports.DescribeSessionsRequest || (exports.DescribeSessionsRequest = {}));
var SessionManagerOutputUrl;
(function (SessionManagerOutputUrl) {
    /**
     * @internal
     */
    SessionManagerOutputUrl.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SessionManagerOutputUrl = exports.SessionManagerOutputUrl || (exports.SessionManagerOutputUrl = {}));
var SessionStatus;
(function (SessionStatus) {
    SessionStatus["CONNECTED"] = "Connected";
    SessionStatus["CONNECTING"] = "Connecting";
    SessionStatus["DISCONNECTED"] = "Disconnected";
    SessionStatus["FAILED"] = "Failed";
    SessionStatus["TERMINATED"] = "Terminated";
    SessionStatus["TERMINATING"] = "Terminating";
})(SessionStatus = exports.SessionStatus || (exports.SessionStatus = {}));
var Session;
(function (Session) {
    /**
     * @internal
     */
    Session.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Session = exports.Session || (exports.Session = {}));
var DescribeSessionsResponse;
(function (DescribeSessionsResponse) {
    /**
     * @internal
     */
    DescribeSessionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSessionsResponse = exports.DescribeSessionsResponse || (exports.DescribeSessionsResponse = {}));
var DisassociateOpsItemRelatedItemRequest;
(function (DisassociateOpsItemRelatedItemRequest) {
    /**
     * @internal
     */
    DisassociateOpsItemRelatedItemRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateOpsItemRelatedItemRequest = exports.DisassociateOpsItemRelatedItemRequest || (exports.DisassociateOpsItemRelatedItemRequest = {}));
var DisassociateOpsItemRelatedItemResponse;
(function (DisassociateOpsItemRelatedItemResponse) {
    /**
     * @internal
     */
    DisassociateOpsItemRelatedItemResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateOpsItemRelatedItemResponse = exports.DisassociateOpsItemRelatedItemResponse || (exports.DisassociateOpsItemRelatedItemResponse = {}));
var OpsItemRelatedItemAssociationNotFoundException;
(function (OpsItemRelatedItemAssociationNotFoundException) {
    /**
     * @internal
     */
    OpsItemRelatedItemAssociationNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItemRelatedItemAssociationNotFoundException = exports.OpsItemRelatedItemAssociationNotFoundException || (exports.OpsItemRelatedItemAssociationNotFoundException = {}));
var GetAutomationExecutionRequest;
(function (GetAutomationExecutionRequest) {
    /**
     * @internal
     */
    GetAutomationExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAutomationExecutionRequest = exports.GetAutomationExecutionRequest || (exports.GetAutomationExecutionRequest = {}));
var ProgressCounters;
(function (ProgressCounters) {
    /**
     * @internal
     */
    ProgressCounters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProgressCounters = exports.ProgressCounters || (exports.ProgressCounters = {}));
var AutomationExecution;
(function (AutomationExecution) {
    /**
     * @internal
     */
    AutomationExecution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomationExecution = exports.AutomationExecution || (exports.AutomationExecution = {}));
var GetAutomationExecutionResult;
(function (GetAutomationExecutionResult) {
    /**
     * @internal
     */
    GetAutomationExecutionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAutomationExecutionResult = exports.GetAutomationExecutionResult || (exports.GetAutomationExecutionResult = {}));
var GetCalendarStateRequest;
(function (GetCalendarStateRequest) {
    /**
     * @internal
     */
    GetCalendarStateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCalendarStateRequest = exports.GetCalendarStateRequest || (exports.GetCalendarStateRequest = {}));
var CalendarState;
(function (CalendarState) {
    CalendarState["CLOSED"] = "CLOSED";
    CalendarState["OPEN"] = "OPEN";
})(CalendarState = exports.CalendarState || (exports.CalendarState = {}));
var GetCalendarStateResponse;
(function (GetCalendarStateResponse) {
    /**
     * @internal
     */
    GetCalendarStateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCalendarStateResponse = exports.GetCalendarStateResponse || (exports.GetCalendarStateResponse = {}));
var InvalidDocumentType;
(function (InvalidDocumentType) {
    /**
     * @internal
     */
    InvalidDocumentType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDocumentType = exports.InvalidDocumentType || (exports.InvalidDocumentType = {}));
var UnsupportedCalendarException;
(function (UnsupportedCalendarException) {
    /**
     * @internal
     */
    UnsupportedCalendarException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedCalendarException = exports.UnsupportedCalendarException || (exports.UnsupportedCalendarException = {}));
var GetCommandInvocationRequest;
(function (GetCommandInvocationRequest) {
    /**
     * @internal
     */
    GetCommandInvocationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCommandInvocationRequest = exports.GetCommandInvocationRequest || (exports.GetCommandInvocationRequest = {}));
var CloudWatchOutputConfig;
(function (CloudWatchOutputConfig) {
    /**
     * @internal
     */
    CloudWatchOutputConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchOutputConfig = exports.CloudWatchOutputConfig || (exports.CloudWatchOutputConfig = {}));
var CommandInvocationStatus;
(function (CommandInvocationStatus) {
    CommandInvocationStatus["CANCELLED"] = "Cancelled";
    CommandInvocationStatus["CANCELLING"] = "Cancelling";
    CommandInvocationStatus["DELAYED"] = "Delayed";
    CommandInvocationStatus["FAILED"] = "Failed";
    CommandInvocationStatus["IN_PROGRESS"] = "InProgress";
    CommandInvocationStatus["PENDING"] = "Pending";
    CommandInvocationStatus["SUCCESS"] = "Success";
    CommandInvocationStatus["TIMED_OUT"] = "TimedOut";
})(CommandInvocationStatus = exports.CommandInvocationStatus || (exports.CommandInvocationStatus = {}));
var GetCommandInvocationResult;
(function (GetCommandInvocationResult) {
    /**
     * @internal
     */
    GetCommandInvocationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCommandInvocationResult = exports.GetCommandInvocationResult || (exports.GetCommandInvocationResult = {}));
var InvalidPluginName;
(function (InvalidPluginName) {
    /**
     * @internal
     */
    InvalidPluginName.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPluginName = exports.InvalidPluginName || (exports.InvalidPluginName = {}));
var InvocationDoesNotExist;
(function (InvocationDoesNotExist) {
    /**
     * @internal
     */
    InvocationDoesNotExist.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvocationDoesNotExist = exports.InvocationDoesNotExist || (exports.InvocationDoesNotExist = {}));
var GetConnectionStatusRequest;
(function (GetConnectionStatusRequest) {
    /**
     * @internal
     */
    GetConnectionStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectionStatusRequest = exports.GetConnectionStatusRequest || (exports.GetConnectionStatusRequest = {}));
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["CONNECTED"] = "Connected";
    ConnectionStatus["NOT_CONNECTED"] = "NotConnected";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));
var GetConnectionStatusResponse;
(function (GetConnectionStatusResponse) {
    /**
     * @internal
     */
    GetConnectionStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectionStatusResponse = exports.GetConnectionStatusResponse || (exports.GetConnectionStatusResponse = {}));
var GetDefaultPatchBaselineRequest;
(function (GetDefaultPatchBaselineRequest) {
    /**
     * @internal
     */
    GetDefaultPatchBaselineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDefaultPatchBaselineRequest = exports.GetDefaultPatchBaselineRequest || (exports.GetDefaultPatchBaselineRequest = {}));
var GetDefaultPatchBaselineResult;
(function (GetDefaultPatchBaselineResult) {
    /**
     * @internal
     */
    GetDefaultPatchBaselineResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDefaultPatchBaselineResult = exports.GetDefaultPatchBaselineResult || (exports.GetDefaultPatchBaselineResult = {}));
var BaselineOverride;
(function (BaselineOverride) {
    /**
     * @internal
     */
    BaselineOverride.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Sources && { Sources: obj.Sources.map((item) => models_0_1.PatchSource.filterSensitiveLog(item)) }),
    });
})(BaselineOverride = exports.BaselineOverride || (exports.BaselineOverride = {}));
var GetDeployablePatchSnapshotForInstanceRequest;
(function (GetDeployablePatchSnapshotForInstanceRequest) {
    /**
     * @internal
     */
    GetDeployablePatchSnapshotForInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeployablePatchSnapshotForInstanceRequest = exports.GetDeployablePatchSnapshotForInstanceRequest || (exports.GetDeployablePatchSnapshotForInstanceRequest = {}));
var GetDeployablePatchSnapshotForInstanceResult;
(function (GetDeployablePatchSnapshotForInstanceResult) {
    /**
     * @internal
     */
    GetDeployablePatchSnapshotForInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeployablePatchSnapshotForInstanceResult = exports.GetDeployablePatchSnapshotForInstanceResult || (exports.GetDeployablePatchSnapshotForInstanceResult = {}));
var UnsupportedFeatureRequiredException;
(function (UnsupportedFeatureRequiredException) {
    /**
     * @internal
     */
    UnsupportedFeatureRequiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedFeatureRequiredException = exports.UnsupportedFeatureRequiredException || (exports.UnsupportedFeatureRequiredException = {}));
var GetDocumentRequest;
(function (GetDocumentRequest) {
    /**
     * @internal
     */
    GetDocumentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDocumentRequest = exports.GetDocumentRequest || (exports.GetDocumentRequest = {}));
var AttachmentHashType;
(function (AttachmentHashType) {
    AttachmentHashType["SHA256"] = "Sha256";
})(AttachmentHashType = exports.AttachmentHashType || (exports.AttachmentHashType = {}));
var AttachmentContent;
(function (AttachmentContent) {
    /**
     * @internal
     */
    AttachmentContent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachmentContent = exports.AttachmentContent || (exports.AttachmentContent = {}));
var GetDocumentResult;
(function (GetDocumentResult) {
    /**
     * @internal
     */
    GetDocumentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDocumentResult = exports.GetDocumentResult || (exports.GetDocumentResult = {}));
var InventoryQueryOperatorType;
(function (InventoryQueryOperatorType) {
    InventoryQueryOperatorType["BEGIN_WITH"] = "BeginWith";
    InventoryQueryOperatorType["EQUAL"] = "Equal";
    InventoryQueryOperatorType["EXISTS"] = "Exists";
    InventoryQueryOperatorType["GREATER_THAN"] = "GreaterThan";
    InventoryQueryOperatorType["LESS_THAN"] = "LessThan";
    InventoryQueryOperatorType["NOT_EQUAL"] = "NotEqual";
})(InventoryQueryOperatorType = exports.InventoryQueryOperatorType || (exports.InventoryQueryOperatorType = {}));
var InventoryFilter;
(function (InventoryFilter) {
    /**
     * @internal
     */
    InventoryFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventoryFilter = exports.InventoryFilter || (exports.InventoryFilter = {}));
var InventoryGroup;
(function (InventoryGroup) {
    /**
     * @internal
     */
    InventoryGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventoryGroup = exports.InventoryGroup || (exports.InventoryGroup = {}));
var ResultAttribute;
(function (ResultAttribute) {
    /**
     * @internal
     */
    ResultAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResultAttribute = exports.ResultAttribute || (exports.ResultAttribute = {}));
var InventoryResultItem;
(function (InventoryResultItem) {
    /**
     * @internal
     */
    InventoryResultItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventoryResultItem = exports.InventoryResultItem || (exports.InventoryResultItem = {}));
var InventoryResultEntity;
(function (InventoryResultEntity) {
    /**
     * @internal
     */
    InventoryResultEntity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventoryResultEntity = exports.InventoryResultEntity || (exports.InventoryResultEntity = {}));
var GetInventoryResult;
(function (GetInventoryResult) {
    /**
     * @internal
     */
    GetInventoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInventoryResult = exports.GetInventoryResult || (exports.GetInventoryResult = {}));
var InvalidAggregatorException;
(function (InvalidAggregatorException) {
    /**
     * @internal
     */
    InvalidAggregatorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAggregatorException = exports.InvalidAggregatorException || (exports.InvalidAggregatorException = {}));
var InvalidInventoryGroupException;
(function (InvalidInventoryGroupException) {
    /**
     * @internal
     */
    InvalidInventoryGroupException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInventoryGroupException = exports.InvalidInventoryGroupException || (exports.InvalidInventoryGroupException = {}));
var InvalidResultAttributeException;
(function (InvalidResultAttributeException) {
    /**
     * @internal
     */
    InvalidResultAttributeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidResultAttributeException = exports.InvalidResultAttributeException || (exports.InvalidResultAttributeException = {}));
var GetInventorySchemaRequest;
(function (GetInventorySchemaRequest) {
    /**
     * @internal
     */
    GetInventorySchemaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInventorySchemaRequest = exports.GetInventorySchemaRequest || (exports.GetInventorySchemaRequest = {}));
var InventoryAttributeDataType;
(function (InventoryAttributeDataType) {
    InventoryAttributeDataType["NUMBER"] = "number";
    InventoryAttributeDataType["STRING"] = "string";
})(InventoryAttributeDataType = exports.InventoryAttributeDataType || (exports.InventoryAttributeDataType = {}));
var InventoryItemAttribute;
(function (InventoryItemAttribute) {
    /**
     * @internal
     */
    InventoryItemAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventoryItemAttribute = exports.InventoryItemAttribute || (exports.InventoryItemAttribute = {}));
var InventoryItemSchema;
(function (InventoryItemSchema) {
    /**
     * @internal
     */
    InventoryItemSchema.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventoryItemSchema = exports.InventoryItemSchema || (exports.InventoryItemSchema = {}));
var GetInventorySchemaResult;
(function (GetInventorySchemaResult) {
    /**
     * @internal
     */
    GetInventorySchemaResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInventorySchemaResult = exports.GetInventorySchemaResult || (exports.GetInventorySchemaResult = {}));
var GetMaintenanceWindowRequest;
(function (GetMaintenanceWindowRequest) {
    /**
     * @internal
     */
    GetMaintenanceWindowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMaintenanceWindowRequest = exports.GetMaintenanceWindowRequest || (exports.GetMaintenanceWindowRequest = {}));
var GetMaintenanceWindowResult;
(function (GetMaintenanceWindowResult) {
    /**
     * @internal
     */
    GetMaintenanceWindowResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetMaintenanceWindowResult = exports.GetMaintenanceWindowResult || (exports.GetMaintenanceWindowResult = {}));
var GetMaintenanceWindowExecutionRequest;
(function (GetMaintenanceWindowExecutionRequest) {
    /**
     * @internal
     */
    GetMaintenanceWindowExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMaintenanceWindowExecutionRequest = exports.GetMaintenanceWindowExecutionRequest || (exports.GetMaintenanceWindowExecutionRequest = {}));
var GetMaintenanceWindowExecutionResult;
(function (GetMaintenanceWindowExecutionResult) {
    /**
     * @internal
     */
    GetMaintenanceWindowExecutionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMaintenanceWindowExecutionResult = exports.GetMaintenanceWindowExecutionResult || (exports.GetMaintenanceWindowExecutionResult = {}));
var GetMaintenanceWindowExecutionTaskRequest;
(function (GetMaintenanceWindowExecutionTaskRequest) {
    /**
     * @internal
     */
    GetMaintenanceWindowExecutionTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMaintenanceWindowExecutionTaskRequest = exports.GetMaintenanceWindowExecutionTaskRequest || (exports.GetMaintenanceWindowExecutionTaskRequest = {}));
var GetMaintenanceWindowExecutionTaskResult;
(function (GetMaintenanceWindowExecutionTaskResult) {
    /**
     * @internal
     */
    GetMaintenanceWindowExecutionTaskResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TaskParameters && { TaskParameters: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetMaintenanceWindowExecutionTaskResult = exports.GetMaintenanceWindowExecutionTaskResult || (exports.GetMaintenanceWindowExecutionTaskResult = {}));
var GetMaintenanceWindowExecutionTaskInvocationRequest;
(function (GetMaintenanceWindowExecutionTaskInvocationRequest) {
    /**
     * @internal
     */
    GetMaintenanceWindowExecutionTaskInvocationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMaintenanceWindowExecutionTaskInvocationRequest = exports.GetMaintenanceWindowExecutionTaskInvocationRequest || (exports.GetMaintenanceWindowExecutionTaskInvocationRequest = {}));
var GetMaintenanceWindowExecutionTaskInvocationResult;
(function (GetMaintenanceWindowExecutionTaskInvocationResult) {
    /**
     * @internal
     */
    GetMaintenanceWindowExecutionTaskInvocationResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Parameters && { Parameters: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.OwnerInformation && { OwnerInformation: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetMaintenanceWindowExecutionTaskInvocationResult = exports.GetMaintenanceWindowExecutionTaskInvocationResult || (exports.GetMaintenanceWindowExecutionTaskInvocationResult = {}));
var GetMaintenanceWindowTaskRequest;
(function (GetMaintenanceWindowTaskRequest) {
    /**
     * @internal
     */
    GetMaintenanceWindowTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMaintenanceWindowTaskRequest = exports.GetMaintenanceWindowTaskRequest || (exports.GetMaintenanceWindowTaskRequest = {}));
var MaintenanceWindowAutomationParameters;
(function (MaintenanceWindowAutomationParameters) {
    /**
     * @internal
     */
    MaintenanceWindowAutomationParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaintenanceWindowAutomationParameters = exports.MaintenanceWindowAutomationParameters || (exports.MaintenanceWindowAutomationParameters = {}));
var MaintenanceWindowLambdaParameters;
(function (MaintenanceWindowLambdaParameters) {
    /**
     * @internal
     */
    MaintenanceWindowLambdaParameters.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Payload && { Payload: smithy_client_1.SENSITIVE_STRING }),
    });
})(MaintenanceWindowLambdaParameters = exports.MaintenanceWindowLambdaParameters || (exports.MaintenanceWindowLambdaParameters = {}));
var NotificationEvent;
(function (NotificationEvent) {
    NotificationEvent["ALL"] = "All";
    NotificationEvent["CANCELLED"] = "Cancelled";
    NotificationEvent["FAILED"] = "Failed";
    NotificationEvent["IN_PROGRESS"] = "InProgress";
    NotificationEvent["SUCCESS"] = "Success";
    NotificationEvent["TIMED_OUT"] = "TimedOut";
})(NotificationEvent = exports.NotificationEvent || (exports.NotificationEvent = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["Command"] = "Command";
    NotificationType["Invocation"] = "Invocation";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
var NotificationConfig;
(function (NotificationConfig) {
    /**
     * @internal
     */
    NotificationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationConfig = exports.NotificationConfig || (exports.NotificationConfig = {}));
var MaintenanceWindowRunCommandParameters;
(function (MaintenanceWindowRunCommandParameters) {
    /**
     * @internal
     */
    MaintenanceWindowRunCommandParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaintenanceWindowRunCommandParameters = exports.MaintenanceWindowRunCommandParameters || (exports.MaintenanceWindowRunCommandParameters = {}));
var MaintenanceWindowStepFunctionsParameters;
(function (MaintenanceWindowStepFunctionsParameters) {
    /**
     * @internal
     */
    MaintenanceWindowStepFunctionsParameters.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Input && { Input: smithy_client_1.SENSITIVE_STRING }),
    });
})(MaintenanceWindowStepFunctionsParameters = exports.MaintenanceWindowStepFunctionsParameters || (exports.MaintenanceWindowStepFunctionsParameters = {}));
var MaintenanceWindowTaskInvocationParameters;
(function (MaintenanceWindowTaskInvocationParameters) {
    /**
     * @internal
     */
    MaintenanceWindowTaskInvocationParameters.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.StepFunctions && {
            StepFunctions: MaintenanceWindowStepFunctionsParameters.filterSensitiveLog(obj.StepFunctions),
        }),
        ...(obj.Lambda && { Lambda: MaintenanceWindowLambdaParameters.filterSensitiveLog(obj.Lambda) }),
    });
})(MaintenanceWindowTaskInvocationParameters = exports.MaintenanceWindowTaskInvocationParameters || (exports.MaintenanceWindowTaskInvocationParameters = {}));
var GetMaintenanceWindowTaskResult;
(function (GetMaintenanceWindowTaskResult) {
    /**
     * @internal
     */
    GetMaintenanceWindowTaskResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TaskParameters && { TaskParameters: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.TaskInvocationParameters && {
            TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(obj.TaskInvocationParameters),
        }),
        ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetMaintenanceWindowTaskResult = exports.GetMaintenanceWindowTaskResult || (exports.GetMaintenanceWindowTaskResult = {}));
var GetOpsItemRequest;
(function (GetOpsItemRequest) {
    /**
     * @internal
     */
    GetOpsItemRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOpsItemRequest = exports.GetOpsItemRequest || (exports.GetOpsItemRequest = {}));
var OpsItem;
(function (OpsItem) {
    /**
     * @internal
     */
    OpsItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItem = exports.OpsItem || (exports.OpsItem = {}));
var GetOpsItemResponse;
(function (GetOpsItemResponse) {
    /**
     * @internal
     */
    GetOpsItemResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOpsItemResponse = exports.GetOpsItemResponse || (exports.GetOpsItemResponse = {}));
var GetOpsMetadataRequest;
(function (GetOpsMetadataRequest) {
    /**
     * @internal
     */
    GetOpsMetadataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOpsMetadataRequest = exports.GetOpsMetadataRequest || (exports.GetOpsMetadataRequest = {}));
var GetOpsMetadataResult;
(function (GetOpsMetadataResult) {
    /**
     * @internal
     */
    GetOpsMetadataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOpsMetadataResult = exports.GetOpsMetadataResult || (exports.GetOpsMetadataResult = {}));
var OpsFilterOperatorType;
(function (OpsFilterOperatorType) {
    OpsFilterOperatorType["BEGIN_WITH"] = "BeginWith";
    OpsFilterOperatorType["EQUAL"] = "Equal";
    OpsFilterOperatorType["EXISTS"] = "Exists";
    OpsFilterOperatorType["GREATER_THAN"] = "GreaterThan";
    OpsFilterOperatorType["LESS_THAN"] = "LessThan";
    OpsFilterOperatorType["NOT_EQUAL"] = "NotEqual";
})(OpsFilterOperatorType = exports.OpsFilterOperatorType || (exports.OpsFilterOperatorType = {}));
var OpsFilter;
(function (OpsFilter) {
    /**
     * @internal
     */
    OpsFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsFilter = exports.OpsFilter || (exports.OpsFilter = {}));
var OpsResultAttribute;
(function (OpsResultAttribute) {
    /**
     * @internal
     */
    OpsResultAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsResultAttribute = exports.OpsResultAttribute || (exports.OpsResultAttribute = {}));
var OpsEntityItem;
(function (OpsEntityItem) {
    /**
     * @internal
     */
    OpsEntityItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsEntityItem = exports.OpsEntityItem || (exports.OpsEntityItem = {}));
var OpsEntity;
(function (OpsEntity) {
    /**
     * @internal
     */
    OpsEntity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsEntity = exports.OpsEntity || (exports.OpsEntity = {}));
var GetOpsSummaryResult;
(function (GetOpsSummaryResult) {
    /**
     * @internal
     */
    GetOpsSummaryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOpsSummaryResult = exports.GetOpsSummaryResult || (exports.GetOpsSummaryResult = {}));
var GetParameterRequest;
(function (GetParameterRequest) {
    /**
     * @internal
     */
    GetParameterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetParameterRequest = exports.GetParameterRequest || (exports.GetParameterRequest = {}));
var Parameter;
(function (Parameter) {
    /**
     * @internal
     */
    Parameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Parameter = exports.Parameter || (exports.Parameter = {}));
var GetParameterResult;
(function (GetParameterResult) {
    /**
     * @internal
     */
    GetParameterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetParameterResult = exports.GetParameterResult || (exports.GetParameterResult = {}));
var InvalidKeyId;
(function (InvalidKeyId) {
    /**
     * @internal
     */
    InvalidKeyId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidKeyId = exports.InvalidKeyId || (exports.InvalidKeyId = {}));
var ParameterVersionNotFound;
(function (ParameterVersionNotFound) {
    /**
     * @internal
     */
    ParameterVersionNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterVersionNotFound = exports.ParameterVersionNotFound || (exports.ParameterVersionNotFound = {}));
var GetParameterHistoryRequest;
(function (GetParameterHistoryRequest) {
    /**
     * @internal
     */
    GetParameterHistoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetParameterHistoryRequest = exports.GetParameterHistoryRequest || (exports.GetParameterHistoryRequest = {}));
var ParameterHistory;
(function (ParameterHistory) {
    /**
     * @internal
     */
    ParameterHistory.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterHistory = exports.ParameterHistory || (exports.ParameterHistory = {}));
var GetParameterHistoryResult;
(function (GetParameterHistoryResult) {
    /**
     * @internal
     */
    GetParameterHistoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetParameterHistoryResult = exports.GetParameterHistoryResult || (exports.GetParameterHistoryResult = {}));
var GetParametersRequest;
(function (GetParametersRequest) {
    /**
     * @internal
     */
    GetParametersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetParametersRequest = exports.GetParametersRequest || (exports.GetParametersRequest = {}));
var GetParametersResult;
(function (GetParametersResult) {
    /**
     * @internal
     */
    GetParametersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetParametersResult = exports.GetParametersResult || (exports.GetParametersResult = {}));
var GetParametersByPathRequest;
(function (GetParametersByPathRequest) {
    /**
     * @internal
     */
    GetParametersByPathRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetParametersByPathRequest = exports.GetParametersByPathRequest || (exports.GetParametersByPathRequest = {}));
var GetParametersByPathResult;
(function (GetParametersByPathResult) {
    /**
     * @internal
     */
    GetParametersByPathResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetParametersByPathResult = exports.GetParametersByPathResult || (exports.GetParametersByPathResult = {}));
var GetPatchBaselineRequest;
(function (GetPatchBaselineRequest) {
    /**
     * @internal
     */
    GetPatchBaselineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPatchBaselineRequest = exports.GetPatchBaselineRequest || (exports.GetPatchBaselineRequest = {}));
var GetPatchBaselineResult;
(function (GetPatchBaselineResult) {
    /**
     * @internal
     */
    GetPatchBaselineResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Sources && { Sources: obj.Sources.map((item) => models_0_1.PatchSource.filterSensitiveLog(item)) }),
    });
})(GetPatchBaselineResult = exports.GetPatchBaselineResult || (exports.GetPatchBaselineResult = {}));
var GetPatchBaselineForPatchGroupRequest;
(function (GetPatchBaselineForPatchGroupRequest) {
    /**
     * @internal
     */
    GetPatchBaselineForPatchGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPatchBaselineForPatchGroupRequest = exports.GetPatchBaselineForPatchGroupRequest || (exports.GetPatchBaselineForPatchGroupRequest = {}));
var GetPatchBaselineForPatchGroupResult;
(function (GetPatchBaselineForPatchGroupResult) {
    /**
     * @internal
     */
    GetPatchBaselineForPatchGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPatchBaselineForPatchGroupResult = exports.GetPatchBaselineForPatchGroupResult || (exports.GetPatchBaselineForPatchGroupResult = {}));
var GetServiceSettingRequest;
(function (GetServiceSettingRequest) {
    /**
     * @internal
     */
    GetServiceSettingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceSettingRequest = exports.GetServiceSettingRequest || (exports.GetServiceSettingRequest = {}));
var ServiceSetting;
(function (ServiceSetting) {
    /**
     * @internal
     */
    ServiceSetting.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceSetting = exports.ServiceSetting || (exports.ServiceSetting = {}));
var GetServiceSettingResult;
(function (GetServiceSettingResult) {
    /**
     * @internal
     */
    GetServiceSettingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceSettingResult = exports.GetServiceSettingResult || (exports.GetServiceSettingResult = {}));
var ServiceSettingNotFound;
(function (ServiceSettingNotFound) {
    /**
     * @internal
     */
    ServiceSettingNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceSettingNotFound = exports.ServiceSettingNotFound || (exports.ServiceSettingNotFound = {}));
var LabelParameterVersionRequest;
(function (LabelParameterVersionRequest) {
    /**
     * @internal
     */
    LabelParameterVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelParameterVersionRequest = exports.LabelParameterVersionRequest || (exports.LabelParameterVersionRequest = {}));
var LabelParameterVersionResult;
(function (LabelParameterVersionResult) {
    /**
     * @internal
     */
    LabelParameterVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelParameterVersionResult = exports.LabelParameterVersionResult || (exports.LabelParameterVersionResult = {}));
var ParameterVersionLabelLimitExceeded;
(function (ParameterVersionLabelLimitExceeded) {
    /**
     * @internal
     */
    ParameterVersionLabelLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterVersionLabelLimitExceeded = exports.ParameterVersionLabelLimitExceeded || (exports.ParameterVersionLabelLimitExceeded = {}));
var AssociationFilterKey;
(function (AssociationFilterKey) {
    AssociationFilterKey["AssociationId"] = "AssociationId";
    AssociationFilterKey["AssociationName"] = "AssociationName";
    AssociationFilterKey["InstanceId"] = "InstanceId";
    AssociationFilterKey["LastExecutedAfter"] = "LastExecutedAfter";
    AssociationFilterKey["LastExecutedBefore"] = "LastExecutedBefore";
    AssociationFilterKey["Name"] = "Name";
    AssociationFilterKey["ResourceGroupName"] = "ResourceGroupName";
    AssociationFilterKey["Status"] = "AssociationStatusName";
})(AssociationFilterKey = exports.AssociationFilterKey || (exports.AssociationFilterKey = {}));
var AssociationFilter;
(function (AssociationFilter) {
    /**
     * @internal
     */
    AssociationFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationFilter = exports.AssociationFilter || (exports.AssociationFilter = {}));
var ListAssociationsRequest;
(function (ListAssociationsRequest) {
    /**
     * @internal
     */
    ListAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociationsRequest = exports.ListAssociationsRequest || (exports.ListAssociationsRequest = {}));
var Association;
(function (Association) {
    /**
     * @internal
     */
    Association.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Association = exports.Association || (exports.Association = {}));
var ListAssociationsResult;
(function (ListAssociationsResult) {
    /**
     * @internal
     */
    ListAssociationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociationsResult = exports.ListAssociationsResult || (exports.ListAssociationsResult = {}));
var ListAssociationVersionsRequest;
(function (ListAssociationVersionsRequest) {
    /**
     * @internal
     */
    ListAssociationVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociationVersionsRequest = exports.ListAssociationVersionsRequest || (exports.ListAssociationVersionsRequest = {}));
var AssociationVersionInfo;
(function (AssociationVersionInfo) {
    /**
     * @internal
     */
    AssociationVersionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationVersionInfo = exports.AssociationVersionInfo || (exports.AssociationVersionInfo = {}));
var ListAssociationVersionsResult;
(function (ListAssociationVersionsResult) {
    /**
     * @internal
     */
    ListAssociationVersionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociationVersionsResult = exports.ListAssociationVersionsResult || (exports.ListAssociationVersionsResult = {}));
var CommandFilterKey;
(function (CommandFilterKey) {
    CommandFilterKey["DOCUMENT_NAME"] = "DocumentName";
    CommandFilterKey["EXECUTION_STAGE"] = "ExecutionStage";
    CommandFilterKey["INVOKED_AFTER"] = "InvokedAfter";
    CommandFilterKey["INVOKED_BEFORE"] = "InvokedBefore";
    CommandFilterKey["STATUS"] = "Status";
})(CommandFilterKey = exports.CommandFilterKey || (exports.CommandFilterKey = {}));
var CommandFilter;
(function (CommandFilter) {
    /**
     * @internal
     */
    CommandFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommandFilter = exports.CommandFilter || (exports.CommandFilter = {}));
var ListCommandInvocationsRequest;
(function (ListCommandInvocationsRequest) {
    /**
     * @internal
     */
    ListCommandInvocationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCommandInvocationsRequest = exports.ListCommandInvocationsRequest || (exports.ListCommandInvocationsRequest = {}));
var CommandPluginStatus;
(function (CommandPluginStatus) {
    CommandPluginStatus["CANCELLED"] = "Cancelled";
    CommandPluginStatus["FAILED"] = "Failed";
    CommandPluginStatus["IN_PROGRESS"] = "InProgress";
    CommandPluginStatus["PENDING"] = "Pending";
    CommandPluginStatus["SUCCESS"] = "Success";
    CommandPluginStatus["TIMED_OUT"] = "TimedOut";
})(CommandPluginStatus = exports.CommandPluginStatus || (exports.CommandPluginStatus = {}));
var CommandPlugin;
(function (CommandPlugin) {
    /**
     * @internal
     */
    CommandPlugin.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommandPlugin = exports.CommandPlugin || (exports.CommandPlugin = {}));
var CommandInvocation;
(function (CommandInvocation) {
    /**
     * @internal
     */
    CommandInvocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommandInvocation = exports.CommandInvocation || (exports.CommandInvocation = {}));
var ListCommandInvocationsResult;
(function (ListCommandInvocationsResult) {
    /**
     * @internal
     */
    ListCommandInvocationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCommandInvocationsResult = exports.ListCommandInvocationsResult || (exports.ListCommandInvocationsResult = {}));
var ListCommandsRequest;
(function (ListCommandsRequest) {
    /**
     * @internal
     */
    ListCommandsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCommandsRequest = exports.ListCommandsRequest || (exports.ListCommandsRequest = {}));
var CommandStatus;
(function (CommandStatus) {
    CommandStatus["CANCELLED"] = "Cancelled";
    CommandStatus["CANCELLING"] = "Cancelling";
    CommandStatus["FAILED"] = "Failed";
    CommandStatus["IN_PROGRESS"] = "InProgress";
    CommandStatus["PENDING"] = "Pending";
    CommandStatus["SUCCESS"] = "Success";
    CommandStatus["TIMED_OUT"] = "TimedOut";
})(CommandStatus = exports.CommandStatus || (exports.CommandStatus = {}));
var Command;
(function (Command) {
    /**
     * @internal
     */
    Command.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Command = exports.Command || (exports.Command = {}));
var ListCommandsResult;
(function (ListCommandsResult) {
    /**
     * @internal
     */
    ListCommandsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCommandsResult = exports.ListCommandsResult || (exports.ListCommandsResult = {}));
var ComplianceQueryOperatorType;
(function (ComplianceQueryOperatorType) {
    ComplianceQueryOperatorType["BeginWith"] = "BEGIN_WITH";
    ComplianceQueryOperatorType["Equal"] = "EQUAL";
    ComplianceQueryOperatorType["GreaterThan"] = "GREATER_THAN";
    ComplianceQueryOperatorType["LessThan"] = "LESS_THAN";
    ComplianceQueryOperatorType["NotEqual"] = "NOT_EQUAL";
})(ComplianceQueryOperatorType = exports.ComplianceQueryOperatorType || (exports.ComplianceQueryOperatorType = {}));
var ComplianceStringFilter;
(function (ComplianceStringFilter) {
    /**
     * @internal
     */
    ComplianceStringFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComplianceStringFilter = exports.ComplianceStringFilter || (exports.ComplianceStringFilter = {}));
var ListComplianceItemsRequest;
(function (ListComplianceItemsRequest) {
    /**
     * @internal
     */
    ListComplianceItemsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListComplianceItemsRequest = exports.ListComplianceItemsRequest || (exports.ListComplianceItemsRequest = {}));
var ComplianceExecutionSummary;
(function (ComplianceExecutionSummary) {
    /**
     * @internal
     */
    ComplianceExecutionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComplianceExecutionSummary = exports.ComplianceExecutionSummary || (exports.ComplianceExecutionSummary = {}));
var ComplianceSeverity;
(function (ComplianceSeverity) {
    ComplianceSeverity["Critical"] = "CRITICAL";
    ComplianceSeverity["High"] = "HIGH";
    ComplianceSeverity["Informational"] = "INFORMATIONAL";
    ComplianceSeverity["Low"] = "LOW";
    ComplianceSeverity["Medium"] = "MEDIUM";
    ComplianceSeverity["Unspecified"] = "UNSPECIFIED";
})(ComplianceSeverity = exports.ComplianceSeverity || (exports.ComplianceSeverity = {}));
var ComplianceStatus;
(function (ComplianceStatus) {
    ComplianceStatus["Compliant"] = "COMPLIANT";
    ComplianceStatus["NonCompliant"] = "NON_COMPLIANT";
})(ComplianceStatus = exports.ComplianceStatus || (exports.ComplianceStatus = {}));
var ComplianceItem;
(function (ComplianceItem) {
    /**
     * @internal
     */
    ComplianceItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComplianceItem = exports.ComplianceItem || (exports.ComplianceItem = {}));
var ListComplianceItemsResult;
(function (ListComplianceItemsResult) {
    /**
     * @internal
     */
    ListComplianceItemsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListComplianceItemsResult = exports.ListComplianceItemsResult || (exports.ListComplianceItemsResult = {}));
var ListComplianceSummariesRequest;
(function (ListComplianceSummariesRequest) {
    /**
     * @internal
     */
    ListComplianceSummariesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListComplianceSummariesRequest = exports.ListComplianceSummariesRequest || (exports.ListComplianceSummariesRequest = {}));
var SeveritySummary;
(function (SeveritySummary) {
    /**
     * @internal
     */
    SeveritySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SeveritySummary = exports.SeveritySummary || (exports.SeveritySummary = {}));
var CompliantSummary;
(function (CompliantSummary) {
    /**
     * @internal
     */
    CompliantSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompliantSummary = exports.CompliantSummary || (exports.CompliantSummary = {}));
var NonCompliantSummary;
(function (NonCompliantSummary) {
    /**
     * @internal
     */
    NonCompliantSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NonCompliantSummary = exports.NonCompliantSummary || (exports.NonCompliantSummary = {}));
var ComplianceSummaryItem;
(function (ComplianceSummaryItem) {
    /**
     * @internal
     */
    ComplianceSummaryItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComplianceSummaryItem = exports.ComplianceSummaryItem || (exports.ComplianceSummaryItem = {}));
var ListComplianceSummariesResult;
(function (ListComplianceSummariesResult) {
    /**
     * @internal
     */
    ListComplianceSummariesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListComplianceSummariesResult = exports.ListComplianceSummariesResult || (exports.ListComplianceSummariesResult = {}));
var DocumentMetadataEnum;
(function (DocumentMetadataEnum) {
    DocumentMetadataEnum["DocumentReviews"] = "DocumentReviews";
})(DocumentMetadataEnum = exports.DocumentMetadataEnum || (exports.DocumentMetadataEnum = {}));
var ListDocumentMetadataHistoryRequest;
(function (ListDocumentMetadataHistoryRequest) {
    /**
     * @internal
     */
    ListDocumentMetadataHistoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDocumentMetadataHistoryRequest = exports.ListDocumentMetadataHistoryRequest || (exports.ListDocumentMetadataHistoryRequest = {}));
var DocumentReviewCommentType;
(function (DocumentReviewCommentType) {
    DocumentReviewCommentType["Comment"] = "Comment";
})(DocumentReviewCommentType = exports.DocumentReviewCommentType || (exports.DocumentReviewCommentType = {}));
var DocumentReviewCommentSource;
(function (DocumentReviewCommentSource) {
    /**
     * @internal
     */
    DocumentReviewCommentSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentReviewCommentSource = exports.DocumentReviewCommentSource || (exports.DocumentReviewCommentSource = {}));
var DocumentReviewerResponseSource;
(function (DocumentReviewerResponseSource) {
    /**
     * @internal
     */
    DocumentReviewerResponseSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentReviewerResponseSource = exports.DocumentReviewerResponseSource || (exports.DocumentReviewerResponseSource = {}));
var DocumentMetadataResponseInfo;
(function (DocumentMetadataResponseInfo) {
    /**
     * @internal
     */
    DocumentMetadataResponseInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentMetadataResponseInfo = exports.DocumentMetadataResponseInfo || (exports.DocumentMetadataResponseInfo = {}));
var ListDocumentMetadataHistoryResponse;
(function (ListDocumentMetadataHistoryResponse) {
    /**
     * @internal
     */
    ListDocumentMetadataHistoryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDocumentMetadataHistoryResponse = exports.ListDocumentMetadataHistoryResponse || (exports.ListDocumentMetadataHistoryResponse = {}));
var DocumentFilterKey;
(function (DocumentFilterKey) {
    DocumentFilterKey["DocumentType"] = "DocumentType";
    DocumentFilterKey["Name"] = "Name";
    DocumentFilterKey["Owner"] = "Owner";
    DocumentFilterKey["PlatformTypes"] = "PlatformTypes";
})(DocumentFilterKey = exports.DocumentFilterKey || (exports.DocumentFilterKey = {}));
var DocumentFilter;
(function (DocumentFilter) {
    /**
     * @internal
     */
    DocumentFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentFilter = exports.DocumentFilter || (exports.DocumentFilter = {}));
var DocumentKeyValuesFilter;
(function (DocumentKeyValuesFilter) {
    /**
     * @internal
     */
    DocumentKeyValuesFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentKeyValuesFilter = exports.DocumentKeyValuesFilter || (exports.DocumentKeyValuesFilter = {}));
var ListDocumentsRequest;
(function (ListDocumentsRequest) {
    /**
     * @internal
     */
    ListDocumentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDocumentsRequest = exports.ListDocumentsRequest || (exports.ListDocumentsRequest = {}));
var DocumentIdentifier;
(function (DocumentIdentifier) {
    /**
     * @internal
     */
    DocumentIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentIdentifier = exports.DocumentIdentifier || (exports.DocumentIdentifier = {}));
var ListDocumentsResult;
(function (ListDocumentsResult) {
    /**
     * @internal
     */
    ListDocumentsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDocumentsResult = exports.ListDocumentsResult || (exports.ListDocumentsResult = {}));
var ListDocumentVersionsRequest;
(function (ListDocumentVersionsRequest) {
    /**
     * @internal
     */
    ListDocumentVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDocumentVersionsRequest = exports.ListDocumentVersionsRequest || (exports.ListDocumentVersionsRequest = {}));
var DocumentVersionInfo;
(function (DocumentVersionInfo) {
    /**
     * @internal
     */
    DocumentVersionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentVersionInfo = exports.DocumentVersionInfo || (exports.DocumentVersionInfo = {}));
var ListDocumentVersionsResult;
(function (ListDocumentVersionsResult) {
    /**
     * @internal
     */
    ListDocumentVersionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDocumentVersionsResult = exports.ListDocumentVersionsResult || (exports.ListDocumentVersionsResult = {}));
var ListInventoryEntriesRequest;
(function (ListInventoryEntriesRequest) {
    /**
     * @internal
     */
    ListInventoryEntriesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInventoryEntriesRequest = exports.ListInventoryEntriesRequest || (exports.ListInventoryEntriesRequest = {}));
var ListInventoryEntriesResult;
(function (ListInventoryEntriesResult) {
    /**
     * @internal
     */
    ListInventoryEntriesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInventoryEntriesResult = exports.ListInventoryEntriesResult || (exports.ListInventoryEntriesResult = {}));
var OpsItemEventFilterKey;
(function (OpsItemEventFilterKey) {
    OpsItemEventFilterKey["OPSITEM_ID"] = "OpsItemId";
})(OpsItemEventFilterKey = exports.OpsItemEventFilterKey || (exports.OpsItemEventFilterKey = {}));
var OpsItemEventFilterOperator;
(function (OpsItemEventFilterOperator) {
    OpsItemEventFilterOperator["EQUAL"] = "Equal";
})(OpsItemEventFilterOperator = exports.OpsItemEventFilterOperator || (exports.OpsItemEventFilterOperator = {}));
var OpsItemEventFilter;
(function (OpsItemEventFilter) {
    /**
     * @internal
     */
    OpsItemEventFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItemEventFilter = exports.OpsItemEventFilter || (exports.OpsItemEventFilter = {}));
var ListOpsItemEventsRequest;
(function (ListOpsItemEventsRequest) {
    /**
     * @internal
     */
    ListOpsItemEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOpsItemEventsRequest = exports.ListOpsItemEventsRequest || (exports.ListOpsItemEventsRequest = {}));
var OpsItemIdentity;
(function (OpsItemIdentity) {
    /**
     * @internal
     */
    OpsItemIdentity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItemIdentity = exports.OpsItemIdentity || (exports.OpsItemIdentity = {}));
var OpsItemEventSummary;
(function (OpsItemEventSummary) {
    /**
     * @internal
     */
    OpsItemEventSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItemEventSummary = exports.OpsItemEventSummary || (exports.OpsItemEventSummary = {}));
var ListOpsItemEventsResponse;
(function (ListOpsItemEventsResponse) {
    /**
     * @internal
     */
    ListOpsItemEventsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOpsItemEventsResponse = exports.ListOpsItemEventsResponse || (exports.ListOpsItemEventsResponse = {}));
var OpsItemRelatedItemsFilterKey;
(function (OpsItemRelatedItemsFilterKey) {
    OpsItemRelatedItemsFilterKey["ASSOCIATION_ID"] = "AssociationId";
    OpsItemRelatedItemsFilterKey["RESOURCE_TYPE"] = "ResourceType";
    OpsItemRelatedItemsFilterKey["RESOURCE_URI"] = "ResourceUri";
})(OpsItemRelatedItemsFilterKey = exports.OpsItemRelatedItemsFilterKey || (exports.OpsItemRelatedItemsFilterKey = {}));
var OpsItemRelatedItemsFilterOperator;
(function (OpsItemRelatedItemsFilterOperator) {
    OpsItemRelatedItemsFilterOperator["EQUAL"] = "Equal";
})(OpsItemRelatedItemsFilterOperator = exports.OpsItemRelatedItemsFilterOperator || (exports.OpsItemRelatedItemsFilterOperator = {}));
var OpsItemRelatedItemsFilter;
(function (OpsItemRelatedItemsFilter) {
    /**
     * @internal
     */
    OpsItemRelatedItemsFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItemRelatedItemsFilter = exports.OpsItemRelatedItemsFilter || (exports.OpsItemRelatedItemsFilter = {}));
var ListOpsItemRelatedItemsRequest;
(function (ListOpsItemRelatedItemsRequest) {
    /**
     * @internal
     */
    ListOpsItemRelatedItemsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOpsItemRelatedItemsRequest = exports.ListOpsItemRelatedItemsRequest || (exports.ListOpsItemRelatedItemsRequest = {}));
var OpsItemRelatedItemSummary;
(function (OpsItemRelatedItemSummary) {
    /**
     * @internal
     */
    OpsItemRelatedItemSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItemRelatedItemSummary = exports.OpsItemRelatedItemSummary || (exports.OpsItemRelatedItemSummary = {}));
var ListOpsItemRelatedItemsResponse;
(function (ListOpsItemRelatedItemsResponse) {
    /**
     * @internal
     */
    ListOpsItemRelatedItemsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOpsItemRelatedItemsResponse = exports.ListOpsItemRelatedItemsResponse || (exports.ListOpsItemRelatedItemsResponse = {}));
var OpsMetadataFilter;
(function (OpsMetadataFilter) {
    /**
     * @internal
     */
    OpsMetadataFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsMetadataFilter = exports.OpsMetadataFilter || (exports.OpsMetadataFilter = {}));
var ListOpsMetadataRequest;
(function (ListOpsMetadataRequest) {
    /**
     * @internal
     */
    ListOpsMetadataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOpsMetadataRequest = exports.ListOpsMetadataRequest || (exports.ListOpsMetadataRequest = {}));
var OpsMetadata;
(function (OpsMetadata) {
    /**
     * @internal
     */
    OpsMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsMetadata = exports.OpsMetadata || (exports.OpsMetadata = {}));
var ListOpsMetadataResult;
(function (ListOpsMetadataResult) {
    /**
     * @internal
     */
    ListOpsMetadataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOpsMetadataResult = exports.ListOpsMetadataResult || (exports.ListOpsMetadataResult = {}));
var ListResourceComplianceSummariesRequest;
(function (ListResourceComplianceSummariesRequest) {
    /**
     * @internal
     */
    ListResourceComplianceSummariesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceComplianceSummariesRequest = exports.ListResourceComplianceSummariesRequest || (exports.ListResourceComplianceSummariesRequest = {}));
var ResourceComplianceSummaryItem;
(function (ResourceComplianceSummaryItem) {
    /**
     * @internal
     */
    ResourceComplianceSummaryItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceComplianceSummaryItem = exports.ResourceComplianceSummaryItem || (exports.ResourceComplianceSummaryItem = {}));
var ListResourceComplianceSummariesResult;
(function (ListResourceComplianceSummariesResult) {
    /**
     * @internal
     */
    ListResourceComplianceSummariesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceComplianceSummariesResult = exports.ListResourceComplianceSummariesResult || (exports.ListResourceComplianceSummariesResult = {}));
var ListResourceDataSyncRequest;
(function (ListResourceDataSyncRequest) {
    /**
     * @internal
     */
    ListResourceDataSyncRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceDataSyncRequest = exports.ListResourceDataSyncRequest || (exports.ListResourceDataSyncRequest = {}));
var LastResourceDataSyncStatus;
(function (LastResourceDataSyncStatus) {
    LastResourceDataSyncStatus["FAILED"] = "Failed";
    LastResourceDataSyncStatus["INPROGRESS"] = "InProgress";
    LastResourceDataSyncStatus["SUCCESSFUL"] = "Successful";
})(LastResourceDataSyncStatus = exports.LastResourceDataSyncStatus || (exports.LastResourceDataSyncStatus = {}));
var ResourceDataSyncSourceWithState;
(function (ResourceDataSyncSourceWithState) {
    /**
     * @internal
     */
    ResourceDataSyncSourceWithState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDataSyncSourceWithState = exports.ResourceDataSyncSourceWithState || (exports.ResourceDataSyncSourceWithState = {}));
var ResourceDataSyncItem;
(function (ResourceDataSyncItem) {
    /**
     * @internal
     */
    ResourceDataSyncItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDataSyncItem = exports.ResourceDataSyncItem || (exports.ResourceDataSyncItem = {}));
var ListResourceDataSyncResult;
(function (ListResourceDataSyncResult) {
    /**
     * @internal
     */
    ListResourceDataSyncResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceDataSyncResult = exports.ListResourceDataSyncResult || (exports.ListResourceDataSyncResult = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
    /**
     * @internal
     */
    ListTagsForResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResult = exports.ListTagsForResourceResult || (exports.ListTagsForResourceResult = {}));
var DocumentPermissionLimit;
(function (DocumentPermissionLimit) {
    /**
     * @internal
     */
    DocumentPermissionLimit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentPermissionLimit = exports.DocumentPermissionLimit || (exports.DocumentPermissionLimit = {}));
var ModifyDocumentPermissionRequest;
(function (ModifyDocumentPermissionRequest) {
    /**
     * @internal
     */
    ModifyDocumentPermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDocumentPermissionRequest = exports.ModifyDocumentPermissionRequest || (exports.ModifyDocumentPermissionRequest = {}));
var ModifyDocumentPermissionResponse;
(function (ModifyDocumentPermissionResponse) {
    /**
     * @internal
     */
    ModifyDocumentPermissionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyDocumentPermissionResponse = exports.ModifyDocumentPermissionResponse || (exports.ModifyDocumentPermissionResponse = {}));
var ComplianceTypeCountLimitExceededException;
(function (ComplianceTypeCountLimitExceededException) {
    /**
     * @internal
     */
    ComplianceTypeCountLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComplianceTypeCountLimitExceededException = exports.ComplianceTypeCountLimitExceededException || (exports.ComplianceTypeCountLimitExceededException = {}));
var InvalidItemContentException;
(function (InvalidItemContentException) {
    /**
     * @internal
     */
    InvalidItemContentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidItemContentException = exports.InvalidItemContentException || (exports.InvalidItemContentException = {}));
var ItemSizeLimitExceededException;
(function (ItemSizeLimitExceededException) {
    /**
     * @internal
     */
    ItemSizeLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ItemSizeLimitExceededException = exports.ItemSizeLimitExceededException || (exports.ItemSizeLimitExceededException = {}));
var ComplianceItemEntry;
(function (ComplianceItemEntry) {
    /**
     * @internal
     */
    ComplianceItemEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComplianceItemEntry = exports.ComplianceItemEntry || (exports.ComplianceItemEntry = {}));
var ComplianceUploadType;
(function (ComplianceUploadType) {
    ComplianceUploadType["Complete"] = "COMPLETE";
    ComplianceUploadType["Partial"] = "PARTIAL";
})(ComplianceUploadType = exports.ComplianceUploadType || (exports.ComplianceUploadType = {}));
var PutComplianceItemsRequest;
(function (PutComplianceItemsRequest) {
    /**
     * @internal
     */
    PutComplianceItemsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutComplianceItemsRequest = exports.PutComplianceItemsRequest || (exports.PutComplianceItemsRequest = {}));
var PutComplianceItemsResult;
(function (PutComplianceItemsResult) {
    /**
     * @internal
     */
    PutComplianceItemsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutComplianceItemsResult = exports.PutComplianceItemsResult || (exports.PutComplianceItemsResult = {}));
var TotalSizeLimitExceededException;
(function (TotalSizeLimitExceededException) {
    /**
     * @internal
     */
    TotalSizeLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TotalSizeLimitExceededException = exports.TotalSizeLimitExceededException || (exports.TotalSizeLimitExceededException = {}));
var CustomSchemaCountLimitExceededException;
(function (CustomSchemaCountLimitExceededException) {
    /**
     * @internal
     */
    CustomSchemaCountLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomSchemaCountLimitExceededException = exports.CustomSchemaCountLimitExceededException || (exports.CustomSchemaCountLimitExceededException = {}));
var InvalidInventoryItemContextException;
(function (InvalidInventoryItemContextException) {
    /**
     * @internal
     */
    InvalidInventoryItemContextException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInventoryItemContextException = exports.InvalidInventoryItemContextException || (exports.InvalidInventoryItemContextException = {}));
var ItemContentMismatchException;
(function (ItemContentMismatchException) {
    /**
     * @internal
     */
    ItemContentMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ItemContentMismatchException = exports.ItemContentMismatchException || (exports.ItemContentMismatchException = {}));
var InventoryItem;
(function (InventoryItem) {
    /**
     * @internal
     */
    InventoryItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventoryItem = exports.InventoryItem || (exports.InventoryItem = {}));
var PutInventoryRequest;
(function (PutInventoryRequest) {
    /**
     * @internal
     */
    PutInventoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutInventoryRequest = exports.PutInventoryRequest || (exports.PutInventoryRequest = {}));
var PutInventoryResult;
(function (PutInventoryResult) {
    /**
     * @internal
     */
    PutInventoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutInventoryResult = exports.PutInventoryResult || (exports.PutInventoryResult = {}));
var SubTypeCountLimitExceededException;
(function (SubTypeCountLimitExceededException) {
    /**
     * @internal
     */
    SubTypeCountLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubTypeCountLimitExceededException = exports.SubTypeCountLimitExceededException || (exports.SubTypeCountLimitExceededException = {}));
var UnsupportedInventoryItemContextException;
(function (UnsupportedInventoryItemContextException) {
    /**
     * @internal
     */
    UnsupportedInventoryItemContextException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedInventoryItemContextException = exports.UnsupportedInventoryItemContextException || (exports.UnsupportedInventoryItemContextException = {}));
var UnsupportedInventorySchemaVersionException;
(function (UnsupportedInventorySchemaVersionException) {
    /**
     * @internal
     */
    UnsupportedInventorySchemaVersionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedInventorySchemaVersionException = exports.UnsupportedInventorySchemaVersionException || (exports.UnsupportedInventorySchemaVersionException = {}));
var HierarchyLevelLimitExceededException;
(function (HierarchyLevelLimitExceededException) {
    /**
     * @internal
     */
    HierarchyLevelLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HierarchyLevelLimitExceededException = exports.HierarchyLevelLimitExceededException || (exports.HierarchyLevelLimitExceededException = {}));
var HierarchyTypeMismatchException;
(function (HierarchyTypeMismatchException) {
    /**
     * @internal
     */
    HierarchyTypeMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HierarchyTypeMismatchException = exports.HierarchyTypeMismatchException || (exports.HierarchyTypeMismatchException = {}));
var IncompatiblePolicyException;
(function (IncompatiblePolicyException) {
    /**
     * @internal
     */
    IncompatiblePolicyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncompatiblePolicyException = exports.IncompatiblePolicyException || (exports.IncompatiblePolicyException = {}));
var InvalidAllowedPatternException;
(function (InvalidAllowedPatternException) {
    /**
     * @internal
     */
    InvalidAllowedPatternException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAllowedPatternException = exports.InvalidAllowedPatternException || (exports.InvalidAllowedPatternException = {}));
var InvalidPolicyAttributeException;
(function (InvalidPolicyAttributeException) {
    /**
     * @internal
     */
    InvalidPolicyAttributeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPolicyAttributeException = exports.InvalidPolicyAttributeException || (exports.InvalidPolicyAttributeException = {}));
var InvalidPolicyTypeException;
(function (InvalidPolicyTypeException) {
    /**
     * @internal
     */
    InvalidPolicyTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPolicyTypeException = exports.InvalidPolicyTypeException || (exports.InvalidPolicyTypeException = {}));
var ParameterAlreadyExists;
(function (ParameterAlreadyExists) {
    /**
     * @internal
     */
    ParameterAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterAlreadyExists = exports.ParameterAlreadyExists || (exports.ParameterAlreadyExists = {}));
var ParameterLimitExceeded;
(function (ParameterLimitExceeded) {
    /**
     * @internal
     */
    ParameterLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterLimitExceeded = exports.ParameterLimitExceeded || (exports.ParameterLimitExceeded = {}));
var ParameterMaxVersionLimitExceeded;
(function (ParameterMaxVersionLimitExceeded) {
    /**
     * @internal
     */
    ParameterMaxVersionLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterMaxVersionLimitExceeded = exports.ParameterMaxVersionLimitExceeded || (exports.ParameterMaxVersionLimitExceeded = {}));
var ParameterPatternMismatchException;
(function (ParameterPatternMismatchException) {
    /**
     * @internal
     */
    ParameterPatternMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterPatternMismatchException = exports.ParameterPatternMismatchException || (exports.ParameterPatternMismatchException = {}));
var PoliciesLimitExceededException;
(function (PoliciesLimitExceededException) {
    /**
     * @internal
     */
    PoliciesLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PoliciesLimitExceededException = exports.PoliciesLimitExceededException || (exports.PoliciesLimitExceededException = {}));
var PutParameterRequest;
(function (PutParameterRequest) {
    /**
     * @internal
     */
    PutParameterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutParameterRequest = exports.PutParameterRequest || (exports.PutParameterRequest = {}));
var PutParameterResult;
(function (PutParameterResult) {
    /**
     * @internal
     */
    PutParameterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutParameterResult = exports.PutParameterResult || (exports.PutParameterResult = {}));
var UnsupportedParameterType;
(function (UnsupportedParameterType) {
    /**
     * @internal
     */
    UnsupportedParameterType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedParameterType = exports.UnsupportedParameterType || (exports.UnsupportedParameterType = {}));
var RegisterDefaultPatchBaselineRequest;
(function (RegisterDefaultPatchBaselineRequest) {
    /**
     * @internal
     */
    RegisterDefaultPatchBaselineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterDefaultPatchBaselineRequest = exports.RegisterDefaultPatchBaselineRequest || (exports.RegisterDefaultPatchBaselineRequest = {}));
var RegisterDefaultPatchBaselineResult;
(function (RegisterDefaultPatchBaselineResult) {
    /**
     * @internal
     */
    RegisterDefaultPatchBaselineResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterDefaultPatchBaselineResult = exports.RegisterDefaultPatchBaselineResult || (exports.RegisterDefaultPatchBaselineResult = {}));
var RegisterPatchBaselineForPatchGroupRequest;
(function (RegisterPatchBaselineForPatchGroupRequest) {
    /**
     * @internal
     */
    RegisterPatchBaselineForPatchGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterPatchBaselineForPatchGroupRequest = exports.RegisterPatchBaselineForPatchGroupRequest || (exports.RegisterPatchBaselineForPatchGroupRequest = {}));
var RegisterPatchBaselineForPatchGroupResult;
(function (RegisterPatchBaselineForPatchGroupResult) {
    /**
     * @internal
     */
    RegisterPatchBaselineForPatchGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterPatchBaselineForPatchGroupResult = exports.RegisterPatchBaselineForPatchGroupResult || (exports.RegisterPatchBaselineForPatchGroupResult = {}));
var RegisterTargetWithMaintenanceWindowRequest;
(function (RegisterTargetWithMaintenanceWindowRequest) {
    /**
     * @internal
     */
    RegisterTargetWithMaintenanceWindowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.OwnerInformation && { OwnerInformation: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
    });
})(RegisterTargetWithMaintenanceWindowRequest = exports.RegisterTargetWithMaintenanceWindowRequest || (exports.RegisterTargetWithMaintenanceWindowRequest = {}));
var RegisterTargetWithMaintenanceWindowResult;
(function (RegisterTargetWithMaintenanceWindowResult) {
    /**
     * @internal
     */
    RegisterTargetWithMaintenanceWindowResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterTargetWithMaintenanceWindowResult = exports.RegisterTargetWithMaintenanceWindowResult || (exports.RegisterTargetWithMaintenanceWindowResult = {}));
var FeatureNotAvailableException;
(function (FeatureNotAvailableException) {
    /**
     * @internal
     */
    FeatureNotAvailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FeatureNotAvailableException = exports.FeatureNotAvailableException || (exports.FeatureNotAvailableException = {}));
var RegisterTaskWithMaintenanceWindowRequest;
(function (RegisterTaskWithMaintenanceWindowRequest) {
    /**
     * @internal
     */
    RegisterTaskWithMaintenanceWindowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TaskParameters && { TaskParameters: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.TaskInvocationParameters && {
            TaskInvocationParameters: MaintenanceWindowTaskInvocationParameters.filterSensitiveLog(obj.TaskInvocationParameters),
        }),
        ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
    });
})(RegisterTaskWithMaintenanceWindowRequest = exports.RegisterTaskWithMaintenanceWindowRequest || (exports.RegisterTaskWithMaintenanceWindowRequest = {}));
var RegisterTaskWithMaintenanceWindowResult;
(function (RegisterTaskWithMaintenanceWindowResult) {
    /**
     * @internal
     */
    RegisterTaskWithMaintenanceWindowResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterTaskWithMaintenanceWindowResult = exports.RegisterTaskWithMaintenanceWindowResult || (exports.RegisterTaskWithMaintenanceWindowResult = {}));
var RemoveTagsFromResourceRequest;
(function (RemoveTagsFromResourceRequest) {
    /**
     * @internal
     */
    RemoveTagsFromResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsFromResourceRequest = exports.RemoveTagsFromResourceRequest || (exports.RemoveTagsFromResourceRequest = {}));
var RemoveTagsFromResourceResult;
(function (RemoveTagsFromResourceResult) {
    /**
     * @internal
     */
    RemoveTagsFromResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsFromResourceResult = exports.RemoveTagsFromResourceResult || (exports.RemoveTagsFromResourceResult = {}));
var ResetServiceSettingRequest;
(function (ResetServiceSettingRequest) {
    /**
     * @internal
     */
    ResetServiceSettingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetServiceSettingRequest = exports.ResetServiceSettingRequest || (exports.ResetServiceSettingRequest = {}));
var ResetServiceSettingResult;
(function (ResetServiceSettingResult) {
    /**
     * @internal
     */
    ResetServiceSettingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetServiceSettingResult = exports.ResetServiceSettingResult || (exports.ResetServiceSettingResult = {}));
var ResumeSessionRequest;
(function (ResumeSessionRequest) {
    /**
     * @internal
     */
    ResumeSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResumeSessionRequest = exports.ResumeSessionRequest || (exports.ResumeSessionRequest = {}));
var ResumeSessionResponse;
(function (ResumeSessionResponse) {
    /**
     * @internal
     */
    ResumeSessionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResumeSessionResponse = exports.ResumeSessionResponse || (exports.ResumeSessionResponse = {}));
var AutomationStepNotFoundException;
(function (AutomationStepNotFoundException) {
    /**
     * @internal
     */
    AutomationStepNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomationStepNotFoundException = exports.AutomationStepNotFoundException || (exports.AutomationStepNotFoundException = {}));
var InvalidAutomationSignalException;
(function (InvalidAutomationSignalException) {
    /**
     * @internal
     */
    InvalidAutomationSignalException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAutomationSignalException = exports.InvalidAutomationSignalException || (exports.InvalidAutomationSignalException = {}));
var SignalType;
(function (SignalType) {
    SignalType["APPROVE"] = "Approve";
    SignalType["REJECT"] = "Reject";
    SignalType["RESUME"] = "Resume";
    SignalType["START_STEP"] = "StartStep";
    SignalType["STOP_STEP"] = "StopStep";
})(SignalType = exports.SignalType || (exports.SignalType = {}));
var SendAutomationSignalRequest;
(function (SendAutomationSignalRequest) {
    /**
     * @internal
     */
    SendAutomationSignalRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendAutomationSignalRequest = exports.SendAutomationSignalRequest || (exports.SendAutomationSignalRequest = {}));
var SendAutomationSignalResult;
(function (SendAutomationSignalResult) {
    /**
     * @internal
     */
    SendAutomationSignalResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendAutomationSignalResult = exports.SendAutomationSignalResult || (exports.SendAutomationSignalResult = {}));
var InvalidNotificationConfig;
(function (InvalidNotificationConfig) {
    /**
     * @internal
     */
    InvalidNotificationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNotificationConfig = exports.InvalidNotificationConfig || (exports.InvalidNotificationConfig = {}));
var InvalidOutputFolder;
(function (InvalidOutputFolder) {
    /**
     * @internal
     */
    InvalidOutputFolder.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidOutputFolder = exports.InvalidOutputFolder || (exports.InvalidOutputFolder = {}));
var InvalidRole;
(function (InvalidRole) {
    /**
     * @internal
     */
    InvalidRole.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRole = exports.InvalidRole || (exports.InvalidRole = {}));
var SendCommandRequest;
(function (SendCommandRequest) {
    /**
     * @internal
     */
    SendCommandRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendCommandRequest = exports.SendCommandRequest || (exports.SendCommandRequest = {}));
var SendCommandResult;
(function (SendCommandResult) {
    /**
     * @internal
     */
    SendCommandResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendCommandResult = exports.SendCommandResult || (exports.SendCommandResult = {}));
var InvalidAssociation;
(function (InvalidAssociation) {
    /**
     * @internal
     */
    InvalidAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAssociation = exports.InvalidAssociation || (exports.InvalidAssociation = {}));
var StartAssociationsOnceRequest;
(function (StartAssociationsOnceRequest) {
    /**
     * @internal
     */
    StartAssociationsOnceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAssociationsOnceRequest = exports.StartAssociationsOnceRequest || (exports.StartAssociationsOnceRequest = {}));
var StartAssociationsOnceResult;
(function (StartAssociationsOnceResult) {
    /**
     * @internal
     */
    StartAssociationsOnceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAssociationsOnceResult = exports.StartAssociationsOnceResult || (exports.StartAssociationsOnceResult = {}));
var AutomationDefinitionNotFoundException;
(function (AutomationDefinitionNotFoundException) {
    /**
     * @internal
     */
    AutomationDefinitionNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomationDefinitionNotFoundException = exports.AutomationDefinitionNotFoundException || (exports.AutomationDefinitionNotFoundException = {}));
var AutomationDefinitionVersionNotFoundException;
(function (AutomationDefinitionVersionNotFoundException) {
    /**
     * @internal
     */
    AutomationDefinitionVersionNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomationDefinitionVersionNotFoundException = exports.AutomationDefinitionVersionNotFoundException || (exports.AutomationDefinitionVersionNotFoundException = {}));
var AutomationExecutionLimitExceededException;
(function (AutomationExecutionLimitExceededException) {
    /**
     * @internal
     */
    AutomationExecutionLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomationExecutionLimitExceededException = exports.AutomationExecutionLimitExceededException || (exports.AutomationExecutionLimitExceededException = {}));
var InvalidAutomationExecutionParametersException;
(function (InvalidAutomationExecutionParametersException) {
    /**
     * @internal
     */
    InvalidAutomationExecutionParametersException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAutomationExecutionParametersException = exports.InvalidAutomationExecutionParametersException || (exports.InvalidAutomationExecutionParametersException = {}));
var StartAutomationExecutionRequest;
(function (StartAutomationExecutionRequest) {
    /**
     * @internal
     */
    StartAutomationExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAutomationExecutionRequest = exports.StartAutomationExecutionRequest || (exports.StartAutomationExecutionRequest = {}));
var StartAutomationExecutionResult;
(function (StartAutomationExecutionResult) {
    /**
     * @internal
     */
    StartAutomationExecutionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAutomationExecutionResult = exports.StartAutomationExecutionResult || (exports.StartAutomationExecutionResult = {}));
var AutomationDefinitionNotApprovedException;
(function (AutomationDefinitionNotApprovedException) {
    /**
     * @internal
     */
    AutomationDefinitionNotApprovedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomationDefinitionNotApprovedException = exports.AutomationDefinitionNotApprovedException || (exports.AutomationDefinitionNotApprovedException = {}));
var StartChangeRequestExecutionRequest;
(function (StartChangeRequestExecutionRequest) {
    /**
     * @internal
     */
    StartChangeRequestExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartChangeRequestExecutionRequest = exports.StartChangeRequestExecutionRequest || (exports.StartChangeRequestExecutionRequest = {}));
var StartChangeRequestExecutionResult;
(function (StartChangeRequestExecutionResult) {
    /**
     * @internal
     */
    StartChangeRequestExecutionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartChangeRequestExecutionResult = exports.StartChangeRequestExecutionResult || (exports.StartChangeRequestExecutionResult = {}));
var StartSessionRequest;
(function (StartSessionRequest) {
    /**
     * @internal
     */
    StartSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSessionRequest = exports.StartSessionRequest || (exports.StartSessionRequest = {}));
var StartSessionResponse;
(function (StartSessionResponse) {
    /**
     * @internal
     */
    StartSessionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSessionResponse = exports.StartSessionResponse || (exports.StartSessionResponse = {}));
var TargetNotConnected;
(function (TargetNotConnected) {
    /**
     * @internal
     */
    TargetNotConnected.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetNotConnected = exports.TargetNotConnected || (exports.TargetNotConnected = {}));
var InvalidAutomationStatusUpdateException;
(function (InvalidAutomationStatusUpdateException) {
    /**
     * @internal
     */
    InvalidAutomationStatusUpdateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAutomationStatusUpdateException = exports.InvalidAutomationStatusUpdateException || (exports.InvalidAutomationStatusUpdateException = {}));
var StopType;
(function (StopType) {
    StopType["CANCEL"] = "Cancel";
    StopType["COMPLETE"] = "Complete";
})(StopType = exports.StopType || (exports.StopType = {}));
var StopAutomationExecutionRequest;
(function (StopAutomationExecutionRequest) {
    /**
     * @internal
     */
    StopAutomationExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopAutomationExecutionRequest = exports.StopAutomationExecutionRequest || (exports.StopAutomationExecutionRequest = {}));
var StopAutomationExecutionResult;
(function (StopAutomationExecutionResult) {
    /**
     * @internal
     */
    StopAutomationExecutionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopAutomationExecutionResult = exports.StopAutomationExecutionResult || (exports.StopAutomationExecutionResult = {}));
var TerminateSessionRequest;
(function (TerminateSessionRequest) {
    /**
     * @internal
     */
    TerminateSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateSessionRequest = exports.TerminateSessionRequest || (exports.TerminateSessionRequest = {}));
var TerminateSessionResponse;
(function (TerminateSessionResponse) {
    /**
     * @internal
     */
    TerminateSessionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateSessionResponse = exports.TerminateSessionResponse || (exports.TerminateSessionResponse = {}));
var UnlabelParameterVersionRequest;
(function (UnlabelParameterVersionRequest) {
    /**
     * @internal
     */
    UnlabelParameterVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnlabelParameterVersionRequest = exports.UnlabelParameterVersionRequest || (exports.UnlabelParameterVersionRequest = {}));
var UnlabelParameterVersionResult;
(function (UnlabelParameterVersionResult) {
    /**
     * @internal
     */
    UnlabelParameterVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnlabelParameterVersionResult = exports.UnlabelParameterVersionResult || (exports.UnlabelParameterVersionResult = {}));
var AssociationVersionLimitExceeded;
(function (AssociationVersionLimitExceeded) {
    /**
     * @internal
     */
    AssociationVersionLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationVersionLimitExceeded = exports.AssociationVersionLimitExceeded || (exports.AssociationVersionLimitExceeded = {}));
var InvalidUpdate;
(function (InvalidUpdate) {
    /**
     * @internal
     */
    InvalidUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidUpdate = exports.InvalidUpdate || (exports.InvalidUpdate = {}));
var UpdateAssociationRequest;
(function (UpdateAssociationRequest) {
    /**
     * @internal
     */
    UpdateAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAssociationRequest = exports.UpdateAssociationRequest || (exports.UpdateAssociationRequest = {}));
var UpdateAssociationResult;
(function (UpdateAssociationResult) {
    /**
     * @internal
     */
    UpdateAssociationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAssociationResult = exports.UpdateAssociationResult || (exports.UpdateAssociationResult = {}));
var StatusUnchanged;
(function (StatusUnchanged) {
    /**
     * @internal
     */
    StatusUnchanged.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatusUnchanged = exports.StatusUnchanged || (exports.StatusUnchanged = {}));
var UpdateAssociationStatusRequest;
(function (UpdateAssociationStatusRequest) {
    /**
     * @internal
     */
    UpdateAssociationStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAssociationStatusRequest = exports.UpdateAssociationStatusRequest || (exports.UpdateAssociationStatusRequest = {}));
var UpdateAssociationStatusResult;
(function (UpdateAssociationStatusResult) {
    /**
     * @internal
     */
    UpdateAssociationStatusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAssociationStatusResult = exports.UpdateAssociationStatusResult || (exports.UpdateAssociationStatusResult = {}));
var DocumentVersionLimitExceeded;
(function (DocumentVersionLimitExceeded) {
    /**
     * @internal
     */
    DocumentVersionLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentVersionLimitExceeded = exports.DocumentVersionLimitExceeded || (exports.DocumentVersionLimitExceeded = {}));
var DuplicateDocumentContent;
(function (DuplicateDocumentContent) {
    /**
     * @internal
     */
    DuplicateDocumentContent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateDocumentContent = exports.DuplicateDocumentContent || (exports.DuplicateDocumentContent = {}));
var DuplicateDocumentVersionName;
(function (DuplicateDocumentVersionName) {
    /**
     * @internal
     */
    DuplicateDocumentVersionName.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateDocumentVersionName = exports.DuplicateDocumentVersionName || (exports.DuplicateDocumentVersionName = {}));
var UpdateDocumentRequest;
(function (UpdateDocumentRequest) {
    /**
     * @internal
     */
    UpdateDocumentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDocumentRequest = exports.UpdateDocumentRequest || (exports.UpdateDocumentRequest = {}));
var UpdateDocumentResult;
(function (UpdateDocumentResult) {
    /**
     * @internal
     */
    UpdateDocumentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDocumentResult = exports.UpdateDocumentResult || (exports.UpdateDocumentResult = {}));
var UpdateDocumentDefaultVersionRequest;
(function (UpdateDocumentDefaultVersionRequest) {
    /**
     * @internal
     */
    UpdateDocumentDefaultVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDocumentDefaultVersionRequest = exports.UpdateDocumentDefaultVersionRequest || (exports.UpdateDocumentDefaultVersionRequest = {}));
var DocumentDefaultVersionDescription;
(function (DocumentDefaultVersionDescription) {
    /**
     * @internal
     */
    DocumentDefaultVersionDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentDefaultVersionDescription = exports.DocumentDefaultVersionDescription || (exports.DocumentDefaultVersionDescription = {}));
var UpdateDocumentDefaultVersionResult;
(function (UpdateDocumentDefaultVersionResult) {
    /**
     * @internal
     */
    UpdateDocumentDefaultVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDocumentDefaultVersionResult = exports.UpdateDocumentDefaultVersionResult || (exports.UpdateDocumentDefaultVersionResult = {}));
var DocumentReviewAction;
(function (DocumentReviewAction) {
    DocumentReviewAction["Approve"] = "Approve";
    DocumentReviewAction["Reject"] = "Reject";
    DocumentReviewAction["SendForReview"] = "SendForReview";
    DocumentReviewAction["UpdateReview"] = "UpdateReview";
})(DocumentReviewAction = exports.DocumentReviewAction || (exports.DocumentReviewAction = {}));
var DocumentReviews;
(function (DocumentReviews) {
    /**
     * @internal
     */
    DocumentReviews.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentReviews = exports.DocumentReviews || (exports.DocumentReviews = {}));
var UpdateDocumentMetadataRequest;
(function (UpdateDocumentMetadataRequest) {
    /**
     * @internal
     */
    UpdateDocumentMetadataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDocumentMetadataRequest = exports.UpdateDocumentMetadataRequest || (exports.UpdateDocumentMetadataRequest = {}));
var UpdateDocumentMetadataResponse;
(function (UpdateDocumentMetadataResponse) {
    /**
     * @internal
     */
    UpdateDocumentMetadataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDocumentMetadataResponse = exports.UpdateDocumentMetadataResponse || (exports.UpdateDocumentMetadataResponse = {}));
var UpdateMaintenanceWindowRequest;
(function (UpdateMaintenanceWindowRequest) {
    /**
     * @internal
     */
    UpdateMaintenanceWindowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateMaintenanceWindowRequest = exports.UpdateMaintenanceWindowRequest || (exports.UpdateMaintenanceWindowRequest = {}));
var UpdateMaintenanceWindowResult;
(function (UpdateMaintenanceWindowResult) {
    /**
     * @internal
     */
    UpdateMaintenanceWindowResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateMaintenanceWindowResult = exports.UpdateMaintenanceWindowResult || (exports.UpdateMaintenanceWindowResult = {}));
//# sourceMappingURL=models_1.js.map