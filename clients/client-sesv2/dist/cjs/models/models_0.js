"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDestinationDefinition = exports.SnsDestination = exports.PinpointDestination = exports.EventType = exports.KinesisFirehoseDestination = exports.TooManyRequestsException = exports.NotFoundException = exports.LimitExceededException = exports.CreateConfigurationSetResponse = exports.CreateConfigurationSetRequest = exports.TrackingOptions = exports.Tag = exports.SuppressionOptions = exports.SuppressionListReason = exports.SendingOptions = exports.ReputationOptions = exports.DeliveryOptions = exports.TlsPolicy = exports.ContactListDestination = exports.ContactListImportAction = exports.ContactList = exports.Contact = exports.TopicPreference = exports.SubscriptionStatus = exports.ConflictException = exports.ConcurrentModificationException = exports.CloudWatchDestination = exports.CloudWatchDimensionConfiguration = exports.DimensionValueSource = exports.BulkEmailEntryResult = exports.BulkEmailStatus = exports.BulkEmailEntry = exports.MessageTag = exports.ReplacementEmailContent = exports.ReplacementTemplate = exports.Destination = exports.BulkEmailContent = exports.Template = exports.Body = exports.Content = exports.BlacklistEntry = exports.BehaviorOnMxFailure = exports.BadRequestException = exports.AlreadyExistsException = exports.AccountSuspendedException = exports.AccountDetails = exports.ReviewDetails = exports.ReviewStatus = exports.MailType = exports.ContactLanguage = void 0;
exports.DeleteContactRequest = exports.DeleteConfigurationSetEventDestinationResponse = exports.DeleteConfigurationSetEventDestinationRequest = exports.DeleteConfigurationSetResponse = exports.DeleteConfigurationSetRequest = exports.DedicatedIp = exports.WarmupStatus = exports.DailyVolume = exports.VolumeStatistics = exports.DomainIspPlacement = exports.CustomVerificationEmailTemplateMetadata = exports.CreateImportJobResponse = exports.CreateImportJobRequest = exports.ImportDestination = exports.SuppressionListDestination = exports.SuppressionListImportAction = exports.ImportDataSource = exports.DataFormat = exports.CreateEmailTemplateResponse = exports.CreateEmailTemplateRequest = exports.EmailTemplateContent = exports.CreateEmailIdentityPolicyResponse = exports.CreateEmailIdentityPolicyRequest = exports.CreateEmailIdentityResponse = exports.IdentityType = exports.DkimAttributes = exports.DkimStatus = exports.DkimSigningAttributesOrigin = exports.CreateEmailIdentityRequest = exports.DkimSigningAttributes = exports.SendingPausedException = exports.MessageRejected = exports.MailFromDomainNotVerifiedException = exports.CreateDeliverabilityTestReportResponse = exports.DeliverabilityTestStatus = exports.CreateDeliverabilityTestReportRequest = exports.EmailContent = exports.Message = exports.RawMessage = exports.CreateDedicatedIpPoolResponse = exports.CreateDedicatedIpPoolRequest = exports.CreateCustomVerificationEmailTemplateResponse = exports.CreateCustomVerificationEmailTemplateRequest = exports.CreateContactListResponse = exports.CreateContactListRequest = exports.Topic = exports.CreateContactResponse = exports.CreateContactRequest = exports.CreateConfigurationSetEventDestinationResponse = exports.CreateConfigurationSetEventDestinationRequest = void 0;
exports.GetDomainDeliverabilityCampaignRequest = exports.GetDeliverabilityTestReportResponse = exports.IspPlacement = exports.PlacementStatistics = exports.GetDeliverabilityTestReportRequest = exports.GetDeliverabilityDashboardOptionsResponse = exports.GetDeliverabilityDashboardOptionsRequest = exports.GetDedicatedIpsResponse = exports.GetDedicatedIpsRequest = exports.GetDedicatedIpResponse = exports.GetDedicatedIpRequest = exports.GetCustomVerificationEmailTemplateResponse = exports.GetCustomVerificationEmailTemplateRequest = exports.GetContactListResponse = exports.GetContactListRequest = exports.GetContactResponse = exports.GetContactRequest = exports.GetConfigurationSetEventDestinationsResponse = exports.GetConfigurationSetEventDestinationsRequest = exports.GetConfigurationSetResponse = exports.GetConfigurationSetRequest = exports.GetBlacklistReportsResponse = exports.GetBlacklistReportsRequest = exports.GetAccountResponse = exports.SuppressionAttributes = exports.SendQuota = exports.GetAccountRequest = exports.FailureInfo = exports.EventDestination = exports.EmailTemplateMetadata = exports.DomainDeliverabilityTrackingOption = exports.InboxPlacementTrackingOption = exports.DomainDeliverabilityCampaign = exports.DeliverabilityTestReport = exports.DeliverabilityDashboardAccountStatus = exports.DeleteSuppressedDestinationResponse = exports.DeleteSuppressedDestinationRequest = exports.DeleteEmailTemplateResponse = exports.DeleteEmailTemplateRequest = exports.DeleteEmailIdentityPolicyResponse = exports.DeleteEmailIdentityPolicyRequest = exports.DeleteEmailIdentityResponse = exports.DeleteEmailIdentityRequest = exports.DeleteDedicatedIpPoolResponse = exports.DeleteDedicatedIpPoolRequest = exports.DeleteCustomVerificationEmailTemplateResponse = exports.DeleteCustomVerificationEmailTemplateRequest = exports.DeleteContactListResponse = exports.DeleteContactListRequest = exports.DeleteContactResponse = void 0;
exports.ListTagsForResourceRequest = exports.ListSuppressedDestinationsResponse = exports.SuppressedDestinationSummary = exports.ListSuppressedDestinationsRequest = exports.ListManagementOptions = exports.ListImportJobsResponse = exports.ListImportJobsRequest = exports.ListEmailTemplatesResponse = exports.ListEmailTemplatesRequest = exports.ListEmailIdentitiesResponse = exports.ListEmailIdentitiesRequest = exports.ListDomainDeliverabilityCampaignsResponse = exports.ListDomainDeliverabilityCampaignsRequest = exports.ListDeliverabilityTestReportsResponse = exports.ListDeliverabilityTestReportsRequest = exports.ListDedicatedIpPoolsResponse = exports.ListDedicatedIpPoolsRequest = exports.ListCustomVerificationEmailTemplatesResponse = exports.ListCustomVerificationEmailTemplatesRequest = exports.ListContactsResponse = exports.ListContactsRequest = exports.ListContactsFilter = exports.TopicFilter = exports.ListContactListsResponse = exports.ListContactListsRequest = exports.ListConfigurationSetsResponse = exports.ListConfigurationSetsRequest = exports.InvalidNextTokenException = exports.ImportJobSummary = exports.ImportDestinationType = exports.IdentityInfo = exports.GetSuppressedDestinationResponse = exports.SuppressedDestination = exports.SuppressedDestinationAttributes = exports.GetSuppressedDestinationRequest = exports.GetImportJobResponse = exports.JobStatus = exports.GetImportJobRequest = exports.GetEmailTemplateResponse = exports.GetEmailTemplateRequest = exports.GetEmailIdentityPoliciesResponse = exports.GetEmailIdentityPoliciesRequest = exports.GetEmailIdentityResponse = exports.MailFromAttributes = exports.MailFromDomainStatus = exports.GetEmailIdentityRequest = exports.GetDomainStatisticsReportResponse = exports.OverallVolume = exports.GetDomainStatisticsReportRequest = exports.GetDomainDeliverabilityCampaignResponse = void 0;
exports.UpdateConfigurationSetEventDestinationRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TestRenderEmailTemplateResponse = exports.TestRenderEmailTemplateRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.SendEmailResponse = exports.SendEmailRequest = exports.SendCustomVerificationEmailResponse = exports.SendCustomVerificationEmailRequest = exports.SendBulkEmailResponse = exports.SendBulkEmailRequest = exports.PutSuppressedDestinationResponse = exports.PutSuppressedDestinationRequest = exports.PutEmailIdentityMailFromAttributesResponse = exports.PutEmailIdentityMailFromAttributesRequest = exports.PutEmailIdentityFeedbackAttributesResponse = exports.PutEmailIdentityFeedbackAttributesRequest = exports.PutEmailIdentityDkimSigningAttributesResponse = exports.PutEmailIdentityDkimSigningAttributesRequest = exports.PutEmailIdentityDkimAttributesResponse = exports.PutEmailIdentityDkimAttributesRequest = exports.PutEmailIdentityConfigurationSetAttributesResponse = exports.PutEmailIdentityConfigurationSetAttributesRequest = exports.PutDeliverabilityDashboardOptionResponse = exports.PutDeliverabilityDashboardOptionRequest = exports.PutDedicatedIpWarmupAttributesResponse = exports.PutDedicatedIpWarmupAttributesRequest = exports.PutDedicatedIpInPoolResponse = exports.PutDedicatedIpInPoolRequest = exports.PutConfigurationSetTrackingOptionsResponse = exports.PutConfigurationSetTrackingOptionsRequest = exports.PutConfigurationSetSuppressionOptionsResponse = exports.PutConfigurationSetSuppressionOptionsRequest = exports.PutConfigurationSetSendingOptionsResponse = exports.PutConfigurationSetSendingOptionsRequest = exports.PutConfigurationSetReputationOptionsResponse = exports.PutConfigurationSetReputationOptionsRequest = exports.PutConfigurationSetDeliveryOptionsResponse = exports.PutConfigurationSetDeliveryOptionsRequest = exports.PutAccountSuppressionAttributesResponse = exports.PutAccountSuppressionAttributesRequest = exports.PutAccountSendingAttributesResponse = exports.PutAccountSendingAttributesRequest = exports.PutAccountDetailsResponse = exports.PutAccountDetailsRequest = exports.PutAccountDedicatedIpWarmupAttributesResponse = exports.PutAccountDedicatedIpWarmupAttributesRequest = exports.ListTagsForResourceResponse = void 0;
exports.UpdateEmailTemplateResponse = exports.UpdateEmailTemplateRequest = exports.UpdateEmailIdentityPolicyResponse = exports.UpdateEmailIdentityPolicyRequest = exports.UpdateCustomVerificationEmailTemplateResponse = exports.UpdateCustomVerificationEmailTemplateRequest = exports.UpdateContactListResponse = exports.UpdateContactListRequest = exports.UpdateContactResponse = exports.UpdateContactRequest = exports.UpdateConfigurationSetEventDestinationResponse = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ContactLanguage;
(function (ContactLanguage) {
    ContactLanguage["EN"] = "EN";
    ContactLanguage["JA"] = "JA";
})(ContactLanguage = exports.ContactLanguage || (exports.ContactLanguage = {}));
var MailType;
(function (MailType) {
    MailType["MARKETING"] = "MARKETING";
    MailType["TRANSACTIONAL"] = "TRANSACTIONAL";
})(MailType = exports.MailType || (exports.MailType = {}));
var ReviewStatus;
(function (ReviewStatus) {
    ReviewStatus["DENIED"] = "DENIED";
    ReviewStatus["FAILED"] = "FAILED";
    ReviewStatus["GRANTED"] = "GRANTED";
    ReviewStatus["PENDING"] = "PENDING";
})(ReviewStatus = exports.ReviewStatus || (exports.ReviewStatus = {}));
var ReviewDetails;
(function (ReviewDetails) {
    /**
     * @internal
     */
    ReviewDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReviewDetails = exports.ReviewDetails || (exports.ReviewDetails = {}));
var AccountDetails;
(function (AccountDetails) {
    /**
     * @internal
     */
    AccountDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.WebsiteURL && { WebsiteURL: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.UseCaseDescription && { UseCaseDescription: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.AdditionalContactEmailAddresses && { AdditionalContactEmailAddresses: smithy_client_1.SENSITIVE_STRING }),
    });
})(AccountDetails = exports.AccountDetails || (exports.AccountDetails = {}));
var AccountSuspendedException;
(function (AccountSuspendedException) {
    /**
     * @internal
     */
    AccountSuspendedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountSuspendedException = exports.AccountSuspendedException || (exports.AccountSuspendedException = {}));
var AlreadyExistsException;
(function (AlreadyExistsException) {
    /**
     * @internal
     */
    AlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlreadyExistsException = exports.AlreadyExistsException || (exports.AlreadyExistsException = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var BehaviorOnMxFailure;
(function (BehaviorOnMxFailure) {
    BehaviorOnMxFailure["REJECT_MESSAGE"] = "REJECT_MESSAGE";
    BehaviorOnMxFailure["USE_DEFAULT_VALUE"] = "USE_DEFAULT_VALUE";
})(BehaviorOnMxFailure = exports.BehaviorOnMxFailure || (exports.BehaviorOnMxFailure = {}));
var BlacklistEntry;
(function (BlacklistEntry) {
    /**
     * @internal
     */
    BlacklistEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlacklistEntry = exports.BlacklistEntry || (exports.BlacklistEntry = {}));
var Content;
(function (Content) {
    /**
     * @internal
     */
    Content.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Content = exports.Content || (exports.Content = {}));
var Body;
(function (Body) {
    /**
     * @internal
     */
    Body.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Body = exports.Body || (exports.Body = {}));
var Template;
(function (Template) {
    /**
     * @internal
     */
    Template.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Template = exports.Template || (exports.Template = {}));
var BulkEmailContent;
(function (BulkEmailContent) {
    /**
     * @internal
     */
    BulkEmailContent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BulkEmailContent = exports.BulkEmailContent || (exports.BulkEmailContent = {}));
var Destination;
(function (Destination) {
    /**
     * @internal
     */
    Destination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Destination = exports.Destination || (exports.Destination = {}));
var ReplacementTemplate;
(function (ReplacementTemplate) {
    /**
     * @internal
     */
    ReplacementTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplacementTemplate = exports.ReplacementTemplate || (exports.ReplacementTemplate = {}));
var ReplacementEmailContent;
(function (ReplacementEmailContent) {
    /**
     * @internal
     */
    ReplacementEmailContent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplacementEmailContent = exports.ReplacementEmailContent || (exports.ReplacementEmailContent = {}));
var MessageTag;
(function (MessageTag) {
    /**
     * @internal
     */
    MessageTag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageTag = exports.MessageTag || (exports.MessageTag = {}));
var BulkEmailEntry;
(function (BulkEmailEntry) {
    /**
     * @internal
     */
    BulkEmailEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BulkEmailEntry = exports.BulkEmailEntry || (exports.BulkEmailEntry = {}));
var BulkEmailStatus;
(function (BulkEmailStatus) {
    BulkEmailStatus["ACCOUNT_DAILY_QUOTA_EXCEEDED"] = "ACCOUNT_DAILY_QUOTA_EXCEEDED";
    BulkEmailStatus["ACCOUNT_SENDING_PAUSED"] = "ACCOUNT_SENDING_PAUSED";
    BulkEmailStatus["ACCOUNT_SUSPENDED"] = "ACCOUNT_SUSPENDED";
    BulkEmailStatus["ACCOUNT_THROTTLED"] = "ACCOUNT_THROTTLED";
    BulkEmailStatus["CONFIGURATION_SET_NOT_FOUND"] = "CONFIGURATION_SET_NOT_FOUND";
    BulkEmailStatus["CONFIGURATION_SET_SENDING_PAUSED"] = "CONFIGURATION_SET_SENDING_PAUSED";
    BulkEmailStatus["FAILED"] = "FAILED";
    BulkEmailStatus["INVALID_PARAMETER"] = "INVALID_PARAMETER";
    BulkEmailStatus["INVALID_SENDING_POOL_NAME"] = "INVALID_SENDING_POOL_NAME";
    BulkEmailStatus["MAIL_FROM_DOMAIN_NOT_VERIFIED"] = "MAIL_FROM_DOMAIN_NOT_VERIFIED";
    BulkEmailStatus["MESSAGE_REJECTED"] = "MESSAGE_REJECTED";
    BulkEmailStatus["SUCCESS"] = "SUCCESS";
    BulkEmailStatus["TEMPLATE_NOT_FOUND"] = "TEMPLATE_NOT_FOUND";
    BulkEmailStatus["TRANSIENT_FAILURE"] = "TRANSIENT_FAILURE";
})(BulkEmailStatus = exports.BulkEmailStatus || (exports.BulkEmailStatus = {}));
var BulkEmailEntryResult;
(function (BulkEmailEntryResult) {
    /**
     * @internal
     */
    BulkEmailEntryResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BulkEmailEntryResult = exports.BulkEmailEntryResult || (exports.BulkEmailEntryResult = {}));
var DimensionValueSource;
(function (DimensionValueSource) {
    DimensionValueSource["EMAIL_HEADER"] = "EMAIL_HEADER";
    DimensionValueSource["LINK_TAG"] = "LINK_TAG";
    DimensionValueSource["MESSAGE_TAG"] = "MESSAGE_TAG";
})(DimensionValueSource = exports.DimensionValueSource || (exports.DimensionValueSource = {}));
var CloudWatchDimensionConfiguration;
(function (CloudWatchDimensionConfiguration) {
    /**
     * @internal
     */
    CloudWatchDimensionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchDimensionConfiguration = exports.CloudWatchDimensionConfiguration || (exports.CloudWatchDimensionConfiguration = {}));
var CloudWatchDestination;
(function (CloudWatchDestination) {
    /**
     * @internal
     */
    CloudWatchDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchDestination = exports.CloudWatchDestination || (exports.CloudWatchDestination = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["OPT_IN"] = "OPT_IN";
    SubscriptionStatus["OPT_OUT"] = "OPT_OUT";
})(SubscriptionStatus = exports.SubscriptionStatus || (exports.SubscriptionStatus = {}));
var TopicPreference;
(function (TopicPreference) {
    /**
     * @internal
     */
    TopicPreference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TopicPreference = exports.TopicPreference || (exports.TopicPreference = {}));
var Contact;
(function (Contact) {
    /**
     * @internal
     */
    Contact.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Contact = exports.Contact || (exports.Contact = {}));
var ContactList;
(function (ContactList) {
    /**
     * @internal
     */
    ContactList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContactList = exports.ContactList || (exports.ContactList = {}));
var ContactListImportAction;
(function (ContactListImportAction) {
    ContactListImportAction["DELETE"] = "DELETE";
    ContactListImportAction["PUT"] = "PUT";
})(ContactListImportAction = exports.ContactListImportAction || (exports.ContactListImportAction = {}));
var ContactListDestination;
(function (ContactListDestination) {
    /**
     * @internal
     */
    ContactListDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContactListDestination = exports.ContactListDestination || (exports.ContactListDestination = {}));
var TlsPolicy;
(function (TlsPolicy) {
    TlsPolicy["OPTIONAL"] = "OPTIONAL";
    TlsPolicy["REQUIRE"] = "REQUIRE";
})(TlsPolicy = exports.TlsPolicy || (exports.TlsPolicy = {}));
var DeliveryOptions;
(function (DeliveryOptions) {
    /**
     * @internal
     */
    DeliveryOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeliveryOptions = exports.DeliveryOptions || (exports.DeliveryOptions = {}));
var ReputationOptions;
(function (ReputationOptions) {
    /**
     * @internal
     */
    ReputationOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReputationOptions = exports.ReputationOptions || (exports.ReputationOptions = {}));
var SendingOptions;
(function (SendingOptions) {
    /**
     * @internal
     */
    SendingOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendingOptions = exports.SendingOptions || (exports.SendingOptions = {}));
var SuppressionListReason;
(function (SuppressionListReason) {
    SuppressionListReason["BOUNCE"] = "BOUNCE";
    SuppressionListReason["COMPLAINT"] = "COMPLAINT";
})(SuppressionListReason = exports.SuppressionListReason || (exports.SuppressionListReason = {}));
var SuppressionOptions;
(function (SuppressionOptions) {
    /**
     * @internal
     */
    SuppressionOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuppressionOptions = exports.SuppressionOptions || (exports.SuppressionOptions = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var TrackingOptions;
(function (TrackingOptions) {
    /**
     * @internal
     */
    TrackingOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrackingOptions = exports.TrackingOptions || (exports.TrackingOptions = {}));
var CreateConfigurationSetRequest;
(function (CreateConfigurationSetRequest) {
    /**
     * @internal
     */
    CreateConfigurationSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConfigurationSetRequest = exports.CreateConfigurationSetRequest || (exports.CreateConfigurationSetRequest = {}));
var CreateConfigurationSetResponse;
(function (CreateConfigurationSetResponse) {
    /**
     * @internal
     */
    CreateConfigurationSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConfigurationSetResponse = exports.CreateConfigurationSetResponse || (exports.CreateConfigurationSetResponse = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var KinesisFirehoseDestination;
(function (KinesisFirehoseDestination) {
    /**
     * @internal
     */
    KinesisFirehoseDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisFirehoseDestination = exports.KinesisFirehoseDestination || (exports.KinesisFirehoseDestination = {}));
var EventType;
(function (EventType) {
    EventType["BOUNCE"] = "BOUNCE";
    EventType["CLICK"] = "CLICK";
    EventType["COMPLAINT"] = "COMPLAINT";
    EventType["DELIVERY"] = "DELIVERY";
    EventType["DELIVERY_DELAY"] = "DELIVERY_DELAY";
    EventType["OPEN"] = "OPEN";
    EventType["REJECT"] = "REJECT";
    EventType["RENDERING_FAILURE"] = "RENDERING_FAILURE";
    EventType["SEND"] = "SEND";
    EventType["SUBSCRIPTION"] = "SUBSCRIPTION";
})(EventType = exports.EventType || (exports.EventType = {}));
var PinpointDestination;
(function (PinpointDestination) {
    /**
     * @internal
     */
    PinpointDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PinpointDestination = exports.PinpointDestination || (exports.PinpointDestination = {}));
var SnsDestination;
(function (SnsDestination) {
    /**
     * @internal
     */
    SnsDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnsDestination = exports.SnsDestination || (exports.SnsDestination = {}));
var EventDestinationDefinition;
(function (EventDestinationDefinition) {
    /**
     * @internal
     */
    EventDestinationDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventDestinationDefinition = exports.EventDestinationDefinition || (exports.EventDestinationDefinition = {}));
var CreateConfigurationSetEventDestinationRequest;
(function (CreateConfigurationSetEventDestinationRequest) {
    /**
     * @internal
     */
    CreateConfigurationSetEventDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConfigurationSetEventDestinationRequest = exports.CreateConfigurationSetEventDestinationRequest || (exports.CreateConfigurationSetEventDestinationRequest = {}));
var CreateConfigurationSetEventDestinationResponse;
(function (CreateConfigurationSetEventDestinationResponse) {
    /**
     * @internal
     */
    CreateConfigurationSetEventDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConfigurationSetEventDestinationResponse = exports.CreateConfigurationSetEventDestinationResponse || (exports.CreateConfigurationSetEventDestinationResponse = {}));
var CreateContactRequest;
(function (CreateContactRequest) {
    /**
     * @internal
     */
    CreateContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContactRequest = exports.CreateContactRequest || (exports.CreateContactRequest = {}));
var CreateContactResponse;
(function (CreateContactResponse) {
    /**
     * @internal
     */
    CreateContactResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContactResponse = exports.CreateContactResponse || (exports.CreateContactResponse = {}));
var Topic;
(function (Topic) {
    /**
     * @internal
     */
    Topic.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Topic = exports.Topic || (exports.Topic = {}));
var CreateContactListRequest;
(function (CreateContactListRequest) {
    /**
     * @internal
     */
    CreateContactListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContactListRequest = exports.CreateContactListRequest || (exports.CreateContactListRequest = {}));
var CreateContactListResponse;
(function (CreateContactListResponse) {
    /**
     * @internal
     */
    CreateContactListResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContactListResponse = exports.CreateContactListResponse || (exports.CreateContactListResponse = {}));
var CreateCustomVerificationEmailTemplateRequest;
(function (CreateCustomVerificationEmailTemplateRequest) {
    /**
     * @internal
     */
    CreateCustomVerificationEmailTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomVerificationEmailTemplateRequest = exports.CreateCustomVerificationEmailTemplateRequest || (exports.CreateCustomVerificationEmailTemplateRequest = {}));
var CreateCustomVerificationEmailTemplateResponse;
(function (CreateCustomVerificationEmailTemplateResponse) {
    /**
     * @internal
     */
    CreateCustomVerificationEmailTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomVerificationEmailTemplateResponse = exports.CreateCustomVerificationEmailTemplateResponse || (exports.CreateCustomVerificationEmailTemplateResponse = {}));
var CreateDedicatedIpPoolRequest;
(function (CreateDedicatedIpPoolRequest) {
    /**
     * @internal
     */
    CreateDedicatedIpPoolRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDedicatedIpPoolRequest = exports.CreateDedicatedIpPoolRequest || (exports.CreateDedicatedIpPoolRequest = {}));
var CreateDedicatedIpPoolResponse;
(function (CreateDedicatedIpPoolResponse) {
    /**
     * @internal
     */
    CreateDedicatedIpPoolResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDedicatedIpPoolResponse = exports.CreateDedicatedIpPoolResponse || (exports.CreateDedicatedIpPoolResponse = {}));
var RawMessage;
(function (RawMessage) {
    /**
     * @internal
     */
    RawMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RawMessage = exports.RawMessage || (exports.RawMessage = {}));
var Message;
(function (Message) {
    /**
     * @internal
     */
    Message.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Message = exports.Message || (exports.Message = {}));
var EmailContent;
(function (EmailContent) {
    /**
     * @internal
     */
    EmailContent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmailContent = exports.EmailContent || (exports.EmailContent = {}));
var CreateDeliverabilityTestReportRequest;
(function (CreateDeliverabilityTestReportRequest) {
    /**
     * @internal
     */
    CreateDeliverabilityTestReportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeliverabilityTestReportRequest = exports.CreateDeliverabilityTestReportRequest || (exports.CreateDeliverabilityTestReportRequest = {}));
var DeliverabilityTestStatus;
(function (DeliverabilityTestStatus) {
    DeliverabilityTestStatus["COMPLETED"] = "COMPLETED";
    DeliverabilityTestStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(DeliverabilityTestStatus = exports.DeliverabilityTestStatus || (exports.DeliverabilityTestStatus = {}));
var CreateDeliverabilityTestReportResponse;
(function (CreateDeliverabilityTestReportResponse) {
    /**
     * @internal
     */
    CreateDeliverabilityTestReportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDeliverabilityTestReportResponse = exports.CreateDeliverabilityTestReportResponse || (exports.CreateDeliverabilityTestReportResponse = {}));
var MailFromDomainNotVerifiedException;
(function (MailFromDomainNotVerifiedException) {
    /**
     * @internal
     */
    MailFromDomainNotVerifiedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MailFromDomainNotVerifiedException = exports.MailFromDomainNotVerifiedException || (exports.MailFromDomainNotVerifiedException = {}));
var MessageRejected;
(function (MessageRejected) {
    /**
     * @internal
     */
    MessageRejected.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageRejected = exports.MessageRejected || (exports.MessageRejected = {}));
var SendingPausedException;
(function (SendingPausedException) {
    /**
     * @internal
     */
    SendingPausedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendingPausedException = exports.SendingPausedException || (exports.SendingPausedException = {}));
var DkimSigningAttributes;
(function (DkimSigningAttributes) {
    /**
     * @internal
     */
    DkimSigningAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DomainSigningPrivateKey && { DomainSigningPrivateKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(DkimSigningAttributes = exports.DkimSigningAttributes || (exports.DkimSigningAttributes = {}));
var CreateEmailIdentityRequest;
(function (CreateEmailIdentityRequest) {
    /**
     * @internal
     */
    CreateEmailIdentityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DkimSigningAttributes && {
            DkimSigningAttributes: DkimSigningAttributes.filterSensitiveLog(obj.DkimSigningAttributes),
        }),
    });
})(CreateEmailIdentityRequest = exports.CreateEmailIdentityRequest || (exports.CreateEmailIdentityRequest = {}));
var DkimSigningAttributesOrigin;
(function (DkimSigningAttributesOrigin) {
    DkimSigningAttributesOrigin["AWS_SES"] = "AWS_SES";
    DkimSigningAttributesOrigin["EXTERNAL"] = "EXTERNAL";
})(DkimSigningAttributesOrigin = exports.DkimSigningAttributesOrigin || (exports.DkimSigningAttributesOrigin = {}));
var DkimStatus;
(function (DkimStatus) {
    DkimStatus["FAILED"] = "FAILED";
    DkimStatus["NOT_STARTED"] = "NOT_STARTED";
    DkimStatus["PENDING"] = "PENDING";
    DkimStatus["SUCCESS"] = "SUCCESS";
    DkimStatus["TEMPORARY_FAILURE"] = "TEMPORARY_FAILURE";
})(DkimStatus = exports.DkimStatus || (exports.DkimStatus = {}));
var DkimAttributes;
(function (DkimAttributes) {
    /**
     * @internal
     */
    DkimAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DkimAttributes = exports.DkimAttributes || (exports.DkimAttributes = {}));
var IdentityType;
(function (IdentityType) {
    IdentityType["DOMAIN"] = "DOMAIN";
    IdentityType["EMAIL_ADDRESS"] = "EMAIL_ADDRESS";
    IdentityType["MANAGED_DOMAIN"] = "MANAGED_DOMAIN";
})(IdentityType = exports.IdentityType || (exports.IdentityType = {}));
var CreateEmailIdentityResponse;
(function (CreateEmailIdentityResponse) {
    /**
     * @internal
     */
    CreateEmailIdentityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEmailIdentityResponse = exports.CreateEmailIdentityResponse || (exports.CreateEmailIdentityResponse = {}));
var CreateEmailIdentityPolicyRequest;
(function (CreateEmailIdentityPolicyRequest) {
    /**
     * @internal
     */
    CreateEmailIdentityPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEmailIdentityPolicyRequest = exports.CreateEmailIdentityPolicyRequest || (exports.CreateEmailIdentityPolicyRequest = {}));
var CreateEmailIdentityPolicyResponse;
(function (CreateEmailIdentityPolicyResponse) {
    /**
     * @internal
     */
    CreateEmailIdentityPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEmailIdentityPolicyResponse = exports.CreateEmailIdentityPolicyResponse || (exports.CreateEmailIdentityPolicyResponse = {}));
var EmailTemplateContent;
(function (EmailTemplateContent) {
    /**
     * @internal
     */
    EmailTemplateContent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmailTemplateContent = exports.EmailTemplateContent || (exports.EmailTemplateContent = {}));
var CreateEmailTemplateRequest;
(function (CreateEmailTemplateRequest) {
    /**
     * @internal
     */
    CreateEmailTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEmailTemplateRequest = exports.CreateEmailTemplateRequest || (exports.CreateEmailTemplateRequest = {}));
var CreateEmailTemplateResponse;
(function (CreateEmailTemplateResponse) {
    /**
     * @internal
     */
    CreateEmailTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEmailTemplateResponse = exports.CreateEmailTemplateResponse || (exports.CreateEmailTemplateResponse = {}));
var DataFormat;
(function (DataFormat) {
    DataFormat["CSV"] = "CSV";
    DataFormat["JSON"] = "JSON";
})(DataFormat = exports.DataFormat || (exports.DataFormat = {}));
var ImportDataSource;
(function (ImportDataSource) {
    /**
     * @internal
     */
    ImportDataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportDataSource = exports.ImportDataSource || (exports.ImportDataSource = {}));
var SuppressionListImportAction;
(function (SuppressionListImportAction) {
    SuppressionListImportAction["DELETE"] = "DELETE";
    SuppressionListImportAction["PUT"] = "PUT";
})(SuppressionListImportAction = exports.SuppressionListImportAction || (exports.SuppressionListImportAction = {}));
var SuppressionListDestination;
(function (SuppressionListDestination) {
    /**
     * @internal
     */
    SuppressionListDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuppressionListDestination = exports.SuppressionListDestination || (exports.SuppressionListDestination = {}));
var ImportDestination;
(function (ImportDestination) {
    /**
     * @internal
     */
    ImportDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportDestination = exports.ImportDestination || (exports.ImportDestination = {}));
var CreateImportJobRequest;
(function (CreateImportJobRequest) {
    /**
     * @internal
     */
    CreateImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImportJobRequest = exports.CreateImportJobRequest || (exports.CreateImportJobRequest = {}));
var CreateImportJobResponse;
(function (CreateImportJobResponse) {
    /**
     * @internal
     */
    CreateImportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImportJobResponse = exports.CreateImportJobResponse || (exports.CreateImportJobResponse = {}));
var CustomVerificationEmailTemplateMetadata;
(function (CustomVerificationEmailTemplateMetadata) {
    /**
     * @internal
     */
    CustomVerificationEmailTemplateMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomVerificationEmailTemplateMetadata = exports.CustomVerificationEmailTemplateMetadata || (exports.CustomVerificationEmailTemplateMetadata = {}));
var DomainIspPlacement;
(function (DomainIspPlacement) {
    /**
     * @internal
     */
    DomainIspPlacement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainIspPlacement = exports.DomainIspPlacement || (exports.DomainIspPlacement = {}));
var VolumeStatistics;
(function (VolumeStatistics) {
    /**
     * @internal
     */
    VolumeStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VolumeStatistics = exports.VolumeStatistics || (exports.VolumeStatistics = {}));
var DailyVolume;
(function (DailyVolume) {
    /**
     * @internal
     */
    DailyVolume.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DailyVolume = exports.DailyVolume || (exports.DailyVolume = {}));
var WarmupStatus;
(function (WarmupStatus) {
    WarmupStatus["DONE"] = "DONE";
    WarmupStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(WarmupStatus = exports.WarmupStatus || (exports.WarmupStatus = {}));
var DedicatedIp;
(function (DedicatedIp) {
    /**
     * @internal
     */
    DedicatedIp.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DedicatedIp = exports.DedicatedIp || (exports.DedicatedIp = {}));
var DeleteConfigurationSetRequest;
(function (DeleteConfigurationSetRequest) {
    /**
     * @internal
     */
    DeleteConfigurationSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConfigurationSetRequest = exports.DeleteConfigurationSetRequest || (exports.DeleteConfigurationSetRequest = {}));
var DeleteConfigurationSetResponse;
(function (DeleteConfigurationSetResponse) {
    /**
     * @internal
     */
    DeleteConfigurationSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConfigurationSetResponse = exports.DeleteConfigurationSetResponse || (exports.DeleteConfigurationSetResponse = {}));
var DeleteConfigurationSetEventDestinationRequest;
(function (DeleteConfigurationSetEventDestinationRequest) {
    /**
     * @internal
     */
    DeleteConfigurationSetEventDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConfigurationSetEventDestinationRequest = exports.DeleteConfigurationSetEventDestinationRequest || (exports.DeleteConfigurationSetEventDestinationRequest = {}));
var DeleteConfigurationSetEventDestinationResponse;
(function (DeleteConfigurationSetEventDestinationResponse) {
    /**
     * @internal
     */
    DeleteConfigurationSetEventDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConfigurationSetEventDestinationResponse = exports.DeleteConfigurationSetEventDestinationResponse || (exports.DeleteConfigurationSetEventDestinationResponse = {}));
var DeleteContactRequest;
(function (DeleteContactRequest) {
    /**
     * @internal
     */
    DeleteContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContactRequest = exports.DeleteContactRequest || (exports.DeleteContactRequest = {}));
var DeleteContactResponse;
(function (DeleteContactResponse) {
    /**
     * @internal
     */
    DeleteContactResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContactResponse = exports.DeleteContactResponse || (exports.DeleteContactResponse = {}));
var DeleteContactListRequest;
(function (DeleteContactListRequest) {
    /**
     * @internal
     */
    DeleteContactListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContactListRequest = exports.DeleteContactListRequest || (exports.DeleteContactListRequest = {}));
var DeleteContactListResponse;
(function (DeleteContactListResponse) {
    /**
     * @internal
     */
    DeleteContactListResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContactListResponse = exports.DeleteContactListResponse || (exports.DeleteContactListResponse = {}));
var DeleteCustomVerificationEmailTemplateRequest;
(function (DeleteCustomVerificationEmailTemplateRequest) {
    /**
     * @internal
     */
    DeleteCustomVerificationEmailTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCustomVerificationEmailTemplateRequest = exports.DeleteCustomVerificationEmailTemplateRequest || (exports.DeleteCustomVerificationEmailTemplateRequest = {}));
var DeleteCustomVerificationEmailTemplateResponse;
(function (DeleteCustomVerificationEmailTemplateResponse) {
    /**
     * @internal
     */
    DeleteCustomVerificationEmailTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCustomVerificationEmailTemplateResponse = exports.DeleteCustomVerificationEmailTemplateResponse || (exports.DeleteCustomVerificationEmailTemplateResponse = {}));
var DeleteDedicatedIpPoolRequest;
(function (DeleteDedicatedIpPoolRequest) {
    /**
     * @internal
     */
    DeleteDedicatedIpPoolRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDedicatedIpPoolRequest = exports.DeleteDedicatedIpPoolRequest || (exports.DeleteDedicatedIpPoolRequest = {}));
var DeleteDedicatedIpPoolResponse;
(function (DeleteDedicatedIpPoolResponse) {
    /**
     * @internal
     */
    DeleteDedicatedIpPoolResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDedicatedIpPoolResponse = exports.DeleteDedicatedIpPoolResponse || (exports.DeleteDedicatedIpPoolResponse = {}));
var DeleteEmailIdentityRequest;
(function (DeleteEmailIdentityRequest) {
    /**
     * @internal
     */
    DeleteEmailIdentityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEmailIdentityRequest = exports.DeleteEmailIdentityRequest || (exports.DeleteEmailIdentityRequest = {}));
var DeleteEmailIdentityResponse;
(function (DeleteEmailIdentityResponse) {
    /**
     * @internal
     */
    DeleteEmailIdentityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEmailIdentityResponse = exports.DeleteEmailIdentityResponse || (exports.DeleteEmailIdentityResponse = {}));
var DeleteEmailIdentityPolicyRequest;
(function (DeleteEmailIdentityPolicyRequest) {
    /**
     * @internal
     */
    DeleteEmailIdentityPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEmailIdentityPolicyRequest = exports.DeleteEmailIdentityPolicyRequest || (exports.DeleteEmailIdentityPolicyRequest = {}));
var DeleteEmailIdentityPolicyResponse;
(function (DeleteEmailIdentityPolicyResponse) {
    /**
     * @internal
     */
    DeleteEmailIdentityPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEmailIdentityPolicyResponse = exports.DeleteEmailIdentityPolicyResponse || (exports.DeleteEmailIdentityPolicyResponse = {}));
var DeleteEmailTemplateRequest;
(function (DeleteEmailTemplateRequest) {
    /**
     * @internal
     */
    DeleteEmailTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEmailTemplateRequest = exports.DeleteEmailTemplateRequest || (exports.DeleteEmailTemplateRequest = {}));
var DeleteEmailTemplateResponse;
(function (DeleteEmailTemplateResponse) {
    /**
     * @internal
     */
    DeleteEmailTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEmailTemplateResponse = exports.DeleteEmailTemplateResponse || (exports.DeleteEmailTemplateResponse = {}));
var DeleteSuppressedDestinationRequest;
(function (DeleteSuppressedDestinationRequest) {
    /**
     * @internal
     */
    DeleteSuppressedDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSuppressedDestinationRequest = exports.DeleteSuppressedDestinationRequest || (exports.DeleteSuppressedDestinationRequest = {}));
var DeleteSuppressedDestinationResponse;
(function (DeleteSuppressedDestinationResponse) {
    /**
     * @internal
     */
    DeleteSuppressedDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSuppressedDestinationResponse = exports.DeleteSuppressedDestinationResponse || (exports.DeleteSuppressedDestinationResponse = {}));
var DeliverabilityDashboardAccountStatus;
(function (DeliverabilityDashboardAccountStatus) {
    DeliverabilityDashboardAccountStatus["ACTIVE"] = "ACTIVE";
    DeliverabilityDashboardAccountStatus["DISABLED"] = "DISABLED";
    DeliverabilityDashboardAccountStatus["PENDING_EXPIRATION"] = "PENDING_EXPIRATION";
})(DeliverabilityDashboardAccountStatus = exports.DeliverabilityDashboardAccountStatus || (exports.DeliverabilityDashboardAccountStatus = {}));
var DeliverabilityTestReport;
(function (DeliverabilityTestReport) {
    /**
     * @internal
     */
    DeliverabilityTestReport.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeliverabilityTestReport = exports.DeliverabilityTestReport || (exports.DeliverabilityTestReport = {}));
var DomainDeliverabilityCampaign;
(function (DomainDeliverabilityCampaign) {
    /**
     * @internal
     */
    DomainDeliverabilityCampaign.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainDeliverabilityCampaign = exports.DomainDeliverabilityCampaign || (exports.DomainDeliverabilityCampaign = {}));
var InboxPlacementTrackingOption;
(function (InboxPlacementTrackingOption) {
    /**
     * @internal
     */
    InboxPlacementTrackingOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InboxPlacementTrackingOption = exports.InboxPlacementTrackingOption || (exports.InboxPlacementTrackingOption = {}));
var DomainDeliverabilityTrackingOption;
(function (DomainDeliverabilityTrackingOption) {
    /**
     * @internal
     */
    DomainDeliverabilityTrackingOption.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainDeliverabilityTrackingOption = exports.DomainDeliverabilityTrackingOption || (exports.DomainDeliverabilityTrackingOption = {}));
var EmailTemplateMetadata;
(function (EmailTemplateMetadata) {
    /**
     * @internal
     */
    EmailTemplateMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmailTemplateMetadata = exports.EmailTemplateMetadata || (exports.EmailTemplateMetadata = {}));
var EventDestination;
(function (EventDestination) {
    /**
     * @internal
     */
    EventDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventDestination = exports.EventDestination || (exports.EventDestination = {}));
var FailureInfo;
(function (FailureInfo) {
    /**
     * @internal
     */
    FailureInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailureInfo = exports.FailureInfo || (exports.FailureInfo = {}));
var GetAccountRequest;
(function (GetAccountRequest) {
    /**
     * @internal
     */
    GetAccountRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccountRequest = exports.GetAccountRequest || (exports.GetAccountRequest = {}));
var SendQuota;
(function (SendQuota) {
    /**
     * @internal
     */
    SendQuota.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendQuota = exports.SendQuota || (exports.SendQuota = {}));
var SuppressionAttributes;
(function (SuppressionAttributes) {
    /**
     * @internal
     */
    SuppressionAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuppressionAttributes = exports.SuppressionAttributes || (exports.SuppressionAttributes = {}));
var GetAccountResponse;
(function (GetAccountResponse) {
    /**
     * @internal
     */
    GetAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Details && { Details: AccountDetails.filterSensitiveLog(obj.Details) }),
    });
})(GetAccountResponse = exports.GetAccountResponse || (exports.GetAccountResponse = {}));
var GetBlacklistReportsRequest;
(function (GetBlacklistReportsRequest) {
    /**
     * @internal
     */
    GetBlacklistReportsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBlacklistReportsRequest = exports.GetBlacklistReportsRequest || (exports.GetBlacklistReportsRequest = {}));
var GetBlacklistReportsResponse;
(function (GetBlacklistReportsResponse) {
    /**
     * @internal
     */
    GetBlacklistReportsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBlacklistReportsResponse = exports.GetBlacklistReportsResponse || (exports.GetBlacklistReportsResponse = {}));
var GetConfigurationSetRequest;
(function (GetConfigurationSetRequest) {
    /**
     * @internal
     */
    GetConfigurationSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConfigurationSetRequest = exports.GetConfigurationSetRequest || (exports.GetConfigurationSetRequest = {}));
var GetConfigurationSetResponse;
(function (GetConfigurationSetResponse) {
    /**
     * @internal
     */
    GetConfigurationSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConfigurationSetResponse = exports.GetConfigurationSetResponse || (exports.GetConfigurationSetResponse = {}));
var GetConfigurationSetEventDestinationsRequest;
(function (GetConfigurationSetEventDestinationsRequest) {
    /**
     * @internal
     */
    GetConfigurationSetEventDestinationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConfigurationSetEventDestinationsRequest = exports.GetConfigurationSetEventDestinationsRequest || (exports.GetConfigurationSetEventDestinationsRequest = {}));
var GetConfigurationSetEventDestinationsResponse;
(function (GetConfigurationSetEventDestinationsResponse) {
    /**
     * @internal
     */
    GetConfigurationSetEventDestinationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConfigurationSetEventDestinationsResponse = exports.GetConfigurationSetEventDestinationsResponse || (exports.GetConfigurationSetEventDestinationsResponse = {}));
var GetContactRequest;
(function (GetContactRequest) {
    /**
     * @internal
     */
    GetContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactRequest = exports.GetContactRequest || (exports.GetContactRequest = {}));
var GetContactResponse;
(function (GetContactResponse) {
    /**
     * @internal
     */
    GetContactResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactResponse = exports.GetContactResponse || (exports.GetContactResponse = {}));
var GetContactListRequest;
(function (GetContactListRequest) {
    /**
     * @internal
     */
    GetContactListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactListRequest = exports.GetContactListRequest || (exports.GetContactListRequest = {}));
var GetContactListResponse;
(function (GetContactListResponse) {
    /**
     * @internal
     */
    GetContactListResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContactListResponse = exports.GetContactListResponse || (exports.GetContactListResponse = {}));
var GetCustomVerificationEmailTemplateRequest;
(function (GetCustomVerificationEmailTemplateRequest) {
    /**
     * @internal
     */
    GetCustomVerificationEmailTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCustomVerificationEmailTemplateRequest = exports.GetCustomVerificationEmailTemplateRequest || (exports.GetCustomVerificationEmailTemplateRequest = {}));
var GetCustomVerificationEmailTemplateResponse;
(function (GetCustomVerificationEmailTemplateResponse) {
    /**
     * @internal
     */
    GetCustomVerificationEmailTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCustomVerificationEmailTemplateResponse = exports.GetCustomVerificationEmailTemplateResponse || (exports.GetCustomVerificationEmailTemplateResponse = {}));
var GetDedicatedIpRequest;
(function (GetDedicatedIpRequest) {
    /**
     * @internal
     */
    GetDedicatedIpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDedicatedIpRequest = exports.GetDedicatedIpRequest || (exports.GetDedicatedIpRequest = {}));
var GetDedicatedIpResponse;
(function (GetDedicatedIpResponse) {
    /**
     * @internal
     */
    GetDedicatedIpResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDedicatedIpResponse = exports.GetDedicatedIpResponse || (exports.GetDedicatedIpResponse = {}));
var GetDedicatedIpsRequest;
(function (GetDedicatedIpsRequest) {
    /**
     * @internal
     */
    GetDedicatedIpsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDedicatedIpsRequest = exports.GetDedicatedIpsRequest || (exports.GetDedicatedIpsRequest = {}));
var GetDedicatedIpsResponse;
(function (GetDedicatedIpsResponse) {
    /**
     * @internal
     */
    GetDedicatedIpsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDedicatedIpsResponse = exports.GetDedicatedIpsResponse || (exports.GetDedicatedIpsResponse = {}));
var GetDeliverabilityDashboardOptionsRequest;
(function (GetDeliverabilityDashboardOptionsRequest) {
    /**
     * @internal
     */
    GetDeliverabilityDashboardOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeliverabilityDashboardOptionsRequest = exports.GetDeliverabilityDashboardOptionsRequest || (exports.GetDeliverabilityDashboardOptionsRequest = {}));
var GetDeliverabilityDashboardOptionsResponse;
(function (GetDeliverabilityDashboardOptionsResponse) {
    /**
     * @internal
     */
    GetDeliverabilityDashboardOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeliverabilityDashboardOptionsResponse = exports.GetDeliverabilityDashboardOptionsResponse || (exports.GetDeliverabilityDashboardOptionsResponse = {}));
var GetDeliverabilityTestReportRequest;
(function (GetDeliverabilityTestReportRequest) {
    /**
     * @internal
     */
    GetDeliverabilityTestReportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeliverabilityTestReportRequest = exports.GetDeliverabilityTestReportRequest || (exports.GetDeliverabilityTestReportRequest = {}));
var PlacementStatistics;
(function (PlacementStatistics) {
    /**
     * @internal
     */
    PlacementStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PlacementStatistics = exports.PlacementStatistics || (exports.PlacementStatistics = {}));
var IspPlacement;
(function (IspPlacement) {
    /**
     * @internal
     */
    IspPlacement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IspPlacement = exports.IspPlacement || (exports.IspPlacement = {}));
var GetDeliverabilityTestReportResponse;
(function (GetDeliverabilityTestReportResponse) {
    /**
     * @internal
     */
    GetDeliverabilityTestReportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDeliverabilityTestReportResponse = exports.GetDeliverabilityTestReportResponse || (exports.GetDeliverabilityTestReportResponse = {}));
var GetDomainDeliverabilityCampaignRequest;
(function (GetDomainDeliverabilityCampaignRequest) {
    /**
     * @internal
     */
    GetDomainDeliverabilityCampaignRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainDeliverabilityCampaignRequest = exports.GetDomainDeliverabilityCampaignRequest || (exports.GetDomainDeliverabilityCampaignRequest = {}));
var GetDomainDeliverabilityCampaignResponse;
(function (GetDomainDeliverabilityCampaignResponse) {
    /**
     * @internal
     */
    GetDomainDeliverabilityCampaignResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainDeliverabilityCampaignResponse = exports.GetDomainDeliverabilityCampaignResponse || (exports.GetDomainDeliverabilityCampaignResponse = {}));
var GetDomainStatisticsReportRequest;
(function (GetDomainStatisticsReportRequest) {
    /**
     * @internal
     */
    GetDomainStatisticsReportRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainStatisticsReportRequest = exports.GetDomainStatisticsReportRequest || (exports.GetDomainStatisticsReportRequest = {}));
var OverallVolume;
(function (OverallVolume) {
    /**
     * @internal
     */
    OverallVolume.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OverallVolume = exports.OverallVolume || (exports.OverallVolume = {}));
var GetDomainStatisticsReportResponse;
(function (GetDomainStatisticsReportResponse) {
    /**
     * @internal
     */
    GetDomainStatisticsReportResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDomainStatisticsReportResponse = exports.GetDomainStatisticsReportResponse || (exports.GetDomainStatisticsReportResponse = {}));
var GetEmailIdentityRequest;
(function (GetEmailIdentityRequest) {
    /**
     * @internal
     */
    GetEmailIdentityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEmailIdentityRequest = exports.GetEmailIdentityRequest || (exports.GetEmailIdentityRequest = {}));
var MailFromDomainStatus;
(function (MailFromDomainStatus) {
    MailFromDomainStatus["FAILED"] = "FAILED";
    MailFromDomainStatus["PENDING"] = "PENDING";
    MailFromDomainStatus["SUCCESS"] = "SUCCESS";
    MailFromDomainStatus["TEMPORARY_FAILURE"] = "TEMPORARY_FAILURE";
})(MailFromDomainStatus = exports.MailFromDomainStatus || (exports.MailFromDomainStatus = {}));
var MailFromAttributes;
(function (MailFromAttributes) {
    /**
     * @internal
     */
    MailFromAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MailFromAttributes = exports.MailFromAttributes || (exports.MailFromAttributes = {}));
var GetEmailIdentityResponse;
(function (GetEmailIdentityResponse) {
    /**
     * @internal
     */
    GetEmailIdentityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEmailIdentityResponse = exports.GetEmailIdentityResponse || (exports.GetEmailIdentityResponse = {}));
var GetEmailIdentityPoliciesRequest;
(function (GetEmailIdentityPoliciesRequest) {
    /**
     * @internal
     */
    GetEmailIdentityPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEmailIdentityPoliciesRequest = exports.GetEmailIdentityPoliciesRequest || (exports.GetEmailIdentityPoliciesRequest = {}));
var GetEmailIdentityPoliciesResponse;
(function (GetEmailIdentityPoliciesResponse) {
    /**
     * @internal
     */
    GetEmailIdentityPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEmailIdentityPoliciesResponse = exports.GetEmailIdentityPoliciesResponse || (exports.GetEmailIdentityPoliciesResponse = {}));
var GetEmailTemplateRequest;
(function (GetEmailTemplateRequest) {
    /**
     * @internal
     */
    GetEmailTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEmailTemplateRequest = exports.GetEmailTemplateRequest || (exports.GetEmailTemplateRequest = {}));
var GetEmailTemplateResponse;
(function (GetEmailTemplateResponse) {
    /**
     * @internal
     */
    GetEmailTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEmailTemplateResponse = exports.GetEmailTemplateResponse || (exports.GetEmailTemplateResponse = {}));
var GetImportJobRequest;
(function (GetImportJobRequest) {
    /**
     * @internal
     */
    GetImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImportJobRequest = exports.GetImportJobRequest || (exports.GetImportJobRequest = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["CREATED"] = "CREATED";
    JobStatus["FAILED"] = "FAILED";
    JobStatus["PROCESSING"] = "PROCESSING";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var GetImportJobResponse;
(function (GetImportJobResponse) {
    /**
     * @internal
     */
    GetImportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImportJobResponse = exports.GetImportJobResponse || (exports.GetImportJobResponse = {}));
var GetSuppressedDestinationRequest;
(function (GetSuppressedDestinationRequest) {
    /**
     * @internal
     */
    GetSuppressedDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSuppressedDestinationRequest = exports.GetSuppressedDestinationRequest || (exports.GetSuppressedDestinationRequest = {}));
var SuppressedDestinationAttributes;
(function (SuppressedDestinationAttributes) {
    /**
     * @internal
     */
    SuppressedDestinationAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuppressedDestinationAttributes = exports.SuppressedDestinationAttributes || (exports.SuppressedDestinationAttributes = {}));
var SuppressedDestination;
(function (SuppressedDestination) {
    /**
     * @internal
     */
    SuppressedDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuppressedDestination = exports.SuppressedDestination || (exports.SuppressedDestination = {}));
var GetSuppressedDestinationResponse;
(function (GetSuppressedDestinationResponse) {
    /**
     * @internal
     */
    GetSuppressedDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSuppressedDestinationResponse = exports.GetSuppressedDestinationResponse || (exports.GetSuppressedDestinationResponse = {}));
var IdentityInfo;
(function (IdentityInfo) {
    /**
     * @internal
     */
    IdentityInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityInfo = exports.IdentityInfo || (exports.IdentityInfo = {}));
var ImportDestinationType;
(function (ImportDestinationType) {
    ImportDestinationType["CONTACT_LIST"] = "CONTACT_LIST";
    ImportDestinationType["SUPPRESSION_LIST"] = "SUPPRESSION_LIST";
})(ImportDestinationType = exports.ImportDestinationType || (exports.ImportDestinationType = {}));
var ImportJobSummary;
(function (ImportJobSummary) {
    /**
     * @internal
     */
    ImportJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportJobSummary = exports.ImportJobSummary || (exports.ImportJobSummary = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var ListConfigurationSetsRequest;
(function (ListConfigurationSetsRequest) {
    /**
     * @internal
     */
    ListConfigurationSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConfigurationSetsRequest = exports.ListConfigurationSetsRequest || (exports.ListConfigurationSetsRequest = {}));
var ListConfigurationSetsResponse;
(function (ListConfigurationSetsResponse) {
    /**
     * @internal
     */
    ListConfigurationSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConfigurationSetsResponse = exports.ListConfigurationSetsResponse || (exports.ListConfigurationSetsResponse = {}));
var ListContactListsRequest;
(function (ListContactListsRequest) {
    /**
     * @internal
     */
    ListContactListsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContactListsRequest = exports.ListContactListsRequest || (exports.ListContactListsRequest = {}));
var ListContactListsResponse;
(function (ListContactListsResponse) {
    /**
     * @internal
     */
    ListContactListsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContactListsResponse = exports.ListContactListsResponse || (exports.ListContactListsResponse = {}));
var TopicFilter;
(function (TopicFilter) {
    /**
     * @internal
     */
    TopicFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TopicFilter = exports.TopicFilter || (exports.TopicFilter = {}));
var ListContactsFilter;
(function (ListContactsFilter) {
    /**
     * @internal
     */
    ListContactsFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContactsFilter = exports.ListContactsFilter || (exports.ListContactsFilter = {}));
var ListContactsRequest;
(function (ListContactsRequest) {
    /**
     * @internal
     */
    ListContactsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContactsRequest = exports.ListContactsRequest || (exports.ListContactsRequest = {}));
var ListContactsResponse;
(function (ListContactsResponse) {
    /**
     * @internal
     */
    ListContactsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContactsResponse = exports.ListContactsResponse || (exports.ListContactsResponse = {}));
var ListCustomVerificationEmailTemplatesRequest;
(function (ListCustomVerificationEmailTemplatesRequest) {
    /**
     * @internal
     */
    ListCustomVerificationEmailTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomVerificationEmailTemplatesRequest = exports.ListCustomVerificationEmailTemplatesRequest || (exports.ListCustomVerificationEmailTemplatesRequest = {}));
var ListCustomVerificationEmailTemplatesResponse;
(function (ListCustomVerificationEmailTemplatesResponse) {
    /**
     * @internal
     */
    ListCustomVerificationEmailTemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCustomVerificationEmailTemplatesResponse = exports.ListCustomVerificationEmailTemplatesResponse || (exports.ListCustomVerificationEmailTemplatesResponse = {}));
var ListDedicatedIpPoolsRequest;
(function (ListDedicatedIpPoolsRequest) {
    /**
     * @internal
     */
    ListDedicatedIpPoolsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDedicatedIpPoolsRequest = exports.ListDedicatedIpPoolsRequest || (exports.ListDedicatedIpPoolsRequest = {}));
var ListDedicatedIpPoolsResponse;
(function (ListDedicatedIpPoolsResponse) {
    /**
     * @internal
     */
    ListDedicatedIpPoolsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDedicatedIpPoolsResponse = exports.ListDedicatedIpPoolsResponse || (exports.ListDedicatedIpPoolsResponse = {}));
var ListDeliverabilityTestReportsRequest;
(function (ListDeliverabilityTestReportsRequest) {
    /**
     * @internal
     */
    ListDeliverabilityTestReportsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeliverabilityTestReportsRequest = exports.ListDeliverabilityTestReportsRequest || (exports.ListDeliverabilityTestReportsRequest = {}));
var ListDeliverabilityTestReportsResponse;
(function (ListDeliverabilityTestReportsResponse) {
    /**
     * @internal
     */
    ListDeliverabilityTestReportsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeliverabilityTestReportsResponse = exports.ListDeliverabilityTestReportsResponse || (exports.ListDeliverabilityTestReportsResponse = {}));
var ListDomainDeliverabilityCampaignsRequest;
(function (ListDomainDeliverabilityCampaignsRequest) {
    /**
     * @internal
     */
    ListDomainDeliverabilityCampaignsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainDeliverabilityCampaignsRequest = exports.ListDomainDeliverabilityCampaignsRequest || (exports.ListDomainDeliverabilityCampaignsRequest = {}));
var ListDomainDeliverabilityCampaignsResponse;
(function (ListDomainDeliverabilityCampaignsResponse) {
    /**
     * @internal
     */
    ListDomainDeliverabilityCampaignsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDomainDeliverabilityCampaignsResponse = exports.ListDomainDeliverabilityCampaignsResponse || (exports.ListDomainDeliverabilityCampaignsResponse = {}));
var ListEmailIdentitiesRequest;
(function (ListEmailIdentitiesRequest) {
    /**
     * @internal
     */
    ListEmailIdentitiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEmailIdentitiesRequest = exports.ListEmailIdentitiesRequest || (exports.ListEmailIdentitiesRequest = {}));
var ListEmailIdentitiesResponse;
(function (ListEmailIdentitiesResponse) {
    /**
     * @internal
     */
    ListEmailIdentitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEmailIdentitiesResponse = exports.ListEmailIdentitiesResponse || (exports.ListEmailIdentitiesResponse = {}));
var ListEmailTemplatesRequest;
(function (ListEmailTemplatesRequest) {
    /**
     * @internal
     */
    ListEmailTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEmailTemplatesRequest = exports.ListEmailTemplatesRequest || (exports.ListEmailTemplatesRequest = {}));
var ListEmailTemplatesResponse;
(function (ListEmailTemplatesResponse) {
    /**
     * @internal
     */
    ListEmailTemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEmailTemplatesResponse = exports.ListEmailTemplatesResponse || (exports.ListEmailTemplatesResponse = {}));
var ListImportJobsRequest;
(function (ListImportJobsRequest) {
    /**
     * @internal
     */
    ListImportJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImportJobsRequest = exports.ListImportJobsRequest || (exports.ListImportJobsRequest = {}));
var ListImportJobsResponse;
(function (ListImportJobsResponse) {
    /**
     * @internal
     */
    ListImportJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListImportJobsResponse = exports.ListImportJobsResponse || (exports.ListImportJobsResponse = {}));
var ListManagementOptions;
(function (ListManagementOptions) {
    /**
     * @internal
     */
    ListManagementOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListManagementOptions = exports.ListManagementOptions || (exports.ListManagementOptions = {}));
var ListSuppressedDestinationsRequest;
(function (ListSuppressedDestinationsRequest) {
    /**
     * @internal
     */
    ListSuppressedDestinationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSuppressedDestinationsRequest = exports.ListSuppressedDestinationsRequest || (exports.ListSuppressedDestinationsRequest = {}));
var SuppressedDestinationSummary;
(function (SuppressedDestinationSummary) {
    /**
     * @internal
     */
    SuppressedDestinationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SuppressedDestinationSummary = exports.SuppressedDestinationSummary || (exports.SuppressedDestinationSummary = {}));
var ListSuppressedDestinationsResponse;
(function (ListSuppressedDestinationsResponse) {
    /**
     * @internal
     */
    ListSuppressedDestinationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSuppressedDestinationsResponse = exports.ListSuppressedDestinationsResponse || (exports.ListSuppressedDestinationsResponse = {}));
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
var PutAccountDedicatedIpWarmupAttributesRequest;
(function (PutAccountDedicatedIpWarmupAttributesRequest) {
    /**
     * @internal
     */
    PutAccountDedicatedIpWarmupAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccountDedicatedIpWarmupAttributesRequest = exports.PutAccountDedicatedIpWarmupAttributesRequest || (exports.PutAccountDedicatedIpWarmupAttributesRequest = {}));
var PutAccountDedicatedIpWarmupAttributesResponse;
(function (PutAccountDedicatedIpWarmupAttributesResponse) {
    /**
     * @internal
     */
    PutAccountDedicatedIpWarmupAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccountDedicatedIpWarmupAttributesResponse = exports.PutAccountDedicatedIpWarmupAttributesResponse || (exports.PutAccountDedicatedIpWarmupAttributesResponse = {}));
var PutAccountDetailsRequest;
(function (PutAccountDetailsRequest) {
    /**
     * @internal
     */
    PutAccountDetailsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.WebsiteURL && { WebsiteURL: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.UseCaseDescription && { UseCaseDescription: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.AdditionalContactEmailAddresses && { AdditionalContactEmailAddresses: smithy_client_1.SENSITIVE_STRING }),
    });
})(PutAccountDetailsRequest = exports.PutAccountDetailsRequest || (exports.PutAccountDetailsRequest = {}));
var PutAccountDetailsResponse;
(function (PutAccountDetailsResponse) {
    /**
     * @internal
     */
    PutAccountDetailsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccountDetailsResponse = exports.PutAccountDetailsResponse || (exports.PutAccountDetailsResponse = {}));
var PutAccountSendingAttributesRequest;
(function (PutAccountSendingAttributesRequest) {
    /**
     * @internal
     */
    PutAccountSendingAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccountSendingAttributesRequest = exports.PutAccountSendingAttributesRequest || (exports.PutAccountSendingAttributesRequest = {}));
var PutAccountSendingAttributesResponse;
(function (PutAccountSendingAttributesResponse) {
    /**
     * @internal
     */
    PutAccountSendingAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccountSendingAttributesResponse = exports.PutAccountSendingAttributesResponse || (exports.PutAccountSendingAttributesResponse = {}));
var PutAccountSuppressionAttributesRequest;
(function (PutAccountSuppressionAttributesRequest) {
    /**
     * @internal
     */
    PutAccountSuppressionAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccountSuppressionAttributesRequest = exports.PutAccountSuppressionAttributesRequest || (exports.PutAccountSuppressionAttributesRequest = {}));
var PutAccountSuppressionAttributesResponse;
(function (PutAccountSuppressionAttributesResponse) {
    /**
     * @internal
     */
    PutAccountSuppressionAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAccountSuppressionAttributesResponse = exports.PutAccountSuppressionAttributesResponse || (exports.PutAccountSuppressionAttributesResponse = {}));
var PutConfigurationSetDeliveryOptionsRequest;
(function (PutConfigurationSetDeliveryOptionsRequest) {
    /**
     * @internal
     */
    PutConfigurationSetDeliveryOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConfigurationSetDeliveryOptionsRequest = exports.PutConfigurationSetDeliveryOptionsRequest || (exports.PutConfigurationSetDeliveryOptionsRequest = {}));
var PutConfigurationSetDeliveryOptionsResponse;
(function (PutConfigurationSetDeliveryOptionsResponse) {
    /**
     * @internal
     */
    PutConfigurationSetDeliveryOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConfigurationSetDeliveryOptionsResponse = exports.PutConfigurationSetDeliveryOptionsResponse || (exports.PutConfigurationSetDeliveryOptionsResponse = {}));
var PutConfigurationSetReputationOptionsRequest;
(function (PutConfigurationSetReputationOptionsRequest) {
    /**
     * @internal
     */
    PutConfigurationSetReputationOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConfigurationSetReputationOptionsRequest = exports.PutConfigurationSetReputationOptionsRequest || (exports.PutConfigurationSetReputationOptionsRequest = {}));
var PutConfigurationSetReputationOptionsResponse;
(function (PutConfigurationSetReputationOptionsResponse) {
    /**
     * @internal
     */
    PutConfigurationSetReputationOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConfigurationSetReputationOptionsResponse = exports.PutConfigurationSetReputationOptionsResponse || (exports.PutConfigurationSetReputationOptionsResponse = {}));
var PutConfigurationSetSendingOptionsRequest;
(function (PutConfigurationSetSendingOptionsRequest) {
    /**
     * @internal
     */
    PutConfigurationSetSendingOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConfigurationSetSendingOptionsRequest = exports.PutConfigurationSetSendingOptionsRequest || (exports.PutConfigurationSetSendingOptionsRequest = {}));
var PutConfigurationSetSendingOptionsResponse;
(function (PutConfigurationSetSendingOptionsResponse) {
    /**
     * @internal
     */
    PutConfigurationSetSendingOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConfigurationSetSendingOptionsResponse = exports.PutConfigurationSetSendingOptionsResponse || (exports.PutConfigurationSetSendingOptionsResponse = {}));
var PutConfigurationSetSuppressionOptionsRequest;
(function (PutConfigurationSetSuppressionOptionsRequest) {
    /**
     * @internal
     */
    PutConfigurationSetSuppressionOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConfigurationSetSuppressionOptionsRequest = exports.PutConfigurationSetSuppressionOptionsRequest || (exports.PutConfigurationSetSuppressionOptionsRequest = {}));
var PutConfigurationSetSuppressionOptionsResponse;
(function (PutConfigurationSetSuppressionOptionsResponse) {
    /**
     * @internal
     */
    PutConfigurationSetSuppressionOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConfigurationSetSuppressionOptionsResponse = exports.PutConfigurationSetSuppressionOptionsResponse || (exports.PutConfigurationSetSuppressionOptionsResponse = {}));
var PutConfigurationSetTrackingOptionsRequest;
(function (PutConfigurationSetTrackingOptionsRequest) {
    /**
     * @internal
     */
    PutConfigurationSetTrackingOptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConfigurationSetTrackingOptionsRequest = exports.PutConfigurationSetTrackingOptionsRequest || (exports.PutConfigurationSetTrackingOptionsRequest = {}));
var PutConfigurationSetTrackingOptionsResponse;
(function (PutConfigurationSetTrackingOptionsResponse) {
    /**
     * @internal
     */
    PutConfigurationSetTrackingOptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutConfigurationSetTrackingOptionsResponse = exports.PutConfigurationSetTrackingOptionsResponse || (exports.PutConfigurationSetTrackingOptionsResponse = {}));
var PutDedicatedIpInPoolRequest;
(function (PutDedicatedIpInPoolRequest) {
    /**
     * @internal
     */
    PutDedicatedIpInPoolRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDedicatedIpInPoolRequest = exports.PutDedicatedIpInPoolRequest || (exports.PutDedicatedIpInPoolRequest = {}));
var PutDedicatedIpInPoolResponse;
(function (PutDedicatedIpInPoolResponse) {
    /**
     * @internal
     */
    PutDedicatedIpInPoolResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDedicatedIpInPoolResponse = exports.PutDedicatedIpInPoolResponse || (exports.PutDedicatedIpInPoolResponse = {}));
var PutDedicatedIpWarmupAttributesRequest;
(function (PutDedicatedIpWarmupAttributesRequest) {
    /**
     * @internal
     */
    PutDedicatedIpWarmupAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDedicatedIpWarmupAttributesRequest = exports.PutDedicatedIpWarmupAttributesRequest || (exports.PutDedicatedIpWarmupAttributesRequest = {}));
var PutDedicatedIpWarmupAttributesResponse;
(function (PutDedicatedIpWarmupAttributesResponse) {
    /**
     * @internal
     */
    PutDedicatedIpWarmupAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDedicatedIpWarmupAttributesResponse = exports.PutDedicatedIpWarmupAttributesResponse || (exports.PutDedicatedIpWarmupAttributesResponse = {}));
var PutDeliverabilityDashboardOptionRequest;
(function (PutDeliverabilityDashboardOptionRequest) {
    /**
     * @internal
     */
    PutDeliverabilityDashboardOptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDeliverabilityDashboardOptionRequest = exports.PutDeliverabilityDashboardOptionRequest || (exports.PutDeliverabilityDashboardOptionRequest = {}));
var PutDeliverabilityDashboardOptionResponse;
(function (PutDeliverabilityDashboardOptionResponse) {
    /**
     * @internal
     */
    PutDeliverabilityDashboardOptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDeliverabilityDashboardOptionResponse = exports.PutDeliverabilityDashboardOptionResponse || (exports.PutDeliverabilityDashboardOptionResponse = {}));
var PutEmailIdentityConfigurationSetAttributesRequest;
(function (PutEmailIdentityConfigurationSetAttributesRequest) {
    /**
     * @internal
     */
    PutEmailIdentityConfigurationSetAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEmailIdentityConfigurationSetAttributesRequest = exports.PutEmailIdentityConfigurationSetAttributesRequest || (exports.PutEmailIdentityConfigurationSetAttributesRequest = {}));
var PutEmailIdentityConfigurationSetAttributesResponse;
(function (PutEmailIdentityConfigurationSetAttributesResponse) {
    /**
     * @internal
     */
    PutEmailIdentityConfigurationSetAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEmailIdentityConfigurationSetAttributesResponse = exports.PutEmailIdentityConfigurationSetAttributesResponse || (exports.PutEmailIdentityConfigurationSetAttributesResponse = {}));
var PutEmailIdentityDkimAttributesRequest;
(function (PutEmailIdentityDkimAttributesRequest) {
    /**
     * @internal
     */
    PutEmailIdentityDkimAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEmailIdentityDkimAttributesRequest = exports.PutEmailIdentityDkimAttributesRequest || (exports.PutEmailIdentityDkimAttributesRequest = {}));
var PutEmailIdentityDkimAttributesResponse;
(function (PutEmailIdentityDkimAttributesResponse) {
    /**
     * @internal
     */
    PutEmailIdentityDkimAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEmailIdentityDkimAttributesResponse = exports.PutEmailIdentityDkimAttributesResponse || (exports.PutEmailIdentityDkimAttributesResponse = {}));
var PutEmailIdentityDkimSigningAttributesRequest;
(function (PutEmailIdentityDkimSigningAttributesRequest) {
    /**
     * @internal
     */
    PutEmailIdentityDkimSigningAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.SigningAttributes && {
            SigningAttributes: DkimSigningAttributes.filterSensitiveLog(obj.SigningAttributes),
        }),
    });
})(PutEmailIdentityDkimSigningAttributesRequest = exports.PutEmailIdentityDkimSigningAttributesRequest || (exports.PutEmailIdentityDkimSigningAttributesRequest = {}));
var PutEmailIdentityDkimSigningAttributesResponse;
(function (PutEmailIdentityDkimSigningAttributesResponse) {
    /**
     * @internal
     */
    PutEmailIdentityDkimSigningAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEmailIdentityDkimSigningAttributesResponse = exports.PutEmailIdentityDkimSigningAttributesResponse || (exports.PutEmailIdentityDkimSigningAttributesResponse = {}));
var PutEmailIdentityFeedbackAttributesRequest;
(function (PutEmailIdentityFeedbackAttributesRequest) {
    /**
     * @internal
     */
    PutEmailIdentityFeedbackAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEmailIdentityFeedbackAttributesRequest = exports.PutEmailIdentityFeedbackAttributesRequest || (exports.PutEmailIdentityFeedbackAttributesRequest = {}));
var PutEmailIdentityFeedbackAttributesResponse;
(function (PutEmailIdentityFeedbackAttributesResponse) {
    /**
     * @internal
     */
    PutEmailIdentityFeedbackAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEmailIdentityFeedbackAttributesResponse = exports.PutEmailIdentityFeedbackAttributesResponse || (exports.PutEmailIdentityFeedbackAttributesResponse = {}));
var PutEmailIdentityMailFromAttributesRequest;
(function (PutEmailIdentityMailFromAttributesRequest) {
    /**
     * @internal
     */
    PutEmailIdentityMailFromAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEmailIdentityMailFromAttributesRequest = exports.PutEmailIdentityMailFromAttributesRequest || (exports.PutEmailIdentityMailFromAttributesRequest = {}));
var PutEmailIdentityMailFromAttributesResponse;
(function (PutEmailIdentityMailFromAttributesResponse) {
    /**
     * @internal
     */
    PutEmailIdentityMailFromAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEmailIdentityMailFromAttributesResponse = exports.PutEmailIdentityMailFromAttributesResponse || (exports.PutEmailIdentityMailFromAttributesResponse = {}));
var PutSuppressedDestinationRequest;
(function (PutSuppressedDestinationRequest) {
    /**
     * @internal
     */
    PutSuppressedDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutSuppressedDestinationRequest = exports.PutSuppressedDestinationRequest || (exports.PutSuppressedDestinationRequest = {}));
var PutSuppressedDestinationResponse;
(function (PutSuppressedDestinationResponse) {
    /**
     * @internal
     */
    PutSuppressedDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutSuppressedDestinationResponse = exports.PutSuppressedDestinationResponse || (exports.PutSuppressedDestinationResponse = {}));
var SendBulkEmailRequest;
(function (SendBulkEmailRequest) {
    /**
     * @internal
     */
    SendBulkEmailRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendBulkEmailRequest = exports.SendBulkEmailRequest || (exports.SendBulkEmailRequest = {}));
var SendBulkEmailResponse;
(function (SendBulkEmailResponse) {
    /**
     * @internal
     */
    SendBulkEmailResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendBulkEmailResponse = exports.SendBulkEmailResponse || (exports.SendBulkEmailResponse = {}));
var SendCustomVerificationEmailRequest;
(function (SendCustomVerificationEmailRequest) {
    /**
     * @internal
     */
    SendCustomVerificationEmailRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendCustomVerificationEmailRequest = exports.SendCustomVerificationEmailRequest || (exports.SendCustomVerificationEmailRequest = {}));
var SendCustomVerificationEmailResponse;
(function (SendCustomVerificationEmailResponse) {
    /**
     * @internal
     */
    SendCustomVerificationEmailResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendCustomVerificationEmailResponse = exports.SendCustomVerificationEmailResponse || (exports.SendCustomVerificationEmailResponse = {}));
var SendEmailRequest;
(function (SendEmailRequest) {
    /**
     * @internal
     */
    SendEmailRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendEmailRequest = exports.SendEmailRequest || (exports.SendEmailRequest = {}));
var SendEmailResponse;
(function (SendEmailResponse) {
    /**
     * @internal
     */
    SendEmailResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendEmailResponse = exports.SendEmailResponse || (exports.SendEmailResponse = {}));
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
var TestRenderEmailTemplateRequest;
(function (TestRenderEmailTemplateRequest) {
    /**
     * @internal
     */
    TestRenderEmailTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestRenderEmailTemplateRequest = exports.TestRenderEmailTemplateRequest || (exports.TestRenderEmailTemplateRequest = {}));
var TestRenderEmailTemplateResponse;
(function (TestRenderEmailTemplateResponse) {
    /**
     * @internal
     */
    TestRenderEmailTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestRenderEmailTemplateResponse = exports.TestRenderEmailTemplateResponse || (exports.TestRenderEmailTemplateResponse = {}));
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
var UpdateConfigurationSetEventDestinationRequest;
(function (UpdateConfigurationSetEventDestinationRequest) {
    /**
     * @internal
     */
    UpdateConfigurationSetEventDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConfigurationSetEventDestinationRequest = exports.UpdateConfigurationSetEventDestinationRequest || (exports.UpdateConfigurationSetEventDestinationRequest = {}));
var UpdateConfigurationSetEventDestinationResponse;
(function (UpdateConfigurationSetEventDestinationResponse) {
    /**
     * @internal
     */
    UpdateConfigurationSetEventDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConfigurationSetEventDestinationResponse = exports.UpdateConfigurationSetEventDestinationResponse || (exports.UpdateConfigurationSetEventDestinationResponse = {}));
var UpdateContactRequest;
(function (UpdateContactRequest) {
    /**
     * @internal
     */
    UpdateContactRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContactRequest = exports.UpdateContactRequest || (exports.UpdateContactRequest = {}));
var UpdateContactResponse;
(function (UpdateContactResponse) {
    /**
     * @internal
     */
    UpdateContactResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContactResponse = exports.UpdateContactResponse || (exports.UpdateContactResponse = {}));
var UpdateContactListRequest;
(function (UpdateContactListRequest) {
    /**
     * @internal
     */
    UpdateContactListRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContactListRequest = exports.UpdateContactListRequest || (exports.UpdateContactListRequest = {}));
var UpdateContactListResponse;
(function (UpdateContactListResponse) {
    /**
     * @internal
     */
    UpdateContactListResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContactListResponse = exports.UpdateContactListResponse || (exports.UpdateContactListResponse = {}));
var UpdateCustomVerificationEmailTemplateRequest;
(function (UpdateCustomVerificationEmailTemplateRequest) {
    /**
     * @internal
     */
    UpdateCustomVerificationEmailTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCustomVerificationEmailTemplateRequest = exports.UpdateCustomVerificationEmailTemplateRequest || (exports.UpdateCustomVerificationEmailTemplateRequest = {}));
var UpdateCustomVerificationEmailTemplateResponse;
(function (UpdateCustomVerificationEmailTemplateResponse) {
    /**
     * @internal
     */
    UpdateCustomVerificationEmailTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCustomVerificationEmailTemplateResponse = exports.UpdateCustomVerificationEmailTemplateResponse || (exports.UpdateCustomVerificationEmailTemplateResponse = {}));
var UpdateEmailIdentityPolicyRequest;
(function (UpdateEmailIdentityPolicyRequest) {
    /**
     * @internal
     */
    UpdateEmailIdentityPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEmailIdentityPolicyRequest = exports.UpdateEmailIdentityPolicyRequest || (exports.UpdateEmailIdentityPolicyRequest = {}));
var UpdateEmailIdentityPolicyResponse;
(function (UpdateEmailIdentityPolicyResponse) {
    /**
     * @internal
     */
    UpdateEmailIdentityPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEmailIdentityPolicyResponse = exports.UpdateEmailIdentityPolicyResponse || (exports.UpdateEmailIdentityPolicyResponse = {}));
var UpdateEmailTemplateRequest;
(function (UpdateEmailTemplateRequest) {
    /**
     * @internal
     */
    UpdateEmailTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEmailTemplateRequest = exports.UpdateEmailTemplateRequest || (exports.UpdateEmailTemplateRequest = {}));
var UpdateEmailTemplateResponse;
(function (UpdateEmailTemplateResponse) {
    /**
     * @internal
     */
    UpdateEmailTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEmailTemplateResponse = exports.UpdateEmailTemplateResponse || (exports.UpdateEmailTemplateResponse = {}));
//# sourceMappingURL=models_0.js.map