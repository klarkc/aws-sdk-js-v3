import { __assign } from "tslib";
export var AdminStatus;
(function (AdminStatus) {
    AdminStatus["DISABLING_IN_PROGRESS"] = "DISABLING_IN_PROGRESS";
    AdminStatus["ENABLED"] = "ENABLED";
})(AdminStatus || (AdminStatus = {}));
export var AdminAccount;
(function (AdminAccount) {
    /**
     * @internal
     */
    AdminAccount.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AdminAccount || (AdminAccount = {}));
export var BatchGetCustomDataIdentifierSummary;
(function (BatchGetCustomDataIdentifierSummary) {
    /**
     * @internal
     */
    BatchGetCustomDataIdentifierSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetCustomDataIdentifierSummary || (BatchGetCustomDataIdentifierSummary = {}));
export var AllowsUnencryptedObjectUploads;
(function (AllowsUnencryptedObjectUploads) {
    AllowsUnencryptedObjectUploads["FALSE"] = "FALSE";
    AllowsUnencryptedObjectUploads["TRUE"] = "TRUE";
    AllowsUnencryptedObjectUploads["UNKNOWN"] = "UNKNOWN";
})(AllowsUnencryptedObjectUploads || (AllowsUnencryptedObjectUploads = {}));
export var IsDefinedInJob;
(function (IsDefinedInJob) {
    IsDefinedInJob["FALSE"] = "FALSE";
    IsDefinedInJob["TRUE"] = "TRUE";
    IsDefinedInJob["UNKNOWN"] = "UNKNOWN";
})(IsDefinedInJob || (IsDefinedInJob = {}));
export var IsMonitoredByJob;
(function (IsMonitoredByJob) {
    IsMonitoredByJob["FALSE"] = "FALSE";
    IsMonitoredByJob["TRUE"] = "TRUE";
    IsMonitoredByJob["UNKNOWN"] = "UNKNOWN";
})(IsMonitoredByJob || (IsMonitoredByJob = {}));
export var JobDetails;
(function (JobDetails) {
    /**
     * @internal
     */
    JobDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobDetails || (JobDetails = {}));
export var ObjectCountByEncryptionType;
(function (ObjectCountByEncryptionType) {
    /**
     * @internal
     */
    ObjectCountByEncryptionType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ObjectCountByEncryptionType || (ObjectCountByEncryptionType = {}));
export var EffectivePermission;
(function (EffectivePermission) {
    EffectivePermission["NOT_PUBLIC"] = "NOT_PUBLIC";
    EffectivePermission["PUBLIC"] = "PUBLIC";
    EffectivePermission["UNKNOWN"] = "UNKNOWN";
})(EffectivePermission || (EffectivePermission = {}));
export var BlockPublicAccess;
(function (BlockPublicAccess) {
    /**
     * @internal
     */
    BlockPublicAccess.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BlockPublicAccess || (BlockPublicAccess = {}));
export var AccountLevelPermissions;
(function (AccountLevelPermissions) {
    /**
     * @internal
     */
    AccountLevelPermissions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountLevelPermissions || (AccountLevelPermissions = {}));
export var AccessControlList;
(function (AccessControlList) {
    /**
     * @internal
     */
    AccessControlList.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessControlList || (AccessControlList = {}));
export var BucketPolicy;
(function (BucketPolicy) {
    /**
     * @internal
     */
    BucketPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketPolicy || (BucketPolicy = {}));
export var BucketLevelPermissions;
(function (BucketLevelPermissions) {
    /**
     * @internal
     */
    BucketLevelPermissions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketLevelPermissions || (BucketLevelPermissions = {}));
export var BucketPermissionConfiguration;
(function (BucketPermissionConfiguration) {
    /**
     * @internal
     */
    BucketPermissionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketPermissionConfiguration || (BucketPermissionConfiguration = {}));
export var BucketPublicAccess;
(function (BucketPublicAccess) {
    /**
     * @internal
     */
    BucketPublicAccess.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketPublicAccess || (BucketPublicAccess = {}));
export var ReplicationDetails;
(function (ReplicationDetails) {
    /**
     * @internal
     */
    ReplicationDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplicationDetails || (ReplicationDetails = {}));
export var Type;
(function (Type) {
    Type["AES256"] = "AES256";
    Type["NONE"] = "NONE";
    Type["aws_kms"] = "aws:kms";
})(Type || (Type = {}));
export var BucketServerSideEncryption;
(function (BucketServerSideEncryption) {
    /**
     * @internal
     */
    BucketServerSideEncryption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketServerSideEncryption || (BucketServerSideEncryption = {}));
export var SharedAccess;
(function (SharedAccess) {
    SharedAccess["EXTERNAL"] = "EXTERNAL";
    SharedAccess["INTERNAL"] = "INTERNAL";
    SharedAccess["NOT_SHARED"] = "NOT_SHARED";
    SharedAccess["UNKNOWN"] = "UNKNOWN";
})(SharedAccess || (SharedAccess = {}));
export var KeyValuePair;
(function (KeyValuePair) {
    /**
     * @internal
     */
    KeyValuePair.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KeyValuePair || (KeyValuePair = {}));
export var ObjectLevelStatistics;
(function (ObjectLevelStatistics) {
    /**
     * @internal
     */
    ObjectLevelStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ObjectLevelStatistics || (ObjectLevelStatistics = {}));
export var BucketMetadata;
(function (BucketMetadata) {
    /**
     * @internal
     */
    BucketMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketMetadata || (BucketMetadata = {}));
export var JobComparator;
(function (JobComparator) {
    JobComparator["CONTAINS"] = "CONTAINS";
    JobComparator["EQ"] = "EQ";
    JobComparator["GT"] = "GT";
    JobComparator["GTE"] = "GTE";
    JobComparator["LT"] = "LT";
    JobComparator["LTE"] = "LTE";
    JobComparator["NE"] = "NE";
    JobComparator["STARTS_WITH"] = "STARTS_WITH";
})(JobComparator || (JobComparator = {}));
export var SimpleCriterionKeyForJob;
(function (SimpleCriterionKeyForJob) {
    SimpleCriterionKeyForJob["ACCOUNT_ID"] = "ACCOUNT_ID";
    SimpleCriterionKeyForJob["S3_BUCKET_EFFECTIVE_PERMISSION"] = "S3_BUCKET_EFFECTIVE_PERMISSION";
    SimpleCriterionKeyForJob["S3_BUCKET_NAME"] = "S3_BUCKET_NAME";
    SimpleCriterionKeyForJob["S3_BUCKET_SHARED_ACCESS"] = "S3_BUCKET_SHARED_ACCESS";
})(SimpleCriterionKeyForJob || (SimpleCriterionKeyForJob = {}));
export var SimpleCriterionForJob;
(function (SimpleCriterionForJob) {
    /**
     * @internal
     */
    SimpleCriterionForJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimpleCriterionForJob || (SimpleCriterionForJob = {}));
export var TagCriterionPairForJob;
(function (TagCriterionPairForJob) {
    /**
     * @internal
     */
    TagCriterionPairForJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagCriterionPairForJob || (TagCriterionPairForJob = {}));
export var TagCriterionForJob;
(function (TagCriterionForJob) {
    /**
     * @internal
     */
    TagCriterionForJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagCriterionForJob || (TagCriterionForJob = {}));
export var CriteriaForJob;
(function (CriteriaForJob) {
    /**
     * @internal
     */
    CriteriaForJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CriteriaForJob || (CriteriaForJob = {}));
export var CustomDataIdentifierSummary;
(function (CustomDataIdentifierSummary) {
    /**
     * @internal
     */
    CustomDataIdentifierSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomDataIdentifierSummary || (CustomDataIdentifierSummary = {}));
export var FindingCategory;
(function (FindingCategory) {
    FindingCategory["CLASSIFICATION"] = "CLASSIFICATION";
    FindingCategory["POLICY"] = "POLICY";
})(FindingCategory || (FindingCategory = {}));
export var Cell;
(function (Cell) {
    /**
     * @internal
     */
    Cell.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Cell || (Cell = {}));
export var Range;
(function (Range) {
    /**
     * @internal
     */
    Range.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Range || (Range = {}));
export var Page;
(function (Page) {
    /**
     * @internal
     */
    Page.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Page || (Page = {}));
export var _Record;
(function (_Record) {
    /**
     * @internal
     */
    _Record.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(_Record || (_Record = {}));
export var Occurrences;
(function (Occurrences) {
    /**
     * @internal
     */
    Occurrences.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Occurrences || (Occurrences = {}));
export var CustomDetection;
(function (CustomDetection) {
    /**
     * @internal
     */
    CustomDetection.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomDetection || (CustomDetection = {}));
export var CustomDataIdentifiers;
(function (CustomDataIdentifiers) {
    /**
     * @internal
     */
    CustomDataIdentifiers.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomDataIdentifiers || (CustomDataIdentifiers = {}));
export var SensitiveDataItemCategory;
(function (SensitiveDataItemCategory) {
    SensitiveDataItemCategory["CREDENTIALS"] = "CREDENTIALS";
    SensitiveDataItemCategory["CUSTOM_IDENTIFIER"] = "CUSTOM_IDENTIFIER";
    SensitiveDataItemCategory["FINANCIAL_INFORMATION"] = "FINANCIAL_INFORMATION";
    SensitiveDataItemCategory["PERSONAL_INFORMATION"] = "PERSONAL_INFORMATION";
})(SensitiveDataItemCategory || (SensitiveDataItemCategory = {}));
export var DefaultDetection;
(function (DefaultDetection) {
    /**
     * @internal
     */
    DefaultDetection.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DefaultDetection || (DefaultDetection = {}));
export var SensitiveDataItem;
(function (SensitiveDataItem) {
    /**
     * @internal
     */
    SensitiveDataItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SensitiveDataItem || (SensitiveDataItem = {}));
export var ClassificationResultStatus;
(function (ClassificationResultStatus) {
    /**
     * @internal
     */
    ClassificationResultStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClassificationResultStatus || (ClassificationResultStatus = {}));
export var ClassificationResult;
(function (ClassificationResult) {
    /**
     * @internal
     */
    ClassificationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClassificationResult || (ClassificationResult = {}));
export var ClassificationDetails;
(function (ClassificationDetails) {
    /**
     * @internal
     */
    ClassificationDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClassificationDetails || (ClassificationDetails = {}));
export var FindingActionType;
(function (FindingActionType) {
    FindingActionType["AWS_API_CALL"] = "AWS_API_CALL";
})(FindingActionType || (FindingActionType = {}));
export var ApiCallDetails;
(function (ApiCallDetails) {
    /**
     * @internal
     */
    ApiCallDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ApiCallDetails || (ApiCallDetails = {}));
export var FindingAction;
(function (FindingAction) {
    /**
     * @internal
     */
    FindingAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FindingAction || (FindingAction = {}));
export var DomainDetails;
(function (DomainDetails) {
    /**
     * @internal
     */
    DomainDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainDetails || (DomainDetails = {}));
export var IpCity;
(function (IpCity) {
    /**
     * @internal
     */
    IpCity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IpCity || (IpCity = {}));
export var IpCountry;
(function (IpCountry) {
    /**
     * @internal
     */
    IpCountry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IpCountry || (IpCountry = {}));
export var IpGeoLocation;
(function (IpGeoLocation) {
    /**
     * @internal
     */
    IpGeoLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IpGeoLocation || (IpGeoLocation = {}));
export var IpOwner;
(function (IpOwner) {
    /**
     * @internal
     */
    IpOwner.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IpOwner || (IpOwner = {}));
export var IpAddressDetails;
(function (IpAddressDetails) {
    /**
     * @internal
     */
    IpAddressDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IpAddressDetails || (IpAddressDetails = {}));
export var SessionContextAttributes;
(function (SessionContextAttributes) {
    /**
     * @internal
     */
    SessionContextAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SessionContextAttributes || (SessionContextAttributes = {}));
export var SessionIssuer;
(function (SessionIssuer) {
    /**
     * @internal
     */
    SessionIssuer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SessionIssuer || (SessionIssuer = {}));
export var SessionContext;
(function (SessionContext) {
    /**
     * @internal
     */
    SessionContext.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SessionContext || (SessionContext = {}));
export var AssumedRole;
(function (AssumedRole) {
    /**
     * @internal
     */
    AssumedRole.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssumedRole || (AssumedRole = {}));
export var AwsAccount;
(function (AwsAccount) {
    /**
     * @internal
     */
    AwsAccount.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsAccount || (AwsAccount = {}));
export var AwsService;
(function (AwsService) {
    /**
     * @internal
     */
    AwsService.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsService || (AwsService = {}));
export var FederatedUser;
(function (FederatedUser) {
    /**
     * @internal
     */
    FederatedUser.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FederatedUser || (FederatedUser = {}));
export var IamUser;
(function (IamUser) {
    /**
     * @internal
     */
    IamUser.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IamUser || (IamUser = {}));
export var UserIdentityRoot;
(function (UserIdentityRoot) {
    /**
     * @internal
     */
    UserIdentityRoot.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserIdentityRoot || (UserIdentityRoot = {}));
export var UserIdentityType;
(function (UserIdentityType) {
    UserIdentityType["AWSAccount"] = "AWSAccount";
    UserIdentityType["AWSService"] = "AWSService";
    UserIdentityType["AssumedRole"] = "AssumedRole";
    UserIdentityType["FederatedUser"] = "FederatedUser";
    UserIdentityType["IAMUser"] = "IAMUser";
    UserIdentityType["Root"] = "Root";
})(UserIdentityType || (UserIdentityType = {}));
export var UserIdentity;
(function (UserIdentity) {
    /**
     * @internal
     */
    UserIdentity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserIdentity || (UserIdentity = {}));
export var FindingActor;
(function (FindingActor) {
    /**
     * @internal
     */
    FindingActor.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FindingActor || (FindingActor = {}));
export var PolicyDetails;
(function (PolicyDetails) {
    /**
     * @internal
     */
    PolicyDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyDetails || (PolicyDetails = {}));
export var EncryptionType;
(function (EncryptionType) {
    EncryptionType["AES256"] = "AES256";
    EncryptionType["NONE"] = "NONE";
    EncryptionType["UNKNOWN"] = "UNKNOWN";
    EncryptionType["aws_kms"] = "aws:kms";
})(EncryptionType || (EncryptionType = {}));
export var ServerSideEncryption;
(function (ServerSideEncryption) {
    /**
     * @internal
     */
    ServerSideEncryption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServerSideEncryption || (ServerSideEncryption = {}));
export var S3BucketOwner;
(function (S3BucketOwner) {
    /**
     * @internal
     */
    S3BucketOwner.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3BucketOwner || (S3BucketOwner = {}));
export var S3Bucket;
(function (S3Bucket) {
    /**
     * @internal
     */
    S3Bucket.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Bucket || (S3Bucket = {}));
export var StorageClass;
(function (StorageClass) {
    StorageClass["DEEP_ARCHIVE"] = "DEEP_ARCHIVE";
    StorageClass["GLACIER"] = "GLACIER";
    StorageClass["INTELLIGENT_TIERING"] = "INTELLIGENT_TIERING";
    StorageClass["ONEZONE_IA"] = "ONEZONE_IA";
    StorageClass["REDUCED_REDUNDANCY"] = "REDUCED_REDUNDANCY";
    StorageClass["STANDARD"] = "STANDARD";
    StorageClass["STANDARD_IA"] = "STANDARD_IA";
})(StorageClass || (StorageClass = {}));
export var S3Object;
(function (S3Object) {
    /**
     * @internal
     */
    S3Object.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Object || (S3Object = {}));
export var ResourcesAffected;
(function (ResourcesAffected) {
    /**
     * @internal
     */
    ResourcesAffected.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourcesAffected || (ResourcesAffected = {}));
export var SeverityDescription;
(function (SeverityDescription) {
    SeverityDescription["High"] = "High";
    SeverityDescription["Low"] = "Low";
    SeverityDescription["Medium"] = "Medium";
})(SeverityDescription || (SeverityDescription = {}));
export var Severity;
(function (Severity) {
    /**
     * @internal
     */
    Severity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Severity || (Severity = {}));
export var FindingType;
(function (FindingType) {
    FindingType["Policy_IAMUser_S3BlockPublicAccessDisabled"] = "Policy:IAMUser/S3BlockPublicAccessDisabled";
    FindingType["Policy_IAMUser_S3BucketEncryptionDisabled"] = "Policy:IAMUser/S3BucketEncryptionDisabled";
    FindingType["Policy_IAMUser_S3BucketPublic"] = "Policy:IAMUser/S3BucketPublic";
    FindingType["Policy_IAMUser_S3BucketReplicatedExternally"] = "Policy:IAMUser/S3BucketReplicatedExternally";
    FindingType["Policy_IAMUser_S3BucketSharedExternally"] = "Policy:IAMUser/S3BucketSharedExternally";
    FindingType["SensitiveData_S3Object_Credentials"] = "SensitiveData:S3Object/Credentials";
    FindingType["SensitiveData_S3Object_CustomIdentifier"] = "SensitiveData:S3Object/CustomIdentifier";
    FindingType["SensitiveData_S3Object_Financial"] = "SensitiveData:S3Object/Financial";
    FindingType["SensitiveData_S3Object_Multiple"] = "SensitiveData:S3Object/Multiple";
    FindingType["SensitiveData_S3Object_Personal"] = "SensitiveData:S3Object/Personal";
})(FindingType || (FindingType = {}));
export var Finding;
(function (Finding) {
    /**
     * @internal
     */
    Finding.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Finding || (Finding = {}));
export var FindingsFilterAction;
(function (FindingsFilterAction) {
    FindingsFilterAction["ARCHIVE"] = "ARCHIVE";
    FindingsFilterAction["NOOP"] = "NOOP";
})(FindingsFilterAction || (FindingsFilterAction = {}));
export var FindingsFilterListItem;
(function (FindingsFilterListItem) {
    /**
     * @internal
     */
    FindingsFilterListItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FindingsFilterListItem || (FindingsFilterListItem = {}));
export var GroupCount;
(function (GroupCount) {
    /**
     * @internal
     */
    GroupCount.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GroupCount || (GroupCount = {}));
export var RelationshipStatus;
(function (RelationshipStatus) {
    RelationshipStatus["AccountSuspended"] = "AccountSuspended";
    RelationshipStatus["Created"] = "Created";
    RelationshipStatus["EmailVerificationFailed"] = "EmailVerificationFailed";
    RelationshipStatus["EmailVerificationInProgress"] = "EmailVerificationInProgress";
    RelationshipStatus["Enabled"] = "Enabled";
    RelationshipStatus["Invited"] = "Invited";
    RelationshipStatus["Paused"] = "Paused";
    RelationshipStatus["RegionDisabled"] = "RegionDisabled";
    RelationshipStatus["Removed"] = "Removed";
    RelationshipStatus["Resigned"] = "Resigned";
})(RelationshipStatus || (RelationshipStatus = {}));
export var Invitation;
(function (Invitation) {
    /**
     * @internal
     */
    Invitation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Invitation || (Invitation = {}));
export var ScopeFilterKey;
(function (ScopeFilterKey) {
    ScopeFilterKey["BUCKET_CREATION_DATE"] = "BUCKET_CREATION_DATE";
    ScopeFilterKey["OBJECT_EXTENSION"] = "OBJECT_EXTENSION";
    ScopeFilterKey["OBJECT_KEY"] = "OBJECT_KEY";
    ScopeFilterKey["OBJECT_LAST_MODIFIED_DATE"] = "OBJECT_LAST_MODIFIED_DATE";
    ScopeFilterKey["OBJECT_SIZE"] = "OBJECT_SIZE";
    ScopeFilterKey["TAG"] = "TAG";
})(ScopeFilterKey || (ScopeFilterKey = {}));
export var SimpleScopeTerm;
(function (SimpleScopeTerm) {
    /**
     * @internal
     */
    SimpleScopeTerm.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimpleScopeTerm || (SimpleScopeTerm = {}));
export var TagValuePair;
(function (TagValuePair) {
    /**
     * @internal
     */
    TagValuePair.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagValuePair || (TagValuePair = {}));
export var TagTarget;
(function (TagTarget) {
    TagTarget["S3_OBJECT"] = "S3_OBJECT";
})(TagTarget || (TagTarget = {}));
export var TagScopeTerm;
(function (TagScopeTerm) {
    /**
     * @internal
     */
    TagScopeTerm.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagScopeTerm || (TagScopeTerm = {}));
export var JobScopeTerm;
(function (JobScopeTerm) {
    /**
     * @internal
     */
    JobScopeTerm.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobScopeTerm || (JobScopeTerm = {}));
export var CriteriaBlockForJob;
(function (CriteriaBlockForJob) {
    /**
     * @internal
     */
    CriteriaBlockForJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CriteriaBlockForJob || (CriteriaBlockForJob = {}));
export var S3BucketCriteriaForJob;
(function (S3BucketCriteriaForJob) {
    /**
     * @internal
     */
    S3BucketCriteriaForJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3BucketCriteriaForJob || (S3BucketCriteriaForJob = {}));
export var S3BucketDefinitionForJob;
(function (S3BucketDefinitionForJob) {
    /**
     * @internal
     */
    S3BucketDefinitionForJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3BucketDefinitionForJob || (S3BucketDefinitionForJob = {}));
export var JobStatus;
(function (JobStatus) {
    JobStatus["CANCELLED"] = "CANCELLED";
    JobStatus["COMPLETE"] = "COMPLETE";
    JobStatus["IDLE"] = "IDLE";
    JobStatus["PAUSED"] = "PAUSED";
    JobStatus["RUNNING"] = "RUNNING";
    JobStatus["USER_PAUSED"] = "USER_PAUSED";
})(JobStatus || (JobStatus = {}));
export var JobType;
(function (JobType) {
    JobType["ONE_TIME"] = "ONE_TIME";
    JobType["SCHEDULED"] = "SCHEDULED";
})(JobType || (JobType = {}));
export var LastRunErrorStatusCode;
(function (LastRunErrorStatusCode) {
    LastRunErrorStatusCode["ERROR"] = "ERROR";
    LastRunErrorStatusCode["NONE"] = "NONE";
})(LastRunErrorStatusCode || (LastRunErrorStatusCode = {}));
export var LastRunErrorStatus;
(function (LastRunErrorStatus) {
    /**
     * @internal
     */
    LastRunErrorStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LastRunErrorStatus || (LastRunErrorStatus = {}));
export var UserPausedDetails;
(function (UserPausedDetails) {
    /**
     * @internal
     */
    UserPausedDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserPausedDetails || (UserPausedDetails = {}));
export var JobSummary;
(function (JobSummary) {
    /**
     * @internal
     */
    JobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobSummary || (JobSummary = {}));
export var ListJobsFilterKey;
(function (ListJobsFilterKey) {
    ListJobsFilterKey["createdAt"] = "createdAt";
    ListJobsFilterKey["jobStatus"] = "jobStatus";
    ListJobsFilterKey["jobType"] = "jobType";
    ListJobsFilterKey["name"] = "name";
})(ListJobsFilterKey || (ListJobsFilterKey = {}));
export var ListJobsFilterTerm;
(function (ListJobsFilterTerm) {
    /**
     * @internal
     */
    ListJobsFilterTerm.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobsFilterTerm || (ListJobsFilterTerm = {}));
export var MatchingBucket;
(function (MatchingBucket) {
    /**
     * @internal
     */
    MatchingBucket.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MatchingBucket || (MatchingBucket = {}));
export var MatchingResource;
(function (MatchingResource) {
    /**
     * @internal
     */
    MatchingResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MatchingResource || (MatchingResource = {}));
export var Member;
(function (Member) {
    /**
     * @internal
     */
    Member.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Member || (Member = {}));
export var SearchResourcesComparator;
(function (SearchResourcesComparator) {
    SearchResourcesComparator["EQ"] = "EQ";
    SearchResourcesComparator["NE"] = "NE";
})(SearchResourcesComparator || (SearchResourcesComparator = {}));
export var SearchResourcesSimpleCriterionKey;
(function (SearchResourcesSimpleCriterionKey) {
    SearchResourcesSimpleCriterionKey["ACCOUNT_ID"] = "ACCOUNT_ID";
    SearchResourcesSimpleCriterionKey["S3_BUCKET_EFFECTIVE_PERMISSION"] = "S3_BUCKET_EFFECTIVE_PERMISSION";
    SearchResourcesSimpleCriterionKey["S3_BUCKET_NAME"] = "S3_BUCKET_NAME";
    SearchResourcesSimpleCriterionKey["S3_BUCKET_SHARED_ACCESS"] = "S3_BUCKET_SHARED_ACCESS";
})(SearchResourcesSimpleCriterionKey || (SearchResourcesSimpleCriterionKey = {}));
export var SearchResourcesSimpleCriterion;
(function (SearchResourcesSimpleCriterion) {
    /**
     * @internal
     */
    SearchResourcesSimpleCriterion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchResourcesSimpleCriterion || (SearchResourcesSimpleCriterion = {}));
export var SearchResourcesTagCriterionPair;
(function (SearchResourcesTagCriterionPair) {
    /**
     * @internal
     */
    SearchResourcesTagCriterionPair.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchResourcesTagCriterionPair || (SearchResourcesTagCriterionPair = {}));
export var SearchResourcesTagCriterion;
(function (SearchResourcesTagCriterion) {
    /**
     * @internal
     */
    SearchResourcesTagCriterion.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchResourcesTagCriterion || (SearchResourcesTagCriterion = {}));
export var SearchResourcesCriteria;
(function (SearchResourcesCriteria) {
    /**
     * @internal
     */
    SearchResourcesCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchResourcesCriteria || (SearchResourcesCriteria = {}));
export var ErrorCode;
(function (ErrorCode) {
    ErrorCode["ClientError"] = "ClientError";
    ErrorCode["InternalError"] = "InternalError";
})(ErrorCode || (ErrorCode = {}));
export var UnprocessedAccount;
(function (UnprocessedAccount) {
    /**
     * @internal
     */
    UnprocessedAccount.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnprocessedAccount || (UnprocessedAccount = {}));
export var Currency;
(function (Currency) {
    Currency["USD"] = "USD";
})(Currency || (Currency = {}));
export var Unit;
(function (Unit) {
    Unit["TERABYTES"] = "TERABYTES";
})(Unit || (Unit = {}));
export var ServiceLimit;
(function (ServiceLimit) {
    /**
     * @internal
     */
    ServiceLimit.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceLimit || (ServiceLimit = {}));
export var UsageType;
(function (UsageType) {
    UsageType["DATA_INVENTORY_EVALUATION"] = "DATA_INVENTORY_EVALUATION";
    UsageType["SENSITIVE_DATA_DISCOVERY"] = "SENSITIVE_DATA_DISCOVERY";
})(UsageType || (UsageType = {}));
export var UsageByAccount;
(function (UsageByAccount) {
    /**
     * @internal
     */
    UsageByAccount.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UsageByAccount || (UsageByAccount = {}));
export var UsageRecord;
(function (UsageRecord) {
    /**
     * @internal
     */
    UsageRecord.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UsageRecord || (UsageRecord = {}));
export var UsageStatisticsFilterComparator;
(function (UsageStatisticsFilterComparator) {
    UsageStatisticsFilterComparator["CONTAINS"] = "CONTAINS";
    UsageStatisticsFilterComparator["EQ"] = "EQ";
    UsageStatisticsFilterComparator["GT"] = "GT";
    UsageStatisticsFilterComparator["GTE"] = "GTE";
    UsageStatisticsFilterComparator["LT"] = "LT";
    UsageStatisticsFilterComparator["LTE"] = "LTE";
    UsageStatisticsFilterComparator["NE"] = "NE";
})(UsageStatisticsFilterComparator || (UsageStatisticsFilterComparator = {}));
export var UsageStatisticsFilterKey;
(function (UsageStatisticsFilterKey) {
    UsageStatisticsFilterKey["accountId"] = "accountId";
    UsageStatisticsFilterKey["freeTrialStartDate"] = "freeTrialStartDate";
    UsageStatisticsFilterKey["serviceLimit"] = "serviceLimit";
    UsageStatisticsFilterKey["total"] = "total";
})(UsageStatisticsFilterKey || (UsageStatisticsFilterKey = {}));
export var UsageStatisticsFilter;
(function (UsageStatisticsFilter) {
    /**
     * @internal
     */
    UsageStatisticsFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UsageStatisticsFilter || (UsageStatisticsFilter = {}));
export var UsageTotal;
(function (UsageTotal) {
    /**
     * @internal
     */
    UsageTotal.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UsageTotal || (UsageTotal = {}));
export var AcceptInvitationRequest;
(function (AcceptInvitationRequest) {
    /**
     * @internal
     */
    AcceptInvitationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptInvitationRequest || (AcceptInvitationRequest = {}));
export var AcceptInvitationResponse;
(function (AcceptInvitationResponse) {
    /**
     * @internal
     */
    AcceptInvitationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcceptInvitationResponse || (AcceptInvitationResponse = {}));
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
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
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var AccountDetail;
(function (AccountDetail) {
    /**
     * @internal
     */
    AccountDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountDetail || (AccountDetail = {}));
export var BatchGetCustomDataIdentifiersRequest;
(function (BatchGetCustomDataIdentifiersRequest) {
    /**
     * @internal
     */
    BatchGetCustomDataIdentifiersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetCustomDataIdentifiersRequest || (BatchGetCustomDataIdentifiersRequest = {}));
export var BatchGetCustomDataIdentifiersResponse;
(function (BatchGetCustomDataIdentifiersResponse) {
    /**
     * @internal
     */
    BatchGetCustomDataIdentifiersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetCustomDataIdentifiersResponse || (BatchGetCustomDataIdentifiersResponse = {}));
export var BucketCountByEffectivePermission;
(function (BucketCountByEffectivePermission) {
    /**
     * @internal
     */
    BucketCountByEffectivePermission.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketCountByEffectivePermission || (BucketCountByEffectivePermission = {}));
export var BucketCountByEncryptionType;
(function (BucketCountByEncryptionType) {
    /**
     * @internal
     */
    BucketCountByEncryptionType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketCountByEncryptionType || (BucketCountByEncryptionType = {}));
export var BucketCountBySharedAccessType;
(function (BucketCountBySharedAccessType) {
    /**
     * @internal
     */
    BucketCountBySharedAccessType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketCountBySharedAccessType || (BucketCountBySharedAccessType = {}));
export var BucketCountPolicyAllowsUnencryptedObjectUploads;
(function (BucketCountPolicyAllowsUnencryptedObjectUploads) {
    /**
     * @internal
     */
    BucketCountPolicyAllowsUnencryptedObjectUploads.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketCountPolicyAllowsUnencryptedObjectUploads || (BucketCountPolicyAllowsUnencryptedObjectUploads = {}));
export var BucketCriteriaAdditionalProperties;
(function (BucketCriteriaAdditionalProperties) {
    /**
     * @internal
     */
    BucketCriteriaAdditionalProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketCriteriaAdditionalProperties || (BucketCriteriaAdditionalProperties = {}));
export var OrderBy;
(function (OrderBy) {
    OrderBy["ASC"] = "ASC";
    OrderBy["DESC"] = "DESC";
})(OrderBy || (OrderBy = {}));
export var BucketSortCriteria;
(function (BucketSortCriteria) {
    /**
     * @internal
     */
    BucketSortCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BucketSortCriteria || (BucketSortCriteria = {}));
export var S3Destination;
(function (S3Destination) {
    /**
     * @internal
     */
    S3Destination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Destination || (S3Destination = {}));
export var ClassificationExportConfiguration;
(function (ClassificationExportConfiguration) {
    /**
     * @internal
     */
    ClassificationExportConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ClassificationExportConfiguration || (ClassificationExportConfiguration = {}));
export var JobScopingBlock;
(function (JobScopingBlock) {
    /**
     * @internal
     */
    JobScopingBlock.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobScopingBlock || (JobScopingBlock = {}));
export var Scoping;
(function (Scoping) {
    /**
     * @internal
     */
    Scoping.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Scoping || (Scoping = {}));
export var S3JobDefinition;
(function (S3JobDefinition) {
    /**
     * @internal
     */
    S3JobDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3JobDefinition || (S3JobDefinition = {}));
export var DailySchedule;
(function (DailySchedule) {
    /**
     * @internal
     */
    DailySchedule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DailySchedule || (DailySchedule = {}));
export var MonthlySchedule;
(function (MonthlySchedule) {
    /**
     * @internal
     */
    MonthlySchedule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MonthlySchedule || (MonthlySchedule = {}));
export var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["FRIDAY"] = "FRIDAY";
    DayOfWeek["MONDAY"] = "MONDAY";
    DayOfWeek["SATURDAY"] = "SATURDAY";
    DayOfWeek["SUNDAY"] = "SUNDAY";
    DayOfWeek["THURSDAY"] = "THURSDAY";
    DayOfWeek["TUESDAY"] = "TUESDAY";
    DayOfWeek["WEDNESDAY"] = "WEDNESDAY";
})(DayOfWeek || (DayOfWeek = {}));
export var WeeklySchedule;
(function (WeeklySchedule) {
    /**
     * @internal
     */
    WeeklySchedule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WeeklySchedule || (WeeklySchedule = {}));
export var JobScheduleFrequency;
(function (JobScheduleFrequency) {
    /**
     * @internal
     */
    JobScheduleFrequency.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobScheduleFrequency || (JobScheduleFrequency = {}));
export var CreateClassificationJobRequest;
(function (CreateClassificationJobRequest) {
    /**
     * @internal
     */
    CreateClassificationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateClassificationJobRequest || (CreateClassificationJobRequest = {}));
export var CreateClassificationJobResponse;
(function (CreateClassificationJobResponse) {
    /**
     * @internal
     */
    CreateClassificationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateClassificationJobResponse || (CreateClassificationJobResponse = {}));
export var CreateCustomDataIdentifierRequest;
(function (CreateCustomDataIdentifierRequest) {
    /**
     * @internal
     */
    CreateCustomDataIdentifierRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCustomDataIdentifierRequest || (CreateCustomDataIdentifierRequest = {}));
export var CreateCustomDataIdentifierResponse;
(function (CreateCustomDataIdentifierResponse) {
    /**
     * @internal
     */
    CreateCustomDataIdentifierResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCustomDataIdentifierResponse || (CreateCustomDataIdentifierResponse = {}));
export var CriterionAdditionalProperties;
(function (CriterionAdditionalProperties) {
    /**
     * @internal
     */
    CriterionAdditionalProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CriterionAdditionalProperties || (CriterionAdditionalProperties = {}));
export var FindingCriteria;
(function (FindingCriteria) {
    /**
     * @internal
     */
    FindingCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FindingCriteria || (FindingCriteria = {}));
export var CreateFindingsFilterRequest;
(function (CreateFindingsFilterRequest) {
    /**
     * @internal
     */
    CreateFindingsFilterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFindingsFilterRequest || (CreateFindingsFilterRequest = {}));
export var CreateFindingsFilterResponse;
(function (CreateFindingsFilterResponse) {
    /**
     * @internal
     */
    CreateFindingsFilterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFindingsFilterResponse || (CreateFindingsFilterResponse = {}));
export var CreateInvitationsRequest;
(function (CreateInvitationsRequest) {
    /**
     * @internal
     */
    CreateInvitationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInvitationsRequest || (CreateInvitationsRequest = {}));
export var CreateInvitationsResponse;
(function (CreateInvitationsResponse) {
    /**
     * @internal
     */
    CreateInvitationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInvitationsResponse || (CreateInvitationsResponse = {}));
export var CreateMemberRequest;
(function (CreateMemberRequest) {
    /**
     * @internal
     */
    CreateMemberRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMemberRequest || (CreateMemberRequest = {}));
export var CreateMemberResponse;
(function (CreateMemberResponse) {
    /**
     * @internal
     */
    CreateMemberResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMemberResponse || (CreateMemberResponse = {}));
export var CreateSampleFindingsRequest;
(function (CreateSampleFindingsRequest) {
    /**
     * @internal
     */
    CreateSampleFindingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSampleFindingsRequest || (CreateSampleFindingsRequest = {}));
export var CreateSampleFindingsResponse;
(function (CreateSampleFindingsResponse) {
    /**
     * @internal
     */
    CreateSampleFindingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSampleFindingsResponse || (CreateSampleFindingsResponse = {}));
export var DeclineInvitationsRequest;
(function (DeclineInvitationsRequest) {
    /**
     * @internal
     */
    DeclineInvitationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeclineInvitationsRequest || (DeclineInvitationsRequest = {}));
export var DeclineInvitationsResponse;
(function (DeclineInvitationsResponse) {
    /**
     * @internal
     */
    DeclineInvitationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeclineInvitationsResponse || (DeclineInvitationsResponse = {}));
export var DeleteCustomDataIdentifierRequest;
(function (DeleteCustomDataIdentifierRequest) {
    /**
     * @internal
     */
    DeleteCustomDataIdentifierRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCustomDataIdentifierRequest || (DeleteCustomDataIdentifierRequest = {}));
export var DeleteCustomDataIdentifierResponse;
(function (DeleteCustomDataIdentifierResponse) {
    /**
     * @internal
     */
    DeleteCustomDataIdentifierResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCustomDataIdentifierResponse || (DeleteCustomDataIdentifierResponse = {}));
export var DeleteFindingsFilterRequest;
(function (DeleteFindingsFilterRequest) {
    /**
     * @internal
     */
    DeleteFindingsFilterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFindingsFilterRequest || (DeleteFindingsFilterRequest = {}));
export var DeleteFindingsFilterResponse;
(function (DeleteFindingsFilterResponse) {
    /**
     * @internal
     */
    DeleteFindingsFilterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFindingsFilterResponse || (DeleteFindingsFilterResponse = {}));
export var DeleteInvitationsRequest;
(function (DeleteInvitationsRequest) {
    /**
     * @internal
     */
    DeleteInvitationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInvitationsRequest || (DeleteInvitationsRequest = {}));
export var DeleteInvitationsResponse;
(function (DeleteInvitationsResponse) {
    /**
     * @internal
     */
    DeleteInvitationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInvitationsResponse || (DeleteInvitationsResponse = {}));
export var DeleteMemberRequest;
(function (DeleteMemberRequest) {
    /**
     * @internal
     */
    DeleteMemberRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMemberRequest || (DeleteMemberRequest = {}));
export var DeleteMemberResponse;
(function (DeleteMemberResponse) {
    /**
     * @internal
     */
    DeleteMemberResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMemberResponse || (DeleteMemberResponse = {}));
export var DescribeBucketsRequest;
(function (DescribeBucketsRequest) {
    /**
     * @internal
     */
    DescribeBucketsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBucketsRequest || (DescribeBucketsRequest = {}));
export var DescribeBucketsResponse;
(function (DescribeBucketsResponse) {
    /**
     * @internal
     */
    DescribeBucketsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeBucketsResponse || (DescribeBucketsResponse = {}));
export var DescribeClassificationJobRequest;
(function (DescribeClassificationJobRequest) {
    /**
     * @internal
     */
    DescribeClassificationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeClassificationJobRequest || (DescribeClassificationJobRequest = {}));
export var Statistics;
(function (Statistics) {
    /**
     * @internal
     */
    Statistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Statistics || (Statistics = {}));
export var DescribeClassificationJobResponse;
(function (DescribeClassificationJobResponse) {
    /**
     * @internal
     */
    DescribeClassificationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeClassificationJobResponse || (DescribeClassificationJobResponse = {}));
export var DescribeOrganizationConfigurationRequest;
(function (DescribeOrganizationConfigurationRequest) {
    /**
     * @internal
     */
    DescribeOrganizationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeOrganizationConfigurationRequest || (DescribeOrganizationConfigurationRequest = {}));
export var DescribeOrganizationConfigurationResponse;
(function (DescribeOrganizationConfigurationResponse) {
    /**
     * @internal
     */
    DescribeOrganizationConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeOrganizationConfigurationResponse || (DescribeOrganizationConfigurationResponse = {}));
export var DisableMacieRequest;
(function (DisableMacieRequest) {
    /**
     * @internal
     */
    DisableMacieRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableMacieRequest || (DisableMacieRequest = {}));
export var DisableMacieResponse;
(function (DisableMacieResponse) {
    /**
     * @internal
     */
    DisableMacieResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableMacieResponse || (DisableMacieResponse = {}));
export var DisableOrganizationAdminAccountRequest;
(function (DisableOrganizationAdminAccountRequest) {
    /**
     * @internal
     */
    DisableOrganizationAdminAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableOrganizationAdminAccountRequest || (DisableOrganizationAdminAccountRequest = {}));
export var DisableOrganizationAdminAccountResponse;
(function (DisableOrganizationAdminAccountResponse) {
    /**
     * @internal
     */
    DisableOrganizationAdminAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableOrganizationAdminAccountResponse || (DisableOrganizationAdminAccountResponse = {}));
export var DisassociateFromAdministratorAccountRequest;
(function (DisassociateFromAdministratorAccountRequest) {
    /**
     * @internal
     */
    DisassociateFromAdministratorAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateFromAdministratorAccountRequest || (DisassociateFromAdministratorAccountRequest = {}));
export var DisassociateFromAdministratorAccountResponse;
(function (DisassociateFromAdministratorAccountResponse) {
    /**
     * @internal
     */
    DisassociateFromAdministratorAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateFromAdministratorAccountResponse || (DisassociateFromAdministratorAccountResponse = {}));
export var DisassociateFromMasterAccountRequest;
(function (DisassociateFromMasterAccountRequest) {
    /**
     * @internal
     */
    DisassociateFromMasterAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateFromMasterAccountRequest || (DisassociateFromMasterAccountRequest = {}));
export var DisassociateFromMasterAccountResponse;
(function (DisassociateFromMasterAccountResponse) {
    /**
     * @internal
     */
    DisassociateFromMasterAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateFromMasterAccountResponse || (DisassociateFromMasterAccountResponse = {}));
export var DisassociateMemberRequest;
(function (DisassociateMemberRequest) {
    /**
     * @internal
     */
    DisassociateMemberRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateMemberRequest || (DisassociateMemberRequest = {}));
export var DisassociateMemberResponse;
(function (DisassociateMemberResponse) {
    /**
     * @internal
     */
    DisassociateMemberResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateMemberResponse || (DisassociateMemberResponse = {}));
export var FindingPublishingFrequency;
(function (FindingPublishingFrequency) {
    FindingPublishingFrequency["FIFTEEN_MINUTES"] = "FIFTEEN_MINUTES";
    FindingPublishingFrequency["ONE_HOUR"] = "ONE_HOUR";
    FindingPublishingFrequency["SIX_HOURS"] = "SIX_HOURS";
})(FindingPublishingFrequency || (FindingPublishingFrequency = {}));
export var MacieStatus;
(function (MacieStatus) {
    MacieStatus["ENABLED"] = "ENABLED";
    MacieStatus["PAUSED"] = "PAUSED";
})(MacieStatus || (MacieStatus = {}));
export var EnableMacieRequest;
(function (EnableMacieRequest) {
    /**
     * @internal
     */
    EnableMacieRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableMacieRequest || (EnableMacieRequest = {}));
export var EnableMacieResponse;
(function (EnableMacieResponse) {
    /**
     * @internal
     */
    EnableMacieResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableMacieResponse || (EnableMacieResponse = {}));
export var EnableOrganizationAdminAccountRequest;
(function (EnableOrganizationAdminAccountRequest) {
    /**
     * @internal
     */
    EnableOrganizationAdminAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableOrganizationAdminAccountRequest || (EnableOrganizationAdminAccountRequest = {}));
export var EnableOrganizationAdminAccountResponse;
(function (EnableOrganizationAdminAccountResponse) {
    /**
     * @internal
     */
    EnableOrganizationAdminAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableOrganizationAdminAccountResponse || (EnableOrganizationAdminAccountResponse = {}));
export var FindingStatisticsSortAttributeName;
(function (FindingStatisticsSortAttributeName) {
    FindingStatisticsSortAttributeName["count"] = "count";
    FindingStatisticsSortAttributeName["groupKey"] = "groupKey";
})(FindingStatisticsSortAttributeName || (FindingStatisticsSortAttributeName = {}));
export var FindingStatisticsSortCriteria;
(function (FindingStatisticsSortCriteria) {
    /**
     * @internal
     */
    FindingStatisticsSortCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FindingStatisticsSortCriteria || (FindingStatisticsSortCriteria = {}));
export var GetAdministratorAccountRequest;
(function (GetAdministratorAccountRequest) {
    /**
     * @internal
     */
    GetAdministratorAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAdministratorAccountRequest || (GetAdministratorAccountRequest = {}));
export var GetAdministratorAccountResponse;
(function (GetAdministratorAccountResponse) {
    /**
     * @internal
     */
    GetAdministratorAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAdministratorAccountResponse || (GetAdministratorAccountResponse = {}));
export var GetBucketStatisticsRequest;
(function (GetBucketStatisticsRequest) {
    /**
     * @internal
     */
    GetBucketStatisticsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketStatisticsRequest || (GetBucketStatisticsRequest = {}));
export var GetBucketStatisticsResponse;
(function (GetBucketStatisticsResponse) {
    /**
     * @internal
     */
    GetBucketStatisticsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBucketStatisticsResponse || (GetBucketStatisticsResponse = {}));
export var GetClassificationExportConfigurationRequest;
(function (GetClassificationExportConfigurationRequest) {
    /**
     * @internal
     */
    GetClassificationExportConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetClassificationExportConfigurationRequest || (GetClassificationExportConfigurationRequest = {}));
export var GetClassificationExportConfigurationResponse;
(function (GetClassificationExportConfigurationResponse) {
    /**
     * @internal
     */
    GetClassificationExportConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetClassificationExportConfigurationResponse || (GetClassificationExportConfigurationResponse = {}));
export var GetCustomDataIdentifierRequest;
(function (GetCustomDataIdentifierRequest) {
    /**
     * @internal
     */
    GetCustomDataIdentifierRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCustomDataIdentifierRequest || (GetCustomDataIdentifierRequest = {}));
export var GetCustomDataIdentifierResponse;
(function (GetCustomDataIdentifierResponse) {
    /**
     * @internal
     */
    GetCustomDataIdentifierResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCustomDataIdentifierResponse || (GetCustomDataIdentifierResponse = {}));
export var SortCriteria;
(function (SortCriteria) {
    /**
     * @internal
     */
    SortCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SortCriteria || (SortCriteria = {}));
export var GetFindingsRequest;
(function (GetFindingsRequest) {
    /**
     * @internal
     */
    GetFindingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetFindingsRequest || (GetFindingsRequest = {}));
export var GetFindingsResponse;
(function (GetFindingsResponse) {
    /**
     * @internal
     */
    GetFindingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetFindingsResponse || (GetFindingsResponse = {}));
export var GetFindingsFilterRequest;
(function (GetFindingsFilterRequest) {
    /**
     * @internal
     */
    GetFindingsFilterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetFindingsFilterRequest || (GetFindingsFilterRequest = {}));
export var GetFindingsFilterResponse;
(function (GetFindingsFilterResponse) {
    /**
     * @internal
     */
    GetFindingsFilterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetFindingsFilterResponse || (GetFindingsFilterResponse = {}));
export var GetFindingsPublicationConfigurationRequest;
(function (GetFindingsPublicationConfigurationRequest) {
    /**
     * @internal
     */
    GetFindingsPublicationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetFindingsPublicationConfigurationRequest || (GetFindingsPublicationConfigurationRequest = {}));
export var SecurityHubConfiguration;
(function (SecurityHubConfiguration) {
    /**
     * @internal
     */
    SecurityHubConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SecurityHubConfiguration || (SecurityHubConfiguration = {}));
export var GetFindingsPublicationConfigurationResponse;
(function (GetFindingsPublicationConfigurationResponse) {
    /**
     * @internal
     */
    GetFindingsPublicationConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetFindingsPublicationConfigurationResponse || (GetFindingsPublicationConfigurationResponse = {}));
export var GroupBy;
(function (GroupBy) {
    GroupBy["classificationDetails_jobId"] = "classificationDetails.jobId";
    GroupBy["resourcesAffected_s3Bucket_name"] = "resourcesAffected.s3Bucket.name";
    GroupBy["severity_description"] = "severity.description";
    GroupBy["type"] = "type";
})(GroupBy || (GroupBy = {}));
export var GetFindingStatisticsRequest;
(function (GetFindingStatisticsRequest) {
    /**
     * @internal
     */
    GetFindingStatisticsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetFindingStatisticsRequest || (GetFindingStatisticsRequest = {}));
export var GetFindingStatisticsResponse;
(function (GetFindingStatisticsResponse) {
    /**
     * @internal
     */
    GetFindingStatisticsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetFindingStatisticsResponse || (GetFindingStatisticsResponse = {}));
export var GetInvitationsCountRequest;
(function (GetInvitationsCountRequest) {
    /**
     * @internal
     */
    GetInvitationsCountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInvitationsCountRequest || (GetInvitationsCountRequest = {}));
export var GetInvitationsCountResponse;
(function (GetInvitationsCountResponse) {
    /**
     * @internal
     */
    GetInvitationsCountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInvitationsCountResponse || (GetInvitationsCountResponse = {}));
export var GetMacieSessionRequest;
(function (GetMacieSessionRequest) {
    /**
     * @internal
     */
    GetMacieSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMacieSessionRequest || (GetMacieSessionRequest = {}));
export var GetMacieSessionResponse;
(function (GetMacieSessionResponse) {
    /**
     * @internal
     */
    GetMacieSessionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMacieSessionResponse || (GetMacieSessionResponse = {}));
export var GetMasterAccountRequest;
(function (GetMasterAccountRequest) {
    /**
     * @internal
     */
    GetMasterAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMasterAccountRequest || (GetMasterAccountRequest = {}));
export var GetMasterAccountResponse;
(function (GetMasterAccountResponse) {
    /**
     * @internal
     */
    GetMasterAccountResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMasterAccountResponse || (GetMasterAccountResponse = {}));
export var GetMemberRequest;
(function (GetMemberRequest) {
    /**
     * @internal
     */
    GetMemberRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMemberRequest || (GetMemberRequest = {}));
export var GetMemberResponse;
(function (GetMemberResponse) {
    /**
     * @internal
     */
    GetMemberResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMemberResponse || (GetMemberResponse = {}));
export var UsageStatisticsSortKey;
(function (UsageStatisticsSortKey) {
    UsageStatisticsSortKey["accountId"] = "accountId";
    UsageStatisticsSortKey["freeTrialStartDate"] = "freeTrialStartDate";
    UsageStatisticsSortKey["serviceLimitValue"] = "serviceLimitValue";
    UsageStatisticsSortKey["total"] = "total";
})(UsageStatisticsSortKey || (UsageStatisticsSortKey = {}));
export var UsageStatisticsSortBy;
(function (UsageStatisticsSortBy) {
    /**
     * @internal
     */
    UsageStatisticsSortBy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UsageStatisticsSortBy || (UsageStatisticsSortBy = {}));
export var TimeRange;
(function (TimeRange) {
    TimeRange["MONTH_TO_DATE"] = "MONTH_TO_DATE";
    TimeRange["PAST_30_DAYS"] = "PAST_30_DAYS";
})(TimeRange || (TimeRange = {}));
export var GetUsageStatisticsRequest;
(function (GetUsageStatisticsRequest) {
    /**
     * @internal
     */
    GetUsageStatisticsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUsageStatisticsRequest || (GetUsageStatisticsRequest = {}));
export var GetUsageStatisticsResponse;
(function (GetUsageStatisticsResponse) {
    /**
     * @internal
     */
    GetUsageStatisticsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUsageStatisticsResponse || (GetUsageStatisticsResponse = {}));
export var GetUsageTotalsRequest;
(function (GetUsageTotalsRequest) {
    /**
     * @internal
     */
    GetUsageTotalsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUsageTotalsRequest || (GetUsageTotalsRequest = {}));
export var GetUsageTotalsResponse;
(function (GetUsageTotalsResponse) {
    /**
     * @internal
     */
    GetUsageTotalsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUsageTotalsResponse || (GetUsageTotalsResponse = {}));
export var ListJobsFilterCriteria;
(function (ListJobsFilterCriteria) {
    /**
     * @internal
     */
    ListJobsFilterCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobsFilterCriteria || (ListJobsFilterCriteria = {}));
export var ListJobsSortAttributeName;
(function (ListJobsSortAttributeName) {
    ListJobsSortAttributeName["createdAt"] = "createdAt";
    ListJobsSortAttributeName["jobStatus"] = "jobStatus";
    ListJobsSortAttributeName["jobType"] = "jobType";
    ListJobsSortAttributeName["name"] = "name";
})(ListJobsSortAttributeName || (ListJobsSortAttributeName = {}));
export var ListJobsSortCriteria;
(function (ListJobsSortCriteria) {
    /**
     * @internal
     */
    ListJobsSortCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListJobsSortCriteria || (ListJobsSortCriteria = {}));
export var ListClassificationJobsRequest;
(function (ListClassificationJobsRequest) {
    /**
     * @internal
     */
    ListClassificationJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClassificationJobsRequest || (ListClassificationJobsRequest = {}));
export var ListClassificationJobsResponse;
(function (ListClassificationJobsResponse) {
    /**
     * @internal
     */
    ListClassificationJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListClassificationJobsResponse || (ListClassificationJobsResponse = {}));
export var ListCustomDataIdentifiersRequest;
(function (ListCustomDataIdentifiersRequest) {
    /**
     * @internal
     */
    ListCustomDataIdentifiersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCustomDataIdentifiersRequest || (ListCustomDataIdentifiersRequest = {}));
export var ListCustomDataIdentifiersResponse;
(function (ListCustomDataIdentifiersResponse) {
    /**
     * @internal
     */
    ListCustomDataIdentifiersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCustomDataIdentifiersResponse || (ListCustomDataIdentifiersResponse = {}));
export var ListFindingsRequest;
(function (ListFindingsRequest) {
    /**
     * @internal
     */
    ListFindingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFindingsRequest || (ListFindingsRequest = {}));
export var ListFindingsResponse;
(function (ListFindingsResponse) {
    /**
     * @internal
     */
    ListFindingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFindingsResponse || (ListFindingsResponse = {}));
export var ListFindingsFiltersRequest;
(function (ListFindingsFiltersRequest) {
    /**
     * @internal
     */
    ListFindingsFiltersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFindingsFiltersRequest || (ListFindingsFiltersRequest = {}));
export var ListFindingsFiltersResponse;
(function (ListFindingsFiltersResponse) {
    /**
     * @internal
     */
    ListFindingsFiltersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListFindingsFiltersResponse || (ListFindingsFiltersResponse = {}));
export var ListInvitationsRequest;
(function (ListInvitationsRequest) {
    /**
     * @internal
     */
    ListInvitationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInvitationsRequest || (ListInvitationsRequest = {}));
export var ListInvitationsResponse;
(function (ListInvitationsResponse) {
    /**
     * @internal
     */
    ListInvitationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInvitationsResponse || (ListInvitationsResponse = {}));
export var ListMembersRequest;
(function (ListMembersRequest) {
    /**
     * @internal
     */
    ListMembersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMembersRequest || (ListMembersRequest = {}));
export var ListMembersResponse;
(function (ListMembersResponse) {
    /**
     * @internal
     */
    ListMembersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMembersResponse || (ListMembersResponse = {}));
export var ListOrganizationAdminAccountsRequest;
(function (ListOrganizationAdminAccountsRequest) {
    /**
     * @internal
     */
    ListOrganizationAdminAccountsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOrganizationAdminAccountsRequest || (ListOrganizationAdminAccountsRequest = {}));
export var ListOrganizationAdminAccountsResponse;
(function (ListOrganizationAdminAccountsResponse) {
    /**
     * @internal
     */
    ListOrganizationAdminAccountsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListOrganizationAdminAccountsResponse || (ListOrganizationAdminAccountsResponse = {}));
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
export var PutClassificationExportConfigurationRequest;
(function (PutClassificationExportConfigurationRequest) {
    /**
     * @internal
     */
    PutClassificationExportConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutClassificationExportConfigurationRequest || (PutClassificationExportConfigurationRequest = {}));
export var PutClassificationExportConfigurationResponse;
(function (PutClassificationExportConfigurationResponse) {
    /**
     * @internal
     */
    PutClassificationExportConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutClassificationExportConfigurationResponse || (PutClassificationExportConfigurationResponse = {}));
export var PutFindingsPublicationConfigurationRequest;
(function (PutFindingsPublicationConfigurationRequest) {
    /**
     * @internal
     */
    PutFindingsPublicationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutFindingsPublicationConfigurationRequest || (PutFindingsPublicationConfigurationRequest = {}));
export var PutFindingsPublicationConfigurationResponse;
(function (PutFindingsPublicationConfigurationResponse) {
    /**
     * @internal
     */
    PutFindingsPublicationConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutFindingsPublicationConfigurationResponse || (PutFindingsPublicationConfigurationResponse = {}));
export var SearchResourcesCriteriaBlock;
(function (SearchResourcesCriteriaBlock) {
    /**
     * @internal
     */
    SearchResourcesCriteriaBlock.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchResourcesCriteriaBlock || (SearchResourcesCriteriaBlock = {}));
export var SearchResourcesBucketCriteria;
(function (SearchResourcesBucketCriteria) {
    /**
     * @internal
     */
    SearchResourcesBucketCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchResourcesBucketCriteria || (SearchResourcesBucketCriteria = {}));
export var SearchResourcesSortAttributeName;
(function (SearchResourcesSortAttributeName) {
    SearchResourcesSortAttributeName["ACCOUNT_ID"] = "ACCOUNT_ID";
    SearchResourcesSortAttributeName["RESOURCE_NAME"] = "RESOURCE_NAME";
    SearchResourcesSortAttributeName["S3_CLASSIFIABLE_OBJECT_COUNT"] = "S3_CLASSIFIABLE_OBJECT_COUNT";
    SearchResourcesSortAttributeName["S3_CLASSIFIABLE_SIZE_IN_BYTES"] = "S3_CLASSIFIABLE_SIZE_IN_BYTES";
})(SearchResourcesSortAttributeName || (SearchResourcesSortAttributeName = {}));
export var SearchResourcesSortCriteria;
(function (SearchResourcesSortCriteria) {
    /**
     * @internal
     */
    SearchResourcesSortCriteria.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchResourcesSortCriteria || (SearchResourcesSortCriteria = {}));
export var SearchResourcesRequest;
(function (SearchResourcesRequest) {
    /**
     * @internal
     */
    SearchResourcesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchResourcesRequest || (SearchResourcesRequest = {}));
export var SearchResourcesResponse;
(function (SearchResourcesResponse) {
    /**
     * @internal
     */
    SearchResourcesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SearchResourcesResponse || (SearchResourcesResponse = {}));
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
export var TestCustomDataIdentifierRequest;
(function (TestCustomDataIdentifierRequest) {
    /**
     * @internal
     */
    TestCustomDataIdentifierRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestCustomDataIdentifierRequest || (TestCustomDataIdentifierRequest = {}));
export var TestCustomDataIdentifierResponse;
(function (TestCustomDataIdentifierResponse) {
    /**
     * @internal
     */
    TestCustomDataIdentifierResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestCustomDataIdentifierResponse || (TestCustomDataIdentifierResponse = {}));
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
export var UpdateClassificationJobRequest;
(function (UpdateClassificationJobRequest) {
    /**
     * @internal
     */
    UpdateClassificationJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClassificationJobRequest || (UpdateClassificationJobRequest = {}));
export var UpdateClassificationJobResponse;
(function (UpdateClassificationJobResponse) {
    /**
     * @internal
     */
    UpdateClassificationJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateClassificationJobResponse || (UpdateClassificationJobResponse = {}));
export var UpdateFindingsFilterRequest;
(function (UpdateFindingsFilterRequest) {
    /**
     * @internal
     */
    UpdateFindingsFilterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFindingsFilterRequest || (UpdateFindingsFilterRequest = {}));
export var UpdateFindingsFilterResponse;
(function (UpdateFindingsFilterResponse) {
    /**
     * @internal
     */
    UpdateFindingsFilterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateFindingsFilterResponse || (UpdateFindingsFilterResponse = {}));
export var UpdateMacieSessionRequest;
(function (UpdateMacieSessionRequest) {
    /**
     * @internal
     */
    UpdateMacieSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMacieSessionRequest || (UpdateMacieSessionRequest = {}));
export var UpdateMacieSessionResponse;
(function (UpdateMacieSessionResponse) {
    /**
     * @internal
     */
    UpdateMacieSessionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMacieSessionResponse || (UpdateMacieSessionResponse = {}));
export var UpdateMemberSessionRequest;
(function (UpdateMemberSessionRequest) {
    /**
     * @internal
     */
    UpdateMemberSessionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMemberSessionRequest || (UpdateMemberSessionRequest = {}));
export var UpdateMemberSessionResponse;
(function (UpdateMemberSessionResponse) {
    /**
     * @internal
     */
    UpdateMemberSessionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMemberSessionResponse || (UpdateMemberSessionResponse = {}));
export var UpdateOrganizationConfigurationRequest;
(function (UpdateOrganizationConfigurationRequest) {
    /**
     * @internal
     */
    UpdateOrganizationConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateOrganizationConfigurationRequest || (UpdateOrganizationConfigurationRequest = {}));
export var UpdateOrganizationConfigurationResponse;
(function (UpdateOrganizationConfigurationResponse) {
    /**
     * @internal
     */
    UpdateOrganizationConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateOrganizationConfigurationResponse || (UpdateOrganizationConfigurationResponse = {}));
//# sourceMappingURL=models_0.js.map