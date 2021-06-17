"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadWriteType = exports.DataResource = exports.GetEventSelectorsRequest = exports.DescribeTrailsResponse = exports.Trail = exports.DescribeTrailsRequest = exports.TrailNotFoundException = exports.InvalidHomeRegionException = exports.DeleteTrailResponse = exports.DeleteTrailRequest = exports.ConflictException = exports.TrailNotProvidedException = exports.TrailAlreadyExistsException = exports.S3BucketDoesNotExistException = exports.OrganizationsNotInUseException = exports.OrganizationNotInAllFeaturesModeException = exports.MaximumNumberOfTrailsExceededException = exports.KmsKeyNotFoundException = exports.KmsKeyDisabledException = exports.KmsException = exports.InvalidSnsTopicNameException = exports.InvalidS3PrefixException = exports.InvalidS3BucketNameException = exports.InvalidParameterCombinationException = exports.InvalidKmsKeyIdException = exports.InvalidCloudWatchLogsRoleArnException = exports.InvalidCloudWatchLogsLogGroupArnException = exports.InsufficientSnsTopicPolicyException = exports.InsufficientS3BucketPolicyException = exports.InsufficientEncryptionPolicyException = exports.InsufficientDependencyServiceAccessPermissionException = exports.CreateTrailResponse = exports.CreateTrailRequest = exports.CloudWatchLogsDeliveryUnavailableException = exports.CloudTrailInvalidClientTokenIdException = exports.CloudTrailAccessNotEnabledException = exports.AdvancedEventSelector = exports.AdvancedFieldSelector = exports.UnsupportedOperationException = exports.TagsLimitExceededException = exports.ResourceTypeNotSupportedException = exports.ResourceNotFoundException = exports.OperationNotPermittedException = exports.NotOrganizationMasterAccountException = exports.InvalidTrailNameException = exports.InvalidTagParameterException = exports.CloudTrailARNInvalidException = exports.AddTagsResponse = exports.AddTagsRequest = exports.Tag = void 0;
exports.UpdateTrailResponse = exports.UpdateTrailRequest = exports.StopLoggingResponse = exports.StopLoggingRequest = exports.StartLoggingResponse = exports.StartLoggingRequest = exports.RemoveTagsResponse = exports.RemoveTagsRequest = exports.PutInsightSelectorsResponse = exports.PutInsightSelectorsRequest = exports.InvalidInsightSelectorsException = exports.PutEventSelectorsResponse = exports.PutEventSelectorsRequest = exports.InvalidEventSelectorsException = exports.LookupEventsResponse = exports.Event = exports.Resource = exports.LookupEventsRequest = exports.LookupAttribute = exports.LookupAttributeKey = exports.EventCategory = exports.InvalidNextTokenException = exports.InvalidMaxResultsException = exports.InvalidLookupAttributesException = exports.InvalidEventCategoryException = exports.ListTrailsResponse = exports.TrailInfo = exports.ListTrailsRequest = exports.ListTagsResponse = exports.ResourceTag = exports.ListTagsRequest = exports.ListPublicKeysResponse = exports.PublicKey = exports.ListPublicKeysRequest = exports.InvalidTokenException = exports.InvalidTimeRangeException = exports.GetTrailStatusResponse = exports.GetTrailStatusRequest = exports.GetTrailResponse = exports.GetTrailRequest = exports.InsightNotEnabledException = exports.GetInsightSelectorsResponse = exports.InsightSelector = exports.InsightType = exports.GetInsightSelectorsRequest = exports.GetEventSelectorsResponse = exports.EventSelector = void 0;
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AddTagsRequest;
(function (AddTagsRequest) {
    /**
     * @internal
     */
    AddTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsRequest = exports.AddTagsRequest || (exports.AddTagsRequest = {}));
var AddTagsResponse;
(function (AddTagsResponse) {
    /**
     * @internal
     */
    AddTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsResponse = exports.AddTagsResponse || (exports.AddTagsResponse = {}));
var CloudTrailARNInvalidException;
(function (CloudTrailARNInvalidException) {
    /**
     * @internal
     */
    CloudTrailARNInvalidException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudTrailARNInvalidException = exports.CloudTrailARNInvalidException || (exports.CloudTrailARNInvalidException = {}));
var InvalidTagParameterException;
(function (InvalidTagParameterException) {
    /**
     * @internal
     */
    InvalidTagParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTagParameterException = exports.InvalidTagParameterException || (exports.InvalidTagParameterException = {}));
var InvalidTrailNameException;
(function (InvalidTrailNameException) {
    /**
     * @internal
     */
    InvalidTrailNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTrailNameException = exports.InvalidTrailNameException || (exports.InvalidTrailNameException = {}));
var NotOrganizationMasterAccountException;
(function (NotOrganizationMasterAccountException) {
    /**
     * @internal
     */
    NotOrganizationMasterAccountException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotOrganizationMasterAccountException = exports.NotOrganizationMasterAccountException || (exports.NotOrganizationMasterAccountException = {}));
var OperationNotPermittedException;
(function (OperationNotPermittedException) {
    /**
     * @internal
     */
    OperationNotPermittedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationNotPermittedException = exports.OperationNotPermittedException || (exports.OperationNotPermittedException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourceTypeNotSupportedException;
(function (ResourceTypeNotSupportedException) {
    /**
     * @internal
     */
    ResourceTypeNotSupportedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceTypeNotSupportedException = exports.ResourceTypeNotSupportedException || (exports.ResourceTypeNotSupportedException = {}));
var TagsLimitExceededException;
(function (TagsLimitExceededException) {
    /**
     * @internal
     */
    TagsLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagsLimitExceededException = exports.TagsLimitExceededException || (exports.TagsLimitExceededException = {}));
var UnsupportedOperationException;
(function (UnsupportedOperationException) {
    /**
     * @internal
     */
    UnsupportedOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedOperationException = exports.UnsupportedOperationException || (exports.UnsupportedOperationException = {}));
var AdvancedFieldSelector;
(function (AdvancedFieldSelector) {
    /**
     * @internal
     */
    AdvancedFieldSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdvancedFieldSelector = exports.AdvancedFieldSelector || (exports.AdvancedFieldSelector = {}));
var AdvancedEventSelector;
(function (AdvancedEventSelector) {
    /**
     * @internal
     */
    AdvancedEventSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AdvancedEventSelector = exports.AdvancedEventSelector || (exports.AdvancedEventSelector = {}));
var CloudTrailAccessNotEnabledException;
(function (CloudTrailAccessNotEnabledException) {
    /**
     * @internal
     */
    CloudTrailAccessNotEnabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudTrailAccessNotEnabledException = exports.CloudTrailAccessNotEnabledException || (exports.CloudTrailAccessNotEnabledException = {}));
var CloudTrailInvalidClientTokenIdException;
(function (CloudTrailInvalidClientTokenIdException) {
    /**
     * @internal
     */
    CloudTrailInvalidClientTokenIdException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudTrailInvalidClientTokenIdException = exports.CloudTrailInvalidClientTokenIdException || (exports.CloudTrailInvalidClientTokenIdException = {}));
var CloudWatchLogsDeliveryUnavailableException;
(function (CloudWatchLogsDeliveryUnavailableException) {
    /**
     * @internal
     */
    CloudWatchLogsDeliveryUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchLogsDeliveryUnavailableException = exports.CloudWatchLogsDeliveryUnavailableException || (exports.CloudWatchLogsDeliveryUnavailableException = {}));
var CreateTrailRequest;
(function (CreateTrailRequest) {
    /**
     * @internal
     */
    CreateTrailRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrailRequest = exports.CreateTrailRequest || (exports.CreateTrailRequest = {}));
var CreateTrailResponse;
(function (CreateTrailResponse) {
    /**
     * @internal
     */
    CreateTrailResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrailResponse = exports.CreateTrailResponse || (exports.CreateTrailResponse = {}));
var InsufficientDependencyServiceAccessPermissionException;
(function (InsufficientDependencyServiceAccessPermissionException) {
    /**
     * @internal
     */
    InsufficientDependencyServiceAccessPermissionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientDependencyServiceAccessPermissionException = exports.InsufficientDependencyServiceAccessPermissionException || (exports.InsufficientDependencyServiceAccessPermissionException = {}));
var InsufficientEncryptionPolicyException;
(function (InsufficientEncryptionPolicyException) {
    /**
     * @internal
     */
    InsufficientEncryptionPolicyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientEncryptionPolicyException = exports.InsufficientEncryptionPolicyException || (exports.InsufficientEncryptionPolicyException = {}));
var InsufficientS3BucketPolicyException;
(function (InsufficientS3BucketPolicyException) {
    /**
     * @internal
     */
    InsufficientS3BucketPolicyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientS3BucketPolicyException = exports.InsufficientS3BucketPolicyException || (exports.InsufficientS3BucketPolicyException = {}));
var InsufficientSnsTopicPolicyException;
(function (InsufficientSnsTopicPolicyException) {
    /**
     * @internal
     */
    InsufficientSnsTopicPolicyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsufficientSnsTopicPolicyException = exports.InsufficientSnsTopicPolicyException || (exports.InsufficientSnsTopicPolicyException = {}));
var InvalidCloudWatchLogsLogGroupArnException;
(function (InvalidCloudWatchLogsLogGroupArnException) {
    /**
     * @internal
     */
    InvalidCloudWatchLogsLogGroupArnException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCloudWatchLogsLogGroupArnException = exports.InvalidCloudWatchLogsLogGroupArnException || (exports.InvalidCloudWatchLogsLogGroupArnException = {}));
var InvalidCloudWatchLogsRoleArnException;
(function (InvalidCloudWatchLogsRoleArnException) {
    /**
     * @internal
     */
    InvalidCloudWatchLogsRoleArnException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCloudWatchLogsRoleArnException = exports.InvalidCloudWatchLogsRoleArnException || (exports.InvalidCloudWatchLogsRoleArnException = {}));
var InvalidKmsKeyIdException;
(function (InvalidKmsKeyIdException) {
    /**
     * @internal
     */
    InvalidKmsKeyIdException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidKmsKeyIdException = exports.InvalidKmsKeyIdException || (exports.InvalidKmsKeyIdException = {}));
var InvalidParameterCombinationException;
(function (InvalidParameterCombinationException) {
    /**
     * @internal
     */
    InvalidParameterCombinationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterCombinationException = exports.InvalidParameterCombinationException || (exports.InvalidParameterCombinationException = {}));
var InvalidS3BucketNameException;
(function (InvalidS3BucketNameException) {
    /**
     * @internal
     */
    InvalidS3BucketNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidS3BucketNameException = exports.InvalidS3BucketNameException || (exports.InvalidS3BucketNameException = {}));
var InvalidS3PrefixException;
(function (InvalidS3PrefixException) {
    /**
     * @internal
     */
    InvalidS3PrefixException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidS3PrefixException = exports.InvalidS3PrefixException || (exports.InvalidS3PrefixException = {}));
var InvalidSnsTopicNameException;
(function (InvalidSnsTopicNameException) {
    /**
     * @internal
     */
    InvalidSnsTopicNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSnsTopicNameException = exports.InvalidSnsTopicNameException || (exports.InvalidSnsTopicNameException = {}));
var KmsException;
(function (KmsException) {
    /**
     * @internal
     */
    KmsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KmsException = exports.KmsException || (exports.KmsException = {}));
var KmsKeyDisabledException;
(function (KmsKeyDisabledException) {
    /**
     * @internal
     */
    KmsKeyDisabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KmsKeyDisabledException = exports.KmsKeyDisabledException || (exports.KmsKeyDisabledException = {}));
var KmsKeyNotFoundException;
(function (KmsKeyNotFoundException) {
    /**
     * @internal
     */
    KmsKeyNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KmsKeyNotFoundException = exports.KmsKeyNotFoundException || (exports.KmsKeyNotFoundException = {}));
var MaximumNumberOfTrailsExceededException;
(function (MaximumNumberOfTrailsExceededException) {
    /**
     * @internal
     */
    MaximumNumberOfTrailsExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MaximumNumberOfTrailsExceededException = exports.MaximumNumberOfTrailsExceededException || (exports.MaximumNumberOfTrailsExceededException = {}));
var OrganizationNotInAllFeaturesModeException;
(function (OrganizationNotInAllFeaturesModeException) {
    /**
     * @internal
     */
    OrganizationNotInAllFeaturesModeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationNotInAllFeaturesModeException = exports.OrganizationNotInAllFeaturesModeException || (exports.OrganizationNotInAllFeaturesModeException = {}));
var OrganizationsNotInUseException;
(function (OrganizationsNotInUseException) {
    /**
     * @internal
     */
    OrganizationsNotInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationsNotInUseException = exports.OrganizationsNotInUseException || (exports.OrganizationsNotInUseException = {}));
var S3BucketDoesNotExistException;
(function (S3BucketDoesNotExistException) {
    /**
     * @internal
     */
    S3BucketDoesNotExistException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3BucketDoesNotExistException = exports.S3BucketDoesNotExistException || (exports.S3BucketDoesNotExistException = {}));
var TrailAlreadyExistsException;
(function (TrailAlreadyExistsException) {
    /**
     * @internal
     */
    TrailAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrailAlreadyExistsException = exports.TrailAlreadyExistsException || (exports.TrailAlreadyExistsException = {}));
var TrailNotProvidedException;
(function (TrailNotProvidedException) {
    /**
     * @internal
     */
    TrailNotProvidedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrailNotProvidedException = exports.TrailNotProvidedException || (exports.TrailNotProvidedException = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var DeleteTrailRequest;
(function (DeleteTrailRequest) {
    /**
     * @internal
     */
    DeleteTrailRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrailRequest = exports.DeleteTrailRequest || (exports.DeleteTrailRequest = {}));
var DeleteTrailResponse;
(function (DeleteTrailResponse) {
    /**
     * @internal
     */
    DeleteTrailResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrailResponse = exports.DeleteTrailResponse || (exports.DeleteTrailResponse = {}));
var InvalidHomeRegionException;
(function (InvalidHomeRegionException) {
    /**
     * @internal
     */
    InvalidHomeRegionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidHomeRegionException = exports.InvalidHomeRegionException || (exports.InvalidHomeRegionException = {}));
var TrailNotFoundException;
(function (TrailNotFoundException) {
    /**
     * @internal
     */
    TrailNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrailNotFoundException = exports.TrailNotFoundException || (exports.TrailNotFoundException = {}));
var DescribeTrailsRequest;
(function (DescribeTrailsRequest) {
    /**
     * @internal
     */
    DescribeTrailsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrailsRequest = exports.DescribeTrailsRequest || (exports.DescribeTrailsRequest = {}));
var Trail;
(function (Trail) {
    /**
     * @internal
     */
    Trail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Trail = exports.Trail || (exports.Trail = {}));
var DescribeTrailsResponse;
(function (DescribeTrailsResponse) {
    /**
     * @internal
     */
    DescribeTrailsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrailsResponse = exports.DescribeTrailsResponse || (exports.DescribeTrailsResponse = {}));
var GetEventSelectorsRequest;
(function (GetEventSelectorsRequest) {
    /**
     * @internal
     */
    GetEventSelectorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEventSelectorsRequest = exports.GetEventSelectorsRequest || (exports.GetEventSelectorsRequest = {}));
var DataResource;
(function (DataResource) {
    /**
     * @internal
     */
    DataResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataResource = exports.DataResource || (exports.DataResource = {}));
var ReadWriteType;
(function (ReadWriteType) {
    ReadWriteType["All"] = "All";
    ReadWriteType["ReadOnly"] = "ReadOnly";
    ReadWriteType["WriteOnly"] = "WriteOnly";
})(ReadWriteType = exports.ReadWriteType || (exports.ReadWriteType = {}));
var EventSelector;
(function (EventSelector) {
    /**
     * @internal
     */
    EventSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventSelector = exports.EventSelector || (exports.EventSelector = {}));
var GetEventSelectorsResponse;
(function (GetEventSelectorsResponse) {
    /**
     * @internal
     */
    GetEventSelectorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEventSelectorsResponse = exports.GetEventSelectorsResponse || (exports.GetEventSelectorsResponse = {}));
var GetInsightSelectorsRequest;
(function (GetInsightSelectorsRequest) {
    /**
     * @internal
     */
    GetInsightSelectorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightSelectorsRequest = exports.GetInsightSelectorsRequest || (exports.GetInsightSelectorsRequest = {}));
var InsightType;
(function (InsightType) {
    InsightType["ApiCallRateInsight"] = "ApiCallRateInsight";
})(InsightType = exports.InsightType || (exports.InsightType = {}));
var InsightSelector;
(function (InsightSelector) {
    /**
     * @internal
     */
    InsightSelector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightSelector = exports.InsightSelector || (exports.InsightSelector = {}));
var GetInsightSelectorsResponse;
(function (GetInsightSelectorsResponse) {
    /**
     * @internal
     */
    GetInsightSelectorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightSelectorsResponse = exports.GetInsightSelectorsResponse || (exports.GetInsightSelectorsResponse = {}));
var InsightNotEnabledException;
(function (InsightNotEnabledException) {
    /**
     * @internal
     */
    InsightNotEnabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightNotEnabledException = exports.InsightNotEnabledException || (exports.InsightNotEnabledException = {}));
var GetTrailRequest;
(function (GetTrailRequest) {
    /**
     * @internal
     */
    GetTrailRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTrailRequest = exports.GetTrailRequest || (exports.GetTrailRequest = {}));
var GetTrailResponse;
(function (GetTrailResponse) {
    /**
     * @internal
     */
    GetTrailResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTrailResponse = exports.GetTrailResponse || (exports.GetTrailResponse = {}));
var GetTrailStatusRequest;
(function (GetTrailStatusRequest) {
    /**
     * @internal
     */
    GetTrailStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTrailStatusRequest = exports.GetTrailStatusRequest || (exports.GetTrailStatusRequest = {}));
var GetTrailStatusResponse;
(function (GetTrailStatusResponse) {
    /**
     * @internal
     */
    GetTrailStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTrailStatusResponse = exports.GetTrailStatusResponse || (exports.GetTrailStatusResponse = {}));
var InvalidTimeRangeException;
(function (InvalidTimeRangeException) {
    /**
     * @internal
     */
    InvalidTimeRangeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTimeRangeException = exports.InvalidTimeRangeException || (exports.InvalidTimeRangeException = {}));
var InvalidTokenException;
(function (InvalidTokenException) {
    /**
     * @internal
     */
    InvalidTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTokenException = exports.InvalidTokenException || (exports.InvalidTokenException = {}));
var ListPublicKeysRequest;
(function (ListPublicKeysRequest) {
    /**
     * @internal
     */
    ListPublicKeysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPublicKeysRequest = exports.ListPublicKeysRequest || (exports.ListPublicKeysRequest = {}));
var PublicKey;
(function (PublicKey) {
    /**
     * @internal
     */
    PublicKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublicKey = exports.PublicKey || (exports.PublicKey = {}));
var ListPublicKeysResponse;
(function (ListPublicKeysResponse) {
    /**
     * @internal
     */
    ListPublicKeysResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPublicKeysResponse = exports.ListPublicKeysResponse || (exports.ListPublicKeysResponse = {}));
var ListTagsRequest;
(function (ListTagsRequest) {
    /**
     * @internal
     */
    ListTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsRequest = exports.ListTagsRequest || (exports.ListTagsRequest = {}));
var ResourceTag;
(function (ResourceTag) {
    /**
     * @internal
     */
    ResourceTag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceTag = exports.ResourceTag || (exports.ResourceTag = {}));
var ListTagsResponse;
(function (ListTagsResponse) {
    /**
     * @internal
     */
    ListTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsResponse = exports.ListTagsResponse || (exports.ListTagsResponse = {}));
var ListTrailsRequest;
(function (ListTrailsRequest) {
    /**
     * @internal
     */
    ListTrailsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrailsRequest = exports.ListTrailsRequest || (exports.ListTrailsRequest = {}));
var TrailInfo;
(function (TrailInfo) {
    /**
     * @internal
     */
    TrailInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrailInfo = exports.TrailInfo || (exports.TrailInfo = {}));
var ListTrailsResponse;
(function (ListTrailsResponse) {
    /**
     * @internal
     */
    ListTrailsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrailsResponse = exports.ListTrailsResponse || (exports.ListTrailsResponse = {}));
var InvalidEventCategoryException;
(function (InvalidEventCategoryException) {
    /**
     * @internal
     */
    InvalidEventCategoryException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidEventCategoryException = exports.InvalidEventCategoryException || (exports.InvalidEventCategoryException = {}));
var InvalidLookupAttributesException;
(function (InvalidLookupAttributesException) {
    /**
     * @internal
     */
    InvalidLookupAttributesException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidLookupAttributesException = exports.InvalidLookupAttributesException || (exports.InvalidLookupAttributesException = {}));
var InvalidMaxResultsException;
(function (InvalidMaxResultsException) {
    /**
     * @internal
     */
    InvalidMaxResultsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidMaxResultsException = exports.InvalidMaxResultsException || (exports.InvalidMaxResultsException = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var EventCategory;
(function (EventCategory) {
    EventCategory["Insight"] = "insight";
})(EventCategory = exports.EventCategory || (exports.EventCategory = {}));
var LookupAttributeKey;
(function (LookupAttributeKey) {
    LookupAttributeKey["ACCESS_KEY_ID"] = "AccessKeyId";
    LookupAttributeKey["EVENT_ID"] = "EventId";
    LookupAttributeKey["EVENT_NAME"] = "EventName";
    LookupAttributeKey["EVENT_SOURCE"] = "EventSource";
    LookupAttributeKey["READ_ONLY"] = "ReadOnly";
    LookupAttributeKey["RESOURCE_NAME"] = "ResourceName";
    LookupAttributeKey["RESOURCE_TYPE"] = "ResourceType";
    LookupAttributeKey["USERNAME"] = "Username";
})(LookupAttributeKey = exports.LookupAttributeKey || (exports.LookupAttributeKey = {}));
var LookupAttribute;
(function (LookupAttribute) {
    /**
     * @internal
     */
    LookupAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LookupAttribute = exports.LookupAttribute || (exports.LookupAttribute = {}));
var LookupEventsRequest;
(function (LookupEventsRequest) {
    /**
     * @internal
     */
    LookupEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LookupEventsRequest = exports.LookupEventsRequest || (exports.LookupEventsRequest = {}));
var Resource;
(function (Resource) {
    /**
     * @internal
     */
    Resource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Resource = exports.Resource || (exports.Resource = {}));
var Event;
(function (Event) {
    /**
     * @internal
     */
    Event.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Event = exports.Event || (exports.Event = {}));
var LookupEventsResponse;
(function (LookupEventsResponse) {
    /**
     * @internal
     */
    LookupEventsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LookupEventsResponse = exports.LookupEventsResponse || (exports.LookupEventsResponse = {}));
var InvalidEventSelectorsException;
(function (InvalidEventSelectorsException) {
    /**
     * @internal
     */
    InvalidEventSelectorsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidEventSelectorsException = exports.InvalidEventSelectorsException || (exports.InvalidEventSelectorsException = {}));
var PutEventSelectorsRequest;
(function (PutEventSelectorsRequest) {
    /**
     * @internal
     */
    PutEventSelectorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEventSelectorsRequest = exports.PutEventSelectorsRequest || (exports.PutEventSelectorsRequest = {}));
var PutEventSelectorsResponse;
(function (PutEventSelectorsResponse) {
    /**
     * @internal
     */
    PutEventSelectorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEventSelectorsResponse = exports.PutEventSelectorsResponse || (exports.PutEventSelectorsResponse = {}));
var InvalidInsightSelectorsException;
(function (InvalidInsightSelectorsException) {
    /**
     * @internal
     */
    InvalidInsightSelectorsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInsightSelectorsException = exports.InvalidInsightSelectorsException || (exports.InvalidInsightSelectorsException = {}));
var PutInsightSelectorsRequest;
(function (PutInsightSelectorsRequest) {
    /**
     * @internal
     */
    PutInsightSelectorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutInsightSelectorsRequest = exports.PutInsightSelectorsRequest || (exports.PutInsightSelectorsRequest = {}));
var PutInsightSelectorsResponse;
(function (PutInsightSelectorsResponse) {
    /**
     * @internal
     */
    PutInsightSelectorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutInsightSelectorsResponse = exports.PutInsightSelectorsResponse || (exports.PutInsightSelectorsResponse = {}));
var RemoveTagsRequest;
(function (RemoveTagsRequest) {
    /**
     * @internal
     */
    RemoveTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsRequest = exports.RemoveTagsRequest || (exports.RemoveTagsRequest = {}));
var RemoveTagsResponse;
(function (RemoveTagsResponse) {
    /**
     * @internal
     */
    RemoveTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsResponse = exports.RemoveTagsResponse || (exports.RemoveTagsResponse = {}));
var StartLoggingRequest;
(function (StartLoggingRequest) {
    /**
     * @internal
     */
    StartLoggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartLoggingRequest = exports.StartLoggingRequest || (exports.StartLoggingRequest = {}));
var StartLoggingResponse;
(function (StartLoggingResponse) {
    /**
     * @internal
     */
    StartLoggingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartLoggingResponse = exports.StartLoggingResponse || (exports.StartLoggingResponse = {}));
var StopLoggingRequest;
(function (StopLoggingRequest) {
    /**
     * @internal
     */
    StopLoggingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopLoggingRequest = exports.StopLoggingRequest || (exports.StopLoggingRequest = {}));
var StopLoggingResponse;
(function (StopLoggingResponse) {
    /**
     * @internal
     */
    StopLoggingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopLoggingResponse = exports.StopLoggingResponse || (exports.StopLoggingResponse = {}));
var UpdateTrailRequest;
(function (UpdateTrailRequest) {
    /**
     * @internal
     */
    UpdateTrailRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTrailRequest = exports.UpdateTrailRequest || (exports.UpdateTrailRequest = {}));
var UpdateTrailResponse;
(function (UpdateTrailResponse) {
    /**
     * @internal
     */
    UpdateTrailResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTrailResponse = exports.UpdateTrailResponse || (exports.UpdateTrailResponse = {}));
//# sourceMappingURL=models_0.js.map