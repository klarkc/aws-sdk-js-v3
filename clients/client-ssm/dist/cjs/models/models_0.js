"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssociationBatchRequestEntry = exports.UnsupportedPlatformType = exports.InvalidTarget = exports.InvalidSchedule = exports.InvalidParameters = exports.InvalidOutputLocation = exports.InvalidDocumentVersion = exports.InvalidDocument = exports.CreateAssociationResult = exports.AssociationDescription = exports.AssociationStatus = exports.AssociationStatusName = exports.AssociationOverview = exports.CreateAssociationRequest = exports.Target = exports.TargetLocation = exports.AssociationSyncCompliance = exports.InstanceAssociationOutputLocation = exports.S3OutputLocation = exports.AssociationComplianceSeverity = exports.AssociationLimitExceeded = exports.AssociationAlreadyExists = exports.CreateActivationResult = exports.CreateActivationRequest = exports.DoesNotExistException = exports.CancelMaintenanceWindowExecutionResult = exports.CancelMaintenanceWindowExecutionRequest = exports.InvalidInstanceId = exports.InvalidCommandId = exports.DuplicateInstanceId = exports.CancelCommandResult = exports.CancelCommandRequest = exports.OpsItemRelatedItemAlreadyExistsException = exports.OpsItemNotFoundException = exports.OpsItemLimitExceededException = exports.OpsItemInvalidParameterException = exports.AssociateOpsItemRelatedItemResponse = exports.AssociateOpsItemRelatedItemRequest = exports.AlreadyExistsException = exports.TooManyUpdates = exports.TooManyTagsError = exports.InvalidResourceType = exports.InvalidResourceId = exports.InternalServerError = exports.AddTagsToResourceResult = exports.AddTagsToResourceRequest = exports.ResourceTypeForTagging = exports.Activation = exports.Tag = exports.AccountSharingInfo = void 0;
exports.PatchSource = exports.PatchAction = exports.OperatingSystem = exports.PatchRuleGroup = exports.PatchRule = exports.PatchFilterGroup = exports.PatchFilter = exports.PatchFilterKey = exports.PatchComplianceLevel = exports.OpsMetadataTooManyUpdatesException = exports.OpsMetadataLimitExceededException = exports.OpsMetadataInvalidArgumentException = exports.OpsMetadataAlreadyExistsException = exports.CreateOpsMetadataResult = exports.CreateOpsMetadataRequest = exports.MetadataValue = exports.OpsItemAlreadyExistsException = exports.CreateOpsItemResponse = exports.CreateOpsItemRequest = exports.RelatedOpsItem = exports.OpsItemDataValue = exports.OpsItemDataType = exports.OpsItemNotification = exports.ResourceLimitExceededException = exports.IdempotentParameterMismatch = exports.CreateMaintenanceWindowResult = exports.CreateMaintenanceWindowRequest = exports.MaxDocumentSizeExceeded = exports.InvalidDocumentSchemaVersion = exports.InvalidDocumentContent = exports.DocumentLimitExceeded = exports.DocumentAlreadyExists = exports.CreateDocumentResult = exports.DocumentDescription = exports.DocumentStatus = exports.ReviewInformation = exports.ReviewStatus = exports.PlatformType = exports.DocumentParameter = exports.DocumentHashType = exports.AttachmentInformation = exports.CreateDocumentRequest = exports.DocumentRequires = exports.DocumentType = exports.DocumentFormat = exports.AttachmentsSource = exports.AttachmentsSourceKey = exports.CreateAssociationBatchResult = exports.FailedCreateAssociation = exports.CreateAssociationBatchRequest = void 0;
exports.DeregisterManagedInstanceRequest = exports.ResourceDataSyncNotFoundException = exports.DeleteResourceDataSyncResult = exports.DeleteResourceDataSyncRequest = exports.ResourceInUseException = exports.DeletePatchBaselineResult = exports.DeletePatchBaselineRequest = exports.DeleteParametersResult = exports.DeleteParametersRequest = exports.ParameterNotFound = exports.DeleteParameterResult = exports.DeleteParameterRequest = exports.OpsMetadataNotFoundException = exports.DeleteOpsMetadataResult = exports.DeleteOpsMetadataRequest = exports.DeleteMaintenanceWindowResult = exports.DeleteMaintenanceWindowRequest = exports.InvalidTypeNameException = exports.InvalidOptionException = exports.InvalidInventoryRequestException = exports.InvalidDeleteInventoryParametersException = exports.DeleteInventoryResult = exports.InventoryDeletionSummary = exports.InventoryDeletionSummaryItem = exports.DeleteInventoryRequest = exports.InventorySchemaDeleteOption = exports.InvalidDocumentOperation = exports.DeleteDocumentResult = exports.DeleteDocumentRequest = exports.AssociatedInstances = exports.DeleteAssociationResult = exports.DeleteAssociationRequest = exports.AssociationDoesNotExist = exports.InvalidActivationId = exports.InvalidActivation = exports.DeleteActivationResult = exports.DeleteActivationRequest = exports.ResourceDataSyncInvalidConfigurationException = exports.ResourceDataSyncCountExceededException = exports.ResourceDataSyncAlreadyExistsException = exports.CreateResourceDataSyncResult = exports.CreateResourceDataSyncRequest = exports.ResourceDataSyncSource = exports.ResourceDataSyncAwsOrganizationsSource = exports.ResourceDataSyncOrganizationalUnit = exports.ResourceDataSyncS3Destination = exports.ResourceDataSyncS3Format = exports.ResourceDataSyncDestinationDataSharing = exports.CreatePatchBaselineResult = exports.CreatePatchBaselineRequest = void 0;
exports.DescribeAutomationStepExecutionsResult = exports.StepExecution = exports.FailureDetails = exports.DescribeAutomationStepExecutionsRequest = exports.StepExecutionFilter = exports.StepExecutionFilterKey = exports.AutomationExecutionNotFoundException = exports.InvalidFilterValue = exports.InvalidFilterKey = exports.DescribeAutomationExecutionsResult = exports.AutomationExecutionMetadata = exports.Runbook = exports.ResolvedTargets = exports.ExecutionMode = exports.AutomationType = exports.AutomationSubtype = exports.AutomationExecutionStatus = exports.DescribeAutomationExecutionsRequest = exports.AutomationExecutionFilter = exports.AutomationExecutionFilterKey = exports.DescribeAssociationExecutionTargetsResult = exports.AssociationExecutionTarget = exports.OutputSource = exports.DescribeAssociationExecutionTargetsRequest = exports.AssociationExecutionTargetsFilter = exports.AssociationExecutionTargetsFilterKey = exports.AssociationExecutionDoesNotExist = exports.DescribeAssociationExecutionsResult = exports.AssociationExecution = exports.DescribeAssociationExecutionsRequest = exports.AssociationExecutionFilter = exports.AssociationFilterOperatorType = exports.AssociationExecutionFilterKey = exports.InvalidAssociationVersion = exports.DescribeAssociationResult = exports.DescribeAssociationRequest = exports.InvalidNextToken = exports.InvalidFilter = exports.DescribeActivationsResult = exports.DescribeActivationsRequest = exports.DescribeActivationsFilter = exports.DescribeActivationsFilterKeys = exports.DeregisterTaskFromMaintenanceWindowResult = exports.DeregisterTaskFromMaintenanceWindowRequest = exports.TargetInUseException = exports.DeregisterTargetFromMaintenanceWindowResult = exports.DeregisterTargetFromMaintenanceWindowRequest = exports.DeregisterPatchBaselineForPatchGroupResult = exports.DeregisterPatchBaselineForPatchGroupRequest = exports.DeregisterManagedInstanceResult = void 0;
exports.InventoryDeletionStatusItem = exports.InventoryDeletionStatus = exports.DescribeInventoryDeletionsRequest = exports.DescribeInstancePatchStatesForPatchGroupResult = exports.DescribeInstancePatchStatesForPatchGroupRequest = exports.InstancePatchStateFilter = exports.InstancePatchStateOperatorType = exports.DescribeInstancePatchStatesResult = exports.InstancePatchState = exports.RebootOption = exports.PatchOperationType = exports.DescribeInstancePatchStatesRequest = exports.DescribeInstancePatchesResult = exports.PatchComplianceData = exports.PatchComplianceDataState = exports.DescribeInstancePatchesRequest = exports.InvalidInstanceInformationFilterValue = exports.DescribeInstanceInformationResult = exports.InstanceInformation = exports.ResourceType = exports.PingStatus = exports.InstanceAggregatedAssociationOverview = exports.DescribeInstanceInformationRequest = exports.InstanceInformationFilter = exports.InstanceInformationFilterKey = exports.InstanceInformationStringFilter = exports.DescribeInstanceAssociationsStatusResult = exports.InstanceAssociationStatusInfo = exports.InstanceAssociationOutputUrl = exports.S3OutputUrl = exports.DescribeInstanceAssociationsStatusRequest = exports.UnsupportedOperatingSystem = exports.DescribeEffectivePatchesForPatchBaselineResult = exports.EffectivePatch = exports.PatchStatus = exports.PatchDeploymentStatus = exports.DescribeEffectivePatchesForPatchBaselineRequest = exports.DescribeEffectiveInstanceAssociationsResult = exports.InstanceAssociation = exports.DescribeEffectiveInstanceAssociationsRequest = exports.InvalidPermissionType = exports.DescribeDocumentPermissionResponse = exports.DescribeDocumentPermissionRequest = exports.DocumentPermissionType = exports.DescribeDocumentResult = exports.DescribeDocumentRequest = exports.DescribeAvailablePatchesResult = exports.Patch = exports.DescribeAvailablePatchesRequest = exports.PatchOrchestratorFilter = void 0;
exports.DescribeParametersResult = exports.ParameterMetadata = exports.ParameterType = exports.ParameterTier = exports.ParameterInlinePolicy = exports.DescribeParametersRequest = exports.ParameterStringFilter = exports.ParametersFilter = exports.ParametersFilterKey = exports.DescribeOpsItemsResponse = exports.OpsItemSummary = exports.OpsItemStatus = exports.DescribeOpsItemsRequest = exports.OpsItemFilter = exports.OpsItemFilterOperator = exports.OpsItemFilterKey = exports.DescribeMaintenanceWindowTasksResult = exports.MaintenanceWindowTask = exports.MaintenanceWindowTaskParameterValueExpression = exports.LoggingInfo = exports.DescribeMaintenanceWindowTasksRequest = exports.DescribeMaintenanceWindowTargetsResult = exports.MaintenanceWindowTarget = exports.DescribeMaintenanceWindowTargetsRequest = exports.DescribeMaintenanceWindowsForTargetResult = exports.MaintenanceWindowIdentityForTarget = exports.DescribeMaintenanceWindowsForTargetRequest = exports.DescribeMaintenanceWindowScheduleResult = exports.ScheduledWindowExecution = exports.DescribeMaintenanceWindowScheduleRequest = exports.MaintenanceWindowResourceType = exports.DescribeMaintenanceWindowsResult = exports.MaintenanceWindowIdentity = exports.DescribeMaintenanceWindowsRequest = exports.DescribeMaintenanceWindowExecutionTasksResult = exports.MaintenanceWindowExecutionTaskIdentity = exports.DescribeMaintenanceWindowExecutionTasksRequest = exports.DescribeMaintenanceWindowExecutionTaskInvocationsResult = exports.MaintenanceWindowExecutionTaskInvocationIdentity = exports.MaintenanceWindowTaskType = exports.DescribeMaintenanceWindowExecutionTaskInvocationsRequest = exports.DescribeMaintenanceWindowExecutionsResult = exports.MaintenanceWindowExecution = exports.MaintenanceWindowExecutionStatus = exports.DescribeMaintenanceWindowExecutionsRequest = exports.MaintenanceWindowFilter = exports.InvalidDeletionIdException = exports.DescribeInventoryDeletionsResult = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccountSharingInfo;
(function (AccountSharingInfo) {
    /**
     * @internal
     */
    AccountSharingInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountSharingInfo = exports.AccountSharingInfo || (exports.AccountSharingInfo = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var Activation;
(function (Activation) {
    /**
     * @internal
     */
    Activation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Activation = exports.Activation || (exports.Activation = {}));
var ResourceTypeForTagging;
(function (ResourceTypeForTagging) {
    ResourceTypeForTagging["DOCUMENT"] = "Document";
    ResourceTypeForTagging["MAINTENANCE_WINDOW"] = "MaintenanceWindow";
    ResourceTypeForTagging["MANAGED_INSTANCE"] = "ManagedInstance";
    ResourceTypeForTagging["OPSMETADATA"] = "OpsMetadata";
    ResourceTypeForTagging["OPS_ITEM"] = "OpsItem";
    ResourceTypeForTagging["PARAMETER"] = "Parameter";
    ResourceTypeForTagging["PATCH_BASELINE"] = "PatchBaseline";
})(ResourceTypeForTagging = exports.ResourceTypeForTagging || (exports.ResourceTypeForTagging = {}));
var AddTagsToResourceRequest;
(function (AddTagsToResourceRequest) {
    /**
     * @internal
     */
    AddTagsToResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsToResourceRequest = exports.AddTagsToResourceRequest || (exports.AddTagsToResourceRequest = {}));
var AddTagsToResourceResult;
(function (AddTagsToResourceResult) {
    /**
     * @internal
     */
    AddTagsToResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsToResourceResult = exports.AddTagsToResourceResult || (exports.AddTagsToResourceResult = {}));
var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var InvalidResourceId;
(function (InvalidResourceId) {
    /**
     * @internal
     */
    InvalidResourceId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidResourceId = exports.InvalidResourceId || (exports.InvalidResourceId = {}));
var InvalidResourceType;
(function (InvalidResourceType) {
    /**
     * @internal
     */
    InvalidResourceType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidResourceType = exports.InvalidResourceType || (exports.InvalidResourceType = {}));
var TooManyTagsError;
(function (TooManyTagsError) {
    /**
     * @internal
     */
    TooManyTagsError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsError = exports.TooManyTagsError || (exports.TooManyTagsError = {}));
var TooManyUpdates;
(function (TooManyUpdates) {
    /**
     * @internal
     */
    TooManyUpdates.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyUpdates = exports.TooManyUpdates || (exports.TooManyUpdates = {}));
var AlreadyExistsException;
(function (AlreadyExistsException) {
    /**
     * @internal
     */
    AlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlreadyExistsException = exports.AlreadyExistsException || (exports.AlreadyExistsException = {}));
var AssociateOpsItemRelatedItemRequest;
(function (AssociateOpsItemRelatedItemRequest) {
    /**
     * @internal
     */
    AssociateOpsItemRelatedItemRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateOpsItemRelatedItemRequest = exports.AssociateOpsItemRelatedItemRequest || (exports.AssociateOpsItemRelatedItemRequest = {}));
var AssociateOpsItemRelatedItemResponse;
(function (AssociateOpsItemRelatedItemResponse) {
    /**
     * @internal
     */
    AssociateOpsItemRelatedItemResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateOpsItemRelatedItemResponse = exports.AssociateOpsItemRelatedItemResponse || (exports.AssociateOpsItemRelatedItemResponse = {}));
var OpsItemInvalidParameterException;
(function (OpsItemInvalidParameterException) {
    /**
     * @internal
     */
    OpsItemInvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItemInvalidParameterException = exports.OpsItemInvalidParameterException || (exports.OpsItemInvalidParameterException = {}));
var OpsItemLimitExceededException;
(function (OpsItemLimitExceededException) {
    /**
     * @internal
     */
    OpsItemLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItemLimitExceededException = exports.OpsItemLimitExceededException || (exports.OpsItemLimitExceededException = {}));
var OpsItemNotFoundException;
(function (OpsItemNotFoundException) {
    /**
     * @internal
     */
    OpsItemNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItemNotFoundException = exports.OpsItemNotFoundException || (exports.OpsItemNotFoundException = {}));
var OpsItemRelatedItemAlreadyExistsException;
(function (OpsItemRelatedItemAlreadyExistsException) {
    /**
     * @internal
     */
    OpsItemRelatedItemAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItemRelatedItemAlreadyExistsException = exports.OpsItemRelatedItemAlreadyExistsException || (exports.OpsItemRelatedItemAlreadyExistsException = {}));
var CancelCommandRequest;
(function (CancelCommandRequest) {
    /**
     * @internal
     */
    CancelCommandRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelCommandRequest = exports.CancelCommandRequest || (exports.CancelCommandRequest = {}));
var CancelCommandResult;
(function (CancelCommandResult) {
    /**
     * @internal
     */
    CancelCommandResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelCommandResult = exports.CancelCommandResult || (exports.CancelCommandResult = {}));
var DuplicateInstanceId;
(function (DuplicateInstanceId) {
    /**
     * @internal
     */
    DuplicateInstanceId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateInstanceId = exports.DuplicateInstanceId || (exports.DuplicateInstanceId = {}));
var InvalidCommandId;
(function (InvalidCommandId) {
    /**
     * @internal
     */
    InvalidCommandId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCommandId = exports.InvalidCommandId || (exports.InvalidCommandId = {}));
var InvalidInstanceId;
(function (InvalidInstanceId) {
    /**
     * @internal
     */
    InvalidInstanceId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInstanceId = exports.InvalidInstanceId || (exports.InvalidInstanceId = {}));
var CancelMaintenanceWindowExecutionRequest;
(function (CancelMaintenanceWindowExecutionRequest) {
    /**
     * @internal
     */
    CancelMaintenanceWindowExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelMaintenanceWindowExecutionRequest = exports.CancelMaintenanceWindowExecutionRequest || (exports.CancelMaintenanceWindowExecutionRequest = {}));
var CancelMaintenanceWindowExecutionResult;
(function (CancelMaintenanceWindowExecutionResult) {
    /**
     * @internal
     */
    CancelMaintenanceWindowExecutionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelMaintenanceWindowExecutionResult = exports.CancelMaintenanceWindowExecutionResult || (exports.CancelMaintenanceWindowExecutionResult = {}));
var DoesNotExistException;
(function (DoesNotExistException) {
    /**
     * @internal
     */
    DoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DoesNotExistException = exports.DoesNotExistException || (exports.DoesNotExistException = {}));
var CreateActivationRequest;
(function (CreateActivationRequest) {
    /**
     * @internal
     */
    CreateActivationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateActivationRequest = exports.CreateActivationRequest || (exports.CreateActivationRequest = {}));
var CreateActivationResult;
(function (CreateActivationResult) {
    /**
     * @internal
     */
    CreateActivationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateActivationResult = exports.CreateActivationResult || (exports.CreateActivationResult = {}));
var AssociationAlreadyExists;
(function (AssociationAlreadyExists) {
    /**
     * @internal
     */
    AssociationAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationAlreadyExists = exports.AssociationAlreadyExists || (exports.AssociationAlreadyExists = {}));
var AssociationLimitExceeded;
(function (AssociationLimitExceeded) {
    /**
     * @internal
     */
    AssociationLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationLimitExceeded = exports.AssociationLimitExceeded || (exports.AssociationLimitExceeded = {}));
var AssociationComplianceSeverity;
(function (AssociationComplianceSeverity) {
    AssociationComplianceSeverity["Critical"] = "CRITICAL";
    AssociationComplianceSeverity["High"] = "HIGH";
    AssociationComplianceSeverity["Low"] = "LOW";
    AssociationComplianceSeverity["Medium"] = "MEDIUM";
    AssociationComplianceSeverity["Unspecified"] = "UNSPECIFIED";
})(AssociationComplianceSeverity = exports.AssociationComplianceSeverity || (exports.AssociationComplianceSeverity = {}));
var S3OutputLocation;
(function (S3OutputLocation) {
    /**
     * @internal
     */
    S3OutputLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3OutputLocation = exports.S3OutputLocation || (exports.S3OutputLocation = {}));
var InstanceAssociationOutputLocation;
(function (InstanceAssociationOutputLocation) {
    /**
     * @internal
     */
    InstanceAssociationOutputLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceAssociationOutputLocation = exports.InstanceAssociationOutputLocation || (exports.InstanceAssociationOutputLocation = {}));
var AssociationSyncCompliance;
(function (AssociationSyncCompliance) {
    AssociationSyncCompliance["Auto"] = "AUTO";
    AssociationSyncCompliance["Manual"] = "MANUAL";
})(AssociationSyncCompliance = exports.AssociationSyncCompliance || (exports.AssociationSyncCompliance = {}));
var TargetLocation;
(function (TargetLocation) {
    /**
     * @internal
     */
    TargetLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetLocation = exports.TargetLocation || (exports.TargetLocation = {}));
var Target;
(function (Target) {
    /**
     * @internal
     */
    Target.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Target = exports.Target || (exports.Target = {}));
var CreateAssociationRequest;
(function (CreateAssociationRequest) {
    /**
     * @internal
     */
    CreateAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAssociationRequest = exports.CreateAssociationRequest || (exports.CreateAssociationRequest = {}));
var AssociationOverview;
(function (AssociationOverview) {
    /**
     * @internal
     */
    AssociationOverview.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationOverview = exports.AssociationOverview || (exports.AssociationOverview = {}));
var AssociationStatusName;
(function (AssociationStatusName) {
    AssociationStatusName["Failed"] = "Failed";
    AssociationStatusName["Pending"] = "Pending";
    AssociationStatusName["Success"] = "Success";
})(AssociationStatusName = exports.AssociationStatusName || (exports.AssociationStatusName = {}));
var AssociationStatus;
(function (AssociationStatus) {
    /**
     * @internal
     */
    AssociationStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationStatus = exports.AssociationStatus || (exports.AssociationStatus = {}));
var AssociationDescription;
(function (AssociationDescription) {
    /**
     * @internal
     */
    AssociationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationDescription = exports.AssociationDescription || (exports.AssociationDescription = {}));
var CreateAssociationResult;
(function (CreateAssociationResult) {
    /**
     * @internal
     */
    CreateAssociationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAssociationResult = exports.CreateAssociationResult || (exports.CreateAssociationResult = {}));
var InvalidDocument;
(function (InvalidDocument) {
    /**
     * @internal
     */
    InvalidDocument.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDocument = exports.InvalidDocument || (exports.InvalidDocument = {}));
var InvalidDocumentVersion;
(function (InvalidDocumentVersion) {
    /**
     * @internal
     */
    InvalidDocumentVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDocumentVersion = exports.InvalidDocumentVersion || (exports.InvalidDocumentVersion = {}));
var InvalidOutputLocation;
(function (InvalidOutputLocation) {
    /**
     * @internal
     */
    InvalidOutputLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidOutputLocation = exports.InvalidOutputLocation || (exports.InvalidOutputLocation = {}));
var InvalidParameters;
(function (InvalidParameters) {
    /**
     * @internal
     */
    InvalidParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameters = exports.InvalidParameters || (exports.InvalidParameters = {}));
var InvalidSchedule;
(function (InvalidSchedule) {
    /**
     * @internal
     */
    InvalidSchedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSchedule = exports.InvalidSchedule || (exports.InvalidSchedule = {}));
var InvalidTarget;
(function (InvalidTarget) {
    /**
     * @internal
     */
    InvalidTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTarget = exports.InvalidTarget || (exports.InvalidTarget = {}));
var UnsupportedPlatformType;
(function (UnsupportedPlatformType) {
    /**
     * @internal
     */
    UnsupportedPlatformType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedPlatformType = exports.UnsupportedPlatformType || (exports.UnsupportedPlatformType = {}));
var CreateAssociationBatchRequestEntry;
(function (CreateAssociationBatchRequestEntry) {
    /**
     * @internal
     */
    CreateAssociationBatchRequestEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAssociationBatchRequestEntry = exports.CreateAssociationBatchRequestEntry || (exports.CreateAssociationBatchRequestEntry = {}));
var CreateAssociationBatchRequest;
(function (CreateAssociationBatchRequest) {
    /**
     * @internal
     */
    CreateAssociationBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAssociationBatchRequest = exports.CreateAssociationBatchRequest || (exports.CreateAssociationBatchRequest = {}));
var FailedCreateAssociation;
(function (FailedCreateAssociation) {
    /**
     * @internal
     */
    FailedCreateAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailedCreateAssociation = exports.FailedCreateAssociation || (exports.FailedCreateAssociation = {}));
var CreateAssociationBatchResult;
(function (CreateAssociationBatchResult) {
    /**
     * @internal
     */
    CreateAssociationBatchResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAssociationBatchResult = exports.CreateAssociationBatchResult || (exports.CreateAssociationBatchResult = {}));
var AttachmentsSourceKey;
(function (AttachmentsSourceKey) {
    AttachmentsSourceKey["AttachmentReference"] = "AttachmentReference";
    AttachmentsSourceKey["S3FileUrl"] = "S3FileUrl";
    AttachmentsSourceKey["SourceUrl"] = "SourceUrl";
})(AttachmentsSourceKey = exports.AttachmentsSourceKey || (exports.AttachmentsSourceKey = {}));
var AttachmentsSource;
(function (AttachmentsSource) {
    /**
     * @internal
     */
    AttachmentsSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachmentsSource = exports.AttachmentsSource || (exports.AttachmentsSource = {}));
var DocumentFormat;
(function (DocumentFormat) {
    DocumentFormat["JSON"] = "JSON";
    DocumentFormat["TEXT"] = "TEXT";
    DocumentFormat["YAML"] = "YAML";
})(DocumentFormat = exports.DocumentFormat || (exports.DocumentFormat = {}));
var DocumentType;
(function (DocumentType) {
    DocumentType["ApplicationConfiguration"] = "ApplicationConfiguration";
    DocumentType["ApplicationConfigurationSchema"] = "ApplicationConfigurationSchema";
    DocumentType["Automation"] = "Automation";
    DocumentType["ChangeCalendar"] = "ChangeCalendar";
    DocumentType["ChangeTemplate"] = "Automation.ChangeTemplate";
    DocumentType["Command"] = "Command";
    DocumentType["DeploymentStrategy"] = "DeploymentStrategy";
    DocumentType["Package"] = "Package";
    DocumentType["Policy"] = "Policy";
    DocumentType["ProblemAnalysis"] = "ProblemAnalysis";
    DocumentType["ProblemAnalysisTemplate"] = "ProblemAnalysisTemplate";
    DocumentType["Session"] = "Session";
})(DocumentType = exports.DocumentType || (exports.DocumentType = {}));
var DocumentRequires;
(function (DocumentRequires) {
    /**
     * @internal
     */
    DocumentRequires.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentRequires = exports.DocumentRequires || (exports.DocumentRequires = {}));
var CreateDocumentRequest;
(function (CreateDocumentRequest) {
    /**
     * @internal
     */
    CreateDocumentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDocumentRequest = exports.CreateDocumentRequest || (exports.CreateDocumentRequest = {}));
var AttachmentInformation;
(function (AttachmentInformation) {
    /**
     * @internal
     */
    AttachmentInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachmentInformation = exports.AttachmentInformation || (exports.AttachmentInformation = {}));
var DocumentHashType;
(function (DocumentHashType) {
    DocumentHashType["SHA1"] = "Sha1";
    DocumentHashType["SHA256"] = "Sha256";
})(DocumentHashType = exports.DocumentHashType || (exports.DocumentHashType = {}));
var DocumentParameter;
(function (DocumentParameter) {
    /**
     * @internal
     */
    DocumentParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentParameter = exports.DocumentParameter || (exports.DocumentParameter = {}));
var PlatformType;
(function (PlatformType) {
    PlatformType["LINUX"] = "Linux";
    PlatformType["WINDOWS"] = "Windows";
})(PlatformType = exports.PlatformType || (exports.PlatformType = {}));
var ReviewStatus;
(function (ReviewStatus) {
    ReviewStatus["APPROVED"] = "APPROVED";
    ReviewStatus["NOT_REVIEWED"] = "NOT_REVIEWED";
    ReviewStatus["PENDING"] = "PENDING";
    ReviewStatus["REJECTED"] = "REJECTED";
})(ReviewStatus = exports.ReviewStatus || (exports.ReviewStatus = {}));
var ReviewInformation;
(function (ReviewInformation) {
    /**
     * @internal
     */
    ReviewInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReviewInformation = exports.ReviewInformation || (exports.ReviewInformation = {}));
var DocumentStatus;
(function (DocumentStatus) {
    DocumentStatus["Active"] = "Active";
    DocumentStatus["Creating"] = "Creating";
    DocumentStatus["Deleting"] = "Deleting";
    DocumentStatus["Failed"] = "Failed";
    DocumentStatus["Updating"] = "Updating";
})(DocumentStatus = exports.DocumentStatus || (exports.DocumentStatus = {}));
var DocumentDescription;
(function (DocumentDescription) {
    /**
     * @internal
     */
    DocumentDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentDescription = exports.DocumentDescription || (exports.DocumentDescription = {}));
var CreateDocumentResult;
(function (CreateDocumentResult) {
    /**
     * @internal
     */
    CreateDocumentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDocumentResult = exports.CreateDocumentResult || (exports.CreateDocumentResult = {}));
var DocumentAlreadyExists;
(function (DocumentAlreadyExists) {
    /**
     * @internal
     */
    DocumentAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentAlreadyExists = exports.DocumentAlreadyExists || (exports.DocumentAlreadyExists = {}));
var DocumentLimitExceeded;
(function (DocumentLimitExceeded) {
    /**
     * @internal
     */
    DocumentLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentLimitExceeded = exports.DocumentLimitExceeded || (exports.DocumentLimitExceeded = {}));
var InvalidDocumentContent;
(function (InvalidDocumentContent) {
    /**
     * @internal
     */
    InvalidDocumentContent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDocumentContent = exports.InvalidDocumentContent || (exports.InvalidDocumentContent = {}));
var InvalidDocumentSchemaVersion;
(function (InvalidDocumentSchemaVersion) {
    /**
     * @internal
     */
    InvalidDocumentSchemaVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDocumentSchemaVersion = exports.InvalidDocumentSchemaVersion || (exports.InvalidDocumentSchemaVersion = {}));
var MaxDocumentSizeExceeded;
(function (MaxDocumentSizeExceeded) {
    /**
     * @internal
     */
    MaxDocumentSizeExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaxDocumentSizeExceeded = exports.MaxDocumentSizeExceeded || (exports.MaxDocumentSizeExceeded = {}));
var CreateMaintenanceWindowRequest;
(function (CreateMaintenanceWindowRequest) {
    /**
     * @internal
     */
    CreateMaintenanceWindowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateMaintenanceWindowRequest = exports.CreateMaintenanceWindowRequest || (exports.CreateMaintenanceWindowRequest = {}));
var CreateMaintenanceWindowResult;
(function (CreateMaintenanceWindowResult) {
    /**
     * @internal
     */
    CreateMaintenanceWindowResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMaintenanceWindowResult = exports.CreateMaintenanceWindowResult || (exports.CreateMaintenanceWindowResult = {}));
var IdempotentParameterMismatch;
(function (IdempotentParameterMismatch) {
    /**
     * @internal
     */
    IdempotentParameterMismatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdempotentParameterMismatch = exports.IdempotentParameterMismatch || (exports.IdempotentParameterMismatch = {}));
var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
    /**
     * @internal
     */
    ResourceLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceLimitExceededException = exports.ResourceLimitExceededException || (exports.ResourceLimitExceededException = {}));
var OpsItemNotification;
(function (OpsItemNotification) {
    /**
     * @internal
     */
    OpsItemNotification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItemNotification = exports.OpsItemNotification || (exports.OpsItemNotification = {}));
var OpsItemDataType;
(function (OpsItemDataType) {
    OpsItemDataType["SEARCHABLE_STRING"] = "SearchableString";
    OpsItemDataType["STRING"] = "String";
})(OpsItemDataType = exports.OpsItemDataType || (exports.OpsItemDataType = {}));
var OpsItemDataValue;
(function (OpsItemDataValue) {
    /**
     * @internal
     */
    OpsItemDataValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItemDataValue = exports.OpsItemDataValue || (exports.OpsItemDataValue = {}));
var RelatedOpsItem;
(function (RelatedOpsItem) {
    /**
     * @internal
     */
    RelatedOpsItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RelatedOpsItem = exports.RelatedOpsItem || (exports.RelatedOpsItem = {}));
var CreateOpsItemRequest;
(function (CreateOpsItemRequest) {
    /**
     * @internal
     */
    CreateOpsItemRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOpsItemRequest = exports.CreateOpsItemRequest || (exports.CreateOpsItemRequest = {}));
var CreateOpsItemResponse;
(function (CreateOpsItemResponse) {
    /**
     * @internal
     */
    CreateOpsItemResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOpsItemResponse = exports.CreateOpsItemResponse || (exports.CreateOpsItemResponse = {}));
var OpsItemAlreadyExistsException;
(function (OpsItemAlreadyExistsException) {
    /**
     * @internal
     */
    OpsItemAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItemAlreadyExistsException = exports.OpsItemAlreadyExistsException || (exports.OpsItemAlreadyExistsException = {}));
var MetadataValue;
(function (MetadataValue) {
    /**
     * @internal
     */
    MetadataValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetadataValue = exports.MetadataValue || (exports.MetadataValue = {}));
var CreateOpsMetadataRequest;
(function (CreateOpsMetadataRequest) {
    /**
     * @internal
     */
    CreateOpsMetadataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOpsMetadataRequest = exports.CreateOpsMetadataRequest || (exports.CreateOpsMetadataRequest = {}));
var CreateOpsMetadataResult;
(function (CreateOpsMetadataResult) {
    /**
     * @internal
     */
    CreateOpsMetadataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOpsMetadataResult = exports.CreateOpsMetadataResult || (exports.CreateOpsMetadataResult = {}));
var OpsMetadataAlreadyExistsException;
(function (OpsMetadataAlreadyExistsException) {
    /**
     * @internal
     */
    OpsMetadataAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsMetadataAlreadyExistsException = exports.OpsMetadataAlreadyExistsException || (exports.OpsMetadataAlreadyExistsException = {}));
var OpsMetadataInvalidArgumentException;
(function (OpsMetadataInvalidArgumentException) {
    /**
     * @internal
     */
    OpsMetadataInvalidArgumentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsMetadataInvalidArgumentException = exports.OpsMetadataInvalidArgumentException || (exports.OpsMetadataInvalidArgumentException = {}));
var OpsMetadataLimitExceededException;
(function (OpsMetadataLimitExceededException) {
    /**
     * @internal
     */
    OpsMetadataLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsMetadataLimitExceededException = exports.OpsMetadataLimitExceededException || (exports.OpsMetadataLimitExceededException = {}));
var OpsMetadataTooManyUpdatesException;
(function (OpsMetadataTooManyUpdatesException) {
    /**
     * @internal
     */
    OpsMetadataTooManyUpdatesException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsMetadataTooManyUpdatesException = exports.OpsMetadataTooManyUpdatesException || (exports.OpsMetadataTooManyUpdatesException = {}));
var PatchComplianceLevel;
(function (PatchComplianceLevel) {
    PatchComplianceLevel["Critical"] = "CRITICAL";
    PatchComplianceLevel["High"] = "HIGH";
    PatchComplianceLevel["Informational"] = "INFORMATIONAL";
    PatchComplianceLevel["Low"] = "LOW";
    PatchComplianceLevel["Medium"] = "MEDIUM";
    PatchComplianceLevel["Unspecified"] = "UNSPECIFIED";
})(PatchComplianceLevel = exports.PatchComplianceLevel || (exports.PatchComplianceLevel = {}));
var PatchFilterKey;
(function (PatchFilterKey) {
    PatchFilterKey["AdvisoryId"] = "ADVISORY_ID";
    PatchFilterKey["Arch"] = "ARCH";
    PatchFilterKey["BugzillaId"] = "BUGZILLA_ID";
    PatchFilterKey["CVEId"] = "CVE_ID";
    PatchFilterKey["Classification"] = "CLASSIFICATION";
    PatchFilterKey["Epoch"] = "EPOCH";
    PatchFilterKey["MsrcSeverity"] = "MSRC_SEVERITY";
    PatchFilterKey["Name"] = "NAME";
    PatchFilterKey["PatchId"] = "PATCH_ID";
    PatchFilterKey["PatchSet"] = "PATCH_SET";
    PatchFilterKey["Priority"] = "PRIORITY";
    PatchFilterKey["Product"] = "PRODUCT";
    PatchFilterKey["ProductFamily"] = "PRODUCT_FAMILY";
    PatchFilterKey["Release"] = "RELEASE";
    PatchFilterKey["Repository"] = "REPOSITORY";
    PatchFilterKey["Section"] = "SECTION";
    PatchFilterKey["Security"] = "SECURITY";
    PatchFilterKey["Severity"] = "SEVERITY";
    PatchFilterKey["Version"] = "VERSION";
})(PatchFilterKey = exports.PatchFilterKey || (exports.PatchFilterKey = {}));
var PatchFilter;
(function (PatchFilter) {
    /**
     * @internal
     */
    PatchFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PatchFilter = exports.PatchFilter || (exports.PatchFilter = {}));
var PatchFilterGroup;
(function (PatchFilterGroup) {
    /**
     * @internal
     */
    PatchFilterGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PatchFilterGroup = exports.PatchFilterGroup || (exports.PatchFilterGroup = {}));
var PatchRule;
(function (PatchRule) {
    /**
     * @internal
     */
    PatchRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PatchRule = exports.PatchRule || (exports.PatchRule = {}));
var PatchRuleGroup;
(function (PatchRuleGroup) {
    /**
     * @internal
     */
    PatchRuleGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PatchRuleGroup = exports.PatchRuleGroup || (exports.PatchRuleGroup = {}));
var OperatingSystem;
(function (OperatingSystem) {
    OperatingSystem["AmazonLinux"] = "AMAZON_LINUX";
    OperatingSystem["AmazonLinux2"] = "AMAZON_LINUX_2";
    OperatingSystem["CentOS"] = "CENTOS";
    OperatingSystem["Debian"] = "DEBIAN";
    OperatingSystem["MacOS"] = "MACOS";
    OperatingSystem["OracleLinux"] = "ORACLE_LINUX";
    OperatingSystem["RedhatEnterpriseLinux"] = "REDHAT_ENTERPRISE_LINUX";
    OperatingSystem["Suse"] = "SUSE";
    OperatingSystem["Ubuntu"] = "UBUNTU";
    OperatingSystem["Windows"] = "WINDOWS";
})(OperatingSystem = exports.OperatingSystem || (exports.OperatingSystem = {}));
var PatchAction;
(function (PatchAction) {
    PatchAction["AllowAsDependency"] = "ALLOW_AS_DEPENDENCY";
    PatchAction["Block"] = "BLOCK";
})(PatchAction = exports.PatchAction || (exports.PatchAction = {}));
var PatchSource;
(function (PatchSource) {
    /**
     * @internal
     */
    PatchSource.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Configuration && { Configuration: smithy_client_1.SENSITIVE_STRING }),
    });
})(PatchSource = exports.PatchSource || (exports.PatchSource = {}));
var CreatePatchBaselineRequest;
(function (CreatePatchBaselineRequest) {
    /**
     * @internal
     */
    CreatePatchBaselineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Sources && { Sources: obj.Sources.map((item) => PatchSource.filterSensitiveLog(item)) }),
    });
})(CreatePatchBaselineRequest = exports.CreatePatchBaselineRequest || (exports.CreatePatchBaselineRequest = {}));
var CreatePatchBaselineResult;
(function (CreatePatchBaselineResult) {
    /**
     * @internal
     */
    CreatePatchBaselineResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePatchBaselineResult = exports.CreatePatchBaselineResult || (exports.CreatePatchBaselineResult = {}));
var ResourceDataSyncDestinationDataSharing;
(function (ResourceDataSyncDestinationDataSharing) {
    /**
     * @internal
     */
    ResourceDataSyncDestinationDataSharing.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDataSyncDestinationDataSharing = exports.ResourceDataSyncDestinationDataSharing || (exports.ResourceDataSyncDestinationDataSharing = {}));
var ResourceDataSyncS3Format;
(function (ResourceDataSyncS3Format) {
    ResourceDataSyncS3Format["JSON_SERDE"] = "JsonSerDe";
})(ResourceDataSyncS3Format = exports.ResourceDataSyncS3Format || (exports.ResourceDataSyncS3Format = {}));
var ResourceDataSyncS3Destination;
(function (ResourceDataSyncS3Destination) {
    /**
     * @internal
     */
    ResourceDataSyncS3Destination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDataSyncS3Destination = exports.ResourceDataSyncS3Destination || (exports.ResourceDataSyncS3Destination = {}));
var ResourceDataSyncOrganizationalUnit;
(function (ResourceDataSyncOrganizationalUnit) {
    /**
     * @internal
     */
    ResourceDataSyncOrganizationalUnit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDataSyncOrganizationalUnit = exports.ResourceDataSyncOrganizationalUnit || (exports.ResourceDataSyncOrganizationalUnit = {}));
var ResourceDataSyncAwsOrganizationsSource;
(function (ResourceDataSyncAwsOrganizationsSource) {
    /**
     * @internal
     */
    ResourceDataSyncAwsOrganizationsSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDataSyncAwsOrganizationsSource = exports.ResourceDataSyncAwsOrganizationsSource || (exports.ResourceDataSyncAwsOrganizationsSource = {}));
var ResourceDataSyncSource;
(function (ResourceDataSyncSource) {
    /**
     * @internal
     */
    ResourceDataSyncSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDataSyncSource = exports.ResourceDataSyncSource || (exports.ResourceDataSyncSource = {}));
var CreateResourceDataSyncRequest;
(function (CreateResourceDataSyncRequest) {
    /**
     * @internal
     */
    CreateResourceDataSyncRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResourceDataSyncRequest = exports.CreateResourceDataSyncRequest || (exports.CreateResourceDataSyncRequest = {}));
var CreateResourceDataSyncResult;
(function (CreateResourceDataSyncResult) {
    /**
     * @internal
     */
    CreateResourceDataSyncResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResourceDataSyncResult = exports.CreateResourceDataSyncResult || (exports.CreateResourceDataSyncResult = {}));
var ResourceDataSyncAlreadyExistsException;
(function (ResourceDataSyncAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceDataSyncAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDataSyncAlreadyExistsException = exports.ResourceDataSyncAlreadyExistsException || (exports.ResourceDataSyncAlreadyExistsException = {}));
var ResourceDataSyncCountExceededException;
(function (ResourceDataSyncCountExceededException) {
    /**
     * @internal
     */
    ResourceDataSyncCountExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDataSyncCountExceededException = exports.ResourceDataSyncCountExceededException || (exports.ResourceDataSyncCountExceededException = {}));
var ResourceDataSyncInvalidConfigurationException;
(function (ResourceDataSyncInvalidConfigurationException) {
    /**
     * @internal
     */
    ResourceDataSyncInvalidConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDataSyncInvalidConfigurationException = exports.ResourceDataSyncInvalidConfigurationException || (exports.ResourceDataSyncInvalidConfigurationException = {}));
var DeleteActivationRequest;
(function (DeleteActivationRequest) {
    /**
     * @internal
     */
    DeleteActivationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteActivationRequest = exports.DeleteActivationRequest || (exports.DeleteActivationRequest = {}));
var DeleteActivationResult;
(function (DeleteActivationResult) {
    /**
     * @internal
     */
    DeleteActivationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteActivationResult = exports.DeleteActivationResult || (exports.DeleteActivationResult = {}));
var InvalidActivation;
(function (InvalidActivation) {
    /**
     * @internal
     */
    InvalidActivation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidActivation = exports.InvalidActivation || (exports.InvalidActivation = {}));
var InvalidActivationId;
(function (InvalidActivationId) {
    /**
     * @internal
     */
    InvalidActivationId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidActivationId = exports.InvalidActivationId || (exports.InvalidActivationId = {}));
var AssociationDoesNotExist;
(function (AssociationDoesNotExist) {
    /**
     * @internal
     */
    AssociationDoesNotExist.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationDoesNotExist = exports.AssociationDoesNotExist || (exports.AssociationDoesNotExist = {}));
var DeleteAssociationRequest;
(function (DeleteAssociationRequest) {
    /**
     * @internal
     */
    DeleteAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAssociationRequest = exports.DeleteAssociationRequest || (exports.DeleteAssociationRequest = {}));
var DeleteAssociationResult;
(function (DeleteAssociationResult) {
    /**
     * @internal
     */
    DeleteAssociationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAssociationResult = exports.DeleteAssociationResult || (exports.DeleteAssociationResult = {}));
var AssociatedInstances;
(function (AssociatedInstances) {
    /**
     * @internal
     */
    AssociatedInstances.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociatedInstances = exports.AssociatedInstances || (exports.AssociatedInstances = {}));
var DeleteDocumentRequest;
(function (DeleteDocumentRequest) {
    /**
     * @internal
     */
    DeleteDocumentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDocumentRequest = exports.DeleteDocumentRequest || (exports.DeleteDocumentRequest = {}));
var DeleteDocumentResult;
(function (DeleteDocumentResult) {
    /**
     * @internal
     */
    DeleteDocumentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDocumentResult = exports.DeleteDocumentResult || (exports.DeleteDocumentResult = {}));
var InvalidDocumentOperation;
(function (InvalidDocumentOperation) {
    /**
     * @internal
     */
    InvalidDocumentOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDocumentOperation = exports.InvalidDocumentOperation || (exports.InvalidDocumentOperation = {}));
var InventorySchemaDeleteOption;
(function (InventorySchemaDeleteOption) {
    InventorySchemaDeleteOption["DELETE_SCHEMA"] = "DeleteSchema";
    InventorySchemaDeleteOption["DISABLE_SCHEMA"] = "DisableSchema";
})(InventorySchemaDeleteOption = exports.InventorySchemaDeleteOption || (exports.InventorySchemaDeleteOption = {}));
var DeleteInventoryRequest;
(function (DeleteInventoryRequest) {
    /**
     * @internal
     */
    DeleteInventoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInventoryRequest = exports.DeleteInventoryRequest || (exports.DeleteInventoryRequest = {}));
var InventoryDeletionSummaryItem;
(function (InventoryDeletionSummaryItem) {
    /**
     * @internal
     */
    InventoryDeletionSummaryItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventoryDeletionSummaryItem = exports.InventoryDeletionSummaryItem || (exports.InventoryDeletionSummaryItem = {}));
var InventoryDeletionSummary;
(function (InventoryDeletionSummary) {
    /**
     * @internal
     */
    InventoryDeletionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventoryDeletionSummary = exports.InventoryDeletionSummary || (exports.InventoryDeletionSummary = {}));
var DeleteInventoryResult;
(function (DeleteInventoryResult) {
    /**
     * @internal
     */
    DeleteInventoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInventoryResult = exports.DeleteInventoryResult || (exports.DeleteInventoryResult = {}));
var InvalidDeleteInventoryParametersException;
(function (InvalidDeleteInventoryParametersException) {
    /**
     * @internal
     */
    InvalidDeleteInventoryParametersException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDeleteInventoryParametersException = exports.InvalidDeleteInventoryParametersException || (exports.InvalidDeleteInventoryParametersException = {}));
var InvalidInventoryRequestException;
(function (InvalidInventoryRequestException) {
    /**
     * @internal
     */
    InvalidInventoryRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInventoryRequestException = exports.InvalidInventoryRequestException || (exports.InvalidInventoryRequestException = {}));
var InvalidOptionException;
(function (InvalidOptionException) {
    /**
     * @internal
     */
    InvalidOptionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidOptionException = exports.InvalidOptionException || (exports.InvalidOptionException = {}));
var InvalidTypeNameException;
(function (InvalidTypeNameException) {
    /**
     * @internal
     */
    InvalidTypeNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTypeNameException = exports.InvalidTypeNameException || (exports.InvalidTypeNameException = {}));
var DeleteMaintenanceWindowRequest;
(function (DeleteMaintenanceWindowRequest) {
    /**
     * @internal
     */
    DeleteMaintenanceWindowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMaintenanceWindowRequest = exports.DeleteMaintenanceWindowRequest || (exports.DeleteMaintenanceWindowRequest = {}));
var DeleteMaintenanceWindowResult;
(function (DeleteMaintenanceWindowResult) {
    /**
     * @internal
     */
    DeleteMaintenanceWindowResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMaintenanceWindowResult = exports.DeleteMaintenanceWindowResult || (exports.DeleteMaintenanceWindowResult = {}));
var DeleteOpsMetadataRequest;
(function (DeleteOpsMetadataRequest) {
    /**
     * @internal
     */
    DeleteOpsMetadataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOpsMetadataRequest = exports.DeleteOpsMetadataRequest || (exports.DeleteOpsMetadataRequest = {}));
var DeleteOpsMetadataResult;
(function (DeleteOpsMetadataResult) {
    /**
     * @internal
     */
    DeleteOpsMetadataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOpsMetadataResult = exports.DeleteOpsMetadataResult || (exports.DeleteOpsMetadataResult = {}));
var OpsMetadataNotFoundException;
(function (OpsMetadataNotFoundException) {
    /**
     * @internal
     */
    OpsMetadataNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsMetadataNotFoundException = exports.OpsMetadataNotFoundException || (exports.OpsMetadataNotFoundException = {}));
var DeleteParameterRequest;
(function (DeleteParameterRequest) {
    /**
     * @internal
     */
    DeleteParameterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteParameterRequest = exports.DeleteParameterRequest || (exports.DeleteParameterRequest = {}));
var DeleteParameterResult;
(function (DeleteParameterResult) {
    /**
     * @internal
     */
    DeleteParameterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteParameterResult = exports.DeleteParameterResult || (exports.DeleteParameterResult = {}));
var ParameterNotFound;
(function (ParameterNotFound) {
    /**
     * @internal
     */
    ParameterNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterNotFound = exports.ParameterNotFound || (exports.ParameterNotFound = {}));
var DeleteParametersRequest;
(function (DeleteParametersRequest) {
    /**
     * @internal
     */
    DeleteParametersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteParametersRequest = exports.DeleteParametersRequest || (exports.DeleteParametersRequest = {}));
var DeleteParametersResult;
(function (DeleteParametersResult) {
    /**
     * @internal
     */
    DeleteParametersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteParametersResult = exports.DeleteParametersResult || (exports.DeleteParametersResult = {}));
var DeletePatchBaselineRequest;
(function (DeletePatchBaselineRequest) {
    /**
     * @internal
     */
    DeletePatchBaselineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePatchBaselineRequest = exports.DeletePatchBaselineRequest || (exports.DeletePatchBaselineRequest = {}));
var DeletePatchBaselineResult;
(function (DeletePatchBaselineResult) {
    /**
     * @internal
     */
    DeletePatchBaselineResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePatchBaselineResult = exports.DeletePatchBaselineResult || (exports.DeletePatchBaselineResult = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var DeleteResourceDataSyncRequest;
(function (DeleteResourceDataSyncRequest) {
    /**
     * @internal
     */
    DeleteResourceDataSyncRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourceDataSyncRequest = exports.DeleteResourceDataSyncRequest || (exports.DeleteResourceDataSyncRequest = {}));
var DeleteResourceDataSyncResult;
(function (DeleteResourceDataSyncResult) {
    /**
     * @internal
     */
    DeleteResourceDataSyncResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourceDataSyncResult = exports.DeleteResourceDataSyncResult || (exports.DeleteResourceDataSyncResult = {}));
var ResourceDataSyncNotFoundException;
(function (ResourceDataSyncNotFoundException) {
    /**
     * @internal
     */
    ResourceDataSyncNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDataSyncNotFoundException = exports.ResourceDataSyncNotFoundException || (exports.ResourceDataSyncNotFoundException = {}));
var DeregisterManagedInstanceRequest;
(function (DeregisterManagedInstanceRequest) {
    /**
     * @internal
     */
    DeregisterManagedInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterManagedInstanceRequest = exports.DeregisterManagedInstanceRequest || (exports.DeregisterManagedInstanceRequest = {}));
var DeregisterManagedInstanceResult;
(function (DeregisterManagedInstanceResult) {
    /**
     * @internal
     */
    DeregisterManagedInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterManagedInstanceResult = exports.DeregisterManagedInstanceResult || (exports.DeregisterManagedInstanceResult = {}));
var DeregisterPatchBaselineForPatchGroupRequest;
(function (DeregisterPatchBaselineForPatchGroupRequest) {
    /**
     * @internal
     */
    DeregisterPatchBaselineForPatchGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterPatchBaselineForPatchGroupRequest = exports.DeregisterPatchBaselineForPatchGroupRequest || (exports.DeregisterPatchBaselineForPatchGroupRequest = {}));
var DeregisterPatchBaselineForPatchGroupResult;
(function (DeregisterPatchBaselineForPatchGroupResult) {
    /**
     * @internal
     */
    DeregisterPatchBaselineForPatchGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterPatchBaselineForPatchGroupResult = exports.DeregisterPatchBaselineForPatchGroupResult || (exports.DeregisterPatchBaselineForPatchGroupResult = {}));
var DeregisterTargetFromMaintenanceWindowRequest;
(function (DeregisterTargetFromMaintenanceWindowRequest) {
    /**
     * @internal
     */
    DeregisterTargetFromMaintenanceWindowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterTargetFromMaintenanceWindowRequest = exports.DeregisterTargetFromMaintenanceWindowRequest || (exports.DeregisterTargetFromMaintenanceWindowRequest = {}));
var DeregisterTargetFromMaintenanceWindowResult;
(function (DeregisterTargetFromMaintenanceWindowResult) {
    /**
     * @internal
     */
    DeregisterTargetFromMaintenanceWindowResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterTargetFromMaintenanceWindowResult = exports.DeregisterTargetFromMaintenanceWindowResult || (exports.DeregisterTargetFromMaintenanceWindowResult = {}));
var TargetInUseException;
(function (TargetInUseException) {
    /**
     * @internal
     */
    TargetInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetInUseException = exports.TargetInUseException || (exports.TargetInUseException = {}));
var DeregisterTaskFromMaintenanceWindowRequest;
(function (DeregisterTaskFromMaintenanceWindowRequest) {
    /**
     * @internal
     */
    DeregisterTaskFromMaintenanceWindowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterTaskFromMaintenanceWindowRequest = exports.DeregisterTaskFromMaintenanceWindowRequest || (exports.DeregisterTaskFromMaintenanceWindowRequest = {}));
var DeregisterTaskFromMaintenanceWindowResult;
(function (DeregisterTaskFromMaintenanceWindowResult) {
    /**
     * @internal
     */
    DeregisterTaskFromMaintenanceWindowResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterTaskFromMaintenanceWindowResult = exports.DeregisterTaskFromMaintenanceWindowResult || (exports.DeregisterTaskFromMaintenanceWindowResult = {}));
var DescribeActivationsFilterKeys;
(function (DescribeActivationsFilterKeys) {
    DescribeActivationsFilterKeys["ACTIVATION_IDS"] = "ActivationIds";
    DescribeActivationsFilterKeys["DEFAULT_INSTANCE_NAME"] = "DefaultInstanceName";
    DescribeActivationsFilterKeys["IAM_ROLE"] = "IamRole";
})(DescribeActivationsFilterKeys = exports.DescribeActivationsFilterKeys || (exports.DescribeActivationsFilterKeys = {}));
var DescribeActivationsFilter;
(function (DescribeActivationsFilter) {
    /**
     * @internal
     */
    DescribeActivationsFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeActivationsFilter = exports.DescribeActivationsFilter || (exports.DescribeActivationsFilter = {}));
var DescribeActivationsRequest;
(function (DescribeActivationsRequest) {
    /**
     * @internal
     */
    DescribeActivationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeActivationsRequest = exports.DescribeActivationsRequest || (exports.DescribeActivationsRequest = {}));
var DescribeActivationsResult;
(function (DescribeActivationsResult) {
    /**
     * @internal
     */
    DescribeActivationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeActivationsResult = exports.DescribeActivationsResult || (exports.DescribeActivationsResult = {}));
var InvalidFilter;
(function (InvalidFilter) {
    /**
     * @internal
     */
    InvalidFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidFilter = exports.InvalidFilter || (exports.InvalidFilter = {}));
var InvalidNextToken;
(function (InvalidNextToken) {
    /**
     * @internal
     */
    InvalidNextToken.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextToken = exports.InvalidNextToken || (exports.InvalidNextToken = {}));
var DescribeAssociationRequest;
(function (DescribeAssociationRequest) {
    /**
     * @internal
     */
    DescribeAssociationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssociationRequest = exports.DescribeAssociationRequest || (exports.DescribeAssociationRequest = {}));
var DescribeAssociationResult;
(function (DescribeAssociationResult) {
    /**
     * @internal
     */
    DescribeAssociationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssociationResult = exports.DescribeAssociationResult || (exports.DescribeAssociationResult = {}));
var InvalidAssociationVersion;
(function (InvalidAssociationVersion) {
    /**
     * @internal
     */
    InvalidAssociationVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAssociationVersion = exports.InvalidAssociationVersion || (exports.InvalidAssociationVersion = {}));
var AssociationExecutionFilterKey;
(function (AssociationExecutionFilterKey) {
    AssociationExecutionFilterKey["CreatedTime"] = "CreatedTime";
    AssociationExecutionFilterKey["ExecutionId"] = "ExecutionId";
    AssociationExecutionFilterKey["Status"] = "Status";
})(AssociationExecutionFilterKey = exports.AssociationExecutionFilterKey || (exports.AssociationExecutionFilterKey = {}));
var AssociationFilterOperatorType;
(function (AssociationFilterOperatorType) {
    AssociationFilterOperatorType["Equal"] = "EQUAL";
    AssociationFilterOperatorType["GreaterThan"] = "GREATER_THAN";
    AssociationFilterOperatorType["LessThan"] = "LESS_THAN";
})(AssociationFilterOperatorType = exports.AssociationFilterOperatorType || (exports.AssociationFilterOperatorType = {}));
var AssociationExecutionFilter;
(function (AssociationExecutionFilter) {
    /**
     * @internal
     */
    AssociationExecutionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationExecutionFilter = exports.AssociationExecutionFilter || (exports.AssociationExecutionFilter = {}));
var DescribeAssociationExecutionsRequest;
(function (DescribeAssociationExecutionsRequest) {
    /**
     * @internal
     */
    DescribeAssociationExecutionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssociationExecutionsRequest = exports.DescribeAssociationExecutionsRequest || (exports.DescribeAssociationExecutionsRequest = {}));
var AssociationExecution;
(function (AssociationExecution) {
    /**
     * @internal
     */
    AssociationExecution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationExecution = exports.AssociationExecution || (exports.AssociationExecution = {}));
var DescribeAssociationExecutionsResult;
(function (DescribeAssociationExecutionsResult) {
    /**
     * @internal
     */
    DescribeAssociationExecutionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssociationExecutionsResult = exports.DescribeAssociationExecutionsResult || (exports.DescribeAssociationExecutionsResult = {}));
var AssociationExecutionDoesNotExist;
(function (AssociationExecutionDoesNotExist) {
    /**
     * @internal
     */
    AssociationExecutionDoesNotExist.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationExecutionDoesNotExist = exports.AssociationExecutionDoesNotExist || (exports.AssociationExecutionDoesNotExist = {}));
var AssociationExecutionTargetsFilterKey;
(function (AssociationExecutionTargetsFilterKey) {
    AssociationExecutionTargetsFilterKey["ResourceId"] = "ResourceId";
    AssociationExecutionTargetsFilterKey["ResourceType"] = "ResourceType";
    AssociationExecutionTargetsFilterKey["Status"] = "Status";
})(AssociationExecutionTargetsFilterKey = exports.AssociationExecutionTargetsFilterKey || (exports.AssociationExecutionTargetsFilterKey = {}));
var AssociationExecutionTargetsFilter;
(function (AssociationExecutionTargetsFilter) {
    /**
     * @internal
     */
    AssociationExecutionTargetsFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationExecutionTargetsFilter = exports.AssociationExecutionTargetsFilter || (exports.AssociationExecutionTargetsFilter = {}));
var DescribeAssociationExecutionTargetsRequest;
(function (DescribeAssociationExecutionTargetsRequest) {
    /**
     * @internal
     */
    DescribeAssociationExecutionTargetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssociationExecutionTargetsRequest = exports.DescribeAssociationExecutionTargetsRequest || (exports.DescribeAssociationExecutionTargetsRequest = {}));
var OutputSource;
(function (OutputSource) {
    /**
     * @internal
     */
    OutputSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputSource = exports.OutputSource || (exports.OutputSource = {}));
var AssociationExecutionTarget;
(function (AssociationExecutionTarget) {
    /**
     * @internal
     */
    AssociationExecutionTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociationExecutionTarget = exports.AssociationExecutionTarget || (exports.AssociationExecutionTarget = {}));
var DescribeAssociationExecutionTargetsResult;
(function (DescribeAssociationExecutionTargetsResult) {
    /**
     * @internal
     */
    DescribeAssociationExecutionTargetsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAssociationExecutionTargetsResult = exports.DescribeAssociationExecutionTargetsResult || (exports.DescribeAssociationExecutionTargetsResult = {}));
var AutomationExecutionFilterKey;
(function (AutomationExecutionFilterKey) {
    AutomationExecutionFilterKey["AUTOMATION_SUBTYPE"] = "AutomationSubtype";
    AutomationExecutionFilterKey["AUTOMATION_TYPE"] = "AutomationType";
    AutomationExecutionFilterKey["CURRENT_ACTION"] = "CurrentAction";
    AutomationExecutionFilterKey["DOCUMENT_NAME_PREFIX"] = "DocumentNamePrefix";
    AutomationExecutionFilterKey["EXECUTION_ID"] = "ExecutionId";
    AutomationExecutionFilterKey["EXECUTION_STATUS"] = "ExecutionStatus";
    AutomationExecutionFilterKey["OPS_ITEM_ID"] = "OpsItemId";
    AutomationExecutionFilterKey["PARENT_EXECUTION_ID"] = "ParentExecutionId";
    AutomationExecutionFilterKey["START_TIME_AFTER"] = "StartTimeAfter";
    AutomationExecutionFilterKey["START_TIME_BEFORE"] = "StartTimeBefore";
    AutomationExecutionFilterKey["TAG_KEY"] = "TagKey";
    AutomationExecutionFilterKey["TARGET_RESOURCE_GROUP"] = "TargetResourceGroup";
})(AutomationExecutionFilterKey = exports.AutomationExecutionFilterKey || (exports.AutomationExecutionFilterKey = {}));
var AutomationExecutionFilter;
(function (AutomationExecutionFilter) {
    /**
     * @internal
     */
    AutomationExecutionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomationExecutionFilter = exports.AutomationExecutionFilter || (exports.AutomationExecutionFilter = {}));
var DescribeAutomationExecutionsRequest;
(function (DescribeAutomationExecutionsRequest) {
    /**
     * @internal
     */
    DescribeAutomationExecutionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAutomationExecutionsRequest = exports.DescribeAutomationExecutionsRequest || (exports.DescribeAutomationExecutionsRequest = {}));
var AutomationExecutionStatus;
(function (AutomationExecutionStatus) {
    AutomationExecutionStatus["APPROVED"] = "Approved";
    AutomationExecutionStatus["CANCELLED"] = "Cancelled";
    AutomationExecutionStatus["CANCELLING"] = "Cancelling";
    AutomationExecutionStatus["CHANGE_CALENDAR_OVERRIDE_APPROVED"] = "ChangeCalendarOverrideApproved";
    AutomationExecutionStatus["CHANGE_CALENDAR_OVERRIDE_REJECTED"] = "ChangeCalendarOverrideRejected";
    AutomationExecutionStatus["COMPLETED_WITH_FAILURE"] = "CompletedWithFailure";
    AutomationExecutionStatus["COMPLETED_WITH_SUCCESS"] = "CompletedWithSuccess";
    AutomationExecutionStatus["FAILED"] = "Failed";
    AutomationExecutionStatus["INPROGRESS"] = "InProgress";
    AutomationExecutionStatus["PENDING"] = "Pending";
    AutomationExecutionStatus["PENDING_APPROVAL"] = "PendingApproval";
    AutomationExecutionStatus["PENDING_CHANGE_CALENDAR_OVERRIDE"] = "PendingChangeCalendarOverride";
    AutomationExecutionStatus["REJECTED"] = "Rejected";
    AutomationExecutionStatus["RUNBOOK_INPROGRESS"] = "RunbookInProgress";
    AutomationExecutionStatus["SCHEDULED"] = "Scheduled";
    AutomationExecutionStatus["SUCCESS"] = "Success";
    AutomationExecutionStatus["TIMEDOUT"] = "TimedOut";
    AutomationExecutionStatus["WAITING"] = "Waiting";
})(AutomationExecutionStatus = exports.AutomationExecutionStatus || (exports.AutomationExecutionStatus = {}));
var AutomationSubtype;
(function (AutomationSubtype) {
    AutomationSubtype["ChangeRequest"] = "ChangeRequest";
})(AutomationSubtype = exports.AutomationSubtype || (exports.AutomationSubtype = {}));
var AutomationType;
(function (AutomationType) {
    AutomationType["CrossAccount"] = "CrossAccount";
    AutomationType["Local"] = "Local";
})(AutomationType = exports.AutomationType || (exports.AutomationType = {}));
var ExecutionMode;
(function (ExecutionMode) {
    ExecutionMode["Auto"] = "Auto";
    ExecutionMode["Interactive"] = "Interactive";
})(ExecutionMode = exports.ExecutionMode || (exports.ExecutionMode = {}));
var ResolvedTargets;
(function (ResolvedTargets) {
    /**
     * @internal
     */
    ResolvedTargets.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolvedTargets = exports.ResolvedTargets || (exports.ResolvedTargets = {}));
var Runbook;
(function (Runbook) {
    /**
     * @internal
     */
    Runbook.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Runbook = exports.Runbook || (exports.Runbook = {}));
var AutomationExecutionMetadata;
(function (AutomationExecutionMetadata) {
    /**
     * @internal
     */
    AutomationExecutionMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomationExecutionMetadata = exports.AutomationExecutionMetadata || (exports.AutomationExecutionMetadata = {}));
var DescribeAutomationExecutionsResult;
(function (DescribeAutomationExecutionsResult) {
    /**
     * @internal
     */
    DescribeAutomationExecutionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAutomationExecutionsResult = exports.DescribeAutomationExecutionsResult || (exports.DescribeAutomationExecutionsResult = {}));
var InvalidFilterKey;
(function (InvalidFilterKey) {
    /**
     * @internal
     */
    InvalidFilterKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidFilterKey = exports.InvalidFilterKey || (exports.InvalidFilterKey = {}));
var InvalidFilterValue;
(function (InvalidFilterValue) {
    /**
     * @internal
     */
    InvalidFilterValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidFilterValue = exports.InvalidFilterValue || (exports.InvalidFilterValue = {}));
var AutomationExecutionNotFoundException;
(function (AutomationExecutionNotFoundException) {
    /**
     * @internal
     */
    AutomationExecutionNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutomationExecutionNotFoundException = exports.AutomationExecutionNotFoundException || (exports.AutomationExecutionNotFoundException = {}));
var StepExecutionFilterKey;
(function (StepExecutionFilterKey) {
    StepExecutionFilterKey["ACTION"] = "Action";
    StepExecutionFilterKey["START_TIME_AFTER"] = "StartTimeAfter";
    StepExecutionFilterKey["START_TIME_BEFORE"] = "StartTimeBefore";
    StepExecutionFilterKey["STEP_EXECUTION_ID"] = "StepExecutionId";
    StepExecutionFilterKey["STEP_EXECUTION_STATUS"] = "StepExecutionStatus";
    StepExecutionFilterKey["STEP_NAME"] = "StepName";
})(StepExecutionFilterKey = exports.StepExecutionFilterKey || (exports.StepExecutionFilterKey = {}));
var StepExecutionFilter;
(function (StepExecutionFilter) {
    /**
     * @internal
     */
    StepExecutionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StepExecutionFilter = exports.StepExecutionFilter || (exports.StepExecutionFilter = {}));
var DescribeAutomationStepExecutionsRequest;
(function (DescribeAutomationStepExecutionsRequest) {
    /**
     * @internal
     */
    DescribeAutomationStepExecutionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAutomationStepExecutionsRequest = exports.DescribeAutomationStepExecutionsRequest || (exports.DescribeAutomationStepExecutionsRequest = {}));
var FailureDetails;
(function (FailureDetails) {
    /**
     * @internal
     */
    FailureDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailureDetails = exports.FailureDetails || (exports.FailureDetails = {}));
var StepExecution;
(function (StepExecution) {
    /**
     * @internal
     */
    StepExecution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StepExecution = exports.StepExecution || (exports.StepExecution = {}));
var DescribeAutomationStepExecutionsResult;
(function (DescribeAutomationStepExecutionsResult) {
    /**
     * @internal
     */
    DescribeAutomationStepExecutionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAutomationStepExecutionsResult = exports.DescribeAutomationStepExecutionsResult || (exports.DescribeAutomationStepExecutionsResult = {}));
var PatchOrchestratorFilter;
(function (PatchOrchestratorFilter) {
    /**
     * @internal
     */
    PatchOrchestratorFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PatchOrchestratorFilter = exports.PatchOrchestratorFilter || (exports.PatchOrchestratorFilter = {}));
var DescribeAvailablePatchesRequest;
(function (DescribeAvailablePatchesRequest) {
    /**
     * @internal
     */
    DescribeAvailablePatchesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAvailablePatchesRequest = exports.DescribeAvailablePatchesRequest || (exports.DescribeAvailablePatchesRequest = {}));
var Patch;
(function (Patch) {
    /**
     * @internal
     */
    Patch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Patch = exports.Patch || (exports.Patch = {}));
var DescribeAvailablePatchesResult;
(function (DescribeAvailablePatchesResult) {
    /**
     * @internal
     */
    DescribeAvailablePatchesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAvailablePatchesResult = exports.DescribeAvailablePatchesResult || (exports.DescribeAvailablePatchesResult = {}));
var DescribeDocumentRequest;
(function (DescribeDocumentRequest) {
    /**
     * @internal
     */
    DescribeDocumentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDocumentRequest = exports.DescribeDocumentRequest || (exports.DescribeDocumentRequest = {}));
var DescribeDocumentResult;
(function (DescribeDocumentResult) {
    /**
     * @internal
     */
    DescribeDocumentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDocumentResult = exports.DescribeDocumentResult || (exports.DescribeDocumentResult = {}));
var DocumentPermissionType;
(function (DocumentPermissionType) {
    DocumentPermissionType["SHARE"] = "Share";
})(DocumentPermissionType = exports.DocumentPermissionType || (exports.DocumentPermissionType = {}));
var DescribeDocumentPermissionRequest;
(function (DescribeDocumentPermissionRequest) {
    /**
     * @internal
     */
    DescribeDocumentPermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDocumentPermissionRequest = exports.DescribeDocumentPermissionRequest || (exports.DescribeDocumentPermissionRequest = {}));
var DescribeDocumentPermissionResponse;
(function (DescribeDocumentPermissionResponse) {
    /**
     * @internal
     */
    DescribeDocumentPermissionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDocumentPermissionResponse = exports.DescribeDocumentPermissionResponse || (exports.DescribeDocumentPermissionResponse = {}));
var InvalidPermissionType;
(function (InvalidPermissionType) {
    /**
     * @internal
     */
    InvalidPermissionType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPermissionType = exports.InvalidPermissionType || (exports.InvalidPermissionType = {}));
var DescribeEffectiveInstanceAssociationsRequest;
(function (DescribeEffectiveInstanceAssociationsRequest) {
    /**
     * @internal
     */
    DescribeEffectiveInstanceAssociationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEffectiveInstanceAssociationsRequest = exports.DescribeEffectiveInstanceAssociationsRequest || (exports.DescribeEffectiveInstanceAssociationsRequest = {}));
var InstanceAssociation;
(function (InstanceAssociation) {
    /**
     * @internal
     */
    InstanceAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceAssociation = exports.InstanceAssociation || (exports.InstanceAssociation = {}));
var DescribeEffectiveInstanceAssociationsResult;
(function (DescribeEffectiveInstanceAssociationsResult) {
    /**
     * @internal
     */
    DescribeEffectiveInstanceAssociationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEffectiveInstanceAssociationsResult = exports.DescribeEffectiveInstanceAssociationsResult || (exports.DescribeEffectiveInstanceAssociationsResult = {}));
var DescribeEffectivePatchesForPatchBaselineRequest;
(function (DescribeEffectivePatchesForPatchBaselineRequest) {
    /**
     * @internal
     */
    DescribeEffectivePatchesForPatchBaselineRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEffectivePatchesForPatchBaselineRequest = exports.DescribeEffectivePatchesForPatchBaselineRequest || (exports.DescribeEffectivePatchesForPatchBaselineRequest = {}));
var PatchDeploymentStatus;
(function (PatchDeploymentStatus) {
    PatchDeploymentStatus["Approved"] = "APPROVED";
    PatchDeploymentStatus["ExplicitApproved"] = "EXPLICIT_APPROVED";
    PatchDeploymentStatus["ExplicitRejected"] = "EXPLICIT_REJECTED";
    PatchDeploymentStatus["PendingApproval"] = "PENDING_APPROVAL";
})(PatchDeploymentStatus = exports.PatchDeploymentStatus || (exports.PatchDeploymentStatus = {}));
var PatchStatus;
(function (PatchStatus) {
    /**
     * @internal
     */
    PatchStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PatchStatus = exports.PatchStatus || (exports.PatchStatus = {}));
var EffectivePatch;
(function (EffectivePatch) {
    /**
     * @internal
     */
    EffectivePatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EffectivePatch = exports.EffectivePatch || (exports.EffectivePatch = {}));
var DescribeEffectivePatchesForPatchBaselineResult;
(function (DescribeEffectivePatchesForPatchBaselineResult) {
    /**
     * @internal
     */
    DescribeEffectivePatchesForPatchBaselineResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEffectivePatchesForPatchBaselineResult = exports.DescribeEffectivePatchesForPatchBaselineResult || (exports.DescribeEffectivePatchesForPatchBaselineResult = {}));
var UnsupportedOperatingSystem;
(function (UnsupportedOperatingSystem) {
    /**
     * @internal
     */
    UnsupportedOperatingSystem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedOperatingSystem = exports.UnsupportedOperatingSystem || (exports.UnsupportedOperatingSystem = {}));
var DescribeInstanceAssociationsStatusRequest;
(function (DescribeInstanceAssociationsStatusRequest) {
    /**
     * @internal
     */
    DescribeInstanceAssociationsStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceAssociationsStatusRequest = exports.DescribeInstanceAssociationsStatusRequest || (exports.DescribeInstanceAssociationsStatusRequest = {}));
var S3OutputUrl;
(function (S3OutputUrl) {
    /**
     * @internal
     */
    S3OutputUrl.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3OutputUrl = exports.S3OutputUrl || (exports.S3OutputUrl = {}));
var InstanceAssociationOutputUrl;
(function (InstanceAssociationOutputUrl) {
    /**
     * @internal
     */
    InstanceAssociationOutputUrl.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceAssociationOutputUrl = exports.InstanceAssociationOutputUrl || (exports.InstanceAssociationOutputUrl = {}));
var InstanceAssociationStatusInfo;
(function (InstanceAssociationStatusInfo) {
    /**
     * @internal
     */
    InstanceAssociationStatusInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceAssociationStatusInfo = exports.InstanceAssociationStatusInfo || (exports.InstanceAssociationStatusInfo = {}));
var DescribeInstanceAssociationsStatusResult;
(function (DescribeInstanceAssociationsStatusResult) {
    /**
     * @internal
     */
    DescribeInstanceAssociationsStatusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceAssociationsStatusResult = exports.DescribeInstanceAssociationsStatusResult || (exports.DescribeInstanceAssociationsStatusResult = {}));
var InstanceInformationStringFilter;
(function (InstanceInformationStringFilter) {
    /**
     * @internal
     */
    InstanceInformationStringFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceInformationStringFilter = exports.InstanceInformationStringFilter || (exports.InstanceInformationStringFilter = {}));
var InstanceInformationFilterKey;
(function (InstanceInformationFilterKey) {
    InstanceInformationFilterKey["ACTIVATION_IDS"] = "ActivationIds";
    InstanceInformationFilterKey["AGENT_VERSION"] = "AgentVersion";
    InstanceInformationFilterKey["ASSOCIATION_STATUS"] = "AssociationStatus";
    InstanceInformationFilterKey["IAM_ROLE"] = "IamRole";
    InstanceInformationFilterKey["INSTANCE_IDS"] = "InstanceIds";
    InstanceInformationFilterKey["PING_STATUS"] = "PingStatus";
    InstanceInformationFilterKey["PLATFORM_TYPES"] = "PlatformTypes";
    InstanceInformationFilterKey["RESOURCE_TYPE"] = "ResourceType";
})(InstanceInformationFilterKey = exports.InstanceInformationFilterKey || (exports.InstanceInformationFilterKey = {}));
var InstanceInformationFilter;
(function (InstanceInformationFilter) {
    /**
     * @internal
     */
    InstanceInformationFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceInformationFilter = exports.InstanceInformationFilter || (exports.InstanceInformationFilter = {}));
var DescribeInstanceInformationRequest;
(function (DescribeInstanceInformationRequest) {
    /**
     * @internal
     */
    DescribeInstanceInformationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceInformationRequest = exports.DescribeInstanceInformationRequest || (exports.DescribeInstanceInformationRequest = {}));
var InstanceAggregatedAssociationOverview;
(function (InstanceAggregatedAssociationOverview) {
    /**
     * @internal
     */
    InstanceAggregatedAssociationOverview.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceAggregatedAssociationOverview = exports.InstanceAggregatedAssociationOverview || (exports.InstanceAggregatedAssociationOverview = {}));
var PingStatus;
(function (PingStatus) {
    PingStatus["CONNECTION_LOST"] = "ConnectionLost";
    PingStatus["INACTIVE"] = "Inactive";
    PingStatus["ONLINE"] = "Online";
})(PingStatus = exports.PingStatus || (exports.PingStatus = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["DOCUMENT"] = "Document";
    ResourceType["EC2_INSTANCE"] = "EC2Instance";
    ResourceType["MANAGED_INSTANCE"] = "ManagedInstance";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var InstanceInformation;
(function (InstanceInformation) {
    /**
     * @internal
     */
    InstanceInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceInformation = exports.InstanceInformation || (exports.InstanceInformation = {}));
var DescribeInstanceInformationResult;
(function (DescribeInstanceInformationResult) {
    /**
     * @internal
     */
    DescribeInstanceInformationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstanceInformationResult = exports.DescribeInstanceInformationResult || (exports.DescribeInstanceInformationResult = {}));
var InvalidInstanceInformationFilterValue;
(function (InvalidInstanceInformationFilterValue) {
    /**
     * @internal
     */
    InvalidInstanceInformationFilterValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInstanceInformationFilterValue = exports.InvalidInstanceInformationFilterValue || (exports.InvalidInstanceInformationFilterValue = {}));
var DescribeInstancePatchesRequest;
(function (DescribeInstancePatchesRequest) {
    /**
     * @internal
     */
    DescribeInstancePatchesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstancePatchesRequest = exports.DescribeInstancePatchesRequest || (exports.DescribeInstancePatchesRequest = {}));
var PatchComplianceDataState;
(function (PatchComplianceDataState) {
    PatchComplianceDataState["Failed"] = "FAILED";
    PatchComplianceDataState["Installed"] = "INSTALLED";
    PatchComplianceDataState["InstalledOther"] = "INSTALLED_OTHER";
    PatchComplianceDataState["InstalledPendingReboot"] = "INSTALLED_PENDING_REBOOT";
    PatchComplianceDataState["InstalledRejected"] = "INSTALLED_REJECTED";
    PatchComplianceDataState["Missing"] = "MISSING";
    PatchComplianceDataState["NotApplicable"] = "NOT_APPLICABLE";
})(PatchComplianceDataState = exports.PatchComplianceDataState || (exports.PatchComplianceDataState = {}));
var PatchComplianceData;
(function (PatchComplianceData) {
    /**
     * @internal
     */
    PatchComplianceData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PatchComplianceData = exports.PatchComplianceData || (exports.PatchComplianceData = {}));
var DescribeInstancePatchesResult;
(function (DescribeInstancePatchesResult) {
    /**
     * @internal
     */
    DescribeInstancePatchesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstancePatchesResult = exports.DescribeInstancePatchesResult || (exports.DescribeInstancePatchesResult = {}));
var DescribeInstancePatchStatesRequest;
(function (DescribeInstancePatchStatesRequest) {
    /**
     * @internal
     */
    DescribeInstancePatchStatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstancePatchStatesRequest = exports.DescribeInstancePatchStatesRequest || (exports.DescribeInstancePatchStatesRequest = {}));
var PatchOperationType;
(function (PatchOperationType) {
    PatchOperationType["INSTALL"] = "Install";
    PatchOperationType["SCAN"] = "Scan";
})(PatchOperationType = exports.PatchOperationType || (exports.PatchOperationType = {}));
var RebootOption;
(function (RebootOption) {
    RebootOption["NO_REBOOT"] = "NoReboot";
    RebootOption["REBOOT_IF_NEEDED"] = "RebootIfNeeded";
})(RebootOption = exports.RebootOption || (exports.RebootOption = {}));
var InstancePatchState;
(function (InstancePatchState) {
    /**
     * @internal
     */
    InstancePatchState.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.OwnerInformation && { OwnerInformation: smithy_client_1.SENSITIVE_STRING }),
    });
})(InstancePatchState = exports.InstancePatchState || (exports.InstancePatchState = {}));
var DescribeInstancePatchStatesResult;
(function (DescribeInstancePatchStatesResult) {
    /**
     * @internal
     */
    DescribeInstancePatchStatesResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.InstancePatchStates && {
            InstancePatchStates: obj.InstancePatchStates.map((item) => InstancePatchState.filterSensitiveLog(item)),
        }),
    });
})(DescribeInstancePatchStatesResult = exports.DescribeInstancePatchStatesResult || (exports.DescribeInstancePatchStatesResult = {}));
var InstancePatchStateOperatorType;
(function (InstancePatchStateOperatorType) {
    InstancePatchStateOperatorType["EQUAL"] = "Equal";
    InstancePatchStateOperatorType["GREATER_THAN"] = "GreaterThan";
    InstancePatchStateOperatorType["LESS_THAN"] = "LessThan";
    InstancePatchStateOperatorType["NOT_EQUAL"] = "NotEqual";
})(InstancePatchStateOperatorType = exports.InstancePatchStateOperatorType || (exports.InstancePatchStateOperatorType = {}));
var InstancePatchStateFilter;
(function (InstancePatchStateFilter) {
    /**
     * @internal
     */
    InstancePatchStateFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstancePatchStateFilter = exports.InstancePatchStateFilter || (exports.InstancePatchStateFilter = {}));
var DescribeInstancePatchStatesForPatchGroupRequest;
(function (DescribeInstancePatchStatesForPatchGroupRequest) {
    /**
     * @internal
     */
    DescribeInstancePatchStatesForPatchGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstancePatchStatesForPatchGroupRequest = exports.DescribeInstancePatchStatesForPatchGroupRequest || (exports.DescribeInstancePatchStatesForPatchGroupRequest = {}));
var DescribeInstancePatchStatesForPatchGroupResult;
(function (DescribeInstancePatchStatesForPatchGroupResult) {
    /**
     * @internal
     */
    DescribeInstancePatchStatesForPatchGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.InstancePatchStates && {
            InstancePatchStates: obj.InstancePatchStates.map((item) => InstancePatchState.filterSensitiveLog(item)),
        }),
    });
})(DescribeInstancePatchStatesForPatchGroupResult = exports.DescribeInstancePatchStatesForPatchGroupResult || (exports.DescribeInstancePatchStatesForPatchGroupResult = {}));
var DescribeInventoryDeletionsRequest;
(function (DescribeInventoryDeletionsRequest) {
    /**
     * @internal
     */
    DescribeInventoryDeletionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInventoryDeletionsRequest = exports.DescribeInventoryDeletionsRequest || (exports.DescribeInventoryDeletionsRequest = {}));
var InventoryDeletionStatus;
(function (InventoryDeletionStatus) {
    InventoryDeletionStatus["COMPLETE"] = "Complete";
    InventoryDeletionStatus["IN_PROGRESS"] = "InProgress";
})(InventoryDeletionStatus = exports.InventoryDeletionStatus || (exports.InventoryDeletionStatus = {}));
var InventoryDeletionStatusItem;
(function (InventoryDeletionStatusItem) {
    /**
     * @internal
     */
    InventoryDeletionStatusItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InventoryDeletionStatusItem = exports.InventoryDeletionStatusItem || (exports.InventoryDeletionStatusItem = {}));
var DescribeInventoryDeletionsResult;
(function (DescribeInventoryDeletionsResult) {
    /**
     * @internal
     */
    DescribeInventoryDeletionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInventoryDeletionsResult = exports.DescribeInventoryDeletionsResult || (exports.DescribeInventoryDeletionsResult = {}));
var InvalidDeletionIdException;
(function (InvalidDeletionIdException) {
    /**
     * @internal
     */
    InvalidDeletionIdException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDeletionIdException = exports.InvalidDeletionIdException || (exports.InvalidDeletionIdException = {}));
var MaintenanceWindowFilter;
(function (MaintenanceWindowFilter) {
    /**
     * @internal
     */
    MaintenanceWindowFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaintenanceWindowFilter = exports.MaintenanceWindowFilter || (exports.MaintenanceWindowFilter = {}));
var DescribeMaintenanceWindowExecutionsRequest;
(function (DescribeMaintenanceWindowExecutionsRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowExecutionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMaintenanceWindowExecutionsRequest = exports.DescribeMaintenanceWindowExecutionsRequest || (exports.DescribeMaintenanceWindowExecutionsRequest = {}));
var MaintenanceWindowExecutionStatus;
(function (MaintenanceWindowExecutionStatus) {
    MaintenanceWindowExecutionStatus["Cancelled"] = "CANCELLED";
    MaintenanceWindowExecutionStatus["Cancelling"] = "CANCELLING";
    MaintenanceWindowExecutionStatus["Failed"] = "FAILED";
    MaintenanceWindowExecutionStatus["InProgress"] = "IN_PROGRESS";
    MaintenanceWindowExecutionStatus["Pending"] = "PENDING";
    MaintenanceWindowExecutionStatus["SkippedOverlapping"] = "SKIPPED_OVERLAPPING";
    MaintenanceWindowExecutionStatus["Success"] = "SUCCESS";
    MaintenanceWindowExecutionStatus["TimedOut"] = "TIMED_OUT";
})(MaintenanceWindowExecutionStatus = exports.MaintenanceWindowExecutionStatus || (exports.MaintenanceWindowExecutionStatus = {}));
var MaintenanceWindowExecution;
(function (MaintenanceWindowExecution) {
    /**
     * @internal
     */
    MaintenanceWindowExecution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaintenanceWindowExecution = exports.MaintenanceWindowExecution || (exports.MaintenanceWindowExecution = {}));
var DescribeMaintenanceWindowExecutionsResult;
(function (DescribeMaintenanceWindowExecutionsResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowExecutionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMaintenanceWindowExecutionsResult = exports.DescribeMaintenanceWindowExecutionsResult || (exports.DescribeMaintenanceWindowExecutionsResult = {}));
var DescribeMaintenanceWindowExecutionTaskInvocationsRequest;
(function (DescribeMaintenanceWindowExecutionTaskInvocationsRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowExecutionTaskInvocationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMaintenanceWindowExecutionTaskInvocationsRequest = exports.DescribeMaintenanceWindowExecutionTaskInvocationsRequest || (exports.DescribeMaintenanceWindowExecutionTaskInvocationsRequest = {}));
var MaintenanceWindowTaskType;
(function (MaintenanceWindowTaskType) {
    MaintenanceWindowTaskType["Automation"] = "AUTOMATION";
    MaintenanceWindowTaskType["Lambda"] = "LAMBDA";
    MaintenanceWindowTaskType["RunCommand"] = "RUN_COMMAND";
    MaintenanceWindowTaskType["StepFunctions"] = "STEP_FUNCTIONS";
})(MaintenanceWindowTaskType = exports.MaintenanceWindowTaskType || (exports.MaintenanceWindowTaskType = {}));
var MaintenanceWindowExecutionTaskInvocationIdentity;
(function (MaintenanceWindowExecutionTaskInvocationIdentity) {
    /**
     * @internal
     */
    MaintenanceWindowExecutionTaskInvocationIdentity.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Parameters && { Parameters: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.OwnerInformation && { OwnerInformation: smithy_client_1.SENSITIVE_STRING }),
    });
})(MaintenanceWindowExecutionTaskInvocationIdentity = exports.MaintenanceWindowExecutionTaskInvocationIdentity || (exports.MaintenanceWindowExecutionTaskInvocationIdentity = {}));
var DescribeMaintenanceWindowExecutionTaskInvocationsResult;
(function (DescribeMaintenanceWindowExecutionTaskInvocationsResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowExecutionTaskInvocationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.WindowExecutionTaskInvocationIdentities && {
            WindowExecutionTaskInvocationIdentities: obj.WindowExecutionTaskInvocationIdentities.map((item) => MaintenanceWindowExecutionTaskInvocationIdentity.filterSensitiveLog(item)),
        }),
    });
})(DescribeMaintenanceWindowExecutionTaskInvocationsResult = exports.DescribeMaintenanceWindowExecutionTaskInvocationsResult || (exports.DescribeMaintenanceWindowExecutionTaskInvocationsResult = {}));
var DescribeMaintenanceWindowExecutionTasksRequest;
(function (DescribeMaintenanceWindowExecutionTasksRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowExecutionTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMaintenanceWindowExecutionTasksRequest = exports.DescribeMaintenanceWindowExecutionTasksRequest || (exports.DescribeMaintenanceWindowExecutionTasksRequest = {}));
var MaintenanceWindowExecutionTaskIdentity;
(function (MaintenanceWindowExecutionTaskIdentity) {
    /**
     * @internal
     */
    MaintenanceWindowExecutionTaskIdentity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaintenanceWindowExecutionTaskIdentity = exports.MaintenanceWindowExecutionTaskIdentity || (exports.MaintenanceWindowExecutionTaskIdentity = {}));
var DescribeMaintenanceWindowExecutionTasksResult;
(function (DescribeMaintenanceWindowExecutionTasksResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowExecutionTasksResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMaintenanceWindowExecutionTasksResult = exports.DescribeMaintenanceWindowExecutionTasksResult || (exports.DescribeMaintenanceWindowExecutionTasksResult = {}));
var DescribeMaintenanceWindowsRequest;
(function (DescribeMaintenanceWindowsRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMaintenanceWindowsRequest = exports.DescribeMaintenanceWindowsRequest || (exports.DescribeMaintenanceWindowsRequest = {}));
var MaintenanceWindowIdentity;
(function (MaintenanceWindowIdentity) {
    /**
     * @internal
     */
    MaintenanceWindowIdentity.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
    });
})(MaintenanceWindowIdentity = exports.MaintenanceWindowIdentity || (exports.MaintenanceWindowIdentity = {}));
var DescribeMaintenanceWindowsResult;
(function (DescribeMaintenanceWindowsResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowsResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.WindowIdentities && {
            WindowIdentities: obj.WindowIdentities.map((item) => MaintenanceWindowIdentity.filterSensitiveLog(item)),
        }),
    });
})(DescribeMaintenanceWindowsResult = exports.DescribeMaintenanceWindowsResult || (exports.DescribeMaintenanceWindowsResult = {}));
var MaintenanceWindowResourceType;
(function (MaintenanceWindowResourceType) {
    MaintenanceWindowResourceType["Instance"] = "INSTANCE";
    MaintenanceWindowResourceType["ResourceGroup"] = "RESOURCE_GROUP";
})(MaintenanceWindowResourceType = exports.MaintenanceWindowResourceType || (exports.MaintenanceWindowResourceType = {}));
var DescribeMaintenanceWindowScheduleRequest;
(function (DescribeMaintenanceWindowScheduleRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMaintenanceWindowScheduleRequest = exports.DescribeMaintenanceWindowScheduleRequest || (exports.DescribeMaintenanceWindowScheduleRequest = {}));
var ScheduledWindowExecution;
(function (ScheduledWindowExecution) {
    /**
     * @internal
     */
    ScheduledWindowExecution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledWindowExecution = exports.ScheduledWindowExecution || (exports.ScheduledWindowExecution = {}));
var DescribeMaintenanceWindowScheduleResult;
(function (DescribeMaintenanceWindowScheduleResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowScheduleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMaintenanceWindowScheduleResult = exports.DescribeMaintenanceWindowScheduleResult || (exports.DescribeMaintenanceWindowScheduleResult = {}));
var DescribeMaintenanceWindowsForTargetRequest;
(function (DescribeMaintenanceWindowsForTargetRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowsForTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMaintenanceWindowsForTargetRequest = exports.DescribeMaintenanceWindowsForTargetRequest || (exports.DescribeMaintenanceWindowsForTargetRequest = {}));
var MaintenanceWindowIdentityForTarget;
(function (MaintenanceWindowIdentityForTarget) {
    /**
     * @internal
     */
    MaintenanceWindowIdentityForTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaintenanceWindowIdentityForTarget = exports.MaintenanceWindowIdentityForTarget || (exports.MaintenanceWindowIdentityForTarget = {}));
var DescribeMaintenanceWindowsForTargetResult;
(function (DescribeMaintenanceWindowsForTargetResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowsForTargetResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMaintenanceWindowsForTargetResult = exports.DescribeMaintenanceWindowsForTargetResult || (exports.DescribeMaintenanceWindowsForTargetResult = {}));
var DescribeMaintenanceWindowTargetsRequest;
(function (DescribeMaintenanceWindowTargetsRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowTargetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMaintenanceWindowTargetsRequest = exports.DescribeMaintenanceWindowTargetsRequest || (exports.DescribeMaintenanceWindowTargetsRequest = {}));
var MaintenanceWindowTarget;
(function (MaintenanceWindowTarget) {
    /**
     * @internal
     */
    MaintenanceWindowTarget.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.OwnerInformation && { OwnerInformation: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
    });
})(MaintenanceWindowTarget = exports.MaintenanceWindowTarget || (exports.MaintenanceWindowTarget = {}));
var DescribeMaintenanceWindowTargetsResult;
(function (DescribeMaintenanceWindowTargetsResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowTargetsResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Targets && { Targets: obj.Targets.map((item) => MaintenanceWindowTarget.filterSensitiveLog(item)) }),
    });
})(DescribeMaintenanceWindowTargetsResult = exports.DescribeMaintenanceWindowTargetsResult || (exports.DescribeMaintenanceWindowTargetsResult = {}));
var DescribeMaintenanceWindowTasksRequest;
(function (DescribeMaintenanceWindowTasksRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMaintenanceWindowTasksRequest = exports.DescribeMaintenanceWindowTasksRequest || (exports.DescribeMaintenanceWindowTasksRequest = {}));
var LoggingInfo;
(function (LoggingInfo) {
    /**
     * @internal
     */
    LoggingInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoggingInfo = exports.LoggingInfo || (exports.LoggingInfo = {}));
var MaintenanceWindowTaskParameterValueExpression;
(function (MaintenanceWindowTaskParameterValueExpression) {
    /**
     * @internal
     */
    MaintenanceWindowTaskParameterValueExpression.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Values && { Values: smithy_client_1.SENSITIVE_STRING }),
    });
})(MaintenanceWindowTaskParameterValueExpression = exports.MaintenanceWindowTaskParameterValueExpression || (exports.MaintenanceWindowTaskParameterValueExpression = {}));
var MaintenanceWindowTask;
(function (MaintenanceWindowTask) {
    /**
     * @internal
     */
    MaintenanceWindowTask.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TaskParameters && { TaskParameters: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Description && { Description: smithy_client_1.SENSITIVE_STRING }),
    });
})(MaintenanceWindowTask = exports.MaintenanceWindowTask || (exports.MaintenanceWindowTask = {}));
var DescribeMaintenanceWindowTasksResult;
(function (DescribeMaintenanceWindowTasksResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowTasksResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Tasks && { Tasks: obj.Tasks.map((item) => MaintenanceWindowTask.filterSensitiveLog(item)) }),
    });
})(DescribeMaintenanceWindowTasksResult = exports.DescribeMaintenanceWindowTasksResult || (exports.DescribeMaintenanceWindowTasksResult = {}));
var OpsItemFilterKey;
(function (OpsItemFilterKey) {
    OpsItemFilterKey["ACTUAL_END_TIME"] = "ActualEndTime";
    OpsItemFilterKey["ACTUAL_START_TIME"] = "ActualStartTime";
    OpsItemFilterKey["AUTOMATION_ID"] = "AutomationId";
    OpsItemFilterKey["CATEGORY"] = "Category";
    OpsItemFilterKey["CHANGE_REQUEST_APPROVER_ARN"] = "ChangeRequestByApproverArn";
    OpsItemFilterKey["CHANGE_REQUEST_APPROVER_NAME"] = "ChangeRequestByApproverName";
    OpsItemFilterKey["CHANGE_REQUEST_REQUESTER_ARN"] = "ChangeRequestByRequesterArn";
    OpsItemFilterKey["CHANGE_REQUEST_REQUESTER_NAME"] = "ChangeRequestByRequesterName";
    OpsItemFilterKey["CHANGE_REQUEST_TARGETS_RESOURCE_GROUP"] = "ChangeRequestByTargetsResourceGroup";
    OpsItemFilterKey["CHANGE_REQUEST_TEMPLATE"] = "ChangeRequestByTemplate";
    OpsItemFilterKey["CREATED_BY"] = "CreatedBy";
    OpsItemFilterKey["CREATED_TIME"] = "CreatedTime";
    OpsItemFilterKey["LAST_MODIFIED_TIME"] = "LastModifiedTime";
    OpsItemFilterKey["OPERATIONAL_DATA"] = "OperationalData";
    OpsItemFilterKey["OPERATIONAL_DATA_KEY"] = "OperationalDataKey";
    OpsItemFilterKey["OPERATIONAL_DATA_VALUE"] = "OperationalDataValue";
    OpsItemFilterKey["OPSITEM_ID"] = "OpsItemId";
    OpsItemFilterKey["OPSITEM_TYPE"] = "OpsItemType";
    OpsItemFilterKey["PLANNED_END_TIME"] = "PlannedEndTime";
    OpsItemFilterKey["PLANNED_START_TIME"] = "PlannedStartTime";
    OpsItemFilterKey["PRIORITY"] = "Priority";
    OpsItemFilterKey["RESOURCE_ID"] = "ResourceId";
    OpsItemFilterKey["SEVERITY"] = "Severity";
    OpsItemFilterKey["SOURCE"] = "Source";
    OpsItemFilterKey["STATUS"] = "Status";
    OpsItemFilterKey["TITLE"] = "Title";
})(OpsItemFilterKey = exports.OpsItemFilterKey || (exports.OpsItemFilterKey = {}));
var OpsItemFilterOperator;
(function (OpsItemFilterOperator) {
    OpsItemFilterOperator["CONTAINS"] = "Contains";
    OpsItemFilterOperator["EQUAL"] = "Equal";
    OpsItemFilterOperator["GREATER_THAN"] = "GreaterThan";
    OpsItemFilterOperator["LESS_THAN"] = "LessThan";
})(OpsItemFilterOperator = exports.OpsItemFilterOperator || (exports.OpsItemFilterOperator = {}));
var OpsItemFilter;
(function (OpsItemFilter) {
    /**
     * @internal
     */
    OpsItemFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItemFilter = exports.OpsItemFilter || (exports.OpsItemFilter = {}));
var DescribeOpsItemsRequest;
(function (DescribeOpsItemsRequest) {
    /**
     * @internal
     */
    DescribeOpsItemsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOpsItemsRequest = exports.DescribeOpsItemsRequest || (exports.DescribeOpsItemsRequest = {}));
var OpsItemStatus;
(function (OpsItemStatus) {
    OpsItemStatus["APPROVED"] = "Approved";
    OpsItemStatus["CANCELLED"] = "Cancelled";
    OpsItemStatus["CANCELLING"] = "Cancelling";
    OpsItemStatus["CHANGE_CALENDAR_OVERRIDE_APPROVED"] = "ChangeCalendarOverrideApproved";
    OpsItemStatus["CHANGE_CALENDAR_OVERRIDE_REJECTED"] = "ChangeCalendarOverrideRejected";
    OpsItemStatus["COMPLETED_WITH_FAILURE"] = "CompletedWithFailure";
    OpsItemStatus["COMPLETED_WITH_SUCCESS"] = "CompletedWithSuccess";
    OpsItemStatus["FAILED"] = "Failed";
    OpsItemStatus["IN_PROGRESS"] = "InProgress";
    OpsItemStatus["OPEN"] = "Open";
    OpsItemStatus["PENDING"] = "Pending";
    OpsItemStatus["PENDING_APPROVAL"] = "PendingApproval";
    OpsItemStatus["PENDING_CHANGE_CALENDAR_OVERRIDE"] = "PendingChangeCalendarOverride";
    OpsItemStatus["REJECTED"] = "Rejected";
    OpsItemStatus["RESOLVED"] = "Resolved";
    OpsItemStatus["RUNBOOK_IN_PROGRESS"] = "RunbookInProgress";
    OpsItemStatus["SCHEDULED"] = "Scheduled";
    OpsItemStatus["TIMED_OUT"] = "TimedOut";
})(OpsItemStatus = exports.OpsItemStatus || (exports.OpsItemStatus = {}));
var OpsItemSummary;
(function (OpsItemSummary) {
    /**
     * @internal
     */
    OpsItemSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsItemSummary = exports.OpsItemSummary || (exports.OpsItemSummary = {}));
var DescribeOpsItemsResponse;
(function (DescribeOpsItemsResponse) {
    /**
     * @internal
     */
    DescribeOpsItemsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOpsItemsResponse = exports.DescribeOpsItemsResponse || (exports.DescribeOpsItemsResponse = {}));
var ParametersFilterKey;
(function (ParametersFilterKey) {
    ParametersFilterKey["KEY_ID"] = "KeyId";
    ParametersFilterKey["NAME"] = "Name";
    ParametersFilterKey["TYPE"] = "Type";
})(ParametersFilterKey = exports.ParametersFilterKey || (exports.ParametersFilterKey = {}));
var ParametersFilter;
(function (ParametersFilter) {
    /**
     * @internal
     */
    ParametersFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParametersFilter = exports.ParametersFilter || (exports.ParametersFilter = {}));
var ParameterStringFilter;
(function (ParameterStringFilter) {
    /**
     * @internal
     */
    ParameterStringFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterStringFilter = exports.ParameterStringFilter || (exports.ParameterStringFilter = {}));
var DescribeParametersRequest;
(function (DescribeParametersRequest) {
    /**
     * @internal
     */
    DescribeParametersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeParametersRequest = exports.DescribeParametersRequest || (exports.DescribeParametersRequest = {}));
var ParameterInlinePolicy;
(function (ParameterInlinePolicy) {
    /**
     * @internal
     */
    ParameterInlinePolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterInlinePolicy = exports.ParameterInlinePolicy || (exports.ParameterInlinePolicy = {}));
var ParameterTier;
(function (ParameterTier) {
    ParameterTier["ADVANCED"] = "Advanced";
    ParameterTier["INTELLIGENT_TIERING"] = "Intelligent-Tiering";
    ParameterTier["STANDARD"] = "Standard";
})(ParameterTier = exports.ParameterTier || (exports.ParameterTier = {}));
var ParameterType;
(function (ParameterType) {
    ParameterType["SECURE_STRING"] = "SecureString";
    ParameterType["STRING"] = "String";
    ParameterType["STRING_LIST"] = "StringList";
})(ParameterType = exports.ParameterType || (exports.ParameterType = {}));
var ParameterMetadata;
(function (ParameterMetadata) {
    /**
     * @internal
     */
    ParameterMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterMetadata = exports.ParameterMetadata || (exports.ParameterMetadata = {}));
var DescribeParametersResult;
(function (DescribeParametersResult) {
    /**
     * @internal
     */
    DescribeParametersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeParametersResult = exports.DescribeParametersResult || (exports.DescribeParametersResult = {}));
//# sourceMappingURL=models_0.js.map