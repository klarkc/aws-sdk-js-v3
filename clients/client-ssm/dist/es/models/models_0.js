import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccountSharingInfo;
(function (AccountSharingInfo) {
    /**
     * @internal
     */
    AccountSharingInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountSharingInfo || (AccountSharingInfo = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var Activation;
(function (Activation) {
    /**
     * @internal
     */
    Activation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Activation || (Activation = {}));
export var ResourceTypeForTagging;
(function (ResourceTypeForTagging) {
    ResourceTypeForTagging["DOCUMENT"] = "Document";
    ResourceTypeForTagging["MAINTENANCE_WINDOW"] = "MaintenanceWindow";
    ResourceTypeForTagging["MANAGED_INSTANCE"] = "ManagedInstance";
    ResourceTypeForTagging["OPSMETADATA"] = "OpsMetadata";
    ResourceTypeForTagging["OPS_ITEM"] = "OpsItem";
    ResourceTypeForTagging["PARAMETER"] = "Parameter";
    ResourceTypeForTagging["PATCH_BASELINE"] = "PatchBaseline";
})(ResourceTypeForTagging || (ResourceTypeForTagging = {}));
export var AddTagsToResourceRequest;
(function (AddTagsToResourceRequest) {
    /**
     * @internal
     */
    AddTagsToResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsToResourceRequest || (AddTagsToResourceRequest = {}));
export var AddTagsToResourceResult;
(function (AddTagsToResourceResult) {
    /**
     * @internal
     */
    AddTagsToResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsToResourceResult || (AddTagsToResourceResult = {}));
export var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerError || (InternalServerError = {}));
export var InvalidResourceId;
(function (InvalidResourceId) {
    /**
     * @internal
     */
    InvalidResourceId.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidResourceId || (InvalidResourceId = {}));
export var InvalidResourceType;
(function (InvalidResourceType) {
    /**
     * @internal
     */
    InvalidResourceType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidResourceType || (InvalidResourceType = {}));
export var TooManyTagsError;
(function (TooManyTagsError) {
    /**
     * @internal
     */
    TooManyTagsError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyTagsError || (TooManyTagsError = {}));
export var TooManyUpdates;
(function (TooManyUpdates) {
    /**
     * @internal
     */
    TooManyUpdates.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyUpdates || (TooManyUpdates = {}));
export var AlreadyExistsException;
(function (AlreadyExistsException) {
    /**
     * @internal
     */
    AlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AlreadyExistsException || (AlreadyExistsException = {}));
export var AssociateOpsItemRelatedItemRequest;
(function (AssociateOpsItemRelatedItemRequest) {
    /**
     * @internal
     */
    AssociateOpsItemRelatedItemRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateOpsItemRelatedItemRequest || (AssociateOpsItemRelatedItemRequest = {}));
export var AssociateOpsItemRelatedItemResponse;
(function (AssociateOpsItemRelatedItemResponse) {
    /**
     * @internal
     */
    AssociateOpsItemRelatedItemResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateOpsItemRelatedItemResponse || (AssociateOpsItemRelatedItemResponse = {}));
export var OpsItemInvalidParameterException;
(function (OpsItemInvalidParameterException) {
    /**
     * @internal
     */
    OpsItemInvalidParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItemInvalidParameterException || (OpsItemInvalidParameterException = {}));
export var OpsItemLimitExceededException;
(function (OpsItemLimitExceededException) {
    /**
     * @internal
     */
    OpsItemLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItemLimitExceededException || (OpsItemLimitExceededException = {}));
export var OpsItemNotFoundException;
(function (OpsItemNotFoundException) {
    /**
     * @internal
     */
    OpsItemNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItemNotFoundException || (OpsItemNotFoundException = {}));
export var OpsItemRelatedItemAlreadyExistsException;
(function (OpsItemRelatedItemAlreadyExistsException) {
    /**
     * @internal
     */
    OpsItemRelatedItemAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItemRelatedItemAlreadyExistsException || (OpsItemRelatedItemAlreadyExistsException = {}));
export var CancelCommandRequest;
(function (CancelCommandRequest) {
    /**
     * @internal
     */
    CancelCommandRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelCommandRequest || (CancelCommandRequest = {}));
export var CancelCommandResult;
(function (CancelCommandResult) {
    /**
     * @internal
     */
    CancelCommandResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelCommandResult || (CancelCommandResult = {}));
export var DuplicateInstanceId;
(function (DuplicateInstanceId) {
    /**
     * @internal
     */
    DuplicateInstanceId.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicateInstanceId || (DuplicateInstanceId = {}));
export var InvalidCommandId;
(function (InvalidCommandId) {
    /**
     * @internal
     */
    InvalidCommandId.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidCommandId || (InvalidCommandId = {}));
export var InvalidInstanceId;
(function (InvalidInstanceId) {
    /**
     * @internal
     */
    InvalidInstanceId.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInstanceId || (InvalidInstanceId = {}));
export var CancelMaintenanceWindowExecutionRequest;
(function (CancelMaintenanceWindowExecutionRequest) {
    /**
     * @internal
     */
    CancelMaintenanceWindowExecutionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelMaintenanceWindowExecutionRequest || (CancelMaintenanceWindowExecutionRequest = {}));
export var CancelMaintenanceWindowExecutionResult;
(function (CancelMaintenanceWindowExecutionResult) {
    /**
     * @internal
     */
    CancelMaintenanceWindowExecutionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelMaintenanceWindowExecutionResult || (CancelMaintenanceWindowExecutionResult = {}));
export var DoesNotExistException;
(function (DoesNotExistException) {
    /**
     * @internal
     */
    DoesNotExistException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DoesNotExistException || (DoesNotExistException = {}));
export var CreateActivationRequest;
(function (CreateActivationRequest) {
    /**
     * @internal
     */
    CreateActivationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateActivationRequest || (CreateActivationRequest = {}));
export var CreateActivationResult;
(function (CreateActivationResult) {
    /**
     * @internal
     */
    CreateActivationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateActivationResult || (CreateActivationResult = {}));
export var AssociationAlreadyExists;
(function (AssociationAlreadyExists) {
    /**
     * @internal
     */
    AssociationAlreadyExists.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociationAlreadyExists || (AssociationAlreadyExists = {}));
export var AssociationLimitExceeded;
(function (AssociationLimitExceeded) {
    /**
     * @internal
     */
    AssociationLimitExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociationLimitExceeded || (AssociationLimitExceeded = {}));
export var AssociationComplianceSeverity;
(function (AssociationComplianceSeverity) {
    AssociationComplianceSeverity["Critical"] = "CRITICAL";
    AssociationComplianceSeverity["High"] = "HIGH";
    AssociationComplianceSeverity["Low"] = "LOW";
    AssociationComplianceSeverity["Medium"] = "MEDIUM";
    AssociationComplianceSeverity["Unspecified"] = "UNSPECIFIED";
})(AssociationComplianceSeverity || (AssociationComplianceSeverity = {}));
export var S3OutputLocation;
(function (S3OutputLocation) {
    /**
     * @internal
     */
    S3OutputLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3OutputLocation || (S3OutputLocation = {}));
export var InstanceAssociationOutputLocation;
(function (InstanceAssociationOutputLocation) {
    /**
     * @internal
     */
    InstanceAssociationOutputLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceAssociationOutputLocation || (InstanceAssociationOutputLocation = {}));
export var AssociationSyncCompliance;
(function (AssociationSyncCompliance) {
    AssociationSyncCompliance["Auto"] = "AUTO";
    AssociationSyncCompliance["Manual"] = "MANUAL";
})(AssociationSyncCompliance || (AssociationSyncCompliance = {}));
export var TargetLocation;
(function (TargetLocation) {
    /**
     * @internal
     */
    TargetLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetLocation || (TargetLocation = {}));
export var Target;
(function (Target) {
    /**
     * @internal
     */
    Target.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Target || (Target = {}));
export var CreateAssociationRequest;
(function (CreateAssociationRequest) {
    /**
     * @internal
     */
    CreateAssociationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAssociationRequest || (CreateAssociationRequest = {}));
export var AssociationOverview;
(function (AssociationOverview) {
    /**
     * @internal
     */
    AssociationOverview.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociationOverview || (AssociationOverview = {}));
export var AssociationStatusName;
(function (AssociationStatusName) {
    AssociationStatusName["Failed"] = "Failed";
    AssociationStatusName["Pending"] = "Pending";
    AssociationStatusName["Success"] = "Success";
})(AssociationStatusName || (AssociationStatusName = {}));
export var AssociationStatus;
(function (AssociationStatus) {
    /**
     * @internal
     */
    AssociationStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociationStatus || (AssociationStatus = {}));
export var AssociationDescription;
(function (AssociationDescription) {
    /**
     * @internal
     */
    AssociationDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociationDescription || (AssociationDescription = {}));
export var CreateAssociationResult;
(function (CreateAssociationResult) {
    /**
     * @internal
     */
    CreateAssociationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAssociationResult || (CreateAssociationResult = {}));
export var InvalidDocument;
(function (InvalidDocument) {
    /**
     * @internal
     */
    InvalidDocument.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidDocument || (InvalidDocument = {}));
export var InvalidDocumentVersion;
(function (InvalidDocumentVersion) {
    /**
     * @internal
     */
    InvalidDocumentVersion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidDocumentVersion || (InvalidDocumentVersion = {}));
export var InvalidOutputLocation;
(function (InvalidOutputLocation) {
    /**
     * @internal
     */
    InvalidOutputLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidOutputLocation || (InvalidOutputLocation = {}));
export var InvalidParameters;
(function (InvalidParameters) {
    /**
     * @internal
     */
    InvalidParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameters || (InvalidParameters = {}));
export var InvalidSchedule;
(function (InvalidSchedule) {
    /**
     * @internal
     */
    InvalidSchedule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidSchedule || (InvalidSchedule = {}));
export var InvalidTarget;
(function (InvalidTarget) {
    /**
     * @internal
     */
    InvalidTarget.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidTarget || (InvalidTarget = {}));
export var UnsupportedPlatformType;
(function (UnsupportedPlatformType) {
    /**
     * @internal
     */
    UnsupportedPlatformType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedPlatformType || (UnsupportedPlatformType = {}));
export var CreateAssociationBatchRequestEntry;
(function (CreateAssociationBatchRequestEntry) {
    /**
     * @internal
     */
    CreateAssociationBatchRequestEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAssociationBatchRequestEntry || (CreateAssociationBatchRequestEntry = {}));
export var CreateAssociationBatchRequest;
(function (CreateAssociationBatchRequest) {
    /**
     * @internal
     */
    CreateAssociationBatchRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAssociationBatchRequest || (CreateAssociationBatchRequest = {}));
export var FailedCreateAssociation;
(function (FailedCreateAssociation) {
    /**
     * @internal
     */
    FailedCreateAssociation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FailedCreateAssociation || (FailedCreateAssociation = {}));
export var CreateAssociationBatchResult;
(function (CreateAssociationBatchResult) {
    /**
     * @internal
     */
    CreateAssociationBatchResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAssociationBatchResult || (CreateAssociationBatchResult = {}));
export var AttachmentsSourceKey;
(function (AttachmentsSourceKey) {
    AttachmentsSourceKey["AttachmentReference"] = "AttachmentReference";
    AttachmentsSourceKey["S3FileUrl"] = "S3FileUrl";
    AttachmentsSourceKey["SourceUrl"] = "SourceUrl";
})(AttachmentsSourceKey || (AttachmentsSourceKey = {}));
export var AttachmentsSource;
(function (AttachmentsSource) {
    /**
     * @internal
     */
    AttachmentsSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachmentsSource || (AttachmentsSource = {}));
export var DocumentFormat;
(function (DocumentFormat) {
    DocumentFormat["JSON"] = "JSON";
    DocumentFormat["TEXT"] = "TEXT";
    DocumentFormat["YAML"] = "YAML";
})(DocumentFormat || (DocumentFormat = {}));
export var DocumentType;
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
})(DocumentType || (DocumentType = {}));
export var DocumentRequires;
(function (DocumentRequires) {
    /**
     * @internal
     */
    DocumentRequires.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentRequires || (DocumentRequires = {}));
export var CreateDocumentRequest;
(function (CreateDocumentRequest) {
    /**
     * @internal
     */
    CreateDocumentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDocumentRequest || (CreateDocumentRequest = {}));
export var AttachmentInformation;
(function (AttachmentInformation) {
    /**
     * @internal
     */
    AttachmentInformation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachmentInformation || (AttachmentInformation = {}));
export var DocumentHashType;
(function (DocumentHashType) {
    DocumentHashType["SHA1"] = "Sha1";
    DocumentHashType["SHA256"] = "Sha256";
})(DocumentHashType || (DocumentHashType = {}));
export var DocumentParameter;
(function (DocumentParameter) {
    /**
     * @internal
     */
    DocumentParameter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentParameter || (DocumentParameter = {}));
export var PlatformType;
(function (PlatformType) {
    PlatformType["LINUX"] = "Linux";
    PlatformType["WINDOWS"] = "Windows";
})(PlatformType || (PlatformType = {}));
export var ReviewStatus;
(function (ReviewStatus) {
    ReviewStatus["APPROVED"] = "APPROVED";
    ReviewStatus["NOT_REVIEWED"] = "NOT_REVIEWED";
    ReviewStatus["PENDING"] = "PENDING";
    ReviewStatus["REJECTED"] = "REJECTED";
})(ReviewStatus || (ReviewStatus = {}));
export var ReviewInformation;
(function (ReviewInformation) {
    /**
     * @internal
     */
    ReviewInformation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReviewInformation || (ReviewInformation = {}));
export var DocumentStatus;
(function (DocumentStatus) {
    DocumentStatus["Active"] = "Active";
    DocumentStatus["Creating"] = "Creating";
    DocumentStatus["Deleting"] = "Deleting";
    DocumentStatus["Failed"] = "Failed";
    DocumentStatus["Updating"] = "Updating";
})(DocumentStatus || (DocumentStatus = {}));
export var DocumentDescription;
(function (DocumentDescription) {
    /**
     * @internal
     */
    DocumentDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentDescription || (DocumentDescription = {}));
export var CreateDocumentResult;
(function (CreateDocumentResult) {
    /**
     * @internal
     */
    CreateDocumentResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDocumentResult || (CreateDocumentResult = {}));
export var DocumentAlreadyExists;
(function (DocumentAlreadyExists) {
    /**
     * @internal
     */
    DocumentAlreadyExists.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentAlreadyExists || (DocumentAlreadyExists = {}));
export var DocumentLimitExceeded;
(function (DocumentLimitExceeded) {
    /**
     * @internal
     */
    DocumentLimitExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentLimitExceeded || (DocumentLimitExceeded = {}));
export var InvalidDocumentContent;
(function (InvalidDocumentContent) {
    /**
     * @internal
     */
    InvalidDocumentContent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidDocumentContent || (InvalidDocumentContent = {}));
export var InvalidDocumentSchemaVersion;
(function (InvalidDocumentSchemaVersion) {
    /**
     * @internal
     */
    InvalidDocumentSchemaVersion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidDocumentSchemaVersion || (InvalidDocumentSchemaVersion = {}));
export var MaxDocumentSizeExceeded;
(function (MaxDocumentSizeExceeded) {
    /**
     * @internal
     */
    MaxDocumentSizeExceeded.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MaxDocumentSizeExceeded || (MaxDocumentSizeExceeded = {}));
export var CreateMaintenanceWindowRequest;
(function (CreateMaintenanceWindowRequest) {
    /**
     * @internal
     */
    CreateMaintenanceWindowRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(CreateMaintenanceWindowRequest || (CreateMaintenanceWindowRequest = {}));
export var CreateMaintenanceWindowResult;
(function (CreateMaintenanceWindowResult) {
    /**
     * @internal
     */
    CreateMaintenanceWindowResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMaintenanceWindowResult || (CreateMaintenanceWindowResult = {}));
export var IdempotentParameterMismatch;
(function (IdempotentParameterMismatch) {
    /**
     * @internal
     */
    IdempotentParameterMismatch.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdempotentParameterMismatch || (IdempotentParameterMismatch = {}));
export var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
    /**
     * @internal
     */
    ResourceLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceLimitExceededException || (ResourceLimitExceededException = {}));
export var OpsItemNotification;
(function (OpsItemNotification) {
    /**
     * @internal
     */
    OpsItemNotification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItemNotification || (OpsItemNotification = {}));
export var OpsItemDataType;
(function (OpsItemDataType) {
    OpsItemDataType["SEARCHABLE_STRING"] = "SearchableString";
    OpsItemDataType["STRING"] = "String";
})(OpsItemDataType || (OpsItemDataType = {}));
export var OpsItemDataValue;
(function (OpsItemDataValue) {
    /**
     * @internal
     */
    OpsItemDataValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItemDataValue || (OpsItemDataValue = {}));
export var RelatedOpsItem;
(function (RelatedOpsItem) {
    /**
     * @internal
     */
    RelatedOpsItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RelatedOpsItem || (RelatedOpsItem = {}));
export var CreateOpsItemRequest;
(function (CreateOpsItemRequest) {
    /**
     * @internal
     */
    CreateOpsItemRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateOpsItemRequest || (CreateOpsItemRequest = {}));
export var CreateOpsItemResponse;
(function (CreateOpsItemResponse) {
    /**
     * @internal
     */
    CreateOpsItemResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateOpsItemResponse || (CreateOpsItemResponse = {}));
export var OpsItemAlreadyExistsException;
(function (OpsItemAlreadyExistsException) {
    /**
     * @internal
     */
    OpsItemAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItemAlreadyExistsException || (OpsItemAlreadyExistsException = {}));
export var MetadataValue;
(function (MetadataValue) {
    /**
     * @internal
     */
    MetadataValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetadataValue || (MetadataValue = {}));
export var CreateOpsMetadataRequest;
(function (CreateOpsMetadataRequest) {
    /**
     * @internal
     */
    CreateOpsMetadataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateOpsMetadataRequest || (CreateOpsMetadataRequest = {}));
export var CreateOpsMetadataResult;
(function (CreateOpsMetadataResult) {
    /**
     * @internal
     */
    CreateOpsMetadataResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateOpsMetadataResult || (CreateOpsMetadataResult = {}));
export var OpsMetadataAlreadyExistsException;
(function (OpsMetadataAlreadyExistsException) {
    /**
     * @internal
     */
    OpsMetadataAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsMetadataAlreadyExistsException || (OpsMetadataAlreadyExistsException = {}));
export var OpsMetadataInvalidArgumentException;
(function (OpsMetadataInvalidArgumentException) {
    /**
     * @internal
     */
    OpsMetadataInvalidArgumentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsMetadataInvalidArgumentException || (OpsMetadataInvalidArgumentException = {}));
export var OpsMetadataLimitExceededException;
(function (OpsMetadataLimitExceededException) {
    /**
     * @internal
     */
    OpsMetadataLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsMetadataLimitExceededException || (OpsMetadataLimitExceededException = {}));
export var OpsMetadataTooManyUpdatesException;
(function (OpsMetadataTooManyUpdatesException) {
    /**
     * @internal
     */
    OpsMetadataTooManyUpdatesException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsMetadataTooManyUpdatesException || (OpsMetadataTooManyUpdatesException = {}));
export var PatchComplianceLevel;
(function (PatchComplianceLevel) {
    PatchComplianceLevel["Critical"] = "CRITICAL";
    PatchComplianceLevel["High"] = "HIGH";
    PatchComplianceLevel["Informational"] = "INFORMATIONAL";
    PatchComplianceLevel["Low"] = "LOW";
    PatchComplianceLevel["Medium"] = "MEDIUM";
    PatchComplianceLevel["Unspecified"] = "UNSPECIFIED";
})(PatchComplianceLevel || (PatchComplianceLevel = {}));
export var PatchFilterKey;
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
})(PatchFilterKey || (PatchFilterKey = {}));
export var PatchFilter;
(function (PatchFilter) {
    /**
     * @internal
     */
    PatchFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PatchFilter || (PatchFilter = {}));
export var PatchFilterGroup;
(function (PatchFilterGroup) {
    /**
     * @internal
     */
    PatchFilterGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PatchFilterGroup || (PatchFilterGroup = {}));
export var PatchRule;
(function (PatchRule) {
    /**
     * @internal
     */
    PatchRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PatchRule || (PatchRule = {}));
export var PatchRuleGroup;
(function (PatchRuleGroup) {
    /**
     * @internal
     */
    PatchRuleGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PatchRuleGroup || (PatchRuleGroup = {}));
export var OperatingSystem;
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
})(OperatingSystem || (OperatingSystem = {}));
export var PatchAction;
(function (PatchAction) {
    PatchAction["AllowAsDependency"] = "ALLOW_AS_DEPENDENCY";
    PatchAction["Block"] = "BLOCK";
})(PatchAction || (PatchAction = {}));
export var PatchSource;
(function (PatchSource) {
    /**
     * @internal
     */
    PatchSource.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Configuration && { Configuration: SENSITIVE_STRING }))); };
})(PatchSource || (PatchSource = {}));
export var CreatePatchBaselineRequest;
(function (CreatePatchBaselineRequest) {
    /**
     * @internal
     */
    CreatePatchBaselineRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Sources && { Sources: obj.Sources.map(function (item) { return PatchSource.filterSensitiveLog(item); }) }))); };
})(CreatePatchBaselineRequest || (CreatePatchBaselineRequest = {}));
export var CreatePatchBaselineResult;
(function (CreatePatchBaselineResult) {
    /**
     * @internal
     */
    CreatePatchBaselineResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePatchBaselineResult || (CreatePatchBaselineResult = {}));
export var ResourceDataSyncDestinationDataSharing;
(function (ResourceDataSyncDestinationDataSharing) {
    /**
     * @internal
     */
    ResourceDataSyncDestinationDataSharing.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDataSyncDestinationDataSharing || (ResourceDataSyncDestinationDataSharing = {}));
export var ResourceDataSyncS3Format;
(function (ResourceDataSyncS3Format) {
    ResourceDataSyncS3Format["JSON_SERDE"] = "JsonSerDe";
})(ResourceDataSyncS3Format || (ResourceDataSyncS3Format = {}));
export var ResourceDataSyncS3Destination;
(function (ResourceDataSyncS3Destination) {
    /**
     * @internal
     */
    ResourceDataSyncS3Destination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDataSyncS3Destination || (ResourceDataSyncS3Destination = {}));
export var ResourceDataSyncOrganizationalUnit;
(function (ResourceDataSyncOrganizationalUnit) {
    /**
     * @internal
     */
    ResourceDataSyncOrganizationalUnit.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDataSyncOrganizationalUnit || (ResourceDataSyncOrganizationalUnit = {}));
export var ResourceDataSyncAwsOrganizationsSource;
(function (ResourceDataSyncAwsOrganizationsSource) {
    /**
     * @internal
     */
    ResourceDataSyncAwsOrganizationsSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDataSyncAwsOrganizationsSource || (ResourceDataSyncAwsOrganizationsSource = {}));
export var ResourceDataSyncSource;
(function (ResourceDataSyncSource) {
    /**
     * @internal
     */
    ResourceDataSyncSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDataSyncSource || (ResourceDataSyncSource = {}));
export var CreateResourceDataSyncRequest;
(function (CreateResourceDataSyncRequest) {
    /**
     * @internal
     */
    CreateResourceDataSyncRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateResourceDataSyncRequest || (CreateResourceDataSyncRequest = {}));
export var CreateResourceDataSyncResult;
(function (CreateResourceDataSyncResult) {
    /**
     * @internal
     */
    CreateResourceDataSyncResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateResourceDataSyncResult || (CreateResourceDataSyncResult = {}));
export var ResourceDataSyncAlreadyExistsException;
(function (ResourceDataSyncAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceDataSyncAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDataSyncAlreadyExistsException || (ResourceDataSyncAlreadyExistsException = {}));
export var ResourceDataSyncCountExceededException;
(function (ResourceDataSyncCountExceededException) {
    /**
     * @internal
     */
    ResourceDataSyncCountExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDataSyncCountExceededException || (ResourceDataSyncCountExceededException = {}));
export var ResourceDataSyncInvalidConfigurationException;
(function (ResourceDataSyncInvalidConfigurationException) {
    /**
     * @internal
     */
    ResourceDataSyncInvalidConfigurationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDataSyncInvalidConfigurationException || (ResourceDataSyncInvalidConfigurationException = {}));
export var DeleteActivationRequest;
(function (DeleteActivationRequest) {
    /**
     * @internal
     */
    DeleteActivationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteActivationRequest || (DeleteActivationRequest = {}));
export var DeleteActivationResult;
(function (DeleteActivationResult) {
    /**
     * @internal
     */
    DeleteActivationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteActivationResult || (DeleteActivationResult = {}));
export var InvalidActivation;
(function (InvalidActivation) {
    /**
     * @internal
     */
    InvalidActivation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidActivation || (InvalidActivation = {}));
export var InvalidActivationId;
(function (InvalidActivationId) {
    /**
     * @internal
     */
    InvalidActivationId.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidActivationId || (InvalidActivationId = {}));
export var AssociationDoesNotExist;
(function (AssociationDoesNotExist) {
    /**
     * @internal
     */
    AssociationDoesNotExist.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociationDoesNotExist || (AssociationDoesNotExist = {}));
export var DeleteAssociationRequest;
(function (DeleteAssociationRequest) {
    /**
     * @internal
     */
    DeleteAssociationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAssociationRequest || (DeleteAssociationRequest = {}));
export var DeleteAssociationResult;
(function (DeleteAssociationResult) {
    /**
     * @internal
     */
    DeleteAssociationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAssociationResult || (DeleteAssociationResult = {}));
export var AssociatedInstances;
(function (AssociatedInstances) {
    /**
     * @internal
     */
    AssociatedInstances.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociatedInstances || (AssociatedInstances = {}));
export var DeleteDocumentRequest;
(function (DeleteDocumentRequest) {
    /**
     * @internal
     */
    DeleteDocumentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDocumentRequest || (DeleteDocumentRequest = {}));
export var DeleteDocumentResult;
(function (DeleteDocumentResult) {
    /**
     * @internal
     */
    DeleteDocumentResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDocumentResult || (DeleteDocumentResult = {}));
export var InvalidDocumentOperation;
(function (InvalidDocumentOperation) {
    /**
     * @internal
     */
    InvalidDocumentOperation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidDocumentOperation || (InvalidDocumentOperation = {}));
export var InventorySchemaDeleteOption;
(function (InventorySchemaDeleteOption) {
    InventorySchemaDeleteOption["DELETE_SCHEMA"] = "DeleteSchema";
    InventorySchemaDeleteOption["DISABLE_SCHEMA"] = "DisableSchema";
})(InventorySchemaDeleteOption || (InventorySchemaDeleteOption = {}));
export var DeleteInventoryRequest;
(function (DeleteInventoryRequest) {
    /**
     * @internal
     */
    DeleteInventoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInventoryRequest || (DeleteInventoryRequest = {}));
export var InventoryDeletionSummaryItem;
(function (InventoryDeletionSummaryItem) {
    /**
     * @internal
     */
    InventoryDeletionSummaryItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InventoryDeletionSummaryItem || (InventoryDeletionSummaryItem = {}));
export var InventoryDeletionSummary;
(function (InventoryDeletionSummary) {
    /**
     * @internal
     */
    InventoryDeletionSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InventoryDeletionSummary || (InventoryDeletionSummary = {}));
export var DeleteInventoryResult;
(function (DeleteInventoryResult) {
    /**
     * @internal
     */
    DeleteInventoryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInventoryResult || (DeleteInventoryResult = {}));
export var InvalidDeleteInventoryParametersException;
(function (InvalidDeleteInventoryParametersException) {
    /**
     * @internal
     */
    InvalidDeleteInventoryParametersException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidDeleteInventoryParametersException || (InvalidDeleteInventoryParametersException = {}));
export var InvalidInventoryRequestException;
(function (InvalidInventoryRequestException) {
    /**
     * @internal
     */
    InvalidInventoryRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInventoryRequestException || (InvalidInventoryRequestException = {}));
export var InvalidOptionException;
(function (InvalidOptionException) {
    /**
     * @internal
     */
    InvalidOptionException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidOptionException || (InvalidOptionException = {}));
export var InvalidTypeNameException;
(function (InvalidTypeNameException) {
    /**
     * @internal
     */
    InvalidTypeNameException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidTypeNameException || (InvalidTypeNameException = {}));
export var DeleteMaintenanceWindowRequest;
(function (DeleteMaintenanceWindowRequest) {
    /**
     * @internal
     */
    DeleteMaintenanceWindowRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMaintenanceWindowRequest || (DeleteMaintenanceWindowRequest = {}));
export var DeleteMaintenanceWindowResult;
(function (DeleteMaintenanceWindowResult) {
    /**
     * @internal
     */
    DeleteMaintenanceWindowResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMaintenanceWindowResult || (DeleteMaintenanceWindowResult = {}));
export var DeleteOpsMetadataRequest;
(function (DeleteOpsMetadataRequest) {
    /**
     * @internal
     */
    DeleteOpsMetadataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteOpsMetadataRequest || (DeleteOpsMetadataRequest = {}));
export var DeleteOpsMetadataResult;
(function (DeleteOpsMetadataResult) {
    /**
     * @internal
     */
    DeleteOpsMetadataResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteOpsMetadataResult || (DeleteOpsMetadataResult = {}));
export var OpsMetadataNotFoundException;
(function (OpsMetadataNotFoundException) {
    /**
     * @internal
     */
    OpsMetadataNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsMetadataNotFoundException || (OpsMetadataNotFoundException = {}));
export var DeleteParameterRequest;
(function (DeleteParameterRequest) {
    /**
     * @internal
     */
    DeleteParameterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteParameterRequest || (DeleteParameterRequest = {}));
export var DeleteParameterResult;
(function (DeleteParameterResult) {
    /**
     * @internal
     */
    DeleteParameterResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteParameterResult || (DeleteParameterResult = {}));
export var ParameterNotFound;
(function (ParameterNotFound) {
    /**
     * @internal
     */
    ParameterNotFound.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParameterNotFound || (ParameterNotFound = {}));
export var DeleteParametersRequest;
(function (DeleteParametersRequest) {
    /**
     * @internal
     */
    DeleteParametersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteParametersRequest || (DeleteParametersRequest = {}));
export var DeleteParametersResult;
(function (DeleteParametersResult) {
    /**
     * @internal
     */
    DeleteParametersResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteParametersResult || (DeleteParametersResult = {}));
export var DeletePatchBaselineRequest;
(function (DeletePatchBaselineRequest) {
    /**
     * @internal
     */
    DeletePatchBaselineRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePatchBaselineRequest || (DeletePatchBaselineRequest = {}));
export var DeletePatchBaselineResult;
(function (DeletePatchBaselineResult) {
    /**
     * @internal
     */
    DeletePatchBaselineResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePatchBaselineResult || (DeletePatchBaselineResult = {}));
export var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceInUseException || (ResourceInUseException = {}));
export var DeleteResourceDataSyncRequest;
(function (DeleteResourceDataSyncRequest) {
    /**
     * @internal
     */
    DeleteResourceDataSyncRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteResourceDataSyncRequest || (DeleteResourceDataSyncRequest = {}));
export var DeleteResourceDataSyncResult;
(function (DeleteResourceDataSyncResult) {
    /**
     * @internal
     */
    DeleteResourceDataSyncResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteResourceDataSyncResult || (DeleteResourceDataSyncResult = {}));
export var ResourceDataSyncNotFoundException;
(function (ResourceDataSyncNotFoundException) {
    /**
     * @internal
     */
    ResourceDataSyncNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDataSyncNotFoundException || (ResourceDataSyncNotFoundException = {}));
export var DeregisterManagedInstanceRequest;
(function (DeregisterManagedInstanceRequest) {
    /**
     * @internal
     */
    DeregisterManagedInstanceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterManagedInstanceRequest || (DeregisterManagedInstanceRequest = {}));
export var DeregisterManagedInstanceResult;
(function (DeregisterManagedInstanceResult) {
    /**
     * @internal
     */
    DeregisterManagedInstanceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterManagedInstanceResult || (DeregisterManagedInstanceResult = {}));
export var DeregisterPatchBaselineForPatchGroupRequest;
(function (DeregisterPatchBaselineForPatchGroupRequest) {
    /**
     * @internal
     */
    DeregisterPatchBaselineForPatchGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterPatchBaselineForPatchGroupRequest || (DeregisterPatchBaselineForPatchGroupRequest = {}));
export var DeregisterPatchBaselineForPatchGroupResult;
(function (DeregisterPatchBaselineForPatchGroupResult) {
    /**
     * @internal
     */
    DeregisterPatchBaselineForPatchGroupResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterPatchBaselineForPatchGroupResult || (DeregisterPatchBaselineForPatchGroupResult = {}));
export var DeregisterTargetFromMaintenanceWindowRequest;
(function (DeregisterTargetFromMaintenanceWindowRequest) {
    /**
     * @internal
     */
    DeregisterTargetFromMaintenanceWindowRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterTargetFromMaintenanceWindowRequest || (DeregisterTargetFromMaintenanceWindowRequest = {}));
export var DeregisterTargetFromMaintenanceWindowResult;
(function (DeregisterTargetFromMaintenanceWindowResult) {
    /**
     * @internal
     */
    DeregisterTargetFromMaintenanceWindowResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterTargetFromMaintenanceWindowResult || (DeregisterTargetFromMaintenanceWindowResult = {}));
export var TargetInUseException;
(function (TargetInUseException) {
    /**
     * @internal
     */
    TargetInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetInUseException || (TargetInUseException = {}));
export var DeregisterTaskFromMaintenanceWindowRequest;
(function (DeregisterTaskFromMaintenanceWindowRequest) {
    /**
     * @internal
     */
    DeregisterTaskFromMaintenanceWindowRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterTaskFromMaintenanceWindowRequest || (DeregisterTaskFromMaintenanceWindowRequest = {}));
export var DeregisterTaskFromMaintenanceWindowResult;
(function (DeregisterTaskFromMaintenanceWindowResult) {
    /**
     * @internal
     */
    DeregisterTaskFromMaintenanceWindowResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterTaskFromMaintenanceWindowResult || (DeregisterTaskFromMaintenanceWindowResult = {}));
export var DescribeActivationsFilterKeys;
(function (DescribeActivationsFilterKeys) {
    DescribeActivationsFilterKeys["ACTIVATION_IDS"] = "ActivationIds";
    DescribeActivationsFilterKeys["DEFAULT_INSTANCE_NAME"] = "DefaultInstanceName";
    DescribeActivationsFilterKeys["IAM_ROLE"] = "IamRole";
})(DescribeActivationsFilterKeys || (DescribeActivationsFilterKeys = {}));
export var DescribeActivationsFilter;
(function (DescribeActivationsFilter) {
    /**
     * @internal
     */
    DescribeActivationsFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeActivationsFilter || (DescribeActivationsFilter = {}));
export var DescribeActivationsRequest;
(function (DescribeActivationsRequest) {
    /**
     * @internal
     */
    DescribeActivationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeActivationsRequest || (DescribeActivationsRequest = {}));
export var DescribeActivationsResult;
(function (DescribeActivationsResult) {
    /**
     * @internal
     */
    DescribeActivationsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeActivationsResult || (DescribeActivationsResult = {}));
export var InvalidFilter;
(function (InvalidFilter) {
    /**
     * @internal
     */
    InvalidFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidFilter || (InvalidFilter = {}));
export var InvalidNextToken;
(function (InvalidNextToken) {
    /**
     * @internal
     */
    InvalidNextToken.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNextToken || (InvalidNextToken = {}));
export var DescribeAssociationRequest;
(function (DescribeAssociationRequest) {
    /**
     * @internal
     */
    DescribeAssociationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAssociationRequest || (DescribeAssociationRequest = {}));
export var DescribeAssociationResult;
(function (DescribeAssociationResult) {
    /**
     * @internal
     */
    DescribeAssociationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAssociationResult || (DescribeAssociationResult = {}));
export var InvalidAssociationVersion;
(function (InvalidAssociationVersion) {
    /**
     * @internal
     */
    InvalidAssociationVersion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidAssociationVersion || (InvalidAssociationVersion = {}));
export var AssociationExecutionFilterKey;
(function (AssociationExecutionFilterKey) {
    AssociationExecutionFilterKey["CreatedTime"] = "CreatedTime";
    AssociationExecutionFilterKey["ExecutionId"] = "ExecutionId";
    AssociationExecutionFilterKey["Status"] = "Status";
})(AssociationExecutionFilterKey || (AssociationExecutionFilterKey = {}));
export var AssociationFilterOperatorType;
(function (AssociationFilterOperatorType) {
    AssociationFilterOperatorType["Equal"] = "EQUAL";
    AssociationFilterOperatorType["GreaterThan"] = "GREATER_THAN";
    AssociationFilterOperatorType["LessThan"] = "LESS_THAN";
})(AssociationFilterOperatorType || (AssociationFilterOperatorType = {}));
export var AssociationExecutionFilter;
(function (AssociationExecutionFilter) {
    /**
     * @internal
     */
    AssociationExecutionFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociationExecutionFilter || (AssociationExecutionFilter = {}));
export var DescribeAssociationExecutionsRequest;
(function (DescribeAssociationExecutionsRequest) {
    /**
     * @internal
     */
    DescribeAssociationExecutionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAssociationExecutionsRequest || (DescribeAssociationExecutionsRequest = {}));
export var AssociationExecution;
(function (AssociationExecution) {
    /**
     * @internal
     */
    AssociationExecution.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociationExecution || (AssociationExecution = {}));
export var DescribeAssociationExecutionsResult;
(function (DescribeAssociationExecutionsResult) {
    /**
     * @internal
     */
    DescribeAssociationExecutionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAssociationExecutionsResult || (DescribeAssociationExecutionsResult = {}));
export var AssociationExecutionDoesNotExist;
(function (AssociationExecutionDoesNotExist) {
    /**
     * @internal
     */
    AssociationExecutionDoesNotExist.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociationExecutionDoesNotExist || (AssociationExecutionDoesNotExist = {}));
export var AssociationExecutionTargetsFilterKey;
(function (AssociationExecutionTargetsFilterKey) {
    AssociationExecutionTargetsFilterKey["ResourceId"] = "ResourceId";
    AssociationExecutionTargetsFilterKey["ResourceType"] = "ResourceType";
    AssociationExecutionTargetsFilterKey["Status"] = "Status";
})(AssociationExecutionTargetsFilterKey || (AssociationExecutionTargetsFilterKey = {}));
export var AssociationExecutionTargetsFilter;
(function (AssociationExecutionTargetsFilter) {
    /**
     * @internal
     */
    AssociationExecutionTargetsFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociationExecutionTargetsFilter || (AssociationExecutionTargetsFilter = {}));
export var DescribeAssociationExecutionTargetsRequest;
(function (DescribeAssociationExecutionTargetsRequest) {
    /**
     * @internal
     */
    DescribeAssociationExecutionTargetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAssociationExecutionTargetsRequest || (DescribeAssociationExecutionTargetsRequest = {}));
export var OutputSource;
(function (OutputSource) {
    /**
     * @internal
     */
    OutputSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputSource || (OutputSource = {}));
export var AssociationExecutionTarget;
(function (AssociationExecutionTarget) {
    /**
     * @internal
     */
    AssociationExecutionTarget.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociationExecutionTarget || (AssociationExecutionTarget = {}));
export var DescribeAssociationExecutionTargetsResult;
(function (DescribeAssociationExecutionTargetsResult) {
    /**
     * @internal
     */
    DescribeAssociationExecutionTargetsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAssociationExecutionTargetsResult || (DescribeAssociationExecutionTargetsResult = {}));
export var AutomationExecutionFilterKey;
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
})(AutomationExecutionFilterKey || (AutomationExecutionFilterKey = {}));
export var AutomationExecutionFilter;
(function (AutomationExecutionFilter) {
    /**
     * @internal
     */
    AutomationExecutionFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomationExecutionFilter || (AutomationExecutionFilter = {}));
export var DescribeAutomationExecutionsRequest;
(function (DescribeAutomationExecutionsRequest) {
    /**
     * @internal
     */
    DescribeAutomationExecutionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAutomationExecutionsRequest || (DescribeAutomationExecutionsRequest = {}));
export var AutomationExecutionStatus;
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
})(AutomationExecutionStatus || (AutomationExecutionStatus = {}));
export var AutomationSubtype;
(function (AutomationSubtype) {
    AutomationSubtype["ChangeRequest"] = "ChangeRequest";
})(AutomationSubtype || (AutomationSubtype = {}));
export var AutomationType;
(function (AutomationType) {
    AutomationType["CrossAccount"] = "CrossAccount";
    AutomationType["Local"] = "Local";
})(AutomationType || (AutomationType = {}));
export var ExecutionMode;
(function (ExecutionMode) {
    ExecutionMode["Auto"] = "Auto";
    ExecutionMode["Interactive"] = "Interactive";
})(ExecutionMode || (ExecutionMode = {}));
export var ResolvedTargets;
(function (ResolvedTargets) {
    /**
     * @internal
     */
    ResolvedTargets.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResolvedTargets || (ResolvedTargets = {}));
export var Runbook;
(function (Runbook) {
    /**
     * @internal
     */
    Runbook.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Runbook || (Runbook = {}));
export var AutomationExecutionMetadata;
(function (AutomationExecutionMetadata) {
    /**
     * @internal
     */
    AutomationExecutionMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomationExecutionMetadata || (AutomationExecutionMetadata = {}));
export var DescribeAutomationExecutionsResult;
(function (DescribeAutomationExecutionsResult) {
    /**
     * @internal
     */
    DescribeAutomationExecutionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAutomationExecutionsResult || (DescribeAutomationExecutionsResult = {}));
export var InvalidFilterKey;
(function (InvalidFilterKey) {
    /**
     * @internal
     */
    InvalidFilterKey.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidFilterKey || (InvalidFilterKey = {}));
export var InvalidFilterValue;
(function (InvalidFilterValue) {
    /**
     * @internal
     */
    InvalidFilterValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidFilterValue || (InvalidFilterValue = {}));
export var AutomationExecutionNotFoundException;
(function (AutomationExecutionNotFoundException) {
    /**
     * @internal
     */
    AutomationExecutionNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutomationExecutionNotFoundException || (AutomationExecutionNotFoundException = {}));
export var StepExecutionFilterKey;
(function (StepExecutionFilterKey) {
    StepExecutionFilterKey["ACTION"] = "Action";
    StepExecutionFilterKey["START_TIME_AFTER"] = "StartTimeAfter";
    StepExecutionFilterKey["START_TIME_BEFORE"] = "StartTimeBefore";
    StepExecutionFilterKey["STEP_EXECUTION_ID"] = "StepExecutionId";
    StepExecutionFilterKey["STEP_EXECUTION_STATUS"] = "StepExecutionStatus";
    StepExecutionFilterKey["STEP_NAME"] = "StepName";
})(StepExecutionFilterKey || (StepExecutionFilterKey = {}));
export var StepExecutionFilter;
(function (StepExecutionFilter) {
    /**
     * @internal
     */
    StepExecutionFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StepExecutionFilter || (StepExecutionFilter = {}));
export var DescribeAutomationStepExecutionsRequest;
(function (DescribeAutomationStepExecutionsRequest) {
    /**
     * @internal
     */
    DescribeAutomationStepExecutionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAutomationStepExecutionsRequest || (DescribeAutomationStepExecutionsRequest = {}));
export var FailureDetails;
(function (FailureDetails) {
    /**
     * @internal
     */
    FailureDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FailureDetails || (FailureDetails = {}));
export var StepExecution;
(function (StepExecution) {
    /**
     * @internal
     */
    StepExecution.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StepExecution || (StepExecution = {}));
export var DescribeAutomationStepExecutionsResult;
(function (DescribeAutomationStepExecutionsResult) {
    /**
     * @internal
     */
    DescribeAutomationStepExecutionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAutomationStepExecutionsResult || (DescribeAutomationStepExecutionsResult = {}));
export var PatchOrchestratorFilter;
(function (PatchOrchestratorFilter) {
    /**
     * @internal
     */
    PatchOrchestratorFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PatchOrchestratorFilter || (PatchOrchestratorFilter = {}));
export var DescribeAvailablePatchesRequest;
(function (DescribeAvailablePatchesRequest) {
    /**
     * @internal
     */
    DescribeAvailablePatchesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAvailablePatchesRequest || (DescribeAvailablePatchesRequest = {}));
export var Patch;
(function (Patch) {
    /**
     * @internal
     */
    Patch.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Patch || (Patch = {}));
export var DescribeAvailablePatchesResult;
(function (DescribeAvailablePatchesResult) {
    /**
     * @internal
     */
    DescribeAvailablePatchesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAvailablePatchesResult || (DescribeAvailablePatchesResult = {}));
export var DescribeDocumentRequest;
(function (DescribeDocumentRequest) {
    /**
     * @internal
     */
    DescribeDocumentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDocumentRequest || (DescribeDocumentRequest = {}));
export var DescribeDocumentResult;
(function (DescribeDocumentResult) {
    /**
     * @internal
     */
    DescribeDocumentResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDocumentResult || (DescribeDocumentResult = {}));
export var DocumentPermissionType;
(function (DocumentPermissionType) {
    DocumentPermissionType["SHARE"] = "Share";
})(DocumentPermissionType || (DocumentPermissionType = {}));
export var DescribeDocumentPermissionRequest;
(function (DescribeDocumentPermissionRequest) {
    /**
     * @internal
     */
    DescribeDocumentPermissionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDocumentPermissionRequest || (DescribeDocumentPermissionRequest = {}));
export var DescribeDocumentPermissionResponse;
(function (DescribeDocumentPermissionResponse) {
    /**
     * @internal
     */
    DescribeDocumentPermissionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDocumentPermissionResponse || (DescribeDocumentPermissionResponse = {}));
export var InvalidPermissionType;
(function (InvalidPermissionType) {
    /**
     * @internal
     */
    InvalidPermissionType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidPermissionType || (InvalidPermissionType = {}));
export var DescribeEffectiveInstanceAssociationsRequest;
(function (DescribeEffectiveInstanceAssociationsRequest) {
    /**
     * @internal
     */
    DescribeEffectiveInstanceAssociationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEffectiveInstanceAssociationsRequest || (DescribeEffectiveInstanceAssociationsRequest = {}));
export var InstanceAssociation;
(function (InstanceAssociation) {
    /**
     * @internal
     */
    InstanceAssociation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceAssociation || (InstanceAssociation = {}));
export var DescribeEffectiveInstanceAssociationsResult;
(function (DescribeEffectiveInstanceAssociationsResult) {
    /**
     * @internal
     */
    DescribeEffectiveInstanceAssociationsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEffectiveInstanceAssociationsResult || (DescribeEffectiveInstanceAssociationsResult = {}));
export var DescribeEffectivePatchesForPatchBaselineRequest;
(function (DescribeEffectivePatchesForPatchBaselineRequest) {
    /**
     * @internal
     */
    DescribeEffectivePatchesForPatchBaselineRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEffectivePatchesForPatchBaselineRequest || (DescribeEffectivePatchesForPatchBaselineRequest = {}));
export var PatchDeploymentStatus;
(function (PatchDeploymentStatus) {
    PatchDeploymentStatus["Approved"] = "APPROVED";
    PatchDeploymentStatus["ExplicitApproved"] = "EXPLICIT_APPROVED";
    PatchDeploymentStatus["ExplicitRejected"] = "EXPLICIT_REJECTED";
    PatchDeploymentStatus["PendingApproval"] = "PENDING_APPROVAL";
})(PatchDeploymentStatus || (PatchDeploymentStatus = {}));
export var PatchStatus;
(function (PatchStatus) {
    /**
     * @internal
     */
    PatchStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PatchStatus || (PatchStatus = {}));
export var EffectivePatch;
(function (EffectivePatch) {
    /**
     * @internal
     */
    EffectivePatch.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EffectivePatch || (EffectivePatch = {}));
export var DescribeEffectivePatchesForPatchBaselineResult;
(function (DescribeEffectivePatchesForPatchBaselineResult) {
    /**
     * @internal
     */
    DescribeEffectivePatchesForPatchBaselineResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEffectivePatchesForPatchBaselineResult || (DescribeEffectivePatchesForPatchBaselineResult = {}));
export var UnsupportedOperatingSystem;
(function (UnsupportedOperatingSystem) {
    /**
     * @internal
     */
    UnsupportedOperatingSystem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedOperatingSystem || (UnsupportedOperatingSystem = {}));
export var DescribeInstanceAssociationsStatusRequest;
(function (DescribeInstanceAssociationsStatusRequest) {
    /**
     * @internal
     */
    DescribeInstanceAssociationsStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstanceAssociationsStatusRequest || (DescribeInstanceAssociationsStatusRequest = {}));
export var S3OutputUrl;
(function (S3OutputUrl) {
    /**
     * @internal
     */
    S3OutputUrl.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3OutputUrl || (S3OutputUrl = {}));
export var InstanceAssociationOutputUrl;
(function (InstanceAssociationOutputUrl) {
    /**
     * @internal
     */
    InstanceAssociationOutputUrl.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceAssociationOutputUrl || (InstanceAssociationOutputUrl = {}));
export var InstanceAssociationStatusInfo;
(function (InstanceAssociationStatusInfo) {
    /**
     * @internal
     */
    InstanceAssociationStatusInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceAssociationStatusInfo || (InstanceAssociationStatusInfo = {}));
export var DescribeInstanceAssociationsStatusResult;
(function (DescribeInstanceAssociationsStatusResult) {
    /**
     * @internal
     */
    DescribeInstanceAssociationsStatusResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstanceAssociationsStatusResult || (DescribeInstanceAssociationsStatusResult = {}));
export var InstanceInformationStringFilter;
(function (InstanceInformationStringFilter) {
    /**
     * @internal
     */
    InstanceInformationStringFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceInformationStringFilter || (InstanceInformationStringFilter = {}));
export var InstanceInformationFilterKey;
(function (InstanceInformationFilterKey) {
    InstanceInformationFilterKey["ACTIVATION_IDS"] = "ActivationIds";
    InstanceInformationFilterKey["AGENT_VERSION"] = "AgentVersion";
    InstanceInformationFilterKey["ASSOCIATION_STATUS"] = "AssociationStatus";
    InstanceInformationFilterKey["IAM_ROLE"] = "IamRole";
    InstanceInformationFilterKey["INSTANCE_IDS"] = "InstanceIds";
    InstanceInformationFilterKey["PING_STATUS"] = "PingStatus";
    InstanceInformationFilterKey["PLATFORM_TYPES"] = "PlatformTypes";
    InstanceInformationFilterKey["RESOURCE_TYPE"] = "ResourceType";
})(InstanceInformationFilterKey || (InstanceInformationFilterKey = {}));
export var InstanceInformationFilter;
(function (InstanceInformationFilter) {
    /**
     * @internal
     */
    InstanceInformationFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceInformationFilter || (InstanceInformationFilter = {}));
export var DescribeInstanceInformationRequest;
(function (DescribeInstanceInformationRequest) {
    /**
     * @internal
     */
    DescribeInstanceInformationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstanceInformationRequest || (DescribeInstanceInformationRequest = {}));
export var InstanceAggregatedAssociationOverview;
(function (InstanceAggregatedAssociationOverview) {
    /**
     * @internal
     */
    InstanceAggregatedAssociationOverview.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceAggregatedAssociationOverview || (InstanceAggregatedAssociationOverview = {}));
export var PingStatus;
(function (PingStatus) {
    PingStatus["CONNECTION_LOST"] = "ConnectionLost";
    PingStatus["INACTIVE"] = "Inactive";
    PingStatus["ONLINE"] = "Online";
})(PingStatus || (PingStatus = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["DOCUMENT"] = "Document";
    ResourceType["EC2_INSTANCE"] = "EC2Instance";
    ResourceType["MANAGED_INSTANCE"] = "ManagedInstance";
})(ResourceType || (ResourceType = {}));
export var InstanceInformation;
(function (InstanceInformation) {
    /**
     * @internal
     */
    InstanceInformation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceInformation || (InstanceInformation = {}));
export var DescribeInstanceInformationResult;
(function (DescribeInstanceInformationResult) {
    /**
     * @internal
     */
    DescribeInstanceInformationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstanceInformationResult || (DescribeInstanceInformationResult = {}));
export var InvalidInstanceInformationFilterValue;
(function (InvalidInstanceInformationFilterValue) {
    /**
     * @internal
     */
    InvalidInstanceInformationFilterValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInstanceInformationFilterValue || (InvalidInstanceInformationFilterValue = {}));
export var DescribeInstancePatchesRequest;
(function (DescribeInstancePatchesRequest) {
    /**
     * @internal
     */
    DescribeInstancePatchesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstancePatchesRequest || (DescribeInstancePatchesRequest = {}));
export var PatchComplianceDataState;
(function (PatchComplianceDataState) {
    PatchComplianceDataState["Failed"] = "FAILED";
    PatchComplianceDataState["Installed"] = "INSTALLED";
    PatchComplianceDataState["InstalledOther"] = "INSTALLED_OTHER";
    PatchComplianceDataState["InstalledPendingReboot"] = "INSTALLED_PENDING_REBOOT";
    PatchComplianceDataState["InstalledRejected"] = "INSTALLED_REJECTED";
    PatchComplianceDataState["Missing"] = "MISSING";
    PatchComplianceDataState["NotApplicable"] = "NOT_APPLICABLE";
})(PatchComplianceDataState || (PatchComplianceDataState = {}));
export var PatchComplianceData;
(function (PatchComplianceData) {
    /**
     * @internal
     */
    PatchComplianceData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PatchComplianceData || (PatchComplianceData = {}));
export var DescribeInstancePatchesResult;
(function (DescribeInstancePatchesResult) {
    /**
     * @internal
     */
    DescribeInstancePatchesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstancePatchesResult || (DescribeInstancePatchesResult = {}));
export var DescribeInstancePatchStatesRequest;
(function (DescribeInstancePatchStatesRequest) {
    /**
     * @internal
     */
    DescribeInstancePatchStatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstancePatchStatesRequest || (DescribeInstancePatchStatesRequest = {}));
export var PatchOperationType;
(function (PatchOperationType) {
    PatchOperationType["INSTALL"] = "Install";
    PatchOperationType["SCAN"] = "Scan";
})(PatchOperationType || (PatchOperationType = {}));
export var RebootOption;
(function (RebootOption) {
    RebootOption["NO_REBOOT"] = "NoReboot";
    RebootOption["REBOOT_IF_NEEDED"] = "RebootIfNeeded";
})(RebootOption || (RebootOption = {}));
export var InstancePatchState;
(function (InstancePatchState) {
    /**
     * @internal
     */
    InstancePatchState.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }))); };
})(InstancePatchState || (InstancePatchState = {}));
export var DescribeInstancePatchStatesResult;
(function (DescribeInstancePatchStatesResult) {
    /**
     * @internal
     */
    DescribeInstancePatchStatesResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.InstancePatchStates && {
        InstancePatchStates: obj.InstancePatchStates.map(function (item) { return InstancePatchState.filterSensitiveLog(item); }),
    }))); };
})(DescribeInstancePatchStatesResult || (DescribeInstancePatchStatesResult = {}));
export var InstancePatchStateOperatorType;
(function (InstancePatchStateOperatorType) {
    InstancePatchStateOperatorType["EQUAL"] = "Equal";
    InstancePatchStateOperatorType["GREATER_THAN"] = "GreaterThan";
    InstancePatchStateOperatorType["LESS_THAN"] = "LessThan";
    InstancePatchStateOperatorType["NOT_EQUAL"] = "NotEqual";
})(InstancePatchStateOperatorType || (InstancePatchStateOperatorType = {}));
export var InstancePatchStateFilter;
(function (InstancePatchStateFilter) {
    /**
     * @internal
     */
    InstancePatchStateFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstancePatchStateFilter || (InstancePatchStateFilter = {}));
export var DescribeInstancePatchStatesForPatchGroupRequest;
(function (DescribeInstancePatchStatesForPatchGroupRequest) {
    /**
     * @internal
     */
    DescribeInstancePatchStatesForPatchGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInstancePatchStatesForPatchGroupRequest || (DescribeInstancePatchStatesForPatchGroupRequest = {}));
export var DescribeInstancePatchStatesForPatchGroupResult;
(function (DescribeInstancePatchStatesForPatchGroupResult) {
    /**
     * @internal
     */
    DescribeInstancePatchStatesForPatchGroupResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.InstancePatchStates && {
        InstancePatchStates: obj.InstancePatchStates.map(function (item) { return InstancePatchState.filterSensitiveLog(item); }),
    }))); };
})(DescribeInstancePatchStatesForPatchGroupResult || (DescribeInstancePatchStatesForPatchGroupResult = {}));
export var DescribeInventoryDeletionsRequest;
(function (DescribeInventoryDeletionsRequest) {
    /**
     * @internal
     */
    DescribeInventoryDeletionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInventoryDeletionsRequest || (DescribeInventoryDeletionsRequest = {}));
export var InventoryDeletionStatus;
(function (InventoryDeletionStatus) {
    InventoryDeletionStatus["COMPLETE"] = "Complete";
    InventoryDeletionStatus["IN_PROGRESS"] = "InProgress";
})(InventoryDeletionStatus || (InventoryDeletionStatus = {}));
export var InventoryDeletionStatusItem;
(function (InventoryDeletionStatusItem) {
    /**
     * @internal
     */
    InventoryDeletionStatusItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InventoryDeletionStatusItem || (InventoryDeletionStatusItem = {}));
export var DescribeInventoryDeletionsResult;
(function (DescribeInventoryDeletionsResult) {
    /**
     * @internal
     */
    DescribeInventoryDeletionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInventoryDeletionsResult || (DescribeInventoryDeletionsResult = {}));
export var InvalidDeletionIdException;
(function (InvalidDeletionIdException) {
    /**
     * @internal
     */
    InvalidDeletionIdException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidDeletionIdException || (InvalidDeletionIdException = {}));
export var MaintenanceWindowFilter;
(function (MaintenanceWindowFilter) {
    /**
     * @internal
     */
    MaintenanceWindowFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MaintenanceWindowFilter || (MaintenanceWindowFilter = {}));
export var DescribeMaintenanceWindowExecutionsRequest;
(function (DescribeMaintenanceWindowExecutionsRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowExecutionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMaintenanceWindowExecutionsRequest || (DescribeMaintenanceWindowExecutionsRequest = {}));
export var MaintenanceWindowExecutionStatus;
(function (MaintenanceWindowExecutionStatus) {
    MaintenanceWindowExecutionStatus["Cancelled"] = "CANCELLED";
    MaintenanceWindowExecutionStatus["Cancelling"] = "CANCELLING";
    MaintenanceWindowExecutionStatus["Failed"] = "FAILED";
    MaintenanceWindowExecutionStatus["InProgress"] = "IN_PROGRESS";
    MaintenanceWindowExecutionStatus["Pending"] = "PENDING";
    MaintenanceWindowExecutionStatus["SkippedOverlapping"] = "SKIPPED_OVERLAPPING";
    MaintenanceWindowExecutionStatus["Success"] = "SUCCESS";
    MaintenanceWindowExecutionStatus["TimedOut"] = "TIMED_OUT";
})(MaintenanceWindowExecutionStatus || (MaintenanceWindowExecutionStatus = {}));
export var MaintenanceWindowExecution;
(function (MaintenanceWindowExecution) {
    /**
     * @internal
     */
    MaintenanceWindowExecution.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MaintenanceWindowExecution || (MaintenanceWindowExecution = {}));
export var DescribeMaintenanceWindowExecutionsResult;
(function (DescribeMaintenanceWindowExecutionsResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowExecutionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMaintenanceWindowExecutionsResult || (DescribeMaintenanceWindowExecutionsResult = {}));
export var DescribeMaintenanceWindowExecutionTaskInvocationsRequest;
(function (DescribeMaintenanceWindowExecutionTaskInvocationsRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowExecutionTaskInvocationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMaintenanceWindowExecutionTaskInvocationsRequest || (DescribeMaintenanceWindowExecutionTaskInvocationsRequest = {}));
export var MaintenanceWindowTaskType;
(function (MaintenanceWindowTaskType) {
    MaintenanceWindowTaskType["Automation"] = "AUTOMATION";
    MaintenanceWindowTaskType["Lambda"] = "LAMBDA";
    MaintenanceWindowTaskType["RunCommand"] = "RUN_COMMAND";
    MaintenanceWindowTaskType["StepFunctions"] = "STEP_FUNCTIONS";
})(MaintenanceWindowTaskType || (MaintenanceWindowTaskType = {}));
export var MaintenanceWindowExecutionTaskInvocationIdentity;
(function (MaintenanceWindowExecutionTaskInvocationIdentity) {
    /**
     * @internal
     */
    MaintenanceWindowExecutionTaskInvocationIdentity.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Parameters && { Parameters: SENSITIVE_STRING })), (obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING }))); };
})(MaintenanceWindowExecutionTaskInvocationIdentity || (MaintenanceWindowExecutionTaskInvocationIdentity = {}));
export var DescribeMaintenanceWindowExecutionTaskInvocationsResult;
(function (DescribeMaintenanceWindowExecutionTaskInvocationsResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowExecutionTaskInvocationsResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.WindowExecutionTaskInvocationIdentities && {
        WindowExecutionTaskInvocationIdentities: obj.WindowExecutionTaskInvocationIdentities.map(function (item) {
            return MaintenanceWindowExecutionTaskInvocationIdentity.filterSensitiveLog(item);
        }),
    }))); };
})(DescribeMaintenanceWindowExecutionTaskInvocationsResult || (DescribeMaintenanceWindowExecutionTaskInvocationsResult = {}));
export var DescribeMaintenanceWindowExecutionTasksRequest;
(function (DescribeMaintenanceWindowExecutionTasksRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowExecutionTasksRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMaintenanceWindowExecutionTasksRequest || (DescribeMaintenanceWindowExecutionTasksRequest = {}));
export var MaintenanceWindowExecutionTaskIdentity;
(function (MaintenanceWindowExecutionTaskIdentity) {
    /**
     * @internal
     */
    MaintenanceWindowExecutionTaskIdentity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MaintenanceWindowExecutionTaskIdentity || (MaintenanceWindowExecutionTaskIdentity = {}));
export var DescribeMaintenanceWindowExecutionTasksResult;
(function (DescribeMaintenanceWindowExecutionTasksResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowExecutionTasksResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMaintenanceWindowExecutionTasksResult || (DescribeMaintenanceWindowExecutionTasksResult = {}));
export var DescribeMaintenanceWindowsRequest;
(function (DescribeMaintenanceWindowsRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMaintenanceWindowsRequest || (DescribeMaintenanceWindowsRequest = {}));
export var MaintenanceWindowIdentity;
(function (MaintenanceWindowIdentity) {
    /**
     * @internal
     */
    MaintenanceWindowIdentity.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(MaintenanceWindowIdentity || (MaintenanceWindowIdentity = {}));
export var DescribeMaintenanceWindowsResult;
(function (DescribeMaintenanceWindowsResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowsResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.WindowIdentities && {
        WindowIdentities: obj.WindowIdentities.map(function (item) { return MaintenanceWindowIdentity.filterSensitiveLog(item); }),
    }))); };
})(DescribeMaintenanceWindowsResult || (DescribeMaintenanceWindowsResult = {}));
export var MaintenanceWindowResourceType;
(function (MaintenanceWindowResourceType) {
    MaintenanceWindowResourceType["Instance"] = "INSTANCE";
    MaintenanceWindowResourceType["ResourceGroup"] = "RESOURCE_GROUP";
})(MaintenanceWindowResourceType || (MaintenanceWindowResourceType = {}));
export var DescribeMaintenanceWindowScheduleRequest;
(function (DescribeMaintenanceWindowScheduleRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowScheduleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMaintenanceWindowScheduleRequest || (DescribeMaintenanceWindowScheduleRequest = {}));
export var ScheduledWindowExecution;
(function (ScheduledWindowExecution) {
    /**
     * @internal
     */
    ScheduledWindowExecution.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScheduledWindowExecution || (ScheduledWindowExecution = {}));
export var DescribeMaintenanceWindowScheduleResult;
(function (DescribeMaintenanceWindowScheduleResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowScheduleResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMaintenanceWindowScheduleResult || (DescribeMaintenanceWindowScheduleResult = {}));
export var DescribeMaintenanceWindowsForTargetRequest;
(function (DescribeMaintenanceWindowsForTargetRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowsForTargetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMaintenanceWindowsForTargetRequest || (DescribeMaintenanceWindowsForTargetRequest = {}));
export var MaintenanceWindowIdentityForTarget;
(function (MaintenanceWindowIdentityForTarget) {
    /**
     * @internal
     */
    MaintenanceWindowIdentityForTarget.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MaintenanceWindowIdentityForTarget || (MaintenanceWindowIdentityForTarget = {}));
export var DescribeMaintenanceWindowsForTargetResult;
(function (DescribeMaintenanceWindowsForTargetResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowsForTargetResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMaintenanceWindowsForTargetResult || (DescribeMaintenanceWindowsForTargetResult = {}));
export var DescribeMaintenanceWindowTargetsRequest;
(function (DescribeMaintenanceWindowTargetsRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowTargetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMaintenanceWindowTargetsRequest || (DescribeMaintenanceWindowTargetsRequest = {}));
export var MaintenanceWindowTarget;
(function (MaintenanceWindowTarget) {
    /**
     * @internal
     */
    MaintenanceWindowTarget.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.OwnerInformation && { OwnerInformation: SENSITIVE_STRING })), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(MaintenanceWindowTarget || (MaintenanceWindowTarget = {}));
export var DescribeMaintenanceWindowTargetsResult;
(function (DescribeMaintenanceWindowTargetsResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowTargetsResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Targets && { Targets: obj.Targets.map(function (item) { return MaintenanceWindowTarget.filterSensitiveLog(item); }) }))); };
})(DescribeMaintenanceWindowTargetsResult || (DescribeMaintenanceWindowTargetsResult = {}));
export var DescribeMaintenanceWindowTasksRequest;
(function (DescribeMaintenanceWindowTasksRequest) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowTasksRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMaintenanceWindowTasksRequest || (DescribeMaintenanceWindowTasksRequest = {}));
export var LoggingInfo;
(function (LoggingInfo) {
    /**
     * @internal
     */
    LoggingInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoggingInfo || (LoggingInfo = {}));
export var MaintenanceWindowTaskParameterValueExpression;
(function (MaintenanceWindowTaskParameterValueExpression) {
    /**
     * @internal
     */
    MaintenanceWindowTaskParameterValueExpression.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Values && { Values: SENSITIVE_STRING }))); };
})(MaintenanceWindowTaskParameterValueExpression || (MaintenanceWindowTaskParameterValueExpression = {}));
export var MaintenanceWindowTask;
(function (MaintenanceWindowTask) {
    /**
     * @internal
     */
    MaintenanceWindowTask.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.TaskParameters && { TaskParameters: SENSITIVE_STRING })), (obj.Description && { Description: SENSITIVE_STRING }))); };
})(MaintenanceWindowTask || (MaintenanceWindowTask = {}));
export var DescribeMaintenanceWindowTasksResult;
(function (DescribeMaintenanceWindowTasksResult) {
    /**
     * @internal
     */
    DescribeMaintenanceWindowTasksResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Tasks && { Tasks: obj.Tasks.map(function (item) { return MaintenanceWindowTask.filterSensitiveLog(item); }) }))); };
})(DescribeMaintenanceWindowTasksResult || (DescribeMaintenanceWindowTasksResult = {}));
export var OpsItemFilterKey;
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
})(OpsItemFilterKey || (OpsItemFilterKey = {}));
export var OpsItemFilterOperator;
(function (OpsItemFilterOperator) {
    OpsItemFilterOperator["CONTAINS"] = "Contains";
    OpsItemFilterOperator["EQUAL"] = "Equal";
    OpsItemFilterOperator["GREATER_THAN"] = "GreaterThan";
    OpsItemFilterOperator["LESS_THAN"] = "LessThan";
})(OpsItemFilterOperator || (OpsItemFilterOperator = {}));
export var OpsItemFilter;
(function (OpsItemFilter) {
    /**
     * @internal
     */
    OpsItemFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItemFilter || (OpsItemFilter = {}));
export var DescribeOpsItemsRequest;
(function (DescribeOpsItemsRequest) {
    /**
     * @internal
     */
    DescribeOpsItemsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeOpsItemsRequest || (DescribeOpsItemsRequest = {}));
export var OpsItemStatus;
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
})(OpsItemStatus || (OpsItemStatus = {}));
export var OpsItemSummary;
(function (OpsItemSummary) {
    /**
     * @internal
     */
    OpsItemSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpsItemSummary || (OpsItemSummary = {}));
export var DescribeOpsItemsResponse;
(function (DescribeOpsItemsResponse) {
    /**
     * @internal
     */
    DescribeOpsItemsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeOpsItemsResponse || (DescribeOpsItemsResponse = {}));
export var ParametersFilterKey;
(function (ParametersFilterKey) {
    ParametersFilterKey["KEY_ID"] = "KeyId";
    ParametersFilterKey["NAME"] = "Name";
    ParametersFilterKey["TYPE"] = "Type";
})(ParametersFilterKey || (ParametersFilterKey = {}));
export var ParametersFilter;
(function (ParametersFilter) {
    /**
     * @internal
     */
    ParametersFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParametersFilter || (ParametersFilter = {}));
export var ParameterStringFilter;
(function (ParameterStringFilter) {
    /**
     * @internal
     */
    ParameterStringFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParameterStringFilter || (ParameterStringFilter = {}));
export var DescribeParametersRequest;
(function (DescribeParametersRequest) {
    /**
     * @internal
     */
    DescribeParametersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeParametersRequest || (DescribeParametersRequest = {}));
export var ParameterInlinePolicy;
(function (ParameterInlinePolicy) {
    /**
     * @internal
     */
    ParameterInlinePolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParameterInlinePolicy || (ParameterInlinePolicy = {}));
export var ParameterTier;
(function (ParameterTier) {
    ParameterTier["ADVANCED"] = "Advanced";
    ParameterTier["INTELLIGENT_TIERING"] = "Intelligent-Tiering";
    ParameterTier["STANDARD"] = "Standard";
})(ParameterTier || (ParameterTier = {}));
export var ParameterType;
(function (ParameterType) {
    ParameterType["SECURE_STRING"] = "SecureString";
    ParameterType["STRING"] = "String";
    ParameterType["STRING_LIST"] = "StringList";
})(ParameterType || (ParameterType = {}));
export var ParameterMetadata;
(function (ParameterMetadata) {
    /**
     * @internal
     */
    ParameterMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParameterMetadata || (ParameterMetadata = {}));
export var DescribeParametersResult;
(function (DescribeParametersResult) {
    /**
     * @internal
     */
    DescribeParametersResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeParametersResult || (DescribeParametersResult = {}));
//# sourceMappingURL=models_0.js.map