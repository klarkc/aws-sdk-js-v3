"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APNSChannelResponse = exports.APNSChannelRequest = exports.AndroidPushNotificationTemplate = exports.ADMMessage = exports.ADMChannelResponse = exports.ADMChannelRequest = exports.AddressConfiguration = exports.ChannelType = exports.Activity = exports.WaitActivity = exports.SMSMessageActivity = exports.JourneySMSMessage = exports.MessageType = exports.RandomSplitActivity = exports.RandomSplitEntry = exports.PushMessageActivity = exports.JourneyPushMessage = exports.MultiConditionalSplitActivity = exports.MultiConditionalBranch = exports.HoldoutActivity = exports.EmailMessageActivity = exports.JourneyEmailMessage = exports.CustomMessageActivity = exports.JourneyCustomMessage = exports.ConditionalSplitActivity = exports.WaitTime = exports.Condition = exports.Operator = exports.SimpleCondition = exports.SegmentDimensions = exports.SegmentLocation = exports.GPSPointDimension = exports.GPSCoordinates = exports.SegmentDemographics = exports.SegmentBehaviors = exports.RecencyDimension = exports.RecencyType = exports.Duration = exports.SegmentCondition = exports.EventCondition = exports.EventDimensions = exports.MetricDimension = exports.SetDimension = exports.DimensionType = exports.AttributeDimension = exports.AttributeType = exports.ActivitiesResponse = exports.ActivityResponse = exports.Action = exports.__EndpointTypesElement = void 0;
exports.InternalServerErrorException = exports.ForbiddenException = exports.CreateAppResponse = exports.CreateAppRequest = exports.CreateApplicationRequest = exports.ConflictException = exports.ChannelsResponse = exports.ChannelResponse = exports.CampaignsResponse = exports.CampaignResponse = exports.TreatmentResource = exports.TemplateConfiguration = exports.Template = exports.CampaignState = exports.CampaignStatus = exports.Schedule = exports.Frequency = exports.MessageConfiguration = exports.CampaignSmsMessage = exports.Message = exports.CustomDeliveryConfiguration = exports.CampaignEventFilter = exports.FilterType = exports.CampaignEmailMessage = exports.CampaignDateRangeKpiResponse = exports.CampaignCustomMessage = exports.BaiduMessage = exports.BaiduChannelResponse = exports.BaiduChannelRequest = exports.BadRequestException = exports.AttributesResource = exports.ApplicationsResponse = exports.ApplicationSettingsResource = exports.QuietTime = exports.CampaignLimits = exports.CampaignHook = exports.Mode = exports.ApplicationResponse = exports.ApplicationDateRangeKpiResponse = exports.BaseKpiResult = exports.ResultRow = exports.ResultRowValue = exports.APNSVoipSandboxChannelResponse = exports.APNSVoipSandboxChannelRequest = exports.APNSVoipChannelResponse = exports.APNSVoipChannelRequest = exports.APNSSandboxChannelResponse = exports.APNSSandboxChannelRequest = exports.APNSPushNotificationTemplate = exports.APNSMessage = void 0;
exports.CreateSegmentRequest = exports.WriteSegmentRequest = exports.SegmentGroupList = exports.Include = exports.SegmentGroup = exports.Type = exports.SourceType = exports.SegmentReference = exports.CreateRecommenderConfigurationResponse = exports.RecommenderConfigurationResponse = exports.CreateRecommenderConfigurationRequest = exports.CreateRecommenderConfigurationShape = exports.CreatePushTemplateResponse = exports.CreatePushTemplateRequest = exports.PushNotificationTemplateRequest = exports.DefaultPushNotificationTemplate = exports.CreateJourneyResponse = exports.JourneyResponse = exports.CreateJourneyRequest = exports.WriteJourneyRequest = exports.State = exports.StartCondition = exports.EventStartCondition = exports.EventFilter = exports.JourneySchedule = exports.JourneyLimits = exports.CreateImportJobResponse = exports.ImportJobResponse = exports.ImportJobResource = exports.CreateImportJobRequest = exports.ImportJobRequest = exports.Format = exports.CreateExportJobResponse = exports.ExportJobResponse = exports.JobStatus = exports.ExportJobResource = exports.CreateExportJobRequest = exports.ExportJobRequest = exports.CreateEmailTemplateResponse = exports.CreateTemplateMessageBody = exports.CreateEmailTemplateRequest = exports.EmailTemplateRequest = exports.CreateCampaignResponse = exports.CreateCampaignRequest = exports.WriteCampaignRequest = exports.WriteTreatmentResource = exports.TooManyRequestsException = exports.PayloadTooLargeException = exports.NotFoundException = exports.MethodNotAllowedException = void 0;
exports.DeletePushTemplateResponse = exports.DeletePushTemplateRequest = exports.DeleteJourneyResponse = exports.DeleteJourneyRequest = exports.DeleteGcmChannelResponse = exports.GCMChannelResponse = exports.DeleteGcmChannelRequest = exports.DeleteEventStreamResponse = exports.EventStream = exports.DeleteEventStreamRequest = exports.DeleteEndpointResponse = exports.EndpointResponse = exports.EndpointUser = exports.EndpointLocation = exports.EndpointDemographic = exports.DeleteEndpointRequest = exports.DeleteEmailTemplateResponse = exports.MessageBody = exports.DeleteEmailTemplateRequest = exports.DeleteEmailChannelResponse = exports.EmailChannelResponse = exports.DeleteEmailChannelRequest = exports.DeleteCampaignResponse = exports.DeleteCampaignRequest = exports.DeleteBaiduChannelResponse = exports.DeleteBaiduChannelRequest = exports.DeleteAppResponse = exports.DeleteAppRequest = exports.DeleteApnsVoipSandboxChannelResponse = exports.DeleteApnsVoipSandboxChannelRequest = exports.DeleteApnsVoipChannelResponse = exports.DeleteApnsVoipChannelRequest = exports.DeleteApnsSandboxChannelResponse = exports.DeleteApnsSandboxChannelRequest = exports.DeleteApnsChannelResponse = exports.DeleteApnsChannelRequest = exports.DeleteAdmChannelResponse = exports.DeleteAdmChannelRequest = exports.DefaultPushNotificationMessage = exports.DefaultMessage = exports.CreateVoiceTemplateResponse = exports.CreateVoiceTemplateRequest = exports.VoiceTemplateRequest = exports.CreateSmsTemplateResponse = exports.CreateSmsTemplateRequest = exports.SMSTemplateRequest = exports.CreateSegmentResponse = exports.SegmentResponse = exports.SegmentType = exports.SegmentImportResource = void 0;
exports.GetApnsSandboxChannelRequest = exports.GetApnsChannelResponse = exports.GetApnsChannelRequest = exports.GetAdmChannelResponse = exports.GetAdmChannelRequest = exports.GCMChannelRequest = exports.ExportJobsResponse = exports.EventsResponse = exports.ItemResponse = exports.EventsRequest = exports.EventsBatch = exports.PublicEndpoint = exports.EventItemResponse = exports.Event = exports.Session = exports.EndpointSendConfiguration = exports.EndpointRequest = exports.EndpointMessageResult = exports.EndpointItemResponse = exports.EndpointBatchRequest = exports.EndpointBatchItem = exports.EmailTemplateResponse = exports.TemplateType = exports.EmailChannelRequest = exports.DirectMessageConfiguration = exports.VoiceMessage = exports.SMSMessage = exports.GCMMessage = exports.EmailMessage = exports.SimpleEmail = exports.SimpleEmailPart = exports.RawEmail = exports.DeliveryStatus = exports.DeleteVoiceTemplateResponse = exports.DeleteVoiceTemplateRequest = exports.DeleteVoiceChannelResponse = exports.VoiceChannelResponse = exports.DeleteVoiceChannelRequest = exports.DeleteUserEndpointsResponse = exports.EndpointsResponse = exports.DeleteUserEndpointsRequest = exports.DeleteSmsTemplateResponse = exports.DeleteSmsTemplateRequest = exports.DeleteSmsChannelResponse = exports.SMSChannelResponse = exports.DeleteSmsChannelRequest = exports.DeleteSegmentResponse = exports.DeleteSegmentRequest = exports.DeleteRecommenderConfigurationResponse = exports.DeleteRecommenderConfigurationRequest = void 0;
exports.GetJourneyResponse = exports.GetJourneyRequest = exports.GetImportJobsResponse = exports.ImportJobsResponse = exports.GetImportJobsRequest = exports.GetImportJobResponse = exports.GetImportJobRequest = exports.GetGcmChannelResponse = exports.GetGcmChannelRequest = exports.GetExportJobsResponse = exports.GetExportJobsRequest = exports.GetExportJobResponse = exports.GetExportJobRequest = exports.GetEventStreamResponse = exports.GetEventStreamRequest = exports.GetEndpointResponse = exports.GetEndpointRequest = exports.GetEmailTemplateResponse = exports.GetEmailTemplateRequest = exports.GetEmailChannelResponse = exports.GetEmailChannelRequest = exports.GetChannelsResponse = exports.GetChannelsRequest = exports.GetCampaignVersionsResponse = exports.GetCampaignVersionsRequest = exports.GetCampaignVersionResponse = exports.GetCampaignVersionRequest = exports.GetCampaignsResponse = exports.GetCampaignsRequest = exports.GetCampaignDateRangeKpiResponse = exports.GetCampaignDateRangeKpiRequest = exports.GetCampaignActivitiesResponse = exports.GetCampaignActivitiesRequest = exports.GetCampaignResponse = exports.GetCampaignRequest = exports.GetBaiduChannelResponse = exports.GetBaiduChannelRequest = exports.GetAppsResponse = exports.GetAppsRequest = exports.GetApplicationSettingsResponse = exports.GetApplicationSettingsRequest = exports.GetApplicationDateRangeKpiResponse = exports.GetApplicationDateRangeKpiRequest = exports.GetAppResponse = exports.GetAppRequest = exports.GetApnsVoipSandboxChannelResponse = exports.GetApnsVoipSandboxChannelRequest = exports.GetApnsVoipChannelResponse = exports.GetApnsVoipChannelRequest = exports.GetApnsSandboxChannelResponse = void 0;
var __EndpointTypesElement;
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
})(__EndpointTypesElement = exports.__EndpointTypesElement || (exports.__EndpointTypesElement = {}));
var Action;
(function (Action) {
    Action["DEEP_LINK"] = "DEEP_LINK";
    Action["OPEN_APP"] = "OPEN_APP";
    Action["URL"] = "URL";
})(Action = exports.Action || (exports.Action = {}));
var ActivityResponse;
(function (ActivityResponse) {
    /**
     * @internal
     */
    ActivityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivityResponse = exports.ActivityResponse || (exports.ActivityResponse = {}));
var ActivitiesResponse;
(function (ActivitiesResponse) {
    /**
     * @internal
     */
    ActivitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivitiesResponse = exports.ActivitiesResponse || (exports.ActivitiesResponse = {}));
var AttributeType;
(function (AttributeType) {
    AttributeType["AFTER"] = "AFTER";
    AttributeType["BEFORE"] = "BEFORE";
    AttributeType["BETWEEN"] = "BETWEEN";
    AttributeType["CONTAINS"] = "CONTAINS";
    AttributeType["EXCLUSIVE"] = "EXCLUSIVE";
    AttributeType["INCLUSIVE"] = "INCLUSIVE";
    AttributeType["ON"] = "ON";
})(AttributeType = exports.AttributeType || (exports.AttributeType = {}));
var AttributeDimension;
(function (AttributeDimension) {
    /**
     * @internal
     */
    AttributeDimension.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttributeDimension = exports.AttributeDimension || (exports.AttributeDimension = {}));
var DimensionType;
(function (DimensionType) {
    DimensionType["EXCLUSIVE"] = "EXCLUSIVE";
    DimensionType["INCLUSIVE"] = "INCLUSIVE";
})(DimensionType = exports.DimensionType || (exports.DimensionType = {}));
var SetDimension;
(function (SetDimension) {
    /**
     * @internal
     */
    SetDimension.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetDimension = exports.SetDimension || (exports.SetDimension = {}));
var MetricDimension;
(function (MetricDimension) {
    /**
     * @internal
     */
    MetricDimension.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricDimension = exports.MetricDimension || (exports.MetricDimension = {}));
var EventDimensions;
(function (EventDimensions) {
    /**
     * @internal
     */
    EventDimensions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventDimensions = exports.EventDimensions || (exports.EventDimensions = {}));
var EventCondition;
(function (EventCondition) {
    /**
     * @internal
     */
    EventCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventCondition = exports.EventCondition || (exports.EventCondition = {}));
var SegmentCondition;
(function (SegmentCondition) {
    /**
     * @internal
     */
    SegmentCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SegmentCondition = exports.SegmentCondition || (exports.SegmentCondition = {}));
var Duration;
(function (Duration) {
    Duration["DAY_14"] = "DAY_14";
    Duration["DAY_30"] = "DAY_30";
    Duration["DAY_7"] = "DAY_7";
    Duration["HR_24"] = "HR_24";
})(Duration = exports.Duration || (exports.Duration = {}));
var RecencyType;
(function (RecencyType) {
    RecencyType["ACTIVE"] = "ACTIVE";
    RecencyType["INACTIVE"] = "INACTIVE";
})(RecencyType = exports.RecencyType || (exports.RecencyType = {}));
var RecencyDimension;
(function (RecencyDimension) {
    /**
     * @internal
     */
    RecencyDimension.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecencyDimension = exports.RecencyDimension || (exports.RecencyDimension = {}));
var SegmentBehaviors;
(function (SegmentBehaviors) {
    /**
     * @internal
     */
    SegmentBehaviors.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SegmentBehaviors = exports.SegmentBehaviors || (exports.SegmentBehaviors = {}));
var SegmentDemographics;
(function (SegmentDemographics) {
    /**
     * @internal
     */
    SegmentDemographics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SegmentDemographics = exports.SegmentDemographics || (exports.SegmentDemographics = {}));
var GPSCoordinates;
(function (GPSCoordinates) {
    /**
     * @internal
     */
    GPSCoordinates.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GPSCoordinates = exports.GPSCoordinates || (exports.GPSCoordinates = {}));
var GPSPointDimension;
(function (GPSPointDimension) {
    /**
     * @internal
     */
    GPSPointDimension.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GPSPointDimension = exports.GPSPointDimension || (exports.GPSPointDimension = {}));
var SegmentLocation;
(function (SegmentLocation) {
    /**
     * @internal
     */
    SegmentLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SegmentLocation = exports.SegmentLocation || (exports.SegmentLocation = {}));
var SegmentDimensions;
(function (SegmentDimensions) {
    /**
     * @internal
     */
    SegmentDimensions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SegmentDimensions = exports.SegmentDimensions || (exports.SegmentDimensions = {}));
var SimpleCondition;
(function (SimpleCondition) {
    /**
     * @internal
     */
    SimpleCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimpleCondition = exports.SimpleCondition || (exports.SimpleCondition = {}));
var Operator;
(function (Operator) {
    Operator["ALL"] = "ALL";
    Operator["ANY"] = "ANY";
})(Operator = exports.Operator || (exports.Operator = {}));
var Condition;
(function (Condition) {
    /**
     * @internal
     */
    Condition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Condition = exports.Condition || (exports.Condition = {}));
var WaitTime;
(function (WaitTime) {
    /**
     * @internal
     */
    WaitTime.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WaitTime = exports.WaitTime || (exports.WaitTime = {}));
var ConditionalSplitActivity;
(function (ConditionalSplitActivity) {
    /**
     * @internal
     */
    ConditionalSplitActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConditionalSplitActivity = exports.ConditionalSplitActivity || (exports.ConditionalSplitActivity = {}));
var JourneyCustomMessage;
(function (JourneyCustomMessage) {
    /**
     * @internal
     */
    JourneyCustomMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JourneyCustomMessage = exports.JourneyCustomMessage || (exports.JourneyCustomMessage = {}));
var CustomMessageActivity;
(function (CustomMessageActivity) {
    /**
     * @internal
     */
    CustomMessageActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomMessageActivity = exports.CustomMessageActivity || (exports.CustomMessageActivity = {}));
var JourneyEmailMessage;
(function (JourneyEmailMessage) {
    /**
     * @internal
     */
    JourneyEmailMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JourneyEmailMessage = exports.JourneyEmailMessage || (exports.JourneyEmailMessage = {}));
var EmailMessageActivity;
(function (EmailMessageActivity) {
    /**
     * @internal
     */
    EmailMessageActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmailMessageActivity = exports.EmailMessageActivity || (exports.EmailMessageActivity = {}));
var HoldoutActivity;
(function (HoldoutActivity) {
    /**
     * @internal
     */
    HoldoutActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HoldoutActivity = exports.HoldoutActivity || (exports.HoldoutActivity = {}));
var MultiConditionalBranch;
(function (MultiConditionalBranch) {
    /**
     * @internal
     */
    MultiConditionalBranch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiConditionalBranch = exports.MultiConditionalBranch || (exports.MultiConditionalBranch = {}));
var MultiConditionalSplitActivity;
(function (MultiConditionalSplitActivity) {
    /**
     * @internal
     */
    MultiConditionalSplitActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MultiConditionalSplitActivity = exports.MultiConditionalSplitActivity || (exports.MultiConditionalSplitActivity = {}));
var JourneyPushMessage;
(function (JourneyPushMessage) {
    /**
     * @internal
     */
    JourneyPushMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JourneyPushMessage = exports.JourneyPushMessage || (exports.JourneyPushMessage = {}));
var PushMessageActivity;
(function (PushMessageActivity) {
    /**
     * @internal
     */
    PushMessageActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PushMessageActivity = exports.PushMessageActivity || (exports.PushMessageActivity = {}));
var RandomSplitEntry;
(function (RandomSplitEntry) {
    /**
     * @internal
     */
    RandomSplitEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RandomSplitEntry = exports.RandomSplitEntry || (exports.RandomSplitEntry = {}));
var RandomSplitActivity;
(function (RandomSplitActivity) {
    /**
     * @internal
     */
    RandomSplitActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RandomSplitActivity = exports.RandomSplitActivity || (exports.RandomSplitActivity = {}));
var MessageType;
(function (MessageType) {
    MessageType["PROMOTIONAL"] = "PROMOTIONAL";
    MessageType["TRANSACTIONAL"] = "TRANSACTIONAL";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var JourneySMSMessage;
(function (JourneySMSMessage) {
    /**
     * @internal
     */
    JourneySMSMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JourneySMSMessage = exports.JourneySMSMessage || (exports.JourneySMSMessage = {}));
var SMSMessageActivity;
(function (SMSMessageActivity) {
    /**
     * @internal
     */
    SMSMessageActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SMSMessageActivity = exports.SMSMessageActivity || (exports.SMSMessageActivity = {}));
var WaitActivity;
(function (WaitActivity) {
    /**
     * @internal
     */
    WaitActivity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WaitActivity = exports.WaitActivity || (exports.WaitActivity = {}));
var Activity;
(function (Activity) {
    /**
     * @internal
     */
    Activity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Activity = exports.Activity || (exports.Activity = {}));
var ChannelType;
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
})(ChannelType = exports.ChannelType || (exports.ChannelType = {}));
var AddressConfiguration;
(function (AddressConfiguration) {
    /**
     * @internal
     */
    AddressConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddressConfiguration = exports.AddressConfiguration || (exports.AddressConfiguration = {}));
var ADMChannelRequest;
(function (ADMChannelRequest) {
    /**
     * @internal
     */
    ADMChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ADMChannelRequest = exports.ADMChannelRequest || (exports.ADMChannelRequest = {}));
var ADMChannelResponse;
(function (ADMChannelResponse) {
    /**
     * @internal
     */
    ADMChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ADMChannelResponse = exports.ADMChannelResponse || (exports.ADMChannelResponse = {}));
var ADMMessage;
(function (ADMMessage) {
    /**
     * @internal
     */
    ADMMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ADMMessage = exports.ADMMessage || (exports.ADMMessage = {}));
var AndroidPushNotificationTemplate;
(function (AndroidPushNotificationTemplate) {
    /**
     * @internal
     */
    AndroidPushNotificationTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AndroidPushNotificationTemplate = exports.AndroidPushNotificationTemplate || (exports.AndroidPushNotificationTemplate = {}));
var APNSChannelRequest;
(function (APNSChannelRequest) {
    /**
     * @internal
     */
    APNSChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(APNSChannelRequest = exports.APNSChannelRequest || (exports.APNSChannelRequest = {}));
var APNSChannelResponse;
(function (APNSChannelResponse) {
    /**
     * @internal
     */
    APNSChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(APNSChannelResponse = exports.APNSChannelResponse || (exports.APNSChannelResponse = {}));
var APNSMessage;
(function (APNSMessage) {
    /**
     * @internal
     */
    APNSMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(APNSMessage = exports.APNSMessage || (exports.APNSMessage = {}));
var APNSPushNotificationTemplate;
(function (APNSPushNotificationTemplate) {
    /**
     * @internal
     */
    APNSPushNotificationTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(APNSPushNotificationTemplate = exports.APNSPushNotificationTemplate || (exports.APNSPushNotificationTemplate = {}));
var APNSSandboxChannelRequest;
(function (APNSSandboxChannelRequest) {
    /**
     * @internal
     */
    APNSSandboxChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(APNSSandboxChannelRequest = exports.APNSSandboxChannelRequest || (exports.APNSSandboxChannelRequest = {}));
var APNSSandboxChannelResponse;
(function (APNSSandboxChannelResponse) {
    /**
     * @internal
     */
    APNSSandboxChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(APNSSandboxChannelResponse = exports.APNSSandboxChannelResponse || (exports.APNSSandboxChannelResponse = {}));
var APNSVoipChannelRequest;
(function (APNSVoipChannelRequest) {
    /**
     * @internal
     */
    APNSVoipChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(APNSVoipChannelRequest = exports.APNSVoipChannelRequest || (exports.APNSVoipChannelRequest = {}));
var APNSVoipChannelResponse;
(function (APNSVoipChannelResponse) {
    /**
     * @internal
     */
    APNSVoipChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(APNSVoipChannelResponse = exports.APNSVoipChannelResponse || (exports.APNSVoipChannelResponse = {}));
var APNSVoipSandboxChannelRequest;
(function (APNSVoipSandboxChannelRequest) {
    /**
     * @internal
     */
    APNSVoipSandboxChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(APNSVoipSandboxChannelRequest = exports.APNSVoipSandboxChannelRequest || (exports.APNSVoipSandboxChannelRequest = {}));
var APNSVoipSandboxChannelResponse;
(function (APNSVoipSandboxChannelResponse) {
    /**
     * @internal
     */
    APNSVoipSandboxChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(APNSVoipSandboxChannelResponse = exports.APNSVoipSandboxChannelResponse || (exports.APNSVoipSandboxChannelResponse = {}));
var ResultRowValue;
(function (ResultRowValue) {
    /**
     * @internal
     */
    ResultRowValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResultRowValue = exports.ResultRowValue || (exports.ResultRowValue = {}));
var ResultRow;
(function (ResultRow) {
    /**
     * @internal
     */
    ResultRow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResultRow = exports.ResultRow || (exports.ResultRow = {}));
var BaseKpiResult;
(function (BaseKpiResult) {
    /**
     * @internal
     */
    BaseKpiResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BaseKpiResult = exports.BaseKpiResult || (exports.BaseKpiResult = {}));
var ApplicationDateRangeKpiResponse;
(function (ApplicationDateRangeKpiResponse) {
    /**
     * @internal
     */
    ApplicationDateRangeKpiResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationDateRangeKpiResponse = exports.ApplicationDateRangeKpiResponse || (exports.ApplicationDateRangeKpiResponse = {}));
var ApplicationResponse;
(function (ApplicationResponse) {
    /**
     * @internal
     */
    ApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationResponse = exports.ApplicationResponse || (exports.ApplicationResponse = {}));
var Mode;
(function (Mode) {
    Mode["DELIVERY"] = "DELIVERY";
    Mode["FILTER"] = "FILTER";
})(Mode = exports.Mode || (exports.Mode = {}));
var CampaignHook;
(function (CampaignHook) {
    /**
     * @internal
     */
    CampaignHook.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CampaignHook = exports.CampaignHook || (exports.CampaignHook = {}));
var CampaignLimits;
(function (CampaignLimits) {
    /**
     * @internal
     */
    CampaignLimits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CampaignLimits = exports.CampaignLimits || (exports.CampaignLimits = {}));
var QuietTime;
(function (QuietTime) {
    /**
     * @internal
     */
    QuietTime.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QuietTime = exports.QuietTime || (exports.QuietTime = {}));
var ApplicationSettingsResource;
(function (ApplicationSettingsResource) {
    /**
     * @internal
     */
    ApplicationSettingsResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationSettingsResource = exports.ApplicationSettingsResource || (exports.ApplicationSettingsResource = {}));
var ApplicationsResponse;
(function (ApplicationsResponse) {
    /**
     * @internal
     */
    ApplicationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationsResponse = exports.ApplicationsResponse || (exports.ApplicationsResponse = {}));
var AttributesResource;
(function (AttributesResource) {
    /**
     * @internal
     */
    AttributesResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttributesResource = exports.AttributesResource || (exports.AttributesResource = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var BaiduChannelRequest;
(function (BaiduChannelRequest) {
    /**
     * @internal
     */
    BaiduChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BaiduChannelRequest = exports.BaiduChannelRequest || (exports.BaiduChannelRequest = {}));
var BaiduChannelResponse;
(function (BaiduChannelResponse) {
    /**
     * @internal
     */
    BaiduChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BaiduChannelResponse = exports.BaiduChannelResponse || (exports.BaiduChannelResponse = {}));
var BaiduMessage;
(function (BaiduMessage) {
    /**
     * @internal
     */
    BaiduMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BaiduMessage = exports.BaiduMessage || (exports.BaiduMessage = {}));
var CampaignCustomMessage;
(function (CampaignCustomMessage) {
    /**
     * @internal
     */
    CampaignCustomMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CampaignCustomMessage = exports.CampaignCustomMessage || (exports.CampaignCustomMessage = {}));
var CampaignDateRangeKpiResponse;
(function (CampaignDateRangeKpiResponse) {
    /**
     * @internal
     */
    CampaignDateRangeKpiResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CampaignDateRangeKpiResponse = exports.CampaignDateRangeKpiResponse || (exports.CampaignDateRangeKpiResponse = {}));
var CampaignEmailMessage;
(function (CampaignEmailMessage) {
    /**
     * @internal
     */
    CampaignEmailMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CampaignEmailMessage = exports.CampaignEmailMessage || (exports.CampaignEmailMessage = {}));
var FilterType;
(function (FilterType) {
    FilterType["ENDPOINT"] = "ENDPOINT";
    FilterType["SYSTEM"] = "SYSTEM";
})(FilterType = exports.FilterType || (exports.FilterType = {}));
var CampaignEventFilter;
(function (CampaignEventFilter) {
    /**
     * @internal
     */
    CampaignEventFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CampaignEventFilter = exports.CampaignEventFilter || (exports.CampaignEventFilter = {}));
var CustomDeliveryConfiguration;
(function (CustomDeliveryConfiguration) {
    /**
     * @internal
     */
    CustomDeliveryConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomDeliveryConfiguration = exports.CustomDeliveryConfiguration || (exports.CustomDeliveryConfiguration = {}));
var Message;
(function (Message) {
    /**
     * @internal
     */
    Message.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Message = exports.Message || (exports.Message = {}));
var CampaignSmsMessage;
(function (CampaignSmsMessage) {
    /**
     * @internal
     */
    CampaignSmsMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CampaignSmsMessage = exports.CampaignSmsMessage || (exports.CampaignSmsMessage = {}));
var MessageConfiguration;
(function (MessageConfiguration) {
    /**
     * @internal
     */
    MessageConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageConfiguration = exports.MessageConfiguration || (exports.MessageConfiguration = {}));
var Frequency;
(function (Frequency) {
    Frequency["DAILY"] = "DAILY";
    Frequency["EVENT"] = "EVENT";
    Frequency["HOURLY"] = "HOURLY";
    Frequency["MONTHLY"] = "MONTHLY";
    Frequency["ONCE"] = "ONCE";
    Frequency["WEEKLY"] = "WEEKLY";
})(Frequency = exports.Frequency || (exports.Frequency = {}));
var Schedule;
(function (Schedule) {
    /**
     * @internal
     */
    Schedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Schedule = exports.Schedule || (exports.Schedule = {}));
var CampaignStatus;
(function (CampaignStatus) {
    CampaignStatus["COMPLETED"] = "COMPLETED";
    CampaignStatus["DELETED"] = "DELETED";
    CampaignStatus["EXECUTING"] = "EXECUTING";
    CampaignStatus["INVALID"] = "INVALID";
    CampaignStatus["PAUSED"] = "PAUSED";
    CampaignStatus["PENDING_NEXT_RUN"] = "PENDING_NEXT_RUN";
    CampaignStatus["SCHEDULED"] = "SCHEDULED";
})(CampaignStatus = exports.CampaignStatus || (exports.CampaignStatus = {}));
var CampaignState;
(function (CampaignState) {
    /**
     * @internal
     */
    CampaignState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CampaignState = exports.CampaignState || (exports.CampaignState = {}));
var Template;
(function (Template) {
    /**
     * @internal
     */
    Template.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Template = exports.Template || (exports.Template = {}));
var TemplateConfiguration;
(function (TemplateConfiguration) {
    /**
     * @internal
     */
    TemplateConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplateConfiguration = exports.TemplateConfiguration || (exports.TemplateConfiguration = {}));
var TreatmentResource;
(function (TreatmentResource) {
    /**
     * @internal
     */
    TreatmentResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TreatmentResource = exports.TreatmentResource || (exports.TreatmentResource = {}));
var CampaignResponse;
(function (CampaignResponse) {
    /**
     * @internal
     */
    CampaignResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CampaignResponse = exports.CampaignResponse || (exports.CampaignResponse = {}));
var CampaignsResponse;
(function (CampaignsResponse) {
    /**
     * @internal
     */
    CampaignsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CampaignsResponse = exports.CampaignsResponse || (exports.CampaignsResponse = {}));
var ChannelResponse;
(function (ChannelResponse) {
    /**
     * @internal
     */
    ChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChannelResponse = exports.ChannelResponse || (exports.ChannelResponse = {}));
var ChannelsResponse;
(function (ChannelsResponse) {
    /**
     * @internal
     */
    ChannelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChannelsResponse = exports.ChannelsResponse || (exports.ChannelsResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CreateApplicationRequest;
(function (CreateApplicationRequest) {
    /**
     * @internal
     */
    CreateApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationRequest = exports.CreateApplicationRequest || (exports.CreateApplicationRequest = {}));
var CreateAppRequest;
(function (CreateAppRequest) {
    /**
     * @internal
     */
    CreateAppRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAppRequest = exports.CreateAppRequest || (exports.CreateAppRequest = {}));
var CreateAppResponse;
(function (CreateAppResponse) {
    /**
     * @internal
     */
    CreateAppResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAppResponse = exports.CreateAppResponse || (exports.CreateAppResponse = {}));
var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {}));
var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}));
var MethodNotAllowedException;
(function (MethodNotAllowedException) {
    /**
     * @internal
     */
    MethodNotAllowedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MethodNotAllowedException = exports.MethodNotAllowedException || (exports.MethodNotAllowedException = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var PayloadTooLargeException;
(function (PayloadTooLargeException) {
    /**
     * @internal
     */
    PayloadTooLargeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PayloadTooLargeException = exports.PayloadTooLargeException || (exports.PayloadTooLargeException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var WriteTreatmentResource;
(function (WriteTreatmentResource) {
    /**
     * @internal
     */
    WriteTreatmentResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WriteTreatmentResource = exports.WriteTreatmentResource || (exports.WriteTreatmentResource = {}));
var WriteCampaignRequest;
(function (WriteCampaignRequest) {
    /**
     * @internal
     */
    WriteCampaignRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WriteCampaignRequest = exports.WriteCampaignRequest || (exports.WriteCampaignRequest = {}));
var CreateCampaignRequest;
(function (CreateCampaignRequest) {
    /**
     * @internal
     */
    CreateCampaignRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCampaignRequest = exports.CreateCampaignRequest || (exports.CreateCampaignRequest = {}));
var CreateCampaignResponse;
(function (CreateCampaignResponse) {
    /**
     * @internal
     */
    CreateCampaignResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCampaignResponse = exports.CreateCampaignResponse || (exports.CreateCampaignResponse = {}));
var EmailTemplateRequest;
(function (EmailTemplateRequest) {
    /**
     * @internal
     */
    EmailTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmailTemplateRequest = exports.EmailTemplateRequest || (exports.EmailTemplateRequest = {}));
var CreateEmailTemplateRequest;
(function (CreateEmailTemplateRequest) {
    /**
     * @internal
     */
    CreateEmailTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEmailTemplateRequest = exports.CreateEmailTemplateRequest || (exports.CreateEmailTemplateRequest = {}));
var CreateTemplateMessageBody;
(function (CreateTemplateMessageBody) {
    /**
     * @internal
     */
    CreateTemplateMessageBody.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTemplateMessageBody = exports.CreateTemplateMessageBody || (exports.CreateTemplateMessageBody = {}));
var CreateEmailTemplateResponse;
(function (CreateEmailTemplateResponse) {
    /**
     * @internal
     */
    CreateEmailTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEmailTemplateResponse = exports.CreateEmailTemplateResponse || (exports.CreateEmailTemplateResponse = {}));
var ExportJobRequest;
(function (ExportJobRequest) {
    /**
     * @internal
     */
    ExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportJobRequest = exports.ExportJobRequest || (exports.ExportJobRequest = {}));
var CreateExportJobRequest;
(function (CreateExportJobRequest) {
    /**
     * @internal
     */
    CreateExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateExportJobRequest = exports.CreateExportJobRequest || (exports.CreateExportJobRequest = {}));
var ExportJobResource;
(function (ExportJobResource) {
    /**
     * @internal
     */
    ExportJobResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportJobResource = exports.ExportJobResource || (exports.ExportJobResource = {}));
var JobStatus;
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
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var ExportJobResponse;
(function (ExportJobResponse) {
    /**
     * @internal
     */
    ExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportJobResponse = exports.ExportJobResponse || (exports.ExportJobResponse = {}));
var CreateExportJobResponse;
(function (CreateExportJobResponse) {
    /**
     * @internal
     */
    CreateExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateExportJobResponse = exports.CreateExportJobResponse || (exports.CreateExportJobResponse = {}));
var Format;
(function (Format) {
    Format["CSV"] = "CSV";
    Format["JSON"] = "JSON";
})(Format = exports.Format || (exports.Format = {}));
var ImportJobRequest;
(function (ImportJobRequest) {
    /**
     * @internal
     */
    ImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportJobRequest = exports.ImportJobRequest || (exports.ImportJobRequest = {}));
var CreateImportJobRequest;
(function (CreateImportJobRequest) {
    /**
     * @internal
     */
    CreateImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImportJobRequest = exports.CreateImportJobRequest || (exports.CreateImportJobRequest = {}));
var ImportJobResource;
(function (ImportJobResource) {
    /**
     * @internal
     */
    ImportJobResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportJobResource = exports.ImportJobResource || (exports.ImportJobResource = {}));
var ImportJobResponse;
(function (ImportJobResponse) {
    /**
     * @internal
     */
    ImportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportJobResponse = exports.ImportJobResponse || (exports.ImportJobResponse = {}));
var CreateImportJobResponse;
(function (CreateImportJobResponse) {
    /**
     * @internal
     */
    CreateImportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateImportJobResponse = exports.CreateImportJobResponse || (exports.CreateImportJobResponse = {}));
var JourneyLimits;
(function (JourneyLimits) {
    /**
     * @internal
     */
    JourneyLimits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JourneyLimits = exports.JourneyLimits || (exports.JourneyLimits = {}));
var JourneySchedule;
(function (JourneySchedule) {
    /**
     * @internal
     */
    JourneySchedule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JourneySchedule = exports.JourneySchedule || (exports.JourneySchedule = {}));
var EventFilter;
(function (EventFilter) {
    /**
     * @internal
     */
    EventFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventFilter = exports.EventFilter || (exports.EventFilter = {}));
var EventStartCondition;
(function (EventStartCondition) {
    /**
     * @internal
     */
    EventStartCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventStartCondition = exports.EventStartCondition || (exports.EventStartCondition = {}));
var StartCondition;
(function (StartCondition) {
    /**
     * @internal
     */
    StartCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartCondition = exports.StartCondition || (exports.StartCondition = {}));
var State;
(function (State) {
    State["ACTIVE"] = "ACTIVE";
    State["CANCELLED"] = "CANCELLED";
    State["CLOSED"] = "CLOSED";
    State["COMPLETED"] = "COMPLETED";
    State["DRAFT"] = "DRAFT";
    State["PAUSED"] = "PAUSED";
})(State = exports.State || (exports.State = {}));
var WriteJourneyRequest;
(function (WriteJourneyRequest) {
    /**
     * @internal
     */
    WriteJourneyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WriteJourneyRequest = exports.WriteJourneyRequest || (exports.WriteJourneyRequest = {}));
var CreateJourneyRequest;
(function (CreateJourneyRequest) {
    /**
     * @internal
     */
    CreateJourneyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJourneyRequest = exports.CreateJourneyRequest || (exports.CreateJourneyRequest = {}));
var JourneyResponse;
(function (JourneyResponse) {
    /**
     * @internal
     */
    JourneyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JourneyResponse = exports.JourneyResponse || (exports.JourneyResponse = {}));
var CreateJourneyResponse;
(function (CreateJourneyResponse) {
    /**
     * @internal
     */
    CreateJourneyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateJourneyResponse = exports.CreateJourneyResponse || (exports.CreateJourneyResponse = {}));
var DefaultPushNotificationTemplate;
(function (DefaultPushNotificationTemplate) {
    /**
     * @internal
     */
    DefaultPushNotificationTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultPushNotificationTemplate = exports.DefaultPushNotificationTemplate || (exports.DefaultPushNotificationTemplate = {}));
var PushNotificationTemplateRequest;
(function (PushNotificationTemplateRequest) {
    /**
     * @internal
     */
    PushNotificationTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PushNotificationTemplateRequest = exports.PushNotificationTemplateRequest || (exports.PushNotificationTemplateRequest = {}));
var CreatePushTemplateRequest;
(function (CreatePushTemplateRequest) {
    /**
     * @internal
     */
    CreatePushTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePushTemplateRequest = exports.CreatePushTemplateRequest || (exports.CreatePushTemplateRequest = {}));
var CreatePushTemplateResponse;
(function (CreatePushTemplateResponse) {
    /**
     * @internal
     */
    CreatePushTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePushTemplateResponse = exports.CreatePushTemplateResponse || (exports.CreatePushTemplateResponse = {}));
var CreateRecommenderConfigurationShape;
(function (CreateRecommenderConfigurationShape) {
    /**
     * @internal
     */
    CreateRecommenderConfigurationShape.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRecommenderConfigurationShape = exports.CreateRecommenderConfigurationShape || (exports.CreateRecommenderConfigurationShape = {}));
var CreateRecommenderConfigurationRequest;
(function (CreateRecommenderConfigurationRequest) {
    /**
     * @internal
     */
    CreateRecommenderConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRecommenderConfigurationRequest = exports.CreateRecommenderConfigurationRequest || (exports.CreateRecommenderConfigurationRequest = {}));
var RecommenderConfigurationResponse;
(function (RecommenderConfigurationResponse) {
    /**
     * @internal
     */
    RecommenderConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecommenderConfigurationResponse = exports.RecommenderConfigurationResponse || (exports.RecommenderConfigurationResponse = {}));
var CreateRecommenderConfigurationResponse;
(function (CreateRecommenderConfigurationResponse) {
    /**
     * @internal
     */
    CreateRecommenderConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRecommenderConfigurationResponse = exports.CreateRecommenderConfigurationResponse || (exports.CreateRecommenderConfigurationResponse = {}));
var SegmentReference;
(function (SegmentReference) {
    /**
     * @internal
     */
    SegmentReference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SegmentReference = exports.SegmentReference || (exports.SegmentReference = {}));
var SourceType;
(function (SourceType) {
    SourceType["ALL"] = "ALL";
    SourceType["ANY"] = "ANY";
    SourceType["NONE"] = "NONE";
})(SourceType = exports.SourceType || (exports.SourceType = {}));
var Type;
(function (Type) {
    Type["ALL"] = "ALL";
    Type["ANY"] = "ANY";
    Type["NONE"] = "NONE";
})(Type = exports.Type || (exports.Type = {}));
var SegmentGroup;
(function (SegmentGroup) {
    /**
     * @internal
     */
    SegmentGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SegmentGroup = exports.SegmentGroup || (exports.SegmentGroup = {}));
var Include;
(function (Include) {
    Include["ALL"] = "ALL";
    Include["ANY"] = "ANY";
    Include["NONE"] = "NONE";
})(Include = exports.Include || (exports.Include = {}));
var SegmentGroupList;
(function (SegmentGroupList) {
    /**
     * @internal
     */
    SegmentGroupList.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SegmentGroupList = exports.SegmentGroupList || (exports.SegmentGroupList = {}));
var WriteSegmentRequest;
(function (WriteSegmentRequest) {
    /**
     * @internal
     */
    WriteSegmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WriteSegmentRequest = exports.WriteSegmentRequest || (exports.WriteSegmentRequest = {}));
var CreateSegmentRequest;
(function (CreateSegmentRequest) {
    /**
     * @internal
     */
    CreateSegmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSegmentRequest = exports.CreateSegmentRequest || (exports.CreateSegmentRequest = {}));
var SegmentImportResource;
(function (SegmentImportResource) {
    /**
     * @internal
     */
    SegmentImportResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SegmentImportResource = exports.SegmentImportResource || (exports.SegmentImportResource = {}));
var SegmentType;
(function (SegmentType) {
    SegmentType["DIMENSIONAL"] = "DIMENSIONAL";
    SegmentType["IMPORT"] = "IMPORT";
})(SegmentType = exports.SegmentType || (exports.SegmentType = {}));
var SegmentResponse;
(function (SegmentResponse) {
    /**
     * @internal
     */
    SegmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SegmentResponse = exports.SegmentResponse || (exports.SegmentResponse = {}));
var CreateSegmentResponse;
(function (CreateSegmentResponse) {
    /**
     * @internal
     */
    CreateSegmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSegmentResponse = exports.CreateSegmentResponse || (exports.CreateSegmentResponse = {}));
var SMSTemplateRequest;
(function (SMSTemplateRequest) {
    /**
     * @internal
     */
    SMSTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SMSTemplateRequest = exports.SMSTemplateRequest || (exports.SMSTemplateRequest = {}));
var CreateSmsTemplateRequest;
(function (CreateSmsTemplateRequest) {
    /**
     * @internal
     */
    CreateSmsTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSmsTemplateRequest = exports.CreateSmsTemplateRequest || (exports.CreateSmsTemplateRequest = {}));
var CreateSmsTemplateResponse;
(function (CreateSmsTemplateResponse) {
    /**
     * @internal
     */
    CreateSmsTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSmsTemplateResponse = exports.CreateSmsTemplateResponse || (exports.CreateSmsTemplateResponse = {}));
var VoiceTemplateRequest;
(function (VoiceTemplateRequest) {
    /**
     * @internal
     */
    VoiceTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VoiceTemplateRequest = exports.VoiceTemplateRequest || (exports.VoiceTemplateRequest = {}));
var CreateVoiceTemplateRequest;
(function (CreateVoiceTemplateRequest) {
    /**
     * @internal
     */
    CreateVoiceTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVoiceTemplateRequest = exports.CreateVoiceTemplateRequest || (exports.CreateVoiceTemplateRequest = {}));
var CreateVoiceTemplateResponse;
(function (CreateVoiceTemplateResponse) {
    /**
     * @internal
     */
    CreateVoiceTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVoiceTemplateResponse = exports.CreateVoiceTemplateResponse || (exports.CreateVoiceTemplateResponse = {}));
var DefaultMessage;
(function (DefaultMessage) {
    /**
     * @internal
     */
    DefaultMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultMessage = exports.DefaultMessage || (exports.DefaultMessage = {}));
var DefaultPushNotificationMessage;
(function (DefaultPushNotificationMessage) {
    /**
     * @internal
     */
    DefaultPushNotificationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultPushNotificationMessage = exports.DefaultPushNotificationMessage || (exports.DefaultPushNotificationMessage = {}));
var DeleteAdmChannelRequest;
(function (DeleteAdmChannelRequest) {
    /**
     * @internal
     */
    DeleteAdmChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAdmChannelRequest = exports.DeleteAdmChannelRequest || (exports.DeleteAdmChannelRequest = {}));
var DeleteAdmChannelResponse;
(function (DeleteAdmChannelResponse) {
    /**
     * @internal
     */
    DeleteAdmChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAdmChannelResponse = exports.DeleteAdmChannelResponse || (exports.DeleteAdmChannelResponse = {}));
var DeleteApnsChannelRequest;
(function (DeleteApnsChannelRequest) {
    /**
     * @internal
     */
    DeleteApnsChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApnsChannelRequest = exports.DeleteApnsChannelRequest || (exports.DeleteApnsChannelRequest = {}));
var DeleteApnsChannelResponse;
(function (DeleteApnsChannelResponse) {
    /**
     * @internal
     */
    DeleteApnsChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApnsChannelResponse = exports.DeleteApnsChannelResponse || (exports.DeleteApnsChannelResponse = {}));
var DeleteApnsSandboxChannelRequest;
(function (DeleteApnsSandboxChannelRequest) {
    /**
     * @internal
     */
    DeleteApnsSandboxChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApnsSandboxChannelRequest = exports.DeleteApnsSandboxChannelRequest || (exports.DeleteApnsSandboxChannelRequest = {}));
var DeleteApnsSandboxChannelResponse;
(function (DeleteApnsSandboxChannelResponse) {
    /**
     * @internal
     */
    DeleteApnsSandboxChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApnsSandboxChannelResponse = exports.DeleteApnsSandboxChannelResponse || (exports.DeleteApnsSandboxChannelResponse = {}));
var DeleteApnsVoipChannelRequest;
(function (DeleteApnsVoipChannelRequest) {
    /**
     * @internal
     */
    DeleteApnsVoipChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApnsVoipChannelRequest = exports.DeleteApnsVoipChannelRequest || (exports.DeleteApnsVoipChannelRequest = {}));
var DeleteApnsVoipChannelResponse;
(function (DeleteApnsVoipChannelResponse) {
    /**
     * @internal
     */
    DeleteApnsVoipChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApnsVoipChannelResponse = exports.DeleteApnsVoipChannelResponse || (exports.DeleteApnsVoipChannelResponse = {}));
var DeleteApnsVoipSandboxChannelRequest;
(function (DeleteApnsVoipSandboxChannelRequest) {
    /**
     * @internal
     */
    DeleteApnsVoipSandboxChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApnsVoipSandboxChannelRequest = exports.DeleteApnsVoipSandboxChannelRequest || (exports.DeleteApnsVoipSandboxChannelRequest = {}));
var DeleteApnsVoipSandboxChannelResponse;
(function (DeleteApnsVoipSandboxChannelResponse) {
    /**
     * @internal
     */
    DeleteApnsVoipSandboxChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApnsVoipSandboxChannelResponse = exports.DeleteApnsVoipSandboxChannelResponse || (exports.DeleteApnsVoipSandboxChannelResponse = {}));
var DeleteAppRequest;
(function (DeleteAppRequest) {
    /**
     * @internal
     */
    DeleteAppRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAppRequest = exports.DeleteAppRequest || (exports.DeleteAppRequest = {}));
var DeleteAppResponse;
(function (DeleteAppResponse) {
    /**
     * @internal
     */
    DeleteAppResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAppResponse = exports.DeleteAppResponse || (exports.DeleteAppResponse = {}));
var DeleteBaiduChannelRequest;
(function (DeleteBaiduChannelRequest) {
    /**
     * @internal
     */
    DeleteBaiduChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBaiduChannelRequest = exports.DeleteBaiduChannelRequest || (exports.DeleteBaiduChannelRequest = {}));
var DeleteBaiduChannelResponse;
(function (DeleteBaiduChannelResponse) {
    /**
     * @internal
     */
    DeleteBaiduChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBaiduChannelResponse = exports.DeleteBaiduChannelResponse || (exports.DeleteBaiduChannelResponse = {}));
var DeleteCampaignRequest;
(function (DeleteCampaignRequest) {
    /**
     * @internal
     */
    DeleteCampaignRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCampaignRequest = exports.DeleteCampaignRequest || (exports.DeleteCampaignRequest = {}));
var DeleteCampaignResponse;
(function (DeleteCampaignResponse) {
    /**
     * @internal
     */
    DeleteCampaignResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCampaignResponse = exports.DeleteCampaignResponse || (exports.DeleteCampaignResponse = {}));
var DeleteEmailChannelRequest;
(function (DeleteEmailChannelRequest) {
    /**
     * @internal
     */
    DeleteEmailChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEmailChannelRequest = exports.DeleteEmailChannelRequest || (exports.DeleteEmailChannelRequest = {}));
var EmailChannelResponse;
(function (EmailChannelResponse) {
    /**
     * @internal
     */
    EmailChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmailChannelResponse = exports.EmailChannelResponse || (exports.EmailChannelResponse = {}));
var DeleteEmailChannelResponse;
(function (DeleteEmailChannelResponse) {
    /**
     * @internal
     */
    DeleteEmailChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEmailChannelResponse = exports.DeleteEmailChannelResponse || (exports.DeleteEmailChannelResponse = {}));
var DeleteEmailTemplateRequest;
(function (DeleteEmailTemplateRequest) {
    /**
     * @internal
     */
    DeleteEmailTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEmailTemplateRequest = exports.DeleteEmailTemplateRequest || (exports.DeleteEmailTemplateRequest = {}));
var MessageBody;
(function (MessageBody) {
    /**
     * @internal
     */
    MessageBody.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageBody = exports.MessageBody || (exports.MessageBody = {}));
var DeleteEmailTemplateResponse;
(function (DeleteEmailTemplateResponse) {
    /**
     * @internal
     */
    DeleteEmailTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEmailTemplateResponse = exports.DeleteEmailTemplateResponse || (exports.DeleteEmailTemplateResponse = {}));
var DeleteEndpointRequest;
(function (DeleteEndpointRequest) {
    /**
     * @internal
     */
    DeleteEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEndpointRequest = exports.DeleteEndpointRequest || (exports.DeleteEndpointRequest = {}));
var EndpointDemographic;
(function (EndpointDemographic) {
    /**
     * @internal
     */
    EndpointDemographic.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointDemographic = exports.EndpointDemographic || (exports.EndpointDemographic = {}));
var EndpointLocation;
(function (EndpointLocation) {
    /**
     * @internal
     */
    EndpointLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointLocation = exports.EndpointLocation || (exports.EndpointLocation = {}));
var EndpointUser;
(function (EndpointUser) {
    /**
     * @internal
     */
    EndpointUser.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointUser = exports.EndpointUser || (exports.EndpointUser = {}));
var EndpointResponse;
(function (EndpointResponse) {
    /**
     * @internal
     */
    EndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointResponse = exports.EndpointResponse || (exports.EndpointResponse = {}));
var DeleteEndpointResponse;
(function (DeleteEndpointResponse) {
    /**
     * @internal
     */
    DeleteEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEndpointResponse = exports.DeleteEndpointResponse || (exports.DeleteEndpointResponse = {}));
var DeleteEventStreamRequest;
(function (DeleteEventStreamRequest) {
    /**
     * @internal
     */
    DeleteEventStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEventStreamRequest = exports.DeleteEventStreamRequest || (exports.DeleteEventStreamRequest = {}));
var EventStream;
(function (EventStream) {
    /**
     * @internal
     */
    EventStream.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventStream = exports.EventStream || (exports.EventStream = {}));
var DeleteEventStreamResponse;
(function (DeleteEventStreamResponse) {
    /**
     * @internal
     */
    DeleteEventStreamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEventStreamResponse = exports.DeleteEventStreamResponse || (exports.DeleteEventStreamResponse = {}));
var DeleteGcmChannelRequest;
(function (DeleteGcmChannelRequest) {
    /**
     * @internal
     */
    DeleteGcmChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGcmChannelRequest = exports.DeleteGcmChannelRequest || (exports.DeleteGcmChannelRequest = {}));
var GCMChannelResponse;
(function (GCMChannelResponse) {
    /**
     * @internal
     */
    GCMChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GCMChannelResponse = exports.GCMChannelResponse || (exports.GCMChannelResponse = {}));
var DeleteGcmChannelResponse;
(function (DeleteGcmChannelResponse) {
    /**
     * @internal
     */
    DeleteGcmChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGcmChannelResponse = exports.DeleteGcmChannelResponse || (exports.DeleteGcmChannelResponse = {}));
var DeleteJourneyRequest;
(function (DeleteJourneyRequest) {
    /**
     * @internal
     */
    DeleteJourneyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteJourneyRequest = exports.DeleteJourneyRequest || (exports.DeleteJourneyRequest = {}));
var DeleteJourneyResponse;
(function (DeleteJourneyResponse) {
    /**
     * @internal
     */
    DeleteJourneyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteJourneyResponse = exports.DeleteJourneyResponse || (exports.DeleteJourneyResponse = {}));
var DeletePushTemplateRequest;
(function (DeletePushTemplateRequest) {
    /**
     * @internal
     */
    DeletePushTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePushTemplateRequest = exports.DeletePushTemplateRequest || (exports.DeletePushTemplateRequest = {}));
var DeletePushTemplateResponse;
(function (DeletePushTemplateResponse) {
    /**
     * @internal
     */
    DeletePushTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePushTemplateResponse = exports.DeletePushTemplateResponse || (exports.DeletePushTemplateResponse = {}));
var DeleteRecommenderConfigurationRequest;
(function (DeleteRecommenderConfigurationRequest) {
    /**
     * @internal
     */
    DeleteRecommenderConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRecommenderConfigurationRequest = exports.DeleteRecommenderConfigurationRequest || (exports.DeleteRecommenderConfigurationRequest = {}));
var DeleteRecommenderConfigurationResponse;
(function (DeleteRecommenderConfigurationResponse) {
    /**
     * @internal
     */
    DeleteRecommenderConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRecommenderConfigurationResponse = exports.DeleteRecommenderConfigurationResponse || (exports.DeleteRecommenderConfigurationResponse = {}));
var DeleteSegmentRequest;
(function (DeleteSegmentRequest) {
    /**
     * @internal
     */
    DeleteSegmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSegmentRequest = exports.DeleteSegmentRequest || (exports.DeleteSegmentRequest = {}));
var DeleteSegmentResponse;
(function (DeleteSegmentResponse) {
    /**
     * @internal
     */
    DeleteSegmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSegmentResponse = exports.DeleteSegmentResponse || (exports.DeleteSegmentResponse = {}));
var DeleteSmsChannelRequest;
(function (DeleteSmsChannelRequest) {
    /**
     * @internal
     */
    DeleteSmsChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSmsChannelRequest = exports.DeleteSmsChannelRequest || (exports.DeleteSmsChannelRequest = {}));
var SMSChannelResponse;
(function (SMSChannelResponse) {
    /**
     * @internal
     */
    SMSChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SMSChannelResponse = exports.SMSChannelResponse || (exports.SMSChannelResponse = {}));
var DeleteSmsChannelResponse;
(function (DeleteSmsChannelResponse) {
    /**
     * @internal
     */
    DeleteSmsChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSmsChannelResponse = exports.DeleteSmsChannelResponse || (exports.DeleteSmsChannelResponse = {}));
var DeleteSmsTemplateRequest;
(function (DeleteSmsTemplateRequest) {
    /**
     * @internal
     */
    DeleteSmsTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSmsTemplateRequest = exports.DeleteSmsTemplateRequest || (exports.DeleteSmsTemplateRequest = {}));
var DeleteSmsTemplateResponse;
(function (DeleteSmsTemplateResponse) {
    /**
     * @internal
     */
    DeleteSmsTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSmsTemplateResponse = exports.DeleteSmsTemplateResponse || (exports.DeleteSmsTemplateResponse = {}));
var DeleteUserEndpointsRequest;
(function (DeleteUserEndpointsRequest) {
    /**
     * @internal
     */
    DeleteUserEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserEndpointsRequest = exports.DeleteUserEndpointsRequest || (exports.DeleteUserEndpointsRequest = {}));
var EndpointsResponse;
(function (EndpointsResponse) {
    /**
     * @internal
     */
    EndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointsResponse = exports.EndpointsResponse || (exports.EndpointsResponse = {}));
var DeleteUserEndpointsResponse;
(function (DeleteUserEndpointsResponse) {
    /**
     * @internal
     */
    DeleteUserEndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserEndpointsResponse = exports.DeleteUserEndpointsResponse || (exports.DeleteUserEndpointsResponse = {}));
var DeleteVoiceChannelRequest;
(function (DeleteVoiceChannelRequest) {
    /**
     * @internal
     */
    DeleteVoiceChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVoiceChannelRequest = exports.DeleteVoiceChannelRequest || (exports.DeleteVoiceChannelRequest = {}));
var VoiceChannelResponse;
(function (VoiceChannelResponse) {
    /**
     * @internal
     */
    VoiceChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VoiceChannelResponse = exports.VoiceChannelResponse || (exports.VoiceChannelResponse = {}));
var DeleteVoiceChannelResponse;
(function (DeleteVoiceChannelResponse) {
    /**
     * @internal
     */
    DeleteVoiceChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVoiceChannelResponse = exports.DeleteVoiceChannelResponse || (exports.DeleteVoiceChannelResponse = {}));
var DeleteVoiceTemplateRequest;
(function (DeleteVoiceTemplateRequest) {
    /**
     * @internal
     */
    DeleteVoiceTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVoiceTemplateRequest = exports.DeleteVoiceTemplateRequest || (exports.DeleteVoiceTemplateRequest = {}));
var DeleteVoiceTemplateResponse;
(function (DeleteVoiceTemplateResponse) {
    /**
     * @internal
     */
    DeleteVoiceTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVoiceTemplateResponse = exports.DeleteVoiceTemplateResponse || (exports.DeleteVoiceTemplateResponse = {}));
var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus["DUPLICATE"] = "DUPLICATE";
    DeliveryStatus["OPT_OUT"] = "OPT_OUT";
    DeliveryStatus["PERMANENT_FAILURE"] = "PERMANENT_FAILURE";
    DeliveryStatus["SUCCESSFUL"] = "SUCCESSFUL";
    DeliveryStatus["TEMPORARY_FAILURE"] = "TEMPORARY_FAILURE";
    DeliveryStatus["THROTTLED"] = "THROTTLED";
    DeliveryStatus["UNKNOWN_FAILURE"] = "UNKNOWN_FAILURE";
})(DeliveryStatus = exports.DeliveryStatus || (exports.DeliveryStatus = {}));
var RawEmail;
(function (RawEmail) {
    /**
     * @internal
     */
    RawEmail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RawEmail = exports.RawEmail || (exports.RawEmail = {}));
var SimpleEmailPart;
(function (SimpleEmailPart) {
    /**
     * @internal
     */
    SimpleEmailPart.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimpleEmailPart = exports.SimpleEmailPart || (exports.SimpleEmailPart = {}));
var SimpleEmail;
(function (SimpleEmail) {
    /**
     * @internal
     */
    SimpleEmail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SimpleEmail = exports.SimpleEmail || (exports.SimpleEmail = {}));
var EmailMessage;
(function (EmailMessage) {
    /**
     * @internal
     */
    EmailMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmailMessage = exports.EmailMessage || (exports.EmailMessage = {}));
var GCMMessage;
(function (GCMMessage) {
    /**
     * @internal
     */
    GCMMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GCMMessage = exports.GCMMessage || (exports.GCMMessage = {}));
var SMSMessage;
(function (SMSMessage) {
    /**
     * @internal
     */
    SMSMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SMSMessage = exports.SMSMessage || (exports.SMSMessage = {}));
var VoiceMessage;
(function (VoiceMessage) {
    /**
     * @internal
     */
    VoiceMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VoiceMessage = exports.VoiceMessage || (exports.VoiceMessage = {}));
var DirectMessageConfiguration;
(function (DirectMessageConfiguration) {
    /**
     * @internal
     */
    DirectMessageConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DirectMessageConfiguration = exports.DirectMessageConfiguration || (exports.DirectMessageConfiguration = {}));
var EmailChannelRequest;
(function (EmailChannelRequest) {
    /**
     * @internal
     */
    EmailChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmailChannelRequest = exports.EmailChannelRequest || (exports.EmailChannelRequest = {}));
var TemplateType;
(function (TemplateType) {
    TemplateType["EMAIL"] = "EMAIL";
    TemplateType["PUSH"] = "PUSH";
    TemplateType["SMS"] = "SMS";
    TemplateType["VOICE"] = "VOICE";
})(TemplateType = exports.TemplateType || (exports.TemplateType = {}));
var EmailTemplateResponse;
(function (EmailTemplateResponse) {
    /**
     * @internal
     */
    EmailTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmailTemplateResponse = exports.EmailTemplateResponse || (exports.EmailTemplateResponse = {}));
var EndpointBatchItem;
(function (EndpointBatchItem) {
    /**
     * @internal
     */
    EndpointBatchItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointBatchItem = exports.EndpointBatchItem || (exports.EndpointBatchItem = {}));
var EndpointBatchRequest;
(function (EndpointBatchRequest) {
    /**
     * @internal
     */
    EndpointBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointBatchRequest = exports.EndpointBatchRequest || (exports.EndpointBatchRequest = {}));
var EndpointItemResponse;
(function (EndpointItemResponse) {
    /**
     * @internal
     */
    EndpointItemResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointItemResponse = exports.EndpointItemResponse || (exports.EndpointItemResponse = {}));
var EndpointMessageResult;
(function (EndpointMessageResult) {
    /**
     * @internal
     */
    EndpointMessageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointMessageResult = exports.EndpointMessageResult || (exports.EndpointMessageResult = {}));
var EndpointRequest;
(function (EndpointRequest) {
    /**
     * @internal
     */
    EndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointRequest = exports.EndpointRequest || (exports.EndpointRequest = {}));
var EndpointSendConfiguration;
(function (EndpointSendConfiguration) {
    /**
     * @internal
     */
    EndpointSendConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointSendConfiguration = exports.EndpointSendConfiguration || (exports.EndpointSendConfiguration = {}));
var Session;
(function (Session) {
    /**
     * @internal
     */
    Session.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Session = exports.Session || (exports.Session = {}));
var Event;
(function (Event) {
    /**
     * @internal
     */
    Event.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Event = exports.Event || (exports.Event = {}));
var EventItemResponse;
(function (EventItemResponse) {
    /**
     * @internal
     */
    EventItemResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventItemResponse = exports.EventItemResponse || (exports.EventItemResponse = {}));
var PublicEndpoint;
(function (PublicEndpoint) {
    /**
     * @internal
     */
    PublicEndpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublicEndpoint = exports.PublicEndpoint || (exports.PublicEndpoint = {}));
var EventsBatch;
(function (EventsBatch) {
    /**
     * @internal
     */
    EventsBatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventsBatch = exports.EventsBatch || (exports.EventsBatch = {}));
var EventsRequest;
(function (EventsRequest) {
    /**
     * @internal
     */
    EventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventsRequest = exports.EventsRequest || (exports.EventsRequest = {}));
var ItemResponse;
(function (ItemResponse) {
    /**
     * @internal
     */
    ItemResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ItemResponse = exports.ItemResponse || (exports.ItemResponse = {}));
var EventsResponse;
(function (EventsResponse) {
    /**
     * @internal
     */
    EventsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventsResponse = exports.EventsResponse || (exports.EventsResponse = {}));
var ExportJobsResponse;
(function (ExportJobsResponse) {
    /**
     * @internal
     */
    ExportJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportJobsResponse = exports.ExportJobsResponse || (exports.ExportJobsResponse = {}));
var GCMChannelRequest;
(function (GCMChannelRequest) {
    /**
     * @internal
     */
    GCMChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GCMChannelRequest = exports.GCMChannelRequest || (exports.GCMChannelRequest = {}));
var GetAdmChannelRequest;
(function (GetAdmChannelRequest) {
    /**
     * @internal
     */
    GetAdmChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAdmChannelRequest = exports.GetAdmChannelRequest || (exports.GetAdmChannelRequest = {}));
var GetAdmChannelResponse;
(function (GetAdmChannelResponse) {
    /**
     * @internal
     */
    GetAdmChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAdmChannelResponse = exports.GetAdmChannelResponse || (exports.GetAdmChannelResponse = {}));
var GetApnsChannelRequest;
(function (GetApnsChannelRequest) {
    /**
     * @internal
     */
    GetApnsChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApnsChannelRequest = exports.GetApnsChannelRequest || (exports.GetApnsChannelRequest = {}));
var GetApnsChannelResponse;
(function (GetApnsChannelResponse) {
    /**
     * @internal
     */
    GetApnsChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApnsChannelResponse = exports.GetApnsChannelResponse || (exports.GetApnsChannelResponse = {}));
var GetApnsSandboxChannelRequest;
(function (GetApnsSandboxChannelRequest) {
    /**
     * @internal
     */
    GetApnsSandboxChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApnsSandboxChannelRequest = exports.GetApnsSandboxChannelRequest || (exports.GetApnsSandboxChannelRequest = {}));
var GetApnsSandboxChannelResponse;
(function (GetApnsSandboxChannelResponse) {
    /**
     * @internal
     */
    GetApnsSandboxChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApnsSandboxChannelResponse = exports.GetApnsSandboxChannelResponse || (exports.GetApnsSandboxChannelResponse = {}));
var GetApnsVoipChannelRequest;
(function (GetApnsVoipChannelRequest) {
    /**
     * @internal
     */
    GetApnsVoipChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApnsVoipChannelRequest = exports.GetApnsVoipChannelRequest || (exports.GetApnsVoipChannelRequest = {}));
var GetApnsVoipChannelResponse;
(function (GetApnsVoipChannelResponse) {
    /**
     * @internal
     */
    GetApnsVoipChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApnsVoipChannelResponse = exports.GetApnsVoipChannelResponse || (exports.GetApnsVoipChannelResponse = {}));
var GetApnsVoipSandboxChannelRequest;
(function (GetApnsVoipSandboxChannelRequest) {
    /**
     * @internal
     */
    GetApnsVoipSandboxChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApnsVoipSandboxChannelRequest = exports.GetApnsVoipSandboxChannelRequest || (exports.GetApnsVoipSandboxChannelRequest = {}));
var GetApnsVoipSandboxChannelResponse;
(function (GetApnsVoipSandboxChannelResponse) {
    /**
     * @internal
     */
    GetApnsVoipSandboxChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApnsVoipSandboxChannelResponse = exports.GetApnsVoipSandboxChannelResponse || (exports.GetApnsVoipSandboxChannelResponse = {}));
var GetAppRequest;
(function (GetAppRequest) {
    /**
     * @internal
     */
    GetAppRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppRequest = exports.GetAppRequest || (exports.GetAppRequest = {}));
var GetAppResponse;
(function (GetAppResponse) {
    /**
     * @internal
     */
    GetAppResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppResponse = exports.GetAppResponse || (exports.GetAppResponse = {}));
var GetApplicationDateRangeKpiRequest;
(function (GetApplicationDateRangeKpiRequest) {
    /**
     * @internal
     */
    GetApplicationDateRangeKpiRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApplicationDateRangeKpiRequest = exports.GetApplicationDateRangeKpiRequest || (exports.GetApplicationDateRangeKpiRequest = {}));
var GetApplicationDateRangeKpiResponse;
(function (GetApplicationDateRangeKpiResponse) {
    /**
     * @internal
     */
    GetApplicationDateRangeKpiResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApplicationDateRangeKpiResponse = exports.GetApplicationDateRangeKpiResponse || (exports.GetApplicationDateRangeKpiResponse = {}));
var GetApplicationSettingsRequest;
(function (GetApplicationSettingsRequest) {
    /**
     * @internal
     */
    GetApplicationSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApplicationSettingsRequest = exports.GetApplicationSettingsRequest || (exports.GetApplicationSettingsRequest = {}));
var GetApplicationSettingsResponse;
(function (GetApplicationSettingsResponse) {
    /**
     * @internal
     */
    GetApplicationSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApplicationSettingsResponse = exports.GetApplicationSettingsResponse || (exports.GetApplicationSettingsResponse = {}));
var GetAppsRequest;
(function (GetAppsRequest) {
    /**
     * @internal
     */
    GetAppsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppsRequest = exports.GetAppsRequest || (exports.GetAppsRequest = {}));
var GetAppsResponse;
(function (GetAppsResponse) {
    /**
     * @internal
     */
    GetAppsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAppsResponse = exports.GetAppsResponse || (exports.GetAppsResponse = {}));
var GetBaiduChannelRequest;
(function (GetBaiduChannelRequest) {
    /**
     * @internal
     */
    GetBaiduChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBaiduChannelRequest = exports.GetBaiduChannelRequest || (exports.GetBaiduChannelRequest = {}));
var GetBaiduChannelResponse;
(function (GetBaiduChannelResponse) {
    /**
     * @internal
     */
    GetBaiduChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBaiduChannelResponse = exports.GetBaiduChannelResponse || (exports.GetBaiduChannelResponse = {}));
var GetCampaignRequest;
(function (GetCampaignRequest) {
    /**
     * @internal
     */
    GetCampaignRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCampaignRequest = exports.GetCampaignRequest || (exports.GetCampaignRequest = {}));
var GetCampaignResponse;
(function (GetCampaignResponse) {
    /**
     * @internal
     */
    GetCampaignResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCampaignResponse = exports.GetCampaignResponse || (exports.GetCampaignResponse = {}));
var GetCampaignActivitiesRequest;
(function (GetCampaignActivitiesRequest) {
    /**
     * @internal
     */
    GetCampaignActivitiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCampaignActivitiesRequest = exports.GetCampaignActivitiesRequest || (exports.GetCampaignActivitiesRequest = {}));
var GetCampaignActivitiesResponse;
(function (GetCampaignActivitiesResponse) {
    /**
     * @internal
     */
    GetCampaignActivitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCampaignActivitiesResponse = exports.GetCampaignActivitiesResponse || (exports.GetCampaignActivitiesResponse = {}));
var GetCampaignDateRangeKpiRequest;
(function (GetCampaignDateRangeKpiRequest) {
    /**
     * @internal
     */
    GetCampaignDateRangeKpiRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCampaignDateRangeKpiRequest = exports.GetCampaignDateRangeKpiRequest || (exports.GetCampaignDateRangeKpiRequest = {}));
var GetCampaignDateRangeKpiResponse;
(function (GetCampaignDateRangeKpiResponse) {
    /**
     * @internal
     */
    GetCampaignDateRangeKpiResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCampaignDateRangeKpiResponse = exports.GetCampaignDateRangeKpiResponse || (exports.GetCampaignDateRangeKpiResponse = {}));
var GetCampaignsRequest;
(function (GetCampaignsRequest) {
    /**
     * @internal
     */
    GetCampaignsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCampaignsRequest = exports.GetCampaignsRequest || (exports.GetCampaignsRequest = {}));
var GetCampaignsResponse;
(function (GetCampaignsResponse) {
    /**
     * @internal
     */
    GetCampaignsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCampaignsResponse = exports.GetCampaignsResponse || (exports.GetCampaignsResponse = {}));
var GetCampaignVersionRequest;
(function (GetCampaignVersionRequest) {
    /**
     * @internal
     */
    GetCampaignVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCampaignVersionRequest = exports.GetCampaignVersionRequest || (exports.GetCampaignVersionRequest = {}));
var GetCampaignVersionResponse;
(function (GetCampaignVersionResponse) {
    /**
     * @internal
     */
    GetCampaignVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCampaignVersionResponse = exports.GetCampaignVersionResponse || (exports.GetCampaignVersionResponse = {}));
var GetCampaignVersionsRequest;
(function (GetCampaignVersionsRequest) {
    /**
     * @internal
     */
    GetCampaignVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCampaignVersionsRequest = exports.GetCampaignVersionsRequest || (exports.GetCampaignVersionsRequest = {}));
var GetCampaignVersionsResponse;
(function (GetCampaignVersionsResponse) {
    /**
     * @internal
     */
    GetCampaignVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCampaignVersionsResponse = exports.GetCampaignVersionsResponse || (exports.GetCampaignVersionsResponse = {}));
var GetChannelsRequest;
(function (GetChannelsRequest) {
    /**
     * @internal
     */
    GetChannelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetChannelsRequest = exports.GetChannelsRequest || (exports.GetChannelsRequest = {}));
var GetChannelsResponse;
(function (GetChannelsResponse) {
    /**
     * @internal
     */
    GetChannelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetChannelsResponse = exports.GetChannelsResponse || (exports.GetChannelsResponse = {}));
var GetEmailChannelRequest;
(function (GetEmailChannelRequest) {
    /**
     * @internal
     */
    GetEmailChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEmailChannelRequest = exports.GetEmailChannelRequest || (exports.GetEmailChannelRequest = {}));
var GetEmailChannelResponse;
(function (GetEmailChannelResponse) {
    /**
     * @internal
     */
    GetEmailChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEmailChannelResponse = exports.GetEmailChannelResponse || (exports.GetEmailChannelResponse = {}));
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
var GetEndpointRequest;
(function (GetEndpointRequest) {
    /**
     * @internal
     */
    GetEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEndpointRequest = exports.GetEndpointRequest || (exports.GetEndpointRequest = {}));
var GetEndpointResponse;
(function (GetEndpointResponse) {
    /**
     * @internal
     */
    GetEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEndpointResponse = exports.GetEndpointResponse || (exports.GetEndpointResponse = {}));
var GetEventStreamRequest;
(function (GetEventStreamRequest) {
    /**
     * @internal
     */
    GetEventStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEventStreamRequest = exports.GetEventStreamRequest || (exports.GetEventStreamRequest = {}));
var GetEventStreamResponse;
(function (GetEventStreamResponse) {
    /**
     * @internal
     */
    GetEventStreamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEventStreamResponse = exports.GetEventStreamResponse || (exports.GetEventStreamResponse = {}));
var GetExportJobRequest;
(function (GetExportJobRequest) {
    /**
     * @internal
     */
    GetExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExportJobRequest = exports.GetExportJobRequest || (exports.GetExportJobRequest = {}));
var GetExportJobResponse;
(function (GetExportJobResponse) {
    /**
     * @internal
     */
    GetExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExportJobResponse = exports.GetExportJobResponse || (exports.GetExportJobResponse = {}));
var GetExportJobsRequest;
(function (GetExportJobsRequest) {
    /**
     * @internal
     */
    GetExportJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExportJobsRequest = exports.GetExportJobsRequest || (exports.GetExportJobsRequest = {}));
var GetExportJobsResponse;
(function (GetExportJobsResponse) {
    /**
     * @internal
     */
    GetExportJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetExportJobsResponse = exports.GetExportJobsResponse || (exports.GetExportJobsResponse = {}));
var GetGcmChannelRequest;
(function (GetGcmChannelRequest) {
    /**
     * @internal
     */
    GetGcmChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGcmChannelRequest = exports.GetGcmChannelRequest || (exports.GetGcmChannelRequest = {}));
var GetGcmChannelResponse;
(function (GetGcmChannelResponse) {
    /**
     * @internal
     */
    GetGcmChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGcmChannelResponse = exports.GetGcmChannelResponse || (exports.GetGcmChannelResponse = {}));
var GetImportJobRequest;
(function (GetImportJobRequest) {
    /**
     * @internal
     */
    GetImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImportJobRequest = exports.GetImportJobRequest || (exports.GetImportJobRequest = {}));
var GetImportJobResponse;
(function (GetImportJobResponse) {
    /**
     * @internal
     */
    GetImportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImportJobResponse = exports.GetImportJobResponse || (exports.GetImportJobResponse = {}));
var GetImportJobsRequest;
(function (GetImportJobsRequest) {
    /**
     * @internal
     */
    GetImportJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImportJobsRequest = exports.GetImportJobsRequest || (exports.GetImportJobsRequest = {}));
var ImportJobsResponse;
(function (ImportJobsResponse) {
    /**
     * @internal
     */
    ImportJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportJobsResponse = exports.ImportJobsResponse || (exports.ImportJobsResponse = {}));
var GetImportJobsResponse;
(function (GetImportJobsResponse) {
    /**
     * @internal
     */
    GetImportJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetImportJobsResponse = exports.GetImportJobsResponse || (exports.GetImportJobsResponse = {}));
var GetJourneyRequest;
(function (GetJourneyRequest) {
    /**
     * @internal
     */
    GetJourneyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJourneyRequest = exports.GetJourneyRequest || (exports.GetJourneyRequest = {}));
var GetJourneyResponse;
(function (GetJourneyResponse) {
    /**
     * @internal
     */
    GetJourneyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJourneyResponse = exports.GetJourneyResponse || (exports.GetJourneyResponse = {}));
//# sourceMappingURL=models_0.js.map