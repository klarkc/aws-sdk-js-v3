"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateMetricSetCommand = exports.deserializeAws_restJson1UpdateAnomalyDetectorCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1PutFeedbackCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListMetricSetsCommand = exports.deserializeAws_restJson1ListAnomalyGroupTimeSeriesCommand = exports.deserializeAws_restJson1ListAnomalyGroupSummariesCommand = exports.deserializeAws_restJson1ListAnomalyDetectorsCommand = exports.deserializeAws_restJson1ListAlertsCommand = exports.deserializeAws_restJson1GetSampleDataCommand = exports.deserializeAws_restJson1GetFeedbackCommand = exports.deserializeAws_restJson1GetAnomalyGroupCommand = exports.deserializeAws_restJson1DescribeMetricSetCommand = exports.deserializeAws_restJson1DescribeAnomalyDetectorCommand = exports.deserializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand = exports.deserializeAws_restJson1DescribeAlertCommand = exports.deserializeAws_restJson1DeleteAnomalyDetectorCommand = exports.deserializeAws_restJson1DeleteAlertCommand = exports.deserializeAws_restJson1CreateMetricSetCommand = exports.deserializeAws_restJson1CreateAnomalyDetectorCommand = exports.deserializeAws_restJson1CreateAlertCommand = exports.deserializeAws_restJson1BackTestAnomalyDetectorCommand = exports.deserializeAws_restJson1ActivateAnomalyDetectorCommand = exports.serializeAws_restJson1UpdateMetricSetCommand = exports.serializeAws_restJson1UpdateAnomalyDetectorCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1PutFeedbackCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListMetricSetsCommand = exports.serializeAws_restJson1ListAnomalyGroupTimeSeriesCommand = exports.serializeAws_restJson1ListAnomalyGroupSummariesCommand = exports.serializeAws_restJson1ListAnomalyDetectorsCommand = exports.serializeAws_restJson1ListAlertsCommand = exports.serializeAws_restJson1GetSampleDataCommand = exports.serializeAws_restJson1GetFeedbackCommand = exports.serializeAws_restJson1GetAnomalyGroupCommand = exports.serializeAws_restJson1DescribeMetricSetCommand = exports.serializeAws_restJson1DescribeAnomalyDetectorCommand = exports.serializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand = exports.serializeAws_restJson1DescribeAlertCommand = exports.serializeAws_restJson1DeleteAnomalyDetectorCommand = exports.serializeAws_restJson1DeleteAlertCommand = exports.serializeAws_restJson1CreateMetricSetCommand = exports.serializeAws_restJson1CreateAnomalyDetectorCommand = exports.serializeAws_restJson1CreateAlertCommand = exports.serializeAws_restJson1BackTestAnomalyDetectorCommand = exports.serializeAws_restJson1ActivateAnomalyDetectorCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1ActivateAnomalyDetectorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ActivateAnomalyDetector";
    let body;
    body = JSON.stringify({
        ...(input.AnomalyDetectorArn !== undefined &&
            input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
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
exports.serializeAws_restJson1ActivateAnomalyDetectorCommand = serializeAws_restJson1ActivateAnomalyDetectorCommand;
const serializeAws_restJson1BackTestAnomalyDetectorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/BackTestAnomalyDetector";
    let body;
    body = JSON.stringify({
        ...(input.AnomalyDetectorArn !== undefined &&
            input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
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
exports.serializeAws_restJson1BackTestAnomalyDetectorCommand = serializeAws_restJson1BackTestAnomalyDetectorCommand;
const serializeAws_restJson1CreateAlertCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CreateAlert";
    let body;
    body = JSON.stringify({
        ...(input.Action !== undefined &&
            input.Action !== null && { Action: serializeAws_restJson1Action(input.Action, context) }),
        ...(input.AlertDescription !== undefined &&
            input.AlertDescription !== null && { AlertDescription: input.AlertDescription }),
        ...(input.AlertName !== undefined && input.AlertName !== null && { AlertName: input.AlertName }),
        ...(input.AlertSensitivityThreshold !== undefined &&
            input.AlertSensitivityThreshold !== null && { AlertSensitivityThreshold: input.AlertSensitivityThreshold }),
        ...(input.AnomalyDetectorArn !== undefined &&
            input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateAlertCommand = serializeAws_restJson1CreateAlertCommand;
const serializeAws_restJson1CreateAnomalyDetectorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CreateAnomalyDetector";
    let body;
    body = JSON.stringify({
        ...(input.AnomalyDetectorConfig !== undefined &&
            input.AnomalyDetectorConfig !== null && {
            AnomalyDetectorConfig: serializeAws_restJson1AnomalyDetectorConfig(input.AnomalyDetectorConfig, context),
        }),
        ...(input.AnomalyDetectorDescription !== undefined &&
            input.AnomalyDetectorDescription !== null && { AnomalyDetectorDescription: input.AnomalyDetectorDescription }),
        ...(input.AnomalyDetectorName !== undefined &&
            input.AnomalyDetectorName !== null && { AnomalyDetectorName: input.AnomalyDetectorName }),
        ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateAnomalyDetectorCommand = serializeAws_restJson1CreateAnomalyDetectorCommand;
const serializeAws_restJson1CreateMetricSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CreateMetricSet";
    let body;
    body = JSON.stringify({
        ...(input.AnomalyDetectorArn !== undefined &&
            input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
        ...(input.DimensionList !== undefined &&
            input.DimensionList !== null && {
            DimensionList: serializeAws_restJson1DimensionList(input.DimensionList, context),
        }),
        ...(input.MetricList !== undefined &&
            input.MetricList !== null && { MetricList: serializeAws_restJson1MetricList(input.MetricList, context) }),
        ...(input.MetricSetDescription !== undefined &&
            input.MetricSetDescription !== null && { MetricSetDescription: input.MetricSetDescription }),
        ...(input.MetricSetFrequency !== undefined &&
            input.MetricSetFrequency !== null && { MetricSetFrequency: input.MetricSetFrequency }),
        ...(input.MetricSetName !== undefined && input.MetricSetName !== null && { MetricSetName: input.MetricSetName }),
        ...(input.MetricSource !== undefined &&
            input.MetricSource !== null && { MetricSource: serializeAws_restJson1MetricSource(input.MetricSource, context) }),
        ...(input.Offset !== undefined && input.Offset !== null && { Offset: input.Offset }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
        ...(input.TimestampColumn !== undefined &&
            input.TimestampColumn !== null && {
            TimestampColumn: serializeAws_restJson1TimestampColumn(input.TimestampColumn, context),
        }),
        ...(input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone }),
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
exports.serializeAws_restJson1CreateMetricSetCommand = serializeAws_restJson1CreateMetricSetCommand;
const serializeAws_restJson1DeleteAlertCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DeleteAlert";
    let body;
    body = JSON.stringify({
        ...(input.AlertArn !== undefined && input.AlertArn !== null && { AlertArn: input.AlertArn }),
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
exports.serializeAws_restJson1DeleteAlertCommand = serializeAws_restJson1DeleteAlertCommand;
const serializeAws_restJson1DeleteAnomalyDetectorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DeleteAnomalyDetector";
    let body;
    body = JSON.stringify({
        ...(input.AnomalyDetectorArn !== undefined &&
            input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
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
exports.serializeAws_restJson1DeleteAnomalyDetectorCommand = serializeAws_restJson1DeleteAnomalyDetectorCommand;
const serializeAws_restJson1DescribeAlertCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DescribeAlert";
    let body;
    body = JSON.stringify({
        ...(input.AlertArn !== undefined && input.AlertArn !== null && { AlertArn: input.AlertArn }),
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
exports.serializeAws_restJson1DescribeAlertCommand = serializeAws_restJson1DescribeAlertCommand;
const serializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DescribeAnomalyDetectionExecutions";
    let body;
    body = JSON.stringify({
        ...(input.AnomalyDetectorArn !== undefined &&
            input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Timestamp !== undefined && input.Timestamp !== null && { Timestamp: input.Timestamp }),
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
exports.serializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand = serializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand;
const serializeAws_restJson1DescribeAnomalyDetectorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DescribeAnomalyDetector";
    let body;
    body = JSON.stringify({
        ...(input.AnomalyDetectorArn !== undefined &&
            input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
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
exports.serializeAws_restJson1DescribeAnomalyDetectorCommand = serializeAws_restJson1DescribeAnomalyDetectorCommand;
const serializeAws_restJson1DescribeMetricSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DescribeMetricSet";
    let body;
    body = JSON.stringify({
        ...(input.MetricSetArn !== undefined && input.MetricSetArn !== null && { MetricSetArn: input.MetricSetArn }),
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
exports.serializeAws_restJson1DescribeMetricSetCommand = serializeAws_restJson1DescribeMetricSetCommand;
const serializeAws_restJson1GetAnomalyGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/GetAnomalyGroup";
    let body;
    body = JSON.stringify({
        ...(input.AnomalyDetectorArn !== undefined &&
            input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
        ...(input.AnomalyGroupId !== undefined &&
            input.AnomalyGroupId !== null && { AnomalyGroupId: input.AnomalyGroupId }),
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
exports.serializeAws_restJson1GetAnomalyGroupCommand = serializeAws_restJson1GetAnomalyGroupCommand;
const serializeAws_restJson1GetFeedbackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/GetFeedback";
    let body;
    body = JSON.stringify({
        ...(input.AnomalyDetectorArn !== undefined &&
            input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
        ...(input.AnomalyGroupTimeSeriesFeedback !== undefined &&
            input.AnomalyGroupTimeSeriesFeedback !== null && {
            AnomalyGroupTimeSeriesFeedback: serializeAws_restJson1AnomalyGroupTimeSeries(input.AnomalyGroupTimeSeriesFeedback, context),
        }),
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
exports.serializeAws_restJson1GetFeedbackCommand = serializeAws_restJson1GetFeedbackCommand;
const serializeAws_restJson1GetSampleDataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/GetSampleData";
    let body;
    body = JSON.stringify({
        ...(input.S3SourceConfig !== undefined &&
            input.S3SourceConfig !== null && {
            S3SourceConfig: serializeAws_restJson1SampleDataS3SourceConfig(input.S3SourceConfig, context),
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
exports.serializeAws_restJson1GetSampleDataCommand = serializeAws_restJson1GetSampleDataCommand;
const serializeAws_restJson1ListAlertsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListAlerts";
    let body;
    body = JSON.stringify({
        ...(input.AnomalyDetectorArn !== undefined &&
            input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
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
exports.serializeAws_restJson1ListAlertsCommand = serializeAws_restJson1ListAlertsCommand;
const serializeAws_restJson1ListAnomalyDetectorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListAnomalyDetectors";
    let body;
    body = JSON.stringify({
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
exports.serializeAws_restJson1ListAnomalyDetectorsCommand = serializeAws_restJson1ListAnomalyDetectorsCommand;
const serializeAws_restJson1ListAnomalyGroupSummariesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListAnomalyGroupSummaries";
    let body;
    body = JSON.stringify({
        ...(input.AnomalyDetectorArn !== undefined &&
            input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.SensitivityThreshold !== undefined &&
            input.SensitivityThreshold !== null && { SensitivityThreshold: input.SensitivityThreshold }),
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
exports.serializeAws_restJson1ListAnomalyGroupSummariesCommand = serializeAws_restJson1ListAnomalyGroupSummariesCommand;
const serializeAws_restJson1ListAnomalyGroupTimeSeriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListAnomalyGroupTimeSeries";
    let body;
    body = JSON.stringify({
        ...(input.AnomalyDetectorArn !== undefined &&
            input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
        ...(input.AnomalyGroupId !== undefined &&
            input.AnomalyGroupId !== null && { AnomalyGroupId: input.AnomalyGroupId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
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
exports.serializeAws_restJson1ListAnomalyGroupTimeSeriesCommand = serializeAws_restJson1ListAnomalyGroupTimeSeriesCommand;
const serializeAws_restJson1ListMetricSetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListMetricSets";
    let body;
    body = JSON.stringify({
        ...(input.AnomalyDetectorArn !== undefined &&
            input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
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
exports.serializeAws_restJson1ListMetricSetsCommand = serializeAws_restJson1ListMetricSetsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{ResourceArn}";
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
const serializeAws_restJson1PutFeedbackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/PutFeedback";
    let body;
    body = JSON.stringify({
        ...(input.AnomalyDetectorArn !== undefined &&
            input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
        ...(input.AnomalyGroupTimeSeriesFeedback !== undefined &&
            input.AnomalyGroupTimeSeriesFeedback !== null && {
            AnomalyGroupTimeSeriesFeedback: serializeAws_restJson1AnomalyGroupTimeSeriesFeedback(input.AnomalyGroupTimeSeriesFeedback, context),
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
exports.serializeAws_restJson1PutFeedbackCommand = serializeAws_restJson1PutFeedbackCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{ResourceArn}";
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
    body = JSON.stringify({
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
    let resolvedPath = "/tags/{ResourceArn}";
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
const serializeAws_restJson1UpdateAnomalyDetectorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/UpdateAnomalyDetector";
    let body;
    body = JSON.stringify({
        ...(input.AnomalyDetectorArn !== undefined &&
            input.AnomalyDetectorArn !== null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
        ...(input.AnomalyDetectorConfig !== undefined &&
            input.AnomalyDetectorConfig !== null && {
            AnomalyDetectorConfig: serializeAws_restJson1AnomalyDetectorConfig(input.AnomalyDetectorConfig, context),
        }),
        ...(input.AnomalyDetectorDescription !== undefined &&
            input.AnomalyDetectorDescription !== null && { AnomalyDetectorDescription: input.AnomalyDetectorDescription }),
        ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
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
exports.serializeAws_restJson1UpdateAnomalyDetectorCommand = serializeAws_restJson1UpdateAnomalyDetectorCommand;
const serializeAws_restJson1UpdateMetricSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/UpdateMetricSet";
    let body;
    body = JSON.stringify({
        ...(input.DimensionList !== undefined &&
            input.DimensionList !== null && {
            DimensionList: serializeAws_restJson1DimensionList(input.DimensionList, context),
        }),
        ...(input.MetricList !== undefined &&
            input.MetricList !== null && { MetricList: serializeAws_restJson1MetricList(input.MetricList, context) }),
        ...(input.MetricSetArn !== undefined && input.MetricSetArn !== null && { MetricSetArn: input.MetricSetArn }),
        ...(input.MetricSetDescription !== undefined &&
            input.MetricSetDescription !== null && { MetricSetDescription: input.MetricSetDescription }),
        ...(input.MetricSetFrequency !== undefined &&
            input.MetricSetFrequency !== null && { MetricSetFrequency: input.MetricSetFrequency }),
        ...(input.MetricSource !== undefined &&
            input.MetricSource !== null && { MetricSource: serializeAws_restJson1MetricSource(input.MetricSource, context) }),
        ...(input.Offset !== undefined && input.Offset !== null && { Offset: input.Offset }),
        ...(input.TimestampColumn !== undefined &&
            input.TimestampColumn !== null && {
            TimestampColumn: serializeAws_restJson1TimestampColumn(input.TimestampColumn, context),
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
exports.serializeAws_restJson1UpdateMetricSetCommand = serializeAws_restJson1UpdateMetricSetCommand;
const deserializeAws_restJson1ActivateAnomalyDetectorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ActivateAnomalyDetectorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ActivateAnomalyDetectorCommand = deserializeAws_restJson1ActivateAnomalyDetectorCommand;
const deserializeAws_restJson1ActivateAnomalyDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutmetrics#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1BackTestAnomalyDetectorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BackTestAnomalyDetectorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BackTestAnomalyDetectorCommand = deserializeAws_restJson1BackTestAnomalyDetectorCommand;
const deserializeAws_restJson1BackTestAnomalyDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1CreateAlertCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateAlertCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AlertArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AlertArn !== undefined && data.AlertArn !== null) {
        contents.AlertArn = data.AlertArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAlertCommand = deserializeAws_restJson1CreateAlertCommand;
const deserializeAws_restJson1CreateAlertCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutmetrics#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lookoutmetrics#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1CreateAnomalyDetectorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateAnomalyDetectorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnomalyDetectorArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnomalyDetectorArn !== undefined && data.AnomalyDetectorArn !== null) {
        contents.AnomalyDetectorArn = data.AnomalyDetectorArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAnomalyDetectorCommand = deserializeAws_restJson1CreateAnomalyDetectorCommand;
const deserializeAws_restJson1CreateAnomalyDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutmetrics#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lookoutmetrics#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1CreateMetricSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateMetricSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MetricSetArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.MetricSetArn !== undefined && data.MetricSetArn !== null) {
        contents.MetricSetArn = data.MetricSetArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateMetricSetCommand = deserializeAws_restJson1CreateMetricSetCommand;
const deserializeAws_restJson1CreateMetricSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutmetrics#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lookoutmetrics#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1DeleteAlertCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAlertCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAlertCommand = deserializeAws_restJson1DeleteAlertCommand;
const deserializeAws_restJson1DeleteAlertCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1DeleteAnomalyDetectorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAnomalyDetectorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAnomalyDetectorCommand = deserializeAws_restJson1DeleteAnomalyDetectorCommand;
const deserializeAws_restJson1DeleteAnomalyDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutmetrics#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1DescribeAlertCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAlertCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Alert: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Alert !== undefined && data.Alert !== null) {
        contents.Alert = deserializeAws_restJson1Alert(data.Alert, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAlertCommand = deserializeAws_restJson1DescribeAlertCommand;
const deserializeAws_restJson1DescribeAlertCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAnomalyDetectionExecutionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ExecutionList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ExecutionList !== undefined && data.ExecutionList !== null) {
        contents.ExecutionList = deserializeAws_restJson1ExecutionList(data.ExecutionList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand = deserializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand;
const deserializeAws_restJson1DescribeAnomalyDetectionExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1DescribeAnomalyDetectorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAnomalyDetectorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnomalyDetectorArn: undefined,
        AnomalyDetectorConfig: undefined,
        AnomalyDetectorDescription: undefined,
        AnomalyDetectorName: undefined,
        CreationTime: undefined,
        FailureReason: undefined,
        KmsKeyArn: undefined,
        LastModificationTime: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnomalyDetectorArn !== undefined && data.AnomalyDetectorArn !== null) {
        contents.AnomalyDetectorArn = data.AnomalyDetectorArn;
    }
    if (data.AnomalyDetectorConfig !== undefined && data.AnomalyDetectorConfig !== null) {
        contents.AnomalyDetectorConfig = deserializeAws_restJson1AnomalyDetectorConfigSummary(data.AnomalyDetectorConfig, context);
    }
    if (data.AnomalyDetectorDescription !== undefined && data.AnomalyDetectorDescription !== null) {
        contents.AnomalyDetectorDescription = data.AnomalyDetectorDescription;
    }
    if (data.AnomalyDetectorName !== undefined && data.AnomalyDetectorName !== null) {
        contents.AnomalyDetectorName = data.AnomalyDetectorName;
    }
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.FailureReason !== undefined && data.FailureReason !== null) {
        contents.FailureReason = data.FailureReason;
    }
    if (data.KmsKeyArn !== undefined && data.KmsKeyArn !== null) {
        contents.KmsKeyArn = data.KmsKeyArn;
    }
    if (data.LastModificationTime !== undefined && data.LastModificationTime !== null) {
        contents.LastModificationTime = new Date(Math.round(data.LastModificationTime * 1000));
    }
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAnomalyDetectorCommand = deserializeAws_restJson1DescribeAnomalyDetectorCommand;
const deserializeAws_restJson1DescribeAnomalyDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1DescribeMetricSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeMetricSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnomalyDetectorArn: undefined,
        CreationTime: undefined,
        DimensionList: undefined,
        LastModificationTime: undefined,
        MetricList: undefined,
        MetricSetArn: undefined,
        MetricSetDescription: undefined,
        MetricSetFrequency: undefined,
        MetricSetName: undefined,
        MetricSource: undefined,
        Offset: undefined,
        TimestampColumn: undefined,
        Timezone: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnomalyDetectorArn !== undefined && data.AnomalyDetectorArn !== null) {
        contents.AnomalyDetectorArn = data.AnomalyDetectorArn;
    }
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.DimensionList !== undefined && data.DimensionList !== null) {
        contents.DimensionList = deserializeAws_restJson1DimensionList(data.DimensionList, context);
    }
    if (data.LastModificationTime !== undefined && data.LastModificationTime !== null) {
        contents.LastModificationTime = new Date(Math.round(data.LastModificationTime * 1000));
    }
    if (data.MetricList !== undefined && data.MetricList !== null) {
        contents.MetricList = deserializeAws_restJson1MetricList(data.MetricList, context);
    }
    if (data.MetricSetArn !== undefined && data.MetricSetArn !== null) {
        contents.MetricSetArn = data.MetricSetArn;
    }
    if (data.MetricSetDescription !== undefined && data.MetricSetDescription !== null) {
        contents.MetricSetDescription = data.MetricSetDescription;
    }
    if (data.MetricSetFrequency !== undefined && data.MetricSetFrequency !== null) {
        contents.MetricSetFrequency = data.MetricSetFrequency;
    }
    if (data.MetricSetName !== undefined && data.MetricSetName !== null) {
        contents.MetricSetName = data.MetricSetName;
    }
    if (data.MetricSource !== undefined && data.MetricSource !== null) {
        contents.MetricSource = deserializeAws_restJson1MetricSource(data.MetricSource, context);
    }
    if (data.Offset !== undefined && data.Offset !== null) {
        contents.Offset = data.Offset;
    }
    if (data.TimestampColumn !== undefined && data.TimestampColumn !== null) {
        contents.TimestampColumn = deserializeAws_restJson1TimestampColumn(data.TimestampColumn, context);
    }
    if (data.Timezone !== undefined && data.Timezone !== null) {
        contents.Timezone = data.Timezone;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeMetricSetCommand = deserializeAws_restJson1DescribeMetricSetCommand;
const deserializeAws_restJson1DescribeMetricSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1GetAnomalyGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAnomalyGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnomalyGroup: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnomalyGroup !== undefined && data.AnomalyGroup !== null) {
        contents.AnomalyGroup = deserializeAws_restJson1AnomalyGroup(data.AnomalyGroup, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAnomalyGroupCommand = deserializeAws_restJson1GetAnomalyGroupCommand;
const deserializeAws_restJson1GetAnomalyGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1GetFeedbackCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFeedbackCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnomalyGroupTimeSeriesFeedback: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnomalyGroupTimeSeriesFeedback !== undefined && data.AnomalyGroupTimeSeriesFeedback !== null) {
        contents.AnomalyGroupTimeSeriesFeedback = deserializeAws_restJson1TimeSeriesFeedbackList(data.AnomalyGroupTimeSeriesFeedback, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFeedbackCommand = deserializeAws_restJson1GetFeedbackCommand;
const deserializeAws_restJson1GetFeedbackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1GetSampleDataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSampleDataCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        HeaderValues: undefined,
        SampleRows: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.HeaderValues !== undefined && data.HeaderValues !== null) {
        contents.HeaderValues = deserializeAws_restJson1HeaderValueList(data.HeaderValues, context);
    }
    if (data.SampleRows !== undefined && data.SampleRows !== null) {
        contents.SampleRows = deserializeAws_restJson1SampleRows(data.SampleRows, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSampleDataCommand = deserializeAws_restJson1GetSampleDataCommand;
const deserializeAws_restJson1GetSampleDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1ListAlertsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAlertsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AlertSummaryList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AlertSummaryList !== undefined && data.AlertSummaryList !== null) {
        contents.AlertSummaryList = deserializeAws_restJson1AlertSummaryList(data.AlertSummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAlertsCommand = deserializeAws_restJson1ListAlertsCommand;
const deserializeAws_restJson1ListAlertsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1ListAnomalyDetectorsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAnomalyDetectorsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnomalyDetectorSummaryList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnomalyDetectorSummaryList !== undefined && data.AnomalyDetectorSummaryList !== null) {
        contents.AnomalyDetectorSummaryList = deserializeAws_restJson1AnomalyDetectorSummaryList(data.AnomalyDetectorSummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAnomalyDetectorsCommand = deserializeAws_restJson1ListAnomalyDetectorsCommand;
const deserializeAws_restJson1ListAnomalyDetectorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1ListAnomalyGroupSummariesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAnomalyGroupSummariesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnomalyGroupStatistics: undefined,
        AnomalyGroupSummaryList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnomalyGroupStatistics !== undefined && data.AnomalyGroupStatistics !== null) {
        contents.AnomalyGroupStatistics = deserializeAws_restJson1AnomalyGroupStatistics(data.AnomalyGroupStatistics, context);
    }
    if (data.AnomalyGroupSummaryList !== undefined && data.AnomalyGroupSummaryList !== null) {
        contents.AnomalyGroupSummaryList = deserializeAws_restJson1AnomalyGroupSummaryList(data.AnomalyGroupSummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAnomalyGroupSummariesCommand = deserializeAws_restJson1ListAnomalyGroupSummariesCommand;
const deserializeAws_restJson1ListAnomalyGroupSummariesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1ListAnomalyGroupTimeSeriesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAnomalyGroupTimeSeriesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnomalyGroupId: undefined,
        MetricName: undefined,
        NextToken: undefined,
        TimeSeriesList: undefined,
        TimestampList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnomalyGroupId !== undefined && data.AnomalyGroupId !== null) {
        contents.AnomalyGroupId = data.AnomalyGroupId;
    }
    if (data.MetricName !== undefined && data.MetricName !== null) {
        contents.MetricName = data.MetricName;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.TimeSeriesList !== undefined && data.TimeSeriesList !== null) {
        contents.TimeSeriesList = deserializeAws_restJson1TimeSeriesList(data.TimeSeriesList, context);
    }
    if (data.TimestampList !== undefined && data.TimestampList !== null) {
        contents.TimestampList = deserializeAws_restJson1TimestampList(data.TimestampList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAnomalyGroupTimeSeriesCommand = deserializeAws_restJson1ListAnomalyGroupTimeSeriesCommand;
const deserializeAws_restJson1ListAnomalyGroupTimeSeriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1ListMetricSetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListMetricSetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MetricSetSummaryList: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.MetricSetSummaryList !== undefined && data.MetricSetSummaryList !== null) {
        contents.MetricSetSummaryList = deserializeAws_restJson1MetricSetSummaryList(data.MetricSetSummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListMetricSetsCommand = deserializeAws_restJson1ListMetricSetsCommand;
const deserializeAws_restJson1ListMetricSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
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
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1PutFeedbackCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutFeedbackCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutFeedbackCommand = deserializeAws_restJson1PutFeedbackCommand;
const deserializeAws_restJson1PutFeedbackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1UpdateAnomalyDetectorCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAnomalyDetectorCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnomalyDetectorArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnomalyDetectorArn !== undefined && data.AnomalyDetectorArn !== null) {
        contents.AnomalyDetectorArn = data.AnomalyDetectorArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAnomalyDetectorCommand = deserializeAws_restJson1UpdateAnomalyDetectorCommand;
const deserializeAws_restJson1UpdateAnomalyDetectorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1UpdateMetricSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateMetricSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MetricSetArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.MetricSetArn !== undefined && data.MetricSetArn !== null) {
        contents.MetricSetArn = data.MetricSetArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateMetricSetCommand = deserializeAws_restJson1UpdateMetricSetCommand;
const deserializeAws_restJson1UpdateMetricSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutmetrics#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutmetrics#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutmetrics#ValidationException":
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessDeniedException",
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
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceId !== undefined && data.ResourceId !== null) {
        contents.ResourceId = data.ResourceId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
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
        ResourceId: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceId !== undefined && data.ResourceId !== null) {
        contents.ResourceId = data.ResourceId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        QuotaCode: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
        ServiceCode: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.QuotaCode !== undefined && data.QuotaCode !== null) {
        contents.QuotaCode = data.QuotaCode;
    }
    if (data.ResourceId !== undefined && data.ResourceId !== null) {
        contents.ResourceId = data.ResourceId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    if (data.ServiceCode !== undefined && data.ServiceCode !== null) {
        contents.ServiceCode = data.ServiceCode;
    }
    return contents;
};
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
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
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Fields: undefined,
        Message: undefined,
        Reason: undefined,
    };
    const data = parsedOutput.body;
    if (data.Fields !== undefined && data.Fields !== null) {
        contents.Fields = deserializeAws_restJson1ValidationExceptionFieldList(data.Fields, context);
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Reason !== undefined && data.Reason !== null) {
        contents.Reason = data.Reason;
    }
    return contents;
};
const serializeAws_restJson1Action = (input, context) => {
    return {
        ...(input.LambdaConfiguration !== undefined &&
            input.LambdaConfiguration !== null && {
            LambdaConfiguration: serializeAws_restJson1LambdaConfiguration(input.LambdaConfiguration, context),
        }),
        ...(input.SNSConfiguration !== undefined &&
            input.SNSConfiguration !== null && {
            SNSConfiguration: serializeAws_restJson1SNSConfiguration(input.SNSConfiguration, context),
        }),
    };
};
const serializeAws_restJson1AnomalyDetectorConfig = (input, context) => {
    return {
        ...(input.AnomalyDetectorFrequency !== undefined &&
            input.AnomalyDetectorFrequency !== null && { AnomalyDetectorFrequency: input.AnomalyDetectorFrequency }),
    };
};
const serializeAws_restJson1AnomalyGroupTimeSeries = (input, context) => {
    return {
        ...(input.AnomalyGroupId !== undefined &&
            input.AnomalyGroupId !== null && { AnomalyGroupId: input.AnomalyGroupId }),
        ...(input.TimeSeriesId !== undefined && input.TimeSeriesId !== null && { TimeSeriesId: input.TimeSeriesId }),
    };
};
const serializeAws_restJson1AnomalyGroupTimeSeriesFeedback = (input, context) => {
    return {
        ...(input.AnomalyGroupId !== undefined &&
            input.AnomalyGroupId !== null && { AnomalyGroupId: input.AnomalyGroupId }),
        ...(input.IsAnomaly !== undefined && input.IsAnomaly !== null && { IsAnomaly: input.IsAnomaly }),
        ...(input.TimeSeriesId !== undefined && input.TimeSeriesId !== null && { TimeSeriesId: input.TimeSeriesId }),
    };
};
const serializeAws_restJson1AppFlowConfig = (input, context) => {
    return {
        ...(input.FlowName !== undefined && input.FlowName !== null && { FlowName: input.FlowName }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const serializeAws_restJson1CloudWatchConfig = (input, context) => {
    return {
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const serializeAws_restJson1CsvFormatDescriptor = (input, context) => {
    return {
        ...(input.Charset !== undefined && input.Charset !== null && { Charset: input.Charset }),
        ...(input.ContainsHeader !== undefined &&
            input.ContainsHeader !== null && { ContainsHeader: input.ContainsHeader }),
        ...(input.Delimiter !== undefined && input.Delimiter !== null && { Delimiter: input.Delimiter }),
        ...(input.FileCompression !== undefined &&
            input.FileCompression !== null && { FileCompression: input.FileCompression }),
        ...(input.HeaderList !== undefined &&
            input.HeaderList !== null && { HeaderList: serializeAws_restJson1HeaderList(input.HeaderList, context) }),
        ...(input.QuoteSymbol !== undefined && input.QuoteSymbol !== null && { QuoteSymbol: input.QuoteSymbol }),
    };
};
const serializeAws_restJson1DimensionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1FileFormatDescriptor = (input, context) => {
    return {
        ...(input.CsvFormatDescriptor !== undefined &&
            input.CsvFormatDescriptor !== null && {
            CsvFormatDescriptor: serializeAws_restJson1CsvFormatDescriptor(input.CsvFormatDescriptor, context),
        }),
        ...(input.JsonFormatDescriptor !== undefined &&
            input.JsonFormatDescriptor !== null && {
            JsonFormatDescriptor: serializeAws_restJson1JsonFormatDescriptor(input.JsonFormatDescriptor, context),
        }),
    };
};
const serializeAws_restJson1HeaderList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1HistoricalDataPathList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1JsonFormatDescriptor = (input, context) => {
    return {
        ...(input.Charset !== undefined && input.Charset !== null && { Charset: input.Charset }),
        ...(input.FileCompression !== undefined &&
            input.FileCompression !== null && { FileCompression: input.FileCompression }),
    };
};
const serializeAws_restJson1LambdaConfiguration = (input, context) => {
    return {
        ...(input.LambdaArn !== undefined && input.LambdaArn !== null && { LambdaArn: input.LambdaArn }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const serializeAws_restJson1Metric = (input, context) => {
    return {
        ...(input.AggregationFunction !== undefined &&
            input.AggregationFunction !== null && { AggregationFunction: input.AggregationFunction }),
        ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
        ...(input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }),
    };
};
const serializeAws_restJson1MetricList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Metric(entry, context);
    });
};
const serializeAws_restJson1MetricSource = (input, context) => {
    return {
        ...(input.AppFlowConfig !== undefined &&
            input.AppFlowConfig !== null && {
            AppFlowConfig: serializeAws_restJson1AppFlowConfig(input.AppFlowConfig, context),
        }),
        ...(input.CloudWatchConfig !== undefined &&
            input.CloudWatchConfig !== null && {
            CloudWatchConfig: serializeAws_restJson1CloudWatchConfig(input.CloudWatchConfig, context),
        }),
        ...(input.RDSSourceConfig !== undefined &&
            input.RDSSourceConfig !== null && {
            RDSSourceConfig: serializeAws_restJson1RDSSourceConfig(input.RDSSourceConfig, context),
        }),
        ...(input.RedshiftSourceConfig !== undefined &&
            input.RedshiftSourceConfig !== null && {
            RedshiftSourceConfig: serializeAws_restJson1RedshiftSourceConfig(input.RedshiftSourceConfig, context),
        }),
        ...(input.S3SourceConfig !== undefined &&
            input.S3SourceConfig !== null && {
            S3SourceConfig: serializeAws_restJson1S3SourceConfig(input.S3SourceConfig, context),
        }),
    };
};
const serializeAws_restJson1RDSSourceConfig = (input, context) => {
    return {
        ...(input.DBInstanceIdentifier !== undefined &&
            input.DBInstanceIdentifier !== null && { DBInstanceIdentifier: input.DBInstanceIdentifier }),
        ...(input.DatabaseHost !== undefined && input.DatabaseHost !== null && { DatabaseHost: input.DatabaseHost }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.DatabasePort !== undefined && input.DatabasePort !== null && { DatabasePort: input.DatabasePort }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.SecretManagerArn !== undefined &&
            input.SecretManagerArn !== null && { SecretManagerArn: input.SecretManagerArn }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
        ...(input.VpcConfiguration !== undefined &&
            input.VpcConfiguration !== null && {
            VpcConfiguration: serializeAws_restJson1VpcConfiguration(input.VpcConfiguration, context),
        }),
    };
};
const serializeAws_restJson1RedshiftSourceConfig = (input, context) => {
    return {
        ...(input.ClusterIdentifier !== undefined &&
            input.ClusterIdentifier !== null && { ClusterIdentifier: input.ClusterIdentifier }),
        ...(input.DatabaseHost !== undefined && input.DatabaseHost !== null && { DatabaseHost: input.DatabaseHost }),
        ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
        ...(input.DatabasePort !== undefined && input.DatabasePort !== null && { DatabasePort: input.DatabasePort }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.SecretManagerArn !== undefined &&
            input.SecretManagerArn !== null && { SecretManagerArn: input.SecretManagerArn }),
        ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
        ...(input.VpcConfiguration !== undefined &&
            input.VpcConfiguration !== null && {
            VpcConfiguration: serializeAws_restJson1VpcConfiguration(input.VpcConfiguration, context),
        }),
    };
};
const serializeAws_restJson1S3SourceConfig = (input, context) => {
    return {
        ...(input.FileFormatDescriptor !== undefined &&
            input.FileFormatDescriptor !== null && {
            FileFormatDescriptor: serializeAws_restJson1FileFormatDescriptor(input.FileFormatDescriptor, context),
        }),
        ...(input.HistoricalDataPathList !== undefined &&
            input.HistoricalDataPathList !== null && {
            HistoricalDataPathList: serializeAws_restJson1HistoricalDataPathList(input.HistoricalDataPathList, context),
        }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.TemplatedPathList !== undefined &&
            input.TemplatedPathList !== null && {
            TemplatedPathList: serializeAws_restJson1TemplatedPathList(input.TemplatedPathList, context),
        }),
    };
};
const serializeAws_restJson1SampleDataS3SourceConfig = (input, context) => {
    return {
        ...(input.FileFormatDescriptor !== undefined &&
            input.FileFormatDescriptor !== null && {
            FileFormatDescriptor: serializeAws_restJson1FileFormatDescriptor(input.FileFormatDescriptor, context),
        }),
        ...(input.HistoricalDataPathList !== undefined &&
            input.HistoricalDataPathList !== null && {
            HistoricalDataPathList: serializeAws_restJson1HistoricalDataPathList(input.HistoricalDataPathList, context),
        }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.TemplatedPathList !== undefined &&
            input.TemplatedPathList !== null && {
            TemplatedPathList: serializeAws_restJson1TemplatedPathList(input.TemplatedPathList, context),
        }),
    };
};
const serializeAws_restJson1SecurityGroupIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SNSConfiguration = (input, context) => {
    return {
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn }),
    };
};
const serializeAws_restJson1SubnetIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TagMap = (input, context) => {
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
const serializeAws_restJson1TemplatedPathList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TimestampColumn = (input, context) => {
    return {
        ...(input.ColumnFormat !== undefined && input.ColumnFormat !== null && { ColumnFormat: input.ColumnFormat }),
        ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
    };
};
const serializeAws_restJson1VpcConfiguration = (input, context) => {
    return {
        ...(input.SecurityGroupIdList !== undefined &&
            input.SecurityGroupIdList !== null && {
            SecurityGroupIdList: serializeAws_restJson1SecurityGroupIdList(input.SecurityGroupIdList, context),
        }),
        ...(input.SubnetIdList !== undefined &&
            input.SubnetIdList !== null && { SubnetIdList: serializeAws_restJson1SubnetIdList(input.SubnetIdList, context) }),
    };
};
const deserializeAws_restJson1Action = (output, context) => {
    return {
        LambdaConfiguration: output.LambdaConfiguration !== undefined && output.LambdaConfiguration !== null
            ? deserializeAws_restJson1LambdaConfiguration(output.LambdaConfiguration, context)
            : undefined,
        SNSConfiguration: output.SNSConfiguration !== undefined && output.SNSConfiguration !== null
            ? deserializeAws_restJson1SNSConfiguration(output.SNSConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1Alert = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null
            ? deserializeAws_restJson1Action(output.Action, context)
            : undefined,
        AlertArn: output.AlertArn !== undefined && output.AlertArn !== null ? output.AlertArn : undefined,
        AlertDescription: output.AlertDescription !== undefined && output.AlertDescription !== null ? output.AlertDescription : undefined,
        AlertName: output.AlertName !== undefined && output.AlertName !== null ? output.AlertName : undefined,
        AlertSensitivityThreshold: output.AlertSensitivityThreshold !== undefined && output.AlertSensitivityThreshold !== null
            ? output.AlertSensitivityThreshold
            : undefined,
        AlertStatus: output.AlertStatus !== undefined && output.AlertStatus !== null ? output.AlertStatus : undefined,
        AlertType: output.AlertType !== undefined && output.AlertType !== null ? output.AlertType : undefined,
        AnomalyDetectorArn: output.AnomalyDetectorArn !== undefined && output.AnomalyDetectorArn !== null
            ? output.AnomalyDetectorArn
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1AlertSummary = (output, context) => {
    return {
        AlertArn: output.AlertArn !== undefined && output.AlertArn !== null ? output.AlertArn : undefined,
        AlertName: output.AlertName !== undefined && output.AlertName !== null ? output.AlertName : undefined,
        AlertSensitivityThreshold: output.AlertSensitivityThreshold !== undefined && output.AlertSensitivityThreshold !== null
            ? output.AlertSensitivityThreshold
            : undefined,
        AlertStatus: output.AlertStatus !== undefined && output.AlertStatus !== null ? output.AlertStatus : undefined,
        AlertType: output.AlertType !== undefined && output.AlertType !== null ? output.AlertType : undefined,
        AnomalyDetectorArn: output.AnomalyDetectorArn !== undefined && output.AnomalyDetectorArn !== null
            ? output.AnomalyDetectorArn
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1AlertSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AlertSummary(entry, context);
    });
};
const deserializeAws_restJson1AnomalyDetectorConfigSummary = (output, context) => {
    return {
        AnomalyDetectorFrequency: output.AnomalyDetectorFrequency !== undefined && output.AnomalyDetectorFrequency !== null
            ? output.AnomalyDetectorFrequency
            : undefined,
    };
};
const deserializeAws_restJson1AnomalyDetectorSummary = (output, context) => {
    return {
        AnomalyDetectorArn: output.AnomalyDetectorArn !== undefined && output.AnomalyDetectorArn !== null
            ? output.AnomalyDetectorArn
            : undefined,
        AnomalyDetectorDescription: output.AnomalyDetectorDescription !== undefined && output.AnomalyDetectorDescription !== null
            ? output.AnomalyDetectorDescription
            : undefined,
        AnomalyDetectorName: output.AnomalyDetectorName !== undefined && output.AnomalyDetectorName !== null
            ? output.AnomalyDetectorName
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1AnomalyDetectorSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AnomalyDetectorSummary(entry, context);
    });
};
const deserializeAws_restJson1AnomalyGroup = (output, context) => {
    return {
        AnomalyGroupId: output.AnomalyGroupId !== undefined && output.AnomalyGroupId !== null ? output.AnomalyGroupId : undefined,
        AnomalyGroupScore: output.AnomalyGroupScore !== undefined && output.AnomalyGroupScore !== null
            ? output.AnomalyGroupScore
            : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
        MetricLevelImpactList: output.MetricLevelImpactList !== undefined && output.MetricLevelImpactList !== null
            ? deserializeAws_restJson1MetricLevelImpactList(output.MetricLevelImpactList, context)
            : undefined,
        PrimaryMetricName: output.PrimaryMetricName !== undefined && output.PrimaryMetricName !== null
            ? output.PrimaryMetricName
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
    };
};
const deserializeAws_restJson1AnomalyGroupStatistics = (output, context) => {
    return {
        EvaluationStartDate: output.EvaluationStartDate !== undefined && output.EvaluationStartDate !== null
            ? output.EvaluationStartDate
            : undefined,
        ItemizedMetricStatsList: output.ItemizedMetricStatsList !== undefined && output.ItemizedMetricStatsList !== null
            ? deserializeAws_restJson1ItemizedMetricStatsList(output.ItemizedMetricStatsList, context)
            : undefined,
        TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
    };
};
const deserializeAws_restJson1AnomalyGroupSummary = (output, context) => {
    return {
        AnomalyGroupId: output.AnomalyGroupId !== undefined && output.AnomalyGroupId !== null ? output.AnomalyGroupId : undefined,
        AnomalyGroupScore: output.AnomalyGroupScore !== undefined && output.AnomalyGroupScore !== null
            ? output.AnomalyGroupScore
            : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
        PrimaryMetricName: output.PrimaryMetricName !== undefined && output.PrimaryMetricName !== null
            ? output.PrimaryMetricName
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
    };
};
const deserializeAws_restJson1AnomalyGroupSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AnomalyGroupSummary(entry, context);
    });
};
const deserializeAws_restJson1AppFlowConfig = (output, context) => {
    return {
        FlowName: output.FlowName !== undefined && output.FlowName !== null ? output.FlowName : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    };
};
const deserializeAws_restJson1CloudWatchConfig = (output, context) => {
    return {
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    };
};
const deserializeAws_restJson1ContributionMatrix = (output, context) => {
    return {
        DimensionContributionList: output.DimensionContributionList !== undefined && output.DimensionContributionList !== null
            ? deserializeAws_restJson1DimensionContributionList(output.DimensionContributionList, context)
            : undefined,
    };
};
const deserializeAws_restJson1CsvFormatDescriptor = (output, context) => {
    return {
        Charset: output.Charset !== undefined && output.Charset !== null ? output.Charset : undefined,
        ContainsHeader: output.ContainsHeader !== undefined && output.ContainsHeader !== null ? output.ContainsHeader : undefined,
        Delimiter: output.Delimiter !== undefined && output.Delimiter !== null ? output.Delimiter : undefined,
        FileCompression: output.FileCompression !== undefined && output.FileCompression !== null ? output.FileCompression : undefined,
        HeaderList: output.HeaderList !== undefined && output.HeaderList !== null
            ? deserializeAws_restJson1HeaderList(output.HeaderList, context)
            : undefined,
        QuoteSymbol: output.QuoteSymbol !== undefined && output.QuoteSymbol !== null ? output.QuoteSymbol : undefined,
    };
};
const deserializeAws_restJson1DimensionContribution = (output, context) => {
    return {
        DimensionName: output.DimensionName !== undefined && output.DimensionName !== null ? output.DimensionName : undefined,
        DimensionValueContributionList: output.DimensionValueContributionList !== undefined && output.DimensionValueContributionList !== null
            ? deserializeAws_restJson1DimensionValueContributionList(output.DimensionValueContributionList, context)
            : undefined,
    };
};
const deserializeAws_restJson1DimensionContributionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DimensionContribution(entry, context);
    });
};
const deserializeAws_restJson1DimensionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1DimensionNameValue = (output, context) => {
    return {
        DimensionName: output.DimensionName !== undefined && output.DimensionName !== null ? output.DimensionName : undefined,
        DimensionValue: output.DimensionValue !== undefined && output.DimensionValue !== null ? output.DimensionValue : undefined,
    };
};
const deserializeAws_restJson1DimensionNameValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DimensionNameValue(entry, context);
    });
};
const deserializeAws_restJson1DimensionValueContribution = (output, context) => {
    return {
        ContributionScore: output.ContributionScore !== undefined && output.ContributionScore !== null
            ? output.ContributionScore
            : undefined,
        DimensionValue: output.DimensionValue !== undefined && output.DimensionValue !== null ? output.DimensionValue : undefined,
    };
};
const deserializeAws_restJson1DimensionValueContributionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DimensionValueContribution(entry, context);
    });
};
const deserializeAws_restJson1ExecutionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ExecutionStatus(entry, context);
    });
};
const deserializeAws_restJson1ExecutionStatus = (output, context) => {
    return {
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Timestamp: output.Timestamp !== undefined && output.Timestamp !== null ? output.Timestamp : undefined,
    };
};
const deserializeAws_restJson1FileFormatDescriptor = (output, context) => {
    return {
        CsvFormatDescriptor: output.CsvFormatDescriptor !== undefined && output.CsvFormatDescriptor !== null
            ? deserializeAws_restJson1CsvFormatDescriptor(output.CsvFormatDescriptor, context)
            : undefined,
        JsonFormatDescriptor: output.JsonFormatDescriptor !== undefined && output.JsonFormatDescriptor !== null
            ? deserializeAws_restJson1JsonFormatDescriptor(output.JsonFormatDescriptor, context)
            : undefined,
    };
};
const deserializeAws_restJson1HeaderList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1HeaderValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1HistoricalDataPathList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ItemizedMetricStats = (output, context) => {
    return {
        MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
        OccurrenceCount: output.OccurrenceCount !== undefined && output.OccurrenceCount !== null ? output.OccurrenceCount : undefined,
    };
};
const deserializeAws_restJson1ItemizedMetricStatsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ItemizedMetricStats(entry, context);
    });
};
const deserializeAws_restJson1JsonFormatDescriptor = (output, context) => {
    return {
        Charset: output.Charset !== undefined && output.Charset !== null ? output.Charset : undefined,
        FileCompression: output.FileCompression !== undefined && output.FileCompression !== null ? output.FileCompression : undefined,
    };
};
const deserializeAws_restJson1LambdaConfiguration = (output, context) => {
    return {
        LambdaArn: output.LambdaArn !== undefined && output.LambdaArn !== null ? output.LambdaArn : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    };
};
const deserializeAws_restJson1Metric = (output, context) => {
    return {
        AggregationFunction: output.AggregationFunction !== undefined && output.AggregationFunction !== null
            ? output.AggregationFunction
            : undefined,
        MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
        Namespace: output.Namespace !== undefined && output.Namespace !== null ? output.Namespace : undefined,
    };
};
const deserializeAws_restJson1MetricLevelImpact = (output, context) => {
    return {
        ContributionMatrix: output.ContributionMatrix !== undefined && output.ContributionMatrix !== null
            ? deserializeAws_restJson1ContributionMatrix(output.ContributionMatrix, context)
            : undefined,
        MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
        NumTimeSeries: output.NumTimeSeries !== undefined && output.NumTimeSeries !== null ? output.NumTimeSeries : undefined,
    };
};
const deserializeAws_restJson1MetricLevelImpactList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MetricLevelImpact(entry, context);
    });
};
const deserializeAws_restJson1MetricList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Metric(entry, context);
    });
};
const deserializeAws_restJson1MetricSetSummary = (output, context) => {
    return {
        AnomalyDetectorArn: output.AnomalyDetectorArn !== undefined && output.AnomalyDetectorArn !== null
            ? output.AnomalyDetectorArn
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LastModificationTime: output.LastModificationTime !== undefined && output.LastModificationTime !== null
            ? new Date(Math.round(output.LastModificationTime * 1000))
            : undefined,
        MetricSetArn: output.MetricSetArn !== undefined && output.MetricSetArn !== null ? output.MetricSetArn : undefined,
        MetricSetDescription: output.MetricSetDescription !== undefined && output.MetricSetDescription !== null
            ? output.MetricSetDescription
            : undefined,
        MetricSetName: output.MetricSetName !== undefined && output.MetricSetName !== null ? output.MetricSetName : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1MetricSetSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MetricSetSummary(entry, context);
    });
};
const deserializeAws_restJson1MetricSource = (output, context) => {
    return {
        AppFlowConfig: output.AppFlowConfig !== undefined && output.AppFlowConfig !== null
            ? deserializeAws_restJson1AppFlowConfig(output.AppFlowConfig, context)
            : undefined,
        CloudWatchConfig: output.CloudWatchConfig !== undefined && output.CloudWatchConfig !== null
            ? deserializeAws_restJson1CloudWatchConfig(output.CloudWatchConfig, context)
            : undefined,
        RDSSourceConfig: output.RDSSourceConfig !== undefined && output.RDSSourceConfig !== null
            ? deserializeAws_restJson1RDSSourceConfig(output.RDSSourceConfig, context)
            : undefined,
        RedshiftSourceConfig: output.RedshiftSourceConfig !== undefined && output.RedshiftSourceConfig !== null
            ? deserializeAws_restJson1RedshiftSourceConfig(output.RedshiftSourceConfig, context)
            : undefined,
        S3SourceConfig: output.S3SourceConfig !== undefined && output.S3SourceConfig !== null
            ? deserializeAws_restJson1S3SourceConfig(output.S3SourceConfig, context)
            : undefined,
    };
};
const deserializeAws_restJson1MetricValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1RDSSourceConfig = (output, context) => {
    return {
        DBInstanceIdentifier: output.DBInstanceIdentifier !== undefined && output.DBInstanceIdentifier !== null
            ? output.DBInstanceIdentifier
            : undefined,
        DatabaseHost: output.DatabaseHost !== undefined && output.DatabaseHost !== null ? output.DatabaseHost : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        DatabasePort: output.DatabasePort !== undefined && output.DatabasePort !== null ? output.DatabasePort : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        SecretManagerArn: output.SecretManagerArn !== undefined && output.SecretManagerArn !== null ? output.SecretManagerArn : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        VpcConfiguration: output.VpcConfiguration !== undefined && output.VpcConfiguration !== null
            ? deserializeAws_restJson1VpcConfiguration(output.VpcConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1RedshiftSourceConfig = (output, context) => {
    return {
        ClusterIdentifier: output.ClusterIdentifier !== undefined && output.ClusterIdentifier !== null
            ? output.ClusterIdentifier
            : undefined,
        DatabaseHost: output.DatabaseHost !== undefined && output.DatabaseHost !== null ? output.DatabaseHost : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        DatabasePort: output.DatabasePort !== undefined && output.DatabasePort !== null ? output.DatabasePort : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        SecretManagerArn: output.SecretManagerArn !== undefined && output.SecretManagerArn !== null ? output.SecretManagerArn : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        VpcConfiguration: output.VpcConfiguration !== undefined && output.VpcConfiguration !== null
            ? deserializeAws_restJson1VpcConfiguration(output.VpcConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1S3SourceConfig = (output, context) => {
    return {
        FileFormatDescriptor: output.FileFormatDescriptor !== undefined && output.FileFormatDescriptor !== null
            ? deserializeAws_restJson1FileFormatDescriptor(output.FileFormatDescriptor, context)
            : undefined,
        HistoricalDataPathList: output.HistoricalDataPathList !== undefined && output.HistoricalDataPathList !== null
            ? deserializeAws_restJson1HistoricalDataPathList(output.HistoricalDataPathList, context)
            : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        TemplatedPathList: output.TemplatedPathList !== undefined && output.TemplatedPathList !== null
            ? deserializeAws_restJson1TemplatedPathList(output.TemplatedPathList, context)
            : undefined,
    };
};
const deserializeAws_restJson1SampleRow = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SampleRows = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SampleRow(entry, context);
    });
};
const deserializeAws_restJson1SecurityGroupIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SNSConfiguration = (output, context) => {
    return {
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        SnsTopicArn: output.SnsTopicArn !== undefined && output.SnsTopicArn !== null ? output.SnsTopicArn : undefined,
    };
};
const deserializeAws_restJson1SubnetIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1TagMap = (output, context) => {
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
const deserializeAws_restJson1TemplatedPathList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1TimeSeries = (output, context) => {
    return {
        DimensionList: output.DimensionList !== undefined && output.DimensionList !== null
            ? deserializeAws_restJson1DimensionNameValueList(output.DimensionList, context)
            : undefined,
        MetricValueList: output.MetricValueList !== undefined && output.MetricValueList !== null
            ? deserializeAws_restJson1MetricValueList(output.MetricValueList, context)
            : undefined,
        TimeSeriesId: output.TimeSeriesId !== undefined && output.TimeSeriesId !== null ? output.TimeSeriesId : undefined,
    };
};
const deserializeAws_restJson1TimeSeriesFeedback = (output, context) => {
    return {
        IsAnomaly: output.IsAnomaly !== undefined && output.IsAnomaly !== null ? output.IsAnomaly : undefined,
        TimeSeriesId: output.TimeSeriesId !== undefined && output.TimeSeriesId !== null ? output.TimeSeriesId : undefined,
    };
};
const deserializeAws_restJson1TimeSeriesFeedbackList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TimeSeriesFeedback(entry, context);
    });
};
const deserializeAws_restJson1TimeSeriesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TimeSeries(entry, context);
    });
};
const deserializeAws_restJson1TimestampColumn = (output, context) => {
    return {
        ColumnFormat: output.ColumnFormat !== undefined && output.ColumnFormat !== null ? output.ColumnFormat : undefined,
        ColumnName: output.ColumnName !== undefined && output.ColumnName !== null ? output.ColumnName : undefined,
    };
};
const deserializeAws_restJson1TimestampList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ValidationExceptionField = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1ValidationExceptionFieldList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
};
const deserializeAws_restJson1VpcConfiguration = (output, context) => {
    return {
        SecurityGroupIdList: output.SecurityGroupIdList !== undefined && output.SecurityGroupIdList !== null
            ? deserializeAws_restJson1SecurityGroupIdList(output.SecurityGroupIdList, context)
            : undefined,
        SubnetIdList: output.SubnetIdList !== undefined && output.SubnetIdList !== null
            ? deserializeAws_restJson1SubnetIdList(output.SubnetIdList, context)
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