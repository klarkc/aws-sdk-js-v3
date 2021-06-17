"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotOptions = exports.NodeToNodeEncryptionOptions = exports.LogPublishingOption = exports.EncryptionAtRestOptions = exports.ElasticsearchClusterConfig = exports.ZoneAwarenessConfig = exports.ColdStorageOptions = exports.EBSOptions = exports.DomainEndpointOptions = exports.TLSSecurityPolicy = exports.CognitoOptions = exports.AutoTuneOptionsInput = exports.AutoTuneMaintenanceSchedule = exports.Duration = exports.TimeUnit = exports.AutoTuneDesiredState = exports.CancelElasticsearchServiceSoftwareUpdateResponse = exports.ServiceSoftwareOptions = exports.CancelElasticsearchServiceSoftwareUpdateRequest = exports.ConflictException = exports.AssociatePackageResponse = exports.DomainPackageDetails = exports.ErrorDetails = exports.AssociatePackageRequest = exports.AdvancedSecurityOptionsStatus = exports.AdvancedSecurityOptionsInput = exports.SAMLOptionsInput = exports.MasterUserOptions = exports.AdvancedSecurityOptions = exports.SAMLOptionsOutput = exports.SAMLIdp = exports.AdvancedOptionsStatus = exports.ValidationException = exports.InternalException = exports.BaseException = exports.AddTagsRequest = exports.Tag = exports.AdditionalLimit = exports.AccessPoliciesStatus = exports.OptionStatus = exports.AccessDeniedException = exports.ResourceNotFoundException = exports.LimitExceededException = exports.DisabledOperationException = exports.AcceptInboundCrossClusterSearchConnectionResponse = exports.InboundCrossClusterSearchConnection = exports.DomainInformation = exports.InboundCrossClusterSearchConnectionStatus = exports.InboundCrossClusterSearchConnectionStatusCode = exports.AcceptInboundCrossClusterSearchConnectionRequest = void 0;
exports.SnapshotOptionsStatus = exports.NodeToNodeEncryptionOptionsStatus = exports.LogPublishingOptionsStatus = exports.EncryptionAtRestOptionsStatus = exports.ElasticsearchVersionStatus = exports.ElasticsearchClusterConfigStatus = exports.EBSOptionsStatus = exports.DomainEndpointOptionsStatus = exports.CognitoOptionsStatus = exports.AutoTuneOptionsStatus = exports.AutoTuneStatus = exports.AutoTuneOptions = exports.RollbackOnDisable = exports.DescribeElasticsearchDomainConfigRequest = exports.DescribeElasticsearchDomainResponse = exports.DescribeElasticsearchDomainRequest = exports.DescribeDomainAutoTunesResponse = exports.AutoTune = exports.AutoTuneType = exports.AutoTuneDetails = exports.ScheduledAutoTuneDetails = exports.ScheduledAutoTuneSeverityType = exports.ScheduledAutoTuneActionType = exports.DescribeDomainAutoTunesRequest = exports.DeletePackageResponse = exports.DeletePackageRequest = exports.DeleteOutboundCrossClusterSearchConnectionResponse = exports.OutboundCrossClusterSearchConnection = exports.DeleteOutboundCrossClusterSearchConnectionRequest = exports.DeleteInboundCrossClusterSearchConnectionResponse = exports.DeleteInboundCrossClusterSearchConnectionRequest = exports.DeleteElasticsearchDomainResponse = exports.DeleteElasticsearchDomainRequest = exports.CreatePackageResponse = exports.PackageDetails = exports.CreatePackageRequest = exports.PackageSource = exports.CreateOutboundCrossClusterSearchConnectionResponse = exports.OutboundCrossClusterSearchConnectionStatus = exports.OutboundCrossClusterSearchConnectionStatusCode = exports.CreateOutboundCrossClusterSearchConnectionRequest = exports.ResourceAlreadyExistsException = exports.InvalidTypeException = exports.CreateElasticsearchDomainResponse = exports.ElasticsearchDomainStatus = exports.VPCDerivedInfo = exports.AutoTuneOptionsOutput = exports.AutoTuneState = exports.CreateElasticsearchDomainRequest = exports.VPCOptions = void 0;
exports.ListElasticsearchVersionsRequest = exports.ListElasticsearchInstanceTypesResponse = exports.ListElasticsearchInstanceTypesRequest = exports.ListDomainsForPackageResponse = exports.ListDomainsForPackageRequest = exports.ListDomainNamesResponse = exports.DomainInfo = exports.GetUpgradeStatusResponse = exports.GetUpgradeStatusRequest = exports.GetUpgradeHistoryResponse = exports.UpgradeHistory = exports.UpgradeStepItem = exports.GetUpgradeHistoryRequest = exports.GetPackageVersionHistoryResponse = exports.PackageVersionHistory = exports.GetPackageVersionHistoryRequest = exports.GetCompatibleElasticsearchVersionsResponse = exports.CompatibleVersionsMap = exports.GetCompatibleElasticsearchVersionsRequest = exports.DissociatePackageResponse = exports.DissociatePackageRequest = exports.DescribeReservedElasticsearchInstancesResponse = exports.ReservedElasticsearchInstance = exports.DescribeReservedElasticsearchInstancesRequest = exports.DescribeReservedElasticsearchInstanceOfferingsResponse = exports.ReservedElasticsearchInstanceOffering = exports.RecurringCharge = exports.DescribeReservedElasticsearchInstanceOfferingsRequest = exports.DescribePackagesResponse = exports.DescribePackagesRequest = exports.DescribePackagesFilter = exports.DescribePackagesFilterName = exports.DescribeOutboundCrossClusterSearchConnectionsResponse = exports.DescribeOutboundCrossClusterSearchConnectionsRequest = exports.InvalidPaginationTokenException = exports.DescribeInboundCrossClusterSearchConnectionsResponse = exports.DescribeInboundCrossClusterSearchConnectionsRequest = exports.Filter = exports.DescribeElasticsearchInstanceTypeLimitsResponse = exports.Limits = exports.StorageType = exports.StorageTypeLimit = exports.InstanceLimits = exports.InstanceCountLimits = exports.DescribeElasticsearchInstanceTypeLimitsRequest = exports.DescribeElasticsearchDomainsResponse = exports.DescribeElasticsearchDomainsRequest = exports.DescribeElasticsearchDomainConfigResponse = exports.ElasticsearchDomainConfig = exports.VPCDerivedInfoStatus = void 0;
exports.UpgradeElasticsearchDomainResponse = exports.UpgradeElasticsearchDomainRequest = exports.UpdatePackageResponse = exports.UpdatePackageRequest = exports.UpdateElasticsearchDomainConfigResponse = exports.UpdateElasticsearchDomainConfigRequest = exports.StartElasticsearchServiceSoftwareUpdateResponse = exports.StartElasticsearchServiceSoftwareUpdateRequest = exports.RemoveTagsRequest = exports.RejectInboundCrossClusterSearchConnectionResponse = exports.RejectInboundCrossClusterSearchConnectionRequest = exports.PurchaseReservedElasticsearchInstanceOfferingResponse = exports.PurchaseReservedElasticsearchInstanceOfferingRequest = exports.ListTagsResponse = exports.ListTagsRequest = exports.ListPackagesForDomainResponse = exports.ListPackagesForDomainRequest = exports.ListElasticsearchVersionsResponse = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AcceptInboundCrossClusterSearchConnectionRequest;
(function (AcceptInboundCrossClusterSearchConnectionRequest) {
    /**
     * @internal
     */
    AcceptInboundCrossClusterSearchConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptInboundCrossClusterSearchConnectionRequest = exports.AcceptInboundCrossClusterSearchConnectionRequest || (exports.AcceptInboundCrossClusterSearchConnectionRequest = {}));
var InboundCrossClusterSearchConnectionStatusCode;
(function (InboundCrossClusterSearchConnectionStatusCode) {
    InboundCrossClusterSearchConnectionStatusCode["APPROVED"] = "APPROVED";
    InboundCrossClusterSearchConnectionStatusCode["DELETED"] = "DELETED";
    InboundCrossClusterSearchConnectionStatusCode["DELETING"] = "DELETING";
    InboundCrossClusterSearchConnectionStatusCode["PENDING_ACCEPTANCE"] = "PENDING_ACCEPTANCE";
    InboundCrossClusterSearchConnectionStatusCode["REJECTED"] = "REJECTED";
    InboundCrossClusterSearchConnectionStatusCode["REJECTING"] = "REJECTING";
})(InboundCrossClusterSearchConnectionStatusCode = exports.InboundCrossClusterSearchConnectionStatusCode || (exports.InboundCrossClusterSearchConnectionStatusCode = {}));
var InboundCrossClusterSearchConnectionStatus;
(function (InboundCrossClusterSearchConnectionStatus) {
    /**
     * @internal
     */
    InboundCrossClusterSearchConnectionStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InboundCrossClusterSearchConnectionStatus = exports.InboundCrossClusterSearchConnectionStatus || (exports.InboundCrossClusterSearchConnectionStatus = {}));
var DomainInformation;
(function (DomainInformation) {
    /**
     * @internal
     */
    DomainInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainInformation = exports.DomainInformation || (exports.DomainInformation = {}));
var InboundCrossClusterSearchConnection;
(function (InboundCrossClusterSearchConnection) {
    /**
     * @internal
     */
    InboundCrossClusterSearchConnection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InboundCrossClusterSearchConnection = exports.InboundCrossClusterSearchConnection || (exports.InboundCrossClusterSearchConnection = {}));
var AcceptInboundCrossClusterSearchConnectionResponse;
(function (AcceptInboundCrossClusterSearchConnectionResponse) {
    /**
     * @internal
     */
    AcceptInboundCrossClusterSearchConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptInboundCrossClusterSearchConnectionResponse = exports.AcceptInboundCrossClusterSearchConnectionResponse || (exports.AcceptInboundCrossClusterSearchConnectionResponse = {}));
var DisabledOperationException;
(function (DisabledOperationException) {
    /**
     * @internal
     */
    DisabledOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisabledOperationException = exports.DisabledOperationException || (exports.DisabledOperationException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var OptionStatus;
(function (OptionStatus) {
    /**
     * @internal
     */
    OptionStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptionStatus = exports.OptionStatus || (exports.OptionStatus = {}));
var AccessPoliciesStatus;
(function (AccessPoliciesStatus) {
    /**
     * @internal
     */
    AccessPoliciesStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessPoliciesStatus = exports.AccessPoliciesStatus || (exports.AccessPoliciesStatus = {}));
var AdditionalLimit;
(function (AdditionalLimit) {
    /**
     * @internal
     */
    AdditionalLimit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdditionalLimit = exports.AdditionalLimit || (exports.AdditionalLimit = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AddTagsRequest;
(function (AddTagsRequest) {
    /**
     * @internal
     */
    AddTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsRequest = exports.AddTagsRequest || (exports.AddTagsRequest = {}));
var BaseException;
(function (BaseException) {
    /**
     * @internal
     */
    BaseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BaseException = exports.BaseException || (exports.BaseException = {}));
var InternalException;
(function (InternalException) {
    /**
     * @internal
     */
    InternalException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalException = exports.InternalException || (exports.InternalException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var AdvancedOptionsStatus;
(function (AdvancedOptionsStatus) {
    /**
     * @internal
     */
    AdvancedOptionsStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdvancedOptionsStatus = exports.AdvancedOptionsStatus || (exports.AdvancedOptionsStatus = {}));
var SAMLIdp;
(function (SAMLIdp) {
    /**
     * @internal
     */
    SAMLIdp.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SAMLIdp = exports.SAMLIdp || (exports.SAMLIdp = {}));
var SAMLOptionsOutput;
(function (SAMLOptionsOutput) {
    /**
     * @internal
     */
    SAMLOptionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SAMLOptionsOutput = exports.SAMLOptionsOutput || (exports.SAMLOptionsOutput = {}));
var AdvancedSecurityOptions;
(function (AdvancedSecurityOptions) {
    /**
     * @internal
     */
    AdvancedSecurityOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdvancedSecurityOptions = exports.AdvancedSecurityOptions || (exports.AdvancedSecurityOptions = {}));
var MasterUserOptions;
(function (MasterUserOptions) {
    /**
     * @internal
     */
    MasterUserOptions.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.MasterUserName && { MasterUserName: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.MasterUserPassword && { MasterUserPassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(MasterUserOptions = exports.MasterUserOptions || (exports.MasterUserOptions = {}));
var SAMLOptionsInput;
(function (SAMLOptionsInput) {
    /**
     * @internal
     */
    SAMLOptionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.MasterUserName && { MasterUserName: smithy_client_1.SENSITIVE_STRING }),
    });
})(SAMLOptionsInput = exports.SAMLOptionsInput || (exports.SAMLOptionsInput = {}));
var AdvancedSecurityOptionsInput;
(function (AdvancedSecurityOptionsInput) {
    /**
     * @internal
     */
    AdvancedSecurityOptionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.MasterUserOptions && { MasterUserOptions: MasterUserOptions.filterSensitiveLog(obj.MasterUserOptions) }),
        ...(obj.SAMLOptions && { SAMLOptions: SAMLOptionsInput.filterSensitiveLog(obj.SAMLOptions) }),
    });
})(AdvancedSecurityOptionsInput = exports.AdvancedSecurityOptionsInput || (exports.AdvancedSecurityOptionsInput = {}));
var AdvancedSecurityOptionsStatus;
(function (AdvancedSecurityOptionsStatus) {
    /**
     * @internal
     */
    AdvancedSecurityOptionsStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdvancedSecurityOptionsStatus = exports.AdvancedSecurityOptionsStatus || (exports.AdvancedSecurityOptionsStatus = {}));
var AssociatePackageRequest;
(function (AssociatePackageRequest) {
    /**
     * @internal
     */
    AssociatePackageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociatePackageRequest = exports.AssociatePackageRequest || (exports.AssociatePackageRequest = {}));
var ErrorDetails;
(function (ErrorDetails) {
    /**
     * @internal
     */
    ErrorDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorDetails = exports.ErrorDetails || (exports.ErrorDetails = {}));
var DomainPackageDetails;
(function (DomainPackageDetails) {
    /**
     * @internal
     */
    DomainPackageDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainPackageDetails = exports.DomainPackageDetails || (exports.DomainPackageDetails = {}));
var AssociatePackageResponse;
(function (AssociatePackageResponse) {
    /**
     * @internal
     */
    AssociatePackageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociatePackageResponse = exports.AssociatePackageResponse || (exports.AssociatePackageResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CancelElasticsearchServiceSoftwareUpdateRequest;
(function (CancelElasticsearchServiceSoftwareUpdateRequest) {
    /**
     * @internal
     */
    CancelElasticsearchServiceSoftwareUpdateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelElasticsearchServiceSoftwareUpdateRequest = exports.CancelElasticsearchServiceSoftwareUpdateRequest || (exports.CancelElasticsearchServiceSoftwareUpdateRequest = {}));
var ServiceSoftwareOptions;
(function (ServiceSoftwareOptions) {
    /**
     * @internal
     */
    ServiceSoftwareOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceSoftwareOptions = exports.ServiceSoftwareOptions || (exports.ServiceSoftwareOptions = {}));
var CancelElasticsearchServiceSoftwareUpdateResponse;
(function (CancelElasticsearchServiceSoftwareUpdateResponse) {
    /**
     * @internal
     */
    CancelElasticsearchServiceSoftwareUpdateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelElasticsearchServiceSoftwareUpdateResponse = exports.CancelElasticsearchServiceSoftwareUpdateResponse || (exports.CancelElasticsearchServiceSoftwareUpdateResponse = {}));
var AutoTuneDesiredState;
(function (AutoTuneDesiredState) {
    AutoTuneDesiredState["DISABLED"] = "DISABLED";
    AutoTuneDesiredState["ENABLED"] = "ENABLED";
})(AutoTuneDesiredState = exports.AutoTuneDesiredState || (exports.AutoTuneDesiredState = {}));
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["HOURS"] = "HOURS";
})(TimeUnit = exports.TimeUnit || (exports.TimeUnit = {}));
var Duration;
(function (Duration) {
    /**
     * @internal
     */
    Duration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Duration = exports.Duration || (exports.Duration = {}));
var AutoTuneMaintenanceSchedule;
(function (AutoTuneMaintenanceSchedule) {
    /**
     * @internal
     */
    AutoTuneMaintenanceSchedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoTuneMaintenanceSchedule = exports.AutoTuneMaintenanceSchedule || (exports.AutoTuneMaintenanceSchedule = {}));
var AutoTuneOptionsInput;
(function (AutoTuneOptionsInput) {
    /**
     * @internal
     */
    AutoTuneOptionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoTuneOptionsInput = exports.AutoTuneOptionsInput || (exports.AutoTuneOptionsInput = {}));
var CognitoOptions;
(function (CognitoOptions) {
    /**
     * @internal
     */
    CognitoOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CognitoOptions = exports.CognitoOptions || (exports.CognitoOptions = {}));
var TLSSecurityPolicy;
(function (TLSSecurityPolicy) {
    TLSSecurityPolicy["POLICY_MIN_TLS_1_0_2019_07"] = "Policy-Min-TLS-1-0-2019-07";
    TLSSecurityPolicy["POLICY_MIN_TLS_1_2_2019_07"] = "Policy-Min-TLS-1-2-2019-07";
})(TLSSecurityPolicy = exports.TLSSecurityPolicy || (exports.TLSSecurityPolicy = {}));
var DomainEndpointOptions;
(function (DomainEndpointOptions) {
    /**
     * @internal
     */
    DomainEndpointOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainEndpointOptions = exports.DomainEndpointOptions || (exports.DomainEndpointOptions = {}));
var EBSOptions;
(function (EBSOptions) {
    /**
     * @internal
     */
    EBSOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EBSOptions = exports.EBSOptions || (exports.EBSOptions = {}));
var ColdStorageOptions;
(function (ColdStorageOptions) {
    /**
     * @internal
     */
    ColdStorageOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColdStorageOptions = exports.ColdStorageOptions || (exports.ColdStorageOptions = {}));
var ZoneAwarenessConfig;
(function (ZoneAwarenessConfig) {
    /**
     * @internal
     */
    ZoneAwarenessConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ZoneAwarenessConfig = exports.ZoneAwarenessConfig || (exports.ZoneAwarenessConfig = {}));
var ElasticsearchClusterConfig;
(function (ElasticsearchClusterConfig) {
    /**
     * @internal
     */
    ElasticsearchClusterConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticsearchClusterConfig = exports.ElasticsearchClusterConfig || (exports.ElasticsearchClusterConfig = {}));
var EncryptionAtRestOptions;
(function (EncryptionAtRestOptions) {
    /**
     * @internal
     */
    EncryptionAtRestOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionAtRestOptions = exports.EncryptionAtRestOptions || (exports.EncryptionAtRestOptions = {}));
var LogPublishingOption;
(function (LogPublishingOption) {
    /**
     * @internal
     */
    LogPublishingOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogPublishingOption = exports.LogPublishingOption || (exports.LogPublishingOption = {}));
var NodeToNodeEncryptionOptions;
(function (NodeToNodeEncryptionOptions) {
    /**
     * @internal
     */
    NodeToNodeEncryptionOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeToNodeEncryptionOptions = exports.NodeToNodeEncryptionOptions || (exports.NodeToNodeEncryptionOptions = {}));
var SnapshotOptions;
(function (SnapshotOptions) {
    /**
     * @internal
     */
    SnapshotOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotOptions = exports.SnapshotOptions || (exports.SnapshotOptions = {}));
var VPCOptions;
(function (VPCOptions) {
    /**
     * @internal
     */
    VPCOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VPCOptions = exports.VPCOptions || (exports.VPCOptions = {}));
var CreateElasticsearchDomainRequest;
(function (CreateElasticsearchDomainRequest) {
    /**
     * @internal
     */
    CreateElasticsearchDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AdvancedSecurityOptions && {
            AdvancedSecurityOptions: AdvancedSecurityOptionsInput.filterSensitiveLog(obj.AdvancedSecurityOptions),
        }),
    });
})(CreateElasticsearchDomainRequest = exports.CreateElasticsearchDomainRequest || (exports.CreateElasticsearchDomainRequest = {}));
var AutoTuneState;
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
})(AutoTuneState = exports.AutoTuneState || (exports.AutoTuneState = {}));
var AutoTuneOptionsOutput;
(function (AutoTuneOptionsOutput) {
    /**
     * @internal
     */
    AutoTuneOptionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoTuneOptionsOutput = exports.AutoTuneOptionsOutput || (exports.AutoTuneOptionsOutput = {}));
var VPCDerivedInfo;
(function (VPCDerivedInfo) {
    /**
     * @internal
     */
    VPCDerivedInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VPCDerivedInfo = exports.VPCDerivedInfo || (exports.VPCDerivedInfo = {}));
var ElasticsearchDomainStatus;
(function (ElasticsearchDomainStatus) {
    /**
     * @internal
     */
    ElasticsearchDomainStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticsearchDomainStatus = exports.ElasticsearchDomainStatus || (exports.ElasticsearchDomainStatus = {}));
var CreateElasticsearchDomainResponse;
(function (CreateElasticsearchDomainResponse) {
    /**
     * @internal
     */
    CreateElasticsearchDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateElasticsearchDomainResponse = exports.CreateElasticsearchDomainResponse || (exports.CreateElasticsearchDomainResponse = {}));
var InvalidTypeException;
(function (InvalidTypeException) {
    /**
     * @internal
     */
    InvalidTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTypeException = exports.InvalidTypeException || (exports.InvalidTypeException = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var CreateOutboundCrossClusterSearchConnectionRequest;
(function (CreateOutboundCrossClusterSearchConnectionRequest) {
    /**
     * @internal
     */
    CreateOutboundCrossClusterSearchConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOutboundCrossClusterSearchConnectionRequest = exports.CreateOutboundCrossClusterSearchConnectionRequest || (exports.CreateOutboundCrossClusterSearchConnectionRequest = {}));
var OutboundCrossClusterSearchConnectionStatusCode;
(function (OutboundCrossClusterSearchConnectionStatusCode) {
    OutboundCrossClusterSearchConnectionStatusCode["ACTIVE"] = "ACTIVE";
    OutboundCrossClusterSearchConnectionStatusCode["DELETED"] = "DELETED";
    OutboundCrossClusterSearchConnectionStatusCode["DELETING"] = "DELETING";
    OutboundCrossClusterSearchConnectionStatusCode["PENDING_ACCEPTANCE"] = "PENDING_ACCEPTANCE";
    OutboundCrossClusterSearchConnectionStatusCode["PROVISIONING"] = "PROVISIONING";
    OutboundCrossClusterSearchConnectionStatusCode["REJECTED"] = "REJECTED";
    OutboundCrossClusterSearchConnectionStatusCode["VALIDATING"] = "VALIDATING";
    OutboundCrossClusterSearchConnectionStatusCode["VALIDATION_FAILED"] = "VALIDATION_FAILED";
})(OutboundCrossClusterSearchConnectionStatusCode = exports.OutboundCrossClusterSearchConnectionStatusCode || (exports.OutboundCrossClusterSearchConnectionStatusCode = {}));
var OutboundCrossClusterSearchConnectionStatus;
(function (OutboundCrossClusterSearchConnectionStatus) {
    /**
     * @internal
     */
    OutboundCrossClusterSearchConnectionStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutboundCrossClusterSearchConnectionStatus = exports.OutboundCrossClusterSearchConnectionStatus || (exports.OutboundCrossClusterSearchConnectionStatus = {}));
var CreateOutboundCrossClusterSearchConnectionResponse;
(function (CreateOutboundCrossClusterSearchConnectionResponse) {
    /**
     * @internal
     */
    CreateOutboundCrossClusterSearchConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateOutboundCrossClusterSearchConnectionResponse = exports.CreateOutboundCrossClusterSearchConnectionResponse || (exports.CreateOutboundCrossClusterSearchConnectionResponse = {}));
var PackageSource;
(function (PackageSource) {
    /**
     * @internal
     */
    PackageSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageSource = exports.PackageSource || (exports.PackageSource = {}));
var CreatePackageRequest;
(function (CreatePackageRequest) {
    /**
     * @internal
     */
    CreatePackageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePackageRequest = exports.CreatePackageRequest || (exports.CreatePackageRequest = {}));
var PackageDetails;
(function (PackageDetails) {
    /**
     * @internal
     */
    PackageDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageDetails = exports.PackageDetails || (exports.PackageDetails = {}));
var CreatePackageResponse;
(function (CreatePackageResponse) {
    /**
     * @internal
     */
    CreatePackageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePackageResponse = exports.CreatePackageResponse || (exports.CreatePackageResponse = {}));
var DeleteElasticsearchDomainRequest;
(function (DeleteElasticsearchDomainRequest) {
    /**
     * @internal
     */
    DeleteElasticsearchDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteElasticsearchDomainRequest = exports.DeleteElasticsearchDomainRequest || (exports.DeleteElasticsearchDomainRequest = {}));
var DeleteElasticsearchDomainResponse;
(function (DeleteElasticsearchDomainResponse) {
    /**
     * @internal
     */
    DeleteElasticsearchDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteElasticsearchDomainResponse = exports.DeleteElasticsearchDomainResponse || (exports.DeleteElasticsearchDomainResponse = {}));
var DeleteInboundCrossClusterSearchConnectionRequest;
(function (DeleteInboundCrossClusterSearchConnectionRequest) {
    /**
     * @internal
     */
    DeleteInboundCrossClusterSearchConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInboundCrossClusterSearchConnectionRequest = exports.DeleteInboundCrossClusterSearchConnectionRequest || (exports.DeleteInboundCrossClusterSearchConnectionRequest = {}));
var DeleteInboundCrossClusterSearchConnectionResponse;
(function (DeleteInboundCrossClusterSearchConnectionResponse) {
    /**
     * @internal
     */
    DeleteInboundCrossClusterSearchConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInboundCrossClusterSearchConnectionResponse = exports.DeleteInboundCrossClusterSearchConnectionResponse || (exports.DeleteInboundCrossClusterSearchConnectionResponse = {}));
var DeleteOutboundCrossClusterSearchConnectionRequest;
(function (DeleteOutboundCrossClusterSearchConnectionRequest) {
    /**
     * @internal
     */
    DeleteOutboundCrossClusterSearchConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOutboundCrossClusterSearchConnectionRequest = exports.DeleteOutboundCrossClusterSearchConnectionRequest || (exports.DeleteOutboundCrossClusterSearchConnectionRequest = {}));
var OutboundCrossClusterSearchConnection;
(function (OutboundCrossClusterSearchConnection) {
    /**
     * @internal
     */
    OutboundCrossClusterSearchConnection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutboundCrossClusterSearchConnection = exports.OutboundCrossClusterSearchConnection || (exports.OutboundCrossClusterSearchConnection = {}));
var DeleteOutboundCrossClusterSearchConnectionResponse;
(function (DeleteOutboundCrossClusterSearchConnectionResponse) {
    /**
     * @internal
     */
    DeleteOutboundCrossClusterSearchConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteOutboundCrossClusterSearchConnectionResponse = exports.DeleteOutboundCrossClusterSearchConnectionResponse || (exports.DeleteOutboundCrossClusterSearchConnectionResponse = {}));
var DeletePackageRequest;
(function (DeletePackageRequest) {
    /**
     * @internal
     */
    DeletePackageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePackageRequest = exports.DeletePackageRequest || (exports.DeletePackageRequest = {}));
var DeletePackageResponse;
(function (DeletePackageResponse) {
    /**
     * @internal
     */
    DeletePackageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePackageResponse = exports.DeletePackageResponse || (exports.DeletePackageResponse = {}));
var DescribeDomainAutoTunesRequest;
(function (DescribeDomainAutoTunesRequest) {
    /**
     * @internal
     */
    DescribeDomainAutoTunesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainAutoTunesRequest = exports.DescribeDomainAutoTunesRequest || (exports.DescribeDomainAutoTunesRequest = {}));
var ScheduledAutoTuneActionType;
(function (ScheduledAutoTuneActionType) {
    ScheduledAutoTuneActionType["JVM_HEAP_SIZE_TUNING"] = "JVM_HEAP_SIZE_TUNING";
    ScheduledAutoTuneActionType["JVM_YOUNG_GEN_TUNING"] = "JVM_YOUNG_GEN_TUNING";
})(ScheduledAutoTuneActionType = exports.ScheduledAutoTuneActionType || (exports.ScheduledAutoTuneActionType = {}));
var ScheduledAutoTuneSeverityType;
(function (ScheduledAutoTuneSeverityType) {
    ScheduledAutoTuneSeverityType["HIGH"] = "HIGH";
    ScheduledAutoTuneSeverityType["LOW"] = "LOW";
    ScheduledAutoTuneSeverityType["MEDIUM"] = "MEDIUM";
})(ScheduledAutoTuneSeverityType = exports.ScheduledAutoTuneSeverityType || (exports.ScheduledAutoTuneSeverityType = {}));
var ScheduledAutoTuneDetails;
(function (ScheduledAutoTuneDetails) {
    /**
     * @internal
     */
    ScheduledAutoTuneDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScheduledAutoTuneDetails = exports.ScheduledAutoTuneDetails || (exports.ScheduledAutoTuneDetails = {}));
var AutoTuneDetails;
(function (AutoTuneDetails) {
    /**
     * @internal
     */
    AutoTuneDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoTuneDetails = exports.AutoTuneDetails || (exports.AutoTuneDetails = {}));
var AutoTuneType;
(function (AutoTuneType) {
    AutoTuneType["SCHEDULED_ACTION"] = "SCHEDULED_ACTION";
})(AutoTuneType = exports.AutoTuneType || (exports.AutoTuneType = {}));
var AutoTune;
(function (AutoTune) {
    /**
     * @internal
     */
    AutoTune.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoTune = exports.AutoTune || (exports.AutoTune = {}));
var DescribeDomainAutoTunesResponse;
(function (DescribeDomainAutoTunesResponse) {
    /**
     * @internal
     */
    DescribeDomainAutoTunesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainAutoTunesResponse = exports.DescribeDomainAutoTunesResponse || (exports.DescribeDomainAutoTunesResponse = {}));
var DescribeElasticsearchDomainRequest;
(function (DescribeElasticsearchDomainRequest) {
    /**
     * @internal
     */
    DescribeElasticsearchDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeElasticsearchDomainRequest = exports.DescribeElasticsearchDomainRequest || (exports.DescribeElasticsearchDomainRequest = {}));
var DescribeElasticsearchDomainResponse;
(function (DescribeElasticsearchDomainResponse) {
    /**
     * @internal
     */
    DescribeElasticsearchDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeElasticsearchDomainResponse = exports.DescribeElasticsearchDomainResponse || (exports.DescribeElasticsearchDomainResponse = {}));
var DescribeElasticsearchDomainConfigRequest;
(function (DescribeElasticsearchDomainConfigRequest) {
    /**
     * @internal
     */
    DescribeElasticsearchDomainConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeElasticsearchDomainConfigRequest = exports.DescribeElasticsearchDomainConfigRequest || (exports.DescribeElasticsearchDomainConfigRequest = {}));
var RollbackOnDisable;
(function (RollbackOnDisable) {
    RollbackOnDisable["DEFAULT_ROLLBACK"] = "DEFAULT_ROLLBACK";
    RollbackOnDisable["NO_ROLLBACK"] = "NO_ROLLBACK";
})(RollbackOnDisable = exports.RollbackOnDisable || (exports.RollbackOnDisable = {}));
var AutoTuneOptions;
(function (AutoTuneOptions) {
    /**
     * @internal
     */
    AutoTuneOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoTuneOptions = exports.AutoTuneOptions || (exports.AutoTuneOptions = {}));
var AutoTuneStatus;
(function (AutoTuneStatus) {
    /**
     * @internal
     */
    AutoTuneStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoTuneStatus = exports.AutoTuneStatus || (exports.AutoTuneStatus = {}));
var AutoTuneOptionsStatus;
(function (AutoTuneOptionsStatus) {
    /**
     * @internal
     */
    AutoTuneOptionsStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoTuneOptionsStatus = exports.AutoTuneOptionsStatus || (exports.AutoTuneOptionsStatus = {}));
var CognitoOptionsStatus;
(function (CognitoOptionsStatus) {
    /**
     * @internal
     */
    CognitoOptionsStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CognitoOptionsStatus = exports.CognitoOptionsStatus || (exports.CognitoOptionsStatus = {}));
var DomainEndpointOptionsStatus;
(function (DomainEndpointOptionsStatus) {
    /**
     * @internal
     */
    DomainEndpointOptionsStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainEndpointOptionsStatus = exports.DomainEndpointOptionsStatus || (exports.DomainEndpointOptionsStatus = {}));
var EBSOptionsStatus;
(function (EBSOptionsStatus) {
    /**
     * @internal
     */
    EBSOptionsStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EBSOptionsStatus = exports.EBSOptionsStatus || (exports.EBSOptionsStatus = {}));
var ElasticsearchClusterConfigStatus;
(function (ElasticsearchClusterConfigStatus) {
    /**
     * @internal
     */
    ElasticsearchClusterConfigStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticsearchClusterConfigStatus = exports.ElasticsearchClusterConfigStatus || (exports.ElasticsearchClusterConfigStatus = {}));
var ElasticsearchVersionStatus;
(function (ElasticsearchVersionStatus) {
    /**
     * @internal
     */
    ElasticsearchVersionStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticsearchVersionStatus = exports.ElasticsearchVersionStatus || (exports.ElasticsearchVersionStatus = {}));
var EncryptionAtRestOptionsStatus;
(function (EncryptionAtRestOptionsStatus) {
    /**
     * @internal
     */
    EncryptionAtRestOptionsStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionAtRestOptionsStatus = exports.EncryptionAtRestOptionsStatus || (exports.EncryptionAtRestOptionsStatus = {}));
var LogPublishingOptionsStatus;
(function (LogPublishingOptionsStatus) {
    /**
     * @internal
     */
    LogPublishingOptionsStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogPublishingOptionsStatus = exports.LogPublishingOptionsStatus || (exports.LogPublishingOptionsStatus = {}));
var NodeToNodeEncryptionOptionsStatus;
(function (NodeToNodeEncryptionOptionsStatus) {
    /**
     * @internal
     */
    NodeToNodeEncryptionOptionsStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NodeToNodeEncryptionOptionsStatus = exports.NodeToNodeEncryptionOptionsStatus || (exports.NodeToNodeEncryptionOptionsStatus = {}));
var SnapshotOptionsStatus;
(function (SnapshotOptionsStatus) {
    /**
     * @internal
     */
    SnapshotOptionsStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnapshotOptionsStatus = exports.SnapshotOptionsStatus || (exports.SnapshotOptionsStatus = {}));
var VPCDerivedInfoStatus;
(function (VPCDerivedInfoStatus) {
    /**
     * @internal
     */
    VPCDerivedInfoStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VPCDerivedInfoStatus = exports.VPCDerivedInfoStatus || (exports.VPCDerivedInfoStatus = {}));
var ElasticsearchDomainConfig;
(function (ElasticsearchDomainConfig) {
    /**
     * @internal
     */
    ElasticsearchDomainConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticsearchDomainConfig = exports.ElasticsearchDomainConfig || (exports.ElasticsearchDomainConfig = {}));
var DescribeElasticsearchDomainConfigResponse;
(function (DescribeElasticsearchDomainConfigResponse) {
    /**
     * @internal
     */
    DescribeElasticsearchDomainConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeElasticsearchDomainConfigResponse = exports.DescribeElasticsearchDomainConfigResponse || (exports.DescribeElasticsearchDomainConfigResponse = {}));
var DescribeElasticsearchDomainsRequest;
(function (DescribeElasticsearchDomainsRequest) {
    /**
     * @internal
     */
    DescribeElasticsearchDomainsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeElasticsearchDomainsRequest = exports.DescribeElasticsearchDomainsRequest || (exports.DescribeElasticsearchDomainsRequest = {}));
var DescribeElasticsearchDomainsResponse;
(function (DescribeElasticsearchDomainsResponse) {
    /**
     * @internal
     */
    DescribeElasticsearchDomainsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeElasticsearchDomainsResponse = exports.DescribeElasticsearchDomainsResponse || (exports.DescribeElasticsearchDomainsResponse = {}));
var DescribeElasticsearchInstanceTypeLimitsRequest;
(function (DescribeElasticsearchInstanceTypeLimitsRequest) {
    /**
     * @internal
     */
    DescribeElasticsearchInstanceTypeLimitsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeElasticsearchInstanceTypeLimitsRequest = exports.DescribeElasticsearchInstanceTypeLimitsRequest || (exports.DescribeElasticsearchInstanceTypeLimitsRequest = {}));
var InstanceCountLimits;
(function (InstanceCountLimits) {
    /**
     * @internal
     */
    InstanceCountLimits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceCountLimits = exports.InstanceCountLimits || (exports.InstanceCountLimits = {}));
var InstanceLimits;
(function (InstanceLimits) {
    /**
     * @internal
     */
    InstanceLimits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceLimits = exports.InstanceLimits || (exports.InstanceLimits = {}));
var StorageTypeLimit;
(function (StorageTypeLimit) {
    /**
     * @internal
     */
    StorageTypeLimit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageTypeLimit = exports.StorageTypeLimit || (exports.StorageTypeLimit = {}));
var StorageType;
(function (StorageType) {
    /**
     * @internal
     */
    StorageType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageType = exports.StorageType || (exports.StorageType = {}));
var Limits;
(function (Limits) {
    /**
     * @internal
     */
    Limits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Limits = exports.Limits || (exports.Limits = {}));
var DescribeElasticsearchInstanceTypeLimitsResponse;
(function (DescribeElasticsearchInstanceTypeLimitsResponse) {
    /**
     * @internal
     */
    DescribeElasticsearchInstanceTypeLimitsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeElasticsearchInstanceTypeLimitsResponse = exports.DescribeElasticsearchInstanceTypeLimitsResponse || (exports.DescribeElasticsearchInstanceTypeLimitsResponse = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var DescribeInboundCrossClusterSearchConnectionsRequest;
(function (DescribeInboundCrossClusterSearchConnectionsRequest) {
    /**
     * @internal
     */
    DescribeInboundCrossClusterSearchConnectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInboundCrossClusterSearchConnectionsRequest = exports.DescribeInboundCrossClusterSearchConnectionsRequest || (exports.DescribeInboundCrossClusterSearchConnectionsRequest = {}));
var DescribeInboundCrossClusterSearchConnectionsResponse;
(function (DescribeInboundCrossClusterSearchConnectionsResponse) {
    /**
     * @internal
     */
    DescribeInboundCrossClusterSearchConnectionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInboundCrossClusterSearchConnectionsResponse = exports.DescribeInboundCrossClusterSearchConnectionsResponse || (exports.DescribeInboundCrossClusterSearchConnectionsResponse = {}));
var InvalidPaginationTokenException;
(function (InvalidPaginationTokenException) {
    /**
     * @internal
     */
    InvalidPaginationTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPaginationTokenException = exports.InvalidPaginationTokenException || (exports.InvalidPaginationTokenException = {}));
var DescribeOutboundCrossClusterSearchConnectionsRequest;
(function (DescribeOutboundCrossClusterSearchConnectionsRequest) {
    /**
     * @internal
     */
    DescribeOutboundCrossClusterSearchConnectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOutboundCrossClusterSearchConnectionsRequest = exports.DescribeOutboundCrossClusterSearchConnectionsRequest || (exports.DescribeOutboundCrossClusterSearchConnectionsRequest = {}));
var DescribeOutboundCrossClusterSearchConnectionsResponse;
(function (DescribeOutboundCrossClusterSearchConnectionsResponse) {
    /**
     * @internal
     */
    DescribeOutboundCrossClusterSearchConnectionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOutboundCrossClusterSearchConnectionsResponse = exports.DescribeOutboundCrossClusterSearchConnectionsResponse || (exports.DescribeOutboundCrossClusterSearchConnectionsResponse = {}));
var DescribePackagesFilterName;
(function (DescribePackagesFilterName) {
    DescribePackagesFilterName["PackageID"] = "PackageID";
    DescribePackagesFilterName["PackageName"] = "PackageName";
    DescribePackagesFilterName["PackageStatus"] = "PackageStatus";
})(DescribePackagesFilterName = exports.DescribePackagesFilterName || (exports.DescribePackagesFilterName = {}));
var DescribePackagesFilter;
(function (DescribePackagesFilter) {
    /**
     * @internal
     */
    DescribePackagesFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePackagesFilter = exports.DescribePackagesFilter || (exports.DescribePackagesFilter = {}));
var DescribePackagesRequest;
(function (DescribePackagesRequest) {
    /**
     * @internal
     */
    DescribePackagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePackagesRequest = exports.DescribePackagesRequest || (exports.DescribePackagesRequest = {}));
var DescribePackagesResponse;
(function (DescribePackagesResponse) {
    /**
     * @internal
     */
    DescribePackagesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePackagesResponse = exports.DescribePackagesResponse || (exports.DescribePackagesResponse = {}));
var DescribeReservedElasticsearchInstanceOfferingsRequest;
(function (DescribeReservedElasticsearchInstanceOfferingsRequest) {
    /**
     * @internal
     */
    DescribeReservedElasticsearchInstanceOfferingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedElasticsearchInstanceOfferingsRequest = exports.DescribeReservedElasticsearchInstanceOfferingsRequest || (exports.DescribeReservedElasticsearchInstanceOfferingsRequest = {}));
var RecurringCharge;
(function (RecurringCharge) {
    /**
     * @internal
     */
    RecurringCharge.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecurringCharge = exports.RecurringCharge || (exports.RecurringCharge = {}));
var ReservedElasticsearchInstanceOffering;
(function (ReservedElasticsearchInstanceOffering) {
    /**
     * @internal
     */
    ReservedElasticsearchInstanceOffering.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedElasticsearchInstanceOffering = exports.ReservedElasticsearchInstanceOffering || (exports.ReservedElasticsearchInstanceOffering = {}));
var DescribeReservedElasticsearchInstanceOfferingsResponse;
(function (DescribeReservedElasticsearchInstanceOfferingsResponse) {
    /**
     * @internal
     */
    DescribeReservedElasticsearchInstanceOfferingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedElasticsearchInstanceOfferingsResponse = exports.DescribeReservedElasticsearchInstanceOfferingsResponse || (exports.DescribeReservedElasticsearchInstanceOfferingsResponse = {}));
var DescribeReservedElasticsearchInstancesRequest;
(function (DescribeReservedElasticsearchInstancesRequest) {
    /**
     * @internal
     */
    DescribeReservedElasticsearchInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedElasticsearchInstancesRequest = exports.DescribeReservedElasticsearchInstancesRequest || (exports.DescribeReservedElasticsearchInstancesRequest = {}));
var ReservedElasticsearchInstance;
(function (ReservedElasticsearchInstance) {
    /**
     * @internal
     */
    ReservedElasticsearchInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservedElasticsearchInstance = exports.ReservedElasticsearchInstance || (exports.ReservedElasticsearchInstance = {}));
var DescribeReservedElasticsearchInstancesResponse;
(function (DescribeReservedElasticsearchInstancesResponse) {
    /**
     * @internal
     */
    DescribeReservedElasticsearchInstancesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReservedElasticsearchInstancesResponse = exports.DescribeReservedElasticsearchInstancesResponse || (exports.DescribeReservedElasticsearchInstancesResponse = {}));
var DissociatePackageRequest;
(function (DissociatePackageRequest) {
    /**
     * @internal
     */
    DissociatePackageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DissociatePackageRequest = exports.DissociatePackageRequest || (exports.DissociatePackageRequest = {}));
var DissociatePackageResponse;
(function (DissociatePackageResponse) {
    /**
     * @internal
     */
    DissociatePackageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DissociatePackageResponse = exports.DissociatePackageResponse || (exports.DissociatePackageResponse = {}));
var GetCompatibleElasticsearchVersionsRequest;
(function (GetCompatibleElasticsearchVersionsRequest) {
    /**
     * @internal
     */
    GetCompatibleElasticsearchVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCompatibleElasticsearchVersionsRequest = exports.GetCompatibleElasticsearchVersionsRequest || (exports.GetCompatibleElasticsearchVersionsRequest = {}));
var CompatibleVersionsMap;
(function (CompatibleVersionsMap) {
    /**
     * @internal
     */
    CompatibleVersionsMap.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompatibleVersionsMap = exports.CompatibleVersionsMap || (exports.CompatibleVersionsMap = {}));
var GetCompatibleElasticsearchVersionsResponse;
(function (GetCompatibleElasticsearchVersionsResponse) {
    /**
     * @internal
     */
    GetCompatibleElasticsearchVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCompatibleElasticsearchVersionsResponse = exports.GetCompatibleElasticsearchVersionsResponse || (exports.GetCompatibleElasticsearchVersionsResponse = {}));
var GetPackageVersionHistoryRequest;
(function (GetPackageVersionHistoryRequest) {
    /**
     * @internal
     */
    GetPackageVersionHistoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPackageVersionHistoryRequest = exports.GetPackageVersionHistoryRequest || (exports.GetPackageVersionHistoryRequest = {}));
var PackageVersionHistory;
(function (PackageVersionHistory) {
    /**
     * @internal
     */
    PackageVersionHistory.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageVersionHistory = exports.PackageVersionHistory || (exports.PackageVersionHistory = {}));
var GetPackageVersionHistoryResponse;
(function (GetPackageVersionHistoryResponse) {
    /**
     * @internal
     */
    GetPackageVersionHistoryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPackageVersionHistoryResponse = exports.GetPackageVersionHistoryResponse || (exports.GetPackageVersionHistoryResponse = {}));
var GetUpgradeHistoryRequest;
(function (GetUpgradeHistoryRequest) {
    /**
     * @internal
     */
    GetUpgradeHistoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUpgradeHistoryRequest = exports.GetUpgradeHistoryRequest || (exports.GetUpgradeHistoryRequest = {}));
var UpgradeStepItem;
(function (UpgradeStepItem) {
    /**
     * @internal
     */
    UpgradeStepItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpgradeStepItem = exports.UpgradeStepItem || (exports.UpgradeStepItem = {}));
var UpgradeHistory;
(function (UpgradeHistory) {
    /**
     * @internal
     */
    UpgradeHistory.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpgradeHistory = exports.UpgradeHistory || (exports.UpgradeHistory = {}));
var GetUpgradeHistoryResponse;
(function (GetUpgradeHistoryResponse) {
    /**
     * @internal
     */
    GetUpgradeHistoryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUpgradeHistoryResponse = exports.GetUpgradeHistoryResponse || (exports.GetUpgradeHistoryResponse = {}));
var GetUpgradeStatusRequest;
(function (GetUpgradeStatusRequest) {
    /**
     * @internal
     */
    GetUpgradeStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUpgradeStatusRequest = exports.GetUpgradeStatusRequest || (exports.GetUpgradeStatusRequest = {}));
var GetUpgradeStatusResponse;
(function (GetUpgradeStatusResponse) {
    /**
     * @internal
     */
    GetUpgradeStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUpgradeStatusResponse = exports.GetUpgradeStatusResponse || (exports.GetUpgradeStatusResponse = {}));
var DomainInfo;
(function (DomainInfo) {
    /**
     * @internal
     */
    DomainInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainInfo = exports.DomainInfo || (exports.DomainInfo = {}));
var ListDomainNamesResponse;
(function (ListDomainNamesResponse) {
    /**
     * @internal
     */
    ListDomainNamesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainNamesResponse = exports.ListDomainNamesResponse || (exports.ListDomainNamesResponse = {}));
var ListDomainsForPackageRequest;
(function (ListDomainsForPackageRequest) {
    /**
     * @internal
     */
    ListDomainsForPackageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainsForPackageRequest = exports.ListDomainsForPackageRequest || (exports.ListDomainsForPackageRequest = {}));
var ListDomainsForPackageResponse;
(function (ListDomainsForPackageResponse) {
    /**
     * @internal
     */
    ListDomainsForPackageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainsForPackageResponse = exports.ListDomainsForPackageResponse || (exports.ListDomainsForPackageResponse = {}));
var ListElasticsearchInstanceTypesRequest;
(function (ListElasticsearchInstanceTypesRequest) {
    /**
     * @internal
     */
    ListElasticsearchInstanceTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListElasticsearchInstanceTypesRequest = exports.ListElasticsearchInstanceTypesRequest || (exports.ListElasticsearchInstanceTypesRequest = {}));
var ListElasticsearchInstanceTypesResponse;
(function (ListElasticsearchInstanceTypesResponse) {
    /**
     * @internal
     */
    ListElasticsearchInstanceTypesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListElasticsearchInstanceTypesResponse = exports.ListElasticsearchInstanceTypesResponse || (exports.ListElasticsearchInstanceTypesResponse = {}));
var ListElasticsearchVersionsRequest;
(function (ListElasticsearchVersionsRequest) {
    /**
     * @internal
     */
    ListElasticsearchVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListElasticsearchVersionsRequest = exports.ListElasticsearchVersionsRequest || (exports.ListElasticsearchVersionsRequest = {}));
var ListElasticsearchVersionsResponse;
(function (ListElasticsearchVersionsResponse) {
    /**
     * @internal
     */
    ListElasticsearchVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListElasticsearchVersionsResponse = exports.ListElasticsearchVersionsResponse || (exports.ListElasticsearchVersionsResponse = {}));
var ListPackagesForDomainRequest;
(function (ListPackagesForDomainRequest) {
    /**
     * @internal
     */
    ListPackagesForDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackagesForDomainRequest = exports.ListPackagesForDomainRequest || (exports.ListPackagesForDomainRequest = {}));
var ListPackagesForDomainResponse;
(function (ListPackagesForDomainResponse) {
    /**
     * @internal
     */
    ListPackagesForDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackagesForDomainResponse = exports.ListPackagesForDomainResponse || (exports.ListPackagesForDomainResponse = {}));
var ListTagsRequest;
(function (ListTagsRequest) {
    /**
     * @internal
     */
    ListTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsRequest = exports.ListTagsRequest || (exports.ListTagsRequest = {}));
var ListTagsResponse;
(function (ListTagsResponse) {
    /**
     * @internal
     */
    ListTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsResponse = exports.ListTagsResponse || (exports.ListTagsResponse = {}));
var PurchaseReservedElasticsearchInstanceOfferingRequest;
(function (PurchaseReservedElasticsearchInstanceOfferingRequest) {
    /**
     * @internal
     */
    PurchaseReservedElasticsearchInstanceOfferingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseReservedElasticsearchInstanceOfferingRequest = exports.PurchaseReservedElasticsearchInstanceOfferingRequest || (exports.PurchaseReservedElasticsearchInstanceOfferingRequest = {}));
var PurchaseReservedElasticsearchInstanceOfferingResponse;
(function (PurchaseReservedElasticsearchInstanceOfferingResponse) {
    /**
     * @internal
     */
    PurchaseReservedElasticsearchInstanceOfferingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurchaseReservedElasticsearchInstanceOfferingResponse = exports.PurchaseReservedElasticsearchInstanceOfferingResponse || (exports.PurchaseReservedElasticsearchInstanceOfferingResponse = {}));
var RejectInboundCrossClusterSearchConnectionRequest;
(function (RejectInboundCrossClusterSearchConnectionRequest) {
    /**
     * @internal
     */
    RejectInboundCrossClusterSearchConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectInboundCrossClusterSearchConnectionRequest = exports.RejectInboundCrossClusterSearchConnectionRequest || (exports.RejectInboundCrossClusterSearchConnectionRequest = {}));
var RejectInboundCrossClusterSearchConnectionResponse;
(function (RejectInboundCrossClusterSearchConnectionResponse) {
    /**
     * @internal
     */
    RejectInboundCrossClusterSearchConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RejectInboundCrossClusterSearchConnectionResponse = exports.RejectInboundCrossClusterSearchConnectionResponse || (exports.RejectInboundCrossClusterSearchConnectionResponse = {}));
var RemoveTagsRequest;
(function (RemoveTagsRequest) {
    /**
     * @internal
     */
    RemoveTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsRequest = exports.RemoveTagsRequest || (exports.RemoveTagsRequest = {}));
var StartElasticsearchServiceSoftwareUpdateRequest;
(function (StartElasticsearchServiceSoftwareUpdateRequest) {
    /**
     * @internal
     */
    StartElasticsearchServiceSoftwareUpdateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartElasticsearchServiceSoftwareUpdateRequest = exports.StartElasticsearchServiceSoftwareUpdateRequest || (exports.StartElasticsearchServiceSoftwareUpdateRequest = {}));
var StartElasticsearchServiceSoftwareUpdateResponse;
(function (StartElasticsearchServiceSoftwareUpdateResponse) {
    /**
     * @internal
     */
    StartElasticsearchServiceSoftwareUpdateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartElasticsearchServiceSoftwareUpdateResponse = exports.StartElasticsearchServiceSoftwareUpdateResponse || (exports.StartElasticsearchServiceSoftwareUpdateResponse = {}));
var UpdateElasticsearchDomainConfigRequest;
(function (UpdateElasticsearchDomainConfigRequest) {
    /**
     * @internal
     */
    UpdateElasticsearchDomainConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AdvancedSecurityOptions && {
            AdvancedSecurityOptions: AdvancedSecurityOptionsInput.filterSensitiveLog(obj.AdvancedSecurityOptions),
        }),
    });
})(UpdateElasticsearchDomainConfigRequest = exports.UpdateElasticsearchDomainConfigRequest || (exports.UpdateElasticsearchDomainConfigRequest = {}));
var UpdateElasticsearchDomainConfigResponse;
(function (UpdateElasticsearchDomainConfigResponse) {
    /**
     * @internal
     */
    UpdateElasticsearchDomainConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateElasticsearchDomainConfigResponse = exports.UpdateElasticsearchDomainConfigResponse || (exports.UpdateElasticsearchDomainConfigResponse = {}));
var UpdatePackageRequest;
(function (UpdatePackageRequest) {
    /**
     * @internal
     */
    UpdatePackageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePackageRequest = exports.UpdatePackageRequest || (exports.UpdatePackageRequest = {}));
var UpdatePackageResponse;
(function (UpdatePackageResponse) {
    /**
     * @internal
     */
    UpdatePackageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePackageResponse = exports.UpdatePackageResponse || (exports.UpdatePackageResponse = {}));
var UpgradeElasticsearchDomainRequest;
(function (UpgradeElasticsearchDomainRequest) {
    /**
     * @internal
     */
    UpgradeElasticsearchDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpgradeElasticsearchDomainRequest = exports.UpgradeElasticsearchDomainRequest || (exports.UpgradeElasticsearchDomainRequest = {}));
var UpgradeElasticsearchDomainResponse;
(function (UpgradeElasticsearchDomainResponse) {
    /**
     * @internal
     */
    UpgradeElasticsearchDomainResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpgradeElasticsearchDomainResponse = exports.UpgradeElasticsearchDomainResponse || (exports.UpgradeElasticsearchDomainResponse = {}));
//# sourceMappingURL=models_0.js.map