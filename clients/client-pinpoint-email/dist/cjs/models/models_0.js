"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDedicatedIpPoolResponse = exports.DeleteDedicatedIpPoolRequest = exports.DeleteConfigurationSetEventDestinationResponse = exports.DeleteConfigurationSetEventDestinationRequest = exports.DeleteConfigurationSetResponse = exports.DeleteConfigurationSetRequest = exports.CreateEmailIdentityResponse = exports.IdentityType = exports.DkimAttributes = exports.DkimStatus = exports.CreateEmailIdentityRequest = exports.SendingPausedException = exports.MessageRejected = exports.MailFromDomainNotVerifiedException = exports.CreateDeliverabilityTestReportResponse = exports.DeliverabilityTestStatus = exports.CreateDeliverabilityTestReportRequest = exports.EmailContent = exports.Template = exports.Message = exports.Body = exports.Content = exports.RawMessage = exports.CreateDedicatedIpPoolResponse = exports.CreateDedicatedIpPoolRequest = exports.CreateConfigurationSetEventDestinationResponse = exports.CreateConfigurationSetEventDestinationRequest = exports.EventDestinationDefinition = exports.SnsDestination = exports.PinpointDestination = exports.EventType = exports.KinesisFirehoseDestination = exports.CloudWatchDestination = exports.CloudWatchDimensionConfiguration = exports.DimensionValueSource = exports.TooManyRequestsException = exports.NotFoundException = exports.LimitExceededException = exports.CreateConfigurationSetResponse = exports.CreateConfigurationSetRequest = exports.TrackingOptions = exports.Tag = exports.SendingOptions = exports.ReputationOptions = exports.DeliveryOptions = exports.TlsPolicy = exports.ConcurrentModificationException = exports.BadRequestException = exports.AlreadyExistsException = exports.AccountSuspendedException = void 0;
exports.ListDomainDeliverabilityCampaignsRequest = exports.ListDeliverabilityTestReportsResponse = exports.ListDeliverabilityTestReportsRequest = exports.ListDedicatedIpPoolsResponse = exports.ListDedicatedIpPoolsRequest = exports.ListConfigurationSetsResponse = exports.ListConfigurationSetsRequest = exports.GetEmailIdentityResponse = exports.MailFromAttributes = exports.MailFromDomainStatus = exports.BehaviorOnMxFailure = exports.GetEmailIdentityRequest = exports.GetDomainStatisticsReportResponse = exports.OverallVolume = exports.DailyVolume = exports.VolumeStatistics = exports.DomainIspPlacement = exports.GetDomainStatisticsReportRequest = exports.GetDomainDeliverabilityCampaignResponse = exports.DomainDeliverabilityCampaign = exports.GetDomainDeliverabilityCampaignRequest = exports.GetDeliverabilityTestReportResponse = exports.IspPlacement = exports.PlacementStatistics = exports.DeliverabilityTestReport = exports.GetDeliverabilityTestReportRequest = exports.GetDeliverabilityDashboardOptionsResponse = exports.DomainDeliverabilityTrackingOption = exports.InboxPlacementTrackingOption = exports.DeliverabilityDashboardAccountStatus = exports.GetDeliverabilityDashboardOptionsRequest = exports.GetDedicatedIpsResponse = exports.GetDedicatedIpsRequest = exports.GetDedicatedIpResponse = exports.DedicatedIp = exports.WarmupStatus = exports.GetDedicatedIpRequest = exports.GetConfigurationSetEventDestinationsResponse = exports.EventDestination = exports.GetConfigurationSetEventDestinationsRequest = exports.GetConfigurationSetResponse = exports.GetConfigurationSetRequest = exports.GetBlacklistReportsResponse = exports.BlacklistEntry = exports.GetBlacklistReportsRequest = exports.GetAccountResponse = exports.SendQuota = exports.GetAccountRequest = exports.DeleteEmailIdentityResponse = exports.DeleteEmailIdentityRequest = void 0;
exports.UpdateConfigurationSetEventDestinationResponse = exports.UpdateConfigurationSetEventDestinationRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.SendEmailResponse = exports.SendEmailRequest = exports.MessageTag = exports.Destination = exports.PutEmailIdentityMailFromAttributesResponse = exports.PutEmailIdentityMailFromAttributesRequest = exports.PutEmailIdentityFeedbackAttributesResponse = exports.PutEmailIdentityFeedbackAttributesRequest = exports.PutEmailIdentityDkimAttributesResponse = exports.PutEmailIdentityDkimAttributesRequest = exports.PutDeliverabilityDashboardOptionResponse = exports.PutDeliverabilityDashboardOptionRequest = exports.PutDedicatedIpWarmupAttributesResponse = exports.PutDedicatedIpWarmupAttributesRequest = exports.PutDedicatedIpInPoolResponse = exports.PutDedicatedIpInPoolRequest = exports.PutConfigurationSetTrackingOptionsResponse = exports.PutConfigurationSetTrackingOptionsRequest = exports.PutConfigurationSetSendingOptionsResponse = exports.PutConfigurationSetSendingOptionsRequest = exports.PutConfigurationSetReputationOptionsResponse = exports.PutConfigurationSetReputationOptionsRequest = exports.PutConfigurationSetDeliveryOptionsResponse = exports.PutConfigurationSetDeliveryOptionsRequest = exports.PutAccountSendingAttributesResponse = exports.PutAccountSendingAttributesRequest = exports.PutAccountDedicatedIpWarmupAttributesResponse = exports.PutAccountDedicatedIpWarmupAttributesRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListEmailIdentitiesResponse = exports.IdentityInfo = exports.ListEmailIdentitiesRequest = exports.ListDomainDeliverabilityCampaignsResponse = void 0;
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
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
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
    EventType["OPEN"] = "OPEN";
    EventType["REJECT"] = "REJECT";
    EventType["RENDERING_FAILURE"] = "RENDERING_FAILURE";
    EventType["SEND"] = "SEND";
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
var Message;
(function (Message) {
    /**
     * @internal
     */
    Message.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Message = exports.Message || (exports.Message = {}));
var Template;
(function (Template) {
    /**
     * @internal
     */
    Template.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Template = exports.Template || (exports.Template = {}));
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
var CreateEmailIdentityRequest;
(function (CreateEmailIdentityRequest) {
    /**
     * @internal
     */
    CreateEmailIdentityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEmailIdentityRequest = exports.CreateEmailIdentityRequest || (exports.CreateEmailIdentityRequest = {}));
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
var GetAccountResponse;
(function (GetAccountResponse) {
    /**
     * @internal
     */
    GetAccountResponse.filterSensitiveLog = (obj) => ({
        ...obj,
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
var BlacklistEntry;
(function (BlacklistEntry) {
    /**
     * @internal
     */
    BlacklistEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlacklistEntry = exports.BlacklistEntry || (exports.BlacklistEntry = {}));
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
var EventDestination;
(function (EventDestination) {
    /**
     * @internal
     */
    EventDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventDestination = exports.EventDestination || (exports.EventDestination = {}));
var GetConfigurationSetEventDestinationsResponse;
(function (GetConfigurationSetEventDestinationsResponse) {
    /**
     * @internal
     */
    GetConfigurationSetEventDestinationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetConfigurationSetEventDestinationsResponse = exports.GetConfigurationSetEventDestinationsResponse || (exports.GetConfigurationSetEventDestinationsResponse = {}));
var GetDedicatedIpRequest;
(function (GetDedicatedIpRequest) {
    /**
     * @internal
     */
    GetDedicatedIpRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDedicatedIpRequest = exports.GetDedicatedIpRequest || (exports.GetDedicatedIpRequest = {}));
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
var DeliverabilityDashboardAccountStatus;
(function (DeliverabilityDashboardAccountStatus) {
    DeliverabilityDashboardAccountStatus["ACTIVE"] = "ACTIVE";
    DeliverabilityDashboardAccountStatus["DISABLED"] = "DISABLED";
    DeliverabilityDashboardAccountStatus["PENDING_EXPIRATION"] = "PENDING_EXPIRATION";
})(DeliverabilityDashboardAccountStatus = exports.DeliverabilityDashboardAccountStatus || (exports.DeliverabilityDashboardAccountStatus = {}));
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
var DeliverabilityTestReport;
(function (DeliverabilityTestReport) {
    /**
     * @internal
     */
    DeliverabilityTestReport.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeliverabilityTestReport = exports.DeliverabilityTestReport || (exports.DeliverabilityTestReport = {}));
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
var DomainDeliverabilityCampaign;
(function (DomainDeliverabilityCampaign) {
    /**
     * @internal
     */
    DomainDeliverabilityCampaign.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DomainDeliverabilityCampaign = exports.DomainDeliverabilityCampaign || (exports.DomainDeliverabilityCampaign = {}));
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
var BehaviorOnMxFailure;
(function (BehaviorOnMxFailure) {
    BehaviorOnMxFailure["REJECT_MESSAGE"] = "REJECT_MESSAGE";
    BehaviorOnMxFailure["USE_DEFAULT_VALUE"] = "USE_DEFAULT_VALUE";
})(BehaviorOnMxFailure = exports.BehaviorOnMxFailure || (exports.BehaviorOnMxFailure = {}));
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
var IdentityInfo;
(function (IdentityInfo) {
    /**
     * @internal
     */
    IdentityInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityInfo = exports.IdentityInfo || (exports.IdentityInfo = {}));
var ListEmailIdentitiesResponse;
(function (ListEmailIdentitiesResponse) {
    /**
     * @internal
     */
    ListEmailIdentitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEmailIdentitiesResponse = exports.ListEmailIdentitiesResponse || (exports.ListEmailIdentitiesResponse = {}));
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
var Destination;
(function (Destination) {
    /**
     * @internal
     */
    Destination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Destination = exports.Destination || (exports.Destination = {}));
var MessageTag;
(function (MessageTag) {
    /**
     * @internal
     */
    MessageTag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageTag = exports.MessageTag || (exports.MessageTag = {}));
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
//# sourceMappingURL=models_0.js.map