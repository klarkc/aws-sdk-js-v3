"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateProfilingGroupCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1SubmitFeedbackCommand = exports.deserializeAws_restJson1RemovePermissionCommand = exports.deserializeAws_restJson1RemoveNotificationChannelCommand = exports.deserializeAws_restJson1PutPermissionCommand = exports.deserializeAws_restJson1PostAgentProfileCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListProfilingGroupsCommand = exports.deserializeAws_restJson1ListProfileTimesCommand = exports.deserializeAws_restJson1ListFindingsReportsCommand = exports.deserializeAws_restJson1GetRecommendationsCommand = exports.deserializeAws_restJson1GetProfileCommand = exports.deserializeAws_restJson1GetPolicyCommand = exports.deserializeAws_restJson1GetNotificationConfigurationCommand = exports.deserializeAws_restJson1GetFindingsReportAccountSummaryCommand = exports.deserializeAws_restJson1DescribeProfilingGroupCommand = exports.deserializeAws_restJson1DeleteProfilingGroupCommand = exports.deserializeAws_restJson1CreateProfilingGroupCommand = exports.deserializeAws_restJson1ConfigureAgentCommand = exports.deserializeAws_restJson1BatchGetFrameMetricDataCommand = exports.deserializeAws_restJson1AddNotificationChannelsCommand = exports.serializeAws_restJson1UpdateProfilingGroupCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1SubmitFeedbackCommand = exports.serializeAws_restJson1RemovePermissionCommand = exports.serializeAws_restJson1RemoveNotificationChannelCommand = exports.serializeAws_restJson1PutPermissionCommand = exports.serializeAws_restJson1PostAgentProfileCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListProfilingGroupsCommand = exports.serializeAws_restJson1ListProfileTimesCommand = exports.serializeAws_restJson1ListFindingsReportsCommand = exports.serializeAws_restJson1GetRecommendationsCommand = exports.serializeAws_restJson1GetProfileCommand = exports.serializeAws_restJson1GetPolicyCommand = exports.serializeAws_restJson1GetNotificationConfigurationCommand = exports.serializeAws_restJson1GetFindingsReportAccountSummaryCommand = exports.serializeAws_restJson1DescribeProfilingGroupCommand = exports.serializeAws_restJson1DeleteProfilingGroupCommand = exports.serializeAws_restJson1CreateProfilingGroupCommand = exports.serializeAws_restJson1ConfigureAgentCommand = exports.serializeAws_restJson1BatchGetFrameMetricDataCommand = exports.serializeAws_restJson1AddNotificationChannelsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1AddNotificationChannelsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/profilingGroups/{profilingGroupName}/notificationConfiguration";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.channels !== undefined &&
            input.channels !== null && { channels: serializeAws_restJson1Channels(input.channels, context) }),
    });
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
exports.serializeAws_restJson1AddNotificationChannelsCommand = serializeAws_restJson1AddNotificationChannelsCommand;
const serializeAws_restJson1BatchGetFrameMetricDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/profilingGroups/{profilingGroupName}/frames/-/metrics";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    const query = {
        ...(input.startTime !== undefined && { startTime: (input.startTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.endTime !== undefined && { endTime: (input.endTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.period !== undefined && { period: input.period }),
        ...(input.targetResolution !== undefined && { targetResolution: input.targetResolution }),
    };
    let body;
    body = JSON.stringify({
        ...(input.frameMetrics !== undefined &&
            input.frameMetrics !== null && { frameMetrics: serializeAws_restJson1FrameMetrics(input.frameMetrics, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1BatchGetFrameMetricDataCommand = serializeAws_restJson1BatchGetFrameMetricDataCommand;
const serializeAws_restJson1ConfigureAgentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/profilingGroups/{profilingGroupName}/configureAgent";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.fleetInstanceId !== undefined &&
            input.fleetInstanceId !== null && { fleetInstanceId: input.fleetInstanceId }),
        ...(input.metadata !== undefined &&
            input.metadata !== null && { metadata: serializeAws_restJson1Metadata(input.metadata, context) }),
    });
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
exports.serializeAws_restJson1ConfigureAgentCommand = serializeAws_restJson1ConfigureAgentCommand;
const serializeAws_restJson1CreateProfilingGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/profilingGroups";
    const query = {
        ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    };
    let body;
    body = JSON.stringify({
        ...(input.agentOrchestrationConfig !== undefined &&
            input.agentOrchestrationConfig !== null && {
            agentOrchestrationConfig: serializeAws_restJson1AgentOrchestrationConfig(input.agentOrchestrationConfig, context),
        }),
        ...(input.computePlatform !== undefined &&
            input.computePlatform !== null && { computePlatform: input.computePlatform }),
        ...(input.profilingGroupName !== undefined &&
            input.profilingGroupName !== null && { profilingGroupName: input.profilingGroupName }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1CreateProfilingGroupCommand = serializeAws_restJson1CreateProfilingGroupCommand;
const serializeAws_restJson1DeleteProfilingGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/profilingGroups/{profilingGroupName}";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
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
exports.serializeAws_restJson1DeleteProfilingGroupCommand = serializeAws_restJson1DeleteProfilingGroupCommand;
const serializeAws_restJson1DescribeProfilingGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/profilingGroups/{profilingGroupName}";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
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
exports.serializeAws_restJson1DescribeProfilingGroupCommand = serializeAws_restJson1DescribeProfilingGroupCommand;
const serializeAws_restJson1GetFindingsReportAccountSummaryCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/internal/findingsReports";
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.dailyReportsOnly !== undefined && { dailyReportsOnly: input.dailyReportsOnly.toString() }),
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
exports.serializeAws_restJson1GetFindingsReportAccountSummaryCommand = serializeAws_restJson1GetFindingsReportAccountSummaryCommand;
const serializeAws_restJson1GetNotificationConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/profilingGroups/{profilingGroupName}/notificationConfiguration";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
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
exports.serializeAws_restJson1GetNotificationConfigurationCommand = serializeAws_restJson1GetNotificationConfigurationCommand;
const serializeAws_restJson1GetPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/profilingGroups/{profilingGroupName}/policy";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
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
exports.serializeAws_restJson1GetPolicyCommand = serializeAws_restJson1GetPolicyCommand;
const serializeAws_restJson1GetProfileCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.accept) && { accept: input.accept }),
    };
    let resolvedPath = "/profilingGroups/{profilingGroupName}/profile";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    const query = {
        ...(input.startTime !== undefined && { startTime: (input.startTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.period !== undefined && { period: input.period }),
        ...(input.endTime !== undefined && { endTime: (input.endTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.maxDepth !== undefined && { maxDepth: input.maxDepth.toString() }),
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
exports.serializeAws_restJson1GetProfileCommand = serializeAws_restJson1GetProfileCommand;
const serializeAws_restJson1GetRecommendationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/internal/profilingGroups/{profilingGroupName}/recommendations";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    const query = {
        ...(input.startTime !== undefined && { startTime: (input.startTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.endTime !== undefined && { endTime: (input.endTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.locale !== undefined && { locale: input.locale }),
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
exports.serializeAws_restJson1GetRecommendationsCommand = serializeAws_restJson1GetRecommendationsCommand;
const serializeAws_restJson1ListFindingsReportsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/internal/profilingGroups/{profilingGroupName}/findingsReports";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    const query = {
        ...(input.startTime !== undefined && { startTime: (input.startTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.endTime !== undefined && { endTime: (input.endTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.dailyReportsOnly !== undefined && { dailyReportsOnly: input.dailyReportsOnly.toString() }),
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
exports.serializeAws_restJson1ListFindingsReportsCommand = serializeAws_restJson1ListFindingsReportsCommand;
const serializeAws_restJson1ListProfileTimesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/profilingGroups/{profilingGroupName}/profileTimes";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    const query = {
        ...(input.startTime !== undefined && { startTime: (input.startTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.endTime !== undefined && { endTime: (input.endTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.period !== undefined && { period: input.period }),
        ...(input.orderBy !== undefined && { orderBy: input.orderBy }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListProfileTimesCommand = serializeAws_restJson1ListProfileTimesCommand;
const serializeAws_restJson1ListProfilingGroupsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/profilingGroups";
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.includeDescription !== undefined && { includeDescription: input.includeDescription.toString() }),
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
exports.serializeAws_restJson1ListProfilingGroupsCommand = serializeAws_restJson1ListProfilingGroupsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
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
const serializeAws_restJson1PostAgentProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/octet-stream",
        ...(isSerializableHeaderValue(input.contentType) && { "content-type": input.contentType }),
    };
    let resolvedPath = "/profilingGroups/{profilingGroupName}/agentProfile";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    const query = {
        ...(input.profileToken !== undefined && { profileToken: input.profileToken }),
    };
    let body;
    if (input.agentProfile !== undefined) {
        body = input.agentProfile;
    }
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1PostAgentProfileCommand = serializeAws_restJson1PostAgentProfileCommand;
const serializeAws_restJson1PutPermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/profilingGroups/{profilingGroupName}/policy/{actionGroup}";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    if (input.actionGroup !== undefined) {
        const labelValue = input.actionGroup;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: actionGroup.");
        }
        resolvedPath = resolvedPath.replace("{actionGroup}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: actionGroup.");
    }
    let body;
    body = JSON.stringify({
        ...(input.principals !== undefined &&
            input.principals !== null && { principals: serializeAws_restJson1Principals(input.principals, context) }),
        ...(input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }),
    });
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
exports.serializeAws_restJson1PutPermissionCommand = serializeAws_restJson1PutPermissionCommand;
const serializeAws_restJson1RemoveNotificationChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/profilingGroups/{profilingGroupName}/notificationConfiguration/{channelId}";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    if (input.channelId !== undefined) {
        const labelValue = input.channelId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: channelId.");
        }
        resolvedPath = resolvedPath.replace("{channelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: channelId.");
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
exports.serializeAws_restJson1RemoveNotificationChannelCommand = serializeAws_restJson1RemoveNotificationChannelCommand;
const serializeAws_restJson1RemovePermissionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/profilingGroups/{profilingGroupName}/policy/{actionGroup}";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    if (input.actionGroup !== undefined) {
        const labelValue = input.actionGroup;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: actionGroup.");
        }
        resolvedPath = resolvedPath.replace("{actionGroup}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: actionGroup.");
    }
    const query = {
        ...(input.revisionId !== undefined && { revisionId: input.revisionId }),
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
exports.serializeAws_restJson1RemovePermissionCommand = serializeAws_restJson1RemovePermissionCommand;
const serializeAws_restJson1SubmitFeedbackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/internal/profilingGroups/{profilingGroupName}/anomalies/{anomalyInstanceId}/feedback";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    if (input.anomalyInstanceId !== undefined) {
        const labelValue = input.anomalyInstanceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: anomalyInstanceId.");
        }
        resolvedPath = resolvedPath.replace("{anomalyInstanceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: anomalyInstanceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.comment !== undefined && input.comment !== null && { comment: input.comment }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    });
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
exports.serializeAws_restJson1SubmitFeedbackCommand = serializeAws_restJson1SubmitFeedbackCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
    });
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
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    const query = {
        ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
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
const serializeAws_restJson1UpdateProfilingGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/profilingGroups/{profilingGroupName}";
    if (input.profilingGroupName !== undefined) {
        const labelValue = input.profilingGroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: profilingGroupName.");
        }
        resolvedPath = resolvedPath.replace("{profilingGroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: profilingGroupName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.agentOrchestrationConfig !== undefined &&
            input.agentOrchestrationConfig !== null && {
            agentOrchestrationConfig: serializeAws_restJson1AgentOrchestrationConfig(input.agentOrchestrationConfig, context),
        }),
    });
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
exports.serializeAws_restJson1UpdateProfilingGroupCommand = serializeAws_restJson1UpdateProfilingGroupCommand;
const deserializeAws_restJson1AddNotificationChannelsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AddNotificationChannelsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        notificationConfiguration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.notificationConfiguration !== undefined && data.notificationConfiguration !== null) {
        contents.notificationConfiguration = deserializeAws_restJson1NotificationConfiguration(data.notificationConfiguration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AddNotificationChannelsCommand = deserializeAws_restJson1AddNotificationChannelsCommand;
const deserializeAws_restJson1AddNotificationChannelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.codeguruprofiler#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeguruprofiler#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1BatchGetFrameMetricDataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchGetFrameMetricDataCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        endTime: undefined,
        endTimes: undefined,
        frameMetricData: undefined,
        resolution: undefined,
        startTime: undefined,
        unprocessedEndTimes: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.endTime !== undefined && data.endTime !== null) {
        contents.endTime = new Date(data.endTime);
    }
    if (data.endTimes !== undefined && data.endTimes !== null) {
        contents.endTimes = deserializeAws_restJson1ListOfTimestamps(data.endTimes, context);
    }
    if (data.frameMetricData !== undefined && data.frameMetricData !== null) {
        contents.frameMetricData = deserializeAws_restJson1FrameMetricData(data.frameMetricData, context);
    }
    if (data.resolution !== undefined && data.resolution !== null) {
        contents.resolution = data.resolution;
    }
    if (data.startTime !== undefined && data.startTime !== null) {
        contents.startTime = new Date(data.startTime);
    }
    if (data.unprocessedEndTimes !== undefined && data.unprocessedEndTimes !== null) {
        contents.unprocessedEndTimes = deserializeAws_restJson1UnprocessedEndTimeMap(data.unprocessedEndTimes, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchGetFrameMetricDataCommand = deserializeAws_restJson1BatchGetFrameMetricDataCommand;
const deserializeAws_restJson1BatchGetFrameMetricDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ConfigureAgentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ConfigureAgentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        configuration: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.configuration = deserializeAws_restJson1AgentConfiguration(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ConfigureAgentCommand = deserializeAws_restJson1ConfigureAgentCommand;
const deserializeAws_restJson1ConfigureAgentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateProfilingGroupCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateProfilingGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        profilingGroup: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.profilingGroup = deserializeAws_restJson1ProfilingGroupDescription(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateProfilingGroupCommand = deserializeAws_restJson1CreateProfilingGroupCommand;
const deserializeAws_restJson1CreateProfilingGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.codeguruprofiler#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.codeguruprofiler#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteProfilingGroupCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteProfilingGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteProfilingGroupCommand = deserializeAws_restJson1DeleteProfilingGroupCommand;
const deserializeAws_restJson1DeleteProfilingGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.codeguruprofiler#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeProfilingGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeProfilingGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        profilingGroup: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.profilingGroup = deserializeAws_restJson1ProfilingGroupDescription(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeProfilingGroupCommand = deserializeAws_restJson1DescribeProfilingGroupCommand;
const deserializeAws_restJson1DescribeProfilingGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetFindingsReportAccountSummaryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFindingsReportAccountSummaryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        reportSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.reportSummaries !== undefined && data.reportSummaries !== null) {
        contents.reportSummaries = deserializeAws_restJson1FindingsReportSummaries(data.reportSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFindingsReportAccountSummaryCommand = deserializeAws_restJson1GetFindingsReportAccountSummaryCommand;
const deserializeAws_restJson1GetFindingsReportAccountSummaryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetNotificationConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetNotificationConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        notificationConfiguration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.notificationConfiguration !== undefined && data.notificationConfiguration !== null) {
        contents.notificationConfiguration = deserializeAws_restJson1NotificationConfiguration(data.notificationConfiguration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetNotificationConfigurationCommand = deserializeAws_restJson1GetNotificationConfigurationCommand;
const deserializeAws_restJson1GetNotificationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
        revisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = data.policy;
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetPolicyCommand = deserializeAws_restJson1GetPolicyCommand;
const deserializeAws_restJson1GetPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        contentEncoding: undefined,
        contentType: undefined,
        profile: undefined,
    };
    if (output.headers["content-type"] !== undefined) {
        contents.contentType = output.headers["content-type"];
    }
    if (output.headers["content-encoding"] !== undefined) {
        contents.contentEncoding = output.headers["content-encoding"];
    }
    const data = await collectBody(output.body, context);
    contents.profile = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetProfileCommand = deserializeAws_restJson1GetProfileCommand;
const deserializeAws_restJson1GetProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetRecommendationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetRecommendationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        anomalies: undefined,
        profileEndTime: undefined,
        profileStartTime: undefined,
        profilingGroupName: undefined,
        recommendations: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.anomalies !== undefined && data.anomalies !== null) {
        contents.anomalies = deserializeAws_restJson1Anomalies(data.anomalies, context);
    }
    if (data.profileEndTime !== undefined && data.profileEndTime !== null) {
        contents.profileEndTime = new Date(data.profileEndTime);
    }
    if (data.profileStartTime !== undefined && data.profileStartTime !== null) {
        contents.profileStartTime = new Date(data.profileStartTime);
    }
    if (data.profilingGroupName !== undefined && data.profilingGroupName !== null) {
        contents.profilingGroupName = data.profilingGroupName;
    }
    if (data.recommendations !== undefined && data.recommendations !== null) {
        contents.recommendations = deserializeAws_restJson1Recommendations(data.recommendations, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRecommendationsCommand = deserializeAws_restJson1GetRecommendationsCommand;
const deserializeAws_restJson1GetRecommendationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListFindingsReportsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFindingsReportsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        findingsReportSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.findingsReportSummaries !== undefined && data.findingsReportSummaries !== null) {
        contents.findingsReportSummaries = deserializeAws_restJson1FindingsReportSummaries(data.findingsReportSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFindingsReportsCommand = deserializeAws_restJson1ListFindingsReportsCommand;
const deserializeAws_restJson1ListFindingsReportsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListProfileTimesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListProfileTimesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        profileTimes: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.profileTimes !== undefined && data.profileTimes !== null) {
        contents.profileTimes = deserializeAws_restJson1ProfileTimes(data.profileTimes, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListProfileTimesCommand = deserializeAws_restJson1ListProfileTimesCommand;
const deserializeAws_restJson1ListProfileTimesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListProfilingGroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListProfilingGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        profilingGroupNames: undefined,
        profilingGroups: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.profilingGroupNames !== undefined && data.profilingGroupNames !== null) {
        contents.profilingGroupNames = deserializeAws_restJson1ProfilingGroupNames(data.profilingGroupNames, context);
    }
    if (data.profilingGroups !== undefined && data.profilingGroups !== null) {
        contents.profilingGroups = deserializeAws_restJson1ProfilingGroupDescriptions(data.profilingGroups, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListProfilingGroupsCommand = deserializeAws_restJson1ListProfilingGroupsCommand;
const deserializeAws_restJson1ListProfilingGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
    }
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
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PostAgentProfileCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1PostAgentProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PostAgentProfileCommand = deserializeAws_restJson1PostAgentProfileCommand;
const deserializeAws_restJson1PostAgentProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutPermissionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutPermissionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
        revisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = data.policy;
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutPermissionCommand = deserializeAws_restJson1PutPermissionCommand;
const deserializeAws_restJson1PutPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.codeguruprofiler#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RemoveNotificationChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RemoveNotificationChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        notificationConfiguration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.notificationConfiguration !== undefined && data.notificationConfiguration !== null) {
        contents.notificationConfiguration = deserializeAws_restJson1NotificationConfiguration(data.notificationConfiguration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveNotificationChannelCommand = deserializeAws_restJson1RemoveNotificationChannelCommand;
const deserializeAws_restJson1RemoveNotificationChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RemovePermissionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RemovePermissionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
        revisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = data.policy;
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemovePermissionCommand = deserializeAws_restJson1RemovePermissionCommand;
const deserializeAws_restJson1RemovePermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.codeguruprofiler#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SubmitFeedbackCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1SubmitFeedbackCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SubmitFeedbackCommand = deserializeAws_restJson1SubmitFeedbackCommand;
const deserializeAws_restJson1SubmitFeedbackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateProfilingGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateProfilingGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        profilingGroup: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.profilingGroup = deserializeAws_restJson1ProfilingGroupDescription(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateProfilingGroupCommand = deserializeAws_restJson1UpdateProfilingGroupCommand;
const deserializeAws_restJson1UpdateProfilingGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.codeguruprofiler#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.codeguruprofiler#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.codeguruprofiler#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.codeguruprofiler#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $retryable: {},
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $retryable: {},
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $retryable: {},
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const serializeAws_restJson1AgentOrchestrationConfig = (input, context) => {
    return {
        ...(input.profilingEnabled !== undefined &&
            input.profilingEnabled !== null && { profilingEnabled: input.profilingEnabled }),
    };
};
const serializeAws_restJson1Channel = (input, context) => {
    return {
        ...(input.eventPublishers !== undefined &&
            input.eventPublishers !== null && {
            eventPublishers: serializeAws_restJson1EventPublishers(input.eventPublishers, context),
        }),
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.uri !== undefined && input.uri !== null && { uri: input.uri }),
    };
};
const serializeAws_restJson1Channels = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Channel(entry, context);
    });
};
const serializeAws_restJson1EventPublishers = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1FrameMetric = (input, context) => {
    return {
        ...(input.frameName !== undefined && input.frameName !== null && { frameName: input.frameName }),
        ...(input.threadStates !== undefined &&
            input.threadStates !== null && { threadStates: serializeAws_restJson1ThreadStates(input.threadStates, context) }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_restJson1FrameMetrics = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1FrameMetric(entry, context);
    });
};
const serializeAws_restJson1Metadata = (input, context) => {
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
const serializeAws_restJson1Principals = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TagsMap = (input, context) => {
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
const serializeAws_restJson1ThreadStates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1AgentConfiguration = (output, context) => {
    return {
        agentParameters: output.agentParameters !== undefined && output.agentParameters !== null
            ? deserializeAws_restJson1AgentParameters(output.agentParameters, context)
            : undefined,
        periodInSeconds: output.periodInSeconds !== undefined && output.periodInSeconds !== null ? output.periodInSeconds : undefined,
        shouldProfile: output.shouldProfile !== undefined && output.shouldProfile !== null ? output.shouldProfile : undefined,
    };
};
const deserializeAws_restJson1AgentOrchestrationConfig = (output, context) => {
    return {
        profilingEnabled: output.profilingEnabled !== undefined && output.profilingEnabled !== null ? output.profilingEnabled : undefined,
    };
};
const deserializeAws_restJson1AgentParameters = (output, context) => {
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
const deserializeAws_restJson1AggregatedProfileTime = (output, context) => {
    return {
        period: output.period !== undefined && output.period !== null ? output.period : undefined,
        start: output.start !== undefined && output.start !== null ? new Date(output.start) : undefined,
    };
};
const deserializeAws_restJson1Anomalies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Anomaly(entry, context);
    });
};
const deserializeAws_restJson1Anomaly = (output, context) => {
    return {
        instances: output.instances !== undefined && output.instances !== null
            ? deserializeAws_restJson1AnomalyInstances(output.instances, context)
            : undefined,
        metric: output.metric !== undefined && output.metric !== null
            ? deserializeAws_restJson1Metric(output.metric, context)
            : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
const deserializeAws_restJson1AnomalyInstance = (output, context) => {
    return {
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(output.endTime) : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null ? new Date(output.startTime) : undefined,
        userFeedback: output.userFeedback !== undefined && output.userFeedback !== null
            ? deserializeAws_restJson1UserFeedback(output.userFeedback, context)
            : undefined,
    };
};
const deserializeAws_restJson1AnomalyInstances = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AnomalyInstance(entry, context);
    });
};
const deserializeAws_restJson1Channel = (output, context) => {
    return {
        eventPublishers: output.eventPublishers !== undefined && output.eventPublishers !== null
            ? deserializeAws_restJson1EventPublishers(output.eventPublishers, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        uri: output.uri !== undefined && output.uri !== null ? output.uri : undefined,
    };
};
const deserializeAws_restJson1Channels = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Channel(entry, context);
    });
};
const deserializeAws_restJson1EventPublishers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1FindingsReportSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FindingsReportSummary(entry, context);
    });
};
const deserializeAws_restJson1FindingsReportSummary = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        profileEndTime: output.profileEndTime !== undefined && output.profileEndTime !== null
            ? new Date(output.profileEndTime)
            : undefined,
        profileStartTime: output.profileStartTime !== undefined && output.profileStartTime !== null
            ? new Date(output.profileStartTime)
            : undefined,
        profilingGroupName: output.profilingGroupName !== undefined && output.profilingGroupName !== null
            ? output.profilingGroupName
            : undefined,
        totalNumberOfFindings: output.totalNumberOfFindings !== undefined && output.totalNumberOfFindings !== null
            ? output.totalNumberOfFindings
            : undefined,
    };
};
const deserializeAws_restJson1FrameMetric = (output, context) => {
    return {
        frameName: output.frameName !== undefined && output.frameName !== null ? output.frameName : undefined,
        threadStates: output.threadStates !== undefined && output.threadStates !== null
            ? deserializeAws_restJson1ThreadStates(output.threadStates, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1FrameMetricData = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FrameMetricDatum(entry, context);
    });
};
const deserializeAws_restJson1FrameMetricDatum = (output, context) => {
    return {
        frameMetric: output.frameMetric !== undefined && output.frameMetric !== null
            ? deserializeAws_restJson1FrameMetric(output.frameMetric, context)
            : undefined,
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_restJson1FrameMetricValues(output.values, context)
            : undefined,
    };
};
const deserializeAws_restJson1FrameMetricValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ListOfTimestamps = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TimestampStructure(entry, context);
    });
};
const deserializeAws_restJson1Match = (output, context) => {
    return {
        frameAddress: output.frameAddress !== undefined && output.frameAddress !== null ? output.frameAddress : undefined,
        targetFramesIndex: output.targetFramesIndex !== undefined && output.targetFramesIndex !== null
            ? output.targetFramesIndex
            : undefined,
        thresholdBreachValue: output.thresholdBreachValue !== undefined && output.thresholdBreachValue !== null
            ? output.thresholdBreachValue
            : undefined,
    };
};
const deserializeAws_restJson1Matches = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Match(entry, context);
    });
};
const deserializeAws_restJson1Metric = (output, context) => {
    return {
        frameName: output.frameName !== undefined && output.frameName !== null ? output.frameName : undefined,
        threadStates: output.threadStates !== undefined && output.threadStates !== null
            ? deserializeAws_restJson1Strings(output.threadStates, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1NotificationConfiguration = (output, context) => {
    return {
        channels: output.channels !== undefined && output.channels !== null
            ? deserializeAws_restJson1Channels(output.channels, context)
            : undefined,
    };
};
const deserializeAws_restJson1Pattern = (output, context) => {
    return {
        countersToAggregate: output.countersToAggregate !== undefined && output.countersToAggregate !== null
            ? deserializeAws_restJson1Strings(output.countersToAggregate, context)
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        resolutionSteps: output.resolutionSteps !== undefined && output.resolutionSteps !== null ? output.resolutionSteps : undefined,
        targetFrames: output.targetFrames !== undefined && output.targetFrames !== null
            ? deserializeAws_restJson1TargetFrames(output.targetFrames, context)
            : undefined,
        thresholdPercent: output.thresholdPercent !== undefined && output.thresholdPercent !== null ? output.thresholdPercent : undefined,
    };
};
const deserializeAws_restJson1ProfileTime = (output, context) => {
    return {
        start: output.start !== undefined && output.start !== null ? new Date(output.start) : undefined,
    };
};
const deserializeAws_restJson1ProfileTimes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ProfileTime(entry, context);
    });
};
const deserializeAws_restJson1ProfilingGroupDescription = (output, context) => {
    return {
        agentOrchestrationConfig: output.agentOrchestrationConfig !== undefined && output.agentOrchestrationConfig !== null
            ? deserializeAws_restJson1AgentOrchestrationConfig(output.agentOrchestrationConfig, context)
            : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        computePlatform: output.computePlatform !== undefined && output.computePlatform !== null ? output.computePlatform : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        profilingStatus: output.profilingStatus !== undefined && output.profilingStatus !== null
            ? deserializeAws_restJson1ProfilingStatus(output.profilingStatus, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagsMap(output.tags, context)
            : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
    };
};
const deserializeAws_restJson1ProfilingGroupDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ProfilingGroupDescription(entry, context);
    });
};
const deserializeAws_restJson1ProfilingGroupNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ProfilingStatus = (output, context) => {
    return {
        latestAgentOrchestratedAt: output.latestAgentOrchestratedAt !== undefined && output.latestAgentOrchestratedAt !== null
            ? new Date(output.latestAgentOrchestratedAt)
            : undefined,
        latestAgentProfileReportedAt: output.latestAgentProfileReportedAt !== undefined && output.latestAgentProfileReportedAt !== null
            ? new Date(output.latestAgentProfileReportedAt)
            : undefined,
        latestAggregatedProfile: output.latestAggregatedProfile !== undefined && output.latestAggregatedProfile !== null
            ? deserializeAws_restJson1AggregatedProfileTime(output.latestAggregatedProfile, context)
            : undefined,
    };
};
const deserializeAws_restJson1Recommendation = (output, context) => {
    return {
        allMatchesCount: output.allMatchesCount !== undefined && output.allMatchesCount !== null ? output.allMatchesCount : undefined,
        allMatchesSum: output.allMatchesSum !== undefined && output.allMatchesSum !== null ? output.allMatchesSum : undefined,
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(output.endTime) : undefined,
        pattern: output.pattern !== undefined && output.pattern !== null
            ? deserializeAws_restJson1Pattern(output.pattern, context)
            : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null ? new Date(output.startTime) : undefined,
        topMatches: output.topMatches !== undefined && output.topMatches !== null
            ? deserializeAws_restJson1Matches(output.topMatches, context)
            : undefined,
    };
};
const deserializeAws_restJson1Recommendations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Recommendation(entry, context);
    });
};
const deserializeAws_restJson1Strings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1TagsMap = (output, context) => {
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
const deserializeAws_restJson1TargetFrame = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1TargetFrames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TargetFrame(entry, context);
    });
};
const deserializeAws_restJson1ThreadStates = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1TimestampStructure = (output, context) => {
    return {
        value: output.value !== undefined && output.value !== null ? new Date(output.value) : undefined,
    };
};
const deserializeAws_restJson1UnprocessedEndTimeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1ListOfTimestamps(value, context),
        };
    }, {});
};
const deserializeAws_restJson1UserFeedback = (output, context) => {
    return {
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
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