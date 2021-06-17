import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var InitializeServiceRequest;
(function (InitializeServiceRequest) {
    /**
     * @internal
     */
    InitializeServiceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InitializeServiceRequest || (InitializeServiceRequest = {}));
export var InitializeServiceResponse;
(function (InitializeServiceResponse) {
    /**
     * @internal
     */
    InitializeServiceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InitializeServiceResponse || (InitializeServiceResponse = {}));
export var ValidationExceptionField;
(function (ValidationExceptionField) {
    /**
     * @internal
     */
    ValidationExceptionField.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationExceptionField || (ValidationExceptionField = {}));
export var ValidationExceptionReason;
(function (ValidationExceptionReason) {
    ValidationExceptionReason["CANNOT_PARSE"] = "cannotParse";
    ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "fieldValidationFailed";
    ValidationExceptionReason["OTHER"] = "other";
    ValidationExceptionReason["UNKNOWN_OPERATION"] = "unknownOperation";
})(ValidationExceptionReason || (ValidationExceptionReason = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var DeleteJobRequest;
(function (DeleteJobRequest) {
    /**
     * @internal
     */
    DeleteJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteJobRequest || (DeleteJobRequest = {}));
export var DeleteJobResponse;
(function (DeleteJobResponse) {
    /**
     * @internal
     */
    DeleteJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteJobResponse || (DeleteJobResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var UninitializedAccountException;
(function (UninitializedAccountException) {
    /**
     * @internal
     */
    UninitializedAccountException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UninitializedAccountException || (UninitializedAccountException = {}));
export var DescribeJobLogItemsRequest;
(function (DescribeJobLogItemsRequest) {
    /**
     * @internal
     */
    DescribeJobLogItemsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJobLogItemsRequest || (DescribeJobLogItemsRequest = {}));
export var JobLogEvent;
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
})(JobLogEvent || (JobLogEvent = {}));
export var JobLogEventData;
(function (JobLogEventData) {
    /**
     * @internal
     */
    JobLogEventData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobLogEventData || (JobLogEventData = {}));
export var JobLog;
(function (JobLog) {
    /**
     * @internal
     */
    JobLog.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobLog || (JobLog = {}));
export var DescribeJobLogItemsResponse;
(function (DescribeJobLogItemsResponse) {
    /**
     * @internal
     */
    DescribeJobLogItemsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJobLogItemsResponse || (DescribeJobLogItemsResponse = {}));
export var DescribeJobsRequestFilters;
(function (DescribeJobsRequestFilters) {
    /**
     * @internal
     */
    DescribeJobsRequestFilters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJobsRequestFilters || (DescribeJobsRequestFilters = {}));
export var DescribeJobsRequest;
(function (DescribeJobsRequest) {
    /**
     * @internal
     */
    DescribeJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJobsRequest || (DescribeJobsRequest = {}));
export var InitiatedBy;
(function (InitiatedBy) {
    InitiatedBy["DIAGNOSTIC"] = "DIAGNOSTIC";
    InitiatedBy["START_CUTOVER"] = "START_CUTOVER";
    InitiatedBy["START_TEST"] = "START_TEST";
    InitiatedBy["TERMINATE"] = "TERMINATE";
})(InitiatedBy || (InitiatedBy = {}));
export var LaunchStatus;
(function (LaunchStatus) {
    LaunchStatus["FAILED"] = "FAILED";
    LaunchStatus["IN_PROGRESS"] = "IN_PROGRESS";
    LaunchStatus["LAUNCHED"] = "LAUNCHED";
    LaunchStatus["PENDING"] = "PENDING";
    LaunchStatus["TERMINATED"] = "TERMINATED";
})(LaunchStatus || (LaunchStatus = {}));
export var ParticipatingServer;
(function (ParticipatingServer) {
    /**
     * @internal
     */
    ParticipatingServer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParticipatingServer || (ParticipatingServer = {}));
export var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["PENDING"] = "PENDING";
    JobStatus["STARTED"] = "STARTED";
})(JobStatus || (JobStatus = {}));
export var JobType;
(function (JobType) {
    JobType["LAUNCH"] = "LAUNCH";
    JobType["TERMINATE"] = "TERMINATE";
})(JobType || (JobType = {}));
export var Job;
(function (Job) {
    /**
     * @internal
     */
    Job.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.tags && { tags: SENSITIVE_STRING }))); };
})(Job || (Job = {}));
export var DescribeJobsResponse;
(function (DescribeJobsResponse) {
    /**
     * @internal
     */
    DescribeJobsResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.items && { items: obj.items.map(function (item) { return Job.filterSensitiveLog(item); }) }))); };
})(DescribeJobsResponse || (DescribeJobsResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
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
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.tags && { tags: SENSITIVE_STRING }))); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ReplicationConfigurationDataPlaneRouting;
(function (ReplicationConfigurationDataPlaneRouting) {
    ReplicationConfigurationDataPlaneRouting["PRIVATE_IP"] = "PRIVATE_IP";
    ReplicationConfigurationDataPlaneRouting["PUBLIC_IP"] = "PUBLIC_IP";
})(ReplicationConfigurationDataPlaneRouting || (ReplicationConfigurationDataPlaneRouting = {}));
export var ReplicationConfigurationDefaultLargeStagingDiskType;
(function (ReplicationConfigurationDefaultLargeStagingDiskType) {
    ReplicationConfigurationDefaultLargeStagingDiskType["GP2"] = "GP2";
    ReplicationConfigurationDefaultLargeStagingDiskType["ST1"] = "ST1";
})(ReplicationConfigurationDefaultLargeStagingDiskType || (ReplicationConfigurationDefaultLargeStagingDiskType = {}));
export var ReplicationConfigurationEbsEncryption;
(function (ReplicationConfigurationEbsEncryption) {
    ReplicationConfigurationEbsEncryption["CUSTOM"] = "CUSTOM";
    ReplicationConfigurationEbsEncryption["DEFAULT"] = "DEFAULT";
    ReplicationConfigurationEbsEncryption["NONE"] = "NONE";
})(ReplicationConfigurationEbsEncryption || (ReplicationConfigurationEbsEncryption = {}));
export var CreateReplicationConfigurationTemplateRequest;
(function (CreateReplicationConfigurationTemplateRequest) {
    /**
     * @internal
     */
    CreateReplicationConfigurationTemplateRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING })), (obj.tags && { tags: SENSITIVE_STRING }))); };
})(CreateReplicationConfigurationTemplateRequest || (CreateReplicationConfigurationTemplateRequest = {}));
export var ReplicationConfigurationTemplate;
(function (ReplicationConfigurationTemplate) {
    /**
     * @internal
     */
    ReplicationConfigurationTemplate.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING })), (obj.tags && { tags: SENSITIVE_STRING }))); };
})(ReplicationConfigurationTemplate || (ReplicationConfigurationTemplate = {}));
export var DeleteReplicationConfigurationTemplateRequest;
(function (DeleteReplicationConfigurationTemplateRequest) {
    /**
     * @internal
     */
    DeleteReplicationConfigurationTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReplicationConfigurationTemplateRequest || (DeleteReplicationConfigurationTemplateRequest = {}));
export var DeleteReplicationConfigurationTemplateResponse;
(function (DeleteReplicationConfigurationTemplateResponse) {
    /**
     * @internal
     */
    DeleteReplicationConfigurationTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteReplicationConfigurationTemplateResponse || (DeleteReplicationConfigurationTemplateResponse = {}));
export var DescribeReplicationConfigurationTemplatesRequest;
(function (DescribeReplicationConfigurationTemplatesRequest) {
    /**
     * @internal
     */
    DescribeReplicationConfigurationTemplatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplicationConfigurationTemplatesRequest || (DescribeReplicationConfigurationTemplatesRequest = {}));
export var DescribeReplicationConfigurationTemplatesResponse;
(function (DescribeReplicationConfigurationTemplatesResponse) {
    /**
     * @internal
     */
    DescribeReplicationConfigurationTemplatesResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.items && { items: obj.items.map(function (item) { return ReplicationConfigurationTemplate.filterSensitiveLog(item); }) }))); };
})(DescribeReplicationConfigurationTemplatesResponse || (DescribeReplicationConfigurationTemplatesResponse = {}));
export var UpdateReplicationConfigurationTemplateRequest;
(function (UpdateReplicationConfigurationTemplateRequest) {
    /**
     * @internal
     */
    UpdateReplicationConfigurationTemplateRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }))); };
})(UpdateReplicationConfigurationTemplateRequest || (UpdateReplicationConfigurationTemplateRequest = {}));
export var ChangeServerLifeCycleStateSourceServerLifecycleState;
(function (ChangeServerLifeCycleStateSourceServerLifecycleState) {
    ChangeServerLifeCycleStateSourceServerLifecycleState["CUTOVER"] = "CUTOVER";
    ChangeServerLifeCycleStateSourceServerLifecycleState["READY_FOR_CUTOVER"] = "READY_FOR_CUTOVER";
    ChangeServerLifeCycleStateSourceServerLifecycleState["READY_FOR_TEST"] = "READY_FOR_TEST";
})(ChangeServerLifeCycleStateSourceServerLifecycleState || (ChangeServerLifeCycleStateSourceServerLifecycleState = {}));
export var ChangeServerLifeCycleStateSourceServerLifecycle;
(function (ChangeServerLifeCycleStateSourceServerLifecycle) {
    /**
     * @internal
     */
    ChangeServerLifeCycleStateSourceServerLifecycle.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChangeServerLifeCycleStateSourceServerLifecycle || (ChangeServerLifeCycleStateSourceServerLifecycle = {}));
export var ChangeServerLifeCycleStateRequest;
(function (ChangeServerLifeCycleStateRequest) {
    /**
     * @internal
     */
    ChangeServerLifeCycleStateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChangeServerLifeCycleStateRequest || (ChangeServerLifeCycleStateRequest = {}));
export var DataReplicationErrorString;
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
})(DataReplicationErrorString || (DataReplicationErrorString = {}));
export var DataReplicationError;
(function (DataReplicationError) {
    /**
     * @internal
     */
    DataReplicationError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataReplicationError || (DataReplicationError = {}));
export var DataReplicationInitiationStepName;
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
})(DataReplicationInitiationStepName || (DataReplicationInitiationStepName = {}));
export var DataReplicationInitiationStepStatus;
(function (DataReplicationInitiationStepStatus) {
    DataReplicationInitiationStepStatus["FAILED"] = "FAILED";
    DataReplicationInitiationStepStatus["IN_PROGRESS"] = "IN_PROGRESS";
    DataReplicationInitiationStepStatus["NOT_STARTED"] = "NOT_STARTED";
    DataReplicationInitiationStepStatus["SKIPPED"] = "SKIPPED";
    DataReplicationInitiationStepStatus["SUCCEEDED"] = "SUCCEEDED";
})(DataReplicationInitiationStepStatus || (DataReplicationInitiationStepStatus = {}));
export var DataReplicationInitiationStep;
(function (DataReplicationInitiationStep) {
    /**
     * @internal
     */
    DataReplicationInitiationStep.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataReplicationInitiationStep || (DataReplicationInitiationStep = {}));
export var DataReplicationInitiation;
(function (DataReplicationInitiation) {
    /**
     * @internal
     */
    DataReplicationInitiation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataReplicationInitiation || (DataReplicationInitiation = {}));
export var DataReplicationState;
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
})(DataReplicationState || (DataReplicationState = {}));
export var DataReplicationInfoReplicatedDisk;
(function (DataReplicationInfoReplicatedDisk) {
    /**
     * @internal
     */
    DataReplicationInfoReplicatedDisk.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataReplicationInfoReplicatedDisk || (DataReplicationInfoReplicatedDisk = {}));
export var DataReplicationInfo;
(function (DataReplicationInfo) {
    /**
     * @internal
     */
    DataReplicationInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataReplicationInfo || (DataReplicationInfo = {}));
export var FirstBoot;
(function (FirstBoot) {
    FirstBoot["STOPPED"] = "STOPPED";
    FirstBoot["SUCCEEDED"] = "SUCCEEDED";
    FirstBoot["UNKNOWN"] = "UNKNOWN";
    FirstBoot["WAITING"] = "WAITING";
})(FirstBoot || (FirstBoot = {}));
export var LaunchedInstance;
(function (LaunchedInstance) {
    /**
     * @internal
     */
    LaunchedInstance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LaunchedInstance || (LaunchedInstance = {}));
export var LifeCycleLastCutoverFinalized;
(function (LifeCycleLastCutoverFinalized) {
    /**
     * @internal
     */
    LifeCycleLastCutoverFinalized.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifeCycleLastCutoverFinalized || (LifeCycleLastCutoverFinalized = {}));
export var LifeCycleLastCutoverInitiated;
(function (LifeCycleLastCutoverInitiated) {
    /**
     * @internal
     */
    LifeCycleLastCutoverInitiated.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifeCycleLastCutoverInitiated || (LifeCycleLastCutoverInitiated = {}));
export var LifeCycleLastCutoverReverted;
(function (LifeCycleLastCutoverReverted) {
    /**
     * @internal
     */
    LifeCycleLastCutoverReverted.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifeCycleLastCutoverReverted || (LifeCycleLastCutoverReverted = {}));
export var LifeCycleLastCutover;
(function (LifeCycleLastCutover) {
    /**
     * @internal
     */
    LifeCycleLastCutover.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifeCycleLastCutover || (LifeCycleLastCutover = {}));
export var LifeCycleLastTestFinalized;
(function (LifeCycleLastTestFinalized) {
    /**
     * @internal
     */
    LifeCycleLastTestFinalized.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifeCycleLastTestFinalized || (LifeCycleLastTestFinalized = {}));
export var LifeCycleLastTestInitiated;
(function (LifeCycleLastTestInitiated) {
    /**
     * @internal
     */
    LifeCycleLastTestInitiated.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifeCycleLastTestInitiated || (LifeCycleLastTestInitiated = {}));
export var LifeCycleLastTestReverted;
(function (LifeCycleLastTestReverted) {
    /**
     * @internal
     */
    LifeCycleLastTestReverted.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifeCycleLastTestReverted || (LifeCycleLastTestReverted = {}));
export var LifeCycleLastTest;
(function (LifeCycleLastTest) {
    /**
     * @internal
     */
    LifeCycleLastTest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifeCycleLastTest || (LifeCycleLastTest = {}));
export var LifeCycleState;
(function (LifeCycleState) {
    LifeCycleState["CUTOVER"] = "CUTOVER";
    LifeCycleState["CUTTING_OVER"] = "CUTTING_OVER";
    LifeCycleState["DISCONNECTED"] = "DISCONNECTED";
    LifeCycleState["NOT_READY"] = "NOT_READY";
    LifeCycleState["READY_FOR_CUTOVER"] = "READY_FOR_CUTOVER";
    LifeCycleState["READY_FOR_TEST"] = "READY_FOR_TEST";
    LifeCycleState["STOPPED"] = "STOPPED";
    LifeCycleState["TESTING"] = "TESTING";
})(LifeCycleState || (LifeCycleState = {}));
export var LifeCycle;
(function (LifeCycle) {
    /**
     * @internal
     */
    LifeCycle.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifeCycle || (LifeCycle = {}));
export var CPU;
(function (CPU) {
    /**
     * @internal
     */
    CPU.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CPU || (CPU = {}));
export var Disk;
(function (Disk) {
    /**
     * @internal
     */
    Disk.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Disk || (Disk = {}));
export var IdentificationHints;
(function (IdentificationHints) {
    /**
     * @internal
     */
    IdentificationHints.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdentificationHints || (IdentificationHints = {}));
export var NetworkInterface;
(function (NetworkInterface) {
    /**
     * @internal
     */
    NetworkInterface.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkInterface || (NetworkInterface = {}));
export var OS;
(function (OS) {
    /**
     * @internal
     */
    OS.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OS || (OS = {}));
export var SourceProperties;
(function (SourceProperties) {
    /**
     * @internal
     */
    SourceProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceProperties || (SourceProperties = {}));
export var SourceServer;
(function (SourceServer) {
    /**
     * @internal
     */
    SourceServer.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.tags && { tags: SENSITIVE_STRING }))); };
})(SourceServer || (SourceServer = {}));
export var DeleteSourceServerRequest;
(function (DeleteSourceServerRequest) {
    /**
     * @internal
     */
    DeleteSourceServerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSourceServerRequest || (DeleteSourceServerRequest = {}));
export var DeleteSourceServerResponse;
(function (DeleteSourceServerResponse) {
    /**
     * @internal
     */
    DeleteSourceServerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSourceServerResponse || (DeleteSourceServerResponse = {}));
export var DescribeSourceServersRequestFilters;
(function (DescribeSourceServersRequestFilters) {
    /**
     * @internal
     */
    DescribeSourceServersRequestFilters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSourceServersRequestFilters || (DescribeSourceServersRequestFilters = {}));
export var DescribeSourceServersRequest;
(function (DescribeSourceServersRequest) {
    /**
     * @internal
     */
    DescribeSourceServersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSourceServersRequest || (DescribeSourceServersRequest = {}));
export var DescribeSourceServersResponse;
(function (DescribeSourceServersResponse) {
    /**
     * @internal
     */
    DescribeSourceServersResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.items && { items: obj.items.map(function (item) { return SourceServer.filterSensitiveLog(item); }) }))); };
})(DescribeSourceServersResponse || (DescribeSourceServersResponse = {}));
export var DisconnectFromServiceRequest;
(function (DisconnectFromServiceRequest) {
    /**
     * @internal
     */
    DisconnectFromServiceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisconnectFromServiceRequest || (DisconnectFromServiceRequest = {}));
export var FinalizeCutoverRequest;
(function (FinalizeCutoverRequest) {
    /**
     * @internal
     */
    FinalizeCutoverRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FinalizeCutoverRequest || (FinalizeCutoverRequest = {}));
export var GetLaunchConfigurationRequest;
(function (GetLaunchConfigurationRequest) {
    /**
     * @internal
     */
    GetLaunchConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLaunchConfigurationRequest || (GetLaunchConfigurationRequest = {}));
export var LaunchDisposition;
(function (LaunchDisposition) {
    LaunchDisposition["STARTED"] = "STARTED";
    LaunchDisposition["STOPPED"] = "STOPPED";
})(LaunchDisposition || (LaunchDisposition = {}));
export var Licensing;
(function (Licensing) {
    /**
     * @internal
     */
    Licensing.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Licensing || (Licensing = {}));
export var TargetInstanceTypeRightSizingMethod;
(function (TargetInstanceTypeRightSizingMethod) {
    TargetInstanceTypeRightSizingMethod["BASIC"] = "BASIC";
    TargetInstanceTypeRightSizingMethod["NONE"] = "NONE";
})(TargetInstanceTypeRightSizingMethod || (TargetInstanceTypeRightSizingMethod = {}));
export var LaunchConfiguration;
(function (LaunchConfiguration) {
    /**
     * @internal
     */
    LaunchConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LaunchConfiguration || (LaunchConfiguration = {}));
export var GetReplicationConfigurationRequest;
(function (GetReplicationConfigurationRequest) {
    /**
     * @internal
     */
    GetReplicationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetReplicationConfigurationRequest || (GetReplicationConfigurationRequest = {}));
export var ReplicationConfigurationReplicatedDiskStagingDiskType;
(function (ReplicationConfigurationReplicatedDiskStagingDiskType) {
    ReplicationConfigurationReplicatedDiskStagingDiskType["AUTO"] = "AUTO";
    ReplicationConfigurationReplicatedDiskStagingDiskType["GP2"] = "GP2";
    ReplicationConfigurationReplicatedDiskStagingDiskType["IO1"] = "IO1";
    ReplicationConfigurationReplicatedDiskStagingDiskType["SC1"] = "SC1";
    ReplicationConfigurationReplicatedDiskStagingDiskType["ST1"] = "ST1";
    ReplicationConfigurationReplicatedDiskStagingDiskType["STANDARD"] = "STANDARD";
})(ReplicationConfigurationReplicatedDiskStagingDiskType || (ReplicationConfigurationReplicatedDiskStagingDiskType = {}));
export var ReplicationConfigurationReplicatedDisk;
(function (ReplicationConfigurationReplicatedDisk) {
    /**
     * @internal
     */
    ReplicationConfigurationReplicatedDisk.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationConfigurationReplicatedDisk || (ReplicationConfigurationReplicatedDisk = {}));
export var ReplicationConfiguration;
(function (ReplicationConfiguration) {
    /**
     * @internal
     */
    ReplicationConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }))); };
})(ReplicationConfiguration || (ReplicationConfiguration = {}));
export var MarkAsArchivedRequest;
(function (MarkAsArchivedRequest) {
    /**
     * @internal
     */
    MarkAsArchivedRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MarkAsArchivedRequest || (MarkAsArchivedRequest = {}));
export var RetryDataReplicationRequest;
(function (RetryDataReplicationRequest) {
    /**
     * @internal
     */
    RetryDataReplicationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetryDataReplicationRequest || (RetryDataReplicationRequest = {}));
export var StartCutoverRequest;
(function (StartCutoverRequest) {
    /**
     * @internal
     */
    StartCutoverRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.tags && { tags: SENSITIVE_STRING }))); };
})(StartCutoverRequest || (StartCutoverRequest = {}));
export var StartCutoverResponse;
(function (StartCutoverResponse) {
    /**
     * @internal
     */
    StartCutoverResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.job && { job: Job.filterSensitiveLog(obj.job) }))); };
})(StartCutoverResponse || (StartCutoverResponse = {}));
export var StartTestRequest;
(function (StartTestRequest) {
    /**
     * @internal
     */
    StartTestRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.tags && { tags: SENSITIVE_STRING }))); };
})(StartTestRequest || (StartTestRequest = {}));
export var StartTestResponse;
(function (StartTestResponse) {
    /**
     * @internal
     */
    StartTestResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.job && { job: Job.filterSensitiveLog(obj.job) }))); };
})(StartTestResponse || (StartTestResponse = {}));
export var TerminateTargetInstancesRequest;
(function (TerminateTargetInstancesRequest) {
    /**
     * @internal
     */
    TerminateTargetInstancesRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.tags && { tags: SENSITIVE_STRING }))); };
})(TerminateTargetInstancesRequest || (TerminateTargetInstancesRequest = {}));
export var TerminateTargetInstancesResponse;
(function (TerminateTargetInstancesResponse) {
    /**
     * @internal
     */
    TerminateTargetInstancesResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.job && { job: Job.filterSensitiveLog(obj.job) }))); };
})(TerminateTargetInstancesResponse || (TerminateTargetInstancesResponse = {}));
export var UpdateLaunchConfigurationRequest;
(function (UpdateLaunchConfigurationRequest) {
    /**
     * @internal
     */
    UpdateLaunchConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLaunchConfigurationRequest || (UpdateLaunchConfigurationRequest = {}));
export var UpdateReplicationConfigurationRequest;
(function (UpdateReplicationConfigurationRequest) {
    /**
     * @internal
     */
    UpdateReplicationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.stagingAreaTags && { stagingAreaTags: SENSITIVE_STRING }))); };
})(UpdateReplicationConfigurationRequest || (UpdateReplicationConfigurationRequest = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.tags && { tags: SENSITIVE_STRING }))); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.tagKeys && { tagKeys: SENSITIVE_STRING }))); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
//# sourceMappingURL=models_0.js.map