import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedExceptionReason;
(function (AccessDeniedExceptionReason) {
    AccessDeniedExceptionReason["DEPENDENCY_ACCESS_DENIED"] = "DEPENDENCY_ACCESS_DENIED";
    AccessDeniedExceptionReason["UNAUTHORIZED_ACCOUNT"] = "UNAUTHORIZED_ACCOUNT";
})(AccessDeniedExceptionReason || (AccessDeniedExceptionReason = {}));
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var Block;
(function (Block) {
    /**
     * @internal
     */
    Block.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Block || (Block = {}));
export var ChangedBlock;
(function (ChangedBlock) {
    /**
     * @internal
     */
    ChangedBlock.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChangedBlock || (ChangedBlock = {}));
export var ChecksumAggregationMethod;
(function (ChecksumAggregationMethod) {
    ChecksumAggregationMethod["CHECKSUM_AGGREGATION_LINEAR"] = "LINEAR";
})(ChecksumAggregationMethod || (ChecksumAggregationMethod = {}));
export var ChecksumAlgorithm;
(function (ChecksumAlgorithm) {
    ChecksumAlgorithm["CHECKSUM_ALGORITHM_SHA256"] = "SHA256";
})(ChecksumAlgorithm || (ChecksumAlgorithm = {}));
export var CompleteSnapshotRequest;
(function (CompleteSnapshotRequest) {
    /**
     * @internal
     */
    CompleteSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompleteSnapshotRequest || (CompleteSnapshotRequest = {}));
export var Status;
(function (Status) {
    Status["COMPLETED"] = "completed";
    Status["ERROR"] = "error";
    Status["PENDING"] = "pending";
})(Status || (Status = {}));
export var CompleteSnapshotResponse;
(function (CompleteSnapshotResponse) {
    /**
     * @internal
     */
    CompleteSnapshotResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompleteSnapshotResponse || (CompleteSnapshotResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var RequestThrottledExceptionReason;
(function (RequestThrottledExceptionReason) {
    RequestThrottledExceptionReason["ACCOUNT_THROTTLED"] = "ACCOUNT_THROTTLED";
    RequestThrottledExceptionReason["DEPENDENCY_REQUEST_THROTTLED"] = "DEPENDENCY_REQUEST_THROTTLED";
})(RequestThrottledExceptionReason || (RequestThrottledExceptionReason = {}));
export var RequestThrottledException;
(function (RequestThrottledException) {
    /**
     * @internal
     */
    RequestThrottledException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RequestThrottledException || (RequestThrottledException = {}));
export var ResourceNotFoundExceptionReason;
(function (ResourceNotFoundExceptionReason) {
    ResourceNotFoundExceptionReason["DEPENDENCY_RESOURCE_NOT_FOUND"] = "DEPENDENCY_RESOURCE_NOT_FOUND";
    ResourceNotFoundExceptionReason["SNAPSHOT_NOT_FOUND"] = "SNAPSHOT_NOT_FOUND";
})(ResourceNotFoundExceptionReason || (ResourceNotFoundExceptionReason = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ServiceQuotaExceededExceptionReason;
(function (ServiceQuotaExceededExceptionReason) {
    ServiceQuotaExceededExceptionReason["DEPENDENCY_SERVICE_QUOTA_EXCEEDED"] = "DEPENDENCY_SERVICE_QUOTA_EXCEEDED";
})(ServiceQuotaExceededExceptionReason || (ServiceQuotaExceededExceptionReason = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ValidationExceptionReason;
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
})(ValidationExceptionReason || (ValidationExceptionReason = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var ConcurrentLimitExceededException;
(function (ConcurrentLimitExceededException) {
    /**
     * @internal
     */
    ConcurrentLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConcurrentLimitExceededException || (ConcurrentLimitExceededException = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var GetSnapshotBlockRequest;
(function (GetSnapshotBlockRequest) {
    /**
     * @internal
     */
    GetSnapshotBlockRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSnapshotBlockRequest || (GetSnapshotBlockRequest = {}));
export var GetSnapshotBlockResponse;
(function (GetSnapshotBlockResponse) {
    /**
     * @internal
     */
    GetSnapshotBlockResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.BlockData && { BlockData: SENSITIVE_STRING }))); };
})(GetSnapshotBlockResponse || (GetSnapshotBlockResponse = {}));
export var ListChangedBlocksRequest;
(function (ListChangedBlocksRequest) {
    /**
     * @internal
     */
    ListChangedBlocksRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListChangedBlocksRequest || (ListChangedBlocksRequest = {}));
export var ListChangedBlocksResponse;
(function (ListChangedBlocksResponse) {
    /**
     * @internal
     */
    ListChangedBlocksResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ChangedBlocks && { ChangedBlocks: SENSITIVE_STRING }))); };
})(ListChangedBlocksResponse || (ListChangedBlocksResponse = {}));
export var ListSnapshotBlocksRequest;
(function (ListSnapshotBlocksRequest) {
    /**
     * @internal
     */
    ListSnapshotBlocksRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSnapshotBlocksRequest || (ListSnapshotBlocksRequest = {}));
export var ListSnapshotBlocksResponse;
(function (ListSnapshotBlocksResponse) {
    /**
     * @internal
     */
    ListSnapshotBlocksResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Blocks && { Blocks: SENSITIVE_STRING }))); };
})(ListSnapshotBlocksResponse || (ListSnapshotBlocksResponse = {}));
export var PutSnapshotBlockRequest;
(function (PutSnapshotBlockRequest) {
    /**
     * @internal
     */
    PutSnapshotBlockRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.BlockData && { BlockData: SENSITIVE_STRING }))); };
})(PutSnapshotBlockRequest || (PutSnapshotBlockRequest = {}));
export var PutSnapshotBlockResponse;
(function (PutSnapshotBlockResponse) {
    /**
     * @internal
     */
    PutSnapshotBlockResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutSnapshotBlockResponse || (PutSnapshotBlockResponse = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var StartSnapshotRequest;
(function (StartSnapshotRequest) {
    /**
     * @internal
     */
    StartSnapshotRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.KmsKeyArn && { KmsKeyArn: SENSITIVE_STRING }))); };
})(StartSnapshotRequest || (StartSnapshotRequest = {}));
export var StartSnapshotResponse;
(function (StartSnapshotResponse) {
    /**
     * @internal
     */
    StartSnapshotResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.KmsKeyArn && { KmsKeyArn: SENSITIVE_STRING }))); };
})(StartSnapshotResponse || (StartSnapshotResponse = {}));
//# sourceMappingURL=models_0.js.map