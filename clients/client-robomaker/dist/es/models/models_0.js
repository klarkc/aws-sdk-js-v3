import { __assign } from "tslib";
export var Architecture;
(function (Architecture) {
    Architecture["ARM64"] = "ARM64";
    Architecture["ARMHF"] = "ARMHF";
    Architecture["X86_64"] = "X86_64";
})(Architecture || (Architecture = {}));
export var BatchDeleteWorldsRequest;
(function (BatchDeleteWorldsRequest) {
    /**
     * @internal
     */
    BatchDeleteWorldsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteWorldsRequest || (BatchDeleteWorldsRequest = {}));
export var BatchDeleteWorldsResponse;
(function (BatchDeleteWorldsResponse) {
    /**
     * @internal
     */
    BatchDeleteWorldsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteWorldsResponse || (BatchDeleteWorldsResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterException || (InvalidParameterException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var BatchDescribeSimulationJobRequest;
(function (BatchDescribeSimulationJobRequest) {
    /**
     * @internal
     */
    BatchDescribeSimulationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDescribeSimulationJobRequest || (BatchDescribeSimulationJobRequest = {}));
export var ComputeResponse;
(function (ComputeResponse) {
    /**
     * @internal
     */
    ComputeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ComputeResponse || (ComputeResponse = {}));
export var S3KeyOutput;
(function (S3KeyOutput) {
    /**
     * @internal
     */
    S3KeyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3KeyOutput || (S3KeyOutput = {}));
export var DataSource;
(function (DataSource) {
    /**
     * @internal
     */
    DataSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataSource || (DataSource = {}));
export var FailureBehavior;
(function (FailureBehavior) {
    FailureBehavior["Continue"] = "Continue";
    FailureBehavior["Fail"] = "Fail";
})(FailureBehavior || (FailureBehavior = {}));
export var SimulationJobErrorCode;
(function (SimulationJobErrorCode) {
    SimulationJobErrorCode["BadPermissionsCloudwatchLogs"] = "BadPermissionsCloudwatchLogs";
    SimulationJobErrorCode["BadPermissionsRobotApplication"] = "BadPermissionsRobotApplication";
    SimulationJobErrorCode["BadPermissionsS3Object"] = "BadPermissionsS3Object";
    SimulationJobErrorCode["BadPermissionsS3Output"] = "BadPermissionsS3Output";
    SimulationJobErrorCode["BadPermissionsSimulationApplication"] = "BadPermissionsSimulationApplication";
    SimulationJobErrorCode["BadPermissionsUserCredentials"] = "BadPermissionsUserCredentials";
    SimulationJobErrorCode["BatchCanceled"] = "BatchCanceled";
    SimulationJobErrorCode["BatchTimedOut"] = "BatchTimedOut";
    SimulationJobErrorCode["ENILimitExceeded"] = "ENILimitExceeded";
    SimulationJobErrorCode["InternalServiceError"] = "InternalServiceError";
    SimulationJobErrorCode["InvalidBundleRobotApplication"] = "InvalidBundleRobotApplication";
    SimulationJobErrorCode["InvalidBundleSimulationApplication"] = "InvalidBundleSimulationApplication";
    SimulationJobErrorCode["InvalidInput"] = "InvalidInput";
    SimulationJobErrorCode["InvalidS3Resource"] = "InvalidS3Resource";
    SimulationJobErrorCode["LimitExceeded"] = "LimitExceeded";
    SimulationJobErrorCode["MismatchedEtag"] = "MismatchedEtag";
    SimulationJobErrorCode["RequestThrottled"] = "RequestThrottled";
    SimulationJobErrorCode["ResourceNotFound"] = "ResourceNotFound";
    SimulationJobErrorCode["RobotApplicationCrash"] = "RobotApplicationCrash";
    SimulationJobErrorCode["RobotApplicationHealthCheckFailure"] = "RobotApplicationHealthCheckFailure";
    SimulationJobErrorCode["RobotApplicationVersionMismatchedEtag"] = "RobotApplicationVersionMismatchedEtag";
    SimulationJobErrorCode["SimulationApplicationCrash"] = "SimulationApplicationCrash";
    SimulationJobErrorCode["SimulationApplicationHealthCheckFailure"] = "SimulationApplicationHealthCheckFailure";
    SimulationJobErrorCode["SimulationApplicationVersionMismatchedEtag"] = "SimulationApplicationVersionMismatchedEtag";
    SimulationJobErrorCode["SubnetIpLimitExceeded"] = "SubnetIpLimitExceeded";
    SimulationJobErrorCode["ThrottlingError"] = "ThrottlingError";
    SimulationJobErrorCode["UploadContentMismatchError"] = "UploadContentMismatchError";
    SimulationJobErrorCode["WrongRegionRobotApplication"] = "WrongRegionRobotApplication";
    SimulationJobErrorCode["WrongRegionS3Bucket"] = "WrongRegionS3Bucket";
    SimulationJobErrorCode["WrongRegionS3Output"] = "WrongRegionS3Output";
    SimulationJobErrorCode["WrongRegionSimulationApplication"] = "WrongRegionSimulationApplication";
})(SimulationJobErrorCode || (SimulationJobErrorCode = {}));
export var LoggingConfig;
(function (LoggingConfig) {
    /**
     * @internal
     */
    LoggingConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoggingConfig || (LoggingConfig = {}));
export var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkInterface || (NetworkInterface = {}));
export var OutputLocation;
(function (OutputLocation) {
    /**
     * @internal
     */
    OutputLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputLocation || (OutputLocation = {}));
export var PortMapping;
(function (PortMapping) {
    /**
     * @internal
     */
    PortMapping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PortMapping || (PortMapping = {}));
export var PortForwardingConfig;
(function (PortForwardingConfig) {
    /**
     * @internal
     */
    PortForwardingConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PortForwardingConfig || (PortForwardingConfig = {}));
export var LaunchConfig;
(function (LaunchConfig) {
    /**
     * @internal
     */
    LaunchConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LaunchConfig || (LaunchConfig = {}));
export var ExitBehavior;
(function (ExitBehavior) {
    ExitBehavior["FAIL"] = "FAIL";
    ExitBehavior["RESTART"] = "RESTART";
})(ExitBehavior || (ExitBehavior = {}));
export var Tool;
(function (Tool) {
    /**
     * @internal
     */
    Tool.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tool || (Tool = {}));
export var UploadBehavior;
(function (UploadBehavior) {
    UploadBehavior["UPLOAD_ON_TERMINATE"] = "UPLOAD_ON_TERMINATE";
    UploadBehavior["UPLOAD_ROLLING_AUTO_REMOVE"] = "UPLOAD_ROLLING_AUTO_REMOVE";
})(UploadBehavior || (UploadBehavior = {}));
export var UploadConfiguration;
(function (UploadConfiguration) {
    /**
     * @internal
     */
    UploadConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UploadConfiguration || (UploadConfiguration = {}));
export var RobotApplicationConfig;
(function (RobotApplicationConfig) {
    /**
     * @internal
     */
    RobotApplicationConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RobotApplicationConfig || (RobotApplicationConfig = {}));
export var WorldConfig;
(function (WorldConfig) {
    /**
     * @internal
     */
    WorldConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WorldConfig || (WorldConfig = {}));
export var SimulationApplicationConfig;
(function (SimulationApplicationConfig) {
    /**
     * @internal
     */
    SimulationApplicationConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimulationApplicationConfig || (SimulationApplicationConfig = {}));
export var SimulationJobStatus;
(function (SimulationJobStatus) {
    SimulationJobStatus["Canceled"] = "Canceled";
    SimulationJobStatus["Completed"] = "Completed";
    SimulationJobStatus["Failed"] = "Failed";
    SimulationJobStatus["Pending"] = "Pending";
    SimulationJobStatus["Preparing"] = "Preparing";
    SimulationJobStatus["Restarting"] = "Restarting";
    SimulationJobStatus["Running"] = "Running";
    SimulationJobStatus["RunningFailed"] = "RunningFailed";
    SimulationJobStatus["Terminated"] = "Terminated";
    SimulationJobStatus["Terminating"] = "Terminating";
})(SimulationJobStatus || (SimulationJobStatus = {}));
export var VPCConfigResponse;
(function (VPCConfigResponse) {
    /**
     * @internal
     */
    VPCConfigResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VPCConfigResponse || (VPCConfigResponse = {}));
export var SimulationJob;
(function (SimulationJob) {
    /**
     * @internal
     */
    SimulationJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimulationJob || (SimulationJob = {}));
export var BatchDescribeSimulationJobResponse;
(function (BatchDescribeSimulationJobResponse) {
    /**
     * @internal
     */
    BatchDescribeSimulationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDescribeSimulationJobResponse || (BatchDescribeSimulationJobResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var BatchPolicy;
(function (BatchPolicy) {
    /**
     * @internal
     */
    BatchPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchPolicy || (BatchPolicy = {}));
export var CancelDeploymentJobRequest;
(function (CancelDeploymentJobRequest) {
    /**
     * @internal
     */
    CancelDeploymentJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelDeploymentJobRequest || (CancelDeploymentJobRequest = {}));
export var CancelDeploymentJobResponse;
(function (CancelDeploymentJobResponse) {
    /**
     * @internal
     */
    CancelDeploymentJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelDeploymentJobResponse || (CancelDeploymentJobResponse = {}));
export var CancelSimulationJobRequest;
(function (CancelSimulationJobRequest) {
    /**
     * @internal
     */
    CancelSimulationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelSimulationJobRequest || (CancelSimulationJobRequest = {}));
export var CancelSimulationJobResponse;
(function (CancelSimulationJobResponse) {
    /**
     * @internal
     */
    CancelSimulationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelSimulationJobResponse || (CancelSimulationJobResponse = {}));
export var CancelSimulationJobBatchRequest;
(function (CancelSimulationJobBatchRequest) {
    /**
     * @internal
     */
    CancelSimulationJobBatchRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelSimulationJobBatchRequest || (CancelSimulationJobBatchRequest = {}));
export var CancelSimulationJobBatchResponse;
(function (CancelSimulationJobBatchResponse) {
    /**
     * @internal
     */
    CancelSimulationJobBatchResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelSimulationJobBatchResponse || (CancelSimulationJobBatchResponse = {}));
export var CancelWorldExportJobRequest;
(function (CancelWorldExportJobRequest) {
    /**
     * @internal
     */
    CancelWorldExportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelWorldExportJobRequest || (CancelWorldExportJobRequest = {}));
export var CancelWorldExportJobResponse;
(function (CancelWorldExportJobResponse) {
    /**
     * @internal
     */
    CancelWorldExportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelWorldExportJobResponse || (CancelWorldExportJobResponse = {}));
export var CancelWorldGenerationJobRequest;
(function (CancelWorldGenerationJobRequest) {
    /**
     * @internal
     */
    CancelWorldGenerationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelWorldGenerationJobRequest || (CancelWorldGenerationJobRequest = {}));
export var CancelWorldGenerationJobResponse;
(function (CancelWorldGenerationJobResponse) {
    /**
     * @internal
     */
    CancelWorldGenerationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelWorldGenerationJobResponse || (CancelWorldGenerationJobResponse = {}));
export var Compute;
(function (Compute) {
    /**
     * @internal
     */
    Compute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Compute || (Compute = {}));
export var ConcurrentDeploymentException;
(function (ConcurrentDeploymentException) {
    /**
     * @internal
     */
    ConcurrentDeploymentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConcurrentDeploymentException || (ConcurrentDeploymentException = {}));
export var DeploymentLaunchConfig;
(function (DeploymentLaunchConfig) {
    /**
     * @internal
     */
    DeploymentLaunchConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeploymentLaunchConfig || (DeploymentLaunchConfig = {}));
export var DeploymentApplicationConfig;
(function (DeploymentApplicationConfig) {
    /**
     * @internal
     */
    DeploymentApplicationConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeploymentApplicationConfig || (DeploymentApplicationConfig = {}));
export var S3Object;
(function (S3Object) {
    /**
     * @internal
     */
    S3Object.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Object || (S3Object = {}));
export var DeploymentConfig;
(function (DeploymentConfig) {
    /**
     * @internal
     */
    DeploymentConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeploymentConfig || (DeploymentConfig = {}));
export var CreateDeploymentJobRequest;
(function (CreateDeploymentJobRequest) {
    /**
     * @internal
     */
    CreateDeploymentJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDeploymentJobRequest || (CreateDeploymentJobRequest = {}));
export var DeploymentJobErrorCode;
(function (DeploymentJobErrorCode) {
    DeploymentJobErrorCode["BadLambdaAssociated"] = "BadLambdaAssociated";
    DeploymentJobErrorCode["BadPermissionError"] = "BadPermissionError";
    DeploymentJobErrorCode["DeploymentFleetDoesNotExist"] = "DeploymentFleetDoesNotExist";
    DeploymentJobErrorCode["DownloadConditionFailed"] = "DownloadConditionFailed";
    DeploymentJobErrorCode["EnvironmentSetupError"] = "EnvironmentSetupError";
    DeploymentJobErrorCode["EtagMismatch"] = "EtagMismatch";
    DeploymentJobErrorCode["ExtractingBundleFailure"] = "ExtractingBundleFailure";
    DeploymentJobErrorCode["FailureThresholdBreached"] = "FailureThresholdBreached";
    DeploymentJobErrorCode["FleetDeploymentTimeout"] = "FleetDeploymentTimeout";
    DeploymentJobErrorCode["GreengrassDeploymentFailed"] = "GreengrassDeploymentFailed";
    DeploymentJobErrorCode["GreengrassGroupVersionDoesNotExist"] = "GreengrassGroupVersionDoesNotExist";
    DeploymentJobErrorCode["InternalServerError"] = "InternalServerError";
    DeploymentJobErrorCode["InvalidGreengrassGroup"] = "InvalidGreengrassGroup";
    DeploymentJobErrorCode["LambdaDeleted"] = "LambdaDeleted";
    DeploymentJobErrorCode["MissingRobotApplicationArchitecture"] = "MissingRobotApplicationArchitecture";
    DeploymentJobErrorCode["MissingRobotArchitecture"] = "MissingRobotArchitecture";
    DeploymentJobErrorCode["MissingRobotDeploymentResource"] = "MissingRobotDeploymentResource";
    DeploymentJobErrorCode["PostLaunchFileFailure"] = "PostLaunchFileFailure";
    DeploymentJobErrorCode["PreLaunchFileFailure"] = "PreLaunchFileFailure";
    DeploymentJobErrorCode["ResourceNotFound"] = "ResourceNotFound";
    DeploymentJobErrorCode["RobotAgentConnectionTimeout"] = "RobotAgentConnectionTimeout";
    DeploymentJobErrorCode["RobotApplicationDoesNotExist"] = "RobotApplicationDoesNotExist";
    DeploymentJobErrorCode["RobotDeploymentAborted"] = "RobotDeploymentAborted";
    DeploymentJobErrorCode["RobotDeploymentNoResponse"] = "RobotDeploymentNoResponse";
})(DeploymentJobErrorCode || (DeploymentJobErrorCode = {}));
export var DeploymentStatus;
(function (DeploymentStatus) {
    DeploymentStatus["Canceled"] = "Canceled";
    DeploymentStatus["Failed"] = "Failed";
    DeploymentStatus["InProgress"] = "InProgress";
    DeploymentStatus["Pending"] = "Pending";
    DeploymentStatus["Preparing"] = "Preparing";
    DeploymentStatus["Succeeded"] = "Succeeded";
})(DeploymentStatus || (DeploymentStatus = {}));
export var CreateDeploymentJobResponse;
(function (CreateDeploymentJobResponse) {
    /**
     * @internal
     */
    CreateDeploymentJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDeploymentJobResponse || (CreateDeploymentJobResponse = {}));
export var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    /**
     * @internal
     */
    IdempotentParameterMismatchException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdempotentParameterMismatchException || (IdempotentParameterMismatchException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var CreateFleetRequest;
(function (CreateFleetRequest) {
    /**
     * @internal
     */
    CreateFleetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFleetRequest || (CreateFleetRequest = {}));
export var CreateFleetResponse;
(function (CreateFleetResponse) {
    /**
     * @internal
     */
    CreateFleetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFleetResponse || (CreateFleetResponse = {}));
export var CreateRobotRequest;
(function (CreateRobotRequest) {
    /**
     * @internal
     */
    CreateRobotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRobotRequest || (CreateRobotRequest = {}));
export var CreateRobotResponse;
(function (CreateRobotResponse) {
    /**
     * @internal
     */
    CreateRobotResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRobotResponse || (CreateRobotResponse = {}));
export var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceAlreadyExistsException || (ResourceAlreadyExistsException = {}));
export var RobotSoftwareSuiteType;
(function (RobotSoftwareSuiteType) {
    RobotSoftwareSuiteType["ROS"] = "ROS";
    RobotSoftwareSuiteType["ROS2"] = "ROS2";
})(RobotSoftwareSuiteType || (RobotSoftwareSuiteType = {}));
export var RobotSoftwareSuiteVersionType;
(function (RobotSoftwareSuiteVersionType) {
    RobotSoftwareSuiteVersionType["Dashing"] = "Dashing";
    RobotSoftwareSuiteVersionType["Foxy"] = "Foxy";
    RobotSoftwareSuiteVersionType["Kinetic"] = "Kinetic";
    RobotSoftwareSuiteVersionType["Melodic"] = "Melodic";
})(RobotSoftwareSuiteVersionType || (RobotSoftwareSuiteVersionType = {}));
export var RobotSoftwareSuite;
(function (RobotSoftwareSuite) {
    /**
     * @internal
     */
    RobotSoftwareSuite.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RobotSoftwareSuite || (RobotSoftwareSuite = {}));
export var SourceConfig;
(function (SourceConfig) {
    /**
     * @internal
     */
    SourceConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceConfig || (SourceConfig = {}));
export var CreateRobotApplicationRequest;
(function (CreateRobotApplicationRequest) {
    /**
     * @internal
     */
    CreateRobotApplicationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRobotApplicationRequest || (CreateRobotApplicationRequest = {}));
export var Source;
(function (Source) {
    /**
     * @internal
     */
    Source.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Source || (Source = {}));
export var CreateRobotApplicationResponse;
(function (CreateRobotApplicationResponse) {
    /**
     * @internal
     */
    CreateRobotApplicationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRobotApplicationResponse || (CreateRobotApplicationResponse = {}));
export var CreateRobotApplicationVersionRequest;
(function (CreateRobotApplicationVersionRequest) {
    /**
     * @internal
     */
    CreateRobotApplicationVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRobotApplicationVersionRequest || (CreateRobotApplicationVersionRequest = {}));
export var CreateRobotApplicationVersionResponse;
(function (CreateRobotApplicationVersionResponse) {
    /**
     * @internal
     */
    CreateRobotApplicationVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRobotApplicationVersionResponse || (CreateRobotApplicationVersionResponse = {}));
export var RenderingEngineType;
(function (RenderingEngineType) {
    RenderingEngineType["OGRE"] = "OGRE";
})(RenderingEngineType || (RenderingEngineType = {}));
export var RenderingEngine;
(function (RenderingEngine) {
    /**
     * @internal
     */
    RenderingEngine.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RenderingEngine || (RenderingEngine = {}));
export var SimulationSoftwareSuiteType;
(function (SimulationSoftwareSuiteType) {
    SimulationSoftwareSuiteType["Gazebo"] = "Gazebo";
    SimulationSoftwareSuiteType["RosbagPlay"] = "RosbagPlay";
})(SimulationSoftwareSuiteType || (SimulationSoftwareSuiteType = {}));
export var SimulationSoftwareSuite;
(function (SimulationSoftwareSuite) {
    /**
     * @internal
     */
    SimulationSoftwareSuite.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimulationSoftwareSuite || (SimulationSoftwareSuite = {}));
export var CreateSimulationApplicationRequest;
(function (CreateSimulationApplicationRequest) {
    /**
     * @internal
     */
    CreateSimulationApplicationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSimulationApplicationRequest || (CreateSimulationApplicationRequest = {}));
export var CreateSimulationApplicationResponse;
(function (CreateSimulationApplicationResponse) {
    /**
     * @internal
     */
    CreateSimulationApplicationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSimulationApplicationResponse || (CreateSimulationApplicationResponse = {}));
export var CreateSimulationApplicationVersionRequest;
(function (CreateSimulationApplicationVersionRequest) {
    /**
     * @internal
     */
    CreateSimulationApplicationVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSimulationApplicationVersionRequest || (CreateSimulationApplicationVersionRequest = {}));
export var CreateSimulationApplicationVersionResponse;
(function (CreateSimulationApplicationVersionResponse) {
    /**
     * @internal
     */
    CreateSimulationApplicationVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSimulationApplicationVersionResponse || (CreateSimulationApplicationVersionResponse = {}));
export var DataSourceConfig;
(function (DataSourceConfig) {
    /**
     * @internal
     */
    DataSourceConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataSourceConfig || (DataSourceConfig = {}));
export var VPCConfig;
(function (VPCConfig) {
    /**
     * @internal
     */
    VPCConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VPCConfig || (VPCConfig = {}));
export var CreateSimulationJobRequest;
(function (CreateSimulationJobRequest) {
    /**
     * @internal
     */
    CreateSimulationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSimulationJobRequest || (CreateSimulationJobRequest = {}));
export var CreateSimulationJobResponse;
(function (CreateSimulationJobResponse) {
    /**
     * @internal
     */
    CreateSimulationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSimulationJobResponse || (CreateSimulationJobResponse = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var SimulationJobRequest;
(function (SimulationJobRequest) {
    /**
     * @internal
     */
    SimulationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimulationJobRequest || (SimulationJobRequest = {}));
export var CreateWorldExportJobRequest;
(function (CreateWorldExportJobRequest) {
    /**
     * @internal
     */
    CreateWorldExportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWorldExportJobRequest || (CreateWorldExportJobRequest = {}));
export var WorldExportJobErrorCode;
(function (WorldExportJobErrorCode) {
    WorldExportJobErrorCode["AccessDenied"] = "AccessDenied";
    WorldExportJobErrorCode["InternalServiceError"] = "InternalServiceError";
    WorldExportJobErrorCode["InvalidInput"] = "InvalidInput";
    WorldExportJobErrorCode["LimitExceeded"] = "LimitExceeded";
    WorldExportJobErrorCode["RequestThrottled"] = "RequestThrottled";
    WorldExportJobErrorCode["ResourceNotFound"] = "ResourceNotFound";
})(WorldExportJobErrorCode || (WorldExportJobErrorCode = {}));
export var WorldExportJobStatus;
(function (WorldExportJobStatus) {
    WorldExportJobStatus["Canceled"] = "Canceled";
    WorldExportJobStatus["Canceling"] = "Canceling";
    WorldExportJobStatus["Completed"] = "Completed";
    WorldExportJobStatus["Failed"] = "Failed";
    WorldExportJobStatus["Pending"] = "Pending";
    WorldExportJobStatus["Running"] = "Running";
})(WorldExportJobStatus || (WorldExportJobStatus = {}));
export var CreateWorldExportJobResponse;
(function (CreateWorldExportJobResponse) {
    /**
     * @internal
     */
    CreateWorldExportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWorldExportJobResponse || (CreateWorldExportJobResponse = {}));
export var WorldCount;
(function (WorldCount) {
    /**
     * @internal
     */
    WorldCount.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WorldCount || (WorldCount = {}));
export var CreateWorldGenerationJobRequest;
(function (CreateWorldGenerationJobRequest) {
    /**
     * @internal
     */
    CreateWorldGenerationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWorldGenerationJobRequest || (CreateWorldGenerationJobRequest = {}));
export var WorldGenerationJobErrorCode;
(function (WorldGenerationJobErrorCode) {
    WorldGenerationJobErrorCode["AllWorldGenerationFailed"] = "AllWorldGenerationFailed";
    WorldGenerationJobErrorCode["InternalServiceError"] = "InternalServiceError";
    WorldGenerationJobErrorCode["InvalidInput"] = "InvalidInput";
    WorldGenerationJobErrorCode["LimitExceeded"] = "LimitExceeded";
    WorldGenerationJobErrorCode["RequestThrottled"] = "RequestThrottled";
    WorldGenerationJobErrorCode["ResourceNotFound"] = "ResourceNotFound";
})(WorldGenerationJobErrorCode || (WorldGenerationJobErrorCode = {}));
export var WorldGenerationJobStatus;
(function (WorldGenerationJobStatus) {
    WorldGenerationJobStatus["Canceled"] = "Canceled";
    WorldGenerationJobStatus["Canceling"] = "Canceling";
    WorldGenerationJobStatus["Completed"] = "Completed";
    WorldGenerationJobStatus["Failed"] = "Failed";
    WorldGenerationJobStatus["PartialFailed"] = "PartialFailed";
    WorldGenerationJobStatus["Pending"] = "Pending";
    WorldGenerationJobStatus["Running"] = "Running";
})(WorldGenerationJobStatus || (WorldGenerationJobStatus = {}));
export var CreateWorldGenerationJobResponse;
(function (CreateWorldGenerationJobResponse) {
    /**
     * @internal
     */
    CreateWorldGenerationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWorldGenerationJobResponse || (CreateWorldGenerationJobResponse = {}));
export var TemplateLocation;
(function (TemplateLocation) {
    /**
     * @internal
     */
    TemplateLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TemplateLocation || (TemplateLocation = {}));
export var CreateWorldTemplateRequest;
(function (CreateWorldTemplateRequest) {
    /**
     * @internal
     */
    CreateWorldTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWorldTemplateRequest || (CreateWorldTemplateRequest = {}));
export var CreateWorldTemplateResponse;
(function (CreateWorldTemplateResponse) {
    /**
     * @internal
     */
    CreateWorldTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWorldTemplateResponse || (CreateWorldTemplateResponse = {}));
export var DeleteFleetRequest;
(function (DeleteFleetRequest) {
    /**
     * @internal
     */
    DeleteFleetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFleetRequest || (DeleteFleetRequest = {}));
export var DeleteFleetResponse;
(function (DeleteFleetResponse) {
    /**
     * @internal
     */
    DeleteFleetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFleetResponse || (DeleteFleetResponse = {}));
export var DeleteRobotRequest;
(function (DeleteRobotRequest) {
    /**
     * @internal
     */
    DeleteRobotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRobotRequest || (DeleteRobotRequest = {}));
export var DeleteRobotResponse;
(function (DeleteRobotResponse) {
    /**
     * @internal
     */
    DeleteRobotResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRobotResponse || (DeleteRobotResponse = {}));
export var DeleteRobotApplicationRequest;
(function (DeleteRobotApplicationRequest) {
    /**
     * @internal
     */
    DeleteRobotApplicationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRobotApplicationRequest || (DeleteRobotApplicationRequest = {}));
export var DeleteRobotApplicationResponse;
(function (DeleteRobotApplicationResponse) {
    /**
     * @internal
     */
    DeleteRobotApplicationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRobotApplicationResponse || (DeleteRobotApplicationResponse = {}));
export var DeleteSimulationApplicationRequest;
(function (DeleteSimulationApplicationRequest) {
    /**
     * @internal
     */
    DeleteSimulationApplicationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSimulationApplicationRequest || (DeleteSimulationApplicationRequest = {}));
export var DeleteSimulationApplicationResponse;
(function (DeleteSimulationApplicationResponse) {
    /**
     * @internal
     */
    DeleteSimulationApplicationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSimulationApplicationResponse || (DeleteSimulationApplicationResponse = {}));
export var DeleteWorldTemplateRequest;
(function (DeleteWorldTemplateRequest) {
    /**
     * @internal
     */
    DeleteWorldTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWorldTemplateRequest || (DeleteWorldTemplateRequest = {}));
export var DeleteWorldTemplateResponse;
(function (DeleteWorldTemplateResponse) {
    /**
     * @internal
     */
    DeleteWorldTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWorldTemplateResponse || (DeleteWorldTemplateResponse = {}));
export var DeploymentJob;
(function (DeploymentJob) {
    /**
     * @internal
     */
    DeploymentJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeploymentJob || (DeploymentJob = {}));
export var DeregisterRobotRequest;
(function (DeregisterRobotRequest) {
    /**
     * @internal
     */
    DeregisterRobotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterRobotRequest || (DeregisterRobotRequest = {}));
export var DeregisterRobotResponse;
(function (DeregisterRobotResponse) {
    /**
     * @internal
     */
    DeregisterRobotResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterRobotResponse || (DeregisterRobotResponse = {}));
export var DescribeDeploymentJobRequest;
(function (DescribeDeploymentJobRequest) {
    /**
     * @internal
     */
    DescribeDeploymentJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDeploymentJobRequest || (DescribeDeploymentJobRequest = {}));
export var RobotDeploymentStep;
(function (RobotDeploymentStep) {
    RobotDeploymentStep["DownloadingExtractingStep"] = "DownloadingExtracting";
    RobotDeploymentStep["ExecutingDownloadCondition"] = "ExecutingDownloadCondition";
    RobotDeploymentStep["FinishedStep"] = "Finished";
    RobotDeploymentStep["LaunchingStep"] = "Launching";
    RobotDeploymentStep["PostLaunchStep"] = "ExecutingPostLaunch";
    RobotDeploymentStep["PreLaunchStep"] = "ExecutingPreLaunch";
    RobotDeploymentStep["ValidatingStep"] = "Validating";
})(RobotDeploymentStep || (RobotDeploymentStep = {}));
export var ProgressDetail;
(function (ProgressDetail) {
    /**
     * @internal
     */
    ProgressDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProgressDetail || (ProgressDetail = {}));
export var RobotStatus;
(function (RobotStatus) {
    RobotStatus["Available"] = "Available";
    RobotStatus["Deploying"] = "Deploying";
    RobotStatus["Failed"] = "Failed";
    RobotStatus["InSync"] = "InSync";
    RobotStatus["NoResponse"] = "NoResponse";
    RobotStatus["PendingNewDeployment"] = "PendingNewDeployment";
    RobotStatus["Registered"] = "Registered";
})(RobotStatus || (RobotStatus = {}));
export var RobotDeployment;
(function (RobotDeployment) {
    /**
     * @internal
     */
    RobotDeployment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RobotDeployment || (RobotDeployment = {}));
export var DescribeDeploymentJobResponse;
(function (DescribeDeploymentJobResponse) {
    /**
     * @internal
     */
    DescribeDeploymentJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDeploymentJobResponse || (DescribeDeploymentJobResponse = {}));
export var DescribeFleetRequest;
(function (DescribeFleetRequest) {
    /**
     * @internal
     */
    DescribeFleetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetRequest || (DescribeFleetRequest = {}));
export var Robot;
(function (Robot) {
    /**
     * @internal
     */
    Robot.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Robot || (Robot = {}));
export var DescribeFleetResponse;
(function (DescribeFleetResponse) {
    /**
     * @internal
     */
    DescribeFleetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeFleetResponse || (DescribeFleetResponse = {}));
export var DescribeRobotRequest;
(function (DescribeRobotRequest) {
    /**
     * @internal
     */
    DescribeRobotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRobotRequest || (DescribeRobotRequest = {}));
export var DescribeRobotResponse;
(function (DescribeRobotResponse) {
    /**
     * @internal
     */
    DescribeRobotResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRobotResponse || (DescribeRobotResponse = {}));
export var DescribeRobotApplicationRequest;
(function (DescribeRobotApplicationRequest) {
    /**
     * @internal
     */
    DescribeRobotApplicationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRobotApplicationRequest || (DescribeRobotApplicationRequest = {}));
export var DescribeRobotApplicationResponse;
(function (DescribeRobotApplicationResponse) {
    /**
     * @internal
     */
    DescribeRobotApplicationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRobotApplicationResponse || (DescribeRobotApplicationResponse = {}));
export var DescribeSimulationApplicationRequest;
(function (DescribeSimulationApplicationRequest) {
    /**
     * @internal
     */
    DescribeSimulationApplicationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSimulationApplicationRequest || (DescribeSimulationApplicationRequest = {}));
export var DescribeSimulationApplicationResponse;
(function (DescribeSimulationApplicationResponse) {
    /**
     * @internal
     */
    DescribeSimulationApplicationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSimulationApplicationResponse || (DescribeSimulationApplicationResponse = {}));
export var DescribeSimulationJobRequest;
(function (DescribeSimulationJobRequest) {
    /**
     * @internal
     */
    DescribeSimulationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSimulationJobRequest || (DescribeSimulationJobRequest = {}));
export var DescribeSimulationJobResponse;
(function (DescribeSimulationJobResponse) {
    /**
     * @internal
     */
    DescribeSimulationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSimulationJobResponse || (DescribeSimulationJobResponse = {}));
export var DescribeSimulationJobBatchRequest;
(function (DescribeSimulationJobBatchRequest) {
    /**
     * @internal
     */
    DescribeSimulationJobBatchRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSimulationJobBatchRequest || (DescribeSimulationJobBatchRequest = {}));
export var SimulationJobSummary;
(function (SimulationJobSummary) {
    /**
     * @internal
     */
    SimulationJobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimulationJobSummary || (SimulationJobSummary = {}));
export var FailedCreateSimulationJobRequest;
(function (FailedCreateSimulationJobRequest) {
    /**
     * @internal
     */
    FailedCreateSimulationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FailedCreateSimulationJobRequest || (FailedCreateSimulationJobRequest = {}));
export var SimulationJobBatchErrorCode;
(function (SimulationJobBatchErrorCode) {
    SimulationJobBatchErrorCode["InternalServiceError"] = "InternalServiceError";
})(SimulationJobBatchErrorCode || (SimulationJobBatchErrorCode = {}));
export var SimulationJobBatchStatus;
(function (SimulationJobBatchStatus) {
    SimulationJobBatchStatus["Canceled"] = "Canceled";
    SimulationJobBatchStatus["Canceling"] = "Canceling";
    SimulationJobBatchStatus["Completed"] = "Completed";
    SimulationJobBatchStatus["Completing"] = "Completing";
    SimulationJobBatchStatus["Failed"] = "Failed";
    SimulationJobBatchStatus["InProgress"] = "InProgress";
    SimulationJobBatchStatus["Pending"] = "Pending";
    SimulationJobBatchStatus["TimedOut"] = "TimedOut";
    SimulationJobBatchStatus["TimingOut"] = "TimingOut";
})(SimulationJobBatchStatus || (SimulationJobBatchStatus = {}));
export var DescribeSimulationJobBatchResponse;
(function (DescribeSimulationJobBatchResponse) {
    /**
     * @internal
     */
    DescribeSimulationJobBatchResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSimulationJobBatchResponse || (DescribeSimulationJobBatchResponse = {}));
export var DescribeWorldRequest;
(function (DescribeWorldRequest) {
    /**
     * @internal
     */
    DescribeWorldRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeWorldRequest || (DescribeWorldRequest = {}));
export var DescribeWorldResponse;
(function (DescribeWorldResponse) {
    /**
     * @internal
     */
    DescribeWorldResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeWorldResponse || (DescribeWorldResponse = {}));
export var DescribeWorldExportJobRequest;
(function (DescribeWorldExportJobRequest) {
    /**
     * @internal
     */
    DescribeWorldExportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeWorldExportJobRequest || (DescribeWorldExportJobRequest = {}));
export var DescribeWorldExportJobResponse;
(function (DescribeWorldExportJobResponse) {
    /**
     * @internal
     */
    DescribeWorldExportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeWorldExportJobResponse || (DescribeWorldExportJobResponse = {}));
export var DescribeWorldGenerationJobRequest;
(function (DescribeWorldGenerationJobRequest) {
    /**
     * @internal
     */
    DescribeWorldGenerationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeWorldGenerationJobRequest || (DescribeWorldGenerationJobRequest = {}));
export var WorldFailure;
(function (WorldFailure) {
    /**
     * @internal
     */
    WorldFailure.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WorldFailure || (WorldFailure = {}));
export var FailureSummary;
(function (FailureSummary) {
    /**
     * @internal
     */
    FailureSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FailureSummary || (FailureSummary = {}));
export var FinishedWorldsSummary;
(function (FinishedWorldsSummary) {
    /**
     * @internal
     */
    FinishedWorldsSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FinishedWorldsSummary || (FinishedWorldsSummary = {}));
export var DescribeWorldGenerationJobResponse;
(function (DescribeWorldGenerationJobResponse) {
    /**
     * @internal
     */
    DescribeWorldGenerationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeWorldGenerationJobResponse || (DescribeWorldGenerationJobResponse = {}));
export var DescribeWorldTemplateRequest;
(function (DescribeWorldTemplateRequest) {
    /**
     * @internal
     */
    DescribeWorldTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeWorldTemplateRequest || (DescribeWorldTemplateRequest = {}));
export var DescribeWorldTemplateResponse;
(function (DescribeWorldTemplateResponse) {
    /**
     * @internal
     */
    DescribeWorldTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeWorldTemplateResponse || (DescribeWorldTemplateResponse = {}));
export var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Filter || (Filter = {}));
export var Fleet;
(function (Fleet) {
    /**
     * @internal
     */
    Fleet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Fleet || (Fleet = {}));
export var GetWorldTemplateBodyRequest;
(function (GetWorldTemplateBodyRequest) {
    /**
     * @internal
     */
    GetWorldTemplateBodyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWorldTemplateBodyRequest || (GetWorldTemplateBodyRequest = {}));
export var GetWorldTemplateBodyResponse;
(function (GetWorldTemplateBodyResponse) {
    /**
     * @internal
     */
    GetWorldTemplateBodyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWorldTemplateBodyResponse || (GetWorldTemplateBodyResponse = {}));
export var ListDeploymentJobsRequest;
(function (ListDeploymentJobsRequest) {
    /**
     * @internal
     */
    ListDeploymentJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDeploymentJobsRequest || (ListDeploymentJobsRequest = {}));
export var ListDeploymentJobsResponse;
(function (ListDeploymentJobsResponse) {
    /**
     * @internal
     */
    ListDeploymentJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDeploymentJobsResponse || (ListDeploymentJobsResponse = {}));
export var ListFleetsRequest;
(function (ListFleetsRequest) {
    /**
     * @internal
     */
    ListFleetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFleetsRequest || (ListFleetsRequest = {}));
export var ListFleetsResponse;
(function (ListFleetsResponse) {
    /**
     * @internal
     */
    ListFleetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFleetsResponse || (ListFleetsResponse = {}));
export var ListRobotApplicationsRequest;
(function (ListRobotApplicationsRequest) {
    /**
     * @internal
     */
    ListRobotApplicationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRobotApplicationsRequest || (ListRobotApplicationsRequest = {}));
export var RobotApplicationSummary;
(function (RobotApplicationSummary) {
    /**
     * @internal
     */
    RobotApplicationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RobotApplicationSummary || (RobotApplicationSummary = {}));
export var ListRobotApplicationsResponse;
(function (ListRobotApplicationsResponse) {
    /**
     * @internal
     */
    ListRobotApplicationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRobotApplicationsResponse || (ListRobotApplicationsResponse = {}));
export var ListRobotsRequest;
(function (ListRobotsRequest) {
    /**
     * @internal
     */
    ListRobotsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRobotsRequest || (ListRobotsRequest = {}));
export var ListRobotsResponse;
(function (ListRobotsResponse) {
    /**
     * @internal
     */
    ListRobotsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRobotsResponse || (ListRobotsResponse = {}));
export var ListSimulationApplicationsRequest;
(function (ListSimulationApplicationsRequest) {
    /**
     * @internal
     */
    ListSimulationApplicationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSimulationApplicationsRequest || (ListSimulationApplicationsRequest = {}));
export var SimulationApplicationSummary;
(function (SimulationApplicationSummary) {
    /**
     * @internal
     */
    SimulationApplicationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimulationApplicationSummary || (SimulationApplicationSummary = {}));
export var ListSimulationApplicationsResponse;
(function (ListSimulationApplicationsResponse) {
    /**
     * @internal
     */
    ListSimulationApplicationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSimulationApplicationsResponse || (ListSimulationApplicationsResponse = {}));
export var ListSimulationJobBatchesRequest;
(function (ListSimulationJobBatchesRequest) {
    /**
     * @internal
     */
    ListSimulationJobBatchesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSimulationJobBatchesRequest || (ListSimulationJobBatchesRequest = {}));
export var SimulationJobBatchSummary;
(function (SimulationJobBatchSummary) {
    /**
     * @internal
     */
    SimulationJobBatchSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimulationJobBatchSummary || (SimulationJobBatchSummary = {}));
export var ListSimulationJobBatchesResponse;
(function (ListSimulationJobBatchesResponse) {
    /**
     * @internal
     */
    ListSimulationJobBatchesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSimulationJobBatchesResponse || (ListSimulationJobBatchesResponse = {}));
export var ListSimulationJobsRequest;
(function (ListSimulationJobsRequest) {
    /**
     * @internal
     */
    ListSimulationJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSimulationJobsRequest || (ListSimulationJobsRequest = {}));
export var ListSimulationJobsResponse;
(function (ListSimulationJobsResponse) {
    /**
     * @internal
     */
    ListSimulationJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSimulationJobsResponse || (ListSimulationJobsResponse = {}));
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
export var ListWorldExportJobsRequest;
(function (ListWorldExportJobsRequest) {
    /**
     * @internal
     */
    ListWorldExportJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWorldExportJobsRequest || (ListWorldExportJobsRequest = {}));
export var WorldExportJobSummary;
(function (WorldExportJobSummary) {
    /**
     * @internal
     */
    WorldExportJobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WorldExportJobSummary || (WorldExportJobSummary = {}));
export var ListWorldExportJobsResponse;
(function (ListWorldExportJobsResponse) {
    /**
     * @internal
     */
    ListWorldExportJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWorldExportJobsResponse || (ListWorldExportJobsResponse = {}));
export var ListWorldGenerationJobsRequest;
(function (ListWorldGenerationJobsRequest) {
    /**
     * @internal
     */
    ListWorldGenerationJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWorldGenerationJobsRequest || (ListWorldGenerationJobsRequest = {}));
export var WorldGenerationJobSummary;
(function (WorldGenerationJobSummary) {
    /**
     * @internal
     */
    WorldGenerationJobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WorldGenerationJobSummary || (WorldGenerationJobSummary = {}));
export var ListWorldGenerationJobsResponse;
(function (ListWorldGenerationJobsResponse) {
    /**
     * @internal
     */
    ListWorldGenerationJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWorldGenerationJobsResponse || (ListWorldGenerationJobsResponse = {}));
export var ListWorldsRequest;
(function (ListWorldsRequest) {
    /**
     * @internal
     */
    ListWorldsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWorldsRequest || (ListWorldsRequest = {}));
export var WorldSummary;
(function (WorldSummary) {
    /**
     * @internal
     */
    WorldSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WorldSummary || (WorldSummary = {}));
export var ListWorldsResponse;
(function (ListWorldsResponse) {
    /**
     * @internal
     */
    ListWorldsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWorldsResponse || (ListWorldsResponse = {}));
export var ListWorldTemplatesRequest;
(function (ListWorldTemplatesRequest) {
    /**
     * @internal
     */
    ListWorldTemplatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWorldTemplatesRequest || (ListWorldTemplatesRequest = {}));
export var TemplateSummary;
(function (TemplateSummary) {
    /**
     * @internal
     */
    TemplateSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TemplateSummary || (TemplateSummary = {}));
export var ListWorldTemplatesResponse;
(function (ListWorldTemplatesResponse) {
    /**
     * @internal
     */
    ListWorldTemplatesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWorldTemplatesResponse || (ListWorldTemplatesResponse = {}));
export var RegisterRobotRequest;
(function (RegisterRobotRequest) {
    /**
     * @internal
     */
    RegisterRobotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterRobotRequest || (RegisterRobotRequest = {}));
export var RegisterRobotResponse;
(function (RegisterRobotResponse) {
    /**
     * @internal
     */
    RegisterRobotResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterRobotResponse || (RegisterRobotResponse = {}));
export var RestartSimulationJobRequest;
(function (RestartSimulationJobRequest) {
    /**
     * @internal
     */
    RestartSimulationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RestartSimulationJobRequest || (RestartSimulationJobRequest = {}));
export var RestartSimulationJobResponse;
(function (RestartSimulationJobResponse) {
    /**
     * @internal
     */
    RestartSimulationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RestartSimulationJobResponse || (RestartSimulationJobResponse = {}));
export var StartSimulationJobBatchRequest;
(function (StartSimulationJobBatchRequest) {
    /**
     * @internal
     */
    StartSimulationJobBatchRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartSimulationJobBatchRequest || (StartSimulationJobBatchRequest = {}));
export var StartSimulationJobBatchResponse;
(function (StartSimulationJobBatchResponse) {
    /**
     * @internal
     */
    StartSimulationJobBatchResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartSimulationJobBatchResponse || (StartSimulationJobBatchResponse = {}));
export var SyncDeploymentJobRequest;
(function (SyncDeploymentJobRequest) {
    /**
     * @internal
     */
    SyncDeploymentJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SyncDeploymentJobRequest || (SyncDeploymentJobRequest = {}));
export var SyncDeploymentJobResponse;
(function (SyncDeploymentJobResponse) {
    /**
     * @internal
     */
    SyncDeploymentJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SyncDeploymentJobResponse || (SyncDeploymentJobResponse = {}));
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
export var UpdateRobotApplicationRequest;
(function (UpdateRobotApplicationRequest) {
    /**
     * @internal
     */
    UpdateRobotApplicationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRobotApplicationRequest || (UpdateRobotApplicationRequest = {}));
export var UpdateRobotApplicationResponse;
(function (UpdateRobotApplicationResponse) {
    /**
     * @internal
     */
    UpdateRobotApplicationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRobotApplicationResponse || (UpdateRobotApplicationResponse = {}));
export var UpdateSimulationApplicationRequest;
(function (UpdateSimulationApplicationRequest) {
    /**
     * @internal
     */
    UpdateSimulationApplicationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSimulationApplicationRequest || (UpdateSimulationApplicationRequest = {}));
export var UpdateSimulationApplicationResponse;
(function (UpdateSimulationApplicationResponse) {
    /**
     * @internal
     */
    UpdateSimulationApplicationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSimulationApplicationResponse || (UpdateSimulationApplicationResponse = {}));
export var UpdateWorldTemplateRequest;
(function (UpdateWorldTemplateRequest) {
    /**
     * @internal
     */
    UpdateWorldTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWorldTemplateRequest || (UpdateWorldTemplateRequest = {}));
export var UpdateWorldTemplateResponse;
(function (UpdateWorldTemplateResponse) {
    /**
     * @internal
     */
    UpdateWorldTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWorldTemplateResponse || (UpdateWorldTemplateResponse = {}));
//# sourceMappingURL=models_0.js.map