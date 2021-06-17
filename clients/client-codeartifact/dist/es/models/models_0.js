import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var HashAlgorithm;
(function (HashAlgorithm) {
    HashAlgorithm["MD5"] = "MD5";
    HashAlgorithm["SHA1"] = "SHA-1";
    HashAlgorithm["SHA256"] = "SHA-256";
    HashAlgorithm["SHA512"] = "SHA-512";
})(HashAlgorithm || (HashAlgorithm = {}));
export var AssetSummary;
(function (AssetSummary) {
    /**
     * @internal
     */
    AssetSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssetSummary || (AssetSummary = {}));
export var AssociateExternalConnectionRequest;
(function (AssociateExternalConnectionRequest) {
    /**
     * @internal
     */
    AssociateExternalConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateExternalConnectionRequest || (AssociateExternalConnectionRequest = {}));
export var PackageFormat;
(function (PackageFormat) {
    PackageFormat["MAVEN"] = "maven";
    PackageFormat["NPM"] = "npm";
    PackageFormat["NUGET"] = "nuget";
    PackageFormat["PYPI"] = "pypi";
})(PackageFormat || (PackageFormat = {}));
export var ExternalConnectionStatus;
(function (ExternalConnectionStatus) {
    ExternalConnectionStatus["AVAILABLE"] = "Available";
})(ExternalConnectionStatus || (ExternalConnectionStatus = {}));
export var RepositoryExternalConnectionInfo;
(function (RepositoryExternalConnectionInfo) {
    /**
     * @internal
     */
    RepositoryExternalConnectionInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepositoryExternalConnectionInfo || (RepositoryExternalConnectionInfo = {}));
export var UpstreamRepositoryInfo;
(function (UpstreamRepositoryInfo) {
    /**
     * @internal
     */
    UpstreamRepositoryInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpstreamRepositoryInfo || (UpstreamRepositoryInfo = {}));
export var RepositoryDescription;
(function (RepositoryDescription) {
    /**
     * @internal
     */
    RepositoryDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepositoryDescription || (RepositoryDescription = {}));
export var AssociateExternalConnectionResult;
(function (AssociateExternalConnectionResult) {
    /**
     * @internal
     */
    AssociateExternalConnectionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateExternalConnectionResult || (AssociateExternalConnectionResult = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["ASSET"] = "asset";
    ResourceType["DOMAIN"] = "domain";
    ResourceType["PACKAGE"] = "package";
    ResourceType["PACKAGE_VERSION"] = "package-version";
    ResourceType["REPOSITORY"] = "repository";
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
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationExceptionReason;
(function (ValidationExceptionReason) {
    ValidationExceptionReason["CANNOT_PARSE"] = "CANNOT_PARSE";
    ValidationExceptionReason["ENCRYPTION_KEY_ERROR"] = "ENCRYPTION_KEY_ERROR";
    ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "FIELD_VALIDATION_FAILED";
    ValidationExceptionReason["OTHER"] = "OTHER";
    ValidationExceptionReason["UNKNOWN_OPERATION"] = "UNKNOWN_OPERATION";
})(ValidationExceptionReason || (ValidationExceptionReason = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var CopyPackageVersionsRequest;
(function (CopyPackageVersionsRequest) {
    /**
     * @internal
     */
    CopyPackageVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CopyPackageVersionsRequest || (CopyPackageVersionsRequest = {}));
export var PackageVersionErrorCode;
(function (PackageVersionErrorCode) {
    PackageVersionErrorCode["ALREADY_EXISTS"] = "ALREADY_EXISTS";
    PackageVersionErrorCode["MISMATCHED_REVISION"] = "MISMATCHED_REVISION";
    PackageVersionErrorCode["MISMATCHED_STATUS"] = "MISMATCHED_STATUS";
    PackageVersionErrorCode["NOT_ALLOWED"] = "NOT_ALLOWED";
    PackageVersionErrorCode["NOT_FOUND"] = "NOT_FOUND";
    PackageVersionErrorCode["SKIPPED"] = "SKIPPED";
})(PackageVersionErrorCode || (PackageVersionErrorCode = {}));
export var PackageVersionError;
(function (PackageVersionError) {
    /**
     * @internal
     */
    PackageVersionError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PackageVersionError || (PackageVersionError = {}));
export var PackageVersionStatus;
(function (PackageVersionStatus) {
    PackageVersionStatus["ARCHIVED"] = "Archived";
    PackageVersionStatus["DELETED"] = "Deleted";
    PackageVersionStatus["DISPOSED"] = "Disposed";
    PackageVersionStatus["PUBLISHED"] = "Published";
    PackageVersionStatus["UNFINISHED"] = "Unfinished";
    PackageVersionStatus["UNLISTED"] = "Unlisted";
})(PackageVersionStatus || (PackageVersionStatus = {}));
export var SuccessfulPackageVersionInfo;
(function (SuccessfulPackageVersionInfo) {
    /**
     * @internal
     */
    SuccessfulPackageVersionInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SuccessfulPackageVersionInfo || (SuccessfulPackageVersionInfo = {}));
export var CopyPackageVersionsResult;
(function (CopyPackageVersionsResult) {
    /**
     * @internal
     */
    CopyPackageVersionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CopyPackageVersionsResult || (CopyPackageVersionsResult = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateDomainRequest;
(function (CreateDomainRequest) {
    /**
     * @internal
     */
    CreateDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDomainRequest || (CreateDomainRequest = {}));
export var DomainStatus;
(function (DomainStatus) {
    DomainStatus["ACTIVE"] = "Active";
    DomainStatus["DELETED"] = "Deleted";
})(DomainStatus || (DomainStatus = {}));
export var DomainDescription;
(function (DomainDescription) {
    /**
     * @internal
     */
    DomainDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainDescription || (DomainDescription = {}));
export var CreateDomainResult;
(function (CreateDomainResult) {
    /**
     * @internal
     */
    CreateDomainResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDomainResult || (CreateDomainResult = {}));
export var UpstreamRepository;
(function (UpstreamRepository) {
    /**
     * @internal
     */
    UpstreamRepository.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpstreamRepository || (UpstreamRepository = {}));
export var CreateRepositoryRequest;
(function (CreateRepositoryRequest) {
    /**
     * @internal
     */
    CreateRepositoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRepositoryRequest || (CreateRepositoryRequest = {}));
export var CreateRepositoryResult;
(function (CreateRepositoryResult) {
    /**
     * @internal
     */
    CreateRepositoryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRepositoryResult || (CreateRepositoryResult = {}));
export var DeleteDomainRequest;
(function (DeleteDomainRequest) {
    /**
     * @internal
     */
    DeleteDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDomainRequest || (DeleteDomainRequest = {}));
export var DeleteDomainResult;
(function (DeleteDomainResult) {
    /**
     * @internal
     */
    DeleteDomainResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDomainResult || (DeleteDomainResult = {}));
export var DeleteDomainPermissionsPolicyRequest;
(function (DeleteDomainPermissionsPolicyRequest) {
    /**
     * @internal
     */
    DeleteDomainPermissionsPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDomainPermissionsPolicyRequest || (DeleteDomainPermissionsPolicyRequest = {}));
export var ResourcePolicy;
(function (ResourcePolicy) {
    /**
     * @internal
     */
    ResourcePolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourcePolicy || (ResourcePolicy = {}));
export var DeleteDomainPermissionsPolicyResult;
(function (DeleteDomainPermissionsPolicyResult) {
    /**
     * @internal
     */
    DeleteDomainPermissionsPolicyResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDomainPermissionsPolicyResult || (DeleteDomainPermissionsPolicyResult = {}));
export var DeletePackageVersionsRequest;
(function (DeletePackageVersionsRequest) {
    /**
     * @internal
     */
    DeletePackageVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePackageVersionsRequest || (DeletePackageVersionsRequest = {}));
export var DeletePackageVersionsResult;
(function (DeletePackageVersionsResult) {
    /**
     * @internal
     */
    DeletePackageVersionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePackageVersionsResult || (DeletePackageVersionsResult = {}));
export var DeleteRepositoryRequest;
(function (DeleteRepositoryRequest) {
    /**
     * @internal
     */
    DeleteRepositoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRepositoryRequest || (DeleteRepositoryRequest = {}));
export var DeleteRepositoryResult;
(function (DeleteRepositoryResult) {
    /**
     * @internal
     */
    DeleteRepositoryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRepositoryResult || (DeleteRepositoryResult = {}));
export var DeleteRepositoryPermissionsPolicyRequest;
(function (DeleteRepositoryPermissionsPolicyRequest) {
    /**
     * @internal
     */
    DeleteRepositoryPermissionsPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRepositoryPermissionsPolicyRequest || (DeleteRepositoryPermissionsPolicyRequest = {}));
export var DeleteRepositoryPermissionsPolicyResult;
(function (DeleteRepositoryPermissionsPolicyResult) {
    /**
     * @internal
     */
    DeleteRepositoryPermissionsPolicyResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRepositoryPermissionsPolicyResult || (DeleteRepositoryPermissionsPolicyResult = {}));
export var DescribeDomainRequest;
(function (DescribeDomainRequest) {
    /**
     * @internal
     */
    DescribeDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDomainRequest || (DescribeDomainRequest = {}));
export var DescribeDomainResult;
(function (DescribeDomainResult) {
    /**
     * @internal
     */
    DescribeDomainResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDomainResult || (DescribeDomainResult = {}));
export var DescribePackageVersionRequest;
(function (DescribePackageVersionRequest) {
    /**
     * @internal
     */
    DescribePackageVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePackageVersionRequest || (DescribePackageVersionRequest = {}));
export var LicenseInfo;
(function (LicenseInfo) {
    /**
     * @internal
     */
    LicenseInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LicenseInfo || (LicenseInfo = {}));
export var PackageVersionDescription;
(function (PackageVersionDescription) {
    /**
     * @internal
     */
    PackageVersionDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PackageVersionDescription || (PackageVersionDescription = {}));
export var DescribePackageVersionResult;
(function (DescribePackageVersionResult) {
    /**
     * @internal
     */
    DescribePackageVersionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePackageVersionResult || (DescribePackageVersionResult = {}));
export var DescribeRepositoryRequest;
(function (DescribeRepositoryRequest) {
    /**
     * @internal
     */
    DescribeRepositoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRepositoryRequest || (DescribeRepositoryRequest = {}));
export var DescribeRepositoryResult;
(function (DescribeRepositoryResult) {
    /**
     * @internal
     */
    DescribeRepositoryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRepositoryResult || (DescribeRepositoryResult = {}));
export var DisassociateExternalConnectionRequest;
(function (DisassociateExternalConnectionRequest) {
    /**
     * @internal
     */
    DisassociateExternalConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateExternalConnectionRequest || (DisassociateExternalConnectionRequest = {}));
export var DisassociateExternalConnectionResult;
(function (DisassociateExternalConnectionResult) {
    /**
     * @internal
     */
    DisassociateExternalConnectionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateExternalConnectionResult || (DisassociateExternalConnectionResult = {}));
export var DisposePackageVersionsRequest;
(function (DisposePackageVersionsRequest) {
    /**
     * @internal
     */
    DisposePackageVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisposePackageVersionsRequest || (DisposePackageVersionsRequest = {}));
export var DisposePackageVersionsResult;
(function (DisposePackageVersionsResult) {
    /**
     * @internal
     */
    DisposePackageVersionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisposePackageVersionsResult || (DisposePackageVersionsResult = {}));
export var GetAuthorizationTokenRequest;
(function (GetAuthorizationTokenRequest) {
    /**
     * @internal
     */
    GetAuthorizationTokenRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAuthorizationTokenRequest || (GetAuthorizationTokenRequest = {}));
export var GetAuthorizationTokenResult;
(function (GetAuthorizationTokenResult) {
    /**
     * @internal
     */
    GetAuthorizationTokenResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAuthorizationTokenResult || (GetAuthorizationTokenResult = {}));
export var GetDomainPermissionsPolicyRequest;
(function (GetDomainPermissionsPolicyRequest) {
    /**
     * @internal
     */
    GetDomainPermissionsPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDomainPermissionsPolicyRequest || (GetDomainPermissionsPolicyRequest = {}));
export var GetDomainPermissionsPolicyResult;
(function (GetDomainPermissionsPolicyResult) {
    /**
     * @internal
     */
    GetDomainPermissionsPolicyResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDomainPermissionsPolicyResult || (GetDomainPermissionsPolicyResult = {}));
export var GetPackageVersionAssetRequest;
(function (GetPackageVersionAssetRequest) {
    /**
     * @internal
     */
    GetPackageVersionAssetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPackageVersionAssetRequest || (GetPackageVersionAssetRequest = {}));
export var GetPackageVersionAssetResult;
(function (GetPackageVersionAssetResult) {
    /**
     * @internal
     */
    GetPackageVersionAssetResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPackageVersionAssetResult || (GetPackageVersionAssetResult = {}));
export var GetPackageVersionReadmeRequest;
(function (GetPackageVersionReadmeRequest) {
    /**
     * @internal
     */
    GetPackageVersionReadmeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPackageVersionReadmeRequest || (GetPackageVersionReadmeRequest = {}));
export var GetPackageVersionReadmeResult;
(function (GetPackageVersionReadmeResult) {
    /**
     * @internal
     */
    GetPackageVersionReadmeResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPackageVersionReadmeResult || (GetPackageVersionReadmeResult = {}));
export var GetRepositoryEndpointRequest;
(function (GetRepositoryEndpointRequest) {
    /**
     * @internal
     */
    GetRepositoryEndpointRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRepositoryEndpointRequest || (GetRepositoryEndpointRequest = {}));
export var GetRepositoryEndpointResult;
(function (GetRepositoryEndpointResult) {
    /**
     * @internal
     */
    GetRepositoryEndpointResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRepositoryEndpointResult || (GetRepositoryEndpointResult = {}));
export var GetRepositoryPermissionsPolicyRequest;
(function (GetRepositoryPermissionsPolicyRequest) {
    /**
     * @internal
     */
    GetRepositoryPermissionsPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRepositoryPermissionsPolicyRequest || (GetRepositoryPermissionsPolicyRequest = {}));
export var GetRepositoryPermissionsPolicyResult;
(function (GetRepositoryPermissionsPolicyResult) {
    /**
     * @internal
     */
    GetRepositoryPermissionsPolicyResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRepositoryPermissionsPolicyResult || (GetRepositoryPermissionsPolicyResult = {}));
export var ListDomainsRequest;
(function (ListDomainsRequest) {
    /**
     * @internal
     */
    ListDomainsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDomainsRequest || (ListDomainsRequest = {}));
export var DomainSummary;
(function (DomainSummary) {
    /**
     * @internal
     */
    DomainSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainSummary || (DomainSummary = {}));
export var ListDomainsResult;
(function (ListDomainsResult) {
    /**
     * @internal
     */
    ListDomainsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDomainsResult || (ListDomainsResult = {}));
export var ListPackagesRequest;
(function (ListPackagesRequest) {
    /**
     * @internal
     */
    ListPackagesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPackagesRequest || (ListPackagesRequest = {}));
export var PackageSummary;
(function (PackageSummary) {
    /**
     * @internal
     */
    PackageSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PackageSummary || (PackageSummary = {}));
export var ListPackagesResult;
(function (ListPackagesResult) {
    /**
     * @internal
     */
    ListPackagesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPackagesResult || (ListPackagesResult = {}));
export var ListPackageVersionAssetsRequest;
(function (ListPackageVersionAssetsRequest) {
    /**
     * @internal
     */
    ListPackageVersionAssetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPackageVersionAssetsRequest || (ListPackageVersionAssetsRequest = {}));
export var ListPackageVersionAssetsResult;
(function (ListPackageVersionAssetsResult) {
    /**
     * @internal
     */
    ListPackageVersionAssetsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPackageVersionAssetsResult || (ListPackageVersionAssetsResult = {}));
export var ListPackageVersionDependenciesRequest;
(function (ListPackageVersionDependenciesRequest) {
    /**
     * @internal
     */
    ListPackageVersionDependenciesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPackageVersionDependenciesRequest || (ListPackageVersionDependenciesRequest = {}));
export var PackageDependency;
(function (PackageDependency) {
    /**
     * @internal
     */
    PackageDependency.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PackageDependency || (PackageDependency = {}));
export var ListPackageVersionDependenciesResult;
(function (ListPackageVersionDependenciesResult) {
    /**
     * @internal
     */
    ListPackageVersionDependenciesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPackageVersionDependenciesResult || (ListPackageVersionDependenciesResult = {}));
export var PackageVersionSortType;
(function (PackageVersionSortType) {
    PackageVersionSortType["PUBLISHED_TIME"] = "PUBLISHED_TIME";
})(PackageVersionSortType || (PackageVersionSortType = {}));
export var ListPackageVersionsRequest;
(function (ListPackageVersionsRequest) {
    /**
     * @internal
     */
    ListPackageVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPackageVersionsRequest || (ListPackageVersionsRequest = {}));
export var PackageVersionSummary;
(function (PackageVersionSummary) {
    /**
     * @internal
     */
    PackageVersionSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PackageVersionSummary || (PackageVersionSummary = {}));
export var ListPackageVersionsResult;
(function (ListPackageVersionsResult) {
    /**
     * @internal
     */
    ListPackageVersionsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPackageVersionsResult || (ListPackageVersionsResult = {}));
export var ListRepositoriesRequest;
(function (ListRepositoriesRequest) {
    /**
     * @internal
     */
    ListRepositoriesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRepositoriesRequest || (ListRepositoriesRequest = {}));
export var RepositorySummary;
(function (RepositorySummary) {
    /**
     * @internal
     */
    RepositorySummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RepositorySummary || (RepositorySummary = {}));
export var ListRepositoriesResult;
(function (ListRepositoriesResult) {
    /**
     * @internal
     */
    ListRepositoriesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRepositoriesResult || (ListRepositoriesResult = {}));
export var ListRepositoriesInDomainRequest;
(function (ListRepositoriesInDomainRequest) {
    /**
     * @internal
     */
    ListRepositoriesInDomainRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRepositoriesInDomainRequest || (ListRepositoriesInDomainRequest = {}));
export var ListRepositoriesInDomainResult;
(function (ListRepositoriesInDomainResult) {
    /**
     * @internal
     */
    ListRepositoriesInDomainResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRepositoriesInDomainResult || (ListRepositoriesInDomainResult = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
    /**
     * @internal
     */
    ListTagsForResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResult || (ListTagsForResourceResult = {}));
export var PutDomainPermissionsPolicyRequest;
(function (PutDomainPermissionsPolicyRequest) {
    /**
     * @internal
     */
    PutDomainPermissionsPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutDomainPermissionsPolicyRequest || (PutDomainPermissionsPolicyRequest = {}));
export var PutDomainPermissionsPolicyResult;
(function (PutDomainPermissionsPolicyResult) {
    /**
     * @internal
     */
    PutDomainPermissionsPolicyResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutDomainPermissionsPolicyResult || (PutDomainPermissionsPolicyResult = {}));
export var PutRepositoryPermissionsPolicyRequest;
(function (PutRepositoryPermissionsPolicyRequest) {
    /**
     * @internal
     */
    PutRepositoryPermissionsPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRepositoryPermissionsPolicyRequest || (PutRepositoryPermissionsPolicyRequest = {}));
export var PutRepositoryPermissionsPolicyResult;
(function (PutRepositoryPermissionsPolicyResult) {
    /**
     * @internal
     */
    PutRepositoryPermissionsPolicyResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRepositoryPermissionsPolicyResult || (PutRepositoryPermissionsPolicyResult = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResult;
(function (TagResourceResult) {
    /**
     * @internal
     */
    TagResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResult || (TagResourceResult = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResult;
(function (UntagResourceResult) {
    /**
     * @internal
     */
    UntagResourceResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResult || (UntagResourceResult = {}));
export var UpdatePackageVersionsStatusRequest;
(function (UpdatePackageVersionsStatusRequest) {
    /**
     * @internal
     */
    UpdatePackageVersionsStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdatePackageVersionsStatusRequest || (UpdatePackageVersionsStatusRequest = {}));
export var UpdatePackageVersionsStatusResult;
(function (UpdatePackageVersionsStatusResult) {
    /**
     * @internal
     */
    UpdatePackageVersionsStatusResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdatePackageVersionsStatusResult || (UpdatePackageVersionsStatusResult = {}));
export var UpdateRepositoryRequest;
(function (UpdateRepositoryRequest) {
    /**
     * @internal
     */
    UpdateRepositoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRepositoryRequest || (UpdateRepositoryRequest = {}));
export var UpdateRepositoryResult;
(function (UpdateRepositoryResult) {
    /**
     * @internal
     */
    UpdateRepositoryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRepositoryResult || (UpdateRepositoryResult = {}));
//# sourceMappingURL=models_0.js.map