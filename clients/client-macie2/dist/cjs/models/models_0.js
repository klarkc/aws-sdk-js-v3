"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpCountry = exports.IpCity = exports.DomainDetails = exports.FindingAction = exports.ApiCallDetails = exports.FindingActionType = exports.ClassificationDetails = exports.ClassificationResult = exports.ClassificationResultStatus = exports.SensitiveDataItem = exports.DefaultDetection = exports.SensitiveDataItemCategory = exports.CustomDataIdentifiers = exports.CustomDetection = exports.Occurrences = exports._Record = exports.Page = exports.Range = exports.Cell = exports.FindingCategory = exports.CustomDataIdentifierSummary = exports.CriteriaForJob = exports.TagCriterionForJob = exports.TagCriterionPairForJob = exports.SimpleCriterionForJob = exports.SimpleCriterionKeyForJob = exports.JobComparator = exports.BucketMetadata = exports.ObjectLevelStatistics = exports.KeyValuePair = exports.SharedAccess = exports.BucketServerSideEncryption = exports.Type = exports.ReplicationDetails = exports.BucketPublicAccess = exports.BucketPermissionConfiguration = exports.BucketLevelPermissions = exports.BucketPolicy = exports.AccessControlList = exports.AccountLevelPermissions = exports.BlockPublicAccess = exports.EffectivePermission = exports.ObjectCountByEncryptionType = exports.JobDetails = exports.IsMonitoredByJob = exports.IsDefinedInJob = exports.AllowsUnencryptedObjectUploads = exports.BatchGetCustomDataIdentifierSummary = exports.AdminAccount = exports.AdminStatus = void 0;
exports.MatchingBucket = exports.ListJobsFilterTerm = exports.ListJobsFilterKey = exports.JobSummary = exports.UserPausedDetails = exports.LastRunErrorStatus = exports.LastRunErrorStatusCode = exports.JobType = exports.JobStatus = exports.S3BucketDefinitionForJob = exports.S3BucketCriteriaForJob = exports.CriteriaBlockForJob = exports.JobScopeTerm = exports.TagScopeTerm = exports.TagTarget = exports.TagValuePair = exports.SimpleScopeTerm = exports.ScopeFilterKey = exports.Invitation = exports.RelationshipStatus = exports.GroupCount = exports.FindingsFilterListItem = exports.FindingsFilterAction = exports.Finding = exports.FindingType = exports.Severity = exports.SeverityDescription = exports.ResourcesAffected = exports.S3Object = exports.StorageClass = exports.S3Bucket = exports.S3BucketOwner = exports.ServerSideEncryption = exports.EncryptionType = exports.PolicyDetails = exports.FindingActor = exports.UserIdentity = exports.UserIdentityType = exports.UserIdentityRoot = exports.IamUser = exports.FederatedUser = exports.AwsService = exports.AwsAccount = exports.AssumedRole = exports.SessionContext = exports.SessionIssuer = exports.SessionContextAttributes = exports.IpAddressDetails = exports.IpOwner = exports.IpGeoLocation = void 0;
exports.CreateClassificationJobRequest = exports.JobScheduleFrequency = exports.WeeklySchedule = exports.DayOfWeek = exports.MonthlySchedule = exports.DailySchedule = exports.S3JobDefinition = exports.Scoping = exports.JobScopingBlock = exports.ClassificationExportConfiguration = exports.S3Destination = exports.BucketSortCriteria = exports.OrderBy = exports.BucketCriteriaAdditionalProperties = exports.BucketCountPolicyAllowsUnencryptedObjectUploads = exports.BucketCountBySharedAccessType = exports.BucketCountByEncryptionType = exports.BucketCountByEffectivePermission = exports.BatchGetCustomDataIdentifiersResponse = exports.BatchGetCustomDataIdentifiersRequest = exports.AccountDetail = exports.ValidationException = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.AccessDeniedException = exports.AcceptInvitationResponse = exports.AcceptInvitationRequest = exports.UsageTotal = exports.UsageStatisticsFilter = exports.UsageStatisticsFilterKey = exports.UsageStatisticsFilterComparator = exports.UsageRecord = exports.UsageByAccount = exports.UsageType = exports.ServiceLimit = exports.Unit = exports.Currency = exports.UnprocessedAccount = exports.ErrorCode = exports.SearchResourcesCriteria = exports.SearchResourcesTagCriterion = exports.SearchResourcesTagCriterionPair = exports.SearchResourcesSimpleCriterion = exports.SearchResourcesSimpleCriterionKey = exports.SearchResourcesComparator = exports.Member = exports.MatchingResource = void 0;
exports.GetAdministratorAccountResponse = exports.GetAdministratorAccountRequest = exports.FindingStatisticsSortCriteria = exports.FindingStatisticsSortAttributeName = exports.EnableOrganizationAdminAccountResponse = exports.EnableOrganizationAdminAccountRequest = exports.EnableMacieResponse = exports.EnableMacieRequest = exports.MacieStatus = exports.FindingPublishingFrequency = exports.DisassociateMemberResponse = exports.DisassociateMemberRequest = exports.DisassociateFromMasterAccountResponse = exports.DisassociateFromMasterAccountRequest = exports.DisassociateFromAdministratorAccountResponse = exports.DisassociateFromAdministratorAccountRequest = exports.DisableOrganizationAdminAccountResponse = exports.DisableOrganizationAdminAccountRequest = exports.DisableMacieResponse = exports.DisableMacieRequest = exports.DescribeOrganizationConfigurationResponse = exports.DescribeOrganizationConfigurationRequest = exports.DescribeClassificationJobResponse = exports.Statistics = exports.DescribeClassificationJobRequest = exports.DescribeBucketsResponse = exports.DescribeBucketsRequest = exports.DeleteMemberResponse = exports.DeleteMemberRequest = exports.DeleteInvitationsResponse = exports.DeleteInvitationsRequest = exports.DeleteFindingsFilterResponse = exports.DeleteFindingsFilterRequest = exports.DeleteCustomDataIdentifierResponse = exports.DeleteCustomDataIdentifierRequest = exports.DeclineInvitationsResponse = exports.DeclineInvitationsRequest = exports.CreateSampleFindingsResponse = exports.CreateSampleFindingsRequest = exports.CreateMemberResponse = exports.CreateMemberRequest = exports.CreateInvitationsResponse = exports.CreateInvitationsRequest = exports.CreateFindingsFilterResponse = exports.CreateFindingsFilterRequest = exports.FindingCriteria = exports.CriterionAdditionalProperties = exports.CreateCustomDataIdentifierResponse = exports.CreateCustomDataIdentifierRequest = exports.CreateClassificationJobResponse = void 0;
exports.ListTagsForResourceRequest = exports.ListOrganizationAdminAccountsResponse = exports.ListOrganizationAdminAccountsRequest = exports.ListMembersResponse = exports.ListMembersRequest = exports.ListInvitationsResponse = exports.ListInvitationsRequest = exports.ListFindingsFiltersResponse = exports.ListFindingsFiltersRequest = exports.ListFindingsResponse = exports.ListFindingsRequest = exports.ListCustomDataIdentifiersResponse = exports.ListCustomDataIdentifiersRequest = exports.ListClassificationJobsResponse = exports.ListClassificationJobsRequest = exports.ListJobsSortCriteria = exports.ListJobsSortAttributeName = exports.ListJobsFilterCriteria = exports.GetUsageTotalsResponse = exports.GetUsageTotalsRequest = exports.GetUsageStatisticsResponse = exports.GetUsageStatisticsRequest = exports.TimeRange = exports.UsageStatisticsSortBy = exports.UsageStatisticsSortKey = exports.GetMemberResponse = exports.GetMemberRequest = exports.GetMasterAccountResponse = exports.GetMasterAccountRequest = exports.GetMacieSessionResponse = exports.GetMacieSessionRequest = exports.GetInvitationsCountResponse = exports.GetInvitationsCountRequest = exports.GetFindingStatisticsResponse = exports.GetFindingStatisticsRequest = exports.GroupBy = exports.GetFindingsPublicationConfigurationResponse = exports.SecurityHubConfiguration = exports.GetFindingsPublicationConfigurationRequest = exports.GetFindingsFilterResponse = exports.GetFindingsFilterRequest = exports.GetFindingsResponse = exports.GetFindingsRequest = exports.SortCriteria = exports.GetCustomDataIdentifierResponse = exports.GetCustomDataIdentifierRequest = exports.GetClassificationExportConfigurationResponse = exports.GetClassificationExportConfigurationRequest = exports.GetBucketStatisticsResponse = exports.GetBucketStatisticsRequest = void 0;
exports.UpdateOrganizationConfigurationResponse = exports.UpdateOrganizationConfigurationRequest = exports.UpdateMemberSessionResponse = exports.UpdateMemberSessionRequest = exports.UpdateMacieSessionResponse = exports.UpdateMacieSessionRequest = exports.UpdateFindingsFilterResponse = exports.UpdateFindingsFilterRequest = exports.UpdateClassificationJobResponse = exports.UpdateClassificationJobRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TestCustomDataIdentifierResponse = exports.TestCustomDataIdentifierRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.SearchResourcesResponse = exports.SearchResourcesRequest = exports.SearchResourcesSortCriteria = exports.SearchResourcesSortAttributeName = exports.SearchResourcesBucketCriteria = exports.SearchResourcesCriteriaBlock = exports.PutFindingsPublicationConfigurationResponse = exports.PutFindingsPublicationConfigurationRequest = exports.PutClassificationExportConfigurationResponse = exports.PutClassificationExportConfigurationRequest = exports.ListTagsForResourceResponse = void 0;
var AdminStatus;
(function (AdminStatus) {
    AdminStatus["DISABLING_IN_PROGRESS"] = "DISABLING_IN_PROGRESS";
    AdminStatus["ENABLED"] = "ENABLED";
})(AdminStatus = exports.AdminStatus || (exports.AdminStatus = {}));
var AdminAccount;
(function (AdminAccount) {
    /**
     * @internal
     */
    AdminAccount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdminAccount = exports.AdminAccount || (exports.AdminAccount = {}));
var BatchGetCustomDataIdentifierSummary;
(function (BatchGetCustomDataIdentifierSummary) {
    /**
     * @internal
     */
    BatchGetCustomDataIdentifierSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetCustomDataIdentifierSummary = exports.BatchGetCustomDataIdentifierSummary || (exports.BatchGetCustomDataIdentifierSummary = {}));
var AllowsUnencryptedObjectUploads;
(function (AllowsUnencryptedObjectUploads) {
    AllowsUnencryptedObjectUploads["FALSE"] = "FALSE";
    AllowsUnencryptedObjectUploads["TRUE"] = "TRUE";
    AllowsUnencryptedObjectUploads["UNKNOWN"] = "UNKNOWN";
})(AllowsUnencryptedObjectUploads = exports.AllowsUnencryptedObjectUploads || (exports.AllowsUnencryptedObjectUploads = {}));
var IsDefinedInJob;
(function (IsDefinedInJob) {
    IsDefinedInJob["FALSE"] = "FALSE";
    IsDefinedInJob["TRUE"] = "TRUE";
    IsDefinedInJob["UNKNOWN"] = "UNKNOWN";
})(IsDefinedInJob = exports.IsDefinedInJob || (exports.IsDefinedInJob = {}));
var IsMonitoredByJob;
(function (IsMonitoredByJob) {
    IsMonitoredByJob["FALSE"] = "FALSE";
    IsMonitoredByJob["TRUE"] = "TRUE";
    IsMonitoredByJob["UNKNOWN"] = "UNKNOWN";
})(IsMonitoredByJob = exports.IsMonitoredByJob || (exports.IsMonitoredByJob = {}));
var JobDetails;
(function (JobDetails) {
    /**
     * @internal
     */
    JobDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobDetails = exports.JobDetails || (exports.JobDetails = {}));
var ObjectCountByEncryptionType;
(function (ObjectCountByEncryptionType) {
    /**
     * @internal
     */
    ObjectCountByEncryptionType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectCountByEncryptionType = exports.ObjectCountByEncryptionType || (exports.ObjectCountByEncryptionType = {}));
var EffectivePermission;
(function (EffectivePermission) {
    EffectivePermission["NOT_PUBLIC"] = "NOT_PUBLIC";
    EffectivePermission["PUBLIC"] = "PUBLIC";
    EffectivePermission["UNKNOWN"] = "UNKNOWN";
})(EffectivePermission = exports.EffectivePermission || (exports.EffectivePermission = {}));
var BlockPublicAccess;
(function (BlockPublicAccess) {
    /**
     * @internal
     */
    BlockPublicAccess.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlockPublicAccess = exports.BlockPublicAccess || (exports.BlockPublicAccess = {}));
var AccountLevelPermissions;
(function (AccountLevelPermissions) {
    /**
     * @internal
     */
    AccountLevelPermissions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountLevelPermissions = exports.AccountLevelPermissions || (exports.AccountLevelPermissions = {}));
var AccessControlList;
(function (AccessControlList) {
    /**
     * @internal
     */
    AccessControlList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessControlList = exports.AccessControlList || (exports.AccessControlList = {}));
var BucketPolicy;
(function (BucketPolicy) {
    /**
     * @internal
     */
    BucketPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketPolicy = exports.BucketPolicy || (exports.BucketPolicy = {}));
var BucketLevelPermissions;
(function (BucketLevelPermissions) {
    /**
     * @internal
     */
    BucketLevelPermissions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketLevelPermissions = exports.BucketLevelPermissions || (exports.BucketLevelPermissions = {}));
var BucketPermissionConfiguration;
(function (BucketPermissionConfiguration) {
    /**
     * @internal
     */
    BucketPermissionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketPermissionConfiguration = exports.BucketPermissionConfiguration || (exports.BucketPermissionConfiguration = {}));
var BucketPublicAccess;
(function (BucketPublicAccess) {
    /**
     * @internal
     */
    BucketPublicAccess.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketPublicAccess = exports.BucketPublicAccess || (exports.BucketPublicAccess = {}));
var ReplicationDetails;
(function (ReplicationDetails) {
    /**
     * @internal
     */
    ReplicationDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationDetails = exports.ReplicationDetails || (exports.ReplicationDetails = {}));
var Type;
(function (Type) {
    Type["AES256"] = "AES256";
    Type["NONE"] = "NONE";
    Type["aws_kms"] = "aws:kms";
})(Type = exports.Type || (exports.Type = {}));
var BucketServerSideEncryption;
(function (BucketServerSideEncryption) {
    /**
     * @internal
     */
    BucketServerSideEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketServerSideEncryption = exports.BucketServerSideEncryption || (exports.BucketServerSideEncryption = {}));
var SharedAccess;
(function (SharedAccess) {
    SharedAccess["EXTERNAL"] = "EXTERNAL";
    SharedAccess["INTERNAL"] = "INTERNAL";
    SharedAccess["NOT_SHARED"] = "NOT_SHARED";
    SharedAccess["UNKNOWN"] = "UNKNOWN";
})(SharedAccess = exports.SharedAccess || (exports.SharedAccess = {}));
var KeyValuePair;
(function (KeyValuePair) {
    /**
     * @internal
     */
    KeyValuePair.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeyValuePair = exports.KeyValuePair || (exports.KeyValuePair = {}));
var ObjectLevelStatistics;
(function (ObjectLevelStatistics) {
    /**
     * @internal
     */
    ObjectLevelStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ObjectLevelStatistics = exports.ObjectLevelStatistics || (exports.ObjectLevelStatistics = {}));
var BucketMetadata;
(function (BucketMetadata) {
    /**
     * @internal
     */
    BucketMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketMetadata = exports.BucketMetadata || (exports.BucketMetadata = {}));
var JobComparator;
(function (JobComparator) {
    JobComparator["CONTAINS"] = "CONTAINS";
    JobComparator["EQ"] = "EQ";
    JobComparator["GT"] = "GT";
    JobComparator["GTE"] = "GTE";
    JobComparator["LT"] = "LT";
    JobComparator["LTE"] = "LTE";
    JobComparator["NE"] = "NE";
    JobComparator["STARTS_WITH"] = "STARTS_WITH";
})(JobComparator = exports.JobComparator || (exports.JobComparator = {}));
var SimpleCriterionKeyForJob;
(function (SimpleCriterionKeyForJob) {
    SimpleCriterionKeyForJob["ACCOUNT_ID"] = "ACCOUNT_ID";
    SimpleCriterionKeyForJob["S3_BUCKET_EFFECTIVE_PERMISSION"] = "S3_BUCKET_EFFECTIVE_PERMISSION";
    SimpleCriterionKeyForJob["S3_BUCKET_NAME"] = "S3_BUCKET_NAME";
    SimpleCriterionKeyForJob["S3_BUCKET_SHARED_ACCESS"] = "S3_BUCKET_SHARED_ACCESS";
})(SimpleCriterionKeyForJob = exports.SimpleCriterionKeyForJob || (exports.SimpleCriterionKeyForJob = {}));
var SimpleCriterionForJob;
(function (SimpleCriterionForJob) {
    /**
     * @internal
     */
    SimpleCriterionForJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimpleCriterionForJob = exports.SimpleCriterionForJob || (exports.SimpleCriterionForJob = {}));
var TagCriterionPairForJob;
(function (TagCriterionPairForJob) {
    /**
     * @internal
     */
    TagCriterionPairForJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagCriterionPairForJob = exports.TagCriterionPairForJob || (exports.TagCriterionPairForJob = {}));
var TagCriterionForJob;
(function (TagCriterionForJob) {
    /**
     * @internal
     */
    TagCriterionForJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagCriterionForJob = exports.TagCriterionForJob || (exports.TagCriterionForJob = {}));
var CriteriaForJob;
(function (CriteriaForJob) {
    /**
     * @internal
     */
    CriteriaForJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CriteriaForJob = exports.CriteriaForJob || (exports.CriteriaForJob = {}));
var CustomDataIdentifierSummary;
(function (CustomDataIdentifierSummary) {
    /**
     * @internal
     */
    CustomDataIdentifierSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomDataIdentifierSummary = exports.CustomDataIdentifierSummary || (exports.CustomDataIdentifierSummary = {}));
var FindingCategory;
(function (FindingCategory) {
    FindingCategory["CLASSIFICATION"] = "CLASSIFICATION";
    FindingCategory["POLICY"] = "POLICY";
})(FindingCategory = exports.FindingCategory || (exports.FindingCategory = {}));
var Cell;
(function (Cell) {
    /**
     * @internal
     */
    Cell.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Cell = exports.Cell || (exports.Cell = {}));
var Range;
(function (Range) {
    /**
     * @internal
     */
    Range.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Range = exports.Range || (exports.Range = {}));
var Page;
(function (Page) {
    /**
     * @internal
     */
    Page.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Page = exports.Page || (exports.Page = {}));
var _Record;
(function (_Record) {
    /**
     * @internal
     */
    _Record.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(_Record = exports._Record || (exports._Record = {}));
var Occurrences;
(function (Occurrences) {
    /**
     * @internal
     */
    Occurrences.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Occurrences = exports.Occurrences || (exports.Occurrences = {}));
var CustomDetection;
(function (CustomDetection) {
    /**
     * @internal
     */
    CustomDetection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomDetection = exports.CustomDetection || (exports.CustomDetection = {}));
var CustomDataIdentifiers;
(function (CustomDataIdentifiers) {
    /**
     * @internal
     */
    CustomDataIdentifiers.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomDataIdentifiers = exports.CustomDataIdentifiers || (exports.CustomDataIdentifiers = {}));
var SensitiveDataItemCategory;
(function (SensitiveDataItemCategory) {
    SensitiveDataItemCategory["CREDENTIALS"] = "CREDENTIALS";
    SensitiveDataItemCategory["CUSTOM_IDENTIFIER"] = "CUSTOM_IDENTIFIER";
    SensitiveDataItemCategory["FINANCIAL_INFORMATION"] = "FINANCIAL_INFORMATION";
    SensitiveDataItemCategory["PERSONAL_INFORMATION"] = "PERSONAL_INFORMATION";
})(SensitiveDataItemCategory = exports.SensitiveDataItemCategory || (exports.SensitiveDataItemCategory = {}));
var DefaultDetection;
(function (DefaultDetection) {
    /**
     * @internal
     */
    DefaultDetection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultDetection = exports.DefaultDetection || (exports.DefaultDetection = {}));
var SensitiveDataItem;
(function (SensitiveDataItem) {
    /**
     * @internal
     */
    SensitiveDataItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SensitiveDataItem = exports.SensitiveDataItem || (exports.SensitiveDataItem = {}));
var ClassificationResultStatus;
(function (ClassificationResultStatus) {
    /**
     * @internal
     */
    ClassificationResultStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClassificationResultStatus = exports.ClassificationResultStatus || (exports.ClassificationResultStatus = {}));
var ClassificationResult;
(function (ClassificationResult) {
    /**
     * @internal
     */
    ClassificationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClassificationResult = exports.ClassificationResult || (exports.ClassificationResult = {}));
var ClassificationDetails;
(function (ClassificationDetails) {
    /**
     * @internal
     */
    ClassificationDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClassificationDetails = exports.ClassificationDetails || (exports.ClassificationDetails = {}));
var FindingActionType;
(function (FindingActionType) {
    FindingActionType["AWS_API_CALL"] = "AWS_API_CALL";
})(FindingActionType = exports.FindingActionType || (exports.FindingActionType = {}));
var ApiCallDetails;
(function (ApiCallDetails) {
    /**
     * @internal
     */
    ApiCallDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApiCallDetails = exports.ApiCallDetails || (exports.ApiCallDetails = {}));
var FindingAction;
(function (FindingAction) {
    /**
     * @internal
     */
    FindingAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindingAction = exports.FindingAction || (exports.FindingAction = {}));
var DomainDetails;
(function (DomainDetails) {
    /**
     * @internal
     */
    DomainDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainDetails = exports.DomainDetails || (exports.DomainDetails = {}));
var IpCity;
(function (IpCity) {
    /**
     * @internal
     */
    IpCity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpCity = exports.IpCity || (exports.IpCity = {}));
var IpCountry;
(function (IpCountry) {
    /**
     * @internal
     */
    IpCountry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpCountry = exports.IpCountry || (exports.IpCountry = {}));
var IpGeoLocation;
(function (IpGeoLocation) {
    /**
     * @internal
     */
    IpGeoLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpGeoLocation = exports.IpGeoLocation || (exports.IpGeoLocation = {}));
var IpOwner;
(function (IpOwner) {
    /**
     * @internal
     */
    IpOwner.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpOwner = exports.IpOwner || (exports.IpOwner = {}));
var IpAddressDetails;
(function (IpAddressDetails) {
    /**
     * @internal
     */
    IpAddressDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IpAddressDetails = exports.IpAddressDetails || (exports.IpAddressDetails = {}));
var SessionContextAttributes;
(function (SessionContextAttributes) {
    /**
     * @internal
     */
    SessionContextAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SessionContextAttributes = exports.SessionContextAttributes || (exports.SessionContextAttributes = {}));
var SessionIssuer;
(function (SessionIssuer) {
    /**
     * @internal
     */
    SessionIssuer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SessionIssuer = exports.SessionIssuer || (exports.SessionIssuer = {}));
var SessionContext;
(function (SessionContext) {
    /**
     * @internal
     */
    SessionContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SessionContext = exports.SessionContext || (exports.SessionContext = {}));
var AssumedRole;
(function (AssumedRole) {
    /**
     * @internal
     */
    AssumedRole.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssumedRole = exports.AssumedRole || (exports.AssumedRole = {}));
var AwsAccount;
(function (AwsAccount) {
    /**
     * @internal
     */
    AwsAccount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsAccount = exports.AwsAccount || (exports.AwsAccount = {}));
var AwsService;
(function (AwsService) {
    /**
     * @internal
     */
    AwsService.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsService = exports.AwsService || (exports.AwsService = {}));
var FederatedUser;
(function (FederatedUser) {
    /**
     * @internal
     */
    FederatedUser.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FederatedUser = exports.FederatedUser || (exports.FederatedUser = {}));
var IamUser;
(function (IamUser) {
    /**
     * @internal
     */
    IamUser.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IamUser = exports.IamUser || (exports.IamUser = {}));
var UserIdentityRoot;
(function (UserIdentityRoot) {
    /**
     * @internal
     */
    UserIdentityRoot.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserIdentityRoot = exports.UserIdentityRoot || (exports.UserIdentityRoot = {}));
var UserIdentityType;
(function (UserIdentityType) {
    UserIdentityType["AWSAccount"] = "AWSAccount";
    UserIdentityType["AWSService"] = "AWSService";
    UserIdentityType["AssumedRole"] = "AssumedRole";
    UserIdentityType["FederatedUser"] = "FederatedUser";
    UserIdentityType["IAMUser"] = "IAMUser";
    UserIdentityType["Root"] = "Root";
})(UserIdentityType = exports.UserIdentityType || (exports.UserIdentityType = {}));
var UserIdentity;
(function (UserIdentity) {
    /**
     * @internal
     */
    UserIdentity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserIdentity = exports.UserIdentity || (exports.UserIdentity = {}));
var FindingActor;
(function (FindingActor) {
    /**
     * @internal
     */
    FindingActor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindingActor = exports.FindingActor || (exports.FindingActor = {}));
var PolicyDetails;
(function (PolicyDetails) {
    /**
     * @internal
     */
    PolicyDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyDetails = exports.PolicyDetails || (exports.PolicyDetails = {}));
var EncryptionType;
(function (EncryptionType) {
    EncryptionType["AES256"] = "AES256";
    EncryptionType["NONE"] = "NONE";
    EncryptionType["UNKNOWN"] = "UNKNOWN";
    EncryptionType["aws_kms"] = "aws:kms";
})(EncryptionType = exports.EncryptionType || (exports.EncryptionType = {}));
var ServerSideEncryption;
(function (ServerSideEncryption) {
    /**
     * @internal
     */
    ServerSideEncryption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServerSideEncryption = exports.ServerSideEncryption || (exports.ServerSideEncryption = {}));
var S3BucketOwner;
(function (S3BucketOwner) {
    /**
     * @internal
     */
    S3BucketOwner.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3BucketOwner = exports.S3BucketOwner || (exports.S3BucketOwner = {}));
var S3Bucket;
(function (S3Bucket) {
    /**
     * @internal
     */
    S3Bucket.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Bucket = exports.S3Bucket || (exports.S3Bucket = {}));
var StorageClass;
(function (StorageClass) {
    StorageClass["DEEP_ARCHIVE"] = "DEEP_ARCHIVE";
    StorageClass["GLACIER"] = "GLACIER";
    StorageClass["INTELLIGENT_TIERING"] = "INTELLIGENT_TIERING";
    StorageClass["ONEZONE_IA"] = "ONEZONE_IA";
    StorageClass["REDUCED_REDUNDANCY"] = "REDUCED_REDUNDANCY";
    StorageClass["STANDARD"] = "STANDARD";
    StorageClass["STANDARD_IA"] = "STANDARD_IA";
})(StorageClass = exports.StorageClass || (exports.StorageClass = {}));
var S3Object;
(function (S3Object) {
    /**
     * @internal
     */
    S3Object.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Object = exports.S3Object || (exports.S3Object = {}));
var ResourcesAffected;
(function (ResourcesAffected) {
    /**
     * @internal
     */
    ResourcesAffected.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourcesAffected = exports.ResourcesAffected || (exports.ResourcesAffected = {}));
var SeverityDescription;
(function (SeverityDescription) {
    SeverityDescription["High"] = "High";
    SeverityDescription["Low"] = "Low";
    SeverityDescription["Medium"] = "Medium";
})(SeverityDescription = exports.SeverityDescription || (exports.SeverityDescription = {}));
var Severity;
(function (Severity) {
    /**
     * @internal
     */
    Severity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Severity = exports.Severity || (exports.Severity = {}));
var FindingType;
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
})(FindingType = exports.FindingType || (exports.FindingType = {}));
var Finding;
(function (Finding) {
    /**
     * @internal
     */
    Finding.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Finding = exports.Finding || (exports.Finding = {}));
var FindingsFilterAction;
(function (FindingsFilterAction) {
    FindingsFilterAction["ARCHIVE"] = "ARCHIVE";
    FindingsFilterAction["NOOP"] = "NOOP";
})(FindingsFilterAction = exports.FindingsFilterAction || (exports.FindingsFilterAction = {}));
var FindingsFilterListItem;
(function (FindingsFilterListItem) {
    /**
     * @internal
     */
    FindingsFilterListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindingsFilterListItem = exports.FindingsFilterListItem || (exports.FindingsFilterListItem = {}));
var GroupCount;
(function (GroupCount) {
    /**
     * @internal
     */
    GroupCount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupCount = exports.GroupCount || (exports.GroupCount = {}));
var RelationshipStatus;
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
})(RelationshipStatus = exports.RelationshipStatus || (exports.RelationshipStatus = {}));
var Invitation;
(function (Invitation) {
    /**
     * @internal
     */
    Invitation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Invitation = exports.Invitation || (exports.Invitation = {}));
var ScopeFilterKey;
(function (ScopeFilterKey) {
    ScopeFilterKey["BUCKET_CREATION_DATE"] = "BUCKET_CREATION_DATE";
    ScopeFilterKey["OBJECT_EXTENSION"] = "OBJECT_EXTENSION";
    ScopeFilterKey["OBJECT_KEY"] = "OBJECT_KEY";
    ScopeFilterKey["OBJECT_LAST_MODIFIED_DATE"] = "OBJECT_LAST_MODIFIED_DATE";
    ScopeFilterKey["OBJECT_SIZE"] = "OBJECT_SIZE";
    ScopeFilterKey["TAG"] = "TAG";
})(ScopeFilterKey = exports.ScopeFilterKey || (exports.ScopeFilterKey = {}));
var SimpleScopeTerm;
(function (SimpleScopeTerm) {
    /**
     * @internal
     */
    SimpleScopeTerm.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimpleScopeTerm = exports.SimpleScopeTerm || (exports.SimpleScopeTerm = {}));
var TagValuePair;
(function (TagValuePair) {
    /**
     * @internal
     */
    TagValuePair.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagValuePair = exports.TagValuePair || (exports.TagValuePair = {}));
var TagTarget;
(function (TagTarget) {
    TagTarget["S3_OBJECT"] = "S3_OBJECT";
})(TagTarget = exports.TagTarget || (exports.TagTarget = {}));
var TagScopeTerm;
(function (TagScopeTerm) {
    /**
     * @internal
     */
    TagScopeTerm.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagScopeTerm = exports.TagScopeTerm || (exports.TagScopeTerm = {}));
var JobScopeTerm;
(function (JobScopeTerm) {
    /**
     * @internal
     */
    JobScopeTerm.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobScopeTerm = exports.JobScopeTerm || (exports.JobScopeTerm = {}));
var CriteriaBlockForJob;
(function (CriteriaBlockForJob) {
    /**
     * @internal
     */
    CriteriaBlockForJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CriteriaBlockForJob = exports.CriteriaBlockForJob || (exports.CriteriaBlockForJob = {}));
var S3BucketCriteriaForJob;
(function (S3BucketCriteriaForJob) {
    /**
     * @internal
     */
    S3BucketCriteriaForJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3BucketCriteriaForJob = exports.S3BucketCriteriaForJob || (exports.S3BucketCriteriaForJob = {}));
var S3BucketDefinitionForJob;
(function (S3BucketDefinitionForJob) {
    /**
     * @internal
     */
    S3BucketDefinitionForJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3BucketDefinitionForJob = exports.S3BucketDefinitionForJob || (exports.S3BucketDefinitionForJob = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["CANCELLED"] = "CANCELLED";
    JobStatus["COMPLETE"] = "COMPLETE";
    JobStatus["IDLE"] = "IDLE";
    JobStatus["PAUSED"] = "PAUSED";
    JobStatus["RUNNING"] = "RUNNING";
    JobStatus["USER_PAUSED"] = "USER_PAUSED";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var JobType;
(function (JobType) {
    JobType["ONE_TIME"] = "ONE_TIME";
    JobType["SCHEDULED"] = "SCHEDULED";
})(JobType = exports.JobType || (exports.JobType = {}));
var LastRunErrorStatusCode;
(function (LastRunErrorStatusCode) {
    LastRunErrorStatusCode["ERROR"] = "ERROR";
    LastRunErrorStatusCode["NONE"] = "NONE";
})(LastRunErrorStatusCode = exports.LastRunErrorStatusCode || (exports.LastRunErrorStatusCode = {}));
var LastRunErrorStatus;
(function (LastRunErrorStatus) {
    /**
     * @internal
     */
    LastRunErrorStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LastRunErrorStatus = exports.LastRunErrorStatus || (exports.LastRunErrorStatus = {}));
var UserPausedDetails;
(function (UserPausedDetails) {
    /**
     * @internal
     */
    UserPausedDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserPausedDetails = exports.UserPausedDetails || (exports.UserPausedDetails = {}));
var JobSummary;
(function (JobSummary) {
    /**
     * @internal
     */
    JobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobSummary = exports.JobSummary || (exports.JobSummary = {}));
var ListJobsFilterKey;
(function (ListJobsFilterKey) {
    ListJobsFilterKey["createdAt"] = "createdAt";
    ListJobsFilterKey["jobStatus"] = "jobStatus";
    ListJobsFilterKey["jobType"] = "jobType";
    ListJobsFilterKey["name"] = "name";
})(ListJobsFilterKey = exports.ListJobsFilterKey || (exports.ListJobsFilterKey = {}));
var ListJobsFilterTerm;
(function (ListJobsFilterTerm) {
    /**
     * @internal
     */
    ListJobsFilterTerm.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsFilterTerm = exports.ListJobsFilterTerm || (exports.ListJobsFilterTerm = {}));
var MatchingBucket;
(function (MatchingBucket) {
    /**
     * @internal
     */
    MatchingBucket.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MatchingBucket = exports.MatchingBucket || (exports.MatchingBucket = {}));
var MatchingResource;
(function (MatchingResource) {
    /**
     * @internal
     */
    MatchingResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MatchingResource = exports.MatchingResource || (exports.MatchingResource = {}));
var Member;
(function (Member) {
    /**
     * @internal
     */
    Member.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Member = exports.Member || (exports.Member = {}));
var SearchResourcesComparator;
(function (SearchResourcesComparator) {
    SearchResourcesComparator["EQ"] = "EQ";
    SearchResourcesComparator["NE"] = "NE";
})(SearchResourcesComparator = exports.SearchResourcesComparator || (exports.SearchResourcesComparator = {}));
var SearchResourcesSimpleCriterionKey;
(function (SearchResourcesSimpleCriterionKey) {
    SearchResourcesSimpleCriterionKey["ACCOUNT_ID"] = "ACCOUNT_ID";
    SearchResourcesSimpleCriterionKey["S3_BUCKET_EFFECTIVE_PERMISSION"] = "S3_BUCKET_EFFECTIVE_PERMISSION";
    SearchResourcesSimpleCriterionKey["S3_BUCKET_NAME"] = "S3_BUCKET_NAME";
    SearchResourcesSimpleCriterionKey["S3_BUCKET_SHARED_ACCESS"] = "S3_BUCKET_SHARED_ACCESS";
})(SearchResourcesSimpleCriterionKey = exports.SearchResourcesSimpleCriterionKey || (exports.SearchResourcesSimpleCriterionKey = {}));
var SearchResourcesSimpleCriterion;
(function (SearchResourcesSimpleCriterion) {
    /**
     * @internal
     */
    SearchResourcesSimpleCriterion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchResourcesSimpleCriterion = exports.SearchResourcesSimpleCriterion || (exports.SearchResourcesSimpleCriterion = {}));
var SearchResourcesTagCriterionPair;
(function (SearchResourcesTagCriterionPair) {
    /**
     * @internal
     */
    SearchResourcesTagCriterionPair.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchResourcesTagCriterionPair = exports.SearchResourcesTagCriterionPair || (exports.SearchResourcesTagCriterionPair = {}));
var SearchResourcesTagCriterion;
(function (SearchResourcesTagCriterion) {
    /**
     * @internal
     */
    SearchResourcesTagCriterion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchResourcesTagCriterion = exports.SearchResourcesTagCriterion || (exports.SearchResourcesTagCriterion = {}));
var SearchResourcesCriteria;
(function (SearchResourcesCriteria) {
    /**
     * @internal
     */
    SearchResourcesCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchResourcesCriteria = exports.SearchResourcesCriteria || (exports.SearchResourcesCriteria = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["ClientError"] = "ClientError";
    ErrorCode["InternalError"] = "InternalError";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var UnprocessedAccount;
(function (UnprocessedAccount) {
    /**
     * @internal
     */
    UnprocessedAccount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnprocessedAccount = exports.UnprocessedAccount || (exports.UnprocessedAccount = {}));
var Currency;
(function (Currency) {
    Currency["USD"] = "USD";
})(Currency = exports.Currency || (exports.Currency = {}));
var Unit;
(function (Unit) {
    Unit["TERABYTES"] = "TERABYTES";
})(Unit = exports.Unit || (exports.Unit = {}));
var ServiceLimit;
(function (ServiceLimit) {
    /**
     * @internal
     */
    ServiceLimit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceLimit = exports.ServiceLimit || (exports.ServiceLimit = {}));
var UsageType;
(function (UsageType) {
    UsageType["DATA_INVENTORY_EVALUATION"] = "DATA_INVENTORY_EVALUATION";
    UsageType["SENSITIVE_DATA_DISCOVERY"] = "SENSITIVE_DATA_DISCOVERY";
})(UsageType = exports.UsageType || (exports.UsageType = {}));
var UsageByAccount;
(function (UsageByAccount) {
    /**
     * @internal
     */
    UsageByAccount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageByAccount = exports.UsageByAccount || (exports.UsageByAccount = {}));
var UsageRecord;
(function (UsageRecord) {
    /**
     * @internal
     */
    UsageRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageRecord = exports.UsageRecord || (exports.UsageRecord = {}));
var UsageStatisticsFilterComparator;
(function (UsageStatisticsFilterComparator) {
    UsageStatisticsFilterComparator["CONTAINS"] = "CONTAINS";
    UsageStatisticsFilterComparator["EQ"] = "EQ";
    UsageStatisticsFilterComparator["GT"] = "GT";
    UsageStatisticsFilterComparator["GTE"] = "GTE";
    UsageStatisticsFilterComparator["LT"] = "LT";
    UsageStatisticsFilterComparator["LTE"] = "LTE";
    UsageStatisticsFilterComparator["NE"] = "NE";
})(UsageStatisticsFilterComparator = exports.UsageStatisticsFilterComparator || (exports.UsageStatisticsFilterComparator = {}));
var UsageStatisticsFilterKey;
(function (UsageStatisticsFilterKey) {
    UsageStatisticsFilterKey["accountId"] = "accountId";
    UsageStatisticsFilterKey["freeTrialStartDate"] = "freeTrialStartDate";
    UsageStatisticsFilterKey["serviceLimit"] = "serviceLimit";
    UsageStatisticsFilterKey["total"] = "total";
})(UsageStatisticsFilterKey = exports.UsageStatisticsFilterKey || (exports.UsageStatisticsFilterKey = {}));
var UsageStatisticsFilter;
(function (UsageStatisticsFilter) {
    /**
     * @internal
     */
    UsageStatisticsFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageStatisticsFilter = exports.UsageStatisticsFilter || (exports.UsageStatisticsFilter = {}));
var UsageTotal;
(function (UsageTotal) {
    /**
     * @internal
     */
    UsageTotal.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageTotal = exports.UsageTotal || (exports.UsageTotal = {}));
var AcceptInvitationRequest;
(function (AcceptInvitationRequest) {
    /**
     * @internal
     */
    AcceptInvitationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptInvitationRequest = exports.AcceptInvitationRequest || (exports.AcceptInvitationRequest = {}));
var AcceptInvitationResponse;
(function (AcceptInvitationResponse) {
    /**
     * @internal
     */
    AcceptInvitationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcceptInvitationResponse = exports.AcceptInvitationResponse || (exports.AcceptInvitationResponse = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
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
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var AccountDetail;
(function (AccountDetail) {
    /**
     * @internal
     */
    AccountDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountDetail = exports.AccountDetail || (exports.AccountDetail = {}));
var BatchGetCustomDataIdentifiersRequest;
(function (BatchGetCustomDataIdentifiersRequest) {
    /**
     * @internal
     */
    BatchGetCustomDataIdentifiersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetCustomDataIdentifiersRequest = exports.BatchGetCustomDataIdentifiersRequest || (exports.BatchGetCustomDataIdentifiersRequest = {}));
var BatchGetCustomDataIdentifiersResponse;
(function (BatchGetCustomDataIdentifiersResponse) {
    /**
     * @internal
     */
    BatchGetCustomDataIdentifiersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetCustomDataIdentifiersResponse = exports.BatchGetCustomDataIdentifiersResponse || (exports.BatchGetCustomDataIdentifiersResponse = {}));
var BucketCountByEffectivePermission;
(function (BucketCountByEffectivePermission) {
    /**
     * @internal
     */
    BucketCountByEffectivePermission.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketCountByEffectivePermission = exports.BucketCountByEffectivePermission || (exports.BucketCountByEffectivePermission = {}));
var BucketCountByEncryptionType;
(function (BucketCountByEncryptionType) {
    /**
     * @internal
     */
    BucketCountByEncryptionType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketCountByEncryptionType = exports.BucketCountByEncryptionType || (exports.BucketCountByEncryptionType = {}));
var BucketCountBySharedAccessType;
(function (BucketCountBySharedAccessType) {
    /**
     * @internal
     */
    BucketCountBySharedAccessType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketCountBySharedAccessType = exports.BucketCountBySharedAccessType || (exports.BucketCountBySharedAccessType = {}));
var BucketCountPolicyAllowsUnencryptedObjectUploads;
(function (BucketCountPolicyAllowsUnencryptedObjectUploads) {
    /**
     * @internal
     */
    BucketCountPolicyAllowsUnencryptedObjectUploads.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketCountPolicyAllowsUnencryptedObjectUploads = exports.BucketCountPolicyAllowsUnencryptedObjectUploads || (exports.BucketCountPolicyAllowsUnencryptedObjectUploads = {}));
var BucketCriteriaAdditionalProperties;
(function (BucketCriteriaAdditionalProperties) {
    /**
     * @internal
     */
    BucketCriteriaAdditionalProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketCriteriaAdditionalProperties = exports.BucketCriteriaAdditionalProperties || (exports.BucketCriteriaAdditionalProperties = {}));
var OrderBy;
(function (OrderBy) {
    OrderBy["ASC"] = "ASC";
    OrderBy["DESC"] = "DESC";
})(OrderBy = exports.OrderBy || (exports.OrderBy = {}));
var BucketSortCriteria;
(function (BucketSortCriteria) {
    /**
     * @internal
     */
    BucketSortCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BucketSortCriteria = exports.BucketSortCriteria || (exports.BucketSortCriteria = {}));
var S3Destination;
(function (S3Destination) {
    /**
     * @internal
     */
    S3Destination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Destination = exports.S3Destination || (exports.S3Destination = {}));
var ClassificationExportConfiguration;
(function (ClassificationExportConfiguration) {
    /**
     * @internal
     */
    ClassificationExportConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ClassificationExportConfiguration = exports.ClassificationExportConfiguration || (exports.ClassificationExportConfiguration = {}));
var JobScopingBlock;
(function (JobScopingBlock) {
    /**
     * @internal
     */
    JobScopingBlock.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobScopingBlock = exports.JobScopingBlock || (exports.JobScopingBlock = {}));
var Scoping;
(function (Scoping) {
    /**
     * @internal
     */
    Scoping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Scoping = exports.Scoping || (exports.Scoping = {}));
var S3JobDefinition;
(function (S3JobDefinition) {
    /**
     * @internal
     */
    S3JobDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3JobDefinition = exports.S3JobDefinition || (exports.S3JobDefinition = {}));
var DailySchedule;
(function (DailySchedule) {
    /**
     * @internal
     */
    DailySchedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DailySchedule = exports.DailySchedule || (exports.DailySchedule = {}));
var MonthlySchedule;
(function (MonthlySchedule) {
    /**
     * @internal
     */
    MonthlySchedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MonthlySchedule = exports.MonthlySchedule || (exports.MonthlySchedule = {}));
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["FRIDAY"] = "FRIDAY";
    DayOfWeek["MONDAY"] = "MONDAY";
    DayOfWeek["SATURDAY"] = "SATURDAY";
    DayOfWeek["SUNDAY"] = "SUNDAY";
    DayOfWeek["THURSDAY"] = "THURSDAY";
    DayOfWeek["TUESDAY"] = "TUESDAY";
    DayOfWeek["WEDNESDAY"] = "WEDNESDAY";
})(DayOfWeek = exports.DayOfWeek || (exports.DayOfWeek = {}));
var WeeklySchedule;
(function (WeeklySchedule) {
    /**
     * @internal
     */
    WeeklySchedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WeeklySchedule = exports.WeeklySchedule || (exports.WeeklySchedule = {}));
var JobScheduleFrequency;
(function (JobScheduleFrequency) {
    /**
     * @internal
     */
    JobScheduleFrequency.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobScheduleFrequency = exports.JobScheduleFrequency || (exports.JobScheduleFrequency = {}));
var CreateClassificationJobRequest;
(function (CreateClassificationJobRequest) {
    /**
     * @internal
     */
    CreateClassificationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClassificationJobRequest = exports.CreateClassificationJobRequest || (exports.CreateClassificationJobRequest = {}));
var CreateClassificationJobResponse;
(function (CreateClassificationJobResponse) {
    /**
     * @internal
     */
    CreateClassificationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateClassificationJobResponse = exports.CreateClassificationJobResponse || (exports.CreateClassificationJobResponse = {}));
var CreateCustomDataIdentifierRequest;
(function (CreateCustomDataIdentifierRequest) {
    /**
     * @internal
     */
    CreateCustomDataIdentifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomDataIdentifierRequest = exports.CreateCustomDataIdentifierRequest || (exports.CreateCustomDataIdentifierRequest = {}));
var CreateCustomDataIdentifierResponse;
(function (CreateCustomDataIdentifierResponse) {
    /**
     * @internal
     */
    CreateCustomDataIdentifierResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomDataIdentifierResponse = exports.CreateCustomDataIdentifierResponse || (exports.CreateCustomDataIdentifierResponse = {}));
var CriterionAdditionalProperties;
(function (CriterionAdditionalProperties) {
    /**
     * @internal
     */
    CriterionAdditionalProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CriterionAdditionalProperties = exports.CriterionAdditionalProperties || (exports.CriterionAdditionalProperties = {}));
var FindingCriteria;
(function (FindingCriteria) {
    /**
     * @internal
     */
    FindingCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindingCriteria = exports.FindingCriteria || (exports.FindingCriteria = {}));
var CreateFindingsFilterRequest;
(function (CreateFindingsFilterRequest) {
    /**
     * @internal
     */
    CreateFindingsFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFindingsFilterRequest = exports.CreateFindingsFilterRequest || (exports.CreateFindingsFilterRequest = {}));
var CreateFindingsFilterResponse;
(function (CreateFindingsFilterResponse) {
    /**
     * @internal
     */
    CreateFindingsFilterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFindingsFilterResponse = exports.CreateFindingsFilterResponse || (exports.CreateFindingsFilterResponse = {}));
var CreateInvitationsRequest;
(function (CreateInvitationsRequest) {
    /**
     * @internal
     */
    CreateInvitationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInvitationsRequest = exports.CreateInvitationsRequest || (exports.CreateInvitationsRequest = {}));
var CreateInvitationsResponse;
(function (CreateInvitationsResponse) {
    /**
     * @internal
     */
    CreateInvitationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInvitationsResponse = exports.CreateInvitationsResponse || (exports.CreateInvitationsResponse = {}));
var CreateMemberRequest;
(function (CreateMemberRequest) {
    /**
     * @internal
     */
    CreateMemberRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMemberRequest = exports.CreateMemberRequest || (exports.CreateMemberRequest = {}));
var CreateMemberResponse;
(function (CreateMemberResponse) {
    /**
     * @internal
     */
    CreateMemberResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMemberResponse = exports.CreateMemberResponse || (exports.CreateMemberResponse = {}));
var CreateSampleFindingsRequest;
(function (CreateSampleFindingsRequest) {
    /**
     * @internal
     */
    CreateSampleFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSampleFindingsRequest = exports.CreateSampleFindingsRequest || (exports.CreateSampleFindingsRequest = {}));
var CreateSampleFindingsResponse;
(function (CreateSampleFindingsResponse) {
    /**
     * @internal
     */
    CreateSampleFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSampleFindingsResponse = exports.CreateSampleFindingsResponse || (exports.CreateSampleFindingsResponse = {}));
var DeclineInvitationsRequest;
(function (DeclineInvitationsRequest) {
    /**
     * @internal
     */
    DeclineInvitationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeclineInvitationsRequest = exports.DeclineInvitationsRequest || (exports.DeclineInvitationsRequest = {}));
var DeclineInvitationsResponse;
(function (DeclineInvitationsResponse) {
    /**
     * @internal
     */
    DeclineInvitationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeclineInvitationsResponse = exports.DeclineInvitationsResponse || (exports.DeclineInvitationsResponse = {}));
var DeleteCustomDataIdentifierRequest;
(function (DeleteCustomDataIdentifierRequest) {
    /**
     * @internal
     */
    DeleteCustomDataIdentifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCustomDataIdentifierRequest = exports.DeleteCustomDataIdentifierRequest || (exports.DeleteCustomDataIdentifierRequest = {}));
var DeleteCustomDataIdentifierResponse;
(function (DeleteCustomDataIdentifierResponse) {
    /**
     * @internal
     */
    DeleteCustomDataIdentifierResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCustomDataIdentifierResponse = exports.DeleteCustomDataIdentifierResponse || (exports.DeleteCustomDataIdentifierResponse = {}));
var DeleteFindingsFilterRequest;
(function (DeleteFindingsFilterRequest) {
    /**
     * @internal
     */
    DeleteFindingsFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFindingsFilterRequest = exports.DeleteFindingsFilterRequest || (exports.DeleteFindingsFilterRequest = {}));
var DeleteFindingsFilterResponse;
(function (DeleteFindingsFilterResponse) {
    /**
     * @internal
     */
    DeleteFindingsFilterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFindingsFilterResponse = exports.DeleteFindingsFilterResponse || (exports.DeleteFindingsFilterResponse = {}));
var DeleteInvitationsRequest;
(function (DeleteInvitationsRequest) {
    /**
     * @internal
     */
    DeleteInvitationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInvitationsRequest = exports.DeleteInvitationsRequest || (exports.DeleteInvitationsRequest = {}));
var DeleteInvitationsResponse;
(function (DeleteInvitationsResponse) {
    /**
     * @internal
     */
    DeleteInvitationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInvitationsResponse = exports.DeleteInvitationsResponse || (exports.DeleteInvitationsResponse = {}));
var DeleteMemberRequest;
(function (DeleteMemberRequest) {
    /**
     * @internal
     */
    DeleteMemberRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMemberRequest = exports.DeleteMemberRequest || (exports.DeleteMemberRequest = {}));
var DeleteMemberResponse;
(function (DeleteMemberResponse) {
    /**
     * @internal
     */
    DeleteMemberResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMemberResponse = exports.DeleteMemberResponse || (exports.DeleteMemberResponse = {}));
var DescribeBucketsRequest;
(function (DescribeBucketsRequest) {
    /**
     * @internal
     */
    DescribeBucketsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBucketsRequest = exports.DescribeBucketsRequest || (exports.DescribeBucketsRequest = {}));
var DescribeBucketsResponse;
(function (DescribeBucketsResponse) {
    /**
     * @internal
     */
    DescribeBucketsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBucketsResponse = exports.DescribeBucketsResponse || (exports.DescribeBucketsResponse = {}));
var DescribeClassificationJobRequest;
(function (DescribeClassificationJobRequest) {
    /**
     * @internal
     */
    DescribeClassificationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClassificationJobRequest = exports.DescribeClassificationJobRequest || (exports.DescribeClassificationJobRequest = {}));
var Statistics;
(function (Statistics) {
    /**
     * @internal
     */
    Statistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Statistics = exports.Statistics || (exports.Statistics = {}));
var DescribeClassificationJobResponse;
(function (DescribeClassificationJobResponse) {
    /**
     * @internal
     */
    DescribeClassificationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeClassificationJobResponse = exports.DescribeClassificationJobResponse || (exports.DescribeClassificationJobResponse = {}));
var DescribeOrganizationConfigurationRequest;
(function (DescribeOrganizationConfigurationRequest) {
    /**
     * @internal
     */
    DescribeOrganizationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationConfigurationRequest = exports.DescribeOrganizationConfigurationRequest || (exports.DescribeOrganizationConfigurationRequest = {}));
var DescribeOrganizationConfigurationResponse;
(function (DescribeOrganizationConfigurationResponse) {
    /**
     * @internal
     */
    DescribeOrganizationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeOrganizationConfigurationResponse = exports.DescribeOrganizationConfigurationResponse || (exports.DescribeOrganizationConfigurationResponse = {}));
var DisableMacieRequest;
(function (DisableMacieRequest) {
    /**
     * @internal
     */
    DisableMacieRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableMacieRequest = exports.DisableMacieRequest || (exports.DisableMacieRequest = {}));
var DisableMacieResponse;
(function (DisableMacieResponse) {
    /**
     * @internal
     */
    DisableMacieResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableMacieResponse = exports.DisableMacieResponse || (exports.DisableMacieResponse = {}));
var DisableOrganizationAdminAccountRequest;
(function (DisableOrganizationAdminAccountRequest) {
    /**
     * @internal
     */
    DisableOrganizationAdminAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableOrganizationAdminAccountRequest = exports.DisableOrganizationAdminAccountRequest || (exports.DisableOrganizationAdminAccountRequest = {}));
var DisableOrganizationAdminAccountResponse;
(function (DisableOrganizationAdminAccountResponse) {
    /**
     * @internal
     */
    DisableOrganizationAdminAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableOrganizationAdminAccountResponse = exports.DisableOrganizationAdminAccountResponse || (exports.DisableOrganizationAdminAccountResponse = {}));
var DisassociateFromAdministratorAccountRequest;
(function (DisassociateFromAdministratorAccountRequest) {
    /**
     * @internal
     */
    DisassociateFromAdministratorAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFromAdministratorAccountRequest = exports.DisassociateFromAdministratorAccountRequest || (exports.DisassociateFromAdministratorAccountRequest = {}));
var DisassociateFromAdministratorAccountResponse;
(function (DisassociateFromAdministratorAccountResponse) {
    /**
     * @internal
     */
    DisassociateFromAdministratorAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFromAdministratorAccountResponse = exports.DisassociateFromAdministratorAccountResponse || (exports.DisassociateFromAdministratorAccountResponse = {}));
var DisassociateFromMasterAccountRequest;
(function (DisassociateFromMasterAccountRequest) {
    /**
     * @internal
     */
    DisassociateFromMasterAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFromMasterAccountRequest = exports.DisassociateFromMasterAccountRequest || (exports.DisassociateFromMasterAccountRequest = {}));
var DisassociateFromMasterAccountResponse;
(function (DisassociateFromMasterAccountResponse) {
    /**
     * @internal
     */
    DisassociateFromMasterAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateFromMasterAccountResponse = exports.DisassociateFromMasterAccountResponse || (exports.DisassociateFromMasterAccountResponse = {}));
var DisassociateMemberRequest;
(function (DisassociateMemberRequest) {
    /**
     * @internal
     */
    DisassociateMemberRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateMemberRequest = exports.DisassociateMemberRequest || (exports.DisassociateMemberRequest = {}));
var DisassociateMemberResponse;
(function (DisassociateMemberResponse) {
    /**
     * @internal
     */
    DisassociateMemberResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateMemberResponse = exports.DisassociateMemberResponse || (exports.DisassociateMemberResponse = {}));
var FindingPublishingFrequency;
(function (FindingPublishingFrequency) {
    FindingPublishingFrequency["FIFTEEN_MINUTES"] = "FIFTEEN_MINUTES";
    FindingPublishingFrequency["ONE_HOUR"] = "ONE_HOUR";
    FindingPublishingFrequency["SIX_HOURS"] = "SIX_HOURS";
})(FindingPublishingFrequency = exports.FindingPublishingFrequency || (exports.FindingPublishingFrequency = {}));
var MacieStatus;
(function (MacieStatus) {
    MacieStatus["ENABLED"] = "ENABLED";
    MacieStatus["PAUSED"] = "PAUSED";
})(MacieStatus = exports.MacieStatus || (exports.MacieStatus = {}));
var EnableMacieRequest;
(function (EnableMacieRequest) {
    /**
     * @internal
     */
    EnableMacieRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableMacieRequest = exports.EnableMacieRequest || (exports.EnableMacieRequest = {}));
var EnableMacieResponse;
(function (EnableMacieResponse) {
    /**
     * @internal
     */
    EnableMacieResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableMacieResponse = exports.EnableMacieResponse || (exports.EnableMacieResponse = {}));
var EnableOrganizationAdminAccountRequest;
(function (EnableOrganizationAdminAccountRequest) {
    /**
     * @internal
     */
    EnableOrganizationAdminAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableOrganizationAdminAccountRequest = exports.EnableOrganizationAdminAccountRequest || (exports.EnableOrganizationAdminAccountRequest = {}));
var EnableOrganizationAdminAccountResponse;
(function (EnableOrganizationAdminAccountResponse) {
    /**
     * @internal
     */
    EnableOrganizationAdminAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableOrganizationAdminAccountResponse = exports.EnableOrganizationAdminAccountResponse || (exports.EnableOrganizationAdminAccountResponse = {}));
var FindingStatisticsSortAttributeName;
(function (FindingStatisticsSortAttributeName) {
    FindingStatisticsSortAttributeName["count"] = "count";
    FindingStatisticsSortAttributeName["groupKey"] = "groupKey";
})(FindingStatisticsSortAttributeName = exports.FindingStatisticsSortAttributeName || (exports.FindingStatisticsSortAttributeName = {}));
var FindingStatisticsSortCriteria;
(function (FindingStatisticsSortCriteria) {
    /**
     * @internal
     */
    FindingStatisticsSortCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindingStatisticsSortCriteria = exports.FindingStatisticsSortCriteria || (exports.FindingStatisticsSortCriteria = {}));
var GetAdministratorAccountRequest;
(function (GetAdministratorAccountRequest) {
    /**
     * @internal
     */
    GetAdministratorAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAdministratorAccountRequest = exports.GetAdministratorAccountRequest || (exports.GetAdministratorAccountRequest = {}));
var GetAdministratorAccountResponse;
(function (GetAdministratorAccountResponse) {
    /**
     * @internal
     */
    GetAdministratorAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAdministratorAccountResponse = exports.GetAdministratorAccountResponse || (exports.GetAdministratorAccountResponse = {}));
var GetBucketStatisticsRequest;
(function (GetBucketStatisticsRequest) {
    /**
     * @internal
     */
    GetBucketStatisticsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketStatisticsRequest = exports.GetBucketStatisticsRequest || (exports.GetBucketStatisticsRequest = {}));
var GetBucketStatisticsResponse;
(function (GetBucketStatisticsResponse) {
    /**
     * @internal
     */
    GetBucketStatisticsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBucketStatisticsResponse = exports.GetBucketStatisticsResponse || (exports.GetBucketStatisticsResponse = {}));
var GetClassificationExportConfigurationRequest;
(function (GetClassificationExportConfigurationRequest) {
    /**
     * @internal
     */
    GetClassificationExportConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetClassificationExportConfigurationRequest = exports.GetClassificationExportConfigurationRequest || (exports.GetClassificationExportConfigurationRequest = {}));
var GetClassificationExportConfigurationResponse;
(function (GetClassificationExportConfigurationResponse) {
    /**
     * @internal
     */
    GetClassificationExportConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetClassificationExportConfigurationResponse = exports.GetClassificationExportConfigurationResponse || (exports.GetClassificationExportConfigurationResponse = {}));
var GetCustomDataIdentifierRequest;
(function (GetCustomDataIdentifierRequest) {
    /**
     * @internal
     */
    GetCustomDataIdentifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCustomDataIdentifierRequest = exports.GetCustomDataIdentifierRequest || (exports.GetCustomDataIdentifierRequest = {}));
var GetCustomDataIdentifierResponse;
(function (GetCustomDataIdentifierResponse) {
    /**
     * @internal
     */
    GetCustomDataIdentifierResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCustomDataIdentifierResponse = exports.GetCustomDataIdentifierResponse || (exports.GetCustomDataIdentifierResponse = {}));
var SortCriteria;
(function (SortCriteria) {
    /**
     * @internal
     */
    SortCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SortCriteria = exports.SortCriteria || (exports.SortCriteria = {}));
var GetFindingsRequest;
(function (GetFindingsRequest) {
    /**
     * @internal
     */
    GetFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingsRequest = exports.GetFindingsRequest || (exports.GetFindingsRequest = {}));
var GetFindingsResponse;
(function (GetFindingsResponse) {
    /**
     * @internal
     */
    GetFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingsResponse = exports.GetFindingsResponse || (exports.GetFindingsResponse = {}));
var GetFindingsFilterRequest;
(function (GetFindingsFilterRequest) {
    /**
     * @internal
     */
    GetFindingsFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingsFilterRequest = exports.GetFindingsFilterRequest || (exports.GetFindingsFilterRequest = {}));
var GetFindingsFilterResponse;
(function (GetFindingsFilterResponse) {
    /**
     * @internal
     */
    GetFindingsFilterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingsFilterResponse = exports.GetFindingsFilterResponse || (exports.GetFindingsFilterResponse = {}));
var GetFindingsPublicationConfigurationRequest;
(function (GetFindingsPublicationConfigurationRequest) {
    /**
     * @internal
     */
    GetFindingsPublicationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingsPublicationConfigurationRequest = exports.GetFindingsPublicationConfigurationRequest || (exports.GetFindingsPublicationConfigurationRequest = {}));
var SecurityHubConfiguration;
(function (SecurityHubConfiguration) {
    /**
     * @internal
     */
    SecurityHubConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityHubConfiguration = exports.SecurityHubConfiguration || (exports.SecurityHubConfiguration = {}));
var GetFindingsPublicationConfigurationResponse;
(function (GetFindingsPublicationConfigurationResponse) {
    /**
     * @internal
     */
    GetFindingsPublicationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingsPublicationConfigurationResponse = exports.GetFindingsPublicationConfigurationResponse || (exports.GetFindingsPublicationConfigurationResponse = {}));
var GroupBy;
(function (GroupBy) {
    GroupBy["classificationDetails_jobId"] = "classificationDetails.jobId";
    GroupBy["resourcesAffected_s3Bucket_name"] = "resourcesAffected.s3Bucket.name";
    GroupBy["severity_description"] = "severity.description";
    GroupBy["type"] = "type";
})(GroupBy = exports.GroupBy || (exports.GroupBy = {}));
var GetFindingStatisticsRequest;
(function (GetFindingStatisticsRequest) {
    /**
     * @internal
     */
    GetFindingStatisticsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingStatisticsRequest = exports.GetFindingStatisticsRequest || (exports.GetFindingStatisticsRequest = {}));
var GetFindingStatisticsResponse;
(function (GetFindingStatisticsResponse) {
    /**
     * @internal
     */
    GetFindingStatisticsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFindingStatisticsResponse = exports.GetFindingStatisticsResponse || (exports.GetFindingStatisticsResponse = {}));
var GetInvitationsCountRequest;
(function (GetInvitationsCountRequest) {
    /**
     * @internal
     */
    GetInvitationsCountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInvitationsCountRequest = exports.GetInvitationsCountRequest || (exports.GetInvitationsCountRequest = {}));
var GetInvitationsCountResponse;
(function (GetInvitationsCountResponse) {
    /**
     * @internal
     */
    GetInvitationsCountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInvitationsCountResponse = exports.GetInvitationsCountResponse || (exports.GetInvitationsCountResponse = {}));
var GetMacieSessionRequest;
(function (GetMacieSessionRequest) {
    /**
     * @internal
     */
    GetMacieSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMacieSessionRequest = exports.GetMacieSessionRequest || (exports.GetMacieSessionRequest = {}));
var GetMacieSessionResponse;
(function (GetMacieSessionResponse) {
    /**
     * @internal
     */
    GetMacieSessionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMacieSessionResponse = exports.GetMacieSessionResponse || (exports.GetMacieSessionResponse = {}));
var GetMasterAccountRequest;
(function (GetMasterAccountRequest) {
    /**
     * @internal
     */
    GetMasterAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMasterAccountRequest = exports.GetMasterAccountRequest || (exports.GetMasterAccountRequest = {}));
var GetMasterAccountResponse;
(function (GetMasterAccountResponse) {
    /**
     * @internal
     */
    GetMasterAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMasterAccountResponse = exports.GetMasterAccountResponse || (exports.GetMasterAccountResponse = {}));
var GetMemberRequest;
(function (GetMemberRequest) {
    /**
     * @internal
     */
    GetMemberRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMemberRequest = exports.GetMemberRequest || (exports.GetMemberRequest = {}));
var GetMemberResponse;
(function (GetMemberResponse) {
    /**
     * @internal
     */
    GetMemberResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMemberResponse = exports.GetMemberResponse || (exports.GetMemberResponse = {}));
var UsageStatisticsSortKey;
(function (UsageStatisticsSortKey) {
    UsageStatisticsSortKey["accountId"] = "accountId";
    UsageStatisticsSortKey["freeTrialStartDate"] = "freeTrialStartDate";
    UsageStatisticsSortKey["serviceLimitValue"] = "serviceLimitValue";
    UsageStatisticsSortKey["total"] = "total";
})(UsageStatisticsSortKey = exports.UsageStatisticsSortKey || (exports.UsageStatisticsSortKey = {}));
var UsageStatisticsSortBy;
(function (UsageStatisticsSortBy) {
    /**
     * @internal
     */
    UsageStatisticsSortBy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UsageStatisticsSortBy = exports.UsageStatisticsSortBy || (exports.UsageStatisticsSortBy = {}));
var TimeRange;
(function (TimeRange) {
    TimeRange["MONTH_TO_DATE"] = "MONTH_TO_DATE";
    TimeRange["PAST_30_DAYS"] = "PAST_30_DAYS";
})(TimeRange = exports.TimeRange || (exports.TimeRange = {}));
var GetUsageStatisticsRequest;
(function (GetUsageStatisticsRequest) {
    /**
     * @internal
     */
    GetUsageStatisticsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUsageStatisticsRequest = exports.GetUsageStatisticsRequest || (exports.GetUsageStatisticsRequest = {}));
var GetUsageStatisticsResponse;
(function (GetUsageStatisticsResponse) {
    /**
     * @internal
     */
    GetUsageStatisticsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUsageStatisticsResponse = exports.GetUsageStatisticsResponse || (exports.GetUsageStatisticsResponse = {}));
var GetUsageTotalsRequest;
(function (GetUsageTotalsRequest) {
    /**
     * @internal
     */
    GetUsageTotalsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUsageTotalsRequest = exports.GetUsageTotalsRequest || (exports.GetUsageTotalsRequest = {}));
var GetUsageTotalsResponse;
(function (GetUsageTotalsResponse) {
    /**
     * @internal
     */
    GetUsageTotalsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUsageTotalsResponse = exports.GetUsageTotalsResponse || (exports.GetUsageTotalsResponse = {}));
var ListJobsFilterCriteria;
(function (ListJobsFilterCriteria) {
    /**
     * @internal
     */
    ListJobsFilterCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsFilterCriteria = exports.ListJobsFilterCriteria || (exports.ListJobsFilterCriteria = {}));
var ListJobsSortAttributeName;
(function (ListJobsSortAttributeName) {
    ListJobsSortAttributeName["createdAt"] = "createdAt";
    ListJobsSortAttributeName["jobStatus"] = "jobStatus";
    ListJobsSortAttributeName["jobType"] = "jobType";
    ListJobsSortAttributeName["name"] = "name";
})(ListJobsSortAttributeName = exports.ListJobsSortAttributeName || (exports.ListJobsSortAttributeName = {}));
var ListJobsSortCriteria;
(function (ListJobsSortCriteria) {
    /**
     * @internal
     */
    ListJobsSortCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsSortCriteria = exports.ListJobsSortCriteria || (exports.ListJobsSortCriteria = {}));
var ListClassificationJobsRequest;
(function (ListClassificationJobsRequest) {
    /**
     * @internal
     */
    ListClassificationJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClassificationJobsRequest = exports.ListClassificationJobsRequest || (exports.ListClassificationJobsRequest = {}));
var ListClassificationJobsResponse;
(function (ListClassificationJobsResponse) {
    /**
     * @internal
     */
    ListClassificationJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListClassificationJobsResponse = exports.ListClassificationJobsResponse || (exports.ListClassificationJobsResponse = {}));
var ListCustomDataIdentifiersRequest;
(function (ListCustomDataIdentifiersRequest) {
    /**
     * @internal
     */
    ListCustomDataIdentifiersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomDataIdentifiersRequest = exports.ListCustomDataIdentifiersRequest || (exports.ListCustomDataIdentifiersRequest = {}));
var ListCustomDataIdentifiersResponse;
(function (ListCustomDataIdentifiersResponse) {
    /**
     * @internal
     */
    ListCustomDataIdentifiersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomDataIdentifiersResponse = exports.ListCustomDataIdentifiersResponse || (exports.ListCustomDataIdentifiersResponse = {}));
var ListFindingsRequest;
(function (ListFindingsRequest) {
    /**
     * @internal
     */
    ListFindingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFindingsRequest = exports.ListFindingsRequest || (exports.ListFindingsRequest = {}));
var ListFindingsResponse;
(function (ListFindingsResponse) {
    /**
     * @internal
     */
    ListFindingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFindingsResponse = exports.ListFindingsResponse || (exports.ListFindingsResponse = {}));
var ListFindingsFiltersRequest;
(function (ListFindingsFiltersRequest) {
    /**
     * @internal
     */
    ListFindingsFiltersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFindingsFiltersRequest = exports.ListFindingsFiltersRequest || (exports.ListFindingsFiltersRequest = {}));
var ListFindingsFiltersResponse;
(function (ListFindingsFiltersResponse) {
    /**
     * @internal
     */
    ListFindingsFiltersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFindingsFiltersResponse = exports.ListFindingsFiltersResponse || (exports.ListFindingsFiltersResponse = {}));
var ListInvitationsRequest;
(function (ListInvitationsRequest) {
    /**
     * @internal
     */
    ListInvitationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInvitationsRequest = exports.ListInvitationsRequest || (exports.ListInvitationsRequest = {}));
var ListInvitationsResponse;
(function (ListInvitationsResponse) {
    /**
     * @internal
     */
    ListInvitationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInvitationsResponse = exports.ListInvitationsResponse || (exports.ListInvitationsResponse = {}));
var ListMembersRequest;
(function (ListMembersRequest) {
    /**
     * @internal
     */
    ListMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMembersRequest = exports.ListMembersRequest || (exports.ListMembersRequest = {}));
var ListMembersResponse;
(function (ListMembersResponse) {
    /**
     * @internal
     */
    ListMembersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMembersResponse = exports.ListMembersResponse || (exports.ListMembersResponse = {}));
var ListOrganizationAdminAccountsRequest;
(function (ListOrganizationAdminAccountsRequest) {
    /**
     * @internal
     */
    ListOrganizationAdminAccountsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOrganizationAdminAccountsRequest = exports.ListOrganizationAdminAccountsRequest || (exports.ListOrganizationAdminAccountsRequest = {}));
var ListOrganizationAdminAccountsResponse;
(function (ListOrganizationAdminAccountsResponse) {
    /**
     * @internal
     */
    ListOrganizationAdminAccountsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOrganizationAdminAccountsResponse = exports.ListOrganizationAdminAccountsResponse || (exports.ListOrganizationAdminAccountsResponse = {}));
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
var PutClassificationExportConfigurationRequest;
(function (PutClassificationExportConfigurationRequest) {
    /**
     * @internal
     */
    PutClassificationExportConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutClassificationExportConfigurationRequest = exports.PutClassificationExportConfigurationRequest || (exports.PutClassificationExportConfigurationRequest = {}));
var PutClassificationExportConfigurationResponse;
(function (PutClassificationExportConfigurationResponse) {
    /**
     * @internal
     */
    PutClassificationExportConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutClassificationExportConfigurationResponse = exports.PutClassificationExportConfigurationResponse || (exports.PutClassificationExportConfigurationResponse = {}));
var PutFindingsPublicationConfigurationRequest;
(function (PutFindingsPublicationConfigurationRequest) {
    /**
     * @internal
     */
    PutFindingsPublicationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutFindingsPublicationConfigurationRequest = exports.PutFindingsPublicationConfigurationRequest || (exports.PutFindingsPublicationConfigurationRequest = {}));
var PutFindingsPublicationConfigurationResponse;
(function (PutFindingsPublicationConfigurationResponse) {
    /**
     * @internal
     */
    PutFindingsPublicationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutFindingsPublicationConfigurationResponse = exports.PutFindingsPublicationConfigurationResponse || (exports.PutFindingsPublicationConfigurationResponse = {}));
var SearchResourcesCriteriaBlock;
(function (SearchResourcesCriteriaBlock) {
    /**
     * @internal
     */
    SearchResourcesCriteriaBlock.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchResourcesCriteriaBlock = exports.SearchResourcesCriteriaBlock || (exports.SearchResourcesCriteriaBlock = {}));
var SearchResourcesBucketCriteria;
(function (SearchResourcesBucketCriteria) {
    /**
     * @internal
     */
    SearchResourcesBucketCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchResourcesBucketCriteria = exports.SearchResourcesBucketCriteria || (exports.SearchResourcesBucketCriteria = {}));
var SearchResourcesSortAttributeName;
(function (SearchResourcesSortAttributeName) {
    SearchResourcesSortAttributeName["ACCOUNT_ID"] = "ACCOUNT_ID";
    SearchResourcesSortAttributeName["RESOURCE_NAME"] = "RESOURCE_NAME";
    SearchResourcesSortAttributeName["S3_CLASSIFIABLE_OBJECT_COUNT"] = "S3_CLASSIFIABLE_OBJECT_COUNT";
    SearchResourcesSortAttributeName["S3_CLASSIFIABLE_SIZE_IN_BYTES"] = "S3_CLASSIFIABLE_SIZE_IN_BYTES";
})(SearchResourcesSortAttributeName = exports.SearchResourcesSortAttributeName || (exports.SearchResourcesSortAttributeName = {}));
var SearchResourcesSortCriteria;
(function (SearchResourcesSortCriteria) {
    /**
     * @internal
     */
    SearchResourcesSortCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchResourcesSortCriteria = exports.SearchResourcesSortCriteria || (exports.SearchResourcesSortCriteria = {}));
var SearchResourcesRequest;
(function (SearchResourcesRequest) {
    /**
     * @internal
     */
    SearchResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchResourcesRequest = exports.SearchResourcesRequest || (exports.SearchResourcesRequest = {}));
var SearchResourcesResponse;
(function (SearchResourcesResponse) {
    /**
     * @internal
     */
    SearchResourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchResourcesResponse = exports.SearchResourcesResponse || (exports.SearchResourcesResponse = {}));
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
var TestCustomDataIdentifierRequest;
(function (TestCustomDataIdentifierRequest) {
    /**
     * @internal
     */
    TestCustomDataIdentifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestCustomDataIdentifierRequest = exports.TestCustomDataIdentifierRequest || (exports.TestCustomDataIdentifierRequest = {}));
var TestCustomDataIdentifierResponse;
(function (TestCustomDataIdentifierResponse) {
    /**
     * @internal
     */
    TestCustomDataIdentifierResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestCustomDataIdentifierResponse = exports.TestCustomDataIdentifierResponse || (exports.TestCustomDataIdentifierResponse = {}));
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
var UpdateClassificationJobRequest;
(function (UpdateClassificationJobRequest) {
    /**
     * @internal
     */
    UpdateClassificationJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClassificationJobRequest = exports.UpdateClassificationJobRequest || (exports.UpdateClassificationJobRequest = {}));
var UpdateClassificationJobResponse;
(function (UpdateClassificationJobResponse) {
    /**
     * @internal
     */
    UpdateClassificationJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClassificationJobResponse = exports.UpdateClassificationJobResponse || (exports.UpdateClassificationJobResponse = {}));
var UpdateFindingsFilterRequest;
(function (UpdateFindingsFilterRequest) {
    /**
     * @internal
     */
    UpdateFindingsFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFindingsFilterRequest = exports.UpdateFindingsFilterRequest || (exports.UpdateFindingsFilterRequest = {}));
var UpdateFindingsFilterResponse;
(function (UpdateFindingsFilterResponse) {
    /**
     * @internal
     */
    UpdateFindingsFilterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFindingsFilterResponse = exports.UpdateFindingsFilterResponse || (exports.UpdateFindingsFilterResponse = {}));
var UpdateMacieSessionRequest;
(function (UpdateMacieSessionRequest) {
    /**
     * @internal
     */
    UpdateMacieSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMacieSessionRequest = exports.UpdateMacieSessionRequest || (exports.UpdateMacieSessionRequest = {}));
var UpdateMacieSessionResponse;
(function (UpdateMacieSessionResponse) {
    /**
     * @internal
     */
    UpdateMacieSessionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMacieSessionResponse = exports.UpdateMacieSessionResponse || (exports.UpdateMacieSessionResponse = {}));
var UpdateMemberSessionRequest;
(function (UpdateMemberSessionRequest) {
    /**
     * @internal
     */
    UpdateMemberSessionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMemberSessionRequest = exports.UpdateMemberSessionRequest || (exports.UpdateMemberSessionRequest = {}));
var UpdateMemberSessionResponse;
(function (UpdateMemberSessionResponse) {
    /**
     * @internal
     */
    UpdateMemberSessionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMemberSessionResponse = exports.UpdateMemberSessionResponse || (exports.UpdateMemberSessionResponse = {}));
var UpdateOrganizationConfigurationRequest;
(function (UpdateOrganizationConfigurationRequest) {
    /**
     * @internal
     */
    UpdateOrganizationConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateOrganizationConfigurationRequest = exports.UpdateOrganizationConfigurationRequest || (exports.UpdateOrganizationConfigurationRequest = {}));
var UpdateOrganizationConfigurationResponse;
(function (UpdateOrganizationConfigurationResponse) {
    /**
     * @internal
     */
    UpdateOrganizationConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateOrganizationConfigurationResponse = exports.UpdateOrganizationConfigurationResponse || (exports.UpdateOrganizationConfigurationResponse = {}));
//# sourceMappingURL=models_0.js.map