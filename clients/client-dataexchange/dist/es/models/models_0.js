import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AssetDestinationEntry;
(function (AssetDestinationEntry) {
    /**
     * @internal
     */
    AssetDestinationEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssetDestinationEntry || (AssetDestinationEntry = {}));
export var S3SnapshotAsset;
(function (S3SnapshotAsset) {
    /**
     * @internal
     */
    S3SnapshotAsset.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3SnapshotAsset || (S3SnapshotAsset = {}));
export var AssetDetails;
(function (AssetDetails) {
    /**
     * @internal
     */
    AssetDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssetDetails || (AssetDetails = {}));
export var AssetType;
(function (AssetType) {
    AssetType["S3_SNAPSHOT"] = "S3_SNAPSHOT";
})(AssetType || (AssetType = {}));
export var AssetEntry;
(function (AssetEntry) {
    /**
     * @internal
     */
    AssetEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssetEntry || (AssetEntry = {}));
export var AssetSourceEntry;
(function (AssetSourceEntry) {
    /**
     * @internal
     */
    AssetSourceEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssetSourceEntry || (AssetSourceEntry = {}));
export var CancelJobRequest;
(function (CancelJobRequest) {
    /**
     * @internal
     */
    CancelJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelJobRequest || (CancelJobRequest = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["ASSET"] = "ASSET";
    ResourceType["DATA_SET"] = "DATA_SET";
    ResourceType["JOB"] = "JOB";
    ResourceType["REVISION"] = "REVISION";
})(ResourceType || (ResourceType = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var Code;
(function (Code) {
    Code["ACCESS_DENIED_EXCEPTION"] = "ACCESS_DENIED_EXCEPTION";
    Code["INTERNAL_SERVER_EXCEPTION"] = "INTERNAL_SERVER_EXCEPTION";
    Code["MALWARE_DETECTED"] = "MALWARE_DETECTED";
    Code["MALWARE_SCAN_ENCRYPTED_FILE"] = "MALWARE_SCAN_ENCRYPTED_FILE";
    Code["RESOURCE_NOT_FOUND_EXCEPTION"] = "RESOURCE_NOT_FOUND_EXCEPTION";
    Code["SERVICE_QUOTA_EXCEEDED_EXCEPTION"] = "SERVICE_QUOTA_EXCEEDED_EXCEPTION";
    Code["VALIDATION_EXCEPTION"] = "VALIDATION_EXCEPTION";
})(Code || (Code = {}));
export var CreateDataSetRequest;
(function (CreateDataSetRequest) {
    /**
     * @internal
     */
    CreateDataSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDataSetRequest || (CreateDataSetRequest = {}));
export var Origin;
(function (Origin) {
    Origin["ENTITLED"] = "ENTITLED";
    Origin["OWNED"] = "OWNED";
})(Origin || (Origin = {}));
export var OriginDetails;
(function (OriginDetails) {
    /**
     * @internal
     */
    OriginDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OriginDetails || (OriginDetails = {}));
export var CreateDataSetResponse;
(function (CreateDataSetResponse) {
    /**
     * @internal
     */
    CreateDataSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDataSetResponse || (CreateDataSetResponse = {}));
export var LimitName;
(function (LimitName) {
    LimitName["Asset_per_export_job_from_Amazon_S3"] = "Asset per export job from Amazon S3";
    LimitName["Asset_size_in_GB"] = "Asset size in GB";
    LimitName["Assets_per_import_job_from_Amazon_S3"] = "Assets per import job from Amazon S3";
    LimitName["Assets_per_revision"] = "Assets per revision";
    LimitName["Concurrent_in_progress_jobs_to_export_assets_to_Amazon_S3"] = "Concurrent in progress jobs to export assets to Amazon S3";
    LimitName["Concurrent_in_progress_jobs_to_export_assets_to_a_signed_URL"] = "Concurrent in progress jobs to export assets to a signed URL";
    LimitName["Concurrent_in_progress_jobs_to_import_assets_from_Amazon_S3"] = "Concurrent in progress jobs to import assets from Amazon S3";
    LimitName["Concurrent_in_progress_jobs_to_import_assets_from_a_signed_URL"] = "Concurrent in progress jobs to import assets from a signed URL";
    LimitName["Data_sets_per_account"] = "Data sets per account";
    LimitName["Data_sets_per_product"] = "Data sets per product";
    LimitName["Products_per_account"] = "Products per account";
    LimitName["Revisions_per_data_set"] = "Revisions per data set";
})(LimitName || (LimitName = {}));
export var ServiceLimitExceededException;
(function (ServiceLimitExceededException) {
    /**
     * @internal
     */
    ServiceLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceLimitExceededException || (ServiceLimitExceededException = {}));
export var ServerSideEncryptionTypes;
(function (ServerSideEncryptionTypes) {
    ServerSideEncryptionTypes["AES256"] = "AES256";
    ServerSideEncryptionTypes["aws_kms"] = "aws:kms";
})(ServerSideEncryptionTypes || (ServerSideEncryptionTypes = {}));
export var ExportServerSideEncryption;
(function (ExportServerSideEncryption) {
    /**
     * @internal
     */
    ExportServerSideEncryption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportServerSideEncryption || (ExportServerSideEncryption = {}));
export var ExportAssetsToS3RequestDetails;
(function (ExportAssetsToS3RequestDetails) {
    /**
     * @internal
     */
    ExportAssetsToS3RequestDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportAssetsToS3RequestDetails || (ExportAssetsToS3RequestDetails = {}));
export var ExportAssetToSignedUrlRequestDetails;
(function (ExportAssetToSignedUrlRequestDetails) {
    /**
     * @internal
     */
    ExportAssetToSignedUrlRequestDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportAssetToSignedUrlRequestDetails || (ExportAssetToSignedUrlRequestDetails = {}));
export var RevisionDestinationEntry;
(function (RevisionDestinationEntry) {
    /**
     * @internal
     */
    RevisionDestinationEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RevisionDestinationEntry || (RevisionDestinationEntry = {}));
export var ExportRevisionsToS3RequestDetails;
(function (ExportRevisionsToS3RequestDetails) {
    /**
     * @internal
     */
    ExportRevisionsToS3RequestDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportRevisionsToS3RequestDetails || (ExportRevisionsToS3RequestDetails = {}));
export var ImportAssetFromSignedUrlRequestDetails;
(function (ImportAssetFromSignedUrlRequestDetails) {
    /**
     * @internal
     */
    ImportAssetFromSignedUrlRequestDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportAssetFromSignedUrlRequestDetails || (ImportAssetFromSignedUrlRequestDetails = {}));
export var ImportAssetsFromS3RequestDetails;
(function (ImportAssetsFromS3RequestDetails) {
    /**
     * @internal
     */
    ImportAssetsFromS3RequestDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportAssetsFromS3RequestDetails || (ImportAssetsFromS3RequestDetails = {}));
export var RequestDetails;
(function (RequestDetails) {
    /**
     * @internal
     */
    RequestDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RequestDetails || (RequestDetails = {}));
export var Type;
(function (Type) {
    Type["EXPORT_ASSETS_TO_S3"] = "EXPORT_ASSETS_TO_S3";
    Type["EXPORT_ASSET_TO_SIGNED_URL"] = "EXPORT_ASSET_TO_SIGNED_URL";
    Type["EXPORT_REVISIONS_TO_S3"] = "EXPORT_REVISIONS_TO_S3";
    Type["IMPORT_ASSETS_FROM_S3"] = "IMPORT_ASSETS_FROM_S3";
    Type["IMPORT_ASSET_FROM_SIGNED_URL"] = "IMPORT_ASSET_FROM_SIGNED_URL";
})(Type || (Type = {}));
export var CreateJobRequest;
(function (CreateJobRequest) {
    /**
     * @internal
     */
    CreateJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJobRequest || (CreateJobRequest = {}));
export var ExportAssetsToS3ResponseDetails;
(function (ExportAssetsToS3ResponseDetails) {
    /**
     * @internal
     */
    ExportAssetsToS3ResponseDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportAssetsToS3ResponseDetails || (ExportAssetsToS3ResponseDetails = {}));
export var ExportAssetToSignedUrlResponseDetails;
(function (ExportAssetToSignedUrlResponseDetails) {
    /**
     * @internal
     */
    ExportAssetToSignedUrlResponseDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportAssetToSignedUrlResponseDetails || (ExportAssetToSignedUrlResponseDetails = {}));
export var ExportRevisionsToS3ResponseDetails;
(function (ExportRevisionsToS3ResponseDetails) {
    /**
     * @internal
     */
    ExportRevisionsToS3ResponseDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportRevisionsToS3ResponseDetails || (ExportRevisionsToS3ResponseDetails = {}));
export var ImportAssetFromSignedUrlResponseDetails;
(function (ImportAssetFromSignedUrlResponseDetails) {
    /**
     * @internal
     */
    ImportAssetFromSignedUrlResponseDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportAssetFromSignedUrlResponseDetails || (ImportAssetFromSignedUrlResponseDetails = {}));
export var ImportAssetsFromS3ResponseDetails;
(function (ImportAssetsFromS3ResponseDetails) {
    /**
     * @internal
     */
    ImportAssetsFromS3ResponseDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportAssetsFromS3ResponseDetails || (ImportAssetsFromS3ResponseDetails = {}));
export var ResponseDetails;
(function (ResponseDetails) {
    /**
     * @internal
     */
    ResponseDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResponseDetails || (ResponseDetails = {}));
export var ImportAssetFromSignedUrlJobErrorDetails;
(function (ImportAssetFromSignedUrlJobErrorDetails) {
    /**
     * @internal
     */
    ImportAssetFromSignedUrlJobErrorDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportAssetFromSignedUrlJobErrorDetails || (ImportAssetFromSignedUrlJobErrorDetails = {}));
export var Details;
(function (Details) {
    /**
     * @internal
     */
    Details.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Details || (Details = {}));
export var JobErrorLimitName;
(function (JobErrorLimitName) {
    JobErrorLimitName["Asset_size_in_GB"] = "Asset size in GB";
    JobErrorLimitName["Assets_per_revision"] = "Assets per revision";
})(JobErrorLimitName || (JobErrorLimitName = {}));
export var JobErrorResourceTypes;
(function (JobErrorResourceTypes) {
    JobErrorResourceTypes["ASSET"] = "ASSET";
    JobErrorResourceTypes["REVISION"] = "REVISION";
})(JobErrorResourceTypes || (JobErrorResourceTypes = {}));
export var JobError;
(function (JobError) {
    /**
     * @internal
     */
    JobError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobError || (JobError = {}));
export var State;
(function (State) {
    State["CANCELLED"] = "CANCELLED";
    State["COMPLETED"] = "COMPLETED";
    State["ERROR"] = "ERROR";
    State["IN_PROGRESS"] = "IN_PROGRESS";
    State["TIMED_OUT"] = "TIMED_OUT";
    State["WAITING"] = "WAITING";
})(State || (State = {}));
export var CreateJobResponse;
(function (CreateJobResponse) {
    /**
     * @internal
     */
    CreateJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJobResponse || (CreateJobResponse = {}));
export var CreateRevisionRequest;
(function (CreateRevisionRequest) {
    /**
     * @internal
     */
    CreateRevisionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRevisionRequest || (CreateRevisionRequest = {}));
export var CreateRevisionResponse;
(function (CreateRevisionResponse) {
    /**
     * @internal
     */
    CreateRevisionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRevisionResponse || (CreateRevisionResponse = {}));
export var DeleteAssetRequest;
(function (DeleteAssetRequest) {
    /**
     * @internal
     */
    DeleteAssetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAssetRequest || (DeleteAssetRequest = {}));
export var DeleteDataSetRequest;
(function (DeleteDataSetRequest) {
    /**
     * @internal
     */
    DeleteDataSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDataSetRequest || (DeleteDataSetRequest = {}));
export var DeleteRevisionRequest;
(function (DeleteRevisionRequest) {
    /**
     * @internal
     */
    DeleteRevisionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRevisionRequest || (DeleteRevisionRequest = {}));
export var GetAssetRequest;
(function (GetAssetRequest) {
    /**
     * @internal
     */
    GetAssetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAssetRequest || (GetAssetRequest = {}));
export var GetAssetResponse;
(function (GetAssetResponse) {
    /**
     * @internal
     */
    GetAssetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAssetResponse || (GetAssetResponse = {}));
export var GetDataSetRequest;
(function (GetDataSetRequest) {
    /**
     * @internal
     */
    GetDataSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDataSetRequest || (GetDataSetRequest = {}));
export var GetDataSetResponse;
(function (GetDataSetResponse) {
    /**
     * @internal
     */
    GetDataSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDataSetResponse || (GetDataSetResponse = {}));
export var GetJobRequest;
(function (GetJobRequest) {
    /**
     * @internal
     */
    GetJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJobRequest || (GetJobRequest = {}));
export var GetJobResponse;
(function (GetJobResponse) {
    /**
     * @internal
     */
    GetJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJobResponse || (GetJobResponse = {}));
export var GetRevisionRequest;
(function (GetRevisionRequest) {
    /**
     * @internal
     */
    GetRevisionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRevisionRequest || (GetRevisionRequest = {}));
export var GetRevisionResponse;
(function (GetRevisionResponse) {
    /**
     * @internal
     */
    GetRevisionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRevisionResponse || (GetRevisionResponse = {}));
export var ListDataSetRevisionsRequest;
(function (ListDataSetRevisionsRequest) {
    /**
     * @internal
     */
    ListDataSetRevisionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDataSetRevisionsRequest || (ListDataSetRevisionsRequest = {}));
export var RevisionEntry;
(function (RevisionEntry) {
    /**
     * @internal
     */
    RevisionEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RevisionEntry || (RevisionEntry = {}));
export var ListDataSetRevisionsResponse;
(function (ListDataSetRevisionsResponse) {
    /**
     * @internal
     */
    ListDataSetRevisionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDataSetRevisionsResponse || (ListDataSetRevisionsResponse = {}));
export var ListDataSetsRequest;
(function (ListDataSetsRequest) {
    /**
     * @internal
     */
    ListDataSetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDataSetsRequest || (ListDataSetsRequest = {}));
export var DataSetEntry;
(function (DataSetEntry) {
    /**
     * @internal
     */
    DataSetEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataSetEntry || (DataSetEntry = {}));
export var ListDataSetsResponse;
(function (ListDataSetsResponse) {
    /**
     * @internal
     */
    ListDataSetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDataSetsResponse || (ListDataSetsResponse = {}));
export var ListJobsRequest;
(function (ListJobsRequest) {
    /**
     * @internal
     */
    ListJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobsRequest || (ListJobsRequest = {}));
export var JobEntry;
(function (JobEntry) {
    /**
     * @internal
     */
    JobEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobEntry || (JobEntry = {}));
export var ListJobsResponse;
(function (ListJobsResponse) {
    /**
     * @internal
     */
    ListJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobsResponse || (ListJobsResponse = {}));
export var ListRevisionAssetsRequest;
(function (ListRevisionAssetsRequest) {
    /**
     * @internal
     */
    ListRevisionAssetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRevisionAssetsRequest || (ListRevisionAssetsRequest = {}));
export var ListRevisionAssetsResponse;
(function (ListRevisionAssetsResponse) {
    /**
     * @internal
     */
    ListRevisionAssetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRevisionAssetsResponse || (ListRevisionAssetsResponse = {}));
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
export var StartJobRequest;
(function (StartJobRequest) {
    /**
     * @internal
     */
    StartJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartJobRequest || (StartJobRequest = {}));
export var StartJobResponse;
(function (StartJobResponse) {
    /**
     * @internal
     */
    StartJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartJobResponse || (StartJobResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UpdateAssetRequest;
(function (UpdateAssetRequest) {
    /**
     * @internal
     */
    UpdateAssetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAssetRequest || (UpdateAssetRequest = {}));
export var UpdateAssetResponse;
(function (UpdateAssetResponse) {
    /**
     * @internal
     */
    UpdateAssetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAssetResponse || (UpdateAssetResponse = {}));
export var UpdateDataSetRequest;
(function (UpdateDataSetRequest) {
    /**
     * @internal
     */
    UpdateDataSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDataSetRequest || (UpdateDataSetRequest = {}));
export var UpdateDataSetResponse;
(function (UpdateDataSetResponse) {
    /**
     * @internal
     */
    UpdateDataSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDataSetResponse || (UpdateDataSetResponse = {}));
export var UpdateRevisionRequest;
(function (UpdateRevisionRequest) {
    /**
     * @internal
     */
    UpdateRevisionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRevisionRequest || (UpdateRevisionRequest = {}));
export var UpdateRevisionResponse;
(function (UpdateRevisionResponse) {
    /**
     * @internal
     */
    UpdateRevisionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRevisionResponse || (UpdateRevisionResponse = {}));
//# sourceMappingURL=models_0.js.map