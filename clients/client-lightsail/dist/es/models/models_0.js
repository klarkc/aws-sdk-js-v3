import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AccessDirection;
(function (AccessDirection) {
    AccessDirection["inbound"] = "inbound";
    AccessDirection["outbound"] = "outbound";
})(AccessDirection || (AccessDirection = {}));
export var AccountSetupInProgressException;
(function (AccountSetupInProgressException) {
    /**
     * @internal
     */
    AccountSetupInProgressException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountSetupInProgressException || (AccountSetupInProgressException = {}));
export var AddOn;
(function (AddOn) {
    /**
     * @internal
     */
    AddOn.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddOn || (AddOn = {}));
export var AddOnType;
(function (AddOnType) {
    AddOnType["AutoSnapshot"] = "AutoSnapshot";
})(AddOnType || (AddOnType = {}));
export var AutoSnapshotAddOnRequest;
(function (AutoSnapshotAddOnRequest) {
    /**
     * @internal
     */
    AutoSnapshotAddOnRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoSnapshotAddOnRequest || (AutoSnapshotAddOnRequest = {}));
export var AddOnRequest;
(function (AddOnRequest) {
    /**
     * @internal
     */
    AddOnRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddOnRequest || (AddOnRequest = {}));
export var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["GreaterThanOrEqualToThreshold"] = "GreaterThanOrEqualToThreshold";
    ComparisonOperator["GreaterThanThreshold"] = "GreaterThanThreshold";
    ComparisonOperator["LessThanOrEqualToThreshold"] = "LessThanOrEqualToThreshold";
    ComparisonOperator["LessThanThreshold"] = "LessThanThreshold";
})(ComparisonOperator || (ComparisonOperator = {}));
export var ContactProtocol;
(function (ContactProtocol) {
    ContactProtocol["Email"] = "Email";
    ContactProtocol["SMS"] = "SMS";
})(ContactProtocol || (ContactProtocol = {}));
export var RegionName;
(function (RegionName) {
    RegionName["AP_NORTHEAST_1"] = "ap-northeast-1";
    RegionName["AP_NORTHEAST_2"] = "ap-northeast-2";
    RegionName["AP_SOUTHEAST_1"] = "ap-southeast-1";
    RegionName["AP_SOUTHEAST_2"] = "ap-southeast-2";
    RegionName["AP_SOUTH_1"] = "ap-south-1";
    RegionName["CA_CENTRAL_1"] = "ca-central-1";
    RegionName["EU_CENTRAL_1"] = "eu-central-1";
    RegionName["EU_WEST_1"] = "eu-west-1";
    RegionName["EU_WEST_2"] = "eu-west-2";
    RegionName["EU_WEST_3"] = "eu-west-3";
    RegionName["US_EAST_1"] = "us-east-1";
    RegionName["US_EAST_2"] = "us-east-2";
    RegionName["US_WEST_1"] = "us-west-1";
    RegionName["US_WEST_2"] = "us-west-2";
})(RegionName || (RegionName = {}));
export var ResourceLocation;
(function (ResourceLocation) {
    /**
     * @internal
     */
    ResourceLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceLocation || (ResourceLocation = {}));
export var MetricName;
(function (MetricName) {
    MetricName["BurstCapacityPercentage"] = "BurstCapacityPercentage";
    MetricName["BurstCapacityTime"] = "BurstCapacityTime";
    MetricName["CPUUtilization"] = "CPUUtilization";
    MetricName["ClientTLSNegotiationErrorCount"] = "ClientTLSNegotiationErrorCount";
    MetricName["DatabaseConnections"] = "DatabaseConnections";
    MetricName["DiskQueueDepth"] = "DiskQueueDepth";
    MetricName["FreeStorageSpace"] = "FreeStorageSpace";
    MetricName["HTTPCode_Instance_2XX_Count"] = "HTTPCode_Instance_2XX_Count";
    MetricName["HTTPCode_Instance_3XX_Count"] = "HTTPCode_Instance_3XX_Count";
    MetricName["HTTPCode_Instance_4XX_Count"] = "HTTPCode_Instance_4XX_Count";
    MetricName["HTTPCode_Instance_5XX_Count"] = "HTTPCode_Instance_5XX_Count";
    MetricName["HTTPCode_LB_4XX_Count"] = "HTTPCode_LB_4XX_Count";
    MetricName["HTTPCode_LB_5XX_Count"] = "HTTPCode_LB_5XX_Count";
    MetricName["HealthyHostCount"] = "HealthyHostCount";
    MetricName["InstanceResponseTime"] = "InstanceResponseTime";
    MetricName["NetworkIn"] = "NetworkIn";
    MetricName["NetworkOut"] = "NetworkOut";
    MetricName["NetworkReceiveThroughput"] = "NetworkReceiveThroughput";
    MetricName["NetworkTransmitThroughput"] = "NetworkTransmitThroughput";
    MetricName["RejectedConnectionCount"] = "RejectedConnectionCount";
    MetricName["RequestCount"] = "RequestCount";
    MetricName["StatusCheckFailed"] = "StatusCheckFailed";
    MetricName["StatusCheckFailed_Instance"] = "StatusCheckFailed_Instance";
    MetricName["StatusCheckFailed_System"] = "StatusCheckFailed_System";
    MetricName["UnhealthyHostCount"] = "UnhealthyHostCount";
})(MetricName || (MetricName = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["Alarm"] = "Alarm";
    ResourceType["Certificate"] = "Certificate";
    ResourceType["CloudFormationStackRecord"] = "CloudFormationStackRecord";
    ResourceType["ContactMethod"] = "ContactMethod";
    ResourceType["ContainerService"] = "ContainerService";
    ResourceType["Disk"] = "Disk";
    ResourceType["DiskSnapshot"] = "DiskSnapshot";
    ResourceType["Distribution"] = "Distribution";
    ResourceType["Domain"] = "Domain";
    ResourceType["ExportSnapshotRecord"] = "ExportSnapshotRecord";
    ResourceType["Instance"] = "Instance";
    ResourceType["InstanceSnapshot"] = "InstanceSnapshot";
    ResourceType["KeyPair"] = "KeyPair";
    ResourceType["LoadBalancer"] = "LoadBalancer";
    ResourceType["LoadBalancerTlsCertificate"] = "LoadBalancerTlsCertificate";
    ResourceType["PeeredVpc"] = "PeeredVpc";
    ResourceType["RelationalDatabase"] = "RelationalDatabase";
    ResourceType["RelationalDatabaseSnapshot"] = "RelationalDatabaseSnapshot";
    ResourceType["StaticIp"] = "StaticIp";
})(ResourceType || (ResourceType = {}));
export var MonitoredResourceInfo;
(function (MonitoredResourceInfo) {
    /**
     * @internal
     */
    MonitoredResourceInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonitoredResourceInfo || (MonitoredResourceInfo = {}));
export var AlarmState;
(function (AlarmState) {
    AlarmState["ALARM"] = "ALARM";
    AlarmState["INSUFFICIENT_DATA"] = "INSUFFICIENT_DATA";
    AlarmState["OK"] = "OK";
})(AlarmState || (AlarmState = {}));
export var MetricStatistic;
(function (MetricStatistic) {
    MetricStatistic["Average"] = "Average";
    MetricStatistic["Maximum"] = "Maximum";
    MetricStatistic["Minimum"] = "Minimum";
    MetricStatistic["SampleCount"] = "SampleCount";
    MetricStatistic["Sum"] = "Sum";
})(MetricStatistic || (MetricStatistic = {}));
export var TreatMissingData;
(function (TreatMissingData) {
    TreatMissingData["Breaching"] = "breaching";
    TreatMissingData["Ignore"] = "ignore";
    TreatMissingData["Missing"] = "missing";
    TreatMissingData["NotBreaching"] = "notBreaching";
})(TreatMissingData || (TreatMissingData = {}));
export var MetricUnit;
(function (MetricUnit) {
    MetricUnit["Bits"] = "Bits";
    MetricUnit["BitsSecond"] = "Bits/Second";
    MetricUnit["Bytes"] = "Bytes";
    MetricUnit["BytesSecond"] = "Bytes/Second";
    MetricUnit["Count"] = "Count";
    MetricUnit["CountSecond"] = "Count/Second";
    MetricUnit["Gigabits"] = "Gigabits";
    MetricUnit["GigabitsSecond"] = "Gigabits/Second";
    MetricUnit["Gigabytes"] = "Gigabytes";
    MetricUnit["GigabytesSecond"] = "Gigabytes/Second";
    MetricUnit["Kilobits"] = "Kilobits";
    MetricUnit["KilobitsSecond"] = "Kilobits/Second";
    MetricUnit["Kilobytes"] = "Kilobytes";
    MetricUnit["KilobytesSecond"] = "Kilobytes/Second";
    MetricUnit["Megabits"] = "Megabits";
    MetricUnit["MegabitsSecond"] = "Megabits/Second";
    MetricUnit["Megabytes"] = "Megabytes";
    MetricUnit["MegabytesSecond"] = "Megabytes/Second";
    MetricUnit["Microseconds"] = "Microseconds";
    MetricUnit["Milliseconds"] = "Milliseconds";
    MetricUnit["None"] = "None";
    MetricUnit["Percent"] = "Percent";
    MetricUnit["Seconds"] = "Seconds";
    MetricUnit["Terabits"] = "Terabits";
    MetricUnit["TerabitsSecond"] = "Terabits/Second";
    MetricUnit["Terabytes"] = "Terabytes";
    MetricUnit["TerabytesSecond"] = "Terabytes/Second";
})(MetricUnit || (MetricUnit = {}));
export var Alarm;
(function (Alarm) {
    /**
     * @internal
     */
    Alarm.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Alarm || (Alarm = {}));
export var AllocateStaticIpRequest;
(function (AllocateStaticIpRequest) {
    /**
     * @internal
     */
    AllocateStaticIpRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AllocateStaticIpRequest || (AllocateStaticIpRequest = {}));
export var OperationType;
(function (OperationType) {
    OperationType["AllocateStaticIp"] = "AllocateStaticIp";
    OperationType["AttachCertificateToDistribution"] = "AttachCertificateToDistribution";
    OperationType["AttachDisk"] = "AttachDisk";
    OperationType["AttachInstancesToLoadBalancer"] = "AttachInstancesToLoadBalancer";
    OperationType["AttachLoadBalancerTlsCertificate"] = "AttachLoadBalancerTlsCertificate";
    OperationType["AttachStaticIp"] = "AttachStaticIp";
    OperationType["CloseInstancePublicPorts"] = "CloseInstancePublicPorts";
    OperationType["CreateCertificate"] = "CreateCertificate";
    OperationType["CreateContactMethod"] = "CreateContactMethod";
    OperationType["CreateContainerService"] = "CreateContainerService";
    OperationType["CreateContainerServiceDeployment"] = "CreateContainerServiceDeployment";
    OperationType["CreateContainerServiceRegistryLogin"] = "CreateContainerServiceRegistryLogin";
    OperationType["CreateDisk"] = "CreateDisk";
    OperationType["CreateDiskFromSnapshot"] = "CreateDiskFromSnapshot";
    OperationType["CreateDiskSnapshot"] = "CreateDiskSnapshot";
    OperationType["CreateDistribution"] = "CreateDistribution";
    OperationType["CreateDomain"] = "CreateDomain";
    OperationType["CreateInstance"] = "CreateInstance";
    OperationType["CreateInstanceSnapshot"] = "CreateInstanceSnapshot";
    OperationType["CreateInstancesFromSnapshot"] = "CreateInstancesFromSnapshot";
    OperationType["CreateLoadBalancer"] = "CreateLoadBalancer";
    OperationType["CreateLoadBalancerTlsCertificate"] = "CreateLoadBalancerTlsCertificate";
    OperationType["CreateRelationalDatabase"] = "CreateRelationalDatabase";
    OperationType["CreateRelationalDatabaseFromSnapshot"] = "CreateRelationalDatabaseFromSnapshot";
    OperationType["CreateRelationalDatabaseSnapshot"] = "CreateRelationalDatabaseSnapshot";
    OperationType["DeleteAlarm"] = "DeleteAlarm";
    OperationType["DeleteCertificate"] = "DeleteCertificate";
    OperationType["DeleteContactMethod"] = "DeleteContactMethod";
    OperationType["DeleteContainerImage"] = "DeleteContainerImage";
    OperationType["DeleteContainerService"] = "DeleteContainerService";
    OperationType["DeleteDisk"] = "DeleteDisk";
    OperationType["DeleteDiskSnapshot"] = "DeleteDiskSnapshot";
    OperationType["DeleteDistribution"] = "DeleteDistribution";
    OperationType["DeleteDomain"] = "DeleteDomain";
    OperationType["DeleteDomainEntry"] = "DeleteDomainEntry";
    OperationType["DeleteInstance"] = "DeleteInstance";
    OperationType["DeleteInstanceSnapshot"] = "DeleteInstanceSnapshot";
    OperationType["DeleteKnownHostKeys"] = "DeleteKnownHostKeys";
    OperationType["DeleteLoadBalancer"] = "DeleteLoadBalancer";
    OperationType["DeleteLoadBalancerTlsCertificate"] = "DeleteLoadBalancerTlsCertificate";
    OperationType["DeleteRelationalDatabase"] = "DeleteRelationalDatabase";
    OperationType["DeleteRelationalDatabaseSnapshot"] = "DeleteRelationalDatabaseSnapshot";
    OperationType["DetachCertificateFromDistribution"] = "DetachCertificateFromDistribution";
    OperationType["DetachDisk"] = "DetachDisk";
    OperationType["DetachInstancesFromLoadBalancer"] = "DetachInstancesFromLoadBalancer";
    OperationType["DetachStaticIp"] = "DetachStaticIp";
    OperationType["DisableAddOn"] = "DisableAddOn";
    OperationType["EnableAddOn"] = "EnableAddOn";
    OperationType["GetAlarms"] = "GetAlarms";
    OperationType["GetContactMethods"] = "GetContactMethods";
    OperationType["OpenInstancePublicPorts"] = "OpenInstancePublicPorts";
    OperationType["PutAlarm"] = "PutAlarm";
    OperationType["PutInstancePublicPorts"] = "PutInstancePublicPorts";
    OperationType["RebootInstance"] = "RebootInstance";
    OperationType["RebootRelationalDatabase"] = "RebootRelationalDatabase";
    OperationType["RegisterContainerImage"] = "RegisterContainerImage";
    OperationType["ReleaseStaticIp"] = "ReleaseStaticIp";
    OperationType["ResetDistributionCache"] = "ResetDistributionCache";
    OperationType["SendContactMethodVerification"] = "SendContactMethodVerification";
    OperationType["SetIpAddressType"] = "SetIpAddressType";
    OperationType["StartInstance"] = "StartInstance";
    OperationType["StartRelationalDatabase"] = "StartRelationalDatabase";
    OperationType["StopInstance"] = "StopInstance";
    OperationType["StopRelationalDatabase"] = "StopRelationalDatabase";
    OperationType["TestAlarm"] = "TestAlarm";
    OperationType["UpdateContainerService"] = "UpdateContainerService";
    OperationType["UpdateDistribution"] = "UpdateDistribution";
    OperationType["UpdateDistributionBundle"] = "UpdateDistributionBundle";
    OperationType["UpdateDomainEntry"] = "UpdateDomainEntry";
    OperationType["UpdateLoadBalancerAttribute"] = "UpdateLoadBalancerAttribute";
    OperationType["UpdateRelationalDatabase"] = "UpdateRelationalDatabase";
    OperationType["UpdateRelationalDatabaseParameters"] = "UpdateRelationalDatabaseParameters";
})(OperationType || (OperationType = {}));
export var OperationStatus;
(function (OperationStatus) {
    OperationStatus["Completed"] = "Completed";
    OperationStatus["Failed"] = "Failed";
    OperationStatus["NotStarted"] = "NotStarted";
    OperationStatus["Started"] = "Started";
    OperationStatus["Succeeded"] = "Succeeded";
})(OperationStatus || (OperationStatus = {}));
export var Operation;
(function (Operation) {
    /**
     * @internal
     */
    Operation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Operation || (Operation = {}));
export var AllocateStaticIpResult;
(function (AllocateStaticIpResult) {
    /**
     * @internal
     */
    AllocateStaticIpResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AllocateStaticIpResult || (AllocateStaticIpResult = {}));
export var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInputException || (InvalidInputException = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var OperationFailureException;
(function (OperationFailureException) {
    /**
     * @internal
     */
    OperationFailureException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OperationFailureException || (OperationFailureException = {}));
export var ServiceException;
(function (ServiceException) {
    /**
     * @internal
     */
    ServiceException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceException || (ServiceException = {}));
export var UnauthenticatedException;
(function (UnauthenticatedException) {
    /**
     * @internal
     */
    UnauthenticatedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnauthenticatedException || (UnauthenticatedException = {}));
export var AttachCertificateToDistributionRequest;
(function (AttachCertificateToDistributionRequest) {
    /**
     * @internal
     */
    AttachCertificateToDistributionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachCertificateToDistributionRequest || (AttachCertificateToDistributionRequest = {}));
export var AttachCertificateToDistributionResult;
(function (AttachCertificateToDistributionResult) {
    /**
     * @internal
     */
    AttachCertificateToDistributionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachCertificateToDistributionResult || (AttachCertificateToDistributionResult = {}));
export var AttachDiskRequest;
(function (AttachDiskRequest) {
    /**
     * @internal
     */
    AttachDiskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachDiskRequest || (AttachDiskRequest = {}));
export var AttachDiskResult;
(function (AttachDiskResult) {
    /**
     * @internal
     */
    AttachDiskResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachDiskResult || (AttachDiskResult = {}));
export var AttachedDisk;
(function (AttachedDisk) {
    /**
     * @internal
     */
    AttachedDisk.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachedDisk || (AttachedDisk = {}));
export var DiskMap;
(function (DiskMap) {
    /**
     * @internal
     */
    DiskMap.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DiskMap || (DiskMap = {}));
export var AttachInstancesToLoadBalancerRequest;
(function (AttachInstancesToLoadBalancerRequest) {
    /**
     * @internal
     */
    AttachInstancesToLoadBalancerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachInstancesToLoadBalancerRequest || (AttachInstancesToLoadBalancerRequest = {}));
export var AttachInstancesToLoadBalancerResult;
(function (AttachInstancesToLoadBalancerResult) {
    /**
     * @internal
     */
    AttachInstancesToLoadBalancerResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachInstancesToLoadBalancerResult || (AttachInstancesToLoadBalancerResult = {}));
export var AttachLoadBalancerTlsCertificateRequest;
(function (AttachLoadBalancerTlsCertificateRequest) {
    /**
     * @internal
     */
    AttachLoadBalancerTlsCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachLoadBalancerTlsCertificateRequest || (AttachLoadBalancerTlsCertificateRequest = {}));
export var AttachLoadBalancerTlsCertificateResult;
(function (AttachLoadBalancerTlsCertificateResult) {
    /**
     * @internal
     */
    AttachLoadBalancerTlsCertificateResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachLoadBalancerTlsCertificateResult || (AttachLoadBalancerTlsCertificateResult = {}));
export var AttachStaticIpRequest;
(function (AttachStaticIpRequest) {
    /**
     * @internal
     */
    AttachStaticIpRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachStaticIpRequest || (AttachStaticIpRequest = {}));
export var AttachStaticIpResult;
(function (AttachStaticIpResult) {
    /**
     * @internal
     */
    AttachStaticIpResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachStaticIpResult || (AttachStaticIpResult = {}));
export var AutoSnapshotStatus;
(function (AutoSnapshotStatus) {
    AutoSnapshotStatus["FAILED"] = "Failed";
    AutoSnapshotStatus["IN_PROGRESS"] = "InProgress";
    AutoSnapshotStatus["NOT_FOUND"] = "NotFound";
    AutoSnapshotStatus["SUCCESS"] = "Success";
})(AutoSnapshotStatus || (AutoSnapshotStatus = {}));
export var AutoSnapshotDetails;
(function (AutoSnapshotDetails) {
    /**
     * @internal
     */
    AutoSnapshotDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoSnapshotDetails || (AutoSnapshotDetails = {}));
export var AvailabilityZone;
(function (AvailabilityZone) {
    /**
     * @internal
     */
    AvailabilityZone.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AvailabilityZone || (AvailabilityZone = {}));
export var BehaviorEnum;
(function (BehaviorEnum) {
    BehaviorEnum["CacheSetting"] = "cache";
    BehaviorEnum["DontCacheSetting"] = "dont-cache";
})(BehaviorEnum || (BehaviorEnum = {}));
export var InstancePlatform;
(function (InstancePlatform) {
    InstancePlatform["LinuxUnix"] = "LINUX_UNIX";
    InstancePlatform["Windows"] = "WINDOWS";
})(InstancePlatform || (InstancePlatform = {}));
export var BlueprintType;
(function (BlueprintType) {
    BlueprintType["app"] = "app";
    BlueprintType["os"] = "os";
})(BlueprintType || (BlueprintType = {}));
export var Blueprint;
(function (Blueprint) {
    /**
     * @internal
     */
    Blueprint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Blueprint || (Blueprint = {}));
export var Bundle;
(function (Bundle) {
    /**
     * @internal
     */
    Bundle.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Bundle || (Bundle = {}));
export var CacheBehavior;
(function (CacheBehavior) {
    /**
     * @internal
     */
    CacheBehavior.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CacheBehavior || (CacheBehavior = {}));
export var CacheBehaviorPerPath;
(function (CacheBehaviorPerPath) {
    /**
     * @internal
     */
    CacheBehaviorPerPath.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CacheBehaviorPerPath || (CacheBehaviorPerPath = {}));
export var ForwardValues;
(function (ForwardValues) {
    ForwardValues["all"] = "all";
    ForwardValues["allowList"] = "allow-list";
    ForwardValues["none"] = "none";
})(ForwardValues || (ForwardValues = {}));
export var CookieObject;
(function (CookieObject) {
    /**
     * @internal
     */
    CookieObject.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CookieObject || (CookieObject = {}));
export var HeaderEnum;
(function (HeaderEnum) {
    HeaderEnum["accept"] = "Accept";
    HeaderEnum["acceptCharset"] = "Accept-Charset";
    HeaderEnum["acceptDatetime"] = "Accept-Datetime";
    HeaderEnum["acceptEncoding"] = "Accept-Encoding";
    HeaderEnum["acceptLanguage"] = "Accept-Language";
    HeaderEnum["authorization"] = "Authorization";
    HeaderEnum["cloudFrontForwardedProto"] = "CloudFront-Forwarded-Proto";
    HeaderEnum["cloudFrontIsDesktopViewer"] = "CloudFront-Is-Desktop-Viewer";
    HeaderEnum["cloudFrontIsMobileViewer"] = "CloudFront-Is-Mobile-Viewer";
    HeaderEnum["cloudFrontIsSmartTVViewer"] = "CloudFront-Is-SmartTV-Viewer";
    HeaderEnum["cloudFrontIsTabletViewer"] = "CloudFront-Is-Tablet-Viewer";
    HeaderEnum["cloudFrontViewerCountry"] = "CloudFront-Viewer-Country";
    HeaderEnum["host"] = "Host";
    HeaderEnum["origin"] = "Origin";
    HeaderEnum["referer"] = "Referer";
})(HeaderEnum || (HeaderEnum = {}));
export var HeaderObject;
(function (HeaderObject) {
    /**
     * @internal
     */
    HeaderObject.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HeaderObject || (HeaderObject = {}));
export var QueryStringObject;
(function (QueryStringObject) {
    /**
     * @internal
     */
    QueryStringObject.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QueryStringObject || (QueryStringObject = {}));
export var CacheSettings;
(function (CacheSettings) {
    /**
     * @internal
     */
    CacheSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CacheSettings || (CacheSettings = {}));
export var ResourceRecord;
(function (ResourceRecord) {
    /**
     * @internal
     */
    ResourceRecord.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceRecord || (ResourceRecord = {}));
export var DomainValidationRecord;
(function (DomainValidationRecord) {
    /**
     * @internal
     */
    DomainValidationRecord.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainValidationRecord || (DomainValidationRecord = {}));
export var RenewalStatus;
(function (RenewalStatus) {
    RenewalStatus["Failed"] = "Failed";
    RenewalStatus["PendingAutoRenewal"] = "PendingAutoRenewal";
    RenewalStatus["PendingValidation"] = "PendingValidation";
    RenewalStatus["Success"] = "Success";
})(RenewalStatus || (RenewalStatus = {}));
export var RenewalSummary;
(function (RenewalSummary) {
    /**
     * @internal
     */
    RenewalSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RenewalSummary || (RenewalSummary = {}));
export var CertificateStatus;
(function (CertificateStatus) {
    CertificateStatus["Expired"] = "EXPIRED";
    CertificateStatus["Failed"] = "FAILED";
    CertificateStatus["Inactive"] = "INACTIVE";
    CertificateStatus["Issued"] = "ISSUED";
    CertificateStatus["PendingValidation"] = "PENDING_VALIDATION";
    CertificateStatus["Revoked"] = "REVOKED";
    CertificateStatus["ValidationTimedOut"] = "VALIDATION_TIMED_OUT";
})(CertificateStatus || (CertificateStatus = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var Certificate;
(function (Certificate) {
    /**
     * @internal
     */
    Certificate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Certificate || (Certificate = {}));
export var CertificateSummary;
(function (CertificateSummary) {
    /**
     * @internal
     */
    CertificateSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CertificateSummary || (CertificateSummary = {}));
export var NetworkProtocol;
(function (NetworkProtocol) {
    NetworkProtocol["ALL"] = "all";
    NetworkProtocol["ICMP"] = "icmp";
    NetworkProtocol["TCP"] = "tcp";
    NetworkProtocol["UDP"] = "udp";
})(NetworkProtocol || (NetworkProtocol = {}));
export var PortInfo;
(function (PortInfo) {
    /**
     * @internal
     */
    PortInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PortInfo || (PortInfo = {}));
export var CloseInstancePublicPortsRequest;
(function (CloseInstancePublicPortsRequest) {
    /**
     * @internal
     */
    CloseInstancePublicPortsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloseInstancePublicPortsRequest || (CloseInstancePublicPortsRequest = {}));
export var CloseInstancePublicPortsResult;
(function (CloseInstancePublicPortsResult) {
    /**
     * @internal
     */
    CloseInstancePublicPortsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloseInstancePublicPortsResult || (CloseInstancePublicPortsResult = {}));
export var DestinationInfo;
(function (DestinationInfo) {
    /**
     * @internal
     */
    DestinationInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DestinationInfo || (DestinationInfo = {}));
export var CloudFormationStackRecordSourceType;
(function (CloudFormationStackRecordSourceType) {
    CloudFormationStackRecordSourceType["ExportSnapshotRecord"] = "ExportSnapshotRecord";
})(CloudFormationStackRecordSourceType || (CloudFormationStackRecordSourceType = {}));
export var CloudFormationStackRecordSourceInfo;
(function (CloudFormationStackRecordSourceInfo) {
    /**
     * @internal
     */
    CloudFormationStackRecordSourceInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudFormationStackRecordSourceInfo || (CloudFormationStackRecordSourceInfo = {}));
export var RecordState;
(function (RecordState) {
    RecordState["Failed"] = "Failed";
    RecordState["Started"] = "Started";
    RecordState["Succeeded"] = "Succeeded";
})(RecordState || (RecordState = {}));
export var CloudFormationStackRecord;
(function (CloudFormationStackRecord) {
    /**
     * @internal
     */
    CloudFormationStackRecord.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudFormationStackRecord || (CloudFormationStackRecord = {}));
export var ContactMethodStatus;
(function (ContactMethodStatus) {
    ContactMethodStatus["Invalid"] = "Invalid";
    ContactMethodStatus["PendingVerification"] = "PendingVerification";
    ContactMethodStatus["Valid"] = "Valid";
})(ContactMethodStatus || (ContactMethodStatus = {}));
export var ContactMethod;
(function (ContactMethod) {
    /**
     * @internal
     */
    ContactMethod.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContactMethod || (ContactMethod = {}));
export var ContactMethodVerificationProtocol;
(function (ContactMethodVerificationProtocol) {
    ContactMethodVerificationProtocol["Email"] = "Email";
})(ContactMethodVerificationProtocol || (ContactMethodVerificationProtocol = {}));
export var ContainerServiceProtocol;
(function (ContainerServiceProtocol) {
    ContainerServiceProtocol["HTTP"] = "HTTP";
    ContainerServiceProtocol["HTTPS"] = "HTTPS";
    ContainerServiceProtocol["TCP"] = "TCP";
    ContainerServiceProtocol["UDP"] = "UDP";
})(ContainerServiceProtocol || (ContainerServiceProtocol = {}));
export var Container;
(function (Container) {
    /**
     * @internal
     */
    Container.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Container || (Container = {}));
export var ContainerImage;
(function (ContainerImage) {
    /**
     * @internal
     */
    ContainerImage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerImage || (ContainerImage = {}));
export var ContainerServiceHealthCheckConfig;
(function (ContainerServiceHealthCheckConfig) {
    /**
     * @internal
     */
    ContainerServiceHealthCheckConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerServiceHealthCheckConfig || (ContainerServiceHealthCheckConfig = {}));
export var ContainerServiceEndpoint;
(function (ContainerServiceEndpoint) {
    /**
     * @internal
     */
    ContainerServiceEndpoint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerServiceEndpoint || (ContainerServiceEndpoint = {}));
export var ContainerServiceDeploymentState;
(function (ContainerServiceDeploymentState) {
    ContainerServiceDeploymentState["ACTIVATING"] = "ACTIVATING";
    ContainerServiceDeploymentState["ACTIVE"] = "ACTIVE";
    ContainerServiceDeploymentState["FAILED"] = "FAILED";
    ContainerServiceDeploymentState["INACTIVE"] = "INACTIVE";
})(ContainerServiceDeploymentState || (ContainerServiceDeploymentState = {}));
export var ContainerServiceDeployment;
(function (ContainerServiceDeployment) {
    /**
     * @internal
     */
    ContainerServiceDeployment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerServiceDeployment || (ContainerServiceDeployment = {}));
export var ContainerServicePowerName;
(function (ContainerServicePowerName) {
    ContainerServicePowerName["large"] = "large";
    ContainerServicePowerName["medium"] = "medium";
    ContainerServicePowerName["micro"] = "micro";
    ContainerServicePowerName["nano"] = "nano";
    ContainerServicePowerName["small"] = "small";
    ContainerServicePowerName["xlarge"] = "xlarge";
})(ContainerServicePowerName || (ContainerServicePowerName = {}));
export var ContainerServiceState;
(function (ContainerServiceState) {
    ContainerServiceState["DELETING"] = "DELETING";
    ContainerServiceState["DEPLOYING"] = "DEPLOYING";
    ContainerServiceState["DISABLED"] = "DISABLED";
    ContainerServiceState["PENDING"] = "PENDING";
    ContainerServiceState["READY"] = "READY";
    ContainerServiceState["RUNNING"] = "RUNNING";
    ContainerServiceState["UPDATING"] = "UPDATING";
})(ContainerServiceState || (ContainerServiceState = {}));
export var ContainerServiceStateDetailCode;
(function (ContainerServiceStateDetailCode) {
    ContainerServiceStateDetailCode["ACTIVATING_DEPLOYMENT"] = "ACTIVATING_DEPLOYMENT";
    ContainerServiceStateDetailCode["CERTIFICATE_LIMIT_EXCEEDED"] = "CERTIFICATE_LIMIT_EXCEEDED";
    ContainerServiceStateDetailCode["CREATING_DEPLOYMENT"] = "CREATING_DEPLOYMENT";
    ContainerServiceStateDetailCode["CREATING_NETWORK_INFRASTRUCTURE"] = "CREATING_NETWORK_INFRASTRUCTURE";
    ContainerServiceStateDetailCode["CREATING_SYSTEM_RESOURCES"] = "CREATING_SYSTEM_RESOURCES";
    ContainerServiceStateDetailCode["EVALUATING_HEALTH_CHECK"] = "EVALUATING_HEALTH_CHECK";
    ContainerServiceStateDetailCode["PROVISIONING_CERTIFICATE"] = "PROVISIONING_CERTIFICATE";
    ContainerServiceStateDetailCode["PROVISIONING_SERVICE"] = "PROVISIONING_SERVICE";
    ContainerServiceStateDetailCode["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
})(ContainerServiceStateDetailCode || (ContainerServiceStateDetailCode = {}));
export var ContainerServiceStateDetail;
(function (ContainerServiceStateDetail) {
    /**
     * @internal
     */
    ContainerServiceStateDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerServiceStateDetail || (ContainerServiceStateDetail = {}));
export var ContainerService;
(function (ContainerService) {
    /**
     * @internal
     */
    ContainerService.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerService || (ContainerService = {}));
export var EndpointRequest;
(function (EndpointRequest) {
    /**
     * @internal
     */
    EndpointRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndpointRequest || (EndpointRequest = {}));
export var ContainerServiceDeploymentRequest;
(function (ContainerServiceDeploymentRequest) {
    /**
     * @internal
     */
    ContainerServiceDeploymentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerServiceDeploymentRequest || (ContainerServiceDeploymentRequest = {}));
export var ContainerServiceLogEvent;
(function (ContainerServiceLogEvent) {
    /**
     * @internal
     */
    ContainerServiceLogEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerServiceLogEvent || (ContainerServiceLogEvent = {}));
export var ContainerServiceMetricName;
(function (ContainerServiceMetricName) {
    ContainerServiceMetricName["CPUUtilization"] = "CPUUtilization";
    ContainerServiceMetricName["MemoryUtilization"] = "MemoryUtilization";
})(ContainerServiceMetricName || (ContainerServiceMetricName = {}));
export var ContainerServicePower;
(function (ContainerServicePower) {
    /**
     * @internal
     */
    ContainerServicePower.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerServicePower || (ContainerServicePower = {}));
export var ContainerServiceRegistryLogin;
(function (ContainerServiceRegistryLogin) {
    /**
     * @internal
     */
    ContainerServiceRegistryLogin.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerServiceRegistryLogin || (ContainerServiceRegistryLogin = {}));
export var ContainerServicesListResult;
(function (ContainerServicesListResult) {
    /**
     * @internal
     */
    ContainerServicesListResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerServicesListResult || (ContainerServicesListResult = {}));
export var CopySnapshotRequest;
(function (CopySnapshotRequest) {
    /**
     * @internal
     */
    CopySnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CopySnapshotRequest || (CopySnapshotRequest = {}));
export var CopySnapshotResult;
(function (CopySnapshotResult) {
    /**
     * @internal
     */
    CopySnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CopySnapshotResult || (CopySnapshotResult = {}));
export var CreateCertificateRequest;
(function (CreateCertificateRequest) {
    /**
     * @internal
     */
    CreateCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCertificateRequest || (CreateCertificateRequest = {}));
export var CreateCertificateResult;
(function (CreateCertificateResult) {
    /**
     * @internal
     */
    CreateCertificateResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCertificateResult || (CreateCertificateResult = {}));
export var PortInfoSourceType;
(function (PortInfoSourceType) {
    PortInfoSourceType["Closed"] = "CLOSED";
    PortInfoSourceType["Default"] = "DEFAULT";
    PortInfoSourceType["Instance"] = "INSTANCE";
    PortInfoSourceType["None"] = "NONE";
})(PortInfoSourceType || (PortInfoSourceType = {}));
export var InstanceEntry;
(function (InstanceEntry) {
    /**
     * @internal
     */
    InstanceEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceEntry || (InstanceEntry = {}));
export var CreateCloudFormationStackRequest;
(function (CreateCloudFormationStackRequest) {
    /**
     * @internal
     */
    CreateCloudFormationStackRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCloudFormationStackRequest || (CreateCloudFormationStackRequest = {}));
export var CreateCloudFormationStackResult;
(function (CreateCloudFormationStackResult) {
    /**
     * @internal
     */
    CreateCloudFormationStackResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCloudFormationStackResult || (CreateCloudFormationStackResult = {}));
export var CreateContactMethodRequest;
(function (CreateContactMethodRequest) {
    /**
     * @internal
     */
    CreateContactMethodRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContactMethodRequest || (CreateContactMethodRequest = {}));
export var CreateContactMethodResult;
(function (CreateContactMethodResult) {
    /**
     * @internal
     */
    CreateContactMethodResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContactMethodResult || (CreateContactMethodResult = {}));
export var CreateContainerServiceRequest;
(function (CreateContainerServiceRequest) {
    /**
     * @internal
     */
    CreateContainerServiceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContainerServiceRequest || (CreateContainerServiceRequest = {}));
export var CreateContainerServiceResult;
(function (CreateContainerServiceResult) {
    /**
     * @internal
     */
    CreateContainerServiceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContainerServiceResult || (CreateContainerServiceResult = {}));
export var CreateContainerServiceDeploymentRequest;
(function (CreateContainerServiceDeploymentRequest) {
    /**
     * @internal
     */
    CreateContainerServiceDeploymentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContainerServiceDeploymentRequest || (CreateContainerServiceDeploymentRequest = {}));
export var CreateContainerServiceDeploymentResult;
(function (CreateContainerServiceDeploymentResult) {
    /**
     * @internal
     */
    CreateContainerServiceDeploymentResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContainerServiceDeploymentResult || (CreateContainerServiceDeploymentResult = {}));
export var CreateContainerServiceRegistryLoginRequest;
(function (CreateContainerServiceRegistryLoginRequest) {
    /**
     * @internal
     */
    CreateContainerServiceRegistryLoginRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContainerServiceRegistryLoginRequest || (CreateContainerServiceRegistryLoginRequest = {}));
export var CreateContainerServiceRegistryLoginResult;
(function (CreateContainerServiceRegistryLoginResult) {
    /**
     * @internal
     */
    CreateContainerServiceRegistryLoginResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContainerServiceRegistryLoginResult || (CreateContainerServiceRegistryLoginResult = {}));
export var CreateDiskRequest;
(function (CreateDiskRequest) {
    /**
     * @internal
     */
    CreateDiskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDiskRequest || (CreateDiskRequest = {}));
export var CreateDiskResult;
(function (CreateDiskResult) {
    /**
     * @internal
     */
    CreateDiskResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDiskResult || (CreateDiskResult = {}));
export var CreateDiskFromSnapshotRequest;
(function (CreateDiskFromSnapshotRequest) {
    /**
     * @internal
     */
    CreateDiskFromSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDiskFromSnapshotRequest || (CreateDiskFromSnapshotRequest = {}));
export var CreateDiskFromSnapshotResult;
(function (CreateDiskFromSnapshotResult) {
    /**
     * @internal
     */
    CreateDiskFromSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDiskFromSnapshotResult || (CreateDiskFromSnapshotResult = {}));
export var CreateDiskSnapshotRequest;
(function (CreateDiskSnapshotRequest) {
    /**
     * @internal
     */
    CreateDiskSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDiskSnapshotRequest || (CreateDiskSnapshotRequest = {}));
export var CreateDiskSnapshotResult;
(function (CreateDiskSnapshotResult) {
    /**
     * @internal
     */
    CreateDiskSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDiskSnapshotResult || (CreateDiskSnapshotResult = {}));
export var IpAddressType;
(function (IpAddressType) {
    IpAddressType["DUALSTACK"] = "dualstack";
    IpAddressType["IPV4"] = "ipv4";
})(IpAddressType || (IpAddressType = {}));
export var OriginProtocolPolicyEnum;
(function (OriginProtocolPolicyEnum) {
    OriginProtocolPolicyEnum["HTTPOnly"] = "http-only";
    OriginProtocolPolicyEnum["HTTPSOnly"] = "https-only";
})(OriginProtocolPolicyEnum || (OriginProtocolPolicyEnum = {}));
export var InputOrigin;
(function (InputOrigin) {
    /**
     * @internal
     */
    InputOrigin.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputOrigin || (InputOrigin = {}));
export var CreateDistributionRequest;
(function (CreateDistributionRequest) {
    /**
     * @internal
     */
    CreateDistributionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDistributionRequest || (CreateDistributionRequest = {}));
export var Origin;
(function (Origin) {
    /**
     * @internal
     */
    Origin.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Origin || (Origin = {}));
export var LightsailDistribution;
(function (LightsailDistribution) {
    /**
     * @internal
     */
    LightsailDistribution.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LightsailDistribution || (LightsailDistribution = {}));
export var CreateDistributionResult;
(function (CreateDistributionResult) {
    /**
     * @internal
     */
    CreateDistributionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDistributionResult || (CreateDistributionResult = {}));
export var CreateDomainRequest;
(function (CreateDomainRequest) {
    /**
     * @internal
     */
    CreateDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDomainRequest || (CreateDomainRequest = {}));
export var CreateDomainResult;
(function (CreateDomainResult) {
    /**
     * @internal
     */
    CreateDomainResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDomainResult || (CreateDomainResult = {}));
export var DomainEntry;
(function (DomainEntry) {
    /**
     * @internal
     */
    DomainEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainEntry || (DomainEntry = {}));
export var CreateDomainEntryRequest;
(function (CreateDomainEntryRequest) {
    /**
     * @internal
     */
    CreateDomainEntryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDomainEntryRequest || (CreateDomainEntryRequest = {}));
export var CreateDomainEntryResult;
(function (CreateDomainEntryResult) {
    /**
     * @internal
     */
    CreateDomainEntryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDomainEntryResult || (CreateDomainEntryResult = {}));
export var CreateInstancesRequest;
(function (CreateInstancesRequest) {
    /**
     * @internal
     */
    CreateInstancesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInstancesRequest || (CreateInstancesRequest = {}));
export var CreateInstancesResult;
(function (CreateInstancesResult) {
    /**
     * @internal
     */
    CreateInstancesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInstancesResult || (CreateInstancesResult = {}));
export var CreateInstancesFromSnapshotRequest;
(function (CreateInstancesFromSnapshotRequest) {
    /**
     * @internal
     */
    CreateInstancesFromSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInstancesFromSnapshotRequest || (CreateInstancesFromSnapshotRequest = {}));
export var CreateInstancesFromSnapshotResult;
(function (CreateInstancesFromSnapshotResult) {
    /**
     * @internal
     */
    CreateInstancesFromSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInstancesFromSnapshotResult || (CreateInstancesFromSnapshotResult = {}));
export var CreateInstanceSnapshotRequest;
(function (CreateInstanceSnapshotRequest) {
    /**
     * @internal
     */
    CreateInstanceSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInstanceSnapshotRequest || (CreateInstanceSnapshotRequest = {}));
export var CreateInstanceSnapshotResult;
(function (CreateInstanceSnapshotResult) {
    /**
     * @internal
     */
    CreateInstanceSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInstanceSnapshotResult || (CreateInstanceSnapshotResult = {}));
export var CreateKeyPairRequest;
(function (CreateKeyPairRequest) {
    /**
     * @internal
     */
    CreateKeyPairRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateKeyPairRequest || (CreateKeyPairRequest = {}));
export var KeyPair;
(function (KeyPair) {
    /**
     * @internal
     */
    KeyPair.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KeyPair || (KeyPair = {}));
export var CreateKeyPairResult;
(function (CreateKeyPairResult) {
    /**
     * @internal
     */
    CreateKeyPairResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateKeyPairResult || (CreateKeyPairResult = {}));
export var CreateLoadBalancerRequest;
(function (CreateLoadBalancerRequest) {
    /**
     * @internal
     */
    CreateLoadBalancerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLoadBalancerRequest || (CreateLoadBalancerRequest = {}));
export var CreateLoadBalancerResult;
(function (CreateLoadBalancerResult) {
    /**
     * @internal
     */
    CreateLoadBalancerResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLoadBalancerResult || (CreateLoadBalancerResult = {}));
export var CreateLoadBalancerTlsCertificateRequest;
(function (CreateLoadBalancerTlsCertificateRequest) {
    /**
     * @internal
     */
    CreateLoadBalancerTlsCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLoadBalancerTlsCertificateRequest || (CreateLoadBalancerTlsCertificateRequest = {}));
export var CreateLoadBalancerTlsCertificateResult;
(function (CreateLoadBalancerTlsCertificateResult) {
    /**
     * @internal
     */
    CreateLoadBalancerTlsCertificateResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLoadBalancerTlsCertificateResult || (CreateLoadBalancerTlsCertificateResult = {}));
export var CreateRelationalDatabaseRequest;
(function (CreateRelationalDatabaseRequest) {
    /**
     * @internal
     */
    CreateRelationalDatabaseRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.masterUserPassword && { masterUserPassword: SENSITIVE_STRING }))); };
})(CreateRelationalDatabaseRequest || (CreateRelationalDatabaseRequest = {}));
export var CreateRelationalDatabaseResult;
(function (CreateRelationalDatabaseResult) {
    /**
     * @internal
     */
    CreateRelationalDatabaseResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRelationalDatabaseResult || (CreateRelationalDatabaseResult = {}));
export var CreateRelationalDatabaseFromSnapshotRequest;
(function (CreateRelationalDatabaseFromSnapshotRequest) {
    /**
     * @internal
     */
    CreateRelationalDatabaseFromSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRelationalDatabaseFromSnapshotRequest || (CreateRelationalDatabaseFromSnapshotRequest = {}));
export var CreateRelationalDatabaseFromSnapshotResult;
(function (CreateRelationalDatabaseFromSnapshotResult) {
    /**
     * @internal
     */
    CreateRelationalDatabaseFromSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRelationalDatabaseFromSnapshotResult || (CreateRelationalDatabaseFromSnapshotResult = {}));
export var CreateRelationalDatabaseSnapshotRequest;
(function (CreateRelationalDatabaseSnapshotRequest) {
    /**
     * @internal
     */
    CreateRelationalDatabaseSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRelationalDatabaseSnapshotRequest || (CreateRelationalDatabaseSnapshotRequest = {}));
export var CreateRelationalDatabaseSnapshotResult;
(function (CreateRelationalDatabaseSnapshotResult) {
    /**
     * @internal
     */
    CreateRelationalDatabaseSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRelationalDatabaseSnapshotResult || (CreateRelationalDatabaseSnapshotResult = {}));
export var DeleteAlarmRequest;
(function (DeleteAlarmRequest) {
    /**
     * @internal
     */
    DeleteAlarmRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAlarmRequest || (DeleteAlarmRequest = {}));
export var DeleteAlarmResult;
(function (DeleteAlarmResult) {
    /**
     * @internal
     */
    DeleteAlarmResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAlarmResult || (DeleteAlarmResult = {}));
export var DeleteAutoSnapshotRequest;
(function (DeleteAutoSnapshotRequest) {
    /**
     * @internal
     */
    DeleteAutoSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAutoSnapshotRequest || (DeleteAutoSnapshotRequest = {}));
export var DeleteAutoSnapshotResult;
(function (DeleteAutoSnapshotResult) {
    /**
     * @internal
     */
    DeleteAutoSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAutoSnapshotResult || (DeleteAutoSnapshotResult = {}));
export var DeleteCertificateRequest;
(function (DeleteCertificateRequest) {
    /**
     * @internal
     */
    DeleteCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCertificateRequest || (DeleteCertificateRequest = {}));
export var DeleteCertificateResult;
(function (DeleteCertificateResult) {
    /**
     * @internal
     */
    DeleteCertificateResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCertificateResult || (DeleteCertificateResult = {}));
export var DeleteContactMethodRequest;
(function (DeleteContactMethodRequest) {
    /**
     * @internal
     */
    DeleteContactMethodRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContactMethodRequest || (DeleteContactMethodRequest = {}));
export var DeleteContactMethodResult;
(function (DeleteContactMethodResult) {
    /**
     * @internal
     */
    DeleteContactMethodResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContactMethodResult || (DeleteContactMethodResult = {}));
export var DeleteContainerImageRequest;
(function (DeleteContainerImageRequest) {
    /**
     * @internal
     */
    DeleteContainerImageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContainerImageRequest || (DeleteContainerImageRequest = {}));
export var DeleteContainerImageResult;
(function (DeleteContainerImageResult) {
    /**
     * @internal
     */
    DeleteContainerImageResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContainerImageResult || (DeleteContainerImageResult = {}));
export var DeleteContainerServiceRequest;
(function (DeleteContainerServiceRequest) {
    /**
     * @internal
     */
    DeleteContainerServiceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContainerServiceRequest || (DeleteContainerServiceRequest = {}));
export var DeleteContainerServiceResult;
(function (DeleteContainerServiceResult) {
    /**
     * @internal
     */
    DeleteContainerServiceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContainerServiceResult || (DeleteContainerServiceResult = {}));
export var DeleteDiskRequest;
(function (DeleteDiskRequest) {
    /**
     * @internal
     */
    DeleteDiskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDiskRequest || (DeleteDiskRequest = {}));
export var DeleteDiskResult;
(function (DeleteDiskResult) {
    /**
     * @internal
     */
    DeleteDiskResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDiskResult || (DeleteDiskResult = {}));
export var DeleteDiskSnapshotRequest;
(function (DeleteDiskSnapshotRequest) {
    /**
     * @internal
     */
    DeleteDiskSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDiskSnapshotRequest || (DeleteDiskSnapshotRequest = {}));
export var DeleteDiskSnapshotResult;
(function (DeleteDiskSnapshotResult) {
    /**
     * @internal
     */
    DeleteDiskSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDiskSnapshotResult || (DeleteDiskSnapshotResult = {}));
export var DeleteDistributionRequest;
(function (DeleteDistributionRequest) {
    /**
     * @internal
     */
    DeleteDistributionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDistributionRequest || (DeleteDistributionRequest = {}));
export var DeleteDistributionResult;
(function (DeleteDistributionResult) {
    /**
     * @internal
     */
    DeleteDistributionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDistributionResult || (DeleteDistributionResult = {}));
export var DeleteDomainRequest;
(function (DeleteDomainRequest) {
    /**
     * @internal
     */
    DeleteDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDomainRequest || (DeleteDomainRequest = {}));
export var DeleteDomainResult;
(function (DeleteDomainResult) {
    /**
     * @internal
     */
    DeleteDomainResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDomainResult || (DeleteDomainResult = {}));
export var DeleteDomainEntryRequest;
(function (DeleteDomainEntryRequest) {
    /**
     * @internal
     */
    DeleteDomainEntryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDomainEntryRequest || (DeleteDomainEntryRequest = {}));
export var DeleteDomainEntryResult;
(function (DeleteDomainEntryResult) {
    /**
     * @internal
     */
    DeleteDomainEntryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDomainEntryResult || (DeleteDomainEntryResult = {}));
export var DeleteInstanceRequest;
(function (DeleteInstanceRequest) {
    /**
     * @internal
     */
    DeleteInstanceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInstanceRequest || (DeleteInstanceRequest = {}));
export var DeleteInstanceResult;
(function (DeleteInstanceResult) {
    /**
     * @internal
     */
    DeleteInstanceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInstanceResult || (DeleteInstanceResult = {}));
export var DeleteInstanceSnapshotRequest;
(function (DeleteInstanceSnapshotRequest) {
    /**
     * @internal
     */
    DeleteInstanceSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInstanceSnapshotRequest || (DeleteInstanceSnapshotRequest = {}));
export var DeleteInstanceSnapshotResult;
(function (DeleteInstanceSnapshotResult) {
    /**
     * @internal
     */
    DeleteInstanceSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInstanceSnapshotResult || (DeleteInstanceSnapshotResult = {}));
export var DeleteKeyPairRequest;
(function (DeleteKeyPairRequest) {
    /**
     * @internal
     */
    DeleteKeyPairRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteKeyPairRequest || (DeleteKeyPairRequest = {}));
export var DeleteKeyPairResult;
(function (DeleteKeyPairResult) {
    /**
     * @internal
     */
    DeleteKeyPairResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteKeyPairResult || (DeleteKeyPairResult = {}));
export var DeleteKnownHostKeysRequest;
(function (DeleteKnownHostKeysRequest) {
    /**
     * @internal
     */
    DeleteKnownHostKeysRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteKnownHostKeysRequest || (DeleteKnownHostKeysRequest = {}));
export var DeleteKnownHostKeysResult;
(function (DeleteKnownHostKeysResult) {
    /**
     * @internal
     */
    DeleteKnownHostKeysResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteKnownHostKeysResult || (DeleteKnownHostKeysResult = {}));
export var DeleteLoadBalancerRequest;
(function (DeleteLoadBalancerRequest) {
    /**
     * @internal
     */
    DeleteLoadBalancerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLoadBalancerRequest || (DeleteLoadBalancerRequest = {}));
export var DeleteLoadBalancerResult;
(function (DeleteLoadBalancerResult) {
    /**
     * @internal
     */
    DeleteLoadBalancerResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLoadBalancerResult || (DeleteLoadBalancerResult = {}));
export var DeleteLoadBalancerTlsCertificateRequest;
(function (DeleteLoadBalancerTlsCertificateRequest) {
    /**
     * @internal
     */
    DeleteLoadBalancerTlsCertificateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLoadBalancerTlsCertificateRequest || (DeleteLoadBalancerTlsCertificateRequest = {}));
export var DeleteLoadBalancerTlsCertificateResult;
(function (DeleteLoadBalancerTlsCertificateResult) {
    /**
     * @internal
     */
    DeleteLoadBalancerTlsCertificateResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLoadBalancerTlsCertificateResult || (DeleteLoadBalancerTlsCertificateResult = {}));
export var DeleteRelationalDatabaseRequest;
(function (DeleteRelationalDatabaseRequest) {
    /**
     * @internal
     */
    DeleteRelationalDatabaseRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRelationalDatabaseRequest || (DeleteRelationalDatabaseRequest = {}));
export var DeleteRelationalDatabaseResult;
(function (DeleteRelationalDatabaseResult) {
    /**
     * @internal
     */
    DeleteRelationalDatabaseResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRelationalDatabaseResult || (DeleteRelationalDatabaseResult = {}));
export var DeleteRelationalDatabaseSnapshotRequest;
(function (DeleteRelationalDatabaseSnapshotRequest) {
    /**
     * @internal
     */
    DeleteRelationalDatabaseSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRelationalDatabaseSnapshotRequest || (DeleteRelationalDatabaseSnapshotRequest = {}));
export var DeleteRelationalDatabaseSnapshotResult;
(function (DeleteRelationalDatabaseSnapshotResult) {
    /**
     * @internal
     */
    DeleteRelationalDatabaseSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRelationalDatabaseSnapshotResult || (DeleteRelationalDatabaseSnapshotResult = {}));
export var DetachCertificateFromDistributionRequest;
(function (DetachCertificateFromDistributionRequest) {
    /**
     * @internal
     */
    DetachCertificateFromDistributionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachCertificateFromDistributionRequest || (DetachCertificateFromDistributionRequest = {}));
export var DetachCertificateFromDistributionResult;
(function (DetachCertificateFromDistributionResult) {
    /**
     * @internal
     */
    DetachCertificateFromDistributionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachCertificateFromDistributionResult || (DetachCertificateFromDistributionResult = {}));
export var DetachDiskRequest;
(function (DetachDiskRequest) {
    /**
     * @internal
     */
    DetachDiskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachDiskRequest || (DetachDiskRequest = {}));
export var DetachDiskResult;
(function (DetachDiskResult) {
    /**
     * @internal
     */
    DetachDiskResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachDiskResult || (DetachDiskResult = {}));
export var DetachInstancesFromLoadBalancerRequest;
(function (DetachInstancesFromLoadBalancerRequest) {
    /**
     * @internal
     */
    DetachInstancesFromLoadBalancerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachInstancesFromLoadBalancerRequest || (DetachInstancesFromLoadBalancerRequest = {}));
export var DetachInstancesFromLoadBalancerResult;
(function (DetachInstancesFromLoadBalancerResult) {
    /**
     * @internal
     */
    DetachInstancesFromLoadBalancerResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachInstancesFromLoadBalancerResult || (DetachInstancesFromLoadBalancerResult = {}));
export var DetachStaticIpRequest;
(function (DetachStaticIpRequest) {
    /**
     * @internal
     */
    DetachStaticIpRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachStaticIpRequest || (DetachStaticIpRequest = {}));
export var DetachStaticIpResult;
(function (DetachStaticIpResult) {
    /**
     * @internal
     */
    DetachStaticIpResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetachStaticIpResult || (DetachStaticIpResult = {}));
export var DisableAddOnRequest;
(function (DisableAddOnRequest) {
    /**
     * @internal
     */
    DisableAddOnRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableAddOnRequest || (DisableAddOnRequest = {}));
export var DisableAddOnResult;
(function (DisableAddOnResult) {
    /**
     * @internal
     */
    DisableAddOnResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableAddOnResult || (DisableAddOnResult = {}));
export var DiskState;
(function (DiskState) {
    DiskState["Available"] = "available";
    DiskState["Error"] = "error";
    DiskState["InUse"] = "in-use";
    DiskState["Pending"] = "pending";
    DiskState["Unknown"] = "unknown";
})(DiskState || (DiskState = {}));
export var Disk;
(function (Disk) {
    /**
     * @internal
     */
    Disk.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Disk || (Disk = {}));
export var DiskInfo;
(function (DiskInfo) {
    /**
     * @internal
     */
    DiskInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DiskInfo || (DiskInfo = {}));
export var DiskSnapshotState;
(function (DiskSnapshotState) {
    DiskSnapshotState["Completed"] = "completed";
    DiskSnapshotState["Error"] = "error";
    DiskSnapshotState["Pending"] = "pending";
    DiskSnapshotState["Unknown"] = "unknown";
})(DiskSnapshotState || (DiskSnapshotState = {}));
export var DiskSnapshot;
(function (DiskSnapshot) {
    /**
     * @internal
     */
    DiskSnapshot.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DiskSnapshot || (DiskSnapshot = {}));
export var DiskSnapshotInfo;
(function (DiskSnapshotInfo) {
    /**
     * @internal
     */
    DiskSnapshotInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DiskSnapshotInfo || (DiskSnapshotInfo = {}));
export var DistributionBundle;
(function (DistributionBundle) {
    /**
     * @internal
     */
    DistributionBundle.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DistributionBundle || (DistributionBundle = {}));
export var DistributionMetricName;
(function (DistributionMetricName) {
    DistributionMetricName["BytesDownloaded"] = "BytesDownloaded";
    DistributionMetricName["BytesUploaded"] = "BytesUploaded";
    DistributionMetricName["Http4xxErrorRate"] = "Http4xxErrorRate";
    DistributionMetricName["Http5xxErrorRate"] = "Http5xxErrorRate";
    DistributionMetricName["Requests"] = "Requests";
    DistributionMetricName["TotalErrorRate"] = "TotalErrorRate";
})(DistributionMetricName || (DistributionMetricName = {}));
export var Domain;
(function (Domain) {
    /**
     * @internal
     */
    Domain.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Domain || (Domain = {}));
export var DownloadDefaultKeyPairRequest;
(function (DownloadDefaultKeyPairRequest) {
    /**
     * @internal
     */
    DownloadDefaultKeyPairRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DownloadDefaultKeyPairRequest || (DownloadDefaultKeyPairRequest = {}));
export var DownloadDefaultKeyPairResult;
(function (DownloadDefaultKeyPairResult) {
    /**
     * @internal
     */
    DownloadDefaultKeyPairResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DownloadDefaultKeyPairResult || (DownloadDefaultKeyPairResult = {}));
export var EnableAddOnRequest;
(function (EnableAddOnRequest) {
    /**
     * @internal
     */
    EnableAddOnRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableAddOnRequest || (EnableAddOnRequest = {}));
export var EnableAddOnResult;
(function (EnableAddOnResult) {
    /**
     * @internal
     */
    EnableAddOnResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableAddOnResult || (EnableAddOnResult = {}));
export var ExportSnapshotRequest;
(function (ExportSnapshotRequest) {
    /**
     * @internal
     */
    ExportSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportSnapshotRequest || (ExportSnapshotRequest = {}));
export var ExportSnapshotResult;
(function (ExportSnapshotResult) {
    /**
     * @internal
     */
    ExportSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportSnapshotResult || (ExportSnapshotResult = {}));
export var InstanceSnapshotInfo;
(function (InstanceSnapshotInfo) {
    /**
     * @internal
     */
    InstanceSnapshotInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceSnapshotInfo || (InstanceSnapshotInfo = {}));
export var ExportSnapshotRecordSourceType;
(function (ExportSnapshotRecordSourceType) {
    ExportSnapshotRecordSourceType["DiskSnapshot"] = "DiskSnapshot";
    ExportSnapshotRecordSourceType["InstanceSnapshot"] = "InstanceSnapshot";
})(ExportSnapshotRecordSourceType || (ExportSnapshotRecordSourceType = {}));
export var ExportSnapshotRecordSourceInfo;
(function (ExportSnapshotRecordSourceInfo) {
    /**
     * @internal
     */
    ExportSnapshotRecordSourceInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportSnapshotRecordSourceInfo || (ExportSnapshotRecordSourceInfo = {}));
export var ExportSnapshotRecord;
(function (ExportSnapshotRecord) {
    /**
     * @internal
     */
    ExportSnapshotRecord.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportSnapshotRecord || (ExportSnapshotRecord = {}));
export var GetActiveNamesRequest;
(function (GetActiveNamesRequest) {
    /**
     * @internal
     */
    GetActiveNamesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetActiveNamesRequest || (GetActiveNamesRequest = {}));
export var GetActiveNamesResult;
(function (GetActiveNamesResult) {
    /**
     * @internal
     */
    GetActiveNamesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetActiveNamesResult || (GetActiveNamesResult = {}));
export var GetAlarmsRequest;
(function (GetAlarmsRequest) {
    /**
     * @internal
     */
    GetAlarmsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAlarmsRequest || (GetAlarmsRequest = {}));
export var GetAlarmsResult;
(function (GetAlarmsResult) {
    /**
     * @internal
     */
    GetAlarmsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAlarmsResult || (GetAlarmsResult = {}));
export var GetAutoSnapshotsRequest;
(function (GetAutoSnapshotsRequest) {
    /**
     * @internal
     */
    GetAutoSnapshotsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAutoSnapshotsRequest || (GetAutoSnapshotsRequest = {}));
export var GetAutoSnapshotsResult;
(function (GetAutoSnapshotsResult) {
    /**
     * @internal
     */
    GetAutoSnapshotsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAutoSnapshotsResult || (GetAutoSnapshotsResult = {}));
export var GetBlueprintsRequest;
(function (GetBlueprintsRequest) {
    /**
     * @internal
     */
    GetBlueprintsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBlueprintsRequest || (GetBlueprintsRequest = {}));
export var GetBlueprintsResult;
(function (GetBlueprintsResult) {
    /**
     * @internal
     */
    GetBlueprintsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBlueprintsResult || (GetBlueprintsResult = {}));
export var GetBundlesRequest;
(function (GetBundlesRequest) {
    /**
     * @internal
     */
    GetBundlesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBundlesRequest || (GetBundlesRequest = {}));
export var GetBundlesResult;
(function (GetBundlesResult) {
    /**
     * @internal
     */
    GetBundlesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBundlesResult || (GetBundlesResult = {}));
export var GetCertificatesRequest;
(function (GetCertificatesRequest) {
    /**
     * @internal
     */
    GetCertificatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCertificatesRequest || (GetCertificatesRequest = {}));
export var GetCertificatesResult;
(function (GetCertificatesResult) {
    /**
     * @internal
     */
    GetCertificatesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCertificatesResult || (GetCertificatesResult = {}));
export var GetCloudFormationStackRecordsRequest;
(function (GetCloudFormationStackRecordsRequest) {
    /**
     * @internal
     */
    GetCloudFormationStackRecordsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCloudFormationStackRecordsRequest || (GetCloudFormationStackRecordsRequest = {}));
export var GetCloudFormationStackRecordsResult;
(function (GetCloudFormationStackRecordsResult) {
    /**
     * @internal
     */
    GetCloudFormationStackRecordsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCloudFormationStackRecordsResult || (GetCloudFormationStackRecordsResult = {}));
export var GetContactMethodsRequest;
(function (GetContactMethodsRequest) {
    /**
     * @internal
     */
    GetContactMethodsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContactMethodsRequest || (GetContactMethodsRequest = {}));
export var GetContactMethodsResult;
(function (GetContactMethodsResult) {
    /**
     * @internal
     */
    GetContactMethodsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContactMethodsResult || (GetContactMethodsResult = {}));
export var GetContainerAPIMetadataRequest;
(function (GetContainerAPIMetadataRequest) {
    /**
     * @internal
     */
    GetContainerAPIMetadataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerAPIMetadataRequest || (GetContainerAPIMetadataRequest = {}));
export var GetContainerAPIMetadataResult;
(function (GetContainerAPIMetadataResult) {
    /**
     * @internal
     */
    GetContainerAPIMetadataResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerAPIMetadataResult || (GetContainerAPIMetadataResult = {}));
export var GetContainerImagesRequest;
(function (GetContainerImagesRequest) {
    /**
     * @internal
     */
    GetContainerImagesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerImagesRequest || (GetContainerImagesRequest = {}));
export var GetContainerImagesResult;
(function (GetContainerImagesResult) {
    /**
     * @internal
     */
    GetContainerImagesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerImagesResult || (GetContainerImagesResult = {}));
export var GetContainerLogRequest;
(function (GetContainerLogRequest) {
    /**
     * @internal
     */
    GetContainerLogRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerLogRequest || (GetContainerLogRequest = {}));
export var GetContainerLogResult;
(function (GetContainerLogResult) {
    /**
     * @internal
     */
    GetContainerLogResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerLogResult || (GetContainerLogResult = {}));
export var GetContainerServiceDeploymentsRequest;
(function (GetContainerServiceDeploymentsRequest) {
    /**
     * @internal
     */
    GetContainerServiceDeploymentsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerServiceDeploymentsRequest || (GetContainerServiceDeploymentsRequest = {}));
export var GetContainerServiceDeploymentsResult;
(function (GetContainerServiceDeploymentsResult) {
    /**
     * @internal
     */
    GetContainerServiceDeploymentsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerServiceDeploymentsResult || (GetContainerServiceDeploymentsResult = {}));
export var GetContainerServiceMetricDataRequest;
(function (GetContainerServiceMetricDataRequest) {
    /**
     * @internal
     */
    GetContainerServiceMetricDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerServiceMetricDataRequest || (GetContainerServiceMetricDataRequest = {}));
export var MetricDatapoint;
(function (MetricDatapoint) {
    /**
     * @internal
     */
    MetricDatapoint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricDatapoint || (MetricDatapoint = {}));
export var GetContainerServiceMetricDataResult;
(function (GetContainerServiceMetricDataResult) {
    /**
     * @internal
     */
    GetContainerServiceMetricDataResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerServiceMetricDataResult || (GetContainerServiceMetricDataResult = {}));
export var GetContainerServicePowersRequest;
(function (GetContainerServicePowersRequest) {
    /**
     * @internal
     */
    GetContainerServicePowersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerServicePowersRequest || (GetContainerServicePowersRequest = {}));
export var GetContainerServicePowersResult;
(function (GetContainerServicePowersResult) {
    /**
     * @internal
     */
    GetContainerServicePowersResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerServicePowersResult || (GetContainerServicePowersResult = {}));
export var GetContainerServicesRequest;
(function (GetContainerServicesRequest) {
    /**
     * @internal
     */
    GetContainerServicesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerServicesRequest || (GetContainerServicesRequest = {}));
export var GetDiskRequest;
(function (GetDiskRequest) {
    /**
     * @internal
     */
    GetDiskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDiskRequest || (GetDiskRequest = {}));
export var GetDiskResult;
(function (GetDiskResult) {
    /**
     * @internal
     */
    GetDiskResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDiskResult || (GetDiskResult = {}));
export var GetDisksRequest;
(function (GetDisksRequest) {
    /**
     * @internal
     */
    GetDisksRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDisksRequest || (GetDisksRequest = {}));
export var GetDisksResult;
(function (GetDisksResult) {
    /**
     * @internal
     */
    GetDisksResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDisksResult || (GetDisksResult = {}));
export var GetDiskSnapshotRequest;
(function (GetDiskSnapshotRequest) {
    /**
     * @internal
     */
    GetDiskSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDiskSnapshotRequest || (GetDiskSnapshotRequest = {}));
export var GetDiskSnapshotResult;
(function (GetDiskSnapshotResult) {
    /**
     * @internal
     */
    GetDiskSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDiskSnapshotResult || (GetDiskSnapshotResult = {}));
export var GetDiskSnapshotsRequest;
(function (GetDiskSnapshotsRequest) {
    /**
     * @internal
     */
    GetDiskSnapshotsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDiskSnapshotsRequest || (GetDiskSnapshotsRequest = {}));
export var GetDiskSnapshotsResult;
(function (GetDiskSnapshotsResult) {
    /**
     * @internal
     */
    GetDiskSnapshotsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDiskSnapshotsResult || (GetDiskSnapshotsResult = {}));
export var GetDistributionBundlesRequest;
(function (GetDistributionBundlesRequest) {
    /**
     * @internal
     */
    GetDistributionBundlesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDistributionBundlesRequest || (GetDistributionBundlesRequest = {}));
export var GetDistributionBundlesResult;
(function (GetDistributionBundlesResult) {
    /**
     * @internal
     */
    GetDistributionBundlesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDistributionBundlesResult || (GetDistributionBundlesResult = {}));
export var GetDistributionLatestCacheResetRequest;
(function (GetDistributionLatestCacheResetRequest) {
    /**
     * @internal
     */
    GetDistributionLatestCacheResetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDistributionLatestCacheResetRequest || (GetDistributionLatestCacheResetRequest = {}));
export var GetDistributionLatestCacheResetResult;
(function (GetDistributionLatestCacheResetResult) {
    /**
     * @internal
     */
    GetDistributionLatestCacheResetResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDistributionLatestCacheResetResult || (GetDistributionLatestCacheResetResult = {}));
export var GetDistributionMetricDataRequest;
(function (GetDistributionMetricDataRequest) {
    /**
     * @internal
     */
    GetDistributionMetricDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDistributionMetricDataRequest || (GetDistributionMetricDataRequest = {}));
export var GetDistributionMetricDataResult;
(function (GetDistributionMetricDataResult) {
    /**
     * @internal
     */
    GetDistributionMetricDataResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDistributionMetricDataResult || (GetDistributionMetricDataResult = {}));
export var GetDistributionsRequest;
(function (GetDistributionsRequest) {
    /**
     * @internal
     */
    GetDistributionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDistributionsRequest || (GetDistributionsRequest = {}));
export var GetDistributionsResult;
(function (GetDistributionsResult) {
    /**
     * @internal
     */
    GetDistributionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDistributionsResult || (GetDistributionsResult = {}));
export var GetDomainRequest;
(function (GetDomainRequest) {
    /**
     * @internal
     */
    GetDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDomainRequest || (GetDomainRequest = {}));
export var GetDomainResult;
(function (GetDomainResult) {
    /**
     * @internal
     */
    GetDomainResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDomainResult || (GetDomainResult = {}));
export var GetDomainsRequest;
(function (GetDomainsRequest) {
    /**
     * @internal
     */
    GetDomainsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDomainsRequest || (GetDomainsRequest = {}));
export var GetDomainsResult;
(function (GetDomainsResult) {
    /**
     * @internal
     */
    GetDomainsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDomainsResult || (GetDomainsResult = {}));
export var GetExportSnapshotRecordsRequest;
(function (GetExportSnapshotRecordsRequest) {
    /**
     * @internal
     */
    GetExportSnapshotRecordsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetExportSnapshotRecordsRequest || (GetExportSnapshotRecordsRequest = {}));
export var GetExportSnapshotRecordsResult;
(function (GetExportSnapshotRecordsResult) {
    /**
     * @internal
     */
    GetExportSnapshotRecordsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetExportSnapshotRecordsResult || (GetExportSnapshotRecordsResult = {}));
export var GetInstanceRequest;
(function (GetInstanceRequest) {
    /**
     * @internal
     */
    GetInstanceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceRequest || (GetInstanceRequest = {}));
export var InstanceHardware;
(function (InstanceHardware) {
    /**
     * @internal
     */
    InstanceHardware.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceHardware || (InstanceHardware = {}));
export var MonthlyTransfer;
(function (MonthlyTransfer) {
    /**
     * @internal
     */
    MonthlyTransfer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonthlyTransfer || (MonthlyTransfer = {}));
export var PortAccessType;
(function (PortAccessType) {
    PortAccessType["Private"] = "Private";
    PortAccessType["Public"] = "Public";
})(PortAccessType || (PortAccessType = {}));
export var InstancePortInfo;
(function (InstancePortInfo) {
    /**
     * @internal
     */
    InstancePortInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstancePortInfo || (InstancePortInfo = {}));
export var InstanceNetworking;
(function (InstanceNetworking) {
    /**
     * @internal
     */
    InstanceNetworking.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceNetworking || (InstanceNetworking = {}));
export var InstanceState;
(function (InstanceState) {
    /**
     * @internal
     */
    InstanceState.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceState || (InstanceState = {}));
export var Instance;
(function (Instance) {
    /**
     * @internal
     */
    Instance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Instance || (Instance = {}));
export var GetInstanceResult;
(function (GetInstanceResult) {
    /**
     * @internal
     */
    GetInstanceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceResult || (GetInstanceResult = {}));
export var InstanceAccessProtocol;
(function (InstanceAccessProtocol) {
    InstanceAccessProtocol["rdp"] = "rdp";
    InstanceAccessProtocol["ssh"] = "ssh";
})(InstanceAccessProtocol || (InstanceAccessProtocol = {}));
export var GetInstanceAccessDetailsRequest;
(function (GetInstanceAccessDetailsRequest) {
    /**
     * @internal
     */
    GetInstanceAccessDetailsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceAccessDetailsRequest || (GetInstanceAccessDetailsRequest = {}));
export var HostKeyAttributes;
(function (HostKeyAttributes) {
    /**
     * @internal
     */
    HostKeyAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HostKeyAttributes || (HostKeyAttributes = {}));
export var PasswordData;
(function (PasswordData) {
    /**
     * @internal
     */
    PasswordData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PasswordData || (PasswordData = {}));
export var InstanceAccessDetails;
(function (InstanceAccessDetails) {
    /**
     * @internal
     */
    InstanceAccessDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceAccessDetails || (InstanceAccessDetails = {}));
export var GetInstanceAccessDetailsResult;
(function (GetInstanceAccessDetailsResult) {
    /**
     * @internal
     */
    GetInstanceAccessDetailsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceAccessDetailsResult || (GetInstanceAccessDetailsResult = {}));
export var InstanceMetricName;
(function (InstanceMetricName) {
    InstanceMetricName["BurstCapacityPercentage"] = "BurstCapacityPercentage";
    InstanceMetricName["BurstCapacityTime"] = "BurstCapacityTime";
    InstanceMetricName["CPUUtilization"] = "CPUUtilization";
    InstanceMetricName["NetworkIn"] = "NetworkIn";
    InstanceMetricName["NetworkOut"] = "NetworkOut";
    InstanceMetricName["StatusCheckFailed"] = "StatusCheckFailed";
    InstanceMetricName["StatusCheckFailed_Instance"] = "StatusCheckFailed_Instance";
    InstanceMetricName["StatusCheckFailed_System"] = "StatusCheckFailed_System";
})(InstanceMetricName || (InstanceMetricName = {}));
export var GetInstanceMetricDataRequest;
(function (GetInstanceMetricDataRequest) {
    /**
     * @internal
     */
    GetInstanceMetricDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceMetricDataRequest || (GetInstanceMetricDataRequest = {}));
export var GetInstanceMetricDataResult;
(function (GetInstanceMetricDataResult) {
    /**
     * @internal
     */
    GetInstanceMetricDataResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceMetricDataResult || (GetInstanceMetricDataResult = {}));
export var GetInstancePortStatesRequest;
(function (GetInstancePortStatesRequest) {
    /**
     * @internal
     */
    GetInstancePortStatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstancePortStatesRequest || (GetInstancePortStatesRequest = {}));
export var PortState;
(function (PortState) {
    PortState["Closed"] = "closed";
    PortState["Open"] = "open";
})(PortState || (PortState = {}));
export var InstancePortState;
(function (InstancePortState) {
    /**
     * @internal
     */
    InstancePortState.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstancePortState || (InstancePortState = {}));
export var GetInstancePortStatesResult;
(function (GetInstancePortStatesResult) {
    /**
     * @internal
     */
    GetInstancePortStatesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstancePortStatesResult || (GetInstancePortStatesResult = {}));
export var GetInstancesRequest;
(function (GetInstancesRequest) {
    /**
     * @internal
     */
    GetInstancesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstancesRequest || (GetInstancesRequest = {}));
export var GetInstancesResult;
(function (GetInstancesResult) {
    /**
     * @internal
     */
    GetInstancesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstancesResult || (GetInstancesResult = {}));
export var GetInstanceSnapshotRequest;
(function (GetInstanceSnapshotRequest) {
    /**
     * @internal
     */
    GetInstanceSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceSnapshotRequest || (GetInstanceSnapshotRequest = {}));
export var InstanceSnapshotState;
(function (InstanceSnapshotState) {
    InstanceSnapshotState["Available"] = "available";
    InstanceSnapshotState["Error"] = "error";
    InstanceSnapshotState["Pending"] = "pending";
})(InstanceSnapshotState || (InstanceSnapshotState = {}));
export var InstanceSnapshot;
(function (InstanceSnapshot) {
    /**
     * @internal
     */
    InstanceSnapshot.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceSnapshot || (InstanceSnapshot = {}));
export var GetInstanceSnapshotResult;
(function (GetInstanceSnapshotResult) {
    /**
     * @internal
     */
    GetInstanceSnapshotResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceSnapshotResult || (GetInstanceSnapshotResult = {}));
export var GetInstanceSnapshotsRequest;
(function (GetInstanceSnapshotsRequest) {
    /**
     * @internal
     */
    GetInstanceSnapshotsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceSnapshotsRequest || (GetInstanceSnapshotsRequest = {}));
export var GetInstanceSnapshotsResult;
(function (GetInstanceSnapshotsResult) {
    /**
     * @internal
     */
    GetInstanceSnapshotsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceSnapshotsResult || (GetInstanceSnapshotsResult = {}));
export var GetInstanceStateRequest;
(function (GetInstanceStateRequest) {
    /**
     * @internal
     */
    GetInstanceStateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceStateRequest || (GetInstanceStateRequest = {}));
export var GetInstanceStateResult;
(function (GetInstanceStateResult) {
    /**
     * @internal
     */
    GetInstanceStateResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInstanceStateResult || (GetInstanceStateResult = {}));
//# sourceMappingURL=models_0.js.map