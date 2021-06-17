"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistryAliasStatus = exports.DescribeRegistriesRequest = exports.DescribeImageTagsResponse = exports.ImageTagDetail = exports.ReferencedImageDetail = exports.DescribeImageTagsRequest = exports.ImageNotFoundException = exports.DescribeImagesResponse = exports.ImageDetail = exports.DescribeImagesRequest = exports.RepositoryPolicyNotFoundException = exports.DeleteRepositoryPolicyResponse = exports.DeleteRepositoryPolicyRequest = exports.RepositoryNotEmptyException = exports.DeleteRepositoryResponse = exports.DeleteRepositoryRequest = exports.TooManyTagsException = exports.RepositoryAlreadyExistsException = exports.LimitExceededException = exports.InvalidTagParameterException = exports.CreateRepositoryResponse = exports.Repository = exports.RepositoryCatalogData = exports.CreateRepositoryRequest = exports.Tag = exports.RepositoryCatalogDataInput = exports.UploadNotFoundException = exports.UnsupportedCommandException = exports.LayerPartTooSmallException = exports.LayerAlreadyExistsException = exports.InvalidLayerException = exports.EmptyUploadException = exports.CompleteLayerUploadResponse = exports.CompleteLayerUploadRequest = exports.BatchDeleteImageResponse = exports.ImageFailure = exports.ImageFailureCode = exports.BatchDeleteImageRequest = exports.ImageIdentifier = exports.ServerException = exports.RepositoryNotFoundException = exports.RegistryNotFoundException = exports.InvalidParameterException = exports.BatchCheckLayerAvailabilityResponse = exports.Layer = exports.LayerAvailability = exports.LayerFailure = exports.LayerFailureCode = exports.BatchCheckLayerAvailabilityRequest = exports.AuthorizationData = void 0;
exports.UploadLayerPartResponse = exports.UploadLayerPartRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.SetRepositoryPolicyResponse = exports.SetRepositoryPolicyRequest = exports.PutRepositoryCatalogDataResponse = exports.PutRepositoryCatalogDataRequest = exports.PutRegistryCatalogDataResponse = exports.PutRegistryCatalogDataRequest = exports.ReferencedImagesNotFoundException = exports.PutImageResponse = exports.PutImageRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.LayersNotFoundException = exports.InvalidLayerPartException = exports.InitiateLayerUploadResponse = exports.InitiateLayerUploadRequest = exports.ImageTagAlreadyExistsException = exports.ImageDigestDoesNotMatchException = exports.ImageAlreadyExistsException = exports.Image = exports.GetRepositoryPolicyResponse = exports.GetRepositoryPolicyRequest = exports.GetRepositoryCatalogDataResponse = exports.GetRepositoryCatalogDataRequest = exports.GetRegistryCatalogDataResponse = exports.RegistryCatalogData = exports.GetRegistryCatalogDataRequest = exports.GetAuthorizationTokenResponse = exports.GetAuthorizationTokenRequest = exports.DescribeRepositoriesResponse = exports.DescribeRepositoriesRequest = exports.DescribeRegistriesResponse = exports.Registry = exports.RegistryAlias = void 0;
var AuthorizationData;
(function (AuthorizationData) {
    /**
     * @internal
     */
    AuthorizationData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizationData = exports.AuthorizationData || (exports.AuthorizationData = {}));
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
var RegistryNotFoundException;
(function (RegistryNotFoundException) {
    /**
     * @internal
     */
    RegistryNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegistryNotFoundException = exports.RegistryNotFoundException || (exports.RegistryNotFoundException = {}));
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
var UnsupportedCommandException;
(function (UnsupportedCommandException) {
    /**
     * @internal
     */
    UnsupportedCommandException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedCommandException = exports.UnsupportedCommandException || (exports.UnsupportedCommandException = {}));
var UploadNotFoundException;
(function (UploadNotFoundException) {
    /**
     * @internal
     */
    UploadNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UploadNotFoundException = exports.UploadNotFoundException || (exports.UploadNotFoundException = {}));
var RepositoryCatalogDataInput;
(function (RepositoryCatalogDataInput) {
    /**
     * @internal
     */
    RepositoryCatalogDataInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryCatalogDataInput = exports.RepositoryCatalogDataInput || (exports.RepositoryCatalogDataInput = {}));
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
var RepositoryCatalogData;
(function (RepositoryCatalogData) {
    /**
     * @internal
     */
    RepositoryCatalogData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryCatalogData = exports.RepositoryCatalogData || (exports.RepositoryCatalogData = {}));
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
var DescribeImagesRequest;
(function (DescribeImagesRequest) {
    /**
     * @internal
     */
    DescribeImagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImagesRequest = exports.DescribeImagesRequest || (exports.DescribeImagesRequest = {}));
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
var DescribeImageTagsRequest;
(function (DescribeImageTagsRequest) {
    /**
     * @internal
     */
    DescribeImageTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImageTagsRequest = exports.DescribeImageTagsRequest || (exports.DescribeImageTagsRequest = {}));
var ReferencedImageDetail;
(function (ReferencedImageDetail) {
    /**
     * @internal
     */
    ReferencedImageDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReferencedImageDetail = exports.ReferencedImageDetail || (exports.ReferencedImageDetail = {}));
var ImageTagDetail;
(function (ImageTagDetail) {
    /**
     * @internal
     */
    ImageTagDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageTagDetail = exports.ImageTagDetail || (exports.ImageTagDetail = {}));
var DescribeImageTagsResponse;
(function (DescribeImageTagsResponse) {
    /**
     * @internal
     */
    DescribeImageTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeImageTagsResponse = exports.DescribeImageTagsResponse || (exports.DescribeImageTagsResponse = {}));
var DescribeRegistriesRequest;
(function (DescribeRegistriesRequest) {
    /**
     * @internal
     */
    DescribeRegistriesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRegistriesRequest = exports.DescribeRegistriesRequest || (exports.DescribeRegistriesRequest = {}));
var RegistryAliasStatus;
(function (RegistryAliasStatus) {
    RegistryAliasStatus["ACTIVE"] = "ACTIVE";
    RegistryAliasStatus["PENDING"] = "PENDING";
    RegistryAliasStatus["REJECTED"] = "REJECTED";
})(RegistryAliasStatus = exports.RegistryAliasStatus || (exports.RegistryAliasStatus = {}));
var RegistryAlias;
(function (RegistryAlias) {
    /**
     * @internal
     */
    RegistryAlias.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegistryAlias = exports.RegistryAlias || (exports.RegistryAlias = {}));
var Registry;
(function (Registry) {
    /**
     * @internal
     */
    Registry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Registry = exports.Registry || (exports.Registry = {}));
var DescribeRegistriesResponse;
(function (DescribeRegistriesResponse) {
    /**
     * @internal
     */
    DescribeRegistriesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRegistriesResponse = exports.DescribeRegistriesResponse || (exports.DescribeRegistriesResponse = {}));
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
var GetAuthorizationTokenResponse;
(function (GetAuthorizationTokenResponse) {
    /**
     * @internal
     */
    GetAuthorizationTokenResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAuthorizationTokenResponse = exports.GetAuthorizationTokenResponse || (exports.GetAuthorizationTokenResponse = {}));
var GetRegistryCatalogDataRequest;
(function (GetRegistryCatalogDataRequest) {
    /**
     * @internal
     */
    GetRegistryCatalogDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegistryCatalogDataRequest = exports.GetRegistryCatalogDataRequest || (exports.GetRegistryCatalogDataRequest = {}));
var RegistryCatalogData;
(function (RegistryCatalogData) {
    /**
     * @internal
     */
    RegistryCatalogData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegistryCatalogData = exports.RegistryCatalogData || (exports.RegistryCatalogData = {}));
var GetRegistryCatalogDataResponse;
(function (GetRegistryCatalogDataResponse) {
    /**
     * @internal
     */
    GetRegistryCatalogDataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegistryCatalogDataResponse = exports.GetRegistryCatalogDataResponse || (exports.GetRegistryCatalogDataResponse = {}));
var GetRepositoryCatalogDataRequest;
(function (GetRepositoryCatalogDataRequest) {
    /**
     * @internal
     */
    GetRepositoryCatalogDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryCatalogDataRequest = exports.GetRepositoryCatalogDataRequest || (exports.GetRepositoryCatalogDataRequest = {}));
var GetRepositoryCatalogDataResponse;
(function (GetRepositoryCatalogDataResponse) {
    /**
     * @internal
     */
    GetRepositoryCatalogDataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryCatalogDataResponse = exports.GetRepositoryCatalogDataResponse || (exports.GetRepositoryCatalogDataResponse = {}));
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
var Image;
(function (Image) {
    /**
     * @internal
     */
    Image.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Image = exports.Image || (exports.Image = {}));
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
var InvalidLayerPartException;
(function (InvalidLayerPartException) {
    /**
     * @internal
     */
    InvalidLayerPartException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidLayerPartException = exports.InvalidLayerPartException || (exports.InvalidLayerPartException = {}));
var LayersNotFoundException;
(function (LayersNotFoundException) {
    /**
     * @internal
     */
    LayersNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LayersNotFoundException = exports.LayersNotFoundException || (exports.LayersNotFoundException = {}));
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
var PutRegistryCatalogDataRequest;
(function (PutRegistryCatalogDataRequest) {
    /**
     * @internal
     */
    PutRegistryCatalogDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRegistryCatalogDataRequest = exports.PutRegistryCatalogDataRequest || (exports.PutRegistryCatalogDataRequest = {}));
var PutRegistryCatalogDataResponse;
(function (PutRegistryCatalogDataResponse) {
    /**
     * @internal
     */
    PutRegistryCatalogDataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRegistryCatalogDataResponse = exports.PutRegistryCatalogDataResponse || (exports.PutRegistryCatalogDataResponse = {}));
var PutRepositoryCatalogDataRequest;
(function (PutRepositoryCatalogDataRequest) {
    /**
     * @internal
     */
    PutRepositoryCatalogDataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRepositoryCatalogDataRequest = exports.PutRepositoryCatalogDataRequest || (exports.PutRepositoryCatalogDataRequest = {}));
var PutRepositoryCatalogDataResponse;
(function (PutRepositoryCatalogDataResponse) {
    /**
     * @internal
     */
    PutRepositoryCatalogDataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRepositoryCatalogDataResponse = exports.PutRepositoryCatalogDataResponse || (exports.PutRepositoryCatalogDataResponse = {}));
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