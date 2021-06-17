import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var ContactLanguage;
(function (ContactLanguage) {
    ContactLanguage["EN"] = "EN";
    ContactLanguage["JA"] = "JA";
})(ContactLanguage || (ContactLanguage = {}));
export var MailType;
(function (MailType) {
    MailType["MARKETING"] = "MARKETING";
    MailType["TRANSACTIONAL"] = "TRANSACTIONAL";
})(MailType || (MailType = {}));
export var ReviewStatus;
(function (ReviewStatus) {
    ReviewStatus["DENIED"] = "DENIED";
    ReviewStatus["FAILED"] = "FAILED";
    ReviewStatus["GRANTED"] = "GRANTED";
    ReviewStatus["PENDING"] = "PENDING";
})(ReviewStatus || (ReviewStatus = {}));
export var ReviewDetails;
(function (ReviewDetails) {
    /**
     * @internal
     */
    ReviewDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReviewDetails || (ReviewDetails = {}));
export var AccountDetails;
(function (AccountDetails) {
    /**
     * @internal
     */
    AccountDetails.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.WebsiteURL && { WebsiteURL: SENSITIVE_STRING })), (obj.UseCaseDescription && { UseCaseDescription: SENSITIVE_STRING })), (obj.AdditionalContactEmailAddresses && { AdditionalContactEmailAddresses: SENSITIVE_STRING }))); };
})(AccountDetails || (AccountDetails = {}));
export var AccountSuspendedException;
(function (AccountSuspendedException) {
    /**
     * @internal
     */
    AccountSuspendedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccountSuspendedException || (AccountSuspendedException = {}));
export var AlreadyExistsException;
(function (AlreadyExistsException) {
    /**
     * @internal
     */
    AlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AlreadyExistsException || (AlreadyExistsException = {}));
export var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadRequestException || (BadRequestException = {}));
export var BehaviorOnMxFailure;
(function (BehaviorOnMxFailure) {
    BehaviorOnMxFailure["REJECT_MESSAGE"] = "REJECT_MESSAGE";
    BehaviorOnMxFailure["USE_DEFAULT_VALUE"] = "USE_DEFAULT_VALUE";
})(BehaviorOnMxFailure || (BehaviorOnMxFailure = {}));
export var BlacklistEntry;
(function (BlacklistEntry) {
    /**
     * @internal
     */
    BlacklistEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BlacklistEntry || (BlacklistEntry = {}));
export var Content;
(function (Content) {
    /**
     * @internal
     */
    Content.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Content || (Content = {}));
export var Body;
(function (Body) {
    /**
     * @internal
     */
    Body.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Body || (Body = {}));
export var Template;
(function (Template) {
    /**
     * @internal
     */
    Template.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Template || (Template = {}));
export var BulkEmailContent;
(function (BulkEmailContent) {
    /**
     * @internal
     */
    BulkEmailContent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BulkEmailContent || (BulkEmailContent = {}));
export var Destination;
(function (Destination) {
    /**
     * @internal
     */
    Destination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Destination || (Destination = {}));
export var ReplacementTemplate;
(function (ReplacementTemplate) {
    /**
     * @internal
     */
    ReplacementTemplate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplacementTemplate || (ReplacementTemplate = {}));
export var ReplacementEmailContent;
(function (ReplacementEmailContent) {
    /**
     * @internal
     */
    ReplacementEmailContent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplacementEmailContent || (ReplacementEmailContent = {}));
export var MessageTag;
(function (MessageTag) {
    /**
     * @internal
     */
    MessageTag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MessageTag || (MessageTag = {}));
export var BulkEmailEntry;
(function (BulkEmailEntry) {
    /**
     * @internal
     */
    BulkEmailEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BulkEmailEntry || (BulkEmailEntry = {}));
export var BulkEmailStatus;
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
})(BulkEmailStatus || (BulkEmailStatus = {}));
export var BulkEmailEntryResult;
(function (BulkEmailEntryResult) {
    /**
     * @internal
     */
    BulkEmailEntryResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BulkEmailEntryResult || (BulkEmailEntryResult = {}));
export var DimensionValueSource;
(function (DimensionValueSource) {
    DimensionValueSource["EMAIL_HEADER"] = "EMAIL_HEADER";
    DimensionValueSource["LINK_TAG"] = "LINK_TAG";
    DimensionValueSource["MESSAGE_TAG"] = "MESSAGE_TAG";
})(DimensionValueSource || (DimensionValueSource = {}));
export var CloudWatchDimensionConfiguration;
(function (CloudWatchDimensionConfiguration) {
    /**
     * @internal
     */
    CloudWatchDimensionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudWatchDimensionConfiguration || (CloudWatchDimensionConfiguration = {}));
export var CloudWatchDestination;
(function (CloudWatchDestination) {
    /**
     * @internal
     */
    CloudWatchDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudWatchDestination || (CloudWatchDestination = {}));
export var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["OPT_IN"] = "OPT_IN";
    SubscriptionStatus["OPT_OUT"] = "OPT_OUT";
})(SubscriptionStatus || (SubscriptionStatus = {}));
export var TopicPreference;
(function (TopicPreference) {
    /**
     * @internal
     */
    TopicPreference.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TopicPreference || (TopicPreference = {}));
export var Contact;
(function (Contact) {
    /**
     * @internal
     */
    Contact.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Contact || (Contact = {}));
export var ContactList;
(function (ContactList) {
    /**
     * @internal
     */
    ContactList.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContactList || (ContactList = {}));
export var ContactListImportAction;
(function (ContactListImportAction) {
    ContactListImportAction["DELETE"] = "DELETE";
    ContactListImportAction["PUT"] = "PUT";
})(ContactListImportAction || (ContactListImportAction = {}));
export var ContactListDestination;
(function (ContactListDestination) {
    /**
     * @internal
     */
    ContactListDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContactListDestination || (ContactListDestination = {}));
export var TlsPolicy;
(function (TlsPolicy) {
    TlsPolicy["OPTIONAL"] = "OPTIONAL";
    TlsPolicy["REQUIRE"] = "REQUIRE";
})(TlsPolicy || (TlsPolicy = {}));
export var DeliveryOptions;
(function (DeliveryOptions) {
    /**
     * @internal
     */
    DeliveryOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeliveryOptions || (DeliveryOptions = {}));
export var ReputationOptions;
(function (ReputationOptions) {
    /**
     * @internal
     */
    ReputationOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReputationOptions || (ReputationOptions = {}));
export var SendingOptions;
(function (SendingOptions) {
    /**
     * @internal
     */
    SendingOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendingOptions || (SendingOptions = {}));
export var SuppressionListReason;
(function (SuppressionListReason) {
    SuppressionListReason["BOUNCE"] = "BOUNCE";
    SuppressionListReason["COMPLAINT"] = "COMPLAINT";
})(SuppressionListReason || (SuppressionListReason = {}));
export var SuppressionOptions;
(function (SuppressionOptions) {
    /**
     * @internal
     */
    SuppressionOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SuppressionOptions || (SuppressionOptions = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var TrackingOptions;
(function (TrackingOptions) {
    /**
     * @internal
     */
    TrackingOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TrackingOptions || (TrackingOptions = {}));
export var CreateConfigurationSetRequest;
(function (CreateConfigurationSetRequest) {
    /**
     * @internal
     */
    CreateConfigurationSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConfigurationSetRequest || (CreateConfigurationSetRequest = {}));
export var CreateConfigurationSetResponse;
(function (CreateConfigurationSetResponse) {
    /**
     * @internal
     */
    CreateConfigurationSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConfigurationSetResponse || (CreateConfigurationSetResponse = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyRequestsException || (TooManyRequestsException = {}));
export var KinesisFirehoseDestination;
(function (KinesisFirehoseDestination) {
    /**
     * @internal
     */
    KinesisFirehoseDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KinesisFirehoseDestination || (KinesisFirehoseDestination = {}));
export var EventType;
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
})(EventType || (EventType = {}));
export var PinpointDestination;
(function (PinpointDestination) {
    /**
     * @internal
     */
    PinpointDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PinpointDestination || (PinpointDestination = {}));
export var SnsDestination;
(function (SnsDestination) {
    /**
     * @internal
     */
    SnsDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SnsDestination || (SnsDestination = {}));
export var EventDestinationDefinition;
(function (EventDestinationDefinition) {
    /**
     * @internal
     */
    EventDestinationDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventDestinationDefinition || (EventDestinationDefinition = {}));
export var CreateConfigurationSetEventDestinationRequest;
(function (CreateConfigurationSetEventDestinationRequest) {
    /**
     * @internal
     */
    CreateConfigurationSetEventDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConfigurationSetEventDestinationRequest || (CreateConfigurationSetEventDestinationRequest = {}));
export var CreateConfigurationSetEventDestinationResponse;
(function (CreateConfigurationSetEventDestinationResponse) {
    /**
     * @internal
     */
    CreateConfigurationSetEventDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConfigurationSetEventDestinationResponse || (CreateConfigurationSetEventDestinationResponse = {}));
export var CreateContactRequest;
(function (CreateContactRequest) {
    /**
     * @internal
     */
    CreateContactRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContactRequest || (CreateContactRequest = {}));
export var CreateContactResponse;
(function (CreateContactResponse) {
    /**
     * @internal
     */
    CreateContactResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContactResponse || (CreateContactResponse = {}));
export var Topic;
(function (Topic) {
    /**
     * @internal
     */
    Topic.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Topic || (Topic = {}));
export var CreateContactListRequest;
(function (CreateContactListRequest) {
    /**
     * @internal
     */
    CreateContactListRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContactListRequest || (CreateContactListRequest = {}));
export var CreateContactListResponse;
(function (CreateContactListResponse) {
    /**
     * @internal
     */
    CreateContactListResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContactListResponse || (CreateContactListResponse = {}));
export var CreateCustomVerificationEmailTemplateRequest;
(function (CreateCustomVerificationEmailTemplateRequest) {
    /**
     * @internal
     */
    CreateCustomVerificationEmailTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCustomVerificationEmailTemplateRequest || (CreateCustomVerificationEmailTemplateRequest = {}));
export var CreateCustomVerificationEmailTemplateResponse;
(function (CreateCustomVerificationEmailTemplateResponse) {
    /**
     * @internal
     */
    CreateCustomVerificationEmailTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCustomVerificationEmailTemplateResponse || (CreateCustomVerificationEmailTemplateResponse = {}));
export var CreateDedicatedIpPoolRequest;
(function (CreateDedicatedIpPoolRequest) {
    /**
     * @internal
     */
    CreateDedicatedIpPoolRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDedicatedIpPoolRequest || (CreateDedicatedIpPoolRequest = {}));
export var CreateDedicatedIpPoolResponse;
(function (CreateDedicatedIpPoolResponse) {
    /**
     * @internal
     */
    CreateDedicatedIpPoolResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDedicatedIpPoolResponse || (CreateDedicatedIpPoolResponse = {}));
export var RawMessage;
(function (RawMessage) {
    /**
     * @internal
     */
    RawMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RawMessage || (RawMessage = {}));
export var Message;
(function (Message) {
    /**
     * @internal
     */
    Message.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Message || (Message = {}));
export var EmailContent;
(function (EmailContent) {
    /**
     * @internal
     */
    EmailContent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmailContent || (EmailContent = {}));
export var CreateDeliverabilityTestReportRequest;
(function (CreateDeliverabilityTestReportRequest) {
    /**
     * @internal
     */
    CreateDeliverabilityTestReportRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDeliverabilityTestReportRequest || (CreateDeliverabilityTestReportRequest = {}));
export var DeliverabilityTestStatus;
(function (DeliverabilityTestStatus) {
    DeliverabilityTestStatus["COMPLETED"] = "COMPLETED";
    DeliverabilityTestStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(DeliverabilityTestStatus || (DeliverabilityTestStatus = {}));
export var CreateDeliverabilityTestReportResponse;
(function (CreateDeliverabilityTestReportResponse) {
    /**
     * @internal
     */
    CreateDeliverabilityTestReportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDeliverabilityTestReportResponse || (CreateDeliverabilityTestReportResponse = {}));
export var MailFromDomainNotVerifiedException;
(function (MailFromDomainNotVerifiedException) {
    /**
     * @internal
     */
    MailFromDomainNotVerifiedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MailFromDomainNotVerifiedException || (MailFromDomainNotVerifiedException = {}));
export var MessageRejected;
(function (MessageRejected) {
    /**
     * @internal
     */
    MessageRejected.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MessageRejected || (MessageRejected = {}));
export var SendingPausedException;
(function (SendingPausedException) {
    /**
     * @internal
     */
    SendingPausedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendingPausedException || (SendingPausedException = {}));
export var DkimSigningAttributes;
(function (DkimSigningAttributes) {
    /**
     * @internal
     */
    DkimSigningAttributes.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DomainSigningPrivateKey && { DomainSigningPrivateKey: SENSITIVE_STRING }))); };
})(DkimSigningAttributes || (DkimSigningAttributes = {}));
export var CreateEmailIdentityRequest;
(function (CreateEmailIdentityRequest) {
    /**
     * @internal
     */
    CreateEmailIdentityRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DkimSigningAttributes && {
        DkimSigningAttributes: DkimSigningAttributes.filterSensitiveLog(obj.DkimSigningAttributes),
    }))); };
})(CreateEmailIdentityRequest || (CreateEmailIdentityRequest = {}));
export var DkimSigningAttributesOrigin;
(function (DkimSigningAttributesOrigin) {
    DkimSigningAttributesOrigin["AWS_SES"] = "AWS_SES";
    DkimSigningAttributesOrigin["EXTERNAL"] = "EXTERNAL";
})(DkimSigningAttributesOrigin || (DkimSigningAttributesOrigin = {}));
export var DkimStatus;
(function (DkimStatus) {
    DkimStatus["FAILED"] = "FAILED";
    DkimStatus["NOT_STARTED"] = "NOT_STARTED";
    DkimStatus["PENDING"] = "PENDING";
    DkimStatus["SUCCESS"] = "SUCCESS";
    DkimStatus["TEMPORARY_FAILURE"] = "TEMPORARY_FAILURE";
})(DkimStatus || (DkimStatus = {}));
export var DkimAttributes;
(function (DkimAttributes) {
    /**
     * @internal
     */
    DkimAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DkimAttributes || (DkimAttributes = {}));
export var IdentityType;
(function (IdentityType) {
    IdentityType["DOMAIN"] = "DOMAIN";
    IdentityType["EMAIL_ADDRESS"] = "EMAIL_ADDRESS";
    IdentityType["MANAGED_DOMAIN"] = "MANAGED_DOMAIN";
})(IdentityType || (IdentityType = {}));
export var CreateEmailIdentityResponse;
(function (CreateEmailIdentityResponse) {
    /**
     * @internal
     */
    CreateEmailIdentityResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEmailIdentityResponse || (CreateEmailIdentityResponse = {}));
export var CreateEmailIdentityPolicyRequest;
(function (CreateEmailIdentityPolicyRequest) {
    /**
     * @internal
     */
    CreateEmailIdentityPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEmailIdentityPolicyRequest || (CreateEmailIdentityPolicyRequest = {}));
export var CreateEmailIdentityPolicyResponse;
(function (CreateEmailIdentityPolicyResponse) {
    /**
     * @internal
     */
    CreateEmailIdentityPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEmailIdentityPolicyResponse || (CreateEmailIdentityPolicyResponse = {}));
export var EmailTemplateContent;
(function (EmailTemplateContent) {
    /**
     * @internal
     */
    EmailTemplateContent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmailTemplateContent || (EmailTemplateContent = {}));
export var CreateEmailTemplateRequest;
(function (CreateEmailTemplateRequest) {
    /**
     * @internal
     */
    CreateEmailTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEmailTemplateRequest || (CreateEmailTemplateRequest = {}));
export var CreateEmailTemplateResponse;
(function (CreateEmailTemplateResponse) {
    /**
     * @internal
     */
    CreateEmailTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEmailTemplateResponse || (CreateEmailTemplateResponse = {}));
export var DataFormat;
(function (DataFormat) {
    DataFormat["CSV"] = "CSV";
    DataFormat["JSON"] = "JSON";
})(DataFormat || (DataFormat = {}));
export var ImportDataSource;
(function (ImportDataSource) {
    /**
     * @internal
     */
    ImportDataSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportDataSource || (ImportDataSource = {}));
export var SuppressionListImportAction;
(function (SuppressionListImportAction) {
    SuppressionListImportAction["DELETE"] = "DELETE";
    SuppressionListImportAction["PUT"] = "PUT";
})(SuppressionListImportAction || (SuppressionListImportAction = {}));
export var SuppressionListDestination;
(function (SuppressionListDestination) {
    /**
     * @internal
     */
    SuppressionListDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SuppressionListDestination || (SuppressionListDestination = {}));
export var ImportDestination;
(function (ImportDestination) {
    /**
     * @internal
     */
    ImportDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportDestination || (ImportDestination = {}));
export var CreateImportJobRequest;
(function (CreateImportJobRequest) {
    /**
     * @internal
     */
    CreateImportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateImportJobRequest || (CreateImportJobRequest = {}));
export var CreateImportJobResponse;
(function (CreateImportJobResponse) {
    /**
     * @internal
     */
    CreateImportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateImportJobResponse || (CreateImportJobResponse = {}));
export var CustomVerificationEmailTemplateMetadata;
(function (CustomVerificationEmailTemplateMetadata) {
    /**
     * @internal
     */
    CustomVerificationEmailTemplateMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomVerificationEmailTemplateMetadata || (CustomVerificationEmailTemplateMetadata = {}));
export var DomainIspPlacement;
(function (DomainIspPlacement) {
    /**
     * @internal
     */
    DomainIspPlacement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainIspPlacement || (DomainIspPlacement = {}));
export var VolumeStatistics;
(function (VolumeStatistics) {
    /**
     * @internal
     */
    VolumeStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VolumeStatistics || (VolumeStatistics = {}));
export var DailyVolume;
(function (DailyVolume) {
    /**
     * @internal
     */
    DailyVolume.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DailyVolume || (DailyVolume = {}));
export var WarmupStatus;
(function (WarmupStatus) {
    WarmupStatus["DONE"] = "DONE";
    WarmupStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(WarmupStatus || (WarmupStatus = {}));
export var DedicatedIp;
(function (DedicatedIp) {
    /**
     * @internal
     */
    DedicatedIp.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DedicatedIp || (DedicatedIp = {}));
export var DeleteConfigurationSetRequest;
(function (DeleteConfigurationSetRequest) {
    /**
     * @internal
     */
    DeleteConfigurationSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConfigurationSetRequest || (DeleteConfigurationSetRequest = {}));
export var DeleteConfigurationSetResponse;
(function (DeleteConfigurationSetResponse) {
    /**
     * @internal
     */
    DeleteConfigurationSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConfigurationSetResponse || (DeleteConfigurationSetResponse = {}));
export var DeleteConfigurationSetEventDestinationRequest;
(function (DeleteConfigurationSetEventDestinationRequest) {
    /**
     * @internal
     */
    DeleteConfigurationSetEventDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConfigurationSetEventDestinationRequest || (DeleteConfigurationSetEventDestinationRequest = {}));
export var DeleteConfigurationSetEventDestinationResponse;
(function (DeleteConfigurationSetEventDestinationResponse) {
    /**
     * @internal
     */
    DeleteConfigurationSetEventDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConfigurationSetEventDestinationResponse || (DeleteConfigurationSetEventDestinationResponse = {}));
export var DeleteContactRequest;
(function (DeleteContactRequest) {
    /**
     * @internal
     */
    DeleteContactRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContactRequest || (DeleteContactRequest = {}));
export var DeleteContactResponse;
(function (DeleteContactResponse) {
    /**
     * @internal
     */
    DeleteContactResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContactResponse || (DeleteContactResponse = {}));
export var DeleteContactListRequest;
(function (DeleteContactListRequest) {
    /**
     * @internal
     */
    DeleteContactListRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContactListRequest || (DeleteContactListRequest = {}));
export var DeleteContactListResponse;
(function (DeleteContactListResponse) {
    /**
     * @internal
     */
    DeleteContactListResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContactListResponse || (DeleteContactListResponse = {}));
export var DeleteCustomVerificationEmailTemplateRequest;
(function (DeleteCustomVerificationEmailTemplateRequest) {
    /**
     * @internal
     */
    DeleteCustomVerificationEmailTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCustomVerificationEmailTemplateRequest || (DeleteCustomVerificationEmailTemplateRequest = {}));
export var DeleteCustomVerificationEmailTemplateResponse;
(function (DeleteCustomVerificationEmailTemplateResponse) {
    /**
     * @internal
     */
    DeleteCustomVerificationEmailTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCustomVerificationEmailTemplateResponse || (DeleteCustomVerificationEmailTemplateResponse = {}));
export var DeleteDedicatedIpPoolRequest;
(function (DeleteDedicatedIpPoolRequest) {
    /**
     * @internal
     */
    DeleteDedicatedIpPoolRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDedicatedIpPoolRequest || (DeleteDedicatedIpPoolRequest = {}));
export var DeleteDedicatedIpPoolResponse;
(function (DeleteDedicatedIpPoolResponse) {
    /**
     * @internal
     */
    DeleteDedicatedIpPoolResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDedicatedIpPoolResponse || (DeleteDedicatedIpPoolResponse = {}));
export var DeleteEmailIdentityRequest;
(function (DeleteEmailIdentityRequest) {
    /**
     * @internal
     */
    DeleteEmailIdentityRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEmailIdentityRequest || (DeleteEmailIdentityRequest = {}));
export var DeleteEmailIdentityResponse;
(function (DeleteEmailIdentityResponse) {
    /**
     * @internal
     */
    DeleteEmailIdentityResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEmailIdentityResponse || (DeleteEmailIdentityResponse = {}));
export var DeleteEmailIdentityPolicyRequest;
(function (DeleteEmailIdentityPolicyRequest) {
    /**
     * @internal
     */
    DeleteEmailIdentityPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEmailIdentityPolicyRequest || (DeleteEmailIdentityPolicyRequest = {}));
export var DeleteEmailIdentityPolicyResponse;
(function (DeleteEmailIdentityPolicyResponse) {
    /**
     * @internal
     */
    DeleteEmailIdentityPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEmailIdentityPolicyResponse || (DeleteEmailIdentityPolicyResponse = {}));
export var DeleteEmailTemplateRequest;
(function (DeleteEmailTemplateRequest) {
    /**
     * @internal
     */
    DeleteEmailTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEmailTemplateRequest || (DeleteEmailTemplateRequest = {}));
export var DeleteEmailTemplateResponse;
(function (DeleteEmailTemplateResponse) {
    /**
     * @internal
     */
    DeleteEmailTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEmailTemplateResponse || (DeleteEmailTemplateResponse = {}));
export var DeleteSuppressedDestinationRequest;
(function (DeleteSuppressedDestinationRequest) {
    /**
     * @internal
     */
    DeleteSuppressedDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSuppressedDestinationRequest || (DeleteSuppressedDestinationRequest = {}));
export var DeleteSuppressedDestinationResponse;
(function (DeleteSuppressedDestinationResponse) {
    /**
     * @internal
     */
    DeleteSuppressedDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSuppressedDestinationResponse || (DeleteSuppressedDestinationResponse = {}));
export var DeliverabilityDashboardAccountStatus;
(function (DeliverabilityDashboardAccountStatus) {
    DeliverabilityDashboardAccountStatus["ACTIVE"] = "ACTIVE";
    DeliverabilityDashboardAccountStatus["DISABLED"] = "DISABLED";
    DeliverabilityDashboardAccountStatus["PENDING_EXPIRATION"] = "PENDING_EXPIRATION";
})(DeliverabilityDashboardAccountStatus || (DeliverabilityDashboardAccountStatus = {}));
export var DeliverabilityTestReport;
(function (DeliverabilityTestReport) {
    /**
     * @internal
     */
    DeliverabilityTestReport.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeliverabilityTestReport || (DeliverabilityTestReport = {}));
export var DomainDeliverabilityCampaign;
(function (DomainDeliverabilityCampaign) {
    /**
     * @internal
     */
    DomainDeliverabilityCampaign.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainDeliverabilityCampaign || (DomainDeliverabilityCampaign = {}));
export var InboxPlacementTrackingOption;
(function (InboxPlacementTrackingOption) {
    /**
     * @internal
     */
    InboxPlacementTrackingOption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InboxPlacementTrackingOption || (InboxPlacementTrackingOption = {}));
export var DomainDeliverabilityTrackingOption;
(function (DomainDeliverabilityTrackingOption) {
    /**
     * @internal
     */
    DomainDeliverabilityTrackingOption.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DomainDeliverabilityTrackingOption || (DomainDeliverabilityTrackingOption = {}));
export var EmailTemplateMetadata;
(function (EmailTemplateMetadata) {
    /**
     * @internal
     */
    EmailTemplateMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmailTemplateMetadata || (EmailTemplateMetadata = {}));
export var EventDestination;
(function (EventDestination) {
    /**
     * @internal
     */
    EventDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventDestination || (EventDestination = {}));
export var FailureInfo;
(function (FailureInfo) {
    /**
     * @internal
     */
    FailureInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FailureInfo || (FailureInfo = {}));
export var GetAccountRequest;
(function (GetAccountRequest) {
    /**
     * @internal
     */
    GetAccountRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccountRequest || (GetAccountRequest = {}));
export var SendQuota;
(function (SendQuota) {
    /**
     * @internal
     */
    SendQuota.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendQuota || (SendQuota = {}));
export var SuppressionAttributes;
(function (SuppressionAttributes) {
    /**
     * @internal
     */
    SuppressionAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SuppressionAttributes || (SuppressionAttributes = {}));
export var GetAccountResponse;
(function (GetAccountResponse) {
    /**
     * @internal
     */
    GetAccountResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Details && { Details: AccountDetails.filterSensitiveLog(obj.Details) }))); };
})(GetAccountResponse || (GetAccountResponse = {}));
export var GetBlacklistReportsRequest;
(function (GetBlacklistReportsRequest) {
    /**
     * @internal
     */
    GetBlacklistReportsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBlacklistReportsRequest || (GetBlacklistReportsRequest = {}));
export var GetBlacklistReportsResponse;
(function (GetBlacklistReportsResponse) {
    /**
     * @internal
     */
    GetBlacklistReportsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBlacklistReportsResponse || (GetBlacklistReportsResponse = {}));
export var GetConfigurationSetRequest;
(function (GetConfigurationSetRequest) {
    /**
     * @internal
     */
    GetConfigurationSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetConfigurationSetRequest || (GetConfigurationSetRequest = {}));
export var GetConfigurationSetResponse;
(function (GetConfigurationSetResponse) {
    /**
     * @internal
     */
    GetConfigurationSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetConfigurationSetResponse || (GetConfigurationSetResponse = {}));
export var GetConfigurationSetEventDestinationsRequest;
(function (GetConfigurationSetEventDestinationsRequest) {
    /**
     * @internal
     */
    GetConfigurationSetEventDestinationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetConfigurationSetEventDestinationsRequest || (GetConfigurationSetEventDestinationsRequest = {}));
export var GetConfigurationSetEventDestinationsResponse;
(function (GetConfigurationSetEventDestinationsResponse) {
    /**
     * @internal
     */
    GetConfigurationSetEventDestinationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetConfigurationSetEventDestinationsResponse || (GetConfigurationSetEventDestinationsResponse = {}));
export var GetContactRequest;
(function (GetContactRequest) {
    /**
     * @internal
     */
    GetContactRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContactRequest || (GetContactRequest = {}));
export var GetContactResponse;
(function (GetContactResponse) {
    /**
     * @internal
     */
    GetContactResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContactResponse || (GetContactResponse = {}));
export var GetContactListRequest;
(function (GetContactListRequest) {
    /**
     * @internal
     */
    GetContactListRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContactListRequest || (GetContactListRequest = {}));
export var GetContactListResponse;
(function (GetContactListResponse) {
    /**
     * @internal
     */
    GetContactListResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContactListResponse || (GetContactListResponse = {}));
export var GetCustomVerificationEmailTemplateRequest;
(function (GetCustomVerificationEmailTemplateRequest) {
    /**
     * @internal
     */
    GetCustomVerificationEmailTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCustomVerificationEmailTemplateRequest || (GetCustomVerificationEmailTemplateRequest = {}));
export var GetCustomVerificationEmailTemplateResponse;
(function (GetCustomVerificationEmailTemplateResponse) {
    /**
     * @internal
     */
    GetCustomVerificationEmailTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCustomVerificationEmailTemplateResponse || (GetCustomVerificationEmailTemplateResponse = {}));
export var GetDedicatedIpRequest;
(function (GetDedicatedIpRequest) {
    /**
     * @internal
     */
    GetDedicatedIpRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDedicatedIpRequest || (GetDedicatedIpRequest = {}));
export var GetDedicatedIpResponse;
(function (GetDedicatedIpResponse) {
    /**
     * @internal
     */
    GetDedicatedIpResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDedicatedIpResponse || (GetDedicatedIpResponse = {}));
export var GetDedicatedIpsRequest;
(function (GetDedicatedIpsRequest) {
    /**
     * @internal
     */
    GetDedicatedIpsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDedicatedIpsRequest || (GetDedicatedIpsRequest = {}));
export var GetDedicatedIpsResponse;
(function (GetDedicatedIpsResponse) {
    /**
     * @internal
     */
    GetDedicatedIpsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDedicatedIpsResponse || (GetDedicatedIpsResponse = {}));
export var GetDeliverabilityDashboardOptionsRequest;
(function (GetDeliverabilityDashboardOptionsRequest) {
    /**
     * @internal
     */
    GetDeliverabilityDashboardOptionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDeliverabilityDashboardOptionsRequest || (GetDeliverabilityDashboardOptionsRequest = {}));
export var GetDeliverabilityDashboardOptionsResponse;
(function (GetDeliverabilityDashboardOptionsResponse) {
    /**
     * @internal
     */
    GetDeliverabilityDashboardOptionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDeliverabilityDashboardOptionsResponse || (GetDeliverabilityDashboardOptionsResponse = {}));
export var GetDeliverabilityTestReportRequest;
(function (GetDeliverabilityTestReportRequest) {
    /**
     * @internal
     */
    GetDeliverabilityTestReportRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDeliverabilityTestReportRequest || (GetDeliverabilityTestReportRequest = {}));
export var PlacementStatistics;
(function (PlacementStatistics) {
    /**
     * @internal
     */
    PlacementStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PlacementStatistics || (PlacementStatistics = {}));
export var IspPlacement;
(function (IspPlacement) {
    /**
     * @internal
     */
    IspPlacement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IspPlacement || (IspPlacement = {}));
export var GetDeliverabilityTestReportResponse;
(function (GetDeliverabilityTestReportResponse) {
    /**
     * @internal
     */
    GetDeliverabilityTestReportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDeliverabilityTestReportResponse || (GetDeliverabilityTestReportResponse = {}));
export var GetDomainDeliverabilityCampaignRequest;
(function (GetDomainDeliverabilityCampaignRequest) {
    /**
     * @internal
     */
    GetDomainDeliverabilityCampaignRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDomainDeliverabilityCampaignRequest || (GetDomainDeliverabilityCampaignRequest = {}));
export var GetDomainDeliverabilityCampaignResponse;
(function (GetDomainDeliverabilityCampaignResponse) {
    /**
     * @internal
     */
    GetDomainDeliverabilityCampaignResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDomainDeliverabilityCampaignResponse || (GetDomainDeliverabilityCampaignResponse = {}));
export var GetDomainStatisticsReportRequest;
(function (GetDomainStatisticsReportRequest) {
    /**
     * @internal
     */
    GetDomainStatisticsReportRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDomainStatisticsReportRequest || (GetDomainStatisticsReportRequest = {}));
export var OverallVolume;
(function (OverallVolume) {
    /**
     * @internal
     */
    OverallVolume.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OverallVolume || (OverallVolume = {}));
export var GetDomainStatisticsReportResponse;
(function (GetDomainStatisticsReportResponse) {
    /**
     * @internal
     */
    GetDomainStatisticsReportResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDomainStatisticsReportResponse || (GetDomainStatisticsReportResponse = {}));
export var GetEmailIdentityRequest;
(function (GetEmailIdentityRequest) {
    /**
     * @internal
     */
    GetEmailIdentityRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEmailIdentityRequest || (GetEmailIdentityRequest = {}));
export var MailFromDomainStatus;
(function (MailFromDomainStatus) {
    MailFromDomainStatus["FAILED"] = "FAILED";
    MailFromDomainStatus["PENDING"] = "PENDING";
    MailFromDomainStatus["SUCCESS"] = "SUCCESS";
    MailFromDomainStatus["TEMPORARY_FAILURE"] = "TEMPORARY_FAILURE";
})(MailFromDomainStatus || (MailFromDomainStatus = {}));
export var MailFromAttributes;
(function (MailFromAttributes) {
    /**
     * @internal
     */
    MailFromAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MailFromAttributes || (MailFromAttributes = {}));
export var GetEmailIdentityResponse;
(function (GetEmailIdentityResponse) {
    /**
     * @internal
     */
    GetEmailIdentityResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEmailIdentityResponse || (GetEmailIdentityResponse = {}));
export var GetEmailIdentityPoliciesRequest;
(function (GetEmailIdentityPoliciesRequest) {
    /**
     * @internal
     */
    GetEmailIdentityPoliciesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEmailIdentityPoliciesRequest || (GetEmailIdentityPoliciesRequest = {}));
export var GetEmailIdentityPoliciesResponse;
(function (GetEmailIdentityPoliciesResponse) {
    /**
     * @internal
     */
    GetEmailIdentityPoliciesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEmailIdentityPoliciesResponse || (GetEmailIdentityPoliciesResponse = {}));
export var GetEmailTemplateRequest;
(function (GetEmailTemplateRequest) {
    /**
     * @internal
     */
    GetEmailTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEmailTemplateRequest || (GetEmailTemplateRequest = {}));
export var GetEmailTemplateResponse;
(function (GetEmailTemplateResponse) {
    /**
     * @internal
     */
    GetEmailTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEmailTemplateResponse || (GetEmailTemplateResponse = {}));
export var GetImportJobRequest;
(function (GetImportJobRequest) {
    /**
     * @internal
     */
    GetImportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImportJobRequest || (GetImportJobRequest = {}));
export var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["CREATED"] = "CREATED";
    JobStatus["FAILED"] = "FAILED";
    JobStatus["PROCESSING"] = "PROCESSING";
})(JobStatus || (JobStatus = {}));
export var GetImportJobResponse;
(function (GetImportJobResponse) {
    /**
     * @internal
     */
    GetImportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImportJobResponse || (GetImportJobResponse = {}));
export var GetSuppressedDestinationRequest;
(function (GetSuppressedDestinationRequest) {
    /**
     * @internal
     */
    GetSuppressedDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSuppressedDestinationRequest || (GetSuppressedDestinationRequest = {}));
export var SuppressedDestinationAttributes;
(function (SuppressedDestinationAttributes) {
    /**
     * @internal
     */
    SuppressedDestinationAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SuppressedDestinationAttributes || (SuppressedDestinationAttributes = {}));
export var SuppressedDestination;
(function (SuppressedDestination) {
    /**
     * @internal
     */
    SuppressedDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SuppressedDestination || (SuppressedDestination = {}));
export var GetSuppressedDestinationResponse;
(function (GetSuppressedDestinationResponse) {
    /**
     * @internal
     */
    GetSuppressedDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSuppressedDestinationResponse || (GetSuppressedDestinationResponse = {}));
export var IdentityInfo;
(function (IdentityInfo) {
    /**
     * @internal
     */
    IdentityInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdentityInfo || (IdentityInfo = {}));
export var ImportDestinationType;
(function (ImportDestinationType) {
    ImportDestinationType["CONTACT_LIST"] = "CONTACT_LIST";
    ImportDestinationType["SUPPRESSION_LIST"] = "SUPPRESSION_LIST";
})(ImportDestinationType || (ImportDestinationType = {}));
export var ImportJobSummary;
(function (ImportJobSummary) {
    /**
     * @internal
     */
    ImportJobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportJobSummary || (ImportJobSummary = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var ListConfigurationSetsRequest;
(function (ListConfigurationSetsRequest) {
    /**
     * @internal
     */
    ListConfigurationSetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListConfigurationSetsRequest || (ListConfigurationSetsRequest = {}));
export var ListConfigurationSetsResponse;
(function (ListConfigurationSetsResponse) {
    /**
     * @internal
     */
    ListConfigurationSetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListConfigurationSetsResponse || (ListConfigurationSetsResponse = {}));
export var ListContactListsRequest;
(function (ListContactListsRequest) {
    /**
     * @internal
     */
    ListContactListsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListContactListsRequest || (ListContactListsRequest = {}));
export var ListContactListsResponse;
(function (ListContactListsResponse) {
    /**
     * @internal
     */
    ListContactListsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListContactListsResponse || (ListContactListsResponse = {}));
export var TopicFilter;
(function (TopicFilter) {
    /**
     * @internal
     */
    TopicFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TopicFilter || (TopicFilter = {}));
export var ListContactsFilter;
(function (ListContactsFilter) {
    /**
     * @internal
     */
    ListContactsFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListContactsFilter || (ListContactsFilter = {}));
export var ListContactsRequest;
(function (ListContactsRequest) {
    /**
     * @internal
     */
    ListContactsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListContactsRequest || (ListContactsRequest = {}));
export var ListContactsResponse;
(function (ListContactsResponse) {
    /**
     * @internal
     */
    ListContactsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListContactsResponse || (ListContactsResponse = {}));
export var ListCustomVerificationEmailTemplatesRequest;
(function (ListCustomVerificationEmailTemplatesRequest) {
    /**
     * @internal
     */
    ListCustomVerificationEmailTemplatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCustomVerificationEmailTemplatesRequest || (ListCustomVerificationEmailTemplatesRequest = {}));
export var ListCustomVerificationEmailTemplatesResponse;
(function (ListCustomVerificationEmailTemplatesResponse) {
    /**
     * @internal
     */
    ListCustomVerificationEmailTemplatesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCustomVerificationEmailTemplatesResponse || (ListCustomVerificationEmailTemplatesResponse = {}));
export var ListDedicatedIpPoolsRequest;
(function (ListDedicatedIpPoolsRequest) {
    /**
     * @internal
     */
    ListDedicatedIpPoolsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDedicatedIpPoolsRequest || (ListDedicatedIpPoolsRequest = {}));
export var ListDedicatedIpPoolsResponse;
(function (ListDedicatedIpPoolsResponse) {
    /**
     * @internal
     */
    ListDedicatedIpPoolsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDedicatedIpPoolsResponse || (ListDedicatedIpPoolsResponse = {}));
export var ListDeliverabilityTestReportsRequest;
(function (ListDeliverabilityTestReportsRequest) {
    /**
     * @internal
     */
    ListDeliverabilityTestReportsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDeliverabilityTestReportsRequest || (ListDeliverabilityTestReportsRequest = {}));
export var ListDeliverabilityTestReportsResponse;
(function (ListDeliverabilityTestReportsResponse) {
    /**
     * @internal
     */
    ListDeliverabilityTestReportsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDeliverabilityTestReportsResponse || (ListDeliverabilityTestReportsResponse = {}));
export var ListDomainDeliverabilityCampaignsRequest;
(function (ListDomainDeliverabilityCampaignsRequest) {
    /**
     * @internal
     */
    ListDomainDeliverabilityCampaignsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDomainDeliverabilityCampaignsRequest || (ListDomainDeliverabilityCampaignsRequest = {}));
export var ListDomainDeliverabilityCampaignsResponse;
(function (ListDomainDeliverabilityCampaignsResponse) {
    /**
     * @internal
     */
    ListDomainDeliverabilityCampaignsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDomainDeliverabilityCampaignsResponse || (ListDomainDeliverabilityCampaignsResponse = {}));
export var ListEmailIdentitiesRequest;
(function (ListEmailIdentitiesRequest) {
    /**
     * @internal
     */
    ListEmailIdentitiesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEmailIdentitiesRequest || (ListEmailIdentitiesRequest = {}));
export var ListEmailIdentitiesResponse;
(function (ListEmailIdentitiesResponse) {
    /**
     * @internal
     */
    ListEmailIdentitiesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEmailIdentitiesResponse || (ListEmailIdentitiesResponse = {}));
export var ListEmailTemplatesRequest;
(function (ListEmailTemplatesRequest) {
    /**
     * @internal
     */
    ListEmailTemplatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEmailTemplatesRequest || (ListEmailTemplatesRequest = {}));
export var ListEmailTemplatesResponse;
(function (ListEmailTemplatesResponse) {
    /**
     * @internal
     */
    ListEmailTemplatesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEmailTemplatesResponse || (ListEmailTemplatesResponse = {}));
export var ListImportJobsRequest;
(function (ListImportJobsRequest) {
    /**
     * @internal
     */
    ListImportJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImportJobsRequest || (ListImportJobsRequest = {}));
export var ListImportJobsResponse;
(function (ListImportJobsResponse) {
    /**
     * @internal
     */
    ListImportJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListImportJobsResponse || (ListImportJobsResponse = {}));
export var ListManagementOptions;
(function (ListManagementOptions) {
    /**
     * @internal
     */
    ListManagementOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListManagementOptions || (ListManagementOptions = {}));
export var ListSuppressedDestinationsRequest;
(function (ListSuppressedDestinationsRequest) {
    /**
     * @internal
     */
    ListSuppressedDestinationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSuppressedDestinationsRequest || (ListSuppressedDestinationsRequest = {}));
export var SuppressedDestinationSummary;
(function (SuppressedDestinationSummary) {
    /**
     * @internal
     */
    SuppressedDestinationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SuppressedDestinationSummary || (SuppressedDestinationSummary = {}));
export var ListSuppressedDestinationsResponse;
(function (ListSuppressedDestinationsResponse) {
    /**
     * @internal
     */
    ListSuppressedDestinationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSuppressedDestinationsResponse || (ListSuppressedDestinationsResponse = {}));
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
export var PutAccountDedicatedIpWarmupAttributesRequest;
(function (PutAccountDedicatedIpWarmupAttributesRequest) {
    /**
     * @internal
     */
    PutAccountDedicatedIpWarmupAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAccountDedicatedIpWarmupAttributesRequest || (PutAccountDedicatedIpWarmupAttributesRequest = {}));
export var PutAccountDedicatedIpWarmupAttributesResponse;
(function (PutAccountDedicatedIpWarmupAttributesResponse) {
    /**
     * @internal
     */
    PutAccountDedicatedIpWarmupAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAccountDedicatedIpWarmupAttributesResponse || (PutAccountDedicatedIpWarmupAttributesResponse = {}));
export var PutAccountDetailsRequest;
(function (PutAccountDetailsRequest) {
    /**
     * @internal
     */
    PutAccountDetailsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.WebsiteURL && { WebsiteURL: SENSITIVE_STRING })), (obj.UseCaseDescription && { UseCaseDescription: SENSITIVE_STRING })), (obj.AdditionalContactEmailAddresses && { AdditionalContactEmailAddresses: SENSITIVE_STRING }))); };
})(PutAccountDetailsRequest || (PutAccountDetailsRequest = {}));
export var PutAccountDetailsResponse;
(function (PutAccountDetailsResponse) {
    /**
     * @internal
     */
    PutAccountDetailsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAccountDetailsResponse || (PutAccountDetailsResponse = {}));
export var PutAccountSendingAttributesRequest;
(function (PutAccountSendingAttributesRequest) {
    /**
     * @internal
     */
    PutAccountSendingAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAccountSendingAttributesRequest || (PutAccountSendingAttributesRequest = {}));
export var PutAccountSendingAttributesResponse;
(function (PutAccountSendingAttributesResponse) {
    /**
     * @internal
     */
    PutAccountSendingAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAccountSendingAttributesResponse || (PutAccountSendingAttributesResponse = {}));
export var PutAccountSuppressionAttributesRequest;
(function (PutAccountSuppressionAttributesRequest) {
    /**
     * @internal
     */
    PutAccountSuppressionAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAccountSuppressionAttributesRequest || (PutAccountSuppressionAttributesRequest = {}));
export var PutAccountSuppressionAttributesResponse;
(function (PutAccountSuppressionAttributesResponse) {
    /**
     * @internal
     */
    PutAccountSuppressionAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutAccountSuppressionAttributesResponse || (PutAccountSuppressionAttributesResponse = {}));
export var PutConfigurationSetDeliveryOptionsRequest;
(function (PutConfigurationSetDeliveryOptionsRequest) {
    /**
     * @internal
     */
    PutConfigurationSetDeliveryOptionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutConfigurationSetDeliveryOptionsRequest || (PutConfigurationSetDeliveryOptionsRequest = {}));
export var PutConfigurationSetDeliveryOptionsResponse;
(function (PutConfigurationSetDeliveryOptionsResponse) {
    /**
     * @internal
     */
    PutConfigurationSetDeliveryOptionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutConfigurationSetDeliveryOptionsResponse || (PutConfigurationSetDeliveryOptionsResponse = {}));
export var PutConfigurationSetReputationOptionsRequest;
(function (PutConfigurationSetReputationOptionsRequest) {
    /**
     * @internal
     */
    PutConfigurationSetReputationOptionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutConfigurationSetReputationOptionsRequest || (PutConfigurationSetReputationOptionsRequest = {}));
export var PutConfigurationSetReputationOptionsResponse;
(function (PutConfigurationSetReputationOptionsResponse) {
    /**
     * @internal
     */
    PutConfigurationSetReputationOptionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutConfigurationSetReputationOptionsResponse || (PutConfigurationSetReputationOptionsResponse = {}));
export var PutConfigurationSetSendingOptionsRequest;
(function (PutConfigurationSetSendingOptionsRequest) {
    /**
     * @internal
     */
    PutConfigurationSetSendingOptionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutConfigurationSetSendingOptionsRequest || (PutConfigurationSetSendingOptionsRequest = {}));
export var PutConfigurationSetSendingOptionsResponse;
(function (PutConfigurationSetSendingOptionsResponse) {
    /**
     * @internal
     */
    PutConfigurationSetSendingOptionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutConfigurationSetSendingOptionsResponse || (PutConfigurationSetSendingOptionsResponse = {}));
export var PutConfigurationSetSuppressionOptionsRequest;
(function (PutConfigurationSetSuppressionOptionsRequest) {
    /**
     * @internal
     */
    PutConfigurationSetSuppressionOptionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutConfigurationSetSuppressionOptionsRequest || (PutConfigurationSetSuppressionOptionsRequest = {}));
export var PutConfigurationSetSuppressionOptionsResponse;
(function (PutConfigurationSetSuppressionOptionsResponse) {
    /**
     * @internal
     */
    PutConfigurationSetSuppressionOptionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutConfigurationSetSuppressionOptionsResponse || (PutConfigurationSetSuppressionOptionsResponse = {}));
export var PutConfigurationSetTrackingOptionsRequest;
(function (PutConfigurationSetTrackingOptionsRequest) {
    /**
     * @internal
     */
    PutConfigurationSetTrackingOptionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutConfigurationSetTrackingOptionsRequest || (PutConfigurationSetTrackingOptionsRequest = {}));
export var PutConfigurationSetTrackingOptionsResponse;
(function (PutConfigurationSetTrackingOptionsResponse) {
    /**
     * @internal
     */
    PutConfigurationSetTrackingOptionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutConfigurationSetTrackingOptionsResponse || (PutConfigurationSetTrackingOptionsResponse = {}));
export var PutDedicatedIpInPoolRequest;
(function (PutDedicatedIpInPoolRequest) {
    /**
     * @internal
     */
    PutDedicatedIpInPoolRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutDedicatedIpInPoolRequest || (PutDedicatedIpInPoolRequest = {}));
export var PutDedicatedIpInPoolResponse;
(function (PutDedicatedIpInPoolResponse) {
    /**
     * @internal
     */
    PutDedicatedIpInPoolResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutDedicatedIpInPoolResponse || (PutDedicatedIpInPoolResponse = {}));
export var PutDedicatedIpWarmupAttributesRequest;
(function (PutDedicatedIpWarmupAttributesRequest) {
    /**
     * @internal
     */
    PutDedicatedIpWarmupAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutDedicatedIpWarmupAttributesRequest || (PutDedicatedIpWarmupAttributesRequest = {}));
export var PutDedicatedIpWarmupAttributesResponse;
(function (PutDedicatedIpWarmupAttributesResponse) {
    /**
     * @internal
     */
    PutDedicatedIpWarmupAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutDedicatedIpWarmupAttributesResponse || (PutDedicatedIpWarmupAttributesResponse = {}));
export var PutDeliverabilityDashboardOptionRequest;
(function (PutDeliverabilityDashboardOptionRequest) {
    /**
     * @internal
     */
    PutDeliverabilityDashboardOptionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutDeliverabilityDashboardOptionRequest || (PutDeliverabilityDashboardOptionRequest = {}));
export var PutDeliverabilityDashboardOptionResponse;
(function (PutDeliverabilityDashboardOptionResponse) {
    /**
     * @internal
     */
    PutDeliverabilityDashboardOptionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutDeliverabilityDashboardOptionResponse || (PutDeliverabilityDashboardOptionResponse = {}));
export var PutEmailIdentityConfigurationSetAttributesRequest;
(function (PutEmailIdentityConfigurationSetAttributesRequest) {
    /**
     * @internal
     */
    PutEmailIdentityConfigurationSetAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEmailIdentityConfigurationSetAttributesRequest || (PutEmailIdentityConfigurationSetAttributesRequest = {}));
export var PutEmailIdentityConfigurationSetAttributesResponse;
(function (PutEmailIdentityConfigurationSetAttributesResponse) {
    /**
     * @internal
     */
    PutEmailIdentityConfigurationSetAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEmailIdentityConfigurationSetAttributesResponse || (PutEmailIdentityConfigurationSetAttributesResponse = {}));
export var PutEmailIdentityDkimAttributesRequest;
(function (PutEmailIdentityDkimAttributesRequest) {
    /**
     * @internal
     */
    PutEmailIdentityDkimAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEmailIdentityDkimAttributesRequest || (PutEmailIdentityDkimAttributesRequest = {}));
export var PutEmailIdentityDkimAttributesResponse;
(function (PutEmailIdentityDkimAttributesResponse) {
    /**
     * @internal
     */
    PutEmailIdentityDkimAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEmailIdentityDkimAttributesResponse || (PutEmailIdentityDkimAttributesResponse = {}));
export var PutEmailIdentityDkimSigningAttributesRequest;
(function (PutEmailIdentityDkimSigningAttributesRequest) {
    /**
     * @internal
     */
    PutEmailIdentityDkimSigningAttributesRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.SigningAttributes && {
        SigningAttributes: DkimSigningAttributes.filterSensitiveLog(obj.SigningAttributes),
    }))); };
})(PutEmailIdentityDkimSigningAttributesRequest || (PutEmailIdentityDkimSigningAttributesRequest = {}));
export var PutEmailIdentityDkimSigningAttributesResponse;
(function (PutEmailIdentityDkimSigningAttributesResponse) {
    /**
     * @internal
     */
    PutEmailIdentityDkimSigningAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEmailIdentityDkimSigningAttributesResponse || (PutEmailIdentityDkimSigningAttributesResponse = {}));
export var PutEmailIdentityFeedbackAttributesRequest;
(function (PutEmailIdentityFeedbackAttributesRequest) {
    /**
     * @internal
     */
    PutEmailIdentityFeedbackAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEmailIdentityFeedbackAttributesRequest || (PutEmailIdentityFeedbackAttributesRequest = {}));
export var PutEmailIdentityFeedbackAttributesResponse;
(function (PutEmailIdentityFeedbackAttributesResponse) {
    /**
     * @internal
     */
    PutEmailIdentityFeedbackAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEmailIdentityFeedbackAttributesResponse || (PutEmailIdentityFeedbackAttributesResponse = {}));
export var PutEmailIdentityMailFromAttributesRequest;
(function (PutEmailIdentityMailFromAttributesRequest) {
    /**
     * @internal
     */
    PutEmailIdentityMailFromAttributesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEmailIdentityMailFromAttributesRequest || (PutEmailIdentityMailFromAttributesRequest = {}));
export var PutEmailIdentityMailFromAttributesResponse;
(function (PutEmailIdentityMailFromAttributesResponse) {
    /**
     * @internal
     */
    PutEmailIdentityMailFromAttributesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEmailIdentityMailFromAttributesResponse || (PutEmailIdentityMailFromAttributesResponse = {}));
export var PutSuppressedDestinationRequest;
(function (PutSuppressedDestinationRequest) {
    /**
     * @internal
     */
    PutSuppressedDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutSuppressedDestinationRequest || (PutSuppressedDestinationRequest = {}));
export var PutSuppressedDestinationResponse;
(function (PutSuppressedDestinationResponse) {
    /**
     * @internal
     */
    PutSuppressedDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutSuppressedDestinationResponse || (PutSuppressedDestinationResponse = {}));
export var SendBulkEmailRequest;
(function (SendBulkEmailRequest) {
    /**
     * @internal
     */
    SendBulkEmailRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendBulkEmailRequest || (SendBulkEmailRequest = {}));
export var SendBulkEmailResponse;
(function (SendBulkEmailResponse) {
    /**
     * @internal
     */
    SendBulkEmailResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendBulkEmailResponse || (SendBulkEmailResponse = {}));
export var SendCustomVerificationEmailRequest;
(function (SendCustomVerificationEmailRequest) {
    /**
     * @internal
     */
    SendCustomVerificationEmailRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendCustomVerificationEmailRequest || (SendCustomVerificationEmailRequest = {}));
export var SendCustomVerificationEmailResponse;
(function (SendCustomVerificationEmailResponse) {
    /**
     * @internal
     */
    SendCustomVerificationEmailResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendCustomVerificationEmailResponse || (SendCustomVerificationEmailResponse = {}));
export var SendEmailRequest;
(function (SendEmailRequest) {
    /**
     * @internal
     */
    SendEmailRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendEmailRequest || (SendEmailRequest = {}));
export var SendEmailResponse;
(function (SendEmailResponse) {
    /**
     * @internal
     */
    SendEmailResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SendEmailResponse || (SendEmailResponse = {}));
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
export var TestRenderEmailTemplateRequest;
(function (TestRenderEmailTemplateRequest) {
    /**
     * @internal
     */
    TestRenderEmailTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestRenderEmailTemplateRequest || (TestRenderEmailTemplateRequest = {}));
export var TestRenderEmailTemplateResponse;
(function (TestRenderEmailTemplateResponse) {
    /**
     * @internal
     */
    TestRenderEmailTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestRenderEmailTemplateResponse || (TestRenderEmailTemplateResponse = {}));
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
export var UpdateConfigurationSetEventDestinationRequest;
(function (UpdateConfigurationSetEventDestinationRequest) {
    /**
     * @internal
     */
    UpdateConfigurationSetEventDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateConfigurationSetEventDestinationRequest || (UpdateConfigurationSetEventDestinationRequest = {}));
export var UpdateConfigurationSetEventDestinationResponse;
(function (UpdateConfigurationSetEventDestinationResponse) {
    /**
     * @internal
     */
    UpdateConfigurationSetEventDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateConfigurationSetEventDestinationResponse || (UpdateConfigurationSetEventDestinationResponse = {}));
export var UpdateContactRequest;
(function (UpdateContactRequest) {
    /**
     * @internal
     */
    UpdateContactRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateContactRequest || (UpdateContactRequest = {}));
export var UpdateContactResponse;
(function (UpdateContactResponse) {
    /**
     * @internal
     */
    UpdateContactResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateContactResponse || (UpdateContactResponse = {}));
export var UpdateContactListRequest;
(function (UpdateContactListRequest) {
    /**
     * @internal
     */
    UpdateContactListRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateContactListRequest || (UpdateContactListRequest = {}));
export var UpdateContactListResponse;
(function (UpdateContactListResponse) {
    /**
     * @internal
     */
    UpdateContactListResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateContactListResponse || (UpdateContactListResponse = {}));
export var UpdateCustomVerificationEmailTemplateRequest;
(function (UpdateCustomVerificationEmailTemplateRequest) {
    /**
     * @internal
     */
    UpdateCustomVerificationEmailTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateCustomVerificationEmailTemplateRequest || (UpdateCustomVerificationEmailTemplateRequest = {}));
export var UpdateCustomVerificationEmailTemplateResponse;
(function (UpdateCustomVerificationEmailTemplateResponse) {
    /**
     * @internal
     */
    UpdateCustomVerificationEmailTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateCustomVerificationEmailTemplateResponse || (UpdateCustomVerificationEmailTemplateResponse = {}));
export var UpdateEmailIdentityPolicyRequest;
(function (UpdateEmailIdentityPolicyRequest) {
    /**
     * @internal
     */
    UpdateEmailIdentityPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateEmailIdentityPolicyRequest || (UpdateEmailIdentityPolicyRequest = {}));
export var UpdateEmailIdentityPolicyResponse;
(function (UpdateEmailIdentityPolicyResponse) {
    /**
     * @internal
     */
    UpdateEmailIdentityPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateEmailIdentityPolicyResponse || (UpdateEmailIdentityPolicyResponse = {}));
export var UpdateEmailTemplateRequest;
(function (UpdateEmailTemplateRequest) {
    /**
     * @internal
     */
    UpdateEmailTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateEmailTemplateRequest || (UpdateEmailTemplateRequest = {}));
export var UpdateEmailTemplateResponse;
(function (UpdateEmailTemplateResponse) {
    /**
     * @internal
     */
    UpdateEmailTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateEmailTemplateResponse || (UpdateEmailTemplateResponse = {}));
//# sourceMappingURL=models_0.js.map