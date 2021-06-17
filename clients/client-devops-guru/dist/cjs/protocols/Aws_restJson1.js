"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateServiceIntegrationCommand = exports.deserializeAws_restJson1UpdateResourceCollectionCommand = exports.deserializeAws_restJson1StartCostEstimationCommand = exports.deserializeAws_restJson1SearchInsightsCommand = exports.deserializeAws_restJson1RemoveNotificationChannelCommand = exports.deserializeAws_restJson1PutFeedbackCommand = exports.deserializeAws_restJson1ListRecommendationsCommand = exports.deserializeAws_restJson1ListNotificationChannelsCommand = exports.deserializeAws_restJson1ListInsightsCommand = exports.deserializeAws_restJson1ListEventsCommand = exports.deserializeAws_restJson1ListAnomaliesForInsightCommand = exports.deserializeAws_restJson1GetResourceCollectionCommand = exports.deserializeAws_restJson1GetCostEstimationCommand = exports.deserializeAws_restJson1DescribeServiceIntegrationCommand = exports.deserializeAws_restJson1DescribeResourceCollectionHealthCommand = exports.deserializeAws_restJson1DescribeInsightCommand = exports.deserializeAws_restJson1DescribeFeedbackCommand = exports.deserializeAws_restJson1DescribeAnomalyCommand = exports.deserializeAws_restJson1DescribeAccountOverviewCommand = exports.deserializeAws_restJson1DescribeAccountHealthCommand = exports.deserializeAws_restJson1AddNotificationChannelCommand = exports.serializeAws_restJson1UpdateServiceIntegrationCommand = exports.serializeAws_restJson1UpdateResourceCollectionCommand = exports.serializeAws_restJson1StartCostEstimationCommand = exports.serializeAws_restJson1SearchInsightsCommand = exports.serializeAws_restJson1RemoveNotificationChannelCommand = exports.serializeAws_restJson1PutFeedbackCommand = exports.serializeAws_restJson1ListRecommendationsCommand = exports.serializeAws_restJson1ListNotificationChannelsCommand = exports.serializeAws_restJson1ListInsightsCommand = exports.serializeAws_restJson1ListEventsCommand = exports.serializeAws_restJson1ListAnomaliesForInsightCommand = exports.serializeAws_restJson1GetResourceCollectionCommand = exports.serializeAws_restJson1GetCostEstimationCommand = exports.serializeAws_restJson1DescribeServiceIntegrationCommand = exports.serializeAws_restJson1DescribeResourceCollectionHealthCommand = exports.serializeAws_restJson1DescribeInsightCommand = exports.serializeAws_restJson1DescribeFeedbackCommand = exports.serializeAws_restJson1DescribeAnomalyCommand = exports.serializeAws_restJson1DescribeAccountOverviewCommand = exports.serializeAws_restJson1DescribeAccountHealthCommand = exports.serializeAws_restJson1AddNotificationChannelCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1AddNotificationChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/channels";
    let body;
    body = JSON.stringify({
        ...(input.Config !== undefined &&
            input.Config !== null && { Config: serializeAws_restJson1NotificationChannelConfig(input.Config, context) }),
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
exports.serializeAws_restJson1AddNotificationChannelCommand = serializeAws_restJson1AddNotificationChannelCommand;
const serializeAws_restJson1DescribeAccountHealthCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/health";
    let body;
    body = "";
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
exports.serializeAws_restJson1DescribeAccountHealthCommand = serializeAws_restJson1DescribeAccountHealthCommand;
const serializeAws_restJson1DescribeAccountOverviewCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/overview";
    let body;
    body = JSON.stringify({
        ...(input.FromTime !== undefined &&
            input.FromTime !== null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
        ...(input.ToTime !== undefined && input.ToTime !== null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
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
exports.serializeAws_restJson1DescribeAccountOverviewCommand = serializeAws_restJson1DescribeAccountOverviewCommand;
const serializeAws_restJson1DescribeAnomalyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/anomalies/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DescribeAnomalyCommand = serializeAws_restJson1DescribeAnomalyCommand;
const serializeAws_restJson1DescribeFeedbackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/feedback";
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
exports.serializeAws_restJson1DescribeFeedbackCommand = serializeAws_restJson1DescribeFeedbackCommand;
const serializeAws_restJson1DescribeInsightCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/insights/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
exports.serializeAws_restJson1DescribeInsightCommand = serializeAws_restJson1DescribeInsightCommand;
const serializeAws_restJson1DescribeResourceCollectionHealthCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/health/resource-collection/{ResourceCollectionType}";
    if (input.ResourceCollectionType !== undefined) {
        const labelValue = input.ResourceCollectionType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceCollectionType.");
        }
        resolvedPath = resolvedPath.replace("{ResourceCollectionType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceCollectionType.");
    }
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1DescribeResourceCollectionHealthCommand = serializeAws_restJson1DescribeResourceCollectionHealthCommand;
const serializeAws_restJson1DescribeServiceIntegrationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/service-integrations";
    let body;
    body = "";
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
exports.serializeAws_restJson1DescribeServiceIntegrationCommand = serializeAws_restJson1DescribeServiceIntegrationCommand;
const serializeAws_restJson1GetCostEstimationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/cost-estimation";
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1GetCostEstimationCommand = serializeAws_restJson1GetCostEstimationCommand;
const serializeAws_restJson1GetResourceCollectionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/resource-collections/{ResourceCollectionType}";
    if (input.ResourceCollectionType !== undefined) {
        const labelValue = input.ResourceCollectionType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceCollectionType.");
        }
        resolvedPath = resolvedPath.replace("{ResourceCollectionType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceCollectionType.");
    }
    const query = {
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1GetResourceCollectionCommand = serializeAws_restJson1GetResourceCollectionCommand;
const serializeAws_restJson1ListAnomaliesForInsightCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/anomalies/insight/{InsightId}";
    if (input.InsightId !== undefined) {
        const labelValue = input.InsightId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: InsightId.");
        }
        resolvedPath = resolvedPath.replace("{InsightId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: InsightId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StartTimeRange !== undefined &&
            input.StartTimeRange !== null && {
            StartTimeRange: serializeAws_restJson1StartTimeRange(input.StartTimeRange, context),
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
exports.serializeAws_restJson1ListAnomaliesForInsightCommand = serializeAws_restJson1ListAnomaliesForInsightCommand;
const serializeAws_restJson1ListEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/events";
    let body;
    body = JSON.stringify({
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_restJson1ListEventsFilters(input.Filters, context) }),
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
exports.serializeAws_restJson1ListEventsCommand = serializeAws_restJson1ListEventsCommand;
const serializeAws_restJson1ListInsightsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/insights";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StatusFilter !== undefined &&
            input.StatusFilter !== null && {
            StatusFilter: serializeAws_restJson1ListInsightsStatusFilter(input.StatusFilter, context),
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
exports.serializeAws_restJson1ListInsightsCommand = serializeAws_restJson1ListInsightsCommand;
const serializeAws_restJson1ListNotificationChannelsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/channels";
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
exports.serializeAws_restJson1ListNotificationChannelsCommand = serializeAws_restJson1ListNotificationChannelsCommand;
const serializeAws_restJson1ListRecommendationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/recommendations";
    let body;
    body = JSON.stringify({
        ...(input.InsightId !== undefined && input.InsightId !== null && { InsightId: input.InsightId }),
        ...(input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
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
exports.serializeAws_restJson1ListRecommendationsCommand = serializeAws_restJson1ListRecommendationsCommand;
const serializeAws_restJson1PutFeedbackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/feedback";
    let body;
    body = JSON.stringify({
        ...(input.InsightFeedback !== undefined &&
            input.InsightFeedback !== null && {
            InsightFeedback: serializeAws_restJson1InsightFeedback(input.InsightFeedback, context),
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
exports.serializeAws_restJson1PutFeedbackCommand = serializeAws_restJson1PutFeedbackCommand;
const serializeAws_restJson1RemoveNotificationChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/channels/{Id}";
    if (input.Id !== undefined) {
        const labelValue = input.Id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Id.");
        }
        resolvedPath = resolvedPath.replace("{Id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Id.");
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
const serializeAws_restJson1SearchInsightsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/insights/search";
    let body;
    body = JSON.stringify({
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_restJson1SearchInsightsFilters(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StartTimeRange !== undefined &&
            input.StartTimeRange !== null && {
            StartTimeRange: serializeAws_restJson1StartTimeRange(input.StartTimeRange, context),
        }),
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
exports.serializeAws_restJson1SearchInsightsCommand = serializeAws_restJson1SearchInsightsCommand;
const serializeAws_restJson1StartCostEstimationCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/cost-estimation";
    let body;
    body = JSON.stringify({
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.ResourceCollection !== undefined &&
            input.ResourceCollection !== null && {
            ResourceCollection: serializeAws_restJson1CostEstimationResourceCollectionFilter(input.ResourceCollection, context),
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
exports.serializeAws_restJson1StartCostEstimationCommand = serializeAws_restJson1StartCostEstimationCommand;
const serializeAws_restJson1UpdateResourceCollectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/resource-collections";
    let body;
    body = JSON.stringify({
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.ResourceCollection !== undefined &&
            input.ResourceCollection !== null && {
            ResourceCollection: serializeAws_restJson1UpdateResourceCollectionFilter(input.ResourceCollection, context),
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
exports.serializeAws_restJson1UpdateResourceCollectionCommand = serializeAws_restJson1UpdateResourceCollectionCommand;
const serializeAws_restJson1UpdateServiceIntegrationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/service-integrations";
    let body;
    body = JSON.stringify({
        ...(input.ServiceIntegration !== undefined &&
            input.ServiceIntegration !== null && {
            ServiceIntegration: serializeAws_restJson1UpdateServiceIntegrationConfig(input.ServiceIntegration, context),
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
exports.serializeAws_restJson1UpdateServiceIntegrationCommand = serializeAws_restJson1UpdateServiceIntegrationCommand;
const deserializeAws_restJson1AddNotificationChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AddNotificationChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Id: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AddNotificationChannelCommand = deserializeAws_restJson1AddNotificationChannelCommand;
const deserializeAws_restJson1AddNotificationChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.devopsguru#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.devopsguru#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.devopsguru#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1DescribeAccountHealthCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAccountHealthCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MetricsAnalyzed: undefined,
        OpenProactiveInsights: undefined,
        OpenReactiveInsights: undefined,
        ResourceHours: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.MetricsAnalyzed !== undefined && data.MetricsAnalyzed !== null) {
        contents.MetricsAnalyzed = data.MetricsAnalyzed;
    }
    if (data.OpenProactiveInsights !== undefined && data.OpenProactiveInsights !== null) {
        contents.OpenProactiveInsights = data.OpenProactiveInsights;
    }
    if (data.OpenReactiveInsights !== undefined && data.OpenReactiveInsights !== null) {
        contents.OpenReactiveInsights = data.OpenReactiveInsights;
    }
    if (data.ResourceHours !== undefined && data.ResourceHours !== null) {
        contents.ResourceHours = data.ResourceHours;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAccountHealthCommand = deserializeAws_restJson1DescribeAccountHealthCommand;
const deserializeAws_restJson1DescribeAccountHealthCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1DescribeAccountOverviewCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAccountOverviewCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        MeanTimeToRecoverInMilliseconds: undefined,
        ProactiveInsights: undefined,
        ReactiveInsights: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.MeanTimeToRecoverInMilliseconds !== undefined && data.MeanTimeToRecoverInMilliseconds !== null) {
        contents.MeanTimeToRecoverInMilliseconds = data.MeanTimeToRecoverInMilliseconds;
    }
    if (data.ProactiveInsights !== undefined && data.ProactiveInsights !== null) {
        contents.ProactiveInsights = data.ProactiveInsights;
    }
    if (data.ReactiveInsights !== undefined && data.ReactiveInsights !== null) {
        contents.ReactiveInsights = data.ReactiveInsights;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAccountOverviewCommand = deserializeAws_restJson1DescribeAccountOverviewCommand;
const deserializeAws_restJson1DescribeAccountOverviewCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1DescribeAnomalyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAnomalyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ProactiveAnomaly: undefined,
        ReactiveAnomaly: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ProactiveAnomaly !== undefined && data.ProactiveAnomaly !== null) {
        contents.ProactiveAnomaly = deserializeAws_restJson1ProactiveAnomaly(data.ProactiveAnomaly, context);
    }
    if (data.ReactiveAnomaly !== undefined && data.ReactiveAnomaly !== null) {
        contents.ReactiveAnomaly = deserializeAws_restJson1ReactiveAnomaly(data.ReactiveAnomaly, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAnomalyCommand = deserializeAws_restJson1DescribeAnomalyCommand;
const deserializeAws_restJson1DescribeAnomalyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.devopsguru#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1DescribeFeedbackCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeFeedbackCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        InsightFeedback: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.InsightFeedback !== undefined && data.InsightFeedback !== null) {
        contents.InsightFeedback = deserializeAws_restJson1InsightFeedback(data.InsightFeedback, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeFeedbackCommand = deserializeAws_restJson1DescribeFeedbackCommand;
const deserializeAws_restJson1DescribeFeedbackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.devopsguru#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1DescribeInsightCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeInsightCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ProactiveInsight: undefined,
        ReactiveInsight: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ProactiveInsight !== undefined && data.ProactiveInsight !== null) {
        contents.ProactiveInsight = deserializeAws_restJson1ProactiveInsight(data.ProactiveInsight, context);
    }
    if (data.ReactiveInsight !== undefined && data.ReactiveInsight !== null) {
        contents.ReactiveInsight = deserializeAws_restJson1ReactiveInsight(data.ReactiveInsight, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeInsightCommand = deserializeAws_restJson1DescribeInsightCommand;
const deserializeAws_restJson1DescribeInsightCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.devopsguru#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1DescribeResourceCollectionHealthCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeResourceCollectionHealthCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CloudFormation: undefined,
        NextToken: undefined,
        Service: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CloudFormation !== undefined && data.CloudFormation !== null) {
        contents.CloudFormation = deserializeAws_restJson1CloudFormationHealths(data.CloudFormation, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Service !== undefined && data.Service !== null) {
        contents.Service = deserializeAws_restJson1ServiceHealths(data.Service, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeResourceCollectionHealthCommand = deserializeAws_restJson1DescribeResourceCollectionHealthCommand;
const deserializeAws_restJson1DescribeResourceCollectionHealthCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1DescribeServiceIntegrationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeServiceIntegrationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ServiceIntegration: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ServiceIntegration !== undefined && data.ServiceIntegration !== null) {
        contents.ServiceIntegration = deserializeAws_restJson1ServiceIntegrationConfig(data.ServiceIntegration, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeServiceIntegrationCommand = deserializeAws_restJson1DescribeServiceIntegrationCommand;
const deserializeAws_restJson1DescribeServiceIntegrationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1GetCostEstimationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCostEstimationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Costs: undefined,
        NextToken: undefined,
        ResourceCollection: undefined,
        Status: undefined,
        TimeRange: undefined,
        TotalCost: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Costs !== undefined && data.Costs !== null) {
        contents.Costs = deserializeAws_restJson1ServiceResourceCosts(data.Costs, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.ResourceCollection !== undefined && data.ResourceCollection !== null) {
        contents.ResourceCollection = deserializeAws_restJson1CostEstimationResourceCollectionFilter(data.ResourceCollection, context);
    }
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    if (data.TimeRange !== undefined && data.TimeRange !== null) {
        contents.TimeRange = deserializeAws_restJson1CostEstimationTimeRange(data.TimeRange, context);
    }
    if (data.TotalCost !== undefined && data.TotalCost !== null) {
        contents.TotalCost = data.TotalCost;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCostEstimationCommand = deserializeAws_restJson1GetCostEstimationCommand;
const deserializeAws_restJson1GetCostEstimationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.devopsguru#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1GetResourceCollectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetResourceCollectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        ResourceCollection: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.ResourceCollection !== undefined && data.ResourceCollection !== null) {
        contents.ResourceCollection = deserializeAws_restJson1ResourceCollectionFilter(data.ResourceCollection, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetResourceCollectionCommand = deserializeAws_restJson1GetResourceCollectionCommand;
const deserializeAws_restJson1GetResourceCollectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.devopsguru#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1ListAnomaliesForInsightCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAnomaliesForInsightCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        ProactiveAnomalies: undefined,
        ReactiveAnomalies: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.ProactiveAnomalies !== undefined && data.ProactiveAnomalies !== null) {
        contents.ProactiveAnomalies = deserializeAws_restJson1ProactiveAnomalies(data.ProactiveAnomalies, context);
    }
    if (data.ReactiveAnomalies !== undefined && data.ReactiveAnomalies !== null) {
        contents.ReactiveAnomalies = deserializeAws_restJson1ReactiveAnomalies(data.ReactiveAnomalies, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAnomaliesForInsightCommand = deserializeAws_restJson1ListAnomaliesForInsightCommand;
const deserializeAws_restJson1ListAnomaliesForInsightCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.devopsguru#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1ListEventsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListEventsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Events: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Events !== undefined && data.Events !== null) {
        contents.Events = deserializeAws_restJson1Events(data.Events, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListEventsCommand = deserializeAws_restJson1ListEventsCommand;
const deserializeAws_restJson1ListEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.devopsguru#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1ListInsightsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListInsightsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        ProactiveInsights: undefined,
        ReactiveInsights: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.ProactiveInsights !== undefined && data.ProactiveInsights !== null) {
        contents.ProactiveInsights = deserializeAws_restJson1ProactiveInsights(data.ProactiveInsights, context);
    }
    if (data.ReactiveInsights !== undefined && data.ReactiveInsights !== null) {
        contents.ReactiveInsights = deserializeAws_restJson1ReactiveInsights(data.ReactiveInsights, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListInsightsCommand = deserializeAws_restJson1ListInsightsCommand;
const deserializeAws_restJson1ListInsightsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1ListNotificationChannelsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListNotificationChannelsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Channels: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Channels !== undefined && data.Channels !== null) {
        contents.Channels = deserializeAws_restJson1Channels(data.Channels, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListNotificationChannelsCommand = deserializeAws_restJson1ListNotificationChannelsCommand;
const deserializeAws_restJson1ListNotificationChannelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1ListRecommendationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRecommendationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Recommendations: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Recommendations !== undefined && data.Recommendations !== null) {
        contents.Recommendations = deserializeAws_restJson1Recommendations(data.Recommendations, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRecommendationsCommand = deserializeAws_restJson1ListRecommendationsCommand;
const deserializeAws_restJson1ListRecommendationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.devopsguru#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.devopsguru#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.devopsguru#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
    };
    await collectBody(output.body, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.devopsguru#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.devopsguru#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1SearchInsightsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SearchInsightsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        ProactiveInsights: undefined,
        ReactiveInsights: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.ProactiveInsights !== undefined && data.ProactiveInsights !== null) {
        contents.ProactiveInsights = deserializeAws_restJson1ProactiveInsights(data.ProactiveInsights, context);
    }
    if (data.ReactiveInsights !== undefined && data.ReactiveInsights !== null) {
        contents.ReactiveInsights = deserializeAws_restJson1ReactiveInsights(data.ReactiveInsights, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SearchInsightsCommand = deserializeAws_restJson1SearchInsightsCommand;
const deserializeAws_restJson1SearchInsightsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1StartCostEstimationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartCostEstimationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartCostEstimationCommand = deserializeAws_restJson1StartCostEstimationCommand;
const deserializeAws_restJson1StartCostEstimationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.devopsguru#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.devopsguru#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1UpdateResourceCollectionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateResourceCollectionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateResourceCollectionCommand = deserializeAws_restJson1UpdateResourceCollectionCommand;
const deserializeAws_restJson1UpdateResourceCollectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.devopsguru#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
const deserializeAws_restJson1UpdateServiceIntegrationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateServiceIntegrationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateServiceIntegrationCommand = deserializeAws_restJson1UpdateServiceIntegrationCommand;
const deserializeAws_restJson1UpdateServiceIntegrationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.devopsguru#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.devopsguru#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.devopsguru#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.devopsguru#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.devopsguru#ValidationException":
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
        RetryAfterSeconds: undefined,
    };
    if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.RetryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
    }
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
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        QuotaCode: undefined,
        RetryAfterSeconds: undefined,
        ServiceCode: undefined,
    };
    if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.RetryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
    }
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.QuotaCode !== undefined && data.QuotaCode !== null) {
        contents.QuotaCode = data.QuotaCode;
    }
    if (data.ServiceCode !== undefined && data.ServiceCode !== null) {
        contents.ServiceCode = data.ServiceCode;
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
        contents.Fields = deserializeAws_restJson1ValidationExceptionFields(data.Fields, context);
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.Reason !== undefined && data.Reason !== null) {
        contents.Reason = data.Reason;
    }
    return contents;
};
const serializeAws_restJson1CloudFormationCollection = (input, context) => {
    return {
        ...(input.StackNames !== undefined &&
            input.StackNames !== null && { StackNames: serializeAws_restJson1StackNames(input.StackNames, context) }),
    };
};
const serializeAws_restJson1CloudFormationCostEstimationResourceCollectionFilter = (input, context) => {
    return {
        ...(input.StackNames !== undefined &&
            input.StackNames !== null && {
            StackNames: serializeAws_restJson1CostEstimationStackNames(input.StackNames, context),
        }),
    };
};
const serializeAws_restJson1CostEstimationResourceCollectionFilter = (input, context) => {
    return {
        ...(input.CloudFormation !== undefined &&
            input.CloudFormation !== null && {
            CloudFormation: serializeAws_restJson1CloudFormationCostEstimationResourceCollectionFilter(input.CloudFormation, context),
        }),
    };
};
const serializeAws_restJson1CostEstimationStackNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1EndTimeRange = (input, context) => {
    return {
        ...(input.FromTime !== undefined &&
            input.FromTime !== null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
        ...(input.ToTime !== undefined && input.ToTime !== null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
    };
};
const serializeAws_restJson1EventTimeRange = (input, context) => {
    return {
        ...(input.FromTime !== undefined &&
            input.FromTime !== null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
        ...(input.ToTime !== undefined && input.ToTime !== null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
    };
};
const serializeAws_restJson1InsightFeedback = (input, context) => {
    return {
        ...(input.Feedback !== undefined && input.Feedback !== null && { Feedback: input.Feedback }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    };
};
const serializeAws_restJson1InsightSeverities = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1InsightStatuses = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ListEventsFilters = (input, context) => {
    return {
        ...(input.DataSource !== undefined && input.DataSource !== null && { DataSource: input.DataSource }),
        ...(input.EventClass !== undefined && input.EventClass !== null && { EventClass: input.EventClass }),
        ...(input.EventSource !== undefined && input.EventSource !== null && { EventSource: input.EventSource }),
        ...(input.EventTimeRange !== undefined &&
            input.EventTimeRange !== null && {
            EventTimeRange: serializeAws_restJson1EventTimeRange(input.EventTimeRange, context),
        }),
        ...(input.InsightId !== undefined && input.InsightId !== null && { InsightId: input.InsightId }),
        ...(input.ResourceCollection !== undefined &&
            input.ResourceCollection !== null && {
            ResourceCollection: serializeAws_restJson1ResourceCollection(input.ResourceCollection, context),
        }),
    };
};
const serializeAws_restJson1ListInsightsAnyStatusFilter = (input, context) => {
    return {
        ...(input.StartTimeRange !== undefined &&
            input.StartTimeRange !== null && {
            StartTimeRange: serializeAws_restJson1StartTimeRange(input.StartTimeRange, context),
        }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1ListInsightsClosedStatusFilter = (input, context) => {
    return {
        ...(input.EndTimeRange !== undefined &&
            input.EndTimeRange !== null && { EndTimeRange: serializeAws_restJson1EndTimeRange(input.EndTimeRange, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1ListInsightsOngoingStatusFilter = (input, context) => {
    return {
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1ListInsightsStatusFilter = (input, context) => {
    return {
        ...(input.Any !== undefined &&
            input.Any !== null && { Any: serializeAws_restJson1ListInsightsAnyStatusFilter(input.Any, context) }),
        ...(input.Closed !== undefined &&
            input.Closed !== null && { Closed: serializeAws_restJson1ListInsightsClosedStatusFilter(input.Closed, context) }),
        ...(input.Ongoing !== undefined &&
            input.Ongoing !== null && {
            Ongoing: serializeAws_restJson1ListInsightsOngoingStatusFilter(input.Ongoing, context),
        }),
    };
};
const serializeAws_restJson1NotificationChannelConfig = (input, context) => {
    return {
        ...(input.Sns !== undefined &&
            input.Sns !== null && { Sns: serializeAws_restJson1SnsChannelConfig(input.Sns, context) }),
    };
};
const serializeAws_restJson1OpsCenterIntegrationConfig = (input, context) => {
    return {
        ...(input.OptInStatus !== undefined && input.OptInStatus !== null && { OptInStatus: input.OptInStatus }),
    };
};
const serializeAws_restJson1ResourceCollection = (input, context) => {
    return {
        ...(input.CloudFormation !== undefined &&
            input.CloudFormation !== null && {
            CloudFormation: serializeAws_restJson1CloudFormationCollection(input.CloudFormation, context),
        }),
    };
};
const serializeAws_restJson1SearchInsightsFilters = (input, context) => {
    return {
        ...(input.ResourceCollection !== undefined &&
            input.ResourceCollection !== null && {
            ResourceCollection: serializeAws_restJson1ResourceCollection(input.ResourceCollection, context),
        }),
        ...(input.ServiceCollection !== undefined &&
            input.ServiceCollection !== null && {
            ServiceCollection: serializeAws_restJson1ServiceCollection(input.ServiceCollection, context),
        }),
        ...(input.Severities !== undefined &&
            input.Severities !== null && { Severities: serializeAws_restJson1InsightSeverities(input.Severities, context) }),
        ...(input.Statuses !== undefined &&
            input.Statuses !== null && { Statuses: serializeAws_restJson1InsightStatuses(input.Statuses, context) }),
    };
};
const serializeAws_restJson1ServiceCollection = (input, context) => {
    return {
        ...(input.ServiceNames !== undefined &&
            input.ServiceNames !== null && { ServiceNames: serializeAws_restJson1ServiceNames(input.ServiceNames, context) }),
    };
};
const serializeAws_restJson1ServiceNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SnsChannelConfig = (input, context) => {
    return {
        ...(input.TopicArn !== undefined && input.TopicArn !== null && { TopicArn: input.TopicArn }),
    };
};
const serializeAws_restJson1StackNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1StartTimeRange = (input, context) => {
    return {
        ...(input.FromTime !== undefined &&
            input.FromTime !== null && { FromTime: Math.round(input.FromTime.getTime() / 1000) }),
        ...(input.ToTime !== undefined && input.ToTime !== null && { ToTime: Math.round(input.ToTime.getTime() / 1000) }),
    };
};
const serializeAws_restJson1UpdateCloudFormationCollectionFilter = (input, context) => {
    return {
        ...(input.StackNames !== undefined &&
            input.StackNames !== null && { StackNames: serializeAws_restJson1UpdateStackNames(input.StackNames, context) }),
    };
};
const serializeAws_restJson1UpdateResourceCollectionFilter = (input, context) => {
    return {
        ...(input.CloudFormation !== undefined &&
            input.CloudFormation !== null && {
            CloudFormation: serializeAws_restJson1UpdateCloudFormationCollectionFilter(input.CloudFormation, context),
        }),
    };
};
const serializeAws_restJson1UpdateServiceIntegrationConfig = (input, context) => {
    return {
        ...(input.OpsCenter !== undefined &&
            input.OpsCenter !== null && {
            OpsCenter: serializeAws_restJson1OpsCenterIntegrationConfig(input.OpsCenter, context),
        }),
    };
};
const serializeAws_restJson1UpdateStackNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1AnomalySourceDetails = (output, context) => {
    return {
        CloudWatchMetrics: output.CloudWatchMetrics !== undefined && output.CloudWatchMetrics !== null
            ? deserializeAws_restJson1CloudWatchMetricsDetails(output.CloudWatchMetrics, context)
            : undefined,
    };
};
const deserializeAws_restJson1AnomalyTimeRange = (output, context) => {
    return {
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1Channels = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1NotificationChannel(entry, context);
    });
};
const deserializeAws_restJson1CloudFormationCollection = (output, context) => {
    return {
        StackNames: output.StackNames !== undefined && output.StackNames !== null
            ? deserializeAws_restJson1StackNames(output.StackNames, context)
            : undefined,
    };
};
const deserializeAws_restJson1CloudFormationCollectionFilter = (output, context) => {
    return {
        StackNames: output.StackNames !== undefined && output.StackNames !== null
            ? deserializeAws_restJson1StackNames(output.StackNames, context)
            : undefined,
    };
};
const deserializeAws_restJson1CloudFormationCostEstimationResourceCollectionFilter = (output, context) => {
    return {
        StackNames: output.StackNames !== undefined && output.StackNames !== null
            ? deserializeAws_restJson1CostEstimationStackNames(output.StackNames, context)
            : undefined,
    };
};
const deserializeAws_restJson1CloudFormationHealth = (output, context) => {
    return {
        Insight: output.Insight !== undefined && output.Insight !== null
            ? deserializeAws_restJson1InsightHealth(output.Insight, context)
            : undefined,
        StackName: output.StackName !== undefined && output.StackName !== null ? output.StackName : undefined,
    };
};
const deserializeAws_restJson1CloudFormationHealths = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CloudFormationHealth(entry, context);
    });
};
const deserializeAws_restJson1CloudWatchMetricsDetail = (output, context) => {
    return {
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_restJson1CloudWatchMetricsDimensions(output.Dimensions, context)
            : undefined,
        MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
        Namespace: output.Namespace !== undefined && output.Namespace !== null ? output.Namespace : undefined,
        Period: output.Period !== undefined && output.Period !== null ? output.Period : undefined,
        Stat: output.Stat !== undefined && output.Stat !== null ? output.Stat : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    };
};
const deserializeAws_restJson1CloudWatchMetricsDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CloudWatchMetricsDetail(entry, context);
    });
};
const deserializeAws_restJson1CloudWatchMetricsDimension = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1CloudWatchMetricsDimensions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CloudWatchMetricsDimension(entry, context);
    });
};
const deserializeAws_restJson1CostEstimationResourceCollectionFilter = (output, context) => {
    return {
        CloudFormation: output.CloudFormation !== undefined && output.CloudFormation !== null
            ? deserializeAws_restJson1CloudFormationCostEstimationResourceCollectionFilter(output.CloudFormation, context)
            : undefined,
    };
};
const deserializeAws_restJson1CostEstimationStackNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1CostEstimationTimeRange = (output, context) => {
    return {
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1Event = (output, context) => {
    return {
        DataSource: output.DataSource !== undefined && output.DataSource !== null ? output.DataSource : undefined,
        EventClass: output.EventClass !== undefined && output.EventClass !== null ? output.EventClass : undefined,
        EventSource: output.EventSource !== undefined && output.EventSource !== null ? output.EventSource : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ResourceCollection: output.ResourceCollection !== undefined && output.ResourceCollection !== null
            ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
            : undefined,
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_restJson1EventResources(output.Resources, context)
            : undefined,
        Time: output.Time !== undefined && output.Time !== null ? new Date(Math.round(output.Time * 1000)) : undefined,
    };
};
const deserializeAws_restJson1EventResource = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1EventResources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EventResource(entry, context);
    });
};
const deserializeAws_restJson1Events = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Event(entry, context);
    });
};
const deserializeAws_restJson1InsightFeedback = (output, context) => {
    return {
        Feedback: output.Feedback !== undefined && output.Feedback !== null ? output.Feedback : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
const deserializeAws_restJson1InsightHealth = (output, context) => {
    return {
        MeanTimeToRecoverInMilliseconds: output.MeanTimeToRecoverInMilliseconds !== undefined && output.MeanTimeToRecoverInMilliseconds !== null
            ? output.MeanTimeToRecoverInMilliseconds
            : undefined,
        OpenProactiveInsights: output.OpenProactiveInsights !== undefined && output.OpenProactiveInsights !== null
            ? output.OpenProactiveInsights
            : undefined,
        OpenReactiveInsights: output.OpenReactiveInsights !== undefined && output.OpenReactiveInsights !== null
            ? output.OpenReactiveInsights
            : undefined,
    };
};
const deserializeAws_restJson1InsightTimeRange = (output, context) => {
    return {
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1NotificationChannel = (output, context) => {
    return {
        Config: output.Config !== undefined && output.Config !== null
            ? deserializeAws_restJson1NotificationChannelConfig(output.Config, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
const deserializeAws_restJson1NotificationChannelConfig = (output, context) => {
    return {
        Sns: output.Sns !== undefined && output.Sns !== null
            ? deserializeAws_restJson1SnsChannelConfig(output.Sns, context)
            : undefined,
    };
};
const deserializeAws_restJson1OpsCenterIntegration = (output, context) => {
    return {
        OptInStatus: output.OptInStatus !== undefined && output.OptInStatus !== null ? output.OptInStatus : undefined,
    };
};
const deserializeAws_restJson1PredictionTimeRange = (output, context) => {
    return {
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1ProactiveAnomalies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ProactiveAnomalySummary(entry, context);
    });
};
const deserializeAws_restJson1ProactiveAnomaly = (output, context) => {
    return {
        AnomalyTimeRange: output.AnomalyTimeRange !== undefined && output.AnomalyTimeRange !== null
            ? deserializeAws_restJson1AnomalyTimeRange(output.AnomalyTimeRange, context)
            : undefined,
        AssociatedInsightId: output.AssociatedInsightId !== undefined && output.AssociatedInsightId !== null
            ? output.AssociatedInsightId
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Limit: output.Limit !== undefined && output.Limit !== null ? output.Limit : undefined,
        PredictionTimeRange: output.PredictionTimeRange !== undefined && output.PredictionTimeRange !== null
            ? deserializeAws_restJson1PredictionTimeRange(output.PredictionTimeRange, context)
            : undefined,
        ResourceCollection: output.ResourceCollection !== undefined && output.ResourceCollection !== null
            ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
            : undefined,
        Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
        SourceDetails: output.SourceDetails !== undefined && output.SourceDetails !== null
            ? deserializeAws_restJson1AnomalySourceDetails(output.SourceDetails, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null
            ? new Date(Math.round(output.UpdateTime * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1ProactiveAnomalySummary = (output, context) => {
    return {
        AnomalyTimeRange: output.AnomalyTimeRange !== undefined && output.AnomalyTimeRange !== null
            ? deserializeAws_restJson1AnomalyTimeRange(output.AnomalyTimeRange, context)
            : undefined,
        AssociatedInsightId: output.AssociatedInsightId !== undefined && output.AssociatedInsightId !== null
            ? output.AssociatedInsightId
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Limit: output.Limit !== undefined && output.Limit !== null ? output.Limit : undefined,
        PredictionTimeRange: output.PredictionTimeRange !== undefined && output.PredictionTimeRange !== null
            ? deserializeAws_restJson1PredictionTimeRange(output.PredictionTimeRange, context)
            : undefined,
        ResourceCollection: output.ResourceCollection !== undefined && output.ResourceCollection !== null
            ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
            : undefined,
        Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
        SourceDetails: output.SourceDetails !== undefined && output.SourceDetails !== null
            ? deserializeAws_restJson1AnomalySourceDetails(output.SourceDetails, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null
            ? new Date(Math.round(output.UpdateTime * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1ProactiveInsight = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InsightTimeRange: output.InsightTimeRange !== undefined && output.InsightTimeRange !== null
            ? deserializeAws_restJson1InsightTimeRange(output.InsightTimeRange, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PredictionTimeRange: output.PredictionTimeRange !== undefined && output.PredictionTimeRange !== null
            ? deserializeAws_restJson1PredictionTimeRange(output.PredictionTimeRange, context)
            : undefined,
        ResourceCollection: output.ResourceCollection !== undefined && output.ResourceCollection !== null
            ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
            : undefined,
        Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
        SsmOpsItemId: output.SsmOpsItemId !== undefined && output.SsmOpsItemId !== null ? output.SsmOpsItemId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1ProactiveInsights = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ProactiveInsightSummary(entry, context);
    });
};
const deserializeAws_restJson1ProactiveInsightSummary = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InsightTimeRange: output.InsightTimeRange !== undefined && output.InsightTimeRange !== null
            ? deserializeAws_restJson1InsightTimeRange(output.InsightTimeRange, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PredictionTimeRange: output.PredictionTimeRange !== undefined && output.PredictionTimeRange !== null
            ? deserializeAws_restJson1PredictionTimeRange(output.PredictionTimeRange, context)
            : undefined,
        ResourceCollection: output.ResourceCollection !== undefined && output.ResourceCollection !== null
            ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
            : undefined,
        ServiceCollection: output.ServiceCollection !== undefined && output.ServiceCollection !== null
            ? deserializeAws_restJson1ServiceCollection(output.ServiceCollection, context)
            : undefined,
        Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1ReactiveAnomalies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ReactiveAnomalySummary(entry, context);
    });
};
const deserializeAws_restJson1ReactiveAnomaly = (output, context) => {
    return {
        AnomalyTimeRange: output.AnomalyTimeRange !== undefined && output.AnomalyTimeRange !== null
            ? deserializeAws_restJson1AnomalyTimeRange(output.AnomalyTimeRange, context)
            : undefined,
        AssociatedInsightId: output.AssociatedInsightId !== undefined && output.AssociatedInsightId !== null
            ? output.AssociatedInsightId
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ResourceCollection: output.ResourceCollection !== undefined && output.ResourceCollection !== null
            ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
            : undefined,
        Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
        SourceDetails: output.SourceDetails !== undefined && output.SourceDetails !== null
            ? deserializeAws_restJson1AnomalySourceDetails(output.SourceDetails, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1ReactiveAnomalySummary = (output, context) => {
    return {
        AnomalyTimeRange: output.AnomalyTimeRange !== undefined && output.AnomalyTimeRange !== null
            ? deserializeAws_restJson1AnomalyTimeRange(output.AnomalyTimeRange, context)
            : undefined,
        AssociatedInsightId: output.AssociatedInsightId !== undefined && output.AssociatedInsightId !== null
            ? output.AssociatedInsightId
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ResourceCollection: output.ResourceCollection !== undefined && output.ResourceCollection !== null
            ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
            : undefined,
        Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
        SourceDetails: output.SourceDetails !== undefined && output.SourceDetails !== null
            ? deserializeAws_restJson1AnomalySourceDetails(output.SourceDetails, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1ReactiveInsight = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InsightTimeRange: output.InsightTimeRange !== undefined && output.InsightTimeRange !== null
            ? deserializeAws_restJson1InsightTimeRange(output.InsightTimeRange, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ResourceCollection: output.ResourceCollection !== undefined && output.ResourceCollection !== null
            ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
            : undefined,
        Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
        SsmOpsItemId: output.SsmOpsItemId !== undefined && output.SsmOpsItemId !== null ? output.SsmOpsItemId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1ReactiveInsights = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ReactiveInsightSummary(entry, context);
    });
};
const deserializeAws_restJson1ReactiveInsightSummary = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InsightTimeRange: output.InsightTimeRange !== undefined && output.InsightTimeRange !== null
            ? deserializeAws_restJson1InsightTimeRange(output.InsightTimeRange, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ResourceCollection: output.ResourceCollection !== undefined && output.ResourceCollection !== null
            ? deserializeAws_restJson1ResourceCollection(output.ResourceCollection, context)
            : undefined,
        ServiceCollection: output.ServiceCollection !== undefined && output.ServiceCollection !== null
            ? deserializeAws_restJson1ServiceCollection(output.ServiceCollection, context)
            : undefined,
        Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1Recommendation = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Link: output.Link !== undefined && output.Link !== null ? output.Link : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
        RelatedAnomalies: output.RelatedAnomalies !== undefined && output.RelatedAnomalies !== null
            ? deserializeAws_restJson1RecommendationRelatedAnomalies(output.RelatedAnomalies, context)
            : undefined,
        RelatedEvents: output.RelatedEvents !== undefined && output.RelatedEvents !== null
            ? deserializeAws_restJson1RecommendationRelatedEvents(output.RelatedEvents, context)
            : undefined,
    };
};
const deserializeAws_restJson1RecommendationRelatedAnomalies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RecommendationRelatedAnomaly(entry, context);
    });
};
const deserializeAws_restJson1RecommendationRelatedAnomaly = (output, context) => {
    return {
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_restJson1RecommendationRelatedAnomalyResources(output.Resources, context)
            : undefined,
        SourceDetails: output.SourceDetails !== undefined && output.SourceDetails !== null
            ? deserializeAws_restJson1RelatedAnomalySourceDetails(output.SourceDetails, context)
            : undefined,
    };
};
const deserializeAws_restJson1RecommendationRelatedAnomalyResource = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1RecommendationRelatedAnomalyResources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RecommendationRelatedAnomalyResource(entry, context);
    });
};
const deserializeAws_restJson1RecommendationRelatedAnomalySourceDetail = (output, context) => {
    return {
        CloudWatchMetrics: output.CloudWatchMetrics !== undefined && output.CloudWatchMetrics !== null
            ? deserializeAws_restJson1RecommendationRelatedCloudWatchMetricsSourceDetails(output.CloudWatchMetrics, context)
            : undefined,
    };
};
const deserializeAws_restJson1RecommendationRelatedCloudWatchMetricsSourceDetail = (output, context) => {
    return {
        MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
        Namespace: output.Namespace !== undefined && output.Namespace !== null ? output.Namespace : undefined,
    };
};
const deserializeAws_restJson1RecommendationRelatedCloudWatchMetricsSourceDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RecommendationRelatedCloudWatchMetricsSourceDetail(entry, context);
    });
};
const deserializeAws_restJson1RecommendationRelatedEvent = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_restJson1RecommendationRelatedEventResources(output.Resources, context)
            : undefined,
    };
};
const deserializeAws_restJson1RecommendationRelatedEventResource = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1RecommendationRelatedEventResources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RecommendationRelatedEventResource(entry, context);
    });
};
const deserializeAws_restJson1RecommendationRelatedEvents = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RecommendationRelatedEvent(entry, context);
    });
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
const deserializeAws_restJson1RelatedAnomalySourceDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RecommendationRelatedAnomalySourceDetail(entry, context);
    });
};
const deserializeAws_restJson1ResourceCollection = (output, context) => {
    return {
        CloudFormation: output.CloudFormation !== undefined && output.CloudFormation !== null
            ? deserializeAws_restJson1CloudFormationCollection(output.CloudFormation, context)
            : undefined,
    };
};
const deserializeAws_restJson1ResourceCollectionFilter = (output, context) => {
    return {
        CloudFormation: output.CloudFormation !== undefined && output.CloudFormation !== null
            ? deserializeAws_restJson1CloudFormationCollectionFilter(output.CloudFormation, context)
            : undefined,
    };
};
const deserializeAws_restJson1ServiceCollection = (output, context) => {
    return {
        ServiceNames: output.ServiceNames !== undefined && output.ServiceNames !== null
            ? deserializeAws_restJson1ServiceNames(output.ServiceNames, context)
            : undefined,
    };
};
const deserializeAws_restJson1ServiceHealth = (output, context) => {
    return {
        Insight: output.Insight !== undefined && output.Insight !== null
            ? deserializeAws_restJson1ServiceInsightHealth(output.Insight, context)
            : undefined,
        ServiceName: output.ServiceName !== undefined && output.ServiceName !== null ? output.ServiceName : undefined,
    };
};
const deserializeAws_restJson1ServiceHealths = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ServiceHealth(entry, context);
    });
};
const deserializeAws_restJson1ServiceInsightHealth = (output, context) => {
    return {
        OpenProactiveInsights: output.OpenProactiveInsights !== undefined && output.OpenProactiveInsights !== null
            ? output.OpenProactiveInsights
            : undefined,
        OpenReactiveInsights: output.OpenReactiveInsights !== undefined && output.OpenReactiveInsights !== null
            ? output.OpenReactiveInsights
            : undefined,
    };
};
const deserializeAws_restJson1ServiceIntegrationConfig = (output, context) => {
    return {
        OpsCenter: output.OpsCenter !== undefined && output.OpsCenter !== null
            ? deserializeAws_restJson1OpsCenterIntegration(output.OpsCenter, context)
            : undefined,
    };
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
const deserializeAws_restJson1ServiceResourceCost = (output, context) => {
    return {
        Cost: output.Cost !== undefined && output.Cost !== null ? output.Cost : undefined,
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        UnitCost: output.UnitCost !== undefined && output.UnitCost !== null ? output.UnitCost : undefined,
    };
};
const deserializeAws_restJson1ServiceResourceCosts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ServiceResourceCost(entry, context);
    });
};
const deserializeAws_restJson1SnsChannelConfig = (output, context) => {
    return {
        TopicArn: output.TopicArn !== undefined && output.TopicArn !== null ? output.TopicArn : undefined,
    };
};
const deserializeAws_restJson1StackNames = (output, context) => {
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
const deserializeAws_restJson1ValidationExceptionFields = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
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