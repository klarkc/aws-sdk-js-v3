import { __assign } from "tslib";
export var BatchCheckLayerAvailabilityRequest;
(function (BatchCheckLayerAvailabilityRequest) {
    /**
     * @internal
     */
    BatchCheckLayerAvailabilityRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchCheckLayerAvailabilityRequest || (BatchCheckLayerAvailabilityRequest = {}));
export var LayerFailureCode;
(function (LayerFailureCode) {
    LayerFailureCode["InvalidLayerDigest"] = "InvalidLayerDigest";
    LayerFailureCode["MissingLayerDigest"] = "MissingLayerDigest";
})(LayerFailureCode || (LayerFailureCode = {}));
export var LayerFailure;
(function (LayerFailure) {
    /**
     * @internal
     */
    LayerFailure.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LayerFailure || (LayerFailure = {}));
export var LayerAvailability;
(function (LayerAvailability) {
    LayerAvailability["AVAILABLE"] = "AVAILABLE";
    LayerAvailability["UNAVAILABLE"] = "UNAVAILABLE";
})(LayerAvailability || (LayerAvailability = {}));
export var Layer;
(function (Layer) {
    /**
     * @internal
     */
    Layer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Layer || (Layer = {}));
export var BatchCheckLayerAvailabilityResponse;
(function (BatchCheckLayerAvailabilityResponse) {
    /**
     * @internal
     */
    BatchCheckLayerAvailabilityResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchCheckLayerAvailabilityResponse || (BatchCheckLayerAvailabilityResponse = {}));
export var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterException || (InvalidParameterException = {}));
export var RepositoryNotFoundException;
(function (RepositoryNotFoundException) {
    /**
     * @internal
     */
    RepositoryNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepositoryNotFoundException || (RepositoryNotFoundException = {}));
export var ServerException;
(function (ServerException) {
    /**
     * @internal
     */
    ServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerException || (ServerException = {}));
export var ImageIdentifier;
(function (ImageIdentifier) {
    /**
     * @internal
     */
    ImageIdentifier.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageIdentifier || (ImageIdentifier = {}));
export var BatchDeleteImageRequest;
(function (BatchDeleteImageRequest) {
    /**
     * @internal
     */
    BatchDeleteImageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteImageRequest || (BatchDeleteImageRequest = {}));
export var ImageFailureCode;
(function (ImageFailureCode) {
    ImageFailureCode["ImageNotFound"] = "ImageNotFound";
    ImageFailureCode["ImageReferencedByManifestList"] = "ImageReferencedByManifestList";
    ImageFailureCode["ImageTagDoesNotMatchDigest"] = "ImageTagDoesNotMatchDigest";
    ImageFailureCode["InvalidImageDigest"] = "InvalidImageDigest";
    ImageFailureCode["InvalidImageTag"] = "InvalidImageTag";
    ImageFailureCode["KmsError"] = "KmsError";
    ImageFailureCode["MissingDigestAndTag"] = "MissingDigestAndTag";
})(ImageFailureCode || (ImageFailureCode = {}));
export var ImageFailure;
(function (ImageFailure) {
    /**
     * @internal
     */
    ImageFailure.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageFailure || (ImageFailure = {}));
export var BatchDeleteImageResponse;
(function (BatchDeleteImageResponse) {
    /**
     * @internal
     */
    BatchDeleteImageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteImageResponse || (BatchDeleteImageResponse = {}));
export var BatchGetImageRequest;
(function (BatchGetImageRequest) {
    /**
     * @internal
     */
    BatchGetImageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetImageRequest || (BatchGetImageRequest = {}));
export var Image;
(function (Image) {
    /**
     * @internal
     */
    Image.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Image || (Image = {}));
export var BatchGetImageResponse;
(function (BatchGetImageResponse) {
    /**
     * @internal
     */
    BatchGetImageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetImageResponse || (BatchGetImageResponse = {}));
export var CompleteLayerUploadRequest;
(function (CompleteLayerUploadRequest) {
    /**
     * @internal
     */
    CompleteLayerUploadRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompleteLayerUploadRequest || (CompleteLayerUploadRequest = {}));
export var CompleteLayerUploadResponse;
(function (CompleteLayerUploadResponse) {
    /**
     * @internal
     */
    CompleteLayerUploadResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CompleteLayerUploadResponse || (CompleteLayerUploadResponse = {}));
export var EmptyUploadException;
(function (EmptyUploadException) {
    /**
     * @internal
     */
    EmptyUploadException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmptyUploadException || (EmptyUploadException = {}));
export var InvalidLayerException;
(function (InvalidLayerException) {
    /**
     * @internal
     */
    InvalidLayerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidLayerException || (InvalidLayerException = {}));
export var KmsException;
(function (KmsException) {
    /**
     * @internal
     */
    KmsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KmsException || (KmsException = {}));
export var LayerAlreadyExistsException;
(function (LayerAlreadyExistsException) {
    /**
     * @internal
     */
    LayerAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LayerAlreadyExistsException || (LayerAlreadyExistsException = {}));
export var LayerPartTooSmallException;
(function (LayerPartTooSmallException) {
    /**
     * @internal
     */
    LayerPartTooSmallException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LayerPartTooSmallException || (LayerPartTooSmallException = {}));
export var UploadNotFoundException;
(function (UploadNotFoundException) {
    /**
     * @internal
     */
    UploadNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UploadNotFoundException || (UploadNotFoundException = {}));
export var EncryptionType;
(function (EncryptionType) {
    EncryptionType["AES256"] = "AES256";
    EncryptionType["KMS"] = "KMS";
})(EncryptionType || (EncryptionType = {}));
export var EncryptionConfiguration;
(function (EncryptionConfiguration) {
    /**
     * @internal
     */
    EncryptionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncryptionConfiguration || (EncryptionConfiguration = {}));
export var ImageScanningConfiguration;
(function (ImageScanningConfiguration) {
    /**
     * @internal
     */
    ImageScanningConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageScanningConfiguration || (ImageScanningConfiguration = {}));
export var ImageTagMutability;
(function (ImageTagMutability) {
    ImageTagMutability["IMMUTABLE"] = "IMMUTABLE";
    ImageTagMutability["MUTABLE"] = "MUTABLE";
})(ImageTagMutability || (ImageTagMutability = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateRepositoryRequest;
(function (CreateRepositoryRequest) {
    /**
     * @internal
     */
    CreateRepositoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRepositoryRequest || (CreateRepositoryRequest = {}));
export var Repository;
(function (Repository) {
    /**
     * @internal
     */
    Repository.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Repository || (Repository = {}));
export var CreateRepositoryResponse;
(function (CreateRepositoryResponse) {
    /**
     * @internal
     */
    CreateRepositoryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRepositoryResponse || (CreateRepositoryResponse = {}));
export var InvalidTagParameterException;
(function (InvalidTagParameterException) {
    /**
     * @internal
     */
    InvalidTagParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidTagParameterException || (InvalidTagParameterException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var RepositoryAlreadyExistsException;
(function (RepositoryAlreadyExistsException) {
    /**
     * @internal
     */
    RepositoryAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepositoryAlreadyExistsException || (RepositoryAlreadyExistsException = {}));
export var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyTagsException || (TooManyTagsException = {}));
export var DeleteLifecyclePolicyRequest;
(function (DeleteLifecyclePolicyRequest) {
    /**
     * @internal
     */
    DeleteLifecyclePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLifecyclePolicyRequest || (DeleteLifecyclePolicyRequest = {}));
export var DeleteLifecyclePolicyResponse;
(function (DeleteLifecyclePolicyResponse) {
    /**
     * @internal
     */
    DeleteLifecyclePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLifecyclePolicyResponse || (DeleteLifecyclePolicyResponse = {}));
export var LifecyclePolicyNotFoundException;
(function (LifecyclePolicyNotFoundException) {
    /**
     * @internal
     */
    LifecyclePolicyNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifecyclePolicyNotFoundException || (LifecyclePolicyNotFoundException = {}));
export var DeleteRegistryPolicyRequest;
(function (DeleteRegistryPolicyRequest) {
    /**
     * @internal
     */
    DeleteRegistryPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRegistryPolicyRequest || (DeleteRegistryPolicyRequest = {}));
export var DeleteRegistryPolicyResponse;
(function (DeleteRegistryPolicyResponse) {
    /**
     * @internal
     */
    DeleteRegistryPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRegistryPolicyResponse || (DeleteRegistryPolicyResponse = {}));
export var RegistryPolicyNotFoundException;
(function (RegistryPolicyNotFoundException) {
    /**
     * @internal
     */
    RegistryPolicyNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegistryPolicyNotFoundException || (RegistryPolicyNotFoundException = {}));
export var DeleteRepositoryRequest;
(function (DeleteRepositoryRequest) {
    /**
     * @internal
     */
    DeleteRepositoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRepositoryRequest || (DeleteRepositoryRequest = {}));
export var DeleteRepositoryResponse;
(function (DeleteRepositoryResponse) {
    /**
     * @internal
     */
    DeleteRepositoryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRepositoryResponse || (DeleteRepositoryResponse = {}));
export var RepositoryNotEmptyException;
(function (RepositoryNotEmptyException) {
    /**
     * @internal
     */
    RepositoryNotEmptyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepositoryNotEmptyException || (RepositoryNotEmptyException = {}));
export var DeleteRepositoryPolicyRequest;
(function (DeleteRepositoryPolicyRequest) {
    /**
     * @internal
     */
    DeleteRepositoryPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRepositoryPolicyRequest || (DeleteRepositoryPolicyRequest = {}));
export var DeleteRepositoryPolicyResponse;
(function (DeleteRepositoryPolicyResponse) {
    /**
     * @internal
     */
    DeleteRepositoryPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRepositoryPolicyResponse || (DeleteRepositoryPolicyResponse = {}));
export var RepositoryPolicyNotFoundException;
(function (RepositoryPolicyNotFoundException) {
    /**
     * @internal
     */
    RepositoryPolicyNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepositoryPolicyNotFoundException || (RepositoryPolicyNotFoundException = {}));
export var TagStatus;
(function (TagStatus) {
    TagStatus["ANY"] = "ANY";
    TagStatus["TAGGED"] = "TAGGED";
    TagStatus["UNTAGGED"] = "UNTAGGED";
})(TagStatus || (TagStatus = {}));
export var DescribeImagesFilter;
(function (DescribeImagesFilter) {
    /**
     * @internal
     */
    DescribeImagesFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeImagesFilter || (DescribeImagesFilter = {}));
export var DescribeImagesRequest;
(function (DescribeImagesRequest) {
    /**
     * @internal
     */
    DescribeImagesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeImagesRequest || (DescribeImagesRequest = {}));
export var FindingSeverity;
(function (FindingSeverity) {
    FindingSeverity["CRITICAL"] = "CRITICAL";
    FindingSeverity["HIGH"] = "HIGH";
    FindingSeverity["INFORMATIONAL"] = "INFORMATIONAL";
    FindingSeverity["LOW"] = "LOW";
    FindingSeverity["MEDIUM"] = "MEDIUM";
    FindingSeverity["UNDEFINED"] = "UNDEFINED";
})(FindingSeverity || (FindingSeverity = {}));
export var ImageScanFindingsSummary;
(function (ImageScanFindingsSummary) {
    /**
     * @internal
     */
    ImageScanFindingsSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageScanFindingsSummary || (ImageScanFindingsSummary = {}));
export var ScanStatus;
(function (ScanStatus) {
    ScanStatus["COMPLETE"] = "COMPLETE";
    ScanStatus["FAILED"] = "FAILED";
    ScanStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(ScanStatus || (ScanStatus = {}));
export var ImageScanStatus;
(function (ImageScanStatus) {
    /**
     * @internal
     */
    ImageScanStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageScanStatus || (ImageScanStatus = {}));
export var ImageDetail;
(function (ImageDetail) {
    /**
     * @internal
     */
    ImageDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageDetail || (ImageDetail = {}));
export var DescribeImagesResponse;
(function (DescribeImagesResponse) {
    /**
     * @internal
     */
    DescribeImagesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeImagesResponse || (DescribeImagesResponse = {}));
export var ImageNotFoundException;
(function (ImageNotFoundException) {
    /**
     * @internal
     */
    ImageNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageNotFoundException || (ImageNotFoundException = {}));
export var DescribeImageScanFindingsRequest;
(function (DescribeImageScanFindingsRequest) {
    /**
     * @internal
     */
    DescribeImageScanFindingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeImageScanFindingsRequest || (DescribeImageScanFindingsRequest = {}));
export var Attribute;
(function (Attribute) {
    /**
     * @internal
     */
    Attribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Attribute || (Attribute = {}));
export var ImageScanFinding;
(function (ImageScanFinding) {
    /**
     * @internal
     */
    ImageScanFinding.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageScanFinding || (ImageScanFinding = {}));
export var ImageScanFindings;
(function (ImageScanFindings) {
    /**
     * @internal
     */
    ImageScanFindings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageScanFindings || (ImageScanFindings = {}));
export var DescribeImageScanFindingsResponse;
(function (DescribeImageScanFindingsResponse) {
    /**
     * @internal
     */
    DescribeImageScanFindingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeImageScanFindingsResponse || (DescribeImageScanFindingsResponse = {}));
export var ScanNotFoundException;
(function (ScanNotFoundException) {
    /**
     * @internal
     */
    ScanNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ScanNotFoundException || (ScanNotFoundException = {}));
export var DescribeRegistryRequest;
(function (DescribeRegistryRequest) {
    /**
     * @internal
     */
    DescribeRegistryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRegistryRequest || (DescribeRegistryRequest = {}));
export var ReplicationDestination;
(function (ReplicationDestination) {
    /**
     * @internal
     */
    ReplicationDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationDestination || (ReplicationDestination = {}));
export var ReplicationRule;
(function (ReplicationRule) {
    /**
     * @internal
     */
    ReplicationRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationRule || (ReplicationRule = {}));
export var ReplicationConfiguration;
(function (ReplicationConfiguration) {
    /**
     * @internal
     */
    ReplicationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationConfiguration || (ReplicationConfiguration = {}));
export var DescribeRegistryResponse;
(function (DescribeRegistryResponse) {
    /**
     * @internal
     */
    DescribeRegistryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRegistryResponse || (DescribeRegistryResponse = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var DescribeRepositoriesRequest;
(function (DescribeRepositoriesRequest) {
    /**
     * @internal
     */
    DescribeRepositoriesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRepositoriesRequest || (DescribeRepositoriesRequest = {}));
export var DescribeRepositoriesResponse;
(function (DescribeRepositoriesResponse) {
    /**
     * @internal
     */
    DescribeRepositoriesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRepositoriesResponse || (DescribeRepositoriesResponse = {}));
export var GetAuthorizationTokenRequest;
(function (GetAuthorizationTokenRequest) {
    /**
     * @internal
     */
    GetAuthorizationTokenRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAuthorizationTokenRequest || (GetAuthorizationTokenRequest = {}));
export var AuthorizationData;
(function (AuthorizationData) {
    /**
     * @internal
     */
    AuthorizationData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuthorizationData || (AuthorizationData = {}));
export var GetAuthorizationTokenResponse;
(function (GetAuthorizationTokenResponse) {
    /**
     * @internal
     */
    GetAuthorizationTokenResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAuthorizationTokenResponse || (GetAuthorizationTokenResponse = {}));
export var GetDownloadUrlForLayerRequest;
(function (GetDownloadUrlForLayerRequest) {
    /**
     * @internal
     */
    GetDownloadUrlForLayerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDownloadUrlForLayerRequest || (GetDownloadUrlForLayerRequest = {}));
export var GetDownloadUrlForLayerResponse;
(function (GetDownloadUrlForLayerResponse) {
    /**
     * @internal
     */
    GetDownloadUrlForLayerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDownloadUrlForLayerResponse || (GetDownloadUrlForLayerResponse = {}));
export var LayerInaccessibleException;
(function (LayerInaccessibleException) {
    /**
     * @internal
     */
    LayerInaccessibleException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LayerInaccessibleException || (LayerInaccessibleException = {}));
export var LayersNotFoundException;
(function (LayersNotFoundException) {
    /**
     * @internal
     */
    LayersNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LayersNotFoundException || (LayersNotFoundException = {}));
export var GetLifecyclePolicyRequest;
(function (GetLifecyclePolicyRequest) {
    /**
     * @internal
     */
    GetLifecyclePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLifecyclePolicyRequest || (GetLifecyclePolicyRequest = {}));
export var GetLifecyclePolicyResponse;
(function (GetLifecyclePolicyResponse) {
    /**
     * @internal
     */
    GetLifecyclePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLifecyclePolicyResponse || (GetLifecyclePolicyResponse = {}));
export var LifecyclePolicyPreviewFilter;
(function (LifecyclePolicyPreviewFilter) {
    /**
     * @internal
     */
    LifecyclePolicyPreviewFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifecyclePolicyPreviewFilter || (LifecyclePolicyPreviewFilter = {}));
export var GetLifecyclePolicyPreviewRequest;
(function (GetLifecyclePolicyPreviewRequest) {
    /**
     * @internal
     */
    GetLifecyclePolicyPreviewRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLifecyclePolicyPreviewRequest || (GetLifecyclePolicyPreviewRequest = {}));
export var ImageActionType;
(function (ImageActionType) {
    ImageActionType["EXPIRE"] = "EXPIRE";
})(ImageActionType || (ImageActionType = {}));
export var LifecyclePolicyRuleAction;
(function (LifecyclePolicyRuleAction) {
    /**
     * @internal
     */
    LifecyclePolicyRuleAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifecyclePolicyRuleAction || (LifecyclePolicyRuleAction = {}));
export var LifecyclePolicyPreviewResult;
(function (LifecyclePolicyPreviewResult) {
    /**
     * @internal
     */
    LifecyclePolicyPreviewResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifecyclePolicyPreviewResult || (LifecyclePolicyPreviewResult = {}));
export var LifecyclePolicyPreviewStatus;
(function (LifecyclePolicyPreviewStatus) {
    LifecyclePolicyPreviewStatus["COMPLETE"] = "COMPLETE";
    LifecyclePolicyPreviewStatus["EXPIRED"] = "EXPIRED";
    LifecyclePolicyPreviewStatus["FAILED"] = "FAILED";
    LifecyclePolicyPreviewStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(LifecyclePolicyPreviewStatus || (LifecyclePolicyPreviewStatus = {}));
export var LifecyclePolicyPreviewSummary;
(function (LifecyclePolicyPreviewSummary) {
    /**
     * @internal
     */
    LifecyclePolicyPreviewSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifecyclePolicyPreviewSummary || (LifecyclePolicyPreviewSummary = {}));
export var GetLifecyclePolicyPreviewResponse;
(function (GetLifecyclePolicyPreviewResponse) {
    /**
     * @internal
     */
    GetLifecyclePolicyPreviewResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLifecyclePolicyPreviewResponse || (GetLifecyclePolicyPreviewResponse = {}));
export var LifecyclePolicyPreviewNotFoundException;
(function (LifecyclePolicyPreviewNotFoundException) {
    /**
     * @internal
     */
    LifecyclePolicyPreviewNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifecyclePolicyPreviewNotFoundException || (LifecyclePolicyPreviewNotFoundException = {}));
export var GetRegistryPolicyRequest;
(function (GetRegistryPolicyRequest) {
    /**
     * @internal
     */
    GetRegistryPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRegistryPolicyRequest || (GetRegistryPolicyRequest = {}));
export var GetRegistryPolicyResponse;
(function (GetRegistryPolicyResponse) {
    /**
     * @internal
     */
    GetRegistryPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRegistryPolicyResponse || (GetRegistryPolicyResponse = {}));
export var GetRepositoryPolicyRequest;
(function (GetRepositoryPolicyRequest) {
    /**
     * @internal
     */
    GetRepositoryPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRepositoryPolicyRequest || (GetRepositoryPolicyRequest = {}));
export var GetRepositoryPolicyResponse;
(function (GetRepositoryPolicyResponse) {
    /**
     * @internal
     */
    GetRepositoryPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRepositoryPolicyResponse || (GetRepositoryPolicyResponse = {}));
export var InitiateLayerUploadRequest;
(function (InitiateLayerUploadRequest) {
    /**
     * @internal
     */
    InitiateLayerUploadRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InitiateLayerUploadRequest || (InitiateLayerUploadRequest = {}));
export var InitiateLayerUploadResponse;
(function (InitiateLayerUploadResponse) {
    /**
     * @internal
     */
    InitiateLayerUploadResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InitiateLayerUploadResponse || (InitiateLayerUploadResponse = {}));
export var ListImagesFilter;
(function (ListImagesFilter) {
    /**
     * @internal
     */
    ListImagesFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImagesFilter || (ListImagesFilter = {}));
export var ListImagesRequest;
(function (ListImagesRequest) {
    /**
     * @internal
     */
    ListImagesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImagesRequest || (ListImagesRequest = {}));
export var ListImagesResponse;
(function (ListImagesResponse) {
    /**
     * @internal
     */
    ListImagesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImagesResponse || (ListImagesResponse = {}));
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
export var ImageAlreadyExistsException;
(function (ImageAlreadyExistsException) {
    /**
     * @internal
     */
    ImageAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageAlreadyExistsException || (ImageAlreadyExistsException = {}));
export var ImageDigestDoesNotMatchException;
(function (ImageDigestDoesNotMatchException) {
    /**
     * @internal
     */
    ImageDigestDoesNotMatchException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageDigestDoesNotMatchException || (ImageDigestDoesNotMatchException = {}));
export var ImageTagAlreadyExistsException;
(function (ImageTagAlreadyExistsException) {
    /**
     * @internal
     */
    ImageTagAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageTagAlreadyExistsException || (ImageTagAlreadyExistsException = {}));
export var PutImageRequest;
(function (PutImageRequest) {
    /**
     * @internal
     */
    PutImageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutImageRequest || (PutImageRequest = {}));
export var PutImageResponse;
(function (PutImageResponse) {
    /**
     * @internal
     */
    PutImageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutImageResponse || (PutImageResponse = {}));
export var ReferencedImagesNotFoundException;
(function (ReferencedImagesNotFoundException) {
    /**
     * @internal
     */
    ReferencedImagesNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReferencedImagesNotFoundException || (ReferencedImagesNotFoundException = {}));
export var PutImageScanningConfigurationRequest;
(function (PutImageScanningConfigurationRequest) {
    /**
     * @internal
     */
    PutImageScanningConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutImageScanningConfigurationRequest || (PutImageScanningConfigurationRequest = {}));
export var PutImageScanningConfigurationResponse;
(function (PutImageScanningConfigurationResponse) {
    /**
     * @internal
     */
    PutImageScanningConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutImageScanningConfigurationResponse || (PutImageScanningConfigurationResponse = {}));
export var PutImageTagMutabilityRequest;
(function (PutImageTagMutabilityRequest) {
    /**
     * @internal
     */
    PutImageTagMutabilityRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutImageTagMutabilityRequest || (PutImageTagMutabilityRequest = {}));
export var PutImageTagMutabilityResponse;
(function (PutImageTagMutabilityResponse) {
    /**
     * @internal
     */
    PutImageTagMutabilityResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutImageTagMutabilityResponse || (PutImageTagMutabilityResponse = {}));
export var PutLifecyclePolicyRequest;
(function (PutLifecyclePolicyRequest) {
    /**
     * @internal
     */
    PutLifecyclePolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutLifecyclePolicyRequest || (PutLifecyclePolicyRequest = {}));
export var PutLifecyclePolicyResponse;
(function (PutLifecyclePolicyResponse) {
    /**
     * @internal
     */
    PutLifecyclePolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutLifecyclePolicyResponse || (PutLifecyclePolicyResponse = {}));
export var PutRegistryPolicyRequest;
(function (PutRegistryPolicyRequest) {
    /**
     * @internal
     */
    PutRegistryPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRegistryPolicyRequest || (PutRegistryPolicyRequest = {}));
export var PutRegistryPolicyResponse;
(function (PutRegistryPolicyResponse) {
    /**
     * @internal
     */
    PutRegistryPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRegistryPolicyResponse || (PutRegistryPolicyResponse = {}));
export var PutReplicationConfigurationRequest;
(function (PutReplicationConfigurationRequest) {
    /**
     * @internal
     */
    PutReplicationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutReplicationConfigurationRequest || (PutReplicationConfigurationRequest = {}));
export var PutReplicationConfigurationResponse;
(function (PutReplicationConfigurationResponse) {
    /**
     * @internal
     */
    PutReplicationConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutReplicationConfigurationResponse || (PutReplicationConfigurationResponse = {}));
export var SetRepositoryPolicyRequest;
(function (SetRepositoryPolicyRequest) {
    /**
     * @internal
     */
    SetRepositoryPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetRepositoryPolicyRequest || (SetRepositoryPolicyRequest = {}));
export var SetRepositoryPolicyResponse;
(function (SetRepositoryPolicyResponse) {
    /**
     * @internal
     */
    SetRepositoryPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetRepositoryPolicyResponse || (SetRepositoryPolicyResponse = {}));
export var StartImageScanRequest;
(function (StartImageScanRequest) {
    /**
     * @internal
     */
    StartImageScanRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartImageScanRequest || (StartImageScanRequest = {}));
export var StartImageScanResponse;
(function (StartImageScanResponse) {
    /**
     * @internal
     */
    StartImageScanResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartImageScanResponse || (StartImageScanResponse = {}));
export var UnsupportedImageTypeException;
(function (UnsupportedImageTypeException) {
    /**
     * @internal
     */
    UnsupportedImageTypeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedImageTypeException || (UnsupportedImageTypeException = {}));
export var LifecyclePolicyPreviewInProgressException;
(function (LifecyclePolicyPreviewInProgressException) {
    /**
     * @internal
     */
    LifecyclePolicyPreviewInProgressException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifecyclePolicyPreviewInProgressException || (LifecyclePolicyPreviewInProgressException = {}));
export var StartLifecyclePolicyPreviewRequest;
(function (StartLifecyclePolicyPreviewRequest) {
    /**
     * @internal
     */
    StartLifecyclePolicyPreviewRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartLifecyclePolicyPreviewRequest || (StartLifecyclePolicyPreviewRequest = {}));
export var StartLifecyclePolicyPreviewResponse;
(function (StartLifecyclePolicyPreviewResponse) {
    /**
     * @internal
     */
    StartLifecyclePolicyPreviewResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartLifecyclePolicyPreviewResponse || (StartLifecyclePolicyPreviewResponse = {}));
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
export var InvalidLayerPartException;
(function (InvalidLayerPartException) {
    /**
     * @internal
     */
    InvalidLayerPartException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidLayerPartException || (InvalidLayerPartException = {}));
export var UploadLayerPartRequest;
(function (UploadLayerPartRequest) {
    /**
     * @internal
     */
    UploadLayerPartRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UploadLayerPartRequest || (UploadLayerPartRequest = {}));
export var UploadLayerPartResponse;
(function (UploadLayerPartResponse) {
    /**
     * @internal
     */
    UploadLayerPartResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UploadLayerPartResponse || (UploadLayerPartResponse = {}));
//# sourceMappingURL=models_0.js.map