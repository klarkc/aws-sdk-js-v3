"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutSigningProfileResponse = exports.PutSigningProfileRequest = exports.NotFoundException = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListSigningProfilesResponse = exports.SigningProfile = exports.ListSigningProfilesRequest = exports.ListSigningPlatformsResponse = exports.SigningPlatform = exports.ListSigningPlatformsRequest = exports.ListSigningJobsResponse = exports.SigningJob = exports.ListSigningJobsRequest = exports.ListProfilePermissionsResponse = exports.Permission = exports.ListProfilePermissionsRequest = exports.GetSigningProfileResponse = exports.SignatureValidityPeriod = exports.SigningProfileRevocationRecord = exports.GetSigningProfileRequest = exports.GetSigningPlatformResponse = exports.SigningImageFormat = exports.SigningConfiguration = exports.HashAlgorithmOptions = exports.GetSigningPlatformRequest = exports.EncryptionAlgorithmOptions = exports.Destination = exports.S3Destination = exports.DescribeSigningJobResponse = exports.Source = exports.S3Source = exports.SigningMaterial = exports.SignedObject = exports.S3SignedObject = exports.SigningJobRevocationRecord = exports.SigningPlatformOverrides = exports.SigningConfigurationOverrides = exports.DescribeSigningJobRequest = exports.CancelSigningProfileRequest = exports.BadRequestException = exports.ValidationException = exports.TooManyRequestsException = exports.ServiceLimitExceededException = exports.ResourceNotFoundException = exports.InternalServiceErrorException = exports.ConflictException = exports.AddProfilePermissionResponse = exports.AddProfilePermissionRequest = exports.AccessDeniedException = void 0;
exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.ThrottlingException = exports.StartSigningJobResponse = exports.StartSigningJobRequest = exports.RevokeSigningProfileRequest = exports.RevokeSignatureRequest = exports.RemoveProfilePermissionResponse = exports.RemoveProfilePermissionRequest = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AddProfilePermissionRequest;
(function (AddProfilePermissionRequest) {
    /**
     * @internal
     */
    AddProfilePermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddProfilePermissionRequest = exports.AddProfilePermissionRequest || (exports.AddProfilePermissionRequest = {}));
var AddProfilePermissionResponse;
(function (AddProfilePermissionResponse) {
    /**
     * @internal
     */
    AddProfilePermissionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddProfilePermissionResponse = exports.AddProfilePermissionResponse || (exports.AddProfilePermissionResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var InternalServiceErrorException;
(function (InternalServiceErrorException) {
    /**
     * @internal
     */
    InternalServiceErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceErrorException = exports.InternalServiceErrorException || (exports.InternalServiceErrorException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceLimitExceededException;
(function (ServiceLimitExceededException) {
    /**
     * @internal
     */
    ServiceLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceLimitExceededException = exports.ServiceLimitExceededException || (exports.ServiceLimitExceededException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var CancelSigningProfileRequest;
(function (CancelSigningProfileRequest) {
    /**
     * @internal
     */
    CancelSigningProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelSigningProfileRequest = exports.CancelSigningProfileRequest || (exports.CancelSigningProfileRequest = {}));
var DescribeSigningJobRequest;
(function (DescribeSigningJobRequest) {
    /**
     * @internal
     */
    DescribeSigningJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSigningJobRequest = exports.DescribeSigningJobRequest || (exports.DescribeSigningJobRequest = {}));
var SigningConfigurationOverrides;
(function (SigningConfigurationOverrides) {
    /**
     * @internal
     */
    SigningConfigurationOverrides.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SigningConfigurationOverrides = exports.SigningConfigurationOverrides || (exports.SigningConfigurationOverrides = {}));
var SigningPlatformOverrides;
(function (SigningPlatformOverrides) {
    /**
     * @internal
     */
    SigningPlatformOverrides.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SigningPlatformOverrides = exports.SigningPlatformOverrides || (exports.SigningPlatformOverrides = {}));
var SigningJobRevocationRecord;
(function (SigningJobRevocationRecord) {
    /**
     * @internal
     */
    SigningJobRevocationRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SigningJobRevocationRecord = exports.SigningJobRevocationRecord || (exports.SigningJobRevocationRecord = {}));
var S3SignedObject;
(function (S3SignedObject) {
    /**
     * @internal
     */
    S3SignedObject.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3SignedObject = exports.S3SignedObject || (exports.S3SignedObject = {}));
var SignedObject;
(function (SignedObject) {
    /**
     * @internal
     */
    SignedObject.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SignedObject = exports.SignedObject || (exports.SignedObject = {}));
var SigningMaterial;
(function (SigningMaterial) {
    /**
     * @internal
     */
    SigningMaterial.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SigningMaterial = exports.SigningMaterial || (exports.SigningMaterial = {}));
var S3Source;
(function (S3Source) {
    /**
     * @internal
     */
    S3Source.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Source = exports.S3Source || (exports.S3Source = {}));
var Source;
(function (Source) {
    /**
     * @internal
     */
    Source.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Source = exports.Source || (exports.Source = {}));
var DescribeSigningJobResponse;
(function (DescribeSigningJobResponse) {
    /**
     * @internal
     */
    DescribeSigningJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSigningJobResponse = exports.DescribeSigningJobResponse || (exports.DescribeSigningJobResponse = {}));
var S3Destination;
(function (S3Destination) {
    /**
     * @internal
     */
    S3Destination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Destination = exports.S3Destination || (exports.S3Destination = {}));
var Destination;
(function (Destination) {
    /**
     * @internal
     */
    Destination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Destination = exports.Destination || (exports.Destination = {}));
var EncryptionAlgorithmOptions;
(function (EncryptionAlgorithmOptions) {
    /**
     * @internal
     */
    EncryptionAlgorithmOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionAlgorithmOptions = exports.EncryptionAlgorithmOptions || (exports.EncryptionAlgorithmOptions = {}));
var GetSigningPlatformRequest;
(function (GetSigningPlatformRequest) {
    /**
     * @internal
     */
    GetSigningPlatformRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSigningPlatformRequest = exports.GetSigningPlatformRequest || (exports.GetSigningPlatformRequest = {}));
var HashAlgorithmOptions;
(function (HashAlgorithmOptions) {
    /**
     * @internal
     */
    HashAlgorithmOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HashAlgorithmOptions = exports.HashAlgorithmOptions || (exports.HashAlgorithmOptions = {}));
var SigningConfiguration;
(function (SigningConfiguration) {
    /**
     * @internal
     */
    SigningConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SigningConfiguration = exports.SigningConfiguration || (exports.SigningConfiguration = {}));
var SigningImageFormat;
(function (SigningImageFormat) {
    /**
     * @internal
     */
    SigningImageFormat.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SigningImageFormat = exports.SigningImageFormat || (exports.SigningImageFormat = {}));
var GetSigningPlatformResponse;
(function (GetSigningPlatformResponse) {
    /**
     * @internal
     */
    GetSigningPlatformResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSigningPlatformResponse = exports.GetSigningPlatformResponse || (exports.GetSigningPlatformResponse = {}));
var GetSigningProfileRequest;
(function (GetSigningProfileRequest) {
    /**
     * @internal
     */
    GetSigningProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSigningProfileRequest = exports.GetSigningProfileRequest || (exports.GetSigningProfileRequest = {}));
var SigningProfileRevocationRecord;
(function (SigningProfileRevocationRecord) {
    /**
     * @internal
     */
    SigningProfileRevocationRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SigningProfileRevocationRecord = exports.SigningProfileRevocationRecord || (exports.SigningProfileRevocationRecord = {}));
var SignatureValidityPeriod;
(function (SignatureValidityPeriod) {
    /**
     * @internal
     */
    SignatureValidityPeriod.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SignatureValidityPeriod = exports.SignatureValidityPeriod || (exports.SignatureValidityPeriod = {}));
var GetSigningProfileResponse;
(function (GetSigningProfileResponse) {
    /**
     * @internal
     */
    GetSigningProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSigningProfileResponse = exports.GetSigningProfileResponse || (exports.GetSigningProfileResponse = {}));
var ListProfilePermissionsRequest;
(function (ListProfilePermissionsRequest) {
    /**
     * @internal
     */
    ListProfilePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProfilePermissionsRequest = exports.ListProfilePermissionsRequest || (exports.ListProfilePermissionsRequest = {}));
var Permission;
(function (Permission) {
    /**
     * @internal
     */
    Permission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Permission = exports.Permission || (exports.Permission = {}));
var ListProfilePermissionsResponse;
(function (ListProfilePermissionsResponse) {
    /**
     * @internal
     */
    ListProfilePermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProfilePermissionsResponse = exports.ListProfilePermissionsResponse || (exports.ListProfilePermissionsResponse = {}));
var ListSigningJobsRequest;
(function (ListSigningJobsRequest) {
    /**
     * @internal
     */
    ListSigningJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSigningJobsRequest = exports.ListSigningJobsRequest || (exports.ListSigningJobsRequest = {}));
var SigningJob;
(function (SigningJob) {
    /**
     * @internal
     */
    SigningJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SigningJob = exports.SigningJob || (exports.SigningJob = {}));
var ListSigningJobsResponse;
(function (ListSigningJobsResponse) {
    /**
     * @internal
     */
    ListSigningJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSigningJobsResponse = exports.ListSigningJobsResponse || (exports.ListSigningJobsResponse = {}));
var ListSigningPlatformsRequest;
(function (ListSigningPlatformsRequest) {
    /**
     * @internal
     */
    ListSigningPlatformsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSigningPlatformsRequest = exports.ListSigningPlatformsRequest || (exports.ListSigningPlatformsRequest = {}));
var SigningPlatform;
(function (SigningPlatform) {
    /**
     * @internal
     */
    SigningPlatform.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SigningPlatform = exports.SigningPlatform || (exports.SigningPlatform = {}));
var ListSigningPlatformsResponse;
(function (ListSigningPlatformsResponse) {
    /**
     * @internal
     */
    ListSigningPlatformsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSigningPlatformsResponse = exports.ListSigningPlatformsResponse || (exports.ListSigningPlatformsResponse = {}));
var ListSigningProfilesRequest;
(function (ListSigningProfilesRequest) {
    /**
     * @internal
     */
    ListSigningProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSigningProfilesRequest = exports.ListSigningProfilesRequest || (exports.ListSigningProfilesRequest = {}));
var SigningProfile;
(function (SigningProfile) {
    /**
     * @internal
     */
    SigningProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SigningProfile = exports.SigningProfile || (exports.SigningProfile = {}));
var ListSigningProfilesResponse;
(function (ListSigningProfilesResponse) {
    /**
     * @internal
     */
    ListSigningProfilesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSigningProfilesResponse = exports.ListSigningProfilesResponse || (exports.ListSigningProfilesResponse = {}));
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
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var PutSigningProfileRequest;
(function (PutSigningProfileRequest) {
    /**
     * @internal
     */
    PutSigningProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutSigningProfileRequest = exports.PutSigningProfileRequest || (exports.PutSigningProfileRequest = {}));
var PutSigningProfileResponse;
(function (PutSigningProfileResponse) {
    /**
     * @internal
     */
    PutSigningProfileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutSigningProfileResponse = exports.PutSigningProfileResponse || (exports.PutSigningProfileResponse = {}));
var RemoveProfilePermissionRequest;
(function (RemoveProfilePermissionRequest) {
    /**
     * @internal
     */
    RemoveProfilePermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveProfilePermissionRequest = exports.RemoveProfilePermissionRequest || (exports.RemoveProfilePermissionRequest = {}));
var RemoveProfilePermissionResponse;
(function (RemoveProfilePermissionResponse) {
    /**
     * @internal
     */
    RemoveProfilePermissionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveProfilePermissionResponse = exports.RemoveProfilePermissionResponse || (exports.RemoveProfilePermissionResponse = {}));
var RevokeSignatureRequest;
(function (RevokeSignatureRequest) {
    /**
     * @internal
     */
    RevokeSignatureRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeSignatureRequest = exports.RevokeSignatureRequest || (exports.RevokeSignatureRequest = {}));
var RevokeSigningProfileRequest;
(function (RevokeSigningProfileRequest) {
    /**
     * @internal
     */
    RevokeSigningProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RevokeSigningProfileRequest = exports.RevokeSigningProfileRequest || (exports.RevokeSigningProfileRequest = {}));
var StartSigningJobRequest;
(function (StartSigningJobRequest) {
    /**
     * @internal
     */
    StartSigningJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSigningJobRequest = exports.StartSigningJobRequest || (exports.StartSigningJobRequest = {}));
var StartSigningJobResponse;
(function (StartSigningJobResponse) {
    /**
     * @internal
     */
    StartSigningJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartSigningJobResponse = exports.StartSigningJobResponse || (exports.StartSigningJobResponse = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
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
//# sourceMappingURL=models_0.js.map