import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var GetKeyPairRequest;
(function (GetKeyPairRequest) {
    /**
     * @internal
     */
    GetKeyPairRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetKeyPairRequest || (GetKeyPairRequest = {}));
export var GetKeyPairResult;
(function (GetKeyPairResult) {
    /**
     * @internal
     */
    GetKeyPairResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetKeyPairResult || (GetKeyPairResult = {}));
export var GetKeyPairsRequest;
(function (GetKeyPairsRequest) {
    /**
     * @internal
     */
    GetKeyPairsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetKeyPairsRequest || (GetKeyPairsRequest = {}));
export var GetKeyPairsResult;
(function (GetKeyPairsResult) {
    /**
     * @internal
     */
    GetKeyPairsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetKeyPairsResult || (GetKeyPairsResult = {}));
export var GetLoadBalancerRequest;
(function (GetLoadBalancerRequest) {
    /**
     * @internal
     */
    GetLoadBalancerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLoadBalancerRequest || (GetLoadBalancerRequest = {}));
export var LoadBalancerAttributeName;
(function (LoadBalancerAttributeName) {
    LoadBalancerAttributeName["HealthCheckPath"] = "HealthCheckPath";
    LoadBalancerAttributeName["SessionStickinessEnabled"] = "SessionStickinessEnabled";
    LoadBalancerAttributeName["SessionStickiness_LB_CookieDurationSeconds"] = "SessionStickiness_LB_CookieDurationSeconds";
})(LoadBalancerAttributeName || (LoadBalancerAttributeName = {}));
export var InstanceHealthState;
(function (InstanceHealthState) {
    InstanceHealthState["Draining"] = "draining";
    InstanceHealthState["Healthy"] = "healthy";
    InstanceHealthState["Initial"] = "initial";
    InstanceHealthState["Unavailable"] = "unavailable";
    InstanceHealthState["Unhealthy"] = "unhealthy";
    InstanceHealthState["Unused"] = "unused";
})(InstanceHealthState || (InstanceHealthState = {}));
export var InstanceHealthReason;
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
})(InstanceHealthReason || (InstanceHealthReason = {}));
export var InstanceHealthSummary;
(function (InstanceHealthSummary) {
    /**
     * @internal
     */
    InstanceHealthSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceHealthSummary || (InstanceHealthSummary = {}));
export var LoadBalancerProtocol;
(function (LoadBalancerProtocol) {
    LoadBalancerProtocol["HTTP"] = "HTTP";
    LoadBalancerProtocol["HTTP_HTTPS"] = "HTTP_HTTPS";
})(LoadBalancerProtocol || (LoadBalancerProtocol = {}));
export var LoadBalancerState;
(function (LoadBalancerState) {
    LoadBalancerState["Active"] = "active";
    LoadBalancerState["ActiveImpaired"] = "active_impaired";
    LoadBalancerState["Failed"] = "failed";
    LoadBalancerState["Provisioning"] = "provisioning";
    LoadBalancerState["Unknown"] = "unknown";
})(LoadBalancerState || (LoadBalancerState = {}));
export var LoadBalancerTlsCertificateSummary;
(function (LoadBalancerTlsCertificateSummary) {
    /**
     * @internal
     */
    LoadBalancerTlsCertificateSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoadBalancerTlsCertificateSummary || (LoadBalancerTlsCertificateSummary = {}));
export var LoadBalancer;
(function (LoadBalancer) {
    /**
     * @internal
     */
    LoadBalancer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoadBalancer || (LoadBalancer = {}));
export var GetLoadBalancerResult;
(function (GetLoadBalancerResult) {
    /**
     * @internal
     */
    GetLoadBalancerResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLoadBalancerResult || (GetLoadBalancerResult = {}));
export var LoadBalancerMetricName;
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
})(LoadBalancerMetricName || (LoadBalancerMetricName = {}));
export var GetLoadBalancerMetricDataRequest;
(function (GetLoadBalancerMetricDataRequest) {
    /**
     * @internal
     */
    GetLoadBalancerMetricDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLoadBalancerMetricDataRequest || (GetLoadBalancerMetricDataRequest = {}));
export var GetLoadBalancerMetricDataResult;
(function (GetLoadBalancerMetricDataResult) {
    /**
     * @internal
     */
    GetLoadBalancerMetricDataResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLoadBalancerMetricDataResult || (GetLoadBalancerMetricDataResult = {}));
export var GetLoadBalancersRequest;
(function (GetLoadBalancersRequest) {
    /**
     * @internal
     */
    GetLoadBalancersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLoadBalancersRequest || (GetLoadBalancersRequest = {}));
export var GetLoadBalancersResult;
(function (GetLoadBalancersResult) {
    /**
     * @internal
     */
    GetLoadBalancersResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLoadBalancersResult || (GetLoadBalancersResult = {}));
export var GetLoadBalancerTlsCertificatesRequest;
(function (GetLoadBalancerTlsCertificatesRequest) {
    /**
     * @internal
     */
    GetLoadBalancerTlsCertificatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLoadBalancerTlsCertificatesRequest || (GetLoadBalancerTlsCertificatesRequest = {}));
export var LoadBalancerTlsCertificateDomainStatus;
(function (LoadBalancerTlsCertificateDomainStatus) {
    LoadBalancerTlsCertificateDomainStatus["Failed"] = "FAILED";
    LoadBalancerTlsCertificateDomainStatus["PendingValidation"] = "PENDING_VALIDATION";
    LoadBalancerTlsCertificateDomainStatus["Success"] = "SUCCESS";
})(LoadBalancerTlsCertificateDomainStatus || (LoadBalancerTlsCertificateDomainStatus = {}));
export var LoadBalancerTlsCertificateDomainValidationRecord;
(function (LoadBalancerTlsCertificateDomainValidationRecord) {
    /**
     * @internal
     */
    LoadBalancerTlsCertificateDomainValidationRecord.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoadBalancerTlsCertificateDomainValidationRecord || (LoadBalancerTlsCertificateDomainValidationRecord = {}));
export var LoadBalancerTlsCertificateFailureReason;
(function (LoadBalancerTlsCertificateFailureReason) {
    LoadBalancerTlsCertificateFailureReason["AdditionalVerificationRequired"] = "ADDITIONAL_VERIFICATION_REQUIRED";
    LoadBalancerTlsCertificateFailureReason["DomainNotAllowed"] = "DOMAIN_NOT_ALLOWED";
    LoadBalancerTlsCertificateFailureReason["InvalidPublicDomain"] = "INVALID_PUBLIC_DOMAIN";
    LoadBalancerTlsCertificateFailureReason["NoAvailableContacts"] = "NO_AVAILABLE_CONTACTS";
    LoadBalancerTlsCertificateFailureReason["Other"] = "OTHER";
})(LoadBalancerTlsCertificateFailureReason || (LoadBalancerTlsCertificateFailureReason = {}));
export var LoadBalancerTlsCertificateDomainValidationOption;
(function (LoadBalancerTlsCertificateDomainValidationOption) {
    /**
     * @internal
     */
    LoadBalancerTlsCertificateDomainValidationOption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoadBalancerTlsCertificateDomainValidationOption || (LoadBalancerTlsCertificateDomainValidationOption = {}));
export var LoadBalancerTlsCertificateRenewalStatus;
(function (LoadBalancerTlsCertificateRenewalStatus) {
    LoadBalancerTlsCertificateRenewalStatus["Failed"] = "FAILED";
    LoadBalancerTlsCertificateRenewalStatus["PendingAutoRenewal"] = "PENDING_AUTO_RENEWAL";
    LoadBalancerTlsCertificateRenewalStatus["PendingValidation"] = "PENDING_VALIDATION";
    LoadBalancerTlsCertificateRenewalStatus["Success"] = "SUCCESS";
})(LoadBalancerTlsCertificateRenewalStatus || (LoadBalancerTlsCertificateRenewalStatus = {}));
export var LoadBalancerTlsCertificateRenewalSummary;
(function (LoadBalancerTlsCertificateRenewalSummary) {
    /**
     * @internal
     */
    LoadBalancerTlsCertificateRenewalSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoadBalancerTlsCertificateRenewalSummary || (LoadBalancerTlsCertificateRenewalSummary = {}));
export var LoadBalancerTlsCertificateRevocationReason;
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
})(LoadBalancerTlsCertificateRevocationReason || (LoadBalancerTlsCertificateRevocationReason = {}));
export var LoadBalancerTlsCertificateStatus;
(function (LoadBalancerTlsCertificateStatus) {
    LoadBalancerTlsCertificateStatus["Expired"] = "EXPIRED";
    LoadBalancerTlsCertificateStatus["Failed"] = "FAILED";
    LoadBalancerTlsCertificateStatus["Inactive"] = "INACTIVE";
    LoadBalancerTlsCertificateStatus["Issued"] = "ISSUED";
    LoadBalancerTlsCertificateStatus["PendingValidation"] = "PENDING_VALIDATION";
    LoadBalancerTlsCertificateStatus["Revoked"] = "REVOKED";
    LoadBalancerTlsCertificateStatus["Unknown"] = "UNKNOWN";
    LoadBalancerTlsCertificateStatus["ValidationTimedOut"] = "VALIDATION_TIMED_OUT";
})(LoadBalancerTlsCertificateStatus || (LoadBalancerTlsCertificateStatus = {}));
export var LoadBalancerTlsCertificate;
(function (LoadBalancerTlsCertificate) {
    /**
     * @internal
     */
    LoadBalancerTlsCertificate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoadBalancerTlsCertificate || (LoadBalancerTlsCertificate = {}));
export var GetLoadBalancerTlsCertificatesResult;
(function (GetLoadBalancerTlsCertificatesResult) {
    /**
     * @internal
     */
    GetLoadBalancerTlsCertificatesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLoadBalancerTlsCertificatesResult || (GetLoadBalancerTlsCertificatesResult = {}));
export var GetOperationRequest;
(function (GetOperationRequest) {
    /**
     * @internal
     */
    GetOperationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOperationRequest || (GetOperationRequest = {}));
export var GetOperationResult;
(function (GetOperationResult) {
    /**
     * @internal
     */
    GetOperationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOperationResult || (GetOperationResult = {}));
export var GetOperationsRequest;
(function (GetOperationsRequest) {
    /**
     * @internal
     */
    GetOperationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOperationsRequest || (GetOperationsRequest = {}));
export var GetOperationsResult;
(function (GetOperationsResult) {
    /**
     * @internal
     */
    GetOperationsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOperationsResult || (GetOperationsResult = {}));
export var GetOperationsForResourceRequest;
(function (GetOperationsForResourceRequest) {
    /**
     * @internal
     */
    GetOperationsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOperationsForResourceRequest || (GetOperationsForResourceRequest = {}));
export var GetOperationsForResourceResult;
(function (GetOperationsForResourceResult) {
    /**
     * @internal
     */
    GetOperationsForResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetOperationsForResourceResult || (GetOperationsForResourceResult = {}));
export var GetRegionsRequest;
(function (GetRegionsRequest) {
    /**
     * @internal
     */
    GetRegionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRegionsRequest || (GetRegionsRequest = {}));
export var Region;
(function (Region) {
    /**
     * @internal
     */
    Region.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Region || (Region = {}));
export var GetRegionsResult;
(function (GetRegionsResult) {
    /**
     * @internal
     */
    GetRegionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRegionsResult || (GetRegionsResult = {}));
export var GetRelationalDatabaseRequest;
(function (GetRelationalDatabaseRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseRequest || (GetRelationalDatabaseRequest = {}));
export var RelationalDatabaseHardware;
(function (RelationalDatabaseHardware) {
    /**
     * @internal
     */
    RelationalDatabaseHardware.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RelationalDatabaseHardware || (RelationalDatabaseHardware = {}));
export var RelationalDatabaseEndpoint;
(function (RelationalDatabaseEndpoint) {
    /**
     * @internal
     */
    RelationalDatabaseEndpoint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RelationalDatabaseEndpoint || (RelationalDatabaseEndpoint = {}));
export var PendingMaintenanceAction;
(function (PendingMaintenanceAction) {
    /**
     * @internal
     */
    PendingMaintenanceAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PendingMaintenanceAction || (PendingMaintenanceAction = {}));
export var PendingModifiedRelationalDatabaseValues;
(function (PendingModifiedRelationalDatabaseValues) {
    /**
     * @internal
     */
    PendingModifiedRelationalDatabaseValues.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PendingModifiedRelationalDatabaseValues || (PendingModifiedRelationalDatabaseValues = {}));
export var RelationalDatabase;
(function (RelationalDatabase) {
    /**
     * @internal
     */
    RelationalDatabase.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RelationalDatabase || (RelationalDatabase = {}));
export var GetRelationalDatabaseResult;
(function (GetRelationalDatabaseResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseResult || (GetRelationalDatabaseResult = {}));
export var GetRelationalDatabaseBlueprintsRequest;
(function (GetRelationalDatabaseBlueprintsRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseBlueprintsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseBlueprintsRequest || (GetRelationalDatabaseBlueprintsRequest = {}));
export var RelationalDatabaseEngine;
(function (RelationalDatabaseEngine) {
    RelationalDatabaseEngine["MYSQL"] = "mysql";
})(RelationalDatabaseEngine || (RelationalDatabaseEngine = {}));
export var RelationalDatabaseBlueprint;
(function (RelationalDatabaseBlueprint) {
    /**
     * @internal
     */
    RelationalDatabaseBlueprint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RelationalDatabaseBlueprint || (RelationalDatabaseBlueprint = {}));
export var GetRelationalDatabaseBlueprintsResult;
(function (GetRelationalDatabaseBlueprintsResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseBlueprintsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseBlueprintsResult || (GetRelationalDatabaseBlueprintsResult = {}));
export var GetRelationalDatabaseBundlesRequest;
(function (GetRelationalDatabaseBundlesRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseBundlesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseBundlesRequest || (GetRelationalDatabaseBundlesRequest = {}));
export var RelationalDatabaseBundle;
(function (RelationalDatabaseBundle) {
    /**
     * @internal
     */
    RelationalDatabaseBundle.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RelationalDatabaseBundle || (RelationalDatabaseBundle = {}));
export var GetRelationalDatabaseBundlesResult;
(function (GetRelationalDatabaseBundlesResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseBundlesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseBundlesResult || (GetRelationalDatabaseBundlesResult = {}));
export var GetRelationalDatabaseEventsRequest;
(function (GetRelationalDatabaseEventsRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseEventsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseEventsRequest || (GetRelationalDatabaseEventsRequest = {}));
export var RelationalDatabaseEvent;
(function (RelationalDatabaseEvent) {
    /**
     * @internal
     */
    RelationalDatabaseEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RelationalDatabaseEvent || (RelationalDatabaseEvent = {}));
export var GetRelationalDatabaseEventsResult;
(function (GetRelationalDatabaseEventsResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseEventsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseEventsResult || (GetRelationalDatabaseEventsResult = {}));
export var GetRelationalDatabaseLogEventsRequest;
(function (GetRelationalDatabaseLogEventsRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseLogEventsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseLogEventsRequest || (GetRelationalDatabaseLogEventsRequest = {}));
export var LogEvent;
(function (LogEvent) {
    /**
     * @internal
     */
    LogEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LogEvent || (LogEvent = {}));
export var GetRelationalDatabaseLogEventsResult;
(function (GetRelationalDatabaseLogEventsResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseLogEventsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseLogEventsResult || (GetRelationalDatabaseLogEventsResult = {}));
export var GetRelationalDatabaseLogStreamsRequest;
(function (GetRelationalDatabaseLogStreamsRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseLogStreamsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseLogStreamsRequest || (GetRelationalDatabaseLogStreamsRequest = {}));
export var GetRelationalDatabaseLogStreamsResult;
(function (GetRelationalDatabaseLogStreamsResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseLogStreamsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseLogStreamsResult || (GetRelationalDatabaseLogStreamsResult = {}));
export var RelationalDatabasePasswordVersion;
(function (RelationalDatabasePasswordVersion) {
    RelationalDatabasePasswordVersion["CURRENT"] = "CURRENT";
    RelationalDatabasePasswordVersion["PENDING"] = "PENDING";
    RelationalDatabasePasswordVersion["PREVIOUS"] = "PREVIOUS";
})(RelationalDatabasePasswordVersion || (RelationalDatabasePasswordVersion = {}));
export var GetRelationalDatabaseMasterUserPasswordRequest;
(function (GetRelationalDatabaseMasterUserPasswordRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseMasterUserPasswordRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseMasterUserPasswordRequest || (GetRelationalDatabaseMasterUserPasswordRequest = {}));
export var GetRelationalDatabaseMasterUserPasswordResult;
(function (GetRelationalDatabaseMasterUserPasswordResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseMasterUserPasswordResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.masterUserPassword && { masterUserPassword: SENSITIVE_STRING }))); };
})(GetRelationalDatabaseMasterUserPasswordResult || (GetRelationalDatabaseMasterUserPasswordResult = {}));
export var RelationalDatabaseMetricName;
(function (RelationalDatabaseMetricName) {
    RelationalDatabaseMetricName["CPUUtilization"] = "CPUUtilization";
    RelationalDatabaseMetricName["DatabaseConnections"] = "DatabaseConnections";
    RelationalDatabaseMetricName["DiskQueueDepth"] = "DiskQueueDepth";
    RelationalDatabaseMetricName["FreeStorageSpace"] = "FreeStorageSpace";
    RelationalDatabaseMetricName["NetworkReceiveThroughput"] = "NetworkReceiveThroughput";
    RelationalDatabaseMetricName["NetworkTransmitThroughput"] = "NetworkTransmitThroughput";
})(RelationalDatabaseMetricName || (RelationalDatabaseMetricName = {}));
export var GetRelationalDatabaseMetricDataRequest;
(function (GetRelationalDatabaseMetricDataRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseMetricDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseMetricDataRequest || (GetRelationalDatabaseMetricDataRequest = {}));
export var GetRelationalDatabaseMetricDataResult;
(function (GetRelationalDatabaseMetricDataResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseMetricDataResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseMetricDataResult || (GetRelationalDatabaseMetricDataResult = {}));
export var GetRelationalDatabaseParametersRequest;
(function (GetRelationalDatabaseParametersRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseParametersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseParametersRequest || (GetRelationalDatabaseParametersRequest = {}));
export var RelationalDatabaseParameter;
(function (RelationalDatabaseParameter) {
    /**
     * @internal
     */
    RelationalDatabaseParameter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RelationalDatabaseParameter || (RelationalDatabaseParameter = {}));
export var GetRelationalDatabaseParametersResult;
(function (GetRelationalDatabaseParametersResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseParametersResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseParametersResult || (GetRelationalDatabaseParametersResult = {}));
export var GetRelationalDatabasesRequest;
(function (GetRelationalDatabasesRequest) {
    /**
     * @internal
     */
    GetRelationalDatabasesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabasesRequest || (GetRelationalDatabasesRequest = {}));
export var GetRelationalDatabasesResult;
(function (GetRelationalDatabasesResult) {
    /**
     * @internal
     */
    GetRelationalDatabasesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabasesResult || (GetRelationalDatabasesResult = {}));
export var GetRelationalDatabaseSnapshotRequest;
(function (GetRelationalDatabaseSnapshotRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseSnapshotRequest || (GetRelationalDatabaseSnapshotRequest = {}));
export var RelationalDatabaseSnapshot;
(function (RelationalDatabaseSnapshot) {
    /**
     * @internal
     */
    RelationalDatabaseSnapshot.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RelationalDatabaseSnapshot || (RelationalDatabaseSnapshot = {}));
export var GetRelationalDatabaseSnapshotResult;
(function (GetRelationalDatabaseSnapshotResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseSnapshotResult || (GetRelationalDatabaseSnapshotResult = {}));
export var GetRelationalDatabaseSnapshotsRequest;
(function (GetRelationalDatabaseSnapshotsRequest) {
    /**
     * @internal
     */
    GetRelationalDatabaseSnapshotsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseSnapshotsRequest || (GetRelationalDatabaseSnapshotsRequest = {}));
export var GetRelationalDatabaseSnapshotsResult;
(function (GetRelationalDatabaseSnapshotsResult) {
    /**
     * @internal
     */
    GetRelationalDatabaseSnapshotsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRelationalDatabaseSnapshotsResult || (GetRelationalDatabaseSnapshotsResult = {}));
export var GetStaticIpRequest;
(function (GetStaticIpRequest) {
    /**
     * @internal
     */
    GetStaticIpRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStaticIpRequest || (GetStaticIpRequest = {}));
export var StaticIp;
(function (StaticIp) {
    /**
     * @internal
     */
    StaticIp.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StaticIp || (StaticIp = {}));
export var GetStaticIpResult;
(function (GetStaticIpResult) {
    /**
     * @internal
     */
    GetStaticIpResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStaticIpResult || (GetStaticIpResult = {}));
export var GetStaticIpsRequest;
(function (GetStaticIpsRequest) {
    /**
     * @internal
     */
    GetStaticIpsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStaticIpsRequest || (GetStaticIpsRequest = {}));
export var GetStaticIpsResult;
(function (GetStaticIpsResult) {
    /**
     * @internal
     */
    GetStaticIpsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStaticIpsResult || (GetStaticIpsResult = {}));
export var ImportKeyPairRequest;
(function (ImportKeyPairRequest) {
    /**
     * @internal
     */
    ImportKeyPairRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportKeyPairRequest || (ImportKeyPairRequest = {}));
export var ImportKeyPairResult;
(function (ImportKeyPairResult) {
    /**
     * @internal
     */
    ImportKeyPairResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportKeyPairResult || (ImportKeyPairResult = {}));
export var IsVpcPeeredRequest;
(function (IsVpcPeeredRequest) {
    /**
     * @internal
     */
    IsVpcPeeredRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IsVpcPeeredRequest || (IsVpcPeeredRequest = {}));
export var IsVpcPeeredResult;
(function (IsVpcPeeredResult) {
    /**
     * @internal
     */
    IsVpcPeeredResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IsVpcPeeredResult || (IsVpcPeeredResult = {}));
export var OpenInstancePublicPortsRequest;
(function (OpenInstancePublicPortsRequest) {
    /**
     * @internal
     */
    OpenInstancePublicPortsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpenInstancePublicPortsRequest || (OpenInstancePublicPortsRequest = {}));
export var OpenInstancePublicPortsResult;
(function (OpenInstancePublicPortsResult) {
    /**
     * @internal
     */
    OpenInstancePublicPortsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OpenInstancePublicPortsResult || (OpenInstancePublicPortsResult = {}));
export var PeerVpcRequest;
(function (PeerVpcRequest) {
    /**
     * @internal
     */
    PeerVpcRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PeerVpcRequest || (PeerVpcRequest = {}));
export var PeerVpcResult;
(function (PeerVpcResult) {
    /**
     * @internal
     */
    PeerVpcResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PeerVpcResult || (PeerVpcResult = {}));
export var PutAlarmRequest;
(function (PutAlarmRequest) {
    /**
     * @internal
     */
    PutAlarmRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAlarmRequest || (PutAlarmRequest = {}));
export var PutAlarmResult;
(function (PutAlarmResult) {
    /**
     * @internal
     */
    PutAlarmResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAlarmResult || (PutAlarmResult = {}));
export var PutInstancePublicPortsRequest;
(function (PutInstancePublicPortsRequest) {
    /**
     * @internal
     */
    PutInstancePublicPortsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutInstancePublicPortsRequest || (PutInstancePublicPortsRequest = {}));
export var PutInstancePublicPortsResult;
(function (PutInstancePublicPortsResult) {
    /**
     * @internal
     */
    PutInstancePublicPortsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutInstancePublicPortsResult || (PutInstancePublicPortsResult = {}));
export var RebootInstanceRequest;
(function (RebootInstanceRequest) {
    /**
     * @internal
     */
    RebootInstanceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RebootInstanceRequest || (RebootInstanceRequest = {}));
export var RebootInstanceResult;
(function (RebootInstanceResult) {
    /**
     * @internal
     */
    RebootInstanceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RebootInstanceResult || (RebootInstanceResult = {}));
export var RebootRelationalDatabaseRequest;
(function (RebootRelationalDatabaseRequest) {
    /**
     * @internal
     */
    RebootRelationalDatabaseRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RebootRelationalDatabaseRequest || (RebootRelationalDatabaseRequest = {}));
export var RebootRelationalDatabaseResult;
(function (RebootRelationalDatabaseResult) {
    /**
     * @internal
     */
    RebootRelationalDatabaseResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RebootRelationalDatabaseResult || (RebootRelationalDatabaseResult = {}));
export var RegisterContainerImageRequest;
(function (RegisterContainerImageRequest) {
    /**
     * @internal
     */
    RegisterContainerImageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterContainerImageRequest || (RegisterContainerImageRequest = {}));
export var RegisterContainerImageResult;
(function (RegisterContainerImageResult) {
    /**
     * @internal
     */
    RegisterContainerImageResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterContainerImageResult || (RegisterContainerImageResult = {}));
export var ReleaseStaticIpRequest;
(function (ReleaseStaticIpRequest) {
    /**
     * @internal
     */
    ReleaseStaticIpRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReleaseStaticIpRequest || (ReleaseStaticIpRequest = {}));
export var ReleaseStaticIpResult;
(function (ReleaseStaticIpResult) {
    /**
     * @internal
     */
    ReleaseStaticIpResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReleaseStaticIpResult || (ReleaseStaticIpResult = {}));
export var ResetDistributionCacheRequest;
(function (ResetDistributionCacheRequest) {
    /**
     * @internal
     */
    ResetDistributionCacheRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResetDistributionCacheRequest || (ResetDistributionCacheRequest = {}));
export var ResetDistributionCacheResult;
(function (ResetDistributionCacheResult) {
    /**
     * @internal
     */
    ResetDistributionCacheResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResetDistributionCacheResult || (ResetDistributionCacheResult = {}));
export var SendContactMethodVerificationRequest;
(function (SendContactMethodVerificationRequest) {
    /**
     * @internal
     */
    SendContactMethodVerificationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendContactMethodVerificationRequest || (SendContactMethodVerificationRequest = {}));
export var SendContactMethodVerificationResult;
(function (SendContactMethodVerificationResult) {
    /**
     * @internal
     */
    SendContactMethodVerificationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendContactMethodVerificationResult || (SendContactMethodVerificationResult = {}));
export var SetIpAddressTypeRequest;
(function (SetIpAddressTypeRequest) {
    /**
     * @internal
     */
    SetIpAddressTypeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetIpAddressTypeRequest || (SetIpAddressTypeRequest = {}));
export var SetIpAddressTypeResult;
(function (SetIpAddressTypeResult) {
    /**
     * @internal
     */
    SetIpAddressTypeResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetIpAddressTypeResult || (SetIpAddressTypeResult = {}));
export var StartInstanceRequest;
(function (StartInstanceRequest) {
    /**
     * @internal
     */
    StartInstanceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartInstanceRequest || (StartInstanceRequest = {}));
export var StartInstanceResult;
(function (StartInstanceResult) {
    /**
     * @internal
     */
    StartInstanceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartInstanceResult || (StartInstanceResult = {}));
export var StartRelationalDatabaseRequest;
(function (StartRelationalDatabaseRequest) {
    /**
     * @internal
     */
    StartRelationalDatabaseRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartRelationalDatabaseRequest || (StartRelationalDatabaseRequest = {}));
export var StartRelationalDatabaseResult;
(function (StartRelationalDatabaseResult) {
    /**
     * @internal
     */
    StartRelationalDatabaseResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartRelationalDatabaseResult || (StartRelationalDatabaseResult = {}));
export var StopInstanceRequest;
(function (StopInstanceRequest) {
    /**
     * @internal
     */
    StopInstanceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopInstanceRequest || (StopInstanceRequest = {}));
export var StopInstanceResult;
(function (StopInstanceResult) {
    /**
     * @internal
     */
    StopInstanceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopInstanceResult || (StopInstanceResult = {}));
export var StopRelationalDatabaseRequest;
(function (StopRelationalDatabaseRequest) {
    /**
     * @internal
     */
    StopRelationalDatabaseRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopRelationalDatabaseRequest || (StopRelationalDatabaseRequest = {}));
export var StopRelationalDatabaseResult;
(function (StopRelationalDatabaseResult) {
    /**
     * @internal
     */
    StopRelationalDatabaseResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopRelationalDatabaseResult || (StopRelationalDatabaseResult = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResult;
(function (TagResourceResult) {
    /**
     * @internal
     */
    TagResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResult || (TagResourceResult = {}));
export var TestAlarmRequest;
(function (TestAlarmRequest) {
    /**
     * @internal
     */
    TestAlarmRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestAlarmRequest || (TestAlarmRequest = {}));
export var TestAlarmResult;
(function (TestAlarmResult) {
    /**
     * @internal
     */
    TestAlarmResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestAlarmResult || (TestAlarmResult = {}));
export var UnpeerVpcRequest;
(function (UnpeerVpcRequest) {
    /**
     * @internal
     */
    UnpeerVpcRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnpeerVpcRequest || (UnpeerVpcRequest = {}));
export var UnpeerVpcResult;
(function (UnpeerVpcResult) {
    /**
     * @internal
     */
    UnpeerVpcResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnpeerVpcResult || (UnpeerVpcResult = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResult;
(function (UntagResourceResult) {
    /**
     * @internal
     */
    UntagResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResult || (UntagResourceResult = {}));
export var UpdateContainerServiceRequest;
(function (UpdateContainerServiceRequest) {
    /**
     * @internal
     */
    UpdateContainerServiceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateContainerServiceRequest || (UpdateContainerServiceRequest = {}));
export var UpdateContainerServiceResult;
(function (UpdateContainerServiceResult) {
    /**
     * @internal
     */
    UpdateContainerServiceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateContainerServiceResult || (UpdateContainerServiceResult = {}));
export var UpdateDistributionRequest;
(function (UpdateDistributionRequest) {
    /**
     * @internal
     */
    UpdateDistributionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDistributionRequest || (UpdateDistributionRequest = {}));
export var UpdateDistributionResult;
(function (UpdateDistributionResult) {
    /**
     * @internal
     */
    UpdateDistributionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDistributionResult || (UpdateDistributionResult = {}));
export var UpdateDistributionBundleRequest;
(function (UpdateDistributionBundleRequest) {
    /**
     * @internal
     */
    UpdateDistributionBundleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDistributionBundleRequest || (UpdateDistributionBundleRequest = {}));
export var UpdateDistributionBundleResult;
(function (UpdateDistributionBundleResult) {
    /**
     * @internal
     */
    UpdateDistributionBundleResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDistributionBundleResult || (UpdateDistributionBundleResult = {}));
export var UpdateDomainEntryRequest;
(function (UpdateDomainEntryRequest) {
    /**
     * @internal
     */
    UpdateDomainEntryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDomainEntryRequest || (UpdateDomainEntryRequest = {}));
export var UpdateDomainEntryResult;
(function (UpdateDomainEntryResult) {
    /**
     * @internal
     */
    UpdateDomainEntryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDomainEntryResult || (UpdateDomainEntryResult = {}));
export var UpdateLoadBalancerAttributeRequest;
(function (UpdateLoadBalancerAttributeRequest) {
    /**
     * @internal
     */
    UpdateLoadBalancerAttributeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLoadBalancerAttributeRequest || (UpdateLoadBalancerAttributeRequest = {}));
export var UpdateLoadBalancerAttributeResult;
(function (UpdateLoadBalancerAttributeResult) {
    /**
     * @internal
     */
    UpdateLoadBalancerAttributeResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLoadBalancerAttributeResult || (UpdateLoadBalancerAttributeResult = {}));
export var UpdateRelationalDatabaseRequest;
(function (UpdateRelationalDatabaseRequest) {
    /**
     * @internal
     */
    UpdateRelationalDatabaseRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.masterUserPassword && { masterUserPassword: SENSITIVE_STRING }))); };
})(UpdateRelationalDatabaseRequest || (UpdateRelationalDatabaseRequest = {}));
export var UpdateRelationalDatabaseResult;
(function (UpdateRelationalDatabaseResult) {
    /**
     * @internal
     */
    UpdateRelationalDatabaseResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRelationalDatabaseResult || (UpdateRelationalDatabaseResult = {}));
export var UpdateRelationalDatabaseParametersRequest;
(function (UpdateRelationalDatabaseParametersRequest) {
    /**
     * @internal
     */
    UpdateRelationalDatabaseParametersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRelationalDatabaseParametersRequest || (UpdateRelationalDatabaseParametersRequest = {}));
export var UpdateRelationalDatabaseParametersResult;
(function (UpdateRelationalDatabaseParametersResult) {
    /**
     * @internal
     */
    UpdateRelationalDatabaseParametersResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRelationalDatabaseParametersResult || (UpdateRelationalDatabaseParametersResult = {}));
//# sourceMappingURL=models_1.js.map