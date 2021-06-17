import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_restJson1BatchGetTracesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/Traces";
                body = JSON.stringify(__assign(__assign({}, (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.TraceIds !== undefined &&
                    input.TraceIds !== null && { TraceIds: serializeAws_restJson1TraceIdList(input.TraceIds, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/CreateGroup";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.FilterExpression !== undefined &&
                    input.FilterExpression !== null && { FilterExpression: input.FilterExpression })), (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.InsightsConfiguration !== undefined &&
                    input.InsightsConfiguration !== null && {
                    InsightsConfiguration: serializeAws_restJson1InsightsConfiguration(input.InsightsConfiguration, context),
                })), (input.Tags !== undefined &&
                    input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateSamplingRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/CreateSamplingRule";
                body = JSON.stringify(__assign(__assign({}, (input.SamplingRule !== undefined &&
                    input.SamplingRule !== null && { SamplingRule: serializeAws_restJson1SamplingRule(input.SamplingRule, context) })), (input.Tags !== undefined &&
                    input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/DeleteGroup";
                body = JSON.stringify(__assign(__assign({}, (input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN })), (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteSamplingRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/DeleteSamplingRule";
                body = JSON.stringify(__assign(__assign({}, (input.RuleARN !== undefined && input.RuleARN !== null && { RuleARN: input.RuleARN })), (input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetEncryptionConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/EncryptionConfig";
                body = "";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/GetGroup";
                body = JSON.stringify(__assign(__assign({}, (input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN })), (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/Groups";
                body = JSON.stringify(__assign({}, (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetInsightCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/Insight";
                body = JSON.stringify(__assign({}, (input.InsightId !== undefined && input.InsightId !== null && { InsightId: input.InsightId })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetInsightEventsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/InsightEvents";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.InsightId !== undefined && input.InsightId !== null && { InsightId: input.InsightId })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetInsightImpactGraphCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/InsightImpactGraph";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.EndTime !== undefined &&
                    input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.InsightId !== undefined && input.InsightId !== null && { InsightId: input.InsightId })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.StartTime !== undefined &&
                    input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetInsightSummariesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/InsightSummaries";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.EndTime !== undefined &&
                    input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN })), (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.StartTime !== undefined &&
                    input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) })), (input.States !== undefined &&
                    input.States !== null && { States: serializeAws_restJson1InsightStateList(input.States, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetSamplingRulesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/GetSamplingRules";
                body = JSON.stringify(__assign({}, (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetSamplingStatisticSummariesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/SamplingStatisticSummaries";
                body = JSON.stringify(__assign({}, (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetSamplingTargetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/SamplingTargets";
                body = JSON.stringify(__assign({}, (input.SamplingStatisticsDocuments !== undefined &&
                    input.SamplingStatisticsDocuments !== null && {
                    SamplingStatisticsDocuments: serializeAws_restJson1SamplingStatisticsDocumentList(input.SamplingStatisticsDocuments, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetServiceGraphCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ServiceGraph";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.EndTime !== undefined &&
                    input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN })), (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.StartTime !== undefined &&
                    input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/TimeSeriesServiceStatistics";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.EndTime !== undefined &&
                    input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.EntitySelectorExpression !== undefined &&
                    input.EntitySelectorExpression !== null && { EntitySelectorExpression: input.EntitySelectorExpression })), (input.ForecastStatistics !== undefined &&
                    input.ForecastStatistics !== null && { ForecastStatistics: input.ForecastStatistics })), (input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN })), (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.Period !== undefined && input.Period !== null && { Period: input.Period })), (input.StartTime !== undefined &&
                    input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetTraceGraphCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/TraceGraph";
                body = JSON.stringify(__assign(__assign({}, (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.TraceIds !== undefined &&
                    input.TraceIds !== null && { TraceIds: serializeAws_restJson1TraceIdList(input.TraceIds, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetTraceSummariesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/TraceSummaries";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.EndTime !== undefined &&
                    input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.FilterExpression !== undefined &&
                    input.FilterExpression !== null && { FilterExpression: input.FilterExpression })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.Sampling !== undefined && input.Sampling !== null && { Sampling: input.Sampling })), (input.SamplingStrategy !== undefined &&
                    input.SamplingStrategy !== null && {
                    SamplingStrategy: serializeAws_restJson1SamplingStrategy(input.SamplingStrategy, context),
                })), (input.StartTime !== undefined &&
                    input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) })), (input.TimeRangeType !== undefined && input.TimeRangeType !== null && { TimeRangeType: input.TimeRangeType })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ListTagsForResource";
                body = JSON.stringify(__assign(__assign({}, (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1PutEncryptionConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/PutEncryptionConfig";
                body = JSON.stringify(__assign(__assign({}, (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.Type !== undefined && input.Type !== null && { Type: input.Type })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1PutTelemetryRecordsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/TelemetryRecords";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.EC2InstanceId !== undefined && input.EC2InstanceId !== null && { EC2InstanceId: input.EC2InstanceId })), (input.Hostname !== undefined && input.Hostname !== null && { Hostname: input.Hostname })), (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.TelemetryRecords !== undefined &&
                    input.TelemetryRecords !== null && {
                    TelemetryRecords: serializeAws_restJson1TelemetryRecordList(input.TelemetryRecords, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1PutTraceSegmentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/TraceSegments";
                body = JSON.stringify(__assign({}, (input.TraceSegmentDocuments !== undefined &&
                    input.TraceSegmentDocuments !== null && {
                    TraceSegmentDocuments: serializeAws_restJson1TraceSegmentDocumentList(input.TraceSegmentDocuments, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/TagResource";
                body = JSON.stringify(__assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.Tags !== undefined &&
                    input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/UntagResource";
                body = JSON.stringify(__assign(__assign({}, (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.TagKeys !== undefined &&
                    input.TagKeys !== null && { TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/UpdateGroup";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.FilterExpression !== undefined &&
                    input.FilterExpression !== null && { FilterExpression: input.FilterExpression })), (input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN })), (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.InsightsConfiguration !== undefined &&
                    input.InsightsConfiguration !== null && {
                    InsightsConfiguration: serializeAws_restJson1InsightsConfiguration(input.InsightsConfiguration, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateSamplingRuleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/UpdateSamplingRule";
                body = JSON.stringify(__assign({}, (input.SamplingRuleUpdate !== undefined &&
                    input.SamplingRuleUpdate !== null && {
                    SamplingRuleUpdate: serializeAws_restJson1SamplingRuleUpdate(input.SamplingRuleUpdate, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1BatchGetTracesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1BatchGetTracesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    Traces: undefined,
                    UnprocessedTraceIds: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.Traces !== undefined && data.Traces !== null) {
                    contents.Traces = deserializeAws_restJson1TraceList(data.Traces, context);
                }
                if (data.UnprocessedTraceIds !== undefined && data.UnprocessedTraceIds !== null) {
                    contents.UnprocessedTraceIds = deserializeAws_restJson1UnprocessedTraceIdList(data.UnprocessedTraceIds, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1BatchGetTracesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateGroupCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Group: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Group !== undefined && data.Group !== null) {
                    contents.Group = deserializeAws_restJson1Group(data.Group, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateSamplingRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateSamplingRuleCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    SamplingRuleRecord: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.SamplingRuleRecord !== undefined && data.SamplingRuleRecord !== null) {
                    contents.SamplingRuleRecord = deserializeAws_restJson1SamplingRuleRecord(data.SamplingRuleRecord, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateSamplingRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "RuleLimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#RuleLimitExceededException": return [3 /*break*/, 4];
                    case "ThrottledException": return [3 /*break*/, 6];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1RuleLimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteGroupCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteSamplingRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteSamplingRuleCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    SamplingRuleRecord: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.SamplingRuleRecord !== undefined && data.SamplingRuleRecord !== null) {
                    contents.SamplingRuleRecord = deserializeAws_restJson1SamplingRuleRecord(data.SamplingRuleRecord, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteSamplingRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetEncryptionConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetEncryptionConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    EncryptionConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.EncryptionConfig !== undefined && data.EncryptionConfig !== null) {
                    contents.EncryptionConfig = deserializeAws_restJson1EncryptionConfig(data.EncryptionConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetEncryptionConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetGroupCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Group: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Group !== undefined && data.Group !== null) {
                    contents.Group = deserializeAws_restJson1Group(data.Group, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetGroupsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Groups: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Groups !== undefined && data.Groups !== null) {
                    contents.Groups = deserializeAws_restJson1GroupSummaryList(data.Groups, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetInsightCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetInsightCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Insight: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Insight !== undefined && data.Insight !== null) {
                    contents.Insight = deserializeAws_restJson1Insight(data.Insight, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetInsightCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetInsightEventsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetInsightEventsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    InsightEvents: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.InsightEvents !== undefined && data.InsightEvents !== null) {
                    contents.InsightEvents = deserializeAws_restJson1InsightEventList(data.InsightEvents, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetInsightEventsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetInsightImpactGraphCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetInsightImpactGraphCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    EndTime: undefined,
                    InsightId: undefined,
                    NextToken: undefined,
                    ServiceGraphEndTime: undefined,
                    ServiceGraphStartTime: undefined,
                    Services: undefined,
                    StartTime: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetInsightImpactGraphCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetInsightSummariesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetInsightSummariesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    InsightSummaries: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.InsightSummaries !== undefined && data.InsightSummaries !== null) {
                    contents.InsightSummaries = deserializeAws_restJson1InsightSummaryList(data.InsightSummaries, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetInsightSummariesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetSamplingRulesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetSamplingRulesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    SamplingRuleRecords: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.SamplingRuleRecords !== undefined && data.SamplingRuleRecords !== null) {
                    contents.SamplingRuleRecords = deserializeAws_restJson1SamplingRuleRecordList(data.SamplingRuleRecords, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetSamplingRulesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetSamplingStatisticSummariesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetSamplingStatisticSummariesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    SamplingStatisticSummaries: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.SamplingStatisticSummaries !== undefined && data.SamplingStatisticSummaries !== null) {
                    contents.SamplingStatisticSummaries = deserializeAws_restJson1SamplingStatisticSummaryList(data.SamplingStatisticSummaries, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetSamplingStatisticSummariesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetSamplingTargetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetSamplingTargetsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    LastRuleModification: undefined,
                    SamplingTargetDocuments: undefined,
                    UnprocessedStatistics: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.LastRuleModification !== undefined && data.LastRuleModification !== null) {
                    contents.LastRuleModification = new Date(Math.round(data.LastRuleModification * 1000));
                }
                if (data.SamplingTargetDocuments !== undefined && data.SamplingTargetDocuments !== null) {
                    contents.SamplingTargetDocuments = deserializeAws_restJson1SamplingTargetDocumentList(data.SamplingTargetDocuments, context);
                }
                if (data.UnprocessedStatistics !== undefined && data.UnprocessedStatistics !== null) {
                    contents.UnprocessedStatistics = deserializeAws_restJson1UnprocessedStatisticsList(data.UnprocessedStatistics, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetSamplingTargetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetServiceGraphCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetServiceGraphCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ContainsOldGroupVersions: undefined,
                    EndTime: undefined,
                    NextToken: undefined,
                    Services: undefined,
                    StartTime: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetServiceGraphCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ContainsOldGroupVersions: undefined,
                    NextToken: undefined,
                    TimeSeriesServiceStatistics: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ContainsOldGroupVersions !== undefined && data.ContainsOldGroupVersions !== null) {
                    contents.ContainsOldGroupVersions = data.ContainsOldGroupVersions;
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.TimeSeriesServiceStatistics !== undefined && data.TimeSeriesServiceStatistics !== null) {
                    contents.TimeSeriesServiceStatistics = deserializeAws_restJson1TimeSeriesServiceStatisticsList(data.TimeSeriesServiceStatistics, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetTraceGraphCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetTraceGraphCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    Services: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.Services !== undefined && data.Services !== null) {
                    contents.Services = deserializeAws_restJson1ServiceList(data.Services, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetTraceGraphCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetTraceSummariesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetTraceSummariesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ApproximateTime: undefined,
                    NextToken: undefined,
                    TraceSummaries: undefined,
                    TracesProcessedCount: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetTraceSummariesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListTagsForResourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.Tags !== undefined && data.Tags !== null) {
                    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottledException": return [3 /*break*/, 6];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1PutEncryptionConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutEncryptionConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    EncryptionConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.EncryptionConfig !== undefined && data.EncryptionConfig !== null) {
                    contents.EncryptionConfig = deserializeAws_restJson1EncryptionConfig(data.EncryptionConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutEncryptionConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1PutTelemetryRecordsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutTelemetryRecordsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutTelemetryRecordsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1PutTraceSegmentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutTraceSegmentsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    UnprocessedTraceSegments: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.UnprocessedTraceSegments !== undefined && data.UnprocessedTraceSegments !== null) {
                    contents.UnprocessedTraceSegments = deserializeAws_restJson1UnprocessedTraceSegmentList(data.UnprocessedTraceSegments, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutTraceSegmentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1TagResourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottledException": return [3 /*break*/, 6];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 6];
                    case "TooManyTagsException": return [3 /*break*/, 8];
                    case "com.amazonaws.xray#TooManyTagsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UntagResourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottledException": return [3 /*break*/, 6];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateGroupCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Group: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Group !== undefined && data.Group !== null) {
                    contents.Group = deserializeAws_restJson1Group(data.Group, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateSamplingRuleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateSamplingRuleCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    SamplingRuleRecord: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.SamplingRuleRecord !== undefined && data.SamplingRuleRecord !== null) {
                    contents.SamplingRuleRecord = deserializeAws_restJson1SamplingRuleRecord(data.SamplingRuleRecord, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateSamplingRuleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.xray#InvalidRequestException": return [3 /*break*/, 2];
                    case "ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.xray#ThrottledException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1InvalidRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidRequestException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceNotFoundException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            ResourceName: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.ResourceName !== undefined && data.ResourceName !== null) {
            contents.ResourceName = data.ResourceName;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1RuleLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "RuleLimitExceededException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ThrottledExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ThrottledException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1TooManyTagsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TooManyTagsException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            ResourceName: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.ResourceName !== undefined && data.ResourceName !== null) {
            contents.ResourceName = data.ResourceName;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1AttributeMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1BackendConnectionErrors = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.ConnectionRefusedCount !== undefined &&
        input.ConnectionRefusedCount !== null && { ConnectionRefusedCount: input.ConnectionRefusedCount })), (input.HTTPCode4XXCount !== undefined &&
        input.HTTPCode4XXCount !== null && { HTTPCode4XXCount: input.HTTPCode4XXCount })), (input.HTTPCode5XXCount !== undefined &&
        input.HTTPCode5XXCount !== null && { HTTPCode5XXCount: input.HTTPCode5XXCount })), (input.OtherCount !== undefined && input.OtherCount !== null && { OtherCount: input.OtherCount })), (input.TimeoutCount !== undefined && input.TimeoutCount !== null && { TimeoutCount: input.TimeoutCount })), (input.UnknownHostCount !== undefined &&
        input.UnknownHostCount !== null && { UnknownHostCount: input.UnknownHostCount }));
};
var serializeAws_restJson1InsightsConfiguration = function (input, context) {
    return __assign(__assign({}, (input.InsightsEnabled !== undefined &&
        input.InsightsEnabled !== null && { InsightsEnabled: input.InsightsEnabled })), (input.NotificationsEnabled !== undefined &&
        input.NotificationsEnabled !== null && { NotificationsEnabled: input.NotificationsEnabled }));
};
var serializeAws_restJson1InsightStateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1SamplingRule = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Attributes !== undefined &&
        input.Attributes !== null && { Attributes: serializeAws_restJson1AttributeMap(input.Attributes, context) })), (input.FixedRate !== undefined && input.FixedRate !== null && { FixedRate: input.FixedRate })), (input.HTTPMethod !== undefined && input.HTTPMethod !== null && { HTTPMethod: input.HTTPMethod })), (input.Host !== undefined && input.Host !== null && { Host: input.Host })), (input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority })), (input.ReservoirSize !== undefined && input.ReservoirSize !== null && { ReservoirSize: input.ReservoirSize })), (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.RuleARN !== undefined && input.RuleARN !== null && { RuleARN: input.RuleARN })), (input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName })), (input.ServiceName !== undefined && input.ServiceName !== null && { ServiceName: input.ServiceName })), (input.ServiceType !== undefined && input.ServiceType !== null && { ServiceType: input.ServiceType })), (input.URLPath !== undefined && input.URLPath !== null && { URLPath: input.URLPath })), (input.Version !== undefined && input.Version !== null && { Version: input.Version }));
};
var serializeAws_restJson1SamplingRuleUpdate = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Attributes !== undefined &&
        input.Attributes !== null && { Attributes: serializeAws_restJson1AttributeMap(input.Attributes, context) })), (input.FixedRate !== undefined && input.FixedRate !== null && { FixedRate: input.FixedRate })), (input.HTTPMethod !== undefined && input.HTTPMethod !== null && { HTTPMethod: input.HTTPMethod })), (input.Host !== undefined && input.Host !== null && { Host: input.Host })), (input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority })), (input.ReservoirSize !== undefined && input.ReservoirSize !== null && { ReservoirSize: input.ReservoirSize })), (input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN })), (input.RuleARN !== undefined && input.RuleARN !== null && { RuleARN: input.RuleARN })), (input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName })), (input.ServiceName !== undefined && input.ServiceName !== null && { ServiceName: input.ServiceName })), (input.ServiceType !== undefined && input.ServiceType !== null && { ServiceType: input.ServiceType })), (input.URLPath !== undefined && input.URLPath !== null && { URLPath: input.URLPath }));
};
var serializeAws_restJson1SamplingStatisticsDocument = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.BorrowCount !== undefined && input.BorrowCount !== null && { BorrowCount: input.BorrowCount })), (input.ClientID !== undefined && input.ClientID !== null && { ClientID: input.ClientID })), (input.RequestCount !== undefined && input.RequestCount !== null && { RequestCount: input.RequestCount })), (input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName })), (input.SampledCount !== undefined && input.SampledCount !== null && { SampledCount: input.SampledCount })), (input.Timestamp !== undefined &&
        input.Timestamp !== null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }));
};
var serializeAws_restJson1SamplingStatisticsDocumentList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SamplingStatisticsDocument(entry, context);
    });
};
var serializeAws_restJson1SamplingStrategy = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1TagKeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1TagList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
var serializeAws_restJson1TelemetryRecord = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.BackendConnectionErrors !== undefined &&
        input.BackendConnectionErrors !== null && {
        BackendConnectionErrors: serializeAws_restJson1BackendConnectionErrors(input.BackendConnectionErrors, context),
    })), (input.SegmentsReceivedCount !== undefined &&
        input.SegmentsReceivedCount !== null && { SegmentsReceivedCount: input.SegmentsReceivedCount })), (input.SegmentsRejectedCount !== undefined &&
        input.SegmentsRejectedCount !== null && { SegmentsRejectedCount: input.SegmentsRejectedCount })), (input.SegmentsSentCount !== undefined &&
        input.SegmentsSentCount !== null && { SegmentsSentCount: input.SegmentsSentCount })), (input.SegmentsSpilloverCount !== undefined &&
        input.SegmentsSpilloverCount !== null && { SegmentsSpilloverCount: input.SegmentsSpilloverCount })), (input.Timestamp !== undefined &&
        input.Timestamp !== null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }));
};
var serializeAws_restJson1TelemetryRecordList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1TelemetryRecord(entry, context);
    });
};
var serializeAws_restJson1TraceIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1TraceSegmentDocumentList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Alias = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Names: output.Names !== undefined && output.Names !== null
            ? deserializeAws_restJson1AliasNames(output.Names, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1AliasList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Alias(entry, context);
    });
};
var deserializeAws_restJson1AliasNames = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Annotations = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1ValuesWithServiceIds(value, context), _b));
    }, {});
};
var deserializeAws_restJson1AnnotationValue = function (output, context) {
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
var deserializeAws_restJson1AnomalousService = function (output, context) {
    return {
        ServiceId: output.ServiceId !== undefined && output.ServiceId !== null
            ? deserializeAws_restJson1ServiceId(output.ServiceId, context)
            : undefined,
    };
};
var deserializeAws_restJson1AnomalousServiceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AnomalousService(entry, context);
    });
};
var deserializeAws_restJson1AttributeMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1AvailabilityZoneDetail = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1Edge = function (output, context) {
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
var deserializeAws_restJson1EdgeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Edge(entry, context);
    });
};
var deserializeAws_restJson1EdgeStatistics = function (output, context) {
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
var deserializeAws_restJson1EncryptionConfig = function (output, context) {
    return {
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1ErrorRootCause = function (output, context) {
    return {
        ClientImpacting: output.ClientImpacting !== undefined && output.ClientImpacting !== null ? output.ClientImpacting : undefined,
        Services: output.Services !== undefined && output.Services !== null
            ? deserializeAws_restJson1ErrorRootCauseServices(output.Services, context)
            : undefined,
    };
};
var deserializeAws_restJson1ErrorRootCauseEntity = function (output, context) {
    return {
        Exceptions: output.Exceptions !== undefined && output.Exceptions !== null
            ? deserializeAws_restJson1RootCauseExceptions(output.Exceptions, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Remote: output.Remote !== undefined && output.Remote !== null ? output.Remote : undefined,
    };
};
var deserializeAws_restJson1ErrorRootCauseEntityPath = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ErrorRootCauseEntity(entry, context);
    });
};
var deserializeAws_restJson1ErrorRootCauses = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ErrorRootCause(entry, context);
    });
};
var deserializeAws_restJson1ErrorRootCauseService = function (output, context) {
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
var deserializeAws_restJson1ErrorRootCauseServices = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ErrorRootCauseService(entry, context);
    });
};
var deserializeAws_restJson1ErrorStatistics = function (output, context) {
    return {
        OtherCount: output.OtherCount !== undefined && output.OtherCount !== null ? output.OtherCount : undefined,
        ThrottleCount: output.ThrottleCount !== undefined && output.ThrottleCount !== null ? output.ThrottleCount : undefined,
        TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
    };
};
var deserializeAws_restJson1FaultRootCause = function (output, context) {
    return {
        ClientImpacting: output.ClientImpacting !== undefined && output.ClientImpacting !== null ? output.ClientImpacting : undefined,
        Services: output.Services !== undefined && output.Services !== null
            ? deserializeAws_restJson1FaultRootCauseServices(output.Services, context)
            : undefined,
    };
};
var deserializeAws_restJson1FaultRootCauseEntity = function (output, context) {
    return {
        Exceptions: output.Exceptions !== undefined && output.Exceptions !== null
            ? deserializeAws_restJson1RootCauseExceptions(output.Exceptions, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Remote: output.Remote !== undefined && output.Remote !== null ? output.Remote : undefined,
    };
};
var deserializeAws_restJson1FaultRootCauseEntityPath = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FaultRootCauseEntity(entry, context);
    });
};
var deserializeAws_restJson1FaultRootCauses = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FaultRootCause(entry, context);
    });
};
var deserializeAws_restJson1FaultRootCauseService = function (output, context) {
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
var deserializeAws_restJson1FaultRootCauseServices = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FaultRootCauseService(entry, context);
    });
};
var deserializeAws_restJson1FaultStatistics = function (output, context) {
    return {
        OtherCount: output.OtherCount !== undefined && output.OtherCount !== null ? output.OtherCount : undefined,
        TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
    };
};
var deserializeAws_restJson1ForecastStatistics = function (output, context) {
    return {
        FaultCountHigh: output.FaultCountHigh !== undefined && output.FaultCountHigh !== null ? output.FaultCountHigh : undefined,
        FaultCountLow: output.FaultCountLow !== undefined && output.FaultCountLow !== null ? output.FaultCountLow : undefined,
    };
};
var deserializeAws_restJson1Group = function (output, context) {
    return {
        FilterExpression: output.FilterExpression !== undefined && output.FilterExpression !== null ? output.FilterExpression : undefined,
        GroupARN: output.GroupARN !== undefined && output.GroupARN !== null ? output.GroupARN : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
        InsightsConfiguration: output.InsightsConfiguration !== undefined && output.InsightsConfiguration !== null
            ? deserializeAws_restJson1InsightsConfiguration(output.InsightsConfiguration, context)
            : undefined,
    };
};
var deserializeAws_restJson1GroupSummary = function (output, context) {
    return {
        FilterExpression: output.FilterExpression !== undefined && output.FilterExpression !== null ? output.FilterExpression : undefined,
        GroupARN: output.GroupARN !== undefined && output.GroupARN !== null ? output.GroupARN : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
        InsightsConfiguration: output.InsightsConfiguration !== undefined && output.InsightsConfiguration !== null
            ? deserializeAws_restJson1InsightsConfiguration(output.InsightsConfiguration, context)
            : undefined,
    };
};
var deserializeAws_restJson1GroupSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GroupSummary(entry, context);
    });
};
var deserializeAws_restJson1Histogram = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HistogramEntry(entry, context);
    });
};
var deserializeAws_restJson1HistogramEntry = function (output, context) {
    return {
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1Http = function (output, context) {
    return {
        ClientIp: output.ClientIp !== undefined && output.ClientIp !== null ? output.ClientIp : undefined,
        HttpMethod: output.HttpMethod !== undefined && output.HttpMethod !== null ? output.HttpMethod : undefined,
        HttpStatus: output.HttpStatus !== undefined && output.HttpStatus !== null ? output.HttpStatus : undefined,
        HttpURL: output.HttpURL !== undefined && output.HttpURL !== null ? output.HttpURL : undefined,
        UserAgent: output.UserAgent !== undefined && output.UserAgent !== null ? output.UserAgent : undefined,
    };
};
var deserializeAws_restJson1Insight = function (output, context) {
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
var deserializeAws_restJson1InsightCategoryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1InsightEvent = function (output, context) {
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
var deserializeAws_restJson1InsightEventList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InsightEvent(entry, context);
    });
};
var deserializeAws_restJson1InsightImpactGraphEdge = function (output, context) {
    return {
        ReferenceId: output.ReferenceId !== undefined && output.ReferenceId !== null ? output.ReferenceId : undefined,
    };
};
var deserializeAws_restJson1InsightImpactGraphEdgeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InsightImpactGraphEdge(entry, context);
    });
};
var deserializeAws_restJson1InsightImpactGraphService = function (output, context) {
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
var deserializeAws_restJson1InsightImpactGraphServiceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InsightImpactGraphService(entry, context);
    });
};
var deserializeAws_restJson1InsightsConfiguration = function (output, context) {
    return {
        InsightsEnabled: output.InsightsEnabled !== undefined && output.InsightsEnabled !== null ? output.InsightsEnabled : undefined,
        NotificationsEnabled: output.NotificationsEnabled !== undefined && output.NotificationsEnabled !== null
            ? output.NotificationsEnabled
            : undefined,
    };
};
var deserializeAws_restJson1InsightSummary = function (output, context) {
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
var deserializeAws_restJson1InsightSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InsightSummary(entry, context);
    });
};
var deserializeAws_restJson1InstanceIdDetail = function (output, context) {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
var deserializeAws_restJson1RequestImpactStatistics = function (output, context) {
    return {
        FaultCount: output.FaultCount !== undefined && output.FaultCount !== null ? output.FaultCount : undefined,
        OkCount: output.OkCount !== undefined && output.OkCount !== null ? output.OkCount : undefined,
        TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
    };
};
var deserializeAws_restJson1ResourceARNDetail = function (output, context) {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    };
};
var deserializeAws_restJson1ResponseTimeRootCause = function (output, context) {
    return {
        ClientImpacting: output.ClientImpacting !== undefined && output.ClientImpacting !== null ? output.ClientImpacting : undefined,
        Services: output.Services !== undefined && output.Services !== null
            ? deserializeAws_restJson1ResponseTimeRootCauseServices(output.Services, context)
            : undefined,
    };
};
var deserializeAws_restJson1ResponseTimeRootCauseEntity = function (output, context) {
    return {
        Coverage: output.Coverage !== undefined && output.Coverage !== null ? output.Coverage : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Remote: output.Remote !== undefined && output.Remote !== null ? output.Remote : undefined,
    };
};
var deserializeAws_restJson1ResponseTimeRootCauseEntityPath = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResponseTimeRootCauseEntity(entry, context);
    });
};
var deserializeAws_restJson1ResponseTimeRootCauses = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResponseTimeRootCause(entry, context);
    });
};
var deserializeAws_restJson1ResponseTimeRootCauseService = function (output, context) {
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
var deserializeAws_restJson1ResponseTimeRootCauseServices = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResponseTimeRootCauseService(entry, context);
    });
};
var deserializeAws_restJson1RootCauseException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1RootCauseExceptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RootCauseException(entry, context);
    });
};
var deserializeAws_restJson1SamplingRule = function (output, context) {
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
var deserializeAws_restJson1SamplingRuleRecord = function (output, context) {
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
var deserializeAws_restJson1SamplingRuleRecordList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SamplingRuleRecord(entry, context);
    });
};
var deserializeAws_restJson1SamplingStatisticSummary = function (output, context) {
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
var deserializeAws_restJson1SamplingStatisticSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SamplingStatisticSummary(entry, context);
    });
};
var deserializeAws_restJson1SamplingTargetDocument = function (output, context) {
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
var deserializeAws_restJson1SamplingTargetDocumentList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SamplingTargetDocument(entry, context);
    });
};
var deserializeAws_restJson1Segment = function (output, context) {
    return {
        Document: output.Document !== undefined && output.Document !== null ? output.Document : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
var deserializeAws_restJson1SegmentList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Segment(entry, context);
    });
};
var deserializeAws_restJson1Service = function (output, context) {
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
var deserializeAws_restJson1ServiceId = function (output, context) {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Names: output.Names !== undefined && output.Names !== null
            ? deserializeAws_restJson1ServiceNames(output.Names, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1ServiceIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ServiceId(entry, context);
    });
};
var deserializeAws_restJson1ServiceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Service(entry, context);
    });
};
var deserializeAws_restJson1ServiceNames = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1ServiceStatistics = function (output, context) {
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
var deserializeAws_restJson1Tag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1TagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
};
var deserializeAws_restJson1TimeSeriesServiceStatistics = function (output, context) {
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
var deserializeAws_restJson1TimeSeriesServiceStatisticsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TimeSeriesServiceStatistics(entry, context);
    });
};
var deserializeAws_restJson1Trace = function (output, context) {
    return {
        Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LimitExceeded: output.LimitExceeded !== undefined && output.LimitExceeded !== null ? output.LimitExceeded : undefined,
        Segments: output.Segments !== undefined && output.Segments !== null
            ? deserializeAws_restJson1SegmentList(output.Segments, context)
            : undefined,
    };
};
var deserializeAws_restJson1TraceAvailabilityZones = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AvailabilityZoneDetail(entry, context);
    });
};
var deserializeAws_restJson1TraceInstanceIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InstanceIdDetail(entry, context);
    });
};
var deserializeAws_restJson1TraceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Trace(entry, context);
    });
};
var deserializeAws_restJson1TraceResourceARNs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResourceARNDetail(entry, context);
    });
};
var deserializeAws_restJson1TraceSummary = function (output, context) {
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
var deserializeAws_restJson1TraceSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TraceSummary(entry, context);
    });
};
var deserializeAws_restJson1TraceUser = function (output, context) {
    return {
        ServiceIds: output.ServiceIds !== undefined && output.ServiceIds !== null
            ? deserializeAws_restJson1ServiceIds(output.ServiceIds, context)
            : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
    };
};
var deserializeAws_restJson1TraceUsers = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TraceUser(entry, context);
    });
};
var deserializeAws_restJson1UnprocessedStatistics = function (output, context) {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        RuleName: output.RuleName !== undefined && output.RuleName !== null ? output.RuleName : undefined,
    };
};
var deserializeAws_restJson1UnprocessedStatisticsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UnprocessedStatistics(entry, context);
    });
};
var deserializeAws_restJson1UnprocessedTraceIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1UnprocessedTraceSegment = function (output, context) {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_restJson1UnprocessedTraceSegmentList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UnprocessedTraceSegment(entry, context);
    });
};
var deserializeAws_restJson1ValuesWithServiceIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ValueWithServiceIds(entry, context);
    });
};
var deserializeAws_restJson1ValueWithServiceIds = function (output, context) {
    return {
        AnnotationValue: output.AnnotationValue !== undefined && output.AnnotationValue !== null
            ? deserializeAws_restJson1AnnotationValue(output.AnnotationValue, context)
            : undefined,
        ServiceIds: output.ServiceIds !== undefined && output.ServiceIds !== null
            ? deserializeAws_restJson1ServiceIds(output.ServiceIds, context)
            : undefined,
    };
};
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var isSerializableHeaderValue = function (value) {
    return value !== undefined &&
        value !== null &&
        value !== "" &&
        (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
        (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
};
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    var headerKey = findKey(output.headers, "x-amzn-errortype");
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