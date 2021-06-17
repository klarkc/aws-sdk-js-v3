"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeregisterVolumeRequest = exports.DeregisterRdsDbInstanceRequest = exports.DeregisterInstanceRequest = exports.DeregisterElasticIpRequest = exports.DeregisterEcsClusterRequest = exports.Deployment = exports.DeleteUserProfileRequest = exports.DeleteStackRequest = exports.DeleteLayerRequest = exports.DeleteInstanceRequest = exports.DeleteAppRequest = exports.CreateUserProfileResult = exports.CreateUserProfileRequest = exports.CreateStackResult = exports.CreateStackRequest = exports.CreateLayerResult = exports.CreateLayerRequest = exports.VolumeConfiguration = exports.LifecycleEventConfiguration = exports.ShutdownEventConfiguration = exports.Recipes = exports.CreateInstanceResult = exports.CreateInstanceRequest = exports.CreateDeploymentResult = exports.CreateDeploymentRequest = exports.DeploymentCommand = exports.CreateAppResult = exports.CreateAppRequest = exports.Command = exports.CloudWatchLogsConfiguration = exports.CloudWatchLogsLogStream = exports.CloneStackResult = exports.CloneStackRequest = exports.ChefConfiguration = exports.BlockDeviceMapping = exports.EbsBlockDevice = exports.AutoScalingThresholds = exports.AttachElasticLoadBalancerRequest = exports.AssociateElasticIpRequest = exports.AssignVolumeRequest = exports.ValidationException = exports.ResourceNotFoundException = exports.AssignInstanceRequest = exports.App = exports.SslConfiguration = exports.EnvironmentVariable = exports.DataSource = exports.Source = exports.AgentVersion = exports.StackConfigurationManager = void 0;
exports.DescribeStackSummaryRequest = exports.DescribeStacksResult = exports.Stack = exports.DescribeStacksRequest = exports.DescribeStackProvisioningParametersResult = exports.DescribeStackProvisioningParametersRequest = exports.DescribeServiceErrorsResult = exports.ServiceError = exports.DescribeServiceErrorsRequest = exports.DescribeRdsDbInstancesResult = exports.RdsDbInstance = exports.DescribeRdsDbInstancesRequest = exports.DescribeRaidArraysResult = exports.RaidArray = exports.DescribeRaidArraysRequest = exports.DescribePermissionsResult = exports.Permission = exports.DescribePermissionsRequest = exports.DescribeOperatingSystemsResponse = exports.OperatingSystem = exports.OperatingSystemConfigurationManager = exports.DescribeMyUserProfileResult = exports.SelfUserProfile = exports.DescribeLoadBasedAutoScalingResult = exports.LoadBasedAutoScalingConfiguration = exports.DescribeLoadBasedAutoScalingRequest = exports.DescribeLayersResult = exports.Layer = exports.DescribeLayersRequest = exports.DescribeInstancesResult = exports.Instance = exports.ReportedOs = exports.DescribeInstancesRequest = exports.DescribeElasticLoadBalancersResult = exports.ElasticLoadBalancer = exports.DescribeElasticLoadBalancersRequest = exports.DescribeElasticIpsResult = exports.ElasticIp = exports.DescribeElasticIpsRequest = exports.DescribeEcsClustersResult = exports.EcsCluster = exports.DescribeEcsClustersRequest = exports.DescribeDeploymentsResult = exports.DescribeDeploymentsRequest = exports.DescribeCommandsResult = exports.DescribeCommandsRequest = exports.DescribeAppsResult = exports.DescribeAppsRequest = exports.DescribeAgentVersionsResult = exports.DescribeAgentVersionsRequest = void 0;
exports.UpdateRdsDbInstanceRequest = exports.UpdateMyUserProfileRequest = exports.UpdateLayerRequest = exports.UpdateInstanceRequest = exports.UpdateElasticIpRequest = exports.UpdateAppRequest = exports.UntagResourceRequest = exports.UnassignVolumeRequest = exports.UnassignInstanceRequest = exports.TagResourceRequest = exports.StopStackRequest = exports.StopInstanceRequest = exports.StartStackRequest = exports.StartInstanceRequest = exports.SetTimeBasedAutoScalingRequest = exports.SetPermissionRequest = exports.SetLoadBasedAutoScalingRequest = exports.RegisterVolumeResult = exports.RegisterVolumeRequest = exports.RegisterRdsDbInstanceRequest = exports.RegisterInstanceResult = exports.RegisterInstanceRequest = exports.RegisterElasticIpResult = exports.RegisterElasticIpRequest = exports.RegisterEcsClusterResult = exports.RegisterEcsClusterRequest = exports.RebootInstanceRequest = exports.ListTagsResult = exports.ListTagsRequest = exports.InstanceIdentity = exports.GrantAccessResult = exports.TemporaryCredential = exports.GrantAccessRequest = exports.GetHostnameSuggestionResult = exports.GetHostnameSuggestionRequest = exports.DisassociateElasticIpRequest = exports.DetachElasticLoadBalancerRequest = exports.DescribeVolumesResult = exports.Volume = exports.DescribeVolumesRequest = exports.DescribeUserProfilesResult = exports.UserProfile = exports.DescribeUserProfilesRequest = exports.DescribeTimeBasedAutoScalingResult = exports.TimeBasedAutoScalingConfiguration = exports.WeeklyAutoScalingSchedule = exports.DescribeTimeBasedAutoScalingRequest = exports.DescribeStackSummaryResult = exports.StackSummary = exports.InstancesCount = void 0;
exports.UpdateVolumeRequest = exports.UpdateUserProfileRequest = exports.UpdateStackRequest = void 0;
var StackConfigurationManager;
(function (StackConfigurationManager) {
    /**
     * @internal
     */
    StackConfigurationManager.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StackConfigurationManager = exports.StackConfigurationManager || (exports.StackConfigurationManager = {}));
var AgentVersion;
(function (AgentVersion) {
    /**
     * @internal
     */
    AgentVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AgentVersion = exports.AgentVersion || (exports.AgentVersion = {}));
var Source;
(function (Source) {
    /**
     * @internal
     */
    Source.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Source = exports.Source || (exports.Source = {}));
var DataSource;
(function (DataSource) {
    /**
     * @internal
     */
    DataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSource = exports.DataSource || (exports.DataSource = {}));
var EnvironmentVariable;
(function (EnvironmentVariable) {
    /**
     * @internal
     */
    EnvironmentVariable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnvironmentVariable = exports.EnvironmentVariable || (exports.EnvironmentVariable = {}));
var SslConfiguration;
(function (SslConfiguration) {
    /**
     * @internal
     */
    SslConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SslConfiguration = exports.SslConfiguration || (exports.SslConfiguration = {}));
var App;
(function (App) {
    /**
     * @internal
     */
    App.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(App = exports.App || (exports.App = {}));
var AssignInstanceRequest;
(function (AssignInstanceRequest) {
    /**
     * @internal
     */
    AssignInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssignInstanceRequest = exports.AssignInstanceRequest || (exports.AssignInstanceRequest = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var AssignVolumeRequest;
(function (AssignVolumeRequest) {
    /**
     * @internal
     */
    AssignVolumeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssignVolumeRequest = exports.AssignVolumeRequest || (exports.AssignVolumeRequest = {}));
var AssociateElasticIpRequest;
(function (AssociateElasticIpRequest) {
    /**
     * @internal
     */
    AssociateElasticIpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateElasticIpRequest = exports.AssociateElasticIpRequest || (exports.AssociateElasticIpRequest = {}));
var AttachElasticLoadBalancerRequest;
(function (AttachElasticLoadBalancerRequest) {
    /**
     * @internal
     */
    AttachElasticLoadBalancerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachElasticLoadBalancerRequest = exports.AttachElasticLoadBalancerRequest || (exports.AttachElasticLoadBalancerRequest = {}));
var AutoScalingThresholds;
(function (AutoScalingThresholds) {
    /**
     * @internal
     */
    AutoScalingThresholds.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingThresholds = exports.AutoScalingThresholds || (exports.AutoScalingThresholds = {}));
var EbsBlockDevice;
(function (EbsBlockDevice) {
    /**
     * @internal
     */
    EbsBlockDevice.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EbsBlockDevice = exports.EbsBlockDevice || (exports.EbsBlockDevice = {}));
var BlockDeviceMapping;
(function (BlockDeviceMapping) {
    /**
     * @internal
     */
    BlockDeviceMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlockDeviceMapping = exports.BlockDeviceMapping || (exports.BlockDeviceMapping = {}));
var ChefConfiguration;
(function (ChefConfiguration) {
    /**
     * @internal
     */
    ChefConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChefConfiguration = exports.ChefConfiguration || (exports.ChefConfiguration = {}));
var CloneStackRequest;
(function (CloneStackRequest) {
    /**
     * @internal
     */
    CloneStackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloneStackRequest = exports.CloneStackRequest || (exports.CloneStackRequest = {}));
var CloneStackResult;
(function (CloneStackResult) {
    /**
     * @internal
     */
    CloneStackResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloneStackResult = exports.CloneStackResult || (exports.CloneStackResult = {}));
var CloudWatchLogsLogStream;
(function (CloudWatchLogsLogStream) {
    /**
     * @internal
     */
    CloudWatchLogsLogStream.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchLogsLogStream = exports.CloudWatchLogsLogStream || (exports.CloudWatchLogsLogStream = {}));
var CloudWatchLogsConfiguration;
(function (CloudWatchLogsConfiguration) {
    /**
     * @internal
     */
    CloudWatchLogsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchLogsConfiguration = exports.CloudWatchLogsConfiguration || (exports.CloudWatchLogsConfiguration = {}));
var Command;
(function (Command) {
    /**
     * @internal
     */
    Command.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Command = exports.Command || (exports.Command = {}));
var CreateAppRequest;
(function (CreateAppRequest) {
    /**
     * @internal
     */
    CreateAppRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAppRequest = exports.CreateAppRequest || (exports.CreateAppRequest = {}));
var CreateAppResult;
(function (CreateAppResult) {
    /**
     * @internal
     */
    CreateAppResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAppResult = exports.CreateAppResult || (exports.CreateAppResult = {}));
var DeploymentCommand;
(function (DeploymentCommand) {
    /**
     * @internal
     */
    DeploymentCommand.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentCommand = exports.DeploymentCommand || (exports.DeploymentCommand = {}));
var CreateDeploymentRequest;
(function (CreateDeploymentRequest) {
    /**
     * @internal
     */
    CreateDeploymentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeploymentRequest = exports.CreateDeploymentRequest || (exports.CreateDeploymentRequest = {}));
var CreateDeploymentResult;
(function (CreateDeploymentResult) {
    /**
     * @internal
     */
    CreateDeploymentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeploymentResult = exports.CreateDeploymentResult || (exports.CreateDeploymentResult = {}));
var CreateInstanceRequest;
(function (CreateInstanceRequest) {
    /**
     * @internal
     */
    CreateInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstanceRequest = exports.CreateInstanceRequest || (exports.CreateInstanceRequest = {}));
var CreateInstanceResult;
(function (CreateInstanceResult) {
    /**
     * @internal
     */
    CreateInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInstanceResult = exports.CreateInstanceResult || (exports.CreateInstanceResult = {}));
var Recipes;
(function (Recipes) {
    /**
     * @internal
     */
    Recipes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Recipes = exports.Recipes || (exports.Recipes = {}));
var ShutdownEventConfiguration;
(function (ShutdownEventConfiguration) {
    /**
     * @internal
     */
    ShutdownEventConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ShutdownEventConfiguration = exports.ShutdownEventConfiguration || (exports.ShutdownEventConfiguration = {}));
var LifecycleEventConfiguration;
(function (LifecycleEventConfiguration) {
    /**
     * @internal
     */
    LifecycleEventConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecycleEventConfiguration = exports.LifecycleEventConfiguration || (exports.LifecycleEventConfiguration = {}));
var VolumeConfiguration;
(function (VolumeConfiguration) {
    /**
     * @internal
     */
    VolumeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeConfiguration = exports.VolumeConfiguration || (exports.VolumeConfiguration = {}));
var CreateLayerRequest;
(function (CreateLayerRequest) {
    /**
     * @internal
     */
    CreateLayerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLayerRequest = exports.CreateLayerRequest || (exports.CreateLayerRequest = {}));
var CreateLayerResult;
(function (CreateLayerResult) {
    /**
     * @internal
     */
    CreateLayerResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLayerResult = exports.CreateLayerResult || (exports.CreateLayerResult = {}));
var CreateStackRequest;
(function (CreateStackRequest) {
    /**
     * @internal
     */
    CreateStackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStackRequest = exports.CreateStackRequest || (exports.CreateStackRequest = {}));
var CreateStackResult;
(function (CreateStackResult) {
    /**
     * @internal
     */
    CreateStackResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateStackResult = exports.CreateStackResult || (exports.CreateStackResult = {}));
var CreateUserProfileRequest;
(function (CreateUserProfileRequest) {
    /**
     * @internal
     */
    CreateUserProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserProfileRequest = exports.CreateUserProfileRequest || (exports.CreateUserProfileRequest = {}));
var CreateUserProfileResult;
(function (CreateUserProfileResult) {
    /**
     * @internal
     */
    CreateUserProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserProfileResult = exports.CreateUserProfileResult || (exports.CreateUserProfileResult = {}));
var DeleteAppRequest;
(function (DeleteAppRequest) {
    /**
     * @internal
     */
    DeleteAppRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAppRequest = exports.DeleteAppRequest || (exports.DeleteAppRequest = {}));
var DeleteInstanceRequest;
(function (DeleteInstanceRequest) {
    /**
     * @internal
     */
    DeleteInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInstanceRequest = exports.DeleteInstanceRequest || (exports.DeleteInstanceRequest = {}));
var DeleteLayerRequest;
(function (DeleteLayerRequest) {
    /**
     * @internal
     */
    DeleteLayerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLayerRequest = exports.DeleteLayerRequest || (exports.DeleteLayerRequest = {}));
var DeleteStackRequest;
(function (DeleteStackRequest) {
    /**
     * @internal
     */
    DeleteStackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStackRequest = exports.DeleteStackRequest || (exports.DeleteStackRequest = {}));
var DeleteUserProfileRequest;
(function (DeleteUserProfileRequest) {
    /**
     * @internal
     */
    DeleteUserProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserProfileRequest = exports.DeleteUserProfileRequest || (exports.DeleteUserProfileRequest = {}));
var Deployment;
(function (Deployment) {
    /**
     * @internal
     */
    Deployment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Deployment = exports.Deployment || (exports.Deployment = {}));
var DeregisterEcsClusterRequest;
(function (DeregisterEcsClusterRequest) {
    /**
     * @internal
     */
    DeregisterEcsClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterEcsClusterRequest = exports.DeregisterEcsClusterRequest || (exports.DeregisterEcsClusterRequest = {}));
var DeregisterElasticIpRequest;
(function (DeregisterElasticIpRequest) {
    /**
     * @internal
     */
    DeregisterElasticIpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterElasticIpRequest = exports.DeregisterElasticIpRequest || (exports.DeregisterElasticIpRequest = {}));
var DeregisterInstanceRequest;
(function (DeregisterInstanceRequest) {
    /**
     * @internal
     */
    DeregisterInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterInstanceRequest = exports.DeregisterInstanceRequest || (exports.DeregisterInstanceRequest = {}));
var DeregisterRdsDbInstanceRequest;
(function (DeregisterRdsDbInstanceRequest) {
    /**
     * @internal
     */
    DeregisterRdsDbInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterRdsDbInstanceRequest = exports.DeregisterRdsDbInstanceRequest || (exports.DeregisterRdsDbInstanceRequest = {}));
var DeregisterVolumeRequest;
(function (DeregisterVolumeRequest) {
    /**
     * @internal
     */
    DeregisterVolumeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterVolumeRequest = exports.DeregisterVolumeRequest || (exports.DeregisterVolumeRequest = {}));
var DescribeAgentVersionsRequest;
(function (DescribeAgentVersionsRequest) {
    /**
     * @internal
     */
    DescribeAgentVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAgentVersionsRequest = exports.DescribeAgentVersionsRequest || (exports.DescribeAgentVersionsRequest = {}));
var DescribeAgentVersionsResult;
(function (DescribeAgentVersionsResult) {
    /**
     * @internal
     */
    DescribeAgentVersionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAgentVersionsResult = exports.DescribeAgentVersionsResult || (exports.DescribeAgentVersionsResult = {}));
var DescribeAppsRequest;
(function (DescribeAppsRequest) {
    /**
     * @internal
     */
    DescribeAppsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAppsRequest = exports.DescribeAppsRequest || (exports.DescribeAppsRequest = {}));
var DescribeAppsResult;
(function (DescribeAppsResult) {
    /**
     * @internal
     */
    DescribeAppsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAppsResult = exports.DescribeAppsResult || (exports.DescribeAppsResult = {}));
var DescribeCommandsRequest;
(function (DescribeCommandsRequest) {
    /**
     * @internal
     */
    DescribeCommandsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCommandsRequest = exports.DescribeCommandsRequest || (exports.DescribeCommandsRequest = {}));
var DescribeCommandsResult;
(function (DescribeCommandsResult) {
    /**
     * @internal
     */
    DescribeCommandsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCommandsResult = exports.DescribeCommandsResult || (exports.DescribeCommandsResult = {}));
var DescribeDeploymentsRequest;
(function (DescribeDeploymentsRequest) {
    /**
     * @internal
     */
    DescribeDeploymentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeploymentsRequest = exports.DescribeDeploymentsRequest || (exports.DescribeDeploymentsRequest = {}));
var DescribeDeploymentsResult;
(function (DescribeDeploymentsResult) {
    /**
     * @internal
     */
    DescribeDeploymentsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeploymentsResult = exports.DescribeDeploymentsResult || (exports.DescribeDeploymentsResult = {}));
var DescribeEcsClustersRequest;
(function (DescribeEcsClustersRequest) {
    /**
     * @internal
     */
    DescribeEcsClustersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEcsClustersRequest = exports.DescribeEcsClustersRequest || (exports.DescribeEcsClustersRequest = {}));
var EcsCluster;
(function (EcsCluster) {
    /**
     * @internal
     */
    EcsCluster.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EcsCluster = exports.EcsCluster || (exports.EcsCluster = {}));
var DescribeEcsClustersResult;
(function (DescribeEcsClustersResult) {
    /**
     * @internal
     */
    DescribeEcsClustersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEcsClustersResult = exports.DescribeEcsClustersResult || (exports.DescribeEcsClustersResult = {}));
var DescribeElasticIpsRequest;
(function (DescribeElasticIpsRequest) {
    /**
     * @internal
     */
    DescribeElasticIpsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeElasticIpsRequest = exports.DescribeElasticIpsRequest || (exports.DescribeElasticIpsRequest = {}));
var ElasticIp;
(function (ElasticIp) {
    /**
     * @internal
     */
    ElasticIp.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticIp = exports.ElasticIp || (exports.ElasticIp = {}));
var DescribeElasticIpsResult;
(function (DescribeElasticIpsResult) {
    /**
     * @internal
     */
    DescribeElasticIpsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeElasticIpsResult = exports.DescribeElasticIpsResult || (exports.DescribeElasticIpsResult = {}));
var DescribeElasticLoadBalancersRequest;
(function (DescribeElasticLoadBalancersRequest) {
    /**
     * @internal
     */
    DescribeElasticLoadBalancersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeElasticLoadBalancersRequest = exports.DescribeElasticLoadBalancersRequest || (exports.DescribeElasticLoadBalancersRequest = {}));
var ElasticLoadBalancer;
(function (ElasticLoadBalancer) {
    /**
     * @internal
     */
    ElasticLoadBalancer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElasticLoadBalancer = exports.ElasticLoadBalancer || (exports.ElasticLoadBalancer = {}));
var DescribeElasticLoadBalancersResult;
(function (DescribeElasticLoadBalancersResult) {
    /**
     * @internal
     */
    DescribeElasticLoadBalancersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeElasticLoadBalancersResult = exports.DescribeElasticLoadBalancersResult || (exports.DescribeElasticLoadBalancersResult = {}));
var DescribeInstancesRequest;
(function (DescribeInstancesRequest) {
    /**
     * @internal
     */
    DescribeInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstancesRequest = exports.DescribeInstancesRequest || (exports.DescribeInstancesRequest = {}));
var ReportedOs;
(function (ReportedOs) {
    /**
     * @internal
     */
    ReportedOs.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportedOs = exports.ReportedOs || (exports.ReportedOs = {}));
var Instance;
(function (Instance) {
    /**
     * @internal
     */
    Instance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Instance = exports.Instance || (exports.Instance = {}));
var DescribeInstancesResult;
(function (DescribeInstancesResult) {
    /**
     * @internal
     */
    DescribeInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInstancesResult = exports.DescribeInstancesResult || (exports.DescribeInstancesResult = {}));
var DescribeLayersRequest;
(function (DescribeLayersRequest) {
    /**
     * @internal
     */
    DescribeLayersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLayersRequest = exports.DescribeLayersRequest || (exports.DescribeLayersRequest = {}));
var Layer;
(function (Layer) {
    /**
     * @internal
     */
    Layer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Layer = exports.Layer || (exports.Layer = {}));
var DescribeLayersResult;
(function (DescribeLayersResult) {
    /**
     * @internal
     */
    DescribeLayersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLayersResult = exports.DescribeLayersResult || (exports.DescribeLayersResult = {}));
var DescribeLoadBasedAutoScalingRequest;
(function (DescribeLoadBasedAutoScalingRequest) {
    /**
     * @internal
     */
    DescribeLoadBasedAutoScalingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLoadBasedAutoScalingRequest = exports.DescribeLoadBasedAutoScalingRequest || (exports.DescribeLoadBasedAutoScalingRequest = {}));
var LoadBasedAutoScalingConfiguration;
(function (LoadBasedAutoScalingConfiguration) {
    /**
     * @internal
     */
    LoadBasedAutoScalingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoadBasedAutoScalingConfiguration = exports.LoadBasedAutoScalingConfiguration || (exports.LoadBasedAutoScalingConfiguration = {}));
var DescribeLoadBasedAutoScalingResult;
(function (DescribeLoadBasedAutoScalingResult) {
    /**
     * @internal
     */
    DescribeLoadBasedAutoScalingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLoadBasedAutoScalingResult = exports.DescribeLoadBasedAutoScalingResult || (exports.DescribeLoadBasedAutoScalingResult = {}));
var SelfUserProfile;
(function (SelfUserProfile) {
    /**
     * @internal
     */
    SelfUserProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SelfUserProfile = exports.SelfUserProfile || (exports.SelfUserProfile = {}));
var DescribeMyUserProfileResult;
(function (DescribeMyUserProfileResult) {
    /**
     * @internal
     */
    DescribeMyUserProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMyUserProfileResult = exports.DescribeMyUserProfileResult || (exports.DescribeMyUserProfileResult = {}));
var OperatingSystemConfigurationManager;
(function (OperatingSystemConfigurationManager) {
    /**
     * @internal
     */
    OperatingSystemConfigurationManager.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperatingSystemConfigurationManager = exports.OperatingSystemConfigurationManager || (exports.OperatingSystemConfigurationManager = {}));
var OperatingSystem;
(function (OperatingSystem) {
    /**
     * @internal
     */
    OperatingSystem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperatingSystem = exports.OperatingSystem || (exports.OperatingSystem = {}));
var DescribeOperatingSystemsResponse;
(function (DescribeOperatingSystemsResponse) {
    /**
     * @internal
     */
    DescribeOperatingSystemsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOperatingSystemsResponse = exports.DescribeOperatingSystemsResponse || (exports.DescribeOperatingSystemsResponse = {}));
var DescribePermissionsRequest;
(function (DescribePermissionsRequest) {
    /**
     * @internal
     */
    DescribePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePermissionsRequest = exports.DescribePermissionsRequest || (exports.DescribePermissionsRequest = {}));
var Permission;
(function (Permission) {
    /**
     * @internal
     */
    Permission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Permission = exports.Permission || (exports.Permission = {}));
var DescribePermissionsResult;
(function (DescribePermissionsResult) {
    /**
     * @internal
     */
    DescribePermissionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePermissionsResult = exports.DescribePermissionsResult || (exports.DescribePermissionsResult = {}));
var DescribeRaidArraysRequest;
(function (DescribeRaidArraysRequest) {
    /**
     * @internal
     */
    DescribeRaidArraysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRaidArraysRequest = exports.DescribeRaidArraysRequest || (exports.DescribeRaidArraysRequest = {}));
var RaidArray;
(function (RaidArray) {
    /**
     * @internal
     */
    RaidArray.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RaidArray = exports.RaidArray || (exports.RaidArray = {}));
var DescribeRaidArraysResult;
(function (DescribeRaidArraysResult) {
    /**
     * @internal
     */
    DescribeRaidArraysResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRaidArraysResult = exports.DescribeRaidArraysResult || (exports.DescribeRaidArraysResult = {}));
var DescribeRdsDbInstancesRequest;
(function (DescribeRdsDbInstancesRequest) {
    /**
     * @internal
     */
    DescribeRdsDbInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRdsDbInstancesRequest = exports.DescribeRdsDbInstancesRequest || (exports.DescribeRdsDbInstancesRequest = {}));
var RdsDbInstance;
(function (RdsDbInstance) {
    /**
     * @internal
     */
    RdsDbInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RdsDbInstance = exports.RdsDbInstance || (exports.RdsDbInstance = {}));
var DescribeRdsDbInstancesResult;
(function (DescribeRdsDbInstancesResult) {
    /**
     * @internal
     */
    DescribeRdsDbInstancesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRdsDbInstancesResult = exports.DescribeRdsDbInstancesResult || (exports.DescribeRdsDbInstancesResult = {}));
var DescribeServiceErrorsRequest;
(function (DescribeServiceErrorsRequest) {
    /**
     * @internal
     */
    DescribeServiceErrorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServiceErrorsRequest = exports.DescribeServiceErrorsRequest || (exports.DescribeServiceErrorsRequest = {}));
var ServiceError;
(function (ServiceError) {
    /**
     * @internal
     */
    ServiceError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceError = exports.ServiceError || (exports.ServiceError = {}));
var DescribeServiceErrorsResult;
(function (DescribeServiceErrorsResult) {
    /**
     * @internal
     */
    DescribeServiceErrorsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServiceErrorsResult = exports.DescribeServiceErrorsResult || (exports.DescribeServiceErrorsResult = {}));
var DescribeStackProvisioningParametersRequest;
(function (DescribeStackProvisioningParametersRequest) {
    /**
     * @internal
     */
    DescribeStackProvisioningParametersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStackProvisioningParametersRequest = exports.DescribeStackProvisioningParametersRequest || (exports.DescribeStackProvisioningParametersRequest = {}));
var DescribeStackProvisioningParametersResult;
(function (DescribeStackProvisioningParametersResult) {
    /**
     * @internal
     */
    DescribeStackProvisioningParametersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStackProvisioningParametersResult = exports.DescribeStackProvisioningParametersResult || (exports.DescribeStackProvisioningParametersResult = {}));
var DescribeStacksRequest;
(function (DescribeStacksRequest) {
    /**
     * @internal
     */
    DescribeStacksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStacksRequest = exports.DescribeStacksRequest || (exports.DescribeStacksRequest = {}));
var Stack;
(function (Stack) {
    /**
     * @internal
     */
    Stack.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Stack = exports.Stack || (exports.Stack = {}));
var DescribeStacksResult;
(function (DescribeStacksResult) {
    /**
     * @internal
     */
    DescribeStacksResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStacksResult = exports.DescribeStacksResult || (exports.DescribeStacksResult = {}));
var DescribeStackSummaryRequest;
(function (DescribeStackSummaryRequest) {
    /**
     * @internal
     */
    DescribeStackSummaryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStackSummaryRequest = exports.DescribeStackSummaryRequest || (exports.DescribeStackSummaryRequest = {}));
var InstancesCount;
(function (InstancesCount) {
    /**
     * @internal
     */
    InstancesCount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstancesCount = exports.InstancesCount || (exports.InstancesCount = {}));
var StackSummary;
(function (StackSummary) {
    /**
     * @internal
     */
    StackSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StackSummary = exports.StackSummary || (exports.StackSummary = {}));
var DescribeStackSummaryResult;
(function (DescribeStackSummaryResult) {
    /**
     * @internal
     */
    DescribeStackSummaryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeStackSummaryResult = exports.DescribeStackSummaryResult || (exports.DescribeStackSummaryResult = {}));
var DescribeTimeBasedAutoScalingRequest;
(function (DescribeTimeBasedAutoScalingRequest) {
    /**
     * @internal
     */
    DescribeTimeBasedAutoScalingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTimeBasedAutoScalingRequest = exports.DescribeTimeBasedAutoScalingRequest || (exports.DescribeTimeBasedAutoScalingRequest = {}));
var WeeklyAutoScalingSchedule;
(function (WeeklyAutoScalingSchedule) {
    /**
     * @internal
     */
    WeeklyAutoScalingSchedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WeeklyAutoScalingSchedule = exports.WeeklyAutoScalingSchedule || (exports.WeeklyAutoScalingSchedule = {}));
var TimeBasedAutoScalingConfiguration;
(function (TimeBasedAutoScalingConfiguration) {
    /**
     * @internal
     */
    TimeBasedAutoScalingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeBasedAutoScalingConfiguration = exports.TimeBasedAutoScalingConfiguration || (exports.TimeBasedAutoScalingConfiguration = {}));
var DescribeTimeBasedAutoScalingResult;
(function (DescribeTimeBasedAutoScalingResult) {
    /**
     * @internal
     */
    DescribeTimeBasedAutoScalingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTimeBasedAutoScalingResult = exports.DescribeTimeBasedAutoScalingResult || (exports.DescribeTimeBasedAutoScalingResult = {}));
var DescribeUserProfilesRequest;
(function (DescribeUserProfilesRequest) {
    /**
     * @internal
     */
    DescribeUserProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserProfilesRequest = exports.DescribeUserProfilesRequest || (exports.DescribeUserProfilesRequest = {}));
var UserProfile;
(function (UserProfile) {
    /**
     * @internal
     */
    UserProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserProfile = exports.UserProfile || (exports.UserProfile = {}));
var DescribeUserProfilesResult;
(function (DescribeUserProfilesResult) {
    /**
     * @internal
     */
    DescribeUserProfilesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserProfilesResult = exports.DescribeUserProfilesResult || (exports.DescribeUserProfilesResult = {}));
var DescribeVolumesRequest;
(function (DescribeVolumesRequest) {
    /**
     * @internal
     */
    DescribeVolumesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVolumesRequest = exports.DescribeVolumesRequest || (exports.DescribeVolumesRequest = {}));
var Volume;
(function (Volume) {
    /**
     * @internal
     */
    Volume.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Volume = exports.Volume || (exports.Volume = {}));
var DescribeVolumesResult;
(function (DescribeVolumesResult) {
    /**
     * @internal
     */
    DescribeVolumesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeVolumesResult = exports.DescribeVolumesResult || (exports.DescribeVolumesResult = {}));
var DetachElasticLoadBalancerRequest;
(function (DetachElasticLoadBalancerRequest) {
    /**
     * @internal
     */
    DetachElasticLoadBalancerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetachElasticLoadBalancerRequest = exports.DetachElasticLoadBalancerRequest || (exports.DetachElasticLoadBalancerRequest = {}));
var DisassociateElasticIpRequest;
(function (DisassociateElasticIpRequest) {
    /**
     * @internal
     */
    DisassociateElasticIpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateElasticIpRequest = exports.DisassociateElasticIpRequest || (exports.DisassociateElasticIpRequest = {}));
var GetHostnameSuggestionRequest;
(function (GetHostnameSuggestionRequest) {
    /**
     * @internal
     */
    GetHostnameSuggestionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHostnameSuggestionRequest = exports.GetHostnameSuggestionRequest || (exports.GetHostnameSuggestionRequest = {}));
var GetHostnameSuggestionResult;
(function (GetHostnameSuggestionResult) {
    /**
     * @internal
     */
    GetHostnameSuggestionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetHostnameSuggestionResult = exports.GetHostnameSuggestionResult || (exports.GetHostnameSuggestionResult = {}));
var GrantAccessRequest;
(function (GrantAccessRequest) {
    /**
     * @internal
     */
    GrantAccessRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GrantAccessRequest = exports.GrantAccessRequest || (exports.GrantAccessRequest = {}));
var TemporaryCredential;
(function (TemporaryCredential) {
    /**
     * @internal
     */
    TemporaryCredential.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemporaryCredential = exports.TemporaryCredential || (exports.TemporaryCredential = {}));
var GrantAccessResult;
(function (GrantAccessResult) {
    /**
     * @internal
     */
    GrantAccessResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GrantAccessResult = exports.GrantAccessResult || (exports.GrantAccessResult = {}));
var InstanceIdentity;
(function (InstanceIdentity) {
    /**
     * @internal
     */
    InstanceIdentity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceIdentity = exports.InstanceIdentity || (exports.InstanceIdentity = {}));
var ListTagsRequest;
(function (ListTagsRequest) {
    /**
     * @internal
     */
    ListTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsRequest = exports.ListTagsRequest || (exports.ListTagsRequest = {}));
var ListTagsResult;
(function (ListTagsResult) {
    /**
     * @internal
     */
    ListTagsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsResult = exports.ListTagsResult || (exports.ListTagsResult = {}));
var RebootInstanceRequest;
(function (RebootInstanceRequest) {
    /**
     * @internal
     */
    RebootInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RebootInstanceRequest = exports.RebootInstanceRequest || (exports.RebootInstanceRequest = {}));
var RegisterEcsClusterRequest;
(function (RegisterEcsClusterRequest) {
    /**
     * @internal
     */
    RegisterEcsClusterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterEcsClusterRequest = exports.RegisterEcsClusterRequest || (exports.RegisterEcsClusterRequest = {}));
var RegisterEcsClusterResult;
(function (RegisterEcsClusterResult) {
    /**
     * @internal
     */
    RegisterEcsClusterResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterEcsClusterResult = exports.RegisterEcsClusterResult || (exports.RegisterEcsClusterResult = {}));
var RegisterElasticIpRequest;
(function (RegisterElasticIpRequest) {
    /**
     * @internal
     */
    RegisterElasticIpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterElasticIpRequest = exports.RegisterElasticIpRequest || (exports.RegisterElasticIpRequest = {}));
var RegisterElasticIpResult;
(function (RegisterElasticIpResult) {
    /**
     * @internal
     */
    RegisterElasticIpResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterElasticIpResult = exports.RegisterElasticIpResult || (exports.RegisterElasticIpResult = {}));
var RegisterInstanceRequest;
(function (RegisterInstanceRequest) {
    /**
     * @internal
     */
    RegisterInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterInstanceRequest = exports.RegisterInstanceRequest || (exports.RegisterInstanceRequest = {}));
var RegisterInstanceResult;
(function (RegisterInstanceResult) {
    /**
     * @internal
     */
    RegisterInstanceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterInstanceResult = exports.RegisterInstanceResult || (exports.RegisterInstanceResult = {}));
var RegisterRdsDbInstanceRequest;
(function (RegisterRdsDbInstanceRequest) {
    /**
     * @internal
     */
    RegisterRdsDbInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterRdsDbInstanceRequest = exports.RegisterRdsDbInstanceRequest || (exports.RegisterRdsDbInstanceRequest = {}));
var RegisterVolumeRequest;
(function (RegisterVolumeRequest) {
    /**
     * @internal
     */
    RegisterVolumeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterVolumeRequest = exports.RegisterVolumeRequest || (exports.RegisterVolumeRequest = {}));
var RegisterVolumeResult;
(function (RegisterVolumeResult) {
    /**
     * @internal
     */
    RegisterVolumeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterVolumeResult = exports.RegisterVolumeResult || (exports.RegisterVolumeResult = {}));
var SetLoadBasedAutoScalingRequest;
(function (SetLoadBasedAutoScalingRequest) {
    /**
     * @internal
     */
    SetLoadBasedAutoScalingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetLoadBasedAutoScalingRequest = exports.SetLoadBasedAutoScalingRequest || (exports.SetLoadBasedAutoScalingRequest = {}));
var SetPermissionRequest;
(function (SetPermissionRequest) {
    /**
     * @internal
     */
    SetPermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetPermissionRequest = exports.SetPermissionRequest || (exports.SetPermissionRequest = {}));
var SetTimeBasedAutoScalingRequest;
(function (SetTimeBasedAutoScalingRequest) {
    /**
     * @internal
     */
    SetTimeBasedAutoScalingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetTimeBasedAutoScalingRequest = exports.SetTimeBasedAutoScalingRequest || (exports.SetTimeBasedAutoScalingRequest = {}));
var StartInstanceRequest;
(function (StartInstanceRequest) {
    /**
     * @internal
     */
    StartInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartInstanceRequest = exports.StartInstanceRequest || (exports.StartInstanceRequest = {}));
var StartStackRequest;
(function (StartStackRequest) {
    /**
     * @internal
     */
    StartStackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartStackRequest = exports.StartStackRequest || (exports.StartStackRequest = {}));
var StopInstanceRequest;
(function (StopInstanceRequest) {
    /**
     * @internal
     */
    StopInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopInstanceRequest = exports.StopInstanceRequest || (exports.StopInstanceRequest = {}));
var StopStackRequest;
(function (StopStackRequest) {
    /**
     * @internal
     */
    StopStackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopStackRequest = exports.StopStackRequest || (exports.StopStackRequest = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UnassignInstanceRequest;
(function (UnassignInstanceRequest) {
    /**
     * @internal
     */
    UnassignInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnassignInstanceRequest = exports.UnassignInstanceRequest || (exports.UnassignInstanceRequest = {}));
var UnassignVolumeRequest;
(function (UnassignVolumeRequest) {
    /**
     * @internal
     */
    UnassignVolumeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnassignVolumeRequest = exports.UnassignVolumeRequest || (exports.UnassignVolumeRequest = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateAppRequest;
(function (UpdateAppRequest) {
    /**
     * @internal
     */
    UpdateAppRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAppRequest = exports.UpdateAppRequest || (exports.UpdateAppRequest = {}));
var UpdateElasticIpRequest;
(function (UpdateElasticIpRequest) {
    /**
     * @internal
     */
    UpdateElasticIpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateElasticIpRequest = exports.UpdateElasticIpRequest || (exports.UpdateElasticIpRequest = {}));
var UpdateInstanceRequest;
(function (UpdateInstanceRequest) {
    /**
     * @internal
     */
    UpdateInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInstanceRequest = exports.UpdateInstanceRequest || (exports.UpdateInstanceRequest = {}));
var UpdateLayerRequest;
(function (UpdateLayerRequest) {
    /**
     * @internal
     */
    UpdateLayerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLayerRequest = exports.UpdateLayerRequest || (exports.UpdateLayerRequest = {}));
var UpdateMyUserProfileRequest;
(function (UpdateMyUserProfileRequest) {
    /**
     * @internal
     */
    UpdateMyUserProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMyUserProfileRequest = exports.UpdateMyUserProfileRequest || (exports.UpdateMyUserProfileRequest = {}));
var UpdateRdsDbInstanceRequest;
(function (UpdateRdsDbInstanceRequest) {
    /**
     * @internal
     */
    UpdateRdsDbInstanceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRdsDbInstanceRequest = exports.UpdateRdsDbInstanceRequest || (exports.UpdateRdsDbInstanceRequest = {}));
var UpdateStackRequest;
(function (UpdateStackRequest) {
    /**
     * @internal
     */
    UpdateStackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateStackRequest = exports.UpdateStackRequest || (exports.UpdateStackRequest = {}));
var UpdateUserProfileRequest;
(function (UpdateUserProfileRequest) {
    /**
     * @internal
     */
    UpdateUserProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserProfileRequest = exports.UpdateUserProfileRequest || (exports.UpdateUserProfileRequest = {}));
var UpdateVolumeRequest;
(function (UpdateVolumeRequest) {
    /**
     * @internal
     */
    UpdateVolumeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVolumeRequest = exports.UpdateVolumeRequest || (exports.UpdateVolumeRequest = {}));
//# sourceMappingURL=models_0.js.map