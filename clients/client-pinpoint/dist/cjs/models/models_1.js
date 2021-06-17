"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsModel = exports.ListTagsForResourceRequest = exports.TemplateVersionResponse = exports.TemplateResponse = exports.ListJourneysResponse = exports.ListJourneysRequest = exports.JourneyStateRequest = exports.JourneysResponse = exports.GetVoiceTemplateResponse = exports.VoiceTemplateResponse = exports.GetVoiceTemplateRequest = exports.GetVoiceChannelResponse = exports.GetVoiceChannelRequest = exports.GetUserEndpointsResponse = exports.GetUserEndpointsRequest = exports.GetSmsTemplateResponse = exports.SMSTemplateResponse = exports.GetSmsTemplateRequest = exports.GetSmsChannelResponse = exports.GetSmsChannelRequest = exports.GetSegmentVersionsResponse = exports.GetSegmentVersionsRequest = exports.GetSegmentVersionResponse = exports.GetSegmentVersionRequest = exports.GetSegmentsResponse = exports.SegmentsResponse = exports.GetSegmentsRequest = exports.GetSegmentImportJobsResponse = exports.GetSegmentImportJobsRequest = exports.GetSegmentExportJobsResponse = exports.GetSegmentExportJobsRequest = exports.GetSegmentResponse = exports.GetSegmentRequest = exports.GetRecommenderConfigurationsResponse = exports.ListRecommenderConfigurationsResponse = exports.GetRecommenderConfigurationsRequest = exports.GetRecommenderConfigurationResponse = exports.GetRecommenderConfigurationRequest = exports.GetPushTemplateResponse = exports.PushNotificationTemplateResponse = exports.GetPushTemplateRequest = exports.GetJourneyExecutionMetricsResponse = exports.JourneyExecutionMetricsResponse = exports.GetJourneyExecutionMetricsRequest = exports.GetJourneyExecutionActivityMetricsResponse = exports.JourneyExecutionActivityMetricsResponse = exports.GetJourneyExecutionActivityMetricsRequest = exports.GetJourneyDateRangeKpiResponse = exports.JourneyDateRangeKpiResponse = exports.GetJourneyDateRangeKpiRequest = void 0;
exports.UpdateEmailTemplateRequest = exports.UpdateEmailChannelResponse = exports.UpdateEmailChannelRequest = exports.UpdateCampaignResponse = exports.UpdateCampaignRequest = exports.UpdateBaiduChannelResponse = exports.UpdateBaiduChannelRequest = exports.UpdateApplicationSettingsResponse = exports.UpdateApplicationSettingsRequest = exports.WriteApplicationSettingsRequest = exports.UpdateApnsVoipSandboxChannelResponse = exports.UpdateApnsVoipSandboxChannelRequest = exports.UpdateApnsVoipChannelResponse = exports.UpdateApnsVoipChannelRequest = exports.UpdateApnsSandboxChannelResponse = exports.UpdateApnsSandboxChannelRequest = exports.UpdateApnsChannelResponse = exports.UpdateApnsChannelRequest = exports.UpdateAdmChannelResponse = exports.UpdateAdmChannelRequest = exports.UntagResourceRequest = exports.TagResourceRequest = exports.SendUsersMessagesResponse = exports.SendUsersMessageResponse = exports.SendUsersMessagesRequest = exports.SendUsersMessageRequest = exports.SendMessagesResponse = exports.SendMessagesRequest = exports.RemoveAttributesResponse = exports.RemoveAttributesRequest = exports.UpdateAttributesRequest = exports.PutEventStreamResponse = exports.PutEventStreamRequest = exports.WriteEventStream = exports.PutEventsResponse = exports.PutEventsRequest = exports.PhoneNumberValidateResponse = exports.PhoneNumberValidateRequest = exports.NumberValidateResponse = exports.NumberValidateRequest = exports.MessageResponse = exports.MessageRequest = exports.MessageResult = exports.ListTemplateVersionsResponse = exports.TemplateVersionsResponse = exports.ListTemplateVersionsRequest = exports.ListTemplatesResponse = exports.TemplatesResponse = exports.ListTemplatesRequest = exports.ListTagsForResourceResponse = void 0;
exports.UpdateVoiceTemplateResponse = exports.UpdateVoiceTemplateRequest = exports.UpdateVoiceChannelResponse = exports.UpdateVoiceChannelRequest = exports.VoiceChannelRequest = exports.UpdateTemplateActiveVersionResponse = exports.UpdateTemplateActiveVersionRequest = exports.TemplateActiveVersionRequest = exports.UpdateSmsTemplateResponse = exports.UpdateSmsTemplateRequest = exports.UpdateSmsChannelResponse = exports.UpdateSmsChannelRequest = exports.SMSChannelRequest = exports.UpdateSegmentResponse = exports.UpdateSegmentRequest = exports.UpdateRecommenderConfigurationResponse = exports.UpdateRecommenderConfigurationRequest = exports.UpdateRecommenderConfigurationShape = exports.UpdatePushTemplateResponse = exports.UpdatePushTemplateRequest = exports.UpdateJourneyStateResponse = exports.UpdateJourneyStateRequest = exports.UpdateJourneyResponse = exports.UpdateJourneyRequest = exports.UpdateGcmChannelResponse = exports.UpdateGcmChannelRequest = exports.UpdateEndpointsBatchResponse = exports.UpdateEndpointsBatchRequest = exports.UpdateEndpointResponse = exports.UpdateEndpointRequest = exports.UpdateEmailTemplateResponse = void 0;
var GetJourneyDateRangeKpiRequest;
(function (GetJourneyDateRangeKpiRequest) {
    /**
     * @internal
     */
    GetJourneyDateRangeKpiRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJourneyDateRangeKpiRequest = exports.GetJourneyDateRangeKpiRequest || (exports.GetJourneyDateRangeKpiRequest = {}));
var JourneyDateRangeKpiResponse;
(function (JourneyDateRangeKpiResponse) {
    /**
     * @internal
     */
    JourneyDateRangeKpiResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JourneyDateRangeKpiResponse = exports.JourneyDateRangeKpiResponse || (exports.JourneyDateRangeKpiResponse = {}));
var GetJourneyDateRangeKpiResponse;
(function (GetJourneyDateRangeKpiResponse) {
    /**
     * @internal
     */
    GetJourneyDateRangeKpiResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJourneyDateRangeKpiResponse = exports.GetJourneyDateRangeKpiResponse || (exports.GetJourneyDateRangeKpiResponse = {}));
var GetJourneyExecutionActivityMetricsRequest;
(function (GetJourneyExecutionActivityMetricsRequest) {
    /**
     * @internal
     */
    GetJourneyExecutionActivityMetricsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJourneyExecutionActivityMetricsRequest = exports.GetJourneyExecutionActivityMetricsRequest || (exports.GetJourneyExecutionActivityMetricsRequest = {}));
var JourneyExecutionActivityMetricsResponse;
(function (JourneyExecutionActivityMetricsResponse) {
    /**
     * @internal
     */
    JourneyExecutionActivityMetricsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JourneyExecutionActivityMetricsResponse = exports.JourneyExecutionActivityMetricsResponse || (exports.JourneyExecutionActivityMetricsResponse = {}));
var GetJourneyExecutionActivityMetricsResponse;
(function (GetJourneyExecutionActivityMetricsResponse) {
    /**
     * @internal
     */
    GetJourneyExecutionActivityMetricsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJourneyExecutionActivityMetricsResponse = exports.GetJourneyExecutionActivityMetricsResponse || (exports.GetJourneyExecutionActivityMetricsResponse = {}));
var GetJourneyExecutionMetricsRequest;
(function (GetJourneyExecutionMetricsRequest) {
    /**
     * @internal
     */
    GetJourneyExecutionMetricsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJourneyExecutionMetricsRequest = exports.GetJourneyExecutionMetricsRequest || (exports.GetJourneyExecutionMetricsRequest = {}));
var JourneyExecutionMetricsResponse;
(function (JourneyExecutionMetricsResponse) {
    /**
     * @internal
     */
    JourneyExecutionMetricsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JourneyExecutionMetricsResponse = exports.JourneyExecutionMetricsResponse || (exports.JourneyExecutionMetricsResponse = {}));
var GetJourneyExecutionMetricsResponse;
(function (GetJourneyExecutionMetricsResponse) {
    /**
     * @internal
     */
    GetJourneyExecutionMetricsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJourneyExecutionMetricsResponse = exports.GetJourneyExecutionMetricsResponse || (exports.GetJourneyExecutionMetricsResponse = {}));
var GetPushTemplateRequest;
(function (GetPushTemplateRequest) {
    /**
     * @internal
     */
    GetPushTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPushTemplateRequest = exports.GetPushTemplateRequest || (exports.GetPushTemplateRequest = {}));
var PushNotificationTemplateResponse;
(function (PushNotificationTemplateResponse) {
    /**
     * @internal
     */
    PushNotificationTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PushNotificationTemplateResponse = exports.PushNotificationTemplateResponse || (exports.PushNotificationTemplateResponse = {}));
var GetPushTemplateResponse;
(function (GetPushTemplateResponse) {
    /**
     * @internal
     */
    GetPushTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPushTemplateResponse = exports.GetPushTemplateResponse || (exports.GetPushTemplateResponse = {}));
var GetRecommenderConfigurationRequest;
(function (GetRecommenderConfigurationRequest) {
    /**
     * @internal
     */
    GetRecommenderConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRecommenderConfigurationRequest = exports.GetRecommenderConfigurationRequest || (exports.GetRecommenderConfigurationRequest = {}));
var GetRecommenderConfigurationResponse;
(function (GetRecommenderConfigurationResponse) {
    /**
     * @internal
     */
    GetRecommenderConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRecommenderConfigurationResponse = exports.GetRecommenderConfigurationResponse || (exports.GetRecommenderConfigurationResponse = {}));
var GetRecommenderConfigurationsRequest;
(function (GetRecommenderConfigurationsRequest) {
    /**
     * @internal
     */
    GetRecommenderConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRecommenderConfigurationsRequest = exports.GetRecommenderConfigurationsRequest || (exports.GetRecommenderConfigurationsRequest = {}));
var ListRecommenderConfigurationsResponse;
(function (ListRecommenderConfigurationsResponse) {
    /**
     * @internal
     */
    ListRecommenderConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecommenderConfigurationsResponse = exports.ListRecommenderConfigurationsResponse || (exports.ListRecommenderConfigurationsResponse = {}));
var GetRecommenderConfigurationsResponse;
(function (GetRecommenderConfigurationsResponse) {
    /**
     * @internal
     */
    GetRecommenderConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRecommenderConfigurationsResponse = exports.GetRecommenderConfigurationsResponse || (exports.GetRecommenderConfigurationsResponse = {}));
var GetSegmentRequest;
(function (GetSegmentRequest) {
    /**
     * @internal
     */
    GetSegmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSegmentRequest = exports.GetSegmentRequest || (exports.GetSegmentRequest = {}));
var GetSegmentResponse;
(function (GetSegmentResponse) {
    /**
     * @internal
     */
    GetSegmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSegmentResponse = exports.GetSegmentResponse || (exports.GetSegmentResponse = {}));
var GetSegmentExportJobsRequest;
(function (GetSegmentExportJobsRequest) {
    /**
     * @internal
     */
    GetSegmentExportJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSegmentExportJobsRequest = exports.GetSegmentExportJobsRequest || (exports.GetSegmentExportJobsRequest = {}));
var GetSegmentExportJobsResponse;
(function (GetSegmentExportJobsResponse) {
    /**
     * @internal
     */
    GetSegmentExportJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSegmentExportJobsResponse = exports.GetSegmentExportJobsResponse || (exports.GetSegmentExportJobsResponse = {}));
var GetSegmentImportJobsRequest;
(function (GetSegmentImportJobsRequest) {
    /**
     * @internal
     */
    GetSegmentImportJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSegmentImportJobsRequest = exports.GetSegmentImportJobsRequest || (exports.GetSegmentImportJobsRequest = {}));
var GetSegmentImportJobsResponse;
(function (GetSegmentImportJobsResponse) {
    /**
     * @internal
     */
    GetSegmentImportJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSegmentImportJobsResponse = exports.GetSegmentImportJobsResponse || (exports.GetSegmentImportJobsResponse = {}));
var GetSegmentsRequest;
(function (GetSegmentsRequest) {
    /**
     * @internal
     */
    GetSegmentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSegmentsRequest = exports.GetSegmentsRequest || (exports.GetSegmentsRequest = {}));
var SegmentsResponse;
(function (SegmentsResponse) {
    /**
     * @internal
     */
    SegmentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SegmentsResponse = exports.SegmentsResponse || (exports.SegmentsResponse = {}));
var GetSegmentsResponse;
(function (GetSegmentsResponse) {
    /**
     * @internal
     */
    GetSegmentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSegmentsResponse = exports.GetSegmentsResponse || (exports.GetSegmentsResponse = {}));
var GetSegmentVersionRequest;
(function (GetSegmentVersionRequest) {
    /**
     * @internal
     */
    GetSegmentVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSegmentVersionRequest = exports.GetSegmentVersionRequest || (exports.GetSegmentVersionRequest = {}));
var GetSegmentVersionResponse;
(function (GetSegmentVersionResponse) {
    /**
     * @internal
     */
    GetSegmentVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSegmentVersionResponse = exports.GetSegmentVersionResponse || (exports.GetSegmentVersionResponse = {}));
var GetSegmentVersionsRequest;
(function (GetSegmentVersionsRequest) {
    /**
     * @internal
     */
    GetSegmentVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSegmentVersionsRequest = exports.GetSegmentVersionsRequest || (exports.GetSegmentVersionsRequest = {}));
var GetSegmentVersionsResponse;
(function (GetSegmentVersionsResponse) {
    /**
     * @internal
     */
    GetSegmentVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSegmentVersionsResponse = exports.GetSegmentVersionsResponse || (exports.GetSegmentVersionsResponse = {}));
var GetSmsChannelRequest;
(function (GetSmsChannelRequest) {
    /**
     * @internal
     */
    GetSmsChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSmsChannelRequest = exports.GetSmsChannelRequest || (exports.GetSmsChannelRequest = {}));
var GetSmsChannelResponse;
(function (GetSmsChannelResponse) {
    /**
     * @internal
     */
    GetSmsChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSmsChannelResponse = exports.GetSmsChannelResponse || (exports.GetSmsChannelResponse = {}));
var GetSmsTemplateRequest;
(function (GetSmsTemplateRequest) {
    /**
     * @internal
     */
    GetSmsTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSmsTemplateRequest = exports.GetSmsTemplateRequest || (exports.GetSmsTemplateRequest = {}));
var SMSTemplateResponse;
(function (SMSTemplateResponse) {
    /**
     * @internal
     */
    SMSTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SMSTemplateResponse = exports.SMSTemplateResponse || (exports.SMSTemplateResponse = {}));
var GetSmsTemplateResponse;
(function (GetSmsTemplateResponse) {
    /**
     * @internal
     */
    GetSmsTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSmsTemplateResponse = exports.GetSmsTemplateResponse || (exports.GetSmsTemplateResponse = {}));
var GetUserEndpointsRequest;
(function (GetUserEndpointsRequest) {
    /**
     * @internal
     */
    GetUserEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUserEndpointsRequest = exports.GetUserEndpointsRequest || (exports.GetUserEndpointsRequest = {}));
var GetUserEndpointsResponse;
(function (GetUserEndpointsResponse) {
    /**
     * @internal
     */
    GetUserEndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUserEndpointsResponse = exports.GetUserEndpointsResponse || (exports.GetUserEndpointsResponse = {}));
var GetVoiceChannelRequest;
(function (GetVoiceChannelRequest) {
    /**
     * @internal
     */
    GetVoiceChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVoiceChannelRequest = exports.GetVoiceChannelRequest || (exports.GetVoiceChannelRequest = {}));
var GetVoiceChannelResponse;
(function (GetVoiceChannelResponse) {
    /**
     * @internal
     */
    GetVoiceChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVoiceChannelResponse = exports.GetVoiceChannelResponse || (exports.GetVoiceChannelResponse = {}));
var GetVoiceTemplateRequest;
(function (GetVoiceTemplateRequest) {
    /**
     * @internal
     */
    GetVoiceTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVoiceTemplateRequest = exports.GetVoiceTemplateRequest || (exports.GetVoiceTemplateRequest = {}));
var VoiceTemplateResponse;
(function (VoiceTemplateResponse) {
    /**
     * @internal
     */
    VoiceTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VoiceTemplateResponse = exports.VoiceTemplateResponse || (exports.VoiceTemplateResponse = {}));
var GetVoiceTemplateResponse;
(function (GetVoiceTemplateResponse) {
    /**
     * @internal
     */
    GetVoiceTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVoiceTemplateResponse = exports.GetVoiceTemplateResponse || (exports.GetVoiceTemplateResponse = {}));
var JourneysResponse;
(function (JourneysResponse) {
    /**
     * @internal
     */
    JourneysResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JourneysResponse = exports.JourneysResponse || (exports.JourneysResponse = {}));
var JourneyStateRequest;
(function (JourneyStateRequest) {
    /**
     * @internal
     */
    JourneyStateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JourneyStateRequest = exports.JourneyStateRequest || (exports.JourneyStateRequest = {}));
var ListJourneysRequest;
(function (ListJourneysRequest) {
    /**
     * @internal
     */
    ListJourneysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJourneysRequest = exports.ListJourneysRequest || (exports.ListJourneysRequest = {}));
var ListJourneysResponse;
(function (ListJourneysResponse) {
    /**
     * @internal
     */
    ListJourneysResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJourneysResponse = exports.ListJourneysResponse || (exports.ListJourneysResponse = {}));
var TemplateResponse;
(function (TemplateResponse) {
    /**
     * @internal
     */
    TemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplateResponse = exports.TemplateResponse || (exports.TemplateResponse = {}));
var TemplateVersionResponse;
(function (TemplateVersionResponse) {
    /**
     * @internal
     */
    TemplateVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplateVersionResponse = exports.TemplateVersionResponse || (exports.TemplateVersionResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var TagsModel;
(function (TagsModel) {
    /**
     * @internal
     */
    TagsModel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagsModel = exports.TagsModel || (exports.TagsModel = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ListTemplatesRequest;
(function (ListTemplatesRequest) {
    /**
     * @internal
     */
    ListTemplatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTemplatesRequest = exports.ListTemplatesRequest || (exports.ListTemplatesRequest = {}));
var TemplatesResponse;
(function (TemplatesResponse) {
    /**
     * @internal
     */
    TemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplatesResponse = exports.TemplatesResponse || (exports.TemplatesResponse = {}));
var ListTemplatesResponse;
(function (ListTemplatesResponse) {
    /**
     * @internal
     */
    ListTemplatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTemplatesResponse = exports.ListTemplatesResponse || (exports.ListTemplatesResponse = {}));
var ListTemplateVersionsRequest;
(function (ListTemplateVersionsRequest) {
    /**
     * @internal
     */
    ListTemplateVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTemplateVersionsRequest = exports.ListTemplateVersionsRequest || (exports.ListTemplateVersionsRequest = {}));
var TemplateVersionsResponse;
(function (TemplateVersionsResponse) {
    /**
     * @internal
     */
    TemplateVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplateVersionsResponse = exports.TemplateVersionsResponse || (exports.TemplateVersionsResponse = {}));
var ListTemplateVersionsResponse;
(function (ListTemplateVersionsResponse) {
    /**
     * @internal
     */
    ListTemplateVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTemplateVersionsResponse = exports.ListTemplateVersionsResponse || (exports.ListTemplateVersionsResponse = {}));
var MessageResult;
(function (MessageResult) {
    /**
     * @internal
     */
    MessageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageResult = exports.MessageResult || (exports.MessageResult = {}));
var MessageRequest;
(function (MessageRequest) {
    /**
     * @internal
     */
    MessageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageRequest = exports.MessageRequest || (exports.MessageRequest = {}));
var MessageResponse;
(function (MessageResponse) {
    /**
     * @internal
     */
    MessageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageResponse = exports.MessageResponse || (exports.MessageResponse = {}));
var NumberValidateRequest;
(function (NumberValidateRequest) {
    /**
     * @internal
     */
    NumberValidateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NumberValidateRequest = exports.NumberValidateRequest || (exports.NumberValidateRequest = {}));
var NumberValidateResponse;
(function (NumberValidateResponse) {
    /**
     * @internal
     */
    NumberValidateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NumberValidateResponse = exports.NumberValidateResponse || (exports.NumberValidateResponse = {}));
var PhoneNumberValidateRequest;
(function (PhoneNumberValidateRequest) {
    /**
     * @internal
     */
    PhoneNumberValidateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PhoneNumberValidateRequest = exports.PhoneNumberValidateRequest || (exports.PhoneNumberValidateRequest = {}));
var PhoneNumberValidateResponse;
(function (PhoneNumberValidateResponse) {
    /**
     * @internal
     */
    PhoneNumberValidateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PhoneNumberValidateResponse = exports.PhoneNumberValidateResponse || (exports.PhoneNumberValidateResponse = {}));
var PutEventsRequest;
(function (PutEventsRequest) {
    /**
     * @internal
     */
    PutEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEventsRequest = exports.PutEventsRequest || (exports.PutEventsRequest = {}));
var PutEventsResponse;
(function (PutEventsResponse) {
    /**
     * @internal
     */
    PutEventsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEventsResponse = exports.PutEventsResponse || (exports.PutEventsResponse = {}));
var WriteEventStream;
(function (WriteEventStream) {
    /**
     * @internal
     */
    WriteEventStream.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WriteEventStream = exports.WriteEventStream || (exports.WriteEventStream = {}));
var PutEventStreamRequest;
(function (PutEventStreamRequest) {
    /**
     * @internal
     */
    PutEventStreamRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEventStreamRequest = exports.PutEventStreamRequest || (exports.PutEventStreamRequest = {}));
var PutEventStreamResponse;
(function (PutEventStreamResponse) {
    /**
     * @internal
     */
    PutEventStreamResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEventStreamResponse = exports.PutEventStreamResponse || (exports.PutEventStreamResponse = {}));
var UpdateAttributesRequest;
(function (UpdateAttributesRequest) {
    /**
     * @internal
     */
    UpdateAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAttributesRequest = exports.UpdateAttributesRequest || (exports.UpdateAttributesRequest = {}));
var RemoveAttributesRequest;
(function (RemoveAttributesRequest) {
    /**
     * @internal
     */
    RemoveAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveAttributesRequest = exports.RemoveAttributesRequest || (exports.RemoveAttributesRequest = {}));
var RemoveAttributesResponse;
(function (RemoveAttributesResponse) {
    /**
     * @internal
     */
    RemoveAttributesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveAttributesResponse = exports.RemoveAttributesResponse || (exports.RemoveAttributesResponse = {}));
var SendMessagesRequest;
(function (SendMessagesRequest) {
    /**
     * @internal
     */
    SendMessagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessagesRequest = exports.SendMessagesRequest || (exports.SendMessagesRequest = {}));
var SendMessagesResponse;
(function (SendMessagesResponse) {
    /**
     * @internal
     */
    SendMessagesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessagesResponse = exports.SendMessagesResponse || (exports.SendMessagesResponse = {}));
var SendUsersMessageRequest;
(function (SendUsersMessageRequest) {
    /**
     * @internal
     */
    SendUsersMessageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendUsersMessageRequest = exports.SendUsersMessageRequest || (exports.SendUsersMessageRequest = {}));
var SendUsersMessagesRequest;
(function (SendUsersMessagesRequest) {
    /**
     * @internal
     */
    SendUsersMessagesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendUsersMessagesRequest = exports.SendUsersMessagesRequest || (exports.SendUsersMessagesRequest = {}));
var SendUsersMessageResponse;
(function (SendUsersMessageResponse) {
    /**
     * @internal
     */
    SendUsersMessageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendUsersMessageResponse = exports.SendUsersMessageResponse || (exports.SendUsersMessageResponse = {}));
var SendUsersMessagesResponse;
(function (SendUsersMessagesResponse) {
    /**
     * @internal
     */
    SendUsersMessagesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendUsersMessagesResponse = exports.SendUsersMessagesResponse || (exports.SendUsersMessagesResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateAdmChannelRequest;
(function (UpdateAdmChannelRequest) {
    /**
     * @internal
     */
    UpdateAdmChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAdmChannelRequest = exports.UpdateAdmChannelRequest || (exports.UpdateAdmChannelRequest = {}));
var UpdateAdmChannelResponse;
(function (UpdateAdmChannelResponse) {
    /**
     * @internal
     */
    UpdateAdmChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAdmChannelResponse = exports.UpdateAdmChannelResponse || (exports.UpdateAdmChannelResponse = {}));
var UpdateApnsChannelRequest;
(function (UpdateApnsChannelRequest) {
    /**
     * @internal
     */
    UpdateApnsChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApnsChannelRequest = exports.UpdateApnsChannelRequest || (exports.UpdateApnsChannelRequest = {}));
var UpdateApnsChannelResponse;
(function (UpdateApnsChannelResponse) {
    /**
     * @internal
     */
    UpdateApnsChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApnsChannelResponse = exports.UpdateApnsChannelResponse || (exports.UpdateApnsChannelResponse = {}));
var UpdateApnsSandboxChannelRequest;
(function (UpdateApnsSandboxChannelRequest) {
    /**
     * @internal
     */
    UpdateApnsSandboxChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApnsSandboxChannelRequest = exports.UpdateApnsSandboxChannelRequest || (exports.UpdateApnsSandboxChannelRequest = {}));
var UpdateApnsSandboxChannelResponse;
(function (UpdateApnsSandboxChannelResponse) {
    /**
     * @internal
     */
    UpdateApnsSandboxChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApnsSandboxChannelResponse = exports.UpdateApnsSandboxChannelResponse || (exports.UpdateApnsSandboxChannelResponse = {}));
var UpdateApnsVoipChannelRequest;
(function (UpdateApnsVoipChannelRequest) {
    /**
     * @internal
     */
    UpdateApnsVoipChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApnsVoipChannelRequest = exports.UpdateApnsVoipChannelRequest || (exports.UpdateApnsVoipChannelRequest = {}));
var UpdateApnsVoipChannelResponse;
(function (UpdateApnsVoipChannelResponse) {
    /**
     * @internal
     */
    UpdateApnsVoipChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApnsVoipChannelResponse = exports.UpdateApnsVoipChannelResponse || (exports.UpdateApnsVoipChannelResponse = {}));
var UpdateApnsVoipSandboxChannelRequest;
(function (UpdateApnsVoipSandboxChannelRequest) {
    /**
     * @internal
     */
    UpdateApnsVoipSandboxChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApnsVoipSandboxChannelRequest = exports.UpdateApnsVoipSandboxChannelRequest || (exports.UpdateApnsVoipSandboxChannelRequest = {}));
var UpdateApnsVoipSandboxChannelResponse;
(function (UpdateApnsVoipSandboxChannelResponse) {
    /**
     * @internal
     */
    UpdateApnsVoipSandboxChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApnsVoipSandboxChannelResponse = exports.UpdateApnsVoipSandboxChannelResponse || (exports.UpdateApnsVoipSandboxChannelResponse = {}));
var WriteApplicationSettingsRequest;
(function (WriteApplicationSettingsRequest) {
    /**
     * @internal
     */
    WriteApplicationSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WriteApplicationSettingsRequest = exports.WriteApplicationSettingsRequest || (exports.WriteApplicationSettingsRequest = {}));
var UpdateApplicationSettingsRequest;
(function (UpdateApplicationSettingsRequest) {
    /**
     * @internal
     */
    UpdateApplicationSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApplicationSettingsRequest = exports.UpdateApplicationSettingsRequest || (exports.UpdateApplicationSettingsRequest = {}));
var UpdateApplicationSettingsResponse;
(function (UpdateApplicationSettingsResponse) {
    /**
     * @internal
     */
    UpdateApplicationSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApplicationSettingsResponse = exports.UpdateApplicationSettingsResponse || (exports.UpdateApplicationSettingsResponse = {}));
var UpdateBaiduChannelRequest;
(function (UpdateBaiduChannelRequest) {
    /**
     * @internal
     */
    UpdateBaiduChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBaiduChannelRequest = exports.UpdateBaiduChannelRequest || (exports.UpdateBaiduChannelRequest = {}));
var UpdateBaiduChannelResponse;
(function (UpdateBaiduChannelResponse) {
    /**
     * @internal
     */
    UpdateBaiduChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateBaiduChannelResponse = exports.UpdateBaiduChannelResponse || (exports.UpdateBaiduChannelResponse = {}));
var UpdateCampaignRequest;
(function (UpdateCampaignRequest) {
    /**
     * @internal
     */
    UpdateCampaignRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCampaignRequest = exports.UpdateCampaignRequest || (exports.UpdateCampaignRequest = {}));
var UpdateCampaignResponse;
(function (UpdateCampaignResponse) {
    /**
     * @internal
     */
    UpdateCampaignResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCampaignResponse = exports.UpdateCampaignResponse || (exports.UpdateCampaignResponse = {}));
var UpdateEmailChannelRequest;
(function (UpdateEmailChannelRequest) {
    /**
     * @internal
     */
    UpdateEmailChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEmailChannelRequest = exports.UpdateEmailChannelRequest || (exports.UpdateEmailChannelRequest = {}));
var UpdateEmailChannelResponse;
(function (UpdateEmailChannelResponse) {
    /**
     * @internal
     */
    UpdateEmailChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEmailChannelResponse = exports.UpdateEmailChannelResponse || (exports.UpdateEmailChannelResponse = {}));
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
var UpdateEndpointRequest;
(function (UpdateEndpointRequest) {
    /**
     * @internal
     */
    UpdateEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEndpointRequest = exports.UpdateEndpointRequest || (exports.UpdateEndpointRequest = {}));
var UpdateEndpointResponse;
(function (UpdateEndpointResponse) {
    /**
     * @internal
     */
    UpdateEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEndpointResponse = exports.UpdateEndpointResponse || (exports.UpdateEndpointResponse = {}));
var UpdateEndpointsBatchRequest;
(function (UpdateEndpointsBatchRequest) {
    /**
     * @internal
     */
    UpdateEndpointsBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEndpointsBatchRequest = exports.UpdateEndpointsBatchRequest || (exports.UpdateEndpointsBatchRequest = {}));
var UpdateEndpointsBatchResponse;
(function (UpdateEndpointsBatchResponse) {
    /**
     * @internal
     */
    UpdateEndpointsBatchResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEndpointsBatchResponse = exports.UpdateEndpointsBatchResponse || (exports.UpdateEndpointsBatchResponse = {}));
var UpdateGcmChannelRequest;
(function (UpdateGcmChannelRequest) {
    /**
     * @internal
     */
    UpdateGcmChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGcmChannelRequest = exports.UpdateGcmChannelRequest || (exports.UpdateGcmChannelRequest = {}));
var UpdateGcmChannelResponse;
(function (UpdateGcmChannelResponse) {
    /**
     * @internal
     */
    UpdateGcmChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGcmChannelResponse = exports.UpdateGcmChannelResponse || (exports.UpdateGcmChannelResponse = {}));
var UpdateJourneyRequest;
(function (UpdateJourneyRequest) {
    /**
     * @internal
     */
    UpdateJourneyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJourneyRequest = exports.UpdateJourneyRequest || (exports.UpdateJourneyRequest = {}));
var UpdateJourneyResponse;
(function (UpdateJourneyResponse) {
    /**
     * @internal
     */
    UpdateJourneyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJourneyResponse = exports.UpdateJourneyResponse || (exports.UpdateJourneyResponse = {}));
var UpdateJourneyStateRequest;
(function (UpdateJourneyStateRequest) {
    /**
     * @internal
     */
    UpdateJourneyStateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJourneyStateRequest = exports.UpdateJourneyStateRequest || (exports.UpdateJourneyStateRequest = {}));
var UpdateJourneyStateResponse;
(function (UpdateJourneyStateResponse) {
    /**
     * @internal
     */
    UpdateJourneyStateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJourneyStateResponse = exports.UpdateJourneyStateResponse || (exports.UpdateJourneyStateResponse = {}));
var UpdatePushTemplateRequest;
(function (UpdatePushTemplateRequest) {
    /**
     * @internal
     */
    UpdatePushTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePushTemplateRequest = exports.UpdatePushTemplateRequest || (exports.UpdatePushTemplateRequest = {}));
var UpdatePushTemplateResponse;
(function (UpdatePushTemplateResponse) {
    /**
     * @internal
     */
    UpdatePushTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePushTemplateResponse = exports.UpdatePushTemplateResponse || (exports.UpdatePushTemplateResponse = {}));
var UpdateRecommenderConfigurationShape;
(function (UpdateRecommenderConfigurationShape) {
    /**
     * @internal
     */
    UpdateRecommenderConfigurationShape.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRecommenderConfigurationShape = exports.UpdateRecommenderConfigurationShape || (exports.UpdateRecommenderConfigurationShape = {}));
var UpdateRecommenderConfigurationRequest;
(function (UpdateRecommenderConfigurationRequest) {
    /**
     * @internal
     */
    UpdateRecommenderConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRecommenderConfigurationRequest = exports.UpdateRecommenderConfigurationRequest || (exports.UpdateRecommenderConfigurationRequest = {}));
var UpdateRecommenderConfigurationResponse;
(function (UpdateRecommenderConfigurationResponse) {
    /**
     * @internal
     */
    UpdateRecommenderConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRecommenderConfigurationResponse = exports.UpdateRecommenderConfigurationResponse || (exports.UpdateRecommenderConfigurationResponse = {}));
var UpdateSegmentRequest;
(function (UpdateSegmentRequest) {
    /**
     * @internal
     */
    UpdateSegmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSegmentRequest = exports.UpdateSegmentRequest || (exports.UpdateSegmentRequest = {}));
var UpdateSegmentResponse;
(function (UpdateSegmentResponse) {
    /**
     * @internal
     */
    UpdateSegmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSegmentResponse = exports.UpdateSegmentResponse || (exports.UpdateSegmentResponse = {}));
var SMSChannelRequest;
(function (SMSChannelRequest) {
    /**
     * @internal
     */
    SMSChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SMSChannelRequest = exports.SMSChannelRequest || (exports.SMSChannelRequest = {}));
var UpdateSmsChannelRequest;
(function (UpdateSmsChannelRequest) {
    /**
     * @internal
     */
    UpdateSmsChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSmsChannelRequest = exports.UpdateSmsChannelRequest || (exports.UpdateSmsChannelRequest = {}));
var UpdateSmsChannelResponse;
(function (UpdateSmsChannelResponse) {
    /**
     * @internal
     */
    UpdateSmsChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSmsChannelResponse = exports.UpdateSmsChannelResponse || (exports.UpdateSmsChannelResponse = {}));
var UpdateSmsTemplateRequest;
(function (UpdateSmsTemplateRequest) {
    /**
     * @internal
     */
    UpdateSmsTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSmsTemplateRequest = exports.UpdateSmsTemplateRequest || (exports.UpdateSmsTemplateRequest = {}));
var UpdateSmsTemplateResponse;
(function (UpdateSmsTemplateResponse) {
    /**
     * @internal
     */
    UpdateSmsTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSmsTemplateResponse = exports.UpdateSmsTemplateResponse || (exports.UpdateSmsTemplateResponse = {}));
var TemplateActiveVersionRequest;
(function (TemplateActiveVersionRequest) {
    /**
     * @internal
     */
    TemplateActiveVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplateActiveVersionRequest = exports.TemplateActiveVersionRequest || (exports.TemplateActiveVersionRequest = {}));
var UpdateTemplateActiveVersionRequest;
(function (UpdateTemplateActiveVersionRequest) {
    /**
     * @internal
     */
    UpdateTemplateActiveVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTemplateActiveVersionRequest = exports.UpdateTemplateActiveVersionRequest || (exports.UpdateTemplateActiveVersionRequest = {}));
var UpdateTemplateActiveVersionResponse;
(function (UpdateTemplateActiveVersionResponse) {
    /**
     * @internal
     */
    UpdateTemplateActiveVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTemplateActiveVersionResponse = exports.UpdateTemplateActiveVersionResponse || (exports.UpdateTemplateActiveVersionResponse = {}));
var VoiceChannelRequest;
(function (VoiceChannelRequest) {
    /**
     * @internal
     */
    VoiceChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VoiceChannelRequest = exports.VoiceChannelRequest || (exports.VoiceChannelRequest = {}));
var UpdateVoiceChannelRequest;
(function (UpdateVoiceChannelRequest) {
    /**
     * @internal
     */
    UpdateVoiceChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVoiceChannelRequest = exports.UpdateVoiceChannelRequest || (exports.UpdateVoiceChannelRequest = {}));
var UpdateVoiceChannelResponse;
(function (UpdateVoiceChannelResponse) {
    /**
     * @internal
     */
    UpdateVoiceChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVoiceChannelResponse = exports.UpdateVoiceChannelResponse || (exports.UpdateVoiceChannelResponse = {}));
var UpdateVoiceTemplateRequest;
(function (UpdateVoiceTemplateRequest) {
    /**
     * @internal
     */
    UpdateVoiceTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVoiceTemplateRequest = exports.UpdateVoiceTemplateRequest || (exports.UpdateVoiceTemplateRequest = {}));
var UpdateVoiceTemplateResponse;
(function (UpdateVoiceTemplateResponse) {
    /**
     * @internal
     */
    UpdateVoiceTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVoiceTemplateResponse = exports.UpdateVoiceTemplateResponse || (exports.UpdateVoiceTemplateResponse = {}));
//# sourceMappingURL=models_1.js.map