import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AcceptInboundCrossClusterSearchConnectionRequest;
(function (AcceptInboundCrossClusterSearchConnectionRequest) {
    /**
     * @internal
     */
    AcceptInboundCrossClusterSearchConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptInboundCrossClusterSearchConnectionRequest || (AcceptInboundCrossClusterSearchConnectionRequest = {}));
export var InboundCrossClusterSearchConnectionStatusCode;
(function (InboundCrossClusterSearchConnectionStatusCode) {
    InboundCrossClusterSearchConnectionStatusCode["APPROVED"] = "APPROVED";
    InboundCrossClusterSearchConnectionStatusCode["DELETED"] = "DELETED";
    InboundCrossClusterSearchConnectionStatusCode["DELETING"] = "DELETING";
    InboundCrossClusterSearchConnectionStatusCode["PENDING_ACCEPTANCE"] = "PENDING_ACCEPTANCE";
    InboundCrossClusterSearchConnectionStatusCode["REJECTED"] = "REJECTED";
    InboundCrossClusterSearchConnectionStatusCode["REJECTING"] = "REJECTING";
})(InboundCrossClusterSearchConnectionStatusCode || (InboundCrossClusterSearchConnectionStatusCode = {}));
export var InboundCrossClusterSearchConnectionStatus;
(function (InboundCrossClusterSearchConnectionStatus) {
    /**
     * @internal
     */
    InboundCrossClusterSearchConnectionStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InboundCrossClusterSearchConnectionStatus || (InboundCrossClusterSearchConnectionStatus = {}));
export var DomainInformation;
(function (DomainInformation) {
    /**
     * @internal
     */
    DomainInformation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainInformation || (DomainInformation = {}));
export var InboundCrossClusterSearchConnection;
(function (InboundCrossClusterSearchConnection) {
    /**
     * @internal
     */
    InboundCrossClusterSearchConnection.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InboundCrossClusterSearchConnection || (InboundCrossClusterSearchConnection = {}));
export var AcceptInboundCrossClusterSearchConnectionResponse;
(function (AcceptInboundCrossClusterSearchConnectionResponse) {
    /**
     * @internal
     */
    AcceptInboundCrossClusterSearchConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptInboundCrossClusterSearchConnectionResponse || (AcceptInboundCrossClusterSearchConnectionResponse = {}));
export var DisabledOperationException;
(function (DisabledOperationException) {
    /**
     * @internal
     */
    DisabledOperationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisabledOperationException || (DisabledOperationException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var OptionStatus;
(function (OptionStatus) {
    /**
     * @internal
     */
    OptionStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OptionStatus || (OptionStatus = {}));
export var AccessPoliciesStatus;
(function (AccessPoliciesStatus) {
    /**
     * @internal
     */
    AccessPoliciesStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessPoliciesStatus || (AccessPoliciesStatus = {}));
export var AdditionalLimit;
(function (AdditionalLimit) {
    /**
     * @internal
     */
    AdditionalLimit.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdditionalLimit || (AdditionalLimit = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var AddTagsRequest;
(function (AddTagsRequest) {
    /**
     * @internal
     */
    AddTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddTagsRequest || (AddTagsRequest = {}));
export var BaseException;
(function (BaseException) {
    /**
     * @internal
     */
    BaseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BaseException || (BaseException = {}));
export var InternalException;
(function (InternalException) {
    /**
     * @internal
     */
    InternalException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalException || (InternalException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var AdvancedOptionsStatus;
(function (AdvancedOptionsStatus) {
    /**
     * @internal
     */
    AdvancedOptionsStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdvancedOptionsStatus || (AdvancedOptionsStatus = {}));
export var SAMLIdp;
(function (SAMLIdp) {
    /**
     * @internal
     */
    SAMLIdp.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SAMLIdp || (SAMLIdp = {}));
export var SAMLOptionsOutput;
(function (SAMLOptionsOutput) {
    /**
     * @internal
     */
    SAMLOptionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SAMLOptionsOutput || (SAMLOptionsOutput = {}));
export var AdvancedSecurityOptions;
(function (AdvancedSecurityOptions) {
    /**
     * @internal
     */
    AdvancedSecurityOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdvancedSecurityOptions || (AdvancedSecurityOptions = {}));
export var MasterUserOptions;
(function (MasterUserOptions) {
    /**
     * @internal
     */
    MasterUserOptions.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.MasterUserName && { MasterUserName: SENSITIVE_STRING })), (obj.MasterUserPassword && { MasterUserPassword: SENSITIVE_STRING }))); };
})(MasterUserOptions || (MasterUserOptions = {}));
export var SAMLOptionsInput;
(function (SAMLOptionsInput) {
    /**
     * @internal
     */
    SAMLOptionsInput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.MasterUserName && { MasterUserName: SENSITIVE_STRING }))); };
})(SAMLOptionsInput || (SAMLOptionsInput = {}));
export var AdvancedSecurityOptionsInput;
(function (AdvancedSecurityOptionsInput) {
    /**
     * @internal
     */
    AdvancedSecurityOptionsInput.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.MasterUserOptions && { MasterUserOptions: MasterUserOptions.filterSensitiveLog(obj.MasterUserOptions) })), (obj.SAMLOptions && { SAMLOptions: SAMLOptionsInput.filterSensitiveLog(obj.SAMLOptions) }))); };
})(AdvancedSecurityOptionsInput || (AdvancedSecurityOptionsInput = {}));
export var AdvancedSecurityOptionsStatus;
(function (AdvancedSecurityOptionsStatus) {
    /**
     * @internal
     */
    AdvancedSecurityOptionsStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdvancedSecurityOptionsStatus || (AdvancedSecurityOptionsStatus = {}));
export var AssociatePackageRequest;
(function (AssociatePackageRequest) {
    /**
     * @internal
     */
    AssociatePackageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociatePackageRequest || (AssociatePackageRequest = {}));
export var ErrorDetails;
(function (ErrorDetails) {
    /**
     * @internal
     */
    ErrorDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ErrorDetails || (ErrorDetails = {}));
export var DomainPackageDetails;
(function (DomainPackageDetails) {
    /**
     * @internal
     */
    DomainPackageDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainPackageDetails || (DomainPackageDetails = {}));
export var AssociatePackageResponse;
(function (AssociatePackageResponse) {
    /**
     * @internal
     */
    AssociatePackageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociatePackageResponse || (AssociatePackageResponse = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var CancelElasticsearchServiceSoftwareUpdateRequest;
(function (CancelElasticsearchServiceSoftwareUpdateRequest) {
    /**
     * @internal
     */
    CancelElasticsearchServiceSoftwareUpdateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelElasticsearchServiceSoftwareUpdateRequest || (CancelElasticsearchServiceSoftwareUpdateRequest = {}));
export var ServiceSoftwareOptions;
(function (ServiceSoftwareOptions) {
    /**
     * @internal
     */
    ServiceSoftwareOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceSoftwareOptions || (ServiceSoftwareOptions = {}));
export var CancelElasticsearchServiceSoftwareUpdateResponse;
(function (CancelElasticsearchServiceSoftwareUpdateResponse) {
    /**
     * @internal
     */
    CancelElasticsearchServiceSoftwareUpdateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelElasticsearchServiceSoftwareUpdateResponse || (CancelElasticsearchServiceSoftwareUpdateResponse = {}));
export var AutoTuneDesiredState;
(function (AutoTuneDesiredState) {
    AutoTuneDesiredState["DISABLED"] = "DISABLED";
    AutoTuneDesiredState["ENABLED"] = "ENABLED";
})(AutoTuneDesiredState || (AutoTuneDesiredState = {}));
export var TimeUnit;
(function (TimeUnit) {
    TimeUnit["HOURS"] = "HOURS";
})(TimeUnit || (TimeUnit = {}));
export var Duration;
(function (Duration) {
    /**
     * @internal
     */
    Duration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Duration || (Duration = {}));
export var AutoTuneMaintenanceSchedule;
(function (AutoTuneMaintenanceSchedule) {
    /**
     * @internal
     */
    AutoTuneMaintenanceSchedule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoTuneMaintenanceSchedule || (AutoTuneMaintenanceSchedule = {}));
export var AutoTuneOptionsInput;
(function (AutoTuneOptionsInput) {
    /**
     * @internal
     */
    AutoTuneOptionsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoTuneOptionsInput || (AutoTuneOptionsInput = {}));
export var CognitoOptions;
(function (CognitoOptions) {
    /**
     * @internal
     */
    CognitoOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CognitoOptions || (CognitoOptions = {}));
export var TLSSecurityPolicy;
(function (TLSSecurityPolicy) {
    TLSSecurityPolicy["POLICY_MIN_TLS_1_0_2019_07"] = "Policy-Min-TLS-1-0-2019-07";
    TLSSecurityPolicy["POLICY_MIN_TLS_1_2_2019_07"] = "Policy-Min-TLS-1-2-2019-07";
})(TLSSecurityPolicy || (TLSSecurityPolicy = {}));
export var DomainEndpointOptions;
(function (DomainEndpointOptions) {
    /**
     * @internal
     */
    DomainEndpointOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainEndpointOptions || (DomainEndpointOptions = {}));
export var EBSOptions;
(function (EBSOptions) {
    /**
     * @internal
     */
    EBSOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EBSOptions || (EBSOptions = {}));
export var ColdStorageOptions;
(function (ColdStorageOptions) {
    /**
     * @internal
     */
    ColdStorageOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ColdStorageOptions || (ColdStorageOptions = {}));
export var ZoneAwarenessConfig;
(function (ZoneAwarenessConfig) {
    /**
     * @internal
     */
    ZoneAwarenessConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ZoneAwarenessConfig || (ZoneAwarenessConfig = {}));
export var ElasticsearchClusterConfig;
(function (ElasticsearchClusterConfig) {
    /**
     * @internal
     */
    ElasticsearchClusterConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ElasticsearchClusterConfig || (ElasticsearchClusterConfig = {}));
export var EncryptionAtRestOptions;
(function (EncryptionAtRestOptions) {
    /**
     * @internal
     */
    EncryptionAtRestOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncryptionAtRestOptions || (EncryptionAtRestOptions = {}));
export var LogPublishingOption;
(function (LogPublishingOption) {
    /**
     * @internal
     */
    LogPublishingOption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LogPublishingOption || (LogPublishingOption = {}));
export var NodeToNodeEncryptionOptions;
(function (NodeToNodeEncryptionOptions) {
    /**
     * @internal
     */
    NodeToNodeEncryptionOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NodeToNodeEncryptionOptions || (NodeToNodeEncryptionOptions = {}));
export var SnapshotOptions;
(function (SnapshotOptions) {
    /**
     * @internal
     */
    SnapshotOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SnapshotOptions || (SnapshotOptions = {}));
export var VPCOptions;
(function (VPCOptions) {
    /**
     * @internal
     */
    VPCOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VPCOptions || (VPCOptions = {}));
export var CreateElasticsearchDomainRequest;
(function (CreateElasticsearchDomainRequest) {
    /**
     * @internal
     */
    CreateElasticsearchDomainRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AdvancedSecurityOptions && {
        AdvancedSecurityOptions: AdvancedSecurityOptionsInput.filterSensitiveLog(obj.AdvancedSecurityOptions),
    }))); };
})(CreateElasticsearchDomainRequest || (CreateElasticsearchDomainRequest = {}));
export var AutoTuneState;
(function (AutoTuneState) {
    AutoTuneState["DISABLED"] = "DISABLED";
    AutoTuneState["DISABLED_AND_ROLLBACK_COMPLETE"] = "DISABLED_AND_ROLLBACK_COMPLETE";
    AutoTuneState["DISABLED_AND_ROLLBACK_ERROR"] = "DISABLED_AND_ROLLBACK_ERROR";
    AutoTuneState["DISABLED_AND_ROLLBACK_IN_PROGRESS"] = "DISABLED_AND_ROLLBACK_IN_PROGRESS";
    AutoTuneState["DISABLED_AND_ROLLBACK_SCHEDULED"] = "DISABLED_AND_ROLLBACK_SCHEDULED";
    AutoTuneState["DISABLE_IN_PROGRESS"] = "DISABLE_IN_PROGRESS";
    AutoTuneState["ENABLED"] = "ENABLED";
    AutoTuneState["ENABLE_IN_PROGRESS"] = "ENABLE_IN_PROGRESS";
    AutoTuneState["ERROR"] = "ERROR";
})(AutoTuneState || (AutoTuneState = {}));
export var AutoTuneOptionsOutput;
(function (AutoTuneOptionsOutput) {
    /**
     * @internal
     */
    AutoTuneOptionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoTuneOptionsOutput || (AutoTuneOptionsOutput = {}));
export var VPCDerivedInfo;
(function (VPCDerivedInfo) {
    /**
     * @internal
     */
    VPCDerivedInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VPCDerivedInfo || (VPCDerivedInfo = {}));
export var ElasticsearchDomainStatus;
(function (ElasticsearchDomainStatus) {
    /**
     * @internal
     */
    ElasticsearchDomainStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ElasticsearchDomainStatus || (ElasticsearchDomainStatus = {}));
export var CreateElasticsearchDomainResponse;
(function (CreateElasticsearchDomainResponse) {
    /**
     * @internal
     */
    CreateElasticsearchDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateElasticsearchDomainResponse || (CreateElasticsearchDomainResponse = {}));
export var InvalidTypeException;
(function (InvalidTypeException) {
    /**
     * @internal
     */
    InvalidTypeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidTypeException || (InvalidTypeException = {}));
export var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceAlreadyExistsException || (ResourceAlreadyExistsException = {}));
export var CreateOutboundCrossClusterSearchConnectionRequest;
(function (CreateOutboundCrossClusterSearchConnectionRequest) {
    /**
     * @internal
     */
    CreateOutboundCrossClusterSearchConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateOutboundCrossClusterSearchConnectionRequest || (CreateOutboundCrossClusterSearchConnectionRequest = {}));
export var OutboundCrossClusterSearchConnectionStatusCode;
(function (OutboundCrossClusterSearchConnectionStatusCode) {
    OutboundCrossClusterSearchConnectionStatusCode["ACTIVE"] = "ACTIVE";
    OutboundCrossClusterSearchConnectionStatusCode["DELETED"] = "DELETED";
    OutboundCrossClusterSearchConnectionStatusCode["DELETING"] = "DELETING";
    OutboundCrossClusterSearchConnectionStatusCode["PENDING_ACCEPTANCE"] = "PENDING_ACCEPTANCE";
    OutboundCrossClusterSearchConnectionStatusCode["PROVISIONING"] = "PROVISIONING";
    OutboundCrossClusterSearchConnectionStatusCode["REJECTED"] = "REJECTED";
    OutboundCrossClusterSearchConnectionStatusCode["VALIDATING"] = "VALIDATING";
    OutboundCrossClusterSearchConnectionStatusCode["VALIDATION_FAILED"] = "VALIDATION_FAILED";
})(OutboundCrossClusterSearchConnectionStatusCode || (OutboundCrossClusterSearchConnectionStatusCode = {}));
export var OutboundCrossClusterSearchConnectionStatus;
(function (OutboundCrossClusterSearchConnectionStatus) {
    /**
     * @internal
     */
    OutboundCrossClusterSearchConnectionStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutboundCrossClusterSearchConnectionStatus || (OutboundCrossClusterSearchConnectionStatus = {}));
export var CreateOutboundCrossClusterSearchConnectionResponse;
(function (CreateOutboundCrossClusterSearchConnectionResponse) {
    /**
     * @internal
     */
    CreateOutboundCrossClusterSearchConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateOutboundCrossClusterSearchConnectionResponse || (CreateOutboundCrossClusterSearchConnectionResponse = {}));
export var PackageSource;
(function (PackageSource) {
    /**
     * @internal
     */
    PackageSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PackageSource || (PackageSource = {}));
export var CreatePackageRequest;
(function (CreatePackageRequest) {
    /**
     * @internal
     */
    CreatePackageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePackageRequest || (CreatePackageRequest = {}));
export var PackageDetails;
(function (PackageDetails) {
    /**
     * @internal
     */
    PackageDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PackageDetails || (PackageDetails = {}));
export var CreatePackageResponse;
(function (CreatePackageResponse) {
    /**
     * @internal
     */
    CreatePackageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePackageResponse || (CreatePackageResponse = {}));
export var DeleteElasticsearchDomainRequest;
(function (DeleteElasticsearchDomainRequest) {
    /**
     * @internal
     */
    DeleteElasticsearchDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteElasticsearchDomainRequest || (DeleteElasticsearchDomainRequest = {}));
export var DeleteElasticsearchDomainResponse;
(function (DeleteElasticsearchDomainResponse) {
    /**
     * @internal
     */
    DeleteElasticsearchDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteElasticsearchDomainResponse || (DeleteElasticsearchDomainResponse = {}));
export var DeleteInboundCrossClusterSearchConnectionRequest;
(function (DeleteInboundCrossClusterSearchConnectionRequest) {
    /**
     * @internal
     */
    DeleteInboundCrossClusterSearchConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInboundCrossClusterSearchConnectionRequest || (DeleteInboundCrossClusterSearchConnectionRequest = {}));
export var DeleteInboundCrossClusterSearchConnectionResponse;
(function (DeleteInboundCrossClusterSearchConnectionResponse) {
    /**
     * @internal
     */
    DeleteInboundCrossClusterSearchConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInboundCrossClusterSearchConnectionResponse || (DeleteInboundCrossClusterSearchConnectionResponse = {}));
export var DeleteOutboundCrossClusterSearchConnectionRequest;
(function (DeleteOutboundCrossClusterSearchConnectionRequest) {
    /**
     * @internal
     */
    DeleteOutboundCrossClusterSearchConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteOutboundCrossClusterSearchConnectionRequest || (DeleteOutboundCrossClusterSearchConnectionRequest = {}));
export var OutboundCrossClusterSearchConnection;
(function (OutboundCrossClusterSearchConnection) {
    /**
     * @internal
     */
    OutboundCrossClusterSearchConnection.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutboundCrossClusterSearchConnection || (OutboundCrossClusterSearchConnection = {}));
export var DeleteOutboundCrossClusterSearchConnectionResponse;
(function (DeleteOutboundCrossClusterSearchConnectionResponse) {
    /**
     * @internal
     */
    DeleteOutboundCrossClusterSearchConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteOutboundCrossClusterSearchConnectionResponse || (DeleteOutboundCrossClusterSearchConnectionResponse = {}));
export var DeletePackageRequest;
(function (DeletePackageRequest) {
    /**
     * @internal
     */
    DeletePackageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePackageRequest || (DeletePackageRequest = {}));
export var DeletePackageResponse;
(function (DeletePackageResponse) {
    /**
     * @internal
     */
    DeletePackageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePackageResponse || (DeletePackageResponse = {}));
export var DescribeDomainAutoTunesRequest;
(function (DescribeDomainAutoTunesRequest) {
    /**
     * @internal
     */
    DescribeDomainAutoTunesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDomainAutoTunesRequest || (DescribeDomainAutoTunesRequest = {}));
export var ScheduledAutoTuneActionType;
(function (ScheduledAutoTuneActionType) {
    ScheduledAutoTuneActionType["JVM_HEAP_SIZE_TUNING"] = "JVM_HEAP_SIZE_TUNING";
    ScheduledAutoTuneActionType["JVM_YOUNG_GEN_TUNING"] = "JVM_YOUNG_GEN_TUNING";
})(ScheduledAutoTuneActionType || (ScheduledAutoTuneActionType = {}));
export var ScheduledAutoTuneSeverityType;
(function (ScheduledAutoTuneSeverityType) {
    ScheduledAutoTuneSeverityType["HIGH"] = "HIGH";
    ScheduledAutoTuneSeverityType["LOW"] = "LOW";
    ScheduledAutoTuneSeverityType["MEDIUM"] = "MEDIUM";
})(ScheduledAutoTuneSeverityType || (ScheduledAutoTuneSeverityType = {}));
export var ScheduledAutoTuneDetails;
(function (ScheduledAutoTuneDetails) {
    /**
     * @internal
     */
    ScheduledAutoTuneDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScheduledAutoTuneDetails || (ScheduledAutoTuneDetails = {}));
export var AutoTuneDetails;
(function (AutoTuneDetails) {
    /**
     * @internal
     */
    AutoTuneDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoTuneDetails || (AutoTuneDetails = {}));
export var AutoTuneType;
(function (AutoTuneType) {
    AutoTuneType["SCHEDULED_ACTION"] = "SCHEDULED_ACTION";
})(AutoTuneType || (AutoTuneType = {}));
export var AutoTune;
(function (AutoTune) {
    /**
     * @internal
     */
    AutoTune.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoTune || (AutoTune = {}));
export var DescribeDomainAutoTunesResponse;
(function (DescribeDomainAutoTunesResponse) {
    /**
     * @internal
     */
    DescribeDomainAutoTunesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDomainAutoTunesResponse || (DescribeDomainAutoTunesResponse = {}));
export var DescribeElasticsearchDomainRequest;
(function (DescribeElasticsearchDomainRequest) {
    /**
     * @internal
     */
    DescribeElasticsearchDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeElasticsearchDomainRequest || (DescribeElasticsearchDomainRequest = {}));
export var DescribeElasticsearchDomainResponse;
(function (DescribeElasticsearchDomainResponse) {
    /**
     * @internal
     */
    DescribeElasticsearchDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeElasticsearchDomainResponse || (DescribeElasticsearchDomainResponse = {}));
export var DescribeElasticsearchDomainConfigRequest;
(function (DescribeElasticsearchDomainConfigRequest) {
    /**
     * @internal
     */
    DescribeElasticsearchDomainConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeElasticsearchDomainConfigRequest || (DescribeElasticsearchDomainConfigRequest = {}));
export var RollbackOnDisable;
(function (RollbackOnDisable) {
    RollbackOnDisable["DEFAULT_ROLLBACK"] = "DEFAULT_ROLLBACK";
    RollbackOnDisable["NO_ROLLBACK"] = "NO_ROLLBACK";
})(RollbackOnDisable || (RollbackOnDisable = {}));
export var AutoTuneOptions;
(function (AutoTuneOptions) {
    /**
     * @internal
     */
    AutoTuneOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoTuneOptions || (AutoTuneOptions = {}));
export var AutoTuneStatus;
(function (AutoTuneStatus) {
    /**
     * @internal
     */
    AutoTuneStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoTuneStatus || (AutoTuneStatus = {}));
export var AutoTuneOptionsStatus;
(function (AutoTuneOptionsStatus) {
    /**
     * @internal
     */
    AutoTuneOptionsStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoTuneOptionsStatus || (AutoTuneOptionsStatus = {}));
export var CognitoOptionsStatus;
(function (CognitoOptionsStatus) {
    /**
     * @internal
     */
    CognitoOptionsStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CognitoOptionsStatus || (CognitoOptionsStatus = {}));
export var DomainEndpointOptionsStatus;
(function (DomainEndpointOptionsStatus) {
    /**
     * @internal
     */
    DomainEndpointOptionsStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainEndpointOptionsStatus || (DomainEndpointOptionsStatus = {}));
export var EBSOptionsStatus;
(function (EBSOptionsStatus) {
    /**
     * @internal
     */
    EBSOptionsStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EBSOptionsStatus || (EBSOptionsStatus = {}));
export var ElasticsearchClusterConfigStatus;
(function (ElasticsearchClusterConfigStatus) {
    /**
     * @internal
     */
    ElasticsearchClusterConfigStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ElasticsearchClusterConfigStatus || (ElasticsearchClusterConfigStatus = {}));
export var ElasticsearchVersionStatus;
(function (ElasticsearchVersionStatus) {
    /**
     * @internal
     */
    ElasticsearchVersionStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ElasticsearchVersionStatus || (ElasticsearchVersionStatus = {}));
export var EncryptionAtRestOptionsStatus;
(function (EncryptionAtRestOptionsStatus) {
    /**
     * @internal
     */
    EncryptionAtRestOptionsStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncryptionAtRestOptionsStatus || (EncryptionAtRestOptionsStatus = {}));
export var LogPublishingOptionsStatus;
(function (LogPublishingOptionsStatus) {
    /**
     * @internal
     */
    LogPublishingOptionsStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LogPublishingOptionsStatus || (LogPublishingOptionsStatus = {}));
export var NodeToNodeEncryptionOptionsStatus;
(function (NodeToNodeEncryptionOptionsStatus) {
    /**
     * @internal
     */
    NodeToNodeEncryptionOptionsStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NodeToNodeEncryptionOptionsStatus || (NodeToNodeEncryptionOptionsStatus = {}));
export var SnapshotOptionsStatus;
(function (SnapshotOptionsStatus) {
    /**
     * @internal
     */
    SnapshotOptionsStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SnapshotOptionsStatus || (SnapshotOptionsStatus = {}));
export var VPCDerivedInfoStatus;
(function (VPCDerivedInfoStatus) {
    /**
     * @internal
     */
    VPCDerivedInfoStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VPCDerivedInfoStatus || (VPCDerivedInfoStatus = {}));
export var ElasticsearchDomainConfig;
(function (ElasticsearchDomainConfig) {
    /**
     * @internal
     */
    ElasticsearchDomainConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ElasticsearchDomainConfig || (ElasticsearchDomainConfig = {}));
export var DescribeElasticsearchDomainConfigResponse;
(function (DescribeElasticsearchDomainConfigResponse) {
    /**
     * @internal
     */
    DescribeElasticsearchDomainConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeElasticsearchDomainConfigResponse || (DescribeElasticsearchDomainConfigResponse = {}));
export var DescribeElasticsearchDomainsRequest;
(function (DescribeElasticsearchDomainsRequest) {
    /**
     * @internal
     */
    DescribeElasticsearchDomainsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeElasticsearchDomainsRequest || (DescribeElasticsearchDomainsRequest = {}));
export var DescribeElasticsearchDomainsResponse;
(function (DescribeElasticsearchDomainsResponse) {
    /**
     * @internal
     */
    DescribeElasticsearchDomainsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeElasticsearchDomainsResponse || (DescribeElasticsearchDomainsResponse = {}));
export var DescribeElasticsearchInstanceTypeLimitsRequest;
(function (DescribeElasticsearchInstanceTypeLimitsRequest) {
    /**
     * @internal
     */
    DescribeElasticsearchInstanceTypeLimitsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeElasticsearchInstanceTypeLimitsRequest || (DescribeElasticsearchInstanceTypeLimitsRequest = {}));
export var InstanceCountLimits;
(function (InstanceCountLimits) {
    /**
     * @internal
     */
    InstanceCountLimits.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceCountLimits || (InstanceCountLimits = {}));
export var InstanceLimits;
(function (InstanceLimits) {
    /**
     * @internal
     */
    InstanceLimits.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceLimits || (InstanceLimits = {}));
export var StorageTypeLimit;
(function (StorageTypeLimit) {
    /**
     * @internal
     */
    StorageTypeLimit.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorageTypeLimit || (StorageTypeLimit = {}));
export var StorageType;
(function (StorageType) {
    /**
     * @internal
     */
    StorageType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorageType || (StorageType = {}));
export var Limits;
(function (Limits) {
    /**
     * @internal
     */
    Limits.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Limits || (Limits = {}));
export var DescribeElasticsearchInstanceTypeLimitsResponse;
(function (DescribeElasticsearchInstanceTypeLimitsResponse) {
    /**
     * @internal
     */
    DescribeElasticsearchInstanceTypeLimitsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeElasticsearchInstanceTypeLimitsResponse || (DescribeElasticsearchInstanceTypeLimitsResponse = {}));
export var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Filter || (Filter = {}));
export var DescribeInboundCrossClusterSearchConnectionsRequest;
(function (DescribeInboundCrossClusterSearchConnectionsRequest) {
    /**
     * @internal
     */
    DescribeInboundCrossClusterSearchConnectionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInboundCrossClusterSearchConnectionsRequest || (DescribeInboundCrossClusterSearchConnectionsRequest = {}));
export var DescribeInboundCrossClusterSearchConnectionsResponse;
(function (DescribeInboundCrossClusterSearchConnectionsResponse) {
    /**
     * @internal
     */
    DescribeInboundCrossClusterSearchConnectionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInboundCrossClusterSearchConnectionsResponse || (DescribeInboundCrossClusterSearchConnectionsResponse = {}));
export var InvalidPaginationTokenException;
(function (InvalidPaginationTokenException) {
    /**
     * @internal
     */
    InvalidPaginationTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidPaginationTokenException || (InvalidPaginationTokenException = {}));
export var DescribeOutboundCrossClusterSearchConnectionsRequest;
(function (DescribeOutboundCrossClusterSearchConnectionsRequest) {
    /**
     * @internal
     */
    DescribeOutboundCrossClusterSearchConnectionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeOutboundCrossClusterSearchConnectionsRequest || (DescribeOutboundCrossClusterSearchConnectionsRequest = {}));
export var DescribeOutboundCrossClusterSearchConnectionsResponse;
(function (DescribeOutboundCrossClusterSearchConnectionsResponse) {
    /**
     * @internal
     */
    DescribeOutboundCrossClusterSearchConnectionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeOutboundCrossClusterSearchConnectionsResponse || (DescribeOutboundCrossClusterSearchConnectionsResponse = {}));
export var DescribePackagesFilterName;
(function (DescribePackagesFilterName) {
    DescribePackagesFilterName["PackageID"] = "PackageID";
    DescribePackagesFilterName["PackageName"] = "PackageName";
    DescribePackagesFilterName["PackageStatus"] = "PackageStatus";
})(DescribePackagesFilterName || (DescribePackagesFilterName = {}));
export var DescribePackagesFilter;
(function (DescribePackagesFilter) {
    /**
     * @internal
     */
    DescribePackagesFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePackagesFilter || (DescribePackagesFilter = {}));
export var DescribePackagesRequest;
(function (DescribePackagesRequest) {
    /**
     * @internal
     */
    DescribePackagesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePackagesRequest || (DescribePackagesRequest = {}));
export var DescribePackagesResponse;
(function (DescribePackagesResponse) {
    /**
     * @internal
     */
    DescribePackagesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePackagesResponse || (DescribePackagesResponse = {}));
export var DescribeReservedElasticsearchInstanceOfferingsRequest;
(function (DescribeReservedElasticsearchInstanceOfferingsRequest) {
    /**
     * @internal
     */
    DescribeReservedElasticsearchInstanceOfferingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReservedElasticsearchInstanceOfferingsRequest || (DescribeReservedElasticsearchInstanceOfferingsRequest = {}));
export var RecurringCharge;
(function (RecurringCharge) {
    /**
     * @internal
     */
    RecurringCharge.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecurringCharge || (RecurringCharge = {}));
export var ReservedElasticsearchInstanceOffering;
(function (ReservedElasticsearchInstanceOffering) {
    /**
     * @internal
     */
    ReservedElasticsearchInstanceOffering.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReservedElasticsearchInstanceOffering || (ReservedElasticsearchInstanceOffering = {}));
export var DescribeReservedElasticsearchInstanceOfferingsResponse;
(function (DescribeReservedElasticsearchInstanceOfferingsResponse) {
    /**
     * @internal
     */
    DescribeReservedElasticsearchInstanceOfferingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReservedElasticsearchInstanceOfferingsResponse || (DescribeReservedElasticsearchInstanceOfferingsResponse = {}));
export var DescribeReservedElasticsearchInstancesRequest;
(function (DescribeReservedElasticsearchInstancesRequest) {
    /**
     * @internal
     */
    DescribeReservedElasticsearchInstancesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReservedElasticsearchInstancesRequest || (DescribeReservedElasticsearchInstancesRequest = {}));
export var ReservedElasticsearchInstance;
(function (ReservedElasticsearchInstance) {
    /**
     * @internal
     */
    ReservedElasticsearchInstance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReservedElasticsearchInstance || (ReservedElasticsearchInstance = {}));
export var DescribeReservedElasticsearchInstancesResponse;
(function (DescribeReservedElasticsearchInstancesResponse) {
    /**
     * @internal
     */
    DescribeReservedElasticsearchInstancesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReservedElasticsearchInstancesResponse || (DescribeReservedElasticsearchInstancesResponse = {}));
export var DissociatePackageRequest;
(function (DissociatePackageRequest) {
    /**
     * @internal
     */
    DissociatePackageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DissociatePackageRequest || (DissociatePackageRequest = {}));
export var DissociatePackageResponse;
(function (DissociatePackageResponse) {
    /**
     * @internal
     */
    DissociatePackageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DissociatePackageResponse || (DissociatePackageResponse = {}));
export var GetCompatibleElasticsearchVersionsRequest;
(function (GetCompatibleElasticsearchVersionsRequest) {
    /**
     * @internal
     */
    GetCompatibleElasticsearchVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCompatibleElasticsearchVersionsRequest || (GetCompatibleElasticsearchVersionsRequest = {}));
export var CompatibleVersionsMap;
(function (CompatibleVersionsMap) {
    /**
     * @internal
     */
    CompatibleVersionsMap.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompatibleVersionsMap || (CompatibleVersionsMap = {}));
export var GetCompatibleElasticsearchVersionsResponse;
(function (GetCompatibleElasticsearchVersionsResponse) {
    /**
     * @internal
     */
    GetCompatibleElasticsearchVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCompatibleElasticsearchVersionsResponse || (GetCompatibleElasticsearchVersionsResponse = {}));
export var GetPackageVersionHistoryRequest;
(function (GetPackageVersionHistoryRequest) {
    /**
     * @internal
     */
    GetPackageVersionHistoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPackageVersionHistoryRequest || (GetPackageVersionHistoryRequest = {}));
export var PackageVersionHistory;
(function (PackageVersionHistory) {
    /**
     * @internal
     */
    PackageVersionHistory.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PackageVersionHistory || (PackageVersionHistory = {}));
export var GetPackageVersionHistoryResponse;
(function (GetPackageVersionHistoryResponse) {
    /**
     * @internal
     */
    GetPackageVersionHistoryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPackageVersionHistoryResponse || (GetPackageVersionHistoryResponse = {}));
export var GetUpgradeHistoryRequest;
(function (GetUpgradeHistoryRequest) {
    /**
     * @internal
     */
    GetUpgradeHistoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUpgradeHistoryRequest || (GetUpgradeHistoryRequest = {}));
export var UpgradeStepItem;
(function (UpgradeStepItem) {
    /**
     * @internal
     */
    UpgradeStepItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpgradeStepItem || (UpgradeStepItem = {}));
export var UpgradeHistory;
(function (UpgradeHistory) {
    /**
     * @internal
     */
    UpgradeHistory.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpgradeHistory || (UpgradeHistory = {}));
export var GetUpgradeHistoryResponse;
(function (GetUpgradeHistoryResponse) {
    /**
     * @internal
     */
    GetUpgradeHistoryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUpgradeHistoryResponse || (GetUpgradeHistoryResponse = {}));
export var GetUpgradeStatusRequest;
(function (GetUpgradeStatusRequest) {
    /**
     * @internal
     */
    GetUpgradeStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUpgradeStatusRequest || (GetUpgradeStatusRequest = {}));
export var GetUpgradeStatusResponse;
(function (GetUpgradeStatusResponse) {
    /**
     * @internal
     */
    GetUpgradeStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUpgradeStatusResponse || (GetUpgradeStatusResponse = {}));
export var DomainInfo;
(function (DomainInfo) {
    /**
     * @internal
     */
    DomainInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainInfo || (DomainInfo = {}));
export var ListDomainNamesResponse;
(function (ListDomainNamesResponse) {
    /**
     * @internal
     */
    ListDomainNamesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDomainNamesResponse || (ListDomainNamesResponse = {}));
export var ListDomainsForPackageRequest;
(function (ListDomainsForPackageRequest) {
    /**
     * @internal
     */
    ListDomainsForPackageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDomainsForPackageRequest || (ListDomainsForPackageRequest = {}));
export var ListDomainsForPackageResponse;
(function (ListDomainsForPackageResponse) {
    /**
     * @internal
     */
    ListDomainsForPackageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDomainsForPackageResponse || (ListDomainsForPackageResponse = {}));
export var ListElasticsearchInstanceTypesRequest;
(function (ListElasticsearchInstanceTypesRequest) {
    /**
     * @internal
     */
    ListElasticsearchInstanceTypesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListElasticsearchInstanceTypesRequest || (ListElasticsearchInstanceTypesRequest = {}));
export var ListElasticsearchInstanceTypesResponse;
(function (ListElasticsearchInstanceTypesResponse) {
    /**
     * @internal
     */
    ListElasticsearchInstanceTypesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListElasticsearchInstanceTypesResponse || (ListElasticsearchInstanceTypesResponse = {}));
export var ListElasticsearchVersionsRequest;
(function (ListElasticsearchVersionsRequest) {
    /**
     * @internal
     */
    ListElasticsearchVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListElasticsearchVersionsRequest || (ListElasticsearchVersionsRequest = {}));
export var ListElasticsearchVersionsResponse;
(function (ListElasticsearchVersionsResponse) {
    /**
     * @internal
     */
    ListElasticsearchVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListElasticsearchVersionsResponse || (ListElasticsearchVersionsResponse = {}));
export var ListPackagesForDomainRequest;
(function (ListPackagesForDomainRequest) {
    /**
     * @internal
     */
    ListPackagesForDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPackagesForDomainRequest || (ListPackagesForDomainRequest = {}));
export var ListPackagesForDomainResponse;
(function (ListPackagesForDomainResponse) {
    /**
     * @internal
     */
    ListPackagesForDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPackagesForDomainResponse || (ListPackagesForDomainResponse = {}));
export var ListTagsRequest;
(function (ListTagsRequest) {
    /**
     * @internal
     */
    ListTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsRequest || (ListTagsRequest = {}));
export var ListTagsResponse;
(function (ListTagsResponse) {
    /**
     * @internal
     */
    ListTagsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsResponse || (ListTagsResponse = {}));
export var PurchaseReservedElasticsearchInstanceOfferingRequest;
(function (PurchaseReservedElasticsearchInstanceOfferingRequest) {
    /**
     * @internal
     */
    PurchaseReservedElasticsearchInstanceOfferingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PurchaseReservedElasticsearchInstanceOfferingRequest || (PurchaseReservedElasticsearchInstanceOfferingRequest = {}));
export var PurchaseReservedElasticsearchInstanceOfferingResponse;
(function (PurchaseReservedElasticsearchInstanceOfferingResponse) {
    /**
     * @internal
     */
    PurchaseReservedElasticsearchInstanceOfferingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PurchaseReservedElasticsearchInstanceOfferingResponse || (PurchaseReservedElasticsearchInstanceOfferingResponse = {}));
export var RejectInboundCrossClusterSearchConnectionRequest;
(function (RejectInboundCrossClusterSearchConnectionRequest) {
    /**
     * @internal
     */
    RejectInboundCrossClusterSearchConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RejectInboundCrossClusterSearchConnectionRequest || (RejectInboundCrossClusterSearchConnectionRequest = {}));
export var RejectInboundCrossClusterSearchConnectionResponse;
(function (RejectInboundCrossClusterSearchConnectionResponse) {
    /**
     * @internal
     */
    RejectInboundCrossClusterSearchConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RejectInboundCrossClusterSearchConnectionResponse || (RejectInboundCrossClusterSearchConnectionResponse = {}));
export var RemoveTagsRequest;
(function (RemoveTagsRequest) {
    /**
     * @internal
     */
    RemoveTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTagsRequest || (RemoveTagsRequest = {}));
export var StartElasticsearchServiceSoftwareUpdateRequest;
(function (StartElasticsearchServiceSoftwareUpdateRequest) {
    /**
     * @internal
     */
    StartElasticsearchServiceSoftwareUpdateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartElasticsearchServiceSoftwareUpdateRequest || (StartElasticsearchServiceSoftwareUpdateRequest = {}));
export var StartElasticsearchServiceSoftwareUpdateResponse;
(function (StartElasticsearchServiceSoftwareUpdateResponse) {
    /**
     * @internal
     */
    StartElasticsearchServiceSoftwareUpdateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartElasticsearchServiceSoftwareUpdateResponse || (StartElasticsearchServiceSoftwareUpdateResponse = {}));
export var UpdateElasticsearchDomainConfigRequest;
(function (UpdateElasticsearchDomainConfigRequest) {
    /**
     * @internal
     */
    UpdateElasticsearchDomainConfigRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AdvancedSecurityOptions && {
        AdvancedSecurityOptions: AdvancedSecurityOptionsInput.filterSensitiveLog(obj.AdvancedSecurityOptions),
    }))); };
})(UpdateElasticsearchDomainConfigRequest || (UpdateElasticsearchDomainConfigRequest = {}));
export var UpdateElasticsearchDomainConfigResponse;
(function (UpdateElasticsearchDomainConfigResponse) {
    /**
     * @internal
     */
    UpdateElasticsearchDomainConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateElasticsearchDomainConfigResponse || (UpdateElasticsearchDomainConfigResponse = {}));
export var UpdatePackageRequest;
(function (UpdatePackageRequest) {
    /**
     * @internal
     */
    UpdatePackageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdatePackageRequest || (UpdatePackageRequest = {}));
export var UpdatePackageResponse;
(function (UpdatePackageResponse) {
    /**
     * @internal
     */
    UpdatePackageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdatePackageResponse || (UpdatePackageResponse = {}));
export var UpgradeElasticsearchDomainRequest;
(function (UpgradeElasticsearchDomainRequest) {
    /**
     * @internal
     */
    UpgradeElasticsearchDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpgradeElasticsearchDomainRequest || (UpgradeElasticsearchDomainRequest = {}));
export var UpgradeElasticsearchDomainResponse;
(function (UpgradeElasticsearchDomainResponse) {
    /**
     * @internal
     */
    UpgradeElasticsearchDomainResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpgradeElasticsearchDomainResponse || (UpgradeElasticsearchDomainResponse = {}));
//# sourceMappingURL=models_0.js.map