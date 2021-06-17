"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisassociateConnectorRequest = exports.DeleteServerCatalogResponse = exports.DeleteServerCatalogRequest = exports.ReplicationJobNotFoundException = exports.DeleteReplicationJobResponse = exports.DeleteReplicationJobRequest = exports.DeleteAppValidationConfigurationResponse = exports.DeleteAppValidationConfigurationRequest = exports.DeleteAppReplicationConfigurationResponse = exports.DeleteAppReplicationConfigurationRequest = exports.DeleteAppLaunchConfigurationResponse = exports.DeleteAppLaunchConfigurationRequest = exports.DeleteAppResponse = exports.DeleteAppRequest = exports.TemporarilyUnavailableException = exports.ServerCannotBeReplicatedException = exports.ReplicationJobAlreadyExistsException = exports.NoConnectorsAvailableException = exports.CreateReplicationJobResponse = exports.CreateReplicationJobRequest = exports.LicenseType = exports.UnauthorizedOperationException = exports.OperationNotPermittedException = exports.MissingRequiredParameterException = exports.InvalidParameterException = exports.InternalError = exports.CreateAppResponse = exports.CreateAppRequest = exports.Tag = exports.ServerGroup = exports.Server = exports.VmServer = exports.VmServerAddress = exports.VmManagerType = exports.ServerType = exports.AppValidationOutput = exports.SSMOutput = exports.AppValidationConfiguration = exports.SSMValidationParameters = exports.Source = exports.S3Location = exports.ScriptType = exports.AppValidationStrategy = exports.AppSummary = exports.AppStatus = exports.LaunchDetails = exports.AppReplicationStatus = exports.AppReplicationConfigurationStatus = exports.AppLaunchStatus = exports.AppLaunchConfigurationStatus = void 0;
exports.ImportServerCatalogRequest = exports.ImportAppCatalogResponse = exports.ImportAppCatalogRequest = exports.GetServersResponse = exports.ServerCatalogStatus = exports.GetServersRequest = exports.GetReplicationRunsResponse = exports.GetReplicationRunsRequest = exports.GetReplicationJobsResponse = exports.ReplicationJob = exports.ReplicationJobState = exports.ReplicationRun = exports.ReplicationRunType = exports.ReplicationRunState = exports.ReplicationRunStageDetails = exports.GetReplicationJobsRequest = exports.GetConnectorsResponse = exports.Connector = exports.ConnectorStatus = exports.ConnectorCapability = exports.GetConnectorsRequest = exports.GetAppValidationOutputResponse = exports.ValidationOutput = exports.ValidationStatus = exports.ServerValidationOutput = exports.GetAppValidationOutputRequest = exports.GetAppValidationConfigurationResponse = exports.ServerGroupValidationConfiguration = exports.ServerValidationConfiguration = exports.UserDataValidationParameters = exports.ServerValidationStrategy = exports.GetAppValidationConfigurationRequest = exports.GetAppReplicationConfigurationResponse = exports.ServerGroupReplicationConfiguration = exports.ServerReplicationConfiguration = exports.ServerReplicationParameters = exports.GetAppReplicationConfigurationRequest = exports.GetAppLaunchConfigurationResponse = exports.ServerGroupLaunchConfiguration = exports.ServerLaunchConfiguration = exports.UserData = exports.GetAppLaunchConfigurationRequest = exports.GetAppResponse = exports.GetAppRequest = exports.GenerateTemplateResponse = exports.GenerateTemplateRequest = exports.GenerateChangeSetResponse = exports.GenerateChangeSetRequest = exports.OutputFormat = exports.DisassociateConnectorResponse = void 0;
exports.UpdateReplicationJobResponse = exports.UpdateReplicationJobRequest = exports.UpdateAppResponse = exports.UpdateAppRequest = exports.TerminateAppResponse = exports.TerminateAppRequest = exports.StopAppReplicationResponse = exports.StopAppReplicationRequest = exports.StartOnDemandReplicationRunResponse = exports.StartOnDemandReplicationRunRequest = exports.ReplicationRunLimitExceededException = exports.DryRunOperationException = exports.StartOnDemandAppReplicationResponse = exports.StartOnDemandAppReplicationRequest = exports.StartAppReplicationResponse = exports.StartAppReplicationRequest = exports.PutAppValidationConfigurationResponse = exports.PutAppValidationConfigurationRequest = exports.PutAppReplicationConfigurationResponse = exports.PutAppReplicationConfigurationRequest = exports.PutAppLaunchConfigurationResponse = exports.PutAppLaunchConfigurationRequest = exports.NotifyAppValidationOutputResponse = exports.NotifyAppValidationOutputRequest = exports.NotificationContext = exports.ListAppsResponse = exports.ListAppsRequest = exports.LaunchAppResponse = exports.LaunchAppRequest = exports.ImportServerCatalogResponse = void 0;
var AppLaunchConfigurationStatus;
(function (AppLaunchConfigurationStatus) {
    AppLaunchConfigurationStatus["Configured"] = "CONFIGURED";
    AppLaunchConfigurationStatus["NotConfigured"] = "NOT_CONFIGURED";
})(AppLaunchConfigurationStatus = exports.AppLaunchConfigurationStatus || (exports.AppLaunchConfigurationStatus = {}));
var AppLaunchStatus;
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
})(AppLaunchStatus = exports.AppLaunchStatus || (exports.AppLaunchStatus = {}));
var AppReplicationConfigurationStatus;
(function (AppReplicationConfigurationStatus) {
    AppReplicationConfigurationStatus["Configured"] = "CONFIGURED";
    AppReplicationConfigurationStatus["NotConfigured"] = "NOT_CONFIGURED";
})(AppReplicationConfigurationStatus = exports.AppReplicationConfigurationStatus || (exports.AppReplicationConfigurationStatus = {}));
var AppReplicationStatus;
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
})(AppReplicationStatus = exports.AppReplicationStatus || (exports.AppReplicationStatus = {}));
var LaunchDetails;
(function (LaunchDetails) {
    /**
     * @internal
     */
    LaunchDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchDetails = exports.LaunchDetails || (exports.LaunchDetails = {}));
var AppStatus;
(function (AppStatus) {
    AppStatus["Active"] = "ACTIVE";
    AppStatus["Creating"] = "CREATING";
    AppStatus["DELETE_FAILED"] = "DELETE_FAILED";
    AppStatus["Deleted"] = "DELETED";
    AppStatus["Deleting"] = "DELETING";
    AppStatus["Updating"] = "UPDATING";
})(AppStatus = exports.AppStatus || (exports.AppStatus = {}));
var AppSummary;
(function (AppSummary) {
    /**
     * @internal
     */
    AppSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AppSummary = exports.AppSummary || (exports.AppSummary = {}));
var AppValidationStrategy;
(function (AppValidationStrategy) {
    AppValidationStrategy["SSM"] = "SSM";
})(AppValidationStrategy = exports.AppValidationStrategy || (exports.AppValidationStrategy = {}));
var ScriptType;
(function (ScriptType) {
    ScriptType["POWERSHELL_SCRIPT"] = "POWERSHELL_SCRIPT";
    ScriptType["SHELL_SCRIPT"] = "SHELL_SCRIPT";
})(ScriptType = exports.ScriptType || (exports.ScriptType = {}));
var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var Source;
(function (Source) {
    /**
     * @internal
     */
    Source.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Source = exports.Source || (exports.Source = {}));
var SSMValidationParameters;
(function (SSMValidationParameters) {
    /**
     * @internal
     */
    SSMValidationParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SSMValidationParameters = exports.SSMValidationParameters || (exports.SSMValidationParameters = {}));
var AppValidationConfiguration;
(function (AppValidationConfiguration) {
    /**
     * @internal
     */
    AppValidationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AppValidationConfiguration = exports.AppValidationConfiguration || (exports.AppValidationConfiguration = {}));
var SSMOutput;
(function (SSMOutput) {
    /**
     * @internal
     */
    SSMOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SSMOutput = exports.SSMOutput || (exports.SSMOutput = {}));
var AppValidationOutput;
(function (AppValidationOutput) {
    /**
     * @internal
     */
    AppValidationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AppValidationOutput = exports.AppValidationOutput || (exports.AppValidationOutput = {}));
var ServerType;
(function (ServerType) {
    ServerType["VirtualMachine"] = "VIRTUAL_MACHINE";
})(ServerType = exports.ServerType || (exports.ServerType = {}));
var VmManagerType;
(function (VmManagerType) {
    VmManagerType["hyperVManager"] = "HYPERV-MANAGER";
    VmManagerType["scvmm"] = "SCVMM";
    VmManagerType["vSphere"] = "VSPHERE";
})(VmManagerType = exports.VmManagerType || (exports.VmManagerType = {}));
var VmServerAddress;
(function (VmServerAddress) {
    /**
     * @internal
     */
    VmServerAddress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VmServerAddress = exports.VmServerAddress || (exports.VmServerAddress = {}));
var VmServer;
(function (VmServer) {
    /**
     * @internal
     */
    VmServer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VmServer = exports.VmServer || (exports.VmServer = {}));
var Server;
(function (Server) {
    /**
     * @internal
     */
    Server.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Server = exports.Server || (exports.Server = {}));
var ServerGroup;
(function (ServerGroup) {
    /**
     * @internal
     */
    ServerGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerGroup = exports.ServerGroup || (exports.ServerGroup = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateAppRequest;
(function (CreateAppRequest) {
    /**
     * @internal
     */
    CreateAppRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAppRequest = exports.CreateAppRequest || (exports.CreateAppRequest = {}));
var CreateAppResponse;
(function (CreateAppResponse) {
    /**
     * @internal
     */
    CreateAppResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAppResponse = exports.CreateAppResponse || (exports.CreateAppResponse = {}));
var InternalError;
(function (InternalError) {
    /**
     * @internal
     */
    InternalError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalError = exports.InternalError || (exports.InternalError = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var MissingRequiredParameterException;
(function (MissingRequiredParameterException) {
    /**
     * @internal
     */
    MissingRequiredParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MissingRequiredParameterException = exports.MissingRequiredParameterException || (exports.MissingRequiredParameterException = {}));
var OperationNotPermittedException;
(function (OperationNotPermittedException) {
    /**
     * @internal
     */
    OperationNotPermittedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationNotPermittedException = exports.OperationNotPermittedException || (exports.OperationNotPermittedException = {}));
var UnauthorizedOperationException;
(function (UnauthorizedOperationException) {
    /**
     * @internal
     */
    UnauthorizedOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthorizedOperationException = exports.UnauthorizedOperationException || (exports.UnauthorizedOperationException = {}));
var LicenseType;
(function (LicenseType) {
    LicenseType["AWS"] = "AWS";
    LicenseType["BYOL"] = "BYOL";
})(LicenseType = exports.LicenseType || (exports.LicenseType = {}));
var CreateReplicationJobRequest;
(function (CreateReplicationJobRequest) {
    /**
     * @internal
     */
    CreateReplicationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplicationJobRequest = exports.CreateReplicationJobRequest || (exports.CreateReplicationJobRequest = {}));
var CreateReplicationJobResponse;
(function (CreateReplicationJobResponse) {
    /**
     * @internal
     */
    CreateReplicationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplicationJobResponse = exports.CreateReplicationJobResponse || (exports.CreateReplicationJobResponse = {}));
var NoConnectorsAvailableException;
(function (NoConnectorsAvailableException) {
    /**
     * @internal
     */
    NoConnectorsAvailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoConnectorsAvailableException = exports.NoConnectorsAvailableException || (exports.NoConnectorsAvailableException = {}));
var ReplicationJobAlreadyExistsException;
(function (ReplicationJobAlreadyExistsException) {
    /**
     * @internal
     */
    ReplicationJobAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationJobAlreadyExistsException = exports.ReplicationJobAlreadyExistsException || (exports.ReplicationJobAlreadyExistsException = {}));
var ServerCannotBeReplicatedException;
(function (ServerCannotBeReplicatedException) {
    /**
     * @internal
     */
    ServerCannotBeReplicatedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerCannotBeReplicatedException = exports.ServerCannotBeReplicatedException || (exports.ServerCannotBeReplicatedException = {}));
var TemporarilyUnavailableException;
(function (TemporarilyUnavailableException) {
    /**
     * @internal
     */
    TemporarilyUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemporarilyUnavailableException = exports.TemporarilyUnavailableException || (exports.TemporarilyUnavailableException = {}));
var DeleteAppRequest;
(function (DeleteAppRequest) {
    /**
     * @internal
     */
    DeleteAppRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAppRequest = exports.DeleteAppRequest || (exports.DeleteAppRequest = {}));
var DeleteAppResponse;
(function (DeleteAppResponse) {
    /**
     * @internal
     */
    DeleteAppResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAppResponse = exports.DeleteAppResponse || (exports.DeleteAppResponse = {}));
var DeleteAppLaunchConfigurationRequest;
(function (DeleteAppLaunchConfigurationRequest) {
    /**
     * @internal
     */
    DeleteAppLaunchConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAppLaunchConfigurationRequest = exports.DeleteAppLaunchConfigurationRequest || (exports.DeleteAppLaunchConfigurationRequest = {}));
var DeleteAppLaunchConfigurationResponse;
(function (DeleteAppLaunchConfigurationResponse) {
    /**
     * @internal
     */
    DeleteAppLaunchConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAppLaunchConfigurationResponse = exports.DeleteAppLaunchConfigurationResponse || (exports.DeleteAppLaunchConfigurationResponse = {}));
var DeleteAppReplicationConfigurationRequest;
(function (DeleteAppReplicationConfigurationRequest) {
    /**
     * @internal
     */
    DeleteAppReplicationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAppReplicationConfigurationRequest = exports.DeleteAppReplicationConfigurationRequest || (exports.DeleteAppReplicationConfigurationRequest = {}));
var DeleteAppReplicationConfigurationResponse;
(function (DeleteAppReplicationConfigurationResponse) {
    /**
     * @internal
     */
    DeleteAppReplicationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAppReplicationConfigurationResponse = exports.DeleteAppReplicationConfigurationResponse || (exports.DeleteAppReplicationConfigurationResponse = {}));
var DeleteAppValidationConfigurationRequest;
(function (DeleteAppValidationConfigurationRequest) {
    /**
     * @internal
     */
    DeleteAppValidationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAppValidationConfigurationRequest = exports.DeleteAppValidationConfigurationRequest || (exports.DeleteAppValidationConfigurationRequest = {}));
var DeleteAppValidationConfigurationResponse;
(function (DeleteAppValidationConfigurationResponse) {
    /**
     * @internal
     */
    DeleteAppValidationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAppValidationConfigurationResponse = exports.DeleteAppValidationConfigurationResponse || (exports.DeleteAppValidationConfigurationResponse = {}));
var DeleteReplicationJobRequest;
(function (DeleteReplicationJobRequest) {
    /**
     * @internal
     */
    DeleteReplicationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationJobRequest = exports.DeleteReplicationJobRequest || (exports.DeleteReplicationJobRequest = {}));
var DeleteReplicationJobResponse;
(function (DeleteReplicationJobResponse) {
    /**
     * @internal
     */
    DeleteReplicationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationJobResponse = exports.DeleteReplicationJobResponse || (exports.DeleteReplicationJobResponse = {}));
var ReplicationJobNotFoundException;
(function (ReplicationJobNotFoundException) {
    /**
     * @internal
     */
    ReplicationJobNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationJobNotFoundException = exports.ReplicationJobNotFoundException || (exports.ReplicationJobNotFoundException = {}));
var DeleteServerCatalogRequest;
(function (DeleteServerCatalogRequest) {
    /**
     * @internal
     */
    DeleteServerCatalogRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServerCatalogRequest = exports.DeleteServerCatalogRequest || (exports.DeleteServerCatalogRequest = {}));
var DeleteServerCatalogResponse;
(function (DeleteServerCatalogResponse) {
    /**
     * @internal
     */
    DeleteServerCatalogResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServerCatalogResponse = exports.DeleteServerCatalogResponse || (exports.DeleteServerCatalogResponse = {}));
var DisassociateConnectorRequest;
(function (DisassociateConnectorRequest) {
    /**
     * @internal
     */
    DisassociateConnectorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateConnectorRequest = exports.DisassociateConnectorRequest || (exports.DisassociateConnectorRequest = {}));
var DisassociateConnectorResponse;
(function (DisassociateConnectorResponse) {
    /**
     * @internal
     */
    DisassociateConnectorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateConnectorResponse = exports.DisassociateConnectorResponse || (exports.DisassociateConnectorResponse = {}));
var OutputFormat;
(function (OutputFormat) {
    OutputFormat["JSON"] = "JSON";
    OutputFormat["YAML"] = "YAML";
})(OutputFormat = exports.OutputFormat || (exports.OutputFormat = {}));
var GenerateChangeSetRequest;
(function (GenerateChangeSetRequest) {
    /**
     * @internal
     */
    GenerateChangeSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateChangeSetRequest = exports.GenerateChangeSetRequest || (exports.GenerateChangeSetRequest = {}));
var GenerateChangeSetResponse;
(function (GenerateChangeSetResponse) {
    /**
     * @internal
     */
    GenerateChangeSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateChangeSetResponse = exports.GenerateChangeSetResponse || (exports.GenerateChangeSetResponse = {}));
var GenerateTemplateRequest;
(function (GenerateTemplateRequest) {
    /**
     * @internal
     */
    GenerateTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateTemplateRequest = exports.GenerateTemplateRequest || (exports.GenerateTemplateRequest = {}));
var GenerateTemplateResponse;
(function (GenerateTemplateResponse) {
    /**
     * @internal
     */
    GenerateTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GenerateTemplateResponse = exports.GenerateTemplateResponse || (exports.GenerateTemplateResponse = {}));
var GetAppRequest;
(function (GetAppRequest) {
    /**
     * @internal
     */
    GetAppRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppRequest = exports.GetAppRequest || (exports.GetAppRequest = {}));
var GetAppResponse;
(function (GetAppResponse) {
    /**
     * @internal
     */
    GetAppResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppResponse = exports.GetAppResponse || (exports.GetAppResponse = {}));
var GetAppLaunchConfigurationRequest;
(function (GetAppLaunchConfigurationRequest) {
    /**
     * @internal
     */
    GetAppLaunchConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppLaunchConfigurationRequest = exports.GetAppLaunchConfigurationRequest || (exports.GetAppLaunchConfigurationRequest = {}));
var UserData;
(function (UserData) {
    /**
     * @internal
     */
    UserData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserData = exports.UserData || (exports.UserData = {}));
var ServerLaunchConfiguration;
(function (ServerLaunchConfiguration) {
    /**
     * @internal
     */
    ServerLaunchConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerLaunchConfiguration = exports.ServerLaunchConfiguration || (exports.ServerLaunchConfiguration = {}));
var ServerGroupLaunchConfiguration;
(function (ServerGroupLaunchConfiguration) {
    /**
     * @internal
     */
    ServerGroupLaunchConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerGroupLaunchConfiguration = exports.ServerGroupLaunchConfiguration || (exports.ServerGroupLaunchConfiguration = {}));
var GetAppLaunchConfigurationResponse;
(function (GetAppLaunchConfigurationResponse) {
    /**
     * @internal
     */
    GetAppLaunchConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppLaunchConfigurationResponse = exports.GetAppLaunchConfigurationResponse || (exports.GetAppLaunchConfigurationResponse = {}));
var GetAppReplicationConfigurationRequest;
(function (GetAppReplicationConfigurationRequest) {
    /**
     * @internal
     */
    GetAppReplicationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppReplicationConfigurationRequest = exports.GetAppReplicationConfigurationRequest || (exports.GetAppReplicationConfigurationRequest = {}));
var ServerReplicationParameters;
(function (ServerReplicationParameters) {
    /**
     * @internal
     */
    ServerReplicationParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerReplicationParameters = exports.ServerReplicationParameters || (exports.ServerReplicationParameters = {}));
var ServerReplicationConfiguration;
(function (ServerReplicationConfiguration) {
    /**
     * @internal
     */
    ServerReplicationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerReplicationConfiguration = exports.ServerReplicationConfiguration || (exports.ServerReplicationConfiguration = {}));
var ServerGroupReplicationConfiguration;
(function (ServerGroupReplicationConfiguration) {
    /**
     * @internal
     */
    ServerGroupReplicationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerGroupReplicationConfiguration = exports.ServerGroupReplicationConfiguration || (exports.ServerGroupReplicationConfiguration = {}));
var GetAppReplicationConfigurationResponse;
(function (GetAppReplicationConfigurationResponse) {
    /**
     * @internal
     */
    GetAppReplicationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppReplicationConfigurationResponse = exports.GetAppReplicationConfigurationResponse || (exports.GetAppReplicationConfigurationResponse = {}));
var GetAppValidationConfigurationRequest;
(function (GetAppValidationConfigurationRequest) {
    /**
     * @internal
     */
    GetAppValidationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppValidationConfigurationRequest = exports.GetAppValidationConfigurationRequest || (exports.GetAppValidationConfigurationRequest = {}));
var ServerValidationStrategy;
(function (ServerValidationStrategy) {
    ServerValidationStrategy["USERDATA"] = "USERDATA";
})(ServerValidationStrategy = exports.ServerValidationStrategy || (exports.ServerValidationStrategy = {}));
var UserDataValidationParameters;
(function (UserDataValidationParameters) {
    /**
     * @internal
     */
    UserDataValidationParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserDataValidationParameters = exports.UserDataValidationParameters || (exports.UserDataValidationParameters = {}));
var ServerValidationConfiguration;
(function (ServerValidationConfiguration) {
    /**
     * @internal
     */
    ServerValidationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerValidationConfiguration = exports.ServerValidationConfiguration || (exports.ServerValidationConfiguration = {}));
var ServerGroupValidationConfiguration;
(function (ServerGroupValidationConfiguration) {
    /**
     * @internal
     */
    ServerGroupValidationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerGroupValidationConfiguration = exports.ServerGroupValidationConfiguration || (exports.ServerGroupValidationConfiguration = {}));
var GetAppValidationConfigurationResponse;
(function (GetAppValidationConfigurationResponse) {
    /**
     * @internal
     */
    GetAppValidationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppValidationConfigurationResponse = exports.GetAppValidationConfigurationResponse || (exports.GetAppValidationConfigurationResponse = {}));
var GetAppValidationOutputRequest;
(function (GetAppValidationOutputRequest) {
    /**
     * @internal
     */
    GetAppValidationOutputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppValidationOutputRequest = exports.GetAppValidationOutputRequest || (exports.GetAppValidationOutputRequest = {}));
var ServerValidationOutput;
(function (ServerValidationOutput) {
    /**
     * @internal
     */
    ServerValidationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerValidationOutput = exports.ServerValidationOutput || (exports.ServerValidationOutput = {}));
var ValidationStatus;
(function (ValidationStatus) {
    ValidationStatus["Failed"] = "FAILED";
    ValidationStatus["InProgress"] = "IN_PROGRESS";
    ValidationStatus["Pending"] = "PENDING";
    ValidationStatus["ReadyForValidation"] = "READY_FOR_VALIDATION";
    ValidationStatus["Succeeded"] = "SUCCEEDED";
})(ValidationStatus = exports.ValidationStatus || (exports.ValidationStatus = {}));
var ValidationOutput;
(function (ValidationOutput) {
    /**
     * @internal
     */
    ValidationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationOutput = exports.ValidationOutput || (exports.ValidationOutput = {}));
var GetAppValidationOutputResponse;
(function (GetAppValidationOutputResponse) {
    /**
     * @internal
     */
    GetAppValidationOutputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppValidationOutputResponse = exports.GetAppValidationOutputResponse || (exports.GetAppValidationOutputResponse = {}));
var GetConnectorsRequest;
(function (GetConnectorsRequest) {
    /**
     * @internal
     */
    GetConnectorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectorsRequest = exports.GetConnectorsRequest || (exports.GetConnectorsRequest = {}));
var ConnectorCapability;
(function (ConnectorCapability) {
    ConnectorCapability["hyperVManager"] = "HYPERV-MANAGER";
    ConnectorCapability["scvmm"] = "SCVMM";
    ConnectorCapability["smsOptimized"] = "SMS_OPTIMIZED";
    ConnectorCapability["snapshotBatching"] = "SNAPSHOT_BATCHING";
    ConnectorCapability["vSphere"] = "VSPHERE";
})(ConnectorCapability = exports.ConnectorCapability || (exports.ConnectorCapability = {}));
var ConnectorStatus;
(function (ConnectorStatus) {
    ConnectorStatus["Healthy"] = "HEALTHY";
    ConnectorStatus["Unhealthy"] = "UNHEALTHY";
})(ConnectorStatus = exports.ConnectorStatus || (exports.ConnectorStatus = {}));
var Connector;
(function (Connector) {
    /**
     * @internal
     */
    Connector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Connector = exports.Connector || (exports.Connector = {}));
var GetConnectorsResponse;
(function (GetConnectorsResponse) {
    /**
     * @internal
     */
    GetConnectorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConnectorsResponse = exports.GetConnectorsResponse || (exports.GetConnectorsResponse = {}));
var GetReplicationJobsRequest;
(function (GetReplicationJobsRequest) {
    /**
     * @internal
     */
    GetReplicationJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReplicationJobsRequest = exports.GetReplicationJobsRequest || (exports.GetReplicationJobsRequest = {}));
var ReplicationRunStageDetails;
(function (ReplicationRunStageDetails) {
    /**
     * @internal
     */
    ReplicationRunStageDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationRunStageDetails = exports.ReplicationRunStageDetails || (exports.ReplicationRunStageDetails = {}));
var ReplicationRunState;
(function (ReplicationRunState) {
    ReplicationRunState["Active"] = "ACTIVE";
    ReplicationRunState["Completed"] = "COMPLETED";
    ReplicationRunState["Deleted"] = "DELETED";
    ReplicationRunState["Deleting"] = "DELETING";
    ReplicationRunState["Failed"] = "FAILED";
    ReplicationRunState["Missed"] = "MISSED";
    ReplicationRunState["Pending"] = "PENDING";
})(ReplicationRunState = exports.ReplicationRunState || (exports.ReplicationRunState = {}));
var ReplicationRunType;
(function (ReplicationRunType) {
    ReplicationRunType["Automatic"] = "AUTOMATIC";
    ReplicationRunType["OnDemand"] = "ON_DEMAND";
})(ReplicationRunType = exports.ReplicationRunType || (exports.ReplicationRunType = {}));
var ReplicationRun;
(function (ReplicationRun) {
    /**
     * @internal
     */
    ReplicationRun.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationRun = exports.ReplicationRun || (exports.ReplicationRun = {}));
var ReplicationJobState;
(function (ReplicationJobState) {
    ReplicationJobState["Active"] = "ACTIVE";
    ReplicationJobState["Completed"] = "COMPLETED";
    ReplicationJobState["Deleted"] = "DELETED";
    ReplicationJobState["Deleting"] = "DELETING";
    ReplicationJobState["Failed"] = "FAILED";
    ReplicationJobState["Failing"] = "FAILING";
    ReplicationJobState["PausedOnFailure"] = "PAUSED_ON_FAILURE";
    ReplicationJobState["Pending"] = "PENDING";
})(ReplicationJobState = exports.ReplicationJobState || (exports.ReplicationJobState = {}));
var ReplicationJob;
(function (ReplicationJob) {
    /**
     * @internal
     */
    ReplicationJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationJob = exports.ReplicationJob || (exports.ReplicationJob = {}));
var GetReplicationJobsResponse;
(function (GetReplicationJobsResponse) {
    /**
     * @internal
     */
    GetReplicationJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReplicationJobsResponse = exports.GetReplicationJobsResponse || (exports.GetReplicationJobsResponse = {}));
var GetReplicationRunsRequest;
(function (GetReplicationRunsRequest) {
    /**
     * @internal
     */
    GetReplicationRunsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReplicationRunsRequest = exports.GetReplicationRunsRequest || (exports.GetReplicationRunsRequest = {}));
var GetReplicationRunsResponse;
(function (GetReplicationRunsResponse) {
    /**
     * @internal
     */
    GetReplicationRunsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReplicationRunsResponse = exports.GetReplicationRunsResponse || (exports.GetReplicationRunsResponse = {}));
var GetServersRequest;
(function (GetServersRequest) {
    /**
     * @internal
     */
    GetServersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServersRequest = exports.GetServersRequest || (exports.GetServersRequest = {}));
var ServerCatalogStatus;
(function (ServerCatalogStatus) {
    ServerCatalogStatus["Available"] = "AVAILABLE";
    ServerCatalogStatus["Deleted"] = "DELETED";
    ServerCatalogStatus["Expired"] = "EXPIRED";
    ServerCatalogStatus["Importing"] = "IMPORTING";
    ServerCatalogStatus["NotImported"] = "NOT_IMPORTED";
})(ServerCatalogStatus = exports.ServerCatalogStatus || (exports.ServerCatalogStatus = {}));
var GetServersResponse;
(function (GetServersResponse) {
    /**
     * @internal
     */
    GetServersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServersResponse = exports.GetServersResponse || (exports.GetServersResponse = {}));
var ImportAppCatalogRequest;
(function (ImportAppCatalogRequest) {
    /**
     * @internal
     */
    ImportAppCatalogRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportAppCatalogRequest = exports.ImportAppCatalogRequest || (exports.ImportAppCatalogRequest = {}));
var ImportAppCatalogResponse;
(function (ImportAppCatalogResponse) {
    /**
     * @internal
     */
    ImportAppCatalogResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportAppCatalogResponse = exports.ImportAppCatalogResponse || (exports.ImportAppCatalogResponse = {}));
var ImportServerCatalogRequest;
(function (ImportServerCatalogRequest) {
    /**
     * @internal
     */
    ImportServerCatalogRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportServerCatalogRequest = exports.ImportServerCatalogRequest || (exports.ImportServerCatalogRequest = {}));
var ImportServerCatalogResponse;
(function (ImportServerCatalogResponse) {
    /**
     * @internal
     */
    ImportServerCatalogResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportServerCatalogResponse = exports.ImportServerCatalogResponse || (exports.ImportServerCatalogResponse = {}));
var LaunchAppRequest;
(function (LaunchAppRequest) {
    /**
     * @internal
     */
    LaunchAppRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchAppRequest = exports.LaunchAppRequest || (exports.LaunchAppRequest = {}));
var LaunchAppResponse;
(function (LaunchAppResponse) {
    /**
     * @internal
     */
    LaunchAppResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchAppResponse = exports.LaunchAppResponse || (exports.LaunchAppResponse = {}));
var ListAppsRequest;
(function (ListAppsRequest) {
    /**
     * @internal
     */
    ListAppsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAppsRequest = exports.ListAppsRequest || (exports.ListAppsRequest = {}));
var ListAppsResponse;
(function (ListAppsResponse) {
    /**
     * @internal
     */
    ListAppsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAppsResponse = exports.ListAppsResponse || (exports.ListAppsResponse = {}));
var NotificationContext;
(function (NotificationContext) {
    /**
     * @internal
     */
    NotificationContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationContext = exports.NotificationContext || (exports.NotificationContext = {}));
var NotifyAppValidationOutputRequest;
(function (NotifyAppValidationOutputRequest) {
    /**
     * @internal
     */
    NotifyAppValidationOutputRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotifyAppValidationOutputRequest = exports.NotifyAppValidationOutputRequest || (exports.NotifyAppValidationOutputRequest = {}));
var NotifyAppValidationOutputResponse;
(function (NotifyAppValidationOutputResponse) {
    /**
     * @internal
     */
    NotifyAppValidationOutputResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotifyAppValidationOutputResponse = exports.NotifyAppValidationOutputResponse || (exports.NotifyAppValidationOutputResponse = {}));
var PutAppLaunchConfigurationRequest;
(function (PutAppLaunchConfigurationRequest) {
    /**
     * @internal
     */
    PutAppLaunchConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAppLaunchConfigurationRequest = exports.PutAppLaunchConfigurationRequest || (exports.PutAppLaunchConfigurationRequest = {}));
var PutAppLaunchConfigurationResponse;
(function (PutAppLaunchConfigurationResponse) {
    /**
     * @internal
     */
    PutAppLaunchConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAppLaunchConfigurationResponse = exports.PutAppLaunchConfigurationResponse || (exports.PutAppLaunchConfigurationResponse = {}));
var PutAppReplicationConfigurationRequest;
(function (PutAppReplicationConfigurationRequest) {
    /**
     * @internal
     */
    PutAppReplicationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAppReplicationConfigurationRequest = exports.PutAppReplicationConfigurationRequest || (exports.PutAppReplicationConfigurationRequest = {}));
var PutAppReplicationConfigurationResponse;
(function (PutAppReplicationConfigurationResponse) {
    /**
     * @internal
     */
    PutAppReplicationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAppReplicationConfigurationResponse = exports.PutAppReplicationConfigurationResponse || (exports.PutAppReplicationConfigurationResponse = {}));
var PutAppValidationConfigurationRequest;
(function (PutAppValidationConfigurationRequest) {
    /**
     * @internal
     */
    PutAppValidationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAppValidationConfigurationRequest = exports.PutAppValidationConfigurationRequest || (exports.PutAppValidationConfigurationRequest = {}));
var PutAppValidationConfigurationResponse;
(function (PutAppValidationConfigurationResponse) {
    /**
     * @internal
     */
    PutAppValidationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAppValidationConfigurationResponse = exports.PutAppValidationConfigurationResponse || (exports.PutAppValidationConfigurationResponse = {}));
var StartAppReplicationRequest;
(function (StartAppReplicationRequest) {
    /**
     * @internal
     */
    StartAppReplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAppReplicationRequest = exports.StartAppReplicationRequest || (exports.StartAppReplicationRequest = {}));
var StartAppReplicationResponse;
(function (StartAppReplicationResponse) {
    /**
     * @internal
     */
    StartAppReplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAppReplicationResponse = exports.StartAppReplicationResponse || (exports.StartAppReplicationResponse = {}));
var StartOnDemandAppReplicationRequest;
(function (StartOnDemandAppReplicationRequest) {
    /**
     * @internal
     */
    StartOnDemandAppReplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartOnDemandAppReplicationRequest = exports.StartOnDemandAppReplicationRequest || (exports.StartOnDemandAppReplicationRequest = {}));
var StartOnDemandAppReplicationResponse;
(function (StartOnDemandAppReplicationResponse) {
    /**
     * @internal
     */
    StartOnDemandAppReplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartOnDemandAppReplicationResponse = exports.StartOnDemandAppReplicationResponse || (exports.StartOnDemandAppReplicationResponse = {}));
var DryRunOperationException;
(function (DryRunOperationException) {
    /**
     * @internal
     */
    DryRunOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DryRunOperationException = exports.DryRunOperationException || (exports.DryRunOperationException = {}));
var ReplicationRunLimitExceededException;
(function (ReplicationRunLimitExceededException) {
    /**
     * @internal
     */
    ReplicationRunLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationRunLimitExceededException = exports.ReplicationRunLimitExceededException || (exports.ReplicationRunLimitExceededException = {}));
var StartOnDemandReplicationRunRequest;
(function (StartOnDemandReplicationRunRequest) {
    /**
     * @internal
     */
    StartOnDemandReplicationRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartOnDemandReplicationRunRequest = exports.StartOnDemandReplicationRunRequest || (exports.StartOnDemandReplicationRunRequest = {}));
var StartOnDemandReplicationRunResponse;
(function (StartOnDemandReplicationRunResponse) {
    /**
     * @internal
     */
    StartOnDemandReplicationRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartOnDemandReplicationRunResponse = exports.StartOnDemandReplicationRunResponse || (exports.StartOnDemandReplicationRunResponse = {}));
var StopAppReplicationRequest;
(function (StopAppReplicationRequest) {
    /**
     * @internal
     */
    StopAppReplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopAppReplicationRequest = exports.StopAppReplicationRequest || (exports.StopAppReplicationRequest = {}));
var StopAppReplicationResponse;
(function (StopAppReplicationResponse) {
    /**
     * @internal
     */
    StopAppReplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopAppReplicationResponse = exports.StopAppReplicationResponse || (exports.StopAppReplicationResponse = {}));
var TerminateAppRequest;
(function (TerminateAppRequest) {
    /**
     * @internal
     */
    TerminateAppRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateAppRequest = exports.TerminateAppRequest || (exports.TerminateAppRequest = {}));
var TerminateAppResponse;
(function (TerminateAppResponse) {
    /**
     * @internal
     */
    TerminateAppResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateAppResponse = exports.TerminateAppResponse || (exports.TerminateAppResponse = {}));
var UpdateAppRequest;
(function (UpdateAppRequest) {
    /**
     * @internal
     */
    UpdateAppRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAppRequest = exports.UpdateAppRequest || (exports.UpdateAppRequest = {}));
var UpdateAppResponse;
(function (UpdateAppResponse) {
    /**
     * @internal
     */
    UpdateAppResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAppResponse = exports.UpdateAppResponse || (exports.UpdateAppResponse = {}));
var UpdateReplicationJobRequest;
(function (UpdateReplicationJobRequest) {
    /**
     * @internal
     */
    UpdateReplicationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateReplicationJobRequest = exports.UpdateReplicationJobRequest || (exports.UpdateReplicationJobRequest = {}));
var UpdateReplicationJobResponse;
(function (UpdateReplicationJobResponse) {
    /**
     * @internal
     */
    UpdateReplicationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateReplicationJobResponse = exports.UpdateReplicationJobResponse || (exports.UpdateReplicationJobResponse = {}));
//# sourceMappingURL=models_0.js.map