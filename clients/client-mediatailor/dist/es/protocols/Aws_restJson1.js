import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CreateChannelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/channel/{ChannelName}";
                if (input.ChannelName !== undefined) {
                    labelValue = input.ChannelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ChannelName.");
                    }
                    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ChannelName.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Outputs !== undefined &&
                    input.Outputs !== null && { Outputs: serializeAws_restJson1RequestOutputs(input.Outputs, context) })), (input.PlaybackMode !== undefined && input.PlaybackMode !== null && { PlaybackMode: input.PlaybackMode })), (input.Tags !== undefined &&
                    input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) })));
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
export var serializeAws_restJson1CreateProgramCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/channel/{ChannelName}/program/{ProgramName}";
                if (input.ChannelName !== undefined) {
                    labelValue = input.ChannelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ChannelName.");
                    }
                    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ChannelName.");
                }
                if (input.ProgramName !== undefined) {
                    labelValue = input.ProgramName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ProgramName.");
                    }
                    resolvedPath = resolvedPath.replace("{ProgramName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ProgramName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.AdBreaks !== undefined &&
                    input.AdBreaks !== null && { AdBreaks: serializeAws_restJson1__listOfAdBreak(input.AdBreaks, context) })), (input.ScheduleConfiguration !== undefined &&
                    input.ScheduleConfiguration !== null && {
                    ScheduleConfiguration: serializeAws_restJson1ScheduleConfiguration(input.ScheduleConfiguration, context),
                })), (input.SourceLocationName !== undefined &&
                    input.SourceLocationName !== null && { SourceLocationName: input.SourceLocationName })), (input.VodSourceName !== undefined && input.VodSourceName !== null && { VodSourceName: input.VodSourceName })));
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
export var serializeAws_restJson1CreateSourceLocationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/sourceLocation/{SourceLocationName}";
                if (input.SourceLocationName !== undefined) {
                    labelValue = input.SourceLocationName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
                    }
                    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: SourceLocationName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.AccessConfiguration !== undefined &&
                    input.AccessConfiguration !== null && {
                    AccessConfiguration: serializeAws_restJson1AccessConfiguration(input.AccessConfiguration, context),
                })), (input.DefaultSegmentDeliveryConfiguration !== undefined &&
                    input.DefaultSegmentDeliveryConfiguration !== null && {
                    DefaultSegmentDeliveryConfiguration: serializeAws_restJson1DefaultSegmentDeliveryConfiguration(input.DefaultSegmentDeliveryConfiguration, context),
                })), (input.HttpConfiguration !== undefined &&
                    input.HttpConfiguration !== null && {
                    HttpConfiguration: serializeAws_restJson1HttpConfiguration(input.HttpConfiguration, context),
                })), (input.Tags !== undefined &&
                    input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) })));
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
export var serializeAws_restJson1CreateVodSourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}";
                if (input.SourceLocationName !== undefined) {
                    labelValue = input.SourceLocationName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
                    }
                    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: SourceLocationName.");
                }
                if (input.VodSourceName !== undefined) {
                    labelValue = input.VodSourceName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: VodSourceName.");
                    }
                    resolvedPath = resolvedPath.replace("{VodSourceName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: VodSourceName.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.HttpPackageConfigurations !== undefined &&
                    input.HttpPackageConfigurations !== null && {
                    HttpPackageConfigurations: serializeAws_restJson1HttpPackageConfigurations(input.HttpPackageConfigurations, context),
                })), (input.Tags !== undefined &&
                    input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) })));
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
export var serializeAws_restJson1DeleteChannelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/channel/{ChannelName}";
                if (input.ChannelName !== undefined) {
                    labelValue = input.ChannelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ChannelName.");
                    }
                    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ChannelName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteChannelPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/channel/{ChannelName}/policy";
                if (input.ChannelName !== undefined) {
                    labelValue = input.ChannelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ChannelName.");
                    }
                    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ChannelName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeletePlaybackConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/playbackConfiguration/{Name}";
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteProgramCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/channel/{ChannelName}/program/{ProgramName}";
                if (input.ChannelName !== undefined) {
                    labelValue = input.ChannelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ChannelName.");
                    }
                    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ChannelName.");
                }
                if (input.ProgramName !== undefined) {
                    labelValue = input.ProgramName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ProgramName.");
                    }
                    resolvedPath = resolvedPath.replace("{ProgramName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ProgramName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteSourceLocationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/sourceLocation/{SourceLocationName}";
                if (input.SourceLocationName !== undefined) {
                    labelValue = input.SourceLocationName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
                    }
                    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: SourceLocationName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteVodSourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}";
                if (input.SourceLocationName !== undefined) {
                    labelValue = input.SourceLocationName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
                    }
                    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: SourceLocationName.");
                }
                if (input.VodSourceName !== undefined) {
                    labelValue = input.VodSourceName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: VodSourceName.");
                    }
                    resolvedPath = resolvedPath.replace("{VodSourceName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: VodSourceName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeChannelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/channel/{ChannelName}";
                if (input.ChannelName !== undefined) {
                    labelValue = input.ChannelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ChannelName.");
                    }
                    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ChannelName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeProgramCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/channel/{ChannelName}/program/{ProgramName}";
                if (input.ChannelName !== undefined) {
                    labelValue = input.ChannelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ChannelName.");
                    }
                    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ChannelName.");
                }
                if (input.ProgramName !== undefined) {
                    labelValue = input.ProgramName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ProgramName.");
                    }
                    resolvedPath = resolvedPath.replace("{ProgramName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ProgramName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeSourceLocationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/sourceLocation/{SourceLocationName}";
                if (input.SourceLocationName !== undefined) {
                    labelValue = input.SourceLocationName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
                    }
                    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: SourceLocationName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeVodSourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}";
                if (input.SourceLocationName !== undefined) {
                    labelValue = input.SourceLocationName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
                    }
                    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: SourceLocationName.");
                }
                if (input.VodSourceName !== undefined) {
                    labelValue = input.VodSourceName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: VodSourceName.");
                    }
                    resolvedPath = resolvedPath.replace("{VodSourceName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: VodSourceName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetChannelPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/channel/{ChannelName}/policy";
                if (input.ChannelName !== undefined) {
                    labelValue = input.ChannelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ChannelName.");
                    }
                    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ChannelName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetChannelScheduleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/channel/{ChannelName}/schedule";
                if (input.ChannelName !== undefined) {
                    labelValue = input.ChannelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ChannelName.");
                    }
                    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ChannelName.");
                }
                query = __assign(__assign(__assign({}, (input.DurationMinutes !== undefined && { durationMinutes: input.DurationMinutes })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetPlaybackConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/playbackConfiguration/{Name}";
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListChannelsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/channels";
                query = __assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListPlaybackConfigurationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/playbackConfigurations";
                query = __assign(__assign({}, (input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { NextToken: input.NextToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListSourceLocationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/sourceLocations";
                query = __assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/tags/{ResourceArn}";
                if (input.ResourceArn !== undefined) {
                    labelValue = input.ResourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceArn.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListVodSourcesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/sourceLocation/{SourceLocationName}/vodSources";
                if (input.SourceLocationName !== undefined) {
                    labelValue = input.SourceLocationName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
                    }
                    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: SourceLocationName.");
                }
                query = __assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1PutChannelPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/channel/{ChannelName}/policy";
                if (input.ChannelName !== undefined) {
                    labelValue = input.ChannelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ChannelName.");
                    }
                    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ChannelName.");
                }
                body = JSON.stringify(__assign({}, (input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1PutPlaybackConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/playbackConfiguration";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdDecisionServerUrl !== undefined &&
                    input.AdDecisionServerUrl !== null && { AdDecisionServerUrl: input.AdDecisionServerUrl })), (input.AvailSuppression !== undefined &&
                    input.AvailSuppression !== null && {
                    AvailSuppression: serializeAws_restJson1AvailSuppression(input.AvailSuppression, context),
                })), (input.Bumper !== undefined &&
                    input.Bumper !== null && { Bumper: serializeAws_restJson1Bumper(input.Bumper, context) })), (input.CdnConfiguration !== undefined &&
                    input.CdnConfiguration !== null && {
                    CdnConfiguration: serializeAws_restJson1CdnConfiguration(input.CdnConfiguration, context),
                })), (input.ConfigurationAliases !== undefined &&
                    input.ConfigurationAliases !== null && {
                    ConfigurationAliases: serializeAws_restJson1ConfigurationAliasesRequest(input.ConfigurationAliases, context),
                })), (input.DashConfiguration !== undefined &&
                    input.DashConfiguration !== null && {
                    DashConfiguration: serializeAws_restJson1DashConfigurationForPut(input.DashConfiguration, context),
                })), (input.LivePreRollConfiguration !== undefined &&
                    input.LivePreRollConfiguration !== null && {
                    LivePreRollConfiguration: serializeAws_restJson1LivePreRollConfiguration(input.LivePreRollConfiguration, context),
                })), (input.ManifestProcessingRules !== undefined &&
                    input.ManifestProcessingRules !== null && {
                    ManifestProcessingRules: serializeAws_restJson1ManifestProcessingRules(input.ManifestProcessingRules, context),
                })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.PersonalizationThresholdSeconds !== undefined &&
                    input.PersonalizationThresholdSeconds !== null && {
                    PersonalizationThresholdSeconds: input.PersonalizationThresholdSeconds,
                })), (input.SlateAdUrl !== undefined && input.SlateAdUrl !== null && { SlateAdUrl: input.SlateAdUrl })), (input.Tags !== undefined &&
                    input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) })), (input.TranscodeProfileName !== undefined &&
                    input.TranscodeProfileName !== null && { TranscodeProfileName: input.TranscodeProfileName })), (input.VideoContentSourceUrl !== undefined &&
                    input.VideoContentSourceUrl !== null && { VideoContentSourceUrl: input.VideoContentSourceUrl })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1StartChannelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/channel/{ChannelName}/start";
                if (input.ChannelName !== undefined) {
                    labelValue = input.ChannelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ChannelName.");
                    }
                    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ChannelName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1StopChannelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/channel/{ChannelName}/stop";
                if (input.ChannelName !== undefined) {
                    labelValue = input.ChannelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ChannelName.");
                    }
                    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ChannelName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/tags/{ResourceArn}";
                if (input.ResourceArn !== undefined) {
                    labelValue = input.ResourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceArn.");
                }
                body = JSON.stringify(__assign({}, (input.Tags !== undefined &&
                    input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) })));
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
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/tags/{ResourceArn}";
                if (input.ResourceArn !== undefined) {
                    labelValue = input.ResourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceArn.");
                }
                query = __assign({}, (input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map(function (_entry) { return _entry; }) }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateChannelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/channel/{ChannelName}";
                if (input.ChannelName !== undefined) {
                    labelValue = input.ChannelName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ChannelName.");
                    }
                    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ChannelName.");
                }
                body = JSON.stringify(__assign({}, (input.Outputs !== undefined &&
                    input.Outputs !== null && { Outputs: serializeAws_restJson1RequestOutputs(input.Outputs, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateSourceLocationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/sourceLocation/{SourceLocationName}";
                if (input.SourceLocationName !== undefined) {
                    labelValue = input.SourceLocationName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
                    }
                    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: SourceLocationName.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.AccessConfiguration !== undefined &&
                    input.AccessConfiguration !== null && {
                    AccessConfiguration: serializeAws_restJson1AccessConfiguration(input.AccessConfiguration, context),
                })), (input.DefaultSegmentDeliveryConfiguration !== undefined &&
                    input.DefaultSegmentDeliveryConfiguration !== null && {
                    DefaultSegmentDeliveryConfiguration: serializeAws_restJson1DefaultSegmentDeliveryConfiguration(input.DefaultSegmentDeliveryConfiguration, context),
                })), (input.HttpConfiguration !== undefined &&
                    input.HttpConfiguration !== null && {
                    HttpConfiguration: serializeAws_restJson1HttpConfiguration(input.HttpConfiguration, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateVodSourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}";
                if (input.SourceLocationName !== undefined) {
                    labelValue = input.SourceLocationName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
                    }
                    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: SourceLocationName.");
                }
                if (input.VodSourceName !== undefined) {
                    labelValue = input.VodSourceName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: VodSourceName.");
                    }
                    resolvedPath = resolvedPath.replace("{VodSourceName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: VodSourceName.");
                }
                body = JSON.stringify(__assign({}, (input.HttpPackageConfigurations !== undefined &&
                    input.HttpPackageConfigurations !== null && {
                    HttpPackageConfigurations: serializeAws_restJson1HttpPackageConfigurations(input.HttpPackageConfigurations, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1CreateChannelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateChannelCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    ChannelName: undefined,
                    ChannelState: undefined,
                    CreationTime: undefined,
                    LastModifiedTime: undefined,
                    Outputs: undefined,
                    PlaybackMode: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.ChannelName !== undefined && data.ChannelName !== null) {
                    contents.ChannelName = data.ChannelName;
                }
                if (data.ChannelState !== undefined && data.ChannelState !== null) {
                    contents.ChannelState = data.ChannelState;
                }
                if (data.CreationTime !== undefined && data.CreationTime !== null) {
                    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
                }
                if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
                    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
                }
                if (data.Outputs !== undefined && data.Outputs !== null) {
                    contents.Outputs = deserializeAws_restJson1ResponseOutputs(data.Outputs, context);
                }
                if (data.PlaybackMode !== undefined && data.PlaybackMode !== null) {
                    contents.PlaybackMode = data.PlaybackMode;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateChannelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateProgramCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateProgramCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AdBreaks: undefined,
                    Arn: undefined,
                    ChannelName: undefined,
                    CreationTime: undefined,
                    ProgramName: undefined,
                    SourceLocationName: undefined,
                    VodSourceName: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AdBreaks !== undefined && data.AdBreaks !== null) {
                    contents.AdBreaks = deserializeAws_restJson1__listOfAdBreak(data.AdBreaks, context);
                }
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.ChannelName !== undefined && data.ChannelName !== null) {
                    contents.ChannelName = data.ChannelName;
                }
                if (data.CreationTime !== undefined && data.CreationTime !== null) {
                    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
                }
                if (data.ProgramName !== undefined && data.ProgramName !== null) {
                    contents.ProgramName = data.ProgramName;
                }
                if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
                    contents.SourceLocationName = data.SourceLocationName;
                }
                if (data.VodSourceName !== undefined && data.VodSourceName !== null) {
                    contents.VodSourceName = data.VodSourceName;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateProgramCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateSourceLocationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateSourceLocationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AccessConfiguration: undefined,
                    Arn: undefined,
                    CreationTime: undefined,
                    DefaultSegmentDeliveryConfiguration: undefined,
                    HttpConfiguration: undefined,
                    LastModifiedTime: undefined,
                    SourceLocationName: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AccessConfiguration !== undefined && data.AccessConfiguration !== null) {
                    contents.AccessConfiguration = deserializeAws_restJson1AccessConfiguration(data.AccessConfiguration, context);
                }
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.CreationTime !== undefined && data.CreationTime !== null) {
                    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
                }
                if (data.DefaultSegmentDeliveryConfiguration !== undefined && data.DefaultSegmentDeliveryConfiguration !== null) {
                    contents.DefaultSegmentDeliveryConfiguration = deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(data.DefaultSegmentDeliveryConfiguration, context);
                }
                if (data.HttpConfiguration !== undefined && data.HttpConfiguration !== null) {
                    contents.HttpConfiguration = deserializeAws_restJson1HttpConfiguration(data.HttpConfiguration, context);
                }
                if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
                    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
                }
                if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
                    contents.SourceLocationName = data.SourceLocationName;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateSourceLocationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateVodSourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateVodSourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    CreationTime: undefined,
                    HttpPackageConfigurations: undefined,
                    LastModifiedTime: undefined,
                    SourceLocationName: undefined,
                    Tags: undefined,
                    VodSourceName: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.CreationTime !== undefined && data.CreationTime !== null) {
                    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
                }
                if (data.HttpPackageConfigurations !== undefined && data.HttpPackageConfigurations !== null) {
                    contents.HttpPackageConfigurations = deserializeAws_restJson1HttpPackageConfigurations(data.HttpPackageConfigurations, context);
                }
                if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
                    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
                }
                if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
                    contents.SourceLocationName = data.SourceLocationName;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
                }
                if (data.VodSourceName !== undefined && data.VodSourceName !== null) {
                    contents.VodSourceName = data.VodSourceName;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateVodSourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteChannelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteChannelCommandError(output, context)];
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
var deserializeAws_restJson1DeleteChannelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteChannelPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteChannelPolicyCommandError(output, context)];
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
var deserializeAws_restJson1DeleteChannelPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeletePlaybackConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeletePlaybackConfigurationCommandError(output, context)];
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
var deserializeAws_restJson1DeletePlaybackConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteProgramCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteProgramCommandError(output, context)];
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
var deserializeAws_restJson1DeleteProgramCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteSourceLocationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteSourceLocationCommandError(output, context)];
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
var deserializeAws_restJson1DeleteSourceLocationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteVodSourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteVodSourceCommandError(output, context)];
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
var deserializeAws_restJson1DeleteVodSourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeChannelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeChannelCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    ChannelName: undefined,
                    ChannelState: undefined,
                    CreationTime: undefined,
                    LastModifiedTime: undefined,
                    Outputs: undefined,
                    PlaybackMode: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.ChannelName !== undefined && data.ChannelName !== null) {
                    contents.ChannelName = data.ChannelName;
                }
                if (data.ChannelState !== undefined && data.ChannelState !== null) {
                    contents.ChannelState = data.ChannelState;
                }
                if (data.CreationTime !== undefined && data.CreationTime !== null) {
                    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
                }
                if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
                    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
                }
                if (data.Outputs !== undefined && data.Outputs !== null) {
                    contents.Outputs = deserializeAws_restJson1ResponseOutputs(data.Outputs, context);
                }
                if (data.PlaybackMode !== undefined && data.PlaybackMode !== null) {
                    contents.PlaybackMode = data.PlaybackMode;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeChannelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeProgramCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeProgramCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AdBreaks: undefined,
                    Arn: undefined,
                    ChannelName: undefined,
                    CreationTime: undefined,
                    ProgramName: undefined,
                    SourceLocationName: undefined,
                    VodSourceName: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AdBreaks !== undefined && data.AdBreaks !== null) {
                    contents.AdBreaks = deserializeAws_restJson1__listOfAdBreak(data.AdBreaks, context);
                }
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.ChannelName !== undefined && data.ChannelName !== null) {
                    contents.ChannelName = data.ChannelName;
                }
                if (data.CreationTime !== undefined && data.CreationTime !== null) {
                    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
                }
                if (data.ProgramName !== undefined && data.ProgramName !== null) {
                    contents.ProgramName = data.ProgramName;
                }
                if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
                    contents.SourceLocationName = data.SourceLocationName;
                }
                if (data.VodSourceName !== undefined && data.VodSourceName !== null) {
                    contents.VodSourceName = data.VodSourceName;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeProgramCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeSourceLocationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeSourceLocationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AccessConfiguration: undefined,
                    Arn: undefined,
                    CreationTime: undefined,
                    DefaultSegmentDeliveryConfiguration: undefined,
                    HttpConfiguration: undefined,
                    LastModifiedTime: undefined,
                    SourceLocationName: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AccessConfiguration !== undefined && data.AccessConfiguration !== null) {
                    contents.AccessConfiguration = deserializeAws_restJson1AccessConfiguration(data.AccessConfiguration, context);
                }
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.CreationTime !== undefined && data.CreationTime !== null) {
                    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
                }
                if (data.DefaultSegmentDeliveryConfiguration !== undefined && data.DefaultSegmentDeliveryConfiguration !== null) {
                    contents.DefaultSegmentDeliveryConfiguration = deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(data.DefaultSegmentDeliveryConfiguration, context);
                }
                if (data.HttpConfiguration !== undefined && data.HttpConfiguration !== null) {
                    contents.HttpConfiguration = deserializeAws_restJson1HttpConfiguration(data.HttpConfiguration, context);
                }
                if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
                    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
                }
                if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
                    contents.SourceLocationName = data.SourceLocationName;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeSourceLocationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeVodSourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeVodSourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    CreationTime: undefined,
                    HttpPackageConfigurations: undefined,
                    LastModifiedTime: undefined,
                    SourceLocationName: undefined,
                    Tags: undefined,
                    VodSourceName: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.CreationTime !== undefined && data.CreationTime !== null) {
                    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
                }
                if (data.HttpPackageConfigurations !== undefined && data.HttpPackageConfigurations !== null) {
                    contents.HttpPackageConfigurations = deserializeAws_restJson1HttpPackageConfigurations(data.HttpPackageConfigurations, context);
                }
                if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
                    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
                }
                if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
                    contents.SourceLocationName = data.SourceLocationName;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
                }
                if (data.VodSourceName !== undefined && data.VodSourceName !== null) {
                    contents.VodSourceName = data.VodSourceName;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeVodSourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetChannelPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetChannelPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Policy: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Policy !== undefined && data.Policy !== null) {
                    contents.Policy = data.Policy;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetChannelPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetChannelScheduleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetChannelScheduleCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Items: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Items !== undefined && data.Items !== null) {
                    contents.Items = deserializeAws_restJson1__listOfScheduleEntry(data.Items, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetChannelScheduleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetPlaybackConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetPlaybackConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AdDecisionServerUrl: undefined,
                    AvailSuppression: undefined,
                    Bumper: undefined,
                    CdnConfiguration: undefined,
                    ConfigurationAliases: undefined,
                    DashConfiguration: undefined,
                    HlsConfiguration: undefined,
                    LivePreRollConfiguration: undefined,
                    ManifestProcessingRules: undefined,
                    Name: undefined,
                    PersonalizationThresholdSeconds: undefined,
                    PlaybackConfigurationArn: undefined,
                    PlaybackEndpointPrefix: undefined,
                    SessionInitializationEndpointPrefix: undefined,
                    SlateAdUrl: undefined,
                    Tags: undefined,
                    TranscodeProfileName: undefined,
                    VideoContentSourceUrl: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AdDecisionServerUrl !== undefined && data.AdDecisionServerUrl !== null) {
                    contents.AdDecisionServerUrl = data.AdDecisionServerUrl;
                }
                if (data.AvailSuppression !== undefined && data.AvailSuppression !== null) {
                    contents.AvailSuppression = deserializeAws_restJson1AvailSuppression(data.AvailSuppression, context);
                }
                if (data.Bumper !== undefined && data.Bumper !== null) {
                    contents.Bumper = deserializeAws_restJson1Bumper(data.Bumper, context);
                }
                if (data.CdnConfiguration !== undefined && data.CdnConfiguration !== null) {
                    contents.CdnConfiguration = deserializeAws_restJson1CdnConfiguration(data.CdnConfiguration, context);
                }
                if (data.ConfigurationAliases !== undefined && data.ConfigurationAliases !== null) {
                    contents.ConfigurationAliases = deserializeAws_restJson1ConfigurationAliasesResponse(data.ConfigurationAliases, context);
                }
                if (data.DashConfiguration !== undefined && data.DashConfiguration !== null) {
                    contents.DashConfiguration = deserializeAws_restJson1DashConfiguration(data.DashConfiguration, context);
                }
                if (data.HlsConfiguration !== undefined && data.HlsConfiguration !== null) {
                    contents.HlsConfiguration = deserializeAws_restJson1HlsConfiguration(data.HlsConfiguration, context);
                }
                if (data.LivePreRollConfiguration !== undefined && data.LivePreRollConfiguration !== null) {
                    contents.LivePreRollConfiguration = deserializeAws_restJson1LivePreRollConfiguration(data.LivePreRollConfiguration, context);
                }
                if (data.ManifestProcessingRules !== undefined && data.ManifestProcessingRules !== null) {
                    contents.ManifestProcessingRules = deserializeAws_restJson1ManifestProcessingRules(data.ManifestProcessingRules, context);
                }
                if (data.Name !== undefined && data.Name !== null) {
                    contents.Name = data.Name;
                }
                if (data.PersonalizationThresholdSeconds !== undefined && data.PersonalizationThresholdSeconds !== null) {
                    contents.PersonalizationThresholdSeconds = data.PersonalizationThresholdSeconds;
                }
                if (data.PlaybackConfigurationArn !== undefined && data.PlaybackConfigurationArn !== null) {
                    contents.PlaybackConfigurationArn = data.PlaybackConfigurationArn;
                }
                if (data.PlaybackEndpointPrefix !== undefined && data.PlaybackEndpointPrefix !== null) {
                    contents.PlaybackEndpointPrefix = data.PlaybackEndpointPrefix;
                }
                if (data.SessionInitializationEndpointPrefix !== undefined && data.SessionInitializationEndpointPrefix !== null) {
                    contents.SessionInitializationEndpointPrefix = data.SessionInitializationEndpointPrefix;
                }
                if (data.SlateAdUrl !== undefined && data.SlateAdUrl !== null) {
                    contents.SlateAdUrl = data.SlateAdUrl;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
                }
                if (data.TranscodeProfileName !== undefined && data.TranscodeProfileName !== null) {
                    contents.TranscodeProfileName = data.TranscodeProfileName;
                }
                if (data.VideoContentSourceUrl !== undefined && data.VideoContentSourceUrl !== null) {
                    contents.VideoContentSourceUrl = data.VideoContentSourceUrl;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetPlaybackConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListChannelsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListChannelsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Items: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Items !== undefined && data.Items !== null) {
                    contents.Items = deserializeAws_restJson1__listOfChannel(data.Items, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListChannelsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListPlaybackConfigurationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListPlaybackConfigurationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Items: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Items !== undefined && data.Items !== null) {
                    contents.Items = deserializeAws_restJson1__listOfPlaybackConfiguration(data.Items, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListPlaybackConfigurationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListSourceLocationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListSourceLocationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Items: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Items !== undefined && data.Items !== null) {
                    contents.Items = deserializeAws_restJson1__listOfSourceLocation(data.Items, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListSourceLocationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
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
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediatailor#BadRequestException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListVodSourcesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListVodSourcesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Items: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Items !== undefined && data.Items !== null) {
                    contents.Items = deserializeAws_restJson1__listOfVodSource(data.Items, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListVodSourcesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1PutChannelPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutChannelPolicyCommandError(output, context)];
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
var deserializeAws_restJson1PutChannelPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1PutPlaybackConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutPlaybackConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AdDecisionServerUrl: undefined,
                    AvailSuppression: undefined,
                    Bumper: undefined,
                    CdnConfiguration: undefined,
                    ConfigurationAliases: undefined,
                    DashConfiguration: undefined,
                    HlsConfiguration: undefined,
                    LivePreRollConfiguration: undefined,
                    ManifestProcessingRules: undefined,
                    Name: undefined,
                    PersonalizationThresholdSeconds: undefined,
                    PlaybackConfigurationArn: undefined,
                    PlaybackEndpointPrefix: undefined,
                    SessionInitializationEndpointPrefix: undefined,
                    SlateAdUrl: undefined,
                    Tags: undefined,
                    TranscodeProfileName: undefined,
                    VideoContentSourceUrl: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AdDecisionServerUrl !== undefined && data.AdDecisionServerUrl !== null) {
                    contents.AdDecisionServerUrl = data.AdDecisionServerUrl;
                }
                if (data.AvailSuppression !== undefined && data.AvailSuppression !== null) {
                    contents.AvailSuppression = deserializeAws_restJson1AvailSuppression(data.AvailSuppression, context);
                }
                if (data.Bumper !== undefined && data.Bumper !== null) {
                    contents.Bumper = deserializeAws_restJson1Bumper(data.Bumper, context);
                }
                if (data.CdnConfiguration !== undefined && data.CdnConfiguration !== null) {
                    contents.CdnConfiguration = deserializeAws_restJson1CdnConfiguration(data.CdnConfiguration, context);
                }
                if (data.ConfigurationAliases !== undefined && data.ConfigurationAliases !== null) {
                    contents.ConfigurationAliases = deserializeAws_restJson1ConfigurationAliasesResponse(data.ConfigurationAliases, context);
                }
                if (data.DashConfiguration !== undefined && data.DashConfiguration !== null) {
                    contents.DashConfiguration = deserializeAws_restJson1DashConfiguration(data.DashConfiguration, context);
                }
                if (data.HlsConfiguration !== undefined && data.HlsConfiguration !== null) {
                    contents.HlsConfiguration = deserializeAws_restJson1HlsConfiguration(data.HlsConfiguration, context);
                }
                if (data.LivePreRollConfiguration !== undefined && data.LivePreRollConfiguration !== null) {
                    contents.LivePreRollConfiguration = deserializeAws_restJson1LivePreRollConfiguration(data.LivePreRollConfiguration, context);
                }
                if (data.ManifestProcessingRules !== undefined && data.ManifestProcessingRules !== null) {
                    contents.ManifestProcessingRules = deserializeAws_restJson1ManifestProcessingRules(data.ManifestProcessingRules, context);
                }
                if (data.Name !== undefined && data.Name !== null) {
                    contents.Name = data.Name;
                }
                if (data.PersonalizationThresholdSeconds !== undefined && data.PersonalizationThresholdSeconds !== null) {
                    contents.PersonalizationThresholdSeconds = data.PersonalizationThresholdSeconds;
                }
                if (data.PlaybackConfigurationArn !== undefined && data.PlaybackConfigurationArn !== null) {
                    contents.PlaybackConfigurationArn = data.PlaybackConfigurationArn;
                }
                if (data.PlaybackEndpointPrefix !== undefined && data.PlaybackEndpointPrefix !== null) {
                    contents.PlaybackEndpointPrefix = data.PlaybackEndpointPrefix;
                }
                if (data.SessionInitializationEndpointPrefix !== undefined && data.SessionInitializationEndpointPrefix !== null) {
                    contents.SessionInitializationEndpointPrefix = data.SessionInitializationEndpointPrefix;
                }
                if (data.SlateAdUrl !== undefined && data.SlateAdUrl !== null) {
                    contents.SlateAdUrl = data.SlateAdUrl;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
                }
                if (data.TranscodeProfileName !== undefined && data.TranscodeProfileName !== null) {
                    contents.TranscodeProfileName = data.TranscodeProfileName;
                }
                if (data.VideoContentSourceUrl !== undefined && data.VideoContentSourceUrl !== null) {
                    contents.VideoContentSourceUrl = data.VideoContentSourceUrl;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutPlaybackConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1StartChannelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartChannelCommandError(output, context)];
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
var deserializeAws_restJson1StartChannelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1StopChannelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StopChannelCommandError(output, context)];
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
var deserializeAws_restJson1StopChannelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
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
                if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediatailor#BadRequestException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
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
                if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediatailor#BadRequestException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateChannelCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateChannelCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    ChannelName: undefined,
                    ChannelState: undefined,
                    CreationTime: undefined,
                    LastModifiedTime: undefined,
                    Outputs: undefined,
                    PlaybackMode: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.ChannelName !== undefined && data.ChannelName !== null) {
                    contents.ChannelName = data.ChannelName;
                }
                if (data.ChannelState !== undefined && data.ChannelState !== null) {
                    contents.ChannelState = data.ChannelState;
                }
                if (data.CreationTime !== undefined && data.CreationTime !== null) {
                    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
                }
                if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
                    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
                }
                if (data.Outputs !== undefined && data.Outputs !== null) {
                    contents.Outputs = deserializeAws_restJson1ResponseOutputs(data.Outputs, context);
                }
                if (data.PlaybackMode !== undefined && data.PlaybackMode !== null) {
                    contents.PlaybackMode = data.PlaybackMode;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateChannelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateSourceLocationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateSourceLocationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AccessConfiguration: undefined,
                    Arn: undefined,
                    CreationTime: undefined,
                    DefaultSegmentDeliveryConfiguration: undefined,
                    HttpConfiguration: undefined,
                    LastModifiedTime: undefined,
                    SourceLocationName: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AccessConfiguration !== undefined && data.AccessConfiguration !== null) {
                    contents.AccessConfiguration = deserializeAws_restJson1AccessConfiguration(data.AccessConfiguration, context);
                }
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.CreationTime !== undefined && data.CreationTime !== null) {
                    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
                }
                if (data.DefaultSegmentDeliveryConfiguration !== undefined && data.DefaultSegmentDeliveryConfiguration !== null) {
                    contents.DefaultSegmentDeliveryConfiguration = deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(data.DefaultSegmentDeliveryConfiguration, context);
                }
                if (data.HttpConfiguration !== undefined && data.HttpConfiguration !== null) {
                    contents.HttpConfiguration = deserializeAws_restJson1HttpConfiguration(data.HttpConfiguration, context);
                }
                if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
                    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
                }
                if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
                    contents.SourceLocationName = data.SourceLocationName;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateSourceLocationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateVodSourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateVodSourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    CreationTime: undefined,
                    HttpPackageConfigurations: undefined,
                    LastModifiedTime: undefined,
                    SourceLocationName: undefined,
                    Tags: undefined,
                    VodSourceName: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.CreationTime !== undefined && data.CreationTime !== null) {
                    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
                }
                if (data.HttpPackageConfigurations !== undefined && data.HttpPackageConfigurations !== null) {
                    contents.HttpPackageConfigurations = deserializeAws_restJson1HttpPackageConfigurations(data.HttpPackageConfigurations, context);
                }
                if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
                    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
                }
                if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
                    contents.SourceLocationName = data.SourceLocationName;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
                }
                if (data.VodSourceName !== undefined && data.VodSourceName !== null) {
                    contents.VodSourceName = data.VodSourceName;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateVodSourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1BadRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "BadRequestException",
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
var serializeAws_restJson1__listOfAdBreak = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AdBreak(entry, context);
    });
};
var serializeAws_restJson1__mapOf__string = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1AccessConfiguration = function (input, context) {
    return __assign({}, (input.AccessType !== undefined && input.AccessType !== null && { AccessType: input.AccessType }));
};
var serializeAws_restJson1AdBreak = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType })), (input.OffsetMillis !== undefined && input.OffsetMillis !== null && { OffsetMillis: input.OffsetMillis })), (input.Slate !== undefined &&
        input.Slate !== null && { Slate: serializeAws_restJson1SlateSource(input.Slate, context) })), (input.SpliceInsertMessage !== undefined &&
        input.SpliceInsertMessage !== null && {
        SpliceInsertMessage: serializeAws_restJson1SpliceInsertMessage(input.SpliceInsertMessage, context),
    }));
};
var serializeAws_restJson1AdMarkerPassthrough = function (input, context) {
    return __assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }));
};
var serializeAws_restJson1AvailSuppression = function (input, context) {
    return __assign(__assign({}, (input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1Bumper = function (input, context) {
    return __assign(__assign({}, (input.EndUrl !== undefined && input.EndUrl !== null && { EndUrl: input.EndUrl })), (input.StartUrl !== undefined && input.StartUrl !== null && { StartUrl: input.StartUrl }));
};
var serializeAws_restJson1CdnConfiguration = function (input, context) {
    return __assign(__assign({}, (input.AdSegmentUrlPrefix !== undefined &&
        input.AdSegmentUrlPrefix !== null && { AdSegmentUrlPrefix: input.AdSegmentUrlPrefix })), (input.ContentSegmentUrlPrefix !== undefined &&
        input.ContentSegmentUrlPrefix !== null && { ContentSegmentUrlPrefix: input.ContentSegmentUrlPrefix }));
};
var serializeAws_restJson1ConfigurationAliasesRequest = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1__mapOf__string(value, context), _b));
    }, {});
};
var serializeAws_restJson1DashConfigurationForPut = function (input, context) {
    return __assign(__assign({}, (input.MpdLocation !== undefined && input.MpdLocation !== null && { MpdLocation: input.MpdLocation })), (input.OriginManifestType !== undefined &&
        input.OriginManifestType !== null && { OriginManifestType: input.OriginManifestType }));
};
var serializeAws_restJson1DashPlaylistSettings = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ManifestWindowSeconds !== undefined &&
        input.ManifestWindowSeconds !== null && { ManifestWindowSeconds: input.ManifestWindowSeconds })), (input.MinBufferTimeSeconds !== undefined &&
        input.MinBufferTimeSeconds !== null && { MinBufferTimeSeconds: input.MinBufferTimeSeconds })), (input.MinUpdatePeriodSeconds !== undefined &&
        input.MinUpdatePeriodSeconds !== null && { MinUpdatePeriodSeconds: input.MinUpdatePeriodSeconds })), (input.SuggestedPresentationDelaySeconds !== undefined &&
        input.SuggestedPresentationDelaySeconds !== null && {
        SuggestedPresentationDelaySeconds: input.SuggestedPresentationDelaySeconds,
    }));
};
var serializeAws_restJson1DefaultSegmentDeliveryConfiguration = function (input, context) {
    return __assign({}, (input.BaseUrl !== undefined && input.BaseUrl !== null && { BaseUrl: input.BaseUrl }));
};
var serializeAws_restJson1HlsPlaylistSettings = function (input, context) {
    return __assign({}, (input.ManifestWindowSeconds !== undefined &&
        input.ManifestWindowSeconds !== null && { ManifestWindowSeconds: input.ManifestWindowSeconds }));
};
var serializeAws_restJson1HttpConfiguration = function (input, context) {
    return __assign({}, (input.BaseUrl !== undefined && input.BaseUrl !== null && { BaseUrl: input.BaseUrl }));
};
var serializeAws_restJson1HttpPackageConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.Path !== undefined && input.Path !== null && { Path: input.Path })), (input.SourceGroup !== undefined && input.SourceGroup !== null && { SourceGroup: input.SourceGroup })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_restJson1HttpPackageConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1HttpPackageConfiguration(entry, context);
    });
};
var serializeAws_restJson1LivePreRollConfiguration = function (input, context) {
    return __assign(__assign({}, (input.AdDecisionServerUrl !== undefined &&
        input.AdDecisionServerUrl !== null && { AdDecisionServerUrl: input.AdDecisionServerUrl })), (input.MaxDurationSeconds !== undefined &&
        input.MaxDurationSeconds !== null && { MaxDurationSeconds: input.MaxDurationSeconds }));
};
var serializeAws_restJson1ManifestProcessingRules = function (input, context) {
    return __assign({}, (input.AdMarkerPassthrough !== undefined &&
        input.AdMarkerPassthrough !== null && {
        AdMarkerPassthrough: serializeAws_restJson1AdMarkerPassthrough(input.AdMarkerPassthrough, context),
    }));
};
var serializeAws_restJson1RequestOutputItem = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DashPlaylistSettings !== undefined &&
        input.DashPlaylistSettings !== null && {
        DashPlaylistSettings: serializeAws_restJson1DashPlaylistSettings(input.DashPlaylistSettings, context),
    })), (input.HlsPlaylistSettings !== undefined &&
        input.HlsPlaylistSettings !== null && {
        HlsPlaylistSettings: serializeAws_restJson1HlsPlaylistSettings(input.HlsPlaylistSettings, context),
    })), (input.ManifestName !== undefined && input.ManifestName !== null && { ManifestName: input.ManifestName })), (input.SourceGroup !== undefined && input.SourceGroup !== null && { SourceGroup: input.SourceGroup }));
};
var serializeAws_restJson1RequestOutputs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RequestOutputItem(entry, context);
    });
};
var serializeAws_restJson1ScheduleConfiguration = function (input, context) {
    return __assign({}, (input.Transition !== undefined &&
        input.Transition !== null && { Transition: serializeAws_restJson1Transition(input.Transition, context) }));
};
var serializeAws_restJson1SlateSource = function (input, context) {
    return __assign(__assign({}, (input.SourceLocationName !== undefined &&
        input.SourceLocationName !== null && { SourceLocationName: input.SourceLocationName })), (input.VodSourceName !== undefined && input.VodSourceName !== null && { VodSourceName: input.VodSourceName }));
};
var serializeAws_restJson1SpliceInsertMessage = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AvailNum !== undefined && input.AvailNum !== null && { AvailNum: input.AvailNum })), (input.AvailsExpected !== undefined &&
        input.AvailsExpected !== null && { AvailsExpected: input.AvailsExpected })), (input.SpliceEventId !== undefined && input.SpliceEventId !== null && { SpliceEventId: input.SpliceEventId })), (input.UniqueProgramId !== undefined &&
        input.UniqueProgramId !== null && { UniqueProgramId: input.UniqueProgramId }));
};
var serializeAws_restJson1Transition = function (input, context) {
    return __assign(__assign(__assign({}, (input.RelativePosition !== undefined &&
        input.RelativePosition !== null && { RelativePosition: input.RelativePosition })), (input.RelativeProgram !== undefined &&
        input.RelativeProgram !== null && { RelativeProgram: input.RelativeProgram })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var deserializeAws_restJson1__listOfAdBreak = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AdBreak(entry, context);
    });
};
var deserializeAws_restJson1__listOfChannel = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Channel(entry, context);
    });
};
var deserializeAws_restJson1__listOfPlaybackConfiguration = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PlaybackConfiguration(entry, context);
    });
};
var deserializeAws_restJson1__listOfScheduleEntry = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ScheduleEntry(entry, context);
    });
};
var deserializeAws_restJson1__listOfSourceLocation = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SourceLocation(entry, context);
    });
};
var deserializeAws_restJson1__listOfVodSource = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1VodSource(entry, context);
    });
};
var deserializeAws_restJson1__mapOf__string = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1AccessConfiguration = function (output, context) {
    return {
        AccessType: output.AccessType !== undefined && output.AccessType !== null ? output.AccessType : undefined,
    };
};
var deserializeAws_restJson1AdBreak = function (output, context) {
    return {
        MessageType: output.MessageType !== undefined && output.MessageType !== null ? output.MessageType : undefined,
        OffsetMillis: output.OffsetMillis !== undefined && output.OffsetMillis !== null ? output.OffsetMillis : undefined,
        Slate: output.Slate !== undefined && output.Slate !== null
            ? deserializeAws_restJson1SlateSource(output.Slate, context)
            : undefined,
        SpliceInsertMessage: output.SpliceInsertMessage !== undefined && output.SpliceInsertMessage !== null
            ? deserializeAws_restJson1SpliceInsertMessage(output.SpliceInsertMessage, context)
            : undefined,
    };
};
var deserializeAws_restJson1AdMarkerPassthrough = function (output, context) {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
var deserializeAws_restJson1AvailSuppression = function (output, context) {
    return {
        Mode: output.Mode !== undefined && output.Mode !== null ? output.Mode : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1Bumper = function (output, context) {
    return {
        EndUrl: output.EndUrl !== undefined && output.EndUrl !== null ? output.EndUrl : undefined,
        StartUrl: output.StartUrl !== undefined && output.StartUrl !== null ? output.StartUrl : undefined,
    };
};
var deserializeAws_restJson1CdnConfiguration = function (output, context) {
    return {
        AdSegmentUrlPrefix: output.AdSegmentUrlPrefix !== undefined && output.AdSegmentUrlPrefix !== null
            ? output.AdSegmentUrlPrefix
            : undefined,
        ContentSegmentUrlPrefix: output.ContentSegmentUrlPrefix !== undefined && output.ContentSegmentUrlPrefix !== null
            ? output.ContentSegmentUrlPrefix
            : undefined,
    };
};
var deserializeAws_restJson1Channel = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        ChannelName: output.ChannelName !== undefined && output.ChannelName !== null ? output.ChannelName : undefined,
        ChannelState: output.ChannelState !== undefined && output.ChannelState !== null ? output.ChannelState : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        Outputs: output.Outputs !== undefined && output.Outputs !== null
            ? deserializeAws_restJson1ResponseOutputs(output.Outputs, context)
            : undefined,
        PlaybackMode: output.PlaybackMode !== undefined && output.PlaybackMode !== null ? output.PlaybackMode : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1__mapOf__string(output.tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1ConfigurationAliasesResponse = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1__mapOf__string(value, context), _b));
    }, {});
};
var deserializeAws_restJson1DashConfiguration = function (output, context) {
    return {
        ManifestEndpointPrefix: output.ManifestEndpointPrefix !== undefined && output.ManifestEndpointPrefix !== null
            ? output.ManifestEndpointPrefix
            : undefined,
        MpdLocation: output.MpdLocation !== undefined && output.MpdLocation !== null ? output.MpdLocation : undefined,
        OriginManifestType: output.OriginManifestType !== undefined && output.OriginManifestType !== null
            ? output.OriginManifestType
            : undefined,
    };
};
var deserializeAws_restJson1DashPlaylistSettings = function (output, context) {
    return {
        ManifestWindowSeconds: output.ManifestWindowSeconds !== undefined && output.ManifestWindowSeconds !== null
            ? output.ManifestWindowSeconds
            : undefined,
        MinBufferTimeSeconds: output.MinBufferTimeSeconds !== undefined && output.MinBufferTimeSeconds !== null
            ? output.MinBufferTimeSeconds
            : undefined,
        MinUpdatePeriodSeconds: output.MinUpdatePeriodSeconds !== undefined && output.MinUpdatePeriodSeconds !== null
            ? output.MinUpdatePeriodSeconds
            : undefined,
        SuggestedPresentationDelaySeconds: output.SuggestedPresentationDelaySeconds !== undefined && output.SuggestedPresentationDelaySeconds !== null
            ? output.SuggestedPresentationDelaySeconds
            : undefined,
    };
};
var deserializeAws_restJson1DefaultSegmentDeliveryConfiguration = function (output, context) {
    return {
        BaseUrl: output.BaseUrl !== undefined && output.BaseUrl !== null ? output.BaseUrl : undefined,
    };
};
var deserializeAws_restJson1HlsConfiguration = function (output, context) {
    return {
        ManifestEndpointPrefix: output.ManifestEndpointPrefix !== undefined && output.ManifestEndpointPrefix !== null
            ? output.ManifestEndpointPrefix
            : undefined,
    };
};
var deserializeAws_restJson1HlsPlaylistSettings = function (output, context) {
    return {
        ManifestWindowSeconds: output.ManifestWindowSeconds !== undefined && output.ManifestWindowSeconds !== null
            ? output.ManifestWindowSeconds
            : undefined,
    };
};
var deserializeAws_restJson1HttpConfiguration = function (output, context) {
    return {
        BaseUrl: output.BaseUrl !== undefined && output.BaseUrl !== null ? output.BaseUrl : undefined,
    };
};
var deserializeAws_restJson1HttpPackageConfiguration = function (output, context) {
    return {
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        SourceGroup: output.SourceGroup !== undefined && output.SourceGroup !== null ? output.SourceGroup : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1HttpPackageConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HttpPackageConfiguration(entry, context);
    });
};
var deserializeAws_restJson1LivePreRollConfiguration = function (output, context) {
    return {
        AdDecisionServerUrl: output.AdDecisionServerUrl !== undefined && output.AdDecisionServerUrl !== null
            ? output.AdDecisionServerUrl
            : undefined,
        MaxDurationSeconds: output.MaxDurationSeconds !== undefined && output.MaxDurationSeconds !== null
            ? output.MaxDurationSeconds
            : undefined,
    };
};
var deserializeAws_restJson1ManifestProcessingRules = function (output, context) {
    return {
        AdMarkerPassthrough: output.AdMarkerPassthrough !== undefined && output.AdMarkerPassthrough !== null
            ? deserializeAws_restJson1AdMarkerPassthrough(output.AdMarkerPassthrough, context)
            : undefined,
    };
};
var deserializeAws_restJson1PlaybackConfiguration = function (output, context) {
    return {
        AdDecisionServerUrl: output.AdDecisionServerUrl !== undefined && output.AdDecisionServerUrl !== null
            ? output.AdDecisionServerUrl
            : undefined,
        AvailSuppression: output.AvailSuppression !== undefined && output.AvailSuppression !== null
            ? deserializeAws_restJson1AvailSuppression(output.AvailSuppression, context)
            : undefined,
        Bumper: output.Bumper !== undefined && output.Bumper !== null
            ? deserializeAws_restJson1Bumper(output.Bumper, context)
            : undefined,
        CdnConfiguration: output.CdnConfiguration !== undefined && output.CdnConfiguration !== null
            ? deserializeAws_restJson1CdnConfiguration(output.CdnConfiguration, context)
            : undefined,
        ConfigurationAliases: output.ConfigurationAliases !== undefined && output.ConfigurationAliases !== null
            ? deserializeAws_restJson1ConfigurationAliasesResponse(output.ConfigurationAliases, context)
            : undefined,
        DashConfiguration: output.DashConfiguration !== undefined && output.DashConfiguration !== null
            ? deserializeAws_restJson1DashConfiguration(output.DashConfiguration, context)
            : undefined,
        HlsConfiguration: output.HlsConfiguration !== undefined && output.HlsConfiguration !== null
            ? deserializeAws_restJson1HlsConfiguration(output.HlsConfiguration, context)
            : undefined,
        LivePreRollConfiguration: output.LivePreRollConfiguration !== undefined && output.LivePreRollConfiguration !== null
            ? deserializeAws_restJson1LivePreRollConfiguration(output.LivePreRollConfiguration, context)
            : undefined,
        ManifestProcessingRules: output.ManifestProcessingRules !== undefined && output.ManifestProcessingRules !== null
            ? deserializeAws_restJson1ManifestProcessingRules(output.ManifestProcessingRules, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PersonalizationThresholdSeconds: output.PersonalizationThresholdSeconds !== undefined && output.PersonalizationThresholdSeconds !== null
            ? output.PersonalizationThresholdSeconds
            : undefined,
        PlaybackConfigurationArn: output.PlaybackConfigurationArn !== undefined && output.PlaybackConfigurationArn !== null
            ? output.PlaybackConfigurationArn
            : undefined,
        PlaybackEndpointPrefix: output.PlaybackEndpointPrefix !== undefined && output.PlaybackEndpointPrefix !== null
            ? output.PlaybackEndpointPrefix
            : undefined,
        SessionInitializationEndpointPrefix: output.SessionInitializationEndpointPrefix !== undefined && output.SessionInitializationEndpointPrefix !== null
            ? output.SessionInitializationEndpointPrefix
            : undefined,
        SlateAdUrl: output.SlateAdUrl !== undefined && output.SlateAdUrl !== null ? output.SlateAdUrl : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1__mapOf__string(output.tags, context)
            : undefined,
        TranscodeProfileName: output.TranscodeProfileName !== undefined && output.TranscodeProfileName !== null
            ? output.TranscodeProfileName
            : undefined,
        VideoContentSourceUrl: output.VideoContentSourceUrl !== undefined && output.VideoContentSourceUrl !== null
            ? output.VideoContentSourceUrl
            : undefined,
    };
};
var deserializeAws_restJson1ResponseOutputItem = function (output, context) {
    return {
        DashPlaylistSettings: output.DashPlaylistSettings !== undefined && output.DashPlaylistSettings !== null
            ? deserializeAws_restJson1DashPlaylistSettings(output.DashPlaylistSettings, context)
            : undefined,
        HlsPlaylistSettings: output.HlsPlaylistSettings !== undefined && output.HlsPlaylistSettings !== null
            ? deserializeAws_restJson1HlsPlaylistSettings(output.HlsPlaylistSettings, context)
            : undefined,
        ManifestName: output.ManifestName !== undefined && output.ManifestName !== null ? output.ManifestName : undefined,
        PlaybackUrl: output.PlaybackUrl !== undefined && output.PlaybackUrl !== null ? output.PlaybackUrl : undefined,
        SourceGroup: output.SourceGroup !== undefined && output.SourceGroup !== null ? output.SourceGroup : undefined,
    };
};
var deserializeAws_restJson1ResponseOutputs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResponseOutputItem(entry, context);
    });
};
var deserializeAws_restJson1ScheduleEntry = function (output, context) {
    return {
        ApproximateDurationSeconds: output.ApproximateDurationSeconds !== undefined && output.ApproximateDurationSeconds !== null
            ? output.ApproximateDurationSeconds
            : undefined,
        ApproximateStartTime: output.ApproximateStartTime !== undefined && output.ApproximateStartTime !== null
            ? new Date(Math.round(output.ApproximateStartTime * 1000))
            : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        ChannelName: output.ChannelName !== undefined && output.ChannelName !== null ? output.ChannelName : undefined,
        ProgramName: output.ProgramName !== undefined && output.ProgramName !== null ? output.ProgramName : undefined,
        SourceLocationName: output.SourceLocationName !== undefined && output.SourceLocationName !== null
            ? output.SourceLocationName
            : undefined,
        VodSourceName: output.VodSourceName !== undefined && output.VodSourceName !== null ? output.VodSourceName : undefined,
    };
};
var deserializeAws_restJson1SlateSource = function (output, context) {
    return {
        SourceLocationName: output.SourceLocationName !== undefined && output.SourceLocationName !== null
            ? output.SourceLocationName
            : undefined,
        VodSourceName: output.VodSourceName !== undefined && output.VodSourceName !== null ? output.VodSourceName : undefined,
    };
};
var deserializeAws_restJson1SourceLocation = function (output, context) {
    return {
        AccessConfiguration: output.AccessConfiguration !== undefined && output.AccessConfiguration !== null
            ? deserializeAws_restJson1AccessConfiguration(output.AccessConfiguration, context)
            : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DefaultSegmentDeliveryConfiguration: output.DefaultSegmentDeliveryConfiguration !== undefined && output.DefaultSegmentDeliveryConfiguration !== null
            ? deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(output.DefaultSegmentDeliveryConfiguration, context)
            : undefined,
        HttpConfiguration: output.HttpConfiguration !== undefined && output.HttpConfiguration !== null
            ? deserializeAws_restJson1HttpConfiguration(output.HttpConfiguration, context)
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        SourceLocationName: output.SourceLocationName !== undefined && output.SourceLocationName !== null
            ? output.SourceLocationName
            : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1__mapOf__string(output.tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1SpliceInsertMessage = function (output, context) {
    return {
        AvailNum: output.AvailNum !== undefined && output.AvailNum !== null ? output.AvailNum : undefined,
        AvailsExpected: output.AvailsExpected !== undefined && output.AvailsExpected !== null ? output.AvailsExpected : undefined,
        SpliceEventId: output.SpliceEventId !== undefined && output.SpliceEventId !== null ? output.SpliceEventId : undefined,
        UniqueProgramId: output.UniqueProgramId !== undefined && output.UniqueProgramId !== null ? output.UniqueProgramId : undefined,
    };
};
var deserializeAws_restJson1VodSource = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        HttpPackageConfigurations: output.HttpPackageConfigurations !== undefined && output.HttpPackageConfigurations !== null
            ? deserializeAws_restJson1HttpPackageConfigurations(output.HttpPackageConfigurations, context)
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        SourceLocationName: output.SourceLocationName !== undefined && output.SourceLocationName !== null
            ? output.SourceLocationName
            : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1__mapOf__string(output.tags, context)
            : undefined,
        VodSourceName: output.VodSourceName !== undefined && output.VodSourceName !== null ? output.VodSourceName : undefined,
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