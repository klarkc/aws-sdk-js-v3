"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagStatus = exports.RepositoryPolicyNotFoundException = exports.DeleteRepositoryPolicyResponse = exports.DeleteRepositoryPolicyRequest = exports.RepositoryNotEmptyException = exports.DeleteRepositoryResponse = exports.DeleteRepositoryRequest = exports.RegistryPolicyNotFoundException = exports.DeleteRegistryPolicyResponse = exports.DeleteRegistryPolicyRequest = exports.LifecyclePolicyNotFoundException = exports.DeleteLifecyclePolicyResponse = exports.DeleteLifecyclePolicyRequest = exports.TooManyTagsException = exports.RepositoryAlreadyExistsException = exports.LimitExceededException = exports.InvalidTagParameterException = exports.CreateRepositoryResponse = exports.Repository = exports.CreateRepositoryRequest = exports.Tag = exports.ImageTagMutability = exports.ImageScanningConfiguration = exports.EncryptionConfiguration = exports.EncryptionType = exports.UploadNotFoundException = exports.LayerPartTooSmallException = exports.LayerAlreadyExistsException = exports.KmsException = exports.InvalidLayerException = exports.EmptyUploadException = exports.CompleteLayerUploadResponse = exports.CompleteLayerUploadRequest = exports.BatchGetImageResponse = exports.Image = exports.BatchGetImageRequest = exports.BatchDeleteImageResponse = exports.ImageFailure = exports.ImageFailureCode = exports.BatchDeleteImageRequest = exports.ImageIdentifier = exports.ServerException = exports.RepositoryNotFoundException = exports.InvalidParameterException = exports.BatchCheckLayerAvailabilityResponse = exports.Layer = exports.LayerAvailability = exports.LayerFailure = exports.LayerFailureCode = exports.BatchCheckLayerAvailabilityRequest = void 0;
exports.ListImagesResponse = exports.ListImagesRequest = exports.ListImagesFilter = exports.InitiateLayerUploadResponse = exports.InitiateLayerUploadRequest = exports.GetRepositoryPolicyResponse = exports.GetRepositoryPolicyRequest = exports.GetRegistryPolicyResponse = exports.GetRegistryPolicyRequest = exports.LifecyclePolicyPreviewNotFoundException = exports.GetLifecyclePolicyPreviewResponse = exports.LifecyclePolicyPreviewSummary = exports.LifecyclePolicyPreviewStatus = exports.LifecyclePolicyPreviewResult = exports.LifecyclePolicyRuleAction = exports.ImageActionType = exports.GetLifecyclePolicyPreviewRequest = exports.LifecyclePolicyPreviewFilter = exports.GetLifecyclePolicyResponse = exports.GetLifecyclePolicyRequest = exports.LayersNotFoundException = exports.LayerInaccessibleException = exports.GetDownloadUrlForLayerResponse = exports.GetDownloadUrlForLayerRequest = exports.GetAuthorizationTokenResponse = exports.AuthorizationData = exports.GetAuthorizationTokenRequest = exports.DescribeRepositoriesResponse = exports.DescribeRepositoriesRequest = exports.ValidationException = exports.DescribeRegistryResponse = exports.ReplicationConfiguration = exports.ReplicationRule = exports.ReplicationDestination = exports.DescribeRegistryRequest = exports.ScanNotFoundException = exports.DescribeImageScanFindingsResponse = exports.ImageScanFindings = exports.ImageScanFinding = exports.Attribute = exports.DescribeImageScanFindingsRequest = exports.ImageNotFoundException = exports.DescribeImagesResponse = exports.ImageDetail = exports.ImageScanStatus = exports.ScanStatus = exports.ImageScanFindingsSummary = exports.FindingSeverity = exports.DescribeImagesRequest = exports.DescribeImagesFilter = void 0;
exports.UploadLayerPartResponse = exports.UploadLayerPartRequest = exports.InvalidLayerPartException = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StartLifecyclePolicyPreviewResponse = exports.StartLifecyclePolicyPreviewRequest = exports.LifecyclePolicyPreviewInProgressException = exports.UnsupportedImageTypeException = exports.StartImageScanResponse = exports.StartImageScanRequest = exports.SetRepositoryPolicyResponse = exports.SetRepositoryPolicyRequest = exports.PutReplicationConfigurationResponse = exports.PutReplicationConfigurationRequest = exports.PutRegistryPolicyResponse = exports.PutRegistryPolicyRequest = exports.PutLifecyclePolicyResponse = exports.PutLifecyclePolicyRequest = exports.PutImageTagMutabilityResponse = exports.PutImageTagMutabilityRequest = exports.PutImageScanningConfigurationResponse = exports.PutImageScanningConfigurationRequest = exports.ReferencedImagesNotFoundException = exports.PutImageResponse = exports.PutImageRequest = exports.ImageTagAlreadyExistsException = exports.ImageDigestDoesNotMatchException = exports.ImageAlreadyExistsException = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = void 0;
var BatchCheckLayerAvailabilityRequest;
(function (BatchCheckLayerAvailabilityRequest) {
    /**
     * @internal
     */
    BatchCheckLayerAvailabilityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchCheckLayerAvailabilityRequest = exports.BatchCheckLayerAvailabilityRequest || (exports.BatchCheckLayerAvailabilityRequest = {}));
var LayerFailureCode;
(function (LayerFailureCode) {
    LayerFailureCode["InvalidLayerDigest"] = "InvalidLayerDigest";
    LayerFailureCode["MissingLayerDigest"] = "MissingLayerDigest";
})(LayerFailureCode = exports.LayerFailureCode || (exports.LayerFailureCode = {}));
var LayerFailure;
(function (LayerFailure) {
    /**
     * @internal
     */
    LayerFailure.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LayerFailure = exports.LayerFailure || (exports.LayerFailure = {}));
var LayerAvailability;
(function (LayerAvailability) {
    LayerAvailability["AVAILABLE"] = "AVAILABLE";
    LayerAvailability["UNAVAILABLE"] = "UNAVAILABLE";
})(LayerAvailability = exports.LayerAvailability || (exports.LayerAvailability = {}));
var Layer;
(function (Layer) {
    /**
     * @internal
     */
    Layer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Layer = exports.Layer || (exports.Layer = {}));
var BatchCheckLayerAvailabilityResponse;
(function (BatchCheckLayerAvailabilityResponse) {
    /**
     * @internal
     */
    BatchCheckLayerAvailabilityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchCheckLayerAvailabilityResponse = exports.BatchCheckLayerAvailabilityResponse || (exports.BatchCheckLayerAvailabilityResponse = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var RepositoryNotFoundException;
(function (RepositoryNotFoundException) {
    /**
     * @internal
     */
    RepositoryNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryNotFoundException = exports.RepositoryNotFoundException || (exports.RepositoryNotFoundException = {}));
var ServerException;
(function (ServerException) {
    /**
     * @internal
     */
    ServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerException = exports.ServerException || (exports.ServerException = {}));
var ImageIdentifier;
(function (ImageIdentifier) {
    /**
     * @internal
     */
    ImageIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageIdentifier = exports.ImageIdentifier || (exports.ImageIdentifier = {}));
var BatchDeleteImageRequest;
(function (BatchDeleteImageRequest) {
    /**
     * @internal
     */
    BatchDeleteImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteImageRequest = exports.BatchDeleteImageRequest || (exports.BatchDeleteImageRequest = {}));
var ImageFailureCode;
(function (ImageFailureCode) {
    ImageFailureCode["ImageNotFound"] = "ImageNotFound";
    ImageFailureCode["ImageReferencedByManifestList"] = "ImageReferencedByManifestList";
    ImageFailureCode["ImageTagDoesNotMatchDigest"] = "ImageTagDoesNotMatchDigest";
    ImageFailureCode["InvalidImageDigest"] = "InvalidImageDigest";
    ImageFailureCode["InvalidImageTag"] = "InvalidImageTag";
    ImageFailureCode["KmsError"] = "KmsError";
    ImageFailureCode["MissingDigestAndTag"] = "MissingDigestAndTag";
})(ImageFailureCode = exports.ImageFailureCode || (exports.ImageFailureCode = {}));
var ImageFailure;
(function (ImageFailure) {
    /**
     * @internal
     */
    ImageFailure.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageFailure = exports.ImageFailure || (exports.ImageFailure = {}));
var BatchDeleteImageResponse;
(function (BatchDeleteImageResponse) {
    /**
     * @internal
     */
    BatchDeleteImageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteImageResponse = exports.BatchDeleteImageResponse || (exports.BatchDeleteImageResponse = {}));
var BatchGetImageRequest;
(function (BatchGetImageRequest) {
    /**
     * @internal
     */
    BatchGetImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetImageRequest = exports.BatchGetImageRequest || (exports.BatchGetImageRequest = {}));
var Image;
(function (Image) {
    /**
     * @internal
     */
    Image.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Image = exports.Image || (exports.Image = {}));
var BatchGetImageResponse;
(function (BatchGetImageResponse) {
    /**
     * @internal
     */
    BatchGetImageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetImageResponse = exports.BatchGetImageResponse || (exports.BatchGetImageResponse = {}));
var CompleteLayerUploadRequest;
(function (CompleteLayerUploadRequest) {
    /**
     * @internal
     */
    CompleteLayerUploadRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteLayerUploadRequest = exports.CompleteLayerUploadRequest || (exports.CompleteLayerUploadRequest = {}));
var CompleteLayerUploadResponse;
(function (CompleteLayerUploadResponse) {
    /**
     * @internal
     */
    CompleteLayerUploadResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompleteLayerUploadResponse = exports.CompleteLayerUploadResponse || (exports.CompleteLayerUploadResponse = {}));
var EmptyUploadException;
(function (EmptyUploadException) {
    /**
     * @internal
     */
    EmptyUploadException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmptyUploadException = exports.EmptyUploadException || (exports.EmptyUploadException = {}));
var InvalidLayerException;
(function (InvalidLayerException) {
    /**
     * @internal
     */
    InvalidLayerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidLayerException = exports.InvalidLayerException || (exports.InvalidLayerException = {}));
var KmsException;
(function (KmsException) {
    /**
     * @internal
     */
    KmsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KmsException = exports.KmsException || (exports.KmsException = {}));
var LayerAlreadyExistsException;
(function (LayerAlreadyExistsException) {
    /**
     * @internal
     */
    LayerAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LayerAlreadyExistsException = exports.LayerAlreadyExistsException || (exports.LayerAlreadyExistsException = {}));
var LayerPartTooSmallException;
(function (LayerPartTooSmallException) {
    /**
     * @internal
     */
    LayerPartTooSmallException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LayerPartTooSmallException = exports.LayerPartTooSmallException || (exports.LayerPartTooSmallException = {}));
var UploadNotFoundException;
(function (UploadNotFoundException) {
    /**
     * @internal
     */
    UploadNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadNotFoundException = exports.UploadNotFoundException || (exports.UploadNotFoundException = {}));
var EncryptionType;
(function (EncryptionType) {
    EncryptionType["AES256"] = "AES256";
    EncryptionType["KMS"] = "KMS";
})(EncryptionType = exports.EncryptionType || (exports.EncryptionType = {}));
var EncryptionConfiguration;
(function (EncryptionConfiguration) {
    /**
     * @internal
     */
    EncryptionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionConfiguration = exports.EncryptionConfiguration || (exports.EncryptionConfiguration = {}));
var ImageScanningConfiguration;
(function (ImageScanningConfiguration) {
    /**
     * @internal
     */
    ImageScanningConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageScanningConfiguration = exports.ImageScanningConfiguration || (exports.ImageScanningConfiguration = {}));
var ImageTagMutability;
(function (ImageTagMutability) {
    ImageTagMutability["IMMUTABLE"] = "IMMUTABLE";
    ImageTagMutability["MUTABLE"] = "MUTABLE";
})(ImageTagMutability = exports.ImageTagMutability || (exports.ImageTagMutability = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateRepositoryRequest;
(function (CreateRepositoryRequest) {
    /**
     * @internal
     */
    CreateRepositoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRepositoryRequest = exports.CreateRepositoryRequest || (exports.CreateRepositoryRequest = {}));
var Repository;
(function (Repository) {
    /**
     * @internal
     */
    Repository.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Repository = exports.Repository || (exports.Repository = {}));
var CreateRepositoryResponse;
(function (CreateRepositoryResponse) {
    /**
     * @internal
     */
    CreateRepositoryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRepositoryResponse = exports.CreateRepositoryResponse || (exports.CreateRepositoryResponse = {}));
var InvalidTagParameterException;
(function (InvalidTagParameterException) {
    /**
     * @internal
     */
    InvalidTagParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTagParameterException = exports.InvalidTagParameterException || (exports.InvalidTagParameterException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var RepositoryAlreadyExistsException;
(function (RepositoryAlreadyExistsException) {
    /**
     * @internal
     */
    RepositoryAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryAlreadyExistsException = exports.RepositoryAlreadyExistsException || (exports.RepositoryAlreadyExistsException = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var DeleteLifecyclePolicyRequest;
(function (DeleteLifecyclePolicyRequest) {
    /**
     * @internal
     */
    DeleteLifecyclePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLifecyclePolicyRequest = exports.DeleteLifecyclePolicyRequest || (exports.DeleteLifecyclePolicyRequest = {}));
var DeleteLifecyclePolicyResponse;
(function (DeleteLifecyclePolicyResponse) {
    /**
     * @internal
     */
    DeleteLifecyclePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLifecyclePolicyResponse = exports.DeleteLifecyclePolicyResponse || (exports.DeleteLifecyclePolicyResponse = {}));
var LifecyclePolicyNotFoundException;
(function (LifecyclePolicyNotFoundException) {
    /**
     * @internal
     */
    LifecyclePolicyNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecyclePolicyNotFoundException = exports.LifecyclePolicyNotFoundException || (exports.LifecyclePolicyNotFoundException = {}));
var DeleteRegistryPolicyRequest;
(function (DeleteRegistryPolicyRequest) {
    /**
     * @internal
     */
    DeleteRegistryPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRegistryPolicyRequest = exports.DeleteRegistryPolicyRequest || (exports.DeleteRegistryPolicyRequest = {}));
var DeleteRegistryPolicyResponse;
(function (DeleteRegistryPolicyResponse) {
    /**
     * @internal
     */
    DeleteRegistryPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRegistryPolicyResponse = exports.DeleteRegistryPolicyResponse || (exports.DeleteRegistryPolicyResponse = {}));
var RegistryPolicyNotFoundException;
(function (RegistryPolicyNotFoundException) {
    /**
     * @internal
     */
    RegistryPolicyNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegistryPolicyNotFoundException = exports.RegistryPolicyNotFoundException || (exports.RegistryPolicyNotFoundException = {}));
var DeleteRepositoryRequest;
(function (DeleteRepositoryRequest) {
    /**
     * @internal
     */
    DeleteRepositoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRepositoryRequest = exports.DeleteRepositoryRequest || (exports.DeleteRepositoryRequest = {}));
var DeleteRepositoryResponse;
(function (DeleteRepositoryResponse) {
    /**
     * @internal
     */
    DeleteRepositoryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRepositoryResponse = exports.DeleteRepositoryResponse || (exports.DeleteRepositoryResponse = {}));
var RepositoryNotEmptyException;
(function (RepositoryNotEmptyException) {
    /**
     * @internal
     */
    RepositoryNotEmptyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryNotEmptyException = exports.RepositoryNotEmptyException || (exports.RepositoryNotEmptyException = {}));
var DeleteRepositoryPolicyRequest;
(function (DeleteRepositoryPolicyRequest) {
    /**
     * @internal
     */
    DeleteRepositoryPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRepositoryPolicyRequest = exports.DeleteRepositoryPolicyRequest || (exports.DeleteRepositoryPolicyRequest = {}));
var DeleteRepositoryPolicyResponse;
(function (DeleteRepositoryPolicyResponse) {
    /**
     * @internal
     */
    DeleteRepositoryPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRepositoryPolicyResponse = exports.DeleteRepositoryPolicyResponse || (exports.DeleteRepositoryPolicyResponse = {}));
var RepositoryPolicyNotFoundException;
(function (RepositoryPolicyNotFoundException) {
    /**
     * @internal
     */
    RepositoryPolicyNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryPolicyNotFoundException = exports.RepositoryPolicyNotFoundException || (exports.RepositoryPolicyNotFoundException = {}));
var TagStatus;
(function (TagStatus) {
    TagStatus["ANY"] = "ANY";
    TagStatus["TAGGED"] = "TAGGED";
    TagStatus["UNTAGGED"] = "UNTAGGED";
})(TagStatus = exports.TagStatus || (exports.TagStatus = {}));
var DescribeImagesFilter;
(function (DescribeImagesFilter) {
    /**
     * @internal
     */
    DescribeImagesFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImagesFilter = exports.DescribeImagesFilter || (exports.DescribeImagesFilter = {}));
var DescribeImagesRequest;
(function (DescribeImagesRequest) {
    /**
     * @internal
     */
    DescribeImagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImagesRequest = exports.DescribeImagesRequest || (exports.DescribeImagesRequest = {}));
var FindingSeverity;
(function (FindingSeverity) {
    FindingSeverity["CRITICAL"] = "CRITICAL";
    FindingSeverity["HIGH"] = "HIGH";
    FindingSeverity["INFORMATIONAL"] = "INFORMATIONAL";
    FindingSeverity["LOW"] = "LOW";
    FindingSeverity["MEDIUM"] = "MEDIUM";
    FindingSeverity["UNDEFINED"] = "UNDEFINED";
})(FindingSeverity = exports.FindingSeverity || (exports.FindingSeverity = {}));
var ImageScanFindingsSummary;
(function (ImageScanFindingsSummary) {
    /**
     * @internal
     */
    ImageScanFindingsSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageScanFindingsSummary = exports.ImageScanFindingsSummary || (exports.ImageScanFindingsSummary = {}));
var ScanStatus;
(function (ScanStatus) {
    ScanStatus["COMPLETE"] = "COMPLETE";
    ScanStatus["FAILED"] = "FAILED";
    ScanStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(ScanStatus = exports.ScanStatus || (exports.ScanStatus = {}));
var ImageScanStatus;
(function (ImageScanStatus) {
    /**
     * @internal
     */
    ImageScanStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageScanStatus = exports.ImageScanStatus || (exports.ImageScanStatus = {}));
var ImageDetail;
(function (ImageDetail) {
    /**
     * @internal
     */
    ImageDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageDetail = exports.ImageDetail || (exports.ImageDetail = {}));
var DescribeImagesResponse;
(function (DescribeImagesResponse) {
    /**
     * @internal
     */
    DescribeImagesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImagesResponse = exports.DescribeImagesResponse || (exports.DescribeImagesResponse = {}));
var ImageNotFoundException;
(function (ImageNotFoundException) {
    /**
     * @internal
     */
    ImageNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageNotFoundException = exports.ImageNotFoundException || (exports.ImageNotFoundException = {}));
var DescribeImageScanFindingsRequest;
(function (DescribeImageScanFindingsRequest) {
    /**
     * @internal
     */
    DescribeImageScanFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImageScanFindingsRequest = exports.DescribeImageScanFindingsRequest || (exports.DescribeImageScanFindingsRequest = {}));
var Attribute;
(function (Attribute) {
    /**
     * @internal
     */
    Attribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Attribute = exports.Attribute || (exports.Attribute = {}));
var ImageScanFinding;
(function (ImageScanFinding) {
    /**
     * @internal
     */
    ImageScanFinding.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageScanFinding = exports.ImageScanFinding || (exports.ImageScanFinding = {}));
var ImageScanFindings;
(function (ImageScanFindings) {
    /**
     * @internal
     */
    ImageScanFindings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageScanFindings = exports.ImageScanFindings || (exports.ImageScanFindings = {}));
var DescribeImageScanFindingsResponse;
(function (DescribeImageScanFindingsResponse) {
    /**
     * @internal
     */
    DescribeImageScanFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImageScanFindingsResponse = exports.DescribeImageScanFindingsResponse || (exports.DescribeImageScanFindingsResponse = {}));
var ScanNotFoundException;
(function (ScanNotFoundException) {
    /**
     * @internal
     */
    ScanNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ScanNotFoundException = exports.ScanNotFoundException || (exports.ScanNotFoundException = {}));
var DescribeRegistryRequest;
(function (DescribeRegistryRequest) {
    /**
     * @internal
     */
    DescribeRegistryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRegistryRequest = exports.DescribeRegistryRequest || (exports.DescribeRegistryRequest = {}));
var ReplicationDestination;
(function (ReplicationDestination) {
    /**
     * @internal
     */
    ReplicationDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationDestination = exports.ReplicationDestination || (exports.ReplicationDestination = {}));
var ReplicationRule;
(function (ReplicationRule) {
    /**
     * @internal
     */
    ReplicationRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationRule = exports.ReplicationRule || (exports.ReplicationRule = {}));
var ReplicationConfiguration;
(function (ReplicationConfiguration) {
    /**
     * @internal
     */
    ReplicationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationConfiguration = exports.ReplicationConfiguration || (exports.ReplicationConfiguration = {}));
var DescribeRegistryResponse;
(function (DescribeRegistryResponse) {
    /**
     * @internal
     */
    DescribeRegistryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRegistryResponse = exports.DescribeRegistryResponse || (exports.DescribeRegistryResponse = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var DescribeRepositoriesRequest;
(function (DescribeRepositoriesRequest) {
    /**
     * @internal
     */
    DescribeRepositoriesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRepositoriesRequest = exports.DescribeRepositoriesRequest || (exports.DescribeRepositoriesRequest = {}));
var DescribeRepositoriesResponse;
(function (DescribeRepositoriesResponse) {
    /**
     * @internal
     */
    DescribeRepositoriesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRepositoriesResponse = exports.DescribeRepositoriesResponse || (exports.DescribeRepositoriesResponse = {}));
var GetAuthorizationTokenRequest;
(function (GetAuthorizationTokenRequest) {
    /**
     * @internal
     */
    GetAuthorizationTokenRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAuthorizationTokenRequest = exports.GetAuthorizationTokenRequest || (exports.GetAuthorizationTokenRequest = {}));
var AuthorizationData;
(function (AuthorizationData) {
    /**
     * @internal
     */
    AuthorizationData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizationData = exports.AuthorizationData || (exports.AuthorizationData = {}));
var GetAuthorizationTokenResponse;
(function (GetAuthorizationTokenResponse) {
    /**
     * @internal
     */
    GetAuthorizationTokenResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAuthorizationTokenResponse = exports.GetAuthorizationTokenResponse || (exports.GetAuthorizationTokenResponse = {}));
var GetDownloadUrlForLayerRequest;
(function (GetDownloadUrlForLayerRequest) {
    /**
     * @internal
     */
    GetDownloadUrlForLayerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDownloadUrlForLayerRequest = exports.GetDownloadUrlForLayerRequest || (exports.GetDownloadUrlForLayerRequest = {}));
var GetDownloadUrlForLayerResponse;
(function (GetDownloadUrlForLayerResponse) {
    /**
     * @internal
     */
    GetDownloadUrlForLayerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDownloadUrlForLayerResponse = exports.GetDownloadUrlForLayerResponse || (exports.GetDownloadUrlForLayerResponse = {}));
var LayerInaccessibleException;
(function (LayerInaccessibleException) {
    /**
     * @internal
     */
    LayerInaccessibleException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LayerInaccessibleException = exports.LayerInaccessibleException || (exports.LayerInaccessibleException = {}));
var LayersNotFoundException;
(function (LayersNotFoundException) {
    /**
     * @internal
     */
    LayersNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LayersNotFoundException = exports.LayersNotFoundException || (exports.LayersNotFoundException = {}));
var GetLifecyclePolicyRequest;
(function (GetLifecyclePolicyRequest) {
    /**
     * @internal
     */
    GetLifecyclePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLifecyclePolicyRequest = exports.GetLifecyclePolicyRequest || (exports.GetLifecyclePolicyRequest = {}));
var GetLifecyclePolicyResponse;
(function (GetLifecyclePolicyResponse) {
    /**
     * @internal
     */
    GetLifecyclePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLifecyclePolicyResponse = exports.GetLifecyclePolicyResponse || (exports.GetLifecyclePolicyResponse = {}));
var LifecyclePolicyPreviewFilter;
(function (LifecyclePolicyPreviewFilter) {
    /**
     * @internal
     */
    LifecyclePolicyPreviewFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecyclePolicyPreviewFilter = exports.LifecyclePolicyPreviewFilter || (exports.LifecyclePolicyPreviewFilter = {}));
var GetLifecyclePolicyPreviewRequest;
(function (GetLifecyclePolicyPreviewRequest) {
    /**
     * @internal
     */
    GetLifecyclePolicyPreviewRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLifecyclePolicyPreviewRequest = exports.GetLifecyclePolicyPreviewRequest || (exports.GetLifecyclePolicyPreviewRequest = {}));
var ImageActionType;
(function (ImageActionType) {
    ImageActionType["EXPIRE"] = "EXPIRE";
})(ImageActionType = exports.ImageActionType || (exports.ImageActionType = {}));
var LifecyclePolicyRuleAction;
(function (LifecyclePolicyRuleAction) {
    /**
     * @internal
     */
    LifecyclePolicyRuleAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecyclePolicyRuleAction = exports.LifecyclePolicyRuleAction || (exports.LifecyclePolicyRuleAction = {}));
var LifecyclePolicyPreviewResult;
(function (LifecyclePolicyPreviewResult) {
    /**
     * @internal
     */
    LifecyclePolicyPreviewResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecyclePolicyPreviewResult = exports.LifecyclePolicyPreviewResult || (exports.LifecyclePolicyPreviewResult = {}));
var LifecyclePolicyPreviewStatus;
(function (LifecyclePolicyPreviewStatus) {
    LifecyclePolicyPreviewStatus["COMPLETE"] = "COMPLETE";
    LifecyclePolicyPreviewStatus["EXPIRED"] = "EXPIRED";
    LifecyclePolicyPreviewStatus["FAILED"] = "FAILED";
    LifecyclePolicyPreviewStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(LifecyclePolicyPreviewStatus = exports.LifecyclePolicyPreviewStatus || (exports.LifecyclePolicyPreviewStatus = {}));
var LifecyclePolicyPreviewSummary;
(function (LifecyclePolicyPreviewSummary) {
    /**
     * @internal
     */
    LifecyclePolicyPreviewSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecyclePolicyPreviewSummary = exports.LifecyclePolicyPreviewSummary || (exports.LifecyclePolicyPreviewSummary = {}));
var GetLifecyclePolicyPreviewResponse;
(function (GetLifecyclePolicyPreviewResponse) {
    /**
     * @internal
     */
    GetLifecyclePolicyPreviewResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLifecyclePolicyPreviewResponse = exports.GetLifecyclePolicyPreviewResponse || (exports.GetLifecyclePolicyPreviewResponse = {}));
var LifecyclePolicyPreviewNotFoundException;
(function (LifecyclePolicyPreviewNotFoundException) {
    /**
     * @internal
     */
    LifecyclePolicyPreviewNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecyclePolicyPreviewNotFoundException = exports.LifecyclePolicyPreviewNotFoundException || (exports.LifecyclePolicyPreviewNotFoundException = {}));
var GetRegistryPolicyRequest;
(function (GetRegistryPolicyRequest) {
    /**
     * @internal
     */
    GetRegistryPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegistryPolicyRequest = exports.GetRegistryPolicyRequest || (exports.GetRegistryPolicyRequest = {}));
var GetRegistryPolicyResponse;
(function (GetRegistryPolicyResponse) {
    /**
     * @internal
     */
    GetRegistryPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegistryPolicyResponse = exports.GetRegistryPolicyResponse || (exports.GetRegistryPolicyResponse = {}));
var GetRepositoryPolicyRequest;
(function (GetRepositoryPolicyRequest) {
    /**
     * @internal
     */
    GetRepositoryPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryPolicyRequest = exports.GetRepositoryPolicyRequest || (exports.GetRepositoryPolicyRequest = {}));
var GetRepositoryPolicyResponse;
(function (GetRepositoryPolicyResponse) {
    /**
     * @internal
     */
    GetRepositoryPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryPolicyResponse = exports.GetRepositoryPolicyResponse || (exports.GetRepositoryPolicyResponse = {}));
var InitiateLayerUploadRequest;
(function (InitiateLayerUploadRequest) {
    /**
     * @internal
     */
    InitiateLayerUploadRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InitiateLayerUploadRequest = exports.InitiateLayerUploadRequest || (exports.InitiateLayerUploadRequest = {}));
var InitiateLayerUploadResponse;
(function (InitiateLayerUploadResponse) {
    /**
     * @internal
     */
    InitiateLayerUploadResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InitiateLayerUploadResponse = exports.InitiateLayerUploadResponse || (exports.InitiateLayerUploadResponse = {}));
var ListImagesFilter;
(function (ListImagesFilter) {
    /**
     * @internal
     */
    ListImagesFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImagesFilter = exports.ListImagesFilter || (exports.ListImagesFilter = {}));
var ListImagesRequest;
(function (ListImagesRequest) {
    /**
     * @internal
     */
    ListImagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImagesRequest = exports.ListImagesRequest || (exports.ListImagesRequest = {}));
var ListImagesResponse;
(function (ListImagesResponse) {
    /**
     * @internal
     */
    ListImagesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImagesResponse = exports.ListImagesResponse || (exports.ListImagesResponse = {}));
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
var ImageAlreadyExistsException;
(function (ImageAlreadyExistsException) {
    /**
     * @internal
     */
    ImageAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageAlreadyExistsException = exports.ImageAlreadyExistsException || (exports.ImageAlreadyExistsException = {}));
var ImageDigestDoesNotMatchException;
(function (ImageDigestDoesNotMatchException) {
    /**
     * @internal
     */
    ImageDigestDoesNotMatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageDigestDoesNotMatchException = exports.ImageDigestDoesNotMatchException || (exports.ImageDigestDoesNotMatchException = {}));
var ImageTagAlreadyExistsException;
(function (ImageTagAlreadyExistsException) {
    /**
     * @internal
     */
    ImageTagAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageTagAlreadyExistsException = exports.ImageTagAlreadyExistsException || (exports.ImageTagAlreadyExistsException = {}));
var PutImageRequest;
(function (PutImageRequest) {
    /**
     * @internal
     */
    PutImageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutImageRequest = exports.PutImageRequest || (exports.PutImageRequest = {}));
var PutImageResponse;
(function (PutImageResponse) {
    /**
     * @internal
     */
    PutImageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutImageResponse = exports.PutImageResponse || (exports.PutImageResponse = {}));
var ReferencedImagesNotFoundException;
(function (ReferencedImagesNotFoundException) {
    /**
     * @internal
     */
    ReferencedImagesNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReferencedImagesNotFoundException = exports.ReferencedImagesNotFoundException || (exports.ReferencedImagesNotFoundException = {}));
var PutImageScanningConfigurationRequest;
(function (PutImageScanningConfigurationRequest) {
    /**
     * @internal
     */
    PutImageScanningConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutImageScanningConfigurationRequest = exports.PutImageScanningConfigurationRequest || (exports.PutImageScanningConfigurationRequest = {}));
var PutImageScanningConfigurationResponse;
(function (PutImageScanningConfigurationResponse) {
    /**
     * @internal
     */
    PutImageScanningConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutImageScanningConfigurationResponse = exports.PutImageScanningConfigurationResponse || (exports.PutImageScanningConfigurationResponse = {}));
var PutImageTagMutabilityRequest;
(function (PutImageTagMutabilityRequest) {
    /**
     * @internal
     */
    PutImageTagMutabilityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutImageTagMutabilityRequest = exports.PutImageTagMutabilityRequest || (exports.PutImageTagMutabilityRequest = {}));
var PutImageTagMutabilityResponse;
(function (PutImageTagMutabilityResponse) {
    /**
     * @internal
     */
    PutImageTagMutabilityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutImageTagMutabilityResponse = exports.PutImageTagMutabilityResponse || (exports.PutImageTagMutabilityResponse = {}));
var PutLifecyclePolicyRequest;
(function (PutLifecyclePolicyRequest) {
    /**
     * @internal
     */
    PutLifecyclePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLifecyclePolicyRequest = exports.PutLifecyclePolicyRequest || (exports.PutLifecyclePolicyRequest = {}));
var PutLifecyclePolicyResponse;
(function (PutLifecyclePolicyResponse) {
    /**
     * @internal
     */
    PutLifecyclePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLifecyclePolicyResponse = exports.PutLifecyclePolicyResponse || (exports.PutLifecyclePolicyResponse = {}));
var PutRegistryPolicyRequest;
(function (PutRegistryPolicyRequest) {
    /**
     * @internal
     */
    PutRegistryPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRegistryPolicyRequest = exports.PutRegistryPolicyRequest || (exports.PutRegistryPolicyRequest = {}));
var PutRegistryPolicyResponse;
(function (PutRegistryPolicyResponse) {
    /**
     * @internal
     */
    PutRegistryPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRegistryPolicyResponse = exports.PutRegistryPolicyResponse || (exports.PutRegistryPolicyResponse = {}));
var PutReplicationConfigurationRequest;
(function (PutReplicationConfigurationRequest) {
    /**
     * @internal
     */
    PutReplicationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutReplicationConfigurationRequest = exports.PutReplicationConfigurationRequest || (exports.PutReplicationConfigurationRequest = {}));
var PutReplicationConfigurationResponse;
(function (PutReplicationConfigurationResponse) {
    /**
     * @internal
     */
    PutReplicationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutReplicationConfigurationResponse = exports.PutReplicationConfigurationResponse || (exports.PutReplicationConfigurationResponse = {}));
var SetRepositoryPolicyRequest;
(function (SetRepositoryPolicyRequest) {
    /**
     * @internal
     */
    SetRepositoryPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetRepositoryPolicyRequest = exports.SetRepositoryPolicyRequest || (exports.SetRepositoryPolicyRequest = {}));
var SetRepositoryPolicyResponse;
(function (SetRepositoryPolicyResponse) {
    /**
     * @internal
     */
    SetRepositoryPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetRepositoryPolicyResponse = exports.SetRepositoryPolicyResponse || (exports.SetRepositoryPolicyResponse = {}));
var StartImageScanRequest;
(function (StartImageScanRequest) {
    /**
     * @internal
     */
    StartImageScanRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartImageScanRequest = exports.StartImageScanRequest || (exports.StartImageScanRequest = {}));
var StartImageScanResponse;
(function (StartImageScanResponse) {
    /**
     * @internal
     */
    StartImageScanResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartImageScanResponse = exports.StartImageScanResponse || (exports.StartImageScanResponse = {}));
var UnsupportedImageTypeException;
(function (UnsupportedImageTypeException) {
    /**
     * @internal
     */
    UnsupportedImageTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedImageTypeException = exports.UnsupportedImageTypeException || (exports.UnsupportedImageTypeException = {}));
var LifecyclePolicyPreviewInProgressException;
(function (LifecyclePolicyPreviewInProgressException) {
    /**
     * @internal
     */
    LifecyclePolicyPreviewInProgressException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecyclePolicyPreviewInProgressException = exports.LifecyclePolicyPreviewInProgressException || (exports.LifecyclePolicyPreviewInProgressException = {}));
var StartLifecyclePolicyPreviewRequest;
(function (StartLifecyclePolicyPreviewRequest) {
    /**
     * @internal
     */
    StartLifecyclePolicyPreviewRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartLifecyclePolicyPreviewRequest = exports.StartLifecyclePolicyPreviewRequest || (exports.StartLifecyclePolicyPreviewRequest = {}));
var StartLifecyclePolicyPreviewResponse;
(function (StartLifecyclePolicyPreviewResponse) {
    /**
     * @internal
     */
    StartLifecyclePolicyPreviewResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartLifecyclePolicyPreviewResponse = exports.StartLifecyclePolicyPreviewResponse || (exports.StartLifecyclePolicyPreviewResponse = {}));
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
var InvalidLayerPartException;
(function (InvalidLayerPartException) {
    /**
     * @internal
     */
    InvalidLayerPartException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidLayerPartException = exports.InvalidLayerPartException || (exports.InvalidLayerPartException = {}));
var UploadLayerPartRequest;
(function (UploadLayerPartRequest) {
    /**
     * @internal
     */
    UploadLayerPartRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadLayerPartRequest = exports.UploadLayerPartRequest || (exports.UploadLayerPartRequest = {}));
var UploadLayerPartResponse;
(function (UploadLayerPartResponse) {
    /**
     * @internal
     */
    UploadLayerPartResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadLayerPartResponse = exports.UploadLayerPartResponse || (exports.UploadLayerPartResponse = {}));
//# sourceMappingURL=models_0.js.map