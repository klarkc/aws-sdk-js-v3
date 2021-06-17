"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = exports.ListEndpointsByPlatformApplicationInput = exports.GetTopicAttributesResponse = exports.GetTopicAttributesInput = exports.GetSubscriptionAttributesResponse = exports.GetSubscriptionAttributesInput = exports.GetSMSSandboxAccountStatusResult = exports.GetSMSSandboxAccountStatusInput = exports.GetSMSAttributesResponse = exports.GetSMSAttributesInput = exports.GetPlatformApplicationAttributesResponse = exports.GetPlatformApplicationAttributesInput = exports.GetEndpointAttributesResponse = exports.GetEndpointAttributesInput = exports.DeleteTopicInput = exports.ResourceNotFoundException = exports.DeleteSMSSandboxPhoneNumberResult = exports.DeleteSMSSandboxPhoneNumberInput = exports.DeletePlatformApplicationInput = exports.DeleteEndpointInput = exports.TopicLimitExceededException = exports.TagPolicyException = exports.TagLimitExceededException = exports.StaleTagException = exports.InvalidSecurityException = exports.CreateTopicResponse = exports.CreateTopicInput = exports.Tag = exports.ConcurrentAccessException = exports.UserErrorException = exports.OptedOutException = exports.CreateSMSSandboxPhoneNumberResult = exports.CreateSMSSandboxPhoneNumberInput = exports.LanguageCodeString = exports.CreatePlatformEndpointInput = exports.CreateEndpointResponse = exports.CreatePlatformApplicationResponse = exports.CreatePlatformApplicationInput = exports.SubscriptionLimitExceededException = exports.FilterPolicyLimitExceededException = exports.ConfirmSubscriptionResponse = exports.ConfirmSubscriptionInput = exports.ThrottledException = exports.CheckIfPhoneNumberIsOptedOutResponse = exports.CheckIfPhoneNumberIsOptedOutInput = exports.NotFoundException = exports.InvalidParameterException = exports.InternalErrorException = exports.AuthorizationErrorException = exports.AddPermissionInput = void 0;
exports.TagResourceRequest = exports.SubscribeResponse = exports.SubscribeInput = exports.SetTopicAttributesInput = exports.SetSubscriptionAttributesInput = exports.SetSMSAttributesResponse = exports.SetSMSAttributesInput = exports.SetPlatformApplicationAttributesInput = exports.SetEndpointAttributesInput = exports.RemovePermissionInput = exports.PublishResponse = exports.PublishInput = exports.MessageAttributeValue = exports.PlatformApplicationDisabledException = exports.KMSThrottlingException = exports.KMSOptInRequired = exports.KMSNotFoundException = exports.KMSInvalidStateException = exports.KMSDisabledException = exports.KMSAccessDeniedException = exports.InvalidParameterValueException = exports.EndpointDisabledException = exports.OptInPhoneNumberResponse = exports.OptInPhoneNumberInput = exports.ListTopicsResponse = exports.Topic = exports.ListTopicsInput = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListSubscriptionsByTopicResponse = exports.ListSubscriptionsByTopicInput = exports.ListSubscriptionsResponse = exports.Subscription = exports.ListSubscriptionsInput = exports.ListSMSSandboxPhoneNumbersResult = exports.SMSSandboxPhoneNumber = exports.SMSSandboxPhoneNumberVerificationStatus = exports.ListSMSSandboxPhoneNumbersInput = exports.ListPlatformApplicationsResponse = exports.PlatformApplication = exports.ListPlatformApplicationsInput = exports.ListPhoneNumbersOptedOutResponse = exports.ListPhoneNumbersOptedOutInput = exports.ValidationException = exports.ListOriginationNumbersResult = exports.PhoneNumberInformation = exports.RouteType = exports.NumberCapability = exports.ListOriginationNumbersRequest = exports.ListEndpointsByPlatformApplicationResponse = void 0;
exports.VerifySMSSandboxPhoneNumberResult = exports.VerifySMSSandboxPhoneNumberInput = exports.VerificationException = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.UnsubscribeInput = exports.TagResourceResponse = void 0;
var AddPermissionInput;
(function (AddPermissionInput) {
    /**
     * @internal
     */
    AddPermissionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddPermissionInput = exports.AddPermissionInput || (exports.AddPermissionInput = {}));
var AuthorizationErrorException;
(function (AuthorizationErrorException) {
    /**
     * @internal
     */
    AuthorizationErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AuthorizationErrorException = exports.AuthorizationErrorException || (exports.AuthorizationErrorException = {}));
var InternalErrorException;
(function (InternalErrorException) {
    /**
     * @internal
     */
    InternalErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalErrorException = exports.InternalErrorException || (exports.InternalErrorException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var CheckIfPhoneNumberIsOptedOutInput;
(function (CheckIfPhoneNumberIsOptedOutInput) {
    /**
     * @internal
     */
    CheckIfPhoneNumberIsOptedOutInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckIfPhoneNumberIsOptedOutInput = exports.CheckIfPhoneNumberIsOptedOutInput || (exports.CheckIfPhoneNumberIsOptedOutInput = {}));
var CheckIfPhoneNumberIsOptedOutResponse;
(function (CheckIfPhoneNumberIsOptedOutResponse) {
    /**
     * @internal
     */
    CheckIfPhoneNumberIsOptedOutResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckIfPhoneNumberIsOptedOutResponse = exports.CheckIfPhoneNumberIsOptedOutResponse || (exports.CheckIfPhoneNumberIsOptedOutResponse = {}));
var ThrottledException;
(function (ThrottledException) {
    /**
     * @internal
     */
    ThrottledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottledException = exports.ThrottledException || (exports.ThrottledException = {}));
var ConfirmSubscriptionInput;
(function (ConfirmSubscriptionInput) {
    /**
     * @internal
     */
    ConfirmSubscriptionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmSubscriptionInput = exports.ConfirmSubscriptionInput || (exports.ConfirmSubscriptionInput = {}));
var ConfirmSubscriptionResponse;
(function (ConfirmSubscriptionResponse) {
    /**
     * @internal
     */
    ConfirmSubscriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfirmSubscriptionResponse = exports.ConfirmSubscriptionResponse || (exports.ConfirmSubscriptionResponse = {}));
var FilterPolicyLimitExceededException;
(function (FilterPolicyLimitExceededException) {
    /**
     * @internal
     */
    FilterPolicyLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FilterPolicyLimitExceededException = exports.FilterPolicyLimitExceededException || (exports.FilterPolicyLimitExceededException = {}));
var SubscriptionLimitExceededException;
(function (SubscriptionLimitExceededException) {
    /**
     * @internal
     */
    SubscriptionLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscriptionLimitExceededException = exports.SubscriptionLimitExceededException || (exports.SubscriptionLimitExceededException = {}));
var CreatePlatformApplicationInput;
(function (CreatePlatformApplicationInput) {
    /**
     * @internal
     */
    CreatePlatformApplicationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePlatformApplicationInput = exports.CreatePlatformApplicationInput || (exports.CreatePlatformApplicationInput = {}));
var CreatePlatformApplicationResponse;
(function (CreatePlatformApplicationResponse) {
    /**
     * @internal
     */
    CreatePlatformApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePlatformApplicationResponse = exports.CreatePlatformApplicationResponse || (exports.CreatePlatformApplicationResponse = {}));
var CreateEndpointResponse;
(function (CreateEndpointResponse) {
    /**
     * @internal
     */
    CreateEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEndpointResponse = exports.CreateEndpointResponse || (exports.CreateEndpointResponse = {}));
var CreatePlatformEndpointInput;
(function (CreatePlatformEndpointInput) {
    /**
     * @internal
     */
    CreatePlatformEndpointInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePlatformEndpointInput = exports.CreatePlatformEndpointInput || (exports.CreatePlatformEndpointInput = {}));
var LanguageCodeString;
(function (LanguageCodeString) {
    LanguageCodeString["de_DE"] = "de-DE";
    LanguageCodeString["en_GB"] = "en-GB";
    LanguageCodeString["en_US"] = "en-US";
    LanguageCodeString["es_419"] = "es-419";
    LanguageCodeString["es_ES"] = "es-ES";
    LanguageCodeString["fr_CA"] = "fr-CA";
    LanguageCodeString["fr_FR"] = "fr-FR";
    LanguageCodeString["it_IT"] = "it-IT";
    LanguageCodeString["jp_JP"] = "ja-JP";
    LanguageCodeString["kr_KR"] = "kr-KR";
    LanguageCodeString["pt_BR"] = "pt-BR";
    LanguageCodeString["zh_CN"] = "zh-CN";
    LanguageCodeString["zh_TW"] = "zh-TW";
})(LanguageCodeString = exports.LanguageCodeString || (exports.LanguageCodeString = {}));
var CreateSMSSandboxPhoneNumberInput;
(function (CreateSMSSandboxPhoneNumberInput) {
    /**
     * @internal
     */
    CreateSMSSandboxPhoneNumberInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSMSSandboxPhoneNumberInput = exports.CreateSMSSandboxPhoneNumberInput || (exports.CreateSMSSandboxPhoneNumberInput = {}));
var CreateSMSSandboxPhoneNumberResult;
(function (CreateSMSSandboxPhoneNumberResult) {
    /**
     * @internal
     */
    CreateSMSSandboxPhoneNumberResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSMSSandboxPhoneNumberResult = exports.CreateSMSSandboxPhoneNumberResult || (exports.CreateSMSSandboxPhoneNumberResult = {}));
var OptedOutException;
(function (OptedOutException) {
    /**
     * @internal
     */
    OptedOutException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptedOutException = exports.OptedOutException || (exports.OptedOutException = {}));
var UserErrorException;
(function (UserErrorException) {
    /**
     * @internal
     */
    UserErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserErrorException = exports.UserErrorException || (exports.UserErrorException = {}));
var ConcurrentAccessException;
(function (ConcurrentAccessException) {
    /**
     * @internal
     */
    ConcurrentAccessException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentAccessException = exports.ConcurrentAccessException || (exports.ConcurrentAccessException = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateTopicInput;
(function (CreateTopicInput) {
    /**
     * @internal
     */
    CreateTopicInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTopicInput = exports.CreateTopicInput || (exports.CreateTopicInput = {}));
var CreateTopicResponse;
(function (CreateTopicResponse) {
    /**
     * @internal
     */
    CreateTopicResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTopicResponse = exports.CreateTopicResponse || (exports.CreateTopicResponse = {}));
var InvalidSecurityException;
(function (InvalidSecurityException) {
    /**
     * @internal
     */
    InvalidSecurityException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSecurityException = exports.InvalidSecurityException || (exports.InvalidSecurityException = {}));
var StaleTagException;
(function (StaleTagException) {
    /**
     * @internal
     */
    StaleTagException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StaleTagException = exports.StaleTagException || (exports.StaleTagException = {}));
var TagLimitExceededException;
(function (TagLimitExceededException) {
    /**
     * @internal
     */
    TagLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagLimitExceededException = exports.TagLimitExceededException || (exports.TagLimitExceededException = {}));
var TagPolicyException;
(function (TagPolicyException) {
    /**
     * @internal
     */
    TagPolicyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagPolicyException = exports.TagPolicyException || (exports.TagPolicyException = {}));
var TopicLimitExceededException;
(function (TopicLimitExceededException) {
    /**
     * @internal
     */
    TopicLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TopicLimitExceededException = exports.TopicLimitExceededException || (exports.TopicLimitExceededException = {}));
var DeleteEndpointInput;
(function (DeleteEndpointInput) {
    /**
     * @internal
     */
    DeleteEndpointInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEndpointInput = exports.DeleteEndpointInput || (exports.DeleteEndpointInput = {}));
var DeletePlatformApplicationInput;
(function (DeletePlatformApplicationInput) {
    /**
     * @internal
     */
    DeletePlatformApplicationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePlatformApplicationInput = exports.DeletePlatformApplicationInput || (exports.DeletePlatformApplicationInput = {}));
var DeleteSMSSandboxPhoneNumberInput;
(function (DeleteSMSSandboxPhoneNumberInput) {
    /**
     * @internal
     */
    DeleteSMSSandboxPhoneNumberInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSMSSandboxPhoneNumberInput = exports.DeleteSMSSandboxPhoneNumberInput || (exports.DeleteSMSSandboxPhoneNumberInput = {}));
var DeleteSMSSandboxPhoneNumberResult;
(function (DeleteSMSSandboxPhoneNumberResult) {
    /**
     * @internal
     */
    DeleteSMSSandboxPhoneNumberResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSMSSandboxPhoneNumberResult = exports.DeleteSMSSandboxPhoneNumberResult || (exports.DeleteSMSSandboxPhoneNumberResult = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var DeleteTopicInput;
(function (DeleteTopicInput) {
    /**
     * @internal
     */
    DeleteTopicInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTopicInput = exports.DeleteTopicInput || (exports.DeleteTopicInput = {}));
var GetEndpointAttributesInput;
(function (GetEndpointAttributesInput) {
    /**
     * @internal
     */
    GetEndpointAttributesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEndpointAttributesInput = exports.GetEndpointAttributesInput || (exports.GetEndpointAttributesInput = {}));
var GetEndpointAttributesResponse;
(function (GetEndpointAttributesResponse) {
    /**
     * @internal
     */
    GetEndpointAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEndpointAttributesResponse = exports.GetEndpointAttributesResponse || (exports.GetEndpointAttributesResponse = {}));
var GetPlatformApplicationAttributesInput;
(function (GetPlatformApplicationAttributesInput) {
    /**
     * @internal
     */
    GetPlatformApplicationAttributesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPlatformApplicationAttributesInput = exports.GetPlatformApplicationAttributesInput || (exports.GetPlatformApplicationAttributesInput = {}));
var GetPlatformApplicationAttributesResponse;
(function (GetPlatformApplicationAttributesResponse) {
    /**
     * @internal
     */
    GetPlatformApplicationAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPlatformApplicationAttributesResponse = exports.GetPlatformApplicationAttributesResponse || (exports.GetPlatformApplicationAttributesResponse = {}));
var GetSMSAttributesInput;
(function (GetSMSAttributesInput) {
    /**
     * @internal
     */
    GetSMSAttributesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSMSAttributesInput = exports.GetSMSAttributesInput || (exports.GetSMSAttributesInput = {}));
var GetSMSAttributesResponse;
(function (GetSMSAttributesResponse) {
    /**
     * @internal
     */
    GetSMSAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSMSAttributesResponse = exports.GetSMSAttributesResponse || (exports.GetSMSAttributesResponse = {}));
var GetSMSSandboxAccountStatusInput;
(function (GetSMSSandboxAccountStatusInput) {
    /**
     * @internal
     */
    GetSMSSandboxAccountStatusInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSMSSandboxAccountStatusInput = exports.GetSMSSandboxAccountStatusInput || (exports.GetSMSSandboxAccountStatusInput = {}));
var GetSMSSandboxAccountStatusResult;
(function (GetSMSSandboxAccountStatusResult) {
    /**
     * @internal
     */
    GetSMSSandboxAccountStatusResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSMSSandboxAccountStatusResult = exports.GetSMSSandboxAccountStatusResult || (exports.GetSMSSandboxAccountStatusResult = {}));
var GetSubscriptionAttributesInput;
(function (GetSubscriptionAttributesInput) {
    /**
     * @internal
     */
    GetSubscriptionAttributesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSubscriptionAttributesInput = exports.GetSubscriptionAttributesInput || (exports.GetSubscriptionAttributesInput = {}));
var GetSubscriptionAttributesResponse;
(function (GetSubscriptionAttributesResponse) {
    /**
     * @internal
     */
    GetSubscriptionAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSubscriptionAttributesResponse = exports.GetSubscriptionAttributesResponse || (exports.GetSubscriptionAttributesResponse = {}));
var GetTopicAttributesInput;
(function (GetTopicAttributesInput) {
    /**
     * @internal
     */
    GetTopicAttributesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTopicAttributesInput = exports.GetTopicAttributesInput || (exports.GetTopicAttributesInput = {}));
var GetTopicAttributesResponse;
(function (GetTopicAttributesResponse) {
    /**
     * @internal
     */
    GetTopicAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTopicAttributesResponse = exports.GetTopicAttributesResponse || (exports.GetTopicAttributesResponse = {}));
var ListEndpointsByPlatformApplicationInput;
(function (ListEndpointsByPlatformApplicationInput) {
    /**
     * @internal
     */
    ListEndpointsByPlatformApplicationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEndpointsByPlatformApplicationInput = exports.ListEndpointsByPlatformApplicationInput || (exports.ListEndpointsByPlatformApplicationInput = {}));
var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
var ListEndpointsByPlatformApplicationResponse;
(function (ListEndpointsByPlatformApplicationResponse) {
    /**
     * @internal
     */
    ListEndpointsByPlatformApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEndpointsByPlatformApplicationResponse = exports.ListEndpointsByPlatformApplicationResponse || (exports.ListEndpointsByPlatformApplicationResponse = {}));
var ListOriginationNumbersRequest;
(function (ListOriginationNumbersRequest) {
    /**
     * @internal
     */
    ListOriginationNumbersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOriginationNumbersRequest = exports.ListOriginationNumbersRequest || (exports.ListOriginationNumbersRequest = {}));
var NumberCapability;
(function (NumberCapability) {
    NumberCapability["MMS"] = "MMS";
    NumberCapability["SMS"] = "SMS";
    NumberCapability["VOICE"] = "VOICE";
})(NumberCapability = exports.NumberCapability || (exports.NumberCapability = {}));
var RouteType;
(function (RouteType) {
    RouteType["Premium"] = "Premium";
    RouteType["Promotional"] = "Promotional";
    RouteType["Transactional"] = "Transactional";
})(RouteType = exports.RouteType || (exports.RouteType = {}));
var PhoneNumberInformation;
(function (PhoneNumberInformation) {
    /**
     * @internal
     */
    PhoneNumberInformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PhoneNumberInformation = exports.PhoneNumberInformation || (exports.PhoneNumberInformation = {}));
var ListOriginationNumbersResult;
(function (ListOriginationNumbersResult) {
    /**
     * @internal
     */
    ListOriginationNumbersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListOriginationNumbersResult = exports.ListOriginationNumbersResult || (exports.ListOriginationNumbersResult = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var ListPhoneNumbersOptedOutInput;
(function (ListPhoneNumbersOptedOutInput) {
    /**
     * @internal
     */
    ListPhoneNumbersOptedOutInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPhoneNumbersOptedOutInput = exports.ListPhoneNumbersOptedOutInput || (exports.ListPhoneNumbersOptedOutInput = {}));
var ListPhoneNumbersOptedOutResponse;
(function (ListPhoneNumbersOptedOutResponse) {
    /**
     * @internal
     */
    ListPhoneNumbersOptedOutResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPhoneNumbersOptedOutResponse = exports.ListPhoneNumbersOptedOutResponse || (exports.ListPhoneNumbersOptedOutResponse = {}));
var ListPlatformApplicationsInput;
(function (ListPlatformApplicationsInput) {
    /**
     * @internal
     */
    ListPlatformApplicationsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPlatformApplicationsInput = exports.ListPlatformApplicationsInput || (exports.ListPlatformApplicationsInput = {}));
var PlatformApplication;
(function (PlatformApplication) {
    /**
     * @internal
     */
    PlatformApplication.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlatformApplication = exports.PlatformApplication || (exports.PlatformApplication = {}));
var ListPlatformApplicationsResponse;
(function (ListPlatformApplicationsResponse) {
    /**
     * @internal
     */
    ListPlatformApplicationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPlatformApplicationsResponse = exports.ListPlatformApplicationsResponse || (exports.ListPlatformApplicationsResponse = {}));
var ListSMSSandboxPhoneNumbersInput;
(function (ListSMSSandboxPhoneNumbersInput) {
    /**
     * @internal
     */
    ListSMSSandboxPhoneNumbersInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSMSSandboxPhoneNumbersInput = exports.ListSMSSandboxPhoneNumbersInput || (exports.ListSMSSandboxPhoneNumbersInput = {}));
var SMSSandboxPhoneNumberVerificationStatus;
(function (SMSSandboxPhoneNumberVerificationStatus) {
    SMSSandboxPhoneNumberVerificationStatus["Pending"] = "Pending";
    SMSSandboxPhoneNumberVerificationStatus["Verified"] = "Verified";
})(SMSSandboxPhoneNumberVerificationStatus = exports.SMSSandboxPhoneNumberVerificationStatus || (exports.SMSSandboxPhoneNumberVerificationStatus = {}));
var SMSSandboxPhoneNumber;
(function (SMSSandboxPhoneNumber) {
    /**
     * @internal
     */
    SMSSandboxPhoneNumber.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SMSSandboxPhoneNumber = exports.SMSSandboxPhoneNumber || (exports.SMSSandboxPhoneNumber = {}));
var ListSMSSandboxPhoneNumbersResult;
(function (ListSMSSandboxPhoneNumbersResult) {
    /**
     * @internal
     */
    ListSMSSandboxPhoneNumbersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSMSSandboxPhoneNumbersResult = exports.ListSMSSandboxPhoneNumbersResult || (exports.ListSMSSandboxPhoneNumbersResult = {}));
var ListSubscriptionsInput;
(function (ListSubscriptionsInput) {
    /**
     * @internal
     */
    ListSubscriptionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSubscriptionsInput = exports.ListSubscriptionsInput || (exports.ListSubscriptionsInput = {}));
var Subscription;
(function (Subscription) {
    /**
     * @internal
     */
    Subscription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Subscription = exports.Subscription || (exports.Subscription = {}));
var ListSubscriptionsResponse;
(function (ListSubscriptionsResponse) {
    /**
     * @internal
     */
    ListSubscriptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSubscriptionsResponse = exports.ListSubscriptionsResponse || (exports.ListSubscriptionsResponse = {}));
var ListSubscriptionsByTopicInput;
(function (ListSubscriptionsByTopicInput) {
    /**
     * @internal
     */
    ListSubscriptionsByTopicInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSubscriptionsByTopicInput = exports.ListSubscriptionsByTopicInput || (exports.ListSubscriptionsByTopicInput = {}));
var ListSubscriptionsByTopicResponse;
(function (ListSubscriptionsByTopicResponse) {
    /**
     * @internal
     */
    ListSubscriptionsByTopicResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSubscriptionsByTopicResponse = exports.ListSubscriptionsByTopicResponse || (exports.ListSubscriptionsByTopicResponse = {}));
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
var ListTopicsInput;
(function (ListTopicsInput) {
    /**
     * @internal
     */
    ListTopicsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTopicsInput = exports.ListTopicsInput || (exports.ListTopicsInput = {}));
var Topic;
(function (Topic) {
    /**
     * @internal
     */
    Topic.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Topic = exports.Topic || (exports.Topic = {}));
var ListTopicsResponse;
(function (ListTopicsResponse) {
    /**
     * @internal
     */
    ListTopicsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTopicsResponse = exports.ListTopicsResponse || (exports.ListTopicsResponse = {}));
var OptInPhoneNumberInput;
(function (OptInPhoneNumberInput) {
    /**
     * @internal
     */
    OptInPhoneNumberInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptInPhoneNumberInput = exports.OptInPhoneNumberInput || (exports.OptInPhoneNumberInput = {}));
var OptInPhoneNumberResponse;
(function (OptInPhoneNumberResponse) {
    /**
     * @internal
     */
    OptInPhoneNumberResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptInPhoneNumberResponse = exports.OptInPhoneNumberResponse || (exports.OptInPhoneNumberResponse = {}));
var EndpointDisabledException;
(function (EndpointDisabledException) {
    /**
     * @internal
     */
    EndpointDisabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointDisabledException = exports.EndpointDisabledException || (exports.EndpointDisabledException = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var KMSAccessDeniedException;
(function (KMSAccessDeniedException) {
    /**
     * @internal
     */
    KMSAccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSAccessDeniedException = exports.KMSAccessDeniedException || (exports.KMSAccessDeniedException = {}));
var KMSDisabledException;
(function (KMSDisabledException) {
    /**
     * @internal
     */
    KMSDisabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSDisabledException = exports.KMSDisabledException || (exports.KMSDisabledException = {}));
var KMSInvalidStateException;
(function (KMSInvalidStateException) {
    /**
     * @internal
     */
    KMSInvalidStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSInvalidStateException = exports.KMSInvalidStateException || (exports.KMSInvalidStateException = {}));
var KMSNotFoundException;
(function (KMSNotFoundException) {
    /**
     * @internal
     */
    KMSNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSNotFoundException = exports.KMSNotFoundException || (exports.KMSNotFoundException = {}));
var KMSOptInRequired;
(function (KMSOptInRequired) {
    /**
     * @internal
     */
    KMSOptInRequired.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSOptInRequired = exports.KMSOptInRequired || (exports.KMSOptInRequired = {}));
var KMSThrottlingException;
(function (KMSThrottlingException) {
    /**
     * @internal
     */
    KMSThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSThrottlingException = exports.KMSThrottlingException || (exports.KMSThrottlingException = {}));
var PlatformApplicationDisabledException;
(function (PlatformApplicationDisabledException) {
    /**
     * @internal
     */
    PlatformApplicationDisabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlatformApplicationDisabledException = exports.PlatformApplicationDisabledException || (exports.PlatformApplicationDisabledException = {}));
var MessageAttributeValue;
(function (MessageAttributeValue) {
    /**
     * @internal
     */
    MessageAttributeValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageAttributeValue = exports.MessageAttributeValue || (exports.MessageAttributeValue = {}));
var PublishInput;
(function (PublishInput) {
    /**
     * @internal
     */
    PublishInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublishInput = exports.PublishInput || (exports.PublishInput = {}));
var PublishResponse;
(function (PublishResponse) {
    /**
     * @internal
     */
    PublishResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublishResponse = exports.PublishResponse || (exports.PublishResponse = {}));
var RemovePermissionInput;
(function (RemovePermissionInput) {
    /**
     * @internal
     */
    RemovePermissionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemovePermissionInput = exports.RemovePermissionInput || (exports.RemovePermissionInput = {}));
var SetEndpointAttributesInput;
(function (SetEndpointAttributesInput) {
    /**
     * @internal
     */
    SetEndpointAttributesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetEndpointAttributesInput = exports.SetEndpointAttributesInput || (exports.SetEndpointAttributesInput = {}));
var SetPlatformApplicationAttributesInput;
(function (SetPlatformApplicationAttributesInput) {
    /**
     * @internal
     */
    SetPlatformApplicationAttributesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetPlatformApplicationAttributesInput = exports.SetPlatformApplicationAttributesInput || (exports.SetPlatformApplicationAttributesInput = {}));
var SetSMSAttributesInput;
(function (SetSMSAttributesInput) {
    /**
     * @internal
     */
    SetSMSAttributesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetSMSAttributesInput = exports.SetSMSAttributesInput || (exports.SetSMSAttributesInput = {}));
var SetSMSAttributesResponse;
(function (SetSMSAttributesResponse) {
    /**
     * @internal
     */
    SetSMSAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetSMSAttributesResponse = exports.SetSMSAttributesResponse || (exports.SetSMSAttributesResponse = {}));
var SetSubscriptionAttributesInput;
(function (SetSubscriptionAttributesInput) {
    /**
     * @internal
     */
    SetSubscriptionAttributesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetSubscriptionAttributesInput = exports.SetSubscriptionAttributesInput || (exports.SetSubscriptionAttributesInput = {}));
var SetTopicAttributesInput;
(function (SetTopicAttributesInput) {
    /**
     * @internal
     */
    SetTopicAttributesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetTopicAttributesInput = exports.SetTopicAttributesInput || (exports.SetTopicAttributesInput = {}));
var SubscribeInput;
(function (SubscribeInput) {
    /**
     * @internal
     */
    SubscribeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscribeInput = exports.SubscribeInput || (exports.SubscribeInput = {}));
var SubscribeResponse;
(function (SubscribeResponse) {
    /**
     * @internal
     */
    SubscribeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscribeResponse = exports.SubscribeResponse || (exports.SubscribeResponse = {}));
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
var UnsubscribeInput;
(function (UnsubscribeInput) {
    /**
     * @internal
     */
    UnsubscribeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsubscribeInput = exports.UnsubscribeInput || (exports.UnsubscribeInput = {}));
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
var VerificationException;
(function (VerificationException) {
    /**
     * @internal
     */
    VerificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VerificationException = exports.VerificationException || (exports.VerificationException = {}));
var VerifySMSSandboxPhoneNumberInput;
(function (VerifySMSSandboxPhoneNumberInput) {
    /**
     * @internal
     */
    VerifySMSSandboxPhoneNumberInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VerifySMSSandboxPhoneNumberInput = exports.VerifySMSSandboxPhoneNumberInput || (exports.VerifySMSSandboxPhoneNumberInput = {}));
var VerifySMSSandboxPhoneNumberResult;
(function (VerifySMSSandboxPhoneNumberResult) {
    /**
     * @internal
     */
    VerifySMSSandboxPhoneNumberResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VerifySMSSandboxPhoneNumberResult = exports.VerifySMSSandboxPhoneNumberResult || (exports.VerifySMSSandboxPhoneNumberResult = {}));
//# sourceMappingURL=models_0.js.map