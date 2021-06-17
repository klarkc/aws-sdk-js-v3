"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeRepositoryRequest = exports.DescribePackageVersionResult = exports.PackageVersionDescription = exports.LicenseInfo = exports.DescribePackageVersionRequest = exports.DescribeDomainResult = exports.DescribeDomainRequest = exports.DeleteRepositoryPermissionsPolicyResult = exports.DeleteRepositoryPermissionsPolicyRequest = exports.DeleteRepositoryResult = exports.DeleteRepositoryRequest = exports.DeletePackageVersionsResult = exports.DeletePackageVersionsRequest = exports.DeleteDomainPermissionsPolicyResult = exports.ResourcePolicy = exports.DeleteDomainPermissionsPolicyRequest = exports.DeleteDomainResult = exports.DeleteDomainRequest = exports.CreateRepositoryResult = exports.CreateRepositoryRequest = exports.UpstreamRepository = exports.CreateDomainResult = exports.DomainDescription = exports.DomainStatus = exports.CreateDomainRequest = exports.Tag = exports.CopyPackageVersionsResult = exports.SuccessfulPackageVersionInfo = exports.PackageVersionStatus = exports.PackageVersionError = exports.PackageVersionErrorCode = exports.CopyPackageVersionsRequest = exports.ValidationException = exports.ValidationExceptionReason = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.ResourceType = exports.AssociateExternalConnectionResult = exports.RepositoryDescription = exports.UpstreamRepositoryInfo = exports.RepositoryExternalConnectionInfo = exports.ExternalConnectionStatus = exports.PackageFormat = exports.AssociateExternalConnectionRequest = exports.AssetSummary = exports.HashAlgorithm = exports.AccessDeniedException = void 0;
exports.UpdateRepositoryRequest = exports.UpdatePackageVersionsStatusResult = exports.UpdatePackageVersionsStatusRequest = exports.UntagResourceResult = exports.UntagResourceRequest = exports.TagResourceResult = exports.TagResourceRequest = exports.PutRepositoryPermissionsPolicyResult = exports.PutRepositoryPermissionsPolicyRequest = exports.PutDomainPermissionsPolicyResult = exports.PutDomainPermissionsPolicyRequest = exports.ListTagsForResourceResult = exports.ListTagsForResourceRequest = exports.ListRepositoriesInDomainResult = exports.ListRepositoriesInDomainRequest = exports.ListRepositoriesResult = exports.RepositorySummary = exports.ListRepositoriesRequest = exports.ListPackageVersionsResult = exports.PackageVersionSummary = exports.ListPackageVersionsRequest = exports.PackageVersionSortType = exports.ListPackageVersionDependenciesResult = exports.PackageDependency = exports.ListPackageVersionDependenciesRequest = exports.ListPackageVersionAssetsResult = exports.ListPackageVersionAssetsRequest = exports.ListPackagesResult = exports.PackageSummary = exports.ListPackagesRequest = exports.ListDomainsResult = exports.DomainSummary = exports.ListDomainsRequest = exports.GetRepositoryPermissionsPolicyResult = exports.GetRepositoryPermissionsPolicyRequest = exports.GetRepositoryEndpointResult = exports.GetRepositoryEndpointRequest = exports.GetPackageVersionReadmeResult = exports.GetPackageVersionReadmeRequest = exports.GetPackageVersionAssetResult = exports.GetPackageVersionAssetRequest = exports.GetDomainPermissionsPolicyResult = exports.GetDomainPermissionsPolicyRequest = exports.GetAuthorizationTokenResult = exports.GetAuthorizationTokenRequest = exports.DisposePackageVersionsResult = exports.DisposePackageVersionsRequest = exports.DisassociateExternalConnectionResult = exports.DisassociateExternalConnectionRequest = exports.DescribeRepositoryResult = void 0;
exports.UpdateRepositoryResult = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var HashAlgorithm;
(function (HashAlgorithm) {
    HashAlgorithm["MD5"] = "MD5";
    HashAlgorithm["SHA1"] = "SHA-1";
    HashAlgorithm["SHA256"] = "SHA-256";
    HashAlgorithm["SHA512"] = "SHA-512";
})(HashAlgorithm = exports.HashAlgorithm || (exports.HashAlgorithm = {}));
var AssetSummary;
(function (AssetSummary) {
    /**
     * @internal
     */
    AssetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssetSummary = exports.AssetSummary || (exports.AssetSummary = {}));
var AssociateExternalConnectionRequest;
(function (AssociateExternalConnectionRequest) {
    /**
     * @internal
     */
    AssociateExternalConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateExternalConnectionRequest = exports.AssociateExternalConnectionRequest || (exports.AssociateExternalConnectionRequest = {}));
var PackageFormat;
(function (PackageFormat) {
    PackageFormat["MAVEN"] = "maven";
    PackageFormat["NPM"] = "npm";
    PackageFormat["NUGET"] = "nuget";
    PackageFormat["PYPI"] = "pypi";
})(PackageFormat = exports.PackageFormat || (exports.PackageFormat = {}));
var ExternalConnectionStatus;
(function (ExternalConnectionStatus) {
    ExternalConnectionStatus["AVAILABLE"] = "Available";
})(ExternalConnectionStatus = exports.ExternalConnectionStatus || (exports.ExternalConnectionStatus = {}));
var RepositoryExternalConnectionInfo;
(function (RepositoryExternalConnectionInfo) {
    /**
     * @internal
     */
    RepositoryExternalConnectionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryExternalConnectionInfo = exports.RepositoryExternalConnectionInfo || (exports.RepositoryExternalConnectionInfo = {}));
var UpstreamRepositoryInfo;
(function (UpstreamRepositoryInfo) {
    /**
     * @internal
     */
    UpstreamRepositoryInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpstreamRepositoryInfo = exports.UpstreamRepositoryInfo || (exports.UpstreamRepositoryInfo = {}));
var RepositoryDescription;
(function (RepositoryDescription) {
    /**
     * @internal
     */
    RepositoryDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositoryDescription = exports.RepositoryDescription || (exports.RepositoryDescription = {}));
var AssociateExternalConnectionResult;
(function (AssociateExternalConnectionResult) {
    /**
     * @internal
     */
    AssociateExternalConnectionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateExternalConnectionResult = exports.AssociateExternalConnectionResult || (exports.AssociateExternalConnectionResult = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["ASSET"] = "asset";
    ResourceType["DOMAIN"] = "domain";
    ResourceType["PACKAGE"] = "package";
    ResourceType["PACKAGE_VERSION"] = "package-version";
    ResourceType["REPOSITORY"] = "repository";
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
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationExceptionReason;
(function (ValidationExceptionReason) {
    ValidationExceptionReason["CANNOT_PARSE"] = "CANNOT_PARSE";
    ValidationExceptionReason["ENCRYPTION_KEY_ERROR"] = "ENCRYPTION_KEY_ERROR";
    ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "FIELD_VALIDATION_FAILED";
    ValidationExceptionReason["OTHER"] = "OTHER";
    ValidationExceptionReason["UNKNOWN_OPERATION"] = "UNKNOWN_OPERATION";
})(ValidationExceptionReason = exports.ValidationExceptionReason || (exports.ValidationExceptionReason = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var CopyPackageVersionsRequest;
(function (CopyPackageVersionsRequest) {
    /**
     * @internal
     */
    CopyPackageVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyPackageVersionsRequest = exports.CopyPackageVersionsRequest || (exports.CopyPackageVersionsRequest = {}));
var PackageVersionErrorCode;
(function (PackageVersionErrorCode) {
    PackageVersionErrorCode["ALREADY_EXISTS"] = "ALREADY_EXISTS";
    PackageVersionErrorCode["MISMATCHED_REVISION"] = "MISMATCHED_REVISION";
    PackageVersionErrorCode["MISMATCHED_STATUS"] = "MISMATCHED_STATUS";
    PackageVersionErrorCode["NOT_ALLOWED"] = "NOT_ALLOWED";
    PackageVersionErrorCode["NOT_FOUND"] = "NOT_FOUND";
    PackageVersionErrorCode["SKIPPED"] = "SKIPPED";
})(PackageVersionErrorCode = exports.PackageVersionErrorCode || (exports.PackageVersionErrorCode = {}));
var PackageVersionError;
(function (PackageVersionError) {
    /**
     * @internal
     */
    PackageVersionError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageVersionError = exports.PackageVersionError || (exports.PackageVersionError = {}));
var PackageVersionStatus;
(function (PackageVersionStatus) {
    PackageVersionStatus["ARCHIVED"] = "Archived";
    PackageVersionStatus["DELETED"] = "Deleted";
    PackageVersionStatus["DISPOSED"] = "Disposed";
    PackageVersionStatus["PUBLISHED"] = "Published";
    PackageVersionStatus["UNFINISHED"] = "Unfinished";
    PackageVersionStatus["UNLISTED"] = "Unlisted";
})(PackageVersionStatus = exports.PackageVersionStatus || (exports.PackageVersionStatus = {}));
var SuccessfulPackageVersionInfo;
(function (SuccessfulPackageVersionInfo) {
    /**
     * @internal
     */
    SuccessfulPackageVersionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuccessfulPackageVersionInfo = exports.SuccessfulPackageVersionInfo || (exports.SuccessfulPackageVersionInfo = {}));
var CopyPackageVersionsResult;
(function (CopyPackageVersionsResult) {
    /**
     * @internal
     */
    CopyPackageVersionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CopyPackageVersionsResult = exports.CopyPackageVersionsResult || (exports.CopyPackageVersionsResult = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateDomainRequest;
(function (CreateDomainRequest) {
    /**
     * @internal
     */
    CreateDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainRequest = exports.CreateDomainRequest || (exports.CreateDomainRequest = {}));
var DomainStatus;
(function (DomainStatus) {
    DomainStatus["ACTIVE"] = "Active";
    DomainStatus["DELETED"] = "Deleted";
})(DomainStatus = exports.DomainStatus || (exports.DomainStatus = {}));
var DomainDescription;
(function (DomainDescription) {
    /**
     * @internal
     */
    DomainDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainDescription = exports.DomainDescription || (exports.DomainDescription = {}));
var CreateDomainResult;
(function (CreateDomainResult) {
    /**
     * @internal
     */
    CreateDomainResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDomainResult = exports.CreateDomainResult || (exports.CreateDomainResult = {}));
var UpstreamRepository;
(function (UpstreamRepository) {
    /**
     * @internal
     */
    UpstreamRepository.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpstreamRepository = exports.UpstreamRepository || (exports.UpstreamRepository = {}));
var CreateRepositoryRequest;
(function (CreateRepositoryRequest) {
    /**
     * @internal
     */
    CreateRepositoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRepositoryRequest = exports.CreateRepositoryRequest || (exports.CreateRepositoryRequest = {}));
var CreateRepositoryResult;
(function (CreateRepositoryResult) {
    /**
     * @internal
     */
    CreateRepositoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRepositoryResult = exports.CreateRepositoryResult || (exports.CreateRepositoryResult = {}));
var DeleteDomainRequest;
(function (DeleteDomainRequest) {
    /**
     * @internal
     */
    DeleteDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainRequest = exports.DeleteDomainRequest || (exports.DeleteDomainRequest = {}));
var DeleteDomainResult;
(function (DeleteDomainResult) {
    /**
     * @internal
     */
    DeleteDomainResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainResult = exports.DeleteDomainResult || (exports.DeleteDomainResult = {}));
var DeleteDomainPermissionsPolicyRequest;
(function (DeleteDomainPermissionsPolicyRequest) {
    /**
     * @internal
     */
    DeleteDomainPermissionsPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainPermissionsPolicyRequest = exports.DeleteDomainPermissionsPolicyRequest || (exports.DeleteDomainPermissionsPolicyRequest = {}));
var ResourcePolicy;
(function (ResourcePolicy) {
    /**
     * @internal
     */
    ResourcePolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourcePolicy = exports.ResourcePolicy || (exports.ResourcePolicy = {}));
var DeleteDomainPermissionsPolicyResult;
(function (DeleteDomainPermissionsPolicyResult) {
    /**
     * @internal
     */
    DeleteDomainPermissionsPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDomainPermissionsPolicyResult = exports.DeleteDomainPermissionsPolicyResult || (exports.DeleteDomainPermissionsPolicyResult = {}));
var DeletePackageVersionsRequest;
(function (DeletePackageVersionsRequest) {
    /**
     * @internal
     */
    DeletePackageVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePackageVersionsRequest = exports.DeletePackageVersionsRequest || (exports.DeletePackageVersionsRequest = {}));
var DeletePackageVersionsResult;
(function (DeletePackageVersionsResult) {
    /**
     * @internal
     */
    DeletePackageVersionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePackageVersionsResult = exports.DeletePackageVersionsResult || (exports.DeletePackageVersionsResult = {}));
var DeleteRepositoryRequest;
(function (DeleteRepositoryRequest) {
    /**
     * @internal
     */
    DeleteRepositoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRepositoryRequest = exports.DeleteRepositoryRequest || (exports.DeleteRepositoryRequest = {}));
var DeleteRepositoryResult;
(function (DeleteRepositoryResult) {
    /**
     * @internal
     */
    DeleteRepositoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRepositoryResult = exports.DeleteRepositoryResult || (exports.DeleteRepositoryResult = {}));
var DeleteRepositoryPermissionsPolicyRequest;
(function (DeleteRepositoryPermissionsPolicyRequest) {
    /**
     * @internal
     */
    DeleteRepositoryPermissionsPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRepositoryPermissionsPolicyRequest = exports.DeleteRepositoryPermissionsPolicyRequest || (exports.DeleteRepositoryPermissionsPolicyRequest = {}));
var DeleteRepositoryPermissionsPolicyResult;
(function (DeleteRepositoryPermissionsPolicyResult) {
    /**
     * @internal
     */
    DeleteRepositoryPermissionsPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRepositoryPermissionsPolicyResult = exports.DeleteRepositoryPermissionsPolicyResult || (exports.DeleteRepositoryPermissionsPolicyResult = {}));
var DescribeDomainRequest;
(function (DescribeDomainRequest) {
    /**
     * @internal
     */
    DescribeDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainRequest = exports.DescribeDomainRequest || (exports.DescribeDomainRequest = {}));
var DescribeDomainResult;
(function (DescribeDomainResult) {
    /**
     * @internal
     */
    DescribeDomainResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDomainResult = exports.DescribeDomainResult || (exports.DescribeDomainResult = {}));
var DescribePackageVersionRequest;
(function (DescribePackageVersionRequest) {
    /**
     * @internal
     */
    DescribePackageVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePackageVersionRequest = exports.DescribePackageVersionRequest || (exports.DescribePackageVersionRequest = {}));
var LicenseInfo;
(function (LicenseInfo) {
    /**
     * @internal
     */
    LicenseInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LicenseInfo = exports.LicenseInfo || (exports.LicenseInfo = {}));
var PackageVersionDescription;
(function (PackageVersionDescription) {
    /**
     * @internal
     */
    PackageVersionDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageVersionDescription = exports.PackageVersionDescription || (exports.PackageVersionDescription = {}));
var DescribePackageVersionResult;
(function (DescribePackageVersionResult) {
    /**
     * @internal
     */
    DescribePackageVersionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePackageVersionResult = exports.DescribePackageVersionResult || (exports.DescribePackageVersionResult = {}));
var DescribeRepositoryRequest;
(function (DescribeRepositoryRequest) {
    /**
     * @internal
     */
    DescribeRepositoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRepositoryRequest = exports.DescribeRepositoryRequest || (exports.DescribeRepositoryRequest = {}));
var DescribeRepositoryResult;
(function (DescribeRepositoryResult) {
    /**
     * @internal
     */
    DescribeRepositoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRepositoryResult = exports.DescribeRepositoryResult || (exports.DescribeRepositoryResult = {}));
var DisassociateExternalConnectionRequest;
(function (DisassociateExternalConnectionRequest) {
    /**
     * @internal
     */
    DisassociateExternalConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateExternalConnectionRequest = exports.DisassociateExternalConnectionRequest || (exports.DisassociateExternalConnectionRequest = {}));
var DisassociateExternalConnectionResult;
(function (DisassociateExternalConnectionResult) {
    /**
     * @internal
     */
    DisassociateExternalConnectionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateExternalConnectionResult = exports.DisassociateExternalConnectionResult || (exports.DisassociateExternalConnectionResult = {}));
var DisposePackageVersionsRequest;
(function (DisposePackageVersionsRequest) {
    /**
     * @internal
     */
    DisposePackageVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisposePackageVersionsRequest = exports.DisposePackageVersionsRequest || (exports.DisposePackageVersionsRequest = {}));
var DisposePackageVersionsResult;
(function (DisposePackageVersionsResult) {
    /**
     * @internal
     */
    DisposePackageVersionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisposePackageVersionsResult = exports.DisposePackageVersionsResult || (exports.DisposePackageVersionsResult = {}));
var GetAuthorizationTokenRequest;
(function (GetAuthorizationTokenRequest) {
    /**
     * @internal
     */
    GetAuthorizationTokenRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAuthorizationTokenRequest = exports.GetAuthorizationTokenRequest || (exports.GetAuthorizationTokenRequest = {}));
var GetAuthorizationTokenResult;
(function (GetAuthorizationTokenResult) {
    /**
     * @internal
     */
    GetAuthorizationTokenResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAuthorizationTokenResult = exports.GetAuthorizationTokenResult || (exports.GetAuthorizationTokenResult = {}));
var GetDomainPermissionsPolicyRequest;
(function (GetDomainPermissionsPolicyRequest) {
    /**
     * @internal
     */
    GetDomainPermissionsPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainPermissionsPolicyRequest = exports.GetDomainPermissionsPolicyRequest || (exports.GetDomainPermissionsPolicyRequest = {}));
var GetDomainPermissionsPolicyResult;
(function (GetDomainPermissionsPolicyResult) {
    /**
     * @internal
     */
    GetDomainPermissionsPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainPermissionsPolicyResult = exports.GetDomainPermissionsPolicyResult || (exports.GetDomainPermissionsPolicyResult = {}));
var GetPackageVersionAssetRequest;
(function (GetPackageVersionAssetRequest) {
    /**
     * @internal
     */
    GetPackageVersionAssetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPackageVersionAssetRequest = exports.GetPackageVersionAssetRequest || (exports.GetPackageVersionAssetRequest = {}));
var GetPackageVersionAssetResult;
(function (GetPackageVersionAssetResult) {
    /**
     * @internal
     */
    GetPackageVersionAssetResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPackageVersionAssetResult = exports.GetPackageVersionAssetResult || (exports.GetPackageVersionAssetResult = {}));
var GetPackageVersionReadmeRequest;
(function (GetPackageVersionReadmeRequest) {
    /**
     * @internal
     */
    GetPackageVersionReadmeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPackageVersionReadmeRequest = exports.GetPackageVersionReadmeRequest || (exports.GetPackageVersionReadmeRequest = {}));
var GetPackageVersionReadmeResult;
(function (GetPackageVersionReadmeResult) {
    /**
     * @internal
     */
    GetPackageVersionReadmeResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPackageVersionReadmeResult = exports.GetPackageVersionReadmeResult || (exports.GetPackageVersionReadmeResult = {}));
var GetRepositoryEndpointRequest;
(function (GetRepositoryEndpointRequest) {
    /**
     * @internal
     */
    GetRepositoryEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryEndpointRequest = exports.GetRepositoryEndpointRequest || (exports.GetRepositoryEndpointRequest = {}));
var GetRepositoryEndpointResult;
(function (GetRepositoryEndpointResult) {
    /**
     * @internal
     */
    GetRepositoryEndpointResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryEndpointResult = exports.GetRepositoryEndpointResult || (exports.GetRepositoryEndpointResult = {}));
var GetRepositoryPermissionsPolicyRequest;
(function (GetRepositoryPermissionsPolicyRequest) {
    /**
     * @internal
     */
    GetRepositoryPermissionsPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryPermissionsPolicyRequest = exports.GetRepositoryPermissionsPolicyRequest || (exports.GetRepositoryPermissionsPolicyRequest = {}));
var GetRepositoryPermissionsPolicyResult;
(function (GetRepositoryPermissionsPolicyResult) {
    /**
     * @internal
     */
    GetRepositoryPermissionsPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRepositoryPermissionsPolicyResult = exports.GetRepositoryPermissionsPolicyResult || (exports.GetRepositoryPermissionsPolicyResult = {}));
var ListDomainsRequest;
(function (ListDomainsRequest) {
    /**
     * @internal
     */
    ListDomainsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainsRequest = exports.ListDomainsRequest || (exports.ListDomainsRequest = {}));
var DomainSummary;
(function (DomainSummary) {
    /**
     * @internal
     */
    DomainSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainSummary = exports.DomainSummary || (exports.DomainSummary = {}));
var ListDomainsResult;
(function (ListDomainsResult) {
    /**
     * @internal
     */
    ListDomainsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainsResult = exports.ListDomainsResult || (exports.ListDomainsResult = {}));
var ListPackagesRequest;
(function (ListPackagesRequest) {
    /**
     * @internal
     */
    ListPackagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackagesRequest = exports.ListPackagesRequest || (exports.ListPackagesRequest = {}));
var PackageSummary;
(function (PackageSummary) {
    /**
     * @internal
     */
    PackageSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageSummary = exports.PackageSummary || (exports.PackageSummary = {}));
var ListPackagesResult;
(function (ListPackagesResult) {
    /**
     * @internal
     */
    ListPackagesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackagesResult = exports.ListPackagesResult || (exports.ListPackagesResult = {}));
var ListPackageVersionAssetsRequest;
(function (ListPackageVersionAssetsRequest) {
    /**
     * @internal
     */
    ListPackageVersionAssetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackageVersionAssetsRequest = exports.ListPackageVersionAssetsRequest || (exports.ListPackageVersionAssetsRequest = {}));
var ListPackageVersionAssetsResult;
(function (ListPackageVersionAssetsResult) {
    /**
     * @internal
     */
    ListPackageVersionAssetsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackageVersionAssetsResult = exports.ListPackageVersionAssetsResult || (exports.ListPackageVersionAssetsResult = {}));
var ListPackageVersionDependenciesRequest;
(function (ListPackageVersionDependenciesRequest) {
    /**
     * @internal
     */
    ListPackageVersionDependenciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackageVersionDependenciesRequest = exports.ListPackageVersionDependenciesRequest || (exports.ListPackageVersionDependenciesRequest = {}));
var PackageDependency;
(function (PackageDependency) {
    /**
     * @internal
     */
    PackageDependency.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageDependency = exports.PackageDependency || (exports.PackageDependency = {}));
var ListPackageVersionDependenciesResult;
(function (ListPackageVersionDependenciesResult) {
    /**
     * @internal
     */
    ListPackageVersionDependenciesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackageVersionDependenciesResult = exports.ListPackageVersionDependenciesResult || (exports.ListPackageVersionDependenciesResult = {}));
var PackageVersionSortType;
(function (PackageVersionSortType) {
    PackageVersionSortType["PUBLISHED_TIME"] = "PUBLISHED_TIME";
})(PackageVersionSortType = exports.PackageVersionSortType || (exports.PackageVersionSortType = {}));
var ListPackageVersionsRequest;
(function (ListPackageVersionsRequest) {
    /**
     * @internal
     */
    ListPackageVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackageVersionsRequest = exports.ListPackageVersionsRequest || (exports.ListPackageVersionsRequest = {}));
var PackageVersionSummary;
(function (PackageVersionSummary) {
    /**
     * @internal
     */
    PackageVersionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PackageVersionSummary = exports.PackageVersionSummary || (exports.PackageVersionSummary = {}));
var ListPackageVersionsResult;
(function (ListPackageVersionsResult) {
    /**
     * @internal
     */
    ListPackageVersionsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPackageVersionsResult = exports.ListPackageVersionsResult || (exports.ListPackageVersionsResult = {}));
var ListRepositoriesRequest;
(function (ListRepositoriesRequest) {
    /**
     * @internal
     */
    ListRepositoriesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRepositoriesRequest = exports.ListRepositoriesRequest || (exports.ListRepositoriesRequest = {}));
var RepositorySummary;
(function (RepositorySummary) {
    /**
     * @internal
     */
    RepositorySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RepositorySummary = exports.RepositorySummary || (exports.RepositorySummary = {}));
var ListRepositoriesResult;
(function (ListRepositoriesResult) {
    /**
     * @internal
     */
    ListRepositoriesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRepositoriesResult = exports.ListRepositoriesResult || (exports.ListRepositoriesResult = {}));
var ListRepositoriesInDomainRequest;
(function (ListRepositoriesInDomainRequest) {
    /**
     * @internal
     */
    ListRepositoriesInDomainRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRepositoriesInDomainRequest = exports.ListRepositoriesInDomainRequest || (exports.ListRepositoriesInDomainRequest = {}));
var ListRepositoriesInDomainResult;
(function (ListRepositoriesInDomainResult) {
    /**
     * @internal
     */
    ListRepositoriesInDomainResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRepositoriesInDomainResult = exports.ListRepositoriesInDomainResult || (exports.ListRepositoriesInDomainResult = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
    /**
     * @internal
     */
    ListTagsForResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResult = exports.ListTagsForResourceResult || (exports.ListTagsForResourceResult = {}));
var PutDomainPermissionsPolicyRequest;
(function (PutDomainPermissionsPolicyRequest) {
    /**
     * @internal
     */
    PutDomainPermissionsPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDomainPermissionsPolicyRequest = exports.PutDomainPermissionsPolicyRequest || (exports.PutDomainPermissionsPolicyRequest = {}));
var PutDomainPermissionsPolicyResult;
(function (PutDomainPermissionsPolicyResult) {
    /**
     * @internal
     */
    PutDomainPermissionsPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDomainPermissionsPolicyResult = exports.PutDomainPermissionsPolicyResult || (exports.PutDomainPermissionsPolicyResult = {}));
var PutRepositoryPermissionsPolicyRequest;
(function (PutRepositoryPermissionsPolicyRequest) {
    /**
     * @internal
     */
    PutRepositoryPermissionsPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRepositoryPermissionsPolicyRequest = exports.PutRepositoryPermissionsPolicyRequest || (exports.PutRepositoryPermissionsPolicyRequest = {}));
var PutRepositoryPermissionsPolicyResult;
(function (PutRepositoryPermissionsPolicyResult) {
    /**
     * @internal
     */
    PutRepositoryPermissionsPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRepositoryPermissionsPolicyResult = exports.PutRepositoryPermissionsPolicyResult || (exports.PutRepositoryPermissionsPolicyResult = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResult;
(function (TagResourceResult) {
    /**
     * @internal
     */
    TagResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResult = exports.TagResourceResult || (exports.TagResourceResult = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResult;
(function (UntagResourceResult) {
    /**
     * @internal
     */
    UntagResourceResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResult = exports.UntagResourceResult || (exports.UntagResourceResult = {}));
var UpdatePackageVersionsStatusRequest;
(function (UpdatePackageVersionsStatusRequest) {
    /**
     * @internal
     */
    UpdatePackageVersionsStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePackageVersionsStatusRequest = exports.UpdatePackageVersionsStatusRequest || (exports.UpdatePackageVersionsStatusRequest = {}));
var UpdatePackageVersionsStatusResult;
(function (UpdatePackageVersionsStatusResult) {
    /**
     * @internal
     */
    UpdatePackageVersionsStatusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePackageVersionsStatusResult = exports.UpdatePackageVersionsStatusResult || (exports.UpdatePackageVersionsStatusResult = {}));
var UpdateRepositoryRequest;
(function (UpdateRepositoryRequest) {
    /**
     * @internal
     */
    UpdateRepositoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRepositoryRequest = exports.UpdateRepositoryRequest || (exports.UpdateRepositoryRequest = {}));
var UpdateRepositoryResult;
(function (UpdateRepositoryResult) {
    /**
     * @internal
     */
    UpdateRepositoryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRepositoryResult = exports.UpdateRepositoryResult || (exports.UpdateRepositoryResult = {}));
//# sourceMappingURL=models_0.js.map