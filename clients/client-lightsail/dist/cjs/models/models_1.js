"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRelationalDatabaseBlueprintsResult = exports.RelationalDatabaseBlueprint = exports.RelationalDatabaseEngine = exports.GetRelationalDatabaseBlueprintsRequest = exports.GetRelationalDatabaseResult = exports.RelationalDatabase = exports.PendingModifiedRelationalDatabaseValues = exports.PendingMaintenanceAction = exports.RelationalDatabaseEndpoint = exports.RelationalDatabaseHardware = exports.GetRelationalDatabaseRequest = exports.GetRegionsResult = exports.Region = exports.GetRegionsRequest = exports.GetOperationsForResourceResult = exports.GetOperationsForResourceRequest = exports.GetOperationsResult = exports.GetOperationsRequest = exports.GetOperationResult = exports.GetOperationRequest = exports.GetLoadBalancerTlsCertificatesResult = exports.LoadBalancerTlsCertificate = exports.LoadBalancerTlsCertificateStatus = exports.LoadBalancerTlsCertificateRevocationReason = exports.LoadBalancerTlsCertificateRenewalSummary = exports.LoadBalancerTlsCertificateRenewalStatus = exports.LoadBalancerTlsCertificateDomainValidationOption = exports.LoadBalancerTlsCertificateFailureReason = exports.LoadBalancerTlsCertificateDomainValidationRecord = exports.LoadBalancerTlsCertificateDomainStatus = exports.GetLoadBalancerTlsCertificatesRequest = exports.GetLoadBalancersResult = exports.GetLoadBalancersRequest = exports.GetLoadBalancerMetricDataResult = exports.GetLoadBalancerMetricDataRequest = exports.LoadBalancerMetricName = exports.GetLoadBalancerResult = exports.LoadBalancer = exports.LoadBalancerTlsCertificateSummary = exports.LoadBalancerState = exports.LoadBalancerProtocol = exports.InstanceHealthSummary = exports.InstanceHealthReason = exports.InstanceHealthState = exports.LoadBalancerAttributeName = exports.GetLoadBalancerRequest = exports.GetKeyPairsResult = exports.GetKeyPairsRequest = exports.GetKeyPairResult = exports.GetKeyPairRequest = void 0;
exports.RegisterContainerImageResult = exports.RegisterContainerImageRequest = exports.RebootRelationalDatabaseResult = exports.RebootRelationalDatabaseRequest = exports.RebootInstanceResult = exports.RebootInstanceRequest = exports.PutInstancePublicPortsResult = exports.PutInstancePublicPortsRequest = exports.PutAlarmResult = exports.PutAlarmRequest = exports.PeerVpcResult = exports.PeerVpcRequest = exports.OpenInstancePublicPortsResult = exports.OpenInstancePublicPortsRequest = exports.IsVpcPeeredResult = exports.IsVpcPeeredRequest = exports.ImportKeyPairResult = exports.ImportKeyPairRequest = exports.GetStaticIpsResult = exports.GetStaticIpsRequest = exports.GetStaticIpResult = exports.StaticIp = exports.GetStaticIpRequest = exports.GetRelationalDatabaseSnapshotsResult = exports.GetRelationalDatabaseSnapshotsRequest = exports.GetRelationalDatabaseSnapshotResult = exports.RelationalDatabaseSnapshot = exports.GetRelationalDatabaseSnapshotRequest = exports.GetRelationalDatabasesResult = exports.GetRelationalDatabasesRequest = exports.GetRelationalDatabaseParametersResult = exports.RelationalDatabaseParameter = exports.GetRelationalDatabaseParametersRequest = exports.GetRelationalDatabaseMetricDataResult = exports.GetRelationalDatabaseMetricDataRequest = exports.RelationalDatabaseMetricName = exports.GetRelationalDatabaseMasterUserPasswordResult = exports.GetRelationalDatabaseMasterUserPasswordRequest = exports.RelationalDatabasePasswordVersion = exports.GetRelationalDatabaseLogStreamsResult = exports.GetRelationalDatabaseLogStreamsRequest = exports.GetRelationalDatabaseLogEventsResult = exports.LogEvent = exports.GetRelationalDatabaseLogEventsRequest = exports.GetRelationalDatabaseEventsResult = exports.RelationalDatabaseEvent = exports.GetRelationalDatabaseEventsRequest = exports.GetRelationalDatabaseBundlesResult = exports.RelationalDatabaseBundle = exports.GetRelationalDatabaseBundlesRequest = void 0;
exports.UpdateRelationalDatabaseParametersResult = exports.UpdateRelationalDatabaseParametersRequest = exports.UpdateRelationalDatabaseResult = exports.UpdateRelationalDatabaseRequest = exports.UpdateLoadBalancerAttributeResult = exports.UpdateLoadBalancerAttributeRequest = exports.UpdateDomainEntryResult = exports.UpdateDomainEntryRequest = exports.UpdateDistributionBundleResult = exports.UpdateDistributionBundleRequest = exports.UpdateDistributionResult = exports.UpdateDistributionRequest = exports.UpdateContainerServiceResult = exports.UpdateContainerServiceRequest = exports.UntagResourceResult = exports.UntagResourceRequest = exports.UnpeerVpcResult = exports.UnpeerVpcRequest = exports.TestAlarmResult = exports.TestAlarmRequest = exports.TagResourceResult = exports.TagResourceRequest = exports.StopRelationalDatabaseResult = exports.StopRelationalDatabaseRequest = exports.StopInstanceResult = exports.StopInstanceRequest = exports.StartRelationalDatabaseResult = exports.StartRelationalDatabaseRequest = exports.StartInstanceResult = exports.StartInstanceRequest = exports.SetIpAddressTypeResult = exports.SetIpAddressTypeRequest = exports.SendContactMethodVerificationResult = exports.SendContactMethodVerificationRequest = exports.ResetDistributionCacheResult = exports.ResetDistributionCacheRequest = exports.ReleaseStaticIpResult = exports.ReleaseStaticIpRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var GetKeyPairRequest;
(function (GetKeyPairRequest) {
    /**
     * @internal
     */
    GetKeyPairRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetKeyPairRequest = exports.GetKeyPairRequest || (exports.GetKeyPairRequest = {}));
var GetKeyPairResult;
(function (GetKeyPairResult) {
    /**
     * @internal
     */
    GetKeyPairResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetKeyPairResult = exports.GetKeyPairResult || (exports.GetKeyPairResult = {}));
var GetKeyPairsRequest;
(function (GetKeyPairsRequest) {
    /**
     * @internal
     */
    GetKeyPairsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetKeyPairsRequest = exports.GetKeyPairsRequest || (exports.GetKeyPairsRequest = {}));
var GetKeyPairsResult;
(function (GetKeyPairsResult) {
    /**
     * @internal
     */
    GetKeyPairsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetKeyPairsResult = exports.GetKeyPairsResult || (exports.GetKeyPairsResult = {}));
var GetLoadBalancerRequest;
(function (GetLoadBalancerRequest) {
    /**
     * @internal
     */
    GetLoadBalancerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoadBalancerRequest = exports.GetLoadBalancerRequest || (exports.GetLoadBalancerRequest = {}));
var LoadBalancerAttributeName;
(function (LoadBalancerAttributeName) {
    LoadBalancerAttributeName["HealthCheckPath"] = "HealthCheckPath";
    LoadBalancerAttributeName["SessionStickinessEnabled"] = "SessionStickinessEnabled";
    LoadBalancerAttributeName["SessionStickiness_LB_CookieDurationSeconds"] = "SessionStickiness_LB_CookieDurationSeconds";
})(LoadBalancerAttributeName = exports.LoadBalancerAttributeName || (exports.LoadBalancerAttributeName = {}));
var InstanceHealthState;
(function (InstanceHealthState) {
    InstanceHealthState["Draining"] = "draining";
    InstanceHealthState["Healthy"] = "healthy";
    InstanceHealthState["Initial"] = "initial";
    InstanceHealthState["Unavailable"] = "unavailable";
    InstanceHealthState["Unhealthy"] = "unhealthy";
    InstanceHealthState["Unused"] = "unused";
})(InstanceHealthState = exports.InstanceHealthState || (exports.InstanceHealthState = {}));
var InstanceHealthReason;
(function (InstanceHealthReason) {
    InstanceHealthReason["InstanceDeregistrationInProgress"] = "Instance.DeregistrationInProgress";
    InstanceHealthReason["InstanceFailedHealthChecks"] = "Instance.FailedHealthChecks";
    InstanceHealthReason["InstanceInvalidState"] = "Instance.InvalidState";
    InstanceHealthReason["InstanceIpUnusable"] = "Instance.IpUnusable";
    InstanceHealthReason["InstanceNotInUse"] = "Instance.NotInUse";
    InstanceHealthReason["InstanceNotRegistered"] = "Instance.NotRegistered";
    InstanceHealthReason["InstanceResponseCodeMismatch"] = "Instance.ResponseCodeMismatch";
    InstanceHealthReason["InstanceTimeout"] = "Instance.Timeout";
    InstanceHealthReason["LbInitialHealthChecking"] = "Lb.InitialHealthChecking";
    InstanceHealthReason["LbInternalError"] = "Lb.InternalError";
    InstanceHealthReason["LbRegistrationInProgress"] = "Lb.RegistrationInProgress";
})(InstanceHealthReason = exports.InstanceHealthReason || (exports.InstanceHealthReason = {}));
var InstanceHealthSummary;
(function (InstanceHealthSummary) {
    /**
     * @internal
     */
    InstanceHealthSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceHealthSummary = exports.InstanceHealthSummary || (exports.InstanceHealthSummary = {}));
var LoadBalancerProtocol;
(function (LoadBalancerProtocol) {
    LoadBalancerProtocol["HTTP"] = "HTTP";
    LoadBalancerProtocol["HTTP_HTTPS"] = "HTTP_HTTPS";
})(LoadBalancerProtocol = exports.LoadBalancerProtocol || (exports.LoadBalancerProtocol = {}));
var LoadBalancerState;
(function (LoadBalancerState) {
    LoadBalancerState["Active"] = "active";
    LoadBalancerState["ActiveImpaired"] = "active_impaired";
    LoadBalancerState["Failed"] = "failed";
    LoadBalancerState["Provisioning"] = "provisioning";
    LoadBalancerState["Unknown"] = "unknown";
})(LoadBalancerState = exports.LoadBalancerState || (exports.LoadBalancerState = {}));
var LoadBalancerTlsCertificateSummary;
(function (LoadBalancerTlsCertificateSummary) {
    /**
     * @internal
     */
    LoadBalancerTlsCertificateSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadBalancerTlsCertificateSummary = exports.LoadBalancerTlsCertificateSummary || (exports.LoadBalancerTlsCertificateSummary = {}));
var LoadBalancer;
(function (LoadBalancer) {
    /**
     * @internal
     */
    LoadBalancer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadBalancer = exports.LoadBalancer || (exports.LoadBalancer = {}));
var GetLoadBalancerResult;
(function (GetLoadBalancerResult) {
    /**
     * @internal
     */
    GetLoadBalancerResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoadBalancerResult = exports.GetLoadBalancerResult || (exports.GetLoadBalancerResult = {}));
var LoadBalancerMetricName;
(function (LoadBalancerMetricName) {
    LoadBalancerMetricName["ClientTLSNegotiationErrorCount"] = "ClientTLSNegotiationErrorCount";
    LoadBalancerMetricName["HTTPCode_Instance_2XX_Count"] = "HTTPCode_Instance_2XX_Count";
    LoadBalancerMetricName["HTTPCode_Instance_3XX_Count"] = "HTTPCode_Instance_3XX_Count";
    LoadBalancerMetricName["HTTPCode_Instance_4XX_Count"] = "HTTPCode_Instance_4XX_Count";
    LoadBalancerMetricName["HTTPCode_Instance_5XX_Count"] = "HTTPCode_Instance_5XX_Count";
    LoadBalancerMetricName["HTTPCode_LB_4XX_Count"] = "HTTPCode_LB_4XX_Count";
    LoadBalancerMetricName["HTTPCode_LB_5XX_Count"] = "HTTPCode_LB_5XX_Count";
    LoadBalancerMetricName["HealthyHostCount"] = "HealthyHostCount";
    LoadBalancerMetricName["InstanceResponseTime"] = "InstanceResponseTime";
    LoadBalancerMetricName["RejectedConnectionCount"] = "RejectedConnectionCount";
    LoadBalancerMetricName["RequestCount"] = "RequestCount";
    LoadBalancerMetricName["UnhealthyHostCount"] = "UnhealthyHostCount";
})(LoadBalancerMetricName = exports.LoadBalancerMetricName || (exports.LoadBalancerMetricName = {}));
var GetLoadBalancerMetricDataRequest;
(function (GetLoadBalancerMetricDataRequest) {
    /**
     * @internal
     */
    GetLoadBalancerMetricDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoadBalancerMetricDataRequest = exports.GetLoadBalancerMetricDataRequest || (exports.GetLoadBalancerMetricDataRequest = {}));
var GetLoadBalancerMetricDataResult;
(function (GetLoadBalancerMetricDataResult) {
    /**
     * @internal
     */
    GetLoadBalancerMetricDataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoadBalancerMetricDataResult = exports.GetLoadBalancerMetricDataResult || (exports.GetLoadBalancerMetricDataResult = {}));
var GetLoadBalancersRequest;
(function (GetLoadBalancersRequest) {
    /**
     * @internal
     */
    GetLoadBalancersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoadBalancersRequest = exports.GetLoadBalancersRequest || (exports.GetLoadBalancersRequest = {}));
var GetLoadBalancersResult;
(function (GetLoadBalancersResult) {
    /**
     * @internal
     */
    GetLoadBalancersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoadBalancersResult = exports.GetLoadBalancersResult || (exports.GetLoadBalancersResult = {}));
var GetLoadBalancerTlsCertificatesRequest;
(function (GetLoadBalancerTlsCertificatesRequest) {
    /**
     * @internal
     */
    GetLoadBalancerTlsCertificatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoadBalancerTlsCertificatesRequest = exports.GetLoadBalancerTlsCertificatesRequest || (exports.GetLoadBalancerTlsCertificatesRequest = {}));
var LoadBalancerTlsCertificateDomainStatus;
(function (LoadBalancerTlsCertificateDomainStatus) {
    LoadBalancerTlsCertificateDomainStatus["Failed"] = "FAILED";
    LoadBalancerTlsCertificateDomainStatus["PendingValidation"] = "PENDING_VALIDATION";
    LoadBalancerTlsCertificateDomainStatus["Success"] = "SUCCESS";
})(LoadBalancerTlsCertificateDomainStatus = exports.LoadBalancerTlsCertificateDomainStatus || (exports.LoadBalancerTlsCertificateDomainStatus = {}));
var LoadBalancerTlsCertificateDomainValidationRecord;
(function (LoadBalancerTlsCertificateDomainValidationRecord) {
    /**
     * @internal
     */
    LoadBalancerTlsCertificateDomainValidationRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadBalancerTlsCertificateDomainValidationRecord = exports.LoadBalancerTlsCertificateDomainValidationRecord || (exports.LoadBalancerTlsCertificateDomainValidationRecord = {}));
var LoadBalancerTlsCertificateFailureReason;
(function (LoadBalancerTlsCertificateFailureReason) {
    LoadBalancerTlsCertificateFailureReason["AdditionalVerificationRequired"] = "ADDITIONAL_VERIFICATION_REQUIRED";
    LoadBalancerTlsCertificateFailureReason["DomainNotAllowed"] = "DOMAIN_NOT_ALLOWED";
    LoadBalancerTlsCertificateFailureReason["InvalidPublicDomain"] = "INVALID_PUBLIC_DOMAIN";
    LoadBalancerTlsCertificateFailureReason["NoAvailableContacts"] = "NO_AVAILABLE_CONTACTS";
    LoadBalancerTlsCertificateFailureReason["Other"] = "OTHER";
})(LoadBalancerTlsCertificateFailureReason = exports.LoadBalancerTlsCertificateFailureReason || (exports.LoadBalancerTlsCertificateFailureReason = {}));
var LoadBalancerTlsCertificateDomainValidationOption;
(function (LoadBalancerTlsCertificateDomainValidationOption) {
    /**
     * @internal
     */
    LoadBalancerTlsCertificateDomainValidationOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadBalancerTlsCertificateDomainValidationOption = exports.LoadBalancerTlsCertificateDomainValidationOption || (exports.LoadBalancerTlsCertificateDomainValidationOption = {}));
var LoadBalancerTlsCertificateRenewalStatus;
(function (LoadBalancerTlsCertificateRenewalStatus) {
    LoadBalancerTlsCertificateRenewalStatus["Failed"] = "FAILED";
    LoadBalancerTlsCertificateRenewalStatus["PendingAutoRenewal"] = "PENDING_AUTO_RENEWAL";
    LoadBalancerTlsCertificateRenewalStatus["PendingValidation"] = "PENDING_VALIDATION";
    LoadBalancerTlsCertificateRenewalStatus["Success"] = "SUCCESS";
})(LoadBalancerTlsCertificateRenewalStatus = exports.LoadBalancerTlsCertificateRenewalStatus || (exports.LoadBalancerTlsCertificateRenewalStatus = {}));
var LoadBalancerTlsCertificateRenewalSummary;
(function (LoadBalancerTlsCertificateRenewalSummary) {
    /**
     * @internal
     */
    LoadBalancerTlsCertificateRenewalSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadBalancerTlsCertificateRenewalSummary = exports.LoadBalancerTlsCertificateRenewalSummary || (exports.LoadBalancerTlsCertificateRenewalSummary = {}));
var LoadBalancerTlsCertificateRevocationReason;
(function (LoadBalancerTlsCertificateRevocationReason) {
    LoadBalancerTlsCertificateRevocationReason["AACompromise"] = "A_A_COMPROMISE";
    LoadBalancerTlsCertificateRevocationReason["AffiliationChanged"] = "AFFILIATION_CHANGED";
    LoadBalancerTlsCertificateRevocationReason["CaCompromise"] = "CA_COMPROMISE";
    LoadBalancerTlsCertificateRevocationReason["CertificateHold"] = "CERTIFICATE_HOLD";
    LoadBalancerTlsCertificateRevocationReason["CessationOfOperation"] = "CESSATION_OF_OPERATION";
    LoadBalancerTlsCertificateRevocationReason["KeyCompromise"] = "KEY_COMPROMISE";
    LoadBalancerTlsCertificateRevocationReason["PrivilegeWithdrawn"] = "PRIVILEGE_WITHDRAWN";
    LoadBalancerTlsCertificateRevocationReason["RemoveFromCrl"] = "REMOVE_FROM_CRL";
    LoadBalancerTlsCertificateRevocationReason["Superceded"] = "SUPERCEDED";
    LoadBalancerTlsCertificateRevocationReason["Unspecified"] = "UNSPECIFIED";
})(LoadBalancerTlsCertificateRevocationReason = exports.LoadBalancerTlsCertificateRevocationReason || (exports.LoadBalancerTlsCertificateRevocationReason = {}));
var LoadBalancerTlsCertificateStatus;
(function (LoadBalancerTlsCertificateStatus) {
    LoadBalancerTlsCertificateStatus["Expired"] = "EXPIRED";
    LoadBalancerTlsCertificateStatus["Failed"] = "FAILED";
    LoadBalancerTlsCertificateStatus["Inactive"] = "INACTIVE";
    LoadBalancerTlsCertificateStatus["Issued"] = "ISSUED";
    LoadBalancerTlsCertificateStatus["PendingValidation"] = "PENDING_VALIDATION";
    LoadBalancerTlsCertificateStatus["Revoked"] = "REVOKED";
    LoadBalancerTlsCertificateStatus["Unknown"] = "UNKNOWN";
    LoadBalancerTlsCertificateStatus["ValidationTimedOut"] = "VALIDATION_TIMED_OUT";
})(LoadBalancerTlsCertificateStatus = exports.LoadBalancerTlsCertificateStatus || (exports.LoadBalancerTlsCertificateStatus = {}));
var LoadBalancerTlsCertificate;
(function (LoadBalancerTlsCertificate) {
    /**
     * @internal
     */
    LoadBalancerTlsCertificate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadBalancerTlsCertificate = exports.LoadBalancerTlsCertificate || (exports.LoadBalancerTlsCertificate = {}));
var GetLoadBalancerTlsCertificatesResult;
(function (GetLoadBalancerTlsCertificatesResult) {
    /**
     * @internal
     */
    GetLoadBalancerTlsCertificatesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoadBalancerTlsCertificatesResult = exports.GetLoadBalancerTlsCertificatesResult || (exports.GetLoadBalancerTlsCertificatesResult = {}));
var GetOperationRequest;
(function (GetOperationRequest) {
    /**
     * @internal
     */
    GetOperationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOperationRequest = exports.GetOperationRequest || (exports.GetOperationRequest = {}));
var GetOperationResult;
(function (GetOperationResult) {
    /**
     * @internal
     */
    GetOperationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOperationResult = exports.GetOperationResult || (exports.GetOperationResult = {}));
var GetOperationsRequest;
(function (GetOperationsRequest) {
    /**
     * @internal
     */
    GetOperationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOperationsRequest = exports.GetOperationsRequest || (exports.GetOperationsRequest = {}));
var GetOperationsResult;
(function (GetOperationsResult) {
    /**
     * @internal
     */
    GetOperationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOperationsResult = exports.GetOperationsResult || (exports.GetOperationsResult = {}));
var GetOperationsForResourceRequest;
(function (GetOperationsForResourceRequest) {
    /**
     * @internal
     */
    GetOperationsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOperationsForResourceRequest = exports.GetOperationsForResourceRequest || (exports.GetOperationsForResourceRequest = {}));
var GetOperationsForResourceResult;
(function (GetOperationsForResourceResult) {
    /**
     * @internal
     */
    GetOperationsForResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetOperationsForResourceResult = exports.GetOperationsForResourceResult || (exports.GetOperationsForResourceResult = {}));
var GetRegionsRequest;
(function (GetRegionsRequest) {
    /**
     * @internal
     */
    GetRegionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegionsRequest = exports.GetRegionsRequest || (exports.GetRegionsRequest = {}));
var Region;
(function (Region) {
    /**
     * @internal
     */
    Region.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Region = exports.Region || (exports.Region = {}));
var GetRegionsResult;
(function (GetRegionsResult) {
    /**
     * @internal
     */
    GetRegionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegionsResult = exports.GetRegionsResult || (exports.GetRegionsResult = {}));
var GetRelationalDatabaseRequest;
(function (GetRelationalDatabaseRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseRequest = exports.GetRelationalDatabaseRequest || (exports.GetRelationalDatabaseRequest = {}));
var RelationalDatabaseHardware;
(function (RelationalDatabaseHardware) {
    /**
     * @internal
     */
    RelationalDatabaseHardware.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RelationalDatabaseHardware = exports.RelationalDatabaseHardware || (exports.RelationalDatabaseHardware = {}));
var RelationalDatabaseEndpoint;
(function (RelationalDatabaseEndpoint) {
    /**
     * @internal
     */
    RelationalDatabaseEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RelationalDatabaseEndpoint = exports.RelationalDatabaseEndpoint || (exports.RelationalDatabaseEndpoint = {}));
var PendingMaintenanceAction;
(function (PendingMaintenanceAction) {
    /**
     * @internal
     */
    PendingMaintenanceAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingMaintenanceAction = exports.PendingMaintenanceAction || (exports.PendingMaintenanceAction = {}));
var PendingModifiedRelationalDatabaseValues;
(function (PendingModifiedRelationalDatabaseValues) {
    /**
     * @internal
     */
    PendingModifiedRelationalDatabaseValues.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PendingModifiedRelationalDatabaseValues = exports.PendingModifiedRelationalDatabaseValues || (exports.PendingModifiedRelationalDatabaseValues = {}));
var RelationalDatabase;
(function (RelationalDatabase) {
    /**
     * @internal
     */
    RelationalDatabase.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RelationalDatabase = exports.RelationalDatabase || (exports.RelationalDatabase = {}));
var GetRelationalDatabaseResult;
(function (GetRelationalDatabaseResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseResult = exports.GetRelationalDatabaseResult || (exports.GetRelationalDatabaseResult = {}));
var GetRelationalDatabaseBlueprintsRequest;
(function (GetRelationalDatabaseBlueprintsRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseBlueprintsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseBlueprintsRequest = exports.GetRelationalDatabaseBlueprintsRequest || (exports.GetRelationalDatabaseBlueprintsRequest = {}));
var RelationalDatabaseEngine;
(function (RelationalDatabaseEngine) {
    RelationalDatabaseEngine["MYSQL"] = "mysql";
})(RelationalDatabaseEngine = exports.RelationalDatabaseEngine || (exports.RelationalDatabaseEngine = {}));
var RelationalDatabaseBlueprint;
(function (RelationalDatabaseBlueprint) {
    /**
     * @internal
     */
    RelationalDatabaseBlueprint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RelationalDatabaseBlueprint = exports.RelationalDatabaseBlueprint || (exports.RelationalDatabaseBlueprint = {}));
var GetRelationalDatabaseBlueprintsResult;
(function (GetRelationalDatabaseBlueprintsResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseBlueprintsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseBlueprintsResult = exports.GetRelationalDatabaseBlueprintsResult || (exports.GetRelationalDatabaseBlueprintsResult = {}));
var GetRelationalDatabaseBundlesRequest;
(function (GetRelationalDatabaseBundlesRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseBundlesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseBundlesRequest = exports.GetRelationalDatabaseBundlesRequest || (exports.GetRelationalDatabaseBundlesRequest = {}));
var RelationalDatabaseBundle;
(function (RelationalDatabaseBundle) {
    /**
     * @internal
     */
    RelationalDatabaseBundle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RelationalDatabaseBundle = exports.RelationalDatabaseBundle || (exports.RelationalDatabaseBundle = {}));
var GetRelationalDatabaseBundlesResult;
(function (GetRelationalDatabaseBundlesResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseBundlesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseBundlesResult = exports.GetRelationalDatabaseBundlesResult || (exports.GetRelationalDatabaseBundlesResult = {}));
var GetRelationalDatabaseEventsRequest;
(function (GetRelationalDatabaseEventsRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseEventsRequest = exports.GetRelationalDatabaseEventsRequest || (exports.GetRelationalDatabaseEventsRequest = {}));
var RelationalDatabaseEvent;
(function (RelationalDatabaseEvent) {
    /**
     * @internal
     */
    RelationalDatabaseEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RelationalDatabaseEvent = exports.RelationalDatabaseEvent || (exports.RelationalDatabaseEvent = {}));
var GetRelationalDatabaseEventsResult;
(function (GetRelationalDatabaseEventsResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseEventsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseEventsResult = exports.GetRelationalDatabaseEventsResult || (exports.GetRelationalDatabaseEventsResult = {}));
var GetRelationalDatabaseLogEventsRequest;
(function (GetRelationalDatabaseLogEventsRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseLogEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseLogEventsRequest = exports.GetRelationalDatabaseLogEventsRequest || (exports.GetRelationalDatabaseLogEventsRequest = {}));
var LogEvent;
(function (LogEvent) {
    /**
     * @internal
     */
    LogEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogEvent = exports.LogEvent || (exports.LogEvent = {}));
var GetRelationalDatabaseLogEventsResult;
(function (GetRelationalDatabaseLogEventsResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseLogEventsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseLogEventsResult = exports.GetRelationalDatabaseLogEventsResult || (exports.GetRelationalDatabaseLogEventsResult = {}));
var GetRelationalDatabaseLogStreamsRequest;
(function (GetRelationalDatabaseLogStreamsRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseLogStreamsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseLogStreamsRequest = exports.GetRelationalDatabaseLogStreamsRequest || (exports.GetRelationalDatabaseLogStreamsRequest = {}));
var GetRelationalDatabaseLogStreamsResult;
(function (GetRelationalDatabaseLogStreamsResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseLogStreamsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseLogStreamsResult = exports.GetRelationalDatabaseLogStreamsResult || (exports.GetRelationalDatabaseLogStreamsResult = {}));
var RelationalDatabasePasswordVersion;
(function (RelationalDatabasePasswordVersion) {
    RelationalDatabasePasswordVersion["CURRENT"] = "CURRENT";
    RelationalDatabasePasswordVersion["PENDING"] = "PENDING";
    RelationalDatabasePasswordVersion["PREVIOUS"] = "PREVIOUS";
})(RelationalDatabasePasswordVersion = exports.RelationalDatabasePasswordVersion || (exports.RelationalDatabasePasswordVersion = {}));
var GetRelationalDatabaseMasterUserPasswordRequest;
(function (GetRelationalDatabaseMasterUserPasswordRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseMasterUserPasswordRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseMasterUserPasswordRequest = exports.GetRelationalDatabaseMasterUserPasswordRequest || (exports.GetRelationalDatabaseMasterUserPasswordRequest = {}));
var GetRelationalDatabaseMasterUserPasswordResult;
(function (GetRelationalDatabaseMasterUserPasswordResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseMasterUserPasswordResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.masterUserPassword && { masterUserPassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetRelationalDatabaseMasterUserPasswordResult = exports.GetRelationalDatabaseMasterUserPasswordResult || (exports.GetRelationalDatabaseMasterUserPasswordResult = {}));
var RelationalDatabaseMetricName;
(function (RelationalDatabaseMetricName) {
    RelationalDatabaseMetricName["CPUUtilization"] = "CPUUtilization";
    RelationalDatabaseMetricName["DatabaseConnections"] = "DatabaseConnections";
    RelationalDatabaseMetricName["DiskQueueDepth"] = "DiskQueueDepth";
    RelationalDatabaseMetricName["FreeStorageSpace"] = "FreeStorageSpace";
    RelationalDatabaseMetricName["NetworkReceiveThroughput"] = "NetworkReceiveThroughput";
    RelationalDatabaseMetricName["NetworkTransmitThroughput"] = "NetworkTransmitThroughput";
})(RelationalDatabaseMetricName = exports.RelationalDatabaseMetricName || (exports.RelationalDatabaseMetricName = {}));
var GetRelationalDatabaseMetricDataRequest;
(function (GetRelationalDatabaseMetricDataRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseMetricDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseMetricDataRequest = exports.GetRelationalDatabaseMetricDataRequest || (exports.GetRelationalDatabaseMetricDataRequest = {}));
var GetRelationalDatabaseMetricDataResult;
(function (GetRelationalDatabaseMetricDataResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseMetricDataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseMetricDataResult = exports.GetRelationalDatabaseMetricDataResult || (exports.GetRelationalDatabaseMetricDataResult = {}));
var GetRelationalDatabaseParametersRequest;
(function (GetRelationalDatabaseParametersRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseParametersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseParametersRequest = exports.GetRelationalDatabaseParametersRequest || (exports.GetRelationalDatabaseParametersRequest = {}));
var RelationalDatabaseParameter;
(function (RelationalDatabaseParameter) {
    /**
     * @internal
     */
    RelationalDatabaseParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RelationalDatabaseParameter = exports.RelationalDatabaseParameter || (exports.RelationalDatabaseParameter = {}));
var GetRelationalDatabaseParametersResult;
(function (GetRelationalDatabaseParametersResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseParametersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseParametersResult = exports.GetRelationalDatabaseParametersResult || (exports.GetRelationalDatabaseParametersResult = {}));
var GetRelationalDatabasesRequest;
(function (GetRelationalDatabasesRequest) {
    /**
     * @internal
     */
    GetRelationalDatabasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabasesRequest = exports.GetRelationalDatabasesRequest || (exports.GetRelationalDatabasesRequest = {}));
var GetRelationalDatabasesResult;
(function (GetRelationalDatabasesResult) {
    /**
     * @internal
     */
    GetRelationalDatabasesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabasesResult = exports.GetRelationalDatabasesResult || (exports.GetRelationalDatabasesResult = {}));
var GetRelationalDatabaseSnapshotRequest;
(function (GetRelationalDatabaseSnapshotRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseSnapshotRequest = exports.GetRelationalDatabaseSnapshotRequest || (exports.GetRelationalDatabaseSnapshotRequest = {}));
var RelationalDatabaseSnapshot;
(function (RelationalDatabaseSnapshot) {
    /**
     * @internal
     */
    RelationalDatabaseSnapshot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RelationalDatabaseSnapshot = exports.RelationalDatabaseSnapshot || (exports.RelationalDatabaseSnapshot = {}));
var GetRelationalDatabaseSnapshotResult;
(function (GetRelationalDatabaseSnapshotResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseSnapshotResult = exports.GetRelationalDatabaseSnapshotResult || (exports.GetRelationalDatabaseSnapshotResult = {}));
var GetRelationalDatabaseSnapshotsRequest;
(function (GetRelationalDatabaseSnapshotsRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseSnapshotsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseSnapshotsRequest = exports.GetRelationalDatabaseSnapshotsRequest || (exports.GetRelationalDatabaseSnapshotsRequest = {}));
var GetRelationalDatabaseSnapshotsResult;
(function (GetRelationalDatabaseSnapshotsResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseSnapshotsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRelationalDatabaseSnapshotsResult = exports.GetRelationalDatabaseSnapshotsResult || (exports.GetRelationalDatabaseSnapshotsResult = {}));
var GetStaticIpRequest;
(function (GetStaticIpRequest) {
    /**
     * @internal
     */
    GetStaticIpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStaticIpRequest = exports.GetStaticIpRequest || (exports.GetStaticIpRequest = {}));
var StaticIp;
(function (StaticIp) {
    /**
     * @internal
     */
    StaticIp.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StaticIp = exports.StaticIp || (exports.StaticIp = {}));
var GetStaticIpResult;
(function (GetStaticIpResult) {
    /**
     * @internal
     */
    GetStaticIpResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStaticIpResult = exports.GetStaticIpResult || (exports.GetStaticIpResult = {}));
var GetStaticIpsRequest;
(function (GetStaticIpsRequest) {
    /**
     * @internal
     */
    GetStaticIpsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStaticIpsRequest = exports.GetStaticIpsRequest || (exports.GetStaticIpsRequest = {}));
var GetStaticIpsResult;
(function (GetStaticIpsResult) {
    /**
     * @internal
     */
    GetStaticIpsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStaticIpsResult = exports.GetStaticIpsResult || (exports.GetStaticIpsResult = {}));
var ImportKeyPairRequest;
(function (ImportKeyPairRequest) {
    /**
     * @internal
     */
    ImportKeyPairRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportKeyPairRequest = exports.ImportKeyPairRequest || (exports.ImportKeyPairRequest = {}));
var ImportKeyPairResult;
(function (ImportKeyPairResult) {
    /**
     * @internal
     */
    ImportKeyPairResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportKeyPairResult = exports.ImportKeyPairResult || (exports.ImportKeyPairResult = {}));
var IsVpcPeeredRequest;
(function (IsVpcPeeredRequest) {
    /**
     * @internal
     */
    IsVpcPeeredRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IsVpcPeeredRequest = exports.IsVpcPeeredRequest || (exports.IsVpcPeeredRequest = {}));
var IsVpcPeeredResult;
(function (IsVpcPeeredResult) {
    /**
     * @internal
     */
    IsVpcPeeredResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IsVpcPeeredResult = exports.IsVpcPeeredResult || (exports.IsVpcPeeredResult = {}));
var OpenInstancePublicPortsRequest;
(function (OpenInstancePublicPortsRequest) {
    /**
     * @internal
     */
    OpenInstancePublicPortsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpenInstancePublicPortsRequest = exports.OpenInstancePublicPortsRequest || (exports.OpenInstancePublicPortsRequest = {}));
var OpenInstancePublicPortsResult;
(function (OpenInstancePublicPortsResult) {
    /**
     * @internal
     */
    OpenInstancePublicPortsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpenInstancePublicPortsResult = exports.OpenInstancePublicPortsResult || (exports.OpenInstancePublicPortsResult = {}));
var PeerVpcRequest;
(function (PeerVpcRequest) {
    /**
     * @internal
     */
    PeerVpcRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PeerVpcRequest = exports.PeerVpcRequest || (exports.PeerVpcRequest = {}));
var PeerVpcResult;
(function (PeerVpcResult) {
    /**
     * @internal
     */
    PeerVpcResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PeerVpcResult = exports.PeerVpcResult || (exports.PeerVpcResult = {}));
var PutAlarmRequest;
(function (PutAlarmRequest) {
    /**
     * @internal
     */
    PutAlarmRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAlarmRequest = exports.PutAlarmRequest || (exports.PutAlarmRequest = {}));
var PutAlarmResult;
(function (PutAlarmResult) {
    /**
     * @internal
     */
    PutAlarmResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAlarmResult = exports.PutAlarmResult || (exports.PutAlarmResult = {}));
var PutInstancePublicPortsRequest;
(function (PutInstancePublicPortsRequest) {
    /**
     * @internal
     */
    PutInstancePublicPortsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutInstancePublicPortsRequest = exports.PutInstancePublicPortsRequest || (exports.PutInstancePublicPortsRequest = {}));
var PutInstancePublicPortsResult;
(function (PutInstancePublicPortsResult) {
    /**
     * @internal
     */
    PutInstancePublicPortsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutInstancePublicPortsResult = exports.PutInstancePublicPortsResult || (exports.PutInstancePublicPortsResult = {}));
var RebootInstanceRequest;
(function (RebootInstanceRequest) {
    /**
     * @internal
     */
    RebootInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootInstanceRequest = exports.RebootInstanceRequest || (exports.RebootInstanceRequest = {}));
var RebootInstanceResult;
(function (RebootInstanceResult) {
    /**
     * @internal
     */
    RebootInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootInstanceResult = exports.RebootInstanceResult || (exports.RebootInstanceResult = {}));
var RebootRelationalDatabaseRequest;
(function (RebootRelationalDatabaseRequest) {
    /**
     * @internal
     */
    RebootRelationalDatabaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootRelationalDatabaseRequest = exports.RebootRelationalDatabaseRequest || (exports.RebootRelationalDatabaseRequest = {}));
var RebootRelationalDatabaseResult;
(function (RebootRelationalDatabaseResult) {
    /**
     * @internal
     */
    RebootRelationalDatabaseResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootRelationalDatabaseResult = exports.RebootRelationalDatabaseResult || (exports.RebootRelationalDatabaseResult = {}));
var RegisterContainerImageRequest;
(function (RegisterContainerImageRequest) {
    /**
     * @internal
     */
    RegisterContainerImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterContainerImageRequest = exports.RegisterContainerImageRequest || (exports.RegisterContainerImageRequest = {}));
var RegisterContainerImageResult;
(function (RegisterContainerImageResult) {
    /**
     * @internal
     */
    RegisterContainerImageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterContainerImageResult = exports.RegisterContainerImageResult || (exports.RegisterContainerImageResult = {}));
var ReleaseStaticIpRequest;
(function (ReleaseStaticIpRequest) {
    /**
     * @internal
     */
    ReleaseStaticIpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReleaseStaticIpRequest = exports.ReleaseStaticIpRequest || (exports.ReleaseStaticIpRequest = {}));
var ReleaseStaticIpResult;
(function (ReleaseStaticIpResult) {
    /**
     * @internal
     */
    ReleaseStaticIpResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReleaseStaticIpResult = exports.ReleaseStaticIpResult || (exports.ReleaseStaticIpResult = {}));
var ResetDistributionCacheRequest;
(function (ResetDistributionCacheRequest) {
    /**
     * @internal
     */
    ResetDistributionCacheRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetDistributionCacheRequest = exports.ResetDistributionCacheRequest || (exports.ResetDistributionCacheRequest = {}));
var ResetDistributionCacheResult;
(function (ResetDistributionCacheResult) {
    /**
     * @internal
     */
    ResetDistributionCacheResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetDistributionCacheResult = exports.ResetDistributionCacheResult || (exports.ResetDistributionCacheResult = {}));
var SendContactMethodVerificationRequest;
(function (SendContactMethodVerificationRequest) {
    /**
     * @internal
     */
    SendContactMethodVerificationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendContactMethodVerificationRequest = exports.SendContactMethodVerificationRequest || (exports.SendContactMethodVerificationRequest = {}));
var SendContactMethodVerificationResult;
(function (SendContactMethodVerificationResult) {
    /**
     * @internal
     */
    SendContactMethodVerificationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendContactMethodVerificationResult = exports.SendContactMethodVerificationResult || (exports.SendContactMethodVerificationResult = {}));
var SetIpAddressTypeRequest;
(function (SetIpAddressTypeRequest) {
    /**
     * @internal
     */
    SetIpAddressTypeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetIpAddressTypeRequest = exports.SetIpAddressTypeRequest || (exports.SetIpAddressTypeRequest = {}));
var SetIpAddressTypeResult;
(function (SetIpAddressTypeResult) {
    /**
     * @internal
     */
    SetIpAddressTypeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetIpAddressTypeResult = exports.SetIpAddressTypeResult || (exports.SetIpAddressTypeResult = {}));
var StartInstanceRequest;
(function (StartInstanceRequest) {
    /**
     * @internal
     */
    StartInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartInstanceRequest = exports.StartInstanceRequest || (exports.StartInstanceRequest = {}));
var StartInstanceResult;
(function (StartInstanceResult) {
    /**
     * @internal
     */
    StartInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartInstanceResult = exports.StartInstanceResult || (exports.StartInstanceResult = {}));
var StartRelationalDatabaseRequest;
(function (StartRelationalDatabaseRequest) {
    /**
     * @internal
     */
    StartRelationalDatabaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartRelationalDatabaseRequest = exports.StartRelationalDatabaseRequest || (exports.StartRelationalDatabaseRequest = {}));
var StartRelationalDatabaseResult;
(function (StartRelationalDatabaseResult) {
    /**
     * @internal
     */
    StartRelationalDatabaseResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartRelationalDatabaseResult = exports.StartRelationalDatabaseResult || (exports.StartRelationalDatabaseResult = {}));
var StopInstanceRequest;
(function (StopInstanceRequest) {
    /**
     * @internal
     */
    StopInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopInstanceRequest = exports.StopInstanceRequest || (exports.StopInstanceRequest = {}));
var StopInstanceResult;
(function (StopInstanceResult) {
    /**
     * @internal
     */
    StopInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopInstanceResult = exports.StopInstanceResult || (exports.StopInstanceResult = {}));
var StopRelationalDatabaseRequest;
(function (StopRelationalDatabaseRequest) {
    /**
     * @internal
     */
    StopRelationalDatabaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopRelationalDatabaseRequest = exports.StopRelationalDatabaseRequest || (exports.StopRelationalDatabaseRequest = {}));
var StopRelationalDatabaseResult;
(function (StopRelationalDatabaseResult) {
    /**
     * @internal
     */
    StopRelationalDatabaseResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopRelationalDatabaseResult = exports.StopRelationalDatabaseResult || (exports.StopRelationalDatabaseResult = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResult;
(function (TagResourceResult) {
    /**
     * @internal
     */
    TagResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResult = exports.TagResourceResult || (exports.TagResourceResult = {}));
var TestAlarmRequest;
(function (TestAlarmRequest) {
    /**
     * @internal
     */
    TestAlarmRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestAlarmRequest = exports.TestAlarmRequest || (exports.TestAlarmRequest = {}));
var TestAlarmResult;
(function (TestAlarmResult) {
    /**
     * @internal
     */
    TestAlarmResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestAlarmResult = exports.TestAlarmResult || (exports.TestAlarmResult = {}));
var UnpeerVpcRequest;
(function (UnpeerVpcRequest) {
    /**
     * @internal
     */
    UnpeerVpcRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnpeerVpcRequest = exports.UnpeerVpcRequest || (exports.UnpeerVpcRequest = {}));
var UnpeerVpcResult;
(function (UnpeerVpcResult) {
    /**
     * @internal
     */
    UnpeerVpcResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnpeerVpcResult = exports.UnpeerVpcResult || (exports.UnpeerVpcResult = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResult;
(function (UntagResourceResult) {
    /**
     * @internal
     */
    UntagResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResult = exports.UntagResourceResult || (exports.UntagResourceResult = {}));
var UpdateContainerServiceRequest;
(function (UpdateContainerServiceRequest) {
    /**
     * @internal
     */
    UpdateContainerServiceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContainerServiceRequest = exports.UpdateContainerServiceRequest || (exports.UpdateContainerServiceRequest = {}));
var UpdateContainerServiceResult;
(function (UpdateContainerServiceResult) {
    /**
     * @internal
     */
    UpdateContainerServiceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContainerServiceResult = exports.UpdateContainerServiceResult || (exports.UpdateContainerServiceResult = {}));
var UpdateDistributionRequest;
(function (UpdateDistributionRequest) {
    /**
     * @internal
     */
    UpdateDistributionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDistributionRequest = exports.UpdateDistributionRequest || (exports.UpdateDistributionRequest = {}));
var UpdateDistributionResult;
(function (UpdateDistributionResult) {
    /**
     * @internal
     */
    UpdateDistributionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDistributionResult = exports.UpdateDistributionResult || (exports.UpdateDistributionResult = {}));
var UpdateDistributionBundleRequest;
(function (UpdateDistributionBundleRequest) {
    /**
     * @internal
     */
    UpdateDistributionBundleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDistributionBundleRequest = exports.UpdateDistributionBundleRequest || (exports.UpdateDistributionBundleRequest = {}));
var UpdateDistributionBundleResult;
(function (UpdateDistributionBundleResult) {
    /**
     * @internal
     */
    UpdateDistributionBundleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDistributionBundleResult = exports.UpdateDistributionBundleResult || (exports.UpdateDistributionBundleResult = {}));
var UpdateDomainEntryRequest;
(function (UpdateDomainEntryRequest) {
    /**
     * @internal
     */
    UpdateDomainEntryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDomainEntryRequest = exports.UpdateDomainEntryRequest || (exports.UpdateDomainEntryRequest = {}));
var UpdateDomainEntryResult;
(function (UpdateDomainEntryResult) {
    /**
     * @internal
     */
    UpdateDomainEntryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDomainEntryResult = exports.UpdateDomainEntryResult || (exports.UpdateDomainEntryResult = {}));
var UpdateLoadBalancerAttributeRequest;
(function (UpdateLoadBalancerAttributeRequest) {
    /**
     * @internal
     */
    UpdateLoadBalancerAttributeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLoadBalancerAttributeRequest = exports.UpdateLoadBalancerAttributeRequest || (exports.UpdateLoadBalancerAttributeRequest = {}));
var UpdateLoadBalancerAttributeResult;
(function (UpdateLoadBalancerAttributeResult) {
    /**
     * @internal
     */
    UpdateLoadBalancerAttributeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLoadBalancerAttributeResult = exports.UpdateLoadBalancerAttributeResult || (exports.UpdateLoadBalancerAttributeResult = {}));
var UpdateRelationalDatabaseRequest;
(function (UpdateRelationalDatabaseRequest) {
    /**
     * @internal
     */
    UpdateRelationalDatabaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.masterUserPassword && { masterUserPassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateRelationalDatabaseRequest = exports.UpdateRelationalDatabaseRequest || (exports.UpdateRelationalDatabaseRequest = {}));
var UpdateRelationalDatabaseResult;
(function (UpdateRelationalDatabaseResult) {
    /**
     * @internal
     */
    UpdateRelationalDatabaseResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRelationalDatabaseResult = exports.UpdateRelationalDatabaseResult || (exports.UpdateRelationalDatabaseResult = {}));
var UpdateRelationalDatabaseParametersRequest;
(function (UpdateRelationalDatabaseParametersRequest) {
    /**
     * @internal
     */
    UpdateRelationalDatabaseParametersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRelationalDatabaseParametersRequest = exports.UpdateRelationalDatabaseParametersRequest || (exports.UpdateRelationalDatabaseParametersRequest = {}));
var UpdateRelationalDatabaseParametersResult;
(function (UpdateRelationalDatabaseParametersResult) {
    /**
     * @internal
     */
    UpdateRelationalDatabaseParametersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRelationalDatabaseParametersResult = exports.UpdateRelationalDatabaseParametersResult || (exports.UpdateRelationalDatabaseParametersResult = {}));
//# sourceMappingURL=models_1.js.map