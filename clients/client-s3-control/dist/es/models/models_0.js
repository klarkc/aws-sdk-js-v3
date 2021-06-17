import { __assign } from "tslib";
export var AbortIncompleteMultipartUpload;
(function (AbortIncompleteMultipartUpload) {
    /**
     * @internal
     */
    AbortIncompleteMultipartUpload.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AbortIncompleteMultipartUpload || (AbortIncompleteMultipartUpload = {}));
export var NetworkOrigin;
(function (NetworkOrigin) {
    NetworkOrigin["Internet"] = "Internet";
    NetworkOrigin["VPC"] = "VPC";
})(NetworkOrigin || (NetworkOrigin = {}));
export var VpcConfiguration;
(function (VpcConfiguration) {
    /**
     * @internal
     */
    VpcConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcConfiguration || (VpcConfiguration = {}));
export var AccessPoint;
(function (AccessPoint) {
    /**
     * @internal
     */
    AccessPoint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessPoint || (AccessPoint = {}));
export var ActivityMetrics;
(function (ActivityMetrics) {
    /**
     * @internal
     */
    ActivityMetrics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActivityMetrics || (ActivityMetrics = {}));
export var SelectionCriteria;
(function (SelectionCriteria) {
    /**
     * @internal
     */
    SelectionCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SelectionCriteria || (SelectionCriteria = {}));
export var PrefixLevelStorageMetrics;
(function (PrefixLevelStorageMetrics) {
    /**
     * @internal
     */
    PrefixLevelStorageMetrics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PrefixLevelStorageMetrics || (PrefixLevelStorageMetrics = {}));
export var PrefixLevel;
(function (PrefixLevel) {
    /**
     * @internal
     */
    PrefixLevel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PrefixLevel || (PrefixLevel = {}));
export var BucketLevel;
(function (BucketLevel) {
    /**
     * @internal
     */
    BucketLevel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketLevel || (BucketLevel = {}));
export var AccountLevel;
(function (AccountLevel) {
    /**
     * @internal
     */
    AccountLevel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountLevel || (AccountLevel = {}));
export var AwsLambdaTransformation;
(function (AwsLambdaTransformation) {
    /**
     * @internal
     */
    AwsLambdaTransformation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsLambdaTransformation || (AwsLambdaTransformation = {}));
export var PublicAccessBlockConfiguration;
(function (PublicAccessBlockConfiguration) {
    /**
     * @internal
     */
    PublicAccessBlockConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PublicAccessBlockConfiguration || (PublicAccessBlockConfiguration = {}));
export var CreateAccessPointRequest;
(function (CreateAccessPointRequest) {
    /**
     * @internal
     */
    CreateAccessPointRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAccessPointRequest || (CreateAccessPointRequest = {}));
export var CreateAccessPointResult;
(function (CreateAccessPointResult) {
    /**
     * @internal
     */
    CreateAccessPointResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAccessPointResult || (CreateAccessPointResult = {}));
export var ObjectLambdaAllowedFeature;
(function (ObjectLambdaAllowedFeature) {
    ObjectLambdaAllowedFeature["GetObjectPartNumber"] = "GetObject-PartNumber";
    ObjectLambdaAllowedFeature["GetObjectRange"] = "GetObject-Range";
})(ObjectLambdaAllowedFeature || (ObjectLambdaAllowedFeature = {}));
export var ObjectLambdaTransformationConfigurationAction;
(function (ObjectLambdaTransformationConfigurationAction) {
    ObjectLambdaTransformationConfigurationAction["GetObject"] = "GetObject";
})(ObjectLambdaTransformationConfigurationAction || (ObjectLambdaTransformationConfigurationAction = {}));
export var ObjectLambdaContentTransformation;
(function (ObjectLambdaContentTransformation) {
    ObjectLambdaContentTransformation.visit = function (value, visitor) {
        if (value.AwsLambda !== undefined)
            return visitor.AwsLambda(value.AwsLambda);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    ObjectLambdaContentTransformation.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.AwsLambda !== undefined)
            return { AwsLambda: AwsLambdaTransformation.filterSensitiveLog(obj.AwsLambda) };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(ObjectLambdaContentTransformation || (ObjectLambdaContentTransformation = {}));
export var ObjectLambdaTransformationConfiguration;
(function (ObjectLambdaTransformationConfiguration) {
    /**
     * @internal
     */
    ObjectLambdaTransformationConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ContentTransformation && {
        ContentTransformation: ObjectLambdaContentTransformation.filterSensitiveLog(obj.ContentTransformation),
    }))); };
})(ObjectLambdaTransformationConfiguration || (ObjectLambdaTransformationConfiguration = {}));
export var ObjectLambdaConfiguration;
(function (ObjectLambdaConfiguration) {
    /**
     * @internal
     */
    ObjectLambdaConfiguration.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.TransformationConfigurations && {
        TransformationConfigurations: obj.TransformationConfigurations.map(function (item) {
            return ObjectLambdaTransformationConfiguration.filterSensitiveLog(item);
        }),
    }))); };
})(ObjectLambdaConfiguration || (ObjectLambdaConfiguration = {}));
export var CreateAccessPointForObjectLambdaRequest;
(function (CreateAccessPointForObjectLambdaRequest) {
    /**
     * @internal
     */
    CreateAccessPointForObjectLambdaRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Configuration && { Configuration: ObjectLambdaConfiguration.filterSensitiveLog(obj.Configuration) }))); };
})(CreateAccessPointForObjectLambdaRequest || (CreateAccessPointForObjectLambdaRequest = {}));
export var CreateAccessPointForObjectLambdaResult;
(function (CreateAccessPointForObjectLambdaResult) {
    /**
     * @internal
     */
    CreateAccessPointForObjectLambdaResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAccessPointForObjectLambdaResult || (CreateAccessPointForObjectLambdaResult = {}));
export var BucketAlreadyExists;
(function (BucketAlreadyExists) {
    /**
     * @internal
     */
    BucketAlreadyExists.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketAlreadyExists || (BucketAlreadyExists = {}));
export var BucketAlreadyOwnedByYou;
(function (BucketAlreadyOwnedByYou) {
    /**
     * @internal
     */
    BucketAlreadyOwnedByYou.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketAlreadyOwnedByYou || (BucketAlreadyOwnedByYou = {}));
export var CreateBucketConfiguration;
(function (CreateBucketConfiguration) {
    /**
     * @internal
     */
    CreateBucketConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBucketConfiguration || (CreateBucketConfiguration = {}));
export var CreateBucketRequest;
(function (CreateBucketRequest) {
    /**
     * @internal
     */
    CreateBucketRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBucketRequest || (CreateBucketRequest = {}));
export var CreateBucketResult;
(function (CreateBucketResult) {
    /**
     * @internal
     */
    CreateBucketResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateBucketResult || (CreateBucketResult = {}));
export var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadRequestException || (BadRequestException = {}));
export var JobManifestLocation;
(function (JobManifestLocation) {
    /**
     * @internal
     */
    JobManifestLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobManifestLocation || (JobManifestLocation = {}));
export var JobManifestFieldName;
(function (JobManifestFieldName) {
    JobManifestFieldName["Bucket"] = "Bucket";
    JobManifestFieldName["Ignore"] = "Ignore";
    JobManifestFieldName["Key"] = "Key";
    JobManifestFieldName["VersionId"] = "VersionId";
})(JobManifestFieldName || (JobManifestFieldName = {}));
export var JobManifestFormat;
(function (JobManifestFormat) {
    JobManifestFormat["S3BatchOperations_CSV_20180820"] = "S3BatchOperations_CSV_20180820";
    JobManifestFormat["S3InventoryReport_CSV_20161130"] = "S3InventoryReport_CSV_20161130";
})(JobManifestFormat || (JobManifestFormat = {}));
export var JobManifestSpec;
(function (JobManifestSpec) {
    /**
     * @internal
     */
    JobManifestSpec.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobManifestSpec || (JobManifestSpec = {}));
export var JobManifest;
(function (JobManifest) {
    /**
     * @internal
     */
    JobManifest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobManifest || (JobManifest = {}));
export var LambdaInvokeOperation;
(function (LambdaInvokeOperation) {
    /**
     * @internal
     */
    LambdaInvokeOperation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LambdaInvokeOperation || (LambdaInvokeOperation = {}));
export var S3DeleteObjectTaggingOperation;
(function (S3DeleteObjectTaggingOperation) {
    /**
     * @internal
     */
    S3DeleteObjectTaggingOperation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3DeleteObjectTaggingOperation || (S3DeleteObjectTaggingOperation = {}));
export var S3GlacierJobTier;
(function (S3GlacierJobTier) {
    S3GlacierJobTier["BULK"] = "BULK";
    S3GlacierJobTier["STANDARD"] = "STANDARD";
})(S3GlacierJobTier || (S3GlacierJobTier = {}));
export var S3InitiateRestoreObjectOperation;
(function (S3InitiateRestoreObjectOperation) {
    /**
     * @internal
     */
    S3InitiateRestoreObjectOperation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3InitiateRestoreObjectOperation || (S3InitiateRestoreObjectOperation = {}));
export var S3GranteeTypeIdentifier;
(function (S3GranteeTypeIdentifier) {
    S3GranteeTypeIdentifier["CANONICAL"] = "id";
    S3GranteeTypeIdentifier["EMAIL_ADDRESS"] = "emailAddress";
    S3GranteeTypeIdentifier["GROUP"] = "uri";
})(S3GranteeTypeIdentifier || (S3GranteeTypeIdentifier = {}));
export var S3Grantee;
(function (S3Grantee) {
    /**
     * @internal
     */
    S3Grantee.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Grantee || (S3Grantee = {}));
export var S3Permission;
(function (S3Permission) {
    S3Permission["FULL_CONTROL"] = "FULL_CONTROL";
    S3Permission["READ"] = "READ";
    S3Permission["READ_ACP"] = "READ_ACP";
    S3Permission["WRITE"] = "WRITE";
    S3Permission["WRITE_ACP"] = "WRITE_ACP";
})(S3Permission || (S3Permission = {}));
export var S3Grant;
(function (S3Grant) {
    /**
     * @internal
     */
    S3Grant.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Grant || (S3Grant = {}));
export var S3ObjectOwner;
(function (S3ObjectOwner) {
    /**
     * @internal
     */
    S3ObjectOwner.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3ObjectOwner || (S3ObjectOwner = {}));
export var S3AccessControlList;
(function (S3AccessControlList) {
    /**
     * @internal
     */
    S3AccessControlList.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3AccessControlList || (S3AccessControlList = {}));
export var S3CannedAccessControlList;
(function (S3CannedAccessControlList) {
    S3CannedAccessControlList["AUTHENTICATED_READ"] = "authenticated-read";
    S3CannedAccessControlList["AWS_EXEC_READ"] = "aws-exec-read";
    S3CannedAccessControlList["BUCKET_OWNER_FULL_CONTROL"] = "bucket-owner-full-control";
    S3CannedAccessControlList["BUCKET_OWNER_READ"] = "bucket-owner-read";
    S3CannedAccessControlList["PRIVATE"] = "private";
    S3CannedAccessControlList["PUBLIC_READ"] = "public-read";
    S3CannedAccessControlList["PUBLIC_READ_WRITE"] = "public-read-write";
})(S3CannedAccessControlList || (S3CannedAccessControlList = {}));
export var S3AccessControlPolicy;
(function (S3AccessControlPolicy) {
    /**
     * @internal
     */
    S3AccessControlPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3AccessControlPolicy || (S3AccessControlPolicy = {}));
export var S3SetObjectAclOperation;
(function (S3SetObjectAclOperation) {
    /**
     * @internal
     */
    S3SetObjectAclOperation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3SetObjectAclOperation || (S3SetObjectAclOperation = {}));
export var S3MetadataDirective;
(function (S3MetadataDirective) {
    S3MetadataDirective["COPY"] = "COPY";
    S3MetadataDirective["REPLACE"] = "REPLACE";
})(S3MetadataDirective || (S3MetadataDirective = {}));
export var S3SSEAlgorithm;
(function (S3SSEAlgorithm) {
    S3SSEAlgorithm["AES256"] = "AES256";
    S3SSEAlgorithm["KMS"] = "KMS";
})(S3SSEAlgorithm || (S3SSEAlgorithm = {}));
export var S3ObjectMetadata;
(function (S3ObjectMetadata) {
    /**
     * @internal
     */
    S3ObjectMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3ObjectMetadata || (S3ObjectMetadata = {}));
export var S3Tag;
(function (S3Tag) {
    /**
     * @internal
     */
    S3Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Tag || (S3Tag = {}));
export var S3ObjectLockLegalHoldStatus;
(function (S3ObjectLockLegalHoldStatus) {
    S3ObjectLockLegalHoldStatus["OFF"] = "OFF";
    S3ObjectLockLegalHoldStatus["ON"] = "ON";
})(S3ObjectLockLegalHoldStatus || (S3ObjectLockLegalHoldStatus = {}));
export var S3ObjectLockMode;
(function (S3ObjectLockMode) {
    S3ObjectLockMode["COMPLIANCE"] = "COMPLIANCE";
    S3ObjectLockMode["GOVERNANCE"] = "GOVERNANCE";
})(S3ObjectLockMode || (S3ObjectLockMode = {}));
export var S3StorageClass;
(function (S3StorageClass) {
    S3StorageClass["DEEP_ARCHIVE"] = "DEEP_ARCHIVE";
    S3StorageClass["GLACIER"] = "GLACIER";
    S3StorageClass["INTELLIGENT_TIERING"] = "INTELLIGENT_TIERING";
    S3StorageClass["ONEZONE_IA"] = "ONEZONE_IA";
    S3StorageClass["STANDARD"] = "STANDARD";
    S3StorageClass["STANDARD_IA"] = "STANDARD_IA";
})(S3StorageClass || (S3StorageClass = {}));
export var S3CopyObjectOperation;
(function (S3CopyObjectOperation) {
    /**
     * @internal
     */
    S3CopyObjectOperation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3CopyObjectOperation || (S3CopyObjectOperation = {}));
export var S3ObjectLockLegalHold;
(function (S3ObjectLockLegalHold) {
    /**
     * @internal
     */
    S3ObjectLockLegalHold.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3ObjectLockLegalHold || (S3ObjectLockLegalHold = {}));
export var S3SetObjectLegalHoldOperation;
(function (S3SetObjectLegalHoldOperation) {
    /**
     * @internal
     */
    S3SetObjectLegalHoldOperation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3SetObjectLegalHoldOperation || (S3SetObjectLegalHoldOperation = {}));
export var S3ObjectLockRetentionMode;
(function (S3ObjectLockRetentionMode) {
    S3ObjectLockRetentionMode["COMPLIANCE"] = "COMPLIANCE";
    S3ObjectLockRetentionMode["GOVERNANCE"] = "GOVERNANCE";
})(S3ObjectLockRetentionMode || (S3ObjectLockRetentionMode = {}));
export var S3Retention;
(function (S3Retention) {
    /**
     * @internal
     */
    S3Retention.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Retention || (S3Retention = {}));
export var S3SetObjectRetentionOperation;
(function (S3SetObjectRetentionOperation) {
    /**
     * @internal
     */
    S3SetObjectRetentionOperation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3SetObjectRetentionOperation || (S3SetObjectRetentionOperation = {}));
export var S3SetObjectTaggingOperation;
(function (S3SetObjectTaggingOperation) {
    /**
     * @internal
     */
    S3SetObjectTaggingOperation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3SetObjectTaggingOperation || (S3SetObjectTaggingOperation = {}));
export var JobOperation;
(function (JobOperation) {
    /**
     * @internal
     */
    JobOperation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobOperation || (JobOperation = {}));
export var JobReportFormat;
(function (JobReportFormat) {
    JobReportFormat["Report_CSV_20180820"] = "Report_CSV_20180820";
})(JobReportFormat || (JobReportFormat = {}));
export var JobReportScope;
(function (JobReportScope) {
    JobReportScope["AllTasks"] = "AllTasks";
    JobReportScope["FailedTasksOnly"] = "FailedTasksOnly";
})(JobReportScope || (JobReportScope = {}));
export var JobReport;
(function (JobReport) {
    /**
     * @internal
     */
    JobReport.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobReport || (JobReport = {}));
export var CreateJobRequest;
(function (CreateJobRequest) {
    /**
     * @internal
     */
    CreateJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJobRequest || (CreateJobRequest = {}));
export var CreateJobResult;
(function (CreateJobResult) {
    /**
     * @internal
     */
    CreateJobResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJobResult || (CreateJobResult = {}));
export var IdempotencyException;
(function (IdempotencyException) {
    /**
     * @internal
     */
    IdempotencyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdempotencyException || (IdempotencyException = {}));
export var InternalServiceException;
(function (InternalServiceException) {
    /**
     * @internal
     */
    InternalServiceException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServiceException || (InternalServiceException = {}));
export var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyRequestsException || (TooManyRequestsException = {}));
export var DeleteAccessPointRequest;
(function (DeleteAccessPointRequest) {
    /**
     * @internal
     */
    DeleteAccessPointRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAccessPointRequest || (DeleteAccessPointRequest = {}));
export var DeleteAccessPointForObjectLambdaRequest;
(function (DeleteAccessPointForObjectLambdaRequest) {
    /**
     * @internal
     */
    DeleteAccessPointForObjectLambdaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAccessPointForObjectLambdaRequest || (DeleteAccessPointForObjectLambdaRequest = {}));
export var DeleteAccessPointPolicyRequest;
(function (DeleteAccessPointPolicyRequest) {
    /**
     * @internal
     */
    DeleteAccessPointPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAccessPointPolicyRequest || (DeleteAccessPointPolicyRequest = {}));
export var DeleteAccessPointPolicyForObjectLambdaRequest;
(function (DeleteAccessPointPolicyForObjectLambdaRequest) {
    /**
     * @internal
     */
    DeleteAccessPointPolicyForObjectLambdaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAccessPointPolicyForObjectLambdaRequest || (DeleteAccessPointPolicyForObjectLambdaRequest = {}));
export var DeleteBucketRequest;
(function (DeleteBucketRequest) {
    /**
     * @internal
     */
    DeleteBucketRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketRequest || (DeleteBucketRequest = {}));
export var DeleteBucketLifecycleConfigurationRequest;
(function (DeleteBucketLifecycleConfigurationRequest) {
    /**
     * @internal
     */
    DeleteBucketLifecycleConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketLifecycleConfigurationRequest || (DeleteBucketLifecycleConfigurationRequest = {}));
export var DeleteBucketPolicyRequest;
(function (DeleteBucketPolicyRequest) {
    /**
     * @internal
     */
    DeleteBucketPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketPolicyRequest || (DeleteBucketPolicyRequest = {}));
export var DeleteBucketTaggingRequest;
(function (DeleteBucketTaggingRequest) {
    /**
     * @internal
     */
    DeleteBucketTaggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBucketTaggingRequest || (DeleteBucketTaggingRequest = {}));
export var DeleteJobTaggingRequest;
(function (DeleteJobTaggingRequest) {
    /**
     * @internal
     */
    DeleteJobTaggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteJobTaggingRequest || (DeleteJobTaggingRequest = {}));
export var DeleteJobTaggingResult;
(function (DeleteJobTaggingResult) {
    /**
     * @internal
     */
    DeleteJobTaggingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteJobTaggingResult || (DeleteJobTaggingResult = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var DeletePublicAccessBlockRequest;
(function (DeletePublicAccessBlockRequest) {
    /**
     * @internal
     */
    DeletePublicAccessBlockRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePublicAccessBlockRequest || (DeletePublicAccessBlockRequest = {}));
export var DeleteStorageLensConfigurationRequest;
(function (DeleteStorageLensConfigurationRequest) {
    /**
     * @internal
     */
    DeleteStorageLensConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStorageLensConfigurationRequest || (DeleteStorageLensConfigurationRequest = {}));
export var DeleteStorageLensConfigurationTaggingRequest;
(function (DeleteStorageLensConfigurationTaggingRequest) {
    /**
     * @internal
     */
    DeleteStorageLensConfigurationTaggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStorageLensConfigurationTaggingRequest || (DeleteStorageLensConfigurationTaggingRequest = {}));
export var DeleteStorageLensConfigurationTaggingResult;
(function (DeleteStorageLensConfigurationTaggingResult) {
    /**
     * @internal
     */
    DeleteStorageLensConfigurationTaggingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteStorageLensConfigurationTaggingResult || (DeleteStorageLensConfigurationTaggingResult = {}));
export var DescribeJobRequest;
(function (DescribeJobRequest) {
    /**
     * @internal
     */
    DescribeJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJobRequest || (DescribeJobRequest = {}));
export var JobFailure;
(function (JobFailure) {
    /**
     * @internal
     */
    JobFailure.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobFailure || (JobFailure = {}));
export var JobProgressSummary;
(function (JobProgressSummary) {
    /**
     * @internal
     */
    JobProgressSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobProgressSummary || (JobProgressSummary = {}));
export var JobStatus;
(function (JobStatus) {
    JobStatus["Active"] = "Active";
    JobStatus["Cancelled"] = "Cancelled";
    JobStatus["Cancelling"] = "Cancelling";
    JobStatus["Complete"] = "Complete";
    JobStatus["Completing"] = "Completing";
    JobStatus["Failed"] = "Failed";
    JobStatus["Failing"] = "Failing";
    JobStatus["New"] = "New";
    JobStatus["Paused"] = "Paused";
    JobStatus["Pausing"] = "Pausing";
    JobStatus["Preparing"] = "Preparing";
    JobStatus["Ready"] = "Ready";
    JobStatus["Suspended"] = "Suspended";
})(JobStatus || (JobStatus = {}));
export var JobDescriptor;
(function (JobDescriptor) {
    /**
     * @internal
     */
    JobDescriptor.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobDescriptor || (JobDescriptor = {}));
export var DescribeJobResult;
(function (DescribeJobResult) {
    /**
     * @internal
     */
    DescribeJobResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeJobResult || (DescribeJobResult = {}));
export var GetAccessPointRequest;
(function (GetAccessPointRequest) {
    /**
     * @internal
     */
    GetAccessPointRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessPointRequest || (GetAccessPointRequest = {}));
export var GetAccessPointResult;
(function (GetAccessPointResult) {
    /**
     * @internal
     */
    GetAccessPointResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessPointResult || (GetAccessPointResult = {}));
export var GetAccessPointConfigurationForObjectLambdaRequest;
(function (GetAccessPointConfigurationForObjectLambdaRequest) {
    /**
     * @internal
     */
    GetAccessPointConfigurationForObjectLambdaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessPointConfigurationForObjectLambdaRequest || (GetAccessPointConfigurationForObjectLambdaRequest = {}));
export var GetAccessPointConfigurationForObjectLambdaResult;
(function (GetAccessPointConfigurationForObjectLambdaResult) {
    /**
     * @internal
     */
    GetAccessPointConfigurationForObjectLambdaResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Configuration && { Configuration: ObjectLambdaConfiguration.filterSensitiveLog(obj.Configuration) }))); };
})(GetAccessPointConfigurationForObjectLambdaResult || (GetAccessPointConfigurationForObjectLambdaResult = {}));
export var GetAccessPointForObjectLambdaRequest;
(function (GetAccessPointForObjectLambdaRequest) {
    /**
     * @internal
     */
    GetAccessPointForObjectLambdaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessPointForObjectLambdaRequest || (GetAccessPointForObjectLambdaRequest = {}));
export var GetAccessPointForObjectLambdaResult;
(function (GetAccessPointForObjectLambdaResult) {
    /**
     * @internal
     */
    GetAccessPointForObjectLambdaResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessPointForObjectLambdaResult || (GetAccessPointForObjectLambdaResult = {}));
export var GetAccessPointPolicyRequest;
(function (GetAccessPointPolicyRequest) {
    /**
     * @internal
     */
    GetAccessPointPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessPointPolicyRequest || (GetAccessPointPolicyRequest = {}));
export var GetAccessPointPolicyResult;
(function (GetAccessPointPolicyResult) {
    /**
     * @internal
     */
    GetAccessPointPolicyResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessPointPolicyResult || (GetAccessPointPolicyResult = {}));
export var GetAccessPointPolicyForObjectLambdaRequest;
(function (GetAccessPointPolicyForObjectLambdaRequest) {
    /**
     * @internal
     */
    GetAccessPointPolicyForObjectLambdaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessPointPolicyForObjectLambdaRequest || (GetAccessPointPolicyForObjectLambdaRequest = {}));
export var GetAccessPointPolicyForObjectLambdaResult;
(function (GetAccessPointPolicyForObjectLambdaResult) {
    /**
     * @internal
     */
    GetAccessPointPolicyForObjectLambdaResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessPointPolicyForObjectLambdaResult || (GetAccessPointPolicyForObjectLambdaResult = {}));
export var GetAccessPointPolicyStatusRequest;
(function (GetAccessPointPolicyStatusRequest) {
    /**
     * @internal
     */
    GetAccessPointPolicyStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessPointPolicyStatusRequest || (GetAccessPointPolicyStatusRequest = {}));
export var PolicyStatus;
(function (PolicyStatus) {
    /**
     * @internal
     */
    PolicyStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyStatus || (PolicyStatus = {}));
export var GetAccessPointPolicyStatusResult;
(function (GetAccessPointPolicyStatusResult) {
    /**
     * @internal
     */
    GetAccessPointPolicyStatusResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessPointPolicyStatusResult || (GetAccessPointPolicyStatusResult = {}));
export var GetAccessPointPolicyStatusForObjectLambdaRequest;
(function (GetAccessPointPolicyStatusForObjectLambdaRequest) {
    /**
     * @internal
     */
    GetAccessPointPolicyStatusForObjectLambdaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessPointPolicyStatusForObjectLambdaRequest || (GetAccessPointPolicyStatusForObjectLambdaRequest = {}));
export var GetAccessPointPolicyStatusForObjectLambdaResult;
(function (GetAccessPointPolicyStatusForObjectLambdaResult) {
    /**
     * @internal
     */
    GetAccessPointPolicyStatusForObjectLambdaResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccessPointPolicyStatusForObjectLambdaResult || (GetAccessPointPolicyStatusForObjectLambdaResult = {}));
export var GetBucketRequest;
(function (GetBucketRequest) {
    /**
     * @internal
     */
    GetBucketRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketRequest || (GetBucketRequest = {}));
export var GetBucketResult;
(function (GetBucketResult) {
    /**
     * @internal
     */
    GetBucketResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketResult || (GetBucketResult = {}));
export var GetBucketLifecycleConfigurationRequest;
(function (GetBucketLifecycleConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketLifecycleConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketLifecycleConfigurationRequest || (GetBucketLifecycleConfigurationRequest = {}));
export var LifecycleExpiration;
(function (LifecycleExpiration) {
    /**
     * @internal
     */
    LifecycleExpiration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifecycleExpiration || (LifecycleExpiration = {}));
export var LifecycleRuleAndOperator;
(function (LifecycleRuleAndOperator) {
    /**
     * @internal
     */
    LifecycleRuleAndOperator.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifecycleRuleAndOperator || (LifecycleRuleAndOperator = {}));
export var LifecycleRuleFilter;
(function (LifecycleRuleFilter) {
    /**
     * @internal
     */
    LifecycleRuleFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifecycleRuleFilter || (LifecycleRuleFilter = {}));
export var NoncurrentVersionExpiration;
(function (NoncurrentVersionExpiration) {
    /**
     * @internal
     */
    NoncurrentVersionExpiration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoncurrentVersionExpiration || (NoncurrentVersionExpiration = {}));
export var NoncurrentVersionTransition;
(function (NoncurrentVersionTransition) {
    /**
     * @internal
     */
    NoncurrentVersionTransition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoncurrentVersionTransition || (NoncurrentVersionTransition = {}));
export var Transition;
(function (Transition) {
    /**
     * @internal
     */
    Transition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Transition || (Transition = {}));
export var LifecycleRule;
(function (LifecycleRule) {
    /**
     * @internal
     */
    LifecycleRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifecycleRule || (LifecycleRule = {}));
export var GetBucketLifecycleConfigurationResult;
(function (GetBucketLifecycleConfigurationResult) {
    /**
     * @internal
     */
    GetBucketLifecycleConfigurationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketLifecycleConfigurationResult || (GetBucketLifecycleConfigurationResult = {}));
export var GetBucketPolicyRequest;
(function (GetBucketPolicyRequest) {
    /**
     * @internal
     */
    GetBucketPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketPolicyRequest || (GetBucketPolicyRequest = {}));
export var GetBucketPolicyResult;
(function (GetBucketPolicyResult) {
    /**
     * @internal
     */
    GetBucketPolicyResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketPolicyResult || (GetBucketPolicyResult = {}));
export var GetBucketTaggingRequest;
(function (GetBucketTaggingRequest) {
    /**
     * @internal
     */
    GetBucketTaggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketTaggingRequest || (GetBucketTaggingRequest = {}));
export var GetBucketTaggingResult;
(function (GetBucketTaggingResult) {
    /**
     * @internal
     */
    GetBucketTaggingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketTaggingResult || (GetBucketTaggingResult = {}));
export var GetJobTaggingRequest;
(function (GetJobTaggingRequest) {
    /**
     * @internal
     */
    GetJobTaggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJobTaggingRequest || (GetJobTaggingRequest = {}));
export var GetJobTaggingResult;
(function (GetJobTaggingResult) {
    /**
     * @internal
     */
    GetJobTaggingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJobTaggingResult || (GetJobTaggingResult = {}));
export var GetPublicAccessBlockOutput;
(function (GetPublicAccessBlockOutput) {
    /**
     * @internal
     */
    GetPublicAccessBlockOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPublicAccessBlockOutput || (GetPublicAccessBlockOutput = {}));
export var GetPublicAccessBlockRequest;
(function (GetPublicAccessBlockRequest) {
    /**
     * @internal
     */
    GetPublicAccessBlockRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPublicAccessBlockRequest || (GetPublicAccessBlockRequest = {}));
export var NoSuchPublicAccessBlockConfiguration;
(function (NoSuchPublicAccessBlockConfiguration) {
    /**
     * @internal
     */
    NoSuchPublicAccessBlockConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoSuchPublicAccessBlockConfiguration || (NoSuchPublicAccessBlockConfiguration = {}));
export var GetStorageLensConfigurationRequest;
(function (GetStorageLensConfigurationRequest) {
    /**
     * @internal
     */
    GetStorageLensConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStorageLensConfigurationRequest || (GetStorageLensConfigurationRequest = {}));
export var StorageLensAwsOrg;
(function (StorageLensAwsOrg) {
    /**
     * @internal
     */
    StorageLensAwsOrg.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorageLensAwsOrg || (StorageLensAwsOrg = {}));
export var SSEKMS;
(function (SSEKMS) {
    /**
     * @internal
     */
    SSEKMS.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SSEKMS || (SSEKMS = {}));
export var SSES3;
(function (SSES3) {
    /**
     * @internal
     */
    SSES3.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SSES3 || (SSES3 = {}));
export var StorageLensDataExportEncryption;
(function (StorageLensDataExportEncryption) {
    /**
     * @internal
     */
    StorageLensDataExportEncryption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorageLensDataExportEncryption || (StorageLensDataExportEncryption = {}));
export var S3BucketDestination;
(function (S3BucketDestination) {
    /**
     * @internal
     */
    S3BucketDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3BucketDestination || (S3BucketDestination = {}));
export var StorageLensDataExport;
(function (StorageLensDataExport) {
    /**
     * @internal
     */
    StorageLensDataExport.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorageLensDataExport || (StorageLensDataExport = {}));
export var _Exclude;
(function (_Exclude) {
    /**
     * @internal
     */
    _Exclude.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(_Exclude || (_Exclude = {}));
export var Include;
(function (Include) {
    /**
     * @internal
     */
    Include.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Include || (Include = {}));
export var StorageLensConfiguration;
(function (StorageLensConfiguration) {
    /**
     * @internal
     */
    StorageLensConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorageLensConfiguration || (StorageLensConfiguration = {}));
export var GetStorageLensConfigurationResult;
(function (GetStorageLensConfigurationResult) {
    /**
     * @internal
     */
    GetStorageLensConfigurationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStorageLensConfigurationResult || (GetStorageLensConfigurationResult = {}));
export var GetStorageLensConfigurationTaggingRequest;
(function (GetStorageLensConfigurationTaggingRequest) {
    /**
     * @internal
     */
    GetStorageLensConfigurationTaggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStorageLensConfigurationTaggingRequest || (GetStorageLensConfigurationTaggingRequest = {}));
export var StorageLensTag;
(function (StorageLensTag) {
    /**
     * @internal
     */
    StorageLensTag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorageLensTag || (StorageLensTag = {}));
export var GetStorageLensConfigurationTaggingResult;
(function (GetStorageLensConfigurationTaggingResult) {
    /**
     * @internal
     */
    GetStorageLensConfigurationTaggingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetStorageLensConfigurationTaggingResult || (GetStorageLensConfigurationTaggingResult = {}));
export var ListAccessPointsRequest;
(function (ListAccessPointsRequest) {
    /**
     * @internal
     */
    ListAccessPointsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccessPointsRequest || (ListAccessPointsRequest = {}));
export var ListAccessPointsResult;
(function (ListAccessPointsResult) {
    /**
     * @internal
     */
    ListAccessPointsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccessPointsResult || (ListAccessPointsResult = {}));
export var ListAccessPointsForObjectLambdaRequest;
(function (ListAccessPointsForObjectLambdaRequest) {
    /**
     * @internal
     */
    ListAccessPointsForObjectLambdaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccessPointsForObjectLambdaRequest || (ListAccessPointsForObjectLambdaRequest = {}));
export var ObjectLambdaAccessPoint;
(function (ObjectLambdaAccessPoint) {
    /**
     * @internal
     */
    ObjectLambdaAccessPoint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ObjectLambdaAccessPoint || (ObjectLambdaAccessPoint = {}));
export var ListAccessPointsForObjectLambdaResult;
(function (ListAccessPointsForObjectLambdaResult) {
    /**
     * @internal
     */
    ListAccessPointsForObjectLambdaResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccessPointsForObjectLambdaResult || (ListAccessPointsForObjectLambdaResult = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRequestException || (InvalidRequestException = {}));
export var ListJobsRequest;
(function (ListJobsRequest) {
    /**
     * @internal
     */
    ListJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobsRequest || (ListJobsRequest = {}));
export var OperationName;
(function (OperationName) {
    OperationName["LambdaInvoke"] = "LambdaInvoke";
    OperationName["S3DeleteObjectTagging"] = "S3DeleteObjectTagging";
    OperationName["S3InitiateRestoreObject"] = "S3InitiateRestoreObject";
    OperationName["S3PutObjectAcl"] = "S3PutObjectAcl";
    OperationName["S3PutObjectCopy"] = "S3PutObjectCopy";
    OperationName["S3PutObjectLegalHold"] = "S3PutObjectLegalHold";
    OperationName["S3PutObjectRetention"] = "S3PutObjectRetention";
    OperationName["S3PutObjectTagging"] = "S3PutObjectTagging";
})(OperationName || (OperationName = {}));
export var JobListDescriptor;
(function (JobListDescriptor) {
    /**
     * @internal
     */
    JobListDescriptor.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobListDescriptor || (JobListDescriptor = {}));
export var ListJobsResult;
(function (ListJobsResult) {
    /**
     * @internal
     */
    ListJobsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobsResult || (ListJobsResult = {}));
export var ListRegionalBucketsRequest;
(function (ListRegionalBucketsRequest) {
    /**
     * @internal
     */
    ListRegionalBucketsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRegionalBucketsRequest || (ListRegionalBucketsRequest = {}));
export var RegionalBucket;
(function (RegionalBucket) {
    /**
     * @internal
     */
    RegionalBucket.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegionalBucket || (RegionalBucket = {}));
export var ListRegionalBucketsResult;
(function (ListRegionalBucketsResult) {
    /**
     * @internal
     */
    ListRegionalBucketsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRegionalBucketsResult || (ListRegionalBucketsResult = {}));
export var ListStorageLensConfigurationsRequest;
(function (ListStorageLensConfigurationsRequest) {
    /**
     * @internal
     */
    ListStorageLensConfigurationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStorageLensConfigurationsRequest || (ListStorageLensConfigurationsRequest = {}));
export var ListStorageLensConfigurationEntry;
(function (ListStorageLensConfigurationEntry) {
    /**
     * @internal
     */
    ListStorageLensConfigurationEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStorageLensConfigurationEntry || (ListStorageLensConfigurationEntry = {}));
export var ListStorageLensConfigurationsResult;
(function (ListStorageLensConfigurationsResult) {
    /**
     * @internal
     */
    ListStorageLensConfigurationsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListStorageLensConfigurationsResult || (ListStorageLensConfigurationsResult = {}));
export var PutAccessPointConfigurationForObjectLambdaRequest;
(function (PutAccessPointConfigurationForObjectLambdaRequest) {
    /**
     * @internal
     */
    PutAccessPointConfigurationForObjectLambdaRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Configuration && { Configuration: ObjectLambdaConfiguration.filterSensitiveLog(obj.Configuration) }))); };
})(PutAccessPointConfigurationForObjectLambdaRequest || (PutAccessPointConfigurationForObjectLambdaRequest = {}));
export var PutAccessPointPolicyRequest;
(function (PutAccessPointPolicyRequest) {
    /**
     * @internal
     */
    PutAccessPointPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAccessPointPolicyRequest || (PutAccessPointPolicyRequest = {}));
export var PutAccessPointPolicyForObjectLambdaRequest;
(function (PutAccessPointPolicyForObjectLambdaRequest) {
    /**
     * @internal
     */
    PutAccessPointPolicyForObjectLambdaRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAccessPointPolicyForObjectLambdaRequest || (PutAccessPointPolicyForObjectLambdaRequest = {}));
export var LifecycleConfiguration;
(function (LifecycleConfiguration) {
    /**
     * @internal
     */
    LifecycleConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LifecycleConfiguration || (LifecycleConfiguration = {}));
export var PutBucketLifecycleConfigurationRequest;
(function (PutBucketLifecycleConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketLifecycleConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBucketLifecycleConfigurationRequest || (PutBucketLifecycleConfigurationRequest = {}));
export var PutBucketPolicyRequest;
(function (PutBucketPolicyRequest) {
    /**
     * @internal
     */
    PutBucketPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBucketPolicyRequest || (PutBucketPolicyRequest = {}));
export var Tagging;
(function (Tagging) {
    /**
     * @internal
     */
    Tagging.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tagging || (Tagging = {}));
export var PutBucketTaggingRequest;
(function (PutBucketTaggingRequest) {
    /**
     * @internal
     */
    PutBucketTaggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutBucketTaggingRequest || (PutBucketTaggingRequest = {}));
export var PutJobTaggingRequest;
(function (PutJobTaggingRequest) {
    /**
     * @internal
     */
    PutJobTaggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutJobTaggingRequest || (PutJobTaggingRequest = {}));
export var PutJobTaggingResult;
(function (PutJobTaggingResult) {
    /**
     * @internal
     */
    PutJobTaggingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutJobTaggingResult || (PutJobTaggingResult = {}));
export var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyTagsException || (TooManyTagsException = {}));
export var PutPublicAccessBlockRequest;
(function (PutPublicAccessBlockRequest) {
    /**
     * @internal
     */
    PutPublicAccessBlockRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutPublicAccessBlockRequest || (PutPublicAccessBlockRequest = {}));
export var PutStorageLensConfigurationRequest;
(function (PutStorageLensConfigurationRequest) {
    /**
     * @internal
     */
    PutStorageLensConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutStorageLensConfigurationRequest || (PutStorageLensConfigurationRequest = {}));
export var PutStorageLensConfigurationTaggingRequest;
(function (PutStorageLensConfigurationTaggingRequest) {
    /**
     * @internal
     */
    PutStorageLensConfigurationTaggingRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutStorageLensConfigurationTaggingRequest || (PutStorageLensConfigurationTaggingRequest = {}));
export var PutStorageLensConfigurationTaggingResult;
(function (PutStorageLensConfigurationTaggingResult) {
    /**
     * @internal
     */
    PutStorageLensConfigurationTaggingResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutStorageLensConfigurationTaggingResult || (PutStorageLensConfigurationTaggingResult = {}));
export var UpdateJobPriorityRequest;
(function (UpdateJobPriorityRequest) {
    /**
     * @internal
     */
    UpdateJobPriorityRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateJobPriorityRequest || (UpdateJobPriorityRequest = {}));
export var UpdateJobPriorityResult;
(function (UpdateJobPriorityResult) {
    /**
     * @internal
     */
    UpdateJobPriorityResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateJobPriorityResult || (UpdateJobPriorityResult = {}));
export var JobStatusException;
(function (JobStatusException) {
    /**
     * @internal
     */
    JobStatusException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobStatusException || (JobStatusException = {}));
export var RequestedJobStatus;
(function (RequestedJobStatus) {
    RequestedJobStatus["Cancelled"] = "Cancelled";
    RequestedJobStatus["Ready"] = "Ready";
})(RequestedJobStatus || (RequestedJobStatus = {}));
export var UpdateJobStatusRequest;
(function (UpdateJobStatusRequest) {
    /**
     * @internal
     */
    UpdateJobStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateJobStatusRequest || (UpdateJobStatusRequest = {}));
export var UpdateJobStatusResult;
(function (UpdateJobStatusResult) {
    /**
     * @internal
     */
    UpdateJobStatusResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateJobStatusResult || (UpdateJobStatusResult = {}));
//# sourceMappingURL=models_0.js.map