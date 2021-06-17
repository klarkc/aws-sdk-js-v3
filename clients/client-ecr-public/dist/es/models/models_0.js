import { __assign } from "tslib";
export var AuthorizationData;
(function (AuthorizationData) {
    /**
     * @internal
     */
    AuthorizationData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AuthorizationData || (AuthorizationData = {}));
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
export var RegistryNotFoundException;
(function (RegistryNotFoundException) {
    /**
     * @internal
     */
    RegistryNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegistryNotFoundException || (RegistryNotFoundException = {}));
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
export var UnsupportedCommandException;
(function (UnsupportedCommandException) {
    /**
     * @internal
     */
    UnsupportedCommandException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedCommandException || (UnsupportedCommandException = {}));
export var UploadNotFoundException;
(function (UploadNotFoundException) {
    /**
     * @internal
     */
    UploadNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UploadNotFoundException || (UploadNotFoundException = {}));
export var RepositoryCatalogDataInput;
(function (RepositoryCatalogDataInput) {
    /**
     * @internal
     */
    RepositoryCatalogDataInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepositoryCatalogDataInput || (RepositoryCatalogDataInput = {}));
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
export var RepositoryCatalogData;
(function (RepositoryCatalogData) {
    /**
     * @internal
     */
    RepositoryCatalogData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepositoryCatalogData || (RepositoryCatalogData = {}));
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
export var DescribeImagesRequest;
(function (DescribeImagesRequest) {
    /**
     * @internal
     */
    DescribeImagesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeImagesRequest || (DescribeImagesRequest = {}));
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
export var DescribeImageTagsRequest;
(function (DescribeImageTagsRequest) {
    /**
     * @internal
     */
    DescribeImageTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeImageTagsRequest || (DescribeImageTagsRequest = {}));
export var ReferencedImageDetail;
(function (ReferencedImageDetail) {
    /**
     * @internal
     */
    ReferencedImageDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReferencedImageDetail || (ReferencedImageDetail = {}));
export var ImageTagDetail;
(function (ImageTagDetail) {
    /**
     * @internal
     */
    ImageTagDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageTagDetail || (ImageTagDetail = {}));
export var DescribeImageTagsResponse;
(function (DescribeImageTagsResponse) {
    /**
     * @internal
     */
    DescribeImageTagsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeImageTagsResponse || (DescribeImageTagsResponse = {}));
export var DescribeRegistriesRequest;
(function (DescribeRegistriesRequest) {
    /**
     * @internal
     */
    DescribeRegistriesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRegistriesRequest || (DescribeRegistriesRequest = {}));
export var RegistryAliasStatus;
(function (RegistryAliasStatus) {
    RegistryAliasStatus["ACTIVE"] = "ACTIVE";
    RegistryAliasStatus["PENDING"] = "PENDING";
    RegistryAliasStatus["REJECTED"] = "REJECTED";
})(RegistryAliasStatus || (RegistryAliasStatus = {}));
export var RegistryAlias;
(function (RegistryAlias) {
    /**
     * @internal
     */
    RegistryAlias.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegistryAlias || (RegistryAlias = {}));
export var Registry;
(function (Registry) {
    /**
     * @internal
     */
    Registry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Registry || (Registry = {}));
export var DescribeRegistriesResponse;
(function (DescribeRegistriesResponse) {
    /**
     * @internal
     */
    DescribeRegistriesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRegistriesResponse || (DescribeRegistriesResponse = {}));
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
export var GetAuthorizationTokenResponse;
(function (GetAuthorizationTokenResponse) {
    /**
     * @internal
     */
    GetAuthorizationTokenResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAuthorizationTokenResponse || (GetAuthorizationTokenResponse = {}));
export var GetRegistryCatalogDataRequest;
(function (GetRegistryCatalogDataRequest) {
    /**
     * @internal
     */
    GetRegistryCatalogDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRegistryCatalogDataRequest || (GetRegistryCatalogDataRequest = {}));
export var RegistryCatalogData;
(function (RegistryCatalogData) {
    /**
     * @internal
     */
    RegistryCatalogData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegistryCatalogData || (RegistryCatalogData = {}));
export var GetRegistryCatalogDataResponse;
(function (GetRegistryCatalogDataResponse) {
    /**
     * @internal
     */
    GetRegistryCatalogDataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRegistryCatalogDataResponse || (GetRegistryCatalogDataResponse = {}));
export var GetRepositoryCatalogDataRequest;
(function (GetRepositoryCatalogDataRequest) {
    /**
     * @internal
     */
    GetRepositoryCatalogDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRepositoryCatalogDataRequest || (GetRepositoryCatalogDataRequest = {}));
export var GetRepositoryCatalogDataResponse;
(function (GetRepositoryCatalogDataResponse) {
    /**
     * @internal
     */
    GetRepositoryCatalogDataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRepositoryCatalogDataResponse || (GetRepositoryCatalogDataResponse = {}));
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
export var Image;
(function (Image) {
    /**
     * @internal
     */
    Image.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Image || (Image = {}));
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
export var InvalidLayerPartException;
(function (InvalidLayerPartException) {
    /**
     * @internal
     */
    InvalidLayerPartException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidLayerPartException || (InvalidLayerPartException = {}));
export var LayersNotFoundException;
(function (LayersNotFoundException) {
    /**
     * @internal
     */
    LayersNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LayersNotFoundException || (LayersNotFoundException = {}));
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
export var PutRegistryCatalogDataRequest;
(function (PutRegistryCatalogDataRequest) {
    /**
     * @internal
     */
    PutRegistryCatalogDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRegistryCatalogDataRequest || (PutRegistryCatalogDataRequest = {}));
export var PutRegistryCatalogDataResponse;
(function (PutRegistryCatalogDataResponse) {
    /**
     * @internal
     */
    PutRegistryCatalogDataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRegistryCatalogDataResponse || (PutRegistryCatalogDataResponse = {}));
export var PutRepositoryCatalogDataRequest;
(function (PutRepositoryCatalogDataRequest) {
    /**
     * @internal
     */
    PutRepositoryCatalogDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRepositoryCatalogDataRequest || (PutRepositoryCatalogDataRequest = {}));
export var PutRepositoryCatalogDataResponse;
(function (PutRepositoryCatalogDataResponse) {
    /**
     * @internal
     */
    PutRepositoryCatalogDataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRepositoryCatalogDataResponse || (PutRepositoryCatalogDataResponse = {}));
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