"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartSnapshotResponse = exports.StartSnapshotRequest = exports.Tag = exports.PutSnapshotBlockResponse = exports.PutSnapshotBlockRequest = exports.ListSnapshotBlocksResponse = exports.ListSnapshotBlocksRequest = exports.ListChangedBlocksResponse = exports.ListChangedBlocksRequest = exports.GetSnapshotBlockResponse = exports.GetSnapshotBlockRequest = exports.ConflictException = exports.ConcurrentLimitExceededException = exports.ValidationException = exports.ValidationExceptionReason = exports.ServiceQuotaExceededException = exports.ServiceQuotaExceededExceptionReason = exports.ResourceNotFoundException = exports.ResourceNotFoundExceptionReason = exports.RequestThrottledException = exports.RequestThrottledExceptionReason = exports.InternalServerException = exports.CompleteSnapshotResponse = exports.Status = exports.CompleteSnapshotRequest = exports.ChecksumAlgorithm = exports.ChecksumAggregationMethod = exports.ChangedBlock = exports.Block = exports.AccessDeniedException = exports.AccessDeniedExceptionReason = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedExceptionReason;
(function (AccessDeniedExceptionReason) {
    AccessDeniedExceptionReason["DEPENDENCY_ACCESS_DENIED"] = "DEPENDENCY_ACCESS_DENIED";
    AccessDeniedExceptionReason["UNAUTHORIZED_ACCOUNT"] = "UNAUTHORIZED_ACCOUNT";
})(AccessDeniedExceptionReason = exports.AccessDeniedExceptionReason || (exports.AccessDeniedExceptionReason = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var Block;
(function (Block) {
    /**
     * @internal
     */
    Block.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Block = exports.Block || (exports.Block = {}));
var ChangedBlock;
(function (ChangedBlock) {
    /**
     * @internal
     */
    ChangedBlock.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangedBlock = exports.ChangedBlock || (exports.ChangedBlock = {}));
var ChecksumAggregationMethod;
(function (ChecksumAggregationMethod) {
    ChecksumAggregationMethod["CHECKSUM_AGGREGATION_LINEAR"] = "LINEAR";
})(ChecksumAggregationMethod = exports.ChecksumAggregationMethod || (exports.ChecksumAggregationMethod = {}));
var ChecksumAlgorithm;
(function (ChecksumAlgorithm) {
    ChecksumAlgorithm["CHECKSUM_ALGORITHM_SHA256"] = "SHA256";
})(ChecksumAlgorithm = exports.ChecksumAlgorithm || (exports.ChecksumAlgorithm = {}));
var CompleteSnapshotRequest;
(function (CompleteSnapshotRequest) {
    /**
     * @internal
     */
    CompleteSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteSnapshotRequest = exports.CompleteSnapshotRequest || (exports.CompleteSnapshotRequest = {}));
var Status;
(function (Status) {
    Status["COMPLETED"] = "completed";
    Status["ERROR"] = "error";
    Status["PENDING"] = "pending";
})(Status = exports.Status || (exports.Status = {}));
var CompleteSnapshotResponse;
(function (CompleteSnapshotResponse) {
    /**
     * @internal
     */
    CompleteSnapshotResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteSnapshotResponse = exports.CompleteSnapshotResponse || (exports.CompleteSnapshotResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var RequestThrottledExceptionReason;
(function (RequestThrottledExceptionReason) {
    RequestThrottledExceptionReason["ACCOUNT_THROTTLED"] = "ACCOUNT_THROTTLED";
    RequestThrottledExceptionReason["DEPENDENCY_REQUEST_THROTTLED"] = "DEPENDENCY_REQUEST_THROTTLED";
})(RequestThrottledExceptionReason = exports.RequestThrottledExceptionReason || (exports.RequestThrottledExceptionReason = {}));
var RequestThrottledException;
(function (RequestThrottledException) {
    /**
     * @internal
     */
    RequestThrottledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestThrottledException = exports.RequestThrottledException || (exports.RequestThrottledException = {}));
var ResourceNotFoundExceptionReason;
(function (ResourceNotFoundExceptionReason) {
    ResourceNotFoundExceptionReason["DEPENDENCY_RESOURCE_NOT_FOUND"] = "DEPENDENCY_RESOURCE_NOT_FOUND";
    ResourceNotFoundExceptionReason["SNAPSHOT_NOT_FOUND"] = "SNAPSHOT_NOT_FOUND";
})(ResourceNotFoundExceptionReason = exports.ResourceNotFoundExceptionReason || (exports.ResourceNotFoundExceptionReason = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceQuotaExceededExceptionReason;
(function (ServiceQuotaExceededExceptionReason) {
    ServiceQuotaExceededExceptionReason["DEPENDENCY_SERVICE_QUOTA_EXCEEDED"] = "DEPENDENCY_SERVICE_QUOTA_EXCEEDED";
})(ServiceQuotaExceededExceptionReason = exports.ServiceQuotaExceededExceptionReason || (exports.ServiceQuotaExceededExceptionReason = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var ValidationExceptionReason;
(function (ValidationExceptionReason) {
    ValidationExceptionReason["INVALID_BLOCK"] = "INVALID_BLOCK";
    ValidationExceptionReason["INVALID_BLOCK_TOKEN"] = "INVALID_BLOCK_TOKEN";
    ValidationExceptionReason["INVALID_CONTENT_ENCODING"] = "INVALID_CONTENT_ENCODING";
    ValidationExceptionReason["INVALID_CUSTOMER_KEY"] = "INVALID_CUSTOMER_KEY";
    ValidationExceptionReason["INVALID_DEPENDENCY_REQUEST"] = "INVALID_DEPENDENCY_REQUEST";
    ValidationExceptionReason["INVALID_PAGE_TOKEN"] = "INVALID_PAGE_TOKEN";
    ValidationExceptionReason["INVALID_PARAMETER_VALUE"] = "INVALID_PARAMETER_VALUE";
    ValidationExceptionReason["INVALID_SNAPSHOT_ID"] = "INVALID_SNAPSHOT_ID";
    ValidationExceptionReason["INVALID_TAG"] = "INVALID_TAG";
    ValidationExceptionReason["INVALID_VOLUME_SIZE"] = "INVALID_VOLUME_SIZE";
    ValidationExceptionReason["UNRELATED_SNAPSHOTS"] = "UNRELATED_SNAPSHOTS";
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
var ConcurrentLimitExceededException;
(function (ConcurrentLimitExceededException) {
    /**
     * @internal
     */
    ConcurrentLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentLimitExceededException = exports.ConcurrentLimitExceededException || (exports.ConcurrentLimitExceededException = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var GetSnapshotBlockRequest;
(function (GetSnapshotBlockRequest) {
    /**
     * @internal
     */
    GetSnapshotBlockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSnapshotBlockRequest = exports.GetSnapshotBlockRequest || (exports.GetSnapshotBlockRequest = {}));
var GetSnapshotBlockResponse;
(function (GetSnapshotBlockResponse) {
    /**
     * @internal
     */
    GetSnapshotBlockResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.BlockData && { BlockData: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetSnapshotBlockResponse = exports.GetSnapshotBlockResponse || (exports.GetSnapshotBlockResponse = {}));
var ListChangedBlocksRequest;
(function (ListChangedBlocksRequest) {
    /**
     * @internal
     */
    ListChangedBlocksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListChangedBlocksRequest = exports.ListChangedBlocksRequest || (exports.ListChangedBlocksRequest = {}));
var ListChangedBlocksResponse;
(function (ListChangedBlocksResponse) {
    /**
     * @internal
     */
    ListChangedBlocksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ChangedBlocks && { ChangedBlocks: smithy_client_1.SENSITIVE_STRING }),
    });
})(ListChangedBlocksResponse = exports.ListChangedBlocksResponse || (exports.ListChangedBlocksResponse = {}));
var ListSnapshotBlocksRequest;
(function (ListSnapshotBlocksRequest) {
    /**
     * @internal
     */
    ListSnapshotBlocksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSnapshotBlocksRequest = exports.ListSnapshotBlocksRequest || (exports.ListSnapshotBlocksRequest = {}));
var ListSnapshotBlocksResponse;
(function (ListSnapshotBlocksResponse) {
    /**
     * @internal
     */
    ListSnapshotBlocksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Blocks && { Blocks: smithy_client_1.SENSITIVE_STRING }),
    });
})(ListSnapshotBlocksResponse = exports.ListSnapshotBlocksResponse || (exports.ListSnapshotBlocksResponse = {}));
var PutSnapshotBlockRequest;
(function (PutSnapshotBlockRequest) {
    /**
     * @internal
     */
    PutSnapshotBlockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.BlockData && { BlockData: smithy_client_1.SENSITIVE_STRING }),
    });
})(PutSnapshotBlockRequest = exports.PutSnapshotBlockRequest || (exports.PutSnapshotBlockRequest = {}));
var PutSnapshotBlockResponse;
(function (PutSnapshotBlockResponse) {
    /**
     * @internal
     */
    PutSnapshotBlockResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutSnapshotBlockResponse = exports.PutSnapshotBlockResponse || (exports.PutSnapshotBlockResponse = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var StartSnapshotRequest;
(function (StartSnapshotRequest) {
    /**
     * @internal
     */
    StartSnapshotRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.KmsKeyArn && { KmsKeyArn: smithy_client_1.SENSITIVE_STRING }),
    });
})(StartSnapshotRequest = exports.StartSnapshotRequest || (exports.StartSnapshotRequest = {}));
var StartSnapshotResponse;
(function (StartSnapshotResponse) {
    /**
     * @internal
     */
    StartSnapshotResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.KmsKeyArn && { KmsKeyArn: smithy_client_1.SENSITIVE_STRING }),
    });
})(StartSnapshotResponse = exports.StartSnapshotResponse || (exports.StartSnapshotResponse = {}));
//# sourceMappingURL=models_0.js.map