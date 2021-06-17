"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1GetChannelsCommand = exports.serializeAws_restJson1GetCampaignVersionsCommand = exports.serializeAws_restJson1GetCampaignVersionCommand = exports.serializeAws_restJson1GetCampaignsCommand = exports.serializeAws_restJson1GetCampaignDateRangeKpiCommand = exports.serializeAws_restJson1GetCampaignActivitiesCommand = exports.serializeAws_restJson1GetCampaignCommand = exports.serializeAws_restJson1GetBaiduChannelCommand = exports.serializeAws_restJson1GetAppsCommand = exports.serializeAws_restJson1GetApplicationSettingsCommand = exports.serializeAws_restJson1GetApplicationDateRangeKpiCommand = exports.serializeAws_restJson1GetAppCommand = exports.serializeAws_restJson1GetApnsVoipSandboxChannelCommand = exports.serializeAws_restJson1GetApnsVoipChannelCommand = exports.serializeAws_restJson1GetApnsSandboxChannelCommand = exports.serializeAws_restJson1GetApnsChannelCommand = exports.serializeAws_restJson1GetAdmChannelCommand = exports.serializeAws_restJson1DeleteVoiceTemplateCommand = exports.serializeAws_restJson1DeleteVoiceChannelCommand = exports.serializeAws_restJson1DeleteUserEndpointsCommand = exports.serializeAws_restJson1DeleteSmsTemplateCommand = exports.serializeAws_restJson1DeleteSmsChannelCommand = exports.serializeAws_restJson1DeleteSegmentCommand = exports.serializeAws_restJson1DeleteRecommenderConfigurationCommand = exports.serializeAws_restJson1DeletePushTemplateCommand = exports.serializeAws_restJson1DeleteJourneyCommand = exports.serializeAws_restJson1DeleteGcmChannelCommand = exports.serializeAws_restJson1DeleteEventStreamCommand = exports.serializeAws_restJson1DeleteEndpointCommand = exports.serializeAws_restJson1DeleteEmailTemplateCommand = exports.serializeAws_restJson1DeleteEmailChannelCommand = exports.serializeAws_restJson1DeleteCampaignCommand = exports.serializeAws_restJson1DeleteBaiduChannelCommand = exports.serializeAws_restJson1DeleteAppCommand = exports.serializeAws_restJson1DeleteApnsVoipSandboxChannelCommand = exports.serializeAws_restJson1DeleteApnsVoipChannelCommand = exports.serializeAws_restJson1DeleteApnsSandboxChannelCommand = exports.serializeAws_restJson1DeleteApnsChannelCommand = exports.serializeAws_restJson1DeleteAdmChannelCommand = exports.serializeAws_restJson1CreateVoiceTemplateCommand = exports.serializeAws_restJson1CreateSmsTemplateCommand = exports.serializeAws_restJson1CreateSegmentCommand = exports.serializeAws_restJson1CreateRecommenderConfigurationCommand = exports.serializeAws_restJson1CreatePushTemplateCommand = exports.serializeAws_restJson1CreateJourneyCommand = exports.serializeAws_restJson1CreateImportJobCommand = exports.serializeAws_restJson1CreateExportJobCommand = exports.serializeAws_restJson1CreateEmailTemplateCommand = exports.serializeAws_restJson1CreateCampaignCommand = exports.serializeAws_restJson1CreateAppCommand = void 0;
exports.serializeAws_restJson1UpdateEndpointCommand = exports.serializeAws_restJson1UpdateEmailTemplateCommand = exports.serializeAws_restJson1UpdateEmailChannelCommand = exports.serializeAws_restJson1UpdateCampaignCommand = exports.serializeAws_restJson1UpdateBaiduChannelCommand = exports.serializeAws_restJson1UpdateApplicationSettingsCommand = exports.serializeAws_restJson1UpdateApnsVoipSandboxChannelCommand = exports.serializeAws_restJson1UpdateApnsVoipChannelCommand = exports.serializeAws_restJson1UpdateApnsSandboxChannelCommand = exports.serializeAws_restJson1UpdateApnsChannelCommand = exports.serializeAws_restJson1UpdateAdmChannelCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1SendUsersMessagesCommand = exports.serializeAws_restJson1SendMessagesCommand = exports.serializeAws_restJson1RemoveAttributesCommand = exports.serializeAws_restJson1PutEventStreamCommand = exports.serializeAws_restJson1PutEventsCommand = exports.serializeAws_restJson1PhoneNumberValidateCommand = exports.serializeAws_restJson1ListTemplateVersionsCommand = exports.serializeAws_restJson1ListTemplatesCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListJourneysCommand = exports.serializeAws_restJson1GetVoiceTemplateCommand = exports.serializeAws_restJson1GetVoiceChannelCommand = exports.serializeAws_restJson1GetUserEndpointsCommand = exports.serializeAws_restJson1GetSmsTemplateCommand = exports.serializeAws_restJson1GetSmsChannelCommand = exports.serializeAws_restJson1GetSegmentVersionsCommand = exports.serializeAws_restJson1GetSegmentVersionCommand = exports.serializeAws_restJson1GetSegmentsCommand = exports.serializeAws_restJson1GetSegmentImportJobsCommand = exports.serializeAws_restJson1GetSegmentExportJobsCommand = exports.serializeAws_restJson1GetSegmentCommand = exports.serializeAws_restJson1GetRecommenderConfigurationsCommand = exports.serializeAws_restJson1GetRecommenderConfigurationCommand = exports.serializeAws_restJson1GetPushTemplateCommand = exports.serializeAws_restJson1GetJourneyExecutionMetricsCommand = exports.serializeAws_restJson1GetJourneyExecutionActivityMetricsCommand = exports.serializeAws_restJson1GetJourneyDateRangeKpiCommand = exports.serializeAws_restJson1GetJourneyCommand = exports.serializeAws_restJson1GetImportJobsCommand = exports.serializeAws_restJson1GetImportJobCommand = exports.serializeAws_restJson1GetGcmChannelCommand = exports.serializeAws_restJson1GetExportJobsCommand = exports.serializeAws_restJson1GetExportJobCommand = exports.serializeAws_restJson1GetEventStreamCommand = exports.serializeAws_restJson1GetEndpointCommand = exports.serializeAws_restJson1GetEmailTemplateCommand = exports.serializeAws_restJson1GetEmailChannelCommand = void 0;
exports.deserializeAws_restJson1GetApnsVoipSandboxChannelCommand = exports.deserializeAws_restJson1GetApnsVoipChannelCommand = exports.deserializeAws_restJson1GetApnsSandboxChannelCommand = exports.deserializeAws_restJson1GetApnsChannelCommand = exports.deserializeAws_restJson1GetAdmChannelCommand = exports.deserializeAws_restJson1DeleteVoiceTemplateCommand = exports.deserializeAws_restJson1DeleteVoiceChannelCommand = exports.deserializeAws_restJson1DeleteUserEndpointsCommand = exports.deserializeAws_restJson1DeleteSmsTemplateCommand = exports.deserializeAws_restJson1DeleteSmsChannelCommand = exports.deserializeAws_restJson1DeleteSegmentCommand = exports.deserializeAws_restJson1DeleteRecommenderConfigurationCommand = exports.deserializeAws_restJson1DeletePushTemplateCommand = exports.deserializeAws_restJson1DeleteJourneyCommand = exports.deserializeAws_restJson1DeleteGcmChannelCommand = exports.deserializeAws_restJson1DeleteEventStreamCommand = exports.deserializeAws_restJson1DeleteEndpointCommand = exports.deserializeAws_restJson1DeleteEmailTemplateCommand = exports.deserializeAws_restJson1DeleteEmailChannelCommand = exports.deserializeAws_restJson1DeleteCampaignCommand = exports.deserializeAws_restJson1DeleteBaiduChannelCommand = exports.deserializeAws_restJson1DeleteAppCommand = exports.deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommand = exports.deserializeAws_restJson1DeleteApnsVoipChannelCommand = exports.deserializeAws_restJson1DeleteApnsSandboxChannelCommand = exports.deserializeAws_restJson1DeleteApnsChannelCommand = exports.deserializeAws_restJson1DeleteAdmChannelCommand = exports.deserializeAws_restJson1CreateVoiceTemplateCommand = exports.deserializeAws_restJson1CreateSmsTemplateCommand = exports.deserializeAws_restJson1CreateSegmentCommand = exports.deserializeAws_restJson1CreateRecommenderConfigurationCommand = exports.deserializeAws_restJson1CreatePushTemplateCommand = exports.deserializeAws_restJson1CreateJourneyCommand = exports.deserializeAws_restJson1CreateImportJobCommand = exports.deserializeAws_restJson1CreateExportJobCommand = exports.deserializeAws_restJson1CreateEmailTemplateCommand = exports.deserializeAws_restJson1CreateCampaignCommand = exports.deserializeAws_restJson1CreateAppCommand = exports.serializeAws_restJson1UpdateVoiceTemplateCommand = exports.serializeAws_restJson1UpdateVoiceChannelCommand = exports.serializeAws_restJson1UpdateTemplateActiveVersionCommand = exports.serializeAws_restJson1UpdateSmsTemplateCommand = exports.serializeAws_restJson1UpdateSmsChannelCommand = exports.serializeAws_restJson1UpdateSegmentCommand = exports.serializeAws_restJson1UpdateRecommenderConfigurationCommand = exports.serializeAws_restJson1UpdatePushTemplateCommand = exports.serializeAws_restJson1UpdateJourneyStateCommand = exports.serializeAws_restJson1UpdateJourneyCommand = exports.serializeAws_restJson1UpdateGcmChannelCommand = exports.serializeAws_restJson1UpdateEndpointsBatchCommand = void 0;
exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1SendUsersMessagesCommand = exports.deserializeAws_restJson1SendMessagesCommand = exports.deserializeAws_restJson1RemoveAttributesCommand = exports.deserializeAws_restJson1PutEventStreamCommand = exports.deserializeAws_restJson1PutEventsCommand = exports.deserializeAws_restJson1PhoneNumberValidateCommand = exports.deserializeAws_restJson1ListTemplateVersionsCommand = exports.deserializeAws_restJson1ListTemplatesCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListJourneysCommand = exports.deserializeAws_restJson1GetVoiceTemplateCommand = exports.deserializeAws_restJson1GetVoiceChannelCommand = exports.deserializeAws_restJson1GetUserEndpointsCommand = exports.deserializeAws_restJson1GetSmsTemplateCommand = exports.deserializeAws_restJson1GetSmsChannelCommand = exports.deserializeAws_restJson1GetSegmentVersionsCommand = exports.deserializeAws_restJson1GetSegmentVersionCommand = exports.deserializeAws_restJson1GetSegmentsCommand = exports.deserializeAws_restJson1GetSegmentImportJobsCommand = exports.deserializeAws_restJson1GetSegmentExportJobsCommand = exports.deserializeAws_restJson1GetSegmentCommand = exports.deserializeAws_restJson1GetRecommenderConfigurationsCommand = exports.deserializeAws_restJson1GetRecommenderConfigurationCommand = exports.deserializeAws_restJson1GetPushTemplateCommand = exports.deserializeAws_restJson1GetJourneyExecutionMetricsCommand = exports.deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommand = exports.deserializeAws_restJson1GetJourneyDateRangeKpiCommand = exports.deserializeAws_restJson1GetJourneyCommand = exports.deserializeAws_restJson1GetImportJobsCommand = exports.deserializeAws_restJson1GetImportJobCommand = exports.deserializeAws_restJson1GetGcmChannelCommand = exports.deserializeAws_restJson1GetExportJobsCommand = exports.deserializeAws_restJson1GetExportJobCommand = exports.deserializeAws_restJson1GetEventStreamCommand = exports.deserializeAws_restJson1GetEndpointCommand = exports.deserializeAws_restJson1GetEmailTemplateCommand = exports.deserializeAws_restJson1GetEmailChannelCommand = exports.deserializeAws_restJson1GetChannelsCommand = exports.deserializeAws_restJson1GetCampaignVersionsCommand = exports.deserializeAws_restJson1GetCampaignVersionCommand = exports.deserializeAws_restJson1GetCampaignsCommand = exports.deserializeAws_restJson1GetCampaignDateRangeKpiCommand = exports.deserializeAws_restJson1GetCampaignActivitiesCommand = exports.deserializeAws_restJson1GetCampaignCommand = exports.deserializeAws_restJson1GetBaiduChannelCommand = exports.deserializeAws_restJson1GetAppsCommand = exports.deserializeAws_restJson1GetApplicationSettingsCommand = exports.deserializeAws_restJson1GetApplicationDateRangeKpiCommand = exports.deserializeAws_restJson1GetAppCommand = void 0;
exports.deserializeAws_restJson1UpdateVoiceTemplateCommand = exports.deserializeAws_restJson1UpdateVoiceChannelCommand = exports.deserializeAws_restJson1UpdateTemplateActiveVersionCommand = exports.deserializeAws_restJson1UpdateSmsTemplateCommand = exports.deserializeAws_restJson1UpdateSmsChannelCommand = exports.deserializeAws_restJson1UpdateSegmentCommand = exports.deserializeAws_restJson1UpdateRecommenderConfigurationCommand = exports.deserializeAws_restJson1UpdatePushTemplateCommand = exports.deserializeAws_restJson1UpdateJourneyStateCommand = exports.deserializeAws_restJson1UpdateJourneyCommand = exports.deserializeAws_restJson1UpdateGcmChannelCommand = exports.deserializeAws_restJson1UpdateEndpointsBatchCommand = exports.deserializeAws_restJson1UpdateEndpointCommand = exports.deserializeAws_restJson1UpdateEmailTemplateCommand = exports.deserializeAws_restJson1UpdateEmailChannelCommand = exports.deserializeAws_restJson1UpdateCampaignCommand = exports.deserializeAws_restJson1UpdateBaiduChannelCommand = exports.deserializeAws_restJson1UpdateApplicationSettingsCommand = exports.deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommand = exports.deserializeAws_restJson1UpdateApnsVoipChannelCommand = exports.deserializeAws_restJson1UpdateApnsSandboxChannelCommand = exports.deserializeAws_restJson1UpdateApnsChannelCommand = exports.deserializeAws_restJson1UpdateAdmChannelCommand = exports.deserializeAws_restJson1UntagResourceCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateAppCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps";
    let body;
    if (input.CreateApplicationRequest !== undefined) {
        body = serializeAws_restJson1CreateApplicationRequest(input.CreateApplicationRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateAppCommand = serializeAws_restJson1CreateAppCommand;
const serializeAws_restJson1CreateCampaignCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/campaigns";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.WriteCampaignRequest !== undefined) {
        body = serializeAws_restJson1WriteCampaignRequest(input.WriteCampaignRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateCampaignCommand = serializeAws_restJson1CreateCampaignCommand;
const serializeAws_restJson1CreateEmailTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/templates/{TemplateName}/email";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    let body;
    if (input.EmailTemplateRequest !== undefined) {
        body = serializeAws_restJson1EmailTemplateRequest(input.EmailTemplateRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateEmailTemplateCommand = serializeAws_restJson1CreateEmailTemplateCommand;
const serializeAws_restJson1CreateExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/jobs/export";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.ExportJobRequest !== undefined) {
        body = serializeAws_restJson1ExportJobRequest(input.ExportJobRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateExportJobCommand = serializeAws_restJson1CreateExportJobCommand;
const serializeAws_restJson1CreateImportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/jobs/import";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.ImportJobRequest !== undefined) {
        body = serializeAws_restJson1ImportJobRequest(input.ImportJobRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateImportJobCommand = serializeAws_restJson1CreateImportJobCommand;
const serializeAws_restJson1CreateJourneyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/journeys";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.WriteJourneyRequest !== undefined) {
        body = serializeAws_restJson1WriteJourneyRequest(input.WriteJourneyRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateJourneyCommand = serializeAws_restJson1CreateJourneyCommand;
const serializeAws_restJson1CreatePushTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/templates/{TemplateName}/push";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    let body;
    if (input.PushNotificationTemplateRequest !== undefined) {
        body = serializeAws_restJson1PushNotificationTemplateRequest(input.PushNotificationTemplateRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreatePushTemplateCommand = serializeAws_restJson1CreatePushTemplateCommand;
const serializeAws_restJson1CreateRecommenderConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/recommenders";
    let body;
    if (input.CreateRecommenderConfiguration !== undefined) {
        body = serializeAws_restJson1CreateRecommenderConfigurationShape(input.CreateRecommenderConfiguration, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateRecommenderConfigurationCommand = serializeAws_restJson1CreateRecommenderConfigurationCommand;
const serializeAws_restJson1CreateSegmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/segments";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.WriteSegmentRequest !== undefined) {
        body = serializeAws_restJson1WriteSegmentRequest(input.WriteSegmentRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateSegmentCommand = serializeAws_restJson1CreateSegmentCommand;
const serializeAws_restJson1CreateSmsTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/templates/{TemplateName}/sms";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    let body;
    if (input.SMSTemplateRequest !== undefined) {
        body = serializeAws_restJson1SMSTemplateRequest(input.SMSTemplateRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateSmsTemplateCommand = serializeAws_restJson1CreateSmsTemplateCommand;
const serializeAws_restJson1CreateVoiceTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/templates/{TemplateName}/voice";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    let body;
    if (input.VoiceTemplateRequest !== undefined) {
        body = serializeAws_restJson1VoiceTemplateRequest(input.VoiceTemplateRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateVoiceTemplateCommand = serializeAws_restJson1CreateVoiceTemplateCommand;
const serializeAws_restJson1DeleteAdmChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/adm";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteAdmChannelCommand = serializeAws_restJson1DeleteAdmChannelCommand;
const serializeAws_restJson1DeleteApnsChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteApnsChannelCommand = serializeAws_restJson1DeleteApnsChannelCommand;
const serializeAws_restJson1DeleteApnsSandboxChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_sandbox";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteApnsSandboxChannelCommand = serializeAws_restJson1DeleteApnsSandboxChannelCommand;
const serializeAws_restJson1DeleteApnsVoipChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteApnsVoipChannelCommand = serializeAws_restJson1DeleteApnsVoipChannelCommand;
const serializeAws_restJson1DeleteApnsVoipSandboxChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteApnsVoipSandboxChannelCommand = serializeAws_restJson1DeleteApnsVoipSandboxChannelCommand;
const serializeAws_restJson1DeleteAppCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteAppCommand = serializeAws_restJson1DeleteAppCommand;
const serializeAws_restJson1DeleteBaiduChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/baidu";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteBaiduChannelCommand = serializeAws_restJson1DeleteBaiduChannelCommand;
const serializeAws_restJson1DeleteCampaignCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.CampaignId !== undefined) {
        const labelValue = input.CampaignId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CampaignId.");
        }
        resolvedPath = resolvedPath.replace("{CampaignId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CampaignId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteCampaignCommand = serializeAws_restJson1DeleteCampaignCommand;
const serializeAws_restJson1DeleteEmailChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/email";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteEmailChannelCommand = serializeAws_restJson1DeleteEmailChannelCommand;
const serializeAws_restJson1DeleteEmailTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/templates/{TemplateName}/email";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    const query = {
        ...(input.Version !== undefined && { version: input.Version }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteEmailTemplateCommand = serializeAws_restJson1DeleteEmailTemplateCommand;
const serializeAws_restJson1DeleteEndpointCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/endpoints/{EndpointId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.EndpointId !== undefined) {
        const labelValue = input.EndpointId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EndpointId.");
        }
        resolvedPath = resolvedPath.replace("{EndpointId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EndpointId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteEndpointCommand = serializeAws_restJson1DeleteEndpointCommand;
const serializeAws_restJson1DeleteEventStreamCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/eventstream";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteEventStreamCommand = serializeAws_restJson1DeleteEventStreamCommand;
const serializeAws_restJson1DeleteGcmChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/gcm";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteGcmChannelCommand = serializeAws_restJson1DeleteGcmChannelCommand;
const serializeAws_restJson1DeleteJourneyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.JourneyId !== undefined) {
        const labelValue = input.JourneyId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JourneyId.");
        }
        resolvedPath = resolvedPath.replace("{JourneyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JourneyId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteJourneyCommand = serializeAws_restJson1DeleteJourneyCommand;
const serializeAws_restJson1DeletePushTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/templates/{TemplateName}/push";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    const query = {
        ...(input.Version !== undefined && { version: input.Version }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeletePushTemplateCommand = serializeAws_restJson1DeletePushTemplateCommand;
const serializeAws_restJson1DeleteRecommenderConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/recommenders/{RecommenderId}";
    if (input.RecommenderId !== undefined) {
        const labelValue = input.RecommenderId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RecommenderId.");
        }
        resolvedPath = resolvedPath.replace("{RecommenderId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RecommenderId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteRecommenderConfigurationCommand = serializeAws_restJson1DeleteRecommenderConfigurationCommand;
const serializeAws_restJson1DeleteSegmentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.SegmentId !== undefined) {
        const labelValue = input.SegmentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SegmentId.");
        }
        resolvedPath = resolvedPath.replace("{SegmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SegmentId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteSegmentCommand = serializeAws_restJson1DeleteSegmentCommand;
const serializeAws_restJson1DeleteSmsChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/sms";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteSmsChannelCommand = serializeAws_restJson1DeleteSmsChannelCommand;
const serializeAws_restJson1DeleteSmsTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/templates/{TemplateName}/sms";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    const query = {
        ...(input.Version !== undefined && { version: input.Version }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteSmsTemplateCommand = serializeAws_restJson1DeleteSmsTemplateCommand;
const serializeAws_restJson1DeleteUserEndpointsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/users/{UserId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.UserId !== undefined) {
        const labelValue = input.UserId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserId.");
        }
        resolvedPath = resolvedPath.replace("{UserId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteUserEndpointsCommand = serializeAws_restJson1DeleteUserEndpointsCommand;
const serializeAws_restJson1DeleteVoiceChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/voice";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteVoiceChannelCommand = serializeAws_restJson1DeleteVoiceChannelCommand;
const serializeAws_restJson1DeleteVoiceTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/templates/{TemplateName}/voice";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    const query = {
        ...(input.Version !== undefined && { version: input.Version }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteVoiceTemplateCommand = serializeAws_restJson1DeleteVoiceTemplateCommand;
const serializeAws_restJson1GetAdmChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/adm";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetAdmChannelCommand = serializeAws_restJson1GetAdmChannelCommand;
const serializeAws_restJson1GetApnsChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetApnsChannelCommand = serializeAws_restJson1GetApnsChannelCommand;
const serializeAws_restJson1GetApnsSandboxChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_sandbox";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetApnsSandboxChannelCommand = serializeAws_restJson1GetApnsSandboxChannelCommand;
const serializeAws_restJson1GetApnsVoipChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetApnsVoipChannelCommand = serializeAws_restJson1GetApnsVoipChannelCommand;
const serializeAws_restJson1GetApnsVoipSandboxChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetApnsVoipSandboxChannelCommand = serializeAws_restJson1GetApnsVoipSandboxChannelCommand;
const serializeAws_restJson1GetAppCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetAppCommand = serializeAws_restJson1GetAppCommand;
const serializeAws_restJson1GetApplicationDateRangeKpiCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/kpis/daterange/{KpiName}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.KpiName !== undefined) {
        const labelValue = input.KpiName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: KpiName.");
        }
        resolvedPath = resolvedPath.replace("{KpiName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: KpiName.");
    }
    const query = {
        ...(input.EndTime !== undefined && { "end-time": (input.EndTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.StartTime !== undefined && {
            "start-time": (input.StartTime.toISOString().split(".")[0] + "Z").toString(),
        }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetApplicationDateRangeKpiCommand = serializeAws_restJson1GetApplicationDateRangeKpiCommand;
const serializeAws_restJson1GetApplicationSettingsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/settings";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetApplicationSettingsCommand = serializeAws_restJson1GetApplicationSettingsCommand;
const serializeAws_restJson1GetAppsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps";
    const query = {
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.Token !== undefined && { token: input.Token }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetAppsCommand = serializeAws_restJson1GetAppsCommand;
const serializeAws_restJson1GetBaiduChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/baidu";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetBaiduChannelCommand = serializeAws_restJson1GetBaiduChannelCommand;
const serializeAws_restJson1GetCampaignCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.CampaignId !== undefined) {
        const labelValue = input.CampaignId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CampaignId.");
        }
        resolvedPath = resolvedPath.replace("{CampaignId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CampaignId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetCampaignCommand = serializeAws_restJson1GetCampaignCommand;
const serializeAws_restJson1GetCampaignActivitiesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/activities";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.CampaignId !== undefined) {
        const labelValue = input.CampaignId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CampaignId.");
        }
        resolvedPath = resolvedPath.replace("{CampaignId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CampaignId.");
    }
    const query = {
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.Token !== undefined && { token: input.Token }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetCampaignActivitiesCommand = serializeAws_restJson1GetCampaignActivitiesCommand;
const serializeAws_restJson1GetCampaignDateRangeKpiCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/kpis/daterange/{KpiName}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.CampaignId !== undefined) {
        const labelValue = input.CampaignId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CampaignId.");
        }
        resolvedPath = resolvedPath.replace("{CampaignId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CampaignId.");
    }
    if (input.KpiName !== undefined) {
        const labelValue = input.KpiName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: KpiName.");
        }
        resolvedPath = resolvedPath.replace("{KpiName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: KpiName.");
    }
    const query = {
        ...(input.EndTime !== undefined && { "end-time": (input.EndTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.StartTime !== undefined && {
            "start-time": (input.StartTime.toISOString().split(".")[0] + "Z").toString(),
        }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetCampaignDateRangeKpiCommand = serializeAws_restJson1GetCampaignDateRangeKpiCommand;
const serializeAws_restJson1GetCampaignsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/campaigns";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    const query = {
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.Token !== undefined && { token: input.Token }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetCampaignsCommand = serializeAws_restJson1GetCampaignsCommand;
const serializeAws_restJson1GetCampaignVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions/{Version}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.CampaignId !== undefined) {
        const labelValue = input.CampaignId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CampaignId.");
        }
        resolvedPath = resolvedPath.replace("{CampaignId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CampaignId.");
    }
    if (input.Version !== undefined) {
        const labelValue = input.Version;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Version.");
        }
        resolvedPath = resolvedPath.replace("{Version}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Version.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetCampaignVersionCommand = serializeAws_restJson1GetCampaignVersionCommand;
const serializeAws_restJson1GetCampaignVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.CampaignId !== undefined) {
        const labelValue = input.CampaignId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CampaignId.");
        }
        resolvedPath = resolvedPath.replace("{CampaignId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CampaignId.");
    }
    const query = {
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.Token !== undefined && { token: input.Token }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetCampaignVersionsCommand = serializeAws_restJson1GetCampaignVersionsCommand;
const serializeAws_restJson1GetChannelsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetChannelsCommand = serializeAws_restJson1GetChannelsCommand;
const serializeAws_restJson1GetEmailChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/email";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetEmailChannelCommand = serializeAws_restJson1GetEmailChannelCommand;
const serializeAws_restJson1GetEmailTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/templates/{TemplateName}/email";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    const query = {
        ...(input.Version !== undefined && { version: input.Version }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetEmailTemplateCommand = serializeAws_restJson1GetEmailTemplateCommand;
const serializeAws_restJson1GetEndpointCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/endpoints/{EndpointId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.EndpointId !== undefined) {
        const labelValue = input.EndpointId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EndpointId.");
        }
        resolvedPath = resolvedPath.replace("{EndpointId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EndpointId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetEndpointCommand = serializeAws_restJson1GetEndpointCommand;
const serializeAws_restJson1GetEventStreamCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/eventstream";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetEventStreamCommand = serializeAws_restJson1GetEventStreamCommand;
const serializeAws_restJson1GetExportJobCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/jobs/export/{JobId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.JobId !== undefined) {
        const labelValue = input.JobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JobId.");
        }
        resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JobId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetExportJobCommand = serializeAws_restJson1GetExportJobCommand;
const serializeAws_restJson1GetExportJobsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/jobs/export";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    const query = {
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.Token !== undefined && { token: input.Token }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetExportJobsCommand = serializeAws_restJson1GetExportJobsCommand;
const serializeAws_restJson1GetGcmChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/gcm";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetGcmChannelCommand = serializeAws_restJson1GetGcmChannelCommand;
const serializeAws_restJson1GetImportJobCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/jobs/import/{JobId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.JobId !== undefined) {
        const labelValue = input.JobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JobId.");
        }
        resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JobId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetImportJobCommand = serializeAws_restJson1GetImportJobCommand;
const serializeAws_restJson1GetImportJobsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/jobs/import";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    const query = {
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.Token !== undefined && { token: input.Token }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetImportJobsCommand = serializeAws_restJson1GetImportJobsCommand;
const serializeAws_restJson1GetJourneyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.JourneyId !== undefined) {
        const labelValue = input.JourneyId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JourneyId.");
        }
        resolvedPath = resolvedPath.replace("{JourneyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JourneyId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetJourneyCommand = serializeAws_restJson1GetJourneyCommand;
const serializeAws_restJson1GetJourneyDateRangeKpiCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}/kpis/daterange/{KpiName}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.JourneyId !== undefined) {
        const labelValue = input.JourneyId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JourneyId.");
        }
        resolvedPath = resolvedPath.replace("{JourneyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JourneyId.");
    }
    if (input.KpiName !== undefined) {
        const labelValue = input.KpiName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: KpiName.");
        }
        resolvedPath = resolvedPath.replace("{KpiName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: KpiName.");
    }
    const query = {
        ...(input.EndTime !== undefined && { "end-time": (input.EndTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.StartTime !== undefined && {
            "start-time": (input.StartTime.toISOString().split(".")[0] + "Z").toString(),
        }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetJourneyDateRangeKpiCommand = serializeAws_restJson1GetJourneyDateRangeKpiCommand;
const serializeAws_restJson1GetJourneyExecutionActivityMetricsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}/activities/{JourneyActivityId}/execution-metrics";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.JourneyActivityId !== undefined) {
        const labelValue = input.JourneyActivityId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JourneyActivityId.");
        }
        resolvedPath = resolvedPath.replace("{JourneyActivityId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JourneyActivityId.");
    }
    if (input.JourneyId !== undefined) {
        const labelValue = input.JourneyId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JourneyId.");
        }
        resolvedPath = resolvedPath.replace("{JourneyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JourneyId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetJourneyExecutionActivityMetricsCommand = serializeAws_restJson1GetJourneyExecutionActivityMetricsCommand;
const serializeAws_restJson1GetJourneyExecutionMetricsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}/execution-metrics";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.JourneyId !== undefined) {
        const labelValue = input.JourneyId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JourneyId.");
        }
        resolvedPath = resolvedPath.replace("{JourneyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JourneyId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetJourneyExecutionMetricsCommand = serializeAws_restJson1GetJourneyExecutionMetricsCommand;
const serializeAws_restJson1GetPushTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/templates/{TemplateName}/push";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    const query = {
        ...(input.Version !== undefined && { version: input.Version }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetPushTemplateCommand = serializeAws_restJson1GetPushTemplateCommand;
const serializeAws_restJson1GetRecommenderConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/recommenders/{RecommenderId}";
    if (input.RecommenderId !== undefined) {
        const labelValue = input.RecommenderId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RecommenderId.");
        }
        resolvedPath = resolvedPath.replace("{RecommenderId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RecommenderId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetRecommenderConfigurationCommand = serializeAws_restJson1GetRecommenderConfigurationCommand;
const serializeAws_restJson1GetRecommenderConfigurationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/recommenders";
    const query = {
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.Token !== undefined && { token: input.Token }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetRecommenderConfigurationsCommand = serializeAws_restJson1GetRecommenderConfigurationsCommand;
const serializeAws_restJson1GetSegmentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.SegmentId !== undefined) {
        const labelValue = input.SegmentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SegmentId.");
        }
        resolvedPath = resolvedPath.replace("{SegmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SegmentId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetSegmentCommand = serializeAws_restJson1GetSegmentCommand;
const serializeAws_restJson1GetSegmentExportJobsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/export";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.SegmentId !== undefined) {
        const labelValue = input.SegmentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SegmentId.");
        }
        resolvedPath = resolvedPath.replace("{SegmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SegmentId.");
    }
    const query = {
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.Token !== undefined && { token: input.Token }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetSegmentExportJobsCommand = serializeAws_restJson1GetSegmentExportJobsCommand;
const serializeAws_restJson1GetSegmentImportJobsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/import";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.SegmentId !== undefined) {
        const labelValue = input.SegmentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SegmentId.");
        }
        resolvedPath = resolvedPath.replace("{SegmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SegmentId.");
    }
    const query = {
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.Token !== undefined && { token: input.Token }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetSegmentImportJobsCommand = serializeAws_restJson1GetSegmentImportJobsCommand;
const serializeAws_restJson1GetSegmentsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/segments";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    const query = {
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.Token !== undefined && { token: input.Token }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetSegmentsCommand = serializeAws_restJson1GetSegmentsCommand;
const serializeAws_restJson1GetSegmentVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}/versions/{Version}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.SegmentId !== undefined) {
        const labelValue = input.SegmentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SegmentId.");
        }
        resolvedPath = resolvedPath.replace("{SegmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SegmentId.");
    }
    if (input.Version !== undefined) {
        const labelValue = input.Version;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Version.");
        }
        resolvedPath = resolvedPath.replace("{Version}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Version.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetSegmentVersionCommand = serializeAws_restJson1GetSegmentVersionCommand;
const serializeAws_restJson1GetSegmentVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}/versions";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.SegmentId !== undefined) {
        const labelValue = input.SegmentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SegmentId.");
        }
        resolvedPath = resolvedPath.replace("{SegmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SegmentId.");
    }
    const query = {
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.Token !== undefined && { token: input.Token }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetSegmentVersionsCommand = serializeAws_restJson1GetSegmentVersionsCommand;
const serializeAws_restJson1GetSmsChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/sms";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetSmsChannelCommand = serializeAws_restJson1GetSmsChannelCommand;
const serializeAws_restJson1GetSmsTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/templates/{TemplateName}/sms";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    const query = {
        ...(input.Version !== undefined && { version: input.Version }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetSmsTemplateCommand = serializeAws_restJson1GetSmsTemplateCommand;
const serializeAws_restJson1GetUserEndpointsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/users/{UserId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.UserId !== undefined) {
        const labelValue = input.UserId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserId.");
        }
        resolvedPath = resolvedPath.replace("{UserId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetUserEndpointsCommand = serializeAws_restJson1GetUserEndpointsCommand;
const serializeAws_restJson1GetVoiceChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/voice";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1GetVoiceChannelCommand = serializeAws_restJson1GetVoiceChannelCommand;
const serializeAws_restJson1GetVoiceTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/templates/{TemplateName}/voice";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    const query = {
        ...(input.Version !== undefined && { version: input.Version }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetVoiceTemplateCommand = serializeAws_restJson1GetVoiceTemplateCommand;
const serializeAws_restJson1ListJourneysCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/apps/{ApplicationId}/journeys";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    const query = {
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.Token !== undefined && { token: input.Token }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListJourneysCommand = serializeAws_restJson1ListJourneysCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1ListTemplatesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/templates";
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
        ...(input.Prefix !== undefined && { prefix: input.Prefix }),
        ...(input.TemplateType !== undefined && { "template-type": input.TemplateType }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListTemplatesCommand = serializeAws_restJson1ListTemplatesCommand;
const serializeAws_restJson1ListTemplateVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/templates/{TemplateName}/{TemplateType}/versions";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    if (input.TemplateType !== undefined) {
        const labelValue = input.TemplateType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateType.");
        }
        resolvedPath = resolvedPath.replace("{TemplateType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateType.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListTemplateVersionsCommand = serializeAws_restJson1ListTemplateVersionsCommand;
const serializeAws_restJson1PhoneNumberValidateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/phone/number/validate";
    let body;
    if (input.NumberValidateRequest !== undefined) {
        body = serializeAws_restJson1NumberValidateRequest(input.NumberValidateRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PhoneNumberValidateCommand = serializeAws_restJson1PhoneNumberValidateCommand;
const serializeAws_restJson1PutEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/events";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.EventsRequest !== undefined) {
        body = serializeAws_restJson1EventsRequest(input.EventsRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutEventsCommand = serializeAws_restJson1PutEventsCommand;
const serializeAws_restJson1PutEventStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/eventstream";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.WriteEventStream !== undefined) {
        body = serializeAws_restJson1WriteEventStream(input.WriteEventStream, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1PutEventStreamCommand = serializeAws_restJson1PutEventStreamCommand;
const serializeAws_restJson1RemoveAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/attributes/{AttributeType}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.AttributeType !== undefined) {
        const labelValue = input.AttributeType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AttributeType.");
        }
        resolvedPath = resolvedPath.replace("{AttributeType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AttributeType.");
    }
    let body;
    if (input.UpdateAttributesRequest !== undefined) {
        body = serializeAws_restJson1UpdateAttributesRequest(input.UpdateAttributesRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1RemoveAttributesCommand = serializeAws_restJson1RemoveAttributesCommand;
const serializeAws_restJson1SendMessagesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/messages";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.MessageRequest !== undefined) {
        body = serializeAws_restJson1MessageRequest(input.MessageRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1SendMessagesCommand = serializeAws_restJson1SendMessagesCommand;
const serializeAws_restJson1SendUsersMessagesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/users-messages";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.SendUsersMessageRequest !== undefined) {
        body = serializeAws_restJson1SendUsersMessageRequest(input.SendUsersMessageRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1SendUsersMessagesCommand = serializeAws_restJson1SendUsersMessagesCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    let body;
    if (input.TagsModel !== undefined) {
        body = serializeAws_restJson1TagsModel(input.TagsModel, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    const query = {
        ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateAdmChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/adm";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.ADMChannelRequest !== undefined) {
        body = serializeAws_restJson1ADMChannelRequest(input.ADMChannelRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateAdmChannelCommand = serializeAws_restJson1UpdateAdmChannelCommand;
const serializeAws_restJson1UpdateApnsChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.APNSChannelRequest !== undefined) {
        body = serializeAws_restJson1APNSChannelRequest(input.APNSChannelRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateApnsChannelCommand = serializeAws_restJson1UpdateApnsChannelCommand;
const serializeAws_restJson1UpdateApnsSandboxChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_sandbox";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.APNSSandboxChannelRequest !== undefined) {
        body = serializeAws_restJson1APNSSandboxChannelRequest(input.APNSSandboxChannelRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateApnsSandboxChannelCommand = serializeAws_restJson1UpdateApnsSandboxChannelCommand;
const serializeAws_restJson1UpdateApnsVoipChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.APNSVoipChannelRequest !== undefined) {
        body = serializeAws_restJson1APNSVoipChannelRequest(input.APNSVoipChannelRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateApnsVoipChannelCommand = serializeAws_restJson1UpdateApnsVoipChannelCommand;
const serializeAws_restJson1UpdateApnsVoipSandboxChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.APNSVoipSandboxChannelRequest !== undefined) {
        body = serializeAws_restJson1APNSVoipSandboxChannelRequest(input.APNSVoipSandboxChannelRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateApnsVoipSandboxChannelCommand = serializeAws_restJson1UpdateApnsVoipSandboxChannelCommand;
const serializeAws_restJson1UpdateApplicationSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/settings";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.WriteApplicationSettingsRequest !== undefined) {
        body = serializeAws_restJson1WriteApplicationSettingsRequest(input.WriteApplicationSettingsRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateApplicationSettingsCommand = serializeAws_restJson1UpdateApplicationSettingsCommand;
const serializeAws_restJson1UpdateBaiduChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/baidu";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.BaiduChannelRequest !== undefined) {
        body = serializeAws_restJson1BaiduChannelRequest(input.BaiduChannelRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateBaiduChannelCommand = serializeAws_restJson1UpdateBaiduChannelCommand;
const serializeAws_restJson1UpdateCampaignCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.CampaignId !== undefined) {
        const labelValue = input.CampaignId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CampaignId.");
        }
        resolvedPath = resolvedPath.replace("{CampaignId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CampaignId.");
    }
    let body;
    if (input.WriteCampaignRequest !== undefined) {
        body = serializeAws_restJson1WriteCampaignRequest(input.WriteCampaignRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateCampaignCommand = serializeAws_restJson1UpdateCampaignCommand;
const serializeAws_restJson1UpdateEmailChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/email";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.EmailChannelRequest !== undefined) {
        body = serializeAws_restJson1EmailChannelRequest(input.EmailChannelRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateEmailChannelCommand = serializeAws_restJson1UpdateEmailChannelCommand;
const serializeAws_restJson1UpdateEmailTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/templates/{TemplateName}/email";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    const query = {
        ...(input.CreateNewVersion !== undefined && { "create-new-version": input.CreateNewVersion.toString() }),
        ...(input.Version !== undefined && { version: input.Version }),
    };
    let body;
    if (input.EmailTemplateRequest !== undefined) {
        body = serializeAws_restJson1EmailTemplateRequest(input.EmailTemplateRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UpdateEmailTemplateCommand = serializeAws_restJson1UpdateEmailTemplateCommand;
const serializeAws_restJson1UpdateEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/endpoints/{EndpointId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.EndpointId !== undefined) {
        const labelValue = input.EndpointId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: EndpointId.");
        }
        resolvedPath = resolvedPath.replace("{EndpointId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: EndpointId.");
    }
    let body;
    if (input.EndpointRequest !== undefined) {
        body = serializeAws_restJson1EndpointRequest(input.EndpointRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateEndpointCommand = serializeAws_restJson1UpdateEndpointCommand;
const serializeAws_restJson1UpdateEndpointsBatchCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/endpoints";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.EndpointBatchRequest !== undefined) {
        body = serializeAws_restJson1EndpointBatchRequest(input.EndpointBatchRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateEndpointsBatchCommand = serializeAws_restJson1UpdateEndpointsBatchCommand;
const serializeAws_restJson1UpdateGcmChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/gcm";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.GCMChannelRequest !== undefined) {
        body = serializeAws_restJson1GCMChannelRequest(input.GCMChannelRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateGcmChannelCommand = serializeAws_restJson1UpdateGcmChannelCommand;
const serializeAws_restJson1UpdateJourneyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.JourneyId !== undefined) {
        const labelValue = input.JourneyId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JourneyId.");
        }
        resolvedPath = resolvedPath.replace("{JourneyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JourneyId.");
    }
    let body;
    if (input.WriteJourneyRequest !== undefined) {
        body = serializeAws_restJson1WriteJourneyRequest(input.WriteJourneyRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateJourneyCommand = serializeAws_restJson1UpdateJourneyCommand;
const serializeAws_restJson1UpdateJourneyStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}/state";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.JourneyId !== undefined) {
        const labelValue = input.JourneyId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JourneyId.");
        }
        resolvedPath = resolvedPath.replace("{JourneyId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JourneyId.");
    }
    let body;
    if (input.JourneyStateRequest !== undefined) {
        body = serializeAws_restJson1JourneyStateRequest(input.JourneyStateRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateJourneyStateCommand = serializeAws_restJson1UpdateJourneyStateCommand;
const serializeAws_restJson1UpdatePushTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/templates/{TemplateName}/push";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    const query = {
        ...(input.CreateNewVersion !== undefined && { "create-new-version": input.CreateNewVersion.toString() }),
        ...(input.Version !== undefined && { version: input.Version }),
    };
    let body;
    if (input.PushNotificationTemplateRequest !== undefined) {
        body = serializeAws_restJson1PushNotificationTemplateRequest(input.PushNotificationTemplateRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UpdatePushTemplateCommand = serializeAws_restJson1UpdatePushTemplateCommand;
const serializeAws_restJson1UpdateRecommenderConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/recommenders/{RecommenderId}";
    if (input.RecommenderId !== undefined) {
        const labelValue = input.RecommenderId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RecommenderId.");
        }
        resolvedPath = resolvedPath.replace("{RecommenderId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RecommenderId.");
    }
    let body;
    if (input.UpdateRecommenderConfiguration !== undefined) {
        body = serializeAws_restJson1UpdateRecommenderConfigurationShape(input.UpdateRecommenderConfiguration, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateRecommenderConfigurationCommand = serializeAws_restJson1UpdateRecommenderConfigurationCommand;
const serializeAws_restJson1UpdateSegmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    if (input.SegmentId !== undefined) {
        const labelValue = input.SegmentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SegmentId.");
        }
        resolvedPath = resolvedPath.replace("{SegmentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SegmentId.");
    }
    let body;
    if (input.WriteSegmentRequest !== undefined) {
        body = serializeAws_restJson1WriteSegmentRequest(input.WriteSegmentRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateSegmentCommand = serializeAws_restJson1UpdateSegmentCommand;
const serializeAws_restJson1UpdateSmsChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/sms";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.SMSChannelRequest !== undefined) {
        body = serializeAws_restJson1SMSChannelRequest(input.SMSChannelRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateSmsChannelCommand = serializeAws_restJson1UpdateSmsChannelCommand;
const serializeAws_restJson1UpdateSmsTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/templates/{TemplateName}/sms";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    const query = {
        ...(input.CreateNewVersion !== undefined && { "create-new-version": input.CreateNewVersion.toString() }),
        ...(input.Version !== undefined && { version: input.Version }),
    };
    let body;
    if (input.SMSTemplateRequest !== undefined) {
        body = serializeAws_restJson1SMSTemplateRequest(input.SMSTemplateRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UpdateSmsTemplateCommand = serializeAws_restJson1UpdateSmsTemplateCommand;
const serializeAws_restJson1UpdateTemplateActiveVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/templates/{TemplateName}/{TemplateType}/active-version";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    if (input.TemplateType !== undefined) {
        const labelValue = input.TemplateType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateType.");
        }
        resolvedPath = resolvedPath.replace("{TemplateType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateType.");
    }
    let body;
    if (input.TemplateActiveVersionRequest !== undefined) {
        body = serializeAws_restJson1TemplateActiveVersionRequest(input.TemplateActiveVersionRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateTemplateActiveVersionCommand = serializeAws_restJson1UpdateTemplateActiveVersionCommand;
const serializeAws_restJson1UpdateVoiceChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/apps/{ApplicationId}/channels/voice";
    if (input.ApplicationId !== undefined) {
        const labelValue = input.ApplicationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ApplicationId.");
        }
        resolvedPath = resolvedPath.replace("{ApplicationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ApplicationId.");
    }
    let body;
    if (input.VoiceChannelRequest !== undefined) {
        body = serializeAws_restJson1VoiceChannelRequest(input.VoiceChannelRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateVoiceChannelCommand = serializeAws_restJson1UpdateVoiceChannelCommand;
const serializeAws_restJson1UpdateVoiceTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/templates/{TemplateName}/voice";
    if (input.TemplateName !== undefined) {
        const labelValue = input.TemplateName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateName.");
        }
        resolvedPath = resolvedPath.replace("{TemplateName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateName.");
    }
    const query = {
        ...(input.CreateNewVersion !== undefined && { "create-new-version": input.CreateNewVersion.toString() }),
        ...(input.Version !== undefined && { version: input.Version }),
    };
    let body;
    if (input.VoiceTemplateRequest !== undefined) {
        body = serializeAws_restJson1VoiceTemplateRequest(input.VoiceTemplateRequest, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UpdateVoiceTemplateCommand = serializeAws_restJson1UpdateVoiceTemplateCommand;
const deserializeAws_restJson1CreateAppCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateAppCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ApplicationResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ApplicationResponse = deserializeAws_restJson1ApplicationResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAppCommand = deserializeAws_restJson1CreateAppCommand;
const deserializeAws_restJson1CreateAppCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateCampaignCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateCampaignCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CampaignResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateCampaignCommand = deserializeAws_restJson1CreateCampaignCommand;
const deserializeAws_restJson1CreateCampaignCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateEmailTemplateCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateEmailTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateTemplateMessageBody: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateEmailTemplateCommand = deserializeAws_restJson1CreateEmailTemplateCommand;
const deserializeAws_restJson1CreateEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateExportJobCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateExportJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ExportJobResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ExportJobResponse = deserializeAws_restJson1ExportJobResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateExportJobCommand = deserializeAws_restJson1CreateExportJobCommand;
const deserializeAws_restJson1CreateExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateImportJobCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateImportJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ImportJobResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ImportJobResponse = deserializeAws_restJson1ImportJobResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateImportJobCommand = deserializeAws_restJson1CreateImportJobCommand;
const deserializeAws_restJson1CreateImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateJourneyCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateJourneyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JourneyResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateJourneyCommand = deserializeAws_restJson1CreateJourneyCommand;
const deserializeAws_restJson1CreateJourneyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreatePushTemplateCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreatePushTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateTemplateMessageBody: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreatePushTemplateCommand = deserializeAws_restJson1CreatePushTemplateCommand;
const deserializeAws_restJson1CreatePushTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateRecommenderConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateRecommenderConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RecommenderConfigurationResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRecommenderConfigurationCommand = deserializeAws_restJson1CreateRecommenderConfigurationCommand;
const deserializeAws_restJson1CreateRecommenderConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateSegmentCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSegmentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SegmentResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSegmentCommand = deserializeAws_restJson1CreateSegmentCommand;
const deserializeAws_restJson1CreateSegmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateSmsTemplateCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSmsTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateTemplateMessageBody: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSmsTemplateCommand = deserializeAws_restJson1CreateSmsTemplateCommand;
const deserializeAws_restJson1CreateSmsTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateVoiceTemplateCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateVoiceTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreateTemplateMessageBody: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateVoiceTemplateCommand = deserializeAws_restJson1CreateVoiceTemplateCommand;
const deserializeAws_restJson1CreateVoiceTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteAdmChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAdmChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ADMChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ADMChannelResponse = deserializeAws_restJson1ADMChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAdmChannelCommand = deserializeAws_restJson1DeleteAdmChannelCommand;
const deserializeAws_restJson1DeleteAdmChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteApnsChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteApnsChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        APNSChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.APNSChannelResponse = deserializeAws_restJson1APNSChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteApnsChannelCommand = deserializeAws_restJson1DeleteApnsChannelCommand;
const deserializeAws_restJson1DeleteApnsChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteApnsSandboxChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteApnsSandboxChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        APNSSandboxChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.APNSSandboxChannelResponse = deserializeAws_restJson1APNSSandboxChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteApnsSandboxChannelCommand = deserializeAws_restJson1DeleteApnsSandboxChannelCommand;
const deserializeAws_restJson1DeleteApnsSandboxChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteApnsVoipChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteApnsVoipChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        APNSVoipChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.APNSVoipChannelResponse = deserializeAws_restJson1APNSVoipChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteApnsVoipChannelCommand = deserializeAws_restJson1DeleteApnsVoipChannelCommand;
const deserializeAws_restJson1DeleteApnsVoipChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        APNSVoipSandboxChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.APNSVoipSandboxChannelResponse = deserializeAws_restJson1APNSVoipSandboxChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommand = deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommand;
const deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteAppCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAppCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ApplicationResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ApplicationResponse = deserializeAws_restJson1ApplicationResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAppCommand = deserializeAws_restJson1DeleteAppCommand;
const deserializeAws_restJson1DeleteAppCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteBaiduChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteBaiduChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BaiduChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.BaiduChannelResponse = deserializeAws_restJson1BaiduChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteBaiduChannelCommand = deserializeAws_restJson1DeleteBaiduChannelCommand;
const deserializeAws_restJson1DeleteBaiduChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteCampaignCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteCampaignCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CampaignResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteCampaignCommand = deserializeAws_restJson1DeleteCampaignCommand;
const deserializeAws_restJson1DeleteCampaignCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteEmailChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteEmailChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EmailChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.EmailChannelResponse = deserializeAws_restJson1EmailChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteEmailChannelCommand = deserializeAws_restJson1DeleteEmailChannelCommand;
const deserializeAws_restJson1DeleteEmailChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteEmailTemplateCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteEmailTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageBody: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteEmailTemplateCommand = deserializeAws_restJson1DeleteEmailTemplateCommand;
const deserializeAws_restJson1DeleteEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteEndpointCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteEndpointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EndpointResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.EndpointResponse = deserializeAws_restJson1EndpointResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteEndpointCommand = deserializeAws_restJson1DeleteEndpointCommand;
const deserializeAws_restJson1DeleteEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteEventStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteEventStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EventStream: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.EventStream = deserializeAws_restJson1EventStream(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteEventStreamCommand = deserializeAws_restJson1DeleteEventStreamCommand;
const deserializeAws_restJson1DeleteEventStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteGcmChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteGcmChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GCMChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.GCMChannelResponse = deserializeAws_restJson1GCMChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteGcmChannelCommand = deserializeAws_restJson1DeleteGcmChannelCommand;
const deserializeAws_restJson1DeleteGcmChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteJourneyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteJourneyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JourneyResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteJourneyCommand = deserializeAws_restJson1DeleteJourneyCommand;
const deserializeAws_restJson1DeleteJourneyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeletePushTemplateCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeletePushTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageBody: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeletePushTemplateCommand = deserializeAws_restJson1DeletePushTemplateCommand;
const deserializeAws_restJson1DeletePushTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteRecommenderConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteRecommenderConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RecommenderConfigurationResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRecommenderConfigurationCommand = deserializeAws_restJson1DeleteRecommenderConfigurationCommand;
const deserializeAws_restJson1DeleteRecommenderConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteSegmentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSegmentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SegmentResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSegmentCommand = deserializeAws_restJson1DeleteSegmentCommand;
const deserializeAws_restJson1DeleteSegmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteSmsChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSmsChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SMSChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.SMSChannelResponse = deserializeAws_restJson1SMSChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSmsChannelCommand = deserializeAws_restJson1DeleteSmsChannelCommand;
const deserializeAws_restJson1DeleteSmsChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteSmsTemplateCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSmsTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageBody: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSmsTemplateCommand = deserializeAws_restJson1DeleteSmsTemplateCommand;
const deserializeAws_restJson1DeleteSmsTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteUserEndpointsCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteUserEndpointsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EndpointsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.EndpointsResponse = deserializeAws_restJson1EndpointsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteUserEndpointsCommand = deserializeAws_restJson1DeleteUserEndpointsCommand;
const deserializeAws_restJson1DeleteUserEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteVoiceChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteVoiceChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        VoiceChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.VoiceChannelResponse = deserializeAws_restJson1VoiceChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteVoiceChannelCommand = deserializeAws_restJson1DeleteVoiceChannelCommand;
const deserializeAws_restJson1DeleteVoiceChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteVoiceTemplateCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteVoiceTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageBody: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteVoiceTemplateCommand = deserializeAws_restJson1DeleteVoiceTemplateCommand;
const deserializeAws_restJson1DeleteVoiceTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetAdmChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAdmChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ADMChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ADMChannelResponse = deserializeAws_restJson1ADMChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAdmChannelCommand = deserializeAws_restJson1GetAdmChannelCommand;
const deserializeAws_restJson1GetAdmChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetApnsChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetApnsChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        APNSChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.APNSChannelResponse = deserializeAws_restJson1APNSChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApnsChannelCommand = deserializeAws_restJson1GetApnsChannelCommand;
const deserializeAws_restJson1GetApnsChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetApnsSandboxChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetApnsSandboxChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        APNSSandboxChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.APNSSandboxChannelResponse = deserializeAws_restJson1APNSSandboxChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApnsSandboxChannelCommand = deserializeAws_restJson1GetApnsSandboxChannelCommand;
const deserializeAws_restJson1GetApnsSandboxChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetApnsVoipChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetApnsVoipChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        APNSVoipChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.APNSVoipChannelResponse = deserializeAws_restJson1APNSVoipChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApnsVoipChannelCommand = deserializeAws_restJson1GetApnsVoipChannelCommand;
const deserializeAws_restJson1GetApnsVoipChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetApnsVoipSandboxChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetApnsVoipSandboxChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        APNSVoipSandboxChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.APNSVoipSandboxChannelResponse = deserializeAws_restJson1APNSVoipSandboxChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApnsVoipSandboxChannelCommand = deserializeAws_restJson1GetApnsVoipSandboxChannelCommand;
const deserializeAws_restJson1GetApnsVoipSandboxChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetAppCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAppCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ApplicationResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ApplicationResponse = deserializeAws_restJson1ApplicationResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAppCommand = deserializeAws_restJson1GetAppCommand;
const deserializeAws_restJson1GetAppCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetApplicationDateRangeKpiCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetApplicationDateRangeKpiCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ApplicationDateRangeKpiResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ApplicationDateRangeKpiResponse = deserializeAws_restJson1ApplicationDateRangeKpiResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApplicationDateRangeKpiCommand = deserializeAws_restJson1GetApplicationDateRangeKpiCommand;
const deserializeAws_restJson1GetApplicationDateRangeKpiCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetApplicationSettingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetApplicationSettingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ApplicationSettingsResource: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ApplicationSettingsResource = deserializeAws_restJson1ApplicationSettingsResource(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApplicationSettingsCommand = deserializeAws_restJson1GetApplicationSettingsCommand;
const deserializeAws_restJson1GetApplicationSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetAppsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAppsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ApplicationsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ApplicationsResponse = deserializeAws_restJson1ApplicationsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAppsCommand = deserializeAws_restJson1GetAppsCommand;
const deserializeAws_restJson1GetAppsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetBaiduChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetBaiduChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BaiduChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.BaiduChannelResponse = deserializeAws_restJson1BaiduChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBaiduChannelCommand = deserializeAws_restJson1GetBaiduChannelCommand;
const deserializeAws_restJson1GetBaiduChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetCampaignCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCampaignCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CampaignResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCampaignCommand = deserializeAws_restJson1GetCampaignCommand;
const deserializeAws_restJson1GetCampaignCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetCampaignActivitiesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCampaignActivitiesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ActivitiesResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ActivitiesResponse = deserializeAws_restJson1ActivitiesResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCampaignActivitiesCommand = deserializeAws_restJson1GetCampaignActivitiesCommand;
const deserializeAws_restJson1GetCampaignActivitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetCampaignDateRangeKpiCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCampaignDateRangeKpiCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CampaignDateRangeKpiResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.CampaignDateRangeKpiResponse = deserializeAws_restJson1CampaignDateRangeKpiResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCampaignDateRangeKpiCommand = deserializeAws_restJson1GetCampaignDateRangeKpiCommand;
const deserializeAws_restJson1GetCampaignDateRangeKpiCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetCampaignsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCampaignsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CampaignsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.CampaignsResponse = deserializeAws_restJson1CampaignsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCampaignsCommand = deserializeAws_restJson1GetCampaignsCommand;
const deserializeAws_restJson1GetCampaignsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetCampaignVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCampaignVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CampaignResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCampaignVersionCommand = deserializeAws_restJson1GetCampaignVersionCommand;
const deserializeAws_restJson1GetCampaignVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetCampaignVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCampaignVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CampaignsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.CampaignsResponse = deserializeAws_restJson1CampaignsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCampaignVersionsCommand = deserializeAws_restJson1GetCampaignVersionsCommand;
const deserializeAws_restJson1GetCampaignVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetChannelsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetChannelsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ChannelsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ChannelsResponse = deserializeAws_restJson1ChannelsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetChannelsCommand = deserializeAws_restJson1GetChannelsCommand;
const deserializeAws_restJson1GetChannelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetEmailChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetEmailChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EmailChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.EmailChannelResponse = deserializeAws_restJson1EmailChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEmailChannelCommand = deserializeAws_restJson1GetEmailChannelCommand;
const deserializeAws_restJson1GetEmailChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetEmailTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetEmailTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EmailTemplateResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.EmailTemplateResponse = deserializeAws_restJson1EmailTemplateResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEmailTemplateCommand = deserializeAws_restJson1GetEmailTemplateCommand;
const deserializeAws_restJson1GetEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetEndpointCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetEndpointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EndpointResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.EndpointResponse = deserializeAws_restJson1EndpointResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEndpointCommand = deserializeAws_restJson1GetEndpointCommand;
const deserializeAws_restJson1GetEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetEventStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetEventStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EventStream: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.EventStream = deserializeAws_restJson1EventStream(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEventStreamCommand = deserializeAws_restJson1GetEventStreamCommand;
const deserializeAws_restJson1GetEventStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetExportJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetExportJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ExportJobResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ExportJobResponse = deserializeAws_restJson1ExportJobResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetExportJobCommand = deserializeAws_restJson1GetExportJobCommand;
const deserializeAws_restJson1GetExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetExportJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetExportJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ExportJobsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ExportJobsResponse = deserializeAws_restJson1ExportJobsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetExportJobsCommand = deserializeAws_restJson1GetExportJobsCommand;
const deserializeAws_restJson1GetExportJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetGcmChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetGcmChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GCMChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.GCMChannelResponse = deserializeAws_restJson1GCMChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGcmChannelCommand = deserializeAws_restJson1GetGcmChannelCommand;
const deserializeAws_restJson1GetGcmChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetImportJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetImportJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ImportJobResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ImportJobResponse = deserializeAws_restJson1ImportJobResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetImportJobCommand = deserializeAws_restJson1GetImportJobCommand;
const deserializeAws_restJson1GetImportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetImportJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetImportJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ImportJobsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ImportJobsResponse = deserializeAws_restJson1ImportJobsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetImportJobsCommand = deserializeAws_restJson1GetImportJobsCommand;
const deserializeAws_restJson1GetImportJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetJourneyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetJourneyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JourneyResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetJourneyCommand = deserializeAws_restJson1GetJourneyCommand;
const deserializeAws_restJson1GetJourneyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetJourneyDateRangeKpiCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetJourneyDateRangeKpiCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JourneyDateRangeKpiResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.JourneyDateRangeKpiResponse = deserializeAws_restJson1JourneyDateRangeKpiResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetJourneyDateRangeKpiCommand = deserializeAws_restJson1GetJourneyDateRangeKpiCommand;
const deserializeAws_restJson1GetJourneyDateRangeKpiCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JourneyExecutionActivityMetricsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.JourneyExecutionActivityMetricsResponse = deserializeAws_restJson1JourneyExecutionActivityMetricsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommand = deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommand;
const deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetJourneyExecutionMetricsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetJourneyExecutionMetricsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JourneyExecutionMetricsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.JourneyExecutionMetricsResponse = deserializeAws_restJson1JourneyExecutionMetricsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetJourneyExecutionMetricsCommand = deserializeAws_restJson1GetJourneyExecutionMetricsCommand;
const deserializeAws_restJson1GetJourneyExecutionMetricsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetPushTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetPushTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        PushNotificationTemplateResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.PushNotificationTemplateResponse = deserializeAws_restJson1PushNotificationTemplateResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetPushTemplateCommand = deserializeAws_restJson1GetPushTemplateCommand;
const deserializeAws_restJson1GetPushTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetRecommenderConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetRecommenderConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RecommenderConfigurationResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRecommenderConfigurationCommand = deserializeAws_restJson1GetRecommenderConfigurationCommand;
const deserializeAws_restJson1GetRecommenderConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetRecommenderConfigurationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetRecommenderConfigurationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ListRecommenderConfigurationsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ListRecommenderConfigurationsResponse = deserializeAws_restJson1ListRecommenderConfigurationsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRecommenderConfigurationsCommand = deserializeAws_restJson1GetRecommenderConfigurationsCommand;
const deserializeAws_restJson1GetRecommenderConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetSegmentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSegmentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SegmentResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSegmentCommand = deserializeAws_restJson1GetSegmentCommand;
const deserializeAws_restJson1GetSegmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetSegmentExportJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSegmentExportJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ExportJobsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ExportJobsResponse = deserializeAws_restJson1ExportJobsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSegmentExportJobsCommand = deserializeAws_restJson1GetSegmentExportJobsCommand;
const deserializeAws_restJson1GetSegmentExportJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetSegmentImportJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSegmentImportJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ImportJobsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ImportJobsResponse = deserializeAws_restJson1ImportJobsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSegmentImportJobsCommand = deserializeAws_restJson1GetSegmentImportJobsCommand;
const deserializeAws_restJson1GetSegmentImportJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetSegmentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSegmentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SegmentsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.SegmentsResponse = deserializeAws_restJson1SegmentsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSegmentsCommand = deserializeAws_restJson1GetSegmentsCommand;
const deserializeAws_restJson1GetSegmentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetSegmentVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSegmentVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SegmentResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSegmentVersionCommand = deserializeAws_restJson1GetSegmentVersionCommand;
const deserializeAws_restJson1GetSegmentVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetSegmentVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSegmentVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SegmentsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.SegmentsResponse = deserializeAws_restJson1SegmentsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSegmentVersionsCommand = deserializeAws_restJson1GetSegmentVersionsCommand;
const deserializeAws_restJson1GetSegmentVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetSmsChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSmsChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SMSChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.SMSChannelResponse = deserializeAws_restJson1SMSChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSmsChannelCommand = deserializeAws_restJson1GetSmsChannelCommand;
const deserializeAws_restJson1GetSmsChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetSmsTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSmsTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SMSTemplateResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.SMSTemplateResponse = deserializeAws_restJson1SMSTemplateResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSmsTemplateCommand = deserializeAws_restJson1GetSmsTemplateCommand;
const deserializeAws_restJson1GetSmsTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetUserEndpointsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetUserEndpointsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EndpointsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.EndpointsResponse = deserializeAws_restJson1EndpointsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetUserEndpointsCommand = deserializeAws_restJson1GetUserEndpointsCommand;
const deserializeAws_restJson1GetUserEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetVoiceChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetVoiceChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        VoiceChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.VoiceChannelResponse = deserializeAws_restJson1VoiceChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetVoiceChannelCommand = deserializeAws_restJson1GetVoiceChannelCommand;
const deserializeAws_restJson1GetVoiceChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetVoiceTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetVoiceTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        VoiceTemplateResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.VoiceTemplateResponse = deserializeAws_restJson1VoiceTemplateResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetVoiceTemplateCommand = deserializeAws_restJson1GetVoiceTemplateCommand;
const deserializeAws_restJson1GetVoiceTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListJourneysCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListJourneysCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JourneysResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.JourneysResponse = deserializeAws_restJson1JourneysResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListJourneysCommand = deserializeAws_restJson1ListJourneysCommand;
const deserializeAws_restJson1ListJourneysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        TagsModel: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.TagsModel = deserializeAws_restJson1TagsModel(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsForResourceCommand = deserializeAws_restJson1ListTagsForResourceCommand;
const deserializeAws_restJson1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListTemplatesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTemplatesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        TemplatesResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.TemplatesResponse = deserializeAws_restJson1TemplatesResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTemplatesCommand = deserializeAws_restJson1ListTemplatesCommand;
const deserializeAws_restJson1ListTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListTemplateVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTemplateVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        TemplateVersionsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.TemplateVersionsResponse = deserializeAws_restJson1TemplateVersionsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTemplateVersionsCommand = deserializeAws_restJson1ListTemplateVersionsCommand;
const deserializeAws_restJson1ListTemplateVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PhoneNumberValidateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PhoneNumberValidateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NumberValidateResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.NumberValidateResponse = deserializeAws_restJson1NumberValidateResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PhoneNumberValidateCommand = deserializeAws_restJson1PhoneNumberValidateCommand;
const deserializeAws_restJson1PhoneNumberValidateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutEventsCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutEventsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EventsResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.EventsResponse = deserializeAws_restJson1EventsResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutEventsCommand = deserializeAws_restJson1PutEventsCommand;
const deserializeAws_restJson1PutEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutEventStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutEventStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EventStream: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.EventStream = deserializeAws_restJson1EventStream(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutEventStreamCommand = deserializeAws_restJson1PutEventStreamCommand;
const deserializeAws_restJson1PutEventStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1RemoveAttributesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RemoveAttributesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AttributesResource: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.AttributesResource = deserializeAws_restJson1AttributesResource(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveAttributesCommand = deserializeAws_restJson1RemoveAttributesCommand;
const deserializeAws_restJson1RemoveAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1SendMessagesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SendMessagesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.MessageResponse = deserializeAws_restJson1MessageResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SendMessagesCommand = deserializeAws_restJson1SendMessagesCommand;
const deserializeAws_restJson1SendMessagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1SendUsersMessagesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SendUsersMessagesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SendUsersMessageResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.SendUsersMessageResponse = deserializeAws_restJson1SendUsersMessageResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SendUsersMessagesCommand = deserializeAws_restJson1SendUsersMessagesCommand;
const deserializeAws_restJson1SendUsersMessagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1TagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TagResourceCommand = deserializeAws_restJson1TagResourceCommand;
const deserializeAws_restJson1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UntagResourceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1UntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UntagResourceCommand = deserializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateAdmChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAdmChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ADMChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ADMChannelResponse = deserializeAws_restJson1ADMChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAdmChannelCommand = deserializeAws_restJson1UpdateAdmChannelCommand;
const deserializeAws_restJson1UpdateAdmChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateApnsChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateApnsChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        APNSChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.APNSChannelResponse = deserializeAws_restJson1APNSChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateApnsChannelCommand = deserializeAws_restJson1UpdateApnsChannelCommand;
const deserializeAws_restJson1UpdateApnsChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateApnsSandboxChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateApnsSandboxChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        APNSSandboxChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.APNSSandboxChannelResponse = deserializeAws_restJson1APNSSandboxChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateApnsSandboxChannelCommand = deserializeAws_restJson1UpdateApnsSandboxChannelCommand;
const deserializeAws_restJson1UpdateApnsSandboxChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateApnsVoipChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateApnsVoipChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        APNSVoipChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.APNSVoipChannelResponse = deserializeAws_restJson1APNSVoipChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateApnsVoipChannelCommand = deserializeAws_restJson1UpdateApnsVoipChannelCommand;
const deserializeAws_restJson1UpdateApnsVoipChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        APNSVoipSandboxChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.APNSVoipSandboxChannelResponse = deserializeAws_restJson1APNSVoipSandboxChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommand = deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommand;
const deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateApplicationSettingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateApplicationSettingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ApplicationSettingsResource: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.ApplicationSettingsResource = deserializeAws_restJson1ApplicationSettingsResource(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateApplicationSettingsCommand = deserializeAws_restJson1UpdateApplicationSettingsCommand;
const deserializeAws_restJson1UpdateApplicationSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateBaiduChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateBaiduChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BaiduChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.BaiduChannelResponse = deserializeAws_restJson1BaiduChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateBaiduChannelCommand = deserializeAws_restJson1UpdateBaiduChannelCommand;
const deserializeAws_restJson1UpdateBaiduChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateCampaignCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateCampaignCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CampaignResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateCampaignCommand = deserializeAws_restJson1UpdateCampaignCommand;
const deserializeAws_restJson1UpdateCampaignCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateEmailChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateEmailChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EmailChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.EmailChannelResponse = deserializeAws_restJson1EmailChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateEmailChannelCommand = deserializeAws_restJson1UpdateEmailChannelCommand;
const deserializeAws_restJson1UpdateEmailChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateEmailTemplateCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateEmailTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageBody: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateEmailTemplateCommand = deserializeAws_restJson1UpdateEmailTemplateCommand;
const deserializeAws_restJson1UpdateEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateEndpointCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateEndpointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageBody: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateEndpointCommand = deserializeAws_restJson1UpdateEndpointCommand;
const deserializeAws_restJson1UpdateEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateEndpointsBatchCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateEndpointsBatchCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageBody: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateEndpointsBatchCommand = deserializeAws_restJson1UpdateEndpointsBatchCommand;
const deserializeAws_restJson1UpdateEndpointsBatchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateGcmChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateGcmChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GCMChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.GCMChannelResponse = deserializeAws_restJson1GCMChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateGcmChannelCommand = deserializeAws_restJson1UpdateGcmChannelCommand;
const deserializeAws_restJson1UpdateGcmChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateJourneyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateJourneyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JourneyResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateJourneyCommand = deserializeAws_restJson1UpdateJourneyCommand;
const deserializeAws_restJson1UpdateJourneyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.pinpoint#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateJourneyStateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateJourneyStateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JourneyResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateJourneyStateCommand = deserializeAws_restJson1UpdateJourneyStateCommand;
const deserializeAws_restJson1UpdateJourneyStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdatePushTemplateCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdatePushTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageBody: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdatePushTemplateCommand = deserializeAws_restJson1UpdatePushTemplateCommand;
const deserializeAws_restJson1UpdatePushTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateRecommenderConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateRecommenderConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RecommenderConfigurationResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRecommenderConfigurationCommand = deserializeAws_restJson1UpdateRecommenderConfigurationCommand;
const deserializeAws_restJson1UpdateRecommenderConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateSegmentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateSegmentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SegmentResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateSegmentCommand = deserializeAws_restJson1UpdateSegmentCommand;
const deserializeAws_restJson1UpdateSegmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateSmsChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateSmsChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SMSChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.SMSChannelResponse = deserializeAws_restJson1SMSChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateSmsChannelCommand = deserializeAws_restJson1UpdateSmsChannelCommand;
const deserializeAws_restJson1UpdateSmsChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateSmsTemplateCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateSmsTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageBody: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateSmsTemplateCommand = deserializeAws_restJson1UpdateSmsTemplateCommand;
const deserializeAws_restJson1UpdateSmsTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateTemplateActiveVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateTemplateActiveVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageBody: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateTemplateActiveVersionCommand = deserializeAws_restJson1UpdateTemplateActiveVersionCommand;
const deserializeAws_restJson1UpdateTemplateActiveVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateVoiceChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateVoiceChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        VoiceChannelResponse: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.VoiceChannelResponse = deserializeAws_restJson1VoiceChannelResponse(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateVoiceChannelCommand = deserializeAws_restJson1UpdateVoiceChannelCommand;
const deserializeAws_restJson1UpdateVoiceChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateVoiceTemplateCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateVoiceTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MessageBody: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateVoiceTemplateCommand = deserializeAws_restJson1UpdateVoiceTemplateCommand;
const deserializeAws_restJson1UpdateVoiceTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.pinpoint#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.pinpoint#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.pinpoint#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MethodNotAllowedException":
        case "com.amazonaws.pinpoint#MethodNotAllowedException":
            response = {
                ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.pinpoint#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PayloadTooLargeException":
        case "com.amazonaws.pinpoint#PayloadTooLargeException":
            response = {
                ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.pinpoint#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestID: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestID !== undefined && data.RequestID !== null) {
        contents.RequestID = data.RequestID;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestID: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestID !== undefined && data.RequestID !== null) {
        contents.RequestID = data.RequestID;
    }
    return contents;
};
const deserializeAws_restJson1ForbiddenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ForbiddenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestID: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestID !== undefined && data.RequestID !== null) {
        contents.RequestID = data.RequestID;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestID: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestID !== undefined && data.RequestID !== null) {
        contents.RequestID = data.RequestID;
    }
    return contents;
};
const deserializeAws_restJson1MethodNotAllowedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "MethodNotAllowedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestID: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestID !== undefined && data.RequestID !== null) {
        contents.RequestID = data.RequestID;
    }
    return contents;
};
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestID: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestID !== undefined && data.RequestID !== null) {
        contents.RequestID = data.RequestID;
    }
    return contents;
};
const deserializeAws_restJson1PayloadTooLargeExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PayloadTooLargeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestID: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestID !== undefined && data.RequestID !== null) {
        contents.RequestID = data.RequestID;
    }
    return contents;
};
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestID: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestID !== undefined && data.RequestID !== null) {
        contents.RequestID = data.RequestID;
    }
    return contents;
};
const serializeAws_restJson1Activity = (input, context) => {
    return {
        ...(input.CUSTOM !== undefined &&
            input.CUSTOM !== null && { CUSTOM: serializeAws_restJson1CustomMessageActivity(input.CUSTOM, context) }),
        ...(input.ConditionalSplit !== undefined &&
            input.ConditionalSplit !== null && {
            ConditionalSplit: serializeAws_restJson1ConditionalSplitActivity(input.ConditionalSplit, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.EMAIL !== undefined &&
            input.EMAIL !== null && { EMAIL: serializeAws_restJson1EmailMessageActivity(input.EMAIL, context) }),
        ...(input.Holdout !== undefined &&
            input.Holdout !== null && { Holdout: serializeAws_restJson1HoldoutActivity(input.Holdout, context) }),
        ...(input.MultiCondition !== undefined &&
            input.MultiCondition !== null && {
            MultiCondition: serializeAws_restJson1MultiConditionalSplitActivity(input.MultiCondition, context),
        }),
        ...(input.PUSH !== undefined &&
            input.PUSH !== null && { PUSH: serializeAws_restJson1PushMessageActivity(input.PUSH, context) }),
        ...(input.RandomSplit !== undefined &&
            input.RandomSplit !== null && {
            RandomSplit: serializeAws_restJson1RandomSplitActivity(input.RandomSplit, context),
        }),
        ...(input.SMS !== undefined &&
            input.SMS !== null && { SMS: serializeAws_restJson1SMSMessageActivity(input.SMS, context) }),
        ...(input.Wait !== undefined &&
            input.Wait !== null && { Wait: serializeAws_restJson1WaitActivity(input.Wait, context) }),
    };
};
const serializeAws_restJson1AddressConfiguration = (input, context) => {
    return {
        ...(input.BodyOverride !== undefined && input.BodyOverride !== null && { BodyOverride: input.BodyOverride }),
        ...(input.ChannelType !== undefined && input.ChannelType !== null && { ChannelType: input.ChannelType }),
        ...(input.Context !== undefined &&
            input.Context !== null && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
        ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
        ...(input.Substitutions !== undefined &&
            input.Substitutions !== null && {
            Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
        }),
        ...(input.TitleOverride !== undefined && input.TitleOverride !== null && { TitleOverride: input.TitleOverride }),
    };
};
const serializeAws_restJson1ADMChannelRequest = (input, context) => {
    return {
        ...(input.ClientId !== undefined && input.ClientId !== null && { ClientId: input.ClientId }),
        ...(input.ClientSecret !== undefined && input.ClientSecret !== null && { ClientSecret: input.ClientSecret }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    };
};
const serializeAws_restJson1ADMMessage = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.ConsolidationKey !== undefined &&
            input.ConsolidationKey !== null && { ConsolidationKey: input.ConsolidationKey }),
        ...(input.Data !== undefined &&
            input.Data !== null && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
        ...(input.ExpiresAfter !== undefined && input.ExpiresAfter !== null && { ExpiresAfter: input.ExpiresAfter }),
        ...(input.IconReference !== undefined && input.IconReference !== null && { IconReference: input.IconReference }),
        ...(input.ImageIconUrl !== undefined && input.ImageIconUrl !== null && { ImageIconUrl: input.ImageIconUrl }),
        ...(input.ImageUrl !== undefined && input.ImageUrl !== null && { ImageUrl: input.ImageUrl }),
        ...(input.MD5 !== undefined && input.MD5 !== null && { MD5: input.MD5 }),
        ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
        ...(input.SilentPush !== undefined && input.SilentPush !== null && { SilentPush: input.SilentPush }),
        ...(input.SmallImageIconUrl !== undefined &&
            input.SmallImageIconUrl !== null && { SmallImageIconUrl: input.SmallImageIconUrl }),
        ...(input.Sound !== undefined && input.Sound !== null && { Sound: input.Sound }),
        ...(input.Substitutions !== undefined &&
            input.Substitutions !== null && {
            Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
        }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
        ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
    };
};
const serializeAws_restJson1AndroidPushNotificationTemplate = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.ImageIconUrl !== undefined && input.ImageIconUrl !== null && { ImageIconUrl: input.ImageIconUrl }),
        ...(input.ImageUrl !== undefined && input.ImageUrl !== null && { ImageUrl: input.ImageUrl }),
        ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
        ...(input.SmallImageIconUrl !== undefined &&
            input.SmallImageIconUrl !== null && { SmallImageIconUrl: input.SmallImageIconUrl }),
        ...(input.Sound !== undefined && input.Sound !== null && { Sound: input.Sound }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
        ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
    };
};
const serializeAws_restJson1APNSChannelRequest = (input, context) => {
    return {
        ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
        ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
        ...(input.DefaultAuthenticationMethod !== undefined &&
            input.DefaultAuthenticationMethod !== null && { DefaultAuthenticationMethod: input.DefaultAuthenticationMethod }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.PrivateKey !== undefined && input.PrivateKey !== null && { PrivateKey: input.PrivateKey }),
        ...(input.TeamId !== undefined && input.TeamId !== null && { TeamId: input.TeamId }),
        ...(input.TokenKey !== undefined && input.TokenKey !== null && { TokenKey: input.TokenKey }),
        ...(input.TokenKeyId !== undefined && input.TokenKeyId !== null && { TokenKeyId: input.TokenKeyId }),
    };
};
const serializeAws_restJson1APNSMessage = (input, context) => {
    return {
        ...(input.APNSPushType !== undefined && input.APNSPushType !== null && { APNSPushType: input.APNSPushType }),
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.Badge !== undefined && input.Badge !== null && { Badge: input.Badge }),
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.Category !== undefined && input.Category !== null && { Category: input.Category }),
        ...(input.CollapseId !== undefined && input.CollapseId !== null && { CollapseId: input.CollapseId }),
        ...(input.Data !== undefined &&
            input.Data !== null && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
        ...(input.MediaUrl !== undefined && input.MediaUrl !== null && { MediaUrl: input.MediaUrl }),
        ...(input.PreferredAuthenticationMethod !== undefined &&
            input.PreferredAuthenticationMethod !== null && {
            PreferredAuthenticationMethod: input.PreferredAuthenticationMethod,
        }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
        ...(input.SilentPush !== undefined && input.SilentPush !== null && { SilentPush: input.SilentPush }),
        ...(input.Sound !== undefined && input.Sound !== null && { Sound: input.Sound }),
        ...(input.Substitutions !== undefined &&
            input.Substitutions !== null && {
            Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
        }),
        ...(input.ThreadId !== undefined && input.ThreadId !== null && { ThreadId: input.ThreadId }),
        ...(input.TimeToLive !== undefined && input.TimeToLive !== null && { TimeToLive: input.TimeToLive }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
        ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
    };
};
const serializeAws_restJson1APNSPushNotificationTemplate = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.MediaUrl !== undefined && input.MediaUrl !== null && { MediaUrl: input.MediaUrl }),
        ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
        ...(input.Sound !== undefined && input.Sound !== null && { Sound: input.Sound }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
        ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
    };
};
const serializeAws_restJson1APNSSandboxChannelRequest = (input, context) => {
    return {
        ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
        ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
        ...(input.DefaultAuthenticationMethod !== undefined &&
            input.DefaultAuthenticationMethod !== null && { DefaultAuthenticationMethod: input.DefaultAuthenticationMethod }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.PrivateKey !== undefined && input.PrivateKey !== null && { PrivateKey: input.PrivateKey }),
        ...(input.TeamId !== undefined && input.TeamId !== null && { TeamId: input.TeamId }),
        ...(input.TokenKey !== undefined && input.TokenKey !== null && { TokenKey: input.TokenKey }),
        ...(input.TokenKeyId !== undefined && input.TokenKeyId !== null && { TokenKeyId: input.TokenKeyId }),
    };
};
const serializeAws_restJson1APNSVoipChannelRequest = (input, context) => {
    return {
        ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
        ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
        ...(input.DefaultAuthenticationMethod !== undefined &&
            input.DefaultAuthenticationMethod !== null && { DefaultAuthenticationMethod: input.DefaultAuthenticationMethod }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.PrivateKey !== undefined && input.PrivateKey !== null && { PrivateKey: input.PrivateKey }),
        ...(input.TeamId !== undefined && input.TeamId !== null && { TeamId: input.TeamId }),
        ...(input.TokenKey !== undefined && input.TokenKey !== null && { TokenKey: input.TokenKey }),
        ...(input.TokenKeyId !== undefined && input.TokenKeyId !== null && { TokenKeyId: input.TokenKeyId }),
    };
};
const serializeAws_restJson1APNSVoipSandboxChannelRequest = (input, context) => {
    return {
        ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
        ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
        ...(input.DefaultAuthenticationMethod !== undefined &&
            input.DefaultAuthenticationMethod !== null && { DefaultAuthenticationMethod: input.DefaultAuthenticationMethod }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.PrivateKey !== undefined && input.PrivateKey !== null && { PrivateKey: input.PrivateKey }),
        ...(input.TeamId !== undefined && input.TeamId !== null && { TeamId: input.TeamId }),
        ...(input.TokenKey !== undefined && input.TokenKey !== null && { TokenKey: input.TokenKey }),
        ...(input.TokenKeyId !== undefined && input.TokenKeyId !== null && { TokenKeyId: input.TokenKeyId }),
    };
};
const serializeAws_restJson1AttributeDimension = (input, context) => {
    return {
        ...(input.AttributeType !== undefined && input.AttributeType !== null && { AttributeType: input.AttributeType }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_restJson1ListOf__string(input.Values, context) }),
    };
};
const serializeAws_restJson1BaiduChannelRequest = (input, context) => {
    return {
        ...(input.ApiKey !== undefined && input.ApiKey !== null && { ApiKey: input.ApiKey }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.SecretKey !== undefined && input.SecretKey !== null && { SecretKey: input.SecretKey }),
    };
};
const serializeAws_restJson1BaiduMessage = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.Data !== undefined &&
            input.Data !== null && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
        ...(input.IconReference !== undefined && input.IconReference !== null && { IconReference: input.IconReference }),
        ...(input.ImageIconUrl !== undefined && input.ImageIconUrl !== null && { ImageIconUrl: input.ImageIconUrl }),
        ...(input.ImageUrl !== undefined && input.ImageUrl !== null && { ImageUrl: input.ImageUrl }),
        ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
        ...(input.SilentPush !== undefined && input.SilentPush !== null && { SilentPush: input.SilentPush }),
        ...(input.SmallImageIconUrl !== undefined &&
            input.SmallImageIconUrl !== null && { SmallImageIconUrl: input.SmallImageIconUrl }),
        ...(input.Sound !== undefined && input.Sound !== null && { Sound: input.Sound }),
        ...(input.Substitutions !== undefined &&
            input.Substitutions !== null && {
            Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
        }),
        ...(input.TimeToLive !== undefined && input.TimeToLive !== null && { TimeToLive: input.TimeToLive }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
        ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
    };
};
const serializeAws_restJson1CampaignCustomMessage = (input, context) => {
    return {
        ...(input.Data !== undefined && input.Data !== null && { Data: input.Data }),
    };
};
const serializeAws_restJson1CampaignEmailMessage = (input, context) => {
    return {
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.FromAddress !== undefined && input.FromAddress !== null && { FromAddress: input.FromAddress }),
        ...(input.HtmlBody !== undefined && input.HtmlBody !== null && { HtmlBody: input.HtmlBody }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
    };
};
const serializeAws_restJson1CampaignEventFilter = (input, context) => {
    return {
        ...(input.Dimensions !== undefined &&
            input.Dimensions !== null && { Dimensions: serializeAws_restJson1EventDimensions(input.Dimensions, context) }),
        ...(input.FilterType !== undefined && input.FilterType !== null && { FilterType: input.FilterType }),
    };
};
const serializeAws_restJson1CampaignHook = (input, context) => {
    return {
        ...(input.LambdaFunctionName !== undefined &&
            input.LambdaFunctionName !== null && { LambdaFunctionName: input.LambdaFunctionName }),
        ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
        ...(input.WebUrl !== undefined && input.WebUrl !== null && { WebUrl: input.WebUrl }),
    };
};
const serializeAws_restJson1CampaignLimits = (input, context) => {
    return {
        ...(input.Daily !== undefined && input.Daily !== null && { Daily: input.Daily }),
        ...(input.MaximumDuration !== undefined &&
            input.MaximumDuration !== null && { MaximumDuration: input.MaximumDuration }),
        ...(input.MessagesPerSecond !== undefined &&
            input.MessagesPerSecond !== null && { MessagesPerSecond: input.MessagesPerSecond }),
        ...(input.Total !== undefined && input.Total !== null && { Total: input.Total }),
    };
};
const serializeAws_restJson1CampaignSmsMessage = (input, context) => {
    return {
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType }),
        ...(input.OriginationNumber !== undefined &&
            input.OriginationNumber !== null && { OriginationNumber: input.OriginationNumber }),
        ...(input.SenderId !== undefined && input.SenderId !== null && { SenderId: input.SenderId }),
        ...(input.TemplateId !== undefined && input.TemplateId !== null && { TemplateId: input.TemplateId }),
    };
};
const serializeAws_restJson1Condition = (input, context) => {
    return {
        ...(input.Conditions !== undefined &&
            input.Conditions !== null && {
            Conditions: serializeAws_restJson1ListOfSimpleCondition(input.Conditions, context),
        }),
        ...(input.Operator !== undefined && input.Operator !== null && { Operator: input.Operator }),
    };
};
const serializeAws_restJson1ConditionalSplitActivity = (input, context) => {
    return {
        ...(input.Condition !== undefined &&
            input.Condition !== null && { Condition: serializeAws_restJson1Condition(input.Condition, context) }),
        ...(input.EvaluationWaitTime !== undefined &&
            input.EvaluationWaitTime !== null && {
            EvaluationWaitTime: serializeAws_restJson1WaitTime(input.EvaluationWaitTime, context),
        }),
        ...(input.FalseActivity !== undefined && input.FalseActivity !== null && { FalseActivity: input.FalseActivity }),
        ...(input.TrueActivity !== undefined && input.TrueActivity !== null && { TrueActivity: input.TrueActivity }),
    };
};
const serializeAws_restJson1CreateApplicationRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
    };
};
const serializeAws_restJson1CreateRecommenderConfigurationShape = (input, context) => {
    return {
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_restJson1MapOf__string(input.Attributes, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RecommendationProviderIdType !== undefined &&
            input.RecommendationProviderIdType !== null && {
            RecommendationProviderIdType: input.RecommendationProviderIdType,
        }),
        ...(input.RecommendationProviderRoleArn !== undefined &&
            input.RecommendationProviderRoleArn !== null && {
            RecommendationProviderRoleArn: input.RecommendationProviderRoleArn,
        }),
        ...(input.RecommendationProviderUri !== undefined &&
            input.RecommendationProviderUri !== null && { RecommendationProviderUri: input.RecommendationProviderUri }),
        ...(input.RecommendationTransformerUri !== undefined &&
            input.RecommendationTransformerUri !== null && {
            RecommendationTransformerUri: input.RecommendationTransformerUri,
        }),
        ...(input.RecommendationsDisplayName !== undefined &&
            input.RecommendationsDisplayName !== null && { RecommendationsDisplayName: input.RecommendationsDisplayName }),
        ...(input.RecommendationsPerMessage !== undefined &&
            input.RecommendationsPerMessage !== null && { RecommendationsPerMessage: input.RecommendationsPerMessage }),
    };
};
const serializeAws_restJson1CustomDeliveryConfiguration = (input, context) => {
    return {
        ...(input.DeliveryUri !== undefined && input.DeliveryUri !== null && { DeliveryUri: input.DeliveryUri }),
        ...(input.EndpointTypes !== undefined &&
            input.EndpointTypes !== null && {
            EndpointTypes: serializeAws_restJson1ListOf__EndpointTypesElement(input.EndpointTypes, context),
        }),
    };
};
const serializeAws_restJson1CustomMessageActivity = (input, context) => {
    return {
        ...(input.DeliveryUri !== undefined && input.DeliveryUri !== null && { DeliveryUri: input.DeliveryUri }),
        ...(input.EndpointTypes !== undefined &&
            input.EndpointTypes !== null && {
            EndpointTypes: serializeAws_restJson1ListOf__EndpointTypesElement(input.EndpointTypes, context),
        }),
        ...(input.MessageConfig !== undefined &&
            input.MessageConfig !== null && {
            MessageConfig: serializeAws_restJson1JourneyCustomMessage(input.MessageConfig, context),
        }),
        ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
        ...(input.TemplateName !== undefined && input.TemplateName !== null && { TemplateName: input.TemplateName }),
        ...(input.TemplateVersion !== undefined &&
            input.TemplateVersion !== null && { TemplateVersion: input.TemplateVersion }),
    };
};
const serializeAws_restJson1DefaultMessage = (input, context) => {
    return {
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.Substitutions !== undefined &&
            input.Substitutions !== null && {
            Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
        }),
    };
};
const serializeAws_restJson1DefaultPushNotificationMessage = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.Data !== undefined &&
            input.Data !== null && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
        ...(input.SilentPush !== undefined && input.SilentPush !== null && { SilentPush: input.SilentPush }),
        ...(input.Substitutions !== undefined &&
            input.Substitutions !== null && {
            Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
        }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
        ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
    };
};
const serializeAws_restJson1DefaultPushNotificationTemplate = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.Sound !== undefined && input.Sound !== null && { Sound: input.Sound }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
        ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
    };
};
const serializeAws_restJson1DirectMessageConfiguration = (input, context) => {
    return {
        ...(input.ADMMessage !== undefined &&
            input.ADMMessage !== null && { ADMMessage: serializeAws_restJson1ADMMessage(input.ADMMessage, context) }),
        ...(input.APNSMessage !== undefined &&
            input.APNSMessage !== null && { APNSMessage: serializeAws_restJson1APNSMessage(input.APNSMessage, context) }),
        ...(input.BaiduMessage !== undefined &&
            input.BaiduMessage !== null && { BaiduMessage: serializeAws_restJson1BaiduMessage(input.BaiduMessage, context) }),
        ...(input.DefaultMessage !== undefined &&
            input.DefaultMessage !== null && {
            DefaultMessage: serializeAws_restJson1DefaultMessage(input.DefaultMessage, context),
        }),
        ...(input.DefaultPushNotificationMessage !== undefined &&
            input.DefaultPushNotificationMessage !== null && {
            DefaultPushNotificationMessage: serializeAws_restJson1DefaultPushNotificationMessage(input.DefaultPushNotificationMessage, context),
        }),
        ...(input.EmailMessage !== undefined &&
            input.EmailMessage !== null && { EmailMessage: serializeAws_restJson1EmailMessage(input.EmailMessage, context) }),
        ...(input.GCMMessage !== undefined &&
            input.GCMMessage !== null && { GCMMessage: serializeAws_restJson1GCMMessage(input.GCMMessage, context) }),
        ...(input.SMSMessage !== undefined &&
            input.SMSMessage !== null && { SMSMessage: serializeAws_restJson1SMSMessage(input.SMSMessage, context) }),
        ...(input.VoiceMessage !== undefined &&
            input.VoiceMessage !== null && { VoiceMessage: serializeAws_restJson1VoiceMessage(input.VoiceMessage, context) }),
    };
};
const serializeAws_restJson1EmailChannelRequest = (input, context) => {
    return {
        ...(input.ConfigurationSet !== undefined &&
            input.ConfigurationSet !== null && { ConfigurationSet: input.ConfigurationSet }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.FromAddress !== undefined && input.FromAddress !== null && { FromAddress: input.FromAddress }),
        ...(input.Identity !== undefined && input.Identity !== null && { Identity: input.Identity }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const serializeAws_restJson1EmailMessage = (input, context) => {
    return {
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.FeedbackForwardingAddress !== undefined &&
            input.FeedbackForwardingAddress !== null && { FeedbackForwardingAddress: input.FeedbackForwardingAddress }),
        ...(input.FromAddress !== undefined && input.FromAddress !== null && { FromAddress: input.FromAddress }),
        ...(input.RawEmail !== undefined &&
            input.RawEmail !== null && { RawEmail: serializeAws_restJson1RawEmail(input.RawEmail, context) }),
        ...(input.ReplyToAddresses !== undefined &&
            input.ReplyToAddresses !== null && {
            ReplyToAddresses: serializeAws_restJson1ListOf__string(input.ReplyToAddresses, context),
        }),
        ...(input.SimpleEmail !== undefined &&
            input.SimpleEmail !== null && { SimpleEmail: serializeAws_restJson1SimpleEmail(input.SimpleEmail, context) }),
        ...(input.Substitutions !== undefined &&
            input.Substitutions !== null && {
            Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
        }),
    };
};
const serializeAws_restJson1EmailMessageActivity = (input, context) => {
    return {
        ...(input.MessageConfig !== undefined &&
            input.MessageConfig !== null && {
            MessageConfig: serializeAws_restJson1JourneyEmailMessage(input.MessageConfig, context),
        }),
        ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
        ...(input.TemplateName !== undefined && input.TemplateName !== null && { TemplateName: input.TemplateName }),
        ...(input.TemplateVersion !== undefined &&
            input.TemplateVersion !== null && { TemplateVersion: input.TemplateVersion }),
    };
};
const serializeAws_restJson1EmailTemplateRequest = (input, context) => {
    return {
        ...(input.DefaultSubstitutions !== undefined &&
            input.DefaultSubstitutions !== null && { DefaultSubstitutions: input.DefaultSubstitutions }),
        ...(input.HtmlPart !== undefined && input.HtmlPart !== null && { HtmlPart: input.HtmlPart }),
        ...(input.RecommenderId !== undefined && input.RecommenderId !== null && { RecommenderId: input.RecommenderId }),
        ...(input.Subject !== undefined && input.Subject !== null && { Subject: input.Subject }),
        ...(input.TemplateDescription !== undefined &&
            input.TemplateDescription !== null && { TemplateDescription: input.TemplateDescription }),
        ...(input.TextPart !== undefined && input.TextPart !== null && { TextPart: input.TextPart }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
    };
};
const serializeAws_restJson1EndpointBatchItem = (input, context) => {
    return {
        ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && {
            Attributes: serializeAws_restJson1MapOfListOf__string(input.Attributes, context),
        }),
        ...(input.ChannelType !== undefined && input.ChannelType !== null && { ChannelType: input.ChannelType }),
        ...(input.Demographic !== undefined &&
            input.Demographic !== null && {
            Demographic: serializeAws_restJson1EndpointDemographic(input.Demographic, context),
        }),
        ...(input.EffectiveDate !== undefined && input.EffectiveDate !== null && { EffectiveDate: input.EffectiveDate }),
        ...(input.EndpointStatus !== undefined &&
            input.EndpointStatus !== null && { EndpointStatus: input.EndpointStatus }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Location !== undefined &&
            input.Location !== null && { Location: serializeAws_restJson1EndpointLocation(input.Location, context) }),
        ...(input.Metrics !== undefined &&
            input.Metrics !== null && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
        ...(input.OptOut !== undefined && input.OptOut !== null && { OptOut: input.OptOut }),
        ...(input.RequestId !== undefined && input.RequestId !== null && { RequestId: input.RequestId }),
        ...(input.User !== undefined &&
            input.User !== null && { User: serializeAws_restJson1EndpointUser(input.User, context) }),
    };
};
const serializeAws_restJson1EndpointBatchRequest = (input, context) => {
    return {
        ...(input.Item !== undefined &&
            input.Item !== null && { Item: serializeAws_restJson1ListOfEndpointBatchItem(input.Item, context) }),
    };
};
const serializeAws_restJson1EndpointDemographic = (input, context) => {
    return {
        ...(input.AppVersion !== undefined && input.AppVersion !== null && { AppVersion: input.AppVersion }),
        ...(input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
        ...(input.Make !== undefined && input.Make !== null && { Make: input.Make }),
        ...(input.Model !== undefined && input.Model !== null && { Model: input.Model }),
        ...(input.ModelVersion !== undefined && input.ModelVersion !== null && { ModelVersion: input.ModelVersion }),
        ...(input.Platform !== undefined && input.Platform !== null && { Platform: input.Platform }),
        ...(input.PlatformVersion !== undefined &&
            input.PlatformVersion !== null && { PlatformVersion: input.PlatformVersion }),
        ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
    };
};
const serializeAws_restJson1EndpointLocation = (input, context) => {
    return {
        ...(input.City !== undefined && input.City !== null && { City: input.City }),
        ...(input.Country !== undefined && input.Country !== null && { Country: input.Country }),
        ...(input.Latitude !== undefined && input.Latitude !== null && { Latitude: input.Latitude }),
        ...(input.Longitude !== undefined && input.Longitude !== null && { Longitude: input.Longitude }),
        ...(input.PostalCode !== undefined && input.PostalCode !== null && { PostalCode: input.PostalCode }),
        ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
    };
};
const serializeAws_restJson1EndpointRequest = (input, context) => {
    return {
        ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && {
            Attributes: serializeAws_restJson1MapOfListOf__string(input.Attributes, context),
        }),
        ...(input.ChannelType !== undefined && input.ChannelType !== null && { ChannelType: input.ChannelType }),
        ...(input.Demographic !== undefined &&
            input.Demographic !== null && {
            Demographic: serializeAws_restJson1EndpointDemographic(input.Demographic, context),
        }),
        ...(input.EffectiveDate !== undefined && input.EffectiveDate !== null && { EffectiveDate: input.EffectiveDate }),
        ...(input.EndpointStatus !== undefined &&
            input.EndpointStatus !== null && { EndpointStatus: input.EndpointStatus }),
        ...(input.Location !== undefined &&
            input.Location !== null && { Location: serializeAws_restJson1EndpointLocation(input.Location, context) }),
        ...(input.Metrics !== undefined &&
            input.Metrics !== null && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
        ...(input.OptOut !== undefined && input.OptOut !== null && { OptOut: input.OptOut }),
        ...(input.RequestId !== undefined && input.RequestId !== null && { RequestId: input.RequestId }),
        ...(input.User !== undefined &&
            input.User !== null && { User: serializeAws_restJson1EndpointUser(input.User, context) }),
    };
};
const serializeAws_restJson1EndpointSendConfiguration = (input, context) => {
    return {
        ...(input.BodyOverride !== undefined && input.BodyOverride !== null && { BodyOverride: input.BodyOverride }),
        ...(input.Context !== undefined &&
            input.Context !== null && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
        ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
        ...(input.Substitutions !== undefined &&
            input.Substitutions !== null && {
            Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
        }),
        ...(input.TitleOverride !== undefined && input.TitleOverride !== null && { TitleOverride: input.TitleOverride }),
    };
};
const serializeAws_restJson1EndpointUser = (input, context) => {
    return {
        ...(input.UserAttributes !== undefined &&
            input.UserAttributes !== null && {
            UserAttributes: serializeAws_restJson1MapOfListOf__string(input.UserAttributes, context),
        }),
        ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
    };
};
const serializeAws_restJson1Event = (input, context) => {
    return {
        ...(input.AppPackageName !== undefined &&
            input.AppPackageName !== null && { AppPackageName: input.AppPackageName }),
        ...(input.AppTitle !== undefined && input.AppTitle !== null && { AppTitle: input.AppTitle }),
        ...(input.AppVersionCode !== undefined &&
            input.AppVersionCode !== null && { AppVersionCode: input.AppVersionCode }),
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_restJson1MapOf__string(input.Attributes, context) }),
        ...(input.ClientSdkVersion !== undefined &&
            input.ClientSdkVersion !== null && { ClientSdkVersion: input.ClientSdkVersion }),
        ...(input.EventType !== undefined && input.EventType !== null && { EventType: input.EventType }),
        ...(input.Metrics !== undefined &&
            input.Metrics !== null && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
        ...(input.SdkName !== undefined && input.SdkName !== null && { SdkName: input.SdkName }),
        ...(input.Session !== undefined &&
            input.Session !== null && { Session: serializeAws_restJson1Session(input.Session, context) }),
        ...(input.Timestamp !== undefined && input.Timestamp !== null && { Timestamp: input.Timestamp }),
    };
};
const serializeAws_restJson1EventCondition = (input, context) => {
    return {
        ...(input.Dimensions !== undefined &&
            input.Dimensions !== null && { Dimensions: serializeAws_restJson1EventDimensions(input.Dimensions, context) }),
        ...(input.MessageActivity !== undefined &&
            input.MessageActivity !== null && { MessageActivity: input.MessageActivity }),
    };
};
const serializeAws_restJson1EventDimensions = (input, context) => {
    return {
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && {
            Attributes: serializeAws_restJson1MapOfAttributeDimension(input.Attributes, context),
        }),
        ...(input.EventType !== undefined &&
            input.EventType !== null && { EventType: serializeAws_restJson1SetDimension(input.EventType, context) }),
        ...(input.Metrics !== undefined &&
            input.Metrics !== null && { Metrics: serializeAws_restJson1MapOfMetricDimension(input.Metrics, context) }),
    };
};
const serializeAws_restJson1EventFilter = (input, context) => {
    return {
        ...(input.Dimensions !== undefined &&
            input.Dimensions !== null && { Dimensions: serializeAws_restJson1EventDimensions(input.Dimensions, context) }),
        ...(input.FilterType !== undefined && input.FilterType !== null && { FilterType: input.FilterType }),
    };
};
const serializeAws_restJson1EventsBatch = (input, context) => {
    return {
        ...(input.Endpoint !== undefined &&
            input.Endpoint !== null && { Endpoint: serializeAws_restJson1PublicEndpoint(input.Endpoint, context) }),
        ...(input.Events !== undefined &&
            input.Events !== null && { Events: serializeAws_restJson1MapOfEvent(input.Events, context) }),
    };
};
const serializeAws_restJson1EventsRequest = (input, context) => {
    return {
        ...(input.BatchItem !== undefined &&
            input.BatchItem !== null && { BatchItem: serializeAws_restJson1MapOfEventsBatch(input.BatchItem, context) }),
    };
};
const serializeAws_restJson1EventStartCondition = (input, context) => {
    return {
        ...(input.EventFilter !== undefined &&
            input.EventFilter !== null && { EventFilter: serializeAws_restJson1EventFilter(input.EventFilter, context) }),
        ...(input.SegmentId !== undefined && input.SegmentId !== null && { SegmentId: input.SegmentId }),
    };
};
const serializeAws_restJson1ExportJobRequest = (input, context) => {
    return {
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.S3UrlPrefix !== undefined && input.S3UrlPrefix !== null && { S3UrlPrefix: input.S3UrlPrefix }),
        ...(input.SegmentId !== undefined && input.SegmentId !== null && { SegmentId: input.SegmentId }),
        ...(input.SegmentVersion !== undefined &&
            input.SegmentVersion !== null && { SegmentVersion: input.SegmentVersion }),
    };
};
const serializeAws_restJson1GCMChannelRequest = (input, context) => {
    return {
        ...(input.ApiKey !== undefined && input.ApiKey !== null && { ApiKey: input.ApiKey }),
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    };
};
const serializeAws_restJson1GCMMessage = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.CollapseKey !== undefined && input.CollapseKey !== null && { CollapseKey: input.CollapseKey }),
        ...(input.Data !== undefined &&
            input.Data !== null && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
        ...(input.IconReference !== undefined && input.IconReference !== null && { IconReference: input.IconReference }),
        ...(input.ImageIconUrl !== undefined && input.ImageIconUrl !== null && { ImageIconUrl: input.ImageIconUrl }),
        ...(input.ImageUrl !== undefined && input.ImageUrl !== null && { ImageUrl: input.ImageUrl }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
        ...(input.RestrictedPackageName !== undefined &&
            input.RestrictedPackageName !== null && { RestrictedPackageName: input.RestrictedPackageName }),
        ...(input.SilentPush !== undefined && input.SilentPush !== null && { SilentPush: input.SilentPush }),
        ...(input.SmallImageIconUrl !== undefined &&
            input.SmallImageIconUrl !== null && { SmallImageIconUrl: input.SmallImageIconUrl }),
        ...(input.Sound !== undefined && input.Sound !== null && { Sound: input.Sound }),
        ...(input.Substitutions !== undefined &&
            input.Substitutions !== null && {
            Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
        }),
        ...(input.TimeToLive !== undefined && input.TimeToLive !== null && { TimeToLive: input.TimeToLive }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
        ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
    };
};
const serializeAws_restJson1GPSCoordinates = (input, context) => {
    return {
        ...(input.Latitude !== undefined && input.Latitude !== null && { Latitude: input.Latitude }),
        ...(input.Longitude !== undefined && input.Longitude !== null && { Longitude: input.Longitude }),
    };
};
const serializeAws_restJson1GPSPointDimension = (input, context) => {
    return {
        ...(input.Coordinates !== undefined &&
            input.Coordinates !== null && { Coordinates: serializeAws_restJson1GPSCoordinates(input.Coordinates, context) }),
        ...(input.RangeInKilometers !== undefined &&
            input.RangeInKilometers !== null && { RangeInKilometers: input.RangeInKilometers }),
    };
};
const serializeAws_restJson1HoldoutActivity = (input, context) => {
    return {
        ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
        ...(input.Percentage !== undefined && input.Percentage !== null && { Percentage: input.Percentage }),
    };
};
const serializeAws_restJson1ImportJobRequest = (input, context) => {
    return {
        ...(input.DefineSegment !== undefined && input.DefineSegment !== null && { DefineSegment: input.DefineSegment }),
        ...(input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId }),
        ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
        ...(input.RegisterEndpoints !== undefined &&
            input.RegisterEndpoints !== null && { RegisterEndpoints: input.RegisterEndpoints }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.S3Url !== undefined && input.S3Url !== null && { S3Url: input.S3Url }),
        ...(input.SegmentId !== undefined && input.SegmentId !== null && { SegmentId: input.SegmentId }),
        ...(input.SegmentName !== undefined && input.SegmentName !== null && { SegmentName: input.SegmentName }),
    };
};
const serializeAws_restJson1JourneyCustomMessage = (input, context) => {
    return {
        ...(input.Data !== undefined && input.Data !== null && { Data: input.Data }),
    };
};
const serializeAws_restJson1JourneyEmailMessage = (input, context) => {
    return {
        ...(input.FromAddress !== undefined && input.FromAddress !== null && { FromAddress: input.FromAddress }),
    };
};
const serializeAws_restJson1JourneyLimits = (input, context) => {
    return {
        ...(input.DailyCap !== undefined && input.DailyCap !== null && { DailyCap: input.DailyCap }),
        ...(input.EndpointReentryCap !== undefined &&
            input.EndpointReentryCap !== null && { EndpointReentryCap: input.EndpointReentryCap }),
        ...(input.EndpointReentryInterval !== undefined &&
            input.EndpointReentryInterval !== null && { EndpointReentryInterval: input.EndpointReentryInterval }),
        ...(input.MessagesPerSecond !== undefined &&
            input.MessagesPerSecond !== null && { MessagesPerSecond: input.MessagesPerSecond }),
    };
};
const serializeAws_restJson1JourneyPushMessage = (input, context) => {
    return {
        ...(input.TimeToLive !== undefined && input.TimeToLive !== null && { TimeToLive: input.TimeToLive }),
    };
};
const serializeAws_restJson1JourneySchedule = (input, context) => {
    return {
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: input.EndTime.toISOString().split(".")[0] + "Z" }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: input.StartTime.toISOString().split(".")[0] + "Z" }),
        ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
    };
};
const serializeAws_restJson1JourneySMSMessage = (input, context) => {
    return {
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType }),
        ...(input.OriginationNumber !== undefined &&
            input.OriginationNumber !== null && { OriginationNumber: input.OriginationNumber }),
        ...(input.SenderId !== undefined && input.SenderId !== null && { SenderId: input.SenderId }),
        ...(input.TemplateId !== undefined && input.TemplateId !== null && { TemplateId: input.TemplateId }),
    };
};
const serializeAws_restJson1JourneyStateRequest = (input, context) => {
    return {
        ...(input.State !== undefined && input.State !== null && { State: input.State }),
    };
};
const serializeAws_restJson1ListOf__EndpointTypesElement = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ListOf__string = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ListOfEndpointBatchItem = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1EndpointBatchItem(entry, context);
    });
};
const serializeAws_restJson1ListOfMultiConditionalBranch = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MultiConditionalBranch(entry, context);
    });
};
const serializeAws_restJson1ListOfRandomSplitEntry = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RandomSplitEntry(entry, context);
    });
};
const serializeAws_restJson1ListOfSegmentDimensions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SegmentDimensions(entry, context);
    });
};
const serializeAws_restJson1ListOfSegmentGroup = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SegmentGroup(entry, context);
    });
};
const serializeAws_restJson1ListOfSegmentReference = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SegmentReference(entry, context);
    });
};
const serializeAws_restJson1ListOfSimpleCondition = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SimpleCondition(entry, context);
    });
};
const serializeAws_restJson1ListOfWriteTreatmentResource = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1WriteTreatmentResource(entry, context);
    });
};
const serializeAws_restJson1MapOf__double = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1MapOf__string = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1MapOfActivity = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1Activity(value, context),
        };
    }, {});
};
const serializeAws_restJson1MapOfAddressConfiguration = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1AddressConfiguration(value, context),
        };
    }, {});
};
const serializeAws_restJson1MapOfAttributeDimension = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1AttributeDimension(value, context),
        };
    }, {});
};
const serializeAws_restJson1MapOfEndpointSendConfiguration = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1EndpointSendConfiguration(value, context),
        };
    }, {});
};
const serializeAws_restJson1MapOfEvent = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1Event(value, context),
        };
    }, {});
};
const serializeAws_restJson1MapOfEventsBatch = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1EventsBatch(value, context),
        };
    }, {});
};
const serializeAws_restJson1MapOfListOf__string = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1ListOf__string(value, context),
        };
    }, {});
};
const serializeAws_restJson1MapOfMetricDimension = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1MetricDimension(value, context),
        };
    }, {});
};
const serializeAws_restJson1Message = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.ImageIconUrl !== undefined && input.ImageIconUrl !== null && { ImageIconUrl: input.ImageIconUrl }),
        ...(input.ImageSmallIconUrl !== undefined &&
            input.ImageSmallIconUrl !== null && { ImageSmallIconUrl: input.ImageSmallIconUrl }),
        ...(input.ImageUrl !== undefined && input.ImageUrl !== null && { ImageUrl: input.ImageUrl }),
        ...(input.JsonBody !== undefined && input.JsonBody !== null && { JsonBody: input.JsonBody }),
        ...(input.MediaUrl !== undefined && input.MediaUrl !== null && { MediaUrl: input.MediaUrl }),
        ...(input.RawContent !== undefined && input.RawContent !== null && { RawContent: input.RawContent }),
        ...(input.SilentPush !== undefined && input.SilentPush !== null && { SilentPush: input.SilentPush }),
        ...(input.TimeToLive !== undefined && input.TimeToLive !== null && { TimeToLive: input.TimeToLive }),
        ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
        ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
    };
};
const serializeAws_restJson1MessageConfiguration = (input, context) => {
    return {
        ...(input.ADMMessage !== undefined &&
            input.ADMMessage !== null && { ADMMessage: serializeAws_restJson1Message(input.ADMMessage, context) }),
        ...(input.APNSMessage !== undefined &&
            input.APNSMessage !== null && { APNSMessage: serializeAws_restJson1Message(input.APNSMessage, context) }),
        ...(input.BaiduMessage !== undefined &&
            input.BaiduMessage !== null && { BaiduMessage: serializeAws_restJson1Message(input.BaiduMessage, context) }),
        ...(input.CustomMessage !== undefined &&
            input.CustomMessage !== null && {
            CustomMessage: serializeAws_restJson1CampaignCustomMessage(input.CustomMessage, context),
        }),
        ...(input.DefaultMessage !== undefined &&
            input.DefaultMessage !== null && {
            DefaultMessage: serializeAws_restJson1Message(input.DefaultMessage, context),
        }),
        ...(input.EmailMessage !== undefined &&
            input.EmailMessage !== null && {
            EmailMessage: serializeAws_restJson1CampaignEmailMessage(input.EmailMessage, context),
        }),
        ...(input.GCMMessage !== undefined &&
            input.GCMMessage !== null && { GCMMessage: serializeAws_restJson1Message(input.GCMMessage, context) }),
        ...(input.SMSMessage !== undefined &&
            input.SMSMessage !== null && { SMSMessage: serializeAws_restJson1CampaignSmsMessage(input.SMSMessage, context) }),
    };
};
const serializeAws_restJson1MessageRequest = (input, context) => {
    return {
        ...(input.Addresses !== undefined &&
            input.Addresses !== null && {
            Addresses: serializeAws_restJson1MapOfAddressConfiguration(input.Addresses, context),
        }),
        ...(input.Context !== undefined &&
            input.Context !== null && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
        ...(input.Endpoints !== undefined &&
            input.Endpoints !== null && {
            Endpoints: serializeAws_restJson1MapOfEndpointSendConfiguration(input.Endpoints, context),
        }),
        ...(input.MessageConfiguration !== undefined &&
            input.MessageConfiguration !== null && {
            MessageConfiguration: serializeAws_restJson1DirectMessageConfiguration(input.MessageConfiguration, context),
        }),
        ...(input.TemplateConfiguration !== undefined &&
            input.TemplateConfiguration !== null && {
            TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
        }),
        ...(input.TraceId !== undefined && input.TraceId !== null && { TraceId: input.TraceId }),
    };
};
const serializeAws_restJson1MetricDimension = (input, context) => {
    return {
        ...(input.ComparisonOperator !== undefined &&
            input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1MultiConditionalBranch = (input, context) => {
    return {
        ...(input.Condition !== undefined &&
            input.Condition !== null && { Condition: serializeAws_restJson1SimpleCondition(input.Condition, context) }),
        ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
    };
};
const serializeAws_restJson1MultiConditionalSplitActivity = (input, context) => {
    return {
        ...(input.Branches !== undefined &&
            input.Branches !== null && {
            Branches: serializeAws_restJson1ListOfMultiConditionalBranch(input.Branches, context),
        }),
        ...(input.DefaultActivity !== undefined &&
            input.DefaultActivity !== null && { DefaultActivity: input.DefaultActivity }),
        ...(input.EvaluationWaitTime !== undefined &&
            input.EvaluationWaitTime !== null && {
            EvaluationWaitTime: serializeAws_restJson1WaitTime(input.EvaluationWaitTime, context),
        }),
    };
};
const serializeAws_restJson1NumberValidateRequest = (input, context) => {
    return {
        ...(input.IsoCountryCode !== undefined &&
            input.IsoCountryCode !== null && { IsoCountryCode: input.IsoCountryCode }),
        ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
    };
};
const serializeAws_restJson1PublicEndpoint = (input, context) => {
    return {
        ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && {
            Attributes: serializeAws_restJson1MapOfListOf__string(input.Attributes, context),
        }),
        ...(input.ChannelType !== undefined && input.ChannelType !== null && { ChannelType: input.ChannelType }),
        ...(input.Demographic !== undefined &&
            input.Demographic !== null && {
            Demographic: serializeAws_restJson1EndpointDemographic(input.Demographic, context),
        }),
        ...(input.EffectiveDate !== undefined && input.EffectiveDate !== null && { EffectiveDate: input.EffectiveDate }),
        ...(input.EndpointStatus !== undefined &&
            input.EndpointStatus !== null && { EndpointStatus: input.EndpointStatus }),
        ...(input.Location !== undefined &&
            input.Location !== null && { Location: serializeAws_restJson1EndpointLocation(input.Location, context) }),
        ...(input.Metrics !== undefined &&
            input.Metrics !== null && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
        ...(input.OptOut !== undefined && input.OptOut !== null && { OptOut: input.OptOut }),
        ...(input.RequestId !== undefined && input.RequestId !== null && { RequestId: input.RequestId }),
        ...(input.User !== undefined &&
            input.User !== null && { User: serializeAws_restJson1EndpointUser(input.User, context) }),
    };
};
const serializeAws_restJson1PushMessageActivity = (input, context) => {
    return {
        ...(input.MessageConfig !== undefined &&
            input.MessageConfig !== null && {
            MessageConfig: serializeAws_restJson1JourneyPushMessage(input.MessageConfig, context),
        }),
        ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
        ...(input.TemplateName !== undefined && input.TemplateName !== null && { TemplateName: input.TemplateName }),
        ...(input.TemplateVersion !== undefined &&
            input.TemplateVersion !== null && { TemplateVersion: input.TemplateVersion }),
    };
};
const serializeAws_restJson1PushNotificationTemplateRequest = (input, context) => {
    return {
        ...(input.ADM !== undefined &&
            input.ADM !== null && { ADM: serializeAws_restJson1AndroidPushNotificationTemplate(input.ADM, context) }),
        ...(input.APNS !== undefined &&
            input.APNS !== null && { APNS: serializeAws_restJson1APNSPushNotificationTemplate(input.APNS, context) }),
        ...(input.Baidu !== undefined &&
            input.Baidu !== null && { Baidu: serializeAws_restJson1AndroidPushNotificationTemplate(input.Baidu, context) }),
        ...(input.Default !== undefined &&
            input.Default !== null && {
            Default: serializeAws_restJson1DefaultPushNotificationTemplate(input.Default, context),
        }),
        ...(input.DefaultSubstitutions !== undefined &&
            input.DefaultSubstitutions !== null && { DefaultSubstitutions: input.DefaultSubstitutions }),
        ...(input.GCM !== undefined &&
            input.GCM !== null && { GCM: serializeAws_restJson1AndroidPushNotificationTemplate(input.GCM, context) }),
        ...(input.RecommenderId !== undefined && input.RecommenderId !== null && { RecommenderId: input.RecommenderId }),
        ...(input.TemplateDescription !== undefined &&
            input.TemplateDescription !== null && { TemplateDescription: input.TemplateDescription }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
    };
};
const serializeAws_restJson1QuietTime = (input, context) => {
    return {
        ...(input.End !== undefined && input.End !== null && { End: input.End }),
        ...(input.Start !== undefined && input.Start !== null && { Start: input.Start }),
    };
};
const serializeAws_restJson1RandomSplitActivity = (input, context) => {
    return {
        ...(input.Branches !== undefined &&
            input.Branches !== null && { Branches: serializeAws_restJson1ListOfRandomSplitEntry(input.Branches, context) }),
    };
};
const serializeAws_restJson1RandomSplitEntry = (input, context) => {
    return {
        ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
        ...(input.Percentage !== undefined && input.Percentage !== null && { Percentage: input.Percentage }),
    };
};
const serializeAws_restJson1RawEmail = (input, context) => {
    return {
        ...(input.Data !== undefined && input.Data !== null && { Data: context.base64Encoder(input.Data) }),
    };
};
const serializeAws_restJson1RecencyDimension = (input, context) => {
    return {
        ...(input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration }),
        ...(input.RecencyType !== undefined && input.RecencyType !== null && { RecencyType: input.RecencyType }),
    };
};
const serializeAws_restJson1Schedule = (input, context) => {
    return {
        ...(input.EndTime !== undefined && input.EndTime !== null && { EndTime: input.EndTime }),
        ...(input.EventFilter !== undefined &&
            input.EventFilter !== null && {
            EventFilter: serializeAws_restJson1CampaignEventFilter(input.EventFilter, context),
        }),
        ...(input.Frequency !== undefined && input.Frequency !== null && { Frequency: input.Frequency }),
        ...(input.IsLocalTime !== undefined && input.IsLocalTime !== null && { IsLocalTime: input.IsLocalTime }),
        ...(input.QuietTime !== undefined &&
            input.QuietTime !== null && { QuietTime: serializeAws_restJson1QuietTime(input.QuietTime, context) }),
        ...(input.StartTime !== undefined && input.StartTime !== null && { StartTime: input.StartTime }),
        ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
    };
};
const serializeAws_restJson1SegmentBehaviors = (input, context) => {
    return {
        ...(input.Recency !== undefined &&
            input.Recency !== null && { Recency: serializeAws_restJson1RecencyDimension(input.Recency, context) }),
    };
};
const serializeAws_restJson1SegmentCondition = (input, context) => {
    return {
        ...(input.SegmentId !== undefined && input.SegmentId !== null && { SegmentId: input.SegmentId }),
    };
};
const serializeAws_restJson1SegmentDemographics = (input, context) => {
    return {
        ...(input.AppVersion !== undefined &&
            input.AppVersion !== null && { AppVersion: serializeAws_restJson1SetDimension(input.AppVersion, context) }),
        ...(input.Channel !== undefined &&
            input.Channel !== null && { Channel: serializeAws_restJson1SetDimension(input.Channel, context) }),
        ...(input.DeviceType !== undefined &&
            input.DeviceType !== null && { DeviceType: serializeAws_restJson1SetDimension(input.DeviceType, context) }),
        ...(input.Make !== undefined &&
            input.Make !== null && { Make: serializeAws_restJson1SetDimension(input.Make, context) }),
        ...(input.Model !== undefined &&
            input.Model !== null && { Model: serializeAws_restJson1SetDimension(input.Model, context) }),
        ...(input.Platform !== undefined &&
            input.Platform !== null && { Platform: serializeAws_restJson1SetDimension(input.Platform, context) }),
    };
};
const serializeAws_restJson1SegmentDimensions = (input, context) => {
    return {
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && {
            Attributes: serializeAws_restJson1MapOfAttributeDimension(input.Attributes, context),
        }),
        ...(input.Behavior !== undefined &&
            input.Behavior !== null && { Behavior: serializeAws_restJson1SegmentBehaviors(input.Behavior, context) }),
        ...(input.Demographic !== undefined &&
            input.Demographic !== null && {
            Demographic: serializeAws_restJson1SegmentDemographics(input.Demographic, context),
        }),
        ...(input.Location !== undefined &&
            input.Location !== null && { Location: serializeAws_restJson1SegmentLocation(input.Location, context) }),
        ...(input.Metrics !== undefined &&
            input.Metrics !== null && { Metrics: serializeAws_restJson1MapOfMetricDimension(input.Metrics, context) }),
        ...(input.UserAttributes !== undefined &&
            input.UserAttributes !== null && {
            UserAttributes: serializeAws_restJson1MapOfAttributeDimension(input.UserAttributes, context),
        }),
    };
};
const serializeAws_restJson1SegmentGroup = (input, context) => {
    return {
        ...(input.Dimensions !== undefined &&
            input.Dimensions !== null && {
            Dimensions: serializeAws_restJson1ListOfSegmentDimensions(input.Dimensions, context),
        }),
        ...(input.SourceSegments !== undefined &&
            input.SourceSegments !== null && {
            SourceSegments: serializeAws_restJson1ListOfSegmentReference(input.SourceSegments, context),
        }),
        ...(input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1SegmentGroupList = (input, context) => {
    return {
        ...(input.Groups !== undefined &&
            input.Groups !== null && { Groups: serializeAws_restJson1ListOfSegmentGroup(input.Groups, context) }),
        ...(input.Include !== undefined && input.Include !== null && { Include: input.Include }),
    };
};
const serializeAws_restJson1SegmentLocation = (input, context) => {
    return {
        ...(input.Country !== undefined &&
            input.Country !== null && { Country: serializeAws_restJson1SetDimension(input.Country, context) }),
        ...(input.GPSPoint !== undefined &&
            input.GPSPoint !== null && { GPSPoint: serializeAws_restJson1GPSPointDimension(input.GPSPoint, context) }),
    };
};
const serializeAws_restJson1SegmentReference = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_restJson1SendUsersMessageRequest = (input, context) => {
    return {
        ...(input.Context !== undefined &&
            input.Context !== null && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
        ...(input.MessageConfiguration !== undefined &&
            input.MessageConfiguration !== null && {
            MessageConfiguration: serializeAws_restJson1DirectMessageConfiguration(input.MessageConfiguration, context),
        }),
        ...(input.TemplateConfiguration !== undefined &&
            input.TemplateConfiguration !== null && {
            TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
        }),
        ...(input.TraceId !== undefined && input.TraceId !== null && { TraceId: input.TraceId }),
        ...(input.Users !== undefined &&
            input.Users !== null && { Users: serializeAws_restJson1MapOfEndpointSendConfiguration(input.Users, context) }),
    };
};
const serializeAws_restJson1Session = (input, context) => {
    return {
        ...(input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.StartTimestamp !== undefined &&
            input.StartTimestamp !== null && { StartTimestamp: input.StartTimestamp }),
        ...(input.StopTimestamp !== undefined && input.StopTimestamp !== null && { StopTimestamp: input.StopTimestamp }),
    };
};
const serializeAws_restJson1SetDimension = (input, context) => {
    return {
        ...(input.DimensionType !== undefined && input.DimensionType !== null && { DimensionType: input.DimensionType }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_restJson1ListOf__string(input.Values, context) }),
    };
};
const serializeAws_restJson1SimpleCondition = (input, context) => {
    return {
        ...(input.EventCondition !== undefined &&
            input.EventCondition !== null && {
            EventCondition: serializeAws_restJson1EventCondition(input.EventCondition, context),
        }),
        ...(input.SegmentCondition !== undefined &&
            input.SegmentCondition !== null && {
            SegmentCondition: serializeAws_restJson1SegmentCondition(input.SegmentCondition, context),
        }),
        ...(input.SegmentDimensions !== undefined &&
            input.SegmentDimensions !== null && {
            segmentDimensions: serializeAws_restJson1SegmentDimensions(input.SegmentDimensions, context),
        }),
    };
};
const serializeAws_restJson1SimpleEmail = (input, context) => {
    return {
        ...(input.HtmlPart !== undefined &&
            input.HtmlPart !== null && { HtmlPart: serializeAws_restJson1SimpleEmailPart(input.HtmlPart, context) }),
        ...(input.Subject !== undefined &&
            input.Subject !== null && { Subject: serializeAws_restJson1SimpleEmailPart(input.Subject, context) }),
        ...(input.TextPart !== undefined &&
            input.TextPart !== null && { TextPart: serializeAws_restJson1SimpleEmailPart(input.TextPart, context) }),
    };
};
const serializeAws_restJson1SimpleEmailPart = (input, context) => {
    return {
        ...(input.Charset !== undefined && input.Charset !== null && { Charset: input.Charset }),
        ...(input.Data !== undefined && input.Data !== null && { Data: input.Data }),
    };
};
const serializeAws_restJson1SMSChannelRequest = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
        ...(input.SenderId !== undefined && input.SenderId !== null && { SenderId: input.SenderId }),
        ...(input.ShortCode !== undefined && input.ShortCode !== null && { ShortCode: input.ShortCode }),
    };
};
const serializeAws_restJson1SMSMessage = (input, context) => {
    return {
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.Keyword !== undefined && input.Keyword !== null && { Keyword: input.Keyword }),
        ...(input.MediaUrl !== undefined && input.MediaUrl !== null && { MediaUrl: input.MediaUrl }),
        ...(input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType }),
        ...(input.OriginationNumber !== undefined &&
            input.OriginationNumber !== null && { OriginationNumber: input.OriginationNumber }),
        ...(input.SenderId !== undefined && input.SenderId !== null && { SenderId: input.SenderId }),
        ...(input.Substitutions !== undefined &&
            input.Substitutions !== null && {
            Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
        }),
        ...(input.TemplateId !== undefined && input.TemplateId !== null && { TemplateId: input.TemplateId }),
    };
};
const serializeAws_restJson1SMSMessageActivity = (input, context) => {
    return {
        ...(input.MessageConfig !== undefined &&
            input.MessageConfig !== null && {
            MessageConfig: serializeAws_restJson1JourneySMSMessage(input.MessageConfig, context),
        }),
        ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
        ...(input.TemplateName !== undefined && input.TemplateName !== null && { TemplateName: input.TemplateName }),
        ...(input.TemplateVersion !== undefined &&
            input.TemplateVersion !== null && { TemplateVersion: input.TemplateVersion }),
    };
};
const serializeAws_restJson1SMSTemplateRequest = (input, context) => {
    return {
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.DefaultSubstitutions !== undefined &&
            input.DefaultSubstitutions !== null && { DefaultSubstitutions: input.DefaultSubstitutions }),
        ...(input.RecommenderId !== undefined && input.RecommenderId !== null && { RecommenderId: input.RecommenderId }),
        ...(input.TemplateDescription !== undefined &&
            input.TemplateDescription !== null && { TemplateDescription: input.TemplateDescription }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
    };
};
const serializeAws_restJson1StartCondition = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.EventStartCondition !== undefined &&
            input.EventStartCondition !== null && {
            EventStartCondition: serializeAws_restJson1EventStartCondition(input.EventStartCondition, context),
        }),
        ...(input.SegmentStartCondition !== undefined &&
            input.SegmentStartCondition !== null && {
            SegmentStartCondition: serializeAws_restJson1SegmentCondition(input.SegmentStartCondition, context),
        }),
    };
};
const serializeAws_restJson1TagsModel = (input, context) => {
    return {
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
    };
};
const serializeAws_restJson1Template = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_restJson1TemplateActiveVersionRequest = (input, context) => {
    return {
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_restJson1TemplateConfiguration = (input, context) => {
    return {
        ...(input.EmailTemplate !== undefined &&
            input.EmailTemplate !== null && { EmailTemplate: serializeAws_restJson1Template(input.EmailTemplate, context) }),
        ...(input.PushTemplate !== undefined &&
            input.PushTemplate !== null && { PushTemplate: serializeAws_restJson1Template(input.PushTemplate, context) }),
        ...(input.SMSTemplate !== undefined &&
            input.SMSTemplate !== null && { SMSTemplate: serializeAws_restJson1Template(input.SMSTemplate, context) }),
        ...(input.VoiceTemplate !== undefined &&
            input.VoiceTemplate !== null && { VoiceTemplate: serializeAws_restJson1Template(input.VoiceTemplate, context) }),
    };
};
const serializeAws_restJson1UpdateAttributesRequest = (input, context) => {
    return {
        ...(input.Blacklist !== undefined &&
            input.Blacklist !== null && { Blacklist: serializeAws_restJson1ListOf__string(input.Blacklist, context) }),
    };
};
const serializeAws_restJson1UpdateRecommenderConfigurationShape = (input, context) => {
    return {
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_restJson1MapOf__string(input.Attributes, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RecommendationProviderIdType !== undefined &&
            input.RecommendationProviderIdType !== null && {
            RecommendationProviderIdType: input.RecommendationProviderIdType,
        }),
        ...(input.RecommendationProviderRoleArn !== undefined &&
            input.RecommendationProviderRoleArn !== null && {
            RecommendationProviderRoleArn: input.RecommendationProviderRoleArn,
        }),
        ...(input.RecommendationProviderUri !== undefined &&
            input.RecommendationProviderUri !== null && { RecommendationProviderUri: input.RecommendationProviderUri }),
        ...(input.RecommendationTransformerUri !== undefined &&
            input.RecommendationTransformerUri !== null && {
            RecommendationTransformerUri: input.RecommendationTransformerUri,
        }),
        ...(input.RecommendationsDisplayName !== undefined &&
            input.RecommendationsDisplayName !== null && { RecommendationsDisplayName: input.RecommendationsDisplayName }),
        ...(input.RecommendationsPerMessage !== undefined &&
            input.RecommendationsPerMessage !== null && { RecommendationsPerMessage: input.RecommendationsPerMessage }),
    };
};
const serializeAws_restJson1VoiceChannelRequest = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    };
};
const serializeAws_restJson1VoiceMessage = (input, context) => {
    return {
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.OriginationNumber !== undefined &&
            input.OriginationNumber !== null && { OriginationNumber: input.OriginationNumber }),
        ...(input.Substitutions !== undefined &&
            input.Substitutions !== null && {
            Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
        }),
        ...(input.VoiceId !== undefined && input.VoiceId !== null && { VoiceId: input.VoiceId }),
    };
};
const serializeAws_restJson1VoiceTemplateRequest = (input, context) => {
    return {
        ...(input.Body !== undefined && input.Body !== null && { Body: input.Body }),
        ...(input.DefaultSubstitutions !== undefined &&
            input.DefaultSubstitutions !== null && { DefaultSubstitutions: input.DefaultSubstitutions }),
        ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
        ...(input.TemplateDescription !== undefined &&
            input.TemplateDescription !== null && { TemplateDescription: input.TemplateDescription }),
        ...(input.VoiceId !== undefined && input.VoiceId !== null && { VoiceId: input.VoiceId }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
    };
};
const serializeAws_restJson1WaitActivity = (input, context) => {
    return {
        ...(input.NextActivity !== undefined && input.NextActivity !== null && { NextActivity: input.NextActivity }),
        ...(input.WaitTime !== undefined &&
            input.WaitTime !== null && { WaitTime: serializeAws_restJson1WaitTime(input.WaitTime, context) }),
    };
};
const serializeAws_restJson1WaitTime = (input, context) => {
    return {
        ...(input.WaitFor !== undefined && input.WaitFor !== null && { WaitFor: input.WaitFor }),
        ...(input.WaitUntil !== undefined && input.WaitUntil !== null && { WaitUntil: input.WaitUntil }),
    };
};
const serializeAws_restJson1WriteApplicationSettingsRequest = (input, context) => {
    return {
        ...(input.CampaignHook !== undefined &&
            input.CampaignHook !== null && { CampaignHook: serializeAws_restJson1CampaignHook(input.CampaignHook, context) }),
        ...(input.CloudWatchMetricsEnabled !== undefined &&
            input.CloudWatchMetricsEnabled !== null && { CloudWatchMetricsEnabled: input.CloudWatchMetricsEnabled }),
        ...(input.EventTaggingEnabled !== undefined &&
            input.EventTaggingEnabled !== null && { EventTaggingEnabled: input.EventTaggingEnabled }),
        ...(input.Limits !== undefined &&
            input.Limits !== null && { Limits: serializeAws_restJson1CampaignLimits(input.Limits, context) }),
        ...(input.QuietTime !== undefined &&
            input.QuietTime !== null && { QuietTime: serializeAws_restJson1QuietTime(input.QuietTime, context) }),
    };
};
const serializeAws_restJson1WriteCampaignRequest = (input, context) => {
    return {
        ...(input.AdditionalTreatments !== undefined &&
            input.AdditionalTreatments !== null && {
            AdditionalTreatments: serializeAws_restJson1ListOfWriteTreatmentResource(input.AdditionalTreatments, context),
        }),
        ...(input.CustomDeliveryConfiguration !== undefined &&
            input.CustomDeliveryConfiguration !== null && {
            CustomDeliveryConfiguration: serializeAws_restJson1CustomDeliveryConfiguration(input.CustomDeliveryConfiguration, context),
        }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.HoldoutPercent !== undefined &&
            input.HoldoutPercent !== null && { HoldoutPercent: input.HoldoutPercent }),
        ...(input.Hook !== undefined &&
            input.Hook !== null && { Hook: serializeAws_restJson1CampaignHook(input.Hook, context) }),
        ...(input.IsPaused !== undefined && input.IsPaused !== null && { IsPaused: input.IsPaused }),
        ...(input.Limits !== undefined &&
            input.Limits !== null && { Limits: serializeAws_restJson1CampaignLimits(input.Limits, context) }),
        ...(input.MessageConfiguration !== undefined &&
            input.MessageConfiguration !== null && {
            MessageConfiguration: serializeAws_restJson1MessageConfiguration(input.MessageConfiguration, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Schedule !== undefined &&
            input.Schedule !== null && { Schedule: serializeAws_restJson1Schedule(input.Schedule, context) }),
        ...(input.SegmentId !== undefined && input.SegmentId !== null && { SegmentId: input.SegmentId }),
        ...(input.SegmentVersion !== undefined &&
            input.SegmentVersion !== null && { SegmentVersion: input.SegmentVersion }),
        ...(input.TemplateConfiguration !== undefined &&
            input.TemplateConfiguration !== null && {
            TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
        }),
        ...(input.TreatmentDescription !== undefined &&
            input.TreatmentDescription !== null && { TreatmentDescription: input.TreatmentDescription }),
        ...(input.TreatmentName !== undefined && input.TreatmentName !== null && { TreatmentName: input.TreatmentName }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
    };
};
const serializeAws_restJson1WriteEventStream = (input, context) => {
    return {
        ...(input.DestinationStreamArn !== undefined &&
            input.DestinationStreamArn !== null && { DestinationStreamArn: input.DestinationStreamArn }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const serializeAws_restJson1WriteJourneyRequest = (input, context) => {
    return {
        ...(input.Activities !== undefined &&
            input.Activities !== null && { Activities: serializeAws_restJson1MapOfActivity(input.Activities, context) }),
        ...(input.CreationDate !== undefined && input.CreationDate !== null && { CreationDate: input.CreationDate }),
        ...(input.LastModifiedDate !== undefined &&
            input.LastModifiedDate !== null && { LastModifiedDate: input.LastModifiedDate }),
        ...(input.Limits !== undefined &&
            input.Limits !== null && { Limits: serializeAws_restJson1JourneyLimits(input.Limits, context) }),
        ...(input.LocalTime !== undefined && input.LocalTime !== null && { LocalTime: input.LocalTime }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.QuietTime !== undefined &&
            input.QuietTime !== null && { QuietTime: serializeAws_restJson1QuietTime(input.QuietTime, context) }),
        ...(input.RefreshFrequency !== undefined &&
            input.RefreshFrequency !== null && { RefreshFrequency: input.RefreshFrequency }),
        ...(input.RefreshOnSegmentUpdate !== undefined &&
            input.RefreshOnSegmentUpdate !== null && { RefreshOnSegmentUpdate: input.RefreshOnSegmentUpdate }),
        ...(input.Schedule !== undefined &&
            input.Schedule !== null && { Schedule: serializeAws_restJson1JourneySchedule(input.Schedule, context) }),
        ...(input.StartActivity !== undefined && input.StartActivity !== null && { StartActivity: input.StartActivity }),
        ...(input.StartCondition !== undefined &&
            input.StartCondition !== null && {
            StartCondition: serializeAws_restJson1StartCondition(input.StartCondition, context),
        }),
        ...(input.State !== undefined && input.State !== null && { State: input.State }),
        ...(input.WaitForQuietTime !== undefined &&
            input.WaitForQuietTime !== null && { WaitForQuietTime: input.WaitForQuietTime }),
    };
};
const serializeAws_restJson1WriteSegmentRequest = (input, context) => {
    return {
        ...(input.Dimensions !== undefined &&
            input.Dimensions !== null && { Dimensions: serializeAws_restJson1SegmentDimensions(input.Dimensions, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.SegmentGroups !== undefined &&
            input.SegmentGroups !== null && {
            SegmentGroups: serializeAws_restJson1SegmentGroupList(input.SegmentGroups, context),
        }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
    };
};
const serializeAws_restJson1WriteTreatmentResource = (input, context) => {
    return {
        ...(input.CustomDeliveryConfiguration !== undefined &&
            input.CustomDeliveryConfiguration !== null && {
            CustomDeliveryConfiguration: serializeAws_restJson1CustomDeliveryConfiguration(input.CustomDeliveryConfiguration, context),
        }),
        ...(input.MessageConfiguration !== undefined &&
            input.MessageConfiguration !== null && {
            MessageConfiguration: serializeAws_restJson1MessageConfiguration(input.MessageConfiguration, context),
        }),
        ...(input.Schedule !== undefined &&
            input.Schedule !== null && { Schedule: serializeAws_restJson1Schedule(input.Schedule, context) }),
        ...(input.SizePercent !== undefined && input.SizePercent !== null && { SizePercent: input.SizePercent }),
        ...(input.TemplateConfiguration !== undefined &&
            input.TemplateConfiguration !== null && {
            TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
        }),
        ...(input.TreatmentDescription !== undefined &&
            input.TreatmentDescription !== null && { TreatmentDescription: input.TreatmentDescription }),
        ...(input.TreatmentName !== undefined && input.TreatmentName !== null && { TreatmentName: input.TreatmentName }),
    };
};
const deserializeAws_restJson1ActivitiesResponse = (output, context) => {
    return {
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_restJson1ListOfActivityResponse(output.Item, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_restJson1Activity = (output, context) => {
    return {
        CUSTOM: output.CUSTOM !== undefined && output.CUSTOM !== null
            ? deserializeAws_restJson1CustomMessageActivity(output.CUSTOM, context)
            : undefined,
        ConditionalSplit: output.ConditionalSplit !== undefined && output.ConditionalSplit !== null
            ? deserializeAws_restJson1ConditionalSplitActivity(output.ConditionalSplit, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        EMAIL: output.EMAIL !== undefined && output.EMAIL !== null
            ? deserializeAws_restJson1EmailMessageActivity(output.EMAIL, context)
            : undefined,
        Holdout: output.Holdout !== undefined && output.Holdout !== null
            ? deserializeAws_restJson1HoldoutActivity(output.Holdout, context)
            : undefined,
        MultiCondition: output.MultiCondition !== undefined && output.MultiCondition !== null
            ? deserializeAws_restJson1MultiConditionalSplitActivity(output.MultiCondition, context)
            : undefined,
        PUSH: output.PUSH !== undefined && output.PUSH !== null
            ? deserializeAws_restJson1PushMessageActivity(output.PUSH, context)
            : undefined,
        RandomSplit: output.RandomSplit !== undefined && output.RandomSplit !== null
            ? deserializeAws_restJson1RandomSplitActivity(output.RandomSplit, context)
            : undefined,
        SMS: output.SMS !== undefined && output.SMS !== null
            ? deserializeAws_restJson1SMSMessageActivity(output.SMS, context)
            : undefined,
        Wait: output.Wait !== undefined && output.Wait !== null
            ? deserializeAws_restJson1WaitActivity(output.Wait, context)
            : undefined,
    };
};
const deserializeAws_restJson1ActivityResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CampaignId: output.CampaignId !== undefined && output.CampaignId !== null ? output.CampaignId : undefined,
        End: output.End !== undefined && output.End !== null ? output.End : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Result: output.Result !== undefined && output.Result !== null ? output.Result : undefined,
        ScheduledStart: output.ScheduledStart !== undefined && output.ScheduledStart !== null ? output.ScheduledStart : undefined,
        Start: output.Start !== undefined && output.Start !== null ? output.Start : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        SuccessfulEndpointCount: output.SuccessfulEndpointCount !== undefined && output.SuccessfulEndpointCount !== null
            ? output.SuccessfulEndpointCount
            : undefined,
        TimezonesCompletedCount: output.TimezonesCompletedCount !== undefined && output.TimezonesCompletedCount !== null
            ? output.TimezonesCompletedCount
            : undefined,
        TimezonesTotalCount: output.TimezonesTotalCount !== undefined && output.TimezonesTotalCount !== null
            ? output.TimezonesTotalCount
            : undefined,
        TotalEndpointCount: output.TotalEndpointCount !== undefined && output.TotalEndpointCount !== null
            ? output.TotalEndpointCount
            : undefined,
        TreatmentId: output.TreatmentId !== undefined && output.TreatmentId !== null ? output.TreatmentId : undefined,
    };
};
const deserializeAws_restJson1ADMChannelResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        HasCredential: output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1AndroidPushNotificationTemplate = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
        ImageIconUrl: output.ImageIconUrl !== undefined && output.ImageIconUrl !== null ? output.ImageIconUrl : undefined,
        ImageUrl: output.ImageUrl !== undefined && output.ImageUrl !== null ? output.ImageUrl : undefined,
        RawContent: output.RawContent !== undefined && output.RawContent !== null ? output.RawContent : undefined,
        SmallImageIconUrl: output.SmallImageIconUrl !== undefined && output.SmallImageIconUrl !== null
            ? output.SmallImageIconUrl
            : undefined,
        Sound: output.Sound !== undefined && output.Sound !== null ? output.Sound : undefined,
        Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
        Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
    };
};
const deserializeAws_restJson1APNSChannelResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        DefaultAuthenticationMethod: output.DefaultAuthenticationMethod !== undefined && output.DefaultAuthenticationMethod !== null
            ? output.DefaultAuthenticationMethod
            : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        HasCredential: output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
        HasTokenKey: output.HasTokenKey !== undefined && output.HasTokenKey !== null ? output.HasTokenKey : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1APNSPushNotificationTemplate = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
        MediaUrl: output.MediaUrl !== undefined && output.MediaUrl !== null ? output.MediaUrl : undefined,
        RawContent: output.RawContent !== undefined && output.RawContent !== null ? output.RawContent : undefined,
        Sound: output.Sound !== undefined && output.Sound !== null ? output.Sound : undefined,
        Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
        Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
    };
};
const deserializeAws_restJson1APNSSandboxChannelResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        DefaultAuthenticationMethod: output.DefaultAuthenticationMethod !== undefined && output.DefaultAuthenticationMethod !== null
            ? output.DefaultAuthenticationMethod
            : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        HasCredential: output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
        HasTokenKey: output.HasTokenKey !== undefined && output.HasTokenKey !== null ? output.HasTokenKey : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1APNSVoipChannelResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        DefaultAuthenticationMethod: output.DefaultAuthenticationMethod !== undefined && output.DefaultAuthenticationMethod !== null
            ? output.DefaultAuthenticationMethod
            : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        HasCredential: output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
        HasTokenKey: output.HasTokenKey !== undefined && output.HasTokenKey !== null ? output.HasTokenKey : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1APNSVoipSandboxChannelResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        DefaultAuthenticationMethod: output.DefaultAuthenticationMethod !== undefined && output.DefaultAuthenticationMethod !== null
            ? output.DefaultAuthenticationMethod
            : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        HasCredential: output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
        HasTokenKey: output.HasTokenKey !== undefined && output.HasTokenKey !== null ? output.HasTokenKey : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1ApplicationDateRangeKpiResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(output.EndTime) : undefined,
        KpiName: output.KpiName !== undefined && output.KpiName !== null ? output.KpiName : undefined,
        KpiResult: output.KpiResult !== undefined && output.KpiResult !== null
            ? deserializeAws_restJson1BaseKpiResult(output.KpiResult, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? new Date(output.StartTime) : undefined,
    };
};
const deserializeAws_restJson1ApplicationResponse = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1MapOf__string(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1ApplicationSettingsResource = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CampaignHook: output.CampaignHook !== undefined && output.CampaignHook !== null
            ? deserializeAws_restJson1CampaignHook(output.CampaignHook, context)
            : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Limits: output.Limits !== undefined && output.Limits !== null
            ? deserializeAws_restJson1CampaignLimits(output.Limits, context)
            : undefined,
        QuietTime: output.QuietTime !== undefined && output.QuietTime !== null
            ? deserializeAws_restJson1QuietTime(output.QuietTime, context)
            : undefined,
    };
};
const deserializeAws_restJson1ApplicationsResponse = (output, context) => {
    return {
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_restJson1ListOfApplicationResponse(output.Item, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_restJson1AttributeDimension = (output, context) => {
    return {
        AttributeType: output.AttributeType !== undefined && output.AttributeType !== null ? output.AttributeType : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_restJson1ListOf__string(output.Values, context)
            : undefined,
    };
};
const deserializeAws_restJson1AttributesResource = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        AttributeType: output.AttributeType !== undefined && output.AttributeType !== null ? output.AttributeType : undefined,
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_restJson1ListOf__string(output.Attributes, context)
            : undefined,
    };
};
const deserializeAws_restJson1BaiduChannelResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        Credential: output.Credential !== undefined && output.Credential !== null ? output.Credential : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        HasCredential: output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1BaseKpiResult = (output, context) => {
    return {
        Rows: output.Rows !== undefined && output.Rows !== null
            ? deserializeAws_restJson1ListOfResultRow(output.Rows, context)
            : undefined,
    };
};
const deserializeAws_restJson1CampaignCustomMessage = (output, context) => {
    return {
        Data: output.Data !== undefined && output.Data !== null ? output.Data : undefined,
    };
};
const deserializeAws_restJson1CampaignDateRangeKpiResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CampaignId: output.CampaignId !== undefined && output.CampaignId !== null ? output.CampaignId : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(output.EndTime) : undefined,
        KpiName: output.KpiName !== undefined && output.KpiName !== null ? output.KpiName : undefined,
        KpiResult: output.KpiResult !== undefined && output.KpiResult !== null
            ? deserializeAws_restJson1BaseKpiResult(output.KpiResult, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? new Date(output.StartTime) : undefined,
    };
};
const deserializeAws_restJson1CampaignEmailMessage = (output, context) => {
    return {
        Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
        FromAddress: output.FromAddress !== undefined && output.FromAddress !== null ? output.FromAddress : undefined,
        HtmlBody: output.HtmlBody !== undefined && output.HtmlBody !== null ? output.HtmlBody : undefined,
        Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
    };
};
const deserializeAws_restJson1CampaignEventFilter = (output, context) => {
    return {
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_restJson1EventDimensions(output.Dimensions, context)
            : undefined,
        FilterType: output.FilterType !== undefined && output.FilterType !== null ? output.FilterType : undefined,
    };
};
const deserializeAws_restJson1CampaignHook = (output, context) => {
    return {
        LambdaFunctionName: output.LambdaFunctionName !== undefined && output.LambdaFunctionName !== null
            ? output.LambdaFunctionName
            : undefined,
        Mode: output.Mode !== undefined && output.Mode !== null ? output.Mode : undefined,
        WebUrl: output.WebUrl !== undefined && output.WebUrl !== null ? output.WebUrl : undefined,
    };
};
const deserializeAws_restJson1CampaignLimits = (output, context) => {
    return {
        Daily: output.Daily !== undefined && output.Daily !== null ? output.Daily : undefined,
        MaximumDuration: output.MaximumDuration !== undefined && output.MaximumDuration !== null ? output.MaximumDuration : undefined,
        MessagesPerSecond: output.MessagesPerSecond !== undefined && output.MessagesPerSecond !== null
            ? output.MessagesPerSecond
            : undefined,
        Total: output.Total !== undefined && output.Total !== null ? output.Total : undefined,
    };
};
const deserializeAws_restJson1CampaignResponse = (output, context) => {
    return {
        AdditionalTreatments: output.AdditionalTreatments !== undefined && output.AdditionalTreatments !== null
            ? deserializeAws_restJson1ListOfTreatmentResource(output.AdditionalTreatments, context)
            : undefined,
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        CustomDeliveryConfiguration: output.CustomDeliveryConfiguration !== undefined && output.CustomDeliveryConfiguration !== null
            ? deserializeAws_restJson1CustomDeliveryConfiguration(output.CustomDeliveryConfiguration, context)
            : undefined,
        DefaultState: output.DefaultState !== undefined && output.DefaultState !== null
            ? deserializeAws_restJson1CampaignState(output.DefaultState, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        HoldoutPercent: output.HoldoutPercent !== undefined && output.HoldoutPercent !== null ? output.HoldoutPercent : undefined,
        Hook: output.Hook !== undefined && output.Hook !== null
            ? deserializeAws_restJson1CampaignHook(output.Hook, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IsPaused: output.IsPaused !== undefined && output.IsPaused !== null ? output.IsPaused : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Limits: output.Limits !== undefined && output.Limits !== null
            ? deserializeAws_restJson1CampaignLimits(output.Limits, context)
            : undefined,
        MessageConfiguration: output.MessageConfiguration !== undefined && output.MessageConfiguration !== null
            ? deserializeAws_restJson1MessageConfiguration(output.MessageConfiguration, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Schedule: output.Schedule !== undefined && output.Schedule !== null
            ? deserializeAws_restJson1Schedule(output.Schedule, context)
            : undefined,
        SegmentId: output.SegmentId !== undefined && output.SegmentId !== null ? output.SegmentId : undefined,
        SegmentVersion: output.SegmentVersion !== undefined && output.SegmentVersion !== null ? output.SegmentVersion : undefined,
        State: output.State !== undefined && output.State !== null
            ? deserializeAws_restJson1CampaignState(output.State, context)
            : undefined,
        TemplateConfiguration: output.TemplateConfiguration !== undefined && output.TemplateConfiguration !== null
            ? deserializeAws_restJson1TemplateConfiguration(output.TemplateConfiguration, context)
            : undefined,
        TreatmentDescription: output.TreatmentDescription !== undefined && output.TreatmentDescription !== null
            ? output.TreatmentDescription
            : undefined,
        TreatmentName: output.TreatmentName !== undefined && output.TreatmentName !== null ? output.TreatmentName : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1MapOf__string(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1CampaignSmsMessage = (output, context) => {
    return {
        Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
        EntityId: output.EntityId !== undefined && output.EntityId !== null ? output.EntityId : undefined,
        MessageType: output.MessageType !== undefined && output.MessageType !== null ? output.MessageType : undefined,
        OriginationNumber: output.OriginationNumber !== undefined && output.OriginationNumber !== null
            ? output.OriginationNumber
            : undefined,
        SenderId: output.SenderId !== undefined && output.SenderId !== null ? output.SenderId : undefined,
        TemplateId: output.TemplateId !== undefined && output.TemplateId !== null ? output.TemplateId : undefined,
    };
};
const deserializeAws_restJson1CampaignsResponse = (output, context) => {
    return {
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_restJson1ListOfCampaignResponse(output.Item, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_restJson1CampaignState = (output, context) => {
    return {
        CampaignStatus: output.CampaignStatus !== undefined && output.CampaignStatus !== null ? output.CampaignStatus : undefined,
    };
};
const deserializeAws_restJson1ChannelResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        HasCredential: output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1ChannelsResponse = (output, context) => {
    return {
        Channels: output.Channels !== undefined && output.Channels !== null
            ? deserializeAws_restJson1MapOfChannelResponse(output.Channels, context)
            : undefined,
    };
};
const deserializeAws_restJson1Condition = (output, context) => {
    return {
        Conditions: output.Conditions !== undefined && output.Conditions !== null
            ? deserializeAws_restJson1ListOfSimpleCondition(output.Conditions, context)
            : undefined,
        Operator: output.Operator !== undefined && output.Operator !== null ? output.Operator : undefined,
    };
};
const deserializeAws_restJson1ConditionalSplitActivity = (output, context) => {
    return {
        Condition: output.Condition !== undefined && output.Condition !== null
            ? deserializeAws_restJson1Condition(output.Condition, context)
            : undefined,
        EvaluationWaitTime: output.EvaluationWaitTime !== undefined && output.EvaluationWaitTime !== null
            ? deserializeAws_restJson1WaitTime(output.EvaluationWaitTime, context)
            : undefined,
        FalseActivity: output.FalseActivity !== undefined && output.FalseActivity !== null ? output.FalseActivity : undefined,
        TrueActivity: output.TrueActivity !== undefined && output.TrueActivity !== null ? output.TrueActivity : undefined,
    };
};
const deserializeAws_restJson1CreateTemplateMessageBody = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestID: output.RequestID !== undefined && output.RequestID !== null ? output.RequestID : undefined,
    };
};
const deserializeAws_restJson1CustomDeliveryConfiguration = (output, context) => {
    return {
        DeliveryUri: output.DeliveryUri !== undefined && output.DeliveryUri !== null ? output.DeliveryUri : undefined,
        EndpointTypes: output.EndpointTypes !== undefined && output.EndpointTypes !== null
            ? deserializeAws_restJson1ListOf__EndpointTypesElement(output.EndpointTypes, context)
            : undefined,
    };
};
const deserializeAws_restJson1CustomMessageActivity = (output, context) => {
    return {
        DeliveryUri: output.DeliveryUri !== undefined && output.DeliveryUri !== null ? output.DeliveryUri : undefined,
        EndpointTypes: output.EndpointTypes !== undefined && output.EndpointTypes !== null
            ? deserializeAws_restJson1ListOf__EndpointTypesElement(output.EndpointTypes, context)
            : undefined,
        MessageConfig: output.MessageConfig !== undefined && output.MessageConfig !== null
            ? deserializeAws_restJson1JourneyCustomMessage(output.MessageConfig, context)
            : undefined,
        NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
        TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
        TemplateVersion: output.TemplateVersion !== undefined && output.TemplateVersion !== null ? output.TemplateVersion : undefined,
    };
};
const deserializeAws_restJson1DefaultPushNotificationTemplate = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
        Sound: output.Sound !== undefined && output.Sound !== null ? output.Sound : undefined,
        Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
        Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
    };
};
const deserializeAws_restJson1EmailChannelResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        ConfigurationSet: output.ConfigurationSet !== undefined && output.ConfigurationSet !== null ? output.ConfigurationSet : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        FromAddress: output.FromAddress !== undefined && output.FromAddress !== null ? output.FromAddress : undefined,
        HasCredential: output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Identity: output.Identity !== undefined && output.Identity !== null ? output.Identity : undefined,
        IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        MessagesPerSecond: output.MessagesPerSecond !== undefined && output.MessagesPerSecond !== null
            ? output.MessagesPerSecond
            : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1EmailMessageActivity = (output, context) => {
    return {
        MessageConfig: output.MessageConfig !== undefined && output.MessageConfig !== null
            ? deserializeAws_restJson1JourneyEmailMessage(output.MessageConfig, context)
            : undefined,
        NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
        TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
        TemplateVersion: output.TemplateVersion !== undefined && output.TemplateVersion !== null ? output.TemplateVersion : undefined,
    };
};
const deserializeAws_restJson1EmailTemplateResponse = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        DefaultSubstitutions: output.DefaultSubstitutions !== undefined && output.DefaultSubstitutions !== null
            ? output.DefaultSubstitutions
            : undefined,
        HtmlPart: output.HtmlPart !== undefined && output.HtmlPart !== null ? output.HtmlPart : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        RecommenderId: output.RecommenderId !== undefined && output.RecommenderId !== null ? output.RecommenderId : undefined,
        Subject: output.Subject !== undefined && output.Subject !== null ? output.Subject : undefined,
        TemplateDescription: output.TemplateDescription !== undefined && output.TemplateDescription !== null
            ? output.TemplateDescription
            : undefined,
        TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
        TemplateType: output.TemplateType !== undefined && output.TemplateType !== null ? output.TemplateType : undefined,
        TextPart: output.TextPart !== undefined && output.TextPart !== null ? output.TextPart : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1MapOf__string(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1EndpointDemographic = (output, context) => {
    return {
        AppVersion: output.AppVersion !== undefined && output.AppVersion !== null ? output.AppVersion : undefined,
        Locale: output.Locale !== undefined && output.Locale !== null ? output.Locale : undefined,
        Make: output.Make !== undefined && output.Make !== null ? output.Make : undefined,
        Model: output.Model !== undefined && output.Model !== null ? output.Model : undefined,
        ModelVersion: output.ModelVersion !== undefined && output.ModelVersion !== null ? output.ModelVersion : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        PlatformVersion: output.PlatformVersion !== undefined && output.PlatformVersion !== null ? output.PlatformVersion : undefined,
        Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
    };
};
const deserializeAws_restJson1EndpointItemResponse = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
    };
};
const deserializeAws_restJson1EndpointLocation = (output, context) => {
    return {
        City: output.City !== undefined && output.City !== null ? output.City : undefined,
        Country: output.Country !== undefined && output.Country !== null ? output.Country : undefined,
        Latitude: output.Latitude !== undefined && output.Latitude !== null ? output.Latitude : undefined,
        Longitude: output.Longitude !== undefined && output.Longitude !== null ? output.Longitude : undefined,
        PostalCode: output.PostalCode !== undefined && output.PostalCode !== null ? output.PostalCode : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    };
};
const deserializeAws_restJson1EndpointMessageResult = (output, context) => {
    return {
        Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
        DeliveryStatus: output.DeliveryStatus !== undefined && output.DeliveryStatus !== null ? output.DeliveryStatus : undefined,
        MessageId: output.MessageId !== undefined && output.MessageId !== null ? output.MessageId : undefined,
        StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        UpdatedToken: output.UpdatedToken !== undefined && output.UpdatedToken !== null ? output.UpdatedToken : undefined,
    };
};
const deserializeAws_restJson1EndpointResponse = (output, context) => {
    return {
        Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_restJson1MapOfListOf__string(output.Attributes, context)
            : undefined,
        ChannelType: output.ChannelType !== undefined && output.ChannelType !== null ? output.ChannelType : undefined,
        CohortId: output.CohortId !== undefined && output.CohortId !== null ? output.CohortId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        Demographic: output.Demographic !== undefined && output.Demographic !== null
            ? deserializeAws_restJson1EndpointDemographic(output.Demographic, context)
            : undefined,
        EffectiveDate: output.EffectiveDate !== undefined && output.EffectiveDate !== null ? output.EffectiveDate : undefined,
        EndpointStatus: output.EndpointStatus !== undefined && output.EndpointStatus !== null ? output.EndpointStatus : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Location: output.Location !== undefined && output.Location !== null
            ? deserializeAws_restJson1EndpointLocation(output.Location, context)
            : undefined,
        Metrics: output.Metrics !== undefined && output.Metrics !== null
            ? deserializeAws_restJson1MapOf__double(output.Metrics, context)
            : undefined,
        OptOut: output.OptOut !== undefined && output.OptOut !== null ? output.OptOut : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
        User: output.User !== undefined && output.User !== null
            ? deserializeAws_restJson1EndpointUser(output.User, context)
            : undefined,
    };
};
const deserializeAws_restJson1EndpointsResponse = (output, context) => {
    return {
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_restJson1ListOfEndpointResponse(output.Item, context)
            : undefined,
    };
};
const deserializeAws_restJson1EndpointUser = (output, context) => {
    return {
        UserAttributes: output.UserAttributes !== undefined && output.UserAttributes !== null
            ? deserializeAws_restJson1MapOfListOf__string(output.UserAttributes, context)
            : undefined,
        UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
    };
};
const deserializeAws_restJson1EventCondition = (output, context) => {
    return {
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_restJson1EventDimensions(output.Dimensions, context)
            : undefined,
        MessageActivity: output.MessageActivity !== undefined && output.MessageActivity !== null ? output.MessageActivity : undefined,
    };
};
const deserializeAws_restJson1EventDimensions = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_restJson1MapOfAttributeDimension(output.Attributes, context)
            : undefined,
        EventType: output.EventType !== undefined && output.EventType !== null
            ? deserializeAws_restJson1SetDimension(output.EventType, context)
            : undefined,
        Metrics: output.Metrics !== undefined && output.Metrics !== null
            ? deserializeAws_restJson1MapOfMetricDimension(output.Metrics, context)
            : undefined,
    };
};
const deserializeAws_restJson1EventFilter = (output, context) => {
    return {
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_restJson1EventDimensions(output.Dimensions, context)
            : undefined,
        FilterType: output.FilterType !== undefined && output.FilterType !== null ? output.FilterType : undefined,
    };
};
const deserializeAws_restJson1EventItemResponse = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
    };
};
const deserializeAws_restJson1EventsResponse = (output, context) => {
    return {
        Results: output.Results !== undefined && output.Results !== null
            ? deserializeAws_restJson1MapOfItemResponse(output.Results, context)
            : undefined,
    };
};
const deserializeAws_restJson1EventStartCondition = (output, context) => {
    return {
        EventFilter: output.EventFilter !== undefined && output.EventFilter !== null
            ? deserializeAws_restJson1EventFilter(output.EventFilter, context)
            : undefined,
        SegmentId: output.SegmentId !== undefined && output.SegmentId !== null ? output.SegmentId : undefined,
    };
};
const deserializeAws_restJson1EventStream = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        DestinationStreamArn: output.DestinationStreamArn !== undefined && output.DestinationStreamArn !== null
            ? output.DestinationStreamArn
            : undefined,
        ExternalId: output.ExternalId !== undefined && output.ExternalId !== null ? output.ExternalId : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        LastUpdatedBy: output.LastUpdatedBy !== undefined && output.LastUpdatedBy !== null ? output.LastUpdatedBy : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    };
};
const deserializeAws_restJson1ExportJobResource = (output, context) => {
    return {
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        S3UrlPrefix: output.S3UrlPrefix !== undefined && output.S3UrlPrefix !== null ? output.S3UrlPrefix : undefined,
        SegmentId: output.SegmentId !== undefined && output.SegmentId !== null ? output.SegmentId : undefined,
        SegmentVersion: output.SegmentVersion !== undefined && output.SegmentVersion !== null ? output.SegmentVersion : undefined,
    };
};
const deserializeAws_restJson1ExportJobResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CompletedPieces: output.CompletedPieces !== undefined && output.CompletedPieces !== null ? output.CompletedPieces : undefined,
        CompletionDate: output.CompletionDate !== undefined && output.CompletionDate !== null ? output.CompletionDate : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        Definition: output.Definition !== undefined && output.Definition !== null
            ? deserializeAws_restJson1ExportJobResource(output.Definition, context)
            : undefined,
        FailedPieces: output.FailedPieces !== undefined && output.FailedPieces !== null ? output.FailedPieces : undefined,
        Failures: output.Failures !== undefined && output.Failures !== null
            ? deserializeAws_restJson1ListOf__string(output.Failures, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
        TotalFailures: output.TotalFailures !== undefined && output.TotalFailures !== null ? output.TotalFailures : undefined,
        TotalPieces: output.TotalPieces !== undefined && output.TotalPieces !== null ? output.TotalPieces : undefined,
        TotalProcessed: output.TotalProcessed !== undefined && output.TotalProcessed !== null ? output.TotalProcessed : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1ExportJobsResponse = (output, context) => {
    return {
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_restJson1ListOfExportJobResponse(output.Item, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_restJson1GCMChannelResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        Credential: output.Credential !== undefined && output.Credential !== null ? output.Credential : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        HasCredential: output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1GPSCoordinates = (output, context) => {
    return {
        Latitude: output.Latitude !== undefined && output.Latitude !== null ? output.Latitude : undefined,
        Longitude: output.Longitude !== undefined && output.Longitude !== null ? output.Longitude : undefined,
    };
};
const deserializeAws_restJson1GPSPointDimension = (output, context) => {
    return {
        Coordinates: output.Coordinates !== undefined && output.Coordinates !== null
            ? deserializeAws_restJson1GPSCoordinates(output.Coordinates, context)
            : undefined,
        RangeInKilometers: output.RangeInKilometers !== undefined && output.RangeInKilometers !== null
            ? output.RangeInKilometers
            : undefined,
    };
};
const deserializeAws_restJson1HoldoutActivity = (output, context) => {
    return {
        NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
        Percentage: output.Percentage !== undefined && output.Percentage !== null ? output.Percentage : undefined,
    };
};
const deserializeAws_restJson1ImportJobResource = (output, context) => {
    return {
        DefineSegment: output.DefineSegment !== undefined && output.DefineSegment !== null ? output.DefineSegment : undefined,
        ExternalId: output.ExternalId !== undefined && output.ExternalId !== null ? output.ExternalId : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        RegisterEndpoints: output.RegisterEndpoints !== undefined && output.RegisterEndpoints !== null
            ? output.RegisterEndpoints
            : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        S3Url: output.S3Url !== undefined && output.S3Url !== null ? output.S3Url : undefined,
        SegmentId: output.SegmentId !== undefined && output.SegmentId !== null ? output.SegmentId : undefined,
        SegmentName: output.SegmentName !== undefined && output.SegmentName !== null ? output.SegmentName : undefined,
    };
};
const deserializeAws_restJson1ImportJobResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CompletedPieces: output.CompletedPieces !== undefined && output.CompletedPieces !== null ? output.CompletedPieces : undefined,
        CompletionDate: output.CompletionDate !== undefined && output.CompletionDate !== null ? output.CompletionDate : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        Definition: output.Definition !== undefined && output.Definition !== null
            ? deserializeAws_restJson1ImportJobResource(output.Definition, context)
            : undefined,
        FailedPieces: output.FailedPieces !== undefined && output.FailedPieces !== null ? output.FailedPieces : undefined,
        Failures: output.Failures !== undefined && output.Failures !== null
            ? deserializeAws_restJson1ListOf__string(output.Failures, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
        TotalFailures: output.TotalFailures !== undefined && output.TotalFailures !== null ? output.TotalFailures : undefined,
        TotalPieces: output.TotalPieces !== undefined && output.TotalPieces !== null ? output.TotalPieces : undefined,
        TotalProcessed: output.TotalProcessed !== undefined && output.TotalProcessed !== null ? output.TotalProcessed : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1ImportJobsResponse = (output, context) => {
    return {
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_restJson1ListOfImportJobResponse(output.Item, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_restJson1ItemResponse = (output, context) => {
    return {
        EndpointItemResponse: output.EndpointItemResponse !== undefined && output.EndpointItemResponse !== null
            ? deserializeAws_restJson1EndpointItemResponse(output.EndpointItemResponse, context)
            : undefined,
        EventsItemResponse: output.EventsItemResponse !== undefined && output.EventsItemResponse !== null
            ? deserializeAws_restJson1MapOfEventItemResponse(output.EventsItemResponse, context)
            : undefined,
    };
};
const deserializeAws_restJson1JourneyCustomMessage = (output, context) => {
    return {
        Data: output.Data !== undefined && output.Data !== null ? output.Data : undefined,
    };
};
const deserializeAws_restJson1JourneyDateRangeKpiResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(output.EndTime) : undefined,
        JourneyId: output.JourneyId !== undefined && output.JourneyId !== null ? output.JourneyId : undefined,
        KpiName: output.KpiName !== undefined && output.KpiName !== null ? output.KpiName : undefined,
        KpiResult: output.KpiResult !== undefined && output.KpiResult !== null
            ? deserializeAws_restJson1BaseKpiResult(output.KpiResult, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? new Date(output.StartTime) : undefined,
    };
};
const deserializeAws_restJson1JourneyEmailMessage = (output, context) => {
    return {
        FromAddress: output.FromAddress !== undefined && output.FromAddress !== null ? output.FromAddress : undefined,
    };
};
const deserializeAws_restJson1JourneyExecutionActivityMetricsResponse = (output, context) => {
    return {
        ActivityType: output.ActivityType !== undefined && output.ActivityType !== null ? output.ActivityType : undefined,
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        JourneyActivityId: output.JourneyActivityId !== undefined && output.JourneyActivityId !== null
            ? output.JourneyActivityId
            : undefined,
        JourneyId: output.JourneyId !== undefined && output.JourneyId !== null ? output.JourneyId : undefined,
        LastEvaluatedTime: output.LastEvaluatedTime !== undefined && output.LastEvaluatedTime !== null
            ? output.LastEvaluatedTime
            : undefined,
        Metrics: output.Metrics !== undefined && output.Metrics !== null
            ? deserializeAws_restJson1MapOf__string(output.Metrics, context)
            : undefined,
    };
};
const deserializeAws_restJson1JourneyExecutionMetricsResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        JourneyId: output.JourneyId !== undefined && output.JourneyId !== null ? output.JourneyId : undefined,
        LastEvaluatedTime: output.LastEvaluatedTime !== undefined && output.LastEvaluatedTime !== null
            ? output.LastEvaluatedTime
            : undefined,
        Metrics: output.Metrics !== undefined && output.Metrics !== null
            ? deserializeAws_restJson1MapOf__string(output.Metrics, context)
            : undefined,
    };
};
const deserializeAws_restJson1JourneyLimits = (output, context) => {
    return {
        DailyCap: output.DailyCap !== undefined && output.DailyCap !== null ? output.DailyCap : undefined,
        EndpointReentryCap: output.EndpointReentryCap !== undefined && output.EndpointReentryCap !== null
            ? output.EndpointReentryCap
            : undefined,
        EndpointReentryInterval: output.EndpointReentryInterval !== undefined && output.EndpointReentryInterval !== null
            ? output.EndpointReentryInterval
            : undefined,
        MessagesPerSecond: output.MessagesPerSecond !== undefined && output.MessagesPerSecond !== null
            ? output.MessagesPerSecond
            : undefined,
    };
};
const deserializeAws_restJson1JourneyPushMessage = (output, context) => {
    return {
        TimeToLive: output.TimeToLive !== undefined && output.TimeToLive !== null ? output.TimeToLive : undefined,
    };
};
const deserializeAws_restJson1JourneyResponse = (output, context) => {
    return {
        Activities: output.Activities !== undefined && output.Activities !== null
            ? deserializeAws_restJson1MapOfActivity(output.Activities, context)
            : undefined,
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Limits: output.Limits !== undefined && output.Limits !== null
            ? deserializeAws_restJson1JourneyLimits(output.Limits, context)
            : undefined,
        LocalTime: output.LocalTime !== undefined && output.LocalTime !== null ? output.LocalTime : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        QuietTime: output.QuietTime !== undefined && output.QuietTime !== null
            ? deserializeAws_restJson1QuietTime(output.QuietTime, context)
            : undefined,
        RefreshFrequency: output.RefreshFrequency !== undefined && output.RefreshFrequency !== null ? output.RefreshFrequency : undefined,
        RefreshOnSegmentUpdate: output.RefreshOnSegmentUpdate !== undefined && output.RefreshOnSegmentUpdate !== null
            ? output.RefreshOnSegmentUpdate
            : undefined,
        Schedule: output.Schedule !== undefined && output.Schedule !== null
            ? deserializeAws_restJson1JourneySchedule(output.Schedule, context)
            : undefined,
        StartActivity: output.StartActivity !== undefined && output.StartActivity !== null ? output.StartActivity : undefined,
        StartCondition: output.StartCondition !== undefined && output.StartCondition !== null
            ? deserializeAws_restJson1StartCondition(output.StartCondition, context)
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        WaitForQuietTime: output.WaitForQuietTime !== undefined && output.WaitForQuietTime !== null ? output.WaitForQuietTime : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1MapOf__string(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1JourneySchedule = (output, context) => {
    return {
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(output.EndTime) : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? new Date(output.StartTime) : undefined,
        Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
    };
};
const deserializeAws_restJson1JourneySMSMessage = (output, context) => {
    return {
        EntityId: output.EntityId !== undefined && output.EntityId !== null ? output.EntityId : undefined,
        MessageType: output.MessageType !== undefined && output.MessageType !== null ? output.MessageType : undefined,
        OriginationNumber: output.OriginationNumber !== undefined && output.OriginationNumber !== null
            ? output.OriginationNumber
            : undefined,
        SenderId: output.SenderId !== undefined && output.SenderId !== null ? output.SenderId : undefined,
        TemplateId: output.TemplateId !== undefined && output.TemplateId !== null ? output.TemplateId : undefined,
    };
};
const deserializeAws_restJson1JourneysResponse = (output, context) => {
    return {
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_restJson1ListOfJourneyResponse(output.Item, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_restJson1ListOf__EndpointTypesElement = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ListOf__string = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ListOfActivityResponse = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ActivityResponse(entry, context);
    });
};
const deserializeAws_restJson1ListOfApplicationResponse = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ApplicationResponse(entry, context);
    });
};
const deserializeAws_restJson1ListOfCampaignResponse = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CampaignResponse(entry, context);
    });
};
const deserializeAws_restJson1ListOfEndpointResponse = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EndpointResponse(entry, context);
    });
};
const deserializeAws_restJson1ListOfExportJobResponse = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ExportJobResponse(entry, context);
    });
};
const deserializeAws_restJson1ListOfImportJobResponse = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImportJobResponse(entry, context);
    });
};
const deserializeAws_restJson1ListOfJourneyResponse = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JourneyResponse(entry, context);
    });
};
const deserializeAws_restJson1ListOfMultiConditionalBranch = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MultiConditionalBranch(entry, context);
    });
};
const deserializeAws_restJson1ListOfRandomSplitEntry = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RandomSplitEntry(entry, context);
    });
};
const deserializeAws_restJson1ListOfRecommenderConfigurationResponse = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RecommenderConfigurationResponse(entry, context);
    });
};
const deserializeAws_restJson1ListOfResultRow = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResultRow(entry, context);
    });
};
const deserializeAws_restJson1ListOfResultRowValue = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResultRowValue(entry, context);
    });
};
const deserializeAws_restJson1ListOfSegmentDimensions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SegmentDimensions(entry, context);
    });
};
const deserializeAws_restJson1ListOfSegmentGroup = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SegmentGroup(entry, context);
    });
};
const deserializeAws_restJson1ListOfSegmentReference = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SegmentReference(entry, context);
    });
};
const deserializeAws_restJson1ListOfSegmentResponse = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SegmentResponse(entry, context);
    });
};
const deserializeAws_restJson1ListOfSimpleCondition = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SimpleCondition(entry, context);
    });
};
const deserializeAws_restJson1ListOfTemplateResponse = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TemplateResponse(entry, context);
    });
};
const deserializeAws_restJson1ListOfTemplateVersionResponse = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TemplateVersionResponse(entry, context);
    });
};
const deserializeAws_restJson1ListOfTreatmentResource = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TreatmentResource(entry, context);
    });
};
const deserializeAws_restJson1ListRecommenderConfigurationsResponse = (output, context) => {
    return {
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_restJson1ListOfRecommenderConfigurationResponse(output.Item, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_restJson1MapOf__double = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_restJson1MapOf__integer = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_restJson1MapOf__string = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_restJson1MapOfActivity = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1Activity(value, context),
        };
    }, {});
};
const deserializeAws_restJson1MapOfAttributeDimension = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1AttributeDimension(value, context),
        };
    }, {});
};
const deserializeAws_restJson1MapOfChannelResponse = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1ChannelResponse(value, context),
        };
    }, {});
};
const deserializeAws_restJson1MapOfEndpointMessageResult = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1EndpointMessageResult(value, context),
        };
    }, {});
};
const deserializeAws_restJson1MapOfEventItemResponse = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1EventItemResponse(value, context),
        };
    }, {});
};
const deserializeAws_restJson1MapOfItemResponse = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1ItemResponse(value, context),
        };
    }, {});
};
const deserializeAws_restJson1MapOfListOf__string = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1ListOf__string(value, context),
        };
    }, {});
};
const deserializeAws_restJson1MapOfMapOfEndpointMessageResult = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1MapOfEndpointMessageResult(value, context),
        };
    }, {});
};
const deserializeAws_restJson1MapOfMessageResult = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1MessageResult(value, context),
        };
    }, {});
};
const deserializeAws_restJson1MapOfMetricDimension = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1MetricDimension(value, context),
        };
    }, {});
};
const deserializeAws_restJson1Message = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
        ImageIconUrl: output.ImageIconUrl !== undefined && output.ImageIconUrl !== null ? output.ImageIconUrl : undefined,
        ImageSmallIconUrl: output.ImageSmallIconUrl !== undefined && output.ImageSmallIconUrl !== null
            ? output.ImageSmallIconUrl
            : undefined,
        ImageUrl: output.ImageUrl !== undefined && output.ImageUrl !== null ? output.ImageUrl : undefined,
        JsonBody: output.JsonBody !== undefined && output.JsonBody !== null ? output.JsonBody : undefined,
        MediaUrl: output.MediaUrl !== undefined && output.MediaUrl !== null ? output.MediaUrl : undefined,
        RawContent: output.RawContent !== undefined && output.RawContent !== null ? output.RawContent : undefined,
        SilentPush: output.SilentPush !== undefined && output.SilentPush !== null ? output.SilentPush : undefined,
        TimeToLive: output.TimeToLive !== undefined && output.TimeToLive !== null ? output.TimeToLive : undefined,
        Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
        Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
    };
};
const deserializeAws_restJson1MessageBody = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RequestID: output.RequestID !== undefined && output.RequestID !== null ? output.RequestID : undefined,
    };
};
const deserializeAws_restJson1MessageConfiguration = (output, context) => {
    return {
        ADMMessage: output.ADMMessage !== undefined && output.ADMMessage !== null
            ? deserializeAws_restJson1Message(output.ADMMessage, context)
            : undefined,
        APNSMessage: output.APNSMessage !== undefined && output.APNSMessage !== null
            ? deserializeAws_restJson1Message(output.APNSMessage, context)
            : undefined,
        BaiduMessage: output.BaiduMessage !== undefined && output.BaiduMessage !== null
            ? deserializeAws_restJson1Message(output.BaiduMessage, context)
            : undefined,
        CustomMessage: output.CustomMessage !== undefined && output.CustomMessage !== null
            ? deserializeAws_restJson1CampaignCustomMessage(output.CustomMessage, context)
            : undefined,
        DefaultMessage: output.DefaultMessage !== undefined && output.DefaultMessage !== null
            ? deserializeAws_restJson1Message(output.DefaultMessage, context)
            : undefined,
        EmailMessage: output.EmailMessage !== undefined && output.EmailMessage !== null
            ? deserializeAws_restJson1CampaignEmailMessage(output.EmailMessage, context)
            : undefined,
        GCMMessage: output.GCMMessage !== undefined && output.GCMMessage !== null
            ? deserializeAws_restJson1Message(output.GCMMessage, context)
            : undefined,
        SMSMessage: output.SMSMessage !== undefined && output.SMSMessage !== null
            ? deserializeAws_restJson1CampaignSmsMessage(output.SMSMessage, context)
            : undefined,
    };
};
const deserializeAws_restJson1MessageResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        EndpointResult: output.EndpointResult !== undefined && output.EndpointResult !== null
            ? deserializeAws_restJson1MapOfEndpointMessageResult(output.EndpointResult, context)
            : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
        Result: output.Result !== undefined && output.Result !== null
            ? deserializeAws_restJson1MapOfMessageResult(output.Result, context)
            : undefined,
    };
};
const deserializeAws_restJson1MessageResult = (output, context) => {
    return {
        DeliveryStatus: output.DeliveryStatus !== undefined && output.DeliveryStatus !== null ? output.DeliveryStatus : undefined,
        MessageId: output.MessageId !== undefined && output.MessageId !== null ? output.MessageId : undefined,
        StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        UpdatedToken: output.UpdatedToken !== undefined && output.UpdatedToken !== null ? output.UpdatedToken : undefined,
    };
};
const deserializeAws_restJson1MetricDimension = (output, context) => {
    return {
        ComparisonOperator: output.ComparisonOperator !== undefined && output.ComparisonOperator !== null
            ? output.ComparisonOperator
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1MultiConditionalBranch = (output, context) => {
    return {
        Condition: output.Condition !== undefined && output.Condition !== null
            ? deserializeAws_restJson1SimpleCondition(output.Condition, context)
            : undefined,
        NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
    };
};
const deserializeAws_restJson1MultiConditionalSplitActivity = (output, context) => {
    return {
        Branches: output.Branches !== undefined && output.Branches !== null
            ? deserializeAws_restJson1ListOfMultiConditionalBranch(output.Branches, context)
            : undefined,
        DefaultActivity: output.DefaultActivity !== undefined && output.DefaultActivity !== null ? output.DefaultActivity : undefined,
        EvaluationWaitTime: output.EvaluationWaitTime !== undefined && output.EvaluationWaitTime !== null
            ? deserializeAws_restJson1WaitTime(output.EvaluationWaitTime, context)
            : undefined,
    };
};
const deserializeAws_restJson1NumberValidateResponse = (output, context) => {
    return {
        Carrier: output.Carrier !== undefined && output.Carrier !== null ? output.Carrier : undefined,
        City: output.City !== undefined && output.City !== null ? output.City : undefined,
        CleansedPhoneNumberE164: output.CleansedPhoneNumberE164 !== undefined && output.CleansedPhoneNumberE164 !== null
            ? output.CleansedPhoneNumberE164
            : undefined,
        CleansedPhoneNumberNational: output.CleansedPhoneNumberNational !== undefined && output.CleansedPhoneNumberNational !== null
            ? output.CleansedPhoneNumberNational
            : undefined,
        Country: output.Country !== undefined && output.Country !== null ? output.Country : undefined,
        CountryCodeIso2: output.CountryCodeIso2 !== undefined && output.CountryCodeIso2 !== null ? output.CountryCodeIso2 : undefined,
        CountryCodeNumeric: output.CountryCodeNumeric !== undefined && output.CountryCodeNumeric !== null
            ? output.CountryCodeNumeric
            : undefined,
        County: output.County !== undefined && output.County !== null ? output.County : undefined,
        OriginalCountryCodeIso2: output.OriginalCountryCodeIso2 !== undefined && output.OriginalCountryCodeIso2 !== null
            ? output.OriginalCountryCodeIso2
            : undefined,
        OriginalPhoneNumber: output.OriginalPhoneNumber !== undefined && output.OriginalPhoneNumber !== null
            ? output.OriginalPhoneNumber
            : undefined,
        PhoneType: output.PhoneType !== undefined && output.PhoneType !== null ? output.PhoneType : undefined,
        PhoneTypeCode: output.PhoneTypeCode !== undefined && output.PhoneTypeCode !== null ? output.PhoneTypeCode : undefined,
        Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
        ZipCode: output.ZipCode !== undefined && output.ZipCode !== null ? output.ZipCode : undefined,
    };
};
const deserializeAws_restJson1PushMessageActivity = (output, context) => {
    return {
        MessageConfig: output.MessageConfig !== undefined && output.MessageConfig !== null
            ? deserializeAws_restJson1JourneyPushMessage(output.MessageConfig, context)
            : undefined,
        NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
        TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
        TemplateVersion: output.TemplateVersion !== undefined && output.TemplateVersion !== null ? output.TemplateVersion : undefined,
    };
};
const deserializeAws_restJson1PushNotificationTemplateResponse = (output, context) => {
    return {
        ADM: output.ADM !== undefined && output.ADM !== null
            ? deserializeAws_restJson1AndroidPushNotificationTemplate(output.ADM, context)
            : undefined,
        APNS: output.APNS !== undefined && output.APNS !== null
            ? deserializeAws_restJson1APNSPushNotificationTemplate(output.APNS, context)
            : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Baidu: output.Baidu !== undefined && output.Baidu !== null
            ? deserializeAws_restJson1AndroidPushNotificationTemplate(output.Baidu, context)
            : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        Default: output.Default !== undefined && output.Default !== null
            ? deserializeAws_restJson1DefaultPushNotificationTemplate(output.Default, context)
            : undefined,
        DefaultSubstitutions: output.DefaultSubstitutions !== undefined && output.DefaultSubstitutions !== null
            ? output.DefaultSubstitutions
            : undefined,
        GCM: output.GCM !== undefined && output.GCM !== null
            ? deserializeAws_restJson1AndroidPushNotificationTemplate(output.GCM, context)
            : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        RecommenderId: output.RecommenderId !== undefined && output.RecommenderId !== null ? output.RecommenderId : undefined,
        TemplateDescription: output.TemplateDescription !== undefined && output.TemplateDescription !== null
            ? output.TemplateDescription
            : undefined,
        TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
        TemplateType: output.TemplateType !== undefined && output.TemplateType !== null ? output.TemplateType : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1MapOf__string(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1QuietTime = (output, context) => {
    return {
        End: output.End !== undefined && output.End !== null ? output.End : undefined,
        Start: output.Start !== undefined && output.Start !== null ? output.Start : undefined,
    };
};
const deserializeAws_restJson1RandomSplitActivity = (output, context) => {
    return {
        Branches: output.Branches !== undefined && output.Branches !== null
            ? deserializeAws_restJson1ListOfRandomSplitEntry(output.Branches, context)
            : undefined,
    };
};
const deserializeAws_restJson1RandomSplitEntry = (output, context) => {
    return {
        NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
        Percentage: output.Percentage !== undefined && output.Percentage !== null ? output.Percentage : undefined,
    };
};
const deserializeAws_restJson1RecencyDimension = (output, context) => {
    return {
        Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
        RecencyType: output.RecencyType !== undefined && output.RecencyType !== null ? output.RecencyType : undefined,
    };
};
const deserializeAws_restJson1RecommenderConfigurationResponse = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_restJson1MapOf__string(output.Attributes, context)
            : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RecommendationProviderIdType: output.RecommendationProviderIdType !== undefined && output.RecommendationProviderIdType !== null
            ? output.RecommendationProviderIdType
            : undefined,
        RecommendationProviderRoleArn: output.RecommendationProviderRoleArn !== undefined && output.RecommendationProviderRoleArn !== null
            ? output.RecommendationProviderRoleArn
            : undefined,
        RecommendationProviderUri: output.RecommendationProviderUri !== undefined && output.RecommendationProviderUri !== null
            ? output.RecommendationProviderUri
            : undefined,
        RecommendationTransformerUri: output.RecommendationTransformerUri !== undefined && output.RecommendationTransformerUri !== null
            ? output.RecommendationTransformerUri
            : undefined,
        RecommendationsDisplayName: output.RecommendationsDisplayName !== undefined && output.RecommendationsDisplayName !== null
            ? output.RecommendationsDisplayName
            : undefined,
        RecommendationsPerMessage: output.RecommendationsPerMessage !== undefined && output.RecommendationsPerMessage !== null
            ? output.RecommendationsPerMessage
            : undefined,
    };
};
const deserializeAws_restJson1ResultRow = (output, context) => {
    return {
        GroupedBys: output.GroupedBys !== undefined && output.GroupedBys !== null
            ? deserializeAws_restJson1ListOfResultRowValue(output.GroupedBys, context)
            : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_restJson1ListOfResultRowValue(output.Values, context)
            : undefined,
    };
};
const deserializeAws_restJson1ResultRowValue = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1Schedule = (output, context) => {
    return {
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
        EventFilter: output.EventFilter !== undefined && output.EventFilter !== null
            ? deserializeAws_restJson1CampaignEventFilter(output.EventFilter, context)
            : undefined,
        Frequency: output.Frequency !== undefined && output.Frequency !== null ? output.Frequency : undefined,
        IsLocalTime: output.IsLocalTime !== undefined && output.IsLocalTime !== null ? output.IsLocalTime : undefined,
        QuietTime: output.QuietTime !== undefined && output.QuietTime !== null
            ? deserializeAws_restJson1QuietTime(output.QuietTime, context)
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
        Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
    };
};
const deserializeAws_restJson1SegmentBehaviors = (output, context) => {
    return {
        Recency: output.Recency !== undefined && output.Recency !== null
            ? deserializeAws_restJson1RecencyDimension(output.Recency, context)
            : undefined,
    };
};
const deserializeAws_restJson1SegmentCondition = (output, context) => {
    return {
        SegmentId: output.SegmentId !== undefined && output.SegmentId !== null ? output.SegmentId : undefined,
    };
};
const deserializeAws_restJson1SegmentDemographics = (output, context) => {
    return {
        AppVersion: output.AppVersion !== undefined && output.AppVersion !== null
            ? deserializeAws_restJson1SetDimension(output.AppVersion, context)
            : undefined,
        Channel: output.Channel !== undefined && output.Channel !== null
            ? deserializeAws_restJson1SetDimension(output.Channel, context)
            : undefined,
        DeviceType: output.DeviceType !== undefined && output.DeviceType !== null
            ? deserializeAws_restJson1SetDimension(output.DeviceType, context)
            : undefined,
        Make: output.Make !== undefined && output.Make !== null
            ? deserializeAws_restJson1SetDimension(output.Make, context)
            : undefined,
        Model: output.Model !== undefined && output.Model !== null
            ? deserializeAws_restJson1SetDimension(output.Model, context)
            : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null
            ? deserializeAws_restJson1SetDimension(output.Platform, context)
            : undefined,
    };
};
const deserializeAws_restJson1SegmentDimensions = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_restJson1MapOfAttributeDimension(output.Attributes, context)
            : undefined,
        Behavior: output.Behavior !== undefined && output.Behavior !== null
            ? deserializeAws_restJson1SegmentBehaviors(output.Behavior, context)
            : undefined,
        Demographic: output.Demographic !== undefined && output.Demographic !== null
            ? deserializeAws_restJson1SegmentDemographics(output.Demographic, context)
            : undefined,
        Location: output.Location !== undefined && output.Location !== null
            ? deserializeAws_restJson1SegmentLocation(output.Location, context)
            : undefined,
        Metrics: output.Metrics !== undefined && output.Metrics !== null
            ? deserializeAws_restJson1MapOfMetricDimension(output.Metrics, context)
            : undefined,
        UserAttributes: output.UserAttributes !== undefined && output.UserAttributes !== null
            ? deserializeAws_restJson1MapOfAttributeDimension(output.UserAttributes, context)
            : undefined,
    };
};
const deserializeAws_restJson1SegmentGroup = (output, context) => {
    return {
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_restJson1ListOfSegmentDimensions(output.Dimensions, context)
            : undefined,
        SourceSegments: output.SourceSegments !== undefined && output.SourceSegments !== null
            ? deserializeAws_restJson1ListOfSegmentReference(output.SourceSegments, context)
            : undefined,
        SourceType: output.SourceType !== undefined && output.SourceType !== null ? output.SourceType : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1SegmentGroupList = (output, context) => {
    return {
        Groups: output.Groups !== undefined && output.Groups !== null
            ? deserializeAws_restJson1ListOfSegmentGroup(output.Groups, context)
            : undefined,
        Include: output.Include !== undefined && output.Include !== null ? output.Include : undefined,
    };
};
const deserializeAws_restJson1SegmentImportResource = (output, context) => {
    return {
        ChannelCounts: output.ChannelCounts !== undefined && output.ChannelCounts !== null
            ? deserializeAws_restJson1MapOf__integer(output.ChannelCounts, context)
            : undefined,
        ExternalId: output.ExternalId !== undefined && output.ExternalId !== null ? output.ExternalId : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        S3Url: output.S3Url !== undefined && output.S3Url !== null ? output.S3Url : undefined,
        Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
    };
};
const deserializeAws_restJson1SegmentLocation = (output, context) => {
    return {
        Country: output.Country !== undefined && output.Country !== null
            ? deserializeAws_restJson1SetDimension(output.Country, context)
            : undefined,
        GPSPoint: output.GPSPoint !== undefined && output.GPSPoint !== null
            ? deserializeAws_restJson1GPSPointDimension(output.GPSPoint, context)
            : undefined,
    };
};
const deserializeAws_restJson1SegmentReference = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1SegmentResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_restJson1SegmentDimensions(output.Dimensions, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ImportDefinition: output.ImportDefinition !== undefined && output.ImportDefinition !== null
            ? deserializeAws_restJson1SegmentImportResource(output.ImportDefinition, context)
            : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SegmentGroups: output.SegmentGroups !== undefined && output.SegmentGroups !== null
            ? deserializeAws_restJson1SegmentGroupList(output.SegmentGroups, context)
            : undefined,
        SegmentType: output.SegmentType !== undefined && output.SegmentType !== null ? output.SegmentType : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1MapOf__string(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1SegmentsResponse = (output, context) => {
    return {
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_restJson1ListOfSegmentResponse(output.Item, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_restJson1SendUsersMessageResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
        Result: output.Result !== undefined && output.Result !== null
            ? deserializeAws_restJson1MapOfMapOfEndpointMessageResult(output.Result, context)
            : undefined,
    };
};
const deserializeAws_restJson1SetDimension = (output, context) => {
    return {
        DimensionType: output.DimensionType !== undefined && output.DimensionType !== null ? output.DimensionType : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_restJson1ListOf__string(output.Values, context)
            : undefined,
    };
};
const deserializeAws_restJson1SimpleCondition = (output, context) => {
    return {
        EventCondition: output.EventCondition !== undefined && output.EventCondition !== null
            ? deserializeAws_restJson1EventCondition(output.EventCondition, context)
            : undefined,
        SegmentCondition: output.SegmentCondition !== undefined && output.SegmentCondition !== null
            ? deserializeAws_restJson1SegmentCondition(output.SegmentCondition, context)
            : undefined,
        SegmentDimensions: output.segmentDimensions !== undefined && output.segmentDimensions !== null
            ? deserializeAws_restJson1SegmentDimensions(output.segmentDimensions, context)
            : undefined,
    };
};
const deserializeAws_restJson1SMSChannelResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        HasCredential: output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        PromotionalMessagesPerSecond: output.PromotionalMessagesPerSecond !== undefined && output.PromotionalMessagesPerSecond !== null
            ? output.PromotionalMessagesPerSecond
            : undefined,
        SenderId: output.SenderId !== undefined && output.SenderId !== null ? output.SenderId : undefined,
        ShortCode: output.ShortCode !== undefined && output.ShortCode !== null ? output.ShortCode : undefined,
        TransactionalMessagesPerSecond: output.TransactionalMessagesPerSecond !== undefined && output.TransactionalMessagesPerSecond !== null
            ? output.TransactionalMessagesPerSecond
            : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1SMSMessageActivity = (output, context) => {
    return {
        MessageConfig: output.MessageConfig !== undefined && output.MessageConfig !== null
            ? deserializeAws_restJson1JourneySMSMessage(output.MessageConfig, context)
            : undefined,
        NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
        TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
        TemplateVersion: output.TemplateVersion !== undefined && output.TemplateVersion !== null ? output.TemplateVersion : undefined,
    };
};
const deserializeAws_restJson1SMSTemplateResponse = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        DefaultSubstitutions: output.DefaultSubstitutions !== undefined && output.DefaultSubstitutions !== null
            ? output.DefaultSubstitutions
            : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        RecommenderId: output.RecommenderId !== undefined && output.RecommenderId !== null ? output.RecommenderId : undefined,
        TemplateDescription: output.TemplateDescription !== undefined && output.TemplateDescription !== null
            ? output.TemplateDescription
            : undefined,
        TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
        TemplateType: output.TemplateType !== undefined && output.TemplateType !== null ? output.TemplateType : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1MapOf__string(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1StartCondition = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        EventStartCondition: output.EventStartCondition !== undefined && output.EventStartCondition !== null
            ? deserializeAws_restJson1EventStartCondition(output.EventStartCondition, context)
            : undefined,
        SegmentStartCondition: output.SegmentStartCondition !== undefined && output.SegmentStartCondition !== null
            ? deserializeAws_restJson1SegmentCondition(output.SegmentStartCondition, context)
            : undefined,
    };
};
const deserializeAws_restJson1TagsModel = (output, context) => {
    return {
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1MapOf__string(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1Template = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1TemplateConfiguration = (output, context) => {
    return {
        EmailTemplate: output.EmailTemplate !== undefined && output.EmailTemplate !== null
            ? deserializeAws_restJson1Template(output.EmailTemplate, context)
            : undefined,
        PushTemplate: output.PushTemplate !== undefined && output.PushTemplate !== null
            ? deserializeAws_restJson1Template(output.PushTemplate, context)
            : undefined,
        SMSTemplate: output.SMSTemplate !== undefined && output.SMSTemplate !== null
            ? deserializeAws_restJson1Template(output.SMSTemplate, context)
            : undefined,
        VoiceTemplate: output.VoiceTemplate !== undefined && output.VoiceTemplate !== null
            ? deserializeAws_restJson1Template(output.VoiceTemplate, context)
            : undefined,
    };
};
const deserializeAws_restJson1TemplateResponse = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        DefaultSubstitutions: output.DefaultSubstitutions !== undefined && output.DefaultSubstitutions !== null
            ? output.DefaultSubstitutions
            : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        TemplateDescription: output.TemplateDescription !== undefined && output.TemplateDescription !== null
            ? output.TemplateDescription
            : undefined,
        TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
        TemplateType: output.TemplateType !== undefined && output.TemplateType !== null ? output.TemplateType : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1MapOf__string(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1TemplatesResponse = (output, context) => {
    return {
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_restJson1ListOfTemplateResponse(output.Item, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_restJson1TemplateVersionResponse = (output, context) => {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        DefaultSubstitutions: output.DefaultSubstitutions !== undefined && output.DefaultSubstitutions !== null
            ? output.DefaultSubstitutions
            : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        TemplateDescription: output.TemplateDescription !== undefined && output.TemplateDescription !== null
            ? output.TemplateDescription
            : undefined,
        TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
        TemplateType: output.TemplateType !== undefined && output.TemplateType !== null ? output.TemplateType : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1TemplateVersionsResponse = (output, context) => {
    return {
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_restJson1ListOfTemplateVersionResponse(output.Item, context)
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        RequestID: output.RequestID !== undefined && output.RequestID !== null ? output.RequestID : undefined,
    };
};
const deserializeAws_restJson1TreatmentResource = (output, context) => {
    return {
        CustomDeliveryConfiguration: output.CustomDeliveryConfiguration !== undefined && output.CustomDeliveryConfiguration !== null
            ? deserializeAws_restJson1CustomDeliveryConfiguration(output.CustomDeliveryConfiguration, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        MessageConfiguration: output.MessageConfiguration !== undefined && output.MessageConfiguration !== null
            ? deserializeAws_restJson1MessageConfiguration(output.MessageConfiguration, context)
            : undefined,
        Schedule: output.Schedule !== undefined && output.Schedule !== null
            ? deserializeAws_restJson1Schedule(output.Schedule, context)
            : undefined,
        SizePercent: output.SizePercent !== undefined && output.SizePercent !== null ? output.SizePercent : undefined,
        State: output.State !== undefined && output.State !== null
            ? deserializeAws_restJson1CampaignState(output.State, context)
            : undefined,
        TemplateConfiguration: output.TemplateConfiguration !== undefined && output.TemplateConfiguration !== null
            ? deserializeAws_restJson1TemplateConfiguration(output.TemplateConfiguration, context)
            : undefined,
        TreatmentDescription: output.TreatmentDescription !== undefined && output.TreatmentDescription !== null
            ? output.TreatmentDescription
            : undefined,
        TreatmentName: output.TreatmentName !== undefined && output.TreatmentName !== null ? output.TreatmentName : undefined,
    };
};
const deserializeAws_restJson1VoiceChannelResponse = (output, context) => {
    return {
        ApplicationId: output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        HasCredential: output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1VoiceTemplateResponse = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        DefaultSubstitutions: output.DefaultSubstitutions !== undefined && output.DefaultSubstitutions !== null
            ? output.DefaultSubstitutions
            : undefined,
        LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
        TemplateDescription: output.TemplateDescription !== undefined && output.TemplateDescription !== null
            ? output.TemplateDescription
            : undefined,
        TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
        TemplateType: output.TemplateType !== undefined && output.TemplateType !== null ? output.TemplateType : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
        VoiceId: output.VoiceId !== undefined && output.VoiceId !== null ? output.VoiceId : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1MapOf__string(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1WaitActivity = (output, context) => {
    return {
        NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
        WaitTime: output.WaitTime !== undefined && output.WaitTime !== null
            ? deserializeAws_restJson1WaitTime(output.WaitTime, context)
            : undefined,
    };
};
const deserializeAws_restJson1WaitTime = (output, context) => {
    return {
        WaitFor: output.WaitFor !== undefined && output.WaitFor !== null ? output.WaitFor : undefined,
        WaitUntil: output.WaitUntil !== undefined && output.WaitUntil !== null ? output.WaitUntil : undefined,
    };
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_restJson1.js.map