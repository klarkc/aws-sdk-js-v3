"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHostedZoneResponse = exports.HostedZone = exports.DelegationSet = exports.CreateHostedZoneRequest = exports.HostedZoneConfig = exports.TooManyHealthChecks = exports.HealthCheckAlreadyExists = exports.CreateHealthCheckResponse = exports.HealthCheck = exports.LinkedService = exports.CloudWatchAlarmConfiguration = exports.Dimension = exports.CreateHealthCheckRequest = exports.HealthCheckConfig = exports.HealthCheckType = exports.ThrottlingException = exports.ChangeTagsForResourceResponse = exports.ChangeTagsForResourceRequest = exports.Tag = exports.NoSuchHealthCheck = exports.InvalidChangeBatch = exports.ChangeResourceRecordSetsResponse = exports.ChangeResourceRecordSetsRequest = exports.ChangeBatch = exports.Change = exports.ResourceRecordSet = exports.ResourceRecord = exports.GeoLocation = exports.PublicZoneVPCAssociation = exports.PriorRequestNotComplete = exports.NotAuthorizedException = exports.NoSuchHostedZone = exports.LimitsExceeded = exports.InvalidVPCId = exports.InvalidInput = exports.ConflictingDomainExists = exports.AssociateVPCWithHostedZoneResponse = exports.AssociateVPCWithHostedZoneRequest = exports.VPC = exports.AliasTarget = exports.AlarmIdentifier = exports.NoSuchKeySigningKey = exports.InvalidSigningStatus = exports.InvalidKMSArn = exports.InvalidKeySigningKeyStatus = exports.ConcurrentModification = exports.ActivateKeySigningKeyResponse = exports.ChangeInfo = exports.ActivateKeySigningKeyRequest = exports.AccountLimit = void 0;
exports.DeleteHostedZoneRequest = exports.HealthCheckInUse = exports.DeleteHealthCheckResponse = exports.DeleteHealthCheckRequest = exports.KeySigningKeyInUse = exports.KeySigningKeyInParentDSRecord = exports.DeactivateKeySigningKeyResponse = exports.DeactivateKeySigningKeyRequest = exports.TooManyVPCAssociationAuthorizations = exports.CreateVPCAssociationAuthorizationResponse = exports.CreateVPCAssociationAuthorizationRequest = exports.TooManyTrafficPolicyVersionsForCurrentPolicy = exports.CreateTrafficPolicyVersionResponse = exports.CreateTrafficPolicyVersionRequest = exports.TrafficPolicyInstanceAlreadyExists = exports.TooManyTrafficPolicyInstances = exports.NoSuchTrafficPolicy = exports.CreateTrafficPolicyInstanceResponse = exports.TrafficPolicyInstance = exports.CreateTrafficPolicyInstanceRequest = exports.TrafficPolicyAlreadyExists = exports.TooManyTrafficPolicies = exports.InvalidTrafficPolicyDocument = exports.CreateTrafficPolicyResponse = exports.TrafficPolicy = exports.CreateTrafficPolicyRequest = exports.HostedZoneNotFound = exports.DelegationSetAlreadyReusable = exports.DelegationSetAlreadyCreated = exports.CreateReusableDelegationSetResponse = exports.CreateReusableDelegationSetRequest = exports.QueryLoggingConfigAlreadyExists = exports.NoSuchCloudWatchLogsLogGroup = exports.InsufficientCloudWatchLogsResourcePolicy = exports.CreateQueryLoggingConfigResponse = exports.QueryLoggingConfig = exports.CreateQueryLoggingConfigRequest = exports.TooManyKeySigningKeys = exports.KeySigningKeyAlreadyExists = exports.InvalidKeySigningKeyName = exports.InvalidArgument = exports.CreateKeySigningKeyResponse = exports.KeySigningKey = exports.CreateKeySigningKeyRequest = exports.TooManyHostedZones = exports.NoSuchDelegationSet = exports.InvalidDomainName = exports.HostedZoneAlreadyExists = exports.DelegationSetNotReusable = exports.DelegationSetNotAvailable = void 0;
exports.GetHealthCheckLastFailureReasonRequest = exports.GetHealthCheckCountResponse = exports.GetHealthCheckCountRequest = exports.IncompatibleVersion = exports.GetHealthCheckResponse = exports.GetHealthCheckRequest = exports.NoSuchGeoLocation = exports.GetGeoLocationResponse = exports.GeoLocationDetails = exports.GetGeoLocationRequest = exports.GetDNSSECResponse = exports.DNSSECStatus = exports.GetDNSSECRequest = exports.GetCheckerIpRangesResponse = exports.GetCheckerIpRangesRequest = exports.NoSuchChange = exports.GetChangeResponse = exports.GetChangeRequest = exports.GetAccountLimitResponse = exports.GetAccountLimitRequest = exports.KeySigningKeyWithActiveStatusNotFound = exports.HostedZonePartiallyDelegated = exports.EnableHostedZoneDNSSECResponse = exports.EnableHostedZoneDNSSECRequest = exports.VPCAssociationNotFound = exports.LastVPCAssociation = exports.DisassociateVPCFromHostedZoneResponse = exports.DisassociateVPCFromHostedZoneRequest = exports.DNSSECNotFound = exports.DisableHostedZoneDNSSECResponse = exports.DisableHostedZoneDNSSECRequest = exports.VPCAssociationAuthorizationNotFound = exports.DeleteVPCAssociationAuthorizationResponse = exports.DeleteVPCAssociationAuthorizationRequest = exports.NoSuchTrafficPolicyInstance = exports.DeleteTrafficPolicyInstanceResponse = exports.DeleteTrafficPolicyInstanceRequest = exports.TrafficPolicyInUse = exports.DeleteTrafficPolicyResponse = exports.DeleteTrafficPolicyRequest = exports.DeleteReusableDelegationSetResponse = exports.DeleteReusableDelegationSetRequest = exports.DelegationSetInUse = exports.NoSuchQueryLoggingConfig = exports.DeleteQueryLoggingConfigResponse = exports.DeleteQueryLoggingConfigRequest = exports.DeleteKeySigningKeyResponse = exports.DeleteKeySigningKeyRequest = exports.HostedZoneNotEmpty = exports.DeleteHostedZoneResponse = void 0;
exports.ListTagsForResourcesResponse = exports.ListTagsForResourcesRequest = exports.ListTagsForResourceResponse = exports.ResourceTagSet = exports.ListTagsForResourceRequest = exports.ListReusableDelegationSetsResponse = exports.ListReusableDelegationSetsRequest = exports.ListResourceRecordSetsResponse = exports.ListResourceRecordSetsRequest = exports.ListQueryLoggingConfigsResponse = exports.ListQueryLoggingConfigsRequest = exports.ListHostedZonesByVPCResponse = exports.HostedZoneSummary = exports.HostedZoneOwner = exports.ListHostedZonesByVPCRequest = exports.InvalidPaginationToken = exports.ListHostedZonesByNameResponse = exports.ListHostedZonesByNameRequest = exports.ListHostedZonesResponse = exports.ListHostedZonesRequest = exports.ListHealthChecksResponse = exports.ListHealthChecksRequest = exports.ListGeoLocationsResponse = exports.ListGeoLocationsRequest = exports.GetTrafficPolicyInstanceCountResponse = exports.GetTrafficPolicyInstanceCountRequest = exports.GetTrafficPolicyInstanceResponse = exports.GetTrafficPolicyInstanceRequest = exports.GetTrafficPolicyResponse = exports.GetTrafficPolicyRequest = exports.GetReusableDelegationSetLimitResponse = exports.ReusableDelegationSetLimit = exports.GetReusableDelegationSetLimitRequest = exports.GetReusableDelegationSetResponse = exports.GetReusableDelegationSetRequest = exports.GetQueryLoggingConfigResponse = exports.GetQueryLoggingConfigRequest = exports.HostedZoneNotPrivate = exports.GetHostedZoneLimitResponse = exports.HostedZoneLimit = exports.GetHostedZoneLimitRequest = exports.GetHostedZoneCountResponse = exports.GetHostedZoneCountRequest = exports.GetHostedZoneResponse = exports.GetHostedZoneRequest = exports.GetHealthCheckStatusResponse = exports.GetHealthCheckStatusRequest = exports.GetHealthCheckLastFailureReasonResponse = exports.HealthCheckObservation = exports.StatusReport = void 0;
exports.UpdateTrafficPolicyInstanceResponse = exports.UpdateTrafficPolicyInstanceRequest = exports.ConflictingTypes = exports.UpdateTrafficPolicyCommentResponse = exports.UpdateTrafficPolicyCommentRequest = exports.UpdateHostedZoneCommentResponse = exports.UpdateHostedZoneCommentRequest = exports.UpdateHealthCheckResponse = exports.UpdateHealthCheckRequest = exports.HealthCheckVersionMismatch = exports.TestDNSAnswerResponse = exports.TestDNSAnswerRequest = exports.ListVPCAssociationAuthorizationsResponse = exports.ListVPCAssociationAuthorizationsRequest = exports.ListTrafficPolicyVersionsResponse = exports.ListTrafficPolicyVersionsRequest = exports.ListTrafficPolicyInstancesByPolicyResponse = exports.ListTrafficPolicyInstancesByPolicyRequest = exports.ListTrafficPolicyInstancesByHostedZoneResponse = exports.ListTrafficPolicyInstancesByHostedZoneRequest = exports.ListTrafficPolicyInstancesResponse = exports.ListTrafficPolicyInstancesRequest = exports.ListTrafficPoliciesResponse = exports.TrafficPolicySummary = exports.ListTrafficPoliciesRequest = void 0;
var AccountLimit;
(function (AccountLimit) {
    /**
     * @internal
     */
    AccountLimit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountLimit = exports.AccountLimit || (exports.AccountLimit = {}));
var ActivateKeySigningKeyRequest;
(function (ActivateKeySigningKeyRequest) {
    /**
     * @internal
     */
    ActivateKeySigningKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivateKeySigningKeyRequest = exports.ActivateKeySigningKeyRequest || (exports.ActivateKeySigningKeyRequest = {}));
var ChangeInfo;
(function (ChangeInfo) {
    /**
     * @internal
     */
    ChangeInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeInfo = exports.ChangeInfo || (exports.ChangeInfo = {}));
var ActivateKeySigningKeyResponse;
(function (ActivateKeySigningKeyResponse) {
    /**
     * @internal
     */
    ActivateKeySigningKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivateKeySigningKeyResponse = exports.ActivateKeySigningKeyResponse || (exports.ActivateKeySigningKeyResponse = {}));
var ConcurrentModification;
(function (ConcurrentModification) {
    /**
     * @internal
     */
    ConcurrentModification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModification = exports.ConcurrentModification || (exports.ConcurrentModification = {}));
var InvalidKeySigningKeyStatus;
(function (InvalidKeySigningKeyStatus) {
    /**
     * @internal
     */
    InvalidKeySigningKeyStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidKeySigningKeyStatus = exports.InvalidKeySigningKeyStatus || (exports.InvalidKeySigningKeyStatus = {}));
var InvalidKMSArn;
(function (InvalidKMSArn) {
    /**
     * @internal
     */
    InvalidKMSArn.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidKMSArn = exports.InvalidKMSArn || (exports.InvalidKMSArn = {}));
var InvalidSigningStatus;
(function (InvalidSigningStatus) {
    /**
     * @internal
     */
    InvalidSigningStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSigningStatus = exports.InvalidSigningStatus || (exports.InvalidSigningStatus = {}));
var NoSuchKeySigningKey;
(function (NoSuchKeySigningKey) {
    /**
     * @internal
     */
    NoSuchKeySigningKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchKeySigningKey = exports.NoSuchKeySigningKey || (exports.NoSuchKeySigningKey = {}));
var AlarmIdentifier;
(function (AlarmIdentifier) {
    /**
     * @internal
     */
    AlarmIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlarmIdentifier = exports.AlarmIdentifier || (exports.AlarmIdentifier = {}));
var AliasTarget;
(function (AliasTarget) {
    /**
     * @internal
     */
    AliasTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AliasTarget = exports.AliasTarget || (exports.AliasTarget = {}));
var VPC;
(function (VPC) {
    /**
     * @internal
     */
    VPC.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VPC = exports.VPC || (exports.VPC = {}));
var AssociateVPCWithHostedZoneRequest;
(function (AssociateVPCWithHostedZoneRequest) {
    /**
     * @internal
     */
    AssociateVPCWithHostedZoneRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateVPCWithHostedZoneRequest = exports.AssociateVPCWithHostedZoneRequest || (exports.AssociateVPCWithHostedZoneRequest = {}));
var AssociateVPCWithHostedZoneResponse;
(function (AssociateVPCWithHostedZoneResponse) {
    /**
     * @internal
     */
    AssociateVPCWithHostedZoneResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateVPCWithHostedZoneResponse = exports.AssociateVPCWithHostedZoneResponse || (exports.AssociateVPCWithHostedZoneResponse = {}));
var ConflictingDomainExists;
(function (ConflictingDomainExists) {
    /**
     * @internal
     */
    ConflictingDomainExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictingDomainExists = exports.ConflictingDomainExists || (exports.ConflictingDomainExists = {}));
var InvalidInput;
(function (InvalidInput) {
    /**
     * @internal
     */
    InvalidInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInput = exports.InvalidInput || (exports.InvalidInput = {}));
var InvalidVPCId;
(function (InvalidVPCId) {
    /**
     * @internal
     */
    InvalidVPCId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidVPCId = exports.InvalidVPCId || (exports.InvalidVPCId = {}));
var LimitsExceeded;
(function (LimitsExceeded) {
    /**
     * @internal
     */
    LimitsExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitsExceeded = exports.LimitsExceeded || (exports.LimitsExceeded = {}));
var NoSuchHostedZone;
(function (NoSuchHostedZone) {
    /**
     * @internal
     */
    NoSuchHostedZone.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchHostedZone = exports.NoSuchHostedZone || (exports.NoSuchHostedZone = {}));
var NotAuthorizedException;
(function (NotAuthorizedException) {
    /**
     * @internal
     */
    NotAuthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotAuthorizedException = exports.NotAuthorizedException || (exports.NotAuthorizedException = {}));
var PriorRequestNotComplete;
(function (PriorRequestNotComplete) {
    /**
     * @internal
     */
    PriorRequestNotComplete.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PriorRequestNotComplete = exports.PriorRequestNotComplete || (exports.PriorRequestNotComplete = {}));
var PublicZoneVPCAssociation;
(function (PublicZoneVPCAssociation) {
    /**
     * @internal
     */
    PublicZoneVPCAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublicZoneVPCAssociation = exports.PublicZoneVPCAssociation || (exports.PublicZoneVPCAssociation = {}));
var GeoLocation;
(function (GeoLocation) {
    /**
     * @internal
     */
    GeoLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GeoLocation = exports.GeoLocation || (exports.GeoLocation = {}));
var ResourceRecord;
(function (ResourceRecord) {
    /**
     * @internal
     */
    ResourceRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceRecord = exports.ResourceRecord || (exports.ResourceRecord = {}));
var ResourceRecordSet;
(function (ResourceRecordSet) {
    /**
     * @internal
     */
    ResourceRecordSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceRecordSet = exports.ResourceRecordSet || (exports.ResourceRecordSet = {}));
var Change;
(function (Change) {
    /**
     * @internal
     */
    Change.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Change = exports.Change || (exports.Change = {}));
var ChangeBatch;
(function (ChangeBatch) {
    /**
     * @internal
     */
    ChangeBatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeBatch = exports.ChangeBatch || (exports.ChangeBatch = {}));
var ChangeResourceRecordSetsRequest;
(function (ChangeResourceRecordSetsRequest) {
    /**
     * @internal
     */
    ChangeResourceRecordSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeResourceRecordSetsRequest = exports.ChangeResourceRecordSetsRequest || (exports.ChangeResourceRecordSetsRequest = {}));
var ChangeResourceRecordSetsResponse;
(function (ChangeResourceRecordSetsResponse) {
    /**
     * @internal
     */
    ChangeResourceRecordSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeResourceRecordSetsResponse = exports.ChangeResourceRecordSetsResponse || (exports.ChangeResourceRecordSetsResponse = {}));
var InvalidChangeBatch;
(function (InvalidChangeBatch) {
    /**
     * @internal
     */
    InvalidChangeBatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidChangeBatch = exports.InvalidChangeBatch || (exports.InvalidChangeBatch = {}));
var NoSuchHealthCheck;
(function (NoSuchHealthCheck) {
    /**
     * @internal
     */
    NoSuchHealthCheck.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchHealthCheck = exports.NoSuchHealthCheck || (exports.NoSuchHealthCheck = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var ChangeTagsForResourceRequest;
(function (ChangeTagsForResourceRequest) {
    /**
     * @internal
     */
    ChangeTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeTagsForResourceRequest = exports.ChangeTagsForResourceRequest || (exports.ChangeTagsForResourceRequest = {}));
var ChangeTagsForResourceResponse;
(function (ChangeTagsForResourceResponse) {
    /**
     * @internal
     */
    ChangeTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeTagsForResourceResponse = exports.ChangeTagsForResourceResponse || (exports.ChangeTagsForResourceResponse = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var HealthCheckType;
(function (HealthCheckType) {
    HealthCheckType["CALCULATED"] = "CALCULATED";
    HealthCheckType["CLOUDWATCH_METRIC"] = "CLOUDWATCH_METRIC";
    HealthCheckType["HTTP"] = "HTTP";
    HealthCheckType["HTTPS"] = "HTTPS";
    HealthCheckType["HTTPS_STR_MATCH"] = "HTTPS_STR_MATCH";
    HealthCheckType["HTTP_STR_MATCH"] = "HTTP_STR_MATCH";
    HealthCheckType["TCP"] = "TCP";
})(HealthCheckType = exports.HealthCheckType || (exports.HealthCheckType = {}));
var HealthCheckConfig;
(function (HealthCheckConfig) {
    /**
     * @internal
     */
    HealthCheckConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HealthCheckConfig = exports.HealthCheckConfig || (exports.HealthCheckConfig = {}));
var CreateHealthCheckRequest;
(function (CreateHealthCheckRequest) {
    /**
     * @internal
     */
    CreateHealthCheckRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHealthCheckRequest = exports.CreateHealthCheckRequest || (exports.CreateHealthCheckRequest = {}));
var Dimension;
(function (Dimension) {
    /**
     * @internal
     */
    Dimension.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Dimension = exports.Dimension || (exports.Dimension = {}));
var CloudWatchAlarmConfiguration;
(function (CloudWatchAlarmConfiguration) {
    /**
     * @internal
     */
    CloudWatchAlarmConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchAlarmConfiguration = exports.CloudWatchAlarmConfiguration || (exports.CloudWatchAlarmConfiguration = {}));
var LinkedService;
(function (LinkedService) {
    /**
     * @internal
     */
    LinkedService.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LinkedService = exports.LinkedService || (exports.LinkedService = {}));
var HealthCheck;
(function (HealthCheck) {
    /**
     * @internal
     */
    HealthCheck.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HealthCheck = exports.HealthCheck || (exports.HealthCheck = {}));
var CreateHealthCheckResponse;
(function (CreateHealthCheckResponse) {
    /**
     * @internal
     */
    CreateHealthCheckResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHealthCheckResponse = exports.CreateHealthCheckResponse || (exports.CreateHealthCheckResponse = {}));
var HealthCheckAlreadyExists;
(function (HealthCheckAlreadyExists) {
    /**
     * @internal
     */
    HealthCheckAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HealthCheckAlreadyExists = exports.HealthCheckAlreadyExists || (exports.HealthCheckAlreadyExists = {}));
var TooManyHealthChecks;
(function (TooManyHealthChecks) {
    /**
     * @internal
     */
    TooManyHealthChecks.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyHealthChecks = exports.TooManyHealthChecks || (exports.TooManyHealthChecks = {}));
var HostedZoneConfig;
(function (HostedZoneConfig) {
    /**
     * @internal
     */
    HostedZoneConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostedZoneConfig = exports.HostedZoneConfig || (exports.HostedZoneConfig = {}));
var CreateHostedZoneRequest;
(function (CreateHostedZoneRequest) {
    /**
     * @internal
     */
    CreateHostedZoneRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHostedZoneRequest = exports.CreateHostedZoneRequest || (exports.CreateHostedZoneRequest = {}));
var DelegationSet;
(function (DelegationSet) {
    /**
     * @internal
     */
    DelegationSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DelegationSet = exports.DelegationSet || (exports.DelegationSet = {}));
var HostedZone;
(function (HostedZone) {
    /**
     * @internal
     */
    HostedZone.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostedZone = exports.HostedZone || (exports.HostedZone = {}));
var CreateHostedZoneResponse;
(function (CreateHostedZoneResponse) {
    /**
     * @internal
     */
    CreateHostedZoneResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateHostedZoneResponse = exports.CreateHostedZoneResponse || (exports.CreateHostedZoneResponse = {}));
var DelegationSetNotAvailable;
(function (DelegationSetNotAvailable) {
    /**
     * @internal
     */
    DelegationSetNotAvailable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DelegationSetNotAvailable = exports.DelegationSetNotAvailable || (exports.DelegationSetNotAvailable = {}));
var DelegationSetNotReusable;
(function (DelegationSetNotReusable) {
    /**
     * @internal
     */
    DelegationSetNotReusable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DelegationSetNotReusable = exports.DelegationSetNotReusable || (exports.DelegationSetNotReusable = {}));
var HostedZoneAlreadyExists;
(function (HostedZoneAlreadyExists) {
    /**
     * @internal
     */
    HostedZoneAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostedZoneAlreadyExists = exports.HostedZoneAlreadyExists || (exports.HostedZoneAlreadyExists = {}));
var InvalidDomainName;
(function (InvalidDomainName) {
    /**
     * @internal
     */
    InvalidDomainName.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidDomainName = exports.InvalidDomainName || (exports.InvalidDomainName = {}));
var NoSuchDelegationSet;
(function (NoSuchDelegationSet) {
    /**
     * @internal
     */
    NoSuchDelegationSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchDelegationSet = exports.NoSuchDelegationSet || (exports.NoSuchDelegationSet = {}));
var TooManyHostedZones;
(function (TooManyHostedZones) {
    /**
     * @internal
     */
    TooManyHostedZones.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyHostedZones = exports.TooManyHostedZones || (exports.TooManyHostedZones = {}));
var CreateKeySigningKeyRequest;
(function (CreateKeySigningKeyRequest) {
    /**
     * @internal
     */
    CreateKeySigningKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateKeySigningKeyRequest = exports.CreateKeySigningKeyRequest || (exports.CreateKeySigningKeyRequest = {}));
var KeySigningKey;
(function (KeySigningKey) {
    /**
     * @internal
     */
    KeySigningKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeySigningKey = exports.KeySigningKey || (exports.KeySigningKey = {}));
var CreateKeySigningKeyResponse;
(function (CreateKeySigningKeyResponse) {
    /**
     * @internal
     */
    CreateKeySigningKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateKeySigningKeyResponse = exports.CreateKeySigningKeyResponse || (exports.CreateKeySigningKeyResponse = {}));
var InvalidArgument;
(function (InvalidArgument) {
    /**
     * @internal
     */
    InvalidArgument.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidArgument = exports.InvalidArgument || (exports.InvalidArgument = {}));
var InvalidKeySigningKeyName;
(function (InvalidKeySigningKeyName) {
    /**
     * @internal
     */
    InvalidKeySigningKeyName.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidKeySigningKeyName = exports.InvalidKeySigningKeyName || (exports.InvalidKeySigningKeyName = {}));
var KeySigningKeyAlreadyExists;
(function (KeySigningKeyAlreadyExists) {
    /**
     * @internal
     */
    KeySigningKeyAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeySigningKeyAlreadyExists = exports.KeySigningKeyAlreadyExists || (exports.KeySigningKeyAlreadyExists = {}));
var TooManyKeySigningKeys;
(function (TooManyKeySigningKeys) {
    /**
     * @internal
     */
    TooManyKeySigningKeys.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyKeySigningKeys = exports.TooManyKeySigningKeys || (exports.TooManyKeySigningKeys = {}));
var CreateQueryLoggingConfigRequest;
(function (CreateQueryLoggingConfigRequest) {
    /**
     * @internal
     */
    CreateQueryLoggingConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQueryLoggingConfigRequest = exports.CreateQueryLoggingConfigRequest || (exports.CreateQueryLoggingConfigRequest = {}));
var QueryLoggingConfig;
(function (QueryLoggingConfig) {
    /**
     * @internal
     */
    QueryLoggingConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueryLoggingConfig = exports.QueryLoggingConfig || (exports.QueryLoggingConfig = {}));
var CreateQueryLoggingConfigResponse;
(function (CreateQueryLoggingConfigResponse) {
    /**
     * @internal
     */
    CreateQueryLoggingConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQueryLoggingConfigResponse = exports.CreateQueryLoggingConfigResponse || (exports.CreateQueryLoggingConfigResponse = {}));
var InsufficientCloudWatchLogsResourcePolicy;
(function (InsufficientCloudWatchLogsResourcePolicy) {
    /**
     * @internal
     */
    InsufficientCloudWatchLogsResourcePolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientCloudWatchLogsResourcePolicy = exports.InsufficientCloudWatchLogsResourcePolicy || (exports.InsufficientCloudWatchLogsResourcePolicy = {}));
var NoSuchCloudWatchLogsLogGroup;
(function (NoSuchCloudWatchLogsLogGroup) {
    /**
     * @internal
     */
    NoSuchCloudWatchLogsLogGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchCloudWatchLogsLogGroup = exports.NoSuchCloudWatchLogsLogGroup || (exports.NoSuchCloudWatchLogsLogGroup = {}));
var QueryLoggingConfigAlreadyExists;
(function (QueryLoggingConfigAlreadyExists) {
    /**
     * @internal
     */
    QueryLoggingConfigAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueryLoggingConfigAlreadyExists = exports.QueryLoggingConfigAlreadyExists || (exports.QueryLoggingConfigAlreadyExists = {}));
var CreateReusableDelegationSetRequest;
(function (CreateReusableDelegationSetRequest) {
    /**
     * @internal
     */
    CreateReusableDelegationSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReusableDelegationSetRequest = exports.CreateReusableDelegationSetRequest || (exports.CreateReusableDelegationSetRequest = {}));
var CreateReusableDelegationSetResponse;
(function (CreateReusableDelegationSetResponse) {
    /**
     * @internal
     */
    CreateReusableDelegationSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReusableDelegationSetResponse = exports.CreateReusableDelegationSetResponse || (exports.CreateReusableDelegationSetResponse = {}));
var DelegationSetAlreadyCreated;
(function (DelegationSetAlreadyCreated) {
    /**
     * @internal
     */
    DelegationSetAlreadyCreated.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DelegationSetAlreadyCreated = exports.DelegationSetAlreadyCreated || (exports.DelegationSetAlreadyCreated = {}));
var DelegationSetAlreadyReusable;
(function (DelegationSetAlreadyReusable) {
    /**
     * @internal
     */
    DelegationSetAlreadyReusable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DelegationSetAlreadyReusable = exports.DelegationSetAlreadyReusable || (exports.DelegationSetAlreadyReusable = {}));
var HostedZoneNotFound;
(function (HostedZoneNotFound) {
    /**
     * @internal
     */
    HostedZoneNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostedZoneNotFound = exports.HostedZoneNotFound || (exports.HostedZoneNotFound = {}));
var CreateTrafficPolicyRequest;
(function (CreateTrafficPolicyRequest) {
    /**
     * @internal
     */
    CreateTrafficPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrafficPolicyRequest = exports.CreateTrafficPolicyRequest || (exports.CreateTrafficPolicyRequest = {}));
var TrafficPolicy;
(function (TrafficPolicy) {
    /**
     * @internal
     */
    TrafficPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrafficPolicy = exports.TrafficPolicy || (exports.TrafficPolicy = {}));
var CreateTrafficPolicyResponse;
(function (CreateTrafficPolicyResponse) {
    /**
     * @internal
     */
    CreateTrafficPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrafficPolicyResponse = exports.CreateTrafficPolicyResponse || (exports.CreateTrafficPolicyResponse = {}));
var InvalidTrafficPolicyDocument;
(function (InvalidTrafficPolicyDocument) {
    /**
     * @internal
     */
    InvalidTrafficPolicyDocument.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTrafficPolicyDocument = exports.InvalidTrafficPolicyDocument || (exports.InvalidTrafficPolicyDocument = {}));
var TooManyTrafficPolicies;
(function (TooManyTrafficPolicies) {
    /**
     * @internal
     */
    TooManyTrafficPolicies.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTrafficPolicies = exports.TooManyTrafficPolicies || (exports.TooManyTrafficPolicies = {}));
var TrafficPolicyAlreadyExists;
(function (TrafficPolicyAlreadyExists) {
    /**
     * @internal
     */
    TrafficPolicyAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrafficPolicyAlreadyExists = exports.TrafficPolicyAlreadyExists || (exports.TrafficPolicyAlreadyExists = {}));
var CreateTrafficPolicyInstanceRequest;
(function (CreateTrafficPolicyInstanceRequest) {
    /**
     * @internal
     */
    CreateTrafficPolicyInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrafficPolicyInstanceRequest = exports.CreateTrafficPolicyInstanceRequest || (exports.CreateTrafficPolicyInstanceRequest = {}));
var TrafficPolicyInstance;
(function (TrafficPolicyInstance) {
    /**
     * @internal
     */
    TrafficPolicyInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrafficPolicyInstance = exports.TrafficPolicyInstance || (exports.TrafficPolicyInstance = {}));
var CreateTrafficPolicyInstanceResponse;
(function (CreateTrafficPolicyInstanceResponse) {
    /**
     * @internal
     */
    CreateTrafficPolicyInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrafficPolicyInstanceResponse = exports.CreateTrafficPolicyInstanceResponse || (exports.CreateTrafficPolicyInstanceResponse = {}));
var NoSuchTrafficPolicy;
(function (NoSuchTrafficPolicy) {
    /**
     * @internal
     */
    NoSuchTrafficPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchTrafficPolicy = exports.NoSuchTrafficPolicy || (exports.NoSuchTrafficPolicy = {}));
var TooManyTrafficPolicyInstances;
(function (TooManyTrafficPolicyInstances) {
    /**
     * @internal
     */
    TooManyTrafficPolicyInstances.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTrafficPolicyInstances = exports.TooManyTrafficPolicyInstances || (exports.TooManyTrafficPolicyInstances = {}));
var TrafficPolicyInstanceAlreadyExists;
(function (TrafficPolicyInstanceAlreadyExists) {
    /**
     * @internal
     */
    TrafficPolicyInstanceAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrafficPolicyInstanceAlreadyExists = exports.TrafficPolicyInstanceAlreadyExists || (exports.TrafficPolicyInstanceAlreadyExists = {}));
var CreateTrafficPolicyVersionRequest;
(function (CreateTrafficPolicyVersionRequest) {
    /**
     * @internal
     */
    CreateTrafficPolicyVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrafficPolicyVersionRequest = exports.CreateTrafficPolicyVersionRequest || (exports.CreateTrafficPolicyVersionRequest = {}));
var CreateTrafficPolicyVersionResponse;
(function (CreateTrafficPolicyVersionResponse) {
    /**
     * @internal
     */
    CreateTrafficPolicyVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrafficPolicyVersionResponse = exports.CreateTrafficPolicyVersionResponse || (exports.CreateTrafficPolicyVersionResponse = {}));
var TooManyTrafficPolicyVersionsForCurrentPolicy;
(function (TooManyTrafficPolicyVersionsForCurrentPolicy) {
    /**
     * @internal
     */
    TooManyTrafficPolicyVersionsForCurrentPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTrafficPolicyVersionsForCurrentPolicy = exports.TooManyTrafficPolicyVersionsForCurrentPolicy || (exports.TooManyTrafficPolicyVersionsForCurrentPolicy = {}));
var CreateVPCAssociationAuthorizationRequest;
(function (CreateVPCAssociationAuthorizationRequest) {
    /**
     * @internal
     */
    CreateVPCAssociationAuthorizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVPCAssociationAuthorizationRequest = exports.CreateVPCAssociationAuthorizationRequest || (exports.CreateVPCAssociationAuthorizationRequest = {}));
var CreateVPCAssociationAuthorizationResponse;
(function (CreateVPCAssociationAuthorizationResponse) {
    /**
     * @internal
     */
    CreateVPCAssociationAuthorizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVPCAssociationAuthorizationResponse = exports.CreateVPCAssociationAuthorizationResponse || (exports.CreateVPCAssociationAuthorizationResponse = {}));
var TooManyVPCAssociationAuthorizations;
(function (TooManyVPCAssociationAuthorizations) {
    /**
     * @internal
     */
    TooManyVPCAssociationAuthorizations.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyVPCAssociationAuthorizations = exports.TooManyVPCAssociationAuthorizations || (exports.TooManyVPCAssociationAuthorizations = {}));
var DeactivateKeySigningKeyRequest;
(function (DeactivateKeySigningKeyRequest) {
    /**
     * @internal
     */
    DeactivateKeySigningKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeactivateKeySigningKeyRequest = exports.DeactivateKeySigningKeyRequest || (exports.DeactivateKeySigningKeyRequest = {}));
var DeactivateKeySigningKeyResponse;
(function (DeactivateKeySigningKeyResponse) {
    /**
     * @internal
     */
    DeactivateKeySigningKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeactivateKeySigningKeyResponse = exports.DeactivateKeySigningKeyResponse || (exports.DeactivateKeySigningKeyResponse = {}));
var KeySigningKeyInParentDSRecord;
(function (KeySigningKeyInParentDSRecord) {
    /**
     * @internal
     */
    KeySigningKeyInParentDSRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeySigningKeyInParentDSRecord = exports.KeySigningKeyInParentDSRecord || (exports.KeySigningKeyInParentDSRecord = {}));
var KeySigningKeyInUse;
(function (KeySigningKeyInUse) {
    /**
     * @internal
     */
    KeySigningKeyInUse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeySigningKeyInUse = exports.KeySigningKeyInUse || (exports.KeySigningKeyInUse = {}));
var DeleteHealthCheckRequest;
(function (DeleteHealthCheckRequest) {
    /**
     * @internal
     */
    DeleteHealthCheckRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHealthCheckRequest = exports.DeleteHealthCheckRequest || (exports.DeleteHealthCheckRequest = {}));
var DeleteHealthCheckResponse;
(function (DeleteHealthCheckResponse) {
    /**
     * @internal
     */
    DeleteHealthCheckResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHealthCheckResponse = exports.DeleteHealthCheckResponse || (exports.DeleteHealthCheckResponse = {}));
var HealthCheckInUse;
(function (HealthCheckInUse) {
    /**
     * @internal
     */
    HealthCheckInUse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HealthCheckInUse = exports.HealthCheckInUse || (exports.HealthCheckInUse = {}));
var DeleteHostedZoneRequest;
(function (DeleteHostedZoneRequest) {
    /**
     * @internal
     */
    DeleteHostedZoneRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHostedZoneRequest = exports.DeleteHostedZoneRequest || (exports.DeleteHostedZoneRequest = {}));
var DeleteHostedZoneResponse;
(function (DeleteHostedZoneResponse) {
    /**
     * @internal
     */
    DeleteHostedZoneResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteHostedZoneResponse = exports.DeleteHostedZoneResponse || (exports.DeleteHostedZoneResponse = {}));
var HostedZoneNotEmpty;
(function (HostedZoneNotEmpty) {
    /**
     * @internal
     */
    HostedZoneNotEmpty.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostedZoneNotEmpty = exports.HostedZoneNotEmpty || (exports.HostedZoneNotEmpty = {}));
var DeleteKeySigningKeyRequest;
(function (DeleteKeySigningKeyRequest) {
    /**
     * @internal
     */
    DeleteKeySigningKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteKeySigningKeyRequest = exports.DeleteKeySigningKeyRequest || (exports.DeleteKeySigningKeyRequest = {}));
var DeleteKeySigningKeyResponse;
(function (DeleteKeySigningKeyResponse) {
    /**
     * @internal
     */
    DeleteKeySigningKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteKeySigningKeyResponse = exports.DeleteKeySigningKeyResponse || (exports.DeleteKeySigningKeyResponse = {}));
var DeleteQueryLoggingConfigRequest;
(function (DeleteQueryLoggingConfigRequest) {
    /**
     * @internal
     */
    DeleteQueryLoggingConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteQueryLoggingConfigRequest = exports.DeleteQueryLoggingConfigRequest || (exports.DeleteQueryLoggingConfigRequest = {}));
var DeleteQueryLoggingConfigResponse;
(function (DeleteQueryLoggingConfigResponse) {
    /**
     * @internal
     */
    DeleteQueryLoggingConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteQueryLoggingConfigResponse = exports.DeleteQueryLoggingConfigResponse || (exports.DeleteQueryLoggingConfigResponse = {}));
var NoSuchQueryLoggingConfig;
(function (NoSuchQueryLoggingConfig) {
    /**
     * @internal
     */
    NoSuchQueryLoggingConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchQueryLoggingConfig = exports.NoSuchQueryLoggingConfig || (exports.NoSuchQueryLoggingConfig = {}));
var DelegationSetInUse;
(function (DelegationSetInUse) {
    /**
     * @internal
     */
    DelegationSetInUse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DelegationSetInUse = exports.DelegationSetInUse || (exports.DelegationSetInUse = {}));
var DeleteReusableDelegationSetRequest;
(function (DeleteReusableDelegationSetRequest) {
    /**
     * @internal
     */
    DeleteReusableDelegationSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReusableDelegationSetRequest = exports.DeleteReusableDelegationSetRequest || (exports.DeleteReusableDelegationSetRequest = {}));
var DeleteReusableDelegationSetResponse;
(function (DeleteReusableDelegationSetResponse) {
    /**
     * @internal
     */
    DeleteReusableDelegationSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReusableDelegationSetResponse = exports.DeleteReusableDelegationSetResponse || (exports.DeleteReusableDelegationSetResponse = {}));
var DeleteTrafficPolicyRequest;
(function (DeleteTrafficPolicyRequest) {
    /**
     * @internal
     */
    DeleteTrafficPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrafficPolicyRequest = exports.DeleteTrafficPolicyRequest || (exports.DeleteTrafficPolicyRequest = {}));
var DeleteTrafficPolicyResponse;
(function (DeleteTrafficPolicyResponse) {
    /**
     * @internal
     */
    DeleteTrafficPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrafficPolicyResponse = exports.DeleteTrafficPolicyResponse || (exports.DeleteTrafficPolicyResponse = {}));
var TrafficPolicyInUse;
(function (TrafficPolicyInUse) {
    /**
     * @internal
     */
    TrafficPolicyInUse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrafficPolicyInUse = exports.TrafficPolicyInUse || (exports.TrafficPolicyInUse = {}));
var DeleteTrafficPolicyInstanceRequest;
(function (DeleteTrafficPolicyInstanceRequest) {
    /**
     * @internal
     */
    DeleteTrafficPolicyInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrafficPolicyInstanceRequest = exports.DeleteTrafficPolicyInstanceRequest || (exports.DeleteTrafficPolicyInstanceRequest = {}));
var DeleteTrafficPolicyInstanceResponse;
(function (DeleteTrafficPolicyInstanceResponse) {
    /**
     * @internal
     */
    DeleteTrafficPolicyInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrafficPolicyInstanceResponse = exports.DeleteTrafficPolicyInstanceResponse || (exports.DeleteTrafficPolicyInstanceResponse = {}));
var NoSuchTrafficPolicyInstance;
(function (NoSuchTrafficPolicyInstance) {
    /**
     * @internal
     */
    NoSuchTrafficPolicyInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchTrafficPolicyInstance = exports.NoSuchTrafficPolicyInstance || (exports.NoSuchTrafficPolicyInstance = {}));
var DeleteVPCAssociationAuthorizationRequest;
(function (DeleteVPCAssociationAuthorizationRequest) {
    /**
     * @internal
     */
    DeleteVPCAssociationAuthorizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVPCAssociationAuthorizationRequest = exports.DeleteVPCAssociationAuthorizationRequest || (exports.DeleteVPCAssociationAuthorizationRequest = {}));
var DeleteVPCAssociationAuthorizationResponse;
(function (DeleteVPCAssociationAuthorizationResponse) {
    /**
     * @internal
     */
    DeleteVPCAssociationAuthorizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVPCAssociationAuthorizationResponse = exports.DeleteVPCAssociationAuthorizationResponse || (exports.DeleteVPCAssociationAuthorizationResponse = {}));
var VPCAssociationAuthorizationNotFound;
(function (VPCAssociationAuthorizationNotFound) {
    /**
     * @internal
     */
    VPCAssociationAuthorizationNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VPCAssociationAuthorizationNotFound = exports.VPCAssociationAuthorizationNotFound || (exports.VPCAssociationAuthorizationNotFound = {}));
var DisableHostedZoneDNSSECRequest;
(function (DisableHostedZoneDNSSECRequest) {
    /**
     * @internal
     */
    DisableHostedZoneDNSSECRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableHostedZoneDNSSECRequest = exports.DisableHostedZoneDNSSECRequest || (exports.DisableHostedZoneDNSSECRequest = {}));
var DisableHostedZoneDNSSECResponse;
(function (DisableHostedZoneDNSSECResponse) {
    /**
     * @internal
     */
    DisableHostedZoneDNSSECResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableHostedZoneDNSSECResponse = exports.DisableHostedZoneDNSSECResponse || (exports.DisableHostedZoneDNSSECResponse = {}));
var DNSSECNotFound;
(function (DNSSECNotFound) {
    /**
     * @internal
     */
    DNSSECNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DNSSECNotFound = exports.DNSSECNotFound || (exports.DNSSECNotFound = {}));
var DisassociateVPCFromHostedZoneRequest;
(function (DisassociateVPCFromHostedZoneRequest) {
    /**
     * @internal
     */
    DisassociateVPCFromHostedZoneRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateVPCFromHostedZoneRequest = exports.DisassociateVPCFromHostedZoneRequest || (exports.DisassociateVPCFromHostedZoneRequest = {}));
var DisassociateVPCFromHostedZoneResponse;
(function (DisassociateVPCFromHostedZoneResponse) {
    /**
     * @internal
     */
    DisassociateVPCFromHostedZoneResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateVPCFromHostedZoneResponse = exports.DisassociateVPCFromHostedZoneResponse || (exports.DisassociateVPCFromHostedZoneResponse = {}));
var LastVPCAssociation;
(function (LastVPCAssociation) {
    /**
     * @internal
     */
    LastVPCAssociation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LastVPCAssociation = exports.LastVPCAssociation || (exports.LastVPCAssociation = {}));
var VPCAssociationNotFound;
(function (VPCAssociationNotFound) {
    /**
     * @internal
     */
    VPCAssociationNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VPCAssociationNotFound = exports.VPCAssociationNotFound || (exports.VPCAssociationNotFound = {}));
var EnableHostedZoneDNSSECRequest;
(function (EnableHostedZoneDNSSECRequest) {
    /**
     * @internal
     */
    EnableHostedZoneDNSSECRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableHostedZoneDNSSECRequest = exports.EnableHostedZoneDNSSECRequest || (exports.EnableHostedZoneDNSSECRequest = {}));
var EnableHostedZoneDNSSECResponse;
(function (EnableHostedZoneDNSSECResponse) {
    /**
     * @internal
     */
    EnableHostedZoneDNSSECResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableHostedZoneDNSSECResponse = exports.EnableHostedZoneDNSSECResponse || (exports.EnableHostedZoneDNSSECResponse = {}));
var HostedZonePartiallyDelegated;
(function (HostedZonePartiallyDelegated) {
    /**
     * @internal
     */
    HostedZonePartiallyDelegated.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostedZonePartiallyDelegated = exports.HostedZonePartiallyDelegated || (exports.HostedZonePartiallyDelegated = {}));
var KeySigningKeyWithActiveStatusNotFound;
(function (KeySigningKeyWithActiveStatusNotFound) {
    /**
     * @internal
     */
    KeySigningKeyWithActiveStatusNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeySigningKeyWithActiveStatusNotFound = exports.KeySigningKeyWithActiveStatusNotFound || (exports.KeySigningKeyWithActiveStatusNotFound = {}));
var GetAccountLimitRequest;
(function (GetAccountLimitRequest) {
    /**
     * @internal
     */
    GetAccountLimitRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccountLimitRequest = exports.GetAccountLimitRequest || (exports.GetAccountLimitRequest = {}));
var GetAccountLimitResponse;
(function (GetAccountLimitResponse) {
    /**
     * @internal
     */
    GetAccountLimitResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccountLimitResponse = exports.GetAccountLimitResponse || (exports.GetAccountLimitResponse = {}));
var GetChangeRequest;
(function (GetChangeRequest) {
    /**
     * @internal
     */
    GetChangeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetChangeRequest = exports.GetChangeRequest || (exports.GetChangeRequest = {}));
var GetChangeResponse;
(function (GetChangeResponse) {
    /**
     * @internal
     */
    GetChangeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetChangeResponse = exports.GetChangeResponse || (exports.GetChangeResponse = {}));
var NoSuchChange;
(function (NoSuchChange) {
    /**
     * @internal
     */
    NoSuchChange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchChange = exports.NoSuchChange || (exports.NoSuchChange = {}));
var GetCheckerIpRangesRequest;
(function (GetCheckerIpRangesRequest) {
    /**
     * @internal
     */
    GetCheckerIpRangesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCheckerIpRangesRequest = exports.GetCheckerIpRangesRequest || (exports.GetCheckerIpRangesRequest = {}));
var GetCheckerIpRangesResponse;
(function (GetCheckerIpRangesResponse) {
    /**
     * @internal
     */
    GetCheckerIpRangesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCheckerIpRangesResponse = exports.GetCheckerIpRangesResponse || (exports.GetCheckerIpRangesResponse = {}));
var GetDNSSECRequest;
(function (GetDNSSECRequest) {
    /**
     * @internal
     */
    GetDNSSECRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDNSSECRequest = exports.GetDNSSECRequest || (exports.GetDNSSECRequest = {}));
var DNSSECStatus;
(function (DNSSECStatus) {
    /**
     * @internal
     */
    DNSSECStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DNSSECStatus = exports.DNSSECStatus || (exports.DNSSECStatus = {}));
var GetDNSSECResponse;
(function (GetDNSSECResponse) {
    /**
     * @internal
     */
    GetDNSSECResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDNSSECResponse = exports.GetDNSSECResponse || (exports.GetDNSSECResponse = {}));
var GetGeoLocationRequest;
(function (GetGeoLocationRequest) {
    /**
     * @internal
     */
    GetGeoLocationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGeoLocationRequest = exports.GetGeoLocationRequest || (exports.GetGeoLocationRequest = {}));
var GeoLocationDetails;
(function (GeoLocationDetails) {
    /**
     * @internal
     */
    GeoLocationDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GeoLocationDetails = exports.GeoLocationDetails || (exports.GeoLocationDetails = {}));
var GetGeoLocationResponse;
(function (GetGeoLocationResponse) {
    /**
     * @internal
     */
    GetGeoLocationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGeoLocationResponse = exports.GetGeoLocationResponse || (exports.GetGeoLocationResponse = {}));
var NoSuchGeoLocation;
(function (NoSuchGeoLocation) {
    /**
     * @internal
     */
    NoSuchGeoLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchGeoLocation = exports.NoSuchGeoLocation || (exports.NoSuchGeoLocation = {}));
var GetHealthCheckRequest;
(function (GetHealthCheckRequest) {
    /**
     * @internal
     */
    GetHealthCheckRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHealthCheckRequest = exports.GetHealthCheckRequest || (exports.GetHealthCheckRequest = {}));
var GetHealthCheckResponse;
(function (GetHealthCheckResponse) {
    /**
     * @internal
     */
    GetHealthCheckResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHealthCheckResponse = exports.GetHealthCheckResponse || (exports.GetHealthCheckResponse = {}));
var IncompatibleVersion;
(function (IncompatibleVersion) {
    /**
     * @internal
     */
    IncompatibleVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IncompatibleVersion = exports.IncompatibleVersion || (exports.IncompatibleVersion = {}));
var GetHealthCheckCountRequest;
(function (GetHealthCheckCountRequest) {
    /**
     * @internal
     */
    GetHealthCheckCountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHealthCheckCountRequest = exports.GetHealthCheckCountRequest || (exports.GetHealthCheckCountRequest = {}));
var GetHealthCheckCountResponse;
(function (GetHealthCheckCountResponse) {
    /**
     * @internal
     */
    GetHealthCheckCountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHealthCheckCountResponse = exports.GetHealthCheckCountResponse || (exports.GetHealthCheckCountResponse = {}));
var GetHealthCheckLastFailureReasonRequest;
(function (GetHealthCheckLastFailureReasonRequest) {
    /**
     * @internal
     */
    GetHealthCheckLastFailureReasonRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHealthCheckLastFailureReasonRequest = exports.GetHealthCheckLastFailureReasonRequest || (exports.GetHealthCheckLastFailureReasonRequest = {}));
var StatusReport;
(function (StatusReport) {
    /**
     * @internal
     */
    StatusReport.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatusReport = exports.StatusReport || (exports.StatusReport = {}));
var HealthCheckObservation;
(function (HealthCheckObservation) {
    /**
     * @internal
     */
    HealthCheckObservation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HealthCheckObservation = exports.HealthCheckObservation || (exports.HealthCheckObservation = {}));
var GetHealthCheckLastFailureReasonResponse;
(function (GetHealthCheckLastFailureReasonResponse) {
    /**
     * @internal
     */
    GetHealthCheckLastFailureReasonResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHealthCheckLastFailureReasonResponse = exports.GetHealthCheckLastFailureReasonResponse || (exports.GetHealthCheckLastFailureReasonResponse = {}));
var GetHealthCheckStatusRequest;
(function (GetHealthCheckStatusRequest) {
    /**
     * @internal
     */
    GetHealthCheckStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHealthCheckStatusRequest = exports.GetHealthCheckStatusRequest || (exports.GetHealthCheckStatusRequest = {}));
var GetHealthCheckStatusResponse;
(function (GetHealthCheckStatusResponse) {
    /**
     * @internal
     */
    GetHealthCheckStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHealthCheckStatusResponse = exports.GetHealthCheckStatusResponse || (exports.GetHealthCheckStatusResponse = {}));
var GetHostedZoneRequest;
(function (GetHostedZoneRequest) {
    /**
     * @internal
     */
    GetHostedZoneRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHostedZoneRequest = exports.GetHostedZoneRequest || (exports.GetHostedZoneRequest = {}));
var GetHostedZoneResponse;
(function (GetHostedZoneResponse) {
    /**
     * @internal
     */
    GetHostedZoneResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHostedZoneResponse = exports.GetHostedZoneResponse || (exports.GetHostedZoneResponse = {}));
var GetHostedZoneCountRequest;
(function (GetHostedZoneCountRequest) {
    /**
     * @internal
     */
    GetHostedZoneCountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHostedZoneCountRequest = exports.GetHostedZoneCountRequest || (exports.GetHostedZoneCountRequest = {}));
var GetHostedZoneCountResponse;
(function (GetHostedZoneCountResponse) {
    /**
     * @internal
     */
    GetHostedZoneCountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHostedZoneCountResponse = exports.GetHostedZoneCountResponse || (exports.GetHostedZoneCountResponse = {}));
var GetHostedZoneLimitRequest;
(function (GetHostedZoneLimitRequest) {
    /**
     * @internal
     */
    GetHostedZoneLimitRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHostedZoneLimitRequest = exports.GetHostedZoneLimitRequest || (exports.GetHostedZoneLimitRequest = {}));
var HostedZoneLimit;
(function (HostedZoneLimit) {
    /**
     * @internal
     */
    HostedZoneLimit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostedZoneLimit = exports.HostedZoneLimit || (exports.HostedZoneLimit = {}));
var GetHostedZoneLimitResponse;
(function (GetHostedZoneLimitResponse) {
    /**
     * @internal
     */
    GetHostedZoneLimitResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHostedZoneLimitResponse = exports.GetHostedZoneLimitResponse || (exports.GetHostedZoneLimitResponse = {}));
var HostedZoneNotPrivate;
(function (HostedZoneNotPrivate) {
    /**
     * @internal
     */
    HostedZoneNotPrivate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostedZoneNotPrivate = exports.HostedZoneNotPrivate || (exports.HostedZoneNotPrivate = {}));
var GetQueryLoggingConfigRequest;
(function (GetQueryLoggingConfigRequest) {
    /**
     * @internal
     */
    GetQueryLoggingConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQueryLoggingConfigRequest = exports.GetQueryLoggingConfigRequest || (exports.GetQueryLoggingConfigRequest = {}));
var GetQueryLoggingConfigResponse;
(function (GetQueryLoggingConfigResponse) {
    /**
     * @internal
     */
    GetQueryLoggingConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQueryLoggingConfigResponse = exports.GetQueryLoggingConfigResponse || (exports.GetQueryLoggingConfigResponse = {}));
var GetReusableDelegationSetRequest;
(function (GetReusableDelegationSetRequest) {
    /**
     * @internal
     */
    GetReusableDelegationSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReusableDelegationSetRequest = exports.GetReusableDelegationSetRequest || (exports.GetReusableDelegationSetRequest = {}));
var GetReusableDelegationSetResponse;
(function (GetReusableDelegationSetResponse) {
    /**
     * @internal
     */
    GetReusableDelegationSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReusableDelegationSetResponse = exports.GetReusableDelegationSetResponse || (exports.GetReusableDelegationSetResponse = {}));
var GetReusableDelegationSetLimitRequest;
(function (GetReusableDelegationSetLimitRequest) {
    /**
     * @internal
     */
    GetReusableDelegationSetLimitRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReusableDelegationSetLimitRequest = exports.GetReusableDelegationSetLimitRequest || (exports.GetReusableDelegationSetLimitRequest = {}));
var ReusableDelegationSetLimit;
(function (ReusableDelegationSetLimit) {
    /**
     * @internal
     */
    ReusableDelegationSetLimit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReusableDelegationSetLimit = exports.ReusableDelegationSetLimit || (exports.ReusableDelegationSetLimit = {}));
var GetReusableDelegationSetLimitResponse;
(function (GetReusableDelegationSetLimitResponse) {
    /**
     * @internal
     */
    GetReusableDelegationSetLimitResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReusableDelegationSetLimitResponse = exports.GetReusableDelegationSetLimitResponse || (exports.GetReusableDelegationSetLimitResponse = {}));
var GetTrafficPolicyRequest;
(function (GetTrafficPolicyRequest) {
    /**
     * @internal
     */
    GetTrafficPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTrafficPolicyRequest = exports.GetTrafficPolicyRequest || (exports.GetTrafficPolicyRequest = {}));
var GetTrafficPolicyResponse;
(function (GetTrafficPolicyResponse) {
    /**
     * @internal
     */
    GetTrafficPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTrafficPolicyResponse = exports.GetTrafficPolicyResponse || (exports.GetTrafficPolicyResponse = {}));
var GetTrafficPolicyInstanceRequest;
(function (GetTrafficPolicyInstanceRequest) {
    /**
     * @internal
     */
    GetTrafficPolicyInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTrafficPolicyInstanceRequest = exports.GetTrafficPolicyInstanceRequest || (exports.GetTrafficPolicyInstanceRequest = {}));
var GetTrafficPolicyInstanceResponse;
(function (GetTrafficPolicyInstanceResponse) {
    /**
     * @internal
     */
    GetTrafficPolicyInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTrafficPolicyInstanceResponse = exports.GetTrafficPolicyInstanceResponse || (exports.GetTrafficPolicyInstanceResponse = {}));
var GetTrafficPolicyInstanceCountRequest;
(function (GetTrafficPolicyInstanceCountRequest) {
    /**
     * @internal
     */
    GetTrafficPolicyInstanceCountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTrafficPolicyInstanceCountRequest = exports.GetTrafficPolicyInstanceCountRequest || (exports.GetTrafficPolicyInstanceCountRequest = {}));
var GetTrafficPolicyInstanceCountResponse;
(function (GetTrafficPolicyInstanceCountResponse) {
    /**
     * @internal
     */
    GetTrafficPolicyInstanceCountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTrafficPolicyInstanceCountResponse = exports.GetTrafficPolicyInstanceCountResponse || (exports.GetTrafficPolicyInstanceCountResponse = {}));
var ListGeoLocationsRequest;
(function (ListGeoLocationsRequest) {
    /**
     * @internal
     */
    ListGeoLocationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGeoLocationsRequest = exports.ListGeoLocationsRequest || (exports.ListGeoLocationsRequest = {}));
var ListGeoLocationsResponse;
(function (ListGeoLocationsResponse) {
    /**
     * @internal
     */
    ListGeoLocationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGeoLocationsResponse = exports.ListGeoLocationsResponse || (exports.ListGeoLocationsResponse = {}));
var ListHealthChecksRequest;
(function (ListHealthChecksRequest) {
    /**
     * @internal
     */
    ListHealthChecksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHealthChecksRequest = exports.ListHealthChecksRequest || (exports.ListHealthChecksRequest = {}));
var ListHealthChecksResponse;
(function (ListHealthChecksResponse) {
    /**
     * @internal
     */
    ListHealthChecksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHealthChecksResponse = exports.ListHealthChecksResponse || (exports.ListHealthChecksResponse = {}));
var ListHostedZonesRequest;
(function (ListHostedZonesRequest) {
    /**
     * @internal
     */
    ListHostedZonesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHostedZonesRequest = exports.ListHostedZonesRequest || (exports.ListHostedZonesRequest = {}));
var ListHostedZonesResponse;
(function (ListHostedZonesResponse) {
    /**
     * @internal
     */
    ListHostedZonesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHostedZonesResponse = exports.ListHostedZonesResponse || (exports.ListHostedZonesResponse = {}));
var ListHostedZonesByNameRequest;
(function (ListHostedZonesByNameRequest) {
    /**
     * @internal
     */
    ListHostedZonesByNameRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHostedZonesByNameRequest = exports.ListHostedZonesByNameRequest || (exports.ListHostedZonesByNameRequest = {}));
var ListHostedZonesByNameResponse;
(function (ListHostedZonesByNameResponse) {
    /**
     * @internal
     */
    ListHostedZonesByNameResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHostedZonesByNameResponse = exports.ListHostedZonesByNameResponse || (exports.ListHostedZonesByNameResponse = {}));
var InvalidPaginationToken;
(function (InvalidPaginationToken) {
    /**
     * @internal
     */
    InvalidPaginationToken.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPaginationToken = exports.InvalidPaginationToken || (exports.InvalidPaginationToken = {}));
var ListHostedZonesByVPCRequest;
(function (ListHostedZonesByVPCRequest) {
    /**
     * @internal
     */
    ListHostedZonesByVPCRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHostedZonesByVPCRequest = exports.ListHostedZonesByVPCRequest || (exports.ListHostedZonesByVPCRequest = {}));
var HostedZoneOwner;
(function (HostedZoneOwner) {
    /**
     * @internal
     */
    HostedZoneOwner.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostedZoneOwner = exports.HostedZoneOwner || (exports.HostedZoneOwner = {}));
var HostedZoneSummary;
(function (HostedZoneSummary) {
    /**
     * @internal
     */
    HostedZoneSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostedZoneSummary = exports.HostedZoneSummary || (exports.HostedZoneSummary = {}));
var ListHostedZonesByVPCResponse;
(function (ListHostedZonesByVPCResponse) {
    /**
     * @internal
     */
    ListHostedZonesByVPCResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListHostedZonesByVPCResponse = exports.ListHostedZonesByVPCResponse || (exports.ListHostedZonesByVPCResponse = {}));
var ListQueryLoggingConfigsRequest;
(function (ListQueryLoggingConfigsRequest) {
    /**
     * @internal
     */
    ListQueryLoggingConfigsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueryLoggingConfigsRequest = exports.ListQueryLoggingConfigsRequest || (exports.ListQueryLoggingConfigsRequest = {}));
var ListQueryLoggingConfigsResponse;
(function (ListQueryLoggingConfigsResponse) {
    /**
     * @internal
     */
    ListQueryLoggingConfigsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueryLoggingConfigsResponse = exports.ListQueryLoggingConfigsResponse || (exports.ListQueryLoggingConfigsResponse = {}));
var ListResourceRecordSetsRequest;
(function (ListResourceRecordSetsRequest) {
    /**
     * @internal
     */
    ListResourceRecordSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceRecordSetsRequest = exports.ListResourceRecordSetsRequest || (exports.ListResourceRecordSetsRequest = {}));
var ListResourceRecordSetsResponse;
(function (ListResourceRecordSetsResponse) {
    /**
     * @internal
     */
    ListResourceRecordSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceRecordSetsResponse = exports.ListResourceRecordSetsResponse || (exports.ListResourceRecordSetsResponse = {}));
var ListReusableDelegationSetsRequest;
(function (ListReusableDelegationSetsRequest) {
    /**
     * @internal
     */
    ListReusableDelegationSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReusableDelegationSetsRequest = exports.ListReusableDelegationSetsRequest || (exports.ListReusableDelegationSetsRequest = {}));
var ListReusableDelegationSetsResponse;
(function (ListReusableDelegationSetsResponse) {
    /**
     * @internal
     */
    ListReusableDelegationSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReusableDelegationSetsResponse = exports.ListReusableDelegationSetsResponse || (exports.ListReusableDelegationSetsResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ResourceTagSet;
(function (ResourceTagSet) {
    /**
     * @internal
     */
    ResourceTagSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceTagSet = exports.ResourceTagSet || (exports.ResourceTagSet = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ListTagsForResourcesRequest;
(function (ListTagsForResourcesRequest) {
    /**
     * @internal
     */
    ListTagsForResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourcesRequest = exports.ListTagsForResourcesRequest || (exports.ListTagsForResourcesRequest = {}));
var ListTagsForResourcesResponse;
(function (ListTagsForResourcesResponse) {
    /**
     * @internal
     */
    ListTagsForResourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourcesResponse = exports.ListTagsForResourcesResponse || (exports.ListTagsForResourcesResponse = {}));
var ListTrafficPoliciesRequest;
(function (ListTrafficPoliciesRequest) {
    /**
     * @internal
     */
    ListTrafficPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrafficPoliciesRequest = exports.ListTrafficPoliciesRequest || (exports.ListTrafficPoliciesRequest = {}));
var TrafficPolicySummary;
(function (TrafficPolicySummary) {
    /**
     * @internal
     */
    TrafficPolicySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrafficPolicySummary = exports.TrafficPolicySummary || (exports.TrafficPolicySummary = {}));
var ListTrafficPoliciesResponse;
(function (ListTrafficPoliciesResponse) {
    /**
     * @internal
     */
    ListTrafficPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrafficPoliciesResponse = exports.ListTrafficPoliciesResponse || (exports.ListTrafficPoliciesResponse = {}));
var ListTrafficPolicyInstancesRequest;
(function (ListTrafficPolicyInstancesRequest) {
    /**
     * @internal
     */
    ListTrafficPolicyInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrafficPolicyInstancesRequest = exports.ListTrafficPolicyInstancesRequest || (exports.ListTrafficPolicyInstancesRequest = {}));
var ListTrafficPolicyInstancesResponse;
(function (ListTrafficPolicyInstancesResponse) {
    /**
     * @internal
     */
    ListTrafficPolicyInstancesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrafficPolicyInstancesResponse = exports.ListTrafficPolicyInstancesResponse || (exports.ListTrafficPolicyInstancesResponse = {}));
var ListTrafficPolicyInstancesByHostedZoneRequest;
(function (ListTrafficPolicyInstancesByHostedZoneRequest) {
    /**
     * @internal
     */
    ListTrafficPolicyInstancesByHostedZoneRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrafficPolicyInstancesByHostedZoneRequest = exports.ListTrafficPolicyInstancesByHostedZoneRequest || (exports.ListTrafficPolicyInstancesByHostedZoneRequest = {}));
var ListTrafficPolicyInstancesByHostedZoneResponse;
(function (ListTrafficPolicyInstancesByHostedZoneResponse) {
    /**
     * @internal
     */
    ListTrafficPolicyInstancesByHostedZoneResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrafficPolicyInstancesByHostedZoneResponse = exports.ListTrafficPolicyInstancesByHostedZoneResponse || (exports.ListTrafficPolicyInstancesByHostedZoneResponse = {}));
var ListTrafficPolicyInstancesByPolicyRequest;
(function (ListTrafficPolicyInstancesByPolicyRequest) {
    /**
     * @internal
     */
    ListTrafficPolicyInstancesByPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrafficPolicyInstancesByPolicyRequest = exports.ListTrafficPolicyInstancesByPolicyRequest || (exports.ListTrafficPolicyInstancesByPolicyRequest = {}));
var ListTrafficPolicyInstancesByPolicyResponse;
(function (ListTrafficPolicyInstancesByPolicyResponse) {
    /**
     * @internal
     */
    ListTrafficPolicyInstancesByPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrafficPolicyInstancesByPolicyResponse = exports.ListTrafficPolicyInstancesByPolicyResponse || (exports.ListTrafficPolicyInstancesByPolicyResponse = {}));
var ListTrafficPolicyVersionsRequest;
(function (ListTrafficPolicyVersionsRequest) {
    /**
     * @internal
     */
    ListTrafficPolicyVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrafficPolicyVersionsRequest = exports.ListTrafficPolicyVersionsRequest || (exports.ListTrafficPolicyVersionsRequest = {}));
var ListTrafficPolicyVersionsResponse;
(function (ListTrafficPolicyVersionsResponse) {
    /**
     * @internal
     */
    ListTrafficPolicyVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrafficPolicyVersionsResponse = exports.ListTrafficPolicyVersionsResponse || (exports.ListTrafficPolicyVersionsResponse = {}));
var ListVPCAssociationAuthorizationsRequest;
(function (ListVPCAssociationAuthorizationsRequest) {
    /**
     * @internal
     */
    ListVPCAssociationAuthorizationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVPCAssociationAuthorizationsRequest = exports.ListVPCAssociationAuthorizationsRequest || (exports.ListVPCAssociationAuthorizationsRequest = {}));
var ListVPCAssociationAuthorizationsResponse;
(function (ListVPCAssociationAuthorizationsResponse) {
    /**
     * @internal
     */
    ListVPCAssociationAuthorizationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVPCAssociationAuthorizationsResponse = exports.ListVPCAssociationAuthorizationsResponse || (exports.ListVPCAssociationAuthorizationsResponse = {}));
var TestDNSAnswerRequest;
(function (TestDNSAnswerRequest) {
    /**
     * @internal
     */
    TestDNSAnswerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestDNSAnswerRequest = exports.TestDNSAnswerRequest || (exports.TestDNSAnswerRequest = {}));
var TestDNSAnswerResponse;
(function (TestDNSAnswerResponse) {
    /**
     * @internal
     */
    TestDNSAnswerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestDNSAnswerResponse = exports.TestDNSAnswerResponse || (exports.TestDNSAnswerResponse = {}));
var HealthCheckVersionMismatch;
(function (HealthCheckVersionMismatch) {
    /**
     * @internal
     */
    HealthCheckVersionMismatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HealthCheckVersionMismatch = exports.HealthCheckVersionMismatch || (exports.HealthCheckVersionMismatch = {}));
var UpdateHealthCheckRequest;
(function (UpdateHealthCheckRequest) {
    /**
     * @internal
     */
    UpdateHealthCheckRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateHealthCheckRequest = exports.UpdateHealthCheckRequest || (exports.UpdateHealthCheckRequest = {}));
var UpdateHealthCheckResponse;
(function (UpdateHealthCheckResponse) {
    /**
     * @internal
     */
    UpdateHealthCheckResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateHealthCheckResponse = exports.UpdateHealthCheckResponse || (exports.UpdateHealthCheckResponse = {}));
var UpdateHostedZoneCommentRequest;
(function (UpdateHostedZoneCommentRequest) {
    /**
     * @internal
     */
    UpdateHostedZoneCommentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateHostedZoneCommentRequest = exports.UpdateHostedZoneCommentRequest || (exports.UpdateHostedZoneCommentRequest = {}));
var UpdateHostedZoneCommentResponse;
(function (UpdateHostedZoneCommentResponse) {
    /**
     * @internal
     */
    UpdateHostedZoneCommentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateHostedZoneCommentResponse = exports.UpdateHostedZoneCommentResponse || (exports.UpdateHostedZoneCommentResponse = {}));
var UpdateTrafficPolicyCommentRequest;
(function (UpdateTrafficPolicyCommentRequest) {
    /**
     * @internal
     */
    UpdateTrafficPolicyCommentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTrafficPolicyCommentRequest = exports.UpdateTrafficPolicyCommentRequest || (exports.UpdateTrafficPolicyCommentRequest = {}));
var UpdateTrafficPolicyCommentResponse;
(function (UpdateTrafficPolicyCommentResponse) {
    /**
     * @internal
     */
    UpdateTrafficPolicyCommentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTrafficPolicyCommentResponse = exports.UpdateTrafficPolicyCommentResponse || (exports.UpdateTrafficPolicyCommentResponse = {}));
var ConflictingTypes;
(function (ConflictingTypes) {
    /**
     * @internal
     */
    ConflictingTypes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictingTypes = exports.ConflictingTypes || (exports.ConflictingTypes = {}));
var UpdateTrafficPolicyInstanceRequest;
(function (UpdateTrafficPolicyInstanceRequest) {
    /**
     * @internal
     */
    UpdateTrafficPolicyInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTrafficPolicyInstanceRequest = exports.UpdateTrafficPolicyInstanceRequest || (exports.UpdateTrafficPolicyInstanceRequest = {}));
var UpdateTrafficPolicyInstanceResponse;
(function (UpdateTrafficPolicyInstanceResponse) {
    /**
     * @internal
     */
    UpdateTrafficPolicyInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTrafficPolicyInstanceResponse = exports.UpdateTrafficPolicyInstanceResponse || (exports.UpdateTrafficPolicyInstanceResponse = {}));
//# sourceMappingURL=models_0.js.map