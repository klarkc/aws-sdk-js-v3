"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheBehavior = exports.Bundle = exports.Blueprint = exports.BlueprintType = exports.InstancePlatform = exports.BehaviorEnum = exports.AvailabilityZone = exports.AutoSnapshotDetails = exports.AutoSnapshotStatus = exports.AttachStaticIpResult = exports.AttachStaticIpRequest = exports.AttachLoadBalancerTlsCertificateResult = exports.AttachLoadBalancerTlsCertificateRequest = exports.AttachInstancesToLoadBalancerResult = exports.AttachInstancesToLoadBalancerRequest = exports.DiskMap = exports.AttachedDisk = exports.AttachDiskResult = exports.AttachDiskRequest = exports.AttachCertificateToDistributionResult = exports.AttachCertificateToDistributionRequest = exports.UnauthenticatedException = exports.ServiceException = exports.OperationFailureException = exports.NotFoundException = exports.InvalidInputException = exports.AllocateStaticIpResult = exports.Operation = exports.OperationStatus = exports.OperationType = exports.AllocateStaticIpRequest = exports.Alarm = exports.MetricUnit = exports.TreatMissingData = exports.MetricStatistic = exports.AlarmState = exports.MonitoredResourceInfo = exports.ResourceType = exports.MetricName = exports.ResourceLocation = exports.RegionName = exports.ContactProtocol = exports.ComparisonOperator = exports.AddOnRequest = exports.AutoSnapshotAddOnRequest = exports.AddOnType = exports.AddOn = exports.AccountSetupInProgressException = exports.AccessDirection = exports.AccessDeniedException = void 0;
exports.CreateCertificateResult = exports.CreateCertificateRequest = exports.CopySnapshotResult = exports.CopySnapshotRequest = exports.ContainerServicesListResult = exports.ContainerServiceRegistryLogin = exports.ContainerServicePower = exports.ContainerServiceMetricName = exports.ContainerServiceLogEvent = exports.ContainerServiceDeploymentRequest = exports.EndpointRequest = exports.ContainerService = exports.ContainerServiceStateDetail = exports.ContainerServiceStateDetailCode = exports.ContainerServiceState = exports.ContainerServicePowerName = exports.ContainerServiceDeployment = exports.ContainerServiceDeploymentState = exports.ContainerServiceEndpoint = exports.ContainerServiceHealthCheckConfig = exports.ContainerImage = exports.Container = exports.ContainerServiceProtocol = exports.ContactMethodVerificationProtocol = exports.ContactMethod = exports.ContactMethodStatus = exports.CloudFormationStackRecord = exports.RecordState = exports.CloudFormationStackRecordSourceInfo = exports.CloudFormationStackRecordSourceType = exports.DestinationInfo = exports.CloseInstancePublicPortsResult = exports.CloseInstancePublicPortsRequest = exports.PortInfo = exports.NetworkProtocol = exports.CertificateSummary = exports.Certificate = exports.Tag = exports.CertificateStatus = exports.RenewalSummary = exports.RenewalStatus = exports.DomainValidationRecord = exports.ResourceRecord = exports.CacheSettings = exports.QueryStringObject = exports.HeaderObject = exports.HeaderEnum = exports.CookieObject = exports.ForwardValues = exports.CacheBehaviorPerPath = void 0;
exports.DeleteAlarmRequest = exports.CreateRelationalDatabaseSnapshotResult = exports.CreateRelationalDatabaseSnapshotRequest = exports.CreateRelationalDatabaseFromSnapshotResult = exports.CreateRelationalDatabaseFromSnapshotRequest = exports.CreateRelationalDatabaseResult = exports.CreateRelationalDatabaseRequest = exports.CreateLoadBalancerTlsCertificateResult = exports.CreateLoadBalancerTlsCertificateRequest = exports.CreateLoadBalancerResult = exports.CreateLoadBalancerRequest = exports.CreateKeyPairResult = exports.KeyPair = exports.CreateKeyPairRequest = exports.CreateInstanceSnapshotResult = exports.CreateInstanceSnapshotRequest = exports.CreateInstancesFromSnapshotResult = exports.CreateInstancesFromSnapshotRequest = exports.CreateInstancesResult = exports.CreateInstancesRequest = exports.CreateDomainEntryResult = exports.CreateDomainEntryRequest = exports.DomainEntry = exports.CreateDomainResult = exports.CreateDomainRequest = exports.CreateDistributionResult = exports.LightsailDistribution = exports.Origin = exports.CreateDistributionRequest = exports.InputOrigin = exports.OriginProtocolPolicyEnum = exports.IpAddressType = exports.CreateDiskSnapshotResult = exports.CreateDiskSnapshotRequest = exports.CreateDiskFromSnapshotResult = exports.CreateDiskFromSnapshotRequest = exports.CreateDiskResult = exports.CreateDiskRequest = exports.CreateContainerServiceRegistryLoginResult = exports.CreateContainerServiceRegistryLoginRequest = exports.CreateContainerServiceDeploymentResult = exports.CreateContainerServiceDeploymentRequest = exports.CreateContainerServiceResult = exports.CreateContainerServiceRequest = exports.CreateContactMethodResult = exports.CreateContactMethodRequest = exports.CreateCloudFormationStackResult = exports.CreateCloudFormationStackRequest = exports.InstanceEntry = exports.PortInfoSourceType = void 0;
exports.DiskInfo = exports.Disk = exports.DiskState = exports.DisableAddOnResult = exports.DisableAddOnRequest = exports.DetachStaticIpResult = exports.DetachStaticIpRequest = exports.DetachInstancesFromLoadBalancerResult = exports.DetachInstancesFromLoadBalancerRequest = exports.DetachDiskResult = exports.DetachDiskRequest = exports.DetachCertificateFromDistributionResult = exports.DetachCertificateFromDistributionRequest = exports.DeleteRelationalDatabaseSnapshotResult = exports.DeleteRelationalDatabaseSnapshotRequest = exports.DeleteRelationalDatabaseResult = exports.DeleteRelationalDatabaseRequest = exports.DeleteLoadBalancerTlsCertificateResult = exports.DeleteLoadBalancerTlsCertificateRequest = exports.DeleteLoadBalancerResult = exports.DeleteLoadBalancerRequest = exports.DeleteKnownHostKeysResult = exports.DeleteKnownHostKeysRequest = exports.DeleteKeyPairResult = exports.DeleteKeyPairRequest = exports.DeleteInstanceSnapshotResult = exports.DeleteInstanceSnapshotRequest = exports.DeleteInstanceResult = exports.DeleteInstanceRequest = exports.DeleteDomainEntryResult = exports.DeleteDomainEntryRequest = exports.DeleteDomainResult = exports.DeleteDomainRequest = exports.DeleteDistributionResult = exports.DeleteDistributionRequest = exports.DeleteDiskSnapshotResult = exports.DeleteDiskSnapshotRequest = exports.DeleteDiskResult = exports.DeleteDiskRequest = exports.DeleteContainerServiceResult = exports.DeleteContainerServiceRequest = exports.DeleteContainerImageResult = exports.DeleteContainerImageRequest = exports.DeleteContactMethodResult = exports.DeleteContactMethodRequest = exports.DeleteCertificateResult = exports.DeleteCertificateRequest = exports.DeleteAutoSnapshotResult = exports.DeleteAutoSnapshotRequest = exports.DeleteAlarmResult = void 0;
exports.GetDisksResult = exports.GetDisksRequest = exports.GetDiskResult = exports.GetDiskRequest = exports.GetContainerServicesRequest = exports.GetContainerServicePowersResult = exports.GetContainerServicePowersRequest = exports.GetContainerServiceMetricDataResult = exports.MetricDatapoint = exports.GetContainerServiceMetricDataRequest = exports.GetContainerServiceDeploymentsResult = exports.GetContainerServiceDeploymentsRequest = exports.GetContainerLogResult = exports.GetContainerLogRequest = exports.GetContainerImagesResult = exports.GetContainerImagesRequest = exports.GetContainerAPIMetadataResult = exports.GetContainerAPIMetadataRequest = exports.GetContactMethodsResult = exports.GetContactMethodsRequest = exports.GetCloudFormationStackRecordsResult = exports.GetCloudFormationStackRecordsRequest = exports.GetCertificatesResult = exports.GetCertificatesRequest = exports.GetBundlesResult = exports.GetBundlesRequest = exports.GetBlueprintsResult = exports.GetBlueprintsRequest = exports.GetAutoSnapshotsResult = exports.GetAutoSnapshotsRequest = exports.GetAlarmsResult = exports.GetAlarmsRequest = exports.GetActiveNamesResult = exports.GetActiveNamesRequest = exports.ExportSnapshotRecord = exports.ExportSnapshotRecordSourceInfo = exports.ExportSnapshotRecordSourceType = exports.InstanceSnapshotInfo = exports.ExportSnapshotResult = exports.ExportSnapshotRequest = exports.EnableAddOnResult = exports.EnableAddOnRequest = exports.DownloadDefaultKeyPairResult = exports.DownloadDefaultKeyPairRequest = exports.Domain = exports.DistributionMetricName = exports.DistributionBundle = exports.DiskSnapshotInfo = exports.DiskSnapshot = exports.DiskSnapshotState = void 0;
exports.GetInstanceStateResult = exports.GetInstanceStateRequest = exports.GetInstanceSnapshotsResult = exports.GetInstanceSnapshotsRequest = exports.GetInstanceSnapshotResult = exports.InstanceSnapshot = exports.InstanceSnapshotState = exports.GetInstanceSnapshotRequest = exports.GetInstancesResult = exports.GetInstancesRequest = exports.GetInstancePortStatesResult = exports.InstancePortState = exports.PortState = exports.GetInstancePortStatesRequest = exports.GetInstanceMetricDataResult = exports.GetInstanceMetricDataRequest = exports.InstanceMetricName = exports.GetInstanceAccessDetailsResult = exports.InstanceAccessDetails = exports.PasswordData = exports.HostKeyAttributes = exports.GetInstanceAccessDetailsRequest = exports.InstanceAccessProtocol = exports.GetInstanceResult = exports.Instance = exports.InstanceState = exports.InstanceNetworking = exports.InstancePortInfo = exports.PortAccessType = exports.MonthlyTransfer = exports.InstanceHardware = exports.GetInstanceRequest = exports.GetExportSnapshotRecordsResult = exports.GetExportSnapshotRecordsRequest = exports.GetDomainsResult = exports.GetDomainsRequest = exports.GetDomainResult = exports.GetDomainRequest = exports.GetDistributionsResult = exports.GetDistributionsRequest = exports.GetDistributionMetricDataResult = exports.GetDistributionMetricDataRequest = exports.GetDistributionLatestCacheResetResult = exports.GetDistributionLatestCacheResetRequest = exports.GetDistributionBundlesResult = exports.GetDistributionBundlesRequest = exports.GetDiskSnapshotsResult = exports.GetDiskSnapshotsRequest = exports.GetDiskSnapshotResult = exports.GetDiskSnapshotRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AccessDirection;
(function (AccessDirection) {
    AccessDirection["inbound"] = "inbound";
    AccessDirection["outbound"] = "outbound";
})(AccessDirection = exports.AccessDirection || (exports.AccessDirection = {}));
var AccountSetupInProgressException;
(function (AccountSetupInProgressException) {
    /**
     * @internal
     */
    AccountSetupInProgressException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountSetupInProgressException = exports.AccountSetupInProgressException || (exports.AccountSetupInProgressException = {}));
var AddOn;
(function (AddOn) {
    /**
     * @internal
     */
    AddOn.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddOn = exports.AddOn || (exports.AddOn = {}));
var AddOnType;
(function (AddOnType) {
    AddOnType["AutoSnapshot"] = "AutoSnapshot";
})(AddOnType = exports.AddOnType || (exports.AddOnType = {}));
var AutoSnapshotAddOnRequest;
(function (AutoSnapshotAddOnRequest) {
    /**
     * @internal
     */
    AutoSnapshotAddOnRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoSnapshotAddOnRequest = exports.AutoSnapshotAddOnRequest || (exports.AutoSnapshotAddOnRequest = {}));
var AddOnRequest;
(function (AddOnRequest) {
    /**
     * @internal
     */
    AddOnRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddOnRequest = exports.AddOnRequest || (exports.AddOnRequest = {}));
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["GreaterThanOrEqualToThreshold"] = "GreaterThanOrEqualToThreshold";
    ComparisonOperator["GreaterThanThreshold"] = "GreaterThanThreshold";
    ComparisonOperator["LessThanOrEqualToThreshold"] = "LessThanOrEqualToThreshold";
    ComparisonOperator["LessThanThreshold"] = "LessThanThreshold";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var ContactProtocol;
(function (ContactProtocol) {
    ContactProtocol["Email"] = "Email";
    ContactProtocol["SMS"] = "SMS";
})(ContactProtocol = exports.ContactProtocol || (exports.ContactProtocol = {}));
var RegionName;
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
})(RegionName = exports.RegionName || (exports.RegionName = {}));
var ResourceLocation;
(function (ResourceLocation) {
    /**
     * @internal
     */
    ResourceLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceLocation = exports.ResourceLocation || (exports.ResourceLocation = {}));
var MetricName;
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
})(MetricName = exports.MetricName || (exports.MetricName = {}));
var ResourceType;
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
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var MonitoredResourceInfo;
(function (MonitoredResourceInfo) {
    /**
     * @internal
     */
    MonitoredResourceInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonitoredResourceInfo = exports.MonitoredResourceInfo || (exports.MonitoredResourceInfo = {}));
var AlarmState;
(function (AlarmState) {
    AlarmState["ALARM"] = "ALARM";
    AlarmState["INSUFFICIENT_DATA"] = "INSUFFICIENT_DATA";
    AlarmState["OK"] = "OK";
})(AlarmState = exports.AlarmState || (exports.AlarmState = {}));
var MetricStatistic;
(function (MetricStatistic) {
    MetricStatistic["Average"] = "Average";
    MetricStatistic["Maximum"] = "Maximum";
    MetricStatistic["Minimum"] = "Minimum";
    MetricStatistic["SampleCount"] = "SampleCount";
    MetricStatistic["Sum"] = "Sum";
})(MetricStatistic = exports.MetricStatistic || (exports.MetricStatistic = {}));
var TreatMissingData;
(function (TreatMissingData) {
    TreatMissingData["Breaching"] = "breaching";
    TreatMissingData["Ignore"] = "ignore";
    TreatMissingData["Missing"] = "missing";
    TreatMissingData["NotBreaching"] = "notBreaching";
})(TreatMissingData = exports.TreatMissingData || (exports.TreatMissingData = {}));
var MetricUnit;
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
})(MetricUnit = exports.MetricUnit || (exports.MetricUnit = {}));
var Alarm;
(function (Alarm) {
    /**
     * @internal
     */
    Alarm.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Alarm = exports.Alarm || (exports.Alarm = {}));
var AllocateStaticIpRequest;
(function (AllocateStaticIpRequest) {
    /**
     * @internal
     */
    AllocateStaticIpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllocateStaticIpRequest = exports.AllocateStaticIpRequest || (exports.AllocateStaticIpRequest = {}));
var OperationType;
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
})(OperationType = exports.OperationType || (exports.OperationType = {}));
var OperationStatus;
(function (OperationStatus) {
    OperationStatus["Completed"] = "Completed";
    OperationStatus["Failed"] = "Failed";
    OperationStatus["NotStarted"] = "NotStarted";
    OperationStatus["Started"] = "Started";
    OperationStatus["Succeeded"] = "Succeeded";
})(OperationStatus = exports.OperationStatus || (exports.OperationStatus = {}));
var Operation;
(function (Operation) {
    /**
     * @internal
     */
    Operation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Operation = exports.Operation || (exports.Operation = {}));
var AllocateStaticIpResult;
(function (AllocateStaticIpResult) {
    /**
     * @internal
     */
    AllocateStaticIpResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllocateStaticIpResult = exports.AllocateStaticIpResult || (exports.AllocateStaticIpResult = {}));
var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var OperationFailureException;
(function (OperationFailureException) {
    /**
     * @internal
     */
    OperationFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationFailureException = exports.OperationFailureException || (exports.OperationFailureException = {}));
var ServiceException;
(function (ServiceException) {
    /**
     * @internal
     */
    ServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceException = exports.ServiceException || (exports.ServiceException = {}));
var UnauthenticatedException;
(function (UnauthenticatedException) {
    /**
     * @internal
     */
    UnauthenticatedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthenticatedException = exports.UnauthenticatedException || (exports.UnauthenticatedException = {}));
var AttachCertificateToDistributionRequest;
(function (AttachCertificateToDistributionRequest) {
    /**
     * @internal
     */
    AttachCertificateToDistributionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachCertificateToDistributionRequest = exports.AttachCertificateToDistributionRequest || (exports.AttachCertificateToDistributionRequest = {}));
var AttachCertificateToDistributionResult;
(function (AttachCertificateToDistributionResult) {
    /**
     * @internal
     */
    AttachCertificateToDistributionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachCertificateToDistributionResult = exports.AttachCertificateToDistributionResult || (exports.AttachCertificateToDistributionResult = {}));
var AttachDiskRequest;
(function (AttachDiskRequest) {
    /**
     * @internal
     */
    AttachDiskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachDiskRequest = exports.AttachDiskRequest || (exports.AttachDiskRequest = {}));
var AttachDiskResult;
(function (AttachDiskResult) {
    /**
     * @internal
     */
    AttachDiskResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachDiskResult = exports.AttachDiskResult || (exports.AttachDiskResult = {}));
var AttachedDisk;
(function (AttachedDisk) {
    /**
     * @internal
     */
    AttachedDisk.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachedDisk = exports.AttachedDisk || (exports.AttachedDisk = {}));
var DiskMap;
(function (DiskMap) {
    /**
     * @internal
     */
    DiskMap.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiskMap = exports.DiskMap || (exports.DiskMap = {}));
var AttachInstancesToLoadBalancerRequest;
(function (AttachInstancesToLoadBalancerRequest) {
    /**
     * @internal
     */
    AttachInstancesToLoadBalancerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachInstancesToLoadBalancerRequest = exports.AttachInstancesToLoadBalancerRequest || (exports.AttachInstancesToLoadBalancerRequest = {}));
var AttachInstancesToLoadBalancerResult;
(function (AttachInstancesToLoadBalancerResult) {
    /**
     * @internal
     */
    AttachInstancesToLoadBalancerResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachInstancesToLoadBalancerResult = exports.AttachInstancesToLoadBalancerResult || (exports.AttachInstancesToLoadBalancerResult = {}));
var AttachLoadBalancerTlsCertificateRequest;
(function (AttachLoadBalancerTlsCertificateRequest) {
    /**
     * @internal
     */
    AttachLoadBalancerTlsCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachLoadBalancerTlsCertificateRequest = exports.AttachLoadBalancerTlsCertificateRequest || (exports.AttachLoadBalancerTlsCertificateRequest = {}));
var AttachLoadBalancerTlsCertificateResult;
(function (AttachLoadBalancerTlsCertificateResult) {
    /**
     * @internal
     */
    AttachLoadBalancerTlsCertificateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachLoadBalancerTlsCertificateResult = exports.AttachLoadBalancerTlsCertificateResult || (exports.AttachLoadBalancerTlsCertificateResult = {}));
var AttachStaticIpRequest;
(function (AttachStaticIpRequest) {
    /**
     * @internal
     */
    AttachStaticIpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachStaticIpRequest = exports.AttachStaticIpRequest || (exports.AttachStaticIpRequest = {}));
var AttachStaticIpResult;
(function (AttachStaticIpResult) {
    /**
     * @internal
     */
    AttachStaticIpResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachStaticIpResult = exports.AttachStaticIpResult || (exports.AttachStaticIpResult = {}));
var AutoSnapshotStatus;
(function (AutoSnapshotStatus) {
    AutoSnapshotStatus["FAILED"] = "Failed";
    AutoSnapshotStatus["IN_PROGRESS"] = "InProgress";
    AutoSnapshotStatus["NOT_FOUND"] = "NotFound";
    AutoSnapshotStatus["SUCCESS"] = "Success";
})(AutoSnapshotStatus = exports.AutoSnapshotStatus || (exports.AutoSnapshotStatus = {}));
var AutoSnapshotDetails;
(function (AutoSnapshotDetails) {
    /**
     * @internal
     */
    AutoSnapshotDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoSnapshotDetails = exports.AutoSnapshotDetails || (exports.AutoSnapshotDetails = {}));
var AvailabilityZone;
(function (AvailabilityZone) {
    /**
     * @internal
     */
    AvailabilityZone.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailabilityZone = exports.AvailabilityZone || (exports.AvailabilityZone = {}));
var BehaviorEnum;
(function (BehaviorEnum) {
    BehaviorEnum["CacheSetting"] = "cache";
    BehaviorEnum["DontCacheSetting"] = "dont-cache";
})(BehaviorEnum = exports.BehaviorEnum || (exports.BehaviorEnum = {}));
var InstancePlatform;
(function (InstancePlatform) {
    InstancePlatform["LinuxUnix"] = "LINUX_UNIX";
    InstancePlatform["Windows"] = "WINDOWS";
})(InstancePlatform = exports.InstancePlatform || (exports.InstancePlatform = {}));
var BlueprintType;
(function (BlueprintType) {
    BlueprintType["app"] = "app";
    BlueprintType["os"] = "os";
})(BlueprintType = exports.BlueprintType || (exports.BlueprintType = {}));
var Blueprint;
(function (Blueprint) {
    /**
     * @internal
     */
    Blueprint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Blueprint = exports.Blueprint || (exports.Blueprint = {}));
var Bundle;
(function (Bundle) {
    /**
     * @internal
     */
    Bundle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Bundle = exports.Bundle || (exports.Bundle = {}));
var CacheBehavior;
(function (CacheBehavior) {
    /**
     * @internal
     */
    CacheBehavior.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheBehavior = exports.CacheBehavior || (exports.CacheBehavior = {}));
var CacheBehaviorPerPath;
(function (CacheBehaviorPerPath) {
    /**
     * @internal
     */
    CacheBehaviorPerPath.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheBehaviorPerPath = exports.CacheBehaviorPerPath || (exports.CacheBehaviorPerPath = {}));
var ForwardValues;
(function (ForwardValues) {
    ForwardValues["all"] = "all";
    ForwardValues["allowList"] = "allow-list";
    ForwardValues["none"] = "none";
})(ForwardValues = exports.ForwardValues || (exports.ForwardValues = {}));
var CookieObject;
(function (CookieObject) {
    /**
     * @internal
     */
    CookieObject.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CookieObject = exports.CookieObject || (exports.CookieObject = {}));
var HeaderEnum;
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
})(HeaderEnum = exports.HeaderEnum || (exports.HeaderEnum = {}));
var HeaderObject;
(function (HeaderObject) {
    /**
     * @internal
     */
    HeaderObject.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HeaderObject = exports.HeaderObject || (exports.HeaderObject = {}));
var QueryStringObject;
(function (QueryStringObject) {
    /**
     * @internal
     */
    QueryStringObject.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueryStringObject = exports.QueryStringObject || (exports.QueryStringObject = {}));
var CacheSettings;
(function (CacheSettings) {
    /**
     * @internal
     */
    CacheSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CacheSettings = exports.CacheSettings || (exports.CacheSettings = {}));
var ResourceRecord;
(function (ResourceRecord) {
    /**
     * @internal
     */
    ResourceRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceRecord = exports.ResourceRecord || (exports.ResourceRecord = {}));
var DomainValidationRecord;
(function (DomainValidationRecord) {
    /**
     * @internal
     */
    DomainValidationRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainValidationRecord = exports.DomainValidationRecord || (exports.DomainValidationRecord = {}));
var RenewalStatus;
(function (RenewalStatus) {
    RenewalStatus["Failed"] = "Failed";
    RenewalStatus["PendingAutoRenewal"] = "PendingAutoRenewal";
    RenewalStatus["PendingValidation"] = "PendingValidation";
    RenewalStatus["Success"] = "Success";
})(RenewalStatus = exports.RenewalStatus || (exports.RenewalStatus = {}));
var RenewalSummary;
(function (RenewalSummary) {
    /**
     * @internal
     */
    RenewalSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RenewalSummary = exports.RenewalSummary || (exports.RenewalSummary = {}));
var CertificateStatus;
(function (CertificateStatus) {
    CertificateStatus["Expired"] = "EXPIRED";
    CertificateStatus["Failed"] = "FAILED";
    CertificateStatus["Inactive"] = "INACTIVE";
    CertificateStatus["Issued"] = "ISSUED";
    CertificateStatus["PendingValidation"] = "PENDING_VALIDATION";
    CertificateStatus["Revoked"] = "REVOKED";
    CertificateStatus["ValidationTimedOut"] = "VALIDATION_TIMED_OUT";
})(CertificateStatus = exports.CertificateStatus || (exports.CertificateStatus = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var Certificate;
(function (Certificate) {
    /**
     * @internal
     */
    Certificate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Certificate = exports.Certificate || (exports.Certificate = {}));
var CertificateSummary;
(function (CertificateSummary) {
    /**
     * @internal
     */
    CertificateSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CertificateSummary = exports.CertificateSummary || (exports.CertificateSummary = {}));
var NetworkProtocol;
(function (NetworkProtocol) {
    NetworkProtocol["ALL"] = "all";
    NetworkProtocol["ICMP"] = "icmp";
    NetworkProtocol["TCP"] = "tcp";
    NetworkProtocol["UDP"] = "udp";
})(NetworkProtocol = exports.NetworkProtocol || (exports.NetworkProtocol = {}));
var PortInfo;
(function (PortInfo) {
    /**
     * @internal
     */
    PortInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortInfo = exports.PortInfo || (exports.PortInfo = {}));
var CloseInstancePublicPortsRequest;
(function (CloseInstancePublicPortsRequest) {
    /**
     * @internal
     */
    CloseInstancePublicPortsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloseInstancePublicPortsRequest = exports.CloseInstancePublicPortsRequest || (exports.CloseInstancePublicPortsRequest = {}));
var CloseInstancePublicPortsResult;
(function (CloseInstancePublicPortsResult) {
    /**
     * @internal
     */
    CloseInstancePublicPortsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloseInstancePublicPortsResult = exports.CloseInstancePublicPortsResult || (exports.CloseInstancePublicPortsResult = {}));
var DestinationInfo;
(function (DestinationInfo) {
    /**
     * @internal
     */
    DestinationInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DestinationInfo = exports.DestinationInfo || (exports.DestinationInfo = {}));
var CloudFormationStackRecordSourceType;
(function (CloudFormationStackRecordSourceType) {
    CloudFormationStackRecordSourceType["ExportSnapshotRecord"] = "ExportSnapshotRecord";
})(CloudFormationStackRecordSourceType = exports.CloudFormationStackRecordSourceType || (exports.CloudFormationStackRecordSourceType = {}));
var CloudFormationStackRecordSourceInfo;
(function (CloudFormationStackRecordSourceInfo) {
    /**
     * @internal
     */
    CloudFormationStackRecordSourceInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudFormationStackRecordSourceInfo = exports.CloudFormationStackRecordSourceInfo || (exports.CloudFormationStackRecordSourceInfo = {}));
var RecordState;
(function (RecordState) {
    RecordState["Failed"] = "Failed";
    RecordState["Started"] = "Started";
    RecordState["Succeeded"] = "Succeeded";
})(RecordState = exports.RecordState || (exports.RecordState = {}));
var CloudFormationStackRecord;
(function (CloudFormationStackRecord) {
    /**
     * @internal
     */
    CloudFormationStackRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudFormationStackRecord = exports.CloudFormationStackRecord || (exports.CloudFormationStackRecord = {}));
var ContactMethodStatus;
(function (ContactMethodStatus) {
    ContactMethodStatus["Invalid"] = "Invalid";
    ContactMethodStatus["PendingVerification"] = "PendingVerification";
    ContactMethodStatus["Valid"] = "Valid";
})(ContactMethodStatus = exports.ContactMethodStatus || (exports.ContactMethodStatus = {}));
var ContactMethod;
(function (ContactMethod) {
    /**
     * @internal
     */
    ContactMethod.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContactMethod = exports.ContactMethod || (exports.ContactMethod = {}));
var ContactMethodVerificationProtocol;
(function (ContactMethodVerificationProtocol) {
    ContactMethodVerificationProtocol["Email"] = "Email";
})(ContactMethodVerificationProtocol = exports.ContactMethodVerificationProtocol || (exports.ContactMethodVerificationProtocol = {}));
var ContainerServiceProtocol;
(function (ContainerServiceProtocol) {
    ContainerServiceProtocol["HTTP"] = "HTTP";
    ContainerServiceProtocol["HTTPS"] = "HTTPS";
    ContainerServiceProtocol["TCP"] = "TCP";
    ContainerServiceProtocol["UDP"] = "UDP";
})(ContainerServiceProtocol = exports.ContainerServiceProtocol || (exports.ContainerServiceProtocol = {}));
var Container;
(function (Container) {
    /**
     * @internal
     */
    Container.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Container = exports.Container || (exports.Container = {}));
var ContainerImage;
(function (ContainerImage) {
    /**
     * @internal
     */
    ContainerImage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerImage = exports.ContainerImage || (exports.ContainerImage = {}));
var ContainerServiceHealthCheckConfig;
(function (ContainerServiceHealthCheckConfig) {
    /**
     * @internal
     */
    ContainerServiceHealthCheckConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerServiceHealthCheckConfig = exports.ContainerServiceHealthCheckConfig || (exports.ContainerServiceHealthCheckConfig = {}));
var ContainerServiceEndpoint;
(function (ContainerServiceEndpoint) {
    /**
     * @internal
     */
    ContainerServiceEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerServiceEndpoint = exports.ContainerServiceEndpoint || (exports.ContainerServiceEndpoint = {}));
var ContainerServiceDeploymentState;
(function (ContainerServiceDeploymentState) {
    ContainerServiceDeploymentState["ACTIVATING"] = "ACTIVATING";
    ContainerServiceDeploymentState["ACTIVE"] = "ACTIVE";
    ContainerServiceDeploymentState["FAILED"] = "FAILED";
    ContainerServiceDeploymentState["INACTIVE"] = "INACTIVE";
})(ContainerServiceDeploymentState = exports.ContainerServiceDeploymentState || (exports.ContainerServiceDeploymentState = {}));
var ContainerServiceDeployment;
(function (ContainerServiceDeployment) {
    /**
     * @internal
     */
    ContainerServiceDeployment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerServiceDeployment = exports.ContainerServiceDeployment || (exports.ContainerServiceDeployment = {}));
var ContainerServicePowerName;
(function (ContainerServicePowerName) {
    ContainerServicePowerName["large"] = "large";
    ContainerServicePowerName["medium"] = "medium";
    ContainerServicePowerName["micro"] = "micro";
    ContainerServicePowerName["nano"] = "nano";
    ContainerServicePowerName["small"] = "small";
    ContainerServicePowerName["xlarge"] = "xlarge";
})(ContainerServicePowerName = exports.ContainerServicePowerName || (exports.ContainerServicePowerName = {}));
var ContainerServiceState;
(function (ContainerServiceState) {
    ContainerServiceState["DELETING"] = "DELETING";
    ContainerServiceState["DEPLOYING"] = "DEPLOYING";
    ContainerServiceState["DISABLED"] = "DISABLED";
    ContainerServiceState["PENDING"] = "PENDING";
    ContainerServiceState["READY"] = "READY";
    ContainerServiceState["RUNNING"] = "RUNNING";
    ContainerServiceState["UPDATING"] = "UPDATING";
})(ContainerServiceState = exports.ContainerServiceState || (exports.ContainerServiceState = {}));
var ContainerServiceStateDetailCode;
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
})(ContainerServiceStateDetailCode = exports.ContainerServiceStateDetailCode || (exports.ContainerServiceStateDetailCode = {}));
var ContainerServiceStateDetail;
(function (ContainerServiceStateDetail) {
    /**
     * @internal
     */
    ContainerServiceStateDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerServiceStateDetail = exports.ContainerServiceStateDetail || (exports.ContainerServiceStateDetail = {}));
var ContainerService;
(function (ContainerService) {
    /**
     * @internal
     */
    ContainerService.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerService = exports.ContainerService || (exports.ContainerService = {}));
var EndpointRequest;
(function (EndpointRequest) {
    /**
     * @internal
     */
    EndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointRequest = exports.EndpointRequest || (exports.EndpointRequest = {}));
var ContainerServiceDeploymentRequest;
(function (ContainerServiceDeploymentRequest) {
    /**
     * @internal
     */
    ContainerServiceDeploymentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerServiceDeploymentRequest = exports.ContainerServiceDeploymentRequest || (exports.ContainerServiceDeploymentRequest = {}));
var ContainerServiceLogEvent;
(function (ContainerServiceLogEvent) {
    /**
     * @internal
     */
    ContainerServiceLogEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerServiceLogEvent = exports.ContainerServiceLogEvent || (exports.ContainerServiceLogEvent = {}));
var ContainerServiceMetricName;
(function (ContainerServiceMetricName) {
    ContainerServiceMetricName["CPUUtilization"] = "CPUUtilization";
    ContainerServiceMetricName["MemoryUtilization"] = "MemoryUtilization";
})(ContainerServiceMetricName = exports.ContainerServiceMetricName || (exports.ContainerServiceMetricName = {}));
var ContainerServicePower;
(function (ContainerServicePower) {
    /**
     * @internal
     */
    ContainerServicePower.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerServicePower = exports.ContainerServicePower || (exports.ContainerServicePower = {}));
var ContainerServiceRegistryLogin;
(function (ContainerServiceRegistryLogin) {
    /**
     * @internal
     */
    ContainerServiceRegistryLogin.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerServiceRegistryLogin = exports.ContainerServiceRegistryLogin || (exports.ContainerServiceRegistryLogin = {}));
var ContainerServicesListResult;
(function (ContainerServicesListResult) {
    /**
     * @internal
     */
    ContainerServicesListResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerServicesListResult = exports.ContainerServicesListResult || (exports.ContainerServicesListResult = {}));
var CopySnapshotRequest;
(function (CopySnapshotRequest) {
    /**
     * @internal
     */
    CopySnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopySnapshotRequest = exports.CopySnapshotRequest || (exports.CopySnapshotRequest = {}));
var CopySnapshotResult;
(function (CopySnapshotResult) {
    /**
     * @internal
     */
    CopySnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopySnapshotResult = exports.CopySnapshotResult || (exports.CopySnapshotResult = {}));
var CreateCertificateRequest;
(function (CreateCertificateRequest) {
    /**
     * @internal
     */
    CreateCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCertificateRequest = exports.CreateCertificateRequest || (exports.CreateCertificateRequest = {}));
var CreateCertificateResult;
(function (CreateCertificateResult) {
    /**
     * @internal
     */
    CreateCertificateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCertificateResult = exports.CreateCertificateResult || (exports.CreateCertificateResult = {}));
var PortInfoSourceType;
(function (PortInfoSourceType) {
    PortInfoSourceType["Closed"] = "CLOSED";
    PortInfoSourceType["Default"] = "DEFAULT";
    PortInfoSourceType["Instance"] = "INSTANCE";
    PortInfoSourceType["None"] = "NONE";
})(PortInfoSourceType = exports.PortInfoSourceType || (exports.PortInfoSourceType = {}));
var InstanceEntry;
(function (InstanceEntry) {
    /**
     * @internal
     */
    InstanceEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceEntry = exports.InstanceEntry || (exports.InstanceEntry = {}));
var CreateCloudFormationStackRequest;
(function (CreateCloudFormationStackRequest) {
    /**
     * @internal
     */
    CreateCloudFormationStackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCloudFormationStackRequest = exports.CreateCloudFormationStackRequest || (exports.CreateCloudFormationStackRequest = {}));
var CreateCloudFormationStackResult;
(function (CreateCloudFormationStackResult) {
    /**
     * @internal
     */
    CreateCloudFormationStackResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCloudFormationStackResult = exports.CreateCloudFormationStackResult || (exports.CreateCloudFormationStackResult = {}));
var CreateContactMethodRequest;
(function (CreateContactMethodRequest) {
    /**
     * @internal
     */
    CreateContactMethodRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContactMethodRequest = exports.CreateContactMethodRequest || (exports.CreateContactMethodRequest = {}));
var CreateContactMethodResult;
(function (CreateContactMethodResult) {
    /**
     * @internal
     */
    CreateContactMethodResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContactMethodResult = exports.CreateContactMethodResult || (exports.CreateContactMethodResult = {}));
var CreateContainerServiceRequest;
(function (CreateContainerServiceRequest) {
    /**
     * @internal
     */
    CreateContainerServiceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContainerServiceRequest = exports.CreateContainerServiceRequest || (exports.CreateContainerServiceRequest = {}));
var CreateContainerServiceResult;
(function (CreateContainerServiceResult) {
    /**
     * @internal
     */
    CreateContainerServiceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContainerServiceResult = exports.CreateContainerServiceResult || (exports.CreateContainerServiceResult = {}));
var CreateContainerServiceDeploymentRequest;
(function (CreateContainerServiceDeploymentRequest) {
    /**
     * @internal
     */
    CreateContainerServiceDeploymentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContainerServiceDeploymentRequest = exports.CreateContainerServiceDeploymentRequest || (exports.CreateContainerServiceDeploymentRequest = {}));
var CreateContainerServiceDeploymentResult;
(function (CreateContainerServiceDeploymentResult) {
    /**
     * @internal
     */
    CreateContainerServiceDeploymentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContainerServiceDeploymentResult = exports.CreateContainerServiceDeploymentResult || (exports.CreateContainerServiceDeploymentResult = {}));
var CreateContainerServiceRegistryLoginRequest;
(function (CreateContainerServiceRegistryLoginRequest) {
    /**
     * @internal
     */
    CreateContainerServiceRegistryLoginRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContainerServiceRegistryLoginRequest = exports.CreateContainerServiceRegistryLoginRequest || (exports.CreateContainerServiceRegistryLoginRequest = {}));
var CreateContainerServiceRegistryLoginResult;
(function (CreateContainerServiceRegistryLoginResult) {
    /**
     * @internal
     */
    CreateContainerServiceRegistryLoginResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContainerServiceRegistryLoginResult = exports.CreateContainerServiceRegistryLoginResult || (exports.CreateContainerServiceRegistryLoginResult = {}));
var CreateDiskRequest;
(function (CreateDiskRequest) {
    /**
     * @internal
     */
    CreateDiskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDiskRequest = exports.CreateDiskRequest || (exports.CreateDiskRequest = {}));
var CreateDiskResult;
(function (CreateDiskResult) {
    /**
     * @internal
     */
    CreateDiskResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDiskResult = exports.CreateDiskResult || (exports.CreateDiskResult = {}));
var CreateDiskFromSnapshotRequest;
(function (CreateDiskFromSnapshotRequest) {
    /**
     * @internal
     */
    CreateDiskFromSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDiskFromSnapshotRequest = exports.CreateDiskFromSnapshotRequest || (exports.CreateDiskFromSnapshotRequest = {}));
var CreateDiskFromSnapshotResult;
(function (CreateDiskFromSnapshotResult) {
    /**
     * @internal
     */
    CreateDiskFromSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDiskFromSnapshotResult = exports.CreateDiskFromSnapshotResult || (exports.CreateDiskFromSnapshotResult = {}));
var CreateDiskSnapshotRequest;
(function (CreateDiskSnapshotRequest) {
    /**
     * @internal
     */
    CreateDiskSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDiskSnapshotRequest = exports.CreateDiskSnapshotRequest || (exports.CreateDiskSnapshotRequest = {}));
var CreateDiskSnapshotResult;
(function (CreateDiskSnapshotResult) {
    /**
     * @internal
     */
    CreateDiskSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDiskSnapshotResult = exports.CreateDiskSnapshotResult || (exports.CreateDiskSnapshotResult = {}));
var IpAddressType;
(function (IpAddressType) {
    IpAddressType["DUALSTACK"] = "dualstack";
    IpAddressType["IPV4"] = "ipv4";
})(IpAddressType = exports.IpAddressType || (exports.IpAddressType = {}));
var OriginProtocolPolicyEnum;
(function (OriginProtocolPolicyEnum) {
    OriginProtocolPolicyEnum["HTTPOnly"] = "http-only";
    OriginProtocolPolicyEnum["HTTPSOnly"] = "https-only";
})(OriginProtocolPolicyEnum = exports.OriginProtocolPolicyEnum || (exports.OriginProtocolPolicyEnum = {}));
var InputOrigin;
(function (InputOrigin) {
    /**
     * @internal
     */
    InputOrigin.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputOrigin = exports.InputOrigin || (exports.InputOrigin = {}));
var CreateDistributionRequest;
(function (CreateDistributionRequest) {
    /**
     * @internal
     */
    CreateDistributionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDistributionRequest = exports.CreateDistributionRequest || (exports.CreateDistributionRequest = {}));
var Origin;
(function (Origin) {
    /**
     * @internal
     */
    Origin.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Origin = exports.Origin || (exports.Origin = {}));
var LightsailDistribution;
(function (LightsailDistribution) {
    /**
     * @internal
     */
    LightsailDistribution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LightsailDistribution = exports.LightsailDistribution || (exports.LightsailDistribution = {}));
var CreateDistributionResult;
(function (CreateDistributionResult) {
    /**
     * @internal
     */
    CreateDistributionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDistributionResult = exports.CreateDistributionResult || (exports.CreateDistributionResult = {}));
var CreateDomainRequest;
(function (CreateDomainRequest) {
    /**
     * @internal
     */
    CreateDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainRequest = exports.CreateDomainRequest || (exports.CreateDomainRequest = {}));
var CreateDomainResult;
(function (CreateDomainResult) {
    /**
     * @internal
     */
    CreateDomainResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainResult = exports.CreateDomainResult || (exports.CreateDomainResult = {}));
var DomainEntry;
(function (DomainEntry) {
    /**
     * @internal
     */
    DomainEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainEntry = exports.DomainEntry || (exports.DomainEntry = {}));
var CreateDomainEntryRequest;
(function (CreateDomainEntryRequest) {
    /**
     * @internal
     */
    CreateDomainEntryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainEntryRequest = exports.CreateDomainEntryRequest || (exports.CreateDomainEntryRequest = {}));
var CreateDomainEntryResult;
(function (CreateDomainEntryResult) {
    /**
     * @internal
     */
    CreateDomainEntryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainEntryResult = exports.CreateDomainEntryResult || (exports.CreateDomainEntryResult = {}));
var CreateInstancesRequest;
(function (CreateInstancesRequest) {
    /**
     * @internal
     */
    CreateInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstancesRequest = exports.CreateInstancesRequest || (exports.CreateInstancesRequest = {}));
var CreateInstancesResult;
(function (CreateInstancesResult) {
    /**
     * @internal
     */
    CreateInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstancesResult = exports.CreateInstancesResult || (exports.CreateInstancesResult = {}));
var CreateInstancesFromSnapshotRequest;
(function (CreateInstancesFromSnapshotRequest) {
    /**
     * @internal
     */
    CreateInstancesFromSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstancesFromSnapshotRequest = exports.CreateInstancesFromSnapshotRequest || (exports.CreateInstancesFromSnapshotRequest = {}));
var CreateInstancesFromSnapshotResult;
(function (CreateInstancesFromSnapshotResult) {
    /**
     * @internal
     */
    CreateInstancesFromSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstancesFromSnapshotResult = exports.CreateInstancesFromSnapshotResult || (exports.CreateInstancesFromSnapshotResult = {}));
var CreateInstanceSnapshotRequest;
(function (CreateInstanceSnapshotRequest) {
    /**
     * @internal
     */
    CreateInstanceSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstanceSnapshotRequest = exports.CreateInstanceSnapshotRequest || (exports.CreateInstanceSnapshotRequest = {}));
var CreateInstanceSnapshotResult;
(function (CreateInstanceSnapshotResult) {
    /**
     * @internal
     */
    CreateInstanceSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstanceSnapshotResult = exports.CreateInstanceSnapshotResult || (exports.CreateInstanceSnapshotResult = {}));
var CreateKeyPairRequest;
(function (CreateKeyPairRequest) {
    /**
     * @internal
     */
    CreateKeyPairRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateKeyPairRequest = exports.CreateKeyPairRequest || (exports.CreateKeyPairRequest = {}));
var KeyPair;
(function (KeyPair) {
    /**
     * @internal
     */
    KeyPair.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeyPair = exports.KeyPair || (exports.KeyPair = {}));
var CreateKeyPairResult;
(function (CreateKeyPairResult) {
    /**
     * @internal
     */
    CreateKeyPairResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateKeyPairResult = exports.CreateKeyPairResult || (exports.CreateKeyPairResult = {}));
var CreateLoadBalancerRequest;
(function (CreateLoadBalancerRequest) {
    /**
     * @internal
     */
    CreateLoadBalancerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLoadBalancerRequest = exports.CreateLoadBalancerRequest || (exports.CreateLoadBalancerRequest = {}));
var CreateLoadBalancerResult;
(function (CreateLoadBalancerResult) {
    /**
     * @internal
     */
    CreateLoadBalancerResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLoadBalancerResult = exports.CreateLoadBalancerResult || (exports.CreateLoadBalancerResult = {}));
var CreateLoadBalancerTlsCertificateRequest;
(function (CreateLoadBalancerTlsCertificateRequest) {
    /**
     * @internal
     */
    CreateLoadBalancerTlsCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLoadBalancerTlsCertificateRequest = exports.CreateLoadBalancerTlsCertificateRequest || (exports.CreateLoadBalancerTlsCertificateRequest = {}));
var CreateLoadBalancerTlsCertificateResult;
(function (CreateLoadBalancerTlsCertificateResult) {
    /**
     * @internal
     */
    CreateLoadBalancerTlsCertificateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLoadBalancerTlsCertificateResult = exports.CreateLoadBalancerTlsCertificateResult || (exports.CreateLoadBalancerTlsCertificateResult = {}));
var CreateRelationalDatabaseRequest;
(function (CreateRelationalDatabaseRequest) {
    /**
     * @internal
     */
    CreateRelationalDatabaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.masterUserPassword && { masterUserPassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateRelationalDatabaseRequest = exports.CreateRelationalDatabaseRequest || (exports.CreateRelationalDatabaseRequest = {}));
var CreateRelationalDatabaseResult;
(function (CreateRelationalDatabaseResult) {
    /**
     * @internal
     */
    CreateRelationalDatabaseResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRelationalDatabaseResult = exports.CreateRelationalDatabaseResult || (exports.CreateRelationalDatabaseResult = {}));
var CreateRelationalDatabaseFromSnapshotRequest;
(function (CreateRelationalDatabaseFromSnapshotRequest) {
    /**
     * @internal
     */
    CreateRelationalDatabaseFromSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRelationalDatabaseFromSnapshotRequest = exports.CreateRelationalDatabaseFromSnapshotRequest || (exports.CreateRelationalDatabaseFromSnapshotRequest = {}));
var CreateRelationalDatabaseFromSnapshotResult;
(function (CreateRelationalDatabaseFromSnapshotResult) {
    /**
     * @internal
     */
    CreateRelationalDatabaseFromSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRelationalDatabaseFromSnapshotResult = exports.CreateRelationalDatabaseFromSnapshotResult || (exports.CreateRelationalDatabaseFromSnapshotResult = {}));
var CreateRelationalDatabaseSnapshotRequest;
(function (CreateRelationalDatabaseSnapshotRequest) {
    /**
     * @internal
     */
    CreateRelationalDatabaseSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRelationalDatabaseSnapshotRequest = exports.CreateRelationalDatabaseSnapshotRequest || (exports.CreateRelationalDatabaseSnapshotRequest = {}));
var CreateRelationalDatabaseSnapshotResult;
(function (CreateRelationalDatabaseSnapshotResult) {
    /**
     * @internal
     */
    CreateRelationalDatabaseSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRelationalDatabaseSnapshotResult = exports.CreateRelationalDatabaseSnapshotResult || (exports.CreateRelationalDatabaseSnapshotResult = {}));
var DeleteAlarmRequest;
(function (DeleteAlarmRequest) {
    /**
     * @internal
     */
    DeleteAlarmRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAlarmRequest = exports.DeleteAlarmRequest || (exports.DeleteAlarmRequest = {}));
var DeleteAlarmResult;
(function (DeleteAlarmResult) {
    /**
     * @internal
     */
    DeleteAlarmResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAlarmResult = exports.DeleteAlarmResult || (exports.DeleteAlarmResult = {}));
var DeleteAutoSnapshotRequest;
(function (DeleteAutoSnapshotRequest) {
    /**
     * @internal
     */
    DeleteAutoSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAutoSnapshotRequest = exports.DeleteAutoSnapshotRequest || (exports.DeleteAutoSnapshotRequest = {}));
var DeleteAutoSnapshotResult;
(function (DeleteAutoSnapshotResult) {
    /**
     * @internal
     */
    DeleteAutoSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAutoSnapshotResult = exports.DeleteAutoSnapshotResult || (exports.DeleteAutoSnapshotResult = {}));
var DeleteCertificateRequest;
(function (DeleteCertificateRequest) {
    /**
     * @internal
     */
    DeleteCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCertificateRequest = exports.DeleteCertificateRequest || (exports.DeleteCertificateRequest = {}));
var DeleteCertificateResult;
(function (DeleteCertificateResult) {
    /**
     * @internal
     */
    DeleteCertificateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCertificateResult = exports.DeleteCertificateResult || (exports.DeleteCertificateResult = {}));
var DeleteContactMethodRequest;
(function (DeleteContactMethodRequest) {
    /**
     * @internal
     */
    DeleteContactMethodRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContactMethodRequest = exports.DeleteContactMethodRequest || (exports.DeleteContactMethodRequest = {}));
var DeleteContactMethodResult;
(function (DeleteContactMethodResult) {
    /**
     * @internal
     */
    DeleteContactMethodResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContactMethodResult = exports.DeleteContactMethodResult || (exports.DeleteContactMethodResult = {}));
var DeleteContainerImageRequest;
(function (DeleteContainerImageRequest) {
    /**
     * @internal
     */
    DeleteContainerImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContainerImageRequest = exports.DeleteContainerImageRequest || (exports.DeleteContainerImageRequest = {}));
var DeleteContainerImageResult;
(function (DeleteContainerImageResult) {
    /**
     * @internal
     */
    DeleteContainerImageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContainerImageResult = exports.DeleteContainerImageResult || (exports.DeleteContainerImageResult = {}));
var DeleteContainerServiceRequest;
(function (DeleteContainerServiceRequest) {
    /**
     * @internal
     */
    DeleteContainerServiceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContainerServiceRequest = exports.DeleteContainerServiceRequest || (exports.DeleteContainerServiceRequest = {}));
var DeleteContainerServiceResult;
(function (DeleteContainerServiceResult) {
    /**
     * @internal
     */
    DeleteContainerServiceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContainerServiceResult = exports.DeleteContainerServiceResult || (exports.DeleteContainerServiceResult = {}));
var DeleteDiskRequest;
(function (DeleteDiskRequest) {
    /**
     * @internal
     */
    DeleteDiskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDiskRequest = exports.DeleteDiskRequest || (exports.DeleteDiskRequest = {}));
var DeleteDiskResult;
(function (DeleteDiskResult) {
    /**
     * @internal
     */
    DeleteDiskResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDiskResult = exports.DeleteDiskResult || (exports.DeleteDiskResult = {}));
var DeleteDiskSnapshotRequest;
(function (DeleteDiskSnapshotRequest) {
    /**
     * @internal
     */
    DeleteDiskSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDiskSnapshotRequest = exports.DeleteDiskSnapshotRequest || (exports.DeleteDiskSnapshotRequest = {}));
var DeleteDiskSnapshotResult;
(function (DeleteDiskSnapshotResult) {
    /**
     * @internal
     */
    DeleteDiskSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDiskSnapshotResult = exports.DeleteDiskSnapshotResult || (exports.DeleteDiskSnapshotResult = {}));
var DeleteDistributionRequest;
(function (DeleteDistributionRequest) {
    /**
     * @internal
     */
    DeleteDistributionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDistributionRequest = exports.DeleteDistributionRequest || (exports.DeleteDistributionRequest = {}));
var DeleteDistributionResult;
(function (DeleteDistributionResult) {
    /**
     * @internal
     */
    DeleteDistributionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDistributionResult = exports.DeleteDistributionResult || (exports.DeleteDistributionResult = {}));
var DeleteDomainRequest;
(function (DeleteDomainRequest) {
    /**
     * @internal
     */
    DeleteDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainRequest = exports.DeleteDomainRequest || (exports.DeleteDomainRequest = {}));
var DeleteDomainResult;
(function (DeleteDomainResult) {
    /**
     * @internal
     */
    DeleteDomainResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainResult = exports.DeleteDomainResult || (exports.DeleteDomainResult = {}));
var DeleteDomainEntryRequest;
(function (DeleteDomainEntryRequest) {
    /**
     * @internal
     */
    DeleteDomainEntryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainEntryRequest = exports.DeleteDomainEntryRequest || (exports.DeleteDomainEntryRequest = {}));
var DeleteDomainEntryResult;
(function (DeleteDomainEntryResult) {
    /**
     * @internal
     */
    DeleteDomainEntryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainEntryResult = exports.DeleteDomainEntryResult || (exports.DeleteDomainEntryResult = {}));
var DeleteInstanceRequest;
(function (DeleteInstanceRequest) {
    /**
     * @internal
     */
    DeleteInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInstanceRequest = exports.DeleteInstanceRequest || (exports.DeleteInstanceRequest = {}));
var DeleteInstanceResult;
(function (DeleteInstanceResult) {
    /**
     * @internal
     */
    DeleteInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInstanceResult = exports.DeleteInstanceResult || (exports.DeleteInstanceResult = {}));
var DeleteInstanceSnapshotRequest;
(function (DeleteInstanceSnapshotRequest) {
    /**
     * @internal
     */
    DeleteInstanceSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInstanceSnapshotRequest = exports.DeleteInstanceSnapshotRequest || (exports.DeleteInstanceSnapshotRequest = {}));
var DeleteInstanceSnapshotResult;
(function (DeleteInstanceSnapshotResult) {
    /**
     * @internal
     */
    DeleteInstanceSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInstanceSnapshotResult = exports.DeleteInstanceSnapshotResult || (exports.DeleteInstanceSnapshotResult = {}));
var DeleteKeyPairRequest;
(function (DeleteKeyPairRequest) {
    /**
     * @internal
     */
    DeleteKeyPairRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteKeyPairRequest = exports.DeleteKeyPairRequest || (exports.DeleteKeyPairRequest = {}));
var DeleteKeyPairResult;
(function (DeleteKeyPairResult) {
    /**
     * @internal
     */
    DeleteKeyPairResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteKeyPairResult = exports.DeleteKeyPairResult || (exports.DeleteKeyPairResult = {}));
var DeleteKnownHostKeysRequest;
(function (DeleteKnownHostKeysRequest) {
    /**
     * @internal
     */
    DeleteKnownHostKeysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteKnownHostKeysRequest = exports.DeleteKnownHostKeysRequest || (exports.DeleteKnownHostKeysRequest = {}));
var DeleteKnownHostKeysResult;
(function (DeleteKnownHostKeysResult) {
    /**
     * @internal
     */
    DeleteKnownHostKeysResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteKnownHostKeysResult = exports.DeleteKnownHostKeysResult || (exports.DeleteKnownHostKeysResult = {}));
var DeleteLoadBalancerRequest;
(function (DeleteLoadBalancerRequest) {
    /**
     * @internal
     */
    DeleteLoadBalancerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLoadBalancerRequest = exports.DeleteLoadBalancerRequest || (exports.DeleteLoadBalancerRequest = {}));
var DeleteLoadBalancerResult;
(function (DeleteLoadBalancerResult) {
    /**
     * @internal
     */
    DeleteLoadBalancerResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLoadBalancerResult = exports.DeleteLoadBalancerResult || (exports.DeleteLoadBalancerResult = {}));
var DeleteLoadBalancerTlsCertificateRequest;
(function (DeleteLoadBalancerTlsCertificateRequest) {
    /**
     * @internal
     */
    DeleteLoadBalancerTlsCertificateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLoadBalancerTlsCertificateRequest = exports.DeleteLoadBalancerTlsCertificateRequest || (exports.DeleteLoadBalancerTlsCertificateRequest = {}));
var DeleteLoadBalancerTlsCertificateResult;
(function (DeleteLoadBalancerTlsCertificateResult) {
    /**
     * @internal
     */
    DeleteLoadBalancerTlsCertificateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLoadBalancerTlsCertificateResult = exports.DeleteLoadBalancerTlsCertificateResult || (exports.DeleteLoadBalancerTlsCertificateResult = {}));
var DeleteRelationalDatabaseRequest;
(function (DeleteRelationalDatabaseRequest) {
    /**
     * @internal
     */
    DeleteRelationalDatabaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRelationalDatabaseRequest = exports.DeleteRelationalDatabaseRequest || (exports.DeleteRelationalDatabaseRequest = {}));
var DeleteRelationalDatabaseResult;
(function (DeleteRelationalDatabaseResult) {
    /**
     * @internal
     */
    DeleteRelationalDatabaseResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRelationalDatabaseResult = exports.DeleteRelationalDatabaseResult || (exports.DeleteRelationalDatabaseResult = {}));
var DeleteRelationalDatabaseSnapshotRequest;
(function (DeleteRelationalDatabaseSnapshotRequest) {
    /**
     * @internal
     */
    DeleteRelationalDatabaseSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRelationalDatabaseSnapshotRequest = exports.DeleteRelationalDatabaseSnapshotRequest || (exports.DeleteRelationalDatabaseSnapshotRequest = {}));
var DeleteRelationalDatabaseSnapshotResult;
(function (DeleteRelationalDatabaseSnapshotResult) {
    /**
     * @internal
     */
    DeleteRelationalDatabaseSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRelationalDatabaseSnapshotResult = exports.DeleteRelationalDatabaseSnapshotResult || (exports.DeleteRelationalDatabaseSnapshotResult = {}));
var DetachCertificateFromDistributionRequest;
(function (DetachCertificateFromDistributionRequest) {
    /**
     * @internal
     */
    DetachCertificateFromDistributionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachCertificateFromDistributionRequest = exports.DetachCertificateFromDistributionRequest || (exports.DetachCertificateFromDistributionRequest = {}));
var DetachCertificateFromDistributionResult;
(function (DetachCertificateFromDistributionResult) {
    /**
     * @internal
     */
    DetachCertificateFromDistributionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachCertificateFromDistributionResult = exports.DetachCertificateFromDistributionResult || (exports.DetachCertificateFromDistributionResult = {}));
var DetachDiskRequest;
(function (DetachDiskRequest) {
    /**
     * @internal
     */
    DetachDiskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachDiskRequest = exports.DetachDiskRequest || (exports.DetachDiskRequest = {}));
var DetachDiskResult;
(function (DetachDiskResult) {
    /**
     * @internal
     */
    DetachDiskResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachDiskResult = exports.DetachDiskResult || (exports.DetachDiskResult = {}));
var DetachInstancesFromLoadBalancerRequest;
(function (DetachInstancesFromLoadBalancerRequest) {
    /**
     * @internal
     */
    DetachInstancesFromLoadBalancerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachInstancesFromLoadBalancerRequest = exports.DetachInstancesFromLoadBalancerRequest || (exports.DetachInstancesFromLoadBalancerRequest = {}));
var DetachInstancesFromLoadBalancerResult;
(function (DetachInstancesFromLoadBalancerResult) {
    /**
     * @internal
     */
    DetachInstancesFromLoadBalancerResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachInstancesFromLoadBalancerResult = exports.DetachInstancesFromLoadBalancerResult || (exports.DetachInstancesFromLoadBalancerResult = {}));
var DetachStaticIpRequest;
(function (DetachStaticIpRequest) {
    /**
     * @internal
     */
    DetachStaticIpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachStaticIpRequest = exports.DetachStaticIpRequest || (exports.DetachStaticIpRequest = {}));
var DetachStaticIpResult;
(function (DetachStaticIpResult) {
    /**
     * @internal
     */
    DetachStaticIpResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachStaticIpResult = exports.DetachStaticIpResult || (exports.DetachStaticIpResult = {}));
var DisableAddOnRequest;
(function (DisableAddOnRequest) {
    /**
     * @internal
     */
    DisableAddOnRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableAddOnRequest = exports.DisableAddOnRequest || (exports.DisableAddOnRequest = {}));
var DisableAddOnResult;
(function (DisableAddOnResult) {
    /**
     * @internal
     */
    DisableAddOnResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableAddOnResult = exports.DisableAddOnResult || (exports.DisableAddOnResult = {}));
var DiskState;
(function (DiskState) {
    DiskState["Available"] = "available";
    DiskState["Error"] = "error";
    DiskState["InUse"] = "in-use";
    DiskState["Pending"] = "pending";
    DiskState["Unknown"] = "unknown";
})(DiskState = exports.DiskState || (exports.DiskState = {}));
var Disk;
(function (Disk) {
    /**
     * @internal
     */
    Disk.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Disk = exports.Disk || (exports.Disk = {}));
var DiskInfo;
(function (DiskInfo) {
    /**
     * @internal
     */
    DiskInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiskInfo = exports.DiskInfo || (exports.DiskInfo = {}));
var DiskSnapshotState;
(function (DiskSnapshotState) {
    DiskSnapshotState["Completed"] = "completed";
    DiskSnapshotState["Error"] = "error";
    DiskSnapshotState["Pending"] = "pending";
    DiskSnapshotState["Unknown"] = "unknown";
})(DiskSnapshotState = exports.DiskSnapshotState || (exports.DiskSnapshotState = {}));
var DiskSnapshot;
(function (DiskSnapshot) {
    /**
     * @internal
     */
    DiskSnapshot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiskSnapshot = exports.DiskSnapshot || (exports.DiskSnapshot = {}));
var DiskSnapshotInfo;
(function (DiskSnapshotInfo) {
    /**
     * @internal
     */
    DiskSnapshotInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiskSnapshotInfo = exports.DiskSnapshotInfo || (exports.DiskSnapshotInfo = {}));
var DistributionBundle;
(function (DistributionBundle) {
    /**
     * @internal
     */
    DistributionBundle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DistributionBundle = exports.DistributionBundle || (exports.DistributionBundle = {}));
var DistributionMetricName;
(function (DistributionMetricName) {
    DistributionMetricName["BytesDownloaded"] = "BytesDownloaded";
    DistributionMetricName["BytesUploaded"] = "BytesUploaded";
    DistributionMetricName["Http4xxErrorRate"] = "Http4xxErrorRate";
    DistributionMetricName["Http5xxErrorRate"] = "Http5xxErrorRate";
    DistributionMetricName["Requests"] = "Requests";
    DistributionMetricName["TotalErrorRate"] = "TotalErrorRate";
})(DistributionMetricName = exports.DistributionMetricName || (exports.DistributionMetricName = {}));
var Domain;
(function (Domain) {
    /**
     * @internal
     */
    Domain.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Domain = exports.Domain || (exports.Domain = {}));
var DownloadDefaultKeyPairRequest;
(function (DownloadDefaultKeyPairRequest) {
    /**
     * @internal
     */
    DownloadDefaultKeyPairRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DownloadDefaultKeyPairRequest = exports.DownloadDefaultKeyPairRequest || (exports.DownloadDefaultKeyPairRequest = {}));
var DownloadDefaultKeyPairResult;
(function (DownloadDefaultKeyPairResult) {
    /**
     * @internal
     */
    DownloadDefaultKeyPairResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DownloadDefaultKeyPairResult = exports.DownloadDefaultKeyPairResult || (exports.DownloadDefaultKeyPairResult = {}));
var EnableAddOnRequest;
(function (EnableAddOnRequest) {
    /**
     * @internal
     */
    EnableAddOnRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableAddOnRequest = exports.EnableAddOnRequest || (exports.EnableAddOnRequest = {}));
var EnableAddOnResult;
(function (EnableAddOnResult) {
    /**
     * @internal
     */
    EnableAddOnResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableAddOnResult = exports.EnableAddOnResult || (exports.EnableAddOnResult = {}));
var ExportSnapshotRequest;
(function (ExportSnapshotRequest) {
    /**
     * @internal
     */
    ExportSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportSnapshotRequest = exports.ExportSnapshotRequest || (exports.ExportSnapshotRequest = {}));
var ExportSnapshotResult;
(function (ExportSnapshotResult) {
    /**
     * @internal
     */
    ExportSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportSnapshotResult = exports.ExportSnapshotResult || (exports.ExportSnapshotResult = {}));
var InstanceSnapshotInfo;
(function (InstanceSnapshotInfo) {
    /**
     * @internal
     */
    InstanceSnapshotInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceSnapshotInfo = exports.InstanceSnapshotInfo || (exports.InstanceSnapshotInfo = {}));
var ExportSnapshotRecordSourceType;
(function (ExportSnapshotRecordSourceType) {
    ExportSnapshotRecordSourceType["DiskSnapshot"] = "DiskSnapshot";
    ExportSnapshotRecordSourceType["InstanceSnapshot"] = "InstanceSnapshot";
})(ExportSnapshotRecordSourceType = exports.ExportSnapshotRecordSourceType || (exports.ExportSnapshotRecordSourceType = {}));
var ExportSnapshotRecordSourceInfo;
(function (ExportSnapshotRecordSourceInfo) {
    /**
     * @internal
     */
    ExportSnapshotRecordSourceInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportSnapshotRecordSourceInfo = exports.ExportSnapshotRecordSourceInfo || (exports.ExportSnapshotRecordSourceInfo = {}));
var ExportSnapshotRecord;
(function (ExportSnapshotRecord) {
    /**
     * @internal
     */
    ExportSnapshotRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportSnapshotRecord = exports.ExportSnapshotRecord || (exports.ExportSnapshotRecord = {}));
var GetActiveNamesRequest;
(function (GetActiveNamesRequest) {
    /**
     * @internal
     */
    GetActiveNamesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetActiveNamesRequest = exports.GetActiveNamesRequest || (exports.GetActiveNamesRequest = {}));
var GetActiveNamesResult;
(function (GetActiveNamesResult) {
    /**
     * @internal
     */
    GetActiveNamesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetActiveNamesResult = exports.GetActiveNamesResult || (exports.GetActiveNamesResult = {}));
var GetAlarmsRequest;
(function (GetAlarmsRequest) {
    /**
     * @internal
     */
    GetAlarmsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAlarmsRequest = exports.GetAlarmsRequest || (exports.GetAlarmsRequest = {}));
var GetAlarmsResult;
(function (GetAlarmsResult) {
    /**
     * @internal
     */
    GetAlarmsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAlarmsResult = exports.GetAlarmsResult || (exports.GetAlarmsResult = {}));
var GetAutoSnapshotsRequest;
(function (GetAutoSnapshotsRequest) {
    /**
     * @internal
     */
    GetAutoSnapshotsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAutoSnapshotsRequest = exports.GetAutoSnapshotsRequest || (exports.GetAutoSnapshotsRequest = {}));
var GetAutoSnapshotsResult;
(function (GetAutoSnapshotsResult) {
    /**
     * @internal
     */
    GetAutoSnapshotsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAutoSnapshotsResult = exports.GetAutoSnapshotsResult || (exports.GetAutoSnapshotsResult = {}));
var GetBlueprintsRequest;
(function (GetBlueprintsRequest) {
    /**
     * @internal
     */
    GetBlueprintsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBlueprintsRequest = exports.GetBlueprintsRequest || (exports.GetBlueprintsRequest = {}));
var GetBlueprintsResult;
(function (GetBlueprintsResult) {
    /**
     * @internal
     */
    GetBlueprintsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBlueprintsResult = exports.GetBlueprintsResult || (exports.GetBlueprintsResult = {}));
var GetBundlesRequest;
(function (GetBundlesRequest) {
    /**
     * @internal
     */
    GetBundlesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBundlesRequest = exports.GetBundlesRequest || (exports.GetBundlesRequest = {}));
var GetBundlesResult;
(function (GetBundlesResult) {
    /**
     * @internal
     */
    GetBundlesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBundlesResult = exports.GetBundlesResult || (exports.GetBundlesResult = {}));
var GetCertificatesRequest;
(function (GetCertificatesRequest) {
    /**
     * @internal
     */
    GetCertificatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCertificatesRequest = exports.GetCertificatesRequest || (exports.GetCertificatesRequest = {}));
var GetCertificatesResult;
(function (GetCertificatesResult) {
    /**
     * @internal
     */
    GetCertificatesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCertificatesResult = exports.GetCertificatesResult || (exports.GetCertificatesResult = {}));
var GetCloudFormationStackRecordsRequest;
(function (GetCloudFormationStackRecordsRequest) {
    /**
     * @internal
     */
    GetCloudFormationStackRecordsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCloudFormationStackRecordsRequest = exports.GetCloudFormationStackRecordsRequest || (exports.GetCloudFormationStackRecordsRequest = {}));
var GetCloudFormationStackRecordsResult;
(function (GetCloudFormationStackRecordsResult) {
    /**
     * @internal
     */
    GetCloudFormationStackRecordsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCloudFormationStackRecordsResult = exports.GetCloudFormationStackRecordsResult || (exports.GetCloudFormationStackRecordsResult = {}));
var GetContactMethodsRequest;
(function (GetContactMethodsRequest) {
    /**
     * @internal
     */
    GetContactMethodsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactMethodsRequest = exports.GetContactMethodsRequest || (exports.GetContactMethodsRequest = {}));
var GetContactMethodsResult;
(function (GetContactMethodsResult) {
    /**
     * @internal
     */
    GetContactMethodsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactMethodsResult = exports.GetContactMethodsResult || (exports.GetContactMethodsResult = {}));
var GetContainerAPIMetadataRequest;
(function (GetContainerAPIMetadataRequest) {
    /**
     * @internal
     */
    GetContainerAPIMetadataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerAPIMetadataRequest = exports.GetContainerAPIMetadataRequest || (exports.GetContainerAPIMetadataRequest = {}));
var GetContainerAPIMetadataResult;
(function (GetContainerAPIMetadataResult) {
    /**
     * @internal
     */
    GetContainerAPIMetadataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerAPIMetadataResult = exports.GetContainerAPIMetadataResult || (exports.GetContainerAPIMetadataResult = {}));
var GetContainerImagesRequest;
(function (GetContainerImagesRequest) {
    /**
     * @internal
     */
    GetContainerImagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerImagesRequest = exports.GetContainerImagesRequest || (exports.GetContainerImagesRequest = {}));
var GetContainerImagesResult;
(function (GetContainerImagesResult) {
    /**
     * @internal
     */
    GetContainerImagesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerImagesResult = exports.GetContainerImagesResult || (exports.GetContainerImagesResult = {}));
var GetContainerLogRequest;
(function (GetContainerLogRequest) {
    /**
     * @internal
     */
    GetContainerLogRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerLogRequest = exports.GetContainerLogRequest || (exports.GetContainerLogRequest = {}));
var GetContainerLogResult;
(function (GetContainerLogResult) {
    /**
     * @internal
     */
    GetContainerLogResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerLogResult = exports.GetContainerLogResult || (exports.GetContainerLogResult = {}));
var GetContainerServiceDeploymentsRequest;
(function (GetContainerServiceDeploymentsRequest) {
    /**
     * @internal
     */
    GetContainerServiceDeploymentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerServiceDeploymentsRequest = exports.GetContainerServiceDeploymentsRequest || (exports.GetContainerServiceDeploymentsRequest = {}));
var GetContainerServiceDeploymentsResult;
(function (GetContainerServiceDeploymentsResult) {
    /**
     * @internal
     */
    GetContainerServiceDeploymentsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerServiceDeploymentsResult = exports.GetContainerServiceDeploymentsResult || (exports.GetContainerServiceDeploymentsResult = {}));
var GetContainerServiceMetricDataRequest;
(function (GetContainerServiceMetricDataRequest) {
    /**
     * @internal
     */
    GetContainerServiceMetricDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerServiceMetricDataRequest = exports.GetContainerServiceMetricDataRequest || (exports.GetContainerServiceMetricDataRequest = {}));
var MetricDatapoint;
(function (MetricDatapoint) {
    /**
     * @internal
     */
    MetricDatapoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricDatapoint = exports.MetricDatapoint || (exports.MetricDatapoint = {}));
var GetContainerServiceMetricDataResult;
(function (GetContainerServiceMetricDataResult) {
    /**
     * @internal
     */
    GetContainerServiceMetricDataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerServiceMetricDataResult = exports.GetContainerServiceMetricDataResult || (exports.GetContainerServiceMetricDataResult = {}));
var GetContainerServicePowersRequest;
(function (GetContainerServicePowersRequest) {
    /**
     * @internal
     */
    GetContainerServicePowersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerServicePowersRequest = exports.GetContainerServicePowersRequest || (exports.GetContainerServicePowersRequest = {}));
var GetContainerServicePowersResult;
(function (GetContainerServicePowersResult) {
    /**
     * @internal
     */
    GetContainerServicePowersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerServicePowersResult = exports.GetContainerServicePowersResult || (exports.GetContainerServicePowersResult = {}));
var GetContainerServicesRequest;
(function (GetContainerServicesRequest) {
    /**
     * @internal
     */
    GetContainerServicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerServicesRequest = exports.GetContainerServicesRequest || (exports.GetContainerServicesRequest = {}));
var GetDiskRequest;
(function (GetDiskRequest) {
    /**
     * @internal
     */
    GetDiskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDiskRequest = exports.GetDiskRequest || (exports.GetDiskRequest = {}));
var GetDiskResult;
(function (GetDiskResult) {
    /**
     * @internal
     */
    GetDiskResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDiskResult = exports.GetDiskResult || (exports.GetDiskResult = {}));
var GetDisksRequest;
(function (GetDisksRequest) {
    /**
     * @internal
     */
    GetDisksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDisksRequest = exports.GetDisksRequest || (exports.GetDisksRequest = {}));
var GetDisksResult;
(function (GetDisksResult) {
    /**
     * @internal
     */
    GetDisksResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDisksResult = exports.GetDisksResult || (exports.GetDisksResult = {}));
var GetDiskSnapshotRequest;
(function (GetDiskSnapshotRequest) {
    /**
     * @internal
     */
    GetDiskSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDiskSnapshotRequest = exports.GetDiskSnapshotRequest || (exports.GetDiskSnapshotRequest = {}));
var GetDiskSnapshotResult;
(function (GetDiskSnapshotResult) {
    /**
     * @internal
     */
    GetDiskSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDiskSnapshotResult = exports.GetDiskSnapshotResult || (exports.GetDiskSnapshotResult = {}));
var GetDiskSnapshotsRequest;
(function (GetDiskSnapshotsRequest) {
    /**
     * @internal
     */
    GetDiskSnapshotsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDiskSnapshotsRequest = exports.GetDiskSnapshotsRequest || (exports.GetDiskSnapshotsRequest = {}));
var GetDiskSnapshotsResult;
(function (GetDiskSnapshotsResult) {
    /**
     * @internal
     */
    GetDiskSnapshotsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDiskSnapshotsResult = exports.GetDiskSnapshotsResult || (exports.GetDiskSnapshotsResult = {}));
var GetDistributionBundlesRequest;
(function (GetDistributionBundlesRequest) {
    /**
     * @internal
     */
    GetDistributionBundlesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDistributionBundlesRequest = exports.GetDistributionBundlesRequest || (exports.GetDistributionBundlesRequest = {}));
var GetDistributionBundlesResult;
(function (GetDistributionBundlesResult) {
    /**
     * @internal
     */
    GetDistributionBundlesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDistributionBundlesResult = exports.GetDistributionBundlesResult || (exports.GetDistributionBundlesResult = {}));
var GetDistributionLatestCacheResetRequest;
(function (GetDistributionLatestCacheResetRequest) {
    /**
     * @internal
     */
    GetDistributionLatestCacheResetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDistributionLatestCacheResetRequest = exports.GetDistributionLatestCacheResetRequest || (exports.GetDistributionLatestCacheResetRequest = {}));
var GetDistributionLatestCacheResetResult;
(function (GetDistributionLatestCacheResetResult) {
    /**
     * @internal
     */
    GetDistributionLatestCacheResetResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDistributionLatestCacheResetResult = exports.GetDistributionLatestCacheResetResult || (exports.GetDistributionLatestCacheResetResult = {}));
var GetDistributionMetricDataRequest;
(function (GetDistributionMetricDataRequest) {
    /**
     * @internal
     */
    GetDistributionMetricDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDistributionMetricDataRequest = exports.GetDistributionMetricDataRequest || (exports.GetDistributionMetricDataRequest = {}));
var GetDistributionMetricDataResult;
(function (GetDistributionMetricDataResult) {
    /**
     * @internal
     */
    GetDistributionMetricDataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDistributionMetricDataResult = exports.GetDistributionMetricDataResult || (exports.GetDistributionMetricDataResult = {}));
var GetDistributionsRequest;
(function (GetDistributionsRequest) {
    /**
     * @internal
     */
    GetDistributionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDistributionsRequest = exports.GetDistributionsRequest || (exports.GetDistributionsRequest = {}));
var GetDistributionsResult;
(function (GetDistributionsResult) {
    /**
     * @internal
     */
    GetDistributionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDistributionsResult = exports.GetDistributionsResult || (exports.GetDistributionsResult = {}));
var GetDomainRequest;
(function (GetDomainRequest) {
    /**
     * @internal
     */
    GetDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainRequest = exports.GetDomainRequest || (exports.GetDomainRequest = {}));
var GetDomainResult;
(function (GetDomainResult) {
    /**
     * @internal
     */
    GetDomainResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainResult = exports.GetDomainResult || (exports.GetDomainResult = {}));
var GetDomainsRequest;
(function (GetDomainsRequest) {
    /**
     * @internal
     */
    GetDomainsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainsRequest = exports.GetDomainsRequest || (exports.GetDomainsRequest = {}));
var GetDomainsResult;
(function (GetDomainsResult) {
    /**
     * @internal
     */
    GetDomainsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainsResult = exports.GetDomainsResult || (exports.GetDomainsResult = {}));
var GetExportSnapshotRecordsRequest;
(function (GetExportSnapshotRecordsRequest) {
    /**
     * @internal
     */
    GetExportSnapshotRecordsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExportSnapshotRecordsRequest = exports.GetExportSnapshotRecordsRequest || (exports.GetExportSnapshotRecordsRequest = {}));
var GetExportSnapshotRecordsResult;
(function (GetExportSnapshotRecordsResult) {
    /**
     * @internal
     */
    GetExportSnapshotRecordsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExportSnapshotRecordsResult = exports.GetExportSnapshotRecordsResult || (exports.GetExportSnapshotRecordsResult = {}));
var GetInstanceRequest;
(function (GetInstanceRequest) {
    /**
     * @internal
     */
    GetInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceRequest = exports.GetInstanceRequest || (exports.GetInstanceRequest = {}));
var InstanceHardware;
(function (InstanceHardware) {
    /**
     * @internal
     */
    InstanceHardware.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceHardware = exports.InstanceHardware || (exports.InstanceHardware = {}));
var MonthlyTransfer;
(function (MonthlyTransfer) {
    /**
     * @internal
     */
    MonthlyTransfer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonthlyTransfer = exports.MonthlyTransfer || (exports.MonthlyTransfer = {}));
var PortAccessType;
(function (PortAccessType) {
    PortAccessType["Private"] = "Private";
    PortAccessType["Public"] = "Public";
})(PortAccessType = exports.PortAccessType || (exports.PortAccessType = {}));
var InstancePortInfo;
(function (InstancePortInfo) {
    /**
     * @internal
     */
    InstancePortInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstancePortInfo = exports.InstancePortInfo || (exports.InstancePortInfo = {}));
var InstanceNetworking;
(function (InstanceNetworking) {
    /**
     * @internal
     */
    InstanceNetworking.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceNetworking = exports.InstanceNetworking || (exports.InstanceNetworking = {}));
var InstanceState;
(function (InstanceState) {
    /**
     * @internal
     */
    InstanceState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceState = exports.InstanceState || (exports.InstanceState = {}));
var Instance;
(function (Instance) {
    /**
     * @internal
     */
    Instance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Instance = exports.Instance || (exports.Instance = {}));
var GetInstanceResult;
(function (GetInstanceResult) {
    /**
     * @internal
     */
    GetInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceResult = exports.GetInstanceResult || (exports.GetInstanceResult = {}));
var InstanceAccessProtocol;
(function (InstanceAccessProtocol) {
    InstanceAccessProtocol["rdp"] = "rdp";
    InstanceAccessProtocol["ssh"] = "ssh";
})(InstanceAccessProtocol = exports.InstanceAccessProtocol || (exports.InstanceAccessProtocol = {}));
var GetInstanceAccessDetailsRequest;
(function (GetInstanceAccessDetailsRequest) {
    /**
     * @internal
     */
    GetInstanceAccessDetailsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceAccessDetailsRequest = exports.GetInstanceAccessDetailsRequest || (exports.GetInstanceAccessDetailsRequest = {}));
var HostKeyAttributes;
(function (HostKeyAttributes) {
    /**
     * @internal
     */
    HostKeyAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostKeyAttributes = exports.HostKeyAttributes || (exports.HostKeyAttributes = {}));
var PasswordData;
(function (PasswordData) {
    /**
     * @internal
     */
    PasswordData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PasswordData = exports.PasswordData || (exports.PasswordData = {}));
var InstanceAccessDetails;
(function (InstanceAccessDetails) {
    /**
     * @internal
     */
    InstanceAccessDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceAccessDetails = exports.InstanceAccessDetails || (exports.InstanceAccessDetails = {}));
var GetInstanceAccessDetailsResult;
(function (GetInstanceAccessDetailsResult) {
    /**
     * @internal
     */
    GetInstanceAccessDetailsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceAccessDetailsResult = exports.GetInstanceAccessDetailsResult || (exports.GetInstanceAccessDetailsResult = {}));
var InstanceMetricName;
(function (InstanceMetricName) {
    InstanceMetricName["BurstCapacityPercentage"] = "BurstCapacityPercentage";
    InstanceMetricName["BurstCapacityTime"] = "BurstCapacityTime";
    InstanceMetricName["CPUUtilization"] = "CPUUtilization";
    InstanceMetricName["NetworkIn"] = "NetworkIn";
    InstanceMetricName["NetworkOut"] = "NetworkOut";
    InstanceMetricName["StatusCheckFailed"] = "StatusCheckFailed";
    InstanceMetricName["StatusCheckFailed_Instance"] = "StatusCheckFailed_Instance";
    InstanceMetricName["StatusCheckFailed_System"] = "StatusCheckFailed_System";
})(InstanceMetricName = exports.InstanceMetricName || (exports.InstanceMetricName = {}));
var GetInstanceMetricDataRequest;
(function (GetInstanceMetricDataRequest) {
    /**
     * @internal
     */
    GetInstanceMetricDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceMetricDataRequest = exports.GetInstanceMetricDataRequest || (exports.GetInstanceMetricDataRequest = {}));
var GetInstanceMetricDataResult;
(function (GetInstanceMetricDataResult) {
    /**
     * @internal
     */
    GetInstanceMetricDataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceMetricDataResult = exports.GetInstanceMetricDataResult || (exports.GetInstanceMetricDataResult = {}));
var GetInstancePortStatesRequest;
(function (GetInstancePortStatesRequest) {
    /**
     * @internal
     */
    GetInstancePortStatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstancePortStatesRequest = exports.GetInstancePortStatesRequest || (exports.GetInstancePortStatesRequest = {}));
var PortState;
(function (PortState) {
    PortState["Closed"] = "closed";
    PortState["Open"] = "open";
})(PortState = exports.PortState || (exports.PortState = {}));
var InstancePortState;
(function (InstancePortState) {
    /**
     * @internal
     */
    InstancePortState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstancePortState = exports.InstancePortState || (exports.InstancePortState = {}));
var GetInstancePortStatesResult;
(function (GetInstancePortStatesResult) {
    /**
     * @internal
     */
    GetInstancePortStatesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstancePortStatesResult = exports.GetInstancePortStatesResult || (exports.GetInstancePortStatesResult = {}));
var GetInstancesRequest;
(function (GetInstancesRequest) {
    /**
     * @internal
     */
    GetInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstancesRequest = exports.GetInstancesRequest || (exports.GetInstancesRequest = {}));
var GetInstancesResult;
(function (GetInstancesResult) {
    /**
     * @internal
     */
    GetInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstancesResult = exports.GetInstancesResult || (exports.GetInstancesResult = {}));
var GetInstanceSnapshotRequest;
(function (GetInstanceSnapshotRequest) {
    /**
     * @internal
     */
    GetInstanceSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceSnapshotRequest = exports.GetInstanceSnapshotRequest || (exports.GetInstanceSnapshotRequest = {}));
var InstanceSnapshotState;
(function (InstanceSnapshotState) {
    InstanceSnapshotState["Available"] = "available";
    InstanceSnapshotState["Error"] = "error";
    InstanceSnapshotState["Pending"] = "pending";
})(InstanceSnapshotState = exports.InstanceSnapshotState || (exports.InstanceSnapshotState = {}));
var InstanceSnapshot;
(function (InstanceSnapshot) {
    /**
     * @internal
     */
    InstanceSnapshot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceSnapshot = exports.InstanceSnapshot || (exports.InstanceSnapshot = {}));
var GetInstanceSnapshotResult;
(function (GetInstanceSnapshotResult) {
    /**
     * @internal
     */
    GetInstanceSnapshotResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceSnapshotResult = exports.GetInstanceSnapshotResult || (exports.GetInstanceSnapshotResult = {}));
var GetInstanceSnapshotsRequest;
(function (GetInstanceSnapshotsRequest) {
    /**
     * @internal
     */
    GetInstanceSnapshotsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceSnapshotsRequest = exports.GetInstanceSnapshotsRequest || (exports.GetInstanceSnapshotsRequest = {}));
var GetInstanceSnapshotsResult;
(function (GetInstanceSnapshotsResult) {
    /**
     * @internal
     */
    GetInstanceSnapshotsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceSnapshotsResult = exports.GetInstanceSnapshotsResult || (exports.GetInstanceSnapshotsResult = {}));
var GetInstanceStateRequest;
(function (GetInstanceStateRequest) {
    /**
     * @internal
     */
    GetInstanceStateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceStateRequest = exports.GetInstanceStateRequest || (exports.GetInstanceStateRequest = {}));
var GetInstanceStateResult;
(function (GetInstanceStateResult) {
    /**
     * @internal
     */
    GetInstanceStateResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInstanceStateResult = exports.GetInstanceStateResult || (exports.GetInstanceStateResult = {}));
//# sourceMappingURL=models_0.js.map