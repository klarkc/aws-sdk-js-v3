"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceEvent = exports.Deployment = exports.DeploymentRolloutState = exports.CreateServiceRequest = exports.ServiceRegistry = exports.SchedulingStrategy = exports.PropagateTags = exports.PlacementStrategy = exports.PlacementStrategyType = exports.PlacementConstraint = exports.PlacementConstraintType = exports.NetworkConfiguration = exports.AwsVpcConfiguration = exports.AssignPublicIp = exports.LoadBalancer = exports.LaunchType = exports.DeploymentController = exports.DeploymentControllerType = exports.DeploymentConfiguration = exports.DeploymentCircuitBreaker = exports.ClusterNotFoundException = exports.CreateClusterResponse = exports.Cluster = exports.Attachment = exports.KeyValuePair = exports.CreateClusterRequest = exports.ClusterSetting = exports.ClusterSettingName = exports.CapacityProviderStrategyItem = exports.ClusterConfiguration = exports.ExecuteCommandConfiguration = exports.ExecuteCommandLogging = exports.ExecuteCommandLogConfiguration = exports.UpdateInProgressException = exports.ServerException = exports.LimitExceededException = exports.InvalidParameterException = exports.CreateCapacityProviderResponse = exports.CapacityProvider = exports.CapacityProviderUpdateStatus = exports.CapacityProviderStatus = exports.CreateCapacityProviderRequest = exports.Tag = exports.AutoScalingGroupProvider = exports.ManagedTerminationProtection = exports.ManagedScaling = exports.ManagedScalingStatus = exports.ClientException = exports.AgentUpdateStatus = exports.AccessDeniedException = void 0;
exports.KernelCapabilities = exports.HealthCheck = exports.FirelensConfiguration = exports.FirelensConfigurationType = exports.HostEntry = exports.EnvironmentFile = exports.EnvironmentFileType = exports.ContainerDependency = exports.ContainerCondition = exports.Compatibility = exports.DeregisterTaskDefinitionRequest = exports.DeregisterContainerInstanceResponse = exports.ContainerInstance = exports.VersionInfo = exports.Resource = exports.DeregisterContainerInstanceRequest = exports.TaskSetNotFoundException = exports.DeleteTaskSetResponse = exports.DeleteTaskSetRequest = exports.DeleteServiceResponse = exports.DeleteServiceRequest = exports.DeleteClusterResponse = exports.DeleteClusterRequest = exports.ClusterContainsTasksException = exports.ClusterContainsServicesException = exports.ClusterContainsContainerInstancesException = exports.DeleteCapacityProviderResponse = exports.DeleteCapacityProviderRequest = exports.TargetNotFoundException = exports.DeleteAttributesResponse = exports.DeleteAttributesRequest = exports.Attribute = exports.TargetType = exports.DeleteAccountSettingResponse = exports.Setting = exports.DeleteAccountSettingRequest = exports.SettingName = exports.ServiceNotFoundException = exports.ServiceNotActiveException = exports.CreateTaskSetResponse = exports.CreateTaskSetRequest = exports.UnsupportedFeatureException = exports.PlatformUnknownException = exports.PlatformTaskDefinitionIncompatibilityException = exports.CreateServiceResponse = exports.Service = exports.TaskSet = exports.StabilityStatus = exports.Scale = exports.ScaleUnit = void 0;
exports.DescribeContainerInstancesResponse = exports.DescribeContainerInstancesRequest = exports.ContainerInstanceField = exports.DescribeClustersResponse = exports.DescribeClustersRequest = exports.ClusterField = exports.DescribeCapacityProvidersResponse = exports.Failure = exports.DescribeCapacityProvidersRequest = exports.CapacityProviderField = exports.DeregisterTaskDefinitionResponse = exports.TaskDefinition = exports.Volume = exports.HostVolumeProperties = exports.FSxWindowsFileServerVolumeConfiguration = exports.FSxWindowsFileServerAuthorizationConfig = exports.EFSVolumeConfiguration = exports.EFSTransitEncryption = exports.EFSAuthorizationConfig = exports.EFSAuthorizationConfigIAM = exports.DockerVolumeConfiguration = exports.Scope = exports.TaskDefinitionStatus = exports.ProxyConfiguration = exports.ProxyConfigurationType = exports.TaskDefinitionPlacementConstraint = exports.TaskDefinitionPlacementConstraintType = exports.PidMode = exports.NetworkMode = exports.IpcMode = exports.InferenceAccelerator = exports.EphemeralStorage = exports.ContainerDefinition = exports.VolumeFrom = exports.Ulimit = exports.UlimitName = exports.SystemControl = exports.ResourceRequirement = exports.ResourceType = exports.RepositoryCredentials = exports.PortMapping = exports.TransportProtocol = exports.MountPoint = exports.LogConfiguration = exports.Secret = exports.LogDriver = exports.LinuxParameters = exports.Tmpfs = exports.Device = exports.DeviceCgroupPermission = void 0;
exports.DesiredStatus = exports.ListTaskDefinitionsResponse = exports.ListTaskDefinitionsRequest = exports.SortOrder = exports.ListTaskDefinitionFamiliesResponse = exports.ListTaskDefinitionFamiliesRequest = exports.TaskDefinitionFamilyStatus = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListServicesResponse = exports.ListServicesRequest = exports.ListContainerInstancesResponse = exports.ListContainerInstancesRequest = exports.ContainerInstanceStatus = exports.ListClustersResponse = exports.ListClustersRequest = exports.ListAttributesResponse = exports.ListAttributesRequest = exports.ListAccountSettingsResponse = exports.ListAccountSettingsRequest = exports.TargetNotConnectedException = exports.ExecuteCommandResponse = exports.Session = exports.ExecuteCommandRequest = exports.DiscoverPollEndpointResponse = exports.DiscoverPollEndpointRequest = exports.DescribeTaskSetsResponse = exports.DescribeTaskSetsRequest = exports.TaskSetField = exports.DescribeTasksResponse = exports.Task = exports.TaskStopCode = exports.TaskOverride = exports.InferenceAcceleratorOverride = exports.ContainerOverride = exports.Container = exports.NetworkInterface = exports.NetworkBinding = exports.ManagedAgent = exports.ManagedAgentName = exports.HealthStatus = exports.Connectivity = exports.DescribeTasksRequest = exports.TaskField = exports.DescribeTaskDefinitionResponse = exports.DescribeTaskDefinitionRequest = exports.TaskDefinitionField = exports.DescribeServicesResponse = exports.DescribeServicesRequest = exports.ServiceField = void 0;
exports.UpdateContainerAgentResponse = exports.UpdateContainerAgentRequest = exports.NoUpdateAvailableException = exports.MissingVersionException = exports.UpdateClusterSettingsResponse = exports.UpdateClusterSettingsRequest = exports.UpdateClusterResponse = exports.UpdateClusterRequest = exports.UpdateCapacityProviderResponse = exports.UpdateCapacityProviderRequest = exports.AutoScalingGroupProviderUpdate = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.ResourceNotFoundException = exports.SubmitTaskStateChangeResponse = exports.SubmitTaskStateChangeRequest = exports.ManagedAgentStateChange = exports.ContainerStateChange = exports.SubmitContainerStateChangeResponse = exports.SubmitContainerStateChangeRequest = exports.SubmitAttachmentStateChangesResponse = exports.SubmitAttachmentStateChangesRequest = exports.AttachmentStateChange = exports.StopTaskResponse = exports.StopTaskRequest = exports.StartTaskResponse = exports.StartTaskRequest = exports.RunTaskResponse = exports.RunTaskRequest = exports.BlockedException = exports.RegisterTaskDefinitionResponse = exports.RegisterTaskDefinitionRequest = exports.RegisterContainerInstanceResponse = exports.RegisterContainerInstanceRequest = exports.PlatformDevice = exports.PlatformDeviceType = exports.ResourceInUseException = exports.PutClusterCapacityProvidersResponse = exports.PutClusterCapacityProvidersRequest = exports.PutAttributesResponse = exports.PutAttributesRequest = exports.AttributeLimitExceededException = exports.PutAccountSettingDefaultResponse = exports.PutAccountSettingDefaultRequest = exports.PutAccountSettingResponse = exports.PutAccountSettingRequest = exports.ListTasksResponse = exports.ListTasksRequest = void 0;
exports.UpdateTaskSetResponse = exports.UpdateTaskSetRequest = exports.UpdateServicePrimaryTaskSetResponse = exports.UpdateServicePrimaryTaskSetRequest = exports.UpdateServiceResponse = exports.UpdateServiceRequest = exports.UpdateContainerInstancesStateResponse = exports.UpdateContainerInstancesStateRequest = void 0;
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
var AgentUpdateStatus;
(function (AgentUpdateStatus) {
    AgentUpdateStatus["FAILED"] = "FAILED";
    AgentUpdateStatus["PENDING"] = "PENDING";
    AgentUpdateStatus["STAGED"] = "STAGED";
    AgentUpdateStatus["STAGING"] = "STAGING";
    AgentUpdateStatus["UPDATED"] = "UPDATED";
    AgentUpdateStatus["UPDATING"] = "UPDATING";
})(AgentUpdateStatus = exports.AgentUpdateStatus || (exports.AgentUpdateStatus = {}));
var ClientException;
(function (ClientException) {
    /**
     * @internal
     */
    ClientException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClientException = exports.ClientException || (exports.ClientException = {}));
var ManagedScalingStatus;
(function (ManagedScalingStatus) {
    ManagedScalingStatus["DISABLED"] = "DISABLED";
    ManagedScalingStatus["ENABLED"] = "ENABLED";
})(ManagedScalingStatus = exports.ManagedScalingStatus || (exports.ManagedScalingStatus = {}));
var ManagedScaling;
(function (ManagedScaling) {
    /**
     * @internal
     */
    ManagedScaling.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManagedScaling = exports.ManagedScaling || (exports.ManagedScaling = {}));
var ManagedTerminationProtection;
(function (ManagedTerminationProtection) {
    ManagedTerminationProtection["DISABLED"] = "DISABLED";
    ManagedTerminationProtection["ENABLED"] = "ENABLED";
})(ManagedTerminationProtection = exports.ManagedTerminationProtection || (exports.ManagedTerminationProtection = {}));
var AutoScalingGroupProvider;
(function (AutoScalingGroupProvider) {
    /**
     * @internal
     */
    AutoScalingGroupProvider.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingGroupProvider = exports.AutoScalingGroupProvider || (exports.AutoScalingGroupProvider = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateCapacityProviderRequest;
(function (CreateCapacityProviderRequest) {
    /**
     * @internal
     */
    CreateCapacityProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCapacityProviderRequest = exports.CreateCapacityProviderRequest || (exports.CreateCapacityProviderRequest = {}));
var CapacityProviderStatus;
(function (CapacityProviderStatus) {
    CapacityProviderStatus["ACTIVE"] = "ACTIVE";
    CapacityProviderStatus["INACTIVE"] = "INACTIVE";
})(CapacityProviderStatus = exports.CapacityProviderStatus || (exports.CapacityProviderStatus = {}));
var CapacityProviderUpdateStatus;
(function (CapacityProviderUpdateStatus) {
    CapacityProviderUpdateStatus["DELETE_COMPLETE"] = "DELETE_COMPLETE";
    CapacityProviderUpdateStatus["DELETE_FAILED"] = "DELETE_FAILED";
    CapacityProviderUpdateStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    CapacityProviderUpdateStatus["UPDATE_COMPLETE"] = "UPDATE_COMPLETE";
    CapacityProviderUpdateStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    CapacityProviderUpdateStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(CapacityProviderUpdateStatus = exports.CapacityProviderUpdateStatus || (exports.CapacityProviderUpdateStatus = {}));
var CapacityProvider;
(function (CapacityProvider) {
    /**
     * @internal
     */
    CapacityProvider.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CapacityProvider = exports.CapacityProvider || (exports.CapacityProvider = {}));
var CreateCapacityProviderResponse;
(function (CreateCapacityProviderResponse) {
    /**
     * @internal
     */
    CreateCapacityProviderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCapacityProviderResponse = exports.CreateCapacityProviderResponse || (exports.CreateCapacityProviderResponse = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ServerException;
(function (ServerException) {
    /**
     * @internal
     */
    ServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerException = exports.ServerException || (exports.ServerException = {}));
var UpdateInProgressException;
(function (UpdateInProgressException) {
    /**
     * @internal
     */
    UpdateInProgressException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInProgressException = exports.UpdateInProgressException || (exports.UpdateInProgressException = {}));
var ExecuteCommandLogConfiguration;
(function (ExecuteCommandLogConfiguration) {
    /**
     * @internal
     */
    ExecuteCommandLogConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecuteCommandLogConfiguration = exports.ExecuteCommandLogConfiguration || (exports.ExecuteCommandLogConfiguration = {}));
var ExecuteCommandLogging;
(function (ExecuteCommandLogging) {
    ExecuteCommandLogging["DEFAULT"] = "DEFAULT";
    ExecuteCommandLogging["NONE"] = "NONE";
    ExecuteCommandLogging["OVERRIDE"] = "OVERRIDE";
})(ExecuteCommandLogging = exports.ExecuteCommandLogging || (exports.ExecuteCommandLogging = {}));
var ExecuteCommandConfiguration;
(function (ExecuteCommandConfiguration) {
    /**
     * @internal
     */
    ExecuteCommandConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecuteCommandConfiguration = exports.ExecuteCommandConfiguration || (exports.ExecuteCommandConfiguration = {}));
var ClusterConfiguration;
(function (ClusterConfiguration) {
    /**
     * @internal
     */
    ClusterConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterConfiguration = exports.ClusterConfiguration || (exports.ClusterConfiguration = {}));
var CapacityProviderStrategyItem;
(function (CapacityProviderStrategyItem) {
    /**
     * @internal
     */
    CapacityProviderStrategyItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CapacityProviderStrategyItem = exports.CapacityProviderStrategyItem || (exports.CapacityProviderStrategyItem = {}));
var ClusterSettingName;
(function (ClusterSettingName) {
    ClusterSettingName["CONTAINER_INSIGHTS"] = "containerInsights";
})(ClusterSettingName = exports.ClusterSettingName || (exports.ClusterSettingName = {}));
var ClusterSetting;
(function (ClusterSetting) {
    /**
     * @internal
     */
    ClusterSetting.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterSetting = exports.ClusterSetting || (exports.ClusterSetting = {}));
var CreateClusterRequest;
(function (CreateClusterRequest) {
    /**
     * @internal
     */
    CreateClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterRequest = exports.CreateClusterRequest || (exports.CreateClusterRequest = {}));
var KeyValuePair;
(function (KeyValuePair) {
    /**
     * @internal
     */
    KeyValuePair.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeyValuePair = exports.KeyValuePair || (exports.KeyValuePair = {}));
var Attachment;
(function (Attachment) {
    /**
     * @internal
     */
    Attachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Attachment = exports.Attachment || (exports.Attachment = {}));
var Cluster;
(function (Cluster) {
    /**
     * @internal
     */
    Cluster.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Cluster = exports.Cluster || (exports.Cluster = {}));
var CreateClusterResponse;
(function (CreateClusterResponse) {
    /**
     * @internal
     */
    CreateClusterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClusterResponse = exports.CreateClusterResponse || (exports.CreateClusterResponse = {}));
var ClusterNotFoundException;
(function (ClusterNotFoundException) {
    /**
     * @internal
     */
    ClusterNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterNotFoundException = exports.ClusterNotFoundException || (exports.ClusterNotFoundException = {}));
var DeploymentCircuitBreaker;
(function (DeploymentCircuitBreaker) {
    /**
     * @internal
     */
    DeploymentCircuitBreaker.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentCircuitBreaker = exports.DeploymentCircuitBreaker || (exports.DeploymentCircuitBreaker = {}));
var DeploymentConfiguration;
(function (DeploymentConfiguration) {
    /**
     * @internal
     */
    DeploymentConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentConfiguration = exports.DeploymentConfiguration || (exports.DeploymentConfiguration = {}));
var DeploymentControllerType;
(function (DeploymentControllerType) {
    DeploymentControllerType["CODE_DEPLOY"] = "CODE_DEPLOY";
    DeploymentControllerType["ECS"] = "ECS";
    DeploymentControllerType["EXTERNAL"] = "EXTERNAL";
})(DeploymentControllerType = exports.DeploymentControllerType || (exports.DeploymentControllerType = {}));
var DeploymentController;
(function (DeploymentController) {
    /**
     * @internal
     */
    DeploymentController.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentController = exports.DeploymentController || (exports.DeploymentController = {}));
var LaunchType;
(function (LaunchType) {
    LaunchType["EC2"] = "EC2";
    LaunchType["EXTERNAL"] = "EXTERNAL";
    LaunchType["FARGATE"] = "FARGATE";
})(LaunchType = exports.LaunchType || (exports.LaunchType = {}));
var LoadBalancer;
(function (LoadBalancer) {
    /**
     * @internal
     */
    LoadBalancer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadBalancer = exports.LoadBalancer || (exports.LoadBalancer = {}));
var AssignPublicIp;
(function (AssignPublicIp) {
    AssignPublicIp["DISABLED"] = "DISABLED";
    AssignPublicIp["ENABLED"] = "ENABLED";
})(AssignPublicIp = exports.AssignPublicIp || (exports.AssignPublicIp = {}));
var AwsVpcConfiguration;
(function (AwsVpcConfiguration) {
    /**
     * @internal
     */
    AwsVpcConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsVpcConfiguration = exports.AwsVpcConfiguration || (exports.AwsVpcConfiguration = {}));
var NetworkConfiguration;
(function (NetworkConfiguration) {
    /**
     * @internal
     */
    NetworkConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkConfiguration = exports.NetworkConfiguration || (exports.NetworkConfiguration = {}));
var PlacementConstraintType;
(function (PlacementConstraintType) {
    PlacementConstraintType["DISTINCT_INSTANCE"] = "distinctInstance";
    PlacementConstraintType["MEMBER_OF"] = "memberOf";
})(PlacementConstraintType = exports.PlacementConstraintType || (exports.PlacementConstraintType = {}));
var PlacementConstraint;
(function (PlacementConstraint) {
    /**
     * @internal
     */
    PlacementConstraint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlacementConstraint = exports.PlacementConstraint || (exports.PlacementConstraint = {}));
var PlacementStrategyType;
(function (PlacementStrategyType) {
    PlacementStrategyType["BINPACK"] = "binpack";
    PlacementStrategyType["RANDOM"] = "random";
    PlacementStrategyType["SPREAD"] = "spread";
})(PlacementStrategyType = exports.PlacementStrategyType || (exports.PlacementStrategyType = {}));
var PlacementStrategy;
(function (PlacementStrategy) {
    /**
     * @internal
     */
    PlacementStrategy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlacementStrategy = exports.PlacementStrategy || (exports.PlacementStrategy = {}));
var PropagateTags;
(function (PropagateTags) {
    PropagateTags["SERVICE"] = "SERVICE";
    PropagateTags["TASK_DEFINITION"] = "TASK_DEFINITION";
})(PropagateTags = exports.PropagateTags || (exports.PropagateTags = {}));
var SchedulingStrategy;
(function (SchedulingStrategy) {
    SchedulingStrategy["DAEMON"] = "DAEMON";
    SchedulingStrategy["REPLICA"] = "REPLICA";
})(SchedulingStrategy = exports.SchedulingStrategy || (exports.SchedulingStrategy = {}));
var ServiceRegistry;
(function (ServiceRegistry) {
    /**
     * @internal
     */
    ServiceRegistry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceRegistry = exports.ServiceRegistry || (exports.ServiceRegistry = {}));
var CreateServiceRequest;
(function (CreateServiceRequest) {
    /**
     * @internal
     */
    CreateServiceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateServiceRequest = exports.CreateServiceRequest || (exports.CreateServiceRequest = {}));
var DeploymentRolloutState;
(function (DeploymentRolloutState) {
    DeploymentRolloutState["COMPLETED"] = "COMPLETED";
    DeploymentRolloutState["FAILED"] = "FAILED";
    DeploymentRolloutState["IN_PROGRESS"] = "IN_PROGRESS";
})(DeploymentRolloutState = exports.DeploymentRolloutState || (exports.DeploymentRolloutState = {}));
var Deployment;
(function (Deployment) {
    /**
     * @internal
     */
    Deployment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Deployment = exports.Deployment || (exports.Deployment = {}));
var ServiceEvent;
(function (ServiceEvent) {
    /**
     * @internal
     */
    ServiceEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceEvent = exports.ServiceEvent || (exports.ServiceEvent = {}));
var ScaleUnit;
(function (ScaleUnit) {
    ScaleUnit["PERCENT"] = "PERCENT";
})(ScaleUnit = exports.ScaleUnit || (exports.ScaleUnit = {}));
var Scale;
(function (Scale) {
    /**
     * @internal
     */
    Scale.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scale = exports.Scale || (exports.Scale = {}));
var StabilityStatus;
(function (StabilityStatus) {
    StabilityStatus["STABILIZING"] = "STABILIZING";
    StabilityStatus["STEADY_STATE"] = "STEADY_STATE";
})(StabilityStatus = exports.StabilityStatus || (exports.StabilityStatus = {}));
var TaskSet;
(function (TaskSet) {
    /**
     * @internal
     */
    TaskSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskSet = exports.TaskSet || (exports.TaskSet = {}));
var Service;
(function (Service) {
    /**
     * @internal
     */
    Service.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Service = exports.Service || (exports.Service = {}));
var CreateServiceResponse;
(function (CreateServiceResponse) {
    /**
     * @internal
     */
    CreateServiceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateServiceResponse = exports.CreateServiceResponse || (exports.CreateServiceResponse = {}));
var PlatformTaskDefinitionIncompatibilityException;
(function (PlatformTaskDefinitionIncompatibilityException) {
    /**
     * @internal
     */
    PlatformTaskDefinitionIncompatibilityException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlatformTaskDefinitionIncompatibilityException = exports.PlatformTaskDefinitionIncompatibilityException || (exports.PlatformTaskDefinitionIncompatibilityException = {}));
var PlatformUnknownException;
(function (PlatformUnknownException) {
    /**
     * @internal
     */
    PlatformUnknownException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlatformUnknownException = exports.PlatformUnknownException || (exports.PlatformUnknownException = {}));
var UnsupportedFeatureException;
(function (UnsupportedFeatureException) {
    /**
     * @internal
     */
    UnsupportedFeatureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedFeatureException = exports.UnsupportedFeatureException || (exports.UnsupportedFeatureException = {}));
var CreateTaskSetRequest;
(function (CreateTaskSetRequest) {
    /**
     * @internal
     */
    CreateTaskSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTaskSetRequest = exports.CreateTaskSetRequest || (exports.CreateTaskSetRequest = {}));
var CreateTaskSetResponse;
(function (CreateTaskSetResponse) {
    /**
     * @internal
     */
    CreateTaskSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTaskSetResponse = exports.CreateTaskSetResponse || (exports.CreateTaskSetResponse = {}));
var ServiceNotActiveException;
(function (ServiceNotActiveException) {
    /**
     * @internal
     */
    ServiceNotActiveException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceNotActiveException = exports.ServiceNotActiveException || (exports.ServiceNotActiveException = {}));
var ServiceNotFoundException;
(function (ServiceNotFoundException) {
    /**
     * @internal
     */
    ServiceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceNotFoundException = exports.ServiceNotFoundException || (exports.ServiceNotFoundException = {}));
var SettingName;
(function (SettingName) {
    SettingName["AWSVPC_TRUNKING"] = "awsvpcTrunking";
    SettingName["CONTAINER_INSIGHTS"] = "containerInsights";
    SettingName["CONTAINER_INSTANCE_LONG_ARN_FORMAT"] = "containerInstanceLongArnFormat";
    SettingName["SERVICE_LONG_ARN_FORMAT"] = "serviceLongArnFormat";
    SettingName["TASK_LONG_ARN_FORMAT"] = "taskLongArnFormat";
})(SettingName = exports.SettingName || (exports.SettingName = {}));
var DeleteAccountSettingRequest;
(function (DeleteAccountSettingRequest) {
    /**
     * @internal
     */
    DeleteAccountSettingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccountSettingRequest = exports.DeleteAccountSettingRequest || (exports.DeleteAccountSettingRequest = {}));
var Setting;
(function (Setting) {
    /**
     * @internal
     */
    Setting.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Setting = exports.Setting || (exports.Setting = {}));
var DeleteAccountSettingResponse;
(function (DeleteAccountSettingResponse) {
    /**
     * @internal
     */
    DeleteAccountSettingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccountSettingResponse = exports.DeleteAccountSettingResponse || (exports.DeleteAccountSettingResponse = {}));
var TargetType;
(function (TargetType) {
    TargetType["CONTAINER_INSTANCE"] = "container-instance";
})(TargetType = exports.TargetType || (exports.TargetType = {}));
var Attribute;
(function (Attribute) {
    /**
     * @internal
     */
    Attribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Attribute = exports.Attribute || (exports.Attribute = {}));
var DeleteAttributesRequest;
(function (DeleteAttributesRequest) {
    /**
     * @internal
     */
    DeleteAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAttributesRequest = exports.DeleteAttributesRequest || (exports.DeleteAttributesRequest = {}));
var DeleteAttributesResponse;
(function (DeleteAttributesResponse) {
    /**
     * @internal
     */
    DeleteAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAttributesResponse = exports.DeleteAttributesResponse || (exports.DeleteAttributesResponse = {}));
var TargetNotFoundException;
(function (TargetNotFoundException) {
    /**
     * @internal
     */
    TargetNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetNotFoundException = exports.TargetNotFoundException || (exports.TargetNotFoundException = {}));
var DeleteCapacityProviderRequest;
(function (DeleteCapacityProviderRequest) {
    /**
     * @internal
     */
    DeleteCapacityProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCapacityProviderRequest = exports.DeleteCapacityProviderRequest || (exports.DeleteCapacityProviderRequest = {}));
var DeleteCapacityProviderResponse;
(function (DeleteCapacityProviderResponse) {
    /**
     * @internal
     */
    DeleteCapacityProviderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCapacityProviderResponse = exports.DeleteCapacityProviderResponse || (exports.DeleteCapacityProviderResponse = {}));
var ClusterContainsContainerInstancesException;
(function (ClusterContainsContainerInstancesException) {
    /**
     * @internal
     */
    ClusterContainsContainerInstancesException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterContainsContainerInstancesException = exports.ClusterContainsContainerInstancesException || (exports.ClusterContainsContainerInstancesException = {}));
var ClusterContainsServicesException;
(function (ClusterContainsServicesException) {
    /**
     * @internal
     */
    ClusterContainsServicesException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterContainsServicesException = exports.ClusterContainsServicesException || (exports.ClusterContainsServicesException = {}));
var ClusterContainsTasksException;
(function (ClusterContainsTasksException) {
    /**
     * @internal
     */
    ClusterContainsTasksException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClusterContainsTasksException = exports.ClusterContainsTasksException || (exports.ClusterContainsTasksException = {}));
var DeleteClusterRequest;
(function (DeleteClusterRequest) {
    /**
     * @internal
     */
    DeleteClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClusterRequest = exports.DeleteClusterRequest || (exports.DeleteClusterRequest = {}));
var DeleteClusterResponse;
(function (DeleteClusterResponse) {
    /**
     * @internal
     */
    DeleteClusterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteClusterResponse = exports.DeleteClusterResponse || (exports.DeleteClusterResponse = {}));
var DeleteServiceRequest;
(function (DeleteServiceRequest) {
    /**
     * @internal
     */
    DeleteServiceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServiceRequest = exports.DeleteServiceRequest || (exports.DeleteServiceRequest = {}));
var DeleteServiceResponse;
(function (DeleteServiceResponse) {
    /**
     * @internal
     */
    DeleteServiceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServiceResponse = exports.DeleteServiceResponse || (exports.DeleteServiceResponse = {}));
var DeleteTaskSetRequest;
(function (DeleteTaskSetRequest) {
    /**
     * @internal
     */
    DeleteTaskSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTaskSetRequest = exports.DeleteTaskSetRequest || (exports.DeleteTaskSetRequest = {}));
var DeleteTaskSetResponse;
(function (DeleteTaskSetResponse) {
    /**
     * @internal
     */
    DeleteTaskSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTaskSetResponse = exports.DeleteTaskSetResponse || (exports.DeleteTaskSetResponse = {}));
var TaskSetNotFoundException;
(function (TaskSetNotFoundException) {
    /**
     * @internal
     */
    TaskSetNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskSetNotFoundException = exports.TaskSetNotFoundException || (exports.TaskSetNotFoundException = {}));
var DeregisterContainerInstanceRequest;
(function (DeregisterContainerInstanceRequest) {
    /**
     * @internal
     */
    DeregisterContainerInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterContainerInstanceRequest = exports.DeregisterContainerInstanceRequest || (exports.DeregisterContainerInstanceRequest = {}));
var Resource;
(function (Resource) {
    /**
     * @internal
     */
    Resource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Resource = exports.Resource || (exports.Resource = {}));
var VersionInfo;
(function (VersionInfo) {
    /**
     * @internal
     */
    VersionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VersionInfo = exports.VersionInfo || (exports.VersionInfo = {}));
var ContainerInstance;
(function (ContainerInstance) {
    /**
     * @internal
     */
    ContainerInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerInstance = exports.ContainerInstance || (exports.ContainerInstance = {}));
var DeregisterContainerInstanceResponse;
(function (DeregisterContainerInstanceResponse) {
    /**
     * @internal
     */
    DeregisterContainerInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterContainerInstanceResponse = exports.DeregisterContainerInstanceResponse || (exports.DeregisterContainerInstanceResponse = {}));
var DeregisterTaskDefinitionRequest;
(function (DeregisterTaskDefinitionRequest) {
    /**
     * @internal
     */
    DeregisterTaskDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterTaskDefinitionRequest = exports.DeregisterTaskDefinitionRequest || (exports.DeregisterTaskDefinitionRequest = {}));
var Compatibility;
(function (Compatibility) {
    Compatibility["EC2"] = "EC2";
    Compatibility["EXTERNAL"] = "EXTERNAL";
    Compatibility["FARGATE"] = "FARGATE";
})(Compatibility = exports.Compatibility || (exports.Compatibility = {}));
var ContainerCondition;
(function (ContainerCondition) {
    ContainerCondition["COMPLETE"] = "COMPLETE";
    ContainerCondition["HEALTHY"] = "HEALTHY";
    ContainerCondition["START"] = "START";
    ContainerCondition["SUCCESS"] = "SUCCESS";
})(ContainerCondition = exports.ContainerCondition || (exports.ContainerCondition = {}));
var ContainerDependency;
(function (ContainerDependency) {
    /**
     * @internal
     */
    ContainerDependency.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerDependency = exports.ContainerDependency || (exports.ContainerDependency = {}));
var EnvironmentFileType;
(function (EnvironmentFileType) {
    EnvironmentFileType["S3"] = "s3";
})(EnvironmentFileType = exports.EnvironmentFileType || (exports.EnvironmentFileType = {}));
var EnvironmentFile;
(function (EnvironmentFile) {
    /**
     * @internal
     */
    EnvironmentFile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentFile = exports.EnvironmentFile || (exports.EnvironmentFile = {}));
var HostEntry;
(function (HostEntry) {
    /**
     * @internal
     */
    HostEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostEntry = exports.HostEntry || (exports.HostEntry = {}));
var FirelensConfigurationType;
(function (FirelensConfigurationType) {
    FirelensConfigurationType["FLUENTBIT"] = "fluentbit";
    FirelensConfigurationType["FLUENTD"] = "fluentd";
})(FirelensConfigurationType = exports.FirelensConfigurationType || (exports.FirelensConfigurationType = {}));
var FirelensConfiguration;
(function (FirelensConfiguration) {
    /**
     * @internal
     */
    FirelensConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirelensConfiguration = exports.FirelensConfiguration || (exports.FirelensConfiguration = {}));
var HealthCheck;
(function (HealthCheck) {
    /**
     * @internal
     */
    HealthCheck.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HealthCheck = exports.HealthCheck || (exports.HealthCheck = {}));
var KernelCapabilities;
(function (KernelCapabilities) {
    /**
     * @internal
     */
    KernelCapabilities.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KernelCapabilities = exports.KernelCapabilities || (exports.KernelCapabilities = {}));
var DeviceCgroupPermission;
(function (DeviceCgroupPermission) {
    DeviceCgroupPermission["MKNOD"] = "mknod";
    DeviceCgroupPermission["READ"] = "read";
    DeviceCgroupPermission["WRITE"] = "write";
})(DeviceCgroupPermission = exports.DeviceCgroupPermission || (exports.DeviceCgroupPermission = {}));
var Device;
(function (Device) {
    /**
     * @internal
     */
    Device.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Device = exports.Device || (exports.Device = {}));
var Tmpfs;
(function (Tmpfs) {
    /**
     * @internal
     */
    Tmpfs.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tmpfs = exports.Tmpfs || (exports.Tmpfs = {}));
var LinuxParameters;
(function (LinuxParameters) {
    /**
     * @internal
     */
    LinuxParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LinuxParameters = exports.LinuxParameters || (exports.LinuxParameters = {}));
var LogDriver;
(function (LogDriver) {
    LogDriver["AWSFIRELENS"] = "awsfirelens";
    LogDriver["AWSLOGS"] = "awslogs";
    LogDriver["FLUENTD"] = "fluentd";
    LogDriver["GELF"] = "gelf";
    LogDriver["JOURNALD"] = "journald";
    LogDriver["JSON_FILE"] = "json-file";
    LogDriver["SPLUNK"] = "splunk";
    LogDriver["SYSLOG"] = "syslog";
})(LogDriver = exports.LogDriver || (exports.LogDriver = {}));
var Secret;
(function (Secret) {
    /**
     * @internal
     */
    Secret.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Secret = exports.Secret || (exports.Secret = {}));
var LogConfiguration;
(function (LogConfiguration) {
    /**
     * @internal
     */
    LogConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LogConfiguration = exports.LogConfiguration || (exports.LogConfiguration = {}));
var MountPoint;
(function (MountPoint) {
    /**
     * @internal
     */
    MountPoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MountPoint = exports.MountPoint || (exports.MountPoint = {}));
var TransportProtocol;
(function (TransportProtocol) {
    TransportProtocol["TCP"] = "tcp";
    TransportProtocol["UDP"] = "udp";
})(TransportProtocol = exports.TransportProtocol || (exports.TransportProtocol = {}));
var PortMapping;
(function (PortMapping) {
    /**
     * @internal
     */
    PortMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortMapping = exports.PortMapping || (exports.PortMapping = {}));
var RepositoryCredentials;
(function (RepositoryCredentials) {
    /**
     * @internal
     */
    RepositoryCredentials.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryCredentials = exports.RepositoryCredentials || (exports.RepositoryCredentials = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["GPU"] = "GPU";
    ResourceType["INFERENCE_ACCELERATOR"] = "InferenceAccelerator";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ResourceRequirement;
(function (ResourceRequirement) {
    /**
     * @internal
     */
    ResourceRequirement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceRequirement = exports.ResourceRequirement || (exports.ResourceRequirement = {}));
var SystemControl;
(function (SystemControl) {
    /**
     * @internal
     */
    SystemControl.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SystemControl = exports.SystemControl || (exports.SystemControl = {}));
var UlimitName;
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
})(UlimitName = exports.UlimitName || (exports.UlimitName = {}));
var Ulimit;
(function (Ulimit) {
    /**
     * @internal
     */
    Ulimit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Ulimit = exports.Ulimit || (exports.Ulimit = {}));
var VolumeFrom;
(function (VolumeFrom) {
    /**
     * @internal
     */
    VolumeFrom.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeFrom = exports.VolumeFrom || (exports.VolumeFrom = {}));
var ContainerDefinition;
(function (ContainerDefinition) {
    /**
     * @internal
     */
    ContainerDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerDefinition = exports.ContainerDefinition || (exports.ContainerDefinition = {}));
var EphemeralStorage;
(function (EphemeralStorage) {
    /**
     * @internal
     */
    EphemeralStorage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EphemeralStorage = exports.EphemeralStorage || (exports.EphemeralStorage = {}));
var InferenceAccelerator;
(function (InferenceAccelerator) {
    /**
     * @internal
     */
    InferenceAccelerator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferenceAccelerator = exports.InferenceAccelerator || (exports.InferenceAccelerator = {}));
var IpcMode;
(function (IpcMode) {
    IpcMode["HOST"] = "host";
    IpcMode["NONE"] = "none";
    IpcMode["TASK"] = "task";
})(IpcMode = exports.IpcMode || (exports.IpcMode = {}));
var NetworkMode;
(function (NetworkMode) {
    NetworkMode["AWSVPC"] = "awsvpc";
    NetworkMode["BRIDGE"] = "bridge";
    NetworkMode["HOST"] = "host";
    NetworkMode["NONE"] = "none";
})(NetworkMode = exports.NetworkMode || (exports.NetworkMode = {}));
var PidMode;
(function (PidMode) {
    PidMode["HOST"] = "host";
    PidMode["TASK"] = "task";
})(PidMode = exports.PidMode || (exports.PidMode = {}));
var TaskDefinitionPlacementConstraintType;
(function (TaskDefinitionPlacementConstraintType) {
    TaskDefinitionPlacementConstraintType["MEMBER_OF"] = "memberOf";
})(TaskDefinitionPlacementConstraintType = exports.TaskDefinitionPlacementConstraintType || (exports.TaskDefinitionPlacementConstraintType = {}));
var TaskDefinitionPlacementConstraint;
(function (TaskDefinitionPlacementConstraint) {
    /**
     * @internal
     */
    TaskDefinitionPlacementConstraint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskDefinitionPlacementConstraint = exports.TaskDefinitionPlacementConstraint || (exports.TaskDefinitionPlacementConstraint = {}));
var ProxyConfigurationType;
(function (ProxyConfigurationType) {
    ProxyConfigurationType["APPMESH"] = "APPMESH";
})(ProxyConfigurationType = exports.ProxyConfigurationType || (exports.ProxyConfigurationType = {}));
var ProxyConfiguration;
(function (ProxyConfiguration) {
    /**
     * @internal
     */
    ProxyConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProxyConfiguration = exports.ProxyConfiguration || (exports.ProxyConfiguration = {}));
var TaskDefinitionStatus;
(function (TaskDefinitionStatus) {
    TaskDefinitionStatus["ACTIVE"] = "ACTIVE";
    TaskDefinitionStatus["INACTIVE"] = "INACTIVE";
})(TaskDefinitionStatus = exports.TaskDefinitionStatus || (exports.TaskDefinitionStatus = {}));
var Scope;
(function (Scope) {
    Scope["SHARED"] = "shared";
    Scope["TASK"] = "task";
})(Scope = exports.Scope || (exports.Scope = {}));
var DockerVolumeConfiguration;
(function (DockerVolumeConfiguration) {
    /**
     * @internal
     */
    DockerVolumeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DockerVolumeConfiguration = exports.DockerVolumeConfiguration || (exports.DockerVolumeConfiguration = {}));
var EFSAuthorizationConfigIAM;
(function (EFSAuthorizationConfigIAM) {
    EFSAuthorizationConfigIAM["DISABLED"] = "DISABLED";
    EFSAuthorizationConfigIAM["ENABLED"] = "ENABLED";
})(EFSAuthorizationConfigIAM = exports.EFSAuthorizationConfigIAM || (exports.EFSAuthorizationConfigIAM = {}));
var EFSAuthorizationConfig;
(function (EFSAuthorizationConfig) {
    /**
     * @internal
     */
    EFSAuthorizationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EFSAuthorizationConfig = exports.EFSAuthorizationConfig || (exports.EFSAuthorizationConfig = {}));
var EFSTransitEncryption;
(function (EFSTransitEncryption) {
    EFSTransitEncryption["DISABLED"] = "DISABLED";
    EFSTransitEncryption["ENABLED"] = "ENABLED";
})(EFSTransitEncryption = exports.EFSTransitEncryption || (exports.EFSTransitEncryption = {}));
var EFSVolumeConfiguration;
(function (EFSVolumeConfiguration) {
    /**
     * @internal
     */
    EFSVolumeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EFSVolumeConfiguration = exports.EFSVolumeConfiguration || (exports.EFSVolumeConfiguration = {}));
var FSxWindowsFileServerAuthorizationConfig;
(function (FSxWindowsFileServerAuthorizationConfig) {
    /**
     * @internal
     */
    FSxWindowsFileServerAuthorizationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FSxWindowsFileServerAuthorizationConfig = exports.FSxWindowsFileServerAuthorizationConfig || (exports.FSxWindowsFileServerAuthorizationConfig = {}));
var FSxWindowsFileServerVolumeConfiguration;
(function (FSxWindowsFileServerVolumeConfiguration) {
    /**
     * @internal
     */
    FSxWindowsFileServerVolumeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FSxWindowsFileServerVolumeConfiguration = exports.FSxWindowsFileServerVolumeConfiguration || (exports.FSxWindowsFileServerVolumeConfiguration = {}));
var HostVolumeProperties;
(function (HostVolumeProperties) {
    /**
     * @internal
     */
    HostVolumeProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HostVolumeProperties = exports.HostVolumeProperties || (exports.HostVolumeProperties = {}));
var Volume;
(function (Volume) {
    /**
     * @internal
     */
    Volume.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Volume = exports.Volume || (exports.Volume = {}));
var TaskDefinition;
(function (TaskDefinition) {
    /**
     * @internal
     */
    TaskDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskDefinition = exports.TaskDefinition || (exports.TaskDefinition = {}));
var DeregisterTaskDefinitionResponse;
(function (DeregisterTaskDefinitionResponse) {
    /**
     * @internal
     */
    DeregisterTaskDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterTaskDefinitionResponse = exports.DeregisterTaskDefinitionResponse || (exports.DeregisterTaskDefinitionResponse = {}));
var CapacityProviderField;
(function (CapacityProviderField) {
    CapacityProviderField["TAGS"] = "TAGS";
})(CapacityProviderField = exports.CapacityProviderField || (exports.CapacityProviderField = {}));
var DescribeCapacityProvidersRequest;
(function (DescribeCapacityProvidersRequest) {
    /**
     * @internal
     */
    DescribeCapacityProvidersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCapacityProvidersRequest = exports.DescribeCapacityProvidersRequest || (exports.DescribeCapacityProvidersRequest = {}));
var Failure;
(function (Failure) {
    /**
     * @internal
     */
    Failure.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Failure = exports.Failure || (exports.Failure = {}));
var DescribeCapacityProvidersResponse;
(function (DescribeCapacityProvidersResponse) {
    /**
     * @internal
     */
    DescribeCapacityProvidersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCapacityProvidersResponse = exports.DescribeCapacityProvidersResponse || (exports.DescribeCapacityProvidersResponse = {}));
var ClusterField;
(function (ClusterField) {
    ClusterField["ATTACHMENTS"] = "ATTACHMENTS";
    ClusterField["CONFIGURATIONS"] = "CONFIGURATIONS";
    ClusterField["SETTINGS"] = "SETTINGS";
    ClusterField["STATISTICS"] = "STATISTICS";
    ClusterField["TAGS"] = "TAGS";
})(ClusterField = exports.ClusterField || (exports.ClusterField = {}));
var DescribeClustersRequest;
(function (DescribeClustersRequest) {
    /**
     * @internal
     */
    DescribeClustersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClustersRequest = exports.DescribeClustersRequest || (exports.DescribeClustersRequest = {}));
var DescribeClustersResponse;
(function (DescribeClustersResponse) {
    /**
     * @internal
     */
    DescribeClustersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClustersResponse = exports.DescribeClustersResponse || (exports.DescribeClustersResponse = {}));
var ContainerInstanceField;
(function (ContainerInstanceField) {
    ContainerInstanceField["TAGS"] = "TAGS";
})(ContainerInstanceField = exports.ContainerInstanceField || (exports.ContainerInstanceField = {}));
var DescribeContainerInstancesRequest;
(function (DescribeContainerInstancesRequest) {
    /**
     * @internal
     */
    DescribeContainerInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeContainerInstancesRequest = exports.DescribeContainerInstancesRequest || (exports.DescribeContainerInstancesRequest = {}));
var DescribeContainerInstancesResponse;
(function (DescribeContainerInstancesResponse) {
    /**
     * @internal
     */
    DescribeContainerInstancesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeContainerInstancesResponse = exports.DescribeContainerInstancesResponse || (exports.DescribeContainerInstancesResponse = {}));
var ServiceField;
(function (ServiceField) {
    ServiceField["TAGS"] = "TAGS";
})(ServiceField = exports.ServiceField || (exports.ServiceField = {}));
var DescribeServicesRequest;
(function (DescribeServicesRequest) {
    /**
     * @internal
     */
    DescribeServicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServicesRequest = exports.DescribeServicesRequest || (exports.DescribeServicesRequest = {}));
var DescribeServicesResponse;
(function (DescribeServicesResponse) {
    /**
     * @internal
     */
    DescribeServicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServicesResponse = exports.DescribeServicesResponse || (exports.DescribeServicesResponse = {}));
var TaskDefinitionField;
(function (TaskDefinitionField) {
    TaskDefinitionField["TAGS"] = "TAGS";
})(TaskDefinitionField = exports.TaskDefinitionField || (exports.TaskDefinitionField = {}));
var DescribeTaskDefinitionRequest;
(function (DescribeTaskDefinitionRequest) {
    /**
     * @internal
     */
    DescribeTaskDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTaskDefinitionRequest = exports.DescribeTaskDefinitionRequest || (exports.DescribeTaskDefinitionRequest = {}));
var DescribeTaskDefinitionResponse;
(function (DescribeTaskDefinitionResponse) {
    /**
     * @internal
     */
    DescribeTaskDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTaskDefinitionResponse = exports.DescribeTaskDefinitionResponse || (exports.DescribeTaskDefinitionResponse = {}));
var TaskField;
(function (TaskField) {
    TaskField["TAGS"] = "TAGS";
})(TaskField = exports.TaskField || (exports.TaskField = {}));
var DescribeTasksRequest;
(function (DescribeTasksRequest) {
    /**
     * @internal
     */
    DescribeTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTasksRequest = exports.DescribeTasksRequest || (exports.DescribeTasksRequest = {}));
var Connectivity;
(function (Connectivity) {
    Connectivity["CONNECTED"] = "CONNECTED";
    Connectivity["DISCONNECTED"] = "DISCONNECTED";
})(Connectivity = exports.Connectivity || (exports.Connectivity = {}));
var HealthStatus;
(function (HealthStatus) {
    HealthStatus["HEALTHY"] = "HEALTHY";
    HealthStatus["UNHEALTHY"] = "UNHEALTHY";
    HealthStatus["UNKNOWN"] = "UNKNOWN";
})(HealthStatus = exports.HealthStatus || (exports.HealthStatus = {}));
var ManagedAgentName;
(function (ManagedAgentName) {
    ManagedAgentName["ExecuteCommandAgent"] = "ExecuteCommandAgent";
})(ManagedAgentName = exports.ManagedAgentName || (exports.ManagedAgentName = {}));
var ManagedAgent;
(function (ManagedAgent) {
    /**
     * @internal
     */
    ManagedAgent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManagedAgent = exports.ManagedAgent || (exports.ManagedAgent = {}));
var NetworkBinding;
(function (NetworkBinding) {
    /**
     * @internal
     */
    NetworkBinding.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkBinding = exports.NetworkBinding || (exports.NetworkBinding = {}));
var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterface = exports.NetworkInterface || (exports.NetworkInterface = {}));
var Container;
(function (Container) {
    /**
     * @internal
     */
    Container.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Container = exports.Container || (exports.Container = {}));
var ContainerOverride;
(function (ContainerOverride) {
    /**
     * @internal
     */
    ContainerOverride.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerOverride = exports.ContainerOverride || (exports.ContainerOverride = {}));
var InferenceAcceleratorOverride;
(function (InferenceAcceleratorOverride) {
    /**
     * @internal
     */
    InferenceAcceleratorOverride.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferenceAcceleratorOverride = exports.InferenceAcceleratorOverride || (exports.InferenceAcceleratorOverride = {}));
var TaskOverride;
(function (TaskOverride) {
    /**
     * @internal
     */
    TaskOverride.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskOverride = exports.TaskOverride || (exports.TaskOverride = {}));
var TaskStopCode;
(function (TaskStopCode) {
    TaskStopCode["ESSENTIAL_CONTAINER_EXITED"] = "EssentialContainerExited";
    TaskStopCode["TASK_FAILED_TO_START"] = "TaskFailedToStart";
    TaskStopCode["USER_INITIATED"] = "UserInitiated";
})(TaskStopCode = exports.TaskStopCode || (exports.TaskStopCode = {}));
var Task;
(function (Task) {
    /**
     * @internal
     */
    Task.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Task = exports.Task || (exports.Task = {}));
var DescribeTasksResponse;
(function (DescribeTasksResponse) {
    /**
     * @internal
     */
    DescribeTasksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTasksResponse = exports.DescribeTasksResponse || (exports.DescribeTasksResponse = {}));
var TaskSetField;
(function (TaskSetField) {
    TaskSetField["TAGS"] = "TAGS";
})(TaskSetField = exports.TaskSetField || (exports.TaskSetField = {}));
var DescribeTaskSetsRequest;
(function (DescribeTaskSetsRequest) {
    /**
     * @internal
     */
    DescribeTaskSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTaskSetsRequest = exports.DescribeTaskSetsRequest || (exports.DescribeTaskSetsRequest = {}));
var DescribeTaskSetsResponse;
(function (DescribeTaskSetsResponse) {
    /**
     * @internal
     */
    DescribeTaskSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTaskSetsResponse = exports.DescribeTaskSetsResponse || (exports.DescribeTaskSetsResponse = {}));
var DiscoverPollEndpointRequest;
(function (DiscoverPollEndpointRequest) {
    /**
     * @internal
     */
    DiscoverPollEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiscoverPollEndpointRequest = exports.DiscoverPollEndpointRequest || (exports.DiscoverPollEndpointRequest = {}));
var DiscoverPollEndpointResponse;
(function (DiscoverPollEndpointResponse) {
    /**
     * @internal
     */
    DiscoverPollEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiscoverPollEndpointResponse = exports.DiscoverPollEndpointResponse || (exports.DiscoverPollEndpointResponse = {}));
var ExecuteCommandRequest;
(function (ExecuteCommandRequest) {
    /**
     * @internal
     */
    ExecuteCommandRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecuteCommandRequest = exports.ExecuteCommandRequest || (exports.ExecuteCommandRequest = {}));
var Session;
(function (Session) {
    /**
     * @internal
     */
    Session.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.tokenValue && { tokenValue: smithy_client_1.SENSITIVE_STRING }),
    });
})(Session = exports.Session || (exports.Session = {}));
var ExecuteCommandResponse;
(function (ExecuteCommandResponse) {
    /**
     * @internal
     */
    ExecuteCommandResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.session && { session: Session.filterSensitiveLog(obj.session) }),
    });
})(ExecuteCommandResponse = exports.ExecuteCommandResponse || (exports.ExecuteCommandResponse = {}));
var TargetNotConnectedException;
(function (TargetNotConnectedException) {
    /**
     * @internal
     */
    TargetNotConnectedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetNotConnectedException = exports.TargetNotConnectedException || (exports.TargetNotConnectedException = {}));
var ListAccountSettingsRequest;
(function (ListAccountSettingsRequest) {
    /**
     * @internal
     */
    ListAccountSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountSettingsRequest = exports.ListAccountSettingsRequest || (exports.ListAccountSettingsRequest = {}));
var ListAccountSettingsResponse;
(function (ListAccountSettingsResponse) {
    /**
     * @internal
     */
    ListAccountSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccountSettingsResponse = exports.ListAccountSettingsResponse || (exports.ListAccountSettingsResponse = {}));
var ListAttributesRequest;
(function (ListAttributesRequest) {
    /**
     * @internal
     */
    ListAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAttributesRequest = exports.ListAttributesRequest || (exports.ListAttributesRequest = {}));
var ListAttributesResponse;
(function (ListAttributesResponse) {
    /**
     * @internal
     */
    ListAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAttributesResponse = exports.ListAttributesResponse || (exports.ListAttributesResponse = {}));
var ListClustersRequest;
(function (ListClustersRequest) {
    /**
     * @internal
     */
    ListClustersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClustersRequest = exports.ListClustersRequest || (exports.ListClustersRequest = {}));
var ListClustersResponse;
(function (ListClustersResponse) {
    /**
     * @internal
     */
    ListClustersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClustersResponse = exports.ListClustersResponse || (exports.ListClustersResponse = {}));
var ContainerInstanceStatus;
(function (ContainerInstanceStatus) {
    ContainerInstanceStatus["ACTIVE"] = "ACTIVE";
    ContainerInstanceStatus["DEREGISTERING"] = "DEREGISTERING";
    ContainerInstanceStatus["DRAINING"] = "DRAINING";
    ContainerInstanceStatus["REGISTERING"] = "REGISTERING";
    ContainerInstanceStatus["REGISTRATION_FAILED"] = "REGISTRATION_FAILED";
})(ContainerInstanceStatus = exports.ContainerInstanceStatus || (exports.ContainerInstanceStatus = {}));
var ListContainerInstancesRequest;
(function (ListContainerInstancesRequest) {
    /**
     * @internal
     */
    ListContainerInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContainerInstancesRequest = exports.ListContainerInstancesRequest || (exports.ListContainerInstancesRequest = {}));
var ListContainerInstancesResponse;
(function (ListContainerInstancesResponse) {
    /**
     * @internal
     */
    ListContainerInstancesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContainerInstancesResponse = exports.ListContainerInstancesResponse || (exports.ListContainerInstancesResponse = {}));
var ListServicesRequest;
(function (ListServicesRequest) {
    /**
     * @internal
     */
    ListServicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServicesRequest = exports.ListServicesRequest || (exports.ListServicesRequest = {}));
var ListServicesResponse;
(function (ListServicesResponse) {
    /**
     * @internal
     */
    ListServicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServicesResponse = exports.ListServicesResponse || (exports.ListServicesResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var TaskDefinitionFamilyStatus;
(function (TaskDefinitionFamilyStatus) {
    TaskDefinitionFamilyStatus["ACTIVE"] = "ACTIVE";
    TaskDefinitionFamilyStatus["ALL"] = "ALL";
    TaskDefinitionFamilyStatus["INACTIVE"] = "INACTIVE";
})(TaskDefinitionFamilyStatus = exports.TaskDefinitionFamilyStatus || (exports.TaskDefinitionFamilyStatus = {}));
var ListTaskDefinitionFamiliesRequest;
(function (ListTaskDefinitionFamiliesRequest) {
    /**
     * @internal
     */
    ListTaskDefinitionFamiliesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTaskDefinitionFamiliesRequest = exports.ListTaskDefinitionFamiliesRequest || (exports.ListTaskDefinitionFamiliesRequest = {}));
var ListTaskDefinitionFamiliesResponse;
(function (ListTaskDefinitionFamiliesResponse) {
    /**
     * @internal
     */
    ListTaskDefinitionFamiliesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTaskDefinitionFamiliesResponse = exports.ListTaskDefinitionFamiliesResponse || (exports.ListTaskDefinitionFamiliesResponse = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "ASC";
    SortOrder["DESC"] = "DESC";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var ListTaskDefinitionsRequest;
(function (ListTaskDefinitionsRequest) {
    /**
     * @internal
     */
    ListTaskDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTaskDefinitionsRequest = exports.ListTaskDefinitionsRequest || (exports.ListTaskDefinitionsRequest = {}));
var ListTaskDefinitionsResponse;
(function (ListTaskDefinitionsResponse) {
    /**
     * @internal
     */
    ListTaskDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTaskDefinitionsResponse = exports.ListTaskDefinitionsResponse || (exports.ListTaskDefinitionsResponse = {}));
var DesiredStatus;
(function (DesiredStatus) {
    DesiredStatus["PENDING"] = "PENDING";
    DesiredStatus["RUNNING"] = "RUNNING";
    DesiredStatus["STOPPED"] = "STOPPED";
})(DesiredStatus = exports.DesiredStatus || (exports.DesiredStatus = {}));
var ListTasksRequest;
(function (ListTasksRequest) {
    /**
     * @internal
     */
    ListTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTasksRequest = exports.ListTasksRequest || (exports.ListTasksRequest = {}));
var ListTasksResponse;
(function (ListTasksResponse) {
    /**
     * @internal
     */
    ListTasksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTasksResponse = exports.ListTasksResponse || (exports.ListTasksResponse = {}));
var PutAccountSettingRequest;
(function (PutAccountSettingRequest) {
    /**
     * @internal
     */
    PutAccountSettingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccountSettingRequest = exports.PutAccountSettingRequest || (exports.PutAccountSettingRequest = {}));
var PutAccountSettingResponse;
(function (PutAccountSettingResponse) {
    /**
     * @internal
     */
    PutAccountSettingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccountSettingResponse = exports.PutAccountSettingResponse || (exports.PutAccountSettingResponse = {}));
var PutAccountSettingDefaultRequest;
(function (PutAccountSettingDefaultRequest) {
    /**
     * @internal
     */
    PutAccountSettingDefaultRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccountSettingDefaultRequest = exports.PutAccountSettingDefaultRequest || (exports.PutAccountSettingDefaultRequest = {}));
var PutAccountSettingDefaultResponse;
(function (PutAccountSettingDefaultResponse) {
    /**
     * @internal
     */
    PutAccountSettingDefaultResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccountSettingDefaultResponse = exports.PutAccountSettingDefaultResponse || (exports.PutAccountSettingDefaultResponse = {}));
var AttributeLimitExceededException;
(function (AttributeLimitExceededException) {
    /**
     * @internal
     */
    AttributeLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttributeLimitExceededException = exports.AttributeLimitExceededException || (exports.AttributeLimitExceededException = {}));
var PutAttributesRequest;
(function (PutAttributesRequest) {
    /**
     * @internal
     */
    PutAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAttributesRequest = exports.PutAttributesRequest || (exports.PutAttributesRequest = {}));
var PutAttributesResponse;
(function (PutAttributesResponse) {
    /**
     * @internal
     */
    PutAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAttributesResponse = exports.PutAttributesResponse || (exports.PutAttributesResponse = {}));
var PutClusterCapacityProvidersRequest;
(function (PutClusterCapacityProvidersRequest) {
    /**
     * @internal
     */
    PutClusterCapacityProvidersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutClusterCapacityProvidersRequest = exports.PutClusterCapacityProvidersRequest || (exports.PutClusterCapacityProvidersRequest = {}));
var PutClusterCapacityProvidersResponse;
(function (PutClusterCapacityProvidersResponse) {
    /**
     * @internal
     */
    PutClusterCapacityProvidersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutClusterCapacityProvidersResponse = exports.PutClusterCapacityProvidersResponse || (exports.PutClusterCapacityProvidersResponse = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var PlatformDeviceType;
(function (PlatformDeviceType) {
    PlatformDeviceType["GPU"] = "GPU";
})(PlatformDeviceType = exports.PlatformDeviceType || (exports.PlatformDeviceType = {}));
var PlatformDevice;
(function (PlatformDevice) {
    /**
     * @internal
     */
    PlatformDevice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlatformDevice = exports.PlatformDevice || (exports.PlatformDevice = {}));
var RegisterContainerInstanceRequest;
(function (RegisterContainerInstanceRequest) {
    /**
     * @internal
     */
    RegisterContainerInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterContainerInstanceRequest = exports.RegisterContainerInstanceRequest || (exports.RegisterContainerInstanceRequest = {}));
var RegisterContainerInstanceResponse;
(function (RegisterContainerInstanceResponse) {
    /**
     * @internal
     */
    RegisterContainerInstanceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterContainerInstanceResponse = exports.RegisterContainerInstanceResponse || (exports.RegisterContainerInstanceResponse = {}));
var RegisterTaskDefinitionRequest;
(function (RegisterTaskDefinitionRequest) {
    /**
     * @internal
     */
    RegisterTaskDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterTaskDefinitionRequest = exports.RegisterTaskDefinitionRequest || (exports.RegisterTaskDefinitionRequest = {}));
var RegisterTaskDefinitionResponse;
(function (RegisterTaskDefinitionResponse) {
    /**
     * @internal
     */
    RegisterTaskDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterTaskDefinitionResponse = exports.RegisterTaskDefinitionResponse || (exports.RegisterTaskDefinitionResponse = {}));
var BlockedException;
(function (BlockedException) {
    /**
     * @internal
     */
    BlockedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlockedException = exports.BlockedException || (exports.BlockedException = {}));
var RunTaskRequest;
(function (RunTaskRequest) {
    /**
     * @internal
     */
    RunTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RunTaskRequest = exports.RunTaskRequest || (exports.RunTaskRequest = {}));
var RunTaskResponse;
(function (RunTaskResponse) {
    /**
     * @internal
     */
    RunTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RunTaskResponse = exports.RunTaskResponse || (exports.RunTaskResponse = {}));
var StartTaskRequest;
(function (StartTaskRequest) {
    /**
     * @internal
     */
    StartTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTaskRequest = exports.StartTaskRequest || (exports.StartTaskRequest = {}));
var StartTaskResponse;
(function (StartTaskResponse) {
    /**
     * @internal
     */
    StartTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTaskResponse = exports.StartTaskResponse || (exports.StartTaskResponse = {}));
var StopTaskRequest;
(function (StopTaskRequest) {
    /**
     * @internal
     */
    StopTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopTaskRequest = exports.StopTaskRequest || (exports.StopTaskRequest = {}));
var StopTaskResponse;
(function (StopTaskResponse) {
    /**
     * @internal
     */
    StopTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopTaskResponse = exports.StopTaskResponse || (exports.StopTaskResponse = {}));
var AttachmentStateChange;
(function (AttachmentStateChange) {
    /**
     * @internal
     */
    AttachmentStateChange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachmentStateChange = exports.AttachmentStateChange || (exports.AttachmentStateChange = {}));
var SubmitAttachmentStateChangesRequest;
(function (SubmitAttachmentStateChangesRequest) {
    /**
     * @internal
     */
    SubmitAttachmentStateChangesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubmitAttachmentStateChangesRequest = exports.SubmitAttachmentStateChangesRequest || (exports.SubmitAttachmentStateChangesRequest = {}));
var SubmitAttachmentStateChangesResponse;
(function (SubmitAttachmentStateChangesResponse) {
    /**
     * @internal
     */
    SubmitAttachmentStateChangesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubmitAttachmentStateChangesResponse = exports.SubmitAttachmentStateChangesResponse || (exports.SubmitAttachmentStateChangesResponse = {}));
var SubmitContainerStateChangeRequest;
(function (SubmitContainerStateChangeRequest) {
    /**
     * @internal
     */
    SubmitContainerStateChangeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubmitContainerStateChangeRequest = exports.SubmitContainerStateChangeRequest || (exports.SubmitContainerStateChangeRequest = {}));
var SubmitContainerStateChangeResponse;
(function (SubmitContainerStateChangeResponse) {
    /**
     * @internal
     */
    SubmitContainerStateChangeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubmitContainerStateChangeResponse = exports.SubmitContainerStateChangeResponse || (exports.SubmitContainerStateChangeResponse = {}));
var ContainerStateChange;
(function (ContainerStateChange) {
    /**
     * @internal
     */
    ContainerStateChange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerStateChange = exports.ContainerStateChange || (exports.ContainerStateChange = {}));
var ManagedAgentStateChange;
(function (ManagedAgentStateChange) {
    /**
     * @internal
     */
    ManagedAgentStateChange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManagedAgentStateChange = exports.ManagedAgentStateChange || (exports.ManagedAgentStateChange = {}));
var SubmitTaskStateChangeRequest;
(function (SubmitTaskStateChangeRequest) {
    /**
     * @internal
     */
    SubmitTaskStateChangeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubmitTaskStateChangeRequest = exports.SubmitTaskStateChangeRequest || (exports.SubmitTaskStateChangeRequest = {}));
var SubmitTaskStateChangeResponse;
(function (SubmitTaskStateChangeResponse) {
    /**
     * @internal
     */
    SubmitTaskStateChangeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubmitTaskStateChangeResponse = exports.SubmitTaskStateChangeResponse || (exports.SubmitTaskStateChangeResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var AutoScalingGroupProviderUpdate;
(function (AutoScalingGroupProviderUpdate) {
    /**
     * @internal
     */
    AutoScalingGroupProviderUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingGroupProviderUpdate = exports.AutoScalingGroupProviderUpdate || (exports.AutoScalingGroupProviderUpdate = {}));
var UpdateCapacityProviderRequest;
(function (UpdateCapacityProviderRequest) {
    /**
     * @internal
     */
    UpdateCapacityProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCapacityProviderRequest = exports.UpdateCapacityProviderRequest || (exports.UpdateCapacityProviderRequest = {}));
var UpdateCapacityProviderResponse;
(function (UpdateCapacityProviderResponse) {
    /**
     * @internal
     */
    UpdateCapacityProviderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCapacityProviderResponse = exports.UpdateCapacityProviderResponse || (exports.UpdateCapacityProviderResponse = {}));
var UpdateClusterRequest;
(function (UpdateClusterRequest) {
    /**
     * @internal
     */
    UpdateClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterRequest = exports.UpdateClusterRequest || (exports.UpdateClusterRequest = {}));
var UpdateClusterResponse;
(function (UpdateClusterResponse) {
    /**
     * @internal
     */
    UpdateClusterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterResponse = exports.UpdateClusterResponse || (exports.UpdateClusterResponse = {}));
var UpdateClusterSettingsRequest;
(function (UpdateClusterSettingsRequest) {
    /**
     * @internal
     */
    UpdateClusterSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterSettingsRequest = exports.UpdateClusterSettingsRequest || (exports.UpdateClusterSettingsRequest = {}));
var UpdateClusterSettingsResponse;
(function (UpdateClusterSettingsResponse) {
    /**
     * @internal
     */
    UpdateClusterSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClusterSettingsResponse = exports.UpdateClusterSettingsResponse || (exports.UpdateClusterSettingsResponse = {}));
var MissingVersionException;
(function (MissingVersionException) {
    /**
     * @internal
     */
    MissingVersionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MissingVersionException = exports.MissingVersionException || (exports.MissingVersionException = {}));
var NoUpdateAvailableException;
(function (NoUpdateAvailableException) {
    /**
     * @internal
     */
    NoUpdateAvailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoUpdateAvailableException = exports.NoUpdateAvailableException || (exports.NoUpdateAvailableException = {}));
var UpdateContainerAgentRequest;
(function (UpdateContainerAgentRequest) {
    /**
     * @internal
     */
    UpdateContainerAgentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContainerAgentRequest = exports.UpdateContainerAgentRequest || (exports.UpdateContainerAgentRequest = {}));
var UpdateContainerAgentResponse;
(function (UpdateContainerAgentResponse) {
    /**
     * @internal
     */
    UpdateContainerAgentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContainerAgentResponse = exports.UpdateContainerAgentResponse || (exports.UpdateContainerAgentResponse = {}));
var UpdateContainerInstancesStateRequest;
(function (UpdateContainerInstancesStateRequest) {
    /**
     * @internal
     */
    UpdateContainerInstancesStateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContainerInstancesStateRequest = exports.UpdateContainerInstancesStateRequest || (exports.UpdateContainerInstancesStateRequest = {}));
var UpdateContainerInstancesStateResponse;
(function (UpdateContainerInstancesStateResponse) {
    /**
     * @internal
     */
    UpdateContainerInstancesStateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContainerInstancesStateResponse = exports.UpdateContainerInstancesStateResponse || (exports.UpdateContainerInstancesStateResponse = {}));
var UpdateServiceRequest;
(function (UpdateServiceRequest) {
    /**
     * @internal
     */
    UpdateServiceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceRequest = exports.UpdateServiceRequest || (exports.UpdateServiceRequest = {}));
var UpdateServiceResponse;
(function (UpdateServiceResponse) {
    /**
     * @internal
     */
    UpdateServiceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceResponse = exports.UpdateServiceResponse || (exports.UpdateServiceResponse = {}));
var UpdateServicePrimaryTaskSetRequest;
(function (UpdateServicePrimaryTaskSetRequest) {
    /**
     * @internal
     */
    UpdateServicePrimaryTaskSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServicePrimaryTaskSetRequest = exports.UpdateServicePrimaryTaskSetRequest || (exports.UpdateServicePrimaryTaskSetRequest = {}));
var UpdateServicePrimaryTaskSetResponse;
(function (UpdateServicePrimaryTaskSetResponse) {
    /**
     * @internal
     */
    UpdateServicePrimaryTaskSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServicePrimaryTaskSetResponse = exports.UpdateServicePrimaryTaskSetResponse || (exports.UpdateServicePrimaryTaskSetResponse = {}));
var UpdateTaskSetRequest;
(function (UpdateTaskSetRequest) {
    /**
     * @internal
     */
    UpdateTaskSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTaskSetRequest = exports.UpdateTaskSetRequest || (exports.UpdateTaskSetRequest = {}));
var UpdateTaskSetResponse;
(function (UpdateTaskSetResponse) {
    /**
     * @internal
     */
    UpdateTaskSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTaskSetResponse = exports.UpdateTaskSetResponse || (exports.UpdateTaskSetResponse = {}));
//# sourceMappingURL=models_0.js.map