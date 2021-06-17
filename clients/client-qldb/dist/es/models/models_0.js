import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var CancelJournalKinesisStreamRequest;
(function (CancelJournalKinesisStreamRequest) {
    /**
     * @internal
     */
    CancelJournalKinesisStreamRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelJournalKinesisStreamRequest || (CancelJournalKinesisStreamRequest = {}));
export var CancelJournalKinesisStreamResponse;
(function (CancelJournalKinesisStreamResponse) {
    /**
     * @internal
     */
    CancelJournalKinesisStreamResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelJournalKinesisStreamResponse || (CancelJournalKinesisStreamResponse = {}));
export var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterException || (InvalidParameterException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ResourcePreconditionNotMetException;
(function (ResourcePreconditionNotMetException) {
    /**
     * @internal
     */
    ResourcePreconditionNotMetException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourcePreconditionNotMetException || (ResourcePreconditionNotMetException = {}));
export var PermissionsMode;
(function (PermissionsMode) {
    PermissionsMode["ALLOW_ALL"] = "ALLOW_ALL";
    PermissionsMode["STANDARD"] = "STANDARD";
})(PermissionsMode || (PermissionsMode = {}));
export var CreateLedgerRequest;
(function (CreateLedgerRequest) {
    /**
     * @internal
     */
    CreateLedgerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLedgerRequest || (CreateLedgerRequest = {}));
export var LedgerState;
(function (LedgerState) {
    LedgerState["ACTIVE"] = "ACTIVE";
    LedgerState["CREATING"] = "CREATING";
    LedgerState["DELETED"] = "DELETED";
    LedgerState["DELETING"] = "DELETING";
})(LedgerState || (LedgerState = {}));
export var CreateLedgerResponse;
(function (CreateLedgerResponse) {
    /**
     * @internal
     */
    CreateLedgerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLedgerResponse || (CreateLedgerResponse = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceAlreadyExistsException || (ResourceAlreadyExistsException = {}));
export var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceInUseException || (ResourceInUseException = {}));
export var DeleteLedgerRequest;
(function (DeleteLedgerRequest) {
    /**
     * @internal
     */
    DeleteLedgerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLedgerRequest || (DeleteLedgerRequest = {}));
export var DescribeJournalKinesisStreamRequest;
(function (DescribeJournalKinesisStreamRequest) {
    /**
     * @internal
     */
    DescribeJournalKinesisStreamRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJournalKinesisStreamRequest || (DescribeJournalKinesisStreamRequest = {}));
export var ErrorCause;
(function (ErrorCause) {
    ErrorCause["IAM_PERMISSION_REVOKED"] = "IAM_PERMISSION_REVOKED";
    ErrorCause["KINESIS_STREAM_NOT_FOUND"] = "KINESIS_STREAM_NOT_FOUND";
})(ErrorCause || (ErrorCause = {}));
export var KinesisConfiguration;
(function (KinesisConfiguration) {
    /**
     * @internal
     */
    KinesisConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KinesisConfiguration || (KinesisConfiguration = {}));
export var StreamStatus;
(function (StreamStatus) {
    StreamStatus["ACTIVE"] = "ACTIVE";
    StreamStatus["CANCELED"] = "CANCELED";
    StreamStatus["COMPLETED"] = "COMPLETED";
    StreamStatus["FAILED"] = "FAILED";
    StreamStatus["IMPAIRED"] = "IMPAIRED";
})(StreamStatus || (StreamStatus = {}));
export var JournalKinesisStreamDescription;
(function (JournalKinesisStreamDescription) {
    /**
     * @internal
     */
    JournalKinesisStreamDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JournalKinesisStreamDescription || (JournalKinesisStreamDescription = {}));
export var DescribeJournalKinesisStreamResponse;
(function (DescribeJournalKinesisStreamResponse) {
    /**
     * @internal
     */
    DescribeJournalKinesisStreamResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJournalKinesisStreamResponse || (DescribeJournalKinesisStreamResponse = {}));
export var DescribeJournalS3ExportRequest;
(function (DescribeJournalS3ExportRequest) {
    /**
     * @internal
     */
    DescribeJournalS3ExportRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJournalS3ExportRequest || (DescribeJournalS3ExportRequest = {}));
export var S3ObjectEncryptionType;
(function (S3ObjectEncryptionType) {
    S3ObjectEncryptionType["NO_ENCRYPTION"] = "NO_ENCRYPTION";
    S3ObjectEncryptionType["SSE_KMS"] = "SSE_KMS";
    S3ObjectEncryptionType["SSE_S3"] = "SSE_S3";
})(S3ObjectEncryptionType || (S3ObjectEncryptionType = {}));
export var S3EncryptionConfiguration;
(function (S3EncryptionConfiguration) {
    /**
     * @internal
     */
    S3EncryptionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3EncryptionConfiguration || (S3EncryptionConfiguration = {}));
export var S3ExportConfiguration;
(function (S3ExportConfiguration) {
    /**
     * @internal
     */
    S3ExportConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3ExportConfiguration || (S3ExportConfiguration = {}));
export var ExportStatus;
(function (ExportStatus) {
    ExportStatus["CANCELLED"] = "CANCELLED";
    ExportStatus["COMPLETED"] = "COMPLETED";
    ExportStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(ExportStatus || (ExportStatus = {}));
export var JournalS3ExportDescription;
(function (JournalS3ExportDescription) {
    /**
     * @internal
     */
    JournalS3ExportDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JournalS3ExportDescription || (JournalS3ExportDescription = {}));
export var DescribeJournalS3ExportResponse;
(function (DescribeJournalS3ExportResponse) {
    /**
     * @internal
     */
    DescribeJournalS3ExportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJournalS3ExportResponse || (DescribeJournalS3ExportResponse = {}));
export var DescribeLedgerRequest;
(function (DescribeLedgerRequest) {
    /**
     * @internal
     */
    DescribeLedgerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLedgerRequest || (DescribeLedgerRequest = {}));
export var DescribeLedgerResponse;
(function (DescribeLedgerResponse) {
    /**
     * @internal
     */
    DescribeLedgerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLedgerResponse || (DescribeLedgerResponse = {}));
export var ExportJournalToS3Request;
(function (ExportJournalToS3Request) {
    /**
     * @internal
     */
    ExportJournalToS3Request.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportJournalToS3Request || (ExportJournalToS3Request = {}));
export var ExportJournalToS3Response;
(function (ExportJournalToS3Response) {
    /**
     * @internal
     */
    ExportJournalToS3Response.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportJournalToS3Response || (ExportJournalToS3Response = {}));
export var ValueHolder;
(function (ValueHolder) {
    /**
     * @internal
     */
    ValueHolder.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.IonText && { IonText: SENSITIVE_STRING }))); };
})(ValueHolder || (ValueHolder = {}));
export var GetBlockRequest;
(function (GetBlockRequest) {
    /**
     * @internal
     */
    GetBlockRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.BlockAddress && { BlockAddress: SENSITIVE_STRING })), (obj.DigestTipAddress && { DigestTipAddress: SENSITIVE_STRING }))); };
})(GetBlockRequest || (GetBlockRequest = {}));
export var GetBlockResponse;
(function (GetBlockResponse) {
    /**
     * @internal
     */
    GetBlockResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Block && { Block: SENSITIVE_STRING })), (obj.Proof && { Proof: SENSITIVE_STRING }))); };
})(GetBlockResponse || (GetBlockResponse = {}));
export var GetDigestRequest;
(function (GetDigestRequest) {
    /**
     * @internal
     */
    GetDigestRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDigestRequest || (GetDigestRequest = {}));
export var GetDigestResponse;
(function (GetDigestResponse) {
    /**
     * @internal
     */
    GetDigestResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DigestTipAddress && { DigestTipAddress: SENSITIVE_STRING }))); };
})(GetDigestResponse || (GetDigestResponse = {}));
export var GetRevisionRequest;
(function (GetRevisionRequest) {
    /**
     * @internal
     */
    GetRevisionRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.BlockAddress && { BlockAddress: SENSITIVE_STRING })), (obj.DigestTipAddress && { DigestTipAddress: SENSITIVE_STRING }))); };
})(GetRevisionRequest || (GetRevisionRequest = {}));
export var GetRevisionResponse;
(function (GetRevisionResponse) {
    /**
     * @internal
     */
    GetRevisionResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Proof && { Proof: SENSITIVE_STRING })), (obj.Revision && { Revision: SENSITIVE_STRING }))); };
})(GetRevisionResponse || (GetRevisionResponse = {}));
export var ListJournalKinesisStreamsForLedgerRequest;
(function (ListJournalKinesisStreamsForLedgerRequest) {
    /**
     * @internal
     */
    ListJournalKinesisStreamsForLedgerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJournalKinesisStreamsForLedgerRequest || (ListJournalKinesisStreamsForLedgerRequest = {}));
export var ListJournalKinesisStreamsForLedgerResponse;
(function (ListJournalKinesisStreamsForLedgerResponse) {
    /**
     * @internal
     */
    ListJournalKinesisStreamsForLedgerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJournalKinesisStreamsForLedgerResponse || (ListJournalKinesisStreamsForLedgerResponse = {}));
export var ListJournalS3ExportsRequest;
(function (ListJournalS3ExportsRequest) {
    /**
     * @internal
     */
    ListJournalS3ExportsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJournalS3ExportsRequest || (ListJournalS3ExportsRequest = {}));
export var ListJournalS3ExportsResponse;
(function (ListJournalS3ExportsResponse) {
    /**
     * @internal
     */
    ListJournalS3ExportsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJournalS3ExportsResponse || (ListJournalS3ExportsResponse = {}));
export var ListJournalS3ExportsForLedgerRequest;
(function (ListJournalS3ExportsForLedgerRequest) {
    /**
     * @internal
     */
    ListJournalS3ExportsForLedgerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJournalS3ExportsForLedgerRequest || (ListJournalS3ExportsForLedgerRequest = {}));
export var ListJournalS3ExportsForLedgerResponse;
(function (ListJournalS3ExportsForLedgerResponse) {
    /**
     * @internal
     */
    ListJournalS3ExportsForLedgerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJournalS3ExportsForLedgerResponse || (ListJournalS3ExportsForLedgerResponse = {}));
export var ListLedgersRequest;
(function (ListLedgersRequest) {
    /**
     * @internal
     */
    ListLedgersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLedgersRequest || (ListLedgersRequest = {}));
export var LedgerSummary;
(function (LedgerSummary) {
    /**
     * @internal
     */
    LedgerSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LedgerSummary || (LedgerSummary = {}));
export var ListLedgersResponse;
(function (ListLedgersResponse) {
    /**
     * @internal
     */
    ListLedgersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLedgersResponse || (ListLedgersResponse = {}));
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
export var StreamJournalToKinesisRequest;
(function (StreamJournalToKinesisRequest) {
    /**
     * @internal
     */
    StreamJournalToKinesisRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StreamJournalToKinesisRequest || (StreamJournalToKinesisRequest = {}));
export var StreamJournalToKinesisResponse;
(function (StreamJournalToKinesisResponse) {
    /**
     * @internal
     */
    StreamJournalToKinesisResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StreamJournalToKinesisResponse || (StreamJournalToKinesisResponse = {}));
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
export var UpdateLedgerRequest;
(function (UpdateLedgerRequest) {
    /**
     * @internal
     */
    UpdateLedgerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLedgerRequest || (UpdateLedgerRequest = {}));
export var UpdateLedgerResponse;
(function (UpdateLedgerResponse) {
    /**
     * @internal
     */
    UpdateLedgerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLedgerResponse || (UpdateLedgerResponse = {}));
export var UpdateLedgerPermissionsModeRequest;
(function (UpdateLedgerPermissionsModeRequest) {
    /**
     * @internal
     */
    UpdateLedgerPermissionsModeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLedgerPermissionsModeRequest || (UpdateLedgerPermissionsModeRequest = {}));
export var UpdateLedgerPermissionsModeResponse;
(function (UpdateLedgerPermissionsModeResponse) {
    /**
     * @internal
     */
    UpdateLedgerPermissionsModeResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateLedgerPermissionsModeResponse || (UpdateLedgerPermissionsModeResponse = {}));
//# sourceMappingURL=models_0.js.map