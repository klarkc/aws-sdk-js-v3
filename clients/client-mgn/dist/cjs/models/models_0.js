"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReplicationInfoReplicatedDisk = exports.DataReplicationState = exports.DataReplicationInitiation = exports.DataReplicationInitiationStep = exports.DataReplicationInitiationStepStatus = exports.DataReplicationInitiationStepName = exports.DataReplicationError = exports.DataReplicationErrorString = exports.ChangeServerLifeCycleStateRequest = exports.ChangeServerLifeCycleStateSourceServerLifecycle = exports.ChangeServerLifeCycleStateSourceServerLifecycleState = exports.UpdateReplicationConfigurationTemplateRequest = exports.DescribeReplicationConfigurationTemplatesResponse = exports.DescribeReplicationConfigurationTemplatesRequest = exports.DeleteReplicationConfigurationTemplateResponse = exports.DeleteReplicationConfigurationTemplateRequest = exports.ReplicationConfigurationTemplate = exports.CreateReplicationConfigurationTemplateRequest = exports.ReplicationConfigurationEbsEncryption = exports.ReplicationConfigurationDefaultLargeStagingDiskType = exports.ReplicationConfigurationDataPlaneRouting = exports.ThrottlingException = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.InternalServerException = exports.DescribeJobsResponse = exports.Job = exports.JobType = exports.JobStatus = exports.ParticipatingServer = exports.LaunchStatus = exports.InitiatedBy = exports.DescribeJobsRequest = exports.DescribeJobsRequestFilters = exports.DescribeJobLogItemsResponse = exports.JobLog = exports.JobLogEventData = exports.JobLogEvent = exports.DescribeJobLogItemsRequest = exports.UninitializedAccountException = exports.ResourceNotFoundException = exports.DeleteJobResponse = exports.DeleteJobRequest = exports.ConflictException = exports.ValidationException = exports.ValidationExceptionReason = exports.ValidationExceptionField = exports.InitializeServiceResponse = exports.InitializeServiceRequest = exports.AccessDeniedException = void 0;
exports.UntagResourceRequest = exports.TagResourceRequest = exports.UpdateReplicationConfigurationRequest = exports.UpdateLaunchConfigurationRequest = exports.TerminateTargetInstancesResponse = exports.TerminateTargetInstancesRequest = exports.StartTestResponse = exports.StartTestRequest = exports.StartCutoverResponse = exports.StartCutoverRequest = exports.RetryDataReplicationRequest = exports.MarkAsArchivedRequest = exports.ReplicationConfiguration = exports.ReplicationConfigurationReplicatedDisk = exports.ReplicationConfigurationReplicatedDiskStagingDiskType = exports.GetReplicationConfigurationRequest = exports.LaunchConfiguration = exports.TargetInstanceTypeRightSizingMethod = exports.Licensing = exports.LaunchDisposition = exports.GetLaunchConfigurationRequest = exports.FinalizeCutoverRequest = exports.DisconnectFromServiceRequest = exports.DescribeSourceServersResponse = exports.DescribeSourceServersRequest = exports.DescribeSourceServersRequestFilters = exports.DeleteSourceServerResponse = exports.DeleteSourceServerRequest = exports.SourceServer = exports.SourceProperties = exports.OS = exports.NetworkInterface = exports.IdentificationHints = exports.Disk = exports.CPU = exports.LifeCycle = exports.LifeCycleState = exports.LifeCycleLastTest = exports.LifeCycleLastTestReverted = exports.LifeCycleLastTestInitiated = exports.LifeCycleLastTestFinalized = exports.LifeCycleLastCutover = exports.LifeCycleLastCutoverReverted = exports.LifeCycleLastCutoverInitiated = exports.LifeCycleLastCutoverFinalized = exports.LaunchedInstance = exports.FirstBoot = exports.DataReplicationInfo = void 0;
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
var InitializeServiceRequest;
(function (InitializeServiceRequest) {
    /**
     * @internal
     */
    InitializeServiceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InitializeServiceRequest = exports.InitializeServiceRequest || (exports.InitializeServiceRequest = {}));
var InitializeServiceResponse;
(function (InitializeServiceResponse) {
    /**
     * @internal
     */
    InitializeServiceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InitializeServiceResponse = exports.InitializeServiceResponse || (exports.InitializeServiceResponse = {}));
var ValidationExceptionField;
(function (ValidationExceptionField) {
    /**
     * @internal
     */
    ValidationExceptionField.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationExceptionField = exports.ValidationExceptionField || (exports.ValidationExceptionField = {}));
var ValidationExceptionReason;
(function (ValidationExceptionReason) {
    ValidationExceptionReason["CANNOT_PARSE"] = "cannotParse";
    ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "fieldValidationFailed";
    ValidationExceptionReason["OTHER"] = "other";
    ValidationExceptionReason["UNKNOWN_OPERATION"] = "unknownOperation";
})(ValidationExceptionReason = exports.ValidationExceptionReason || (exports.ValidationExceptionReason = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var DeleteJobRequest;
(function (DeleteJobRequest) {
    /**
     * @internal
     */
    DeleteJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteJobRequest = exports.DeleteJobRequest || (exports.DeleteJobRequest = {}));
var DeleteJobResponse;
(function (DeleteJobResponse) {
    /**
     * @internal
     */
    DeleteJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteJobResponse = exports.DeleteJobResponse || (exports.DeleteJobResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var UninitializedAccountException;
(function (UninitializedAccountException) {
    /**
     * @internal
     */
    UninitializedAccountException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UninitializedAccountException = exports.UninitializedAccountException || (exports.UninitializedAccountException = {}));
var DescribeJobLogItemsRequest;
(function (DescribeJobLogItemsRequest) {
    /**
     * @internal
     */
    DescribeJobLogItemsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobLogItemsRequest = exports.DescribeJobLogItemsRequest || (exports.DescribeJobLogItemsRequest = {}));
var JobLogEvent;
(function (JobLogEvent) {
    JobLogEvent["CLEANUP_END"] = "CLEANUP_END";
    JobLogEvent["CLEANUP_FAIL"] = "CLEANUP_FAIL";
    JobLogEvent["CLEANUP_START"] = "CLEANUP_START";
    JobLogEvent["CONVERSION_END"] = "CONVERSION_END";
    JobLogEvent["CONVERSION_FAIL"] = "CONVERSION_FAIL";
    JobLogEvent["CONVERSION_START"] = "CONVERSION_START";
    JobLogEvent["JOB_CANCEL"] = "JOB_CANCEL";
    JobLogEvent["JOB_END"] = "JOB_END";
    JobLogEvent["JOB_START"] = "JOB_START";
    JobLogEvent["LAUNCH_FAILED"] = "LAUNCH_FAILED";
    JobLogEvent["LAUNCH_START"] = "LAUNCH_START";
    JobLogEvent["SERVER_SKIPPED"] = "SERVER_SKIPPED";
    JobLogEvent["SNAPSHOT_END"] = "SNAPSHOT_END";
    JobLogEvent["SNAPSHOT_FAIL"] = "SNAPSHOT_FAIL";
    JobLogEvent["SNAPSHOT_START"] = "SNAPSHOT_START";
    JobLogEvent["USING_PREVIOUS_SNAPSHOT"] = "USING_PREVIOUS_SNAPSHOT";
})(JobLogEvent = exports.JobLogEvent || (exports.JobLogEvent = {}));
var JobLogEventData;
(function (JobLogEventData) {
    /**
     * @internal
     */
    JobLogEventData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobLogEventData = exports.JobLogEventData || (exports.JobLogEventData = {}));
var JobLog;
(function (JobLog) {
    /**
     * @internal
     */
    JobLog.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobLog = exports.JobLog || (exports.JobLog = {}));
var DescribeJobLogItemsResponse;
(function (DescribeJobLogItemsResponse) {
    /**
     * @internal
     */
    DescribeJobLogItemsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobLogItemsResponse = exports.DescribeJobLogItemsResponse || (exports.DescribeJobLogItemsResponse = {}));
var DescribeJobsRequestFilters;
(function (DescribeJobsRequestFilters) {
    /**
     * @internal
     */
    DescribeJobsRequestFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobsRequestFilters = exports.DescribeJobsRequestFilters || (exports.DescribeJobsRequestFilters = {}));
var DescribeJobsRequest;
(function (DescribeJobsRequest) {
    /**
     * @internal
     */
    DescribeJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobsRequest = exports.DescribeJobsRequest || (exports.DescribeJobsRequest = {}));
var InitiatedBy;
(function (InitiatedBy) {
    InitiatedBy["DIAGNOSTIC"] = "DIAGNOSTIC";
    InitiatedBy["START_CUTOVER"] = "START_CUTOVER";
    InitiatedBy["START_TEST"] = "START_TEST";
    InitiatedBy["TERMINATE"] = "TERMINATE";
})(InitiatedBy = exports.InitiatedBy || (exports.InitiatedBy = {}));
var LaunchStatus;
(function (LaunchStatus) {
    LaunchStatus["FAILED"] = "FAILED";
    LaunchStatus["IN_PROGRESS"] = "IN_PROGRESS";
    LaunchStatus["LAUNCHED"] = "LAUNCHED";
    LaunchStatus["PENDING"] = "PENDING";
    LaunchStatus["TERMINATED"] = "TERMINATED";
})(LaunchStatus = exports.LaunchStatus || (exports.LaunchStatus = {}));
var ParticipatingServer;
(function (ParticipatingServer) {
    /**
     * @internal
     */
    ParticipatingServer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParticipatingServer = exports.ParticipatingServer || (exports.ParticipatingServer = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["PENDING"] = "PENDING";
    JobStatus["STARTED"] = "STARTED";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var JobType;
(function (JobType) {
    JobType["LAUNCH"] = "LAUNCH";
    JobType["TERMINATE"] = "TERMINATE";
})(JobType = exports.JobType || (exports.JobType = {}));
var Job;
(function (Job) {
    /**
     * @internal
     */
    Job.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.tags && { tags: smithy_client_1.SENSITIVE_STRING }),
    });
})(Job = exports.Job || (exports.Job = {}));
var DescribeJobsResponse;
(function (DescribeJobsResponse) {
    /**
     * @internal
     */
    DescribeJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.items && { items: obj.items.map((item) => Job.filterSensitiveLog(item)) }),
    });
})(DescribeJobsResponse = exports.DescribeJobsResponse || (exports.DescribeJobsResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
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
        ...(obj.tags && { tags: smithy_client_1.SENSITIVE_STRING }),
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ReplicationConfigurationDataPlaneRouting;
(function (ReplicationConfigurationDataPlaneRouting) {
    ReplicationConfigurationDataPlaneRouting["PRIVATE_IP"] = "PRIVATE_IP";
    ReplicationConfigurationDataPlaneRouting["PUBLIC_IP"] = "PUBLIC_IP";
})(ReplicationConfigurationDataPlaneRouting = exports.ReplicationConfigurationDataPlaneRouting || (exports.ReplicationConfigurationDataPlaneRouting = {}));
var ReplicationConfigurationDefaultLargeStagingDiskType;
(function (ReplicationConfigurationDefaultLargeStagingDiskType) {
    ReplicationConfigurationDefaultLargeStagingDiskType["GP2"] = "GP2";
    ReplicationConfigurationDefaultLargeStagingDiskType["ST1"] = "ST1";
})(ReplicationConfigurationDefaultLargeStagingDiskType = exports.ReplicationConfigurationDefaultLargeStagingDiskType || (exports.ReplicationConfigurationDefaultLargeStagingDiskType = {}));
var ReplicationConfigurationEbsEncryption;
(function (ReplicationConfigurationEbsEncryption) {
    ReplicationConfigurationEbsEncryption["CUSTOM"] = "CUSTOM";
    ReplicationConfigurationEbsEncryption["DEFAULT"] = "DEFAULT";
    ReplicationConfigurationEbsEncryption["NONE"] = "NONE";
})(ReplicationConfigurationEbsEncryption = exports.ReplicationConfigurationEbsEncryption || (exports.ReplicationConfigurationEbsEncryption = {}));
var CreateReplicationConfigurationTemplateRequest;
(function (CreateReplicationConfigurationTemplateRequest) {
    /**
     * @internal
     */
    CreateReplicationConfigurationTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.stagingAreaTags && { stagingAreaTags: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.tags && { tags: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateReplicationConfigurationTemplateRequest = exports.CreateReplicationConfigurationTemplateRequest || (exports.CreateReplicationConfigurationTemplateRequest = {}));
var ReplicationConfigurationTemplate;
(function (ReplicationConfigurationTemplate) {
    /**
     * @internal
     */
    ReplicationConfigurationTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.stagingAreaTags && { stagingAreaTags: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.tags && { tags: smithy_client_1.SENSITIVE_STRING }),
    });
})(ReplicationConfigurationTemplate = exports.ReplicationConfigurationTemplate || (exports.ReplicationConfigurationTemplate = {}));
var DeleteReplicationConfigurationTemplateRequest;
(function (DeleteReplicationConfigurationTemplateRequest) {
    /**
     * @internal
     */
    DeleteReplicationConfigurationTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationConfigurationTemplateRequest = exports.DeleteReplicationConfigurationTemplateRequest || (exports.DeleteReplicationConfigurationTemplateRequest = {}));
var DeleteReplicationConfigurationTemplateResponse;
(function (DeleteReplicationConfigurationTemplateResponse) {
    /**
     * @internal
     */
    DeleteReplicationConfigurationTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationConfigurationTemplateResponse = exports.DeleteReplicationConfigurationTemplateResponse || (exports.DeleteReplicationConfigurationTemplateResponse = {}));
var DescribeReplicationConfigurationTemplatesRequest;
(function (DescribeReplicationConfigurationTemplatesRequest) {
    /**
     * @internal
     */
    DescribeReplicationConfigurationTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplicationConfigurationTemplatesRequest = exports.DescribeReplicationConfigurationTemplatesRequest || (exports.DescribeReplicationConfigurationTemplatesRequest = {}));
var DescribeReplicationConfigurationTemplatesResponse;
(function (DescribeReplicationConfigurationTemplatesResponse) {
    /**
     * @internal
     */
    DescribeReplicationConfigurationTemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.items && { items: obj.items.map((item) => ReplicationConfigurationTemplate.filterSensitiveLog(item)) }),
    });
})(DescribeReplicationConfigurationTemplatesResponse = exports.DescribeReplicationConfigurationTemplatesResponse || (exports.DescribeReplicationConfigurationTemplatesResponse = {}));
var UpdateReplicationConfigurationTemplateRequest;
(function (UpdateReplicationConfigurationTemplateRequest) {
    /**
     * @internal
     */
    UpdateReplicationConfigurationTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.stagingAreaTags && { stagingAreaTags: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateReplicationConfigurationTemplateRequest = exports.UpdateReplicationConfigurationTemplateRequest || (exports.UpdateReplicationConfigurationTemplateRequest = {}));
var ChangeServerLifeCycleStateSourceServerLifecycleState;
(function (ChangeServerLifeCycleStateSourceServerLifecycleState) {
    ChangeServerLifeCycleStateSourceServerLifecycleState["CUTOVER"] = "CUTOVER";
    ChangeServerLifeCycleStateSourceServerLifecycleState["READY_FOR_CUTOVER"] = "READY_FOR_CUTOVER";
    ChangeServerLifeCycleStateSourceServerLifecycleState["READY_FOR_TEST"] = "READY_FOR_TEST";
})(ChangeServerLifeCycleStateSourceServerLifecycleState = exports.ChangeServerLifeCycleStateSourceServerLifecycleState || (exports.ChangeServerLifeCycleStateSourceServerLifecycleState = {}));
var ChangeServerLifeCycleStateSourceServerLifecycle;
(function (ChangeServerLifeCycleStateSourceServerLifecycle) {
    /**
     * @internal
     */
    ChangeServerLifeCycleStateSourceServerLifecycle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeServerLifeCycleStateSourceServerLifecycle = exports.ChangeServerLifeCycleStateSourceServerLifecycle || (exports.ChangeServerLifeCycleStateSourceServerLifecycle = {}));
var ChangeServerLifeCycleStateRequest;
(function (ChangeServerLifeCycleStateRequest) {
    /**
     * @internal
     */
    ChangeServerLifeCycleStateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeServerLifeCycleStateRequest = exports.ChangeServerLifeCycleStateRequest || (exports.ChangeServerLifeCycleStateRequest = {}));
var DataReplicationErrorString;
(function (DataReplicationErrorString) {
    DataReplicationErrorString["AGENT_NOT_SEEN"] = "AGENT_NOT_SEEN";
    DataReplicationErrorString["FAILED_TO_ATTACH_STAGING_DISKS"] = "FAILED_TO_ATTACH_STAGING_DISKS";
    DataReplicationErrorString["FAILED_TO_AUTHENTICATE_WITH_SERVICE"] = "FAILED_TO_AUTHENTICATE_WITH_SERVICE";
    DataReplicationErrorString["FAILED_TO_BOOT_REPLICATION_SERVER"] = "FAILED_TO_BOOT_REPLICATION_SERVER";
    DataReplicationErrorString["FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER"] = "FAILED_TO_CONNECT_AGENT_TO_REPLICATION_SERVER";
    DataReplicationErrorString["FAILED_TO_CREATE_SECURITY_GROUP"] = "FAILED_TO_CREATE_SECURITY_GROUP";
    DataReplicationErrorString["FAILED_TO_CREATE_STAGING_DISKS"] = "FAILED_TO_CREATE_STAGING_DISKS";
    DataReplicationErrorString["FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE"] = "FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE";
    DataReplicationErrorString["FAILED_TO_LAUNCH_REPLICATION_SERVER"] = "FAILED_TO_LAUNCH_REPLICATION_SERVER";
    DataReplicationErrorString["FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT"] = "FAILED_TO_PAIR_REPLICATION_SERVER_WITH_AGENT";
    DataReplicationErrorString["FAILED_TO_START_DATA_TRANSFER"] = "FAILED_TO_START_DATA_TRANSFER";
    DataReplicationErrorString["NOT_CONVERGING"] = "NOT_CONVERGING";
    DataReplicationErrorString["SNAPSHOTS_FAILURE"] = "SNAPSHOTS_FAILURE";
    DataReplicationErrorString["UNSTABLE_NETWORK"] = "UNSTABLE_NETWORK";
})(DataReplicationErrorString = exports.DataReplicationErrorString || (exports.DataReplicationErrorString = {}));
var DataReplicationError;
(function (DataReplicationError) {
    /**
     * @internal
     */
    DataReplicationError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataReplicationError = exports.DataReplicationError || (exports.DataReplicationError = {}));
var DataReplicationInitiationStepName;
(function (DataReplicationInitiationStepName) {
    DataReplicationInitiationStepName["ATTACH_STAGING_DISKS"] = "ATTACH_STAGING_DISKS";
    DataReplicationInitiationStepName["AUTHENTICATE_WITH_SERVICE"] = "AUTHENTICATE_WITH_SERVICE";
    DataReplicationInitiationStepName["BOOT_REPLICATION_SERVER"] = "BOOT_REPLICATION_SERVER";
    DataReplicationInitiationStepName["CONNECT_AGENT_TO_REPLICATION_SERVER"] = "CONNECT_AGENT_TO_REPLICATION_SERVER";
    DataReplicationInitiationStepName["CREATE_SECURITY_GROUP"] = "CREATE_SECURITY_GROUP";
    DataReplicationInitiationStepName["CREATE_STAGING_DISKS"] = "CREATE_STAGING_DISKS";
    DataReplicationInitiationStepName["DOWNLOAD_REPLICATION_SOFTWARE"] = "DOWNLOAD_REPLICATION_SOFTWARE";
    DataReplicationInitiationStepName["LAUNCH_REPLICATION_SERVER"] = "LAUNCH_REPLICATION_SERVER";
    DataReplicationInitiationStepName["PAIR_REPLICATION_SERVER_WITH_AGENT"] = "PAIR_REPLICATION_SERVER_WITH_AGENT";
    DataReplicationInitiationStepName["START_DATA_TRANSFER"] = "START_DATA_TRANSFER";
    DataReplicationInitiationStepName["WAIT"] = "WAIT";
})(DataReplicationInitiationStepName = exports.DataReplicationInitiationStepName || (exports.DataReplicationInitiationStepName = {}));
var DataReplicationInitiationStepStatus;
(function (DataReplicationInitiationStepStatus) {
    DataReplicationInitiationStepStatus["FAILED"] = "FAILED";
    DataReplicationInitiationStepStatus["IN_PROGRESS"] = "IN_PROGRESS";
    DataReplicationInitiationStepStatus["NOT_STARTED"] = "NOT_STARTED";
    DataReplicationInitiationStepStatus["SKIPPED"] = "SKIPPED";
    DataReplicationInitiationStepStatus["SUCCEEDED"] = "SUCCEEDED";
})(DataReplicationInitiationStepStatus = exports.DataReplicationInitiationStepStatus || (exports.DataReplicationInitiationStepStatus = {}));
var DataReplicationInitiationStep;
(function (DataReplicationInitiationStep) {
    /**
     * @internal
     */
    DataReplicationInitiationStep.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataReplicationInitiationStep = exports.DataReplicationInitiationStep || (exports.DataReplicationInitiationStep = {}));
var DataReplicationInitiation;
(function (DataReplicationInitiation) {
    /**
     * @internal
     */
    DataReplicationInitiation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataReplicationInitiation = exports.DataReplicationInitiation || (exports.DataReplicationInitiation = {}));
var DataReplicationState;
(function (DataReplicationState) {
    DataReplicationState["BACKLOG"] = "BACKLOG";
    DataReplicationState["CONTINUOUS"] = "CONTINUOUS";
    DataReplicationState["CREATING_SNAPSHOT"] = "CREATING_SNAPSHOT";
    DataReplicationState["DISCONNECTED"] = "DISCONNECTED";
    DataReplicationState["INITIAL_SYNC"] = "INITIAL_SYNC";
    DataReplicationState["INITIATING"] = "INITIATING";
    DataReplicationState["PAUSED"] = "PAUSED";
    DataReplicationState["RESCAN"] = "RESCAN";
    DataReplicationState["STALLED"] = "STALLED";
    DataReplicationState["STOPPED"] = "STOPPED";
})(DataReplicationState = exports.DataReplicationState || (exports.DataReplicationState = {}));
var DataReplicationInfoReplicatedDisk;
(function (DataReplicationInfoReplicatedDisk) {
    /**
     * @internal
     */
    DataReplicationInfoReplicatedDisk.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataReplicationInfoReplicatedDisk = exports.DataReplicationInfoReplicatedDisk || (exports.DataReplicationInfoReplicatedDisk = {}));
var DataReplicationInfo;
(function (DataReplicationInfo) {
    /**
     * @internal
     */
    DataReplicationInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataReplicationInfo = exports.DataReplicationInfo || (exports.DataReplicationInfo = {}));
var FirstBoot;
(function (FirstBoot) {
    FirstBoot["STOPPED"] = "STOPPED";
    FirstBoot["SUCCEEDED"] = "SUCCEEDED";
    FirstBoot["UNKNOWN"] = "UNKNOWN";
    FirstBoot["WAITING"] = "WAITING";
})(FirstBoot = exports.FirstBoot || (exports.FirstBoot = {}));
var LaunchedInstance;
(function (LaunchedInstance) {
    /**
     * @internal
     */
    LaunchedInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchedInstance = exports.LaunchedInstance || (exports.LaunchedInstance = {}));
var LifeCycleLastCutoverFinalized;
(function (LifeCycleLastCutoverFinalized) {
    /**
     * @internal
     */
    LifeCycleLastCutoverFinalized.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifeCycleLastCutoverFinalized = exports.LifeCycleLastCutoverFinalized || (exports.LifeCycleLastCutoverFinalized = {}));
var LifeCycleLastCutoverInitiated;
(function (LifeCycleLastCutoverInitiated) {
    /**
     * @internal
     */
    LifeCycleLastCutoverInitiated.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifeCycleLastCutoverInitiated = exports.LifeCycleLastCutoverInitiated || (exports.LifeCycleLastCutoverInitiated = {}));
var LifeCycleLastCutoverReverted;
(function (LifeCycleLastCutoverReverted) {
    /**
     * @internal
     */
    LifeCycleLastCutoverReverted.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifeCycleLastCutoverReverted = exports.LifeCycleLastCutoverReverted || (exports.LifeCycleLastCutoverReverted = {}));
var LifeCycleLastCutover;
(function (LifeCycleLastCutover) {
    /**
     * @internal
     */
    LifeCycleLastCutover.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifeCycleLastCutover = exports.LifeCycleLastCutover || (exports.LifeCycleLastCutover = {}));
var LifeCycleLastTestFinalized;
(function (LifeCycleLastTestFinalized) {
    /**
     * @internal
     */
    LifeCycleLastTestFinalized.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifeCycleLastTestFinalized = exports.LifeCycleLastTestFinalized || (exports.LifeCycleLastTestFinalized = {}));
var LifeCycleLastTestInitiated;
(function (LifeCycleLastTestInitiated) {
    /**
     * @internal
     */
    LifeCycleLastTestInitiated.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifeCycleLastTestInitiated = exports.LifeCycleLastTestInitiated || (exports.LifeCycleLastTestInitiated = {}));
var LifeCycleLastTestReverted;
(function (LifeCycleLastTestReverted) {
    /**
     * @internal
     */
    LifeCycleLastTestReverted.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifeCycleLastTestReverted = exports.LifeCycleLastTestReverted || (exports.LifeCycleLastTestReverted = {}));
var LifeCycleLastTest;
(function (LifeCycleLastTest) {
    /**
     * @internal
     */
    LifeCycleLastTest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifeCycleLastTest = exports.LifeCycleLastTest || (exports.LifeCycleLastTest = {}));
var LifeCycleState;
(function (LifeCycleState) {
    LifeCycleState["CUTOVER"] = "CUTOVER";
    LifeCycleState["CUTTING_OVER"] = "CUTTING_OVER";
    LifeCycleState["DISCONNECTED"] = "DISCONNECTED";
    LifeCycleState["NOT_READY"] = "NOT_READY";
    LifeCycleState["READY_FOR_CUTOVER"] = "READY_FOR_CUTOVER";
    LifeCycleState["READY_FOR_TEST"] = "READY_FOR_TEST";
    LifeCycleState["STOPPED"] = "STOPPED";
    LifeCycleState["TESTING"] = "TESTING";
})(LifeCycleState = exports.LifeCycleState || (exports.LifeCycleState = {}));
var LifeCycle;
(function (LifeCycle) {
    /**
     * @internal
     */
    LifeCycle.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifeCycle = exports.LifeCycle || (exports.LifeCycle = {}));
var CPU;
(function (CPU) {
    /**
     * @internal
     */
    CPU.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CPU = exports.CPU || (exports.CPU = {}));
var Disk;
(function (Disk) {
    /**
     * @internal
     */
    Disk.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Disk = exports.Disk || (exports.Disk = {}));
var IdentificationHints;
(function (IdentificationHints) {
    /**
     * @internal
     */
    IdentificationHints.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentificationHints = exports.IdentificationHints || (exports.IdentificationHints = {}));
var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkInterface = exports.NetworkInterface || (exports.NetworkInterface = {}));
var OS;
(function (OS) {
    /**
     * @internal
     */
    OS.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OS = exports.OS || (exports.OS = {}));
var SourceProperties;
(function (SourceProperties) {
    /**
     * @internal
     */
    SourceProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceProperties = exports.SourceProperties || (exports.SourceProperties = {}));
var SourceServer;
(function (SourceServer) {
    /**
     * @internal
     */
    SourceServer.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.tags && { tags: smithy_client_1.SENSITIVE_STRING }),
    });
})(SourceServer = exports.SourceServer || (exports.SourceServer = {}));
var DeleteSourceServerRequest;
(function (DeleteSourceServerRequest) {
    /**
     * @internal
     */
    DeleteSourceServerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSourceServerRequest = exports.DeleteSourceServerRequest || (exports.DeleteSourceServerRequest = {}));
var DeleteSourceServerResponse;
(function (DeleteSourceServerResponse) {
    /**
     * @internal
     */
    DeleteSourceServerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSourceServerResponse = exports.DeleteSourceServerResponse || (exports.DeleteSourceServerResponse = {}));
var DescribeSourceServersRequestFilters;
(function (DescribeSourceServersRequestFilters) {
    /**
     * @internal
     */
    DescribeSourceServersRequestFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSourceServersRequestFilters = exports.DescribeSourceServersRequestFilters || (exports.DescribeSourceServersRequestFilters = {}));
var DescribeSourceServersRequest;
(function (DescribeSourceServersRequest) {
    /**
     * @internal
     */
    DescribeSourceServersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSourceServersRequest = exports.DescribeSourceServersRequest || (exports.DescribeSourceServersRequest = {}));
var DescribeSourceServersResponse;
(function (DescribeSourceServersResponse) {
    /**
     * @internal
     */
    DescribeSourceServersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.items && { items: obj.items.map((item) => SourceServer.filterSensitiveLog(item)) }),
    });
})(DescribeSourceServersResponse = exports.DescribeSourceServersResponse || (exports.DescribeSourceServersResponse = {}));
var DisconnectFromServiceRequest;
(function (DisconnectFromServiceRequest) {
    /**
     * @internal
     */
    DisconnectFromServiceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisconnectFromServiceRequest = exports.DisconnectFromServiceRequest || (exports.DisconnectFromServiceRequest = {}));
var FinalizeCutoverRequest;
(function (FinalizeCutoverRequest) {
    /**
     * @internal
     */
    FinalizeCutoverRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FinalizeCutoverRequest = exports.FinalizeCutoverRequest || (exports.FinalizeCutoverRequest = {}));
var GetLaunchConfigurationRequest;
(function (GetLaunchConfigurationRequest) {
    /**
     * @internal
     */
    GetLaunchConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLaunchConfigurationRequest = exports.GetLaunchConfigurationRequest || (exports.GetLaunchConfigurationRequest = {}));
var LaunchDisposition;
(function (LaunchDisposition) {
    LaunchDisposition["STARTED"] = "STARTED";
    LaunchDisposition["STOPPED"] = "STOPPED";
})(LaunchDisposition = exports.LaunchDisposition || (exports.LaunchDisposition = {}));
var Licensing;
(function (Licensing) {
    /**
     * @internal
     */
    Licensing.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Licensing = exports.Licensing || (exports.Licensing = {}));
var TargetInstanceTypeRightSizingMethod;
(function (TargetInstanceTypeRightSizingMethod) {
    TargetInstanceTypeRightSizingMethod["BASIC"] = "BASIC";
    TargetInstanceTypeRightSizingMethod["NONE"] = "NONE";
})(TargetInstanceTypeRightSizingMethod = exports.TargetInstanceTypeRightSizingMethod || (exports.TargetInstanceTypeRightSizingMethod = {}));
var LaunchConfiguration;
(function (LaunchConfiguration) {
    /**
     * @internal
     */
    LaunchConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LaunchConfiguration = exports.LaunchConfiguration || (exports.LaunchConfiguration = {}));
var GetReplicationConfigurationRequest;
(function (GetReplicationConfigurationRequest) {
    /**
     * @internal
     */
    GetReplicationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReplicationConfigurationRequest = exports.GetReplicationConfigurationRequest || (exports.GetReplicationConfigurationRequest = {}));
var ReplicationConfigurationReplicatedDiskStagingDiskType;
(function (ReplicationConfigurationReplicatedDiskStagingDiskType) {
    ReplicationConfigurationReplicatedDiskStagingDiskType["AUTO"] = "AUTO";
    ReplicationConfigurationReplicatedDiskStagingDiskType["GP2"] = "GP2";
    ReplicationConfigurationReplicatedDiskStagingDiskType["IO1"] = "IO1";
    ReplicationConfigurationReplicatedDiskStagingDiskType["SC1"] = "SC1";
    ReplicationConfigurationReplicatedDiskStagingDiskType["ST1"] = "ST1";
    ReplicationConfigurationReplicatedDiskStagingDiskType["STANDARD"] = "STANDARD";
})(ReplicationConfigurationReplicatedDiskStagingDiskType = exports.ReplicationConfigurationReplicatedDiskStagingDiskType || (exports.ReplicationConfigurationReplicatedDiskStagingDiskType = {}));
var ReplicationConfigurationReplicatedDisk;
(function (ReplicationConfigurationReplicatedDisk) {
    /**
     * @internal
     */
    ReplicationConfigurationReplicatedDisk.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationConfigurationReplicatedDisk = exports.ReplicationConfigurationReplicatedDisk || (exports.ReplicationConfigurationReplicatedDisk = {}));
var ReplicationConfiguration;
(function (ReplicationConfiguration) {
    /**
     * @internal
     */
    ReplicationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.stagingAreaTags && { stagingAreaTags: smithy_client_1.SENSITIVE_STRING }),
    });
})(ReplicationConfiguration = exports.ReplicationConfiguration || (exports.ReplicationConfiguration = {}));
var MarkAsArchivedRequest;
(function (MarkAsArchivedRequest) {
    /**
     * @internal
     */
    MarkAsArchivedRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MarkAsArchivedRequest = exports.MarkAsArchivedRequest || (exports.MarkAsArchivedRequest = {}));
var RetryDataReplicationRequest;
(function (RetryDataReplicationRequest) {
    /**
     * @internal
     */
    RetryDataReplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetryDataReplicationRequest = exports.RetryDataReplicationRequest || (exports.RetryDataReplicationRequest = {}));
var StartCutoverRequest;
(function (StartCutoverRequest) {
    /**
     * @internal
     */
    StartCutoverRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.tags && { tags: smithy_client_1.SENSITIVE_STRING }),
    });
})(StartCutoverRequest = exports.StartCutoverRequest || (exports.StartCutoverRequest = {}));
var StartCutoverResponse;
(function (StartCutoverResponse) {
    /**
     * @internal
     */
    StartCutoverResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.job && { job: Job.filterSensitiveLog(obj.job) }),
    });
})(StartCutoverResponse = exports.StartCutoverResponse || (exports.StartCutoverResponse = {}));
var StartTestRequest;
(function (StartTestRequest) {
    /**
     * @internal
     */
    StartTestRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.tags && { tags: smithy_client_1.SENSITIVE_STRING }),
    });
})(StartTestRequest = exports.StartTestRequest || (exports.StartTestRequest = {}));
var StartTestResponse;
(function (StartTestResponse) {
    /**
     * @internal
     */
    StartTestResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.job && { job: Job.filterSensitiveLog(obj.job) }),
    });
})(StartTestResponse = exports.StartTestResponse || (exports.StartTestResponse = {}));
var TerminateTargetInstancesRequest;
(function (TerminateTargetInstancesRequest) {
    /**
     * @internal
     */
    TerminateTargetInstancesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.tags && { tags: smithy_client_1.SENSITIVE_STRING }),
    });
})(TerminateTargetInstancesRequest = exports.TerminateTargetInstancesRequest || (exports.TerminateTargetInstancesRequest = {}));
var TerminateTargetInstancesResponse;
(function (TerminateTargetInstancesResponse) {
    /**
     * @internal
     */
    TerminateTargetInstancesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.job && { job: Job.filterSensitiveLog(obj.job) }),
    });
})(TerminateTargetInstancesResponse = exports.TerminateTargetInstancesResponse || (exports.TerminateTargetInstancesResponse = {}));
var UpdateLaunchConfigurationRequest;
(function (UpdateLaunchConfigurationRequest) {
    /**
     * @internal
     */
    UpdateLaunchConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLaunchConfigurationRequest = exports.UpdateLaunchConfigurationRequest || (exports.UpdateLaunchConfigurationRequest = {}));
var UpdateReplicationConfigurationRequest;
(function (UpdateReplicationConfigurationRequest) {
    /**
     * @internal
     */
    UpdateReplicationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.stagingAreaTags && { stagingAreaTags: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateReplicationConfigurationRequest = exports.UpdateReplicationConfigurationRequest || (exports.UpdateReplicationConfigurationRequest = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.tags && { tags: smithy_client_1.SENSITIVE_STRING }),
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.tagKeys && { tagKeys: smithy_client_1.SENSITIVE_STRING }),
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
//# sourceMappingURL=models_0.js.map