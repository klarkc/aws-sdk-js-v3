"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentStatus = exports.DeploymentJobErrorCode = exports.CreateDeploymentJobRequest = exports.DeploymentConfig = exports.S3Object = exports.DeploymentApplicationConfig = exports.DeploymentLaunchConfig = exports.ConcurrentDeploymentException = exports.Compute = exports.CancelWorldGenerationJobResponse = exports.CancelWorldGenerationJobRequest = exports.CancelWorldExportJobResponse = exports.CancelWorldExportJobRequest = exports.CancelSimulationJobBatchResponse = exports.CancelSimulationJobBatchRequest = exports.CancelSimulationJobResponse = exports.CancelSimulationJobRequest = exports.CancelDeploymentJobResponse = exports.CancelDeploymentJobRequest = exports.BatchPolicy = exports.ResourceNotFoundException = exports.BatchDescribeSimulationJobResponse = exports.SimulationJob = exports.VPCConfigResponse = exports.SimulationJobStatus = exports.SimulationApplicationConfig = exports.WorldConfig = exports.RobotApplicationConfig = exports.UploadConfiguration = exports.UploadBehavior = exports.Tool = exports.ExitBehavior = exports.LaunchConfig = exports.PortForwardingConfig = exports.PortMapping = exports.OutputLocation = exports.NetworkInterface = exports.LoggingConfig = exports.SimulationJobErrorCode = exports.FailureBehavior = exports.DataSource = exports.S3KeyOutput = exports.ComputeResponse = exports.BatchDescribeSimulationJobRequest = exports.ThrottlingException = exports.InvalidParameterException = exports.InternalServerException = exports.BatchDeleteWorldsResponse = exports.BatchDeleteWorldsRequest = exports.Architecture = void 0;
exports.DeleteSimulationApplicationRequest = exports.DeleteRobotApplicationResponse = exports.DeleteRobotApplicationRequest = exports.DeleteRobotResponse = exports.DeleteRobotRequest = exports.DeleteFleetResponse = exports.DeleteFleetRequest = exports.CreateWorldTemplateResponse = exports.CreateWorldTemplateRequest = exports.TemplateLocation = exports.CreateWorldGenerationJobResponse = exports.WorldGenerationJobStatus = exports.WorldGenerationJobErrorCode = exports.CreateWorldGenerationJobRequest = exports.WorldCount = exports.CreateWorldExportJobResponse = exports.WorldExportJobStatus = exports.WorldExportJobErrorCode = exports.CreateWorldExportJobRequest = exports.SimulationJobRequest = exports.ServiceUnavailableException = exports.CreateSimulationJobResponse = exports.CreateSimulationJobRequest = exports.VPCConfig = exports.DataSourceConfig = exports.CreateSimulationApplicationVersionResponse = exports.CreateSimulationApplicationVersionRequest = exports.CreateSimulationApplicationResponse = exports.CreateSimulationApplicationRequest = exports.SimulationSoftwareSuite = exports.SimulationSoftwareSuiteType = exports.RenderingEngine = exports.RenderingEngineType = exports.CreateRobotApplicationVersionResponse = exports.CreateRobotApplicationVersionRequest = exports.CreateRobotApplicationResponse = exports.Source = exports.CreateRobotApplicationRequest = exports.SourceConfig = exports.RobotSoftwareSuite = exports.RobotSoftwareSuiteVersionType = exports.RobotSoftwareSuiteType = exports.ResourceAlreadyExistsException = exports.CreateRobotResponse = exports.CreateRobotRequest = exports.CreateFleetResponse = exports.CreateFleetRequest = exports.LimitExceededException = exports.IdempotentParameterMismatchException = exports.CreateDeploymentJobResponse = void 0;
exports.RobotApplicationSummary = exports.ListRobotApplicationsRequest = exports.ListFleetsResponse = exports.ListFleetsRequest = exports.ListDeploymentJobsResponse = exports.ListDeploymentJobsRequest = exports.GetWorldTemplateBodyResponse = exports.GetWorldTemplateBodyRequest = exports.Fleet = exports.Filter = exports.DescribeWorldTemplateResponse = exports.DescribeWorldTemplateRequest = exports.DescribeWorldGenerationJobResponse = exports.FinishedWorldsSummary = exports.FailureSummary = exports.WorldFailure = exports.DescribeWorldGenerationJobRequest = exports.DescribeWorldExportJobResponse = exports.DescribeWorldExportJobRequest = exports.DescribeWorldResponse = exports.DescribeWorldRequest = exports.DescribeSimulationJobBatchResponse = exports.SimulationJobBatchStatus = exports.SimulationJobBatchErrorCode = exports.FailedCreateSimulationJobRequest = exports.SimulationJobSummary = exports.DescribeSimulationJobBatchRequest = exports.DescribeSimulationJobResponse = exports.DescribeSimulationJobRequest = exports.DescribeSimulationApplicationResponse = exports.DescribeSimulationApplicationRequest = exports.DescribeRobotApplicationResponse = exports.DescribeRobotApplicationRequest = exports.DescribeRobotResponse = exports.DescribeRobotRequest = exports.DescribeFleetResponse = exports.Robot = exports.DescribeFleetRequest = exports.DescribeDeploymentJobResponse = exports.RobotDeployment = exports.RobotStatus = exports.ProgressDetail = exports.RobotDeploymentStep = exports.DescribeDeploymentJobRequest = exports.DeregisterRobotResponse = exports.DeregisterRobotRequest = exports.DeploymentJob = exports.DeleteWorldTemplateResponse = exports.DeleteWorldTemplateRequest = exports.DeleteSimulationApplicationResponse = void 0;
exports.UpdateWorldTemplateResponse = exports.UpdateWorldTemplateRequest = exports.UpdateSimulationApplicationResponse = exports.UpdateSimulationApplicationRequest = exports.UpdateRobotApplicationResponse = exports.UpdateRobotApplicationRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.SyncDeploymentJobResponse = exports.SyncDeploymentJobRequest = exports.StartSimulationJobBatchResponse = exports.StartSimulationJobBatchRequest = exports.RestartSimulationJobResponse = exports.RestartSimulationJobRequest = exports.RegisterRobotResponse = exports.RegisterRobotRequest = exports.ListWorldTemplatesResponse = exports.TemplateSummary = exports.ListWorldTemplatesRequest = exports.ListWorldsResponse = exports.WorldSummary = exports.ListWorldsRequest = exports.ListWorldGenerationJobsResponse = exports.WorldGenerationJobSummary = exports.ListWorldGenerationJobsRequest = exports.ListWorldExportJobsResponse = exports.WorldExportJobSummary = exports.ListWorldExportJobsRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListSimulationJobsResponse = exports.ListSimulationJobsRequest = exports.ListSimulationJobBatchesResponse = exports.SimulationJobBatchSummary = exports.ListSimulationJobBatchesRequest = exports.ListSimulationApplicationsResponse = exports.SimulationApplicationSummary = exports.ListSimulationApplicationsRequest = exports.ListRobotsResponse = exports.ListRobotsRequest = exports.ListRobotApplicationsResponse = void 0;
var Architecture;
(function (Architecture) {
    Architecture["ARM64"] = "ARM64";
    Architecture["ARMHF"] = "ARMHF";
    Architecture["X86_64"] = "X86_64";
})(Architecture = exports.Architecture || (exports.Architecture = {}));
var BatchDeleteWorldsRequest;
(function (BatchDeleteWorldsRequest) {
    /**
     * @internal
     */
    BatchDeleteWorldsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteWorldsRequest = exports.BatchDeleteWorldsRequest || (exports.BatchDeleteWorldsRequest = {}));
var BatchDeleteWorldsResponse;
(function (BatchDeleteWorldsResponse) {
    /**
     * @internal
     */
    BatchDeleteWorldsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteWorldsResponse = exports.BatchDeleteWorldsResponse || (exports.BatchDeleteWorldsResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var BatchDescribeSimulationJobRequest;
(function (BatchDescribeSimulationJobRequest) {
    /**
     * @internal
     */
    BatchDescribeSimulationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDescribeSimulationJobRequest = exports.BatchDescribeSimulationJobRequest || (exports.BatchDescribeSimulationJobRequest = {}));
var ComputeResponse;
(function (ComputeResponse) {
    /**
     * @internal
     */
    ComputeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComputeResponse = exports.ComputeResponse || (exports.ComputeResponse = {}));
var S3KeyOutput;
(function (S3KeyOutput) {
    /**
     * @internal
     */
    S3KeyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3KeyOutput = exports.S3KeyOutput || (exports.S3KeyOutput = {}));
var DataSource;
(function (DataSource) {
    /**
     * @internal
     */
    DataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSource = exports.DataSource || (exports.DataSource = {}));
var FailureBehavior;
(function (FailureBehavior) {
    FailureBehavior["Continue"] = "Continue";
    FailureBehavior["Fail"] = "Fail";
})(FailureBehavior = exports.FailureBehavior || (exports.FailureBehavior = {}));
var SimulationJobErrorCode;
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
})(SimulationJobErrorCode = exports.SimulationJobErrorCode || (exports.SimulationJobErrorCode = {}));
var LoggingConfig;
(function (LoggingConfig) {
    /**
     * @internal
     */
    LoggingConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoggingConfig = exports.LoggingConfig || (exports.LoggingConfig = {}));
var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterface = exports.NetworkInterface || (exports.NetworkInterface = {}));
var OutputLocation;
(function (OutputLocation) {
    /**
     * @internal
     */
    OutputLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputLocation = exports.OutputLocation || (exports.OutputLocation = {}));
var PortMapping;
(function (PortMapping) {
    /**
     * @internal
     */
    PortMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortMapping = exports.PortMapping || (exports.PortMapping = {}));
var PortForwardingConfig;
(function (PortForwardingConfig) {
    /**
     * @internal
     */
    PortForwardingConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PortForwardingConfig = exports.PortForwardingConfig || (exports.PortForwardingConfig = {}));
var LaunchConfig;
(function (LaunchConfig) {
    /**
     * @internal
     */
    LaunchConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchConfig = exports.LaunchConfig || (exports.LaunchConfig = {}));
var ExitBehavior;
(function (ExitBehavior) {
    ExitBehavior["FAIL"] = "FAIL";
    ExitBehavior["RESTART"] = "RESTART";
})(ExitBehavior = exports.ExitBehavior || (exports.ExitBehavior = {}));
var Tool;
(function (Tool) {
    /**
     * @internal
     */
    Tool.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tool = exports.Tool || (exports.Tool = {}));
var UploadBehavior;
(function (UploadBehavior) {
    UploadBehavior["UPLOAD_ON_TERMINATE"] = "UPLOAD_ON_TERMINATE";
    UploadBehavior["UPLOAD_ROLLING_AUTO_REMOVE"] = "UPLOAD_ROLLING_AUTO_REMOVE";
})(UploadBehavior = exports.UploadBehavior || (exports.UploadBehavior = {}));
var UploadConfiguration;
(function (UploadConfiguration) {
    /**
     * @internal
     */
    UploadConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadConfiguration = exports.UploadConfiguration || (exports.UploadConfiguration = {}));
var RobotApplicationConfig;
(function (RobotApplicationConfig) {
    /**
     * @internal
     */
    RobotApplicationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RobotApplicationConfig = exports.RobotApplicationConfig || (exports.RobotApplicationConfig = {}));
var WorldConfig;
(function (WorldConfig) {
    /**
     * @internal
     */
    WorldConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorldConfig = exports.WorldConfig || (exports.WorldConfig = {}));
var SimulationApplicationConfig;
(function (SimulationApplicationConfig) {
    /**
     * @internal
     */
    SimulationApplicationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimulationApplicationConfig = exports.SimulationApplicationConfig || (exports.SimulationApplicationConfig = {}));
var SimulationJobStatus;
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
})(SimulationJobStatus = exports.SimulationJobStatus || (exports.SimulationJobStatus = {}));
var VPCConfigResponse;
(function (VPCConfigResponse) {
    /**
     * @internal
     */
    VPCConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VPCConfigResponse = exports.VPCConfigResponse || (exports.VPCConfigResponse = {}));
var SimulationJob;
(function (SimulationJob) {
    /**
     * @internal
     */
    SimulationJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimulationJob = exports.SimulationJob || (exports.SimulationJob = {}));
var BatchDescribeSimulationJobResponse;
(function (BatchDescribeSimulationJobResponse) {
    /**
     * @internal
     */
    BatchDescribeSimulationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDescribeSimulationJobResponse = exports.BatchDescribeSimulationJobResponse || (exports.BatchDescribeSimulationJobResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var BatchPolicy;
(function (BatchPolicy) {
    /**
     * @internal
     */
    BatchPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPolicy = exports.BatchPolicy || (exports.BatchPolicy = {}));
var CancelDeploymentJobRequest;
(function (CancelDeploymentJobRequest) {
    /**
     * @internal
     */
    CancelDeploymentJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelDeploymentJobRequest = exports.CancelDeploymentJobRequest || (exports.CancelDeploymentJobRequest = {}));
var CancelDeploymentJobResponse;
(function (CancelDeploymentJobResponse) {
    /**
     * @internal
     */
    CancelDeploymentJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelDeploymentJobResponse = exports.CancelDeploymentJobResponse || (exports.CancelDeploymentJobResponse = {}));
var CancelSimulationJobRequest;
(function (CancelSimulationJobRequest) {
    /**
     * @internal
     */
    CancelSimulationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelSimulationJobRequest = exports.CancelSimulationJobRequest || (exports.CancelSimulationJobRequest = {}));
var CancelSimulationJobResponse;
(function (CancelSimulationJobResponse) {
    /**
     * @internal
     */
    CancelSimulationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelSimulationJobResponse = exports.CancelSimulationJobResponse || (exports.CancelSimulationJobResponse = {}));
var CancelSimulationJobBatchRequest;
(function (CancelSimulationJobBatchRequest) {
    /**
     * @internal
     */
    CancelSimulationJobBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelSimulationJobBatchRequest = exports.CancelSimulationJobBatchRequest || (exports.CancelSimulationJobBatchRequest = {}));
var CancelSimulationJobBatchResponse;
(function (CancelSimulationJobBatchResponse) {
    /**
     * @internal
     */
    CancelSimulationJobBatchResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelSimulationJobBatchResponse = exports.CancelSimulationJobBatchResponse || (exports.CancelSimulationJobBatchResponse = {}));
var CancelWorldExportJobRequest;
(function (CancelWorldExportJobRequest) {
    /**
     * @internal
     */
    CancelWorldExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelWorldExportJobRequest = exports.CancelWorldExportJobRequest || (exports.CancelWorldExportJobRequest = {}));
var CancelWorldExportJobResponse;
(function (CancelWorldExportJobResponse) {
    /**
     * @internal
     */
    CancelWorldExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelWorldExportJobResponse = exports.CancelWorldExportJobResponse || (exports.CancelWorldExportJobResponse = {}));
var CancelWorldGenerationJobRequest;
(function (CancelWorldGenerationJobRequest) {
    /**
     * @internal
     */
    CancelWorldGenerationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelWorldGenerationJobRequest = exports.CancelWorldGenerationJobRequest || (exports.CancelWorldGenerationJobRequest = {}));
var CancelWorldGenerationJobResponse;
(function (CancelWorldGenerationJobResponse) {
    /**
     * @internal
     */
    CancelWorldGenerationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelWorldGenerationJobResponse = exports.CancelWorldGenerationJobResponse || (exports.CancelWorldGenerationJobResponse = {}));
var Compute;
(function (Compute) {
    /**
     * @internal
     */
    Compute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Compute = exports.Compute || (exports.Compute = {}));
var ConcurrentDeploymentException;
(function (ConcurrentDeploymentException) {
    /**
     * @internal
     */
    ConcurrentDeploymentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentDeploymentException = exports.ConcurrentDeploymentException || (exports.ConcurrentDeploymentException = {}));
var DeploymentLaunchConfig;
(function (DeploymentLaunchConfig) {
    /**
     * @internal
     */
    DeploymentLaunchConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentLaunchConfig = exports.DeploymentLaunchConfig || (exports.DeploymentLaunchConfig = {}));
var DeploymentApplicationConfig;
(function (DeploymentApplicationConfig) {
    /**
     * @internal
     */
    DeploymentApplicationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentApplicationConfig = exports.DeploymentApplicationConfig || (exports.DeploymentApplicationConfig = {}));
var S3Object;
(function (S3Object) {
    /**
     * @internal
     */
    S3Object.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Object = exports.S3Object || (exports.S3Object = {}));
var DeploymentConfig;
(function (DeploymentConfig) {
    /**
     * @internal
     */
    DeploymentConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentConfig = exports.DeploymentConfig || (exports.DeploymentConfig = {}));
var CreateDeploymentJobRequest;
(function (CreateDeploymentJobRequest) {
    /**
     * @internal
     */
    CreateDeploymentJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeploymentJobRequest = exports.CreateDeploymentJobRequest || (exports.CreateDeploymentJobRequest = {}));
var DeploymentJobErrorCode;
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
})(DeploymentJobErrorCode = exports.DeploymentJobErrorCode || (exports.DeploymentJobErrorCode = {}));
var DeploymentStatus;
(function (DeploymentStatus) {
    DeploymentStatus["Canceled"] = "Canceled";
    DeploymentStatus["Failed"] = "Failed";
    DeploymentStatus["InProgress"] = "InProgress";
    DeploymentStatus["Pending"] = "Pending";
    DeploymentStatus["Preparing"] = "Preparing";
    DeploymentStatus["Succeeded"] = "Succeeded";
})(DeploymentStatus = exports.DeploymentStatus || (exports.DeploymentStatus = {}));
var CreateDeploymentJobResponse;
(function (CreateDeploymentJobResponse) {
    /**
     * @internal
     */
    CreateDeploymentJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeploymentJobResponse = exports.CreateDeploymentJobResponse || (exports.CreateDeploymentJobResponse = {}));
var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    /**
     * @internal
     */
    IdempotentParameterMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdempotentParameterMismatchException = exports.IdempotentParameterMismatchException || (exports.IdempotentParameterMismatchException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var CreateFleetRequest;
(function (CreateFleetRequest) {
    /**
     * @internal
     */
    CreateFleetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFleetRequest = exports.CreateFleetRequest || (exports.CreateFleetRequest = {}));
var CreateFleetResponse;
(function (CreateFleetResponse) {
    /**
     * @internal
     */
    CreateFleetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFleetResponse = exports.CreateFleetResponse || (exports.CreateFleetResponse = {}));
var CreateRobotRequest;
(function (CreateRobotRequest) {
    /**
     * @internal
     */
    CreateRobotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRobotRequest = exports.CreateRobotRequest || (exports.CreateRobotRequest = {}));
var CreateRobotResponse;
(function (CreateRobotResponse) {
    /**
     * @internal
     */
    CreateRobotResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRobotResponse = exports.CreateRobotResponse || (exports.CreateRobotResponse = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var RobotSoftwareSuiteType;
(function (RobotSoftwareSuiteType) {
    RobotSoftwareSuiteType["ROS"] = "ROS";
    RobotSoftwareSuiteType["ROS2"] = "ROS2";
})(RobotSoftwareSuiteType = exports.RobotSoftwareSuiteType || (exports.RobotSoftwareSuiteType = {}));
var RobotSoftwareSuiteVersionType;
(function (RobotSoftwareSuiteVersionType) {
    RobotSoftwareSuiteVersionType["Dashing"] = "Dashing";
    RobotSoftwareSuiteVersionType["Foxy"] = "Foxy";
    RobotSoftwareSuiteVersionType["Kinetic"] = "Kinetic";
    RobotSoftwareSuiteVersionType["Melodic"] = "Melodic";
})(RobotSoftwareSuiteVersionType = exports.RobotSoftwareSuiteVersionType || (exports.RobotSoftwareSuiteVersionType = {}));
var RobotSoftwareSuite;
(function (RobotSoftwareSuite) {
    /**
     * @internal
     */
    RobotSoftwareSuite.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RobotSoftwareSuite = exports.RobotSoftwareSuite || (exports.RobotSoftwareSuite = {}));
var SourceConfig;
(function (SourceConfig) {
    /**
     * @internal
     */
    SourceConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceConfig = exports.SourceConfig || (exports.SourceConfig = {}));
var CreateRobotApplicationRequest;
(function (CreateRobotApplicationRequest) {
    /**
     * @internal
     */
    CreateRobotApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRobotApplicationRequest = exports.CreateRobotApplicationRequest || (exports.CreateRobotApplicationRequest = {}));
var Source;
(function (Source) {
    /**
     * @internal
     */
    Source.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Source = exports.Source || (exports.Source = {}));
var CreateRobotApplicationResponse;
(function (CreateRobotApplicationResponse) {
    /**
     * @internal
     */
    CreateRobotApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRobotApplicationResponse = exports.CreateRobotApplicationResponse || (exports.CreateRobotApplicationResponse = {}));
var CreateRobotApplicationVersionRequest;
(function (CreateRobotApplicationVersionRequest) {
    /**
     * @internal
     */
    CreateRobotApplicationVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRobotApplicationVersionRequest = exports.CreateRobotApplicationVersionRequest || (exports.CreateRobotApplicationVersionRequest = {}));
var CreateRobotApplicationVersionResponse;
(function (CreateRobotApplicationVersionResponse) {
    /**
     * @internal
     */
    CreateRobotApplicationVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRobotApplicationVersionResponse = exports.CreateRobotApplicationVersionResponse || (exports.CreateRobotApplicationVersionResponse = {}));
var RenderingEngineType;
(function (RenderingEngineType) {
    RenderingEngineType["OGRE"] = "OGRE";
})(RenderingEngineType = exports.RenderingEngineType || (exports.RenderingEngineType = {}));
var RenderingEngine;
(function (RenderingEngine) {
    /**
     * @internal
     */
    RenderingEngine.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RenderingEngine = exports.RenderingEngine || (exports.RenderingEngine = {}));
var SimulationSoftwareSuiteType;
(function (SimulationSoftwareSuiteType) {
    SimulationSoftwareSuiteType["Gazebo"] = "Gazebo";
    SimulationSoftwareSuiteType["RosbagPlay"] = "RosbagPlay";
})(SimulationSoftwareSuiteType = exports.SimulationSoftwareSuiteType || (exports.SimulationSoftwareSuiteType = {}));
var SimulationSoftwareSuite;
(function (SimulationSoftwareSuite) {
    /**
     * @internal
     */
    SimulationSoftwareSuite.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimulationSoftwareSuite = exports.SimulationSoftwareSuite || (exports.SimulationSoftwareSuite = {}));
var CreateSimulationApplicationRequest;
(function (CreateSimulationApplicationRequest) {
    /**
     * @internal
     */
    CreateSimulationApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSimulationApplicationRequest = exports.CreateSimulationApplicationRequest || (exports.CreateSimulationApplicationRequest = {}));
var CreateSimulationApplicationResponse;
(function (CreateSimulationApplicationResponse) {
    /**
     * @internal
     */
    CreateSimulationApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSimulationApplicationResponse = exports.CreateSimulationApplicationResponse || (exports.CreateSimulationApplicationResponse = {}));
var CreateSimulationApplicationVersionRequest;
(function (CreateSimulationApplicationVersionRequest) {
    /**
     * @internal
     */
    CreateSimulationApplicationVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSimulationApplicationVersionRequest = exports.CreateSimulationApplicationVersionRequest || (exports.CreateSimulationApplicationVersionRequest = {}));
var CreateSimulationApplicationVersionResponse;
(function (CreateSimulationApplicationVersionResponse) {
    /**
     * @internal
     */
    CreateSimulationApplicationVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSimulationApplicationVersionResponse = exports.CreateSimulationApplicationVersionResponse || (exports.CreateSimulationApplicationVersionResponse = {}));
var DataSourceConfig;
(function (DataSourceConfig) {
    /**
     * @internal
     */
    DataSourceConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSourceConfig = exports.DataSourceConfig || (exports.DataSourceConfig = {}));
var VPCConfig;
(function (VPCConfig) {
    /**
     * @internal
     */
    VPCConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VPCConfig = exports.VPCConfig || (exports.VPCConfig = {}));
var CreateSimulationJobRequest;
(function (CreateSimulationJobRequest) {
    /**
     * @internal
     */
    CreateSimulationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSimulationJobRequest = exports.CreateSimulationJobRequest || (exports.CreateSimulationJobRequest = {}));
var CreateSimulationJobResponse;
(function (CreateSimulationJobResponse) {
    /**
     * @internal
     */
    CreateSimulationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSimulationJobResponse = exports.CreateSimulationJobResponse || (exports.CreateSimulationJobResponse = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var SimulationJobRequest;
(function (SimulationJobRequest) {
    /**
     * @internal
     */
    SimulationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimulationJobRequest = exports.SimulationJobRequest || (exports.SimulationJobRequest = {}));
var CreateWorldExportJobRequest;
(function (CreateWorldExportJobRequest) {
    /**
     * @internal
     */
    CreateWorldExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorldExportJobRequest = exports.CreateWorldExportJobRequest || (exports.CreateWorldExportJobRequest = {}));
var WorldExportJobErrorCode;
(function (WorldExportJobErrorCode) {
    WorldExportJobErrorCode["AccessDenied"] = "AccessDenied";
    WorldExportJobErrorCode["InternalServiceError"] = "InternalServiceError";
    WorldExportJobErrorCode["InvalidInput"] = "InvalidInput";
    WorldExportJobErrorCode["LimitExceeded"] = "LimitExceeded";
    WorldExportJobErrorCode["RequestThrottled"] = "RequestThrottled";
    WorldExportJobErrorCode["ResourceNotFound"] = "ResourceNotFound";
})(WorldExportJobErrorCode = exports.WorldExportJobErrorCode || (exports.WorldExportJobErrorCode = {}));
var WorldExportJobStatus;
(function (WorldExportJobStatus) {
    WorldExportJobStatus["Canceled"] = "Canceled";
    WorldExportJobStatus["Canceling"] = "Canceling";
    WorldExportJobStatus["Completed"] = "Completed";
    WorldExportJobStatus["Failed"] = "Failed";
    WorldExportJobStatus["Pending"] = "Pending";
    WorldExportJobStatus["Running"] = "Running";
})(WorldExportJobStatus = exports.WorldExportJobStatus || (exports.WorldExportJobStatus = {}));
var CreateWorldExportJobResponse;
(function (CreateWorldExportJobResponse) {
    /**
     * @internal
     */
    CreateWorldExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorldExportJobResponse = exports.CreateWorldExportJobResponse || (exports.CreateWorldExportJobResponse = {}));
var WorldCount;
(function (WorldCount) {
    /**
     * @internal
     */
    WorldCount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorldCount = exports.WorldCount || (exports.WorldCount = {}));
var CreateWorldGenerationJobRequest;
(function (CreateWorldGenerationJobRequest) {
    /**
     * @internal
     */
    CreateWorldGenerationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorldGenerationJobRequest = exports.CreateWorldGenerationJobRequest || (exports.CreateWorldGenerationJobRequest = {}));
var WorldGenerationJobErrorCode;
(function (WorldGenerationJobErrorCode) {
    WorldGenerationJobErrorCode["AllWorldGenerationFailed"] = "AllWorldGenerationFailed";
    WorldGenerationJobErrorCode["InternalServiceError"] = "InternalServiceError";
    WorldGenerationJobErrorCode["InvalidInput"] = "InvalidInput";
    WorldGenerationJobErrorCode["LimitExceeded"] = "LimitExceeded";
    WorldGenerationJobErrorCode["RequestThrottled"] = "RequestThrottled";
    WorldGenerationJobErrorCode["ResourceNotFound"] = "ResourceNotFound";
})(WorldGenerationJobErrorCode = exports.WorldGenerationJobErrorCode || (exports.WorldGenerationJobErrorCode = {}));
var WorldGenerationJobStatus;
(function (WorldGenerationJobStatus) {
    WorldGenerationJobStatus["Canceled"] = "Canceled";
    WorldGenerationJobStatus["Canceling"] = "Canceling";
    WorldGenerationJobStatus["Completed"] = "Completed";
    WorldGenerationJobStatus["Failed"] = "Failed";
    WorldGenerationJobStatus["PartialFailed"] = "PartialFailed";
    WorldGenerationJobStatus["Pending"] = "Pending";
    WorldGenerationJobStatus["Running"] = "Running";
})(WorldGenerationJobStatus = exports.WorldGenerationJobStatus || (exports.WorldGenerationJobStatus = {}));
var CreateWorldGenerationJobResponse;
(function (CreateWorldGenerationJobResponse) {
    /**
     * @internal
     */
    CreateWorldGenerationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorldGenerationJobResponse = exports.CreateWorldGenerationJobResponse || (exports.CreateWorldGenerationJobResponse = {}));
var TemplateLocation;
(function (TemplateLocation) {
    /**
     * @internal
     */
    TemplateLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplateLocation = exports.TemplateLocation || (exports.TemplateLocation = {}));
var CreateWorldTemplateRequest;
(function (CreateWorldTemplateRequest) {
    /**
     * @internal
     */
    CreateWorldTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorldTemplateRequest = exports.CreateWorldTemplateRequest || (exports.CreateWorldTemplateRequest = {}));
var CreateWorldTemplateResponse;
(function (CreateWorldTemplateResponse) {
    /**
     * @internal
     */
    CreateWorldTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWorldTemplateResponse = exports.CreateWorldTemplateResponse || (exports.CreateWorldTemplateResponse = {}));
var DeleteFleetRequest;
(function (DeleteFleetRequest) {
    /**
     * @internal
     */
    DeleteFleetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFleetRequest = exports.DeleteFleetRequest || (exports.DeleteFleetRequest = {}));
var DeleteFleetResponse;
(function (DeleteFleetResponse) {
    /**
     * @internal
     */
    DeleteFleetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFleetResponse = exports.DeleteFleetResponse || (exports.DeleteFleetResponse = {}));
var DeleteRobotRequest;
(function (DeleteRobotRequest) {
    /**
     * @internal
     */
    DeleteRobotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRobotRequest = exports.DeleteRobotRequest || (exports.DeleteRobotRequest = {}));
var DeleteRobotResponse;
(function (DeleteRobotResponse) {
    /**
     * @internal
     */
    DeleteRobotResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRobotResponse = exports.DeleteRobotResponse || (exports.DeleteRobotResponse = {}));
var DeleteRobotApplicationRequest;
(function (DeleteRobotApplicationRequest) {
    /**
     * @internal
     */
    DeleteRobotApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRobotApplicationRequest = exports.DeleteRobotApplicationRequest || (exports.DeleteRobotApplicationRequest = {}));
var DeleteRobotApplicationResponse;
(function (DeleteRobotApplicationResponse) {
    /**
     * @internal
     */
    DeleteRobotApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRobotApplicationResponse = exports.DeleteRobotApplicationResponse || (exports.DeleteRobotApplicationResponse = {}));
var DeleteSimulationApplicationRequest;
(function (DeleteSimulationApplicationRequest) {
    /**
     * @internal
     */
    DeleteSimulationApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSimulationApplicationRequest = exports.DeleteSimulationApplicationRequest || (exports.DeleteSimulationApplicationRequest = {}));
var DeleteSimulationApplicationResponse;
(function (DeleteSimulationApplicationResponse) {
    /**
     * @internal
     */
    DeleteSimulationApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSimulationApplicationResponse = exports.DeleteSimulationApplicationResponse || (exports.DeleteSimulationApplicationResponse = {}));
var DeleteWorldTemplateRequest;
(function (DeleteWorldTemplateRequest) {
    /**
     * @internal
     */
    DeleteWorldTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorldTemplateRequest = exports.DeleteWorldTemplateRequest || (exports.DeleteWorldTemplateRequest = {}));
var DeleteWorldTemplateResponse;
(function (DeleteWorldTemplateResponse) {
    /**
     * @internal
     */
    DeleteWorldTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWorldTemplateResponse = exports.DeleteWorldTemplateResponse || (exports.DeleteWorldTemplateResponse = {}));
var DeploymentJob;
(function (DeploymentJob) {
    /**
     * @internal
     */
    DeploymentJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeploymentJob = exports.DeploymentJob || (exports.DeploymentJob = {}));
var DeregisterRobotRequest;
(function (DeregisterRobotRequest) {
    /**
     * @internal
     */
    DeregisterRobotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterRobotRequest = exports.DeregisterRobotRequest || (exports.DeregisterRobotRequest = {}));
var DeregisterRobotResponse;
(function (DeregisterRobotResponse) {
    /**
     * @internal
     */
    DeregisterRobotResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterRobotResponse = exports.DeregisterRobotResponse || (exports.DeregisterRobotResponse = {}));
var DescribeDeploymentJobRequest;
(function (DescribeDeploymentJobRequest) {
    /**
     * @internal
     */
    DescribeDeploymentJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeploymentJobRequest = exports.DescribeDeploymentJobRequest || (exports.DescribeDeploymentJobRequest = {}));
var RobotDeploymentStep;
(function (RobotDeploymentStep) {
    RobotDeploymentStep["DownloadingExtractingStep"] = "DownloadingExtracting";
    RobotDeploymentStep["ExecutingDownloadCondition"] = "ExecutingDownloadCondition";
    RobotDeploymentStep["FinishedStep"] = "Finished";
    RobotDeploymentStep["LaunchingStep"] = "Launching";
    RobotDeploymentStep["PostLaunchStep"] = "ExecutingPostLaunch";
    RobotDeploymentStep["PreLaunchStep"] = "ExecutingPreLaunch";
    RobotDeploymentStep["ValidatingStep"] = "Validating";
})(RobotDeploymentStep = exports.RobotDeploymentStep || (exports.RobotDeploymentStep = {}));
var ProgressDetail;
(function (ProgressDetail) {
    /**
     * @internal
     */
    ProgressDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProgressDetail = exports.ProgressDetail || (exports.ProgressDetail = {}));
var RobotStatus;
(function (RobotStatus) {
    RobotStatus["Available"] = "Available";
    RobotStatus["Deploying"] = "Deploying";
    RobotStatus["Failed"] = "Failed";
    RobotStatus["InSync"] = "InSync";
    RobotStatus["NoResponse"] = "NoResponse";
    RobotStatus["PendingNewDeployment"] = "PendingNewDeployment";
    RobotStatus["Registered"] = "Registered";
})(RobotStatus = exports.RobotStatus || (exports.RobotStatus = {}));
var RobotDeployment;
(function (RobotDeployment) {
    /**
     * @internal
     */
    RobotDeployment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RobotDeployment = exports.RobotDeployment || (exports.RobotDeployment = {}));
var DescribeDeploymentJobResponse;
(function (DescribeDeploymentJobResponse) {
    /**
     * @internal
     */
    DescribeDeploymentJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDeploymentJobResponse = exports.DescribeDeploymentJobResponse || (exports.DescribeDeploymentJobResponse = {}));
var DescribeFleetRequest;
(function (DescribeFleetRequest) {
    /**
     * @internal
     */
    DescribeFleetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetRequest = exports.DescribeFleetRequest || (exports.DescribeFleetRequest = {}));
var Robot;
(function (Robot) {
    /**
     * @internal
     */
    Robot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Robot = exports.Robot || (exports.Robot = {}));
var DescribeFleetResponse;
(function (DescribeFleetResponse) {
    /**
     * @internal
     */
    DescribeFleetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFleetResponse = exports.DescribeFleetResponse || (exports.DescribeFleetResponse = {}));
var DescribeRobotRequest;
(function (DescribeRobotRequest) {
    /**
     * @internal
     */
    DescribeRobotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRobotRequest = exports.DescribeRobotRequest || (exports.DescribeRobotRequest = {}));
var DescribeRobotResponse;
(function (DescribeRobotResponse) {
    /**
     * @internal
     */
    DescribeRobotResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRobotResponse = exports.DescribeRobotResponse || (exports.DescribeRobotResponse = {}));
var DescribeRobotApplicationRequest;
(function (DescribeRobotApplicationRequest) {
    /**
     * @internal
     */
    DescribeRobotApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRobotApplicationRequest = exports.DescribeRobotApplicationRequest || (exports.DescribeRobotApplicationRequest = {}));
var DescribeRobotApplicationResponse;
(function (DescribeRobotApplicationResponse) {
    /**
     * @internal
     */
    DescribeRobotApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRobotApplicationResponse = exports.DescribeRobotApplicationResponse || (exports.DescribeRobotApplicationResponse = {}));
var DescribeSimulationApplicationRequest;
(function (DescribeSimulationApplicationRequest) {
    /**
     * @internal
     */
    DescribeSimulationApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSimulationApplicationRequest = exports.DescribeSimulationApplicationRequest || (exports.DescribeSimulationApplicationRequest = {}));
var DescribeSimulationApplicationResponse;
(function (DescribeSimulationApplicationResponse) {
    /**
     * @internal
     */
    DescribeSimulationApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSimulationApplicationResponse = exports.DescribeSimulationApplicationResponse || (exports.DescribeSimulationApplicationResponse = {}));
var DescribeSimulationJobRequest;
(function (DescribeSimulationJobRequest) {
    /**
     * @internal
     */
    DescribeSimulationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSimulationJobRequest = exports.DescribeSimulationJobRequest || (exports.DescribeSimulationJobRequest = {}));
var DescribeSimulationJobResponse;
(function (DescribeSimulationJobResponse) {
    /**
     * @internal
     */
    DescribeSimulationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSimulationJobResponse = exports.DescribeSimulationJobResponse || (exports.DescribeSimulationJobResponse = {}));
var DescribeSimulationJobBatchRequest;
(function (DescribeSimulationJobBatchRequest) {
    /**
     * @internal
     */
    DescribeSimulationJobBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSimulationJobBatchRequest = exports.DescribeSimulationJobBatchRequest || (exports.DescribeSimulationJobBatchRequest = {}));
var SimulationJobSummary;
(function (SimulationJobSummary) {
    /**
     * @internal
     */
    SimulationJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimulationJobSummary = exports.SimulationJobSummary || (exports.SimulationJobSummary = {}));
var FailedCreateSimulationJobRequest;
(function (FailedCreateSimulationJobRequest) {
    /**
     * @internal
     */
    FailedCreateSimulationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailedCreateSimulationJobRequest = exports.FailedCreateSimulationJobRequest || (exports.FailedCreateSimulationJobRequest = {}));
var SimulationJobBatchErrorCode;
(function (SimulationJobBatchErrorCode) {
    SimulationJobBatchErrorCode["InternalServiceError"] = "InternalServiceError";
})(SimulationJobBatchErrorCode = exports.SimulationJobBatchErrorCode || (exports.SimulationJobBatchErrorCode = {}));
var SimulationJobBatchStatus;
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
})(SimulationJobBatchStatus = exports.SimulationJobBatchStatus || (exports.SimulationJobBatchStatus = {}));
var DescribeSimulationJobBatchResponse;
(function (DescribeSimulationJobBatchResponse) {
    /**
     * @internal
     */
    DescribeSimulationJobBatchResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSimulationJobBatchResponse = exports.DescribeSimulationJobBatchResponse || (exports.DescribeSimulationJobBatchResponse = {}));
var DescribeWorldRequest;
(function (DescribeWorldRequest) {
    /**
     * @internal
     */
    DescribeWorldRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorldRequest = exports.DescribeWorldRequest || (exports.DescribeWorldRequest = {}));
var DescribeWorldResponse;
(function (DescribeWorldResponse) {
    /**
     * @internal
     */
    DescribeWorldResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorldResponse = exports.DescribeWorldResponse || (exports.DescribeWorldResponse = {}));
var DescribeWorldExportJobRequest;
(function (DescribeWorldExportJobRequest) {
    /**
     * @internal
     */
    DescribeWorldExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorldExportJobRequest = exports.DescribeWorldExportJobRequest || (exports.DescribeWorldExportJobRequest = {}));
var DescribeWorldExportJobResponse;
(function (DescribeWorldExportJobResponse) {
    /**
     * @internal
     */
    DescribeWorldExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorldExportJobResponse = exports.DescribeWorldExportJobResponse || (exports.DescribeWorldExportJobResponse = {}));
var DescribeWorldGenerationJobRequest;
(function (DescribeWorldGenerationJobRequest) {
    /**
     * @internal
     */
    DescribeWorldGenerationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorldGenerationJobRequest = exports.DescribeWorldGenerationJobRequest || (exports.DescribeWorldGenerationJobRequest = {}));
var WorldFailure;
(function (WorldFailure) {
    /**
     * @internal
     */
    WorldFailure.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorldFailure = exports.WorldFailure || (exports.WorldFailure = {}));
var FailureSummary;
(function (FailureSummary) {
    /**
     * @internal
     */
    FailureSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailureSummary = exports.FailureSummary || (exports.FailureSummary = {}));
var FinishedWorldsSummary;
(function (FinishedWorldsSummary) {
    /**
     * @internal
     */
    FinishedWorldsSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FinishedWorldsSummary = exports.FinishedWorldsSummary || (exports.FinishedWorldsSummary = {}));
var DescribeWorldGenerationJobResponse;
(function (DescribeWorldGenerationJobResponse) {
    /**
     * @internal
     */
    DescribeWorldGenerationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorldGenerationJobResponse = exports.DescribeWorldGenerationJobResponse || (exports.DescribeWorldGenerationJobResponse = {}));
var DescribeWorldTemplateRequest;
(function (DescribeWorldTemplateRequest) {
    /**
     * @internal
     */
    DescribeWorldTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorldTemplateRequest = exports.DescribeWorldTemplateRequest || (exports.DescribeWorldTemplateRequest = {}));
var DescribeWorldTemplateResponse;
(function (DescribeWorldTemplateResponse) {
    /**
     * @internal
     */
    DescribeWorldTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeWorldTemplateResponse = exports.DescribeWorldTemplateResponse || (exports.DescribeWorldTemplateResponse = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var Fleet;
(function (Fleet) {
    /**
     * @internal
     */
    Fleet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Fleet = exports.Fleet || (exports.Fleet = {}));
var GetWorldTemplateBodyRequest;
(function (GetWorldTemplateBodyRequest) {
    /**
     * @internal
     */
    GetWorldTemplateBodyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWorldTemplateBodyRequest = exports.GetWorldTemplateBodyRequest || (exports.GetWorldTemplateBodyRequest = {}));
var GetWorldTemplateBodyResponse;
(function (GetWorldTemplateBodyResponse) {
    /**
     * @internal
     */
    GetWorldTemplateBodyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWorldTemplateBodyResponse = exports.GetWorldTemplateBodyResponse || (exports.GetWorldTemplateBodyResponse = {}));
var ListDeploymentJobsRequest;
(function (ListDeploymentJobsRequest) {
    /**
     * @internal
     */
    ListDeploymentJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeploymentJobsRequest = exports.ListDeploymentJobsRequest || (exports.ListDeploymentJobsRequest = {}));
var ListDeploymentJobsResponse;
(function (ListDeploymentJobsResponse) {
    /**
     * @internal
     */
    ListDeploymentJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeploymentJobsResponse = exports.ListDeploymentJobsResponse || (exports.ListDeploymentJobsResponse = {}));
var ListFleetsRequest;
(function (ListFleetsRequest) {
    /**
     * @internal
     */
    ListFleetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFleetsRequest = exports.ListFleetsRequest || (exports.ListFleetsRequest = {}));
var ListFleetsResponse;
(function (ListFleetsResponse) {
    /**
     * @internal
     */
    ListFleetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFleetsResponse = exports.ListFleetsResponse || (exports.ListFleetsResponse = {}));
var ListRobotApplicationsRequest;
(function (ListRobotApplicationsRequest) {
    /**
     * @internal
     */
    ListRobotApplicationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRobotApplicationsRequest = exports.ListRobotApplicationsRequest || (exports.ListRobotApplicationsRequest = {}));
var RobotApplicationSummary;
(function (RobotApplicationSummary) {
    /**
     * @internal
     */
    RobotApplicationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RobotApplicationSummary = exports.RobotApplicationSummary || (exports.RobotApplicationSummary = {}));
var ListRobotApplicationsResponse;
(function (ListRobotApplicationsResponse) {
    /**
     * @internal
     */
    ListRobotApplicationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRobotApplicationsResponse = exports.ListRobotApplicationsResponse || (exports.ListRobotApplicationsResponse = {}));
var ListRobotsRequest;
(function (ListRobotsRequest) {
    /**
     * @internal
     */
    ListRobotsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRobotsRequest = exports.ListRobotsRequest || (exports.ListRobotsRequest = {}));
var ListRobotsResponse;
(function (ListRobotsResponse) {
    /**
     * @internal
     */
    ListRobotsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRobotsResponse = exports.ListRobotsResponse || (exports.ListRobotsResponse = {}));
var ListSimulationApplicationsRequest;
(function (ListSimulationApplicationsRequest) {
    /**
     * @internal
     */
    ListSimulationApplicationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSimulationApplicationsRequest = exports.ListSimulationApplicationsRequest || (exports.ListSimulationApplicationsRequest = {}));
var SimulationApplicationSummary;
(function (SimulationApplicationSummary) {
    /**
     * @internal
     */
    SimulationApplicationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimulationApplicationSummary = exports.SimulationApplicationSummary || (exports.SimulationApplicationSummary = {}));
var ListSimulationApplicationsResponse;
(function (ListSimulationApplicationsResponse) {
    /**
     * @internal
     */
    ListSimulationApplicationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSimulationApplicationsResponse = exports.ListSimulationApplicationsResponse || (exports.ListSimulationApplicationsResponse = {}));
var ListSimulationJobBatchesRequest;
(function (ListSimulationJobBatchesRequest) {
    /**
     * @internal
     */
    ListSimulationJobBatchesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSimulationJobBatchesRequest = exports.ListSimulationJobBatchesRequest || (exports.ListSimulationJobBatchesRequest = {}));
var SimulationJobBatchSummary;
(function (SimulationJobBatchSummary) {
    /**
     * @internal
     */
    SimulationJobBatchSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimulationJobBatchSummary = exports.SimulationJobBatchSummary || (exports.SimulationJobBatchSummary = {}));
var ListSimulationJobBatchesResponse;
(function (ListSimulationJobBatchesResponse) {
    /**
     * @internal
     */
    ListSimulationJobBatchesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSimulationJobBatchesResponse = exports.ListSimulationJobBatchesResponse || (exports.ListSimulationJobBatchesResponse = {}));
var ListSimulationJobsRequest;
(function (ListSimulationJobsRequest) {
    /**
     * @internal
     */
    ListSimulationJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSimulationJobsRequest = exports.ListSimulationJobsRequest || (exports.ListSimulationJobsRequest = {}));
var ListSimulationJobsResponse;
(function (ListSimulationJobsResponse) {
    /**
     * @internal
     */
    ListSimulationJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSimulationJobsResponse = exports.ListSimulationJobsResponse || (exports.ListSimulationJobsResponse = {}));
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
var ListWorldExportJobsRequest;
(function (ListWorldExportJobsRequest) {
    /**
     * @internal
     */
    ListWorldExportJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorldExportJobsRequest = exports.ListWorldExportJobsRequest || (exports.ListWorldExportJobsRequest = {}));
var WorldExportJobSummary;
(function (WorldExportJobSummary) {
    /**
     * @internal
     */
    WorldExportJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorldExportJobSummary = exports.WorldExportJobSummary || (exports.WorldExportJobSummary = {}));
var ListWorldExportJobsResponse;
(function (ListWorldExportJobsResponse) {
    /**
     * @internal
     */
    ListWorldExportJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorldExportJobsResponse = exports.ListWorldExportJobsResponse || (exports.ListWorldExportJobsResponse = {}));
var ListWorldGenerationJobsRequest;
(function (ListWorldGenerationJobsRequest) {
    /**
     * @internal
     */
    ListWorldGenerationJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorldGenerationJobsRequest = exports.ListWorldGenerationJobsRequest || (exports.ListWorldGenerationJobsRequest = {}));
var WorldGenerationJobSummary;
(function (WorldGenerationJobSummary) {
    /**
     * @internal
     */
    WorldGenerationJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorldGenerationJobSummary = exports.WorldGenerationJobSummary || (exports.WorldGenerationJobSummary = {}));
var ListWorldGenerationJobsResponse;
(function (ListWorldGenerationJobsResponse) {
    /**
     * @internal
     */
    ListWorldGenerationJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorldGenerationJobsResponse = exports.ListWorldGenerationJobsResponse || (exports.ListWorldGenerationJobsResponse = {}));
var ListWorldsRequest;
(function (ListWorldsRequest) {
    /**
     * @internal
     */
    ListWorldsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorldsRequest = exports.ListWorldsRequest || (exports.ListWorldsRequest = {}));
var WorldSummary;
(function (WorldSummary) {
    /**
     * @internal
     */
    WorldSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WorldSummary = exports.WorldSummary || (exports.WorldSummary = {}));
var ListWorldsResponse;
(function (ListWorldsResponse) {
    /**
     * @internal
     */
    ListWorldsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorldsResponse = exports.ListWorldsResponse || (exports.ListWorldsResponse = {}));
var ListWorldTemplatesRequest;
(function (ListWorldTemplatesRequest) {
    /**
     * @internal
     */
    ListWorldTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorldTemplatesRequest = exports.ListWorldTemplatesRequest || (exports.ListWorldTemplatesRequest = {}));
var TemplateSummary;
(function (TemplateSummary) {
    /**
     * @internal
     */
    TemplateSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplateSummary = exports.TemplateSummary || (exports.TemplateSummary = {}));
var ListWorldTemplatesResponse;
(function (ListWorldTemplatesResponse) {
    /**
     * @internal
     */
    ListWorldTemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorldTemplatesResponse = exports.ListWorldTemplatesResponse || (exports.ListWorldTemplatesResponse = {}));
var RegisterRobotRequest;
(function (RegisterRobotRequest) {
    /**
     * @internal
     */
    RegisterRobotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterRobotRequest = exports.RegisterRobotRequest || (exports.RegisterRobotRequest = {}));
var RegisterRobotResponse;
(function (RegisterRobotResponse) {
    /**
     * @internal
     */
    RegisterRobotResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterRobotResponse = exports.RegisterRobotResponse || (exports.RegisterRobotResponse = {}));
var RestartSimulationJobRequest;
(function (RestartSimulationJobRequest) {
    /**
     * @internal
     */
    RestartSimulationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestartSimulationJobRequest = exports.RestartSimulationJobRequest || (exports.RestartSimulationJobRequest = {}));
var RestartSimulationJobResponse;
(function (RestartSimulationJobResponse) {
    /**
     * @internal
     */
    RestartSimulationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestartSimulationJobResponse = exports.RestartSimulationJobResponse || (exports.RestartSimulationJobResponse = {}));
var StartSimulationJobBatchRequest;
(function (StartSimulationJobBatchRequest) {
    /**
     * @internal
     */
    StartSimulationJobBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSimulationJobBatchRequest = exports.StartSimulationJobBatchRequest || (exports.StartSimulationJobBatchRequest = {}));
var StartSimulationJobBatchResponse;
(function (StartSimulationJobBatchResponse) {
    /**
     * @internal
     */
    StartSimulationJobBatchResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSimulationJobBatchResponse = exports.StartSimulationJobBatchResponse || (exports.StartSimulationJobBatchResponse = {}));
var SyncDeploymentJobRequest;
(function (SyncDeploymentJobRequest) {
    /**
     * @internal
     */
    SyncDeploymentJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SyncDeploymentJobRequest = exports.SyncDeploymentJobRequest || (exports.SyncDeploymentJobRequest = {}));
var SyncDeploymentJobResponse;
(function (SyncDeploymentJobResponse) {
    /**
     * @internal
     */
    SyncDeploymentJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SyncDeploymentJobResponse = exports.SyncDeploymentJobResponse || (exports.SyncDeploymentJobResponse = {}));
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
var UpdateRobotApplicationRequest;
(function (UpdateRobotApplicationRequest) {
    /**
     * @internal
     */
    UpdateRobotApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRobotApplicationRequest = exports.UpdateRobotApplicationRequest || (exports.UpdateRobotApplicationRequest = {}));
var UpdateRobotApplicationResponse;
(function (UpdateRobotApplicationResponse) {
    /**
     * @internal
     */
    UpdateRobotApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRobotApplicationResponse = exports.UpdateRobotApplicationResponse || (exports.UpdateRobotApplicationResponse = {}));
var UpdateSimulationApplicationRequest;
(function (UpdateSimulationApplicationRequest) {
    /**
     * @internal
     */
    UpdateSimulationApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSimulationApplicationRequest = exports.UpdateSimulationApplicationRequest || (exports.UpdateSimulationApplicationRequest = {}));
var UpdateSimulationApplicationResponse;
(function (UpdateSimulationApplicationResponse) {
    /**
     * @internal
     */
    UpdateSimulationApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSimulationApplicationResponse = exports.UpdateSimulationApplicationResponse || (exports.UpdateSimulationApplicationResponse = {}));
var UpdateWorldTemplateRequest;
(function (UpdateWorldTemplateRequest) {
    /**
     * @internal
     */
    UpdateWorldTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWorldTemplateRequest = exports.UpdateWorldTemplateRequest || (exports.UpdateWorldTemplateRequest = {}));
var UpdateWorldTemplateResponse;
(function (UpdateWorldTemplateResponse) {
    /**
     * @internal
     */
    UpdateWorldTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWorldTemplateResponse = exports.UpdateWorldTemplateResponse || (exports.UpdateWorldTemplateResponse = {}));
//# sourceMappingURL=models_0.js.map