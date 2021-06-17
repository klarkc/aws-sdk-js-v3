"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3ObjectLockLegalHoldStatus = exports.S3Tag = exports.S3ObjectMetadata = exports.S3SSEAlgorithm = exports.S3MetadataDirective = exports.S3SetObjectAclOperation = exports.S3AccessControlPolicy = exports.S3CannedAccessControlList = exports.S3AccessControlList = exports.S3ObjectOwner = exports.S3Grant = exports.S3Permission = exports.S3Grantee = exports.S3GranteeTypeIdentifier = exports.S3InitiateRestoreObjectOperation = exports.S3GlacierJobTier = exports.S3DeleteObjectTaggingOperation = exports.LambdaInvokeOperation = exports.JobManifest = exports.JobManifestSpec = exports.JobManifestFormat = exports.JobManifestFieldName = exports.JobManifestLocation = exports.BadRequestException = exports.CreateBucketResult = exports.CreateBucketRequest = exports.CreateBucketConfiguration = exports.BucketAlreadyOwnedByYou = exports.BucketAlreadyExists = exports.CreateAccessPointForObjectLambdaResult = exports.CreateAccessPointForObjectLambdaRequest = exports.ObjectLambdaConfiguration = exports.ObjectLambdaTransformationConfiguration = exports.ObjectLambdaContentTransformation = exports.ObjectLambdaTransformationConfigurationAction = exports.ObjectLambdaAllowedFeature = exports.CreateAccessPointResult = exports.CreateAccessPointRequest = exports.PublicAccessBlockConfiguration = exports.AwsLambdaTransformation = exports.AccountLevel = exports.BucketLevel = exports.PrefixLevel = exports.PrefixLevelStorageMetrics = exports.SelectionCriteria = exports.ActivityMetrics = exports.AccessPoint = exports.VpcConfiguration = exports.NetworkOrigin = exports.AbortIncompleteMultipartUpload = void 0;
exports.GetAccessPointPolicyStatusRequest = exports.GetAccessPointPolicyForObjectLambdaResult = exports.GetAccessPointPolicyForObjectLambdaRequest = exports.GetAccessPointPolicyResult = exports.GetAccessPointPolicyRequest = exports.GetAccessPointForObjectLambdaResult = exports.GetAccessPointForObjectLambdaRequest = exports.GetAccessPointConfigurationForObjectLambdaResult = exports.GetAccessPointConfigurationForObjectLambdaRequest = exports.GetAccessPointResult = exports.GetAccessPointRequest = exports.DescribeJobResult = exports.JobDescriptor = exports.JobStatus = exports.JobProgressSummary = exports.JobFailure = exports.DescribeJobRequest = exports.DeleteStorageLensConfigurationTaggingResult = exports.DeleteStorageLensConfigurationTaggingRequest = exports.DeleteStorageLensConfigurationRequest = exports.DeletePublicAccessBlockRequest = exports.NotFoundException = exports.DeleteJobTaggingResult = exports.DeleteJobTaggingRequest = exports.DeleteBucketTaggingRequest = exports.DeleteBucketPolicyRequest = exports.DeleteBucketLifecycleConfigurationRequest = exports.DeleteBucketRequest = exports.DeleteAccessPointPolicyForObjectLambdaRequest = exports.DeleteAccessPointPolicyRequest = exports.DeleteAccessPointForObjectLambdaRequest = exports.DeleteAccessPointRequest = exports.TooManyRequestsException = exports.InternalServiceException = exports.IdempotencyException = exports.CreateJobResult = exports.CreateJobRequest = exports.JobReport = exports.JobReportScope = exports.JobReportFormat = exports.JobOperation = exports.S3SetObjectTaggingOperation = exports.S3SetObjectRetentionOperation = exports.S3Retention = exports.S3ObjectLockRetentionMode = exports.S3SetObjectLegalHoldOperation = exports.S3ObjectLockLegalHold = exports.S3CopyObjectOperation = exports.S3StorageClass = exports.S3ObjectLockMode = void 0;
exports.ListRegionalBucketsRequest = exports.ListJobsResult = exports.JobListDescriptor = exports.OperationName = exports.ListJobsRequest = exports.InvalidRequestException = exports.InvalidNextTokenException = exports.ListAccessPointsForObjectLambdaResult = exports.ObjectLambdaAccessPoint = exports.ListAccessPointsForObjectLambdaRequest = exports.ListAccessPointsResult = exports.ListAccessPointsRequest = exports.GetStorageLensConfigurationTaggingResult = exports.StorageLensTag = exports.GetStorageLensConfigurationTaggingRequest = exports.GetStorageLensConfigurationResult = exports.StorageLensConfiguration = exports.Include = exports._Exclude = exports.StorageLensDataExport = exports.S3BucketDestination = exports.StorageLensDataExportEncryption = exports.SSES3 = exports.SSEKMS = exports.StorageLensAwsOrg = exports.GetStorageLensConfigurationRequest = exports.NoSuchPublicAccessBlockConfiguration = exports.GetPublicAccessBlockRequest = exports.GetPublicAccessBlockOutput = exports.GetJobTaggingResult = exports.GetJobTaggingRequest = exports.GetBucketTaggingResult = exports.GetBucketTaggingRequest = exports.GetBucketPolicyResult = exports.GetBucketPolicyRequest = exports.GetBucketLifecycleConfigurationResult = exports.LifecycleRule = exports.Transition = exports.NoncurrentVersionTransition = exports.NoncurrentVersionExpiration = exports.LifecycleRuleFilter = exports.LifecycleRuleAndOperator = exports.LifecycleExpiration = exports.GetBucketLifecycleConfigurationRequest = exports.GetBucketResult = exports.GetBucketRequest = exports.GetAccessPointPolicyStatusForObjectLambdaResult = exports.GetAccessPointPolicyStatusForObjectLambdaRequest = exports.GetAccessPointPolicyStatusResult = exports.PolicyStatus = void 0;
exports.UpdateJobStatusResult = exports.UpdateJobStatusRequest = exports.RequestedJobStatus = exports.JobStatusException = exports.UpdateJobPriorityResult = exports.UpdateJobPriorityRequest = exports.PutStorageLensConfigurationTaggingResult = exports.PutStorageLensConfigurationTaggingRequest = exports.PutStorageLensConfigurationRequest = exports.PutPublicAccessBlockRequest = exports.TooManyTagsException = exports.PutJobTaggingResult = exports.PutJobTaggingRequest = exports.PutBucketTaggingRequest = exports.Tagging = exports.PutBucketPolicyRequest = exports.PutBucketLifecycleConfigurationRequest = exports.LifecycleConfiguration = exports.PutAccessPointPolicyForObjectLambdaRequest = exports.PutAccessPointPolicyRequest = exports.PutAccessPointConfigurationForObjectLambdaRequest = exports.ListStorageLensConfigurationsResult = exports.ListStorageLensConfigurationEntry = exports.ListStorageLensConfigurationsRequest = exports.ListRegionalBucketsResult = exports.RegionalBucket = void 0;
var AbortIncompleteMultipartUpload;
(function (AbortIncompleteMultipartUpload) {
    /**
     * @internal
     */
    AbortIncompleteMultipartUpload.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AbortIncompleteMultipartUpload = exports.AbortIncompleteMultipartUpload || (exports.AbortIncompleteMultipartUpload = {}));
var NetworkOrigin;
(function (NetworkOrigin) {
    NetworkOrigin["Internet"] = "Internet";
    NetworkOrigin["VPC"] = "VPC";
})(NetworkOrigin = exports.NetworkOrigin || (exports.NetworkOrigin = {}));
var VpcConfiguration;
(function (VpcConfiguration) {
    /**
     * @internal
     */
    VpcConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcConfiguration = exports.VpcConfiguration || (exports.VpcConfiguration = {}));
var AccessPoint;
(function (AccessPoint) {
    /**
     * @internal
     */
    AccessPoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessPoint = exports.AccessPoint || (exports.AccessPoint = {}));
var ActivityMetrics;
(function (ActivityMetrics) {
    /**
     * @internal
     */
    ActivityMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityMetrics = exports.ActivityMetrics || (exports.ActivityMetrics = {}));
var SelectionCriteria;
(function (SelectionCriteria) {
    /**
     * @internal
     */
    SelectionCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SelectionCriteria = exports.SelectionCriteria || (exports.SelectionCriteria = {}));
var PrefixLevelStorageMetrics;
(function (PrefixLevelStorageMetrics) {
    /**
     * @internal
     */
    PrefixLevelStorageMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrefixLevelStorageMetrics = exports.PrefixLevelStorageMetrics || (exports.PrefixLevelStorageMetrics = {}));
var PrefixLevel;
(function (PrefixLevel) {
    /**
     * @internal
     */
    PrefixLevel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PrefixLevel = exports.PrefixLevel || (exports.PrefixLevel = {}));
var BucketLevel;
(function (BucketLevel) {
    /**
     * @internal
     */
    BucketLevel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketLevel = exports.BucketLevel || (exports.BucketLevel = {}));
var AccountLevel;
(function (AccountLevel) {
    /**
     * @internal
     */
    AccountLevel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountLevel = exports.AccountLevel || (exports.AccountLevel = {}));
var AwsLambdaTransformation;
(function (AwsLambdaTransformation) {
    /**
     * @internal
     */
    AwsLambdaTransformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsLambdaTransformation = exports.AwsLambdaTransformation || (exports.AwsLambdaTransformation = {}));
var PublicAccessBlockConfiguration;
(function (PublicAccessBlockConfiguration) {
    /**
     * @internal
     */
    PublicAccessBlockConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublicAccessBlockConfiguration = exports.PublicAccessBlockConfiguration || (exports.PublicAccessBlockConfiguration = {}));
var CreateAccessPointRequest;
(function (CreateAccessPointRequest) {
    /**
     * @internal
     */
    CreateAccessPointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAccessPointRequest = exports.CreateAccessPointRequest || (exports.CreateAccessPointRequest = {}));
var CreateAccessPointResult;
(function (CreateAccessPointResult) {
    /**
     * @internal
     */
    CreateAccessPointResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAccessPointResult = exports.CreateAccessPointResult || (exports.CreateAccessPointResult = {}));
var ObjectLambdaAllowedFeature;
(function (ObjectLambdaAllowedFeature) {
    ObjectLambdaAllowedFeature["GetObjectPartNumber"] = "GetObject-PartNumber";
    ObjectLambdaAllowedFeature["GetObjectRange"] = "GetObject-Range";
})(ObjectLambdaAllowedFeature = exports.ObjectLambdaAllowedFeature || (exports.ObjectLambdaAllowedFeature = {}));
var ObjectLambdaTransformationConfigurationAction;
(function (ObjectLambdaTransformationConfigurationAction) {
    ObjectLambdaTransformationConfigurationAction["GetObject"] = "GetObject";
})(ObjectLambdaTransformationConfigurationAction = exports.ObjectLambdaTransformationConfigurationAction || (exports.ObjectLambdaTransformationConfigurationAction = {}));
var ObjectLambdaContentTransformation;
(function (ObjectLambdaContentTransformation) {
    ObjectLambdaContentTransformation.visit = (value, visitor) => {
        if (value.AwsLambda !== undefined)
            return visitor.AwsLambda(value.AwsLambda);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    ObjectLambdaContentTransformation.filterSensitiveLog = (obj) => {
        if (obj.AwsLambda !== undefined)
            return { AwsLambda: AwsLambdaTransformation.filterSensitiveLog(obj.AwsLambda) };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(ObjectLambdaContentTransformation = exports.ObjectLambdaContentTransformation || (exports.ObjectLambdaContentTransformation = {}));
var ObjectLambdaTransformationConfiguration;
(function (ObjectLambdaTransformationConfiguration) {
    /**
     * @internal
     */
    ObjectLambdaTransformationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ContentTransformation && {
            ContentTransformation: ObjectLambdaContentTransformation.filterSensitiveLog(obj.ContentTransformation),
        }),
    });
})(ObjectLambdaTransformationConfiguration = exports.ObjectLambdaTransformationConfiguration || (exports.ObjectLambdaTransformationConfiguration = {}));
var ObjectLambdaConfiguration;
(function (ObjectLambdaConfiguration) {
    /**
     * @internal
     */
    ObjectLambdaConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TransformationConfigurations && {
            TransformationConfigurations: obj.TransformationConfigurations.map((item) => ObjectLambdaTransformationConfiguration.filterSensitiveLog(item)),
        }),
    });
})(ObjectLambdaConfiguration = exports.ObjectLambdaConfiguration || (exports.ObjectLambdaConfiguration = {}));
var CreateAccessPointForObjectLambdaRequest;
(function (CreateAccessPointForObjectLambdaRequest) {
    /**
     * @internal
     */
    CreateAccessPointForObjectLambdaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Configuration && { Configuration: ObjectLambdaConfiguration.filterSensitiveLog(obj.Configuration) }),
    });
})(CreateAccessPointForObjectLambdaRequest = exports.CreateAccessPointForObjectLambdaRequest || (exports.CreateAccessPointForObjectLambdaRequest = {}));
var CreateAccessPointForObjectLambdaResult;
(function (CreateAccessPointForObjectLambdaResult) {
    /**
     * @internal
     */
    CreateAccessPointForObjectLambdaResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAccessPointForObjectLambdaResult = exports.CreateAccessPointForObjectLambdaResult || (exports.CreateAccessPointForObjectLambdaResult = {}));
var BucketAlreadyExists;
(function (BucketAlreadyExists) {
    /**
     * @internal
     */
    BucketAlreadyExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketAlreadyExists = exports.BucketAlreadyExists || (exports.BucketAlreadyExists = {}));
var BucketAlreadyOwnedByYou;
(function (BucketAlreadyOwnedByYou) {
    /**
     * @internal
     */
    BucketAlreadyOwnedByYou.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketAlreadyOwnedByYou = exports.BucketAlreadyOwnedByYou || (exports.BucketAlreadyOwnedByYou = {}));
var CreateBucketConfiguration;
(function (CreateBucketConfiguration) {
    /**
     * @internal
     */
    CreateBucketConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBucketConfiguration = exports.CreateBucketConfiguration || (exports.CreateBucketConfiguration = {}));
var CreateBucketRequest;
(function (CreateBucketRequest) {
    /**
     * @internal
     */
    CreateBucketRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBucketRequest = exports.CreateBucketRequest || (exports.CreateBucketRequest = {}));
var CreateBucketResult;
(function (CreateBucketResult) {
    /**
     * @internal
     */
    CreateBucketResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBucketResult = exports.CreateBucketResult || (exports.CreateBucketResult = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var JobManifestLocation;
(function (JobManifestLocation) {
    /**
     * @internal
     */
    JobManifestLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobManifestLocation = exports.JobManifestLocation || (exports.JobManifestLocation = {}));
var JobManifestFieldName;
(function (JobManifestFieldName) {
    JobManifestFieldName["Bucket"] = "Bucket";
    JobManifestFieldName["Ignore"] = "Ignore";
    JobManifestFieldName["Key"] = "Key";
    JobManifestFieldName["VersionId"] = "VersionId";
})(JobManifestFieldName = exports.JobManifestFieldName || (exports.JobManifestFieldName = {}));
var JobManifestFormat;
(function (JobManifestFormat) {
    JobManifestFormat["S3BatchOperations_CSV_20180820"] = "S3BatchOperations_CSV_20180820";
    JobManifestFormat["S3InventoryReport_CSV_20161130"] = "S3InventoryReport_CSV_20161130";
})(JobManifestFormat = exports.JobManifestFormat || (exports.JobManifestFormat = {}));
var JobManifestSpec;
(function (JobManifestSpec) {
    /**
     * @internal
     */
    JobManifestSpec.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobManifestSpec = exports.JobManifestSpec || (exports.JobManifestSpec = {}));
var JobManifest;
(function (JobManifest) {
    /**
     * @internal
     */
    JobManifest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobManifest = exports.JobManifest || (exports.JobManifest = {}));
var LambdaInvokeOperation;
(function (LambdaInvokeOperation) {
    /**
     * @internal
     */
    LambdaInvokeOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaInvokeOperation = exports.LambdaInvokeOperation || (exports.LambdaInvokeOperation = {}));
var S3DeleteObjectTaggingOperation;
(function (S3DeleteObjectTaggingOperation) {
    /**
     * @internal
     */
    S3DeleteObjectTaggingOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3DeleteObjectTaggingOperation = exports.S3DeleteObjectTaggingOperation || (exports.S3DeleteObjectTaggingOperation = {}));
var S3GlacierJobTier;
(function (S3GlacierJobTier) {
    S3GlacierJobTier["BULK"] = "BULK";
    S3GlacierJobTier["STANDARD"] = "STANDARD";
})(S3GlacierJobTier = exports.S3GlacierJobTier || (exports.S3GlacierJobTier = {}));
var S3InitiateRestoreObjectOperation;
(function (S3InitiateRestoreObjectOperation) {
    /**
     * @internal
     */
    S3InitiateRestoreObjectOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3InitiateRestoreObjectOperation = exports.S3InitiateRestoreObjectOperation || (exports.S3InitiateRestoreObjectOperation = {}));
var S3GranteeTypeIdentifier;
(function (S3GranteeTypeIdentifier) {
    S3GranteeTypeIdentifier["CANONICAL"] = "id";
    S3GranteeTypeIdentifier["EMAIL_ADDRESS"] = "emailAddress";
    S3GranteeTypeIdentifier["GROUP"] = "uri";
})(S3GranteeTypeIdentifier = exports.S3GranteeTypeIdentifier || (exports.S3GranteeTypeIdentifier = {}));
var S3Grantee;
(function (S3Grantee) {
    /**
     * @internal
     */
    S3Grantee.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Grantee = exports.S3Grantee || (exports.S3Grantee = {}));
var S3Permission;
(function (S3Permission) {
    S3Permission["FULL_CONTROL"] = "FULL_CONTROL";
    S3Permission["READ"] = "READ";
    S3Permission["READ_ACP"] = "READ_ACP";
    S3Permission["WRITE"] = "WRITE";
    S3Permission["WRITE_ACP"] = "WRITE_ACP";
})(S3Permission = exports.S3Permission || (exports.S3Permission = {}));
var S3Grant;
(function (S3Grant) {
    /**
     * @internal
     */
    S3Grant.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Grant = exports.S3Grant || (exports.S3Grant = {}));
var S3ObjectOwner;
(function (S3ObjectOwner) {
    /**
     * @internal
     */
    S3ObjectOwner.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ObjectOwner = exports.S3ObjectOwner || (exports.S3ObjectOwner = {}));
var S3AccessControlList;
(function (S3AccessControlList) {
    /**
     * @internal
     */
    S3AccessControlList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3AccessControlList = exports.S3AccessControlList || (exports.S3AccessControlList = {}));
var S3CannedAccessControlList;
(function (S3CannedAccessControlList) {
    S3CannedAccessControlList["AUTHENTICATED_READ"] = "authenticated-read";
    S3CannedAccessControlList["AWS_EXEC_READ"] = "aws-exec-read";
    S3CannedAccessControlList["BUCKET_OWNER_FULL_CONTROL"] = "bucket-owner-full-control";
    S3CannedAccessControlList["BUCKET_OWNER_READ"] = "bucket-owner-read";
    S3CannedAccessControlList["PRIVATE"] = "private";
    S3CannedAccessControlList["PUBLIC_READ"] = "public-read";
    S3CannedAccessControlList["PUBLIC_READ_WRITE"] = "public-read-write";
})(S3CannedAccessControlList = exports.S3CannedAccessControlList || (exports.S3CannedAccessControlList = {}));
var S3AccessControlPolicy;
(function (S3AccessControlPolicy) {
    /**
     * @internal
     */
    S3AccessControlPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3AccessControlPolicy = exports.S3AccessControlPolicy || (exports.S3AccessControlPolicy = {}));
var S3SetObjectAclOperation;
(function (S3SetObjectAclOperation) {
    /**
     * @internal
     */
    S3SetObjectAclOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3SetObjectAclOperation = exports.S3SetObjectAclOperation || (exports.S3SetObjectAclOperation = {}));
var S3MetadataDirective;
(function (S3MetadataDirective) {
    S3MetadataDirective["COPY"] = "COPY";
    S3MetadataDirective["REPLACE"] = "REPLACE";
})(S3MetadataDirective = exports.S3MetadataDirective || (exports.S3MetadataDirective = {}));
var S3SSEAlgorithm;
(function (S3SSEAlgorithm) {
    S3SSEAlgorithm["AES256"] = "AES256";
    S3SSEAlgorithm["KMS"] = "KMS";
})(S3SSEAlgorithm = exports.S3SSEAlgorithm || (exports.S3SSEAlgorithm = {}));
var S3ObjectMetadata;
(function (S3ObjectMetadata) {
    /**
     * @internal
     */
    S3ObjectMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ObjectMetadata = exports.S3ObjectMetadata || (exports.S3ObjectMetadata = {}));
var S3Tag;
(function (S3Tag) {
    /**
     * @internal
     */
    S3Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Tag = exports.S3Tag || (exports.S3Tag = {}));
var S3ObjectLockLegalHoldStatus;
(function (S3ObjectLockLegalHoldStatus) {
    S3ObjectLockLegalHoldStatus["OFF"] = "OFF";
    S3ObjectLockLegalHoldStatus["ON"] = "ON";
})(S3ObjectLockLegalHoldStatus = exports.S3ObjectLockLegalHoldStatus || (exports.S3ObjectLockLegalHoldStatus = {}));
var S3ObjectLockMode;
(function (S3ObjectLockMode) {
    S3ObjectLockMode["COMPLIANCE"] = "COMPLIANCE";
    S3ObjectLockMode["GOVERNANCE"] = "GOVERNANCE";
})(S3ObjectLockMode = exports.S3ObjectLockMode || (exports.S3ObjectLockMode = {}));
var S3StorageClass;
(function (S3StorageClass) {
    S3StorageClass["DEEP_ARCHIVE"] = "DEEP_ARCHIVE";
    S3StorageClass["GLACIER"] = "GLACIER";
    S3StorageClass["INTELLIGENT_TIERING"] = "INTELLIGENT_TIERING";
    S3StorageClass["ONEZONE_IA"] = "ONEZONE_IA";
    S3StorageClass["STANDARD"] = "STANDARD";
    S3StorageClass["STANDARD_IA"] = "STANDARD_IA";
})(S3StorageClass = exports.S3StorageClass || (exports.S3StorageClass = {}));
var S3CopyObjectOperation;
(function (S3CopyObjectOperation) {
    /**
     * @internal
     */
    S3CopyObjectOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3CopyObjectOperation = exports.S3CopyObjectOperation || (exports.S3CopyObjectOperation = {}));
var S3ObjectLockLegalHold;
(function (S3ObjectLockLegalHold) {
    /**
     * @internal
     */
    S3ObjectLockLegalHold.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ObjectLockLegalHold = exports.S3ObjectLockLegalHold || (exports.S3ObjectLockLegalHold = {}));
var S3SetObjectLegalHoldOperation;
(function (S3SetObjectLegalHoldOperation) {
    /**
     * @internal
     */
    S3SetObjectLegalHoldOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3SetObjectLegalHoldOperation = exports.S3SetObjectLegalHoldOperation || (exports.S3SetObjectLegalHoldOperation = {}));
var S3ObjectLockRetentionMode;
(function (S3ObjectLockRetentionMode) {
    S3ObjectLockRetentionMode["COMPLIANCE"] = "COMPLIANCE";
    S3ObjectLockRetentionMode["GOVERNANCE"] = "GOVERNANCE";
})(S3ObjectLockRetentionMode = exports.S3ObjectLockRetentionMode || (exports.S3ObjectLockRetentionMode = {}));
var S3Retention;
(function (S3Retention) {
    /**
     * @internal
     */
    S3Retention.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Retention = exports.S3Retention || (exports.S3Retention = {}));
var S3SetObjectRetentionOperation;
(function (S3SetObjectRetentionOperation) {
    /**
     * @internal
     */
    S3SetObjectRetentionOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3SetObjectRetentionOperation = exports.S3SetObjectRetentionOperation || (exports.S3SetObjectRetentionOperation = {}));
var S3SetObjectTaggingOperation;
(function (S3SetObjectTaggingOperation) {
    /**
     * @internal
     */
    S3SetObjectTaggingOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3SetObjectTaggingOperation = exports.S3SetObjectTaggingOperation || (exports.S3SetObjectTaggingOperation = {}));
var JobOperation;
(function (JobOperation) {
    /**
     * @internal
     */
    JobOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobOperation = exports.JobOperation || (exports.JobOperation = {}));
var JobReportFormat;
(function (JobReportFormat) {
    JobReportFormat["Report_CSV_20180820"] = "Report_CSV_20180820";
})(JobReportFormat = exports.JobReportFormat || (exports.JobReportFormat = {}));
var JobReportScope;
(function (JobReportScope) {
    JobReportScope["AllTasks"] = "AllTasks";
    JobReportScope["FailedTasksOnly"] = "FailedTasksOnly";
})(JobReportScope = exports.JobReportScope || (exports.JobReportScope = {}));
var JobReport;
(function (JobReport) {
    /**
     * @internal
     */
    JobReport.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobReport = exports.JobReport || (exports.JobReport = {}));
var CreateJobRequest;
(function (CreateJobRequest) {
    /**
     * @internal
     */
    CreateJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobRequest = exports.CreateJobRequest || (exports.CreateJobRequest = {}));
var CreateJobResult;
(function (CreateJobResult) {
    /**
     * @internal
     */
    CreateJobResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJobResult = exports.CreateJobResult || (exports.CreateJobResult = {}));
var IdempotencyException;
(function (IdempotencyException) {
    /**
     * @internal
     */
    IdempotencyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdempotencyException = exports.IdempotencyException || (exports.IdempotencyException = {}));
var InternalServiceException;
(function (InternalServiceException) {
    /**
     * @internal
     */
    InternalServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var DeleteAccessPointRequest;
(function (DeleteAccessPointRequest) {
    /**
     * @internal
     */
    DeleteAccessPointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccessPointRequest = exports.DeleteAccessPointRequest || (exports.DeleteAccessPointRequest = {}));
var DeleteAccessPointForObjectLambdaRequest;
(function (DeleteAccessPointForObjectLambdaRequest) {
    /**
     * @internal
     */
    DeleteAccessPointForObjectLambdaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccessPointForObjectLambdaRequest = exports.DeleteAccessPointForObjectLambdaRequest || (exports.DeleteAccessPointForObjectLambdaRequest = {}));
var DeleteAccessPointPolicyRequest;
(function (DeleteAccessPointPolicyRequest) {
    /**
     * @internal
     */
    DeleteAccessPointPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccessPointPolicyRequest = exports.DeleteAccessPointPolicyRequest || (exports.DeleteAccessPointPolicyRequest = {}));
var DeleteAccessPointPolicyForObjectLambdaRequest;
(function (DeleteAccessPointPolicyForObjectLambdaRequest) {
    /**
     * @internal
     */
    DeleteAccessPointPolicyForObjectLambdaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccessPointPolicyForObjectLambdaRequest = exports.DeleteAccessPointPolicyForObjectLambdaRequest || (exports.DeleteAccessPointPolicyForObjectLambdaRequest = {}));
var DeleteBucketRequest;
(function (DeleteBucketRequest) {
    /**
     * @internal
     */
    DeleteBucketRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketRequest = exports.DeleteBucketRequest || (exports.DeleteBucketRequest = {}));
var DeleteBucketLifecycleConfigurationRequest;
(function (DeleteBucketLifecycleConfigurationRequest) {
    /**
     * @internal
     */
    DeleteBucketLifecycleConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketLifecycleConfigurationRequest = exports.DeleteBucketLifecycleConfigurationRequest || (exports.DeleteBucketLifecycleConfigurationRequest = {}));
var DeleteBucketPolicyRequest;
(function (DeleteBucketPolicyRequest) {
    /**
     * @internal
     */
    DeleteBucketPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketPolicyRequest = exports.DeleteBucketPolicyRequest || (exports.DeleteBucketPolicyRequest = {}));
var DeleteBucketTaggingRequest;
(function (DeleteBucketTaggingRequest) {
    /**
     * @internal
     */
    DeleteBucketTaggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBucketTaggingRequest = exports.DeleteBucketTaggingRequest || (exports.DeleteBucketTaggingRequest = {}));
var DeleteJobTaggingRequest;
(function (DeleteJobTaggingRequest) {
    /**
     * @internal
     */
    DeleteJobTaggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteJobTaggingRequest = exports.DeleteJobTaggingRequest || (exports.DeleteJobTaggingRequest = {}));
var DeleteJobTaggingResult;
(function (DeleteJobTaggingResult) {
    /**
     * @internal
     */
    DeleteJobTaggingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteJobTaggingResult = exports.DeleteJobTaggingResult || (exports.DeleteJobTaggingResult = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var DeletePublicAccessBlockRequest;
(function (DeletePublicAccessBlockRequest) {
    /**
     * @internal
     */
    DeletePublicAccessBlockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePublicAccessBlockRequest = exports.DeletePublicAccessBlockRequest || (exports.DeletePublicAccessBlockRequest = {}));
var DeleteStorageLensConfigurationRequest;
(function (DeleteStorageLensConfigurationRequest) {
    /**
     * @internal
     */
    DeleteStorageLensConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStorageLensConfigurationRequest = exports.DeleteStorageLensConfigurationRequest || (exports.DeleteStorageLensConfigurationRequest = {}));
var DeleteStorageLensConfigurationTaggingRequest;
(function (DeleteStorageLensConfigurationTaggingRequest) {
    /**
     * @internal
     */
    DeleteStorageLensConfigurationTaggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStorageLensConfigurationTaggingRequest = exports.DeleteStorageLensConfigurationTaggingRequest || (exports.DeleteStorageLensConfigurationTaggingRequest = {}));
var DeleteStorageLensConfigurationTaggingResult;
(function (DeleteStorageLensConfigurationTaggingResult) {
    /**
     * @internal
     */
    DeleteStorageLensConfigurationTaggingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteStorageLensConfigurationTaggingResult = exports.DeleteStorageLensConfigurationTaggingResult || (exports.DeleteStorageLensConfigurationTaggingResult = {}));
var DescribeJobRequest;
(function (DescribeJobRequest) {
    /**
     * @internal
     */
    DescribeJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobRequest = exports.DescribeJobRequest || (exports.DescribeJobRequest = {}));
var JobFailure;
(function (JobFailure) {
    /**
     * @internal
     */
    JobFailure.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobFailure = exports.JobFailure || (exports.JobFailure = {}));
var JobProgressSummary;
(function (JobProgressSummary) {
    /**
     * @internal
     */
    JobProgressSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobProgressSummary = exports.JobProgressSummary || (exports.JobProgressSummary = {}));
var JobStatus;
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
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var JobDescriptor;
(function (JobDescriptor) {
    /**
     * @internal
     */
    JobDescriptor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobDescriptor = exports.JobDescriptor || (exports.JobDescriptor = {}));
var DescribeJobResult;
(function (DescribeJobResult) {
    /**
     * @internal
     */
    DescribeJobResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeJobResult = exports.DescribeJobResult || (exports.DescribeJobResult = {}));
var GetAccessPointRequest;
(function (GetAccessPointRequest) {
    /**
     * @internal
     */
    GetAccessPointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessPointRequest = exports.GetAccessPointRequest || (exports.GetAccessPointRequest = {}));
var GetAccessPointResult;
(function (GetAccessPointResult) {
    /**
     * @internal
     */
    GetAccessPointResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessPointResult = exports.GetAccessPointResult || (exports.GetAccessPointResult = {}));
var GetAccessPointConfigurationForObjectLambdaRequest;
(function (GetAccessPointConfigurationForObjectLambdaRequest) {
    /**
     * @internal
     */
    GetAccessPointConfigurationForObjectLambdaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessPointConfigurationForObjectLambdaRequest = exports.GetAccessPointConfigurationForObjectLambdaRequest || (exports.GetAccessPointConfigurationForObjectLambdaRequest = {}));
var GetAccessPointConfigurationForObjectLambdaResult;
(function (GetAccessPointConfigurationForObjectLambdaResult) {
    /**
     * @internal
     */
    GetAccessPointConfigurationForObjectLambdaResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Configuration && { Configuration: ObjectLambdaConfiguration.filterSensitiveLog(obj.Configuration) }),
    });
})(GetAccessPointConfigurationForObjectLambdaResult = exports.GetAccessPointConfigurationForObjectLambdaResult || (exports.GetAccessPointConfigurationForObjectLambdaResult = {}));
var GetAccessPointForObjectLambdaRequest;
(function (GetAccessPointForObjectLambdaRequest) {
    /**
     * @internal
     */
    GetAccessPointForObjectLambdaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessPointForObjectLambdaRequest = exports.GetAccessPointForObjectLambdaRequest || (exports.GetAccessPointForObjectLambdaRequest = {}));
var GetAccessPointForObjectLambdaResult;
(function (GetAccessPointForObjectLambdaResult) {
    /**
     * @internal
     */
    GetAccessPointForObjectLambdaResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessPointForObjectLambdaResult = exports.GetAccessPointForObjectLambdaResult || (exports.GetAccessPointForObjectLambdaResult = {}));
var GetAccessPointPolicyRequest;
(function (GetAccessPointPolicyRequest) {
    /**
     * @internal
     */
    GetAccessPointPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessPointPolicyRequest = exports.GetAccessPointPolicyRequest || (exports.GetAccessPointPolicyRequest = {}));
var GetAccessPointPolicyResult;
(function (GetAccessPointPolicyResult) {
    /**
     * @internal
     */
    GetAccessPointPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessPointPolicyResult = exports.GetAccessPointPolicyResult || (exports.GetAccessPointPolicyResult = {}));
var GetAccessPointPolicyForObjectLambdaRequest;
(function (GetAccessPointPolicyForObjectLambdaRequest) {
    /**
     * @internal
     */
    GetAccessPointPolicyForObjectLambdaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessPointPolicyForObjectLambdaRequest = exports.GetAccessPointPolicyForObjectLambdaRequest || (exports.GetAccessPointPolicyForObjectLambdaRequest = {}));
var GetAccessPointPolicyForObjectLambdaResult;
(function (GetAccessPointPolicyForObjectLambdaResult) {
    /**
     * @internal
     */
    GetAccessPointPolicyForObjectLambdaResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessPointPolicyForObjectLambdaResult = exports.GetAccessPointPolicyForObjectLambdaResult || (exports.GetAccessPointPolicyForObjectLambdaResult = {}));
var GetAccessPointPolicyStatusRequest;
(function (GetAccessPointPolicyStatusRequest) {
    /**
     * @internal
     */
    GetAccessPointPolicyStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessPointPolicyStatusRequest = exports.GetAccessPointPolicyStatusRequest || (exports.GetAccessPointPolicyStatusRequest = {}));
var PolicyStatus;
(function (PolicyStatus) {
    /**
     * @internal
     */
    PolicyStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyStatus = exports.PolicyStatus || (exports.PolicyStatus = {}));
var GetAccessPointPolicyStatusResult;
(function (GetAccessPointPolicyStatusResult) {
    /**
     * @internal
     */
    GetAccessPointPolicyStatusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessPointPolicyStatusResult = exports.GetAccessPointPolicyStatusResult || (exports.GetAccessPointPolicyStatusResult = {}));
var GetAccessPointPolicyStatusForObjectLambdaRequest;
(function (GetAccessPointPolicyStatusForObjectLambdaRequest) {
    /**
     * @internal
     */
    GetAccessPointPolicyStatusForObjectLambdaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessPointPolicyStatusForObjectLambdaRequest = exports.GetAccessPointPolicyStatusForObjectLambdaRequest || (exports.GetAccessPointPolicyStatusForObjectLambdaRequest = {}));
var GetAccessPointPolicyStatusForObjectLambdaResult;
(function (GetAccessPointPolicyStatusForObjectLambdaResult) {
    /**
     * @internal
     */
    GetAccessPointPolicyStatusForObjectLambdaResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccessPointPolicyStatusForObjectLambdaResult = exports.GetAccessPointPolicyStatusForObjectLambdaResult || (exports.GetAccessPointPolicyStatusForObjectLambdaResult = {}));
var GetBucketRequest;
(function (GetBucketRequest) {
    /**
     * @internal
     */
    GetBucketRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketRequest = exports.GetBucketRequest || (exports.GetBucketRequest = {}));
var GetBucketResult;
(function (GetBucketResult) {
    /**
     * @internal
     */
    GetBucketResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketResult = exports.GetBucketResult || (exports.GetBucketResult = {}));
var GetBucketLifecycleConfigurationRequest;
(function (GetBucketLifecycleConfigurationRequest) {
    /**
     * @internal
     */
    GetBucketLifecycleConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketLifecycleConfigurationRequest = exports.GetBucketLifecycleConfigurationRequest || (exports.GetBucketLifecycleConfigurationRequest = {}));
var LifecycleExpiration;
(function (LifecycleExpiration) {
    /**
     * @internal
     */
    LifecycleExpiration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecycleExpiration = exports.LifecycleExpiration || (exports.LifecycleExpiration = {}));
var LifecycleRuleAndOperator;
(function (LifecycleRuleAndOperator) {
    /**
     * @internal
     */
    LifecycleRuleAndOperator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecycleRuleAndOperator = exports.LifecycleRuleAndOperator || (exports.LifecycleRuleAndOperator = {}));
var LifecycleRuleFilter;
(function (LifecycleRuleFilter) {
    /**
     * @internal
     */
    LifecycleRuleFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecycleRuleFilter = exports.LifecycleRuleFilter || (exports.LifecycleRuleFilter = {}));
var NoncurrentVersionExpiration;
(function (NoncurrentVersionExpiration) {
    /**
     * @internal
     */
    NoncurrentVersionExpiration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoncurrentVersionExpiration = exports.NoncurrentVersionExpiration || (exports.NoncurrentVersionExpiration = {}));
var NoncurrentVersionTransition;
(function (NoncurrentVersionTransition) {
    /**
     * @internal
     */
    NoncurrentVersionTransition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoncurrentVersionTransition = exports.NoncurrentVersionTransition || (exports.NoncurrentVersionTransition = {}));
var Transition;
(function (Transition) {
    /**
     * @internal
     */
    Transition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Transition = exports.Transition || (exports.Transition = {}));
var LifecycleRule;
(function (LifecycleRule) {
    /**
     * @internal
     */
    LifecycleRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecycleRule = exports.LifecycleRule || (exports.LifecycleRule = {}));
var GetBucketLifecycleConfigurationResult;
(function (GetBucketLifecycleConfigurationResult) {
    /**
     * @internal
     */
    GetBucketLifecycleConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketLifecycleConfigurationResult = exports.GetBucketLifecycleConfigurationResult || (exports.GetBucketLifecycleConfigurationResult = {}));
var GetBucketPolicyRequest;
(function (GetBucketPolicyRequest) {
    /**
     * @internal
     */
    GetBucketPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketPolicyRequest = exports.GetBucketPolicyRequest || (exports.GetBucketPolicyRequest = {}));
var GetBucketPolicyResult;
(function (GetBucketPolicyResult) {
    /**
     * @internal
     */
    GetBucketPolicyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketPolicyResult = exports.GetBucketPolicyResult || (exports.GetBucketPolicyResult = {}));
var GetBucketTaggingRequest;
(function (GetBucketTaggingRequest) {
    /**
     * @internal
     */
    GetBucketTaggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketTaggingRequest = exports.GetBucketTaggingRequest || (exports.GetBucketTaggingRequest = {}));
var GetBucketTaggingResult;
(function (GetBucketTaggingResult) {
    /**
     * @internal
     */
    GetBucketTaggingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketTaggingResult = exports.GetBucketTaggingResult || (exports.GetBucketTaggingResult = {}));
var GetJobTaggingRequest;
(function (GetJobTaggingRequest) {
    /**
     * @internal
     */
    GetJobTaggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobTaggingRequest = exports.GetJobTaggingRequest || (exports.GetJobTaggingRequest = {}));
var GetJobTaggingResult;
(function (GetJobTaggingResult) {
    /**
     * @internal
     */
    GetJobTaggingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobTaggingResult = exports.GetJobTaggingResult || (exports.GetJobTaggingResult = {}));
var GetPublicAccessBlockOutput;
(function (GetPublicAccessBlockOutput) {
    /**
     * @internal
     */
    GetPublicAccessBlockOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPublicAccessBlockOutput = exports.GetPublicAccessBlockOutput || (exports.GetPublicAccessBlockOutput = {}));
var GetPublicAccessBlockRequest;
(function (GetPublicAccessBlockRequest) {
    /**
     * @internal
     */
    GetPublicAccessBlockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPublicAccessBlockRequest = exports.GetPublicAccessBlockRequest || (exports.GetPublicAccessBlockRequest = {}));
var NoSuchPublicAccessBlockConfiguration;
(function (NoSuchPublicAccessBlockConfiguration) {
    /**
     * @internal
     */
    NoSuchPublicAccessBlockConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchPublicAccessBlockConfiguration = exports.NoSuchPublicAccessBlockConfiguration || (exports.NoSuchPublicAccessBlockConfiguration = {}));
var GetStorageLensConfigurationRequest;
(function (GetStorageLensConfigurationRequest) {
    /**
     * @internal
     */
    GetStorageLensConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStorageLensConfigurationRequest = exports.GetStorageLensConfigurationRequest || (exports.GetStorageLensConfigurationRequest = {}));
var StorageLensAwsOrg;
(function (StorageLensAwsOrg) {
    /**
     * @internal
     */
    StorageLensAwsOrg.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageLensAwsOrg = exports.StorageLensAwsOrg || (exports.StorageLensAwsOrg = {}));
var SSEKMS;
(function (SSEKMS) {
    /**
     * @internal
     */
    SSEKMS.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SSEKMS = exports.SSEKMS || (exports.SSEKMS = {}));
var SSES3;
(function (SSES3) {
    /**
     * @internal
     */
    SSES3.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SSES3 = exports.SSES3 || (exports.SSES3 = {}));
var StorageLensDataExportEncryption;
(function (StorageLensDataExportEncryption) {
    /**
     * @internal
     */
    StorageLensDataExportEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageLensDataExportEncryption = exports.StorageLensDataExportEncryption || (exports.StorageLensDataExportEncryption = {}));
var S3BucketDestination;
(function (S3BucketDestination) {
    /**
     * @internal
     */
    S3BucketDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3BucketDestination = exports.S3BucketDestination || (exports.S3BucketDestination = {}));
var StorageLensDataExport;
(function (StorageLensDataExport) {
    /**
     * @internal
     */
    StorageLensDataExport.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageLensDataExport = exports.StorageLensDataExport || (exports.StorageLensDataExport = {}));
var _Exclude;
(function (_Exclude) {
    /**
     * @internal
     */
    _Exclude.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(_Exclude = exports._Exclude || (exports._Exclude = {}));
var Include;
(function (Include) {
    /**
     * @internal
     */
    Include.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Include = exports.Include || (exports.Include = {}));
var StorageLensConfiguration;
(function (StorageLensConfiguration) {
    /**
     * @internal
     */
    StorageLensConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageLensConfiguration = exports.StorageLensConfiguration || (exports.StorageLensConfiguration = {}));
var GetStorageLensConfigurationResult;
(function (GetStorageLensConfigurationResult) {
    /**
     * @internal
     */
    GetStorageLensConfigurationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStorageLensConfigurationResult = exports.GetStorageLensConfigurationResult || (exports.GetStorageLensConfigurationResult = {}));
var GetStorageLensConfigurationTaggingRequest;
(function (GetStorageLensConfigurationTaggingRequest) {
    /**
     * @internal
     */
    GetStorageLensConfigurationTaggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStorageLensConfigurationTaggingRequest = exports.GetStorageLensConfigurationTaggingRequest || (exports.GetStorageLensConfigurationTaggingRequest = {}));
var StorageLensTag;
(function (StorageLensTag) {
    /**
     * @internal
     */
    StorageLensTag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageLensTag = exports.StorageLensTag || (exports.StorageLensTag = {}));
var GetStorageLensConfigurationTaggingResult;
(function (GetStorageLensConfigurationTaggingResult) {
    /**
     * @internal
     */
    GetStorageLensConfigurationTaggingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetStorageLensConfigurationTaggingResult = exports.GetStorageLensConfigurationTaggingResult || (exports.GetStorageLensConfigurationTaggingResult = {}));
var ListAccessPointsRequest;
(function (ListAccessPointsRequest) {
    /**
     * @internal
     */
    ListAccessPointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccessPointsRequest = exports.ListAccessPointsRequest || (exports.ListAccessPointsRequest = {}));
var ListAccessPointsResult;
(function (ListAccessPointsResult) {
    /**
     * @internal
     */
    ListAccessPointsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccessPointsResult = exports.ListAccessPointsResult || (exports.ListAccessPointsResult = {}));
var ListAccessPointsForObjectLambdaRequest;
(function (ListAccessPointsForObjectLambdaRequest) {
    /**
     * @internal
     */
    ListAccessPointsForObjectLambdaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccessPointsForObjectLambdaRequest = exports.ListAccessPointsForObjectLambdaRequest || (exports.ListAccessPointsForObjectLambdaRequest = {}));
var ObjectLambdaAccessPoint;
(function (ObjectLambdaAccessPoint) {
    /**
     * @internal
     */
    ObjectLambdaAccessPoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectLambdaAccessPoint = exports.ObjectLambdaAccessPoint || (exports.ObjectLambdaAccessPoint = {}));
var ListAccessPointsForObjectLambdaResult;
(function (ListAccessPointsForObjectLambdaResult) {
    /**
     * @internal
     */
    ListAccessPointsForObjectLambdaResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccessPointsForObjectLambdaResult = exports.ListAccessPointsForObjectLambdaResult || (exports.ListAccessPointsForObjectLambdaResult = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ListJobsRequest;
(function (ListJobsRequest) {
    /**
     * @internal
     */
    ListJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsRequest = exports.ListJobsRequest || (exports.ListJobsRequest = {}));
var OperationName;
(function (OperationName) {
    OperationName["LambdaInvoke"] = "LambdaInvoke";
    OperationName["S3DeleteObjectTagging"] = "S3DeleteObjectTagging";
    OperationName["S3InitiateRestoreObject"] = "S3InitiateRestoreObject";
    OperationName["S3PutObjectAcl"] = "S3PutObjectAcl";
    OperationName["S3PutObjectCopy"] = "S3PutObjectCopy";
    OperationName["S3PutObjectLegalHold"] = "S3PutObjectLegalHold";
    OperationName["S3PutObjectRetention"] = "S3PutObjectRetention";
    OperationName["S3PutObjectTagging"] = "S3PutObjectTagging";
})(OperationName = exports.OperationName || (exports.OperationName = {}));
var JobListDescriptor;
(function (JobListDescriptor) {
    /**
     * @internal
     */
    JobListDescriptor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobListDescriptor = exports.JobListDescriptor || (exports.JobListDescriptor = {}));
var ListJobsResult;
(function (ListJobsResult) {
    /**
     * @internal
     */
    ListJobsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsResult = exports.ListJobsResult || (exports.ListJobsResult = {}));
var ListRegionalBucketsRequest;
(function (ListRegionalBucketsRequest) {
    /**
     * @internal
     */
    ListRegionalBucketsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRegionalBucketsRequest = exports.ListRegionalBucketsRequest || (exports.ListRegionalBucketsRequest = {}));
var RegionalBucket;
(function (RegionalBucket) {
    /**
     * @internal
     */
    RegionalBucket.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegionalBucket = exports.RegionalBucket || (exports.RegionalBucket = {}));
var ListRegionalBucketsResult;
(function (ListRegionalBucketsResult) {
    /**
     * @internal
     */
    ListRegionalBucketsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRegionalBucketsResult = exports.ListRegionalBucketsResult || (exports.ListRegionalBucketsResult = {}));
var ListStorageLensConfigurationsRequest;
(function (ListStorageLensConfigurationsRequest) {
    /**
     * @internal
     */
    ListStorageLensConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStorageLensConfigurationsRequest = exports.ListStorageLensConfigurationsRequest || (exports.ListStorageLensConfigurationsRequest = {}));
var ListStorageLensConfigurationEntry;
(function (ListStorageLensConfigurationEntry) {
    /**
     * @internal
     */
    ListStorageLensConfigurationEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStorageLensConfigurationEntry = exports.ListStorageLensConfigurationEntry || (exports.ListStorageLensConfigurationEntry = {}));
var ListStorageLensConfigurationsResult;
(function (ListStorageLensConfigurationsResult) {
    /**
     * @internal
     */
    ListStorageLensConfigurationsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListStorageLensConfigurationsResult = exports.ListStorageLensConfigurationsResult || (exports.ListStorageLensConfigurationsResult = {}));
var PutAccessPointConfigurationForObjectLambdaRequest;
(function (PutAccessPointConfigurationForObjectLambdaRequest) {
    /**
     * @internal
     */
    PutAccessPointConfigurationForObjectLambdaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Configuration && { Configuration: ObjectLambdaConfiguration.filterSensitiveLog(obj.Configuration) }),
    });
})(PutAccessPointConfigurationForObjectLambdaRequest = exports.PutAccessPointConfigurationForObjectLambdaRequest || (exports.PutAccessPointConfigurationForObjectLambdaRequest = {}));
var PutAccessPointPolicyRequest;
(function (PutAccessPointPolicyRequest) {
    /**
     * @internal
     */
    PutAccessPointPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccessPointPolicyRequest = exports.PutAccessPointPolicyRequest || (exports.PutAccessPointPolicyRequest = {}));
var PutAccessPointPolicyForObjectLambdaRequest;
(function (PutAccessPointPolicyForObjectLambdaRequest) {
    /**
     * @internal
     */
    PutAccessPointPolicyForObjectLambdaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccessPointPolicyForObjectLambdaRequest = exports.PutAccessPointPolicyForObjectLambdaRequest || (exports.PutAccessPointPolicyForObjectLambdaRequest = {}));
var LifecycleConfiguration;
(function (LifecycleConfiguration) {
    /**
     * @internal
     */
    LifecycleConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LifecycleConfiguration = exports.LifecycleConfiguration || (exports.LifecycleConfiguration = {}));
var PutBucketLifecycleConfigurationRequest;
(function (PutBucketLifecycleConfigurationRequest) {
    /**
     * @internal
     */
    PutBucketLifecycleConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBucketLifecycleConfigurationRequest = exports.PutBucketLifecycleConfigurationRequest || (exports.PutBucketLifecycleConfigurationRequest = {}));
var PutBucketPolicyRequest;
(function (PutBucketPolicyRequest) {
    /**
     * @internal
     */
    PutBucketPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBucketPolicyRequest = exports.PutBucketPolicyRequest || (exports.PutBucketPolicyRequest = {}));
var Tagging;
(function (Tagging) {
    /**
     * @internal
     */
    Tagging.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tagging = exports.Tagging || (exports.Tagging = {}));
var PutBucketTaggingRequest;
(function (PutBucketTaggingRequest) {
    /**
     * @internal
     */
    PutBucketTaggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutBucketTaggingRequest = exports.PutBucketTaggingRequest || (exports.PutBucketTaggingRequest = {}));
var PutJobTaggingRequest;
(function (PutJobTaggingRequest) {
    /**
     * @internal
     */
    PutJobTaggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutJobTaggingRequest = exports.PutJobTaggingRequest || (exports.PutJobTaggingRequest = {}));
var PutJobTaggingResult;
(function (PutJobTaggingResult) {
    /**
     * @internal
     */
    PutJobTaggingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutJobTaggingResult = exports.PutJobTaggingResult || (exports.PutJobTaggingResult = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var PutPublicAccessBlockRequest;
(function (PutPublicAccessBlockRequest) {
    /**
     * @internal
     */
    PutPublicAccessBlockRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPublicAccessBlockRequest = exports.PutPublicAccessBlockRequest || (exports.PutPublicAccessBlockRequest = {}));
var PutStorageLensConfigurationRequest;
(function (PutStorageLensConfigurationRequest) {
    /**
     * @internal
     */
    PutStorageLensConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutStorageLensConfigurationRequest = exports.PutStorageLensConfigurationRequest || (exports.PutStorageLensConfigurationRequest = {}));
var PutStorageLensConfigurationTaggingRequest;
(function (PutStorageLensConfigurationTaggingRequest) {
    /**
     * @internal
     */
    PutStorageLensConfigurationTaggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutStorageLensConfigurationTaggingRequest = exports.PutStorageLensConfigurationTaggingRequest || (exports.PutStorageLensConfigurationTaggingRequest = {}));
var PutStorageLensConfigurationTaggingResult;
(function (PutStorageLensConfigurationTaggingResult) {
    /**
     * @internal
     */
    PutStorageLensConfigurationTaggingResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutStorageLensConfigurationTaggingResult = exports.PutStorageLensConfigurationTaggingResult || (exports.PutStorageLensConfigurationTaggingResult = {}));
var UpdateJobPriorityRequest;
(function (UpdateJobPriorityRequest) {
    /**
     * @internal
     */
    UpdateJobPriorityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJobPriorityRequest = exports.UpdateJobPriorityRequest || (exports.UpdateJobPriorityRequest = {}));
var UpdateJobPriorityResult;
(function (UpdateJobPriorityResult) {
    /**
     * @internal
     */
    UpdateJobPriorityResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJobPriorityResult = exports.UpdateJobPriorityResult || (exports.UpdateJobPriorityResult = {}));
var JobStatusException;
(function (JobStatusException) {
    /**
     * @internal
     */
    JobStatusException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobStatusException = exports.JobStatusException || (exports.JobStatusException = {}));
var RequestedJobStatus;
(function (RequestedJobStatus) {
    RequestedJobStatus["Cancelled"] = "Cancelled";
    RequestedJobStatus["Ready"] = "Ready";
})(RequestedJobStatus = exports.RequestedJobStatus || (exports.RequestedJobStatus = {}));
var UpdateJobStatusRequest;
(function (UpdateJobStatusRequest) {
    /**
     * @internal
     */
    UpdateJobStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJobStatusRequest = exports.UpdateJobStatusRequest || (exports.UpdateJobStatusRequest = {}));
var UpdateJobStatusResult;
(function (UpdateJobStatusResult) {
    /**
     * @internal
     */
    UpdateJobStatusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJobStatusResult = exports.UpdateJobStatusResult || (exports.UpdateJobStatusResult = {}));
//# sourceMappingURL=models_0.js.map