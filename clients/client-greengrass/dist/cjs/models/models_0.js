"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConnectorDefinitionVersionResponse = exports.CreateConnectorDefinitionVersionRequest = exports.CreateConnectorDefinitionResponse = exports.CreateConnectorDefinitionRequest = exports.CoreDefinitionVersion = exports.ConnectorDefinitionVersion = exports.ConfigurationSyncStatus = exports.BulkDeploymentStatus = exports.BulkDeploymentResult = exports.DeploymentType = exports.BulkDeploymentMetrics = exports.BulkDeployment = exports.AssociateServiceRoleToAccountResponse = exports.AssociateServiceRoleToAccountRequest = exports.InternalServerErrorException = exports.BadRequestException = exports.ErrorDetail = exports.AssociateRoleToGroupResponse = exports.AssociateRoleToGroupRequest = exports.VersionInformation = exports.Subscription = exports.Resource = exports.ResourceDataContainer = exports.SecretsManagerSecretResourceData = exports.SageMakerMachineLearningModelResourceData = exports.S3MachineLearningModelResourceData = exports.ResourceDownloadOwnerSetting = exports.LocalVolumeResourceData = exports.LocalDeviceResourceData = exports.GroupOwnerSetting = exports.Logger = exports.LoggerType = exports.LoggerLevel = exports.LoggerComponent = exports.GroupInformation = exports.GroupCertificateAuthorityProperties = exports.Function = exports.FunctionConfiguration = exports.FunctionConfigurationEnvironment = exports.ResourceAccessPolicy = exports.Permission = exports.FunctionExecutionConfig = exports.FunctionRunAsConfig = exports.FunctionIsolationMode = exports.EncodingType = exports.Device = exports.DefinitionInformation = exports.Core = exports.Connector = exports.ConnectivityInfo = void 0;
exports.DeleteCoreDefinitionResponse = exports.DeleteCoreDefinitionRequest = exports.DeleteConnectorDefinitionResponse = exports.DeleteConnectorDefinitionRequest = exports.CreateSubscriptionDefinitionVersionResponse = exports.CreateSubscriptionDefinitionVersionRequest = exports.CreateSubscriptionDefinitionResponse = exports.CreateSubscriptionDefinitionRequest = exports.SubscriptionDefinitionVersion = exports.CreateSoftwareUpdateJobResponse = exports.CreateSoftwareUpdateJobRequest = exports.UpdateTargetsOperatingSystem = exports.UpdateTargetsArchitecture = exports.UpdateAgentLogLevel = exports.SoftwareToUpdate = exports.CreateResourceDefinitionVersionResponse = exports.CreateResourceDefinitionVersionRequest = exports.CreateResourceDefinitionResponse = exports.CreateResourceDefinitionRequest = exports.ResourceDefinitionVersion = exports.CreateLoggerDefinitionVersionResponse = exports.CreateLoggerDefinitionVersionRequest = exports.CreateLoggerDefinitionResponse = exports.CreateLoggerDefinitionRequest = exports.LoggerDefinitionVersion = exports.CreateGroupVersionResponse = exports.CreateGroupVersionRequest = exports.CreateGroupCertificateAuthorityResponse = exports.CreateGroupCertificateAuthorityRequest = exports.CreateGroupResponse = exports.CreateGroupRequest = exports.GroupVersion = exports.CreateFunctionDefinitionVersionResponse = exports.CreateFunctionDefinitionVersionRequest = exports.CreateFunctionDefinitionResponse = exports.CreateFunctionDefinitionRequest = exports.FunctionDefinitionVersion = exports.FunctionDefaultConfig = exports.FunctionDefaultExecutionConfig = exports.CreateDeviceDefinitionVersionResponse = exports.CreateDeviceDefinitionVersionRequest = exports.CreateDeviceDefinitionResponse = exports.CreateDeviceDefinitionRequest = exports.DeviceDefinitionVersion = exports.CreateDeploymentResponse = exports.CreateDeploymentRequest = exports.CreateCoreDefinitionVersionResponse = exports.CreateCoreDefinitionVersionRequest = exports.CreateCoreDefinitionResponse = exports.CreateCoreDefinitionRequest = void 0;
exports.GetLoggerDefinitionRequest = exports.GetGroupVersionResponse = exports.GetGroupVersionRequest = exports.GetGroupCertificateConfigurationResponse = exports.GetGroupCertificateConfigurationRequest = exports.GetGroupCertificateAuthorityResponse = exports.GetGroupCertificateAuthorityRequest = exports.GetGroupResponse = exports.GetGroupRequest = exports.GetFunctionDefinitionVersionResponse = exports.GetFunctionDefinitionVersionRequest = exports.GetFunctionDefinitionResponse = exports.GetFunctionDefinitionRequest = exports.GetDeviceDefinitionVersionResponse = exports.GetDeviceDefinitionVersionRequest = exports.GetDeviceDefinitionResponse = exports.GetDeviceDefinitionRequest = exports.GetDeploymentStatusResponse = exports.GetDeploymentStatusRequest = exports.GetCoreDefinitionVersionResponse = exports.GetCoreDefinitionVersionRequest = exports.GetCoreDefinitionResponse = exports.GetCoreDefinitionRequest = exports.GetConnectorDefinitionVersionResponse = exports.GetConnectorDefinitionVersionRequest = exports.GetConnectorDefinitionResponse = exports.GetConnectorDefinitionRequest = exports.GetConnectivityInfoResponse = exports.GetConnectivityInfoRequest = exports.GetBulkDeploymentStatusResponse = exports.GetBulkDeploymentStatusRequest = exports.GetAssociatedRoleResponse = exports.GetAssociatedRoleRequest = exports.DisassociateServiceRoleFromAccountResponse = exports.DisassociateServiceRoleFromAccountRequest = exports.DisassociateRoleFromGroupResponse = exports.DisassociateRoleFromGroupRequest = exports.Deployment = exports.DeleteSubscriptionDefinitionResponse = exports.DeleteSubscriptionDefinitionRequest = exports.DeleteResourceDefinitionResponse = exports.DeleteResourceDefinitionRequest = exports.DeleteLoggerDefinitionResponse = exports.DeleteLoggerDefinitionRequest = exports.DeleteGroupResponse = exports.DeleteGroupRequest = exports.DeleteFunctionDefinitionResponse = exports.DeleteFunctionDefinitionRequest = exports.DeleteDeviceDefinitionResponse = exports.DeleteDeviceDefinitionRequest = void 0;
exports.ListLoggerDefinitionVersionsResponse = exports.ListLoggerDefinitionVersionsRequest = exports.ListLoggerDefinitionsResponse = exports.ListLoggerDefinitionsRequest = exports.ListGroupVersionsResponse = exports.ListGroupVersionsRequest = exports.ListGroupsResponse = exports.ListGroupsRequest = exports.ListGroupCertificateAuthoritiesResponse = exports.ListGroupCertificateAuthoritiesRequest = exports.ListFunctionDefinitionVersionsResponse = exports.ListFunctionDefinitionVersionsRequest = exports.ListFunctionDefinitionsResponse = exports.ListFunctionDefinitionsRequest = exports.ListDeviceDefinitionVersionsResponse = exports.ListDeviceDefinitionVersionsRequest = exports.ListDeviceDefinitionsResponse = exports.ListDeviceDefinitionsRequest = exports.ListDeploymentsResponse = exports.ListDeploymentsRequest = exports.ListCoreDefinitionVersionsResponse = exports.ListCoreDefinitionVersionsRequest = exports.ListCoreDefinitionsResponse = exports.ListCoreDefinitionsRequest = exports.ListConnectorDefinitionVersionsResponse = exports.ListConnectorDefinitionVersionsRequest = exports.ListConnectorDefinitionsResponse = exports.ListConnectorDefinitionsRequest = exports.ListBulkDeploymentsResponse = exports.ListBulkDeploymentsRequest = exports.ListBulkDeploymentDetailedReportsResponse = exports.ListBulkDeploymentDetailedReportsRequest = exports.GetThingRuntimeConfigurationResponse = exports.RuntimeConfiguration = exports.TelemetryConfiguration = exports.Telemetry = exports.GetThingRuntimeConfigurationRequest = exports.GetSubscriptionDefinitionVersionResponse = exports.GetSubscriptionDefinitionVersionRequest = exports.GetSubscriptionDefinitionResponse = exports.GetSubscriptionDefinitionRequest = exports.GetServiceRoleForAccountResponse = exports.GetServiceRoleForAccountRequest = exports.GetResourceDefinitionVersionResponse = exports.GetResourceDefinitionVersionRequest = exports.GetResourceDefinitionResponse = exports.GetResourceDefinitionRequest = exports.GetLoggerDefinitionVersionResponse = exports.GetLoggerDefinitionVersionRequest = exports.GetLoggerDefinitionResponse = void 0;
exports.UpdateThingRuntimeConfigurationResponse = exports.UpdateThingRuntimeConfigurationRequest = exports.TelemetryConfigurationUpdate = exports.UpdateSubscriptionDefinitionResponse = exports.UpdateSubscriptionDefinitionRequest = exports.UpdateResourceDefinitionResponse = exports.UpdateResourceDefinitionRequest = exports.UpdateLoggerDefinitionResponse = exports.UpdateLoggerDefinitionRequest = exports.UpdateGroupCertificateConfigurationResponse = exports.UpdateGroupCertificateConfigurationRequest = exports.UpdateGroupResponse = exports.UpdateGroupRequest = exports.UpdateFunctionDefinitionResponse = exports.UpdateFunctionDefinitionRequest = exports.UpdateDeviceDefinitionResponse = exports.UpdateDeviceDefinitionRequest = exports.UpdateCoreDefinitionResponse = exports.UpdateCoreDefinitionRequest = exports.UpdateConnectorDefinitionResponse = exports.UpdateConnectorDefinitionRequest = exports.UpdateConnectivityInfoResponse = exports.UpdateConnectivityInfoRequest = exports.UntagResourceRequest = exports.TagResourceRequest = exports.StopBulkDeploymentResponse = exports.StopBulkDeploymentRequest = exports.StartBulkDeploymentResponse = exports.StartBulkDeploymentRequest = exports.ResetDeploymentsResponse = exports.ResetDeploymentsRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListSubscriptionDefinitionVersionsResponse = exports.ListSubscriptionDefinitionVersionsRequest = exports.ListSubscriptionDefinitionsResponse = exports.ListSubscriptionDefinitionsRequest = exports.ListResourceDefinitionVersionsResponse = exports.ListResourceDefinitionVersionsRequest = exports.ListResourceDefinitionsResponse = exports.ListResourceDefinitionsRequest = void 0;
var ConnectivityInfo;
(function (ConnectivityInfo) {
    /**
     * @internal
     */
    ConnectivityInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectivityInfo = exports.ConnectivityInfo || (exports.ConnectivityInfo = {}));
var Connector;
(function (Connector) {
    /**
     * @internal
     */
    Connector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Connector = exports.Connector || (exports.Connector = {}));
var Core;
(function (Core) {
    /**
     * @internal
     */
    Core.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Core = exports.Core || (exports.Core = {}));
var DefinitionInformation;
(function (DefinitionInformation) {
    /**
     * @internal
     */
    DefinitionInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefinitionInformation = exports.DefinitionInformation || (exports.DefinitionInformation = {}));
var Device;
(function (Device) {
    /**
     * @internal
     */
    Device.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Device = exports.Device || (exports.Device = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType["binary"] = "binary";
    EncodingType["json"] = "json";
})(EncodingType = exports.EncodingType || (exports.EncodingType = {}));
var FunctionIsolationMode;
(function (FunctionIsolationMode) {
    FunctionIsolationMode["GreengrassContainer"] = "GreengrassContainer";
    FunctionIsolationMode["NoContainer"] = "NoContainer";
})(FunctionIsolationMode = exports.FunctionIsolationMode || (exports.FunctionIsolationMode = {}));
var FunctionRunAsConfig;
(function (FunctionRunAsConfig) {
    /**
     * @internal
     */
    FunctionRunAsConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FunctionRunAsConfig = exports.FunctionRunAsConfig || (exports.FunctionRunAsConfig = {}));
var FunctionExecutionConfig;
(function (FunctionExecutionConfig) {
    /**
     * @internal
     */
    FunctionExecutionConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FunctionExecutionConfig = exports.FunctionExecutionConfig || (exports.FunctionExecutionConfig = {}));
var Permission;
(function (Permission) {
    Permission["ro"] = "ro";
    Permission["rw"] = "rw";
})(Permission = exports.Permission || (exports.Permission = {}));
var ResourceAccessPolicy;
(function (ResourceAccessPolicy) {
    /**
     * @internal
     */
    ResourceAccessPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAccessPolicy = exports.ResourceAccessPolicy || (exports.ResourceAccessPolicy = {}));
var FunctionConfigurationEnvironment;
(function (FunctionConfigurationEnvironment) {
    /**
     * @internal
     */
    FunctionConfigurationEnvironment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FunctionConfigurationEnvironment = exports.FunctionConfigurationEnvironment || (exports.FunctionConfigurationEnvironment = {}));
var FunctionConfiguration;
(function (FunctionConfiguration) {
    /**
     * @internal
     */
    FunctionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FunctionConfiguration = exports.FunctionConfiguration || (exports.FunctionConfiguration = {}));
var Function;
(function (Function) {
    /**
     * @internal
     */
    Function.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Function = exports.Function || (exports.Function = {}));
var GroupCertificateAuthorityProperties;
(function (GroupCertificateAuthorityProperties) {
    /**
     * @internal
     */
    GroupCertificateAuthorityProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupCertificateAuthorityProperties = exports.GroupCertificateAuthorityProperties || (exports.GroupCertificateAuthorityProperties = {}));
var GroupInformation;
(function (GroupInformation) {
    /**
     * @internal
     */
    GroupInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupInformation = exports.GroupInformation || (exports.GroupInformation = {}));
var LoggerComponent;
(function (LoggerComponent) {
    LoggerComponent["GreengrassSystem"] = "GreengrassSystem";
    LoggerComponent["Lambda"] = "Lambda";
})(LoggerComponent = exports.LoggerComponent || (exports.LoggerComponent = {}));
var LoggerLevel;
(function (LoggerLevel) {
    LoggerLevel["DEBUG"] = "DEBUG";
    LoggerLevel["ERROR"] = "ERROR";
    LoggerLevel["FATAL"] = "FATAL";
    LoggerLevel["INFO"] = "INFO";
    LoggerLevel["WARN"] = "WARN";
})(LoggerLevel = exports.LoggerLevel || (exports.LoggerLevel = {}));
var LoggerType;
(function (LoggerType) {
    LoggerType["AWSCloudWatch"] = "AWSCloudWatch";
    LoggerType["FileSystem"] = "FileSystem";
})(LoggerType = exports.LoggerType || (exports.LoggerType = {}));
var Logger;
(function (Logger) {
    /**
     * @internal
     */
    Logger.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Logger = exports.Logger || (exports.Logger = {}));
var GroupOwnerSetting;
(function (GroupOwnerSetting) {
    /**
     * @internal
     */
    GroupOwnerSetting.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupOwnerSetting = exports.GroupOwnerSetting || (exports.GroupOwnerSetting = {}));
var LocalDeviceResourceData;
(function (LocalDeviceResourceData) {
    /**
     * @internal
     */
    LocalDeviceResourceData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocalDeviceResourceData = exports.LocalDeviceResourceData || (exports.LocalDeviceResourceData = {}));
var LocalVolumeResourceData;
(function (LocalVolumeResourceData) {
    /**
     * @internal
     */
    LocalVolumeResourceData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocalVolumeResourceData = exports.LocalVolumeResourceData || (exports.LocalVolumeResourceData = {}));
var ResourceDownloadOwnerSetting;
(function (ResourceDownloadOwnerSetting) {
    /**
     * @internal
     */
    ResourceDownloadOwnerSetting.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDownloadOwnerSetting = exports.ResourceDownloadOwnerSetting || (exports.ResourceDownloadOwnerSetting = {}));
var S3MachineLearningModelResourceData;
(function (S3MachineLearningModelResourceData) {
    /**
     * @internal
     */
    S3MachineLearningModelResourceData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3MachineLearningModelResourceData = exports.S3MachineLearningModelResourceData || (exports.S3MachineLearningModelResourceData = {}));
var SageMakerMachineLearningModelResourceData;
(function (SageMakerMachineLearningModelResourceData) {
    /**
     * @internal
     */
    SageMakerMachineLearningModelResourceData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SageMakerMachineLearningModelResourceData = exports.SageMakerMachineLearningModelResourceData || (exports.SageMakerMachineLearningModelResourceData = {}));
var SecretsManagerSecretResourceData;
(function (SecretsManagerSecretResourceData) {
    /**
     * @internal
     */
    SecretsManagerSecretResourceData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecretsManagerSecretResourceData = exports.SecretsManagerSecretResourceData || (exports.SecretsManagerSecretResourceData = {}));
var ResourceDataContainer;
(function (ResourceDataContainer) {
    /**
     * @internal
     */
    ResourceDataContainer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDataContainer = exports.ResourceDataContainer || (exports.ResourceDataContainer = {}));
var Resource;
(function (Resource) {
    /**
     * @internal
     */
    Resource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Resource = exports.Resource || (exports.Resource = {}));
var Subscription;
(function (Subscription) {
    /**
     * @internal
     */
    Subscription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Subscription = exports.Subscription || (exports.Subscription = {}));
var VersionInformation;
(function (VersionInformation) {
    /**
     * @internal
     */
    VersionInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VersionInformation = exports.VersionInformation || (exports.VersionInformation = {}));
var AssociateRoleToGroupRequest;
(function (AssociateRoleToGroupRequest) {
    /**
     * @internal
     */
    AssociateRoleToGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateRoleToGroupRequest = exports.AssociateRoleToGroupRequest || (exports.AssociateRoleToGroupRequest = {}));
var AssociateRoleToGroupResponse;
(function (AssociateRoleToGroupResponse) {
    /**
     * @internal
     */
    AssociateRoleToGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateRoleToGroupResponse = exports.AssociateRoleToGroupResponse || (exports.AssociateRoleToGroupResponse = {}));
var ErrorDetail;
(function (ErrorDetail) {
    /**
     * @internal
     */
    ErrorDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorDetail = exports.ErrorDetail || (exports.ErrorDetail = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}));
var AssociateServiceRoleToAccountRequest;
(function (AssociateServiceRoleToAccountRequest) {
    /**
     * @internal
     */
    AssociateServiceRoleToAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateServiceRoleToAccountRequest = exports.AssociateServiceRoleToAccountRequest || (exports.AssociateServiceRoleToAccountRequest = {}));
var AssociateServiceRoleToAccountResponse;
(function (AssociateServiceRoleToAccountResponse) {
    /**
     * @internal
     */
    AssociateServiceRoleToAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateServiceRoleToAccountResponse = exports.AssociateServiceRoleToAccountResponse || (exports.AssociateServiceRoleToAccountResponse = {}));
var BulkDeployment;
(function (BulkDeployment) {
    /**
     * @internal
     */
    BulkDeployment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BulkDeployment = exports.BulkDeployment || (exports.BulkDeployment = {}));
var BulkDeploymentMetrics;
(function (BulkDeploymentMetrics) {
    /**
     * @internal
     */
    BulkDeploymentMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BulkDeploymentMetrics = exports.BulkDeploymentMetrics || (exports.BulkDeploymentMetrics = {}));
var DeploymentType;
(function (DeploymentType) {
    DeploymentType["ForceResetDeployment"] = "ForceResetDeployment";
    DeploymentType["NewDeployment"] = "NewDeployment";
    DeploymentType["Redeployment"] = "Redeployment";
    DeploymentType["ResetDeployment"] = "ResetDeployment";
})(DeploymentType = exports.DeploymentType || (exports.DeploymentType = {}));
var BulkDeploymentResult;
(function (BulkDeploymentResult) {
    /**
     * @internal
     */
    BulkDeploymentResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BulkDeploymentResult = exports.BulkDeploymentResult || (exports.BulkDeploymentResult = {}));
var BulkDeploymentStatus;
(function (BulkDeploymentStatus) {
    BulkDeploymentStatus["Completed"] = "Completed";
    BulkDeploymentStatus["Failed"] = "Failed";
    BulkDeploymentStatus["Initializing"] = "Initializing";
    BulkDeploymentStatus["Running"] = "Running";
    BulkDeploymentStatus["Stopped"] = "Stopped";
    BulkDeploymentStatus["Stopping"] = "Stopping";
})(BulkDeploymentStatus = exports.BulkDeploymentStatus || (exports.BulkDeploymentStatus = {}));
var ConfigurationSyncStatus;
(function (ConfigurationSyncStatus) {
    ConfigurationSyncStatus["InSync"] = "InSync";
    ConfigurationSyncStatus["OutOfSync"] = "OutOfSync";
})(ConfigurationSyncStatus = exports.ConfigurationSyncStatus || (exports.ConfigurationSyncStatus = {}));
var ConnectorDefinitionVersion;
(function (ConnectorDefinitionVersion) {
    /**
     * @internal
     */
    ConnectorDefinitionVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectorDefinitionVersion = exports.ConnectorDefinitionVersion || (exports.ConnectorDefinitionVersion = {}));
var CoreDefinitionVersion;
(function (CoreDefinitionVersion) {
    /**
     * @internal
     */
    CoreDefinitionVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CoreDefinitionVersion = exports.CoreDefinitionVersion || (exports.CoreDefinitionVersion = {}));
var CreateConnectorDefinitionRequest;
(function (CreateConnectorDefinitionRequest) {
    /**
     * @internal
     */
    CreateConnectorDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectorDefinitionRequest = exports.CreateConnectorDefinitionRequest || (exports.CreateConnectorDefinitionRequest = {}));
var CreateConnectorDefinitionResponse;
(function (CreateConnectorDefinitionResponse) {
    /**
     * @internal
     */
    CreateConnectorDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectorDefinitionResponse = exports.CreateConnectorDefinitionResponse || (exports.CreateConnectorDefinitionResponse = {}));
var CreateConnectorDefinitionVersionRequest;
(function (CreateConnectorDefinitionVersionRequest) {
    /**
     * @internal
     */
    CreateConnectorDefinitionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectorDefinitionVersionRequest = exports.CreateConnectorDefinitionVersionRequest || (exports.CreateConnectorDefinitionVersionRequest = {}));
var CreateConnectorDefinitionVersionResponse;
(function (CreateConnectorDefinitionVersionResponse) {
    /**
     * @internal
     */
    CreateConnectorDefinitionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectorDefinitionVersionResponse = exports.CreateConnectorDefinitionVersionResponse || (exports.CreateConnectorDefinitionVersionResponse = {}));
var CreateCoreDefinitionRequest;
(function (CreateCoreDefinitionRequest) {
    /**
     * @internal
     */
    CreateCoreDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCoreDefinitionRequest = exports.CreateCoreDefinitionRequest || (exports.CreateCoreDefinitionRequest = {}));
var CreateCoreDefinitionResponse;
(function (CreateCoreDefinitionResponse) {
    /**
     * @internal
     */
    CreateCoreDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCoreDefinitionResponse = exports.CreateCoreDefinitionResponse || (exports.CreateCoreDefinitionResponse = {}));
var CreateCoreDefinitionVersionRequest;
(function (CreateCoreDefinitionVersionRequest) {
    /**
     * @internal
     */
    CreateCoreDefinitionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCoreDefinitionVersionRequest = exports.CreateCoreDefinitionVersionRequest || (exports.CreateCoreDefinitionVersionRequest = {}));
var CreateCoreDefinitionVersionResponse;
(function (CreateCoreDefinitionVersionResponse) {
    /**
     * @internal
     */
    CreateCoreDefinitionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCoreDefinitionVersionResponse = exports.CreateCoreDefinitionVersionResponse || (exports.CreateCoreDefinitionVersionResponse = {}));
var CreateDeploymentRequest;
(function (CreateDeploymentRequest) {
    /**
     * @internal
     */
    CreateDeploymentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeploymentRequest = exports.CreateDeploymentRequest || (exports.CreateDeploymentRequest = {}));
var CreateDeploymentResponse;
(function (CreateDeploymentResponse) {
    /**
     * @internal
     */
    CreateDeploymentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeploymentResponse = exports.CreateDeploymentResponse || (exports.CreateDeploymentResponse = {}));
var DeviceDefinitionVersion;
(function (DeviceDefinitionVersion) {
    /**
     * @internal
     */
    DeviceDefinitionVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeviceDefinitionVersion = exports.DeviceDefinitionVersion || (exports.DeviceDefinitionVersion = {}));
var CreateDeviceDefinitionRequest;
(function (CreateDeviceDefinitionRequest) {
    /**
     * @internal
     */
    CreateDeviceDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeviceDefinitionRequest = exports.CreateDeviceDefinitionRequest || (exports.CreateDeviceDefinitionRequest = {}));
var CreateDeviceDefinitionResponse;
(function (CreateDeviceDefinitionResponse) {
    /**
     * @internal
     */
    CreateDeviceDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeviceDefinitionResponse = exports.CreateDeviceDefinitionResponse || (exports.CreateDeviceDefinitionResponse = {}));
var CreateDeviceDefinitionVersionRequest;
(function (CreateDeviceDefinitionVersionRequest) {
    /**
     * @internal
     */
    CreateDeviceDefinitionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeviceDefinitionVersionRequest = exports.CreateDeviceDefinitionVersionRequest || (exports.CreateDeviceDefinitionVersionRequest = {}));
var CreateDeviceDefinitionVersionResponse;
(function (CreateDeviceDefinitionVersionResponse) {
    /**
     * @internal
     */
    CreateDeviceDefinitionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeviceDefinitionVersionResponse = exports.CreateDeviceDefinitionVersionResponse || (exports.CreateDeviceDefinitionVersionResponse = {}));
var FunctionDefaultExecutionConfig;
(function (FunctionDefaultExecutionConfig) {
    /**
     * @internal
     */
    FunctionDefaultExecutionConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FunctionDefaultExecutionConfig = exports.FunctionDefaultExecutionConfig || (exports.FunctionDefaultExecutionConfig = {}));
var FunctionDefaultConfig;
(function (FunctionDefaultConfig) {
    /**
     * @internal
     */
    FunctionDefaultConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FunctionDefaultConfig = exports.FunctionDefaultConfig || (exports.FunctionDefaultConfig = {}));
var FunctionDefinitionVersion;
(function (FunctionDefinitionVersion) {
    /**
     * @internal
     */
    FunctionDefinitionVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FunctionDefinitionVersion = exports.FunctionDefinitionVersion || (exports.FunctionDefinitionVersion = {}));
var CreateFunctionDefinitionRequest;
(function (CreateFunctionDefinitionRequest) {
    /**
     * @internal
     */
    CreateFunctionDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFunctionDefinitionRequest = exports.CreateFunctionDefinitionRequest || (exports.CreateFunctionDefinitionRequest = {}));
var CreateFunctionDefinitionResponse;
(function (CreateFunctionDefinitionResponse) {
    /**
     * @internal
     */
    CreateFunctionDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFunctionDefinitionResponse = exports.CreateFunctionDefinitionResponse || (exports.CreateFunctionDefinitionResponse = {}));
var CreateFunctionDefinitionVersionRequest;
(function (CreateFunctionDefinitionVersionRequest) {
    /**
     * @internal
     */
    CreateFunctionDefinitionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFunctionDefinitionVersionRequest = exports.CreateFunctionDefinitionVersionRequest || (exports.CreateFunctionDefinitionVersionRequest = {}));
var CreateFunctionDefinitionVersionResponse;
(function (CreateFunctionDefinitionVersionResponse) {
    /**
     * @internal
     */
    CreateFunctionDefinitionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFunctionDefinitionVersionResponse = exports.CreateFunctionDefinitionVersionResponse || (exports.CreateFunctionDefinitionVersionResponse = {}));
var GroupVersion;
(function (GroupVersion) {
    /**
     * @internal
     */
    GroupVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupVersion = exports.GroupVersion || (exports.GroupVersion = {}));
var CreateGroupRequest;
(function (CreateGroupRequest) {
    /**
     * @internal
     */
    CreateGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupRequest = exports.CreateGroupRequest || (exports.CreateGroupRequest = {}));
var CreateGroupResponse;
(function (CreateGroupResponse) {
    /**
     * @internal
     */
    CreateGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupResponse = exports.CreateGroupResponse || (exports.CreateGroupResponse = {}));
var CreateGroupCertificateAuthorityRequest;
(function (CreateGroupCertificateAuthorityRequest) {
    /**
     * @internal
     */
    CreateGroupCertificateAuthorityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupCertificateAuthorityRequest = exports.CreateGroupCertificateAuthorityRequest || (exports.CreateGroupCertificateAuthorityRequest = {}));
var CreateGroupCertificateAuthorityResponse;
(function (CreateGroupCertificateAuthorityResponse) {
    /**
     * @internal
     */
    CreateGroupCertificateAuthorityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupCertificateAuthorityResponse = exports.CreateGroupCertificateAuthorityResponse || (exports.CreateGroupCertificateAuthorityResponse = {}));
var CreateGroupVersionRequest;
(function (CreateGroupVersionRequest) {
    /**
     * @internal
     */
    CreateGroupVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupVersionRequest = exports.CreateGroupVersionRequest || (exports.CreateGroupVersionRequest = {}));
var CreateGroupVersionResponse;
(function (CreateGroupVersionResponse) {
    /**
     * @internal
     */
    CreateGroupVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupVersionResponse = exports.CreateGroupVersionResponse || (exports.CreateGroupVersionResponse = {}));
var LoggerDefinitionVersion;
(function (LoggerDefinitionVersion) {
    /**
     * @internal
     */
    LoggerDefinitionVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoggerDefinitionVersion = exports.LoggerDefinitionVersion || (exports.LoggerDefinitionVersion = {}));
var CreateLoggerDefinitionRequest;
(function (CreateLoggerDefinitionRequest) {
    /**
     * @internal
     */
    CreateLoggerDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLoggerDefinitionRequest = exports.CreateLoggerDefinitionRequest || (exports.CreateLoggerDefinitionRequest = {}));
var CreateLoggerDefinitionResponse;
(function (CreateLoggerDefinitionResponse) {
    /**
     * @internal
     */
    CreateLoggerDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLoggerDefinitionResponse = exports.CreateLoggerDefinitionResponse || (exports.CreateLoggerDefinitionResponse = {}));
var CreateLoggerDefinitionVersionRequest;
(function (CreateLoggerDefinitionVersionRequest) {
    /**
     * @internal
     */
    CreateLoggerDefinitionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLoggerDefinitionVersionRequest = exports.CreateLoggerDefinitionVersionRequest || (exports.CreateLoggerDefinitionVersionRequest = {}));
var CreateLoggerDefinitionVersionResponse;
(function (CreateLoggerDefinitionVersionResponse) {
    /**
     * @internal
     */
    CreateLoggerDefinitionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLoggerDefinitionVersionResponse = exports.CreateLoggerDefinitionVersionResponse || (exports.CreateLoggerDefinitionVersionResponse = {}));
var ResourceDefinitionVersion;
(function (ResourceDefinitionVersion) {
    /**
     * @internal
     */
    ResourceDefinitionVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDefinitionVersion = exports.ResourceDefinitionVersion || (exports.ResourceDefinitionVersion = {}));
var CreateResourceDefinitionRequest;
(function (CreateResourceDefinitionRequest) {
    /**
     * @internal
     */
    CreateResourceDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResourceDefinitionRequest = exports.CreateResourceDefinitionRequest || (exports.CreateResourceDefinitionRequest = {}));
var CreateResourceDefinitionResponse;
(function (CreateResourceDefinitionResponse) {
    /**
     * @internal
     */
    CreateResourceDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResourceDefinitionResponse = exports.CreateResourceDefinitionResponse || (exports.CreateResourceDefinitionResponse = {}));
var CreateResourceDefinitionVersionRequest;
(function (CreateResourceDefinitionVersionRequest) {
    /**
     * @internal
     */
    CreateResourceDefinitionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResourceDefinitionVersionRequest = exports.CreateResourceDefinitionVersionRequest || (exports.CreateResourceDefinitionVersionRequest = {}));
var CreateResourceDefinitionVersionResponse;
(function (CreateResourceDefinitionVersionResponse) {
    /**
     * @internal
     */
    CreateResourceDefinitionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateResourceDefinitionVersionResponse = exports.CreateResourceDefinitionVersionResponse || (exports.CreateResourceDefinitionVersionResponse = {}));
var SoftwareToUpdate;
(function (SoftwareToUpdate) {
    SoftwareToUpdate["core"] = "core";
    SoftwareToUpdate["ota_agent"] = "ota_agent";
})(SoftwareToUpdate = exports.SoftwareToUpdate || (exports.SoftwareToUpdate = {}));
var UpdateAgentLogLevel;
(function (UpdateAgentLogLevel) {
    UpdateAgentLogLevel["DEBUG"] = "DEBUG";
    UpdateAgentLogLevel["ERROR"] = "ERROR";
    UpdateAgentLogLevel["FATAL"] = "FATAL";
    UpdateAgentLogLevel["INFO"] = "INFO";
    UpdateAgentLogLevel["NONE"] = "NONE";
    UpdateAgentLogLevel["TRACE"] = "TRACE";
    UpdateAgentLogLevel["VERBOSE"] = "VERBOSE";
    UpdateAgentLogLevel["WARN"] = "WARN";
})(UpdateAgentLogLevel = exports.UpdateAgentLogLevel || (exports.UpdateAgentLogLevel = {}));
var UpdateTargetsArchitecture;
(function (UpdateTargetsArchitecture) {
    UpdateTargetsArchitecture["aarch64"] = "aarch64";
    UpdateTargetsArchitecture["armv6l"] = "armv6l";
    UpdateTargetsArchitecture["armv7l"] = "armv7l";
    UpdateTargetsArchitecture["x86_64"] = "x86_64";
})(UpdateTargetsArchitecture = exports.UpdateTargetsArchitecture || (exports.UpdateTargetsArchitecture = {}));
var UpdateTargetsOperatingSystem;
(function (UpdateTargetsOperatingSystem) {
    UpdateTargetsOperatingSystem["amazon_linux"] = "amazon_linux";
    UpdateTargetsOperatingSystem["openwrt"] = "openwrt";
    UpdateTargetsOperatingSystem["raspbian"] = "raspbian";
    UpdateTargetsOperatingSystem["ubuntu"] = "ubuntu";
})(UpdateTargetsOperatingSystem = exports.UpdateTargetsOperatingSystem || (exports.UpdateTargetsOperatingSystem = {}));
var CreateSoftwareUpdateJobRequest;
(function (CreateSoftwareUpdateJobRequest) {
    /**
     * @internal
     */
    CreateSoftwareUpdateJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSoftwareUpdateJobRequest = exports.CreateSoftwareUpdateJobRequest || (exports.CreateSoftwareUpdateJobRequest = {}));
var CreateSoftwareUpdateJobResponse;
(function (CreateSoftwareUpdateJobResponse) {
    /**
     * @internal
     */
    CreateSoftwareUpdateJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSoftwareUpdateJobResponse = exports.CreateSoftwareUpdateJobResponse || (exports.CreateSoftwareUpdateJobResponse = {}));
var SubscriptionDefinitionVersion;
(function (SubscriptionDefinitionVersion) {
    /**
     * @internal
     */
    SubscriptionDefinitionVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscriptionDefinitionVersion = exports.SubscriptionDefinitionVersion || (exports.SubscriptionDefinitionVersion = {}));
var CreateSubscriptionDefinitionRequest;
(function (CreateSubscriptionDefinitionRequest) {
    /**
     * @internal
     */
    CreateSubscriptionDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSubscriptionDefinitionRequest = exports.CreateSubscriptionDefinitionRequest || (exports.CreateSubscriptionDefinitionRequest = {}));
var CreateSubscriptionDefinitionResponse;
(function (CreateSubscriptionDefinitionResponse) {
    /**
     * @internal
     */
    CreateSubscriptionDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSubscriptionDefinitionResponse = exports.CreateSubscriptionDefinitionResponse || (exports.CreateSubscriptionDefinitionResponse = {}));
var CreateSubscriptionDefinitionVersionRequest;
(function (CreateSubscriptionDefinitionVersionRequest) {
    /**
     * @internal
     */
    CreateSubscriptionDefinitionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSubscriptionDefinitionVersionRequest = exports.CreateSubscriptionDefinitionVersionRequest || (exports.CreateSubscriptionDefinitionVersionRequest = {}));
var CreateSubscriptionDefinitionVersionResponse;
(function (CreateSubscriptionDefinitionVersionResponse) {
    /**
     * @internal
     */
    CreateSubscriptionDefinitionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSubscriptionDefinitionVersionResponse = exports.CreateSubscriptionDefinitionVersionResponse || (exports.CreateSubscriptionDefinitionVersionResponse = {}));
var DeleteConnectorDefinitionRequest;
(function (DeleteConnectorDefinitionRequest) {
    /**
     * @internal
     */
    DeleteConnectorDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConnectorDefinitionRequest = exports.DeleteConnectorDefinitionRequest || (exports.DeleteConnectorDefinitionRequest = {}));
var DeleteConnectorDefinitionResponse;
(function (DeleteConnectorDefinitionResponse) {
    /**
     * @internal
     */
    DeleteConnectorDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConnectorDefinitionResponse = exports.DeleteConnectorDefinitionResponse || (exports.DeleteConnectorDefinitionResponse = {}));
var DeleteCoreDefinitionRequest;
(function (DeleteCoreDefinitionRequest) {
    /**
     * @internal
     */
    DeleteCoreDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCoreDefinitionRequest = exports.DeleteCoreDefinitionRequest || (exports.DeleteCoreDefinitionRequest = {}));
var DeleteCoreDefinitionResponse;
(function (DeleteCoreDefinitionResponse) {
    /**
     * @internal
     */
    DeleteCoreDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCoreDefinitionResponse = exports.DeleteCoreDefinitionResponse || (exports.DeleteCoreDefinitionResponse = {}));
var DeleteDeviceDefinitionRequest;
(function (DeleteDeviceDefinitionRequest) {
    /**
     * @internal
     */
    DeleteDeviceDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDeviceDefinitionRequest = exports.DeleteDeviceDefinitionRequest || (exports.DeleteDeviceDefinitionRequest = {}));
var DeleteDeviceDefinitionResponse;
(function (DeleteDeviceDefinitionResponse) {
    /**
     * @internal
     */
    DeleteDeviceDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDeviceDefinitionResponse = exports.DeleteDeviceDefinitionResponse || (exports.DeleteDeviceDefinitionResponse = {}));
var DeleteFunctionDefinitionRequest;
(function (DeleteFunctionDefinitionRequest) {
    /**
     * @internal
     */
    DeleteFunctionDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFunctionDefinitionRequest = exports.DeleteFunctionDefinitionRequest || (exports.DeleteFunctionDefinitionRequest = {}));
var DeleteFunctionDefinitionResponse;
(function (DeleteFunctionDefinitionResponse) {
    /**
     * @internal
     */
    DeleteFunctionDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFunctionDefinitionResponse = exports.DeleteFunctionDefinitionResponse || (exports.DeleteFunctionDefinitionResponse = {}));
var DeleteGroupRequest;
(function (DeleteGroupRequest) {
    /**
     * @internal
     */
    DeleteGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGroupRequest = exports.DeleteGroupRequest || (exports.DeleteGroupRequest = {}));
var DeleteGroupResponse;
(function (DeleteGroupResponse) {
    /**
     * @internal
     */
    DeleteGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGroupResponse = exports.DeleteGroupResponse || (exports.DeleteGroupResponse = {}));
var DeleteLoggerDefinitionRequest;
(function (DeleteLoggerDefinitionRequest) {
    /**
     * @internal
     */
    DeleteLoggerDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLoggerDefinitionRequest = exports.DeleteLoggerDefinitionRequest || (exports.DeleteLoggerDefinitionRequest = {}));
var DeleteLoggerDefinitionResponse;
(function (DeleteLoggerDefinitionResponse) {
    /**
     * @internal
     */
    DeleteLoggerDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLoggerDefinitionResponse = exports.DeleteLoggerDefinitionResponse || (exports.DeleteLoggerDefinitionResponse = {}));
var DeleteResourceDefinitionRequest;
(function (DeleteResourceDefinitionRequest) {
    /**
     * @internal
     */
    DeleteResourceDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourceDefinitionRequest = exports.DeleteResourceDefinitionRequest || (exports.DeleteResourceDefinitionRequest = {}));
var DeleteResourceDefinitionResponse;
(function (DeleteResourceDefinitionResponse) {
    /**
     * @internal
     */
    DeleteResourceDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourceDefinitionResponse = exports.DeleteResourceDefinitionResponse || (exports.DeleteResourceDefinitionResponse = {}));
var DeleteSubscriptionDefinitionRequest;
(function (DeleteSubscriptionDefinitionRequest) {
    /**
     * @internal
     */
    DeleteSubscriptionDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSubscriptionDefinitionRequest = exports.DeleteSubscriptionDefinitionRequest || (exports.DeleteSubscriptionDefinitionRequest = {}));
var DeleteSubscriptionDefinitionResponse;
(function (DeleteSubscriptionDefinitionResponse) {
    /**
     * @internal
     */
    DeleteSubscriptionDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSubscriptionDefinitionResponse = exports.DeleteSubscriptionDefinitionResponse || (exports.DeleteSubscriptionDefinitionResponse = {}));
var Deployment;
(function (Deployment) {
    /**
     * @internal
     */
    Deployment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Deployment = exports.Deployment || (exports.Deployment = {}));
var DisassociateRoleFromGroupRequest;
(function (DisassociateRoleFromGroupRequest) {
    /**
     * @internal
     */
    DisassociateRoleFromGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateRoleFromGroupRequest = exports.DisassociateRoleFromGroupRequest || (exports.DisassociateRoleFromGroupRequest = {}));
var DisassociateRoleFromGroupResponse;
(function (DisassociateRoleFromGroupResponse) {
    /**
     * @internal
     */
    DisassociateRoleFromGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateRoleFromGroupResponse = exports.DisassociateRoleFromGroupResponse || (exports.DisassociateRoleFromGroupResponse = {}));
var DisassociateServiceRoleFromAccountRequest;
(function (DisassociateServiceRoleFromAccountRequest) {
    /**
     * @internal
     */
    DisassociateServiceRoleFromAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateServiceRoleFromAccountRequest = exports.DisassociateServiceRoleFromAccountRequest || (exports.DisassociateServiceRoleFromAccountRequest = {}));
var DisassociateServiceRoleFromAccountResponse;
(function (DisassociateServiceRoleFromAccountResponse) {
    /**
     * @internal
     */
    DisassociateServiceRoleFromAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateServiceRoleFromAccountResponse = exports.DisassociateServiceRoleFromAccountResponse || (exports.DisassociateServiceRoleFromAccountResponse = {}));
var GetAssociatedRoleRequest;
(function (GetAssociatedRoleRequest) {
    /**
     * @internal
     */
    GetAssociatedRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssociatedRoleRequest = exports.GetAssociatedRoleRequest || (exports.GetAssociatedRoleRequest = {}));
var GetAssociatedRoleResponse;
(function (GetAssociatedRoleResponse) {
    /**
     * @internal
     */
    GetAssociatedRoleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssociatedRoleResponse = exports.GetAssociatedRoleResponse || (exports.GetAssociatedRoleResponse = {}));
var GetBulkDeploymentStatusRequest;
(function (GetBulkDeploymentStatusRequest) {
    /**
     * @internal
     */
    GetBulkDeploymentStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBulkDeploymentStatusRequest = exports.GetBulkDeploymentStatusRequest || (exports.GetBulkDeploymentStatusRequest = {}));
var GetBulkDeploymentStatusResponse;
(function (GetBulkDeploymentStatusResponse) {
    /**
     * @internal
     */
    GetBulkDeploymentStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBulkDeploymentStatusResponse = exports.GetBulkDeploymentStatusResponse || (exports.GetBulkDeploymentStatusResponse = {}));
var GetConnectivityInfoRequest;
(function (GetConnectivityInfoRequest) {
    /**
     * @internal
     */
    GetConnectivityInfoRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectivityInfoRequest = exports.GetConnectivityInfoRequest || (exports.GetConnectivityInfoRequest = {}));
var GetConnectivityInfoResponse;
(function (GetConnectivityInfoResponse) {
    /**
     * @internal
     */
    GetConnectivityInfoResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectivityInfoResponse = exports.GetConnectivityInfoResponse || (exports.GetConnectivityInfoResponse = {}));
var GetConnectorDefinitionRequest;
(function (GetConnectorDefinitionRequest) {
    /**
     * @internal
     */
    GetConnectorDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectorDefinitionRequest = exports.GetConnectorDefinitionRequest || (exports.GetConnectorDefinitionRequest = {}));
var GetConnectorDefinitionResponse;
(function (GetConnectorDefinitionResponse) {
    /**
     * @internal
     */
    GetConnectorDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectorDefinitionResponse = exports.GetConnectorDefinitionResponse || (exports.GetConnectorDefinitionResponse = {}));
var GetConnectorDefinitionVersionRequest;
(function (GetConnectorDefinitionVersionRequest) {
    /**
     * @internal
     */
    GetConnectorDefinitionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectorDefinitionVersionRequest = exports.GetConnectorDefinitionVersionRequest || (exports.GetConnectorDefinitionVersionRequest = {}));
var GetConnectorDefinitionVersionResponse;
(function (GetConnectorDefinitionVersionResponse) {
    /**
     * @internal
     */
    GetConnectorDefinitionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectorDefinitionVersionResponse = exports.GetConnectorDefinitionVersionResponse || (exports.GetConnectorDefinitionVersionResponse = {}));
var GetCoreDefinitionRequest;
(function (GetCoreDefinitionRequest) {
    /**
     * @internal
     */
    GetCoreDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCoreDefinitionRequest = exports.GetCoreDefinitionRequest || (exports.GetCoreDefinitionRequest = {}));
var GetCoreDefinitionResponse;
(function (GetCoreDefinitionResponse) {
    /**
     * @internal
     */
    GetCoreDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCoreDefinitionResponse = exports.GetCoreDefinitionResponse || (exports.GetCoreDefinitionResponse = {}));
var GetCoreDefinitionVersionRequest;
(function (GetCoreDefinitionVersionRequest) {
    /**
     * @internal
     */
    GetCoreDefinitionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCoreDefinitionVersionRequest = exports.GetCoreDefinitionVersionRequest || (exports.GetCoreDefinitionVersionRequest = {}));
var GetCoreDefinitionVersionResponse;
(function (GetCoreDefinitionVersionResponse) {
    /**
     * @internal
     */
    GetCoreDefinitionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCoreDefinitionVersionResponse = exports.GetCoreDefinitionVersionResponse || (exports.GetCoreDefinitionVersionResponse = {}));
var GetDeploymentStatusRequest;
(function (GetDeploymentStatusRequest) {
    /**
     * @internal
     */
    GetDeploymentStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeploymentStatusRequest = exports.GetDeploymentStatusRequest || (exports.GetDeploymentStatusRequest = {}));
var GetDeploymentStatusResponse;
(function (GetDeploymentStatusResponse) {
    /**
     * @internal
     */
    GetDeploymentStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeploymentStatusResponse = exports.GetDeploymentStatusResponse || (exports.GetDeploymentStatusResponse = {}));
var GetDeviceDefinitionRequest;
(function (GetDeviceDefinitionRequest) {
    /**
     * @internal
     */
    GetDeviceDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeviceDefinitionRequest = exports.GetDeviceDefinitionRequest || (exports.GetDeviceDefinitionRequest = {}));
var GetDeviceDefinitionResponse;
(function (GetDeviceDefinitionResponse) {
    /**
     * @internal
     */
    GetDeviceDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeviceDefinitionResponse = exports.GetDeviceDefinitionResponse || (exports.GetDeviceDefinitionResponse = {}));
var GetDeviceDefinitionVersionRequest;
(function (GetDeviceDefinitionVersionRequest) {
    /**
     * @internal
     */
    GetDeviceDefinitionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeviceDefinitionVersionRequest = exports.GetDeviceDefinitionVersionRequest || (exports.GetDeviceDefinitionVersionRequest = {}));
var GetDeviceDefinitionVersionResponse;
(function (GetDeviceDefinitionVersionResponse) {
    /**
     * @internal
     */
    GetDeviceDefinitionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeviceDefinitionVersionResponse = exports.GetDeviceDefinitionVersionResponse || (exports.GetDeviceDefinitionVersionResponse = {}));
var GetFunctionDefinitionRequest;
(function (GetFunctionDefinitionRequest) {
    /**
     * @internal
     */
    GetFunctionDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFunctionDefinitionRequest = exports.GetFunctionDefinitionRequest || (exports.GetFunctionDefinitionRequest = {}));
var GetFunctionDefinitionResponse;
(function (GetFunctionDefinitionResponse) {
    /**
     * @internal
     */
    GetFunctionDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFunctionDefinitionResponse = exports.GetFunctionDefinitionResponse || (exports.GetFunctionDefinitionResponse = {}));
var GetFunctionDefinitionVersionRequest;
(function (GetFunctionDefinitionVersionRequest) {
    /**
     * @internal
     */
    GetFunctionDefinitionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFunctionDefinitionVersionRequest = exports.GetFunctionDefinitionVersionRequest || (exports.GetFunctionDefinitionVersionRequest = {}));
var GetFunctionDefinitionVersionResponse;
(function (GetFunctionDefinitionVersionResponse) {
    /**
     * @internal
     */
    GetFunctionDefinitionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFunctionDefinitionVersionResponse = exports.GetFunctionDefinitionVersionResponse || (exports.GetFunctionDefinitionVersionResponse = {}));
var GetGroupRequest;
(function (GetGroupRequest) {
    /**
     * @internal
     */
    GetGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupRequest = exports.GetGroupRequest || (exports.GetGroupRequest = {}));
var GetGroupResponse;
(function (GetGroupResponse) {
    /**
     * @internal
     */
    GetGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupResponse = exports.GetGroupResponse || (exports.GetGroupResponse = {}));
var GetGroupCertificateAuthorityRequest;
(function (GetGroupCertificateAuthorityRequest) {
    /**
     * @internal
     */
    GetGroupCertificateAuthorityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupCertificateAuthorityRequest = exports.GetGroupCertificateAuthorityRequest || (exports.GetGroupCertificateAuthorityRequest = {}));
var GetGroupCertificateAuthorityResponse;
(function (GetGroupCertificateAuthorityResponse) {
    /**
     * @internal
     */
    GetGroupCertificateAuthorityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupCertificateAuthorityResponse = exports.GetGroupCertificateAuthorityResponse || (exports.GetGroupCertificateAuthorityResponse = {}));
var GetGroupCertificateConfigurationRequest;
(function (GetGroupCertificateConfigurationRequest) {
    /**
     * @internal
     */
    GetGroupCertificateConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupCertificateConfigurationRequest = exports.GetGroupCertificateConfigurationRequest || (exports.GetGroupCertificateConfigurationRequest = {}));
var GetGroupCertificateConfigurationResponse;
(function (GetGroupCertificateConfigurationResponse) {
    /**
     * @internal
     */
    GetGroupCertificateConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupCertificateConfigurationResponse = exports.GetGroupCertificateConfigurationResponse || (exports.GetGroupCertificateConfigurationResponse = {}));
var GetGroupVersionRequest;
(function (GetGroupVersionRequest) {
    /**
     * @internal
     */
    GetGroupVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupVersionRequest = exports.GetGroupVersionRequest || (exports.GetGroupVersionRequest = {}));
var GetGroupVersionResponse;
(function (GetGroupVersionResponse) {
    /**
     * @internal
     */
    GetGroupVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupVersionResponse = exports.GetGroupVersionResponse || (exports.GetGroupVersionResponse = {}));
var GetLoggerDefinitionRequest;
(function (GetLoggerDefinitionRequest) {
    /**
     * @internal
     */
    GetLoggerDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoggerDefinitionRequest = exports.GetLoggerDefinitionRequest || (exports.GetLoggerDefinitionRequest = {}));
var GetLoggerDefinitionResponse;
(function (GetLoggerDefinitionResponse) {
    /**
     * @internal
     */
    GetLoggerDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoggerDefinitionResponse = exports.GetLoggerDefinitionResponse || (exports.GetLoggerDefinitionResponse = {}));
var GetLoggerDefinitionVersionRequest;
(function (GetLoggerDefinitionVersionRequest) {
    /**
     * @internal
     */
    GetLoggerDefinitionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoggerDefinitionVersionRequest = exports.GetLoggerDefinitionVersionRequest || (exports.GetLoggerDefinitionVersionRequest = {}));
var GetLoggerDefinitionVersionResponse;
(function (GetLoggerDefinitionVersionResponse) {
    /**
     * @internal
     */
    GetLoggerDefinitionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoggerDefinitionVersionResponse = exports.GetLoggerDefinitionVersionResponse || (exports.GetLoggerDefinitionVersionResponse = {}));
var GetResourceDefinitionRequest;
(function (GetResourceDefinitionRequest) {
    /**
     * @internal
     */
    GetResourceDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceDefinitionRequest = exports.GetResourceDefinitionRequest || (exports.GetResourceDefinitionRequest = {}));
var GetResourceDefinitionResponse;
(function (GetResourceDefinitionResponse) {
    /**
     * @internal
     */
    GetResourceDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceDefinitionResponse = exports.GetResourceDefinitionResponse || (exports.GetResourceDefinitionResponse = {}));
var GetResourceDefinitionVersionRequest;
(function (GetResourceDefinitionVersionRequest) {
    /**
     * @internal
     */
    GetResourceDefinitionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceDefinitionVersionRequest = exports.GetResourceDefinitionVersionRequest || (exports.GetResourceDefinitionVersionRequest = {}));
var GetResourceDefinitionVersionResponse;
(function (GetResourceDefinitionVersionResponse) {
    /**
     * @internal
     */
    GetResourceDefinitionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceDefinitionVersionResponse = exports.GetResourceDefinitionVersionResponse || (exports.GetResourceDefinitionVersionResponse = {}));
var GetServiceRoleForAccountRequest;
(function (GetServiceRoleForAccountRequest) {
    /**
     * @internal
     */
    GetServiceRoleForAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceRoleForAccountRequest = exports.GetServiceRoleForAccountRequest || (exports.GetServiceRoleForAccountRequest = {}));
var GetServiceRoleForAccountResponse;
(function (GetServiceRoleForAccountResponse) {
    /**
     * @internal
     */
    GetServiceRoleForAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceRoleForAccountResponse = exports.GetServiceRoleForAccountResponse || (exports.GetServiceRoleForAccountResponse = {}));
var GetSubscriptionDefinitionRequest;
(function (GetSubscriptionDefinitionRequest) {
    /**
     * @internal
     */
    GetSubscriptionDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSubscriptionDefinitionRequest = exports.GetSubscriptionDefinitionRequest || (exports.GetSubscriptionDefinitionRequest = {}));
var GetSubscriptionDefinitionResponse;
(function (GetSubscriptionDefinitionResponse) {
    /**
     * @internal
     */
    GetSubscriptionDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSubscriptionDefinitionResponse = exports.GetSubscriptionDefinitionResponse || (exports.GetSubscriptionDefinitionResponse = {}));
var GetSubscriptionDefinitionVersionRequest;
(function (GetSubscriptionDefinitionVersionRequest) {
    /**
     * @internal
     */
    GetSubscriptionDefinitionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSubscriptionDefinitionVersionRequest = exports.GetSubscriptionDefinitionVersionRequest || (exports.GetSubscriptionDefinitionVersionRequest = {}));
var GetSubscriptionDefinitionVersionResponse;
(function (GetSubscriptionDefinitionVersionResponse) {
    /**
     * @internal
     */
    GetSubscriptionDefinitionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSubscriptionDefinitionVersionResponse = exports.GetSubscriptionDefinitionVersionResponse || (exports.GetSubscriptionDefinitionVersionResponse = {}));
var GetThingRuntimeConfigurationRequest;
(function (GetThingRuntimeConfigurationRequest) {
    /**
     * @internal
     */
    GetThingRuntimeConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetThingRuntimeConfigurationRequest = exports.GetThingRuntimeConfigurationRequest || (exports.GetThingRuntimeConfigurationRequest = {}));
var Telemetry;
(function (Telemetry) {
    Telemetry["Off"] = "Off";
    Telemetry["On"] = "On";
})(Telemetry = exports.Telemetry || (exports.Telemetry = {}));
var TelemetryConfiguration;
(function (TelemetryConfiguration) {
    /**
     * @internal
     */
    TelemetryConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TelemetryConfiguration = exports.TelemetryConfiguration || (exports.TelemetryConfiguration = {}));
var RuntimeConfiguration;
(function (RuntimeConfiguration) {
    /**
     * @internal
     */
    RuntimeConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuntimeConfiguration = exports.RuntimeConfiguration || (exports.RuntimeConfiguration = {}));
var GetThingRuntimeConfigurationResponse;
(function (GetThingRuntimeConfigurationResponse) {
    /**
     * @internal
     */
    GetThingRuntimeConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetThingRuntimeConfigurationResponse = exports.GetThingRuntimeConfigurationResponse || (exports.GetThingRuntimeConfigurationResponse = {}));
var ListBulkDeploymentDetailedReportsRequest;
(function (ListBulkDeploymentDetailedReportsRequest) {
    /**
     * @internal
     */
    ListBulkDeploymentDetailedReportsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBulkDeploymentDetailedReportsRequest = exports.ListBulkDeploymentDetailedReportsRequest || (exports.ListBulkDeploymentDetailedReportsRequest = {}));
var ListBulkDeploymentDetailedReportsResponse;
(function (ListBulkDeploymentDetailedReportsResponse) {
    /**
     * @internal
     */
    ListBulkDeploymentDetailedReportsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBulkDeploymentDetailedReportsResponse = exports.ListBulkDeploymentDetailedReportsResponse || (exports.ListBulkDeploymentDetailedReportsResponse = {}));
var ListBulkDeploymentsRequest;
(function (ListBulkDeploymentsRequest) {
    /**
     * @internal
     */
    ListBulkDeploymentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBulkDeploymentsRequest = exports.ListBulkDeploymentsRequest || (exports.ListBulkDeploymentsRequest = {}));
var ListBulkDeploymentsResponse;
(function (ListBulkDeploymentsResponse) {
    /**
     * @internal
     */
    ListBulkDeploymentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBulkDeploymentsResponse = exports.ListBulkDeploymentsResponse || (exports.ListBulkDeploymentsResponse = {}));
var ListConnectorDefinitionsRequest;
(function (ListConnectorDefinitionsRequest) {
    /**
     * @internal
     */
    ListConnectorDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConnectorDefinitionsRequest = exports.ListConnectorDefinitionsRequest || (exports.ListConnectorDefinitionsRequest = {}));
var ListConnectorDefinitionsResponse;
(function (ListConnectorDefinitionsResponse) {
    /**
     * @internal
     */
    ListConnectorDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConnectorDefinitionsResponse = exports.ListConnectorDefinitionsResponse || (exports.ListConnectorDefinitionsResponse = {}));
var ListConnectorDefinitionVersionsRequest;
(function (ListConnectorDefinitionVersionsRequest) {
    /**
     * @internal
     */
    ListConnectorDefinitionVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConnectorDefinitionVersionsRequest = exports.ListConnectorDefinitionVersionsRequest || (exports.ListConnectorDefinitionVersionsRequest = {}));
var ListConnectorDefinitionVersionsResponse;
(function (ListConnectorDefinitionVersionsResponse) {
    /**
     * @internal
     */
    ListConnectorDefinitionVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConnectorDefinitionVersionsResponse = exports.ListConnectorDefinitionVersionsResponse || (exports.ListConnectorDefinitionVersionsResponse = {}));
var ListCoreDefinitionsRequest;
(function (ListCoreDefinitionsRequest) {
    /**
     * @internal
     */
    ListCoreDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCoreDefinitionsRequest = exports.ListCoreDefinitionsRequest || (exports.ListCoreDefinitionsRequest = {}));
var ListCoreDefinitionsResponse;
(function (ListCoreDefinitionsResponse) {
    /**
     * @internal
     */
    ListCoreDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCoreDefinitionsResponse = exports.ListCoreDefinitionsResponse || (exports.ListCoreDefinitionsResponse = {}));
var ListCoreDefinitionVersionsRequest;
(function (ListCoreDefinitionVersionsRequest) {
    /**
     * @internal
     */
    ListCoreDefinitionVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCoreDefinitionVersionsRequest = exports.ListCoreDefinitionVersionsRequest || (exports.ListCoreDefinitionVersionsRequest = {}));
var ListCoreDefinitionVersionsResponse;
(function (ListCoreDefinitionVersionsResponse) {
    /**
     * @internal
     */
    ListCoreDefinitionVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCoreDefinitionVersionsResponse = exports.ListCoreDefinitionVersionsResponse || (exports.ListCoreDefinitionVersionsResponse = {}));
var ListDeploymentsRequest;
(function (ListDeploymentsRequest) {
    /**
     * @internal
     */
    ListDeploymentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeploymentsRequest = exports.ListDeploymentsRequest || (exports.ListDeploymentsRequest = {}));
var ListDeploymentsResponse;
(function (ListDeploymentsResponse) {
    /**
     * @internal
     */
    ListDeploymentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeploymentsResponse = exports.ListDeploymentsResponse || (exports.ListDeploymentsResponse = {}));
var ListDeviceDefinitionsRequest;
(function (ListDeviceDefinitionsRequest) {
    /**
     * @internal
     */
    ListDeviceDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeviceDefinitionsRequest = exports.ListDeviceDefinitionsRequest || (exports.ListDeviceDefinitionsRequest = {}));
var ListDeviceDefinitionsResponse;
(function (ListDeviceDefinitionsResponse) {
    /**
     * @internal
     */
    ListDeviceDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeviceDefinitionsResponse = exports.ListDeviceDefinitionsResponse || (exports.ListDeviceDefinitionsResponse = {}));
var ListDeviceDefinitionVersionsRequest;
(function (ListDeviceDefinitionVersionsRequest) {
    /**
     * @internal
     */
    ListDeviceDefinitionVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeviceDefinitionVersionsRequest = exports.ListDeviceDefinitionVersionsRequest || (exports.ListDeviceDefinitionVersionsRequest = {}));
var ListDeviceDefinitionVersionsResponse;
(function (ListDeviceDefinitionVersionsResponse) {
    /**
     * @internal
     */
    ListDeviceDefinitionVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeviceDefinitionVersionsResponse = exports.ListDeviceDefinitionVersionsResponse || (exports.ListDeviceDefinitionVersionsResponse = {}));
var ListFunctionDefinitionsRequest;
(function (ListFunctionDefinitionsRequest) {
    /**
     * @internal
     */
    ListFunctionDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFunctionDefinitionsRequest = exports.ListFunctionDefinitionsRequest || (exports.ListFunctionDefinitionsRequest = {}));
var ListFunctionDefinitionsResponse;
(function (ListFunctionDefinitionsResponse) {
    /**
     * @internal
     */
    ListFunctionDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFunctionDefinitionsResponse = exports.ListFunctionDefinitionsResponse || (exports.ListFunctionDefinitionsResponse = {}));
var ListFunctionDefinitionVersionsRequest;
(function (ListFunctionDefinitionVersionsRequest) {
    /**
     * @internal
     */
    ListFunctionDefinitionVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFunctionDefinitionVersionsRequest = exports.ListFunctionDefinitionVersionsRequest || (exports.ListFunctionDefinitionVersionsRequest = {}));
var ListFunctionDefinitionVersionsResponse;
(function (ListFunctionDefinitionVersionsResponse) {
    /**
     * @internal
     */
    ListFunctionDefinitionVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFunctionDefinitionVersionsResponse = exports.ListFunctionDefinitionVersionsResponse || (exports.ListFunctionDefinitionVersionsResponse = {}));
var ListGroupCertificateAuthoritiesRequest;
(function (ListGroupCertificateAuthoritiesRequest) {
    /**
     * @internal
     */
    ListGroupCertificateAuthoritiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupCertificateAuthoritiesRequest = exports.ListGroupCertificateAuthoritiesRequest || (exports.ListGroupCertificateAuthoritiesRequest = {}));
var ListGroupCertificateAuthoritiesResponse;
(function (ListGroupCertificateAuthoritiesResponse) {
    /**
     * @internal
     */
    ListGroupCertificateAuthoritiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupCertificateAuthoritiesResponse = exports.ListGroupCertificateAuthoritiesResponse || (exports.ListGroupCertificateAuthoritiesResponse = {}));
var ListGroupsRequest;
(function (ListGroupsRequest) {
    /**
     * @internal
     */
    ListGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupsRequest = exports.ListGroupsRequest || (exports.ListGroupsRequest = {}));
var ListGroupsResponse;
(function (ListGroupsResponse) {
    /**
     * @internal
     */
    ListGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupsResponse = exports.ListGroupsResponse || (exports.ListGroupsResponse = {}));
var ListGroupVersionsRequest;
(function (ListGroupVersionsRequest) {
    /**
     * @internal
     */
    ListGroupVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupVersionsRequest = exports.ListGroupVersionsRequest || (exports.ListGroupVersionsRequest = {}));
var ListGroupVersionsResponse;
(function (ListGroupVersionsResponse) {
    /**
     * @internal
     */
    ListGroupVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGroupVersionsResponse = exports.ListGroupVersionsResponse || (exports.ListGroupVersionsResponse = {}));
var ListLoggerDefinitionsRequest;
(function (ListLoggerDefinitionsRequest) {
    /**
     * @internal
     */
    ListLoggerDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLoggerDefinitionsRequest = exports.ListLoggerDefinitionsRequest || (exports.ListLoggerDefinitionsRequest = {}));
var ListLoggerDefinitionsResponse;
(function (ListLoggerDefinitionsResponse) {
    /**
     * @internal
     */
    ListLoggerDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLoggerDefinitionsResponse = exports.ListLoggerDefinitionsResponse || (exports.ListLoggerDefinitionsResponse = {}));
var ListLoggerDefinitionVersionsRequest;
(function (ListLoggerDefinitionVersionsRequest) {
    /**
     * @internal
     */
    ListLoggerDefinitionVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLoggerDefinitionVersionsRequest = exports.ListLoggerDefinitionVersionsRequest || (exports.ListLoggerDefinitionVersionsRequest = {}));
var ListLoggerDefinitionVersionsResponse;
(function (ListLoggerDefinitionVersionsResponse) {
    /**
     * @internal
     */
    ListLoggerDefinitionVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLoggerDefinitionVersionsResponse = exports.ListLoggerDefinitionVersionsResponse || (exports.ListLoggerDefinitionVersionsResponse = {}));
var ListResourceDefinitionsRequest;
(function (ListResourceDefinitionsRequest) {
    /**
     * @internal
     */
    ListResourceDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceDefinitionsRequest = exports.ListResourceDefinitionsRequest || (exports.ListResourceDefinitionsRequest = {}));
var ListResourceDefinitionsResponse;
(function (ListResourceDefinitionsResponse) {
    /**
     * @internal
     */
    ListResourceDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceDefinitionsResponse = exports.ListResourceDefinitionsResponse || (exports.ListResourceDefinitionsResponse = {}));
var ListResourceDefinitionVersionsRequest;
(function (ListResourceDefinitionVersionsRequest) {
    /**
     * @internal
     */
    ListResourceDefinitionVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceDefinitionVersionsRequest = exports.ListResourceDefinitionVersionsRequest || (exports.ListResourceDefinitionVersionsRequest = {}));
var ListResourceDefinitionVersionsResponse;
(function (ListResourceDefinitionVersionsResponse) {
    /**
     * @internal
     */
    ListResourceDefinitionVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourceDefinitionVersionsResponse = exports.ListResourceDefinitionVersionsResponse || (exports.ListResourceDefinitionVersionsResponse = {}));
var ListSubscriptionDefinitionsRequest;
(function (ListSubscriptionDefinitionsRequest) {
    /**
     * @internal
     */
    ListSubscriptionDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSubscriptionDefinitionsRequest = exports.ListSubscriptionDefinitionsRequest || (exports.ListSubscriptionDefinitionsRequest = {}));
var ListSubscriptionDefinitionsResponse;
(function (ListSubscriptionDefinitionsResponse) {
    /**
     * @internal
     */
    ListSubscriptionDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSubscriptionDefinitionsResponse = exports.ListSubscriptionDefinitionsResponse || (exports.ListSubscriptionDefinitionsResponse = {}));
var ListSubscriptionDefinitionVersionsRequest;
(function (ListSubscriptionDefinitionVersionsRequest) {
    /**
     * @internal
     */
    ListSubscriptionDefinitionVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSubscriptionDefinitionVersionsRequest = exports.ListSubscriptionDefinitionVersionsRequest || (exports.ListSubscriptionDefinitionVersionsRequest = {}));
var ListSubscriptionDefinitionVersionsResponse;
(function (ListSubscriptionDefinitionVersionsResponse) {
    /**
     * @internal
     */
    ListSubscriptionDefinitionVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSubscriptionDefinitionVersionsResponse = exports.ListSubscriptionDefinitionVersionsResponse || (exports.ListSubscriptionDefinitionVersionsResponse = {}));
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
var ResetDeploymentsRequest;
(function (ResetDeploymentsRequest) {
    /**
     * @internal
     */
    ResetDeploymentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetDeploymentsRequest = exports.ResetDeploymentsRequest || (exports.ResetDeploymentsRequest = {}));
var ResetDeploymentsResponse;
(function (ResetDeploymentsResponse) {
    /**
     * @internal
     */
    ResetDeploymentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetDeploymentsResponse = exports.ResetDeploymentsResponse || (exports.ResetDeploymentsResponse = {}));
var StartBulkDeploymentRequest;
(function (StartBulkDeploymentRequest) {
    /**
     * @internal
     */
    StartBulkDeploymentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartBulkDeploymentRequest = exports.StartBulkDeploymentRequest || (exports.StartBulkDeploymentRequest = {}));
var StartBulkDeploymentResponse;
(function (StartBulkDeploymentResponse) {
    /**
     * @internal
     */
    StartBulkDeploymentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartBulkDeploymentResponse = exports.StartBulkDeploymentResponse || (exports.StartBulkDeploymentResponse = {}));
var StopBulkDeploymentRequest;
(function (StopBulkDeploymentRequest) {
    /**
     * @internal
     */
    StopBulkDeploymentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopBulkDeploymentRequest = exports.StopBulkDeploymentRequest || (exports.StopBulkDeploymentRequest = {}));
var StopBulkDeploymentResponse;
(function (StopBulkDeploymentResponse) {
    /**
     * @internal
     */
    StopBulkDeploymentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopBulkDeploymentResponse = exports.StopBulkDeploymentResponse || (exports.StopBulkDeploymentResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateConnectivityInfoRequest;
(function (UpdateConnectivityInfoRequest) {
    /**
     * @internal
     */
    UpdateConnectivityInfoRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectivityInfoRequest = exports.UpdateConnectivityInfoRequest || (exports.UpdateConnectivityInfoRequest = {}));
var UpdateConnectivityInfoResponse;
(function (UpdateConnectivityInfoResponse) {
    /**
     * @internal
     */
    UpdateConnectivityInfoResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectivityInfoResponse = exports.UpdateConnectivityInfoResponse || (exports.UpdateConnectivityInfoResponse = {}));
var UpdateConnectorDefinitionRequest;
(function (UpdateConnectorDefinitionRequest) {
    /**
     * @internal
     */
    UpdateConnectorDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectorDefinitionRequest = exports.UpdateConnectorDefinitionRequest || (exports.UpdateConnectorDefinitionRequest = {}));
var UpdateConnectorDefinitionResponse;
(function (UpdateConnectorDefinitionResponse) {
    /**
     * @internal
     */
    UpdateConnectorDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectorDefinitionResponse = exports.UpdateConnectorDefinitionResponse || (exports.UpdateConnectorDefinitionResponse = {}));
var UpdateCoreDefinitionRequest;
(function (UpdateCoreDefinitionRequest) {
    /**
     * @internal
     */
    UpdateCoreDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCoreDefinitionRequest = exports.UpdateCoreDefinitionRequest || (exports.UpdateCoreDefinitionRequest = {}));
var UpdateCoreDefinitionResponse;
(function (UpdateCoreDefinitionResponse) {
    /**
     * @internal
     */
    UpdateCoreDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCoreDefinitionResponse = exports.UpdateCoreDefinitionResponse || (exports.UpdateCoreDefinitionResponse = {}));
var UpdateDeviceDefinitionRequest;
(function (UpdateDeviceDefinitionRequest) {
    /**
     * @internal
     */
    UpdateDeviceDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDeviceDefinitionRequest = exports.UpdateDeviceDefinitionRequest || (exports.UpdateDeviceDefinitionRequest = {}));
var UpdateDeviceDefinitionResponse;
(function (UpdateDeviceDefinitionResponse) {
    /**
     * @internal
     */
    UpdateDeviceDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDeviceDefinitionResponse = exports.UpdateDeviceDefinitionResponse || (exports.UpdateDeviceDefinitionResponse = {}));
var UpdateFunctionDefinitionRequest;
(function (UpdateFunctionDefinitionRequest) {
    /**
     * @internal
     */
    UpdateFunctionDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFunctionDefinitionRequest = exports.UpdateFunctionDefinitionRequest || (exports.UpdateFunctionDefinitionRequest = {}));
var UpdateFunctionDefinitionResponse;
(function (UpdateFunctionDefinitionResponse) {
    /**
     * @internal
     */
    UpdateFunctionDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFunctionDefinitionResponse = exports.UpdateFunctionDefinitionResponse || (exports.UpdateFunctionDefinitionResponse = {}));
var UpdateGroupRequest;
(function (UpdateGroupRequest) {
    /**
     * @internal
     */
    UpdateGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGroupRequest = exports.UpdateGroupRequest || (exports.UpdateGroupRequest = {}));
var UpdateGroupResponse;
(function (UpdateGroupResponse) {
    /**
     * @internal
     */
    UpdateGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGroupResponse = exports.UpdateGroupResponse || (exports.UpdateGroupResponse = {}));
var UpdateGroupCertificateConfigurationRequest;
(function (UpdateGroupCertificateConfigurationRequest) {
    /**
     * @internal
     */
    UpdateGroupCertificateConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGroupCertificateConfigurationRequest = exports.UpdateGroupCertificateConfigurationRequest || (exports.UpdateGroupCertificateConfigurationRequest = {}));
var UpdateGroupCertificateConfigurationResponse;
(function (UpdateGroupCertificateConfigurationResponse) {
    /**
     * @internal
     */
    UpdateGroupCertificateConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGroupCertificateConfigurationResponse = exports.UpdateGroupCertificateConfigurationResponse || (exports.UpdateGroupCertificateConfigurationResponse = {}));
var UpdateLoggerDefinitionRequest;
(function (UpdateLoggerDefinitionRequest) {
    /**
     * @internal
     */
    UpdateLoggerDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLoggerDefinitionRequest = exports.UpdateLoggerDefinitionRequest || (exports.UpdateLoggerDefinitionRequest = {}));
var UpdateLoggerDefinitionResponse;
(function (UpdateLoggerDefinitionResponse) {
    /**
     * @internal
     */
    UpdateLoggerDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLoggerDefinitionResponse = exports.UpdateLoggerDefinitionResponse || (exports.UpdateLoggerDefinitionResponse = {}));
var UpdateResourceDefinitionRequest;
(function (UpdateResourceDefinitionRequest) {
    /**
     * @internal
     */
    UpdateResourceDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResourceDefinitionRequest = exports.UpdateResourceDefinitionRequest || (exports.UpdateResourceDefinitionRequest = {}));
var UpdateResourceDefinitionResponse;
(function (UpdateResourceDefinitionResponse) {
    /**
     * @internal
     */
    UpdateResourceDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResourceDefinitionResponse = exports.UpdateResourceDefinitionResponse || (exports.UpdateResourceDefinitionResponse = {}));
var UpdateSubscriptionDefinitionRequest;
(function (UpdateSubscriptionDefinitionRequest) {
    /**
     * @internal
     */
    UpdateSubscriptionDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSubscriptionDefinitionRequest = exports.UpdateSubscriptionDefinitionRequest || (exports.UpdateSubscriptionDefinitionRequest = {}));
var UpdateSubscriptionDefinitionResponse;
(function (UpdateSubscriptionDefinitionResponse) {
    /**
     * @internal
     */
    UpdateSubscriptionDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSubscriptionDefinitionResponse = exports.UpdateSubscriptionDefinitionResponse || (exports.UpdateSubscriptionDefinitionResponse = {}));
var TelemetryConfigurationUpdate;
(function (TelemetryConfigurationUpdate) {
    /**
     * @internal
     */
    TelemetryConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TelemetryConfigurationUpdate = exports.TelemetryConfigurationUpdate || (exports.TelemetryConfigurationUpdate = {}));
var UpdateThingRuntimeConfigurationRequest;
(function (UpdateThingRuntimeConfigurationRequest) {
    /**
     * @internal
     */
    UpdateThingRuntimeConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThingRuntimeConfigurationRequest = exports.UpdateThingRuntimeConfigurationRequest || (exports.UpdateThingRuntimeConfigurationRequest = {}));
var UpdateThingRuntimeConfigurationResponse;
(function (UpdateThingRuntimeConfigurationResponse) {
    /**
     * @internal
     */
    UpdateThingRuntimeConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateThingRuntimeConfigurationResponse = exports.UpdateThingRuntimeConfigurationResponse || (exports.UpdateThingRuntimeConfigurationResponse = {}));
//# sourceMappingURL=models_0.js.map