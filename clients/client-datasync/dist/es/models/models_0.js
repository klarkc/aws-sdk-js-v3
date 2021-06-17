import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AgentStatus;
(function (AgentStatus) {
    AgentStatus["OFFLINE"] = "OFFLINE";
    AgentStatus["ONLINE"] = "ONLINE";
})(AgentStatus || (AgentStatus = {}));
export var AgentListEntry;
(function (AgentListEntry) {
    /**
     * @internal
     */
    AgentListEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AgentListEntry || (AgentListEntry = {}));
export var Atime;
(function (Atime) {
    Atime["BEST_EFFORT"] = "BEST_EFFORT";
    Atime["NONE"] = "NONE";
})(Atime || (Atime = {}));
export var CancelTaskExecutionRequest;
(function (CancelTaskExecutionRequest) {
    /**
     * @internal
     */
    CancelTaskExecutionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelTaskExecutionRequest || (CancelTaskExecutionRequest = {}));
export var CancelTaskExecutionResponse;
(function (CancelTaskExecutionResponse) {
    /**
     * @internal
     */
    CancelTaskExecutionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelTaskExecutionResponse || (CancelTaskExecutionResponse = {}));
export var InternalException;
(function (InternalException) {
    /**
     * @internal
     */
    InternalException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalException || (InternalException = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRequestException || (InvalidRequestException = {}));
export var TagListEntry;
(function (TagListEntry) {
    /**
     * @internal
     */
    TagListEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagListEntry || (TagListEntry = {}));
export var CreateAgentRequest;
(function (CreateAgentRequest) {
    /**
     * @internal
     */
    CreateAgentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAgentRequest || (CreateAgentRequest = {}));
export var CreateAgentResponse;
(function (CreateAgentResponse) {
    /**
     * @internal
     */
    CreateAgentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAgentResponse || (CreateAgentResponse = {}));
export var Ec2Config;
(function (Ec2Config) {
    /**
     * @internal
     */
    Ec2Config.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Ec2Config || (Ec2Config = {}));
export var CreateLocationEfsRequest;
(function (CreateLocationEfsRequest) {
    /**
     * @internal
     */
    CreateLocationEfsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLocationEfsRequest || (CreateLocationEfsRequest = {}));
export var CreateLocationEfsResponse;
(function (CreateLocationEfsResponse) {
    /**
     * @internal
     */
    CreateLocationEfsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLocationEfsResponse || (CreateLocationEfsResponse = {}));
export var CreateLocationFsxWindowsRequest;
(function (CreateLocationFsxWindowsRequest) {
    /**
     * @internal
     */
    CreateLocationFsxWindowsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(CreateLocationFsxWindowsRequest || (CreateLocationFsxWindowsRequest = {}));
export var CreateLocationFsxWindowsResponse;
(function (CreateLocationFsxWindowsResponse) {
    /**
     * @internal
     */
    CreateLocationFsxWindowsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLocationFsxWindowsResponse || (CreateLocationFsxWindowsResponse = {}));
export var NfsVersion;
(function (NfsVersion) {
    NfsVersion["AUTOMATIC"] = "AUTOMATIC";
    NfsVersion["NFS3"] = "NFS3";
    NfsVersion["NFS4_0"] = "NFS4_0";
    NfsVersion["NFS4_1"] = "NFS4_1";
})(NfsVersion || (NfsVersion = {}));
export var NfsMountOptions;
(function (NfsMountOptions) {
    /**
     * @internal
     */
    NfsMountOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NfsMountOptions || (NfsMountOptions = {}));
export var OnPremConfig;
(function (OnPremConfig) {
    /**
     * @internal
     */
    OnPremConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OnPremConfig || (OnPremConfig = {}));
export var CreateLocationNfsRequest;
(function (CreateLocationNfsRequest) {
    /**
     * @internal
     */
    CreateLocationNfsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLocationNfsRequest || (CreateLocationNfsRequest = {}));
export var CreateLocationNfsResponse;
(function (CreateLocationNfsResponse) {
    /**
     * @internal
     */
    CreateLocationNfsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLocationNfsResponse || (CreateLocationNfsResponse = {}));
export var ObjectStorageServerProtocol;
(function (ObjectStorageServerProtocol) {
    ObjectStorageServerProtocol["HTTP"] = "HTTP";
    ObjectStorageServerProtocol["HTTPS"] = "HTTPS";
})(ObjectStorageServerProtocol || (ObjectStorageServerProtocol = {}));
export var CreateLocationObjectStorageRequest;
(function (CreateLocationObjectStorageRequest) {
    /**
     * @internal
     */
    CreateLocationObjectStorageRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SecretKey && { SecretKey: SENSITIVE_STRING }))); };
})(CreateLocationObjectStorageRequest || (CreateLocationObjectStorageRequest = {}));
export var CreateLocationObjectStorageResponse;
(function (CreateLocationObjectStorageResponse) {
    /**
     * @internal
     */
    CreateLocationObjectStorageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLocationObjectStorageResponse || (CreateLocationObjectStorageResponse = {}));
export var S3Config;
(function (S3Config) {
    /**
     * @internal
     */
    S3Config.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Config || (S3Config = {}));
export var S3StorageClass;
(function (S3StorageClass) {
    S3StorageClass["DEEP_ARCHIVE"] = "DEEP_ARCHIVE";
    S3StorageClass["GLACIER"] = "GLACIER";
    S3StorageClass["INTELLIGENT_TIERING"] = "INTELLIGENT_TIERING";
    S3StorageClass["ONEZONE_IA"] = "ONEZONE_IA";
    S3StorageClass["OUTPOSTS"] = "OUTPOSTS";
    S3StorageClass["STANDARD"] = "STANDARD";
    S3StorageClass["STANDARD_IA"] = "STANDARD_IA";
})(S3StorageClass || (S3StorageClass = {}));
export var CreateLocationS3Request;
(function (CreateLocationS3Request) {
    /**
     * @internal
     */
    CreateLocationS3Request.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLocationS3Request || (CreateLocationS3Request = {}));
export var CreateLocationS3Response;
(function (CreateLocationS3Response) {
    /**
     * @internal
     */
    CreateLocationS3Response.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLocationS3Response || (CreateLocationS3Response = {}));
export var SmbVersion;
(function (SmbVersion) {
    SmbVersion["AUTOMATIC"] = "AUTOMATIC";
    SmbVersion["SMB2"] = "SMB2";
    SmbVersion["SMB3"] = "SMB3";
})(SmbVersion || (SmbVersion = {}));
export var SmbMountOptions;
(function (SmbMountOptions) {
    /**
     * @internal
     */
    SmbMountOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SmbMountOptions || (SmbMountOptions = {}));
export var CreateLocationSmbRequest;
(function (CreateLocationSmbRequest) {
    /**
     * @internal
     */
    CreateLocationSmbRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(CreateLocationSmbRequest || (CreateLocationSmbRequest = {}));
export var CreateLocationSmbResponse;
(function (CreateLocationSmbResponse) {
    /**
     * @internal
     */
    CreateLocationSmbResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLocationSmbResponse || (CreateLocationSmbResponse = {}));
export var FilterType;
(function (FilterType) {
    FilterType["SIMPLE_PATTERN"] = "SIMPLE_PATTERN";
})(FilterType || (FilterType = {}));
export var FilterRule;
(function (FilterRule) {
    /**
     * @internal
     */
    FilterRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FilterRule || (FilterRule = {}));
export var Gid;
(function (Gid) {
    Gid["BOTH"] = "BOTH";
    Gid["INT_VALUE"] = "INT_VALUE";
    Gid["NAME"] = "NAME";
    Gid["NONE"] = "NONE";
})(Gid || (Gid = {}));
export var LogLevel;
(function (LogLevel) {
    LogLevel["BASIC"] = "BASIC";
    LogLevel["OFF"] = "OFF";
    LogLevel["TRANSFER"] = "TRANSFER";
})(LogLevel || (LogLevel = {}));
export var Mtime;
(function (Mtime) {
    Mtime["NONE"] = "NONE";
    Mtime["PRESERVE"] = "PRESERVE";
})(Mtime || (Mtime = {}));
export var OverwriteMode;
(function (OverwriteMode) {
    OverwriteMode["ALWAYS"] = "ALWAYS";
    OverwriteMode["NEVER"] = "NEVER";
})(OverwriteMode || (OverwriteMode = {}));
export var PosixPermissions;
(function (PosixPermissions) {
    PosixPermissions["NONE"] = "NONE";
    PosixPermissions["PRESERVE"] = "PRESERVE";
})(PosixPermissions || (PosixPermissions = {}));
export var PreserveDeletedFiles;
(function (PreserveDeletedFiles) {
    PreserveDeletedFiles["PRESERVE"] = "PRESERVE";
    PreserveDeletedFiles["REMOVE"] = "REMOVE";
})(PreserveDeletedFiles || (PreserveDeletedFiles = {}));
export var PreserveDevices;
(function (PreserveDevices) {
    PreserveDevices["NONE"] = "NONE";
    PreserveDevices["PRESERVE"] = "PRESERVE";
})(PreserveDevices || (PreserveDevices = {}));
export var SmbSecurityDescriptorCopyFlags;
(function (SmbSecurityDescriptorCopyFlags) {
    SmbSecurityDescriptorCopyFlags["NONE"] = "NONE";
    SmbSecurityDescriptorCopyFlags["OWNER_DACL"] = "OWNER_DACL";
    SmbSecurityDescriptorCopyFlags["OWNER_DACL_SACL"] = "OWNER_DACL_SACL";
})(SmbSecurityDescriptorCopyFlags || (SmbSecurityDescriptorCopyFlags = {}));
export var TaskQueueing;
(function (TaskQueueing) {
    TaskQueueing["DISABLED"] = "DISABLED";
    TaskQueueing["ENABLED"] = "ENABLED";
})(TaskQueueing || (TaskQueueing = {}));
export var TransferMode;
(function (TransferMode) {
    TransferMode["ALL"] = "ALL";
    TransferMode["CHANGED"] = "CHANGED";
})(TransferMode || (TransferMode = {}));
export var Uid;
(function (Uid) {
    Uid["BOTH"] = "BOTH";
    Uid["INT_VALUE"] = "INT_VALUE";
    Uid["NAME"] = "NAME";
    Uid["NONE"] = "NONE";
})(Uid || (Uid = {}));
export var VerifyMode;
(function (VerifyMode) {
    VerifyMode["NONE"] = "NONE";
    VerifyMode["ONLY_FILES_TRANSFERRED"] = "ONLY_FILES_TRANSFERRED";
    VerifyMode["POINT_IN_TIME_CONSISTENT"] = "POINT_IN_TIME_CONSISTENT";
})(VerifyMode || (VerifyMode = {}));
export var Options;
(function (Options) {
    /**
     * @internal
     */
    Options.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Options || (Options = {}));
export var TaskSchedule;
(function (TaskSchedule) {
    /**
     * @internal
     */
    TaskSchedule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaskSchedule || (TaskSchedule = {}));
export var CreateTaskRequest;
(function (CreateTaskRequest) {
    /**
     * @internal
     */
    CreateTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTaskRequest || (CreateTaskRequest = {}));
export var CreateTaskResponse;
(function (CreateTaskResponse) {
    /**
     * @internal
     */
    CreateTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTaskResponse || (CreateTaskResponse = {}));
export var DeleteAgentRequest;
(function (DeleteAgentRequest) {
    /**
     * @internal
     */
    DeleteAgentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAgentRequest || (DeleteAgentRequest = {}));
export var DeleteAgentResponse;
(function (DeleteAgentResponse) {
    /**
     * @internal
     */
    DeleteAgentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAgentResponse || (DeleteAgentResponse = {}));
export var DeleteLocationRequest;
(function (DeleteLocationRequest) {
    /**
     * @internal
     */
    DeleteLocationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLocationRequest || (DeleteLocationRequest = {}));
export var DeleteLocationResponse;
(function (DeleteLocationResponse) {
    /**
     * @internal
     */
    DeleteLocationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLocationResponse || (DeleteLocationResponse = {}));
export var DeleteTaskRequest;
(function (DeleteTaskRequest) {
    /**
     * @internal
     */
    DeleteTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTaskRequest || (DeleteTaskRequest = {}));
export var DeleteTaskResponse;
(function (DeleteTaskResponse) {
    /**
     * @internal
     */
    DeleteTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTaskResponse || (DeleteTaskResponse = {}));
export var DescribeAgentRequest;
(function (DescribeAgentRequest) {
    /**
     * @internal
     */
    DescribeAgentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAgentRequest || (DescribeAgentRequest = {}));
export var EndpointType;
(function (EndpointType) {
    EndpointType["FIPS"] = "FIPS";
    EndpointType["PRIVATE_LINK"] = "PRIVATE_LINK";
    EndpointType["PUBLIC"] = "PUBLIC";
})(EndpointType || (EndpointType = {}));
export var PrivateLinkConfig;
(function (PrivateLinkConfig) {
    /**
     * @internal
     */
    PrivateLinkConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PrivateLinkConfig || (PrivateLinkConfig = {}));
export var DescribeAgentResponse;
(function (DescribeAgentResponse) {
    /**
     * @internal
     */
    DescribeAgentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAgentResponse || (DescribeAgentResponse = {}));
export var DescribeLocationEfsRequest;
(function (DescribeLocationEfsRequest) {
    /**
     * @internal
     */
    DescribeLocationEfsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLocationEfsRequest || (DescribeLocationEfsRequest = {}));
export var DescribeLocationEfsResponse;
(function (DescribeLocationEfsResponse) {
    /**
     * @internal
     */
    DescribeLocationEfsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLocationEfsResponse || (DescribeLocationEfsResponse = {}));
export var DescribeLocationFsxWindowsRequest;
(function (DescribeLocationFsxWindowsRequest) {
    /**
     * @internal
     */
    DescribeLocationFsxWindowsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLocationFsxWindowsRequest || (DescribeLocationFsxWindowsRequest = {}));
export var DescribeLocationFsxWindowsResponse;
(function (DescribeLocationFsxWindowsResponse) {
    /**
     * @internal
     */
    DescribeLocationFsxWindowsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLocationFsxWindowsResponse || (DescribeLocationFsxWindowsResponse = {}));
export var DescribeLocationNfsRequest;
(function (DescribeLocationNfsRequest) {
    /**
     * @internal
     */
    DescribeLocationNfsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLocationNfsRequest || (DescribeLocationNfsRequest = {}));
export var DescribeLocationNfsResponse;
(function (DescribeLocationNfsResponse) {
    /**
     * @internal
     */
    DescribeLocationNfsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLocationNfsResponse || (DescribeLocationNfsResponse = {}));
export var DescribeLocationObjectStorageRequest;
(function (DescribeLocationObjectStorageRequest) {
    /**
     * @internal
     */
    DescribeLocationObjectStorageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLocationObjectStorageRequest || (DescribeLocationObjectStorageRequest = {}));
export var DescribeLocationObjectStorageResponse;
(function (DescribeLocationObjectStorageResponse) {
    /**
     * @internal
     */
    DescribeLocationObjectStorageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLocationObjectStorageResponse || (DescribeLocationObjectStorageResponse = {}));
export var DescribeLocationS3Request;
(function (DescribeLocationS3Request) {
    /**
     * @internal
     */
    DescribeLocationS3Request.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLocationS3Request || (DescribeLocationS3Request = {}));
export var DescribeLocationS3Response;
(function (DescribeLocationS3Response) {
    /**
     * @internal
     */
    DescribeLocationS3Response.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLocationS3Response || (DescribeLocationS3Response = {}));
export var DescribeLocationSmbRequest;
(function (DescribeLocationSmbRequest) {
    /**
     * @internal
     */
    DescribeLocationSmbRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLocationSmbRequest || (DescribeLocationSmbRequest = {}));
export var DescribeLocationSmbResponse;
(function (DescribeLocationSmbResponse) {
    /**
     * @internal
     */
    DescribeLocationSmbResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLocationSmbResponse || (DescribeLocationSmbResponse = {}));
export var DescribeTaskRequest;
(function (DescribeTaskRequest) {
    /**
     * @internal
     */
    DescribeTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTaskRequest || (DescribeTaskRequest = {}));
export var TaskStatus;
(function (TaskStatus) {
    TaskStatus["AVAILABLE"] = "AVAILABLE";
    TaskStatus["CREATING"] = "CREATING";
    TaskStatus["QUEUED"] = "QUEUED";
    TaskStatus["RUNNING"] = "RUNNING";
    TaskStatus["UNAVAILABLE"] = "UNAVAILABLE";
})(TaskStatus || (TaskStatus = {}));
export var DescribeTaskResponse;
(function (DescribeTaskResponse) {
    /**
     * @internal
     */
    DescribeTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTaskResponse || (DescribeTaskResponse = {}));
export var DescribeTaskExecutionRequest;
(function (DescribeTaskExecutionRequest) {
    /**
     * @internal
     */
    DescribeTaskExecutionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTaskExecutionRequest || (DescribeTaskExecutionRequest = {}));
export var PhaseStatus;
(function (PhaseStatus) {
    PhaseStatus["ERROR"] = "ERROR";
    PhaseStatus["PENDING"] = "PENDING";
    PhaseStatus["SUCCESS"] = "SUCCESS";
})(PhaseStatus || (PhaseStatus = {}));
export var TaskExecutionResultDetail;
(function (TaskExecutionResultDetail) {
    /**
     * @internal
     */
    TaskExecutionResultDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaskExecutionResultDetail || (TaskExecutionResultDetail = {}));
export var TaskExecutionStatus;
(function (TaskExecutionStatus) {
    TaskExecutionStatus["ERROR"] = "ERROR";
    TaskExecutionStatus["LAUNCHING"] = "LAUNCHING";
    TaskExecutionStatus["PREPARING"] = "PREPARING";
    TaskExecutionStatus["QUEUED"] = "QUEUED";
    TaskExecutionStatus["SUCCESS"] = "SUCCESS";
    TaskExecutionStatus["TRANSFERRING"] = "TRANSFERRING";
    TaskExecutionStatus["VERIFYING"] = "VERIFYING";
})(TaskExecutionStatus || (TaskExecutionStatus = {}));
export var DescribeTaskExecutionResponse;
(function (DescribeTaskExecutionResponse) {
    /**
     * @internal
     */
    DescribeTaskExecutionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTaskExecutionResponse || (DescribeTaskExecutionResponse = {}));
export var ListAgentsRequest;
(function (ListAgentsRequest) {
    /**
     * @internal
     */
    ListAgentsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAgentsRequest || (ListAgentsRequest = {}));
export var ListAgentsResponse;
(function (ListAgentsResponse) {
    /**
     * @internal
     */
    ListAgentsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAgentsResponse || (ListAgentsResponse = {}));
export var LocationFilterName;
(function (LocationFilterName) {
    LocationFilterName["CreationTime"] = "CreationTime";
    LocationFilterName["LocationType"] = "LocationType";
    LocationFilterName["LocationUri"] = "LocationUri";
})(LocationFilterName || (LocationFilterName = {}));
export var Operator;
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
})(Operator || (Operator = {}));
export var LocationFilter;
(function (LocationFilter) {
    /**
     * @internal
     */
    LocationFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LocationFilter || (LocationFilter = {}));
export var ListLocationsRequest;
(function (ListLocationsRequest) {
    /**
     * @internal
     */
    ListLocationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLocationsRequest || (ListLocationsRequest = {}));
export var LocationListEntry;
(function (LocationListEntry) {
    /**
     * @internal
     */
    LocationListEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LocationListEntry || (LocationListEntry = {}));
export var ListLocationsResponse;
(function (ListLocationsResponse) {
    /**
     * @internal
     */
    ListLocationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLocationsResponse || (ListLocationsResponse = {}));
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
export var ListTaskExecutionsRequest;
(function (ListTaskExecutionsRequest) {
    /**
     * @internal
     */
    ListTaskExecutionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTaskExecutionsRequest || (ListTaskExecutionsRequest = {}));
export var TaskExecutionListEntry;
(function (TaskExecutionListEntry) {
    /**
     * @internal
     */
    TaskExecutionListEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaskExecutionListEntry || (TaskExecutionListEntry = {}));
export var ListTaskExecutionsResponse;
(function (ListTaskExecutionsResponse) {
    /**
     * @internal
     */
    ListTaskExecutionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTaskExecutionsResponse || (ListTaskExecutionsResponse = {}));
export var TaskFilterName;
(function (TaskFilterName) {
    TaskFilterName["CreationTime"] = "CreationTime";
    TaskFilterName["LocationId"] = "LocationId";
})(TaskFilterName || (TaskFilterName = {}));
export var TaskFilter;
(function (TaskFilter) {
    /**
     * @internal
     */
    TaskFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaskFilter || (TaskFilter = {}));
export var ListTasksRequest;
(function (ListTasksRequest) {
    /**
     * @internal
     */
    ListTasksRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTasksRequest || (ListTasksRequest = {}));
export var TaskListEntry;
(function (TaskListEntry) {
    /**
     * @internal
     */
    TaskListEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TaskListEntry || (TaskListEntry = {}));
export var ListTasksResponse;
(function (ListTasksResponse) {
    /**
     * @internal
     */
    ListTasksResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTasksResponse || (ListTasksResponse = {}));
export var StartTaskExecutionRequest;
(function (StartTaskExecutionRequest) {
    /**
     * @internal
     */
    StartTaskExecutionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartTaskExecutionRequest || (StartTaskExecutionRequest = {}));
export var StartTaskExecutionResponse;
(function (StartTaskExecutionResponse) {
    /**
     * @internal
     */
    StartTaskExecutionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartTaskExecutionResponse || (StartTaskExecutionResponse = {}));
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
export var UpdateAgentRequest;
(function (UpdateAgentRequest) {
    /**
     * @internal
     */
    UpdateAgentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAgentRequest || (UpdateAgentRequest = {}));
export var UpdateAgentResponse;
(function (UpdateAgentResponse) {
    /**
     * @internal
     */
    UpdateAgentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAgentResponse || (UpdateAgentResponse = {}));
export var UpdateLocationNfsRequest;
(function (UpdateLocationNfsRequest) {
    /**
     * @internal
     */
    UpdateLocationNfsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLocationNfsRequest || (UpdateLocationNfsRequest = {}));
export var UpdateLocationNfsResponse;
(function (UpdateLocationNfsResponse) {
    /**
     * @internal
     */
    UpdateLocationNfsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLocationNfsResponse || (UpdateLocationNfsResponse = {}));
export var UpdateLocationObjectStorageRequest;
(function (UpdateLocationObjectStorageRequest) {
    /**
     * @internal
     */
    UpdateLocationObjectStorageRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SecretKey && { SecretKey: SENSITIVE_STRING }))); };
})(UpdateLocationObjectStorageRequest || (UpdateLocationObjectStorageRequest = {}));
export var UpdateLocationObjectStorageResponse;
(function (UpdateLocationObjectStorageResponse) {
    /**
     * @internal
     */
    UpdateLocationObjectStorageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLocationObjectStorageResponse || (UpdateLocationObjectStorageResponse = {}));
export var UpdateLocationSmbRequest;
(function (UpdateLocationSmbRequest) {
    /**
     * @internal
     */
    UpdateLocationSmbRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING }))); };
})(UpdateLocationSmbRequest || (UpdateLocationSmbRequest = {}));
export var UpdateLocationSmbResponse;
(function (UpdateLocationSmbResponse) {
    /**
     * @internal
     */
    UpdateLocationSmbResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLocationSmbResponse || (UpdateLocationSmbResponse = {}));
export var UpdateTaskRequest;
(function (UpdateTaskRequest) {
    /**
     * @internal
     */
    UpdateTaskRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTaskRequest || (UpdateTaskRequest = {}));
export var UpdateTaskResponse;
(function (UpdateTaskResponse) {
    /**
     * @internal
     */
    UpdateTaskResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTaskResponse || (UpdateTaskResponse = {}));
export var UpdateTaskExecutionRequest;
(function (UpdateTaskExecutionRequest) {
    /**
     * @internal
     */
    UpdateTaskExecutionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTaskExecutionRequest || (UpdateTaskExecutionRequest = {}));
export var UpdateTaskExecutionResponse;
(function (UpdateTaskExecutionResponse) {
    /**
     * @internal
     */
    UpdateTaskExecutionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTaskExecutionResponse || (UpdateTaskExecutionResponse = {}));
//# sourceMappingURL=models_0.js.map