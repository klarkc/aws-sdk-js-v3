"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAgentRequest = exports.CreateTaskResponse = exports.CreateTaskRequest = exports.TaskSchedule = exports.Options = exports.VerifyMode = exports.Uid = exports.TransferMode = exports.TaskQueueing = exports.SmbSecurityDescriptorCopyFlags = exports.PreserveDevices = exports.PreserveDeletedFiles = exports.PosixPermissions = exports.OverwriteMode = exports.Mtime = exports.LogLevel = exports.Gid = exports.FilterRule = exports.FilterType = exports.CreateLocationSmbResponse = exports.CreateLocationSmbRequest = exports.SmbMountOptions = exports.SmbVersion = exports.CreateLocationS3Response = exports.CreateLocationS3Request = exports.S3StorageClass = exports.S3Config = exports.CreateLocationObjectStorageResponse = exports.CreateLocationObjectStorageRequest = exports.ObjectStorageServerProtocol = exports.CreateLocationNfsResponse = exports.CreateLocationNfsRequest = exports.OnPremConfig = exports.NfsMountOptions = exports.NfsVersion = exports.CreateLocationFsxWindowsResponse = exports.CreateLocationFsxWindowsRequest = exports.CreateLocationEfsResponse = exports.CreateLocationEfsRequest = exports.Ec2Config = exports.CreateAgentResponse = exports.CreateAgentRequest = exports.TagListEntry = exports.InvalidRequestException = exports.InternalException = exports.CancelTaskExecutionResponse = exports.CancelTaskExecutionRequest = exports.Atime = exports.AgentListEntry = exports.AgentStatus = void 0;
exports.TagResourceRequest = exports.StartTaskExecutionResponse = exports.StartTaskExecutionRequest = exports.ListTasksResponse = exports.TaskListEntry = exports.ListTasksRequest = exports.TaskFilter = exports.TaskFilterName = exports.ListTaskExecutionsResponse = exports.TaskExecutionListEntry = exports.ListTaskExecutionsRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListLocationsResponse = exports.LocationListEntry = exports.ListLocationsRequest = exports.LocationFilter = exports.Operator = exports.LocationFilterName = exports.ListAgentsResponse = exports.ListAgentsRequest = exports.DescribeTaskExecutionResponse = exports.TaskExecutionStatus = exports.TaskExecutionResultDetail = exports.PhaseStatus = exports.DescribeTaskExecutionRequest = exports.DescribeTaskResponse = exports.TaskStatus = exports.DescribeTaskRequest = exports.DescribeLocationSmbResponse = exports.DescribeLocationSmbRequest = exports.DescribeLocationS3Response = exports.DescribeLocationS3Request = exports.DescribeLocationObjectStorageResponse = exports.DescribeLocationObjectStorageRequest = exports.DescribeLocationNfsResponse = exports.DescribeLocationNfsRequest = exports.DescribeLocationFsxWindowsResponse = exports.DescribeLocationFsxWindowsRequest = exports.DescribeLocationEfsResponse = exports.DescribeLocationEfsRequest = exports.DescribeAgentResponse = exports.PrivateLinkConfig = exports.EndpointType = exports.DescribeAgentRequest = exports.DeleteTaskResponse = exports.DeleteTaskRequest = exports.DeleteLocationResponse = exports.DeleteLocationRequest = exports.DeleteAgentResponse = void 0;
exports.UpdateTaskExecutionResponse = exports.UpdateTaskExecutionRequest = exports.UpdateTaskResponse = exports.UpdateTaskRequest = exports.UpdateLocationSmbResponse = exports.UpdateLocationSmbRequest = exports.UpdateLocationObjectStorageResponse = exports.UpdateLocationObjectStorageRequest = exports.UpdateLocationNfsResponse = exports.UpdateLocationNfsRequest = exports.UpdateAgentResponse = exports.UpdateAgentRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AgentStatus;
(function (AgentStatus) {
    AgentStatus["OFFLINE"] = "OFFLINE";
    AgentStatus["ONLINE"] = "ONLINE";
})(AgentStatus = exports.AgentStatus || (exports.AgentStatus = {}));
var AgentListEntry;
(function (AgentListEntry) {
    /**
     * @internal
     */
    AgentListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AgentListEntry = exports.AgentListEntry || (exports.AgentListEntry = {}));
var Atime;
(function (Atime) {
    Atime["BEST_EFFORT"] = "BEST_EFFORT";
    Atime["NONE"] = "NONE";
})(Atime = exports.Atime || (exports.Atime = {}));
var CancelTaskExecutionRequest;
(function (CancelTaskExecutionRequest) {
    /**
     * @internal
     */
    CancelTaskExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelTaskExecutionRequest = exports.CancelTaskExecutionRequest || (exports.CancelTaskExecutionRequest = {}));
var CancelTaskExecutionResponse;
(function (CancelTaskExecutionResponse) {
    /**
     * @internal
     */
    CancelTaskExecutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelTaskExecutionResponse = exports.CancelTaskExecutionResponse || (exports.CancelTaskExecutionResponse = {}));
var InternalException;
(function (InternalException) {
    /**
     * @internal
     */
    InternalException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalException = exports.InternalException || (exports.InternalException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var TagListEntry;
(function (TagListEntry) {
    /**
     * @internal
     */
    TagListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagListEntry = exports.TagListEntry || (exports.TagListEntry = {}));
var CreateAgentRequest;
(function (CreateAgentRequest) {
    /**
     * @internal
     */
    CreateAgentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAgentRequest = exports.CreateAgentRequest || (exports.CreateAgentRequest = {}));
var CreateAgentResponse;
(function (CreateAgentResponse) {
    /**
     * @internal
     */
    CreateAgentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAgentResponse = exports.CreateAgentResponse || (exports.CreateAgentResponse = {}));
var Ec2Config;
(function (Ec2Config) {
    /**
     * @internal
     */
    Ec2Config.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Ec2Config = exports.Ec2Config || (exports.Ec2Config = {}));
var CreateLocationEfsRequest;
(function (CreateLocationEfsRequest) {
    /**
     * @internal
     */
    CreateLocationEfsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLocationEfsRequest = exports.CreateLocationEfsRequest || (exports.CreateLocationEfsRequest = {}));
var CreateLocationEfsResponse;
(function (CreateLocationEfsResponse) {
    /**
     * @internal
     */
    CreateLocationEfsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLocationEfsResponse = exports.CreateLocationEfsResponse || (exports.CreateLocationEfsResponse = {}));
var CreateLocationFsxWindowsRequest;
(function (CreateLocationFsxWindowsRequest) {
    /**
     * @internal
     */
    CreateLocationFsxWindowsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateLocationFsxWindowsRequest = exports.CreateLocationFsxWindowsRequest || (exports.CreateLocationFsxWindowsRequest = {}));
var CreateLocationFsxWindowsResponse;
(function (CreateLocationFsxWindowsResponse) {
    /**
     * @internal
     */
    CreateLocationFsxWindowsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLocationFsxWindowsResponse = exports.CreateLocationFsxWindowsResponse || (exports.CreateLocationFsxWindowsResponse = {}));
var NfsVersion;
(function (NfsVersion) {
    NfsVersion["AUTOMATIC"] = "AUTOMATIC";
    NfsVersion["NFS3"] = "NFS3";
    NfsVersion["NFS4_0"] = "NFS4_0";
    NfsVersion["NFS4_1"] = "NFS4_1";
})(NfsVersion = exports.NfsVersion || (exports.NfsVersion = {}));
var NfsMountOptions;
(function (NfsMountOptions) {
    /**
     * @internal
     */
    NfsMountOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NfsMountOptions = exports.NfsMountOptions || (exports.NfsMountOptions = {}));
var OnPremConfig;
(function (OnPremConfig) {
    /**
     * @internal
     */
    OnPremConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OnPremConfig = exports.OnPremConfig || (exports.OnPremConfig = {}));
var CreateLocationNfsRequest;
(function (CreateLocationNfsRequest) {
    /**
     * @internal
     */
    CreateLocationNfsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLocationNfsRequest = exports.CreateLocationNfsRequest || (exports.CreateLocationNfsRequest = {}));
var CreateLocationNfsResponse;
(function (CreateLocationNfsResponse) {
    /**
     * @internal
     */
    CreateLocationNfsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLocationNfsResponse = exports.CreateLocationNfsResponse || (exports.CreateLocationNfsResponse = {}));
var ObjectStorageServerProtocol;
(function (ObjectStorageServerProtocol) {
    ObjectStorageServerProtocol["HTTP"] = "HTTP";
    ObjectStorageServerProtocol["HTTPS"] = "HTTPS";
})(ObjectStorageServerProtocol = exports.ObjectStorageServerProtocol || (exports.ObjectStorageServerProtocol = {}));
var CreateLocationObjectStorageRequest;
(function (CreateLocationObjectStorageRequest) {
    /**
     * @internal
     */
    CreateLocationObjectStorageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SecretKey && { SecretKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateLocationObjectStorageRequest = exports.CreateLocationObjectStorageRequest || (exports.CreateLocationObjectStorageRequest = {}));
var CreateLocationObjectStorageResponse;
(function (CreateLocationObjectStorageResponse) {
    /**
     * @internal
     */
    CreateLocationObjectStorageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLocationObjectStorageResponse = exports.CreateLocationObjectStorageResponse || (exports.CreateLocationObjectStorageResponse = {}));
var S3Config;
(function (S3Config) {
    /**
     * @internal
     */
    S3Config.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Config = exports.S3Config || (exports.S3Config = {}));
var S3StorageClass;
(function (S3StorageClass) {
    S3StorageClass["DEEP_ARCHIVE"] = "DEEP_ARCHIVE";
    S3StorageClass["GLACIER"] = "GLACIER";
    S3StorageClass["INTELLIGENT_TIERING"] = "INTELLIGENT_TIERING";
    S3StorageClass["ONEZONE_IA"] = "ONEZONE_IA";
    S3StorageClass["OUTPOSTS"] = "OUTPOSTS";
    S3StorageClass["STANDARD"] = "STANDARD";
    S3StorageClass["STANDARD_IA"] = "STANDARD_IA";
})(S3StorageClass = exports.S3StorageClass || (exports.S3StorageClass = {}));
var CreateLocationS3Request;
(function (CreateLocationS3Request) {
    /**
     * @internal
     */
    CreateLocationS3Request.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLocationS3Request = exports.CreateLocationS3Request || (exports.CreateLocationS3Request = {}));
var CreateLocationS3Response;
(function (CreateLocationS3Response) {
    /**
     * @internal
     */
    CreateLocationS3Response.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLocationS3Response = exports.CreateLocationS3Response || (exports.CreateLocationS3Response = {}));
var SmbVersion;
(function (SmbVersion) {
    SmbVersion["AUTOMATIC"] = "AUTOMATIC";
    SmbVersion["SMB2"] = "SMB2";
    SmbVersion["SMB3"] = "SMB3";
})(SmbVersion = exports.SmbVersion || (exports.SmbVersion = {}));
var SmbMountOptions;
(function (SmbMountOptions) {
    /**
     * @internal
     */
    SmbMountOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SmbMountOptions = exports.SmbMountOptions || (exports.SmbMountOptions = {}));
var CreateLocationSmbRequest;
(function (CreateLocationSmbRequest) {
    /**
     * @internal
     */
    CreateLocationSmbRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateLocationSmbRequest = exports.CreateLocationSmbRequest || (exports.CreateLocationSmbRequest = {}));
var CreateLocationSmbResponse;
(function (CreateLocationSmbResponse) {
    /**
     * @internal
     */
    CreateLocationSmbResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLocationSmbResponse = exports.CreateLocationSmbResponse || (exports.CreateLocationSmbResponse = {}));
var FilterType;
(function (FilterType) {
    FilterType["SIMPLE_PATTERN"] = "SIMPLE_PATTERN";
})(FilterType = exports.FilterType || (exports.FilterType = {}));
var FilterRule;
(function (FilterRule) {
    /**
     * @internal
     */
    FilterRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FilterRule = exports.FilterRule || (exports.FilterRule = {}));
var Gid;
(function (Gid) {
    Gid["BOTH"] = "BOTH";
    Gid["INT_VALUE"] = "INT_VALUE";
    Gid["NAME"] = "NAME";
    Gid["NONE"] = "NONE";
})(Gid = exports.Gid || (exports.Gid = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel["BASIC"] = "BASIC";
    LogLevel["OFF"] = "OFF";
    LogLevel["TRANSFER"] = "TRANSFER";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Mtime;
(function (Mtime) {
    Mtime["NONE"] = "NONE";
    Mtime["PRESERVE"] = "PRESERVE";
})(Mtime = exports.Mtime || (exports.Mtime = {}));
var OverwriteMode;
(function (OverwriteMode) {
    OverwriteMode["ALWAYS"] = "ALWAYS";
    OverwriteMode["NEVER"] = "NEVER";
})(OverwriteMode = exports.OverwriteMode || (exports.OverwriteMode = {}));
var PosixPermissions;
(function (PosixPermissions) {
    PosixPermissions["NONE"] = "NONE";
    PosixPermissions["PRESERVE"] = "PRESERVE";
})(PosixPermissions = exports.PosixPermissions || (exports.PosixPermissions = {}));
var PreserveDeletedFiles;
(function (PreserveDeletedFiles) {
    PreserveDeletedFiles["PRESERVE"] = "PRESERVE";
    PreserveDeletedFiles["REMOVE"] = "REMOVE";
})(PreserveDeletedFiles = exports.PreserveDeletedFiles || (exports.PreserveDeletedFiles = {}));
var PreserveDevices;
(function (PreserveDevices) {
    PreserveDevices["NONE"] = "NONE";
    PreserveDevices["PRESERVE"] = "PRESERVE";
})(PreserveDevices = exports.PreserveDevices || (exports.PreserveDevices = {}));
var SmbSecurityDescriptorCopyFlags;
(function (SmbSecurityDescriptorCopyFlags) {
    SmbSecurityDescriptorCopyFlags["NONE"] = "NONE";
    SmbSecurityDescriptorCopyFlags["OWNER_DACL"] = "OWNER_DACL";
    SmbSecurityDescriptorCopyFlags["OWNER_DACL_SACL"] = "OWNER_DACL_SACL";
})(SmbSecurityDescriptorCopyFlags = exports.SmbSecurityDescriptorCopyFlags || (exports.SmbSecurityDescriptorCopyFlags = {}));
var TaskQueueing;
(function (TaskQueueing) {
    TaskQueueing["DISABLED"] = "DISABLED";
    TaskQueueing["ENABLED"] = "ENABLED";
})(TaskQueueing = exports.TaskQueueing || (exports.TaskQueueing = {}));
var TransferMode;
(function (TransferMode) {
    TransferMode["ALL"] = "ALL";
    TransferMode["CHANGED"] = "CHANGED";
})(TransferMode = exports.TransferMode || (exports.TransferMode = {}));
var Uid;
(function (Uid) {
    Uid["BOTH"] = "BOTH";
    Uid["INT_VALUE"] = "INT_VALUE";
    Uid["NAME"] = "NAME";
    Uid["NONE"] = "NONE";
})(Uid = exports.Uid || (exports.Uid = {}));
var VerifyMode;
(function (VerifyMode) {
    VerifyMode["NONE"] = "NONE";
    VerifyMode["ONLY_FILES_TRANSFERRED"] = "ONLY_FILES_TRANSFERRED";
    VerifyMode["POINT_IN_TIME_CONSISTENT"] = "POINT_IN_TIME_CONSISTENT";
})(VerifyMode = exports.VerifyMode || (exports.VerifyMode = {}));
var Options;
(function (Options) {
    /**
     * @internal
     */
    Options.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Options = exports.Options || (exports.Options = {}));
var TaskSchedule;
(function (TaskSchedule) {
    /**
     * @internal
     */
    TaskSchedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskSchedule = exports.TaskSchedule || (exports.TaskSchedule = {}));
var CreateTaskRequest;
(function (CreateTaskRequest) {
    /**
     * @internal
     */
    CreateTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTaskRequest = exports.CreateTaskRequest || (exports.CreateTaskRequest = {}));
var CreateTaskResponse;
(function (CreateTaskResponse) {
    /**
     * @internal
     */
    CreateTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTaskResponse = exports.CreateTaskResponse || (exports.CreateTaskResponse = {}));
var DeleteAgentRequest;
(function (DeleteAgentRequest) {
    /**
     * @internal
     */
    DeleteAgentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAgentRequest = exports.DeleteAgentRequest || (exports.DeleteAgentRequest = {}));
var DeleteAgentResponse;
(function (DeleteAgentResponse) {
    /**
     * @internal
     */
    DeleteAgentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAgentResponse = exports.DeleteAgentResponse || (exports.DeleteAgentResponse = {}));
var DeleteLocationRequest;
(function (DeleteLocationRequest) {
    /**
     * @internal
     */
    DeleteLocationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLocationRequest = exports.DeleteLocationRequest || (exports.DeleteLocationRequest = {}));
var DeleteLocationResponse;
(function (DeleteLocationResponse) {
    /**
     * @internal
     */
    DeleteLocationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLocationResponse = exports.DeleteLocationResponse || (exports.DeleteLocationResponse = {}));
var DeleteTaskRequest;
(function (DeleteTaskRequest) {
    /**
     * @internal
     */
    DeleteTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTaskRequest = exports.DeleteTaskRequest || (exports.DeleteTaskRequest = {}));
var DeleteTaskResponse;
(function (DeleteTaskResponse) {
    /**
     * @internal
     */
    DeleteTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTaskResponse = exports.DeleteTaskResponse || (exports.DeleteTaskResponse = {}));
var DescribeAgentRequest;
(function (DescribeAgentRequest) {
    /**
     * @internal
     */
    DescribeAgentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAgentRequest = exports.DescribeAgentRequest || (exports.DescribeAgentRequest = {}));
var EndpointType;
(function (EndpointType) {
    EndpointType["FIPS"] = "FIPS";
    EndpointType["PRIVATE_LINK"] = "PRIVATE_LINK";
    EndpointType["PUBLIC"] = "PUBLIC";
})(EndpointType = exports.EndpointType || (exports.EndpointType = {}));
var PrivateLinkConfig;
(function (PrivateLinkConfig) {
    /**
     * @internal
     */
    PrivateLinkConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrivateLinkConfig = exports.PrivateLinkConfig || (exports.PrivateLinkConfig = {}));
var DescribeAgentResponse;
(function (DescribeAgentResponse) {
    /**
     * @internal
     */
    DescribeAgentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAgentResponse = exports.DescribeAgentResponse || (exports.DescribeAgentResponse = {}));
var DescribeLocationEfsRequest;
(function (DescribeLocationEfsRequest) {
    /**
     * @internal
     */
    DescribeLocationEfsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocationEfsRequest = exports.DescribeLocationEfsRequest || (exports.DescribeLocationEfsRequest = {}));
var DescribeLocationEfsResponse;
(function (DescribeLocationEfsResponse) {
    /**
     * @internal
     */
    DescribeLocationEfsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocationEfsResponse = exports.DescribeLocationEfsResponse || (exports.DescribeLocationEfsResponse = {}));
var DescribeLocationFsxWindowsRequest;
(function (DescribeLocationFsxWindowsRequest) {
    /**
     * @internal
     */
    DescribeLocationFsxWindowsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocationFsxWindowsRequest = exports.DescribeLocationFsxWindowsRequest || (exports.DescribeLocationFsxWindowsRequest = {}));
var DescribeLocationFsxWindowsResponse;
(function (DescribeLocationFsxWindowsResponse) {
    /**
     * @internal
     */
    DescribeLocationFsxWindowsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocationFsxWindowsResponse = exports.DescribeLocationFsxWindowsResponse || (exports.DescribeLocationFsxWindowsResponse = {}));
var DescribeLocationNfsRequest;
(function (DescribeLocationNfsRequest) {
    /**
     * @internal
     */
    DescribeLocationNfsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocationNfsRequest = exports.DescribeLocationNfsRequest || (exports.DescribeLocationNfsRequest = {}));
var DescribeLocationNfsResponse;
(function (DescribeLocationNfsResponse) {
    /**
     * @internal
     */
    DescribeLocationNfsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocationNfsResponse = exports.DescribeLocationNfsResponse || (exports.DescribeLocationNfsResponse = {}));
var DescribeLocationObjectStorageRequest;
(function (DescribeLocationObjectStorageRequest) {
    /**
     * @internal
     */
    DescribeLocationObjectStorageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocationObjectStorageRequest = exports.DescribeLocationObjectStorageRequest || (exports.DescribeLocationObjectStorageRequest = {}));
var DescribeLocationObjectStorageResponse;
(function (DescribeLocationObjectStorageResponse) {
    /**
     * @internal
     */
    DescribeLocationObjectStorageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocationObjectStorageResponse = exports.DescribeLocationObjectStorageResponse || (exports.DescribeLocationObjectStorageResponse = {}));
var DescribeLocationS3Request;
(function (DescribeLocationS3Request) {
    /**
     * @internal
     */
    DescribeLocationS3Request.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocationS3Request = exports.DescribeLocationS3Request || (exports.DescribeLocationS3Request = {}));
var DescribeLocationS3Response;
(function (DescribeLocationS3Response) {
    /**
     * @internal
     */
    DescribeLocationS3Response.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocationS3Response = exports.DescribeLocationS3Response || (exports.DescribeLocationS3Response = {}));
var DescribeLocationSmbRequest;
(function (DescribeLocationSmbRequest) {
    /**
     * @internal
     */
    DescribeLocationSmbRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocationSmbRequest = exports.DescribeLocationSmbRequest || (exports.DescribeLocationSmbRequest = {}));
var DescribeLocationSmbResponse;
(function (DescribeLocationSmbResponse) {
    /**
     * @internal
     */
    DescribeLocationSmbResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLocationSmbResponse = exports.DescribeLocationSmbResponse || (exports.DescribeLocationSmbResponse = {}));
var DescribeTaskRequest;
(function (DescribeTaskRequest) {
    /**
     * @internal
     */
    DescribeTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTaskRequest = exports.DescribeTaskRequest || (exports.DescribeTaskRequest = {}));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["AVAILABLE"] = "AVAILABLE";
    TaskStatus["CREATING"] = "CREATING";
    TaskStatus["QUEUED"] = "QUEUED";
    TaskStatus["RUNNING"] = "RUNNING";
    TaskStatus["UNAVAILABLE"] = "UNAVAILABLE";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
var DescribeTaskResponse;
(function (DescribeTaskResponse) {
    /**
     * @internal
     */
    DescribeTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTaskResponse = exports.DescribeTaskResponse || (exports.DescribeTaskResponse = {}));
var DescribeTaskExecutionRequest;
(function (DescribeTaskExecutionRequest) {
    /**
     * @internal
     */
    DescribeTaskExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTaskExecutionRequest = exports.DescribeTaskExecutionRequest || (exports.DescribeTaskExecutionRequest = {}));
var PhaseStatus;
(function (PhaseStatus) {
    PhaseStatus["ERROR"] = "ERROR";
    PhaseStatus["PENDING"] = "PENDING";
    PhaseStatus["SUCCESS"] = "SUCCESS";
})(PhaseStatus = exports.PhaseStatus || (exports.PhaseStatus = {}));
var TaskExecutionResultDetail;
(function (TaskExecutionResultDetail) {
    /**
     * @internal
     */
    TaskExecutionResultDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskExecutionResultDetail = exports.TaskExecutionResultDetail || (exports.TaskExecutionResultDetail = {}));
var TaskExecutionStatus;
(function (TaskExecutionStatus) {
    TaskExecutionStatus["ERROR"] = "ERROR";
    TaskExecutionStatus["LAUNCHING"] = "LAUNCHING";
    TaskExecutionStatus["PREPARING"] = "PREPARING";
    TaskExecutionStatus["QUEUED"] = "QUEUED";
    TaskExecutionStatus["SUCCESS"] = "SUCCESS";
    TaskExecutionStatus["TRANSFERRING"] = "TRANSFERRING";
    TaskExecutionStatus["VERIFYING"] = "VERIFYING";
})(TaskExecutionStatus = exports.TaskExecutionStatus || (exports.TaskExecutionStatus = {}));
var DescribeTaskExecutionResponse;
(function (DescribeTaskExecutionResponse) {
    /**
     * @internal
     */
    DescribeTaskExecutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTaskExecutionResponse = exports.DescribeTaskExecutionResponse || (exports.DescribeTaskExecutionResponse = {}));
var ListAgentsRequest;
(function (ListAgentsRequest) {
    /**
     * @internal
     */
    ListAgentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAgentsRequest = exports.ListAgentsRequest || (exports.ListAgentsRequest = {}));
var ListAgentsResponse;
(function (ListAgentsResponse) {
    /**
     * @internal
     */
    ListAgentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAgentsResponse = exports.ListAgentsResponse || (exports.ListAgentsResponse = {}));
var LocationFilterName;
(function (LocationFilterName) {
    LocationFilterName["CreationTime"] = "CreationTime";
    LocationFilterName["LocationType"] = "LocationType";
    LocationFilterName["LocationUri"] = "LocationUri";
})(LocationFilterName = exports.LocationFilterName || (exports.LocationFilterName = {}));
var Operator;
(function (Operator) {
    Operator["BEGINS_WITH"] = "BeginsWith";
    Operator["CONTAINS"] = "Contains";
    Operator["EQ"] = "Equals";
    Operator["GE"] = "GreaterThanOrEqual";
    Operator["GT"] = "GreaterThan";
    Operator["IN"] = "In";
    Operator["LE"] = "LessThanOrEqual";
    Operator["LT"] = "LessThan";
    Operator["NE"] = "NotEquals";
    Operator["NOT_CONTAINS"] = "NotContains";
})(Operator = exports.Operator || (exports.Operator = {}));
var LocationFilter;
(function (LocationFilter) {
    /**
     * @internal
     */
    LocationFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocationFilter = exports.LocationFilter || (exports.LocationFilter = {}));
var ListLocationsRequest;
(function (ListLocationsRequest) {
    /**
     * @internal
     */
    ListLocationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLocationsRequest = exports.ListLocationsRequest || (exports.ListLocationsRequest = {}));
var LocationListEntry;
(function (LocationListEntry) {
    /**
     * @internal
     */
    LocationListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocationListEntry = exports.LocationListEntry || (exports.LocationListEntry = {}));
var ListLocationsResponse;
(function (ListLocationsResponse) {
    /**
     * @internal
     */
    ListLocationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLocationsResponse = exports.ListLocationsResponse || (exports.ListLocationsResponse = {}));
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
var ListTaskExecutionsRequest;
(function (ListTaskExecutionsRequest) {
    /**
     * @internal
     */
    ListTaskExecutionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTaskExecutionsRequest = exports.ListTaskExecutionsRequest || (exports.ListTaskExecutionsRequest = {}));
var TaskExecutionListEntry;
(function (TaskExecutionListEntry) {
    /**
     * @internal
     */
    TaskExecutionListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskExecutionListEntry = exports.TaskExecutionListEntry || (exports.TaskExecutionListEntry = {}));
var ListTaskExecutionsResponse;
(function (ListTaskExecutionsResponse) {
    /**
     * @internal
     */
    ListTaskExecutionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTaskExecutionsResponse = exports.ListTaskExecutionsResponse || (exports.ListTaskExecutionsResponse = {}));
var TaskFilterName;
(function (TaskFilterName) {
    TaskFilterName["CreationTime"] = "CreationTime";
    TaskFilterName["LocationId"] = "LocationId";
})(TaskFilterName = exports.TaskFilterName || (exports.TaskFilterName = {}));
var TaskFilter;
(function (TaskFilter) {
    /**
     * @internal
     */
    TaskFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskFilter = exports.TaskFilter || (exports.TaskFilter = {}));
var ListTasksRequest;
(function (ListTasksRequest) {
    /**
     * @internal
     */
    ListTasksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTasksRequest = exports.ListTasksRequest || (exports.ListTasksRequest = {}));
var TaskListEntry;
(function (TaskListEntry) {
    /**
     * @internal
     */
    TaskListEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskListEntry = exports.TaskListEntry || (exports.TaskListEntry = {}));
var ListTasksResponse;
(function (ListTasksResponse) {
    /**
     * @internal
     */
    ListTasksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTasksResponse = exports.ListTasksResponse || (exports.ListTasksResponse = {}));
var StartTaskExecutionRequest;
(function (StartTaskExecutionRequest) {
    /**
     * @internal
     */
    StartTaskExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTaskExecutionRequest = exports.StartTaskExecutionRequest || (exports.StartTaskExecutionRequest = {}));
var StartTaskExecutionResponse;
(function (StartTaskExecutionResponse) {
    /**
     * @internal
     */
    StartTaskExecutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTaskExecutionResponse = exports.StartTaskExecutionResponse || (exports.StartTaskExecutionResponse = {}));
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
var UpdateAgentRequest;
(function (UpdateAgentRequest) {
    /**
     * @internal
     */
    UpdateAgentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAgentRequest = exports.UpdateAgentRequest || (exports.UpdateAgentRequest = {}));
var UpdateAgentResponse;
(function (UpdateAgentResponse) {
    /**
     * @internal
     */
    UpdateAgentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAgentResponse = exports.UpdateAgentResponse || (exports.UpdateAgentResponse = {}));
var UpdateLocationNfsRequest;
(function (UpdateLocationNfsRequest) {
    /**
     * @internal
     */
    UpdateLocationNfsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLocationNfsRequest = exports.UpdateLocationNfsRequest || (exports.UpdateLocationNfsRequest = {}));
var UpdateLocationNfsResponse;
(function (UpdateLocationNfsResponse) {
    /**
     * @internal
     */
    UpdateLocationNfsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLocationNfsResponse = exports.UpdateLocationNfsResponse || (exports.UpdateLocationNfsResponse = {}));
var UpdateLocationObjectStorageRequest;
(function (UpdateLocationObjectStorageRequest) {
    /**
     * @internal
     */
    UpdateLocationObjectStorageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SecretKey && { SecretKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateLocationObjectStorageRequest = exports.UpdateLocationObjectStorageRequest || (exports.UpdateLocationObjectStorageRequest = {}));
var UpdateLocationObjectStorageResponse;
(function (UpdateLocationObjectStorageResponse) {
    /**
     * @internal
     */
    UpdateLocationObjectStorageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLocationObjectStorageResponse = exports.UpdateLocationObjectStorageResponse || (exports.UpdateLocationObjectStorageResponse = {}));
var UpdateLocationSmbRequest;
(function (UpdateLocationSmbRequest) {
    /**
     * @internal
     */
    UpdateLocationSmbRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateLocationSmbRequest = exports.UpdateLocationSmbRequest || (exports.UpdateLocationSmbRequest = {}));
var UpdateLocationSmbResponse;
(function (UpdateLocationSmbResponse) {
    /**
     * @internal
     */
    UpdateLocationSmbResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLocationSmbResponse = exports.UpdateLocationSmbResponse || (exports.UpdateLocationSmbResponse = {}));
var UpdateTaskRequest;
(function (UpdateTaskRequest) {
    /**
     * @internal
     */
    UpdateTaskRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTaskRequest = exports.UpdateTaskRequest || (exports.UpdateTaskRequest = {}));
var UpdateTaskResponse;
(function (UpdateTaskResponse) {
    /**
     * @internal
     */
    UpdateTaskResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTaskResponse = exports.UpdateTaskResponse || (exports.UpdateTaskResponse = {}));
var UpdateTaskExecutionRequest;
(function (UpdateTaskExecutionRequest) {
    /**
     * @internal
     */
    UpdateTaskExecutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTaskExecutionRequest = exports.UpdateTaskExecutionRequest || (exports.UpdateTaskExecutionRequest = {}));
var UpdateTaskExecutionResponse;
(function (UpdateTaskExecutionResponse) {
    /**
     * @internal
     */
    UpdateTaskExecutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTaskExecutionResponse = exports.UpdateTaskExecutionResponse || (exports.UpdateTaskExecutionResponse = {}));
//# sourceMappingURL=models_0.js.map