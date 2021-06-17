import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AgentUpdateStatus;
(function (AgentUpdateStatus) {
    AgentUpdateStatus["FAILED"] = "FAILED";
    AgentUpdateStatus["PENDING"] = "PENDING";
    AgentUpdateStatus["STAGED"] = "STAGED";
    AgentUpdateStatus["STAGING"] = "STAGING";
    AgentUpdateStatus["UPDATED"] = "UPDATED";
    AgentUpdateStatus["UPDATING"] = "UPDATING";
})(AgentUpdateStatus || (AgentUpdateStatus = {}));
export var ClientException;
(function (ClientException) {
    /**
     * @internal
     */
    ClientException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClientException || (ClientException = {}));
export var ManagedScalingStatus;
(function (ManagedScalingStatus) {
    ManagedScalingStatus["DISABLED"] = "DISABLED";
    ManagedScalingStatus["ENABLED"] = "ENABLED";
})(ManagedScalingStatus || (ManagedScalingStatus = {}));
export var ManagedScaling;
(function (ManagedScaling) {
    /**
     * @internal
     */
    ManagedScaling.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ManagedScaling || (ManagedScaling = {}));
export var ManagedTerminationProtection;
(function (ManagedTerminationProtection) {
    ManagedTerminationProtection["DISABLED"] = "DISABLED";
    ManagedTerminationProtection["ENABLED"] = "ENABLED";
})(ManagedTerminationProtection || (ManagedTerminationProtection = {}));
export var AutoScalingGroupProvider;
(function (AutoScalingGroupProvider) {
    /**
     * @internal
     */
    AutoScalingGroupProvider.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoScalingGroupProvider || (AutoScalingGroupProvider = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateCapacityProviderRequest;
(function (CreateCapacityProviderRequest) {
    /**
     * @internal
     */
    CreateCapacityProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCapacityProviderRequest || (CreateCapacityProviderRequest = {}));
export var CapacityProviderStatus;
(function (CapacityProviderStatus) {
    CapacityProviderStatus["ACTIVE"] = "ACTIVE";
    CapacityProviderStatus["INACTIVE"] = "INACTIVE";
})(CapacityProviderStatus || (CapacityProviderStatus = {}));
export var CapacityProviderUpdateStatus;
(function (CapacityProviderUpdateStatus) {
    CapacityProviderUpdateStatus["DELETE_COMPLETE"] = "DELETE_COMPLETE";
    CapacityProviderUpdateStatus["DELETE_FAILED"] = "DELETE_FAILED";
    CapacityProviderUpdateStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    CapacityProviderUpdateStatus["UPDATE_COMPLETE"] = "UPDATE_COMPLETE";
    CapacityProviderUpdateStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    CapacityProviderUpdateStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(CapacityProviderUpdateStatus || (CapacityProviderUpdateStatus = {}));
export var CapacityProvider;
(function (CapacityProvider) {
    /**
     * @internal
     */
    CapacityProvider.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CapacityProvider || (CapacityProvider = {}));
export var CreateCapacityProviderResponse;
(function (CreateCapacityProviderResponse) {
    /**
     * @internal
     */
    CreateCapacityProviderResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCapacityProviderResponse || (CreateCapacityProviderResponse = {}));
export var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterException || (InvalidParameterException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var ServerException;
(function (ServerException) {
    /**
     * @internal
     */
    ServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerException || (ServerException = {}));
export var UpdateInProgressException;
(function (UpdateInProgressException) {
    /**
     * @internal
     */
    UpdateInProgressException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInProgressException || (UpdateInProgressException = {}));
export var ExecuteCommandLogConfiguration;
(function (ExecuteCommandLogConfiguration) {
    /**
     * @internal
     */
    ExecuteCommandLogConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecuteCommandLogConfiguration || (ExecuteCommandLogConfiguration = {}));
export var ExecuteCommandLogging;
(function (ExecuteCommandLogging) {
    ExecuteCommandLogging["DEFAULT"] = "DEFAULT";
    ExecuteCommandLogging["NONE"] = "NONE";
    ExecuteCommandLogging["OVERRIDE"] = "OVERRIDE";
})(ExecuteCommandLogging || (ExecuteCommandLogging = {}));
export var ExecuteCommandConfiguration;
(function (ExecuteCommandConfiguration) {
    /**
     * @internal
     */
    ExecuteCommandConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecuteCommandConfiguration || (ExecuteCommandConfiguration = {}));
export var ClusterConfiguration;
(function (ClusterConfiguration) {
    /**
     * @internal
     */
    ClusterConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterConfiguration || (ClusterConfiguration = {}));
export var CapacityProviderStrategyItem;
(function (CapacityProviderStrategyItem) {
    /**
     * @internal
     */
    CapacityProviderStrategyItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CapacityProviderStrategyItem || (CapacityProviderStrategyItem = {}));
export var ClusterSettingName;
(function (ClusterSettingName) {
    ClusterSettingName["CONTAINER_INSIGHTS"] = "containerInsights";
})(ClusterSettingName || (ClusterSettingName = {}));
export var ClusterSetting;
(function (ClusterSetting) {
    /**
     * @internal
     */
    ClusterSetting.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterSetting || (ClusterSetting = {}));
export var CreateClusterRequest;
(function (CreateClusterRequest) {
    /**
     * @internal
     */
    CreateClusterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateClusterRequest || (CreateClusterRequest = {}));
export var KeyValuePair;
(function (KeyValuePair) {
    /**
     * @internal
     */
    KeyValuePair.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KeyValuePair || (KeyValuePair = {}));
export var Attachment;
(function (Attachment) {
    /**
     * @internal
     */
    Attachment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Attachment || (Attachment = {}));
export var Cluster;
(function (Cluster) {
    /**
     * @internal
     */
    Cluster.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Cluster || (Cluster = {}));
export var CreateClusterResponse;
(function (CreateClusterResponse) {
    /**
     * @internal
     */
    CreateClusterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateClusterResponse || (CreateClusterResponse = {}));
export var ClusterNotFoundException;
(function (ClusterNotFoundException) {
    /**
     * @internal
     */
    ClusterNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterNotFoundException || (ClusterNotFoundException = {}));
export var DeploymentCircuitBreaker;
(function (DeploymentCircuitBreaker) {
    /**
     * @internal
     */
    DeploymentCircuitBreaker.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeploymentCircuitBreaker || (DeploymentCircuitBreaker = {}));
export var DeploymentConfiguration;
(function (DeploymentConfiguration) {
    /**
     * @internal
     */
    DeploymentConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeploymentConfiguration || (DeploymentConfiguration = {}));
export var DeploymentControllerType;
(function (DeploymentControllerType) {
    DeploymentControllerType["CODE_DEPLOY"] = "CODE_DEPLOY";
    DeploymentControllerType["ECS"] = "ECS";
    DeploymentControllerType["EXTERNAL"] = "EXTERNAL";
})(DeploymentControllerType || (DeploymentControllerType = {}));
export var DeploymentController;
(function (DeploymentController) {
    /**
     * @internal
     */
    DeploymentController.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeploymentController || (DeploymentController = {}));
export var LaunchType;
(function (LaunchType) {
    LaunchType["EC2"] = "EC2";
    LaunchType["EXTERNAL"] = "EXTERNAL";
    LaunchType["FARGATE"] = "FARGATE";
})(LaunchType || (LaunchType = {}));
export var LoadBalancer;
(function (LoadBalancer) {
    /**
     * @internal
     */
    LoadBalancer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoadBalancer || (LoadBalancer = {}));
export var AssignPublicIp;
(function (AssignPublicIp) {
    AssignPublicIp["DISABLED"] = "DISABLED";
    AssignPublicIp["ENABLED"] = "ENABLED";
})(AssignPublicIp || (AssignPublicIp = {}));
export var AwsVpcConfiguration;
(function (AwsVpcConfiguration) {
    /**
     * @internal
     */
    AwsVpcConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsVpcConfiguration || (AwsVpcConfiguration = {}));
export var NetworkConfiguration;
(function (NetworkConfiguration) {
    /**
     * @internal
     */
    NetworkConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkConfiguration || (NetworkConfiguration = {}));
export var PlacementConstraintType;
(function (PlacementConstraintType) {
    PlacementConstraintType["DISTINCT_INSTANCE"] = "distinctInstance";
    PlacementConstraintType["MEMBER_OF"] = "memberOf";
})(PlacementConstraintType || (PlacementConstraintType = {}));
export var PlacementConstraint;
(function (PlacementConstraint) {
    /**
     * @internal
     */
    PlacementConstraint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlacementConstraint || (PlacementConstraint = {}));
export var PlacementStrategyType;
(function (PlacementStrategyType) {
    PlacementStrategyType["BINPACK"] = "binpack";
    PlacementStrategyType["RANDOM"] = "random";
    PlacementStrategyType["SPREAD"] = "spread";
})(PlacementStrategyType || (PlacementStrategyType = {}));
export var PlacementStrategy;
(function (PlacementStrategy) {
    /**
     * @internal
     */
    PlacementStrategy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlacementStrategy || (PlacementStrategy = {}));
export var PropagateTags;
(function (PropagateTags) {
    PropagateTags["SERVICE"] = "SERVICE";
    PropagateTags["TASK_DEFINITION"] = "TASK_DEFINITION";
})(PropagateTags || (PropagateTags = {}));
export var SchedulingStrategy;
(function (SchedulingStrategy) {
    SchedulingStrategy["DAEMON"] = "DAEMON";
    SchedulingStrategy["REPLICA"] = "REPLICA";
})(SchedulingStrategy || (SchedulingStrategy = {}));
export var ServiceRegistry;
(function (ServiceRegistry) {
    /**
     * @internal
     */
    ServiceRegistry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceRegistry || (ServiceRegistry = {}));
export var CreateServiceRequest;
(function (CreateServiceRequest) {
    /**
     * @internal
     */
    CreateServiceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateServiceRequest || (CreateServiceRequest = {}));
export var DeploymentRolloutState;
(function (DeploymentRolloutState) {
    DeploymentRolloutState["COMPLETED"] = "COMPLETED";
    DeploymentRolloutState["FAILED"] = "FAILED";
    DeploymentRolloutState["IN_PROGRESS"] = "IN_PROGRESS";
})(DeploymentRolloutState || (DeploymentRolloutState = {}));
export var Deployment;
(function (Deployment) {
    /**
     * @internal
     */
    Deployment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Deployment || (Deployment = {}));
export var ServiceEvent;
(function (ServiceEvent) {
    /**
     * @internal
     */
    ServiceEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceEvent || (ServiceEvent = {}));
export var ScaleUnit;
(function (ScaleUnit) {
    ScaleUnit["PERCENT"] = "PERCENT";
})(ScaleUnit || (ScaleUnit = {}));
export var Scale;
(function (Scale) {
    /**
     * @internal
     */
    Scale.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scale || (Scale = {}));
export var StabilityStatus;
(function (StabilityStatus) {
    StabilityStatus["STABILIZING"] = "STABILIZING";
    StabilityStatus["STEADY_STATE"] = "STEADY_STATE";
})(StabilityStatus || (StabilityStatus = {}));
export var TaskSet;
(function (TaskSet) {
    /**
     * @internal
     */
    TaskSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaskSet || (TaskSet = {}));
export var Service;
(function (Service) {
    /**
     * @internal
     */
    Service.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Service || (Service = {}));
export var CreateServiceResponse;
(function (CreateServiceResponse) {
    /**
     * @internal
     */
    CreateServiceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateServiceResponse || (CreateServiceResponse = {}));
export var PlatformTaskDefinitionIncompatibilityException;
(function (PlatformTaskDefinitionIncompatibilityException) {
    /**
     * @internal
     */
    PlatformTaskDefinitionIncompatibilityException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlatformTaskDefinitionIncompatibilityException || (PlatformTaskDefinitionIncompatibilityException = {}));
export var PlatformUnknownException;
(function (PlatformUnknownException) {
    /**
     * @internal
     */
    PlatformUnknownException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlatformUnknownException || (PlatformUnknownException = {}));
export var UnsupportedFeatureException;
(function (UnsupportedFeatureException) {
    /**
     * @internal
     */
    UnsupportedFeatureException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedFeatureException || (UnsupportedFeatureException = {}));
export var CreateTaskSetRequest;
(function (CreateTaskSetRequest) {
    /**
     * @internal
     */
    CreateTaskSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTaskSetRequest || (CreateTaskSetRequest = {}));
export var CreateTaskSetResponse;
(function (CreateTaskSetResponse) {
    /**
     * @internal
     */
    CreateTaskSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTaskSetResponse || (CreateTaskSetResponse = {}));
export var ServiceNotActiveException;
(function (ServiceNotActiveException) {
    /**
     * @internal
     */
    ServiceNotActiveException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceNotActiveException || (ServiceNotActiveException = {}));
export var ServiceNotFoundException;
(function (ServiceNotFoundException) {
    /**
     * @internal
     */
    ServiceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceNotFoundException || (ServiceNotFoundException = {}));
export var SettingName;
(function (SettingName) {
    SettingName["AWSVPC_TRUNKING"] = "awsvpcTrunking";
    SettingName["CONTAINER_INSIGHTS"] = "containerInsights";
    SettingName["CONTAINER_INSTANCE_LONG_ARN_FORMAT"] = "containerInstanceLongArnFormat";
    SettingName["SERVICE_LONG_ARN_FORMAT"] = "serviceLongArnFormat";
    SettingName["TASK_LONG_ARN_FORMAT"] = "taskLongArnFormat";
})(SettingName || (SettingName = {}));
export var DeleteAccountSettingRequest;
(function (DeleteAccountSettingRequest) {
    /**
     * @internal
     */
    DeleteAccountSettingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAccountSettingRequest || (DeleteAccountSettingRequest = {}));
export var Setting;
(function (Setting) {
    /**
     * @internal
     */
    Setting.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Setting || (Setting = {}));
export var DeleteAccountSettingResponse;
(function (DeleteAccountSettingResponse) {
    /**
     * @internal
     */
    DeleteAccountSettingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAccountSettingResponse || (DeleteAccountSettingResponse = {}));
export var TargetType;
(function (TargetType) {
    TargetType["CONTAINER_INSTANCE"] = "container-instance";
})(TargetType || (TargetType = {}));
export var Attribute;
(function (Attribute) {
    /**
     * @internal
     */
    Attribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Attribute || (Attribute = {}));
export var DeleteAttributesRequest;
(function (DeleteAttributesRequest) {
    /**
     * @internal
     */
    DeleteAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAttributesRequest || (DeleteAttributesRequest = {}));
export var DeleteAttributesResponse;
(function (DeleteAttributesResponse) {
    /**
     * @internal
     */
    DeleteAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAttributesResponse || (DeleteAttributesResponse = {}));
export var TargetNotFoundException;
(function (TargetNotFoundException) {
    /**
     * @internal
     */
    TargetNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetNotFoundException || (TargetNotFoundException = {}));
export var DeleteCapacityProviderRequest;
(function (DeleteCapacityProviderRequest) {
    /**
     * @internal
     */
    DeleteCapacityProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCapacityProviderRequest || (DeleteCapacityProviderRequest = {}));
export var DeleteCapacityProviderResponse;
(function (DeleteCapacityProviderResponse) {
    /**
     * @internal
     */
    DeleteCapacityProviderResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCapacityProviderResponse || (DeleteCapacityProviderResponse = {}));
export var ClusterContainsContainerInstancesException;
(function (ClusterContainsContainerInstancesException) {
    /**
     * @internal
     */
    ClusterContainsContainerInstancesException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterContainsContainerInstancesException || (ClusterContainsContainerInstancesException = {}));
export var ClusterContainsServicesException;
(function (ClusterContainsServicesException) {
    /**
     * @internal
     */
    ClusterContainsServicesException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterContainsServicesException || (ClusterContainsServicesException = {}));
export var ClusterContainsTasksException;
(function (ClusterContainsTasksException) {
    /**
     * @internal
     */
    ClusterContainsTasksException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClusterContainsTasksException || (ClusterContainsTasksException = {}));
export var DeleteClusterRequest;
(function (DeleteClusterRequest) {
    /**
     * @internal
     */
    DeleteClusterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteClusterRequest || (DeleteClusterRequest = {}));
export var DeleteClusterResponse;
(function (DeleteClusterResponse) {
    /**
     * @internal
     */
    DeleteClusterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteClusterResponse || (DeleteClusterResponse = {}));
export var DeleteServiceRequest;
(function (DeleteServiceRequest) {
    /**
     * @internal
     */
    DeleteServiceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteServiceRequest || (DeleteServiceRequest = {}));
export var DeleteServiceResponse;
(function (DeleteServiceResponse) {
    /**
     * @internal
     */
    DeleteServiceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteServiceResponse || (DeleteServiceResponse = {}));
export var DeleteTaskSetRequest;
(function (DeleteTaskSetRequest) {
    /**
     * @internal
     */
    DeleteTaskSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTaskSetRequest || (DeleteTaskSetRequest = {}));
export var DeleteTaskSetResponse;
(function (DeleteTaskSetResponse) {
    /**
     * @internal
     */
    DeleteTaskSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTaskSetResponse || (DeleteTaskSetResponse = {}));
export var TaskSetNotFoundException;
(function (TaskSetNotFoundException) {
    /**
     * @internal
     */
    TaskSetNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaskSetNotFoundException || (TaskSetNotFoundException = {}));
export var DeregisterContainerInstanceRequest;
(function (DeregisterContainerInstanceRequest) {
    /**
     * @internal
     */
    DeregisterContainerInstanceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterContainerInstanceRequest || (DeregisterContainerInstanceRequest = {}));
export var Resource;
(function (Resource) {
    /**
     * @internal
     */
    Resource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Resource || (Resource = {}));
export var VersionInfo;
(function (VersionInfo) {
    /**
     * @internal
     */
    VersionInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VersionInfo || (VersionInfo = {}));
export var ContainerInstance;
(function (ContainerInstance) {
    /**
     * @internal
     */
    ContainerInstance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerInstance || (ContainerInstance = {}));
export var DeregisterContainerInstanceResponse;
(function (DeregisterContainerInstanceResponse) {
    /**
     * @internal
     */
    DeregisterContainerInstanceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterContainerInstanceResponse || (DeregisterContainerInstanceResponse = {}));
export var DeregisterTaskDefinitionRequest;
(function (DeregisterTaskDefinitionRequest) {
    /**
     * @internal
     */
    DeregisterTaskDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterTaskDefinitionRequest || (DeregisterTaskDefinitionRequest = {}));
export var Compatibility;
(function (Compatibility) {
    Compatibility["EC2"] = "EC2";
    Compatibility["EXTERNAL"] = "EXTERNAL";
    Compatibility["FARGATE"] = "FARGATE";
})(Compatibility || (Compatibility = {}));
export var ContainerCondition;
(function (ContainerCondition) {
    ContainerCondition["COMPLETE"] = "COMPLETE";
    ContainerCondition["HEALTHY"] = "HEALTHY";
    ContainerCondition["START"] = "START";
    ContainerCondition["SUCCESS"] = "SUCCESS";
})(ContainerCondition || (ContainerCondition = {}));
export var ContainerDependency;
(function (ContainerDependency) {
    /**
     * @internal
     */
    ContainerDependency.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerDependency || (ContainerDependency = {}));
export var EnvironmentFileType;
(function (EnvironmentFileType) {
    EnvironmentFileType["S3"] = "s3";
})(EnvironmentFileType || (EnvironmentFileType = {}));
export var EnvironmentFile;
(function (EnvironmentFile) {
    /**
     * @internal
     */
    EnvironmentFile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnvironmentFile || (EnvironmentFile = {}));
export var HostEntry;
(function (HostEntry) {
    /**
     * @internal
     */
    HostEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HostEntry || (HostEntry = {}));
export var FirelensConfigurationType;
(function (FirelensConfigurationType) {
    FirelensConfigurationType["FLUENTBIT"] = "fluentbit";
    FirelensConfigurationType["FLUENTD"] = "fluentd";
})(FirelensConfigurationType || (FirelensConfigurationType = {}));
export var FirelensConfiguration;
(function (FirelensConfiguration) {
    /**
     * @internal
     */
    FirelensConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FirelensConfiguration || (FirelensConfiguration = {}));
export var HealthCheck;
(function (HealthCheck) {
    /**
     * @internal
     */
    HealthCheck.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HealthCheck || (HealthCheck = {}));
export var KernelCapabilities;
(function (KernelCapabilities) {
    /**
     * @internal
     */
    KernelCapabilities.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KernelCapabilities || (KernelCapabilities = {}));
export var DeviceCgroupPermission;
(function (DeviceCgroupPermission) {
    DeviceCgroupPermission["MKNOD"] = "mknod";
    DeviceCgroupPermission["READ"] = "read";
    DeviceCgroupPermission["WRITE"] = "write";
})(DeviceCgroupPermission || (DeviceCgroupPermission = {}));
export var Device;
(function (Device) {
    /**
     * @internal
     */
    Device.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Device || (Device = {}));
export var Tmpfs;
(function (Tmpfs) {
    /**
     * @internal
     */
    Tmpfs.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tmpfs || (Tmpfs = {}));
export var LinuxParameters;
(function (LinuxParameters) {
    /**
     * @internal
     */
    LinuxParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LinuxParameters || (LinuxParameters = {}));
export var LogDriver;
(function (LogDriver) {
    LogDriver["AWSFIRELENS"] = "awsfirelens";
    LogDriver["AWSLOGS"] = "awslogs";
    LogDriver["FLUENTD"] = "fluentd";
    LogDriver["GELF"] = "gelf";
    LogDriver["JOURNALD"] = "journald";
    LogDriver["JSON_FILE"] = "json-file";
    LogDriver["SPLUNK"] = "splunk";
    LogDriver["SYSLOG"] = "syslog";
})(LogDriver || (LogDriver = {}));
export var Secret;
(function (Secret) {
    /**
     * @internal
     */
    Secret.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Secret || (Secret = {}));
export var LogConfiguration;
(function (LogConfiguration) {
    /**
     * @internal
     */
    LogConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LogConfiguration || (LogConfiguration = {}));
export var MountPoint;
(function (MountPoint) {
    /**
     * @internal
     */
    MountPoint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MountPoint || (MountPoint = {}));
export var TransportProtocol;
(function (TransportProtocol) {
    TransportProtocol["TCP"] = "tcp";
    TransportProtocol["UDP"] = "udp";
})(TransportProtocol || (TransportProtocol = {}));
export var PortMapping;
(function (PortMapping) {
    /**
     * @internal
     */
    PortMapping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PortMapping || (PortMapping = {}));
export var RepositoryCredentials;
(function (RepositoryCredentials) {
    /**
     * @internal
     */
    RepositoryCredentials.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepositoryCredentials || (RepositoryCredentials = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["GPU"] = "GPU";
    ResourceType["INFERENCE_ACCELERATOR"] = "InferenceAccelerator";
})(ResourceType || (ResourceType = {}));
export var ResourceRequirement;
(function (ResourceRequirement) {
    /**
     * @internal
     */
    ResourceRequirement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceRequirement || (ResourceRequirement = {}));
export var SystemControl;
(function (SystemControl) {
    /**
     * @internal
     */
    SystemControl.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SystemControl || (SystemControl = {}));
export var UlimitName;
(function (UlimitName) {
    UlimitName["CORE"] = "core";
    UlimitName["CPU"] = "cpu";
    UlimitName["DATA"] = "data";
    UlimitName["FSIZE"] = "fsize";
    UlimitName["LOCKS"] = "locks";
    UlimitName["MEMLOCK"] = "memlock";
    UlimitName["MSGQUEUE"] = "msgqueue";
    UlimitName["NICE"] = "nice";
    UlimitName["NOFILE"] = "nofile";
    UlimitName["NPROC"] = "nproc";
    UlimitName["RSS"] = "rss";
    UlimitName["RTPRIO"] = "rtprio";
    UlimitName["RTTIME"] = "rttime";
    UlimitName["SIGPENDING"] = "sigpending";
    UlimitName["STACK"] = "stack";
})(UlimitName || (UlimitName = {}));
export var Ulimit;
(function (Ulimit) {
    /**
     * @internal
     */
    Ulimit.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Ulimit || (Ulimit = {}));
export var VolumeFrom;
(function (VolumeFrom) {
    /**
     * @internal
     */
    VolumeFrom.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VolumeFrom || (VolumeFrom = {}));
export var ContainerDefinition;
(function (ContainerDefinition) {
    /**
     * @internal
     */
    ContainerDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerDefinition || (ContainerDefinition = {}));
export var EphemeralStorage;
(function (EphemeralStorage) {
    /**
     * @internal
     */
    EphemeralStorage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EphemeralStorage || (EphemeralStorage = {}));
export var InferenceAccelerator;
(function (InferenceAccelerator) {
    /**
     * @internal
     */
    InferenceAccelerator.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InferenceAccelerator || (InferenceAccelerator = {}));
export var IpcMode;
(function (IpcMode) {
    IpcMode["HOST"] = "host";
    IpcMode["NONE"] = "none";
    IpcMode["TASK"] = "task";
})(IpcMode || (IpcMode = {}));
export var NetworkMode;
(function (NetworkMode) {
    NetworkMode["AWSVPC"] = "awsvpc";
    NetworkMode["BRIDGE"] = "bridge";
    NetworkMode["HOST"] = "host";
    NetworkMode["NONE"] = "none";
})(NetworkMode || (NetworkMode = {}));
export var PidMode;
(function (PidMode) {
    PidMode["HOST"] = "host";
    PidMode["TASK"] = "task";
})(PidMode || (PidMode = {}));
export var TaskDefinitionPlacementConstraintType;
(function (TaskDefinitionPlacementConstraintType) {
    TaskDefinitionPlacementConstraintType["MEMBER_OF"] = "memberOf";
})(TaskDefinitionPlacementConstraintType || (TaskDefinitionPlacementConstraintType = {}));
export var TaskDefinitionPlacementConstraint;
(function (TaskDefinitionPlacementConstraint) {
    /**
     * @internal
     */
    TaskDefinitionPlacementConstraint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaskDefinitionPlacementConstraint || (TaskDefinitionPlacementConstraint = {}));
export var ProxyConfigurationType;
(function (ProxyConfigurationType) {
    ProxyConfigurationType["APPMESH"] = "APPMESH";
})(ProxyConfigurationType || (ProxyConfigurationType = {}));
export var ProxyConfiguration;
(function (ProxyConfiguration) {
    /**
     * @internal
     */
    ProxyConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProxyConfiguration || (ProxyConfiguration = {}));
export var TaskDefinitionStatus;
(function (TaskDefinitionStatus) {
    TaskDefinitionStatus["ACTIVE"] = "ACTIVE";
    TaskDefinitionStatus["INACTIVE"] = "INACTIVE";
})(TaskDefinitionStatus || (TaskDefinitionStatus = {}));
export var Scope;
(function (Scope) {
    Scope["SHARED"] = "shared";
    Scope["TASK"] = "task";
})(Scope || (Scope = {}));
export var DockerVolumeConfiguration;
(function (DockerVolumeConfiguration) {
    /**
     * @internal
     */
    DockerVolumeConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DockerVolumeConfiguration || (DockerVolumeConfiguration = {}));
export var EFSAuthorizationConfigIAM;
(function (EFSAuthorizationConfigIAM) {
    EFSAuthorizationConfigIAM["DISABLED"] = "DISABLED";
    EFSAuthorizationConfigIAM["ENABLED"] = "ENABLED";
})(EFSAuthorizationConfigIAM || (EFSAuthorizationConfigIAM = {}));
export var EFSAuthorizationConfig;
(function (EFSAuthorizationConfig) {
    /**
     * @internal
     */
    EFSAuthorizationConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EFSAuthorizationConfig || (EFSAuthorizationConfig = {}));
export var EFSTransitEncryption;
(function (EFSTransitEncryption) {
    EFSTransitEncryption["DISABLED"] = "DISABLED";
    EFSTransitEncryption["ENABLED"] = "ENABLED";
})(EFSTransitEncryption || (EFSTransitEncryption = {}));
export var EFSVolumeConfiguration;
(function (EFSVolumeConfiguration) {
    /**
     * @internal
     */
    EFSVolumeConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EFSVolumeConfiguration || (EFSVolumeConfiguration = {}));
export var FSxWindowsFileServerAuthorizationConfig;
(function (FSxWindowsFileServerAuthorizationConfig) {
    /**
     * @internal
     */
    FSxWindowsFileServerAuthorizationConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FSxWindowsFileServerAuthorizationConfig || (FSxWindowsFileServerAuthorizationConfig = {}));
export var FSxWindowsFileServerVolumeConfiguration;
(function (FSxWindowsFileServerVolumeConfiguration) {
    /**
     * @internal
     */
    FSxWindowsFileServerVolumeConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FSxWindowsFileServerVolumeConfiguration || (FSxWindowsFileServerVolumeConfiguration = {}));
export var HostVolumeProperties;
(function (HostVolumeProperties) {
    /**
     * @internal
     */
    HostVolumeProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HostVolumeProperties || (HostVolumeProperties = {}));
export var Volume;
(function (Volume) {
    /**
     * @internal
     */
    Volume.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Volume || (Volume = {}));
export var TaskDefinition;
(function (TaskDefinition) {
    /**
     * @internal
     */
    TaskDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaskDefinition || (TaskDefinition = {}));
export var DeregisterTaskDefinitionResponse;
(function (DeregisterTaskDefinitionResponse) {
    /**
     * @internal
     */
    DeregisterTaskDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterTaskDefinitionResponse || (DeregisterTaskDefinitionResponse = {}));
export var CapacityProviderField;
(function (CapacityProviderField) {
    CapacityProviderField["TAGS"] = "TAGS";
})(CapacityProviderField || (CapacityProviderField = {}));
export var DescribeCapacityProvidersRequest;
(function (DescribeCapacityProvidersRequest) {
    /**
     * @internal
     */
    DescribeCapacityProvidersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCapacityProvidersRequest || (DescribeCapacityProvidersRequest = {}));
export var Failure;
(function (Failure) {
    /**
     * @internal
     */
    Failure.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Failure || (Failure = {}));
export var DescribeCapacityProvidersResponse;
(function (DescribeCapacityProvidersResponse) {
    /**
     * @internal
     */
    DescribeCapacityProvidersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCapacityProvidersResponse || (DescribeCapacityProvidersResponse = {}));
export var ClusterField;
(function (ClusterField) {
    ClusterField["ATTACHMENTS"] = "ATTACHMENTS";
    ClusterField["CONFIGURATIONS"] = "CONFIGURATIONS";
    ClusterField["SETTINGS"] = "SETTINGS";
    ClusterField["STATISTICS"] = "STATISTICS";
    ClusterField["TAGS"] = "TAGS";
})(ClusterField || (ClusterField = {}));
export var DescribeClustersRequest;
(function (DescribeClustersRequest) {
    /**
     * @internal
     */
    DescribeClustersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeClustersRequest || (DescribeClustersRequest = {}));
export var DescribeClustersResponse;
(function (DescribeClustersResponse) {
    /**
     * @internal
     */
    DescribeClustersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeClustersResponse || (DescribeClustersResponse = {}));
export var ContainerInstanceField;
(function (ContainerInstanceField) {
    ContainerInstanceField["TAGS"] = "TAGS";
})(ContainerInstanceField || (ContainerInstanceField = {}));
export var DescribeContainerInstancesRequest;
(function (DescribeContainerInstancesRequest) {
    /**
     * @internal
     */
    DescribeContainerInstancesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeContainerInstancesRequest || (DescribeContainerInstancesRequest = {}));
export var DescribeContainerInstancesResponse;
(function (DescribeContainerInstancesResponse) {
    /**
     * @internal
     */
    DescribeContainerInstancesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeContainerInstancesResponse || (DescribeContainerInstancesResponse = {}));
export var ServiceField;
(function (ServiceField) {
    ServiceField["TAGS"] = "TAGS";
})(ServiceField || (ServiceField = {}));
export var DescribeServicesRequest;
(function (DescribeServicesRequest) {
    /**
     * @internal
     */
    DescribeServicesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeServicesRequest || (DescribeServicesRequest = {}));
export var DescribeServicesResponse;
(function (DescribeServicesResponse) {
    /**
     * @internal
     */
    DescribeServicesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeServicesResponse || (DescribeServicesResponse = {}));
export var TaskDefinitionField;
(function (TaskDefinitionField) {
    TaskDefinitionField["TAGS"] = "TAGS";
})(TaskDefinitionField || (TaskDefinitionField = {}));
export var DescribeTaskDefinitionRequest;
(function (DescribeTaskDefinitionRequest) {
    /**
     * @internal
     */
    DescribeTaskDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTaskDefinitionRequest || (DescribeTaskDefinitionRequest = {}));
export var DescribeTaskDefinitionResponse;
(function (DescribeTaskDefinitionResponse) {
    /**
     * @internal
     */
    DescribeTaskDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTaskDefinitionResponse || (DescribeTaskDefinitionResponse = {}));
export var TaskField;
(function (TaskField) {
    TaskField["TAGS"] = "TAGS";
})(TaskField || (TaskField = {}));
export var DescribeTasksRequest;
(function (DescribeTasksRequest) {
    /**
     * @internal
     */
    DescribeTasksRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTasksRequest || (DescribeTasksRequest = {}));
export var Connectivity;
(function (Connectivity) {
    Connectivity["CONNECTED"] = "CONNECTED";
    Connectivity["DISCONNECTED"] = "DISCONNECTED";
})(Connectivity || (Connectivity = {}));
export var HealthStatus;
(function (HealthStatus) {
    HealthStatus["HEALTHY"] = "HEALTHY";
    HealthStatus["UNHEALTHY"] = "UNHEALTHY";
    HealthStatus["UNKNOWN"] = "UNKNOWN";
})(HealthStatus || (HealthStatus = {}));
export var ManagedAgentName;
(function (ManagedAgentName) {
    ManagedAgentName["ExecuteCommandAgent"] = "ExecuteCommandAgent";
})(ManagedAgentName || (ManagedAgentName = {}));
export var ManagedAgent;
(function (ManagedAgent) {
    /**
     * @internal
     */
    ManagedAgent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ManagedAgent || (ManagedAgent = {}));
export var NetworkBinding;
(function (NetworkBinding) {
    /**
     * @internal
     */
    NetworkBinding.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkBinding || (NetworkBinding = {}));
export var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkInterface || (NetworkInterface = {}));
export var Container;
(function (Container) {
    /**
     * @internal
     */
    Container.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Container || (Container = {}));
export var ContainerOverride;
(function (ContainerOverride) {
    /**
     * @internal
     */
    ContainerOverride.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerOverride || (ContainerOverride = {}));
export var InferenceAcceleratorOverride;
(function (InferenceAcceleratorOverride) {
    /**
     * @internal
     */
    InferenceAcceleratorOverride.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InferenceAcceleratorOverride || (InferenceAcceleratorOverride = {}));
export var TaskOverride;
(function (TaskOverride) {
    /**
     * @internal
     */
    TaskOverride.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaskOverride || (TaskOverride = {}));
export var TaskStopCode;
(function (TaskStopCode) {
    TaskStopCode["ESSENTIAL_CONTAINER_EXITED"] = "EssentialContainerExited";
    TaskStopCode["TASK_FAILED_TO_START"] = "TaskFailedToStart";
    TaskStopCode["USER_INITIATED"] = "UserInitiated";
})(TaskStopCode || (TaskStopCode = {}));
export var Task;
(function (Task) {
    /**
     * @internal
     */
    Task.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Task || (Task = {}));
export var DescribeTasksResponse;
(function (DescribeTasksResponse) {
    /**
     * @internal
     */
    DescribeTasksResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTasksResponse || (DescribeTasksResponse = {}));
export var TaskSetField;
(function (TaskSetField) {
    TaskSetField["TAGS"] = "TAGS";
})(TaskSetField || (TaskSetField = {}));
export var DescribeTaskSetsRequest;
(function (DescribeTaskSetsRequest) {
    /**
     * @internal
     */
    DescribeTaskSetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTaskSetsRequest || (DescribeTaskSetsRequest = {}));
export var DescribeTaskSetsResponse;
(function (DescribeTaskSetsResponse) {
    /**
     * @internal
     */
    DescribeTaskSetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTaskSetsResponse || (DescribeTaskSetsResponse = {}));
export var DiscoverPollEndpointRequest;
(function (DiscoverPollEndpointRequest) {
    /**
     * @internal
     */
    DiscoverPollEndpointRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DiscoverPollEndpointRequest || (DiscoverPollEndpointRequest = {}));
export var DiscoverPollEndpointResponse;
(function (DiscoverPollEndpointResponse) {
    /**
     * @internal
     */
    DiscoverPollEndpointResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DiscoverPollEndpointResponse || (DiscoverPollEndpointResponse = {}));
export var ExecuteCommandRequest;
(function (ExecuteCommandRequest) {
    /**
     * @internal
     */
    ExecuteCommandRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecuteCommandRequest || (ExecuteCommandRequest = {}));
export var Session;
(function (Session) {
    /**
     * @internal
     */
    Session.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.tokenValue && { tokenValue: SENSITIVE_STRING }))); };
})(Session || (Session = {}));
export var ExecuteCommandResponse;
(function (ExecuteCommandResponse) {
    /**
     * @internal
     */
    ExecuteCommandResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.session && { session: Session.filterSensitiveLog(obj.session) }))); };
})(ExecuteCommandResponse || (ExecuteCommandResponse = {}));
export var TargetNotConnectedException;
(function (TargetNotConnectedException) {
    /**
     * @internal
     */
    TargetNotConnectedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetNotConnectedException || (TargetNotConnectedException = {}));
export var ListAccountSettingsRequest;
(function (ListAccountSettingsRequest) {
    /**
     * @internal
     */
    ListAccountSettingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountSettingsRequest || (ListAccountSettingsRequest = {}));
export var ListAccountSettingsResponse;
(function (ListAccountSettingsResponse) {
    /**
     * @internal
     */
    ListAccountSettingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccountSettingsResponse || (ListAccountSettingsResponse = {}));
export var ListAttributesRequest;
(function (ListAttributesRequest) {
    /**
     * @internal
     */
    ListAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAttributesRequest || (ListAttributesRequest = {}));
export var ListAttributesResponse;
(function (ListAttributesResponse) {
    /**
     * @internal
     */
    ListAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAttributesResponse || (ListAttributesResponse = {}));
export var ListClustersRequest;
(function (ListClustersRequest) {
    /**
     * @internal
     */
    ListClustersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClustersRequest || (ListClustersRequest = {}));
export var ListClustersResponse;
(function (ListClustersResponse) {
    /**
     * @internal
     */
    ListClustersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClustersResponse || (ListClustersResponse = {}));
export var ContainerInstanceStatus;
(function (ContainerInstanceStatus) {
    ContainerInstanceStatus["ACTIVE"] = "ACTIVE";
    ContainerInstanceStatus["DEREGISTERING"] = "DEREGISTERING";
    ContainerInstanceStatus["DRAINING"] = "DRAINING";
    ContainerInstanceStatus["REGISTERING"] = "REGISTERING";
    ContainerInstanceStatus["REGISTRATION_FAILED"] = "REGISTRATION_FAILED";
})(ContainerInstanceStatus || (ContainerInstanceStatus = {}));
export var ListContainerInstancesRequest;
(function (ListContainerInstancesRequest) {
    /**
     * @internal
     */
    ListContainerInstancesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListContainerInstancesRequest || (ListContainerInstancesRequest = {}));
export var ListContainerInstancesResponse;
(function (ListContainerInstancesResponse) {
    /**
     * @internal
     */
    ListContainerInstancesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListContainerInstancesResponse || (ListContainerInstancesResponse = {}));
export var ListServicesRequest;
(function (ListServicesRequest) {
    /**
     * @internal
     */
    ListServicesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListServicesRequest || (ListServicesRequest = {}));
export var ListServicesResponse;
(function (ListServicesResponse) {
    /**
     * @internal
     */
    ListServicesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListServicesResponse || (ListServicesResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var TaskDefinitionFamilyStatus;
(function (TaskDefinitionFamilyStatus) {
    TaskDefinitionFamilyStatus["ACTIVE"] = "ACTIVE";
    TaskDefinitionFamilyStatus["ALL"] = "ALL";
    TaskDefinitionFamilyStatus["INACTIVE"] = "INACTIVE";
})(TaskDefinitionFamilyStatus || (TaskDefinitionFamilyStatus = {}));
export var ListTaskDefinitionFamiliesRequest;
(function (ListTaskDefinitionFamiliesRequest) {
    /**
     * @internal
     */
    ListTaskDefinitionFamiliesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTaskDefinitionFamiliesRequest || (ListTaskDefinitionFamiliesRequest = {}));
export var ListTaskDefinitionFamiliesResponse;
(function (ListTaskDefinitionFamiliesResponse) {
    /**
     * @internal
     */
    ListTaskDefinitionFamiliesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTaskDefinitionFamiliesResponse || (ListTaskDefinitionFamiliesResponse = {}));
export var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "ASC";
    SortOrder["DESC"] = "DESC";
})(SortOrder || (SortOrder = {}));
export var ListTaskDefinitionsRequest;
(function (ListTaskDefinitionsRequest) {
    /**
     * @internal
     */
    ListTaskDefinitionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTaskDefinitionsRequest || (ListTaskDefinitionsRequest = {}));
export var ListTaskDefinitionsResponse;
(function (ListTaskDefinitionsResponse) {
    /**
     * @internal
     */
    ListTaskDefinitionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTaskDefinitionsResponse || (ListTaskDefinitionsResponse = {}));
export var DesiredStatus;
(function (DesiredStatus) {
    DesiredStatus["PENDING"] = "PENDING";
    DesiredStatus["RUNNING"] = "RUNNING";
    DesiredStatus["STOPPED"] = "STOPPED";
})(DesiredStatus || (DesiredStatus = {}));
export var ListTasksRequest;
(function (ListTasksRequest) {
    /**
     * @internal
     */
    ListTasksRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTasksRequest || (ListTasksRequest = {}));
export var ListTasksResponse;
(function (ListTasksResponse) {
    /**
     * @internal
     */
    ListTasksResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTasksResponse || (ListTasksResponse = {}));
export var PutAccountSettingRequest;
(function (PutAccountSettingRequest) {
    /**
     * @internal
     */
    PutAccountSettingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAccountSettingRequest || (PutAccountSettingRequest = {}));
export var PutAccountSettingResponse;
(function (PutAccountSettingResponse) {
    /**
     * @internal
     */
    PutAccountSettingResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAccountSettingResponse || (PutAccountSettingResponse = {}));
export var PutAccountSettingDefaultRequest;
(function (PutAccountSettingDefaultRequest) {
    /**
     * @internal
     */
    PutAccountSettingDefaultRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAccountSettingDefaultRequest || (PutAccountSettingDefaultRequest = {}));
export var PutAccountSettingDefaultResponse;
(function (PutAccountSettingDefaultResponse) {
    /**
     * @internal
     */
    PutAccountSettingDefaultResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAccountSettingDefaultResponse || (PutAccountSettingDefaultResponse = {}));
export var AttributeLimitExceededException;
(function (AttributeLimitExceededException) {
    /**
     * @internal
     */
    AttributeLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttributeLimitExceededException || (AttributeLimitExceededException = {}));
export var PutAttributesRequest;
(function (PutAttributesRequest) {
    /**
     * @internal
     */
    PutAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAttributesRequest || (PutAttributesRequest = {}));
export var PutAttributesResponse;
(function (PutAttributesResponse) {
    /**
     * @internal
     */
    PutAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAttributesResponse || (PutAttributesResponse = {}));
export var PutClusterCapacityProvidersRequest;
(function (PutClusterCapacityProvidersRequest) {
    /**
     * @internal
     */
    PutClusterCapacityProvidersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutClusterCapacityProvidersRequest || (PutClusterCapacityProvidersRequest = {}));
export var PutClusterCapacityProvidersResponse;
(function (PutClusterCapacityProvidersResponse) {
    /**
     * @internal
     */
    PutClusterCapacityProvidersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutClusterCapacityProvidersResponse || (PutClusterCapacityProvidersResponse = {}));
export var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceInUseException || (ResourceInUseException = {}));
export var PlatformDeviceType;
(function (PlatformDeviceType) {
    PlatformDeviceType["GPU"] = "GPU";
})(PlatformDeviceType || (PlatformDeviceType = {}));
export var PlatformDevice;
(function (PlatformDevice) {
    /**
     * @internal
     */
    PlatformDevice.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlatformDevice || (PlatformDevice = {}));
export var RegisterContainerInstanceRequest;
(function (RegisterContainerInstanceRequest) {
    /**
     * @internal
     */
    RegisterContainerInstanceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterContainerInstanceRequest || (RegisterContainerInstanceRequest = {}));
export var RegisterContainerInstanceResponse;
(function (RegisterContainerInstanceResponse) {
    /**
     * @internal
     */
    RegisterContainerInstanceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterContainerInstanceResponse || (RegisterContainerInstanceResponse = {}));
export var RegisterTaskDefinitionRequest;
(function (RegisterTaskDefinitionRequest) {
    /**
     * @internal
     */
    RegisterTaskDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterTaskDefinitionRequest || (RegisterTaskDefinitionRequest = {}));
export var RegisterTaskDefinitionResponse;
(function (RegisterTaskDefinitionResponse) {
    /**
     * @internal
     */
    RegisterTaskDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterTaskDefinitionResponse || (RegisterTaskDefinitionResponse = {}));
export var BlockedException;
(function (BlockedException) {
    /**
     * @internal
     */
    BlockedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BlockedException || (BlockedException = {}));
export var RunTaskRequest;
(function (RunTaskRequest) {
    /**
     * @internal
     */
    RunTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RunTaskRequest || (RunTaskRequest = {}));
export var RunTaskResponse;
(function (RunTaskResponse) {
    /**
     * @internal
     */
    RunTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RunTaskResponse || (RunTaskResponse = {}));
export var StartTaskRequest;
(function (StartTaskRequest) {
    /**
     * @internal
     */
    StartTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartTaskRequest || (StartTaskRequest = {}));
export var StartTaskResponse;
(function (StartTaskResponse) {
    /**
     * @internal
     */
    StartTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartTaskResponse || (StartTaskResponse = {}));
export var StopTaskRequest;
(function (StopTaskRequest) {
    /**
     * @internal
     */
    StopTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopTaskRequest || (StopTaskRequest = {}));
export var StopTaskResponse;
(function (StopTaskResponse) {
    /**
     * @internal
     */
    StopTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopTaskResponse || (StopTaskResponse = {}));
export var AttachmentStateChange;
(function (AttachmentStateChange) {
    /**
     * @internal
     */
    AttachmentStateChange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttachmentStateChange || (AttachmentStateChange = {}));
export var SubmitAttachmentStateChangesRequest;
(function (SubmitAttachmentStateChangesRequest) {
    /**
     * @internal
     */
    SubmitAttachmentStateChangesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubmitAttachmentStateChangesRequest || (SubmitAttachmentStateChangesRequest = {}));
export var SubmitAttachmentStateChangesResponse;
(function (SubmitAttachmentStateChangesResponse) {
    /**
     * @internal
     */
    SubmitAttachmentStateChangesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubmitAttachmentStateChangesResponse || (SubmitAttachmentStateChangesResponse = {}));
export var SubmitContainerStateChangeRequest;
(function (SubmitContainerStateChangeRequest) {
    /**
     * @internal
     */
    SubmitContainerStateChangeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubmitContainerStateChangeRequest || (SubmitContainerStateChangeRequest = {}));
export var SubmitContainerStateChangeResponse;
(function (SubmitContainerStateChangeResponse) {
    /**
     * @internal
     */
    SubmitContainerStateChangeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubmitContainerStateChangeResponse || (SubmitContainerStateChangeResponse = {}));
export var ContainerStateChange;
(function (ContainerStateChange) {
    /**
     * @internal
     */
    ContainerStateChange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerStateChange || (ContainerStateChange = {}));
export var ManagedAgentStateChange;
(function (ManagedAgentStateChange) {
    /**
     * @internal
     */
    ManagedAgentStateChange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ManagedAgentStateChange || (ManagedAgentStateChange = {}));
export var SubmitTaskStateChangeRequest;
(function (SubmitTaskStateChangeRequest) {
    /**
     * @internal
     */
    SubmitTaskStateChangeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubmitTaskStateChangeRequest || (SubmitTaskStateChangeRequest = {}));
export var SubmitTaskStateChangeResponse;
(function (SubmitTaskStateChangeResponse) {
    /**
     * @internal
     */
    SubmitTaskStateChangeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubmitTaskStateChangeResponse || (SubmitTaskStateChangeResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var AutoScalingGroupProviderUpdate;
(function (AutoScalingGroupProviderUpdate) {
    /**
     * @internal
     */
    AutoScalingGroupProviderUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AutoScalingGroupProviderUpdate || (AutoScalingGroupProviderUpdate = {}));
export var UpdateCapacityProviderRequest;
(function (UpdateCapacityProviderRequest) {
    /**
     * @internal
     */
    UpdateCapacityProviderRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateCapacityProviderRequest || (UpdateCapacityProviderRequest = {}));
export var UpdateCapacityProviderResponse;
(function (UpdateCapacityProviderResponse) {
    /**
     * @internal
     */
    UpdateCapacityProviderResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateCapacityProviderResponse || (UpdateCapacityProviderResponse = {}));
export var UpdateClusterRequest;
(function (UpdateClusterRequest) {
    /**
     * @internal
     */
    UpdateClusterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClusterRequest || (UpdateClusterRequest = {}));
export var UpdateClusterResponse;
(function (UpdateClusterResponse) {
    /**
     * @internal
     */
    UpdateClusterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClusterResponse || (UpdateClusterResponse = {}));
export var UpdateClusterSettingsRequest;
(function (UpdateClusterSettingsRequest) {
    /**
     * @internal
     */
    UpdateClusterSettingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClusterSettingsRequest || (UpdateClusterSettingsRequest = {}));
export var UpdateClusterSettingsResponse;
(function (UpdateClusterSettingsResponse) {
    /**
     * @internal
     */
    UpdateClusterSettingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClusterSettingsResponse || (UpdateClusterSettingsResponse = {}));
export var MissingVersionException;
(function (MissingVersionException) {
    /**
     * @internal
     */
    MissingVersionException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MissingVersionException || (MissingVersionException = {}));
export var NoUpdateAvailableException;
(function (NoUpdateAvailableException) {
    /**
     * @internal
     */
    NoUpdateAvailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoUpdateAvailableException || (NoUpdateAvailableException = {}));
export var UpdateContainerAgentRequest;
(function (UpdateContainerAgentRequest) {
    /**
     * @internal
     */
    UpdateContainerAgentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateContainerAgentRequest || (UpdateContainerAgentRequest = {}));
export var UpdateContainerAgentResponse;
(function (UpdateContainerAgentResponse) {
    /**
     * @internal
     */
    UpdateContainerAgentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateContainerAgentResponse || (UpdateContainerAgentResponse = {}));
export var UpdateContainerInstancesStateRequest;
(function (UpdateContainerInstancesStateRequest) {
    /**
     * @internal
     */
    UpdateContainerInstancesStateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateContainerInstancesStateRequest || (UpdateContainerInstancesStateRequest = {}));
export var UpdateContainerInstancesStateResponse;
(function (UpdateContainerInstancesStateResponse) {
    /**
     * @internal
     */
    UpdateContainerInstancesStateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateContainerInstancesStateResponse || (UpdateContainerInstancesStateResponse = {}));
export var UpdateServiceRequest;
(function (UpdateServiceRequest) {
    /**
     * @internal
     */
    UpdateServiceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateServiceRequest || (UpdateServiceRequest = {}));
export var UpdateServiceResponse;
(function (UpdateServiceResponse) {
    /**
     * @internal
     */
    UpdateServiceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateServiceResponse || (UpdateServiceResponse = {}));
export var UpdateServicePrimaryTaskSetRequest;
(function (UpdateServicePrimaryTaskSetRequest) {
    /**
     * @internal
     */
    UpdateServicePrimaryTaskSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateServicePrimaryTaskSetRequest || (UpdateServicePrimaryTaskSetRequest = {}));
export var UpdateServicePrimaryTaskSetResponse;
(function (UpdateServicePrimaryTaskSetResponse) {
    /**
     * @internal
     */
    UpdateServicePrimaryTaskSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateServicePrimaryTaskSetResponse || (UpdateServicePrimaryTaskSetResponse = {}));
export var UpdateTaskSetRequest;
(function (UpdateTaskSetRequest) {
    /**
     * @internal
     */
    UpdateTaskSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTaskSetRequest || (UpdateTaskSetRequest = {}));
export var UpdateTaskSetResponse;
(function (UpdateTaskSetResponse) {
    /**
     * @internal
     */
    UpdateTaskSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTaskSetResponse || (UpdateTaskSetResponse = {}));
//# sourceMappingURL=models_0.js.map