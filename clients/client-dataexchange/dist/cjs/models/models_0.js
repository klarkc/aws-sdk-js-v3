"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRevisionRequest = exports.DeleteDataSetRequest = exports.DeleteAssetRequest = exports.CreateRevisionResponse = exports.CreateRevisionRequest = exports.CreateJobResponse = exports.State = exports.JobError = exports.JobErrorResourceTypes = exports.JobErrorLimitName = exports.Details = exports.ImportAssetFromSignedUrlJobErrorDetails = exports.ResponseDetails = exports.ImportAssetsFromS3ResponseDetails = exports.ImportAssetFromSignedUrlResponseDetails = exports.ExportRevisionsToS3ResponseDetails = exports.ExportAssetToSignedUrlResponseDetails = exports.ExportAssetsToS3ResponseDetails = exports.CreateJobRequest = exports.Type = exports.RequestDetails = exports.ImportAssetsFromS3RequestDetails = exports.ImportAssetFromSignedUrlRequestDetails = exports.ExportRevisionsToS3RequestDetails = exports.RevisionDestinationEntry = exports.ExportAssetToSignedUrlRequestDetails = exports.ExportAssetsToS3RequestDetails = exports.ExportServerSideEncryption = exports.ServerSideEncryptionTypes = exports.ServiceLimitExceededException = exports.LimitName = exports.CreateDataSetResponse = exports.OriginDetails = exports.Origin = exports.CreateDataSetRequest = exports.Code = exports.ValidationException = exports.ThrottlingException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.ResourceType = exports.CancelJobRequest = exports.AssetSourceEntry = exports.AssetEntry = exports.AssetType = exports.AssetDetails = exports.S3SnapshotAsset = exports.AssetDestinationEntry = exports.AccessDeniedException = void 0;
exports.UpdateRevisionResponse = exports.UpdateRevisionRequest = exports.UpdateDataSetResponse = exports.UpdateDataSetRequest = exports.UpdateAssetResponse = exports.UpdateAssetRequest = exports.UntagResourceRequest = exports.TagResourceRequest = exports.StartJobResponse = exports.StartJobRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListRevisionAssetsResponse = exports.ListRevisionAssetsRequest = exports.ListJobsResponse = exports.JobEntry = exports.ListJobsRequest = exports.ListDataSetsResponse = exports.DataSetEntry = exports.ListDataSetsRequest = exports.ListDataSetRevisionsResponse = exports.RevisionEntry = exports.ListDataSetRevisionsRequest = exports.GetRevisionResponse = exports.GetRevisionRequest = exports.GetJobResponse = exports.GetJobRequest = exports.GetDataSetResponse = exports.GetDataSetRequest = exports.GetAssetResponse = exports.GetAssetRequest = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AssetDestinationEntry;
(function (AssetDestinationEntry) {
    /**
     * @internal
     */
    AssetDestinationEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetDestinationEntry = exports.AssetDestinationEntry || (exports.AssetDestinationEntry = {}));
var S3SnapshotAsset;
(function (S3SnapshotAsset) {
    /**
     * @internal
     */
    S3SnapshotAsset.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3SnapshotAsset = exports.S3SnapshotAsset || (exports.S3SnapshotAsset = {}));
var AssetDetails;
(function (AssetDetails) {
    /**
     * @internal
     */
    AssetDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetDetails = exports.AssetDetails || (exports.AssetDetails = {}));
var AssetType;
(function (AssetType) {
    AssetType["S3_SNAPSHOT"] = "S3_SNAPSHOT";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
var AssetEntry;
(function (AssetEntry) {
    /**
     * @internal
     */
    AssetEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetEntry = exports.AssetEntry || (exports.AssetEntry = {}));
var AssetSourceEntry;
(function (AssetSourceEntry) {
    /**
     * @internal
     */
    AssetSourceEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetSourceEntry = exports.AssetSourceEntry || (exports.AssetSourceEntry = {}));
var CancelJobRequest;
(function (CancelJobRequest) {
    /**
     * @internal
     */
    CancelJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelJobRequest = exports.CancelJobRequest || (exports.CancelJobRequest = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["ASSET"] = "ASSET";
    ResourceType["DATA_SET"] = "DATA_SET";
    ResourceType["JOB"] = "JOB";
    ResourceType["REVISION"] = "REVISION";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var Code;
(function (Code) {
    Code["ACCESS_DENIED_EXCEPTION"] = "ACCESS_DENIED_EXCEPTION";
    Code["INTERNAL_SERVER_EXCEPTION"] = "INTERNAL_SERVER_EXCEPTION";
    Code["MALWARE_DETECTED"] = "MALWARE_DETECTED";
    Code["MALWARE_SCAN_ENCRYPTED_FILE"] = "MALWARE_SCAN_ENCRYPTED_FILE";
    Code["RESOURCE_NOT_FOUND_EXCEPTION"] = "RESOURCE_NOT_FOUND_EXCEPTION";
    Code["SERVICE_QUOTA_EXCEEDED_EXCEPTION"] = "SERVICE_QUOTA_EXCEEDED_EXCEPTION";
    Code["VALIDATION_EXCEPTION"] = "VALIDATION_EXCEPTION";
})(Code = exports.Code || (exports.Code = {}));
var CreateDataSetRequest;
(function (CreateDataSetRequest) {
    /**
     * @internal
     */
    CreateDataSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataSetRequest = exports.CreateDataSetRequest || (exports.CreateDataSetRequest = {}));
var Origin;
(function (Origin) {
    Origin["ENTITLED"] = "ENTITLED";
    Origin["OWNED"] = "OWNED";
})(Origin = exports.Origin || (exports.Origin = {}));
var OriginDetails;
(function (OriginDetails) {
    /**
     * @internal
     */
    OriginDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OriginDetails = exports.OriginDetails || (exports.OriginDetails = {}));
var CreateDataSetResponse;
(function (CreateDataSetResponse) {
    /**
     * @internal
     */
    CreateDataSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDataSetResponse = exports.CreateDataSetResponse || (exports.CreateDataSetResponse = {}));
var LimitName;
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
})(LimitName = exports.LimitName || (exports.LimitName = {}));
var ServiceLimitExceededException;
(function (ServiceLimitExceededException) {
    /**
     * @internal
     */
    ServiceLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceLimitExceededException = exports.ServiceLimitExceededException || (exports.ServiceLimitExceededException = {}));
var ServerSideEncryptionTypes;
(function (ServerSideEncryptionTypes) {
    ServerSideEncryptionTypes["AES256"] = "AES256";
    ServerSideEncryptionTypes["aws_kms"] = "aws:kms";
})(ServerSideEncryptionTypes = exports.ServerSideEncryptionTypes || (exports.ServerSideEncryptionTypes = {}));
var ExportServerSideEncryption;
(function (ExportServerSideEncryption) {
    /**
     * @internal
     */
    ExportServerSideEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportServerSideEncryption = exports.ExportServerSideEncryption || (exports.ExportServerSideEncryption = {}));
var ExportAssetsToS3RequestDetails;
(function (ExportAssetsToS3RequestDetails) {
    /**
     * @internal
     */
    ExportAssetsToS3RequestDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportAssetsToS3RequestDetails = exports.ExportAssetsToS3RequestDetails || (exports.ExportAssetsToS3RequestDetails = {}));
var ExportAssetToSignedUrlRequestDetails;
(function (ExportAssetToSignedUrlRequestDetails) {
    /**
     * @internal
     */
    ExportAssetToSignedUrlRequestDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportAssetToSignedUrlRequestDetails = exports.ExportAssetToSignedUrlRequestDetails || (exports.ExportAssetToSignedUrlRequestDetails = {}));
var RevisionDestinationEntry;
(function (RevisionDestinationEntry) {
    /**
     * @internal
     */
    RevisionDestinationEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevisionDestinationEntry = exports.RevisionDestinationEntry || (exports.RevisionDestinationEntry = {}));
var ExportRevisionsToS3RequestDetails;
(function (ExportRevisionsToS3RequestDetails) {
    /**
     * @internal
     */
    ExportRevisionsToS3RequestDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportRevisionsToS3RequestDetails = exports.ExportRevisionsToS3RequestDetails || (exports.ExportRevisionsToS3RequestDetails = {}));
var ImportAssetFromSignedUrlRequestDetails;
(function (ImportAssetFromSignedUrlRequestDetails) {
    /**
     * @internal
     */
    ImportAssetFromSignedUrlRequestDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportAssetFromSignedUrlRequestDetails = exports.ImportAssetFromSignedUrlRequestDetails || (exports.ImportAssetFromSignedUrlRequestDetails = {}));
var ImportAssetsFromS3RequestDetails;
(function (ImportAssetsFromS3RequestDetails) {
    /**
     * @internal
     */
    ImportAssetsFromS3RequestDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportAssetsFromS3RequestDetails = exports.ImportAssetsFromS3RequestDetails || (exports.ImportAssetsFromS3RequestDetails = {}));
var RequestDetails;
(function (RequestDetails) {
    /**
     * @internal
     */
    RequestDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestDetails = exports.RequestDetails || (exports.RequestDetails = {}));
var Type;
(function (Type) {
    Type["EXPORT_ASSETS_TO_S3"] = "EXPORT_ASSETS_TO_S3";
    Type["EXPORT_ASSET_TO_SIGNED_URL"] = "EXPORT_ASSET_TO_SIGNED_URL";
    Type["EXPORT_REVISIONS_TO_S3"] = "EXPORT_REVISIONS_TO_S3";
    Type["IMPORT_ASSETS_FROM_S3"] = "IMPORT_ASSETS_FROM_S3";
    Type["IMPORT_ASSET_FROM_SIGNED_URL"] = "IMPORT_ASSET_FROM_SIGNED_URL";
})(Type = exports.Type || (exports.Type = {}));
var CreateJobRequest;
(function (CreateJobRequest) {
    /**
     * @internal
     */
    CreateJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobRequest = exports.CreateJobRequest || (exports.CreateJobRequest = {}));
var ExportAssetsToS3ResponseDetails;
(function (ExportAssetsToS3ResponseDetails) {
    /**
     * @internal
     */
    ExportAssetsToS3ResponseDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportAssetsToS3ResponseDetails = exports.ExportAssetsToS3ResponseDetails || (exports.ExportAssetsToS3ResponseDetails = {}));
var ExportAssetToSignedUrlResponseDetails;
(function (ExportAssetToSignedUrlResponseDetails) {
    /**
     * @internal
     */
    ExportAssetToSignedUrlResponseDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportAssetToSignedUrlResponseDetails = exports.ExportAssetToSignedUrlResponseDetails || (exports.ExportAssetToSignedUrlResponseDetails = {}));
var ExportRevisionsToS3ResponseDetails;
(function (ExportRevisionsToS3ResponseDetails) {
    /**
     * @internal
     */
    ExportRevisionsToS3ResponseDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportRevisionsToS3ResponseDetails = exports.ExportRevisionsToS3ResponseDetails || (exports.ExportRevisionsToS3ResponseDetails = {}));
var ImportAssetFromSignedUrlResponseDetails;
(function (ImportAssetFromSignedUrlResponseDetails) {
    /**
     * @internal
     */
    ImportAssetFromSignedUrlResponseDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportAssetFromSignedUrlResponseDetails = exports.ImportAssetFromSignedUrlResponseDetails || (exports.ImportAssetFromSignedUrlResponseDetails = {}));
var ImportAssetsFromS3ResponseDetails;
(function (ImportAssetsFromS3ResponseDetails) {
    /**
     * @internal
     */
    ImportAssetsFromS3ResponseDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportAssetsFromS3ResponseDetails = exports.ImportAssetsFromS3ResponseDetails || (exports.ImportAssetsFromS3ResponseDetails = {}));
var ResponseDetails;
(function (ResponseDetails) {
    /**
     * @internal
     */
    ResponseDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResponseDetails = exports.ResponseDetails || (exports.ResponseDetails = {}));
var ImportAssetFromSignedUrlJobErrorDetails;
(function (ImportAssetFromSignedUrlJobErrorDetails) {
    /**
     * @internal
     */
    ImportAssetFromSignedUrlJobErrorDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportAssetFromSignedUrlJobErrorDetails = exports.ImportAssetFromSignedUrlJobErrorDetails || (exports.ImportAssetFromSignedUrlJobErrorDetails = {}));
var Details;
(function (Details) {
    /**
     * @internal
     */
    Details.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Details = exports.Details || (exports.Details = {}));
var JobErrorLimitName;
(function (JobErrorLimitName) {
    JobErrorLimitName["Asset_size_in_GB"] = "Asset size in GB";
    JobErrorLimitName["Assets_per_revision"] = "Assets per revision";
})(JobErrorLimitName = exports.JobErrorLimitName || (exports.JobErrorLimitName = {}));
var JobErrorResourceTypes;
(function (JobErrorResourceTypes) {
    JobErrorResourceTypes["ASSET"] = "ASSET";
    JobErrorResourceTypes["REVISION"] = "REVISION";
})(JobErrorResourceTypes = exports.JobErrorResourceTypes || (exports.JobErrorResourceTypes = {}));
var JobError;
(function (JobError) {
    /**
     * @internal
     */
    JobError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobError = exports.JobError || (exports.JobError = {}));
var State;
(function (State) {
    State["CANCELLED"] = "CANCELLED";
    State["COMPLETED"] = "COMPLETED";
    State["ERROR"] = "ERROR";
    State["IN_PROGRESS"] = "IN_PROGRESS";
    State["TIMED_OUT"] = "TIMED_OUT";
    State["WAITING"] = "WAITING";
})(State = exports.State || (exports.State = {}));
var CreateJobResponse;
(function (CreateJobResponse) {
    /**
     * @internal
     */
    CreateJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobResponse = exports.CreateJobResponse || (exports.CreateJobResponse = {}));
var CreateRevisionRequest;
(function (CreateRevisionRequest) {
    /**
     * @internal
     */
    CreateRevisionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRevisionRequest = exports.CreateRevisionRequest || (exports.CreateRevisionRequest = {}));
var CreateRevisionResponse;
(function (CreateRevisionResponse) {
    /**
     * @internal
     */
    CreateRevisionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRevisionResponse = exports.CreateRevisionResponse || (exports.CreateRevisionResponse = {}));
var DeleteAssetRequest;
(function (DeleteAssetRequest) {
    /**
     * @internal
     */
    DeleteAssetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAssetRequest = exports.DeleteAssetRequest || (exports.DeleteAssetRequest = {}));
var DeleteDataSetRequest;
(function (DeleteDataSetRequest) {
    /**
     * @internal
     */
    DeleteDataSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDataSetRequest = exports.DeleteDataSetRequest || (exports.DeleteDataSetRequest = {}));
var DeleteRevisionRequest;
(function (DeleteRevisionRequest) {
    /**
     * @internal
     */
    DeleteRevisionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRevisionRequest = exports.DeleteRevisionRequest || (exports.DeleteRevisionRequest = {}));
var GetAssetRequest;
(function (GetAssetRequest) {
    /**
     * @internal
     */
    GetAssetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssetRequest = exports.GetAssetRequest || (exports.GetAssetRequest = {}));
var GetAssetResponse;
(function (GetAssetResponse) {
    /**
     * @internal
     */
    GetAssetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssetResponse = exports.GetAssetResponse || (exports.GetAssetResponse = {}));
var GetDataSetRequest;
(function (GetDataSetRequest) {
    /**
     * @internal
     */
    GetDataSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataSetRequest = exports.GetDataSetRequest || (exports.GetDataSetRequest = {}));
var GetDataSetResponse;
(function (GetDataSetResponse) {
    /**
     * @internal
     */
    GetDataSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDataSetResponse = exports.GetDataSetResponse || (exports.GetDataSetResponse = {}));
var GetJobRequest;
(function (GetJobRequest) {
    /**
     * @internal
     */
    GetJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobRequest = exports.GetJobRequest || (exports.GetJobRequest = {}));
var GetJobResponse;
(function (GetJobResponse) {
    /**
     * @internal
     */
    GetJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobResponse = exports.GetJobResponse || (exports.GetJobResponse = {}));
var GetRevisionRequest;
(function (GetRevisionRequest) {
    /**
     * @internal
     */
    GetRevisionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRevisionRequest = exports.GetRevisionRequest || (exports.GetRevisionRequest = {}));
var GetRevisionResponse;
(function (GetRevisionResponse) {
    /**
     * @internal
     */
    GetRevisionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRevisionResponse = exports.GetRevisionResponse || (exports.GetRevisionResponse = {}));
var ListDataSetRevisionsRequest;
(function (ListDataSetRevisionsRequest) {
    /**
     * @internal
     */
    ListDataSetRevisionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataSetRevisionsRequest = exports.ListDataSetRevisionsRequest || (exports.ListDataSetRevisionsRequest = {}));
var RevisionEntry;
(function (RevisionEntry) {
    /**
     * @internal
     */
    RevisionEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevisionEntry = exports.RevisionEntry || (exports.RevisionEntry = {}));
var ListDataSetRevisionsResponse;
(function (ListDataSetRevisionsResponse) {
    /**
     * @internal
     */
    ListDataSetRevisionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataSetRevisionsResponse = exports.ListDataSetRevisionsResponse || (exports.ListDataSetRevisionsResponse = {}));
var ListDataSetsRequest;
(function (ListDataSetsRequest) {
    /**
     * @internal
     */
    ListDataSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataSetsRequest = exports.ListDataSetsRequest || (exports.ListDataSetsRequest = {}));
var DataSetEntry;
(function (DataSetEntry) {
    /**
     * @internal
     */
    DataSetEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSetEntry = exports.DataSetEntry || (exports.DataSetEntry = {}));
var ListDataSetsResponse;
(function (ListDataSetsResponse) {
    /**
     * @internal
     */
    ListDataSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataSetsResponse = exports.ListDataSetsResponse || (exports.ListDataSetsResponse = {}));
var ListJobsRequest;
(function (ListJobsRequest) {
    /**
     * @internal
     */
    ListJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsRequest = exports.ListJobsRequest || (exports.ListJobsRequest = {}));
var JobEntry;
(function (JobEntry) {
    /**
     * @internal
     */
    JobEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobEntry = exports.JobEntry || (exports.JobEntry = {}));
var ListJobsResponse;
(function (ListJobsResponse) {
    /**
     * @internal
     */
    ListJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsResponse = exports.ListJobsResponse || (exports.ListJobsResponse = {}));
var ListRevisionAssetsRequest;
(function (ListRevisionAssetsRequest) {
    /**
     * @internal
     */
    ListRevisionAssetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRevisionAssetsRequest = exports.ListRevisionAssetsRequest || (exports.ListRevisionAssetsRequest = {}));
var ListRevisionAssetsResponse;
(function (ListRevisionAssetsResponse) {
    /**
     * @internal
     */
    ListRevisionAssetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRevisionAssetsResponse = exports.ListRevisionAssetsResponse || (exports.ListRevisionAssetsResponse = {}));
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
var StartJobRequest;
(function (StartJobRequest) {
    /**
     * @internal
     */
    StartJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartJobRequest = exports.StartJobRequest || (exports.StartJobRequest = {}));
var StartJobResponse;
(function (StartJobResponse) {
    /**
     * @internal
     */
    StartJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartJobResponse = exports.StartJobResponse || (exports.StartJobResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateAssetRequest;
(function (UpdateAssetRequest) {
    /**
     * @internal
     */
    UpdateAssetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAssetRequest = exports.UpdateAssetRequest || (exports.UpdateAssetRequest = {}));
var UpdateAssetResponse;
(function (UpdateAssetResponse) {
    /**
     * @internal
     */
    UpdateAssetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAssetResponse = exports.UpdateAssetResponse || (exports.UpdateAssetResponse = {}));
var UpdateDataSetRequest;
(function (UpdateDataSetRequest) {
    /**
     * @internal
     */
    UpdateDataSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDataSetRequest = exports.UpdateDataSetRequest || (exports.UpdateDataSetRequest = {}));
var UpdateDataSetResponse;
(function (UpdateDataSetResponse) {
    /**
     * @internal
     */
    UpdateDataSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDataSetResponse = exports.UpdateDataSetResponse || (exports.UpdateDataSetResponse = {}));
var UpdateRevisionRequest;
(function (UpdateRevisionRequest) {
    /**
     * @internal
     */
    UpdateRevisionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRevisionRequest = exports.UpdateRevisionRequest || (exports.UpdateRevisionRequest = {}));
var UpdateRevisionResponse;
(function (UpdateRevisionResponse) {
    /**
     * @internal
     */
    UpdateRevisionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRevisionResponse = exports.UpdateRevisionResponse || (exports.UpdateRevisionResponse = {}));
//# sourceMappingURL=models_0.js.map