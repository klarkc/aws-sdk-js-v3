"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1PutTraceSegmentsCommand = exports.deserializeAws_restJson1PutTelemetryRecordsCommand = exports.deserializeAws_restJson1PutEncryptionConfigCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1GetTraceSummariesCommand = exports.deserializeAws_restJson1GetTraceGraphCommand = exports.deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand = exports.deserializeAws_restJson1GetServiceGraphCommand = exports.deserializeAws_restJson1GetSamplingTargetsCommand = exports.deserializeAws_restJson1GetSamplingStatisticSummariesCommand = exports.deserializeAws_restJson1GetSamplingRulesCommand = exports.deserializeAws_restJson1GetInsightSummariesCommand = exports.deserializeAws_restJson1GetInsightImpactGraphCommand = exports.deserializeAws_restJson1GetInsightEventsCommand = exports.deserializeAws_restJson1GetInsightCommand = exports.deserializeAws_restJson1GetGroupsCommand = exports.deserializeAws_restJson1GetGroupCommand = exports.deserializeAws_restJson1GetEncryptionConfigCommand = exports.deserializeAws_restJson1DeleteSamplingRuleCommand = exports.deserializeAws_restJson1DeleteGroupCommand = exports.deserializeAws_restJson1CreateSamplingRuleCommand = exports.deserializeAws_restJson1CreateGroupCommand = exports.deserializeAws_restJson1BatchGetTracesCommand = exports.serializeAws_restJson1UpdateSamplingRuleCommand = exports.serializeAws_restJson1UpdateGroupCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1PutTraceSegmentsCommand = exports.serializeAws_restJson1PutTelemetryRecordsCommand = exports.serializeAws_restJson1PutEncryptionConfigCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1GetTraceSummariesCommand = exports.serializeAws_restJson1GetTraceGraphCommand = exports.serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand = exports.serializeAws_restJson1GetServiceGraphCommand = exports.serializeAws_restJson1GetSamplingTargetsCommand = exports.serializeAws_restJson1GetSamplingStatisticSummariesCommand = exports.serializeAws_restJson1GetSamplingRulesCommand = exports.serializeAws_restJson1GetInsightSummariesCommand = exports.serializeAws_restJson1GetInsightImpactGraphCommand = exports.serializeAws_restJson1GetInsightEventsCommand = exports.serializeAws_restJson1GetInsightCommand = exports.serializeAws_restJson1GetGroupsCommand = exports.serializeAws_restJson1GetGroupCommand = exports.serializeAws_restJson1GetEncryptionConfigCommand = exports.serializeAws_restJson1DeleteSamplingRuleCommand = exports.serializeAws_restJson1DeleteGroupCommand = exports.serializeAws_restJson1CreateSamplingRuleCommand = exports.serializeAws_restJson1CreateGroupCommand = exports.serializeAws_restJson1BatchGetTracesCommand = void 0;
exports.deserializeAws_restJson1UpdateSamplingRuleCommand = exports.deserializeAws_restJson1UpdateGroupCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_restJson1BatchGetTracesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/Traces";
    let body;
    body = JSON.stringify({
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.TraceIds !== undefined &&
            input.TraceIds !== null && { TraceIds: serializeAws_restJson1TraceIdList(input.TraceIds, context) }),
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
exports.serializeAws_restJson1BatchGetTracesCommand = serializeAws_restJson1BatchGetTracesCommand;
const serializeAws_restJson1CreateGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CreateGroup";
    let body;
    body = JSON.stringify({
        ...(input.FilterExpression !== undefined &&
            input.FilterExpression !== null && { FilterExpression: input.FilterExpression }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
        ...(input.InsightsConfiguration !== undefined &&
            input.InsightsConfiguration !== null && {
            InsightsConfiguration: serializeAws_restJson1InsightsConfiguration(input.InsightsConfiguration, context),
        }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateGroupCommand = serializeAws_restJson1CreateGroupCommand;
const serializeAws_restJson1CreateSamplingRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CreateSamplingRule";
    let body;
    body = JSON.stringify({
        ...(input.SamplingRule !== undefined &&
            input.SamplingRule !== null && { SamplingRule: serializeAws_restJson1SamplingRule(input.SamplingRule, context) }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateSamplingRuleCommand = serializeAws_restJson1CreateSamplingRuleCommand;
const serializeAws_restJson1DeleteGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DeleteGroup";
    let body;
    body = JSON.stringify({
        ...(input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
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
exports.serializeAws_restJson1DeleteGroupCommand = serializeAws_restJson1DeleteGroupCommand;
const serializeAws_restJson1DeleteSamplingRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DeleteSamplingRule";
    let body;
    body = JSON.stringify({
        ...(input.RuleARN !== undefined && input.RuleARN !== null && { RuleARN: input.RuleARN }),
        ...(input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName }),
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
exports.serializeAws_restJson1DeleteSamplingRuleCommand = serializeAws_restJson1DeleteSamplingRuleCommand;
const serializeAws_restJson1GetEncryptionConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/EncryptionConfig";
    let body;
    body = "";
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
exports.serializeAws_restJson1GetEncryptionConfigCommand = serializeAws_restJson1GetEncryptionConfigCommand;
const serializeAws_restJson1GetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/GetGroup";
    let body;
    body = JSON.stringify({
        ...(input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
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
exports.serializeAws_restJson1GetGroupCommand = serializeAws_restJson1GetGroupCommand;
const serializeAws_restJson1GetGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/Groups";
    let body;
    body = JSON.stringify({
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1GetGroupsCommand = serializeAws_restJson1GetGroupsCommand;
const serializeAws_restJson1GetInsightCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/Insight";
    let body;
    body = JSON.stringify({
        ...(input.InsightId !== undefined && input.InsightId !== null && { InsightId: input.InsightId }),
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
exports.serializeAws_restJson1GetInsightCommand = serializeAws_restJson1GetInsightCommand;
const serializeAws_restJson1GetInsightEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/InsightEvents";
    let body;
    body = JSON.stringify({
        ...(input.InsightId !== undefined && input.InsightId !== null && { InsightId: input.InsightId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1GetInsightEventsCommand = serializeAws_restJson1GetInsightEventsCommand;
const serializeAws_restJson1GetInsightImpactGraphCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/InsightImpactGraph";
    let body;
    body = JSON.stringify({
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.InsightId !== undefined && input.InsightId !== null && { InsightId: input.InsightId }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
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
exports.serializeAws_restJson1GetInsightImpactGraphCommand = serializeAws_restJson1GetInsightImpactGraphCommand;
const serializeAws_restJson1GetInsightSummariesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/InsightSummaries";
    let body;
    body = JSON.stringify({
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
        ...(input.States !== undefined &&
            input.States !== null && { States: serializeAws_restJson1InsightStateList(input.States, context) }),
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
exports.serializeAws_restJson1GetInsightSummariesCommand = serializeAws_restJson1GetInsightSummariesCommand;
const serializeAws_restJson1GetSamplingRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/GetSamplingRules";
    let body;
    body = JSON.stringify({
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1GetSamplingRulesCommand = serializeAws_restJson1GetSamplingRulesCommand;
const serializeAws_restJson1GetSamplingStatisticSummariesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/SamplingStatisticSummaries";
    let body;
    body = JSON.stringify({
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1GetSamplingStatisticSummariesCommand = serializeAws_restJson1GetSamplingStatisticSummariesCommand;
const serializeAws_restJson1GetSamplingTargetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/SamplingTargets";
    let body;
    body = JSON.stringify({
        ...(input.SamplingStatisticsDocuments !== undefined &&
            input.SamplingStatisticsDocuments !== null && {
            SamplingStatisticsDocuments: serializeAws_restJson1SamplingStatisticsDocumentList(input.SamplingStatisticsDocuments, context),
        }),
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
exports.serializeAws_restJson1GetSamplingTargetsCommand = serializeAws_restJson1GetSamplingTargetsCommand;
const serializeAws_restJson1GetServiceGraphCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ServiceGraph";
    let body;
    body = JSON.stringify({
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
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
exports.serializeAws_restJson1GetServiceGraphCommand = serializeAws_restJson1GetServiceGraphCommand;
const serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/TimeSeriesServiceStatistics";
    let body;
    body = JSON.stringify({
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.EntitySelectorExpression !== undefined &&
            input.EntitySelectorExpression !== null && { EntitySelectorExpression: input.EntitySelectorExpression }),
        ...(input.ForecastStatistics !== undefined &&
            input.ForecastStatistics !== null && { ForecastStatistics: input.ForecastStatistics }),
        ...(input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Period !== undefined && input.Period !== null && { Period: input.Period }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
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
exports.serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand = serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand;
const serializeAws_restJson1GetTraceGraphCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/TraceGraph";
    let body;
    body = JSON.stringify({
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.TraceIds !== undefined &&
            input.TraceIds !== null && { TraceIds: serializeAws_restJson1TraceIdList(input.TraceIds, context) }),
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
exports.serializeAws_restJson1GetTraceGraphCommand = serializeAws_restJson1GetTraceGraphCommand;
const serializeAws_restJson1GetTraceSummariesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/TraceSummaries";
    let body;
    body = JSON.stringify({
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.FilterExpression !== undefined &&
            input.FilterExpression !== null && { FilterExpression: input.FilterExpression }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Sampling !== undefined && input.Sampling !== null && { Sampling: input.Sampling }),
        ...(input.SamplingStrategy !== undefined &&
            input.SamplingStrategy !== null && {
            SamplingStrategy: serializeAws_restJson1SamplingStrategy(input.SamplingStrategy, context),
        }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
        ...(input.TimeRangeType !== undefined && input.TimeRangeType !== null && { TimeRangeType: input.TimeRangeType }),
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
exports.serializeAws_restJson1GetTraceSummariesCommand = serializeAws_restJson1GetTraceSummariesCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListTagsForResource";
    let body;
    body = JSON.stringify({
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
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
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1PutEncryptionConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/PutEncryptionConfig";
    let body;
    body = JSON.stringify({
        ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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
exports.serializeAws_restJson1PutEncryptionConfigCommand = serializeAws_restJson1PutEncryptionConfigCommand;
const serializeAws_restJson1PutTelemetryRecordsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/TelemetryRecords";
    let body;
    body = JSON.stringify({
        ...(input.EC2InstanceId !== undefined && input.EC2InstanceId !== null && { EC2InstanceId: input.EC2InstanceId }),
        ...(input.Hostname !== undefined && input.Hostname !== null && { Hostname: input.Hostname }),
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TelemetryRecords !== undefined &&
            input.TelemetryRecords !== null && {
            TelemetryRecords: serializeAws_restJson1TelemetryRecordList(input.TelemetryRecords, context),
        }),
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
exports.serializeAws_restJson1PutTelemetryRecordsCommand = serializeAws_restJson1PutTelemetryRecordsCommand;
const serializeAws_restJson1PutTraceSegmentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/TraceSegments";
    let body;
    body = JSON.stringify({
        ...(input.TraceSegmentDocuments !== undefined &&
            input.TraceSegmentDocuments !== null && {
            TraceSegmentDocuments: serializeAws_restJson1TraceSegmentDocumentList(input.TraceSegmentDocuments, context),
        }),
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
exports.serializeAws_restJson1PutTraceSegmentsCommand = serializeAws_restJson1PutTraceSegmentsCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/TagResource";
    let body;
    body = JSON.stringify({
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/UntagResource";
    let body;
    body = JSON.stringify({
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context) }),
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
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/UpdateGroup";
    let body;
    body = JSON.stringify({
        ...(input.FilterExpression !== undefined &&
            input.FilterExpression !== null && { FilterExpression: input.FilterExpression }),
        ...(input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
        ...(input.InsightsConfiguration !== undefined &&
            input.InsightsConfiguration !== null && {
            InsightsConfiguration: serializeAws_restJson1InsightsConfiguration(input.InsightsConfiguration, context),
        }),
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
exports.serializeAws_restJson1UpdateGroupCommand = serializeAws_restJson1UpdateGroupCommand;
const serializeAws_restJson1UpdateSamplingRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/UpdateSamplingRule";
    let body;
    body = JSON.stringify({
        ...(input.SamplingRuleUpdate !== undefined &&
            input.SamplingRuleUpdate !== null && {
            SamplingRuleUpdate: serializeAws_restJson1SamplingRuleUpdate(input.SamplingRuleUpdate, context),
        }),
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
exports.serializeAws_restJson1UpdateSamplingRuleCommand = serializeAws_restJson1UpdateSamplingRuleCommand;
const deserializeAws_restJson1BatchGetTracesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchGetTracesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Traces: undefined,
        UnprocessedTraceIds: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Traces !== undefined && data.Traces !== null) {
        contents.Traces = deserializeAws_restJson1TraceList(data.Traces, context);
    }
    if (data.UnprocessedTraceIds !== undefined && data.UnprocessedTraceIds !== null) {
        contents.UnprocessedTraceIds = deserializeAws_restJson1UnprocessedTraceIdList(data.UnprocessedTraceIds, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchGetTracesCommand = deserializeAws_restJson1BatchGetTracesCommand;
const deserializeAws_restJson1BatchGetTracesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Group: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Group !== undefined && data.Group !== null) {
        contents.Group = deserializeAws_restJson1Group(data.Group, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateGroupCommand = deserializeAws_restJson1CreateGroupCommand;
const deserializeAws_restJson1CreateGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateSamplingRuleCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSamplingRuleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SamplingRuleRecord: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.SamplingRuleRecord !== undefined && data.SamplingRuleRecord !== null) {
        contents.SamplingRuleRecord = deserializeAws_restJson1SamplingRuleRecord(data.SamplingRuleRecord, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSamplingRuleCommand = deserializeAws_restJson1CreateSamplingRuleCommand;
const deserializeAws_restJson1CreateSamplingRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RuleLimitExceededException":
        case "com.amazonaws.xray#RuleLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1RuleLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteGroupCommand = deserializeAws_restJson1DeleteGroupCommand;
const deserializeAws_restJson1DeleteGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteSamplingRuleCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSamplingRuleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SamplingRuleRecord: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.SamplingRuleRecord !== undefined && data.SamplingRuleRecord !== null) {
        contents.SamplingRuleRecord = deserializeAws_restJson1SamplingRuleRecord(data.SamplingRuleRecord, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSamplingRuleCommand = deserializeAws_restJson1DeleteSamplingRuleCommand;
const deserializeAws_restJson1DeleteSamplingRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetEncryptionConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetEncryptionConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EncryptionConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.EncryptionConfig !== undefined && data.EncryptionConfig !== null) {
        contents.EncryptionConfig = deserializeAws_restJson1EncryptionConfig(data.EncryptionConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEncryptionConfigCommand = deserializeAws_restJson1GetEncryptionConfigCommand;
const deserializeAws_restJson1GetEncryptionConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Group: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Group !== undefined && data.Group !== null) {
        contents.Group = deserializeAws_restJson1Group(data.Group, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGroupCommand = deserializeAws_restJson1GetGroupCommand;
const deserializeAws_restJson1GetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetGroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Groups: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Groups !== undefined && data.Groups !== null) {
        contents.Groups = deserializeAws_restJson1GroupSummaryList(data.Groups, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGroupsCommand = deserializeAws_restJson1GetGroupsCommand;
const deserializeAws_restJson1GetGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetInsightCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetInsightCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Insight: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Insight !== undefined && data.Insight !== null) {
        contents.Insight = deserializeAws_restJson1Insight(data.Insight, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetInsightCommand = deserializeAws_restJson1GetInsightCommand;
const deserializeAws_restJson1GetInsightCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetInsightEventsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetInsightEventsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        InsightEvents: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.InsightEvents !== undefined && data.InsightEvents !== null) {
        contents.InsightEvents = deserializeAws_restJson1InsightEventList(data.InsightEvents, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetInsightEventsCommand = deserializeAws_restJson1GetInsightEventsCommand;
const deserializeAws_restJson1GetInsightEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetInsightImpactGraphCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetInsightImpactGraphCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EndTime: undefined,
        InsightId: undefined,
        NextToken: undefined,
        ServiceGraphEndTime: undefined,
        ServiceGraphStartTime: undefined,
        Services: undefined,
        StartTime: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.EndTime !== undefined && data.EndTime !== null) {
        contents.EndTime = new Date(Math.round(data.EndTime * 1000));
    }
    if (data.InsightId !== undefined && data.InsightId !== null) {
        contents.InsightId = data.InsightId;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.ServiceGraphEndTime !== undefined && data.ServiceGraphEndTime !== null) {
        contents.ServiceGraphEndTime = new Date(Math.round(data.ServiceGraphEndTime * 1000));
    }
    if (data.ServiceGraphStartTime !== undefined && data.ServiceGraphStartTime !== null) {
        contents.ServiceGraphStartTime = new Date(Math.round(data.ServiceGraphStartTime * 1000));
    }
    if (data.Services !== undefined && data.Services !== null) {
        contents.Services = deserializeAws_restJson1InsightImpactGraphServiceList(data.Services, context);
    }
    if (data.StartTime !== undefined && data.StartTime !== null) {
        contents.StartTime = new Date(Math.round(data.StartTime * 1000));
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetInsightImpactGraphCommand = deserializeAws_restJson1GetInsightImpactGraphCommand;
const deserializeAws_restJson1GetInsightImpactGraphCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetInsightSummariesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetInsightSummariesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        InsightSummaries: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.InsightSummaries !== undefined && data.InsightSummaries !== null) {
        contents.InsightSummaries = deserializeAws_restJson1InsightSummaryList(data.InsightSummaries, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetInsightSummariesCommand = deserializeAws_restJson1GetInsightSummariesCommand;
const deserializeAws_restJson1GetInsightSummariesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetSamplingRulesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSamplingRulesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        SamplingRuleRecords: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.SamplingRuleRecords !== undefined && data.SamplingRuleRecords !== null) {
        contents.SamplingRuleRecords = deserializeAws_restJson1SamplingRuleRecordList(data.SamplingRuleRecords, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSamplingRulesCommand = deserializeAws_restJson1GetSamplingRulesCommand;
const deserializeAws_restJson1GetSamplingRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetSamplingStatisticSummariesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSamplingStatisticSummariesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        SamplingStatisticSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.SamplingStatisticSummaries !== undefined && data.SamplingStatisticSummaries !== null) {
        contents.SamplingStatisticSummaries = deserializeAws_restJson1SamplingStatisticSummaryList(data.SamplingStatisticSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSamplingStatisticSummariesCommand = deserializeAws_restJson1GetSamplingStatisticSummariesCommand;
const deserializeAws_restJson1GetSamplingStatisticSummariesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetSamplingTargetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSamplingTargetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LastRuleModification: undefined,
        SamplingTargetDocuments: undefined,
        UnprocessedStatistics: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LastRuleModification !== undefined && data.LastRuleModification !== null) {
        contents.LastRuleModification = new Date(Math.round(data.LastRuleModification * 1000));
    }
    if (data.SamplingTargetDocuments !== undefined && data.SamplingTargetDocuments !== null) {
        contents.SamplingTargetDocuments = deserializeAws_restJson1SamplingTargetDocumentList(data.SamplingTargetDocuments, context);
    }
    if (data.UnprocessedStatistics !== undefined && data.UnprocessedStatistics !== null) {
        contents.UnprocessedStatistics = deserializeAws_restJson1UnprocessedStatisticsList(data.UnprocessedStatistics, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSamplingTargetsCommand = deserializeAws_restJson1GetSamplingTargetsCommand;
const deserializeAws_restJson1GetSamplingTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetServiceGraphCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetServiceGraphCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ContainsOldGroupVersions: undefined,
        EndTime: undefined,
        NextToken: undefined,
        Services: undefined,
        StartTime: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ContainsOldGroupVersions !== undefined && data.ContainsOldGroupVersions !== null) {
        contents.ContainsOldGroupVersions = data.ContainsOldGroupVersions;
    }
    if (data.EndTime !== undefined && data.EndTime !== null) {
        contents.EndTime = new Date(Math.round(data.EndTime * 1000));
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Services !== undefined && data.Services !== null) {
        contents.Services = deserializeAws_restJson1ServiceList(data.Services, context);
    }
    if (data.StartTime !== undefined && data.StartTime !== null) {
        contents.StartTime = new Date(Math.round(data.StartTime * 1000));
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetServiceGraphCommand = deserializeAws_restJson1GetServiceGraphCommand;
const deserializeAws_restJson1GetServiceGraphCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ContainsOldGroupVersions: undefined,
        NextToken: undefined,
        TimeSeriesServiceStatistics: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ContainsOldGroupVersions !== undefined && data.ContainsOldGroupVersions !== null) {
        contents.ContainsOldGroupVersions = data.ContainsOldGroupVersions;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.TimeSeriesServiceStatistics !== undefined && data.TimeSeriesServiceStatistics !== null) {
        contents.TimeSeriesServiceStatistics = deserializeAws_restJson1TimeSeriesServiceStatisticsList(data.TimeSeriesServiceStatistics, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand = deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand;
const deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetTraceGraphCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetTraceGraphCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Services: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Services !== undefined && data.Services !== null) {
        contents.Services = deserializeAws_restJson1ServiceList(data.Services, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetTraceGraphCommand = deserializeAws_restJson1GetTraceGraphCommand;
const deserializeAws_restJson1GetTraceGraphCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetTraceSummariesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetTraceSummariesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ApproximateTime: undefined,
        NextToken: undefined,
        TraceSummaries: undefined,
        TracesProcessedCount: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ApproximateTime !== undefined && data.ApproximateTime !== null) {
        contents.ApproximateTime = new Date(Math.round(data.ApproximateTime * 1000));
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.TraceSummaries !== undefined && data.TraceSummaries !== null) {
        contents.TraceSummaries = deserializeAws_restJson1TraceSummaryList(data.TraceSummaries, context);
    }
    if (data.TracesProcessedCount !== undefined && data.TracesProcessedCount !== null) {
        contents.TracesProcessedCount = data.TracesProcessedCount;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetTraceSummariesCommand = deserializeAws_restJson1GetTraceSummariesCommand;
const deserializeAws_restJson1GetTraceSummariesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
        NextToken: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
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
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.xray#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutEncryptionConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutEncryptionConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EncryptionConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.EncryptionConfig !== undefined && data.EncryptionConfig !== null) {
        contents.EncryptionConfig = deserializeAws_restJson1EncryptionConfig(data.EncryptionConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutEncryptionConfigCommand = deserializeAws_restJson1PutEncryptionConfigCommand;
const deserializeAws_restJson1PutEncryptionConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutTelemetryRecordsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutTelemetryRecordsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutTelemetryRecordsCommand = deserializeAws_restJson1PutTelemetryRecordsCommand;
const deserializeAws_restJson1PutTelemetryRecordsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutTraceSegmentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutTraceSegmentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        UnprocessedTraceSegments: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.UnprocessedTraceSegments !== undefined && data.UnprocessedTraceSegments !== null) {
        contents.UnprocessedTraceSegments = deserializeAws_restJson1UnprocessedTraceSegmentList(data.UnprocessedTraceSegments, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutTraceSegmentsCommand = deserializeAws_restJson1PutTraceSegmentsCommand;
const deserializeAws_restJson1PutTraceSegmentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
    if (output.statusCode !== 200 && output.statusCode >= 300) {
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
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.xray#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.xray#TooManyTagsException":
            response = {
                ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
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
    if (output.statusCode !== 200 && output.statusCode >= 300) {
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
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.xray#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Group: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Group !== undefined && data.Group !== null) {
        contents.Group = deserializeAws_restJson1Group(data.Group, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateGroupCommand = deserializeAws_restJson1UpdateGroupCommand;
const deserializeAws_restJson1UpdateGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateSamplingRuleCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateSamplingRuleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SamplingRuleRecord: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.SamplingRuleRecord !== undefined && data.SamplingRuleRecord !== null) {
        contents.SamplingRuleRecord = deserializeAws_restJson1SamplingRuleRecord(data.SamplingRuleRecord, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateSamplingRuleCommand = deserializeAws_restJson1UpdateSamplingRuleCommand;
const deserializeAws_restJson1UpdateSamplingRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.xray#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.xray#ThrottledException":
            response = {
                ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceName: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceName !== undefined && data.ResourceName !== null) {
        contents.ResourceName = data.ResourceName;
    }
    return contents;
};
const deserializeAws_restJson1RuleLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "RuleLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ThrottledExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyTagsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceName: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceName !== undefined && data.ResourceName !== null) {
        contents.ResourceName = data.ResourceName;
    }
    return contents;
};
const serializeAws_restJson1AttributeMap = (input, context) => {
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
const serializeAws_restJson1BackendConnectionErrors = (input, context) => {
    return {
        ...(input.ConnectionRefusedCount !== undefined &&
            input.ConnectionRefusedCount !== null && { ConnectionRefusedCount: input.ConnectionRefusedCount }),
        ...(input.HTTPCode4XXCount !== undefined &&
            input.HTTPCode4XXCount !== null && { HTTPCode4XXCount: input.HTTPCode4XXCount }),
        ...(input.HTTPCode5XXCount !== undefined &&
            input.HTTPCode5XXCount !== null && { HTTPCode5XXCount: input.HTTPCode5XXCount }),
        ...(input.OtherCount !== undefined && input.OtherCount !== null && { OtherCount: input.OtherCount }),
        ...(input.TimeoutCount !== undefined && input.TimeoutCount !== null && { TimeoutCount: input.TimeoutCount }),
        ...(input.UnknownHostCount !== undefined &&
            input.UnknownHostCount !== null && { UnknownHostCount: input.UnknownHostCount }),
    };
};
const serializeAws_restJson1InsightsConfiguration = (input, context) => {
    return {
        ...(input.InsightsEnabled !== undefined &&
            input.InsightsEnabled !== null && { InsightsEnabled: input.InsightsEnabled }),
        ...(input.NotificationsEnabled !== undefined &&
            input.NotificationsEnabled !== null && { NotificationsEnabled: input.NotificationsEnabled }),
    };
};
const serializeAws_restJson1InsightStateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SamplingRule = (input, context) => {
    return {
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_restJson1AttributeMap(input.Attributes, context) }),
        ...(input.FixedRate !== undefined && input.FixedRate !== null && { FixedRate: input.FixedRate }),
        ...(input.HTTPMethod !== undefined && input.HTTPMethod !== null && { HTTPMethod: input.HTTPMethod }),
        ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.ReservoirSize !== undefined && input.ReservoirSize !== null && { ReservoirSize: input.ReservoirSize }),
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.RuleARN !== undefined && input.RuleARN !== null && { RuleARN: input.RuleARN }),
        ...(input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName }),
        ...(input.ServiceName !== undefined && input.ServiceName !== null && { ServiceName: input.ServiceName }),
        ...(input.ServiceType !== undefined && input.ServiceType !== null && { ServiceType: input.ServiceType }),
        ...(input.URLPath !== undefined && input.URLPath !== null && { URLPath: input.URLPath }),
        ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    };
};
const serializeAws_restJson1SamplingRuleUpdate = (input, context) => {
    return {
        ...(input.Attributes !== undefined &&
            input.Attributes !== null && { Attributes: serializeAws_restJson1AttributeMap(input.Attributes, context) }),
        ...(input.FixedRate !== undefined && input.FixedRate !== null && { FixedRate: input.FixedRate }),
        ...(input.HTTPMethod !== undefined && input.HTTPMethod !== null && { HTTPMethod: input.HTTPMethod }),
        ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
        ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
        ...(input.ReservoirSize !== undefined && input.ReservoirSize !== null && { ReservoirSize: input.ReservoirSize }),
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.RuleARN !== undefined && input.RuleARN !== null && { RuleARN: input.RuleARN }),
        ...(input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName }),
        ...(input.ServiceName !== undefined && input.ServiceName !== null && { ServiceName: input.ServiceName }),
        ...(input.ServiceType !== undefined && input.ServiceType !== null && { ServiceType: input.ServiceType }),
        ...(input.URLPath !== undefined && input.URLPath !== null && { URLPath: input.URLPath }),
    };
};
const serializeAws_restJson1SamplingStatisticsDocument = (input, context) => {
    return {
        ...(input.BorrowCount !== undefined && input.BorrowCount !== null && { BorrowCount: input.BorrowCount }),
        ...(input.ClientID !== undefined && input.ClientID !== null && { ClientID: input.ClientID }),
        ...(input.RequestCount !== undefined && input.RequestCount !== null && { RequestCount: input.RequestCount }),
        ...(input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName }),
        ...(input.SampledCount !== undefined && input.SampledCount !== null && { SampledCount: input.SampledCount }),
        ...(input.Timestamp !== undefined &&
            input.Timestamp !== null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    };
};
const serializeAws_restJson1SamplingStatisticsDocumentList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SamplingStatisticsDocument(entry, context);
    });
};
const serializeAws_restJson1SamplingStrategy = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const serializeAws_restJson1TelemetryRecord = (input, context) => {
    return {
        ...(input.BackendConnectionErrors !== undefined &&
            input.BackendConnectionErrors !== null && {
            BackendConnectionErrors: serializeAws_restJson1BackendConnectionErrors(input.BackendConnectionErrors, context),
        }),
        ...(input.SegmentsReceivedCount !== undefined &&
            input.SegmentsReceivedCount !== null && { SegmentsReceivedCount: input.SegmentsReceivedCount }),
        ...(input.SegmentsRejectedCount !== undefined &&
            input.SegmentsRejectedCount !== null && { SegmentsRejectedCount: input.SegmentsRejectedCount }),
        ...(input.SegmentsSentCount !== undefined &&
            input.SegmentsSentCount !== null && { SegmentsSentCount: input.SegmentsSentCount }),
        ...(input.SegmentsSpilloverCount !== undefined &&
            input.SegmentsSpilloverCount !== null && { SegmentsSpilloverCount: input.SegmentsSpilloverCount }),
        ...(input.Timestamp !== undefined &&
            input.Timestamp !== null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    };
};
const serializeAws_restJson1TelemetryRecordList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1TelemetryRecord(entry, context);
    });
};
const serializeAws_restJson1TraceIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TraceSegmentDocumentList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Alias = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Names: output.Names !== undefined && output.Names !== null
            ? deserializeAws_restJson1AliasNames(output.Names, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1AliasList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Alias(entry, context);
    });
};
const deserializeAws_restJson1AliasNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Annotations = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1ValuesWithServiceIds(value, context),
        };
    }, {});
};
const deserializeAws_restJson1AnnotationValue = (output, context) => {
    if (output.BooleanValue !== undefined && output.BooleanValue !== null) {
        return {
            BooleanValue: output.BooleanValue,
        };
    }
    if (output.NumberValue !== undefined && output.NumberValue !== null) {
        return {
            NumberValue: output.NumberValue,
        };
    }
    if (output.StringValue !== undefined && output.StringValue !== null) {
        return {
            StringValue: output.StringValue,
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1AnomalousService = (output, context) => {
    return {
        ServiceId: output.ServiceId !== undefined && output.ServiceId !== null
            ? deserializeAws_restJson1ServiceId(output.ServiceId, context)
            : undefined,
    };
};
const deserializeAws_restJson1AnomalousServiceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AnomalousService(entry, context);
    });
};
const deserializeAws_restJson1AttributeMap = (output, context) => {
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
const deserializeAws_restJson1AvailabilityZoneDetail = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1Edge = (output, context) => {
    return {
        Aliases: output.Aliases !== undefined && output.Aliases !== null
            ? deserializeAws_restJson1AliasList(output.Aliases, context)
            : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        ReferenceId: output.ReferenceId !== undefined && output.ReferenceId !== null ? output.ReferenceId : undefined,
        ResponseTimeHistogram: output.ResponseTimeHistogram !== undefined && output.ResponseTimeHistogram !== null
            ? deserializeAws_restJson1Histogram(output.ResponseTimeHistogram, context)
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        SummaryStatistics: output.SummaryStatistics !== undefined && output.SummaryStatistics !== null
            ? deserializeAws_restJson1EdgeStatistics(output.SummaryStatistics, context)
            : undefined,
    };
};
const deserializeAws_restJson1EdgeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Edge(entry, context);
    });
};
const deserializeAws_restJson1EdgeStatistics = (output, context) => {
    return {
        ErrorStatistics: output.ErrorStatistics !== undefined && output.ErrorStatistics !== null
            ? deserializeAws_restJson1ErrorStatistics(output.ErrorStatistics, context)
            : undefined,
        FaultStatistics: output.FaultStatistics !== undefined && output.FaultStatistics !== null
            ? deserializeAws_restJson1FaultStatistics(output.FaultStatistics, context)
            : undefined,
        OkCount: output.OkCount !== undefined && output.OkCount !== null ? output.OkCount : undefined,
        TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
        TotalResponseTime: output.TotalResponseTime !== undefined && output.TotalResponseTime !== null
            ? output.TotalResponseTime
            : undefined,
    };
};
const deserializeAws_restJson1EncryptionConfig = (output, context) => {
    return {
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1ErrorRootCause = (output, context) => {
    return {
        ClientImpacting: output.ClientImpacting !== undefined && output.ClientImpacting !== null ? output.ClientImpacting : undefined,
        Services: output.Services !== undefined && output.Services !== null
            ? deserializeAws_restJson1ErrorRootCauseServices(output.Services, context)
            : undefined,
    };
};
const deserializeAws_restJson1ErrorRootCauseEntity = (output, context) => {
    return {
        Exceptions: output.Exceptions !== undefined && output.Exceptions !== null
            ? deserializeAws_restJson1RootCauseExceptions(output.Exceptions, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Remote: output.Remote !== undefined && output.Remote !== null ? output.Remote : undefined,
    };
};
const deserializeAws_restJson1ErrorRootCauseEntityPath = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ErrorRootCauseEntity(entry, context);
    });
};
const deserializeAws_restJson1ErrorRootCauses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ErrorRootCause(entry, context);
    });
};
const deserializeAws_restJson1ErrorRootCauseService = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        EntityPath: output.EntityPath !== undefined && output.EntityPath !== null
            ? deserializeAws_restJson1ErrorRootCauseEntityPath(output.EntityPath, context)
            : undefined,
        Inferred: output.Inferred !== undefined && output.Inferred !== null ? output.Inferred : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Names: output.Names !== undefined && output.Names !== null
            ? deserializeAws_restJson1ServiceNames(output.Names, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1ErrorRootCauseServices = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ErrorRootCauseService(entry, context);
    });
};
const deserializeAws_restJson1ErrorStatistics = (output, context) => {
    return {
        OtherCount: output.OtherCount !== undefined && output.OtherCount !== null ? output.OtherCount : undefined,
        ThrottleCount: output.ThrottleCount !== undefined && output.ThrottleCount !== null ? output.ThrottleCount : undefined,
        TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
    };
};
const deserializeAws_restJson1FaultRootCause = (output, context) => {
    return {
        ClientImpacting: output.ClientImpacting !== undefined && output.ClientImpacting !== null ? output.ClientImpacting : undefined,
        Services: output.Services !== undefined && output.Services !== null
            ? deserializeAws_restJson1FaultRootCauseServices(output.Services, context)
            : undefined,
    };
};
const deserializeAws_restJson1FaultRootCauseEntity = (output, context) => {
    return {
        Exceptions: output.Exceptions !== undefined && output.Exceptions !== null
            ? deserializeAws_restJson1RootCauseExceptions(output.Exceptions, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Remote: output.Remote !== undefined && output.Remote !== null ? output.Remote : undefined,
    };
};
const deserializeAws_restJson1FaultRootCauseEntityPath = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FaultRootCauseEntity(entry, context);
    });
};
const deserializeAws_restJson1FaultRootCauses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FaultRootCause(entry, context);
    });
};
const deserializeAws_restJson1FaultRootCauseService = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        EntityPath: output.EntityPath !== undefined && output.EntityPath !== null
            ? deserializeAws_restJson1FaultRootCauseEntityPath(output.EntityPath, context)
            : undefined,
        Inferred: output.Inferred !== undefined && output.Inferred !== null ? output.Inferred : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Names: output.Names !== undefined && output.Names !== null
            ? deserializeAws_restJson1ServiceNames(output.Names, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1FaultRootCauseServices = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FaultRootCauseService(entry, context);
    });
};
const deserializeAws_restJson1FaultStatistics = (output, context) => {
    return {
        OtherCount: output.OtherCount !== undefined && output.OtherCount !== null ? output.OtherCount : undefined,
        TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
    };
};
const deserializeAws_restJson1ForecastStatistics = (output, context) => {
    return {
        FaultCountHigh: output.FaultCountHigh !== undefined && output.FaultCountHigh !== null ? output.FaultCountHigh : undefined,
        FaultCountLow: output.FaultCountLow !== undefined && output.FaultCountLow !== null ? output.FaultCountLow : undefined,
    };
};
const deserializeAws_restJson1Group = (output, context) => {
    return {
        FilterExpression: output.FilterExpression !== undefined && output.FilterExpression !== null ? output.FilterExpression : undefined,
        GroupARN: output.GroupARN !== undefined && output.GroupARN !== null ? output.GroupARN : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
        InsightsConfiguration: output.InsightsConfiguration !== undefined && output.InsightsConfiguration !== null
            ? deserializeAws_restJson1InsightsConfiguration(output.InsightsConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1GroupSummary = (output, context) => {
    return {
        FilterExpression: output.FilterExpression !== undefined && output.FilterExpression !== null ? output.FilterExpression : undefined,
        GroupARN: output.GroupARN !== undefined && output.GroupARN !== null ? output.GroupARN : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
        InsightsConfiguration: output.InsightsConfiguration !== undefined && output.InsightsConfiguration !== null
            ? deserializeAws_restJson1InsightsConfiguration(output.InsightsConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1GroupSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GroupSummary(entry, context);
    });
};
const deserializeAws_restJson1Histogram = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HistogramEntry(entry, context);
    });
};
const deserializeAws_restJson1HistogramEntry = (output, context) => {
    return {
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1Http = (output, context) => {
    return {
        ClientIp: output.ClientIp !== undefined && output.ClientIp !== null ? output.ClientIp : undefined,
        HttpMethod: output.HttpMethod !== undefined && output.HttpMethod !== null ? output.HttpMethod : undefined,
        HttpStatus: output.HttpStatus !== undefined && output.HttpStatus !== null ? output.HttpStatus : undefined,
        HttpURL: output.HttpURL !== undefined && output.HttpURL !== null ? output.HttpURL : undefined,
        UserAgent: output.UserAgent !== undefined && output.UserAgent !== null ? output.UserAgent : undefined,
    };
};
const deserializeAws_restJson1Insight = (output, context) => {
    return {
        Categories: output.Categories !== undefined && output.Categories !== null
            ? deserializeAws_restJson1InsightCategoryList(output.Categories, context)
            : undefined,
        ClientRequestImpactStatistics: output.ClientRequestImpactStatistics !== undefined && output.ClientRequestImpactStatistics !== null
            ? deserializeAws_restJson1RequestImpactStatistics(output.ClientRequestImpactStatistics, context)
            : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        GroupARN: output.GroupARN !== undefined && output.GroupARN !== null ? output.GroupARN : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
        InsightId: output.InsightId !== undefined && output.InsightId !== null ? output.InsightId : undefined,
        RootCauseServiceId: output.RootCauseServiceId !== undefined && output.RootCauseServiceId !== null
            ? deserializeAws_restJson1ServiceId(output.RootCauseServiceId, context)
            : undefined,
        RootCauseServiceRequestImpactStatistics: output.RootCauseServiceRequestImpactStatistics !== undefined &&
            output.RootCauseServiceRequestImpactStatistics !== null
            ? deserializeAws_restJson1RequestImpactStatistics(output.RootCauseServiceRequestImpactStatistics, context)
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Summary: output.Summary !== undefined && output.Summary !== null ? output.Summary : undefined,
        TopAnomalousServices: output.TopAnomalousServices !== undefined && output.TopAnomalousServices !== null
            ? deserializeAws_restJson1AnomalousServiceList(output.TopAnomalousServices, context)
            : undefined,
    };
};
const deserializeAws_restJson1InsightCategoryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1InsightEvent = (output, context) => {
    return {
        ClientRequestImpactStatistics: output.ClientRequestImpactStatistics !== undefined && output.ClientRequestImpactStatistics !== null
            ? deserializeAws_restJson1RequestImpactStatistics(output.ClientRequestImpactStatistics, context)
            : undefined,
        EventTime: output.EventTime !== undefined && output.EventTime !== null
            ? new Date(Math.round(output.EventTime * 1000))
            : undefined,
        RootCauseServiceRequestImpactStatistics: output.RootCauseServiceRequestImpactStatistics !== undefined &&
            output.RootCauseServiceRequestImpactStatistics !== null
            ? deserializeAws_restJson1RequestImpactStatistics(output.RootCauseServiceRequestImpactStatistics, context)
            : undefined,
        Summary: output.Summary !== undefined && output.Summary !== null ? output.Summary : undefined,
        TopAnomalousServices: output.TopAnomalousServices !== undefined && output.TopAnomalousServices !== null
            ? deserializeAws_restJson1AnomalousServiceList(output.TopAnomalousServices, context)
            : undefined,
    };
};
const deserializeAws_restJson1InsightEventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InsightEvent(entry, context);
    });
};
const deserializeAws_restJson1InsightImpactGraphEdge = (output, context) => {
    return {
        ReferenceId: output.ReferenceId !== undefined && output.ReferenceId !== null ? output.ReferenceId : undefined,
    };
};
const deserializeAws_restJson1InsightImpactGraphEdgeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InsightImpactGraphEdge(entry, context);
    });
};
const deserializeAws_restJson1InsightImpactGraphService = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        Edges: output.Edges !== undefined && output.Edges !== null
            ? deserializeAws_restJson1InsightImpactGraphEdgeList(output.Edges, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Names: output.Names !== undefined && output.Names !== null
            ? deserializeAws_restJson1ServiceNames(output.Names, context)
            : undefined,
        ReferenceId: output.ReferenceId !== undefined && output.ReferenceId !== null ? output.ReferenceId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1InsightImpactGraphServiceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InsightImpactGraphService(entry, context);
    });
};
const deserializeAws_restJson1InsightsConfiguration = (output, context) => {
    return {
        InsightsEnabled: output.InsightsEnabled !== undefined && output.InsightsEnabled !== null ? output.InsightsEnabled : undefined,
        NotificationsEnabled: output.NotificationsEnabled !== undefined && output.NotificationsEnabled !== null
            ? output.NotificationsEnabled
            : undefined,
    };
};
const deserializeAws_restJson1InsightSummary = (output, context) => {
    return {
        Categories: output.Categories !== undefined && output.Categories !== null
            ? deserializeAws_restJson1InsightCategoryList(output.Categories, context)
            : undefined,
        ClientRequestImpactStatistics: output.ClientRequestImpactStatistics !== undefined && output.ClientRequestImpactStatistics !== null
            ? deserializeAws_restJson1RequestImpactStatistics(output.ClientRequestImpactStatistics, context)
            : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        GroupARN: output.GroupARN !== undefined && output.GroupARN !== null ? output.GroupARN : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
        InsightId: output.InsightId !== undefined && output.InsightId !== null ? output.InsightId : undefined,
        LastUpdateTime: output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
            ? new Date(Math.round(output.LastUpdateTime * 1000))
            : undefined,
        RootCauseServiceId: output.RootCauseServiceId !== undefined && output.RootCauseServiceId !== null
            ? deserializeAws_restJson1ServiceId(output.RootCauseServiceId, context)
            : undefined,
        RootCauseServiceRequestImpactStatistics: output.RootCauseServiceRequestImpactStatistics !== undefined &&
            output.RootCauseServiceRequestImpactStatistics !== null
            ? deserializeAws_restJson1RequestImpactStatistics(output.RootCauseServiceRequestImpactStatistics, context)
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Summary: output.Summary !== undefined && output.Summary !== null ? output.Summary : undefined,
        TopAnomalousServices: output.TopAnomalousServices !== undefined && output.TopAnomalousServices !== null
            ? deserializeAws_restJson1AnomalousServiceList(output.TopAnomalousServices, context)
            : undefined,
    };
};
const deserializeAws_restJson1InsightSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InsightSummary(entry, context);
    });
};
const deserializeAws_restJson1InstanceIdDetail = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
const deserializeAws_restJson1RequestImpactStatistics = (output, context) => {
    return {
        FaultCount: output.FaultCount !== undefined && output.FaultCount !== null ? output.FaultCount : undefined,
        OkCount: output.OkCount !== undefined && output.OkCount !== null ? output.OkCount : undefined,
        TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
    };
};
const deserializeAws_restJson1ResourceARNDetail = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    };
};
const deserializeAws_restJson1ResponseTimeRootCause = (output, context) => {
    return {
        ClientImpacting: output.ClientImpacting !== undefined && output.ClientImpacting !== null ? output.ClientImpacting : undefined,
        Services: output.Services !== undefined && output.Services !== null
            ? deserializeAws_restJson1ResponseTimeRootCauseServices(output.Services, context)
            : undefined,
    };
};
const deserializeAws_restJson1ResponseTimeRootCauseEntity = (output, context) => {
    return {
        Coverage: output.Coverage !== undefined && output.Coverage !== null ? output.Coverage : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Remote: output.Remote !== undefined && output.Remote !== null ? output.Remote : undefined,
    };
};
const deserializeAws_restJson1ResponseTimeRootCauseEntityPath = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResponseTimeRootCauseEntity(entry, context);
    });
};
const deserializeAws_restJson1ResponseTimeRootCauses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResponseTimeRootCause(entry, context);
    });
};
const deserializeAws_restJson1ResponseTimeRootCauseService = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        EntityPath: output.EntityPath !== undefined && output.EntityPath !== null
            ? deserializeAws_restJson1ResponseTimeRootCauseEntityPath(output.EntityPath, context)
            : undefined,
        Inferred: output.Inferred !== undefined && output.Inferred !== null ? output.Inferred : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Names: output.Names !== undefined && output.Names !== null
            ? deserializeAws_restJson1ServiceNames(output.Names, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1ResponseTimeRootCauseServices = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResponseTimeRootCauseService(entry, context);
    });
};
const deserializeAws_restJson1RootCauseException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1RootCauseExceptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RootCauseException(entry, context);
    });
};
const deserializeAws_restJson1SamplingRule = (output, context) => {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_restJson1AttributeMap(output.Attributes, context)
            : undefined,
        FixedRate: output.FixedRate !== undefined && output.FixedRate !== null ? output.FixedRate : undefined,
        HTTPMethod: output.HTTPMethod !== undefined && output.HTTPMethod !== null ? output.HTTPMethod : undefined,
        Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        ReservoirSize: output.ReservoirSize !== undefined && output.ReservoirSize !== null ? output.ReservoirSize : undefined,
        ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
        RuleARN: output.RuleARN !== undefined && output.RuleARN !== null ? output.RuleARN : undefined,
        RuleName: output.RuleName !== undefined && output.RuleName !== null ? output.RuleName : undefined,
        ServiceName: output.ServiceName !== undefined && output.ServiceName !== null ? output.ServiceName : undefined,
        ServiceType: output.ServiceType !== undefined && output.ServiceType !== null ? output.ServiceType : undefined,
        URLPath: output.URLPath !== undefined && output.URLPath !== null ? output.URLPath : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
const deserializeAws_restJson1SamplingRuleRecord = (output, context) => {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        ModifiedAt: output.ModifiedAt !== undefined && output.ModifiedAt !== null
            ? new Date(Math.round(output.ModifiedAt * 1000))
            : undefined,
        SamplingRule: output.SamplingRule !== undefined && output.SamplingRule !== null
            ? deserializeAws_restJson1SamplingRule(output.SamplingRule, context)
            : undefined,
    };
};
const deserializeAws_restJson1SamplingRuleRecordList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SamplingRuleRecord(entry, context);
    });
};
const deserializeAws_restJson1SamplingStatisticSummary = (output, context) => {
    return {
        BorrowCount: output.BorrowCount !== undefined && output.BorrowCount !== null ? output.BorrowCount : undefined,
        RequestCount: output.RequestCount !== undefined && output.RequestCount !== null ? output.RequestCount : undefined,
        RuleName: output.RuleName !== undefined && output.RuleName !== null ? output.RuleName : undefined,
        SampledCount: output.SampledCount !== undefined && output.SampledCount !== null ? output.SampledCount : undefined,
        Timestamp: output.Timestamp !== undefined && output.Timestamp !== null
            ? new Date(Math.round(output.Timestamp * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1SamplingStatisticSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SamplingStatisticSummary(entry, context);
    });
};
const deserializeAws_restJson1SamplingTargetDocument = (output, context) => {
    return {
        FixedRate: output.FixedRate !== undefined && output.FixedRate !== null ? output.FixedRate : undefined,
        Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
        ReservoirQuota: output.ReservoirQuota !== undefined && output.ReservoirQuota !== null ? output.ReservoirQuota : undefined,
        ReservoirQuotaTTL: output.ReservoirQuotaTTL !== undefined && output.ReservoirQuotaTTL !== null
            ? new Date(Math.round(output.ReservoirQuotaTTL * 1000))
            : undefined,
        RuleName: output.RuleName !== undefined && output.RuleName !== null ? output.RuleName : undefined,
    };
};
const deserializeAws_restJson1SamplingTargetDocumentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SamplingTargetDocument(entry, context);
    });
};
const deserializeAws_restJson1Segment = (output, context) => {
    return {
        Document: output.Document !== undefined && output.Document !== null ? output.Document : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
const deserializeAws_restJson1SegmentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Segment(entry, context);
    });
};
const deserializeAws_restJson1Service = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        DurationHistogram: output.DurationHistogram !== undefined && output.DurationHistogram !== null
            ? deserializeAws_restJson1Histogram(output.DurationHistogram, context)
            : undefined,
        Edges: output.Edges !== undefined && output.Edges !== null
            ? deserializeAws_restJson1EdgeList(output.Edges, context)
            : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Names: output.Names !== undefined && output.Names !== null
            ? deserializeAws_restJson1ServiceNames(output.Names, context)
            : undefined,
        ReferenceId: output.ReferenceId !== undefined && output.ReferenceId !== null ? output.ReferenceId : undefined,
        ResponseTimeHistogram: output.ResponseTimeHistogram !== undefined && output.ResponseTimeHistogram !== null
            ? deserializeAws_restJson1Histogram(output.ResponseTimeHistogram, context)
            : undefined,
        Root: output.Root !== undefined && output.Root !== null ? output.Root : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        SummaryStatistics: output.SummaryStatistics !== undefined && output.SummaryStatistics !== null
            ? deserializeAws_restJson1ServiceStatistics(output.SummaryStatistics, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1ServiceId = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Names: output.Names !== undefined && output.Names !== null
            ? deserializeAws_restJson1ServiceNames(output.Names, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1ServiceIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ServiceId(entry, context);
    });
};
const deserializeAws_restJson1ServiceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Service(entry, context);
    });
};
const deserializeAws_restJson1ServiceNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ServiceStatistics = (output, context) => {
    return {
        ErrorStatistics: output.ErrorStatistics !== undefined && output.ErrorStatistics !== null
            ? deserializeAws_restJson1ErrorStatistics(output.ErrorStatistics, context)
            : undefined,
        FaultStatistics: output.FaultStatistics !== undefined && output.FaultStatistics !== null
            ? deserializeAws_restJson1FaultStatistics(output.FaultStatistics, context)
            : undefined,
        OkCount: output.OkCount !== undefined && output.OkCount !== null ? output.OkCount : undefined,
        TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
        TotalResponseTime: output.TotalResponseTime !== undefined && output.TotalResponseTime !== null
            ? output.TotalResponseTime
            : undefined,
    };
};
const deserializeAws_restJson1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
};
const deserializeAws_restJson1TimeSeriesServiceStatistics = (output, context) => {
    return {
        EdgeSummaryStatistics: output.EdgeSummaryStatistics !== undefined && output.EdgeSummaryStatistics !== null
            ? deserializeAws_restJson1EdgeStatistics(output.EdgeSummaryStatistics, context)
            : undefined,
        ResponseTimeHistogram: output.ResponseTimeHistogram !== undefined && output.ResponseTimeHistogram !== null
            ? deserializeAws_restJson1Histogram(output.ResponseTimeHistogram, context)
            : undefined,
        ServiceForecastStatistics: output.ServiceForecastStatistics !== undefined && output.ServiceForecastStatistics !== null
            ? deserializeAws_restJson1ForecastStatistics(output.ServiceForecastStatistics, context)
            : undefined,
        ServiceSummaryStatistics: output.ServiceSummaryStatistics !== undefined && output.ServiceSummaryStatistics !== null
            ? deserializeAws_restJson1ServiceStatistics(output.ServiceSummaryStatistics, context)
            : undefined,
        Timestamp: output.Timestamp !== undefined && output.Timestamp !== null
            ? new Date(Math.round(output.Timestamp * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1TimeSeriesServiceStatisticsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TimeSeriesServiceStatistics(entry, context);
    });
};
const deserializeAws_restJson1Trace = (output, context) => {
    return {
        Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LimitExceeded: output.LimitExceeded !== undefined && output.LimitExceeded !== null ? output.LimitExceeded : undefined,
        Segments: output.Segments !== undefined && output.Segments !== null
            ? deserializeAws_restJson1SegmentList(output.Segments, context)
            : undefined,
    };
};
const deserializeAws_restJson1TraceAvailabilityZones = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AvailabilityZoneDetail(entry, context);
    });
};
const deserializeAws_restJson1TraceInstanceIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InstanceIdDetail(entry, context);
    });
};
const deserializeAws_restJson1TraceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Trace(entry, context);
    });
};
const deserializeAws_restJson1TraceResourceARNs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResourceARNDetail(entry, context);
    });
};
const deserializeAws_restJson1TraceSummary = (output, context) => {
    return {
        Annotations: output.Annotations !== undefined && output.Annotations !== null
            ? deserializeAws_restJson1Annotations(output.Annotations, context)
            : undefined,
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_restJson1TraceAvailabilityZones(output.AvailabilityZones, context)
            : undefined,
        Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
        EntryPoint: output.EntryPoint !== undefined && output.EntryPoint !== null
            ? deserializeAws_restJson1ServiceId(output.EntryPoint, context)
            : undefined,
        ErrorRootCauses: output.ErrorRootCauses !== undefined && output.ErrorRootCauses !== null
            ? deserializeAws_restJson1ErrorRootCauses(output.ErrorRootCauses, context)
            : undefined,
        FaultRootCauses: output.FaultRootCauses !== undefined && output.FaultRootCauses !== null
            ? deserializeAws_restJson1FaultRootCauses(output.FaultRootCauses, context)
            : undefined,
        HasError: output.HasError !== undefined && output.HasError !== null ? output.HasError : undefined,
        HasFault: output.HasFault !== undefined && output.HasFault !== null ? output.HasFault : undefined,
        HasThrottle: output.HasThrottle !== undefined && output.HasThrottle !== null ? output.HasThrottle : undefined,
        Http: output.Http !== undefined && output.Http !== null
            ? deserializeAws_restJson1Http(output.Http, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InstanceIds: output.InstanceIds !== undefined && output.InstanceIds !== null
            ? deserializeAws_restJson1TraceInstanceIds(output.InstanceIds, context)
            : undefined,
        IsPartial: output.IsPartial !== undefined && output.IsPartial !== null ? output.IsPartial : undefined,
        MatchedEventTime: output.MatchedEventTime !== undefined && output.MatchedEventTime !== null
            ? new Date(Math.round(output.MatchedEventTime * 1000))
            : undefined,
        ResourceARNs: output.ResourceARNs !== undefined && output.ResourceARNs !== null
            ? deserializeAws_restJson1TraceResourceARNs(output.ResourceARNs, context)
            : undefined,
        ResponseTime: output.ResponseTime !== undefined && output.ResponseTime !== null ? output.ResponseTime : undefined,
        ResponseTimeRootCauses: output.ResponseTimeRootCauses !== undefined && output.ResponseTimeRootCauses !== null
            ? deserializeAws_restJson1ResponseTimeRootCauses(output.ResponseTimeRootCauses, context)
            : undefined,
        Revision: output.Revision !== undefined && output.Revision !== null ? output.Revision : undefined,
        ServiceIds: output.ServiceIds !== undefined && output.ServiceIds !== null
            ? deserializeAws_restJson1ServiceIds(output.ServiceIds, context)
            : undefined,
        Users: output.Users !== undefined && output.Users !== null
            ? deserializeAws_restJson1TraceUsers(output.Users, context)
            : undefined,
    };
};
const deserializeAws_restJson1TraceSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TraceSummary(entry, context);
    });
};
const deserializeAws_restJson1TraceUser = (output, context) => {
    return {
        ServiceIds: output.ServiceIds !== undefined && output.ServiceIds !== null
            ? deserializeAws_restJson1ServiceIds(output.ServiceIds, context)
            : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
    };
};
const deserializeAws_restJson1TraceUsers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TraceUser(entry, context);
    });
};
const deserializeAws_restJson1UnprocessedStatistics = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RuleName: output.RuleName !== undefined && output.RuleName !== null ? output.RuleName : undefined,
    };
};
const deserializeAws_restJson1UnprocessedStatisticsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UnprocessedStatistics(entry, context);
    });
};
const deserializeAws_restJson1UnprocessedTraceIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1UnprocessedTraceSegment = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_restJson1UnprocessedTraceSegmentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UnprocessedTraceSegment(entry, context);
    });
};
const deserializeAws_restJson1ValuesWithServiceIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ValueWithServiceIds(entry, context);
    });
};
const deserializeAws_restJson1ValueWithServiceIds = (output, context) => {
    return {
        AnnotationValue: output.AnnotationValue !== undefined && output.AnnotationValue !== null
            ? deserializeAws_restJson1AnnotationValue(output.AnnotationValue, context)
            : undefined,
        ServiceIds: output.ServiceIds !== undefined && output.ServiceIds !== null
            ? deserializeAws_restJson1ServiceIds(output.ServiceIds, context)
            : undefined,
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