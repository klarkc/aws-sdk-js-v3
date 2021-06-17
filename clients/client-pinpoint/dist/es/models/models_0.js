import { __assign } from "tslib";
export var __EndpointTypesElement;
(function (__EndpointTypesElement) {
    __EndpointTypesElement["ADM"] = "ADM";
    __EndpointTypesElement["APNS"] = "APNS";
    __EndpointTypesElement["APNS_SANDBOX"] = "APNS_SANDBOX";
    __EndpointTypesElement["APNS_VOIP"] = "APNS_VOIP";
    __EndpointTypesElement["APNS_VOIP_SANDBOX"] = "APNS_VOIP_SANDBOX";
    __EndpointTypesElement["BAIDU"] = "BAIDU";
    __EndpointTypesElement["CUSTOM"] = "CUSTOM";
    __EndpointTypesElement["EMAIL"] = "EMAIL";
    __EndpointTypesElement["GCM"] = "GCM";
    __EndpointTypesElement["PUSH"] = "PUSH";
    __EndpointTypesElement["SMS"] = "SMS";
    __EndpointTypesElement["VOICE"] = "VOICE";
})(__EndpointTypesElement || (__EndpointTypesElement = {}));
export var Action;
(function (Action) {
    Action["DEEP_LINK"] = "DEEP_LINK";
    Action["OPEN_APP"] = "OPEN_APP";
    Action["URL"] = "URL";
})(Action || (Action = {}));
export var ActivityResponse;
(function (ActivityResponse) {
    /**
     * @internal
     */
    ActivityResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActivityResponse || (ActivityResponse = {}));
export var ActivitiesResponse;
(function (ActivitiesResponse) {
    /**
     * @internal
     */
    ActivitiesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActivitiesResponse || (ActivitiesResponse = {}));
export var AttributeType;
(function (AttributeType) {
    AttributeType["AFTER"] = "AFTER";
    AttributeType["BEFORE"] = "BEFORE";
    AttributeType["BETWEEN"] = "BETWEEN";
    AttributeType["CONTAINS"] = "CONTAINS";
    AttributeType["EXCLUSIVE"] = "EXCLUSIVE";
    AttributeType["INCLUSIVE"] = "INCLUSIVE";
    AttributeType["ON"] = "ON";
})(AttributeType || (AttributeType = {}));
export var AttributeDimension;
(function (AttributeDimension) {
    /**
     * @internal
     */
    AttributeDimension.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttributeDimension || (AttributeDimension = {}));
export var DimensionType;
(function (DimensionType) {
    DimensionType["EXCLUSIVE"] = "EXCLUSIVE";
    DimensionType["INCLUSIVE"] = "INCLUSIVE";
})(DimensionType || (DimensionType = {}));
export var SetDimension;
(function (SetDimension) {
    /**
     * @internal
     */
    SetDimension.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SetDimension || (SetDimension = {}));
export var MetricDimension;
(function (MetricDimension) {
    /**
     * @internal
     */
    MetricDimension.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricDimension || (MetricDimension = {}));
export var EventDimensions;
(function (EventDimensions) {
    /**
     * @internal
     */
    EventDimensions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventDimensions || (EventDimensions = {}));
export var EventCondition;
(function (EventCondition) {
    /**
     * @internal
     */
    EventCondition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventCondition || (EventCondition = {}));
export var SegmentCondition;
(function (SegmentCondition) {
    /**
     * @internal
     */
    SegmentCondition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SegmentCondition || (SegmentCondition = {}));
export var Duration;
(function (Duration) {
    Duration["DAY_14"] = "DAY_14";
    Duration["DAY_30"] = "DAY_30";
    Duration["DAY_7"] = "DAY_7";
    Duration["HR_24"] = "HR_24";
})(Duration || (Duration = {}));
export var RecencyType;
(function (RecencyType) {
    RecencyType["ACTIVE"] = "ACTIVE";
    RecencyType["INACTIVE"] = "INACTIVE";
})(RecencyType || (RecencyType = {}));
export var RecencyDimension;
(function (RecencyDimension) {
    /**
     * @internal
     */
    RecencyDimension.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecencyDimension || (RecencyDimension = {}));
export var SegmentBehaviors;
(function (SegmentBehaviors) {
    /**
     * @internal
     */
    SegmentBehaviors.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SegmentBehaviors || (SegmentBehaviors = {}));
export var SegmentDemographics;
(function (SegmentDemographics) {
    /**
     * @internal
     */
    SegmentDemographics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SegmentDemographics || (SegmentDemographics = {}));
export var GPSCoordinates;
(function (GPSCoordinates) {
    /**
     * @internal
     */
    GPSCoordinates.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GPSCoordinates || (GPSCoordinates = {}));
export var GPSPointDimension;
(function (GPSPointDimension) {
    /**
     * @internal
     */
    GPSPointDimension.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GPSPointDimension || (GPSPointDimension = {}));
export var SegmentLocation;
(function (SegmentLocation) {
    /**
     * @internal
     */
    SegmentLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SegmentLocation || (SegmentLocation = {}));
export var SegmentDimensions;
(function (SegmentDimensions) {
    /**
     * @internal
     */
    SegmentDimensions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SegmentDimensions || (SegmentDimensions = {}));
export var SimpleCondition;
(function (SimpleCondition) {
    /**
     * @internal
     */
    SimpleCondition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimpleCondition || (SimpleCondition = {}));
export var Operator;
(function (Operator) {
    Operator["ALL"] = "ALL";
    Operator["ANY"] = "ANY";
})(Operator || (Operator = {}));
export var Condition;
(function (Condition) {
    /**
     * @internal
     */
    Condition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Condition || (Condition = {}));
export var WaitTime;
(function (WaitTime) {
    /**
     * @internal
     */
    WaitTime.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WaitTime || (WaitTime = {}));
export var ConditionalSplitActivity;
(function (ConditionalSplitActivity) {
    /**
     * @internal
     */
    ConditionalSplitActivity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConditionalSplitActivity || (ConditionalSplitActivity = {}));
export var JourneyCustomMessage;
(function (JourneyCustomMessage) {
    /**
     * @internal
     */
    JourneyCustomMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JourneyCustomMessage || (JourneyCustomMessage = {}));
export var CustomMessageActivity;
(function (CustomMessageActivity) {
    /**
     * @internal
     */
    CustomMessageActivity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomMessageActivity || (CustomMessageActivity = {}));
export var JourneyEmailMessage;
(function (JourneyEmailMessage) {
    /**
     * @internal
     */
    JourneyEmailMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JourneyEmailMessage || (JourneyEmailMessage = {}));
export var EmailMessageActivity;
(function (EmailMessageActivity) {
    /**
     * @internal
     */
    EmailMessageActivity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmailMessageActivity || (EmailMessageActivity = {}));
export var HoldoutActivity;
(function (HoldoutActivity) {
    /**
     * @internal
     */
    HoldoutActivity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HoldoutActivity || (HoldoutActivity = {}));
export var MultiConditionalBranch;
(function (MultiConditionalBranch) {
    /**
     * @internal
     */
    MultiConditionalBranch.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiConditionalBranch || (MultiConditionalBranch = {}));
export var MultiConditionalSplitActivity;
(function (MultiConditionalSplitActivity) {
    /**
     * @internal
     */
    MultiConditionalSplitActivity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MultiConditionalSplitActivity || (MultiConditionalSplitActivity = {}));
export var JourneyPushMessage;
(function (JourneyPushMessage) {
    /**
     * @internal
     */
    JourneyPushMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JourneyPushMessage || (JourneyPushMessage = {}));
export var PushMessageActivity;
(function (PushMessageActivity) {
    /**
     * @internal
     */
    PushMessageActivity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PushMessageActivity || (PushMessageActivity = {}));
export var RandomSplitEntry;
(function (RandomSplitEntry) {
    /**
     * @internal
     */
    RandomSplitEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RandomSplitEntry || (RandomSplitEntry = {}));
export var RandomSplitActivity;
(function (RandomSplitActivity) {
    /**
     * @internal
     */
    RandomSplitActivity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RandomSplitActivity || (RandomSplitActivity = {}));
export var MessageType;
(function (MessageType) {
    MessageType["PROMOTIONAL"] = "PROMOTIONAL";
    MessageType["TRANSACTIONAL"] = "TRANSACTIONAL";
})(MessageType || (MessageType = {}));
export var JourneySMSMessage;
(function (JourneySMSMessage) {
    /**
     * @internal
     */
    JourneySMSMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JourneySMSMessage || (JourneySMSMessage = {}));
export var SMSMessageActivity;
(function (SMSMessageActivity) {
    /**
     * @internal
     */
    SMSMessageActivity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SMSMessageActivity || (SMSMessageActivity = {}));
export var WaitActivity;
(function (WaitActivity) {
    /**
     * @internal
     */
    WaitActivity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WaitActivity || (WaitActivity = {}));
export var Activity;
(function (Activity) {
    /**
     * @internal
     */
    Activity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Activity || (Activity = {}));
export var ChannelType;
(function (ChannelType) {
    ChannelType["ADM"] = "ADM";
    ChannelType["APNS"] = "APNS";
    ChannelType["APNS_SANDBOX"] = "APNS_SANDBOX";
    ChannelType["APNS_VOIP"] = "APNS_VOIP";
    ChannelType["APNS_VOIP_SANDBOX"] = "APNS_VOIP_SANDBOX";
    ChannelType["BAIDU"] = "BAIDU";
    ChannelType["CUSTOM"] = "CUSTOM";
    ChannelType["EMAIL"] = "EMAIL";
    ChannelType["GCM"] = "GCM";
    ChannelType["PUSH"] = "PUSH";
    ChannelType["SMS"] = "SMS";
    ChannelType["VOICE"] = "VOICE";
})(ChannelType || (ChannelType = {}));
export var AddressConfiguration;
(function (AddressConfiguration) {
    /**
     * @internal
     */
    AddressConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AddressConfiguration || (AddressConfiguration = {}));
export var ADMChannelRequest;
(function (ADMChannelRequest) {
    /**
     * @internal
     */
    ADMChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ADMChannelRequest || (ADMChannelRequest = {}));
export var ADMChannelResponse;
(function (ADMChannelResponse) {
    /**
     * @internal
     */
    ADMChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ADMChannelResponse || (ADMChannelResponse = {}));
export var ADMMessage;
(function (ADMMessage) {
    /**
     * @internal
     */
    ADMMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ADMMessage || (ADMMessage = {}));
export var AndroidPushNotificationTemplate;
(function (AndroidPushNotificationTemplate) {
    /**
     * @internal
     */
    AndroidPushNotificationTemplate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AndroidPushNotificationTemplate || (AndroidPushNotificationTemplate = {}));
export var APNSChannelRequest;
(function (APNSChannelRequest) {
    /**
     * @internal
     */
    APNSChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(APNSChannelRequest || (APNSChannelRequest = {}));
export var APNSChannelResponse;
(function (APNSChannelResponse) {
    /**
     * @internal
     */
    APNSChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(APNSChannelResponse || (APNSChannelResponse = {}));
export var APNSMessage;
(function (APNSMessage) {
    /**
     * @internal
     */
    APNSMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(APNSMessage || (APNSMessage = {}));
export var APNSPushNotificationTemplate;
(function (APNSPushNotificationTemplate) {
    /**
     * @internal
     */
    APNSPushNotificationTemplate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(APNSPushNotificationTemplate || (APNSPushNotificationTemplate = {}));
export var APNSSandboxChannelRequest;
(function (APNSSandboxChannelRequest) {
    /**
     * @internal
     */
    APNSSandboxChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(APNSSandboxChannelRequest || (APNSSandboxChannelRequest = {}));
export var APNSSandboxChannelResponse;
(function (APNSSandboxChannelResponse) {
    /**
     * @internal
     */
    APNSSandboxChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(APNSSandboxChannelResponse || (APNSSandboxChannelResponse = {}));
export var APNSVoipChannelRequest;
(function (APNSVoipChannelRequest) {
    /**
     * @internal
     */
    APNSVoipChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(APNSVoipChannelRequest || (APNSVoipChannelRequest = {}));
export var APNSVoipChannelResponse;
(function (APNSVoipChannelResponse) {
    /**
     * @internal
     */
    APNSVoipChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(APNSVoipChannelResponse || (APNSVoipChannelResponse = {}));
export var APNSVoipSandboxChannelRequest;
(function (APNSVoipSandboxChannelRequest) {
    /**
     * @internal
     */
    APNSVoipSandboxChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(APNSVoipSandboxChannelRequest || (APNSVoipSandboxChannelRequest = {}));
export var APNSVoipSandboxChannelResponse;
(function (APNSVoipSandboxChannelResponse) {
    /**
     * @internal
     */
    APNSVoipSandboxChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(APNSVoipSandboxChannelResponse || (APNSVoipSandboxChannelResponse = {}));
export var ResultRowValue;
(function (ResultRowValue) {
    /**
     * @internal
     */
    ResultRowValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResultRowValue || (ResultRowValue = {}));
export var ResultRow;
(function (ResultRow) {
    /**
     * @internal
     */
    ResultRow.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResultRow || (ResultRow = {}));
export var BaseKpiResult;
(function (BaseKpiResult) {
    /**
     * @internal
     */
    BaseKpiResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BaseKpiResult || (BaseKpiResult = {}));
export var ApplicationDateRangeKpiResponse;
(function (ApplicationDateRangeKpiResponse) {
    /**
     * @internal
     */
    ApplicationDateRangeKpiResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ApplicationDateRangeKpiResponse || (ApplicationDateRangeKpiResponse = {}));
export var ApplicationResponse;
(function (ApplicationResponse) {
    /**
     * @internal
     */
    ApplicationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ApplicationResponse || (ApplicationResponse = {}));
export var Mode;
(function (Mode) {
    Mode["DELIVERY"] = "DELIVERY";
    Mode["FILTER"] = "FILTER";
})(Mode || (Mode = {}));
export var CampaignHook;
(function (CampaignHook) {
    /**
     * @internal
     */
    CampaignHook.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CampaignHook || (CampaignHook = {}));
export var CampaignLimits;
(function (CampaignLimits) {
    /**
     * @internal
     */
    CampaignLimits.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CampaignLimits || (CampaignLimits = {}));
export var QuietTime;
(function (QuietTime) {
    /**
     * @internal
     */
    QuietTime.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QuietTime || (QuietTime = {}));
export var ApplicationSettingsResource;
(function (ApplicationSettingsResource) {
    /**
     * @internal
     */
    ApplicationSettingsResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ApplicationSettingsResource || (ApplicationSettingsResource = {}));
export var ApplicationsResponse;
(function (ApplicationsResponse) {
    /**
     * @internal
     */
    ApplicationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ApplicationsResponse || (ApplicationsResponse = {}));
export var AttributesResource;
(function (AttributesResource) {
    /**
     * @internal
     */
    AttributesResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AttributesResource || (AttributesResource = {}));
export var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadRequestException || (BadRequestException = {}));
export var BaiduChannelRequest;
(function (BaiduChannelRequest) {
    /**
     * @internal
     */
    BaiduChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BaiduChannelRequest || (BaiduChannelRequest = {}));
export var BaiduChannelResponse;
(function (BaiduChannelResponse) {
    /**
     * @internal
     */
    BaiduChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BaiduChannelResponse || (BaiduChannelResponse = {}));
export var BaiduMessage;
(function (BaiduMessage) {
    /**
     * @internal
     */
    BaiduMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BaiduMessage || (BaiduMessage = {}));
export var CampaignCustomMessage;
(function (CampaignCustomMessage) {
    /**
     * @internal
     */
    CampaignCustomMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CampaignCustomMessage || (CampaignCustomMessage = {}));
export var CampaignDateRangeKpiResponse;
(function (CampaignDateRangeKpiResponse) {
    /**
     * @internal
     */
    CampaignDateRangeKpiResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CampaignDateRangeKpiResponse || (CampaignDateRangeKpiResponse = {}));
export var CampaignEmailMessage;
(function (CampaignEmailMessage) {
    /**
     * @internal
     */
    CampaignEmailMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CampaignEmailMessage || (CampaignEmailMessage = {}));
export var FilterType;
(function (FilterType) {
    FilterType["ENDPOINT"] = "ENDPOINT";
    FilterType["SYSTEM"] = "SYSTEM";
})(FilterType || (FilterType = {}));
export var CampaignEventFilter;
(function (CampaignEventFilter) {
    /**
     * @internal
     */
    CampaignEventFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CampaignEventFilter || (CampaignEventFilter = {}));
export var CustomDeliveryConfiguration;
(function (CustomDeliveryConfiguration) {
    /**
     * @internal
     */
    CustomDeliveryConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomDeliveryConfiguration || (CustomDeliveryConfiguration = {}));
export var Message;
(function (Message) {
    /**
     * @internal
     */
    Message.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Message || (Message = {}));
export var CampaignSmsMessage;
(function (CampaignSmsMessage) {
    /**
     * @internal
     */
    CampaignSmsMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CampaignSmsMessage || (CampaignSmsMessage = {}));
export var MessageConfiguration;
(function (MessageConfiguration) {
    /**
     * @internal
     */
    MessageConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MessageConfiguration || (MessageConfiguration = {}));
export var Frequency;
(function (Frequency) {
    Frequency["DAILY"] = "DAILY";
    Frequency["EVENT"] = "EVENT";
    Frequency["HOURLY"] = "HOURLY";
    Frequency["MONTHLY"] = "MONTHLY";
    Frequency["ONCE"] = "ONCE";
    Frequency["WEEKLY"] = "WEEKLY";
})(Frequency || (Frequency = {}));
export var Schedule;
(function (Schedule) {
    /**
     * @internal
     */
    Schedule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Schedule || (Schedule = {}));
export var CampaignStatus;
(function (CampaignStatus) {
    CampaignStatus["COMPLETED"] = "COMPLETED";
    CampaignStatus["DELETED"] = "DELETED";
    CampaignStatus["EXECUTING"] = "EXECUTING";
    CampaignStatus["INVALID"] = "INVALID";
    CampaignStatus["PAUSED"] = "PAUSED";
    CampaignStatus["PENDING_NEXT_RUN"] = "PENDING_NEXT_RUN";
    CampaignStatus["SCHEDULED"] = "SCHEDULED";
})(CampaignStatus || (CampaignStatus = {}));
export var CampaignState;
(function (CampaignState) {
    /**
     * @internal
     */
    CampaignState.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CampaignState || (CampaignState = {}));
export var Template;
(function (Template) {
    /**
     * @internal
     */
    Template.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Template || (Template = {}));
export var TemplateConfiguration;
(function (TemplateConfiguration) {
    /**
     * @internal
     */
    TemplateConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TemplateConfiguration || (TemplateConfiguration = {}));
export var TreatmentResource;
(function (TreatmentResource) {
    /**
     * @internal
     */
    TreatmentResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TreatmentResource || (TreatmentResource = {}));
export var CampaignResponse;
(function (CampaignResponse) {
    /**
     * @internal
     */
    CampaignResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CampaignResponse || (CampaignResponse = {}));
export var CampaignsResponse;
(function (CampaignsResponse) {
    /**
     * @internal
     */
    CampaignsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CampaignsResponse || (CampaignsResponse = {}));
export var ChannelResponse;
(function (ChannelResponse) {
    /**
     * @internal
     */
    ChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChannelResponse || (ChannelResponse = {}));
export var ChannelsResponse;
(function (ChannelsResponse) {
    /**
     * @internal
     */
    ChannelsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ChannelsResponse || (ChannelsResponse = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var CreateApplicationRequest;
(function (CreateApplicationRequest) {
    /**
     * @internal
     */
    CreateApplicationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateApplicationRequest || (CreateApplicationRequest = {}));
export var CreateAppRequest;
(function (CreateAppRequest) {
    /**
     * @internal
     */
    CreateAppRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAppRequest || (CreateAppRequest = {}));
export var CreateAppResponse;
(function (CreateAppResponse) {
    /**
     * @internal
     */
    CreateAppResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAppResponse || (CreateAppResponse = {}));
export var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ForbiddenException || (ForbiddenException = {}));
export var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerErrorException || (InternalServerErrorException = {}));
export var MethodNotAllowedException;
(function (MethodNotAllowedException) {
    /**
     * @internal
     */
    MethodNotAllowedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MethodNotAllowedException || (MethodNotAllowedException = {}));
export var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var PayloadTooLargeException;
(function (PayloadTooLargeException) {
    /**
     * @internal
     */
    PayloadTooLargeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PayloadTooLargeException || (PayloadTooLargeException = {}));
export var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyRequestsException || (TooManyRequestsException = {}));
export var WriteTreatmentResource;
(function (WriteTreatmentResource) {
    /**
     * @internal
     */
    WriteTreatmentResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WriteTreatmentResource || (WriteTreatmentResource = {}));
export var WriteCampaignRequest;
(function (WriteCampaignRequest) {
    /**
     * @internal
     */
    WriteCampaignRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WriteCampaignRequest || (WriteCampaignRequest = {}));
export var CreateCampaignRequest;
(function (CreateCampaignRequest) {
    /**
     * @internal
     */
    CreateCampaignRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCampaignRequest || (CreateCampaignRequest = {}));
export var CreateCampaignResponse;
(function (CreateCampaignResponse) {
    /**
     * @internal
     */
    CreateCampaignResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCampaignResponse || (CreateCampaignResponse = {}));
export var EmailTemplateRequest;
(function (EmailTemplateRequest) {
    /**
     * @internal
     */
    EmailTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmailTemplateRequest || (EmailTemplateRequest = {}));
export var CreateEmailTemplateRequest;
(function (CreateEmailTemplateRequest) {
    /**
     * @internal
     */
    CreateEmailTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEmailTemplateRequest || (CreateEmailTemplateRequest = {}));
export var CreateTemplateMessageBody;
(function (CreateTemplateMessageBody) {
    /**
     * @internal
     */
    CreateTemplateMessageBody.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTemplateMessageBody || (CreateTemplateMessageBody = {}));
export var CreateEmailTemplateResponse;
(function (CreateEmailTemplateResponse) {
    /**
     * @internal
     */
    CreateEmailTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEmailTemplateResponse || (CreateEmailTemplateResponse = {}));
export var ExportJobRequest;
(function (ExportJobRequest) {
    /**
     * @internal
     */
    ExportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportJobRequest || (ExportJobRequest = {}));
export var CreateExportJobRequest;
(function (CreateExportJobRequest) {
    /**
     * @internal
     */
    CreateExportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateExportJobRequest || (CreateExportJobRequest = {}));
export var ExportJobResource;
(function (ExportJobResource) {
    /**
     * @internal
     */
    ExportJobResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportJobResource || (ExportJobResource = {}));
export var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["COMPLETING"] = "COMPLETING";
    JobStatus["CREATED"] = "CREATED";
    JobStatus["FAILED"] = "FAILED";
    JobStatus["FAILING"] = "FAILING";
    JobStatus["INITIALIZING"] = "INITIALIZING";
    JobStatus["PENDING_JOB"] = "PENDING_JOB";
    JobStatus["PREPARING_FOR_INITIALIZATION"] = "PREPARING_FOR_INITIALIZATION";
    JobStatus["PROCESSING"] = "PROCESSING";
})(JobStatus || (JobStatus = {}));
export var ExportJobResponse;
(function (ExportJobResponse) {
    /**
     * @internal
     */
    ExportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportJobResponse || (ExportJobResponse = {}));
export var CreateExportJobResponse;
(function (CreateExportJobResponse) {
    /**
     * @internal
     */
    CreateExportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateExportJobResponse || (CreateExportJobResponse = {}));
export var Format;
(function (Format) {
    Format["CSV"] = "CSV";
    Format["JSON"] = "JSON";
})(Format || (Format = {}));
export var ImportJobRequest;
(function (ImportJobRequest) {
    /**
     * @internal
     */
    ImportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportJobRequest || (ImportJobRequest = {}));
export var CreateImportJobRequest;
(function (CreateImportJobRequest) {
    /**
     * @internal
     */
    CreateImportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateImportJobRequest || (CreateImportJobRequest = {}));
export var ImportJobResource;
(function (ImportJobResource) {
    /**
     * @internal
     */
    ImportJobResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportJobResource || (ImportJobResource = {}));
export var ImportJobResponse;
(function (ImportJobResponse) {
    /**
     * @internal
     */
    ImportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportJobResponse || (ImportJobResponse = {}));
export var CreateImportJobResponse;
(function (CreateImportJobResponse) {
    /**
     * @internal
     */
    CreateImportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateImportJobResponse || (CreateImportJobResponse = {}));
export var JourneyLimits;
(function (JourneyLimits) {
    /**
     * @internal
     */
    JourneyLimits.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JourneyLimits || (JourneyLimits = {}));
export var JourneySchedule;
(function (JourneySchedule) {
    /**
     * @internal
     */
    JourneySchedule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JourneySchedule || (JourneySchedule = {}));
export var EventFilter;
(function (EventFilter) {
    /**
     * @internal
     */
    EventFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventFilter || (EventFilter = {}));
export var EventStartCondition;
(function (EventStartCondition) {
    /**
     * @internal
     */
    EventStartCondition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventStartCondition || (EventStartCondition = {}));
export var StartCondition;
(function (StartCondition) {
    /**
     * @internal
     */
    StartCondition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartCondition || (StartCondition = {}));
export var State;
(function (State) {
    State["ACTIVE"] = "ACTIVE";
    State["CANCELLED"] = "CANCELLED";
    State["CLOSED"] = "CLOSED";
    State["COMPLETED"] = "COMPLETED";
    State["DRAFT"] = "DRAFT";
    State["PAUSED"] = "PAUSED";
})(State || (State = {}));
export var WriteJourneyRequest;
(function (WriteJourneyRequest) {
    /**
     * @internal
     */
    WriteJourneyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WriteJourneyRequest || (WriteJourneyRequest = {}));
export var CreateJourneyRequest;
(function (CreateJourneyRequest) {
    /**
     * @internal
     */
    CreateJourneyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJourneyRequest || (CreateJourneyRequest = {}));
export var JourneyResponse;
(function (JourneyResponse) {
    /**
     * @internal
     */
    JourneyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JourneyResponse || (JourneyResponse = {}));
export var CreateJourneyResponse;
(function (CreateJourneyResponse) {
    /**
     * @internal
     */
    CreateJourneyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateJourneyResponse || (CreateJourneyResponse = {}));
export var DefaultPushNotificationTemplate;
(function (DefaultPushNotificationTemplate) {
    /**
     * @internal
     */
    DefaultPushNotificationTemplate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DefaultPushNotificationTemplate || (DefaultPushNotificationTemplate = {}));
export var PushNotificationTemplateRequest;
(function (PushNotificationTemplateRequest) {
    /**
     * @internal
     */
    PushNotificationTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PushNotificationTemplateRequest || (PushNotificationTemplateRequest = {}));
export var CreatePushTemplateRequest;
(function (CreatePushTemplateRequest) {
    /**
     * @internal
     */
    CreatePushTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePushTemplateRequest || (CreatePushTemplateRequest = {}));
export var CreatePushTemplateResponse;
(function (CreatePushTemplateResponse) {
    /**
     * @internal
     */
    CreatePushTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePushTemplateResponse || (CreatePushTemplateResponse = {}));
export var CreateRecommenderConfigurationShape;
(function (CreateRecommenderConfigurationShape) {
    /**
     * @internal
     */
    CreateRecommenderConfigurationShape.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRecommenderConfigurationShape || (CreateRecommenderConfigurationShape = {}));
export var CreateRecommenderConfigurationRequest;
(function (CreateRecommenderConfigurationRequest) {
    /**
     * @internal
     */
    CreateRecommenderConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRecommenderConfigurationRequest || (CreateRecommenderConfigurationRequest = {}));
export var RecommenderConfigurationResponse;
(function (RecommenderConfigurationResponse) {
    /**
     * @internal
     */
    RecommenderConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RecommenderConfigurationResponse || (RecommenderConfigurationResponse = {}));
export var CreateRecommenderConfigurationResponse;
(function (CreateRecommenderConfigurationResponse) {
    /**
     * @internal
     */
    CreateRecommenderConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRecommenderConfigurationResponse || (CreateRecommenderConfigurationResponse = {}));
export var SegmentReference;
(function (SegmentReference) {
    /**
     * @internal
     */
    SegmentReference.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SegmentReference || (SegmentReference = {}));
export var SourceType;
(function (SourceType) {
    SourceType["ALL"] = "ALL";
    SourceType["ANY"] = "ANY";
    SourceType["NONE"] = "NONE";
})(SourceType || (SourceType = {}));
export var Type;
(function (Type) {
    Type["ALL"] = "ALL";
    Type["ANY"] = "ANY";
    Type["NONE"] = "NONE";
})(Type || (Type = {}));
export var SegmentGroup;
(function (SegmentGroup) {
    /**
     * @internal
     */
    SegmentGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SegmentGroup || (SegmentGroup = {}));
export var Include;
(function (Include) {
    Include["ALL"] = "ALL";
    Include["ANY"] = "ANY";
    Include["NONE"] = "NONE";
})(Include || (Include = {}));
export var SegmentGroupList;
(function (SegmentGroupList) {
    /**
     * @internal
     */
    SegmentGroupList.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SegmentGroupList || (SegmentGroupList = {}));
export var WriteSegmentRequest;
(function (WriteSegmentRequest) {
    /**
     * @internal
     */
    WriteSegmentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WriteSegmentRequest || (WriteSegmentRequest = {}));
export var CreateSegmentRequest;
(function (CreateSegmentRequest) {
    /**
     * @internal
     */
    CreateSegmentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSegmentRequest || (CreateSegmentRequest = {}));
export var SegmentImportResource;
(function (SegmentImportResource) {
    /**
     * @internal
     */
    SegmentImportResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SegmentImportResource || (SegmentImportResource = {}));
export var SegmentType;
(function (SegmentType) {
    SegmentType["DIMENSIONAL"] = "DIMENSIONAL";
    SegmentType["IMPORT"] = "IMPORT";
})(SegmentType || (SegmentType = {}));
export var SegmentResponse;
(function (SegmentResponse) {
    /**
     * @internal
     */
    SegmentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SegmentResponse || (SegmentResponse = {}));
export var CreateSegmentResponse;
(function (CreateSegmentResponse) {
    /**
     * @internal
     */
    CreateSegmentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSegmentResponse || (CreateSegmentResponse = {}));
export var SMSTemplateRequest;
(function (SMSTemplateRequest) {
    /**
     * @internal
     */
    SMSTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SMSTemplateRequest || (SMSTemplateRequest = {}));
export var CreateSmsTemplateRequest;
(function (CreateSmsTemplateRequest) {
    /**
     * @internal
     */
    CreateSmsTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSmsTemplateRequest || (CreateSmsTemplateRequest = {}));
export var CreateSmsTemplateResponse;
(function (CreateSmsTemplateResponse) {
    /**
     * @internal
     */
    CreateSmsTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSmsTemplateResponse || (CreateSmsTemplateResponse = {}));
export var VoiceTemplateRequest;
(function (VoiceTemplateRequest) {
    /**
     * @internal
     */
    VoiceTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VoiceTemplateRequest || (VoiceTemplateRequest = {}));
export var CreateVoiceTemplateRequest;
(function (CreateVoiceTemplateRequest) {
    /**
     * @internal
     */
    CreateVoiceTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVoiceTemplateRequest || (CreateVoiceTemplateRequest = {}));
export var CreateVoiceTemplateResponse;
(function (CreateVoiceTemplateResponse) {
    /**
     * @internal
     */
    CreateVoiceTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVoiceTemplateResponse || (CreateVoiceTemplateResponse = {}));
export var DefaultMessage;
(function (DefaultMessage) {
    /**
     * @internal
     */
    DefaultMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DefaultMessage || (DefaultMessage = {}));
export var DefaultPushNotificationMessage;
(function (DefaultPushNotificationMessage) {
    /**
     * @internal
     */
    DefaultPushNotificationMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DefaultPushNotificationMessage || (DefaultPushNotificationMessage = {}));
export var DeleteAdmChannelRequest;
(function (DeleteAdmChannelRequest) {
    /**
     * @internal
     */
    DeleteAdmChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAdmChannelRequest || (DeleteAdmChannelRequest = {}));
export var DeleteAdmChannelResponse;
(function (DeleteAdmChannelResponse) {
    /**
     * @internal
     */
    DeleteAdmChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAdmChannelResponse || (DeleteAdmChannelResponse = {}));
export var DeleteApnsChannelRequest;
(function (DeleteApnsChannelRequest) {
    /**
     * @internal
     */
    DeleteApnsChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteApnsChannelRequest || (DeleteApnsChannelRequest = {}));
export var DeleteApnsChannelResponse;
(function (DeleteApnsChannelResponse) {
    /**
     * @internal
     */
    DeleteApnsChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteApnsChannelResponse || (DeleteApnsChannelResponse = {}));
export var DeleteApnsSandboxChannelRequest;
(function (DeleteApnsSandboxChannelRequest) {
    /**
     * @internal
     */
    DeleteApnsSandboxChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteApnsSandboxChannelRequest || (DeleteApnsSandboxChannelRequest = {}));
export var DeleteApnsSandboxChannelResponse;
(function (DeleteApnsSandboxChannelResponse) {
    /**
     * @internal
     */
    DeleteApnsSandboxChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteApnsSandboxChannelResponse || (DeleteApnsSandboxChannelResponse = {}));
export var DeleteApnsVoipChannelRequest;
(function (DeleteApnsVoipChannelRequest) {
    /**
     * @internal
     */
    DeleteApnsVoipChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteApnsVoipChannelRequest || (DeleteApnsVoipChannelRequest = {}));
export var DeleteApnsVoipChannelResponse;
(function (DeleteApnsVoipChannelResponse) {
    /**
     * @internal
     */
    DeleteApnsVoipChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteApnsVoipChannelResponse || (DeleteApnsVoipChannelResponse = {}));
export var DeleteApnsVoipSandboxChannelRequest;
(function (DeleteApnsVoipSandboxChannelRequest) {
    /**
     * @internal
     */
    DeleteApnsVoipSandboxChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteApnsVoipSandboxChannelRequest || (DeleteApnsVoipSandboxChannelRequest = {}));
export var DeleteApnsVoipSandboxChannelResponse;
(function (DeleteApnsVoipSandboxChannelResponse) {
    /**
     * @internal
     */
    DeleteApnsVoipSandboxChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteApnsVoipSandboxChannelResponse || (DeleteApnsVoipSandboxChannelResponse = {}));
export var DeleteAppRequest;
(function (DeleteAppRequest) {
    /**
     * @internal
     */
    DeleteAppRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAppRequest || (DeleteAppRequest = {}));
export var DeleteAppResponse;
(function (DeleteAppResponse) {
    /**
     * @internal
     */
    DeleteAppResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAppResponse || (DeleteAppResponse = {}));
export var DeleteBaiduChannelRequest;
(function (DeleteBaiduChannelRequest) {
    /**
     * @internal
     */
    DeleteBaiduChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBaiduChannelRequest || (DeleteBaiduChannelRequest = {}));
export var DeleteBaiduChannelResponse;
(function (DeleteBaiduChannelResponse) {
    /**
     * @internal
     */
    DeleteBaiduChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteBaiduChannelResponse || (DeleteBaiduChannelResponse = {}));
export var DeleteCampaignRequest;
(function (DeleteCampaignRequest) {
    /**
     * @internal
     */
    DeleteCampaignRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCampaignRequest || (DeleteCampaignRequest = {}));
export var DeleteCampaignResponse;
(function (DeleteCampaignResponse) {
    /**
     * @internal
     */
    DeleteCampaignResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCampaignResponse || (DeleteCampaignResponse = {}));
export var DeleteEmailChannelRequest;
(function (DeleteEmailChannelRequest) {
    /**
     * @internal
     */
    DeleteEmailChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEmailChannelRequest || (DeleteEmailChannelRequest = {}));
export var EmailChannelResponse;
(function (EmailChannelResponse) {
    /**
     * @internal
     */
    EmailChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmailChannelResponse || (EmailChannelResponse = {}));
export var DeleteEmailChannelResponse;
(function (DeleteEmailChannelResponse) {
    /**
     * @internal
     */
    DeleteEmailChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEmailChannelResponse || (DeleteEmailChannelResponse = {}));
export var DeleteEmailTemplateRequest;
(function (DeleteEmailTemplateRequest) {
    /**
     * @internal
     */
    DeleteEmailTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEmailTemplateRequest || (DeleteEmailTemplateRequest = {}));
export var MessageBody;
(function (MessageBody) {
    /**
     * @internal
     */
    MessageBody.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MessageBody || (MessageBody = {}));
export var DeleteEmailTemplateResponse;
(function (DeleteEmailTemplateResponse) {
    /**
     * @internal
     */
    DeleteEmailTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEmailTemplateResponse || (DeleteEmailTemplateResponse = {}));
export var DeleteEndpointRequest;
(function (DeleteEndpointRequest) {
    /**
     * @internal
     */
    DeleteEndpointRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEndpointRequest || (DeleteEndpointRequest = {}));
export var EndpointDemographic;
(function (EndpointDemographic) {
    /**
     * @internal
     */
    EndpointDemographic.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndpointDemographic || (EndpointDemographic = {}));
export var EndpointLocation;
(function (EndpointLocation) {
    /**
     * @internal
     */
    EndpointLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndpointLocation || (EndpointLocation = {}));
export var EndpointUser;
(function (EndpointUser) {
    /**
     * @internal
     */
    EndpointUser.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndpointUser || (EndpointUser = {}));
export var EndpointResponse;
(function (EndpointResponse) {
    /**
     * @internal
     */
    EndpointResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndpointResponse || (EndpointResponse = {}));
export var DeleteEndpointResponse;
(function (DeleteEndpointResponse) {
    /**
     * @internal
     */
    DeleteEndpointResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEndpointResponse || (DeleteEndpointResponse = {}));
export var DeleteEventStreamRequest;
(function (DeleteEventStreamRequest) {
    /**
     * @internal
     */
    DeleteEventStreamRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEventStreamRequest || (DeleteEventStreamRequest = {}));
export var EventStream;
(function (EventStream) {
    /**
     * @internal
     */
    EventStream.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventStream || (EventStream = {}));
export var DeleteEventStreamResponse;
(function (DeleteEventStreamResponse) {
    /**
     * @internal
     */
    DeleteEventStreamResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEventStreamResponse || (DeleteEventStreamResponse = {}));
export var DeleteGcmChannelRequest;
(function (DeleteGcmChannelRequest) {
    /**
     * @internal
     */
    DeleteGcmChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGcmChannelRequest || (DeleteGcmChannelRequest = {}));
export var GCMChannelResponse;
(function (GCMChannelResponse) {
    /**
     * @internal
     */
    GCMChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GCMChannelResponse || (GCMChannelResponse = {}));
export var DeleteGcmChannelResponse;
(function (DeleteGcmChannelResponse) {
    /**
     * @internal
     */
    DeleteGcmChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGcmChannelResponse || (DeleteGcmChannelResponse = {}));
export var DeleteJourneyRequest;
(function (DeleteJourneyRequest) {
    /**
     * @internal
     */
    DeleteJourneyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteJourneyRequest || (DeleteJourneyRequest = {}));
export var DeleteJourneyResponse;
(function (DeleteJourneyResponse) {
    /**
     * @internal
     */
    DeleteJourneyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteJourneyResponse || (DeleteJourneyResponse = {}));
export var DeletePushTemplateRequest;
(function (DeletePushTemplateRequest) {
    /**
     * @internal
     */
    DeletePushTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePushTemplateRequest || (DeletePushTemplateRequest = {}));
export var DeletePushTemplateResponse;
(function (DeletePushTemplateResponse) {
    /**
     * @internal
     */
    DeletePushTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePushTemplateResponse || (DeletePushTemplateResponse = {}));
export var DeleteRecommenderConfigurationRequest;
(function (DeleteRecommenderConfigurationRequest) {
    /**
     * @internal
     */
    DeleteRecommenderConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRecommenderConfigurationRequest || (DeleteRecommenderConfigurationRequest = {}));
export var DeleteRecommenderConfigurationResponse;
(function (DeleteRecommenderConfigurationResponse) {
    /**
     * @internal
     */
    DeleteRecommenderConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRecommenderConfigurationResponse || (DeleteRecommenderConfigurationResponse = {}));
export var DeleteSegmentRequest;
(function (DeleteSegmentRequest) {
    /**
     * @internal
     */
    DeleteSegmentRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSegmentRequest || (DeleteSegmentRequest = {}));
export var DeleteSegmentResponse;
(function (DeleteSegmentResponse) {
    /**
     * @internal
     */
    DeleteSegmentResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSegmentResponse || (DeleteSegmentResponse = {}));
export var DeleteSmsChannelRequest;
(function (DeleteSmsChannelRequest) {
    /**
     * @internal
     */
    DeleteSmsChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSmsChannelRequest || (DeleteSmsChannelRequest = {}));
export var SMSChannelResponse;
(function (SMSChannelResponse) {
    /**
     * @internal
     */
    SMSChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SMSChannelResponse || (SMSChannelResponse = {}));
export var DeleteSmsChannelResponse;
(function (DeleteSmsChannelResponse) {
    /**
     * @internal
     */
    DeleteSmsChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSmsChannelResponse || (DeleteSmsChannelResponse = {}));
export var DeleteSmsTemplateRequest;
(function (DeleteSmsTemplateRequest) {
    /**
     * @internal
     */
    DeleteSmsTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSmsTemplateRequest || (DeleteSmsTemplateRequest = {}));
export var DeleteSmsTemplateResponse;
(function (DeleteSmsTemplateResponse) {
    /**
     * @internal
     */
    DeleteSmsTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSmsTemplateResponse || (DeleteSmsTemplateResponse = {}));
export var DeleteUserEndpointsRequest;
(function (DeleteUserEndpointsRequest) {
    /**
     * @internal
     */
    DeleteUserEndpointsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUserEndpointsRequest || (DeleteUserEndpointsRequest = {}));
export var EndpointsResponse;
(function (EndpointsResponse) {
    /**
     * @internal
     */
    EndpointsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndpointsResponse || (EndpointsResponse = {}));
export var DeleteUserEndpointsResponse;
(function (DeleteUserEndpointsResponse) {
    /**
     * @internal
     */
    DeleteUserEndpointsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUserEndpointsResponse || (DeleteUserEndpointsResponse = {}));
export var DeleteVoiceChannelRequest;
(function (DeleteVoiceChannelRequest) {
    /**
     * @internal
     */
    DeleteVoiceChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVoiceChannelRequest || (DeleteVoiceChannelRequest = {}));
export var VoiceChannelResponse;
(function (VoiceChannelResponse) {
    /**
     * @internal
     */
    VoiceChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VoiceChannelResponse || (VoiceChannelResponse = {}));
export var DeleteVoiceChannelResponse;
(function (DeleteVoiceChannelResponse) {
    /**
     * @internal
     */
    DeleteVoiceChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVoiceChannelResponse || (DeleteVoiceChannelResponse = {}));
export var DeleteVoiceTemplateRequest;
(function (DeleteVoiceTemplateRequest) {
    /**
     * @internal
     */
    DeleteVoiceTemplateRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVoiceTemplateRequest || (DeleteVoiceTemplateRequest = {}));
export var DeleteVoiceTemplateResponse;
(function (DeleteVoiceTemplateResponse) {
    /**
     * @internal
     */
    DeleteVoiceTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVoiceTemplateResponse || (DeleteVoiceTemplateResponse = {}));
export var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus["DUPLICATE"] = "DUPLICATE";
    DeliveryStatus["OPT_OUT"] = "OPT_OUT";
    DeliveryStatus["PERMANENT_FAILURE"] = "PERMANENT_FAILURE";
    DeliveryStatus["SUCCESSFUL"] = "SUCCESSFUL";
    DeliveryStatus["TEMPORARY_FAILURE"] = "TEMPORARY_FAILURE";
    DeliveryStatus["THROTTLED"] = "THROTTLED";
    DeliveryStatus["UNKNOWN_FAILURE"] = "UNKNOWN_FAILURE";
})(DeliveryStatus || (DeliveryStatus = {}));
export var RawEmail;
(function (RawEmail) {
    /**
     * @internal
     */
    RawEmail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RawEmail || (RawEmail = {}));
export var SimpleEmailPart;
(function (SimpleEmailPart) {
    /**
     * @internal
     */
    SimpleEmailPart.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimpleEmailPart || (SimpleEmailPart = {}));
export var SimpleEmail;
(function (SimpleEmail) {
    /**
     * @internal
     */
    SimpleEmail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SimpleEmail || (SimpleEmail = {}));
export var EmailMessage;
(function (EmailMessage) {
    /**
     * @internal
     */
    EmailMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmailMessage || (EmailMessage = {}));
export var GCMMessage;
(function (GCMMessage) {
    /**
     * @internal
     */
    GCMMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GCMMessage || (GCMMessage = {}));
export var SMSMessage;
(function (SMSMessage) {
    /**
     * @internal
     */
    SMSMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SMSMessage || (SMSMessage = {}));
export var VoiceMessage;
(function (VoiceMessage) {
    /**
     * @internal
     */
    VoiceMessage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VoiceMessage || (VoiceMessage = {}));
export var DirectMessageConfiguration;
(function (DirectMessageConfiguration) {
    /**
     * @internal
     */
    DirectMessageConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DirectMessageConfiguration || (DirectMessageConfiguration = {}));
export var EmailChannelRequest;
(function (EmailChannelRequest) {
    /**
     * @internal
     */
    EmailChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmailChannelRequest || (EmailChannelRequest = {}));
export var TemplateType;
(function (TemplateType) {
    TemplateType["EMAIL"] = "EMAIL";
    TemplateType["PUSH"] = "PUSH";
    TemplateType["SMS"] = "SMS";
    TemplateType["VOICE"] = "VOICE";
})(TemplateType || (TemplateType = {}));
export var EmailTemplateResponse;
(function (EmailTemplateResponse) {
    /**
     * @internal
     */
    EmailTemplateResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EmailTemplateResponse || (EmailTemplateResponse = {}));
export var EndpointBatchItem;
(function (EndpointBatchItem) {
    /**
     * @internal
     */
    EndpointBatchItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndpointBatchItem || (EndpointBatchItem = {}));
export var EndpointBatchRequest;
(function (EndpointBatchRequest) {
    /**
     * @internal
     */
    EndpointBatchRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndpointBatchRequest || (EndpointBatchRequest = {}));
export var EndpointItemResponse;
(function (EndpointItemResponse) {
    /**
     * @internal
     */
    EndpointItemResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndpointItemResponse || (EndpointItemResponse = {}));
export var EndpointMessageResult;
(function (EndpointMessageResult) {
    /**
     * @internal
     */
    EndpointMessageResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndpointMessageResult || (EndpointMessageResult = {}));
export var EndpointRequest;
(function (EndpointRequest) {
    /**
     * @internal
     */
    EndpointRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndpointRequest || (EndpointRequest = {}));
export var EndpointSendConfiguration;
(function (EndpointSendConfiguration) {
    /**
     * @internal
     */
    EndpointSendConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndpointSendConfiguration || (EndpointSendConfiguration = {}));
export var Session;
(function (Session) {
    /**
     * @internal
     */
    Session.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Session || (Session = {}));
export var Event;
(function (Event) {
    /**
     * @internal
     */
    Event.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Event || (Event = {}));
export var EventItemResponse;
(function (EventItemResponse) {
    /**
     * @internal
     */
    EventItemResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventItemResponse || (EventItemResponse = {}));
export var PublicEndpoint;
(function (PublicEndpoint) {
    /**
     * @internal
     */
    PublicEndpoint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PublicEndpoint || (PublicEndpoint = {}));
export var EventsBatch;
(function (EventsBatch) {
    /**
     * @internal
     */
    EventsBatch.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventsBatch || (EventsBatch = {}));
export var EventsRequest;
(function (EventsRequest) {
    /**
     * @internal
     */
    EventsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventsRequest || (EventsRequest = {}));
export var ItemResponse;
(function (ItemResponse) {
    /**
     * @internal
     */
    ItemResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ItemResponse || (ItemResponse = {}));
export var EventsResponse;
(function (EventsResponse) {
    /**
     * @internal
     */
    EventsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventsResponse || (EventsResponse = {}));
export var ExportJobsResponse;
(function (ExportJobsResponse) {
    /**
     * @internal
     */
    ExportJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExportJobsResponse || (ExportJobsResponse = {}));
export var GCMChannelRequest;
(function (GCMChannelRequest) {
    /**
     * @internal
     */
    GCMChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GCMChannelRequest || (GCMChannelRequest = {}));
export var GetAdmChannelRequest;
(function (GetAdmChannelRequest) {
    /**
     * @internal
     */
    GetAdmChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAdmChannelRequest || (GetAdmChannelRequest = {}));
export var GetAdmChannelResponse;
(function (GetAdmChannelResponse) {
    /**
     * @internal
     */
    GetAdmChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAdmChannelResponse || (GetAdmChannelResponse = {}));
export var GetApnsChannelRequest;
(function (GetApnsChannelRequest) {
    /**
     * @internal
     */
    GetApnsChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetApnsChannelRequest || (GetApnsChannelRequest = {}));
export var GetApnsChannelResponse;
(function (GetApnsChannelResponse) {
    /**
     * @internal
     */
    GetApnsChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetApnsChannelResponse || (GetApnsChannelResponse = {}));
export var GetApnsSandboxChannelRequest;
(function (GetApnsSandboxChannelRequest) {
    /**
     * @internal
     */
    GetApnsSandboxChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetApnsSandboxChannelRequest || (GetApnsSandboxChannelRequest = {}));
export var GetApnsSandboxChannelResponse;
(function (GetApnsSandboxChannelResponse) {
    /**
     * @internal
     */
    GetApnsSandboxChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetApnsSandboxChannelResponse || (GetApnsSandboxChannelResponse = {}));
export var GetApnsVoipChannelRequest;
(function (GetApnsVoipChannelRequest) {
    /**
     * @internal
     */
    GetApnsVoipChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetApnsVoipChannelRequest || (GetApnsVoipChannelRequest = {}));
export var GetApnsVoipChannelResponse;
(function (GetApnsVoipChannelResponse) {
    /**
     * @internal
     */
    GetApnsVoipChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetApnsVoipChannelResponse || (GetApnsVoipChannelResponse = {}));
export var GetApnsVoipSandboxChannelRequest;
(function (GetApnsVoipSandboxChannelRequest) {
    /**
     * @internal
     */
    GetApnsVoipSandboxChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetApnsVoipSandboxChannelRequest || (GetApnsVoipSandboxChannelRequest = {}));
export var GetApnsVoipSandboxChannelResponse;
(function (GetApnsVoipSandboxChannelResponse) {
    /**
     * @internal
     */
    GetApnsVoipSandboxChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetApnsVoipSandboxChannelResponse || (GetApnsVoipSandboxChannelResponse = {}));
export var GetAppRequest;
(function (GetAppRequest) {
    /**
     * @internal
     */
    GetAppRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppRequest || (GetAppRequest = {}));
export var GetAppResponse;
(function (GetAppResponse) {
    /**
     * @internal
     */
    GetAppResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppResponse || (GetAppResponse = {}));
export var GetApplicationDateRangeKpiRequest;
(function (GetApplicationDateRangeKpiRequest) {
    /**
     * @internal
     */
    GetApplicationDateRangeKpiRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetApplicationDateRangeKpiRequest || (GetApplicationDateRangeKpiRequest = {}));
export var GetApplicationDateRangeKpiResponse;
(function (GetApplicationDateRangeKpiResponse) {
    /**
     * @internal
     */
    GetApplicationDateRangeKpiResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetApplicationDateRangeKpiResponse || (GetApplicationDateRangeKpiResponse = {}));
export var GetApplicationSettingsRequest;
(function (GetApplicationSettingsRequest) {
    /**
     * @internal
     */
    GetApplicationSettingsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetApplicationSettingsRequest || (GetApplicationSettingsRequest = {}));
export var GetApplicationSettingsResponse;
(function (GetApplicationSettingsResponse) {
    /**
     * @internal
     */
    GetApplicationSettingsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetApplicationSettingsResponse || (GetApplicationSettingsResponse = {}));
export var GetAppsRequest;
(function (GetAppsRequest) {
    /**
     * @internal
     */
    GetAppsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppsRequest || (GetAppsRequest = {}));
export var GetAppsResponse;
(function (GetAppsResponse) {
    /**
     * @internal
     */
    GetAppsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAppsResponse || (GetAppsResponse = {}));
export var GetBaiduChannelRequest;
(function (GetBaiduChannelRequest) {
    /**
     * @internal
     */
    GetBaiduChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBaiduChannelRequest || (GetBaiduChannelRequest = {}));
export var GetBaiduChannelResponse;
(function (GetBaiduChannelResponse) {
    /**
     * @internal
     */
    GetBaiduChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetBaiduChannelResponse || (GetBaiduChannelResponse = {}));
export var GetCampaignRequest;
(function (GetCampaignRequest) {
    /**
     * @internal
     */
    GetCampaignRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCampaignRequest || (GetCampaignRequest = {}));
export var GetCampaignResponse;
(function (GetCampaignResponse) {
    /**
     * @internal
     */
    GetCampaignResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCampaignResponse || (GetCampaignResponse = {}));
export var GetCampaignActivitiesRequest;
(function (GetCampaignActivitiesRequest) {
    /**
     * @internal
     */
    GetCampaignActivitiesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCampaignActivitiesRequest || (GetCampaignActivitiesRequest = {}));
export var GetCampaignActivitiesResponse;
(function (GetCampaignActivitiesResponse) {
    /**
     * @internal
     */
    GetCampaignActivitiesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCampaignActivitiesResponse || (GetCampaignActivitiesResponse = {}));
export var GetCampaignDateRangeKpiRequest;
(function (GetCampaignDateRangeKpiRequest) {
    /**
     * @internal
     */
    GetCampaignDateRangeKpiRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCampaignDateRangeKpiRequest || (GetCampaignDateRangeKpiRequest = {}));
export var GetCampaignDateRangeKpiResponse;
(function (GetCampaignDateRangeKpiResponse) {
    /**
     * @internal
     */
    GetCampaignDateRangeKpiResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCampaignDateRangeKpiResponse || (GetCampaignDateRangeKpiResponse = {}));
export var GetCampaignsRequest;
(function (GetCampaignsRequest) {
    /**
     * @internal
     */
    GetCampaignsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCampaignsRequest || (GetCampaignsRequest = {}));
export var GetCampaignsResponse;
(function (GetCampaignsResponse) {
    /**
     * @internal
     */
    GetCampaignsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCampaignsResponse || (GetCampaignsResponse = {}));
export var GetCampaignVersionRequest;
(function (GetCampaignVersionRequest) {
    /**
     * @internal
     */
    GetCampaignVersionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCampaignVersionRequest || (GetCampaignVersionRequest = {}));
export var GetCampaignVersionResponse;
(function (GetCampaignVersionResponse) {
    /**
     * @internal
     */
    GetCampaignVersionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCampaignVersionResponse || (GetCampaignVersionResponse = {}));
export var GetCampaignVersionsRequest;
(function (GetCampaignVersionsRequest) {
    /**
     * @internal
     */
    GetCampaignVersionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCampaignVersionsRequest || (GetCampaignVersionsRequest = {}));
export var GetCampaignVersionsResponse;
(function (GetCampaignVersionsResponse) {
    /**
     * @internal
     */
    GetCampaignVersionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCampaignVersionsResponse || (GetCampaignVersionsResponse = {}));
export var GetChannelsRequest;
(function (GetChannelsRequest) {
    /**
     * @internal
     */
    GetChannelsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetChannelsRequest || (GetChannelsRequest = {}));
export var GetChannelsResponse;
(function (GetChannelsResponse) {
    /**
     * @internal
     */
    GetChannelsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetChannelsResponse || (GetChannelsResponse = {}));
export var GetEmailChannelRequest;
(function (GetEmailChannelRequest) {
    /**
     * @internal
     */
    GetEmailChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEmailChannelRequest || (GetEmailChannelRequest = {}));
export var GetEmailChannelResponse;
(function (GetEmailChannelResponse) {
    /**
     * @internal
     */
    GetEmailChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEmailChannelResponse || (GetEmailChannelResponse = {}));
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
export var GetEndpointRequest;
(function (GetEndpointRequest) {
    /**
     * @internal
     */
    GetEndpointRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEndpointRequest || (GetEndpointRequest = {}));
export var GetEndpointResponse;
(function (GetEndpointResponse) {
    /**
     * @internal
     */
    GetEndpointResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEndpointResponse || (GetEndpointResponse = {}));
export var GetEventStreamRequest;
(function (GetEventStreamRequest) {
    /**
     * @internal
     */
    GetEventStreamRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEventStreamRequest || (GetEventStreamRequest = {}));
export var GetEventStreamResponse;
(function (GetEventStreamResponse) {
    /**
     * @internal
     */
    GetEventStreamResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEventStreamResponse || (GetEventStreamResponse = {}));
export var GetExportJobRequest;
(function (GetExportJobRequest) {
    /**
     * @internal
     */
    GetExportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetExportJobRequest || (GetExportJobRequest = {}));
export var GetExportJobResponse;
(function (GetExportJobResponse) {
    /**
     * @internal
     */
    GetExportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetExportJobResponse || (GetExportJobResponse = {}));
export var GetExportJobsRequest;
(function (GetExportJobsRequest) {
    /**
     * @internal
     */
    GetExportJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetExportJobsRequest || (GetExportJobsRequest = {}));
export var GetExportJobsResponse;
(function (GetExportJobsResponse) {
    /**
     * @internal
     */
    GetExportJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetExportJobsResponse || (GetExportJobsResponse = {}));
export var GetGcmChannelRequest;
(function (GetGcmChannelRequest) {
    /**
     * @internal
     */
    GetGcmChannelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGcmChannelRequest || (GetGcmChannelRequest = {}));
export var GetGcmChannelResponse;
(function (GetGcmChannelResponse) {
    /**
     * @internal
     */
    GetGcmChannelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGcmChannelResponse || (GetGcmChannelResponse = {}));
export var GetImportJobRequest;
(function (GetImportJobRequest) {
    /**
     * @internal
     */
    GetImportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImportJobRequest || (GetImportJobRequest = {}));
export var GetImportJobResponse;
(function (GetImportJobResponse) {
    /**
     * @internal
     */
    GetImportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImportJobResponse || (GetImportJobResponse = {}));
export var GetImportJobsRequest;
(function (GetImportJobsRequest) {
    /**
     * @internal
     */
    GetImportJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImportJobsRequest || (GetImportJobsRequest = {}));
export var ImportJobsResponse;
(function (ImportJobsResponse) {
    /**
     * @internal
     */
    ImportJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportJobsResponse || (ImportJobsResponse = {}));
export var GetImportJobsResponse;
(function (GetImportJobsResponse) {
    /**
     * @internal
     */
    GetImportJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetImportJobsResponse || (GetImportJobsResponse = {}));
export var GetJourneyRequest;
(function (GetJourneyRequest) {
    /**
     * @internal
     */
    GetJourneyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJourneyRequest || (GetJourneyRequest = {}));
export var GetJourneyResponse;
(function (GetJourneyResponse) {
    /**
     * @internal
     */
    GetJourneyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJourneyResponse || (GetJourneyResponse = {}));
//# sourceMappingURL=models_0.js.map