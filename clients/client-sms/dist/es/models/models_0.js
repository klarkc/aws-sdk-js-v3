import { __assign } from "tslib";
export var AppLaunchConfigurationStatus;
(function (AppLaunchConfigurationStatus) {
    AppLaunchConfigurationStatus["Configured"] = "CONFIGURED";
    AppLaunchConfigurationStatus["NotConfigured"] = "NOT_CONFIGURED";
})(AppLaunchConfigurationStatus || (AppLaunchConfigurationStatus = {}));
export var AppLaunchStatus;
(function (AppLaunchStatus) {
    AppLaunchStatus["ConfigurationInProgress"] = "CONFIGURATION_IN_PROGRESS";
    AppLaunchStatus["ConfigurationInvalid"] = "CONFIGURATION_INVALID";
    AppLaunchStatus["DeltaLaunchFailed"] = "DELTA_LAUNCH_FAILED";
    AppLaunchStatus["DeltaLaunchInProgress"] = "DELTA_LAUNCH_IN_PROGRESS";
    AppLaunchStatus["LaunchFailed"] = "LAUNCH_FAILED";
    AppLaunchStatus["LaunchInProgress"] = "LAUNCH_IN_PROGRESS";
    AppLaunchStatus["LaunchPending"] = "LAUNCH_PENDING";
    AppLaunchStatus["Launched"] = "LAUNCHED";
    AppLaunchStatus["PartiallyLaunched"] = "PARTIALLY_LAUNCHED";
    AppLaunchStatus["ReadyForConfiguration"] = "READY_FOR_CONFIGURATION";
    AppLaunchStatus["ReadyForLaunch"] = "READY_FOR_LAUNCH";
    AppLaunchStatus["TerminateFailed"] = "TERMINATE_FAILED";
    AppLaunchStatus["TerminateInProgress"] = "TERMINATE_IN_PROGRESS";
    AppLaunchStatus["Terminated"] = "TERMINATED";
    AppLaunchStatus["ValidationInProgress"] = "VALIDATION_IN_PROGRESS";
})(AppLaunchStatus || (AppLaunchStatus = {}));
export var AppReplicationConfigurationStatus;
(function (AppReplicationConfigurationStatus) {
    AppReplicationConfigurationStatus["Configured"] = "CONFIGURED";
    AppReplicationConfigurationStatus["NotConfigured"] = "NOT_CONFIGURED";
})(AppReplicationConfigurationStatus || (AppReplicationConfigurationStatus = {}));
export var AppReplicationStatus;
(function (AppReplicationStatus) {
    AppReplicationStatus["ConfigurationInProgress"] = "CONFIGURATION_IN_PROGRESS";
    AppReplicationStatus["ConfigurationInvalid"] = "CONFIGURATION_INVALID";
    AppReplicationStatus["DeltaReplicated"] = "DELTA_REPLICATED";
    AppReplicationStatus["DeltaReplicationFailed"] = "DELTA_REPLICATION_FAILED";
    AppReplicationStatus["DeltaReplicationInProgress"] = "DELTA_REPLICATION_IN_PROGRESS";
    AppReplicationStatus["PartiallyReplicated"] = "PARTIALLY_REPLICATED";
    AppReplicationStatus["ReadyForConfiguration"] = "READY_FOR_CONFIGURATION";
    AppReplicationStatus["ReadyForReplication"] = "READY_FOR_REPLICATION";
    AppReplicationStatus["Replicated"] = "REPLICATED";
    AppReplicationStatus["ReplicationFailed"] = "REPLICATION_FAILED";
    AppReplicationStatus["ReplicationInProgress"] = "REPLICATION_IN_PROGRESS";
    AppReplicationStatus["ReplicationPending"] = "REPLICATION_PENDING";
    AppReplicationStatus["ReplicationStopFailed"] = "REPLICATION_STOP_FAILED";
    AppReplicationStatus["ReplicationStopped"] = "REPLICATION_STOPPED";
    AppReplicationStatus["ReplicationStopping"] = "REPLICATION_STOPPING";
    AppReplicationStatus["ValidationInProgress"] = "VALIDATION_IN_PROGRESS";
})(AppReplicationStatus || (AppReplicationStatus = {}));
export var LaunchDetails;
(function (LaunchDetails) {
    /**
     * @internal
     */
    LaunchDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LaunchDetails || (LaunchDetails = {}));
export var AppStatus;
(function (AppStatus) {
    AppStatus["Active"] = "ACTIVE";
    AppStatus["Creating"] = "CREATING";
    AppStatus["DELETE_FAILED"] = "DELETE_FAILED";
    AppStatus["Deleted"] = "DELETED";
    AppStatus["Deleting"] = "DELETING";
    AppStatus["Updating"] = "UPDATING";
})(AppStatus || (AppStatus = {}));
export var AppSummary;
(function (AppSummary) {
    /**
     * @internal
     */
    AppSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AppSummary || (AppSummary = {}));
export var AppValidationStrategy;
(function (AppValidationStrategy) {
    AppValidationStrategy["SSM"] = "SSM";
})(AppValidationStrategy || (AppValidationStrategy = {}));
export var ScriptType;
(function (ScriptType) {
    ScriptType["POWERSHELL_SCRIPT"] = "POWERSHELL_SCRIPT";
    ScriptType["SHELL_SCRIPT"] = "SHELL_SCRIPT";
})(ScriptType || (ScriptType = {}));
export var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Location || (S3Location = {}));
export var Source;
(function (Source) {
    /**
     * @internal
     */
    Source.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Source || (Source = {}));
export var SSMValidationParameters;
(function (SSMValidationParameters) {
    /**
     * @internal
     */
    SSMValidationParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SSMValidationParameters || (SSMValidationParameters = {}));
export var AppValidationConfiguration;
(function (AppValidationConfiguration) {
    /**
     * @internal
     */
    AppValidationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AppValidationConfiguration || (AppValidationConfiguration = {}));
export var SSMOutput;
(function (SSMOutput) {
    /**
     * @internal
     */
    SSMOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SSMOutput || (SSMOutput = {}));
export var AppValidationOutput;
(function (AppValidationOutput) {
    /**
     * @internal
     */
    AppValidationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AppValidationOutput || (AppValidationOutput = {}));
export var ServerType;
(function (ServerType) {
    ServerType["VirtualMachine"] = "VIRTUAL_MACHINE";
})(ServerType || (ServerType = {}));
export var VmManagerType;
(function (VmManagerType) {
    VmManagerType["hyperVManager"] = "HYPERV-MANAGER";
    VmManagerType["scvmm"] = "SCVMM";
    VmManagerType["vSphere"] = "VSPHERE";
})(VmManagerType || (VmManagerType = {}));
export var VmServerAddress;
(function (VmServerAddress) {
    /**
     * @internal
     */
    VmServerAddress.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VmServerAddress || (VmServerAddress = {}));
export var VmServer;
(function (VmServer) {
    /**
     * @internal
     */
    VmServer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VmServer || (VmServer = {}));
export var Server;
(function (Server) {
    /**
     * @internal
     */
    Server.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Server || (Server = {}));
export var ServerGroup;
(function (ServerGroup) {
    /**
     * @internal
     */
    ServerGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerGroup || (ServerGroup = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateAppRequest;
(function (CreateAppRequest) {
    /**
     * @internal
     */
    CreateAppRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAppRequest || (CreateAppRequest = {}));
export var CreateAppResponse;
(function (CreateAppResponse) {
    /**
     * @internal
     */
    CreateAppResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAppResponse || (CreateAppResponse = {}));
export var InternalError;
(function (InternalError) {
    /**
     * @internal
     */
    InternalError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalError || (InternalError = {}));
export var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterException || (InvalidParameterException = {}));
export var MissingRequiredParameterException;
(function (MissingRequiredParameterException) {
    /**
     * @internal
     */
    MissingRequiredParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MissingRequiredParameterException || (MissingRequiredParameterException = {}));
export var OperationNotPermittedException;
(function (OperationNotPermittedException) {
    /**
     * @internal
     */
    OperationNotPermittedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OperationNotPermittedException || (OperationNotPermittedException = {}));
export var UnauthorizedOperationException;
(function (UnauthorizedOperationException) {
    /**
     * @internal
     */
    UnauthorizedOperationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnauthorizedOperationException || (UnauthorizedOperationException = {}));
export var LicenseType;
(function (LicenseType) {
    LicenseType["AWS"] = "AWS";
    LicenseType["BYOL"] = "BYOL";
})(LicenseType || (LicenseType = {}));
export var CreateReplicationJobRequest;
(function (CreateReplicationJobRequest) {
    /**
     * @internal
     */
    CreateReplicationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateReplicationJobRequest || (CreateReplicationJobRequest = {}));
export var CreateReplicationJobResponse;
(function (CreateReplicationJobResponse) {
    /**
     * @internal
     */
    CreateReplicationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateReplicationJobResponse || (CreateReplicationJobResponse = {}));
export var NoConnectorsAvailableException;
(function (NoConnectorsAvailableException) {
    /**
     * @internal
     */
    NoConnectorsAvailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoConnectorsAvailableException || (NoConnectorsAvailableException = {}));
export var ReplicationJobAlreadyExistsException;
(function (ReplicationJobAlreadyExistsException) {
    /**
     * @internal
     */
    ReplicationJobAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationJobAlreadyExistsException || (ReplicationJobAlreadyExistsException = {}));
export var ServerCannotBeReplicatedException;
(function (ServerCannotBeReplicatedException) {
    /**
     * @internal
     */
    ServerCannotBeReplicatedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerCannotBeReplicatedException || (ServerCannotBeReplicatedException = {}));
export var TemporarilyUnavailableException;
(function (TemporarilyUnavailableException) {
    /**
     * @internal
     */
    TemporarilyUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TemporarilyUnavailableException || (TemporarilyUnavailableException = {}));
export var DeleteAppRequest;
(function (DeleteAppRequest) {
    /**
     * @internal
     */
    DeleteAppRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAppRequest || (DeleteAppRequest = {}));
export var DeleteAppResponse;
(function (DeleteAppResponse) {
    /**
     * @internal
     */
    DeleteAppResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAppResponse || (DeleteAppResponse = {}));
export var DeleteAppLaunchConfigurationRequest;
(function (DeleteAppLaunchConfigurationRequest) {
    /**
     * @internal
     */
    DeleteAppLaunchConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAppLaunchConfigurationRequest || (DeleteAppLaunchConfigurationRequest = {}));
export var DeleteAppLaunchConfigurationResponse;
(function (DeleteAppLaunchConfigurationResponse) {
    /**
     * @internal
     */
    DeleteAppLaunchConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAppLaunchConfigurationResponse || (DeleteAppLaunchConfigurationResponse = {}));
export var DeleteAppReplicationConfigurationRequest;
(function (DeleteAppReplicationConfigurationRequest) {
    /**
     * @internal
     */
    DeleteAppReplicationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAppReplicationConfigurationRequest || (DeleteAppReplicationConfigurationRequest = {}));
export var DeleteAppReplicationConfigurationResponse;
(function (DeleteAppReplicationConfigurationResponse) {
    /**
     * @internal
     */
    DeleteAppReplicationConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAppReplicationConfigurationResponse || (DeleteAppReplicationConfigurationResponse = {}));
export var DeleteAppValidationConfigurationRequest;
(function (DeleteAppValidationConfigurationRequest) {
    /**
     * @internal
     */
    DeleteAppValidationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAppValidationConfigurationRequest || (DeleteAppValidationConfigurationRequest = {}));
export var DeleteAppValidationConfigurationResponse;
(function (DeleteAppValidationConfigurationResponse) {
    /**
     * @internal
     */
    DeleteAppValidationConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAppValidationConfigurationResponse || (DeleteAppValidationConfigurationResponse = {}));
export var DeleteReplicationJobRequest;
(function (DeleteReplicationJobRequest) {
    /**
     * @internal
     */
    DeleteReplicationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReplicationJobRequest || (DeleteReplicationJobRequest = {}));
export var DeleteReplicationJobResponse;
(function (DeleteReplicationJobResponse) {
    /**
     * @internal
     */
    DeleteReplicationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReplicationJobResponse || (DeleteReplicationJobResponse = {}));
export var ReplicationJobNotFoundException;
(function (ReplicationJobNotFoundException) {
    /**
     * @internal
     */
    ReplicationJobNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationJobNotFoundException || (ReplicationJobNotFoundException = {}));
export var DeleteServerCatalogRequest;
(function (DeleteServerCatalogRequest) {
    /**
     * @internal
     */
    DeleteServerCatalogRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteServerCatalogRequest || (DeleteServerCatalogRequest = {}));
export var DeleteServerCatalogResponse;
(function (DeleteServerCatalogResponse) {
    /**
     * @internal
     */
    DeleteServerCatalogResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteServerCatalogResponse || (DeleteServerCatalogResponse = {}));
export var DisassociateConnectorRequest;
(function (DisassociateConnectorRequest) {
    /**
     * @internal
     */
    DisassociateConnectorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateConnectorRequest || (DisassociateConnectorRequest = {}));
export var DisassociateConnectorResponse;
(function (DisassociateConnectorResponse) {
    /**
     * @internal
     */
    DisassociateConnectorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateConnectorResponse || (DisassociateConnectorResponse = {}));
export var OutputFormat;
(function (OutputFormat) {
    OutputFormat["JSON"] = "JSON";
    OutputFormat["YAML"] = "YAML";
})(OutputFormat || (OutputFormat = {}));
export var GenerateChangeSetRequest;
(function (GenerateChangeSetRequest) {
    /**
     * @internal
     */
    GenerateChangeSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateChangeSetRequest || (GenerateChangeSetRequest = {}));
export var GenerateChangeSetResponse;
(function (GenerateChangeSetResponse) {
    /**
     * @internal
     */
    GenerateChangeSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateChangeSetResponse || (GenerateChangeSetResponse = {}));
export var GenerateTemplateRequest;
(function (GenerateTemplateRequest) {
    /**
     * @internal
     */
    GenerateTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateTemplateRequest || (GenerateTemplateRequest = {}));
export var GenerateTemplateResponse;
(function (GenerateTemplateResponse) {
    /**
     * @internal
     */
    GenerateTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GenerateTemplateResponse || (GenerateTemplateResponse = {}));
export var GetAppRequest;
(function (GetAppRequest) {
    /**
     * @internal
     */
    GetAppRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppRequest || (GetAppRequest = {}));
export var GetAppResponse;
(function (GetAppResponse) {
    /**
     * @internal
     */
    GetAppResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppResponse || (GetAppResponse = {}));
export var GetAppLaunchConfigurationRequest;
(function (GetAppLaunchConfigurationRequest) {
    /**
     * @internal
     */
    GetAppLaunchConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppLaunchConfigurationRequest || (GetAppLaunchConfigurationRequest = {}));
export var UserData;
(function (UserData) {
    /**
     * @internal
     */
    UserData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserData || (UserData = {}));
export var ServerLaunchConfiguration;
(function (ServerLaunchConfiguration) {
    /**
     * @internal
     */
    ServerLaunchConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerLaunchConfiguration || (ServerLaunchConfiguration = {}));
export var ServerGroupLaunchConfiguration;
(function (ServerGroupLaunchConfiguration) {
    /**
     * @internal
     */
    ServerGroupLaunchConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerGroupLaunchConfiguration || (ServerGroupLaunchConfiguration = {}));
export var GetAppLaunchConfigurationResponse;
(function (GetAppLaunchConfigurationResponse) {
    /**
     * @internal
     */
    GetAppLaunchConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppLaunchConfigurationResponse || (GetAppLaunchConfigurationResponse = {}));
export var GetAppReplicationConfigurationRequest;
(function (GetAppReplicationConfigurationRequest) {
    /**
     * @internal
     */
    GetAppReplicationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppReplicationConfigurationRequest || (GetAppReplicationConfigurationRequest = {}));
export var ServerReplicationParameters;
(function (ServerReplicationParameters) {
    /**
     * @internal
     */
    ServerReplicationParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerReplicationParameters || (ServerReplicationParameters = {}));
export var ServerReplicationConfiguration;
(function (ServerReplicationConfiguration) {
    /**
     * @internal
     */
    ServerReplicationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerReplicationConfiguration || (ServerReplicationConfiguration = {}));
export var ServerGroupReplicationConfiguration;
(function (ServerGroupReplicationConfiguration) {
    /**
     * @internal
     */
    ServerGroupReplicationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerGroupReplicationConfiguration || (ServerGroupReplicationConfiguration = {}));
export var GetAppReplicationConfigurationResponse;
(function (GetAppReplicationConfigurationResponse) {
    /**
     * @internal
     */
    GetAppReplicationConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppReplicationConfigurationResponse || (GetAppReplicationConfigurationResponse = {}));
export var GetAppValidationConfigurationRequest;
(function (GetAppValidationConfigurationRequest) {
    /**
     * @internal
     */
    GetAppValidationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppValidationConfigurationRequest || (GetAppValidationConfigurationRequest = {}));
export var ServerValidationStrategy;
(function (ServerValidationStrategy) {
    ServerValidationStrategy["USERDATA"] = "USERDATA";
})(ServerValidationStrategy || (ServerValidationStrategy = {}));
export var UserDataValidationParameters;
(function (UserDataValidationParameters) {
    /**
     * @internal
     */
    UserDataValidationParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserDataValidationParameters || (UserDataValidationParameters = {}));
export var ServerValidationConfiguration;
(function (ServerValidationConfiguration) {
    /**
     * @internal
     */
    ServerValidationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerValidationConfiguration || (ServerValidationConfiguration = {}));
export var ServerGroupValidationConfiguration;
(function (ServerGroupValidationConfiguration) {
    /**
     * @internal
     */
    ServerGroupValidationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerGroupValidationConfiguration || (ServerGroupValidationConfiguration = {}));
export var GetAppValidationConfigurationResponse;
(function (GetAppValidationConfigurationResponse) {
    /**
     * @internal
     */
    GetAppValidationConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppValidationConfigurationResponse || (GetAppValidationConfigurationResponse = {}));
export var GetAppValidationOutputRequest;
(function (GetAppValidationOutputRequest) {
    /**
     * @internal
     */
    GetAppValidationOutputRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppValidationOutputRequest || (GetAppValidationOutputRequest = {}));
export var ServerValidationOutput;
(function (ServerValidationOutput) {
    /**
     * @internal
     */
    ServerValidationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerValidationOutput || (ServerValidationOutput = {}));
export var ValidationStatus;
(function (ValidationStatus) {
    ValidationStatus["Failed"] = "FAILED";
    ValidationStatus["InProgress"] = "IN_PROGRESS";
    ValidationStatus["Pending"] = "PENDING";
    ValidationStatus["ReadyForValidation"] = "READY_FOR_VALIDATION";
    ValidationStatus["Succeeded"] = "SUCCEEDED";
})(ValidationStatus || (ValidationStatus = {}));
export var ValidationOutput;
(function (ValidationOutput) {
    /**
     * @internal
     */
    ValidationOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationOutput || (ValidationOutput = {}));
export var GetAppValidationOutputResponse;
(function (GetAppValidationOutputResponse) {
    /**
     * @internal
     */
    GetAppValidationOutputResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppValidationOutputResponse || (GetAppValidationOutputResponse = {}));
export var GetConnectorsRequest;
(function (GetConnectorsRequest) {
    /**
     * @internal
     */
    GetConnectorsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetConnectorsRequest || (GetConnectorsRequest = {}));
export var ConnectorCapability;
(function (ConnectorCapability) {
    ConnectorCapability["hyperVManager"] = "HYPERV-MANAGER";
    ConnectorCapability["scvmm"] = "SCVMM";
    ConnectorCapability["smsOptimized"] = "SMS_OPTIMIZED";
    ConnectorCapability["snapshotBatching"] = "SNAPSHOT_BATCHING";
    ConnectorCapability["vSphere"] = "VSPHERE";
})(ConnectorCapability || (ConnectorCapability = {}));
export var ConnectorStatus;
(function (ConnectorStatus) {
    ConnectorStatus["Healthy"] = "HEALTHY";
    ConnectorStatus["Unhealthy"] = "UNHEALTHY";
})(ConnectorStatus || (ConnectorStatus = {}));
export var Connector;
(function (Connector) {
    /**
     * @internal
     */
    Connector.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Connector || (Connector = {}));
export var GetConnectorsResponse;
(function (GetConnectorsResponse) {
    /**
     * @internal
     */
    GetConnectorsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetConnectorsResponse || (GetConnectorsResponse = {}));
export var GetReplicationJobsRequest;
(function (GetReplicationJobsRequest) {
    /**
     * @internal
     */
    GetReplicationJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetReplicationJobsRequest || (GetReplicationJobsRequest = {}));
export var ReplicationRunStageDetails;
(function (ReplicationRunStageDetails) {
    /**
     * @internal
     */
    ReplicationRunStageDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationRunStageDetails || (ReplicationRunStageDetails = {}));
export var ReplicationRunState;
(function (ReplicationRunState) {
    ReplicationRunState["Active"] = "ACTIVE";
    ReplicationRunState["Completed"] = "COMPLETED";
    ReplicationRunState["Deleted"] = "DELETED";
    ReplicationRunState["Deleting"] = "DELETING";
    ReplicationRunState["Failed"] = "FAILED";
    ReplicationRunState["Missed"] = "MISSED";
    ReplicationRunState["Pending"] = "PENDING";
})(ReplicationRunState || (ReplicationRunState = {}));
export var ReplicationRunType;
(function (ReplicationRunType) {
    ReplicationRunType["Automatic"] = "AUTOMATIC";
    ReplicationRunType["OnDemand"] = "ON_DEMAND";
})(ReplicationRunType || (ReplicationRunType = {}));
export var ReplicationRun;
(function (ReplicationRun) {
    /**
     * @internal
     */
    ReplicationRun.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationRun || (ReplicationRun = {}));
export var ReplicationJobState;
(function (ReplicationJobState) {
    ReplicationJobState["Active"] = "ACTIVE";
    ReplicationJobState["Completed"] = "COMPLETED";
    ReplicationJobState["Deleted"] = "DELETED";
    ReplicationJobState["Deleting"] = "DELETING";
    ReplicationJobState["Failed"] = "FAILED";
    ReplicationJobState["Failing"] = "FAILING";
    ReplicationJobState["PausedOnFailure"] = "PAUSED_ON_FAILURE";
    ReplicationJobState["Pending"] = "PENDING";
})(ReplicationJobState || (ReplicationJobState = {}));
export var ReplicationJob;
(function (ReplicationJob) {
    /**
     * @internal
     */
    ReplicationJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationJob || (ReplicationJob = {}));
export var GetReplicationJobsResponse;
(function (GetReplicationJobsResponse) {
    /**
     * @internal
     */
    GetReplicationJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetReplicationJobsResponse || (GetReplicationJobsResponse = {}));
export var GetReplicationRunsRequest;
(function (GetReplicationRunsRequest) {
    /**
     * @internal
     */
    GetReplicationRunsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetReplicationRunsRequest || (GetReplicationRunsRequest = {}));
export var GetReplicationRunsResponse;
(function (GetReplicationRunsResponse) {
    /**
     * @internal
     */
    GetReplicationRunsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetReplicationRunsResponse || (GetReplicationRunsResponse = {}));
export var GetServersRequest;
(function (GetServersRequest) {
    /**
     * @internal
     */
    GetServersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServersRequest || (GetServersRequest = {}));
export var ServerCatalogStatus;
(function (ServerCatalogStatus) {
    ServerCatalogStatus["Available"] = "AVAILABLE";
    ServerCatalogStatus["Deleted"] = "DELETED";
    ServerCatalogStatus["Expired"] = "EXPIRED";
    ServerCatalogStatus["Importing"] = "IMPORTING";
    ServerCatalogStatus["NotImported"] = "NOT_IMPORTED";
})(ServerCatalogStatus || (ServerCatalogStatus = {}));
export var GetServersResponse;
(function (GetServersResponse) {
    /**
     * @internal
     */
    GetServersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServersResponse || (GetServersResponse = {}));
export var ImportAppCatalogRequest;
(function (ImportAppCatalogRequest) {
    /**
     * @internal
     */
    ImportAppCatalogRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportAppCatalogRequest || (ImportAppCatalogRequest = {}));
export var ImportAppCatalogResponse;
(function (ImportAppCatalogResponse) {
    /**
     * @internal
     */
    ImportAppCatalogResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportAppCatalogResponse || (ImportAppCatalogResponse = {}));
export var ImportServerCatalogRequest;
(function (ImportServerCatalogRequest) {
    /**
     * @internal
     */
    ImportServerCatalogRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportServerCatalogRequest || (ImportServerCatalogRequest = {}));
export var ImportServerCatalogResponse;
(function (ImportServerCatalogResponse) {
    /**
     * @internal
     */
    ImportServerCatalogResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportServerCatalogResponse || (ImportServerCatalogResponse = {}));
export var LaunchAppRequest;
(function (LaunchAppRequest) {
    /**
     * @internal
     */
    LaunchAppRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LaunchAppRequest || (LaunchAppRequest = {}));
export var LaunchAppResponse;
(function (LaunchAppResponse) {
    /**
     * @internal
     */
    LaunchAppResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LaunchAppResponse || (LaunchAppResponse = {}));
export var ListAppsRequest;
(function (ListAppsRequest) {
    /**
     * @internal
     */
    ListAppsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAppsRequest || (ListAppsRequest = {}));
export var ListAppsResponse;
(function (ListAppsResponse) {
    /**
     * @internal
     */
    ListAppsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAppsResponse || (ListAppsResponse = {}));
export var NotificationContext;
(function (NotificationContext) {
    /**
     * @internal
     */
    NotificationContext.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotificationContext || (NotificationContext = {}));
export var NotifyAppValidationOutputRequest;
(function (NotifyAppValidationOutputRequest) {
    /**
     * @internal
     */
    NotifyAppValidationOutputRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotifyAppValidationOutputRequest || (NotifyAppValidationOutputRequest = {}));
export var NotifyAppValidationOutputResponse;
(function (NotifyAppValidationOutputResponse) {
    /**
     * @internal
     */
    NotifyAppValidationOutputResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotifyAppValidationOutputResponse || (NotifyAppValidationOutputResponse = {}));
export var PutAppLaunchConfigurationRequest;
(function (PutAppLaunchConfigurationRequest) {
    /**
     * @internal
     */
    PutAppLaunchConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAppLaunchConfigurationRequest || (PutAppLaunchConfigurationRequest = {}));
export var PutAppLaunchConfigurationResponse;
(function (PutAppLaunchConfigurationResponse) {
    /**
     * @internal
     */
    PutAppLaunchConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAppLaunchConfigurationResponse || (PutAppLaunchConfigurationResponse = {}));
export var PutAppReplicationConfigurationRequest;
(function (PutAppReplicationConfigurationRequest) {
    /**
     * @internal
     */
    PutAppReplicationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAppReplicationConfigurationRequest || (PutAppReplicationConfigurationRequest = {}));
export var PutAppReplicationConfigurationResponse;
(function (PutAppReplicationConfigurationResponse) {
    /**
     * @internal
     */
    PutAppReplicationConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAppReplicationConfigurationResponse || (PutAppReplicationConfigurationResponse = {}));
export var PutAppValidationConfigurationRequest;
(function (PutAppValidationConfigurationRequest) {
    /**
     * @internal
     */
    PutAppValidationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAppValidationConfigurationRequest || (PutAppValidationConfigurationRequest = {}));
export var PutAppValidationConfigurationResponse;
(function (PutAppValidationConfigurationResponse) {
    /**
     * @internal
     */
    PutAppValidationConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAppValidationConfigurationResponse || (PutAppValidationConfigurationResponse = {}));
export var StartAppReplicationRequest;
(function (StartAppReplicationRequest) {
    /**
     * @internal
     */
    StartAppReplicationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartAppReplicationRequest || (StartAppReplicationRequest = {}));
export var StartAppReplicationResponse;
(function (StartAppReplicationResponse) {
    /**
     * @internal
     */
    StartAppReplicationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartAppReplicationResponse || (StartAppReplicationResponse = {}));
export var StartOnDemandAppReplicationRequest;
(function (StartOnDemandAppReplicationRequest) {
    /**
     * @internal
     */
    StartOnDemandAppReplicationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartOnDemandAppReplicationRequest || (StartOnDemandAppReplicationRequest = {}));
export var StartOnDemandAppReplicationResponse;
(function (StartOnDemandAppReplicationResponse) {
    /**
     * @internal
     */
    StartOnDemandAppReplicationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartOnDemandAppReplicationResponse || (StartOnDemandAppReplicationResponse = {}));
export var DryRunOperationException;
(function (DryRunOperationException) {
    /**
     * @internal
     */
    DryRunOperationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DryRunOperationException || (DryRunOperationException = {}));
export var ReplicationRunLimitExceededException;
(function (ReplicationRunLimitExceededException) {
    /**
     * @internal
     */
    ReplicationRunLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationRunLimitExceededException || (ReplicationRunLimitExceededException = {}));
export var StartOnDemandReplicationRunRequest;
(function (StartOnDemandReplicationRunRequest) {
    /**
     * @internal
     */
    StartOnDemandReplicationRunRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartOnDemandReplicationRunRequest || (StartOnDemandReplicationRunRequest = {}));
export var StartOnDemandReplicationRunResponse;
(function (StartOnDemandReplicationRunResponse) {
    /**
     * @internal
     */
    StartOnDemandReplicationRunResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartOnDemandReplicationRunResponse || (StartOnDemandReplicationRunResponse = {}));
export var StopAppReplicationRequest;
(function (StopAppReplicationRequest) {
    /**
     * @internal
     */
    StopAppReplicationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopAppReplicationRequest || (StopAppReplicationRequest = {}));
export var StopAppReplicationResponse;
(function (StopAppReplicationResponse) {
    /**
     * @internal
     */
    StopAppReplicationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopAppReplicationResponse || (StopAppReplicationResponse = {}));
export var TerminateAppRequest;
(function (TerminateAppRequest) {
    /**
     * @internal
     */
    TerminateAppRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TerminateAppRequest || (TerminateAppRequest = {}));
export var TerminateAppResponse;
(function (TerminateAppResponse) {
    /**
     * @internal
     */
    TerminateAppResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TerminateAppResponse || (TerminateAppResponse = {}));
export var UpdateAppRequest;
(function (UpdateAppRequest) {
    /**
     * @internal
     */
    UpdateAppRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAppRequest || (UpdateAppRequest = {}));
export var UpdateAppResponse;
(function (UpdateAppResponse) {
    /**
     * @internal
     */
    UpdateAppResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAppResponse || (UpdateAppResponse = {}));
export var UpdateReplicationJobRequest;
(function (UpdateReplicationJobRequest) {
    /**
     * @internal
     */
    UpdateReplicationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateReplicationJobRequest || (UpdateReplicationJobRequest = {}));
export var UpdateReplicationJobResponse;
(function (UpdateReplicationJobResponse) {
    /**
     * @internal
     */
    UpdateReplicationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateReplicationJobResponse || (UpdateReplicationJobResponse = {}));
//# sourceMappingURL=models_0.js.map