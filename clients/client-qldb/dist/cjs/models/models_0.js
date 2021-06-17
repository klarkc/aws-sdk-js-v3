"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamJournalToKinesisResponse = exports.StreamJournalToKinesisRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListLedgersResponse = exports.LedgerSummary = exports.ListLedgersRequest = exports.ListJournalS3ExportsForLedgerResponse = exports.ListJournalS3ExportsForLedgerRequest = exports.ListJournalS3ExportsResponse = exports.ListJournalS3ExportsRequest = exports.ListJournalKinesisStreamsForLedgerResponse = exports.ListJournalKinesisStreamsForLedgerRequest = exports.GetRevisionResponse = exports.GetRevisionRequest = exports.GetDigestResponse = exports.GetDigestRequest = exports.GetBlockResponse = exports.GetBlockRequest = exports.ValueHolder = exports.ExportJournalToS3Response = exports.ExportJournalToS3Request = exports.DescribeLedgerResponse = exports.DescribeLedgerRequest = exports.DescribeJournalS3ExportResponse = exports.JournalS3ExportDescription = exports.ExportStatus = exports.S3ExportConfiguration = exports.S3EncryptionConfiguration = exports.S3ObjectEncryptionType = exports.DescribeJournalS3ExportRequest = exports.DescribeJournalKinesisStreamResponse = exports.JournalKinesisStreamDescription = exports.StreamStatus = exports.KinesisConfiguration = exports.ErrorCause = exports.DescribeJournalKinesisStreamRequest = exports.DeleteLedgerRequest = exports.ResourceInUseException = exports.ResourceAlreadyExistsException = exports.LimitExceededException = exports.CreateLedgerResponse = exports.LedgerState = exports.CreateLedgerRequest = exports.PermissionsMode = exports.ResourcePreconditionNotMetException = exports.ResourceNotFoundException = exports.InvalidParameterException = exports.CancelJournalKinesisStreamResponse = exports.CancelJournalKinesisStreamRequest = void 0;
exports.UpdateLedgerPermissionsModeResponse = exports.UpdateLedgerPermissionsModeRequest = exports.UpdateLedgerResponse = exports.UpdateLedgerRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var CancelJournalKinesisStreamRequest;
(function (CancelJournalKinesisStreamRequest) {
    /**
     * @internal
     */
    CancelJournalKinesisStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelJournalKinesisStreamRequest = exports.CancelJournalKinesisStreamRequest || (exports.CancelJournalKinesisStreamRequest = {}));
var CancelJournalKinesisStreamResponse;
(function (CancelJournalKinesisStreamResponse) {
    /**
     * @internal
     */
    CancelJournalKinesisStreamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelJournalKinesisStreamResponse = exports.CancelJournalKinesisStreamResponse || (exports.CancelJournalKinesisStreamResponse = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourcePreconditionNotMetException;
(function (ResourcePreconditionNotMetException) {
    /**
     * @internal
     */
    ResourcePreconditionNotMetException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourcePreconditionNotMetException = exports.ResourcePreconditionNotMetException || (exports.ResourcePreconditionNotMetException = {}));
var PermissionsMode;
(function (PermissionsMode) {
    PermissionsMode["ALLOW_ALL"] = "ALLOW_ALL";
    PermissionsMode["STANDARD"] = "STANDARD";
})(PermissionsMode = exports.PermissionsMode || (exports.PermissionsMode = {}));
var CreateLedgerRequest;
(function (CreateLedgerRequest) {
    /**
     * @internal
     */
    CreateLedgerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLedgerRequest = exports.CreateLedgerRequest || (exports.CreateLedgerRequest = {}));
var LedgerState;
(function (LedgerState) {
    LedgerState["ACTIVE"] = "ACTIVE";
    LedgerState["CREATING"] = "CREATING";
    LedgerState["DELETED"] = "DELETED";
    LedgerState["DELETING"] = "DELETING";
})(LedgerState = exports.LedgerState || (exports.LedgerState = {}));
var CreateLedgerResponse;
(function (CreateLedgerResponse) {
    /**
     * @internal
     */
    CreateLedgerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLedgerResponse = exports.CreateLedgerResponse || (exports.CreateLedgerResponse = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var DeleteLedgerRequest;
(function (DeleteLedgerRequest) {
    /**
     * @internal
     */
    DeleteLedgerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLedgerRequest = exports.DeleteLedgerRequest || (exports.DeleteLedgerRequest = {}));
var DescribeJournalKinesisStreamRequest;
(function (DescribeJournalKinesisStreamRequest) {
    /**
     * @internal
     */
    DescribeJournalKinesisStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJournalKinesisStreamRequest = exports.DescribeJournalKinesisStreamRequest || (exports.DescribeJournalKinesisStreamRequest = {}));
var ErrorCause;
(function (ErrorCause) {
    ErrorCause["IAM_PERMISSION_REVOKED"] = "IAM_PERMISSION_REVOKED";
    ErrorCause["KINESIS_STREAM_NOT_FOUND"] = "KINESIS_STREAM_NOT_FOUND";
})(ErrorCause = exports.ErrorCause || (exports.ErrorCause = {}));
var KinesisConfiguration;
(function (KinesisConfiguration) {
    /**
     * @internal
     */
    KinesisConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisConfiguration = exports.KinesisConfiguration || (exports.KinesisConfiguration = {}));
var StreamStatus;
(function (StreamStatus) {
    StreamStatus["ACTIVE"] = "ACTIVE";
    StreamStatus["CANCELED"] = "CANCELED";
    StreamStatus["COMPLETED"] = "COMPLETED";
    StreamStatus["FAILED"] = "FAILED";
    StreamStatus["IMPAIRED"] = "IMPAIRED";
})(StreamStatus = exports.StreamStatus || (exports.StreamStatus = {}));
var JournalKinesisStreamDescription;
(function (JournalKinesisStreamDescription) {
    /**
     * @internal
     */
    JournalKinesisStreamDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JournalKinesisStreamDescription = exports.JournalKinesisStreamDescription || (exports.JournalKinesisStreamDescription = {}));
var DescribeJournalKinesisStreamResponse;
(function (DescribeJournalKinesisStreamResponse) {
    /**
     * @internal
     */
    DescribeJournalKinesisStreamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJournalKinesisStreamResponse = exports.DescribeJournalKinesisStreamResponse || (exports.DescribeJournalKinesisStreamResponse = {}));
var DescribeJournalS3ExportRequest;
(function (DescribeJournalS3ExportRequest) {
    /**
     * @internal
     */
    DescribeJournalS3ExportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJournalS3ExportRequest = exports.DescribeJournalS3ExportRequest || (exports.DescribeJournalS3ExportRequest = {}));
var S3ObjectEncryptionType;
(function (S3ObjectEncryptionType) {
    S3ObjectEncryptionType["NO_ENCRYPTION"] = "NO_ENCRYPTION";
    S3ObjectEncryptionType["SSE_KMS"] = "SSE_KMS";
    S3ObjectEncryptionType["SSE_S3"] = "SSE_S3";
})(S3ObjectEncryptionType = exports.S3ObjectEncryptionType || (exports.S3ObjectEncryptionType = {}));
var S3EncryptionConfiguration;
(function (S3EncryptionConfiguration) {
    /**
     * @internal
     */
    S3EncryptionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3EncryptionConfiguration = exports.S3EncryptionConfiguration || (exports.S3EncryptionConfiguration = {}));
var S3ExportConfiguration;
(function (S3ExportConfiguration) {
    /**
     * @internal
     */
    S3ExportConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ExportConfiguration = exports.S3ExportConfiguration || (exports.S3ExportConfiguration = {}));
var ExportStatus;
(function (ExportStatus) {
    ExportStatus["CANCELLED"] = "CANCELLED";
    ExportStatus["COMPLETED"] = "COMPLETED";
    ExportStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(ExportStatus = exports.ExportStatus || (exports.ExportStatus = {}));
var JournalS3ExportDescription;
(function (JournalS3ExportDescription) {
    /**
     * @internal
     */
    JournalS3ExportDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JournalS3ExportDescription = exports.JournalS3ExportDescription || (exports.JournalS3ExportDescription = {}));
var DescribeJournalS3ExportResponse;
(function (DescribeJournalS3ExportResponse) {
    /**
     * @internal
     */
    DescribeJournalS3ExportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJournalS3ExportResponse = exports.DescribeJournalS3ExportResponse || (exports.DescribeJournalS3ExportResponse = {}));
var DescribeLedgerRequest;
(function (DescribeLedgerRequest) {
    /**
     * @internal
     */
    DescribeLedgerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLedgerRequest = exports.DescribeLedgerRequest || (exports.DescribeLedgerRequest = {}));
var DescribeLedgerResponse;
(function (DescribeLedgerResponse) {
    /**
     * @internal
     */
    DescribeLedgerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLedgerResponse = exports.DescribeLedgerResponse || (exports.DescribeLedgerResponse = {}));
var ExportJournalToS3Request;
(function (ExportJournalToS3Request) {
    /**
     * @internal
     */
    ExportJournalToS3Request.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportJournalToS3Request = exports.ExportJournalToS3Request || (exports.ExportJournalToS3Request = {}));
var ExportJournalToS3Response;
(function (ExportJournalToS3Response) {
    /**
     * @internal
     */
    ExportJournalToS3Response.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportJournalToS3Response = exports.ExportJournalToS3Response || (exports.ExportJournalToS3Response = {}));
var ValueHolder;
(function (ValueHolder) {
    /**
     * @internal
     */
    ValueHolder.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.IonText && { IonText: smithy_client_1.SENSITIVE_STRING }),
    });
})(ValueHolder = exports.ValueHolder || (exports.ValueHolder = {}));
var GetBlockRequest;
(function (GetBlockRequest) {
    /**
     * @internal
     */
    GetBlockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.BlockAddress && { BlockAddress: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.DigestTipAddress && { DigestTipAddress: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetBlockRequest = exports.GetBlockRequest || (exports.GetBlockRequest = {}));
var GetBlockResponse;
(function (GetBlockResponse) {
    /**
     * @internal
     */
    GetBlockResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Block && { Block: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Proof && { Proof: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetBlockResponse = exports.GetBlockResponse || (exports.GetBlockResponse = {}));
var GetDigestRequest;
(function (GetDigestRequest) {
    /**
     * @internal
     */
    GetDigestRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDigestRequest = exports.GetDigestRequest || (exports.GetDigestRequest = {}));
var GetDigestResponse;
(function (GetDigestResponse) {
    /**
     * @internal
     */
    GetDigestResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DigestTipAddress && { DigestTipAddress: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetDigestResponse = exports.GetDigestResponse || (exports.GetDigestResponse = {}));
var GetRevisionRequest;
(function (GetRevisionRequest) {
    /**
     * @internal
     */
    GetRevisionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.BlockAddress && { BlockAddress: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.DigestTipAddress && { DigestTipAddress: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetRevisionRequest = exports.GetRevisionRequest || (exports.GetRevisionRequest = {}));
var GetRevisionResponse;
(function (GetRevisionResponse) {
    /**
     * @internal
     */
    GetRevisionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Proof && { Proof: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Revision && { Revision: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetRevisionResponse = exports.GetRevisionResponse || (exports.GetRevisionResponse = {}));
var ListJournalKinesisStreamsForLedgerRequest;
(function (ListJournalKinesisStreamsForLedgerRequest) {
    /**
     * @internal
     */
    ListJournalKinesisStreamsForLedgerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJournalKinesisStreamsForLedgerRequest = exports.ListJournalKinesisStreamsForLedgerRequest || (exports.ListJournalKinesisStreamsForLedgerRequest = {}));
var ListJournalKinesisStreamsForLedgerResponse;
(function (ListJournalKinesisStreamsForLedgerResponse) {
    /**
     * @internal
     */
    ListJournalKinesisStreamsForLedgerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJournalKinesisStreamsForLedgerResponse = exports.ListJournalKinesisStreamsForLedgerResponse || (exports.ListJournalKinesisStreamsForLedgerResponse = {}));
var ListJournalS3ExportsRequest;
(function (ListJournalS3ExportsRequest) {
    /**
     * @internal
     */
    ListJournalS3ExportsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJournalS3ExportsRequest = exports.ListJournalS3ExportsRequest || (exports.ListJournalS3ExportsRequest = {}));
var ListJournalS3ExportsResponse;
(function (ListJournalS3ExportsResponse) {
    /**
     * @internal
     */
    ListJournalS3ExportsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJournalS3ExportsResponse = exports.ListJournalS3ExportsResponse || (exports.ListJournalS3ExportsResponse = {}));
var ListJournalS3ExportsForLedgerRequest;
(function (ListJournalS3ExportsForLedgerRequest) {
    /**
     * @internal
     */
    ListJournalS3ExportsForLedgerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJournalS3ExportsForLedgerRequest = exports.ListJournalS3ExportsForLedgerRequest || (exports.ListJournalS3ExportsForLedgerRequest = {}));
var ListJournalS3ExportsForLedgerResponse;
(function (ListJournalS3ExportsForLedgerResponse) {
    /**
     * @internal
     */
    ListJournalS3ExportsForLedgerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJournalS3ExportsForLedgerResponse = exports.ListJournalS3ExportsForLedgerResponse || (exports.ListJournalS3ExportsForLedgerResponse = {}));
var ListLedgersRequest;
(function (ListLedgersRequest) {
    /**
     * @internal
     */
    ListLedgersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLedgersRequest = exports.ListLedgersRequest || (exports.ListLedgersRequest = {}));
var LedgerSummary;
(function (LedgerSummary) {
    /**
     * @internal
     */
    LedgerSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LedgerSummary = exports.LedgerSummary || (exports.LedgerSummary = {}));
var ListLedgersResponse;
(function (ListLedgersResponse) {
    /**
     * @internal
     */
    ListLedgersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLedgersResponse = exports.ListLedgersResponse || (exports.ListLedgersResponse = {}));
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
var StreamJournalToKinesisRequest;
(function (StreamJournalToKinesisRequest) {
    /**
     * @internal
     */
    StreamJournalToKinesisRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamJournalToKinesisRequest = exports.StreamJournalToKinesisRequest || (exports.StreamJournalToKinesisRequest = {}));
var StreamJournalToKinesisResponse;
(function (StreamJournalToKinesisResponse) {
    /**
     * @internal
     */
    StreamJournalToKinesisResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamJournalToKinesisResponse = exports.StreamJournalToKinesisResponse || (exports.StreamJournalToKinesisResponse = {}));
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
var UpdateLedgerRequest;
(function (UpdateLedgerRequest) {
    /**
     * @internal
     */
    UpdateLedgerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLedgerRequest = exports.UpdateLedgerRequest || (exports.UpdateLedgerRequest = {}));
var UpdateLedgerResponse;
(function (UpdateLedgerResponse) {
    /**
     * @internal
     */
    UpdateLedgerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLedgerResponse = exports.UpdateLedgerResponse || (exports.UpdateLedgerResponse = {}));
var UpdateLedgerPermissionsModeRequest;
(function (UpdateLedgerPermissionsModeRequest) {
    /**
     * @internal
     */
    UpdateLedgerPermissionsModeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLedgerPermissionsModeRequest = exports.UpdateLedgerPermissionsModeRequest || (exports.UpdateLedgerPermissionsModeRequest = {}));
var UpdateLedgerPermissionsModeResponse;
(function (UpdateLedgerPermissionsModeResponse) {
    /**
     * @internal
     */
    UpdateLedgerPermissionsModeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateLedgerPermissionsModeResponse = exports.UpdateLedgerPermissionsModeResponse || (exports.UpdateLedgerPermissionsModeResponse = {}));
//# sourceMappingURL=models_0.js.map