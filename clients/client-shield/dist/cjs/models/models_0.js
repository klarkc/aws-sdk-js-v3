"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProtectionRequest = exports.CreateSubscriptionResponse = exports.CreateSubscriptionRequest = exports.CreateProtectionGroupResponse = exports.CreateProtectionGroupRequest = exports.ProtectedResourceType = exports.ProtectionGroupPattern = exports.ProtectionGroupAggregation = exports.ResourceAlreadyExistsException = exports.InvalidResourceException = exports.CreateProtectionResponse = exports.CreateProtectionRequest = exports.Tag = exports.AutoRenew = exports.AttackSummary = exports.AttackVectorDescription = exports.AttackStatisticsDataItem = exports.AttackVolume = exports.AttackVolumeStatistics = exports.AttackDetail = exports.SubResourceSummary = exports.SubResourceType = exports.SummarizedAttackVector = exports.Mitigation = exports.AttackProperty = exports.Unit = exports.Contributor = exports.AttackPropertyIdentifier = exports.AttackLayer = exports.SummarizedCounter = exports.AssociateProactiveEngagementDetailsResponse = exports.AssociateProactiveEngagementDetailsRequest = exports.EmergencyContact = exports.AssociateHealthCheckResponse = exports.AssociateHealthCheckRequest = exports.AssociateDRTRoleResponse = exports.AssociateDRTRoleRequest = exports.ResourceNotFoundException = exports.OptimisticLockException = exports.NoAssociatedRoleException = exports.LimitsExceededException = exports.InvalidParameterException = exports.ValidationExceptionReason = exports.ValidationExceptionField = exports.InvalidOperationException = exports.InternalErrorException = exports.AssociateDRTLogBucketResponse = exports.AssociateDRTLogBucketRequest = exports.AccessDeniedForDependencyException = exports.AccessDeniedException = void 0;
exports.ListProtectionsRequest = exports.ListProtectionGroupsResponse = exports.ListProtectionGroupsRequest = exports.InvalidPaginationTokenException = exports.ListAttacksResponse = exports.ListAttacksRequest = exports.GetSubscriptionStateResponse = exports.SubscriptionState = exports.GetSubscriptionStateRequest = exports.EnableProactiveEngagementResponse = exports.EnableProactiveEngagementRequest = exports.DisassociateHealthCheckResponse = exports.DisassociateHealthCheckRequest = exports.DisassociateDRTRoleResponse = exports.DisassociateDRTRoleRequest = exports.DisassociateDRTLogBucketResponse = exports.DisassociateDRTLogBucketRequest = exports.DisableProactiveEngagementResponse = exports.DisableProactiveEngagementRequest = exports.DescribeSubscriptionResponse = exports.Subscription = exports.SubscriptionLimits = exports.ProtectionLimits = exports.ProtectionGroupLimits = exports.ProtectionGroupPatternTypeLimits = exports.ProtectionGroupArbitraryPatternLimits = exports.ProactiveEngagementStatus = exports.Limit = exports.DescribeSubscriptionRequest = exports.DescribeProtectionGroupResponse = exports.ProtectionGroup = exports.DescribeProtectionGroupRequest = exports.DescribeProtectionResponse = exports.Protection = exports.DescribeProtectionRequest = exports.DescribeEmergencyContactSettingsResponse = exports.DescribeEmergencyContactSettingsRequest = exports.DescribeDRTAccessResponse = exports.DescribeDRTAccessRequest = exports.DescribeAttackStatisticsResponse = exports.TimeRange = exports.DescribeAttackStatisticsRequest = exports.DescribeAttackResponse = exports.DescribeAttackRequest = exports.LockedSubscriptionException = exports.DeleteSubscriptionResponse = exports.DeleteSubscriptionRequest = exports.DeleteProtectionGroupResponse = exports.DeleteProtectionGroupRequest = exports.DeleteProtectionResponse = void 0;
exports.UpdateSubscriptionResponse = exports.UpdateSubscriptionRequest = exports.UpdateProtectionGroupResponse = exports.UpdateProtectionGroupRequest = exports.UpdateEmergencyContactSettingsResponse = exports.UpdateEmergencyContactSettingsRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListResourcesInProtectionGroupResponse = exports.ListResourcesInProtectionGroupRequest = exports.ListProtectionsResponse = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AccessDeniedForDependencyException;
(function (AccessDeniedForDependencyException) {
    /**
     * @internal
     */
    AccessDeniedForDependencyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedForDependencyException = exports.AccessDeniedForDependencyException || (exports.AccessDeniedForDependencyException = {}));
var AssociateDRTLogBucketRequest;
(function (AssociateDRTLogBucketRequest) {
    /**
     * @internal
     */
    AssociateDRTLogBucketRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateDRTLogBucketRequest = exports.AssociateDRTLogBucketRequest || (exports.AssociateDRTLogBucketRequest = {}));
var AssociateDRTLogBucketResponse;
(function (AssociateDRTLogBucketResponse) {
    /**
     * @internal
     */
    AssociateDRTLogBucketResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateDRTLogBucketResponse = exports.AssociateDRTLogBucketResponse || (exports.AssociateDRTLogBucketResponse = {}));
var InternalErrorException;
(function (InternalErrorException) {
    /**
     * @internal
     */
    InternalErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalErrorException = exports.InternalErrorException || (exports.InternalErrorException = {}));
var InvalidOperationException;
(function (InvalidOperationException) {
    /**
     * @internal
     */
    InvalidOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidOperationException = exports.InvalidOperationException || (exports.InvalidOperationException = {}));
var ValidationExceptionField;
(function (ValidationExceptionField) {
    /**
     * @internal
     */
    ValidationExceptionField.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationExceptionField = exports.ValidationExceptionField || (exports.ValidationExceptionField = {}));
var ValidationExceptionReason;
(function (ValidationExceptionReason) {
    ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "FIELD_VALIDATION_FAILED";
    ValidationExceptionReason["OTHER"] = "OTHER";
})(ValidationExceptionReason = exports.ValidationExceptionReason || (exports.ValidationExceptionReason = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var LimitsExceededException;
(function (LimitsExceededException) {
    /**
     * @internal
     */
    LimitsExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitsExceededException = exports.LimitsExceededException || (exports.LimitsExceededException = {}));
var NoAssociatedRoleException;
(function (NoAssociatedRoleException) {
    /**
     * @internal
     */
    NoAssociatedRoleException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoAssociatedRoleException = exports.NoAssociatedRoleException || (exports.NoAssociatedRoleException = {}));
var OptimisticLockException;
(function (OptimisticLockException) {
    /**
     * @internal
     */
    OptimisticLockException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptimisticLockException = exports.OptimisticLockException || (exports.OptimisticLockException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var AssociateDRTRoleRequest;
(function (AssociateDRTRoleRequest) {
    /**
     * @internal
     */
    AssociateDRTRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateDRTRoleRequest = exports.AssociateDRTRoleRequest || (exports.AssociateDRTRoleRequest = {}));
var AssociateDRTRoleResponse;
(function (AssociateDRTRoleResponse) {
    /**
     * @internal
     */
    AssociateDRTRoleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateDRTRoleResponse = exports.AssociateDRTRoleResponse || (exports.AssociateDRTRoleResponse = {}));
var AssociateHealthCheckRequest;
(function (AssociateHealthCheckRequest) {
    /**
     * @internal
     */
    AssociateHealthCheckRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateHealthCheckRequest = exports.AssociateHealthCheckRequest || (exports.AssociateHealthCheckRequest = {}));
var AssociateHealthCheckResponse;
(function (AssociateHealthCheckResponse) {
    /**
     * @internal
     */
    AssociateHealthCheckResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateHealthCheckResponse = exports.AssociateHealthCheckResponse || (exports.AssociateHealthCheckResponse = {}));
var EmergencyContact;
(function (EmergencyContact) {
    /**
     * @internal
     */
    EmergencyContact.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmergencyContact = exports.EmergencyContact || (exports.EmergencyContact = {}));
var AssociateProactiveEngagementDetailsRequest;
(function (AssociateProactiveEngagementDetailsRequest) {
    /**
     * @internal
     */
    AssociateProactiveEngagementDetailsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateProactiveEngagementDetailsRequest = exports.AssociateProactiveEngagementDetailsRequest || (exports.AssociateProactiveEngagementDetailsRequest = {}));
var AssociateProactiveEngagementDetailsResponse;
(function (AssociateProactiveEngagementDetailsResponse) {
    /**
     * @internal
     */
    AssociateProactiveEngagementDetailsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateProactiveEngagementDetailsResponse = exports.AssociateProactiveEngagementDetailsResponse || (exports.AssociateProactiveEngagementDetailsResponse = {}));
var SummarizedCounter;
(function (SummarizedCounter) {
    /**
     * @internal
     */
    SummarizedCounter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SummarizedCounter = exports.SummarizedCounter || (exports.SummarizedCounter = {}));
var AttackLayer;
(function (AttackLayer) {
    AttackLayer["APPLICATION"] = "APPLICATION";
    AttackLayer["NETWORK"] = "NETWORK";
})(AttackLayer = exports.AttackLayer || (exports.AttackLayer = {}));
var AttackPropertyIdentifier;
(function (AttackPropertyIdentifier) {
    AttackPropertyIdentifier["DESTINATION_URL"] = "DESTINATION_URL";
    AttackPropertyIdentifier["REFERRER"] = "REFERRER";
    AttackPropertyIdentifier["SOURCE_ASN"] = "SOURCE_ASN";
    AttackPropertyIdentifier["SOURCE_COUNTRY"] = "SOURCE_COUNTRY";
    AttackPropertyIdentifier["SOURCE_IP_ADDRESS"] = "SOURCE_IP_ADDRESS";
    AttackPropertyIdentifier["SOURCE_USER_AGENT"] = "SOURCE_USER_AGENT";
    AttackPropertyIdentifier["WORDPRESS_PINGBACK_REFLECTOR"] = "WORDPRESS_PINGBACK_REFLECTOR";
    AttackPropertyIdentifier["WORDPRESS_PINGBACK_SOURCE"] = "WORDPRESS_PINGBACK_SOURCE";
})(AttackPropertyIdentifier = exports.AttackPropertyIdentifier || (exports.AttackPropertyIdentifier = {}));
var Contributor;
(function (Contributor) {
    /**
     * @internal
     */
    Contributor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Contributor = exports.Contributor || (exports.Contributor = {}));
var Unit;
(function (Unit) {
    Unit["BITS"] = "BITS";
    Unit["BYTES"] = "BYTES";
    Unit["PACKETS"] = "PACKETS";
    Unit["REQUESTS"] = "REQUESTS";
})(Unit = exports.Unit || (exports.Unit = {}));
var AttackProperty;
(function (AttackProperty) {
    /**
     * @internal
     */
    AttackProperty.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttackProperty = exports.AttackProperty || (exports.AttackProperty = {}));
var Mitigation;
(function (Mitigation) {
    /**
     * @internal
     */
    Mitigation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Mitigation = exports.Mitigation || (exports.Mitigation = {}));
var SummarizedAttackVector;
(function (SummarizedAttackVector) {
    /**
     * @internal
     */
    SummarizedAttackVector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SummarizedAttackVector = exports.SummarizedAttackVector || (exports.SummarizedAttackVector = {}));
var SubResourceType;
(function (SubResourceType) {
    SubResourceType["IP"] = "IP";
    SubResourceType["URL"] = "URL";
})(SubResourceType = exports.SubResourceType || (exports.SubResourceType = {}));
var SubResourceSummary;
(function (SubResourceSummary) {
    /**
     * @internal
     */
    SubResourceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubResourceSummary = exports.SubResourceSummary || (exports.SubResourceSummary = {}));
var AttackDetail;
(function (AttackDetail) {
    /**
     * @internal
     */
    AttackDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttackDetail = exports.AttackDetail || (exports.AttackDetail = {}));
var AttackVolumeStatistics;
(function (AttackVolumeStatistics) {
    /**
     * @internal
     */
    AttackVolumeStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttackVolumeStatistics = exports.AttackVolumeStatistics || (exports.AttackVolumeStatistics = {}));
var AttackVolume;
(function (AttackVolume) {
    /**
     * @internal
     */
    AttackVolume.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttackVolume = exports.AttackVolume || (exports.AttackVolume = {}));
var AttackStatisticsDataItem;
(function (AttackStatisticsDataItem) {
    /**
     * @internal
     */
    AttackStatisticsDataItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttackStatisticsDataItem = exports.AttackStatisticsDataItem || (exports.AttackStatisticsDataItem = {}));
var AttackVectorDescription;
(function (AttackVectorDescription) {
    /**
     * @internal
     */
    AttackVectorDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttackVectorDescription = exports.AttackVectorDescription || (exports.AttackVectorDescription = {}));
var AttackSummary;
(function (AttackSummary) {
    /**
     * @internal
     */
    AttackSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttackSummary = exports.AttackSummary || (exports.AttackSummary = {}));
var AutoRenew;
(function (AutoRenew) {
    AutoRenew["DISABLED"] = "DISABLED";
    AutoRenew["ENABLED"] = "ENABLED";
})(AutoRenew = exports.AutoRenew || (exports.AutoRenew = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateProtectionRequest;
(function (CreateProtectionRequest) {
    /**
     * @internal
     */
    CreateProtectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProtectionRequest = exports.CreateProtectionRequest || (exports.CreateProtectionRequest = {}));
var CreateProtectionResponse;
(function (CreateProtectionResponse) {
    /**
     * @internal
     */
    CreateProtectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProtectionResponse = exports.CreateProtectionResponse || (exports.CreateProtectionResponse = {}));
var InvalidResourceException;
(function (InvalidResourceException) {
    /**
     * @internal
     */
    InvalidResourceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidResourceException = exports.InvalidResourceException || (exports.InvalidResourceException = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ProtectionGroupAggregation;
(function (ProtectionGroupAggregation) {
    ProtectionGroupAggregation["MAX"] = "MAX";
    ProtectionGroupAggregation["MEAN"] = "MEAN";
    ProtectionGroupAggregation["SUM"] = "SUM";
})(ProtectionGroupAggregation = exports.ProtectionGroupAggregation || (exports.ProtectionGroupAggregation = {}));
var ProtectionGroupPattern;
(function (ProtectionGroupPattern) {
    ProtectionGroupPattern["ALL"] = "ALL";
    ProtectionGroupPattern["ARBITRARY"] = "ARBITRARY";
    ProtectionGroupPattern["BY_RESOURCE_TYPE"] = "BY_RESOURCE_TYPE";
})(ProtectionGroupPattern = exports.ProtectionGroupPattern || (exports.ProtectionGroupPattern = {}));
var ProtectedResourceType;
(function (ProtectedResourceType) {
    ProtectedResourceType["APPLICATION_LOAD_BALANCER"] = "APPLICATION_LOAD_BALANCER";
    ProtectedResourceType["CLASSIC_LOAD_BALANCER"] = "CLASSIC_LOAD_BALANCER";
    ProtectedResourceType["CLOUDFRONT_DISTRIBUTION"] = "CLOUDFRONT_DISTRIBUTION";
    ProtectedResourceType["ELASTIC_IP_ALLOCATION"] = "ELASTIC_IP_ALLOCATION";
    ProtectedResourceType["GLOBAL_ACCELERATOR"] = "GLOBAL_ACCELERATOR";
    ProtectedResourceType["ROUTE_53_HOSTED_ZONE"] = "ROUTE_53_HOSTED_ZONE";
})(ProtectedResourceType = exports.ProtectedResourceType || (exports.ProtectedResourceType = {}));
var CreateProtectionGroupRequest;
(function (CreateProtectionGroupRequest) {
    /**
     * @internal
     */
    CreateProtectionGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProtectionGroupRequest = exports.CreateProtectionGroupRequest || (exports.CreateProtectionGroupRequest = {}));
var CreateProtectionGroupResponse;
(function (CreateProtectionGroupResponse) {
    /**
     * @internal
     */
    CreateProtectionGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProtectionGroupResponse = exports.CreateProtectionGroupResponse || (exports.CreateProtectionGroupResponse = {}));
var CreateSubscriptionRequest;
(function (CreateSubscriptionRequest) {
    /**
     * @internal
     */
    CreateSubscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSubscriptionRequest = exports.CreateSubscriptionRequest || (exports.CreateSubscriptionRequest = {}));
var CreateSubscriptionResponse;
(function (CreateSubscriptionResponse) {
    /**
     * @internal
     */
    CreateSubscriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSubscriptionResponse = exports.CreateSubscriptionResponse || (exports.CreateSubscriptionResponse = {}));
var DeleteProtectionRequest;
(function (DeleteProtectionRequest) {
    /**
     * @internal
     */
    DeleteProtectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProtectionRequest = exports.DeleteProtectionRequest || (exports.DeleteProtectionRequest = {}));
var DeleteProtectionResponse;
(function (DeleteProtectionResponse) {
    /**
     * @internal
     */
    DeleteProtectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProtectionResponse = exports.DeleteProtectionResponse || (exports.DeleteProtectionResponse = {}));
var DeleteProtectionGroupRequest;
(function (DeleteProtectionGroupRequest) {
    /**
     * @internal
     */
    DeleteProtectionGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProtectionGroupRequest = exports.DeleteProtectionGroupRequest || (exports.DeleteProtectionGroupRequest = {}));
var DeleteProtectionGroupResponse;
(function (DeleteProtectionGroupResponse) {
    /**
     * @internal
     */
    DeleteProtectionGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProtectionGroupResponse = exports.DeleteProtectionGroupResponse || (exports.DeleteProtectionGroupResponse = {}));
var DeleteSubscriptionRequest;
(function (DeleteSubscriptionRequest) {
    /**
     * @internal
     */
    DeleteSubscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSubscriptionRequest = exports.DeleteSubscriptionRequest || (exports.DeleteSubscriptionRequest = {}));
var DeleteSubscriptionResponse;
(function (DeleteSubscriptionResponse) {
    /**
     * @internal
     */
    DeleteSubscriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSubscriptionResponse = exports.DeleteSubscriptionResponse || (exports.DeleteSubscriptionResponse = {}));
var LockedSubscriptionException;
(function (LockedSubscriptionException) {
    /**
     * @internal
     */
    LockedSubscriptionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LockedSubscriptionException = exports.LockedSubscriptionException || (exports.LockedSubscriptionException = {}));
var DescribeAttackRequest;
(function (DescribeAttackRequest) {
    /**
     * @internal
     */
    DescribeAttackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAttackRequest = exports.DescribeAttackRequest || (exports.DescribeAttackRequest = {}));
var DescribeAttackResponse;
(function (DescribeAttackResponse) {
    /**
     * @internal
     */
    DescribeAttackResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAttackResponse = exports.DescribeAttackResponse || (exports.DescribeAttackResponse = {}));
var DescribeAttackStatisticsRequest;
(function (DescribeAttackStatisticsRequest) {
    /**
     * @internal
     */
    DescribeAttackStatisticsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAttackStatisticsRequest = exports.DescribeAttackStatisticsRequest || (exports.DescribeAttackStatisticsRequest = {}));
var TimeRange;
(function (TimeRange) {
    /**
     * @internal
     */
    TimeRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeRange = exports.TimeRange || (exports.TimeRange = {}));
var DescribeAttackStatisticsResponse;
(function (DescribeAttackStatisticsResponse) {
    /**
     * @internal
     */
    DescribeAttackStatisticsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAttackStatisticsResponse = exports.DescribeAttackStatisticsResponse || (exports.DescribeAttackStatisticsResponse = {}));
var DescribeDRTAccessRequest;
(function (DescribeDRTAccessRequest) {
    /**
     * @internal
     */
    DescribeDRTAccessRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDRTAccessRequest = exports.DescribeDRTAccessRequest || (exports.DescribeDRTAccessRequest = {}));
var DescribeDRTAccessResponse;
(function (DescribeDRTAccessResponse) {
    /**
     * @internal
     */
    DescribeDRTAccessResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDRTAccessResponse = exports.DescribeDRTAccessResponse || (exports.DescribeDRTAccessResponse = {}));
var DescribeEmergencyContactSettingsRequest;
(function (DescribeEmergencyContactSettingsRequest) {
    /**
     * @internal
     */
    DescribeEmergencyContactSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEmergencyContactSettingsRequest = exports.DescribeEmergencyContactSettingsRequest || (exports.DescribeEmergencyContactSettingsRequest = {}));
var DescribeEmergencyContactSettingsResponse;
(function (DescribeEmergencyContactSettingsResponse) {
    /**
     * @internal
     */
    DescribeEmergencyContactSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEmergencyContactSettingsResponse = exports.DescribeEmergencyContactSettingsResponse || (exports.DescribeEmergencyContactSettingsResponse = {}));
var DescribeProtectionRequest;
(function (DescribeProtectionRequest) {
    /**
     * @internal
     */
    DescribeProtectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProtectionRequest = exports.DescribeProtectionRequest || (exports.DescribeProtectionRequest = {}));
var Protection;
(function (Protection) {
    /**
     * @internal
     */
    Protection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Protection = exports.Protection || (exports.Protection = {}));
var DescribeProtectionResponse;
(function (DescribeProtectionResponse) {
    /**
     * @internal
     */
    DescribeProtectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProtectionResponse = exports.DescribeProtectionResponse || (exports.DescribeProtectionResponse = {}));
var DescribeProtectionGroupRequest;
(function (DescribeProtectionGroupRequest) {
    /**
     * @internal
     */
    DescribeProtectionGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProtectionGroupRequest = exports.DescribeProtectionGroupRequest || (exports.DescribeProtectionGroupRequest = {}));
var ProtectionGroup;
(function (ProtectionGroup) {
    /**
     * @internal
     */
    ProtectionGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProtectionGroup = exports.ProtectionGroup || (exports.ProtectionGroup = {}));
var DescribeProtectionGroupResponse;
(function (DescribeProtectionGroupResponse) {
    /**
     * @internal
     */
    DescribeProtectionGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProtectionGroupResponse = exports.DescribeProtectionGroupResponse || (exports.DescribeProtectionGroupResponse = {}));
var DescribeSubscriptionRequest;
(function (DescribeSubscriptionRequest) {
    /**
     * @internal
     */
    DescribeSubscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSubscriptionRequest = exports.DescribeSubscriptionRequest || (exports.DescribeSubscriptionRequest = {}));
var Limit;
(function (Limit) {
    /**
     * @internal
     */
    Limit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Limit = exports.Limit || (exports.Limit = {}));
var ProactiveEngagementStatus;
(function (ProactiveEngagementStatus) {
    ProactiveEngagementStatus["DISABLED"] = "DISABLED";
    ProactiveEngagementStatus["ENABLED"] = "ENABLED";
    ProactiveEngagementStatus["PENDING"] = "PENDING";
})(ProactiveEngagementStatus = exports.ProactiveEngagementStatus || (exports.ProactiveEngagementStatus = {}));
var ProtectionGroupArbitraryPatternLimits;
(function (ProtectionGroupArbitraryPatternLimits) {
    /**
     * @internal
     */
    ProtectionGroupArbitraryPatternLimits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProtectionGroupArbitraryPatternLimits = exports.ProtectionGroupArbitraryPatternLimits || (exports.ProtectionGroupArbitraryPatternLimits = {}));
var ProtectionGroupPatternTypeLimits;
(function (ProtectionGroupPatternTypeLimits) {
    /**
     * @internal
     */
    ProtectionGroupPatternTypeLimits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProtectionGroupPatternTypeLimits = exports.ProtectionGroupPatternTypeLimits || (exports.ProtectionGroupPatternTypeLimits = {}));
var ProtectionGroupLimits;
(function (ProtectionGroupLimits) {
    /**
     * @internal
     */
    ProtectionGroupLimits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProtectionGroupLimits = exports.ProtectionGroupLimits || (exports.ProtectionGroupLimits = {}));
var ProtectionLimits;
(function (ProtectionLimits) {
    /**
     * @internal
     */
    ProtectionLimits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProtectionLimits = exports.ProtectionLimits || (exports.ProtectionLimits = {}));
var SubscriptionLimits;
(function (SubscriptionLimits) {
    /**
     * @internal
     */
    SubscriptionLimits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscriptionLimits = exports.SubscriptionLimits || (exports.SubscriptionLimits = {}));
var Subscription;
(function (Subscription) {
    /**
     * @internal
     */
    Subscription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Subscription = exports.Subscription || (exports.Subscription = {}));
var DescribeSubscriptionResponse;
(function (DescribeSubscriptionResponse) {
    /**
     * @internal
     */
    DescribeSubscriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSubscriptionResponse = exports.DescribeSubscriptionResponse || (exports.DescribeSubscriptionResponse = {}));
var DisableProactiveEngagementRequest;
(function (DisableProactiveEngagementRequest) {
    /**
     * @internal
     */
    DisableProactiveEngagementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableProactiveEngagementRequest = exports.DisableProactiveEngagementRequest || (exports.DisableProactiveEngagementRequest = {}));
var DisableProactiveEngagementResponse;
(function (DisableProactiveEngagementResponse) {
    /**
     * @internal
     */
    DisableProactiveEngagementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableProactiveEngagementResponse = exports.DisableProactiveEngagementResponse || (exports.DisableProactiveEngagementResponse = {}));
var DisassociateDRTLogBucketRequest;
(function (DisassociateDRTLogBucketRequest) {
    /**
     * @internal
     */
    DisassociateDRTLogBucketRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateDRTLogBucketRequest = exports.DisassociateDRTLogBucketRequest || (exports.DisassociateDRTLogBucketRequest = {}));
var DisassociateDRTLogBucketResponse;
(function (DisassociateDRTLogBucketResponse) {
    /**
     * @internal
     */
    DisassociateDRTLogBucketResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateDRTLogBucketResponse = exports.DisassociateDRTLogBucketResponse || (exports.DisassociateDRTLogBucketResponse = {}));
var DisassociateDRTRoleRequest;
(function (DisassociateDRTRoleRequest) {
    /**
     * @internal
     */
    DisassociateDRTRoleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateDRTRoleRequest = exports.DisassociateDRTRoleRequest || (exports.DisassociateDRTRoleRequest = {}));
var DisassociateDRTRoleResponse;
(function (DisassociateDRTRoleResponse) {
    /**
     * @internal
     */
    DisassociateDRTRoleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateDRTRoleResponse = exports.DisassociateDRTRoleResponse || (exports.DisassociateDRTRoleResponse = {}));
var DisassociateHealthCheckRequest;
(function (DisassociateHealthCheckRequest) {
    /**
     * @internal
     */
    DisassociateHealthCheckRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateHealthCheckRequest = exports.DisassociateHealthCheckRequest || (exports.DisassociateHealthCheckRequest = {}));
var DisassociateHealthCheckResponse;
(function (DisassociateHealthCheckResponse) {
    /**
     * @internal
     */
    DisassociateHealthCheckResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateHealthCheckResponse = exports.DisassociateHealthCheckResponse || (exports.DisassociateHealthCheckResponse = {}));
var EnableProactiveEngagementRequest;
(function (EnableProactiveEngagementRequest) {
    /**
     * @internal
     */
    EnableProactiveEngagementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableProactiveEngagementRequest = exports.EnableProactiveEngagementRequest || (exports.EnableProactiveEngagementRequest = {}));
var EnableProactiveEngagementResponse;
(function (EnableProactiveEngagementResponse) {
    /**
     * @internal
     */
    EnableProactiveEngagementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableProactiveEngagementResponse = exports.EnableProactiveEngagementResponse || (exports.EnableProactiveEngagementResponse = {}));
var GetSubscriptionStateRequest;
(function (GetSubscriptionStateRequest) {
    /**
     * @internal
     */
    GetSubscriptionStateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSubscriptionStateRequest = exports.GetSubscriptionStateRequest || (exports.GetSubscriptionStateRequest = {}));
var SubscriptionState;
(function (SubscriptionState) {
    SubscriptionState["ACTIVE"] = "ACTIVE";
    SubscriptionState["INACTIVE"] = "INACTIVE";
})(SubscriptionState = exports.SubscriptionState || (exports.SubscriptionState = {}));
var GetSubscriptionStateResponse;
(function (GetSubscriptionStateResponse) {
    /**
     * @internal
     */
    GetSubscriptionStateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSubscriptionStateResponse = exports.GetSubscriptionStateResponse || (exports.GetSubscriptionStateResponse = {}));
var ListAttacksRequest;
(function (ListAttacksRequest) {
    /**
     * @internal
     */
    ListAttacksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAttacksRequest = exports.ListAttacksRequest || (exports.ListAttacksRequest = {}));
var ListAttacksResponse;
(function (ListAttacksResponse) {
    /**
     * @internal
     */
    ListAttacksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAttacksResponse = exports.ListAttacksResponse || (exports.ListAttacksResponse = {}));
var InvalidPaginationTokenException;
(function (InvalidPaginationTokenException) {
    /**
     * @internal
     */
    InvalidPaginationTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPaginationTokenException = exports.InvalidPaginationTokenException || (exports.InvalidPaginationTokenException = {}));
var ListProtectionGroupsRequest;
(function (ListProtectionGroupsRequest) {
    /**
     * @internal
     */
    ListProtectionGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProtectionGroupsRequest = exports.ListProtectionGroupsRequest || (exports.ListProtectionGroupsRequest = {}));
var ListProtectionGroupsResponse;
(function (ListProtectionGroupsResponse) {
    /**
     * @internal
     */
    ListProtectionGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProtectionGroupsResponse = exports.ListProtectionGroupsResponse || (exports.ListProtectionGroupsResponse = {}));
var ListProtectionsRequest;
(function (ListProtectionsRequest) {
    /**
     * @internal
     */
    ListProtectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProtectionsRequest = exports.ListProtectionsRequest || (exports.ListProtectionsRequest = {}));
var ListProtectionsResponse;
(function (ListProtectionsResponse) {
    /**
     * @internal
     */
    ListProtectionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProtectionsResponse = exports.ListProtectionsResponse || (exports.ListProtectionsResponse = {}));
var ListResourcesInProtectionGroupRequest;
(function (ListResourcesInProtectionGroupRequest) {
    /**
     * @internal
     */
    ListResourcesInProtectionGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourcesInProtectionGroupRequest = exports.ListResourcesInProtectionGroupRequest || (exports.ListResourcesInProtectionGroupRequest = {}));
var ListResourcesInProtectionGroupResponse;
(function (ListResourcesInProtectionGroupResponse) {
    /**
     * @internal
     */
    ListResourcesInProtectionGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourcesInProtectionGroupResponse = exports.ListResourcesInProtectionGroupResponse || (exports.ListResourcesInProtectionGroupResponse = {}));
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
var UpdateEmergencyContactSettingsRequest;
(function (UpdateEmergencyContactSettingsRequest) {
    /**
     * @internal
     */
    UpdateEmergencyContactSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEmergencyContactSettingsRequest = exports.UpdateEmergencyContactSettingsRequest || (exports.UpdateEmergencyContactSettingsRequest = {}));
var UpdateEmergencyContactSettingsResponse;
(function (UpdateEmergencyContactSettingsResponse) {
    /**
     * @internal
     */
    UpdateEmergencyContactSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEmergencyContactSettingsResponse = exports.UpdateEmergencyContactSettingsResponse || (exports.UpdateEmergencyContactSettingsResponse = {}));
var UpdateProtectionGroupRequest;
(function (UpdateProtectionGroupRequest) {
    /**
     * @internal
     */
    UpdateProtectionGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProtectionGroupRequest = exports.UpdateProtectionGroupRequest || (exports.UpdateProtectionGroupRequest = {}));
var UpdateProtectionGroupResponse;
(function (UpdateProtectionGroupResponse) {
    /**
     * @internal
     */
    UpdateProtectionGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProtectionGroupResponse = exports.UpdateProtectionGroupResponse || (exports.UpdateProtectionGroupResponse = {}));
var UpdateSubscriptionRequest;
(function (UpdateSubscriptionRequest) {
    /**
     * @internal
     */
    UpdateSubscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSubscriptionRequest = exports.UpdateSubscriptionRequest || (exports.UpdateSubscriptionRequest = {}));
var UpdateSubscriptionResponse;
(function (UpdateSubscriptionResponse) {
    /**
     * @internal
     */
    UpdateSubscriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSubscriptionResponse = exports.UpdateSubscriptionResponse || (exports.UpdateSubscriptionResponse = {}));
//# sourceMappingURL=models_0.js.map