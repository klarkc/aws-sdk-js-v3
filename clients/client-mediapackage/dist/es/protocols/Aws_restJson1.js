import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1ConfigureLogsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/channels/{Id}/configure_logs";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.EgressAccessLogs !== undefined &&
                    input.EgressAccessLogs !== null && {
                    egressAccessLogs: serializeAws_restJson1EgressAccessLogs(input.EgressAccessLogs, context),
                })), (input.IngressAccessLogs !== undefined &&
                    input.IngressAccessLogs !== null && {
                    ingressAccessLogs: serializeAws_restJson1IngressAccessLogs(input.IngressAccessLogs, context),
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
export var serializeAws_restJson1CreateChannelCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/channels";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.Id !== undefined && input.Id !== null && { id: input.Id })), (input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) })));
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
export var serializeAws_restJson1CreateHarvestJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/harvest_jobs";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.EndTime !== undefined && input.EndTime !== null && { endTime: input.EndTime })), (input.Id !== undefined && input.Id !== null && { id: input.Id })), (input.OriginEndpointId !== undefined &&
                    input.OriginEndpointId !== null && { originEndpointId: input.OriginEndpointId })), (input.S3Destination !== undefined &&
                    input.S3Destination !== null && {
                    s3Destination: serializeAws_restJson1S3Destination(input.S3Destination, context),
                })), (input.StartTime !== undefined && input.StartTime !== null && { startTime: input.StartTime })));
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
export var serializeAws_restJson1CreateOriginEndpointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/origin_endpoints";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Authorization !== undefined &&
                    input.Authorization !== null && {
                    authorization: serializeAws_restJson1Authorization(input.Authorization, context),
                })), (input.ChannelId !== undefined && input.ChannelId !== null && { channelId: input.ChannelId })), (input.CmafPackage !== undefined &&
                    input.CmafPackage !== null && {
                    cmafPackage: serializeAws_restJson1CmafPackageCreateOrUpdateParameters(input.CmafPackage, context),
                })), (input.DashPackage !== undefined &&
                    input.DashPackage !== null && { dashPackage: serializeAws_restJson1DashPackage(input.DashPackage, context) })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.HlsPackage !== undefined &&
                    input.HlsPackage !== null && { hlsPackage: serializeAws_restJson1HlsPackage(input.HlsPackage, context) })), (input.Id !== undefined && input.Id !== null && { id: input.Id })), (input.ManifestName !== undefined && input.ManifestName !== null && { manifestName: input.ManifestName })), (input.MssPackage !== undefined &&
                    input.MssPackage !== null && { mssPackage: serializeAws_restJson1MssPackage(input.MssPackage, context) })), (input.Origination !== undefined && input.Origination !== null && { origination: input.Origination })), (input.StartoverWindowSeconds !== undefined &&
                    input.StartoverWindowSeconds !== null && { startoverWindowSeconds: input.StartoverWindowSeconds })), (input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) })), (input.TimeDelaySeconds !== undefined &&
                    input.TimeDelaySeconds !== null && { timeDelaySeconds: input.TimeDelaySeconds })), (input.Whitelist !== undefined &&
                    input.Whitelist !== null && { whitelist: serializeAws_restJson1__listOf__string(input.Whitelist, context) })));
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
                resolvedPath = "/channels/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restJson1DeleteOriginEndpointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/origin_endpoints/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
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
                resolvedPath = "/channels/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restJson1DescribeHarvestJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/harvest_jobs/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restJson1DescribeOriginEndpointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/origin_endpoints/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restJson1ListHarvestJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/harvest_jobs";
                query = __assign(__assign(__assign(__assign({}, (input.IncludeChannelId !== undefined && { includeChannelId: input.IncludeChannelId })), (input.IncludeStatus !== undefined && { includeStatus: input.IncludeStatus })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1ListOriginEndpointsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/origin_endpoints";
                query = __assign(__assign(__assign({}, (input.ChannelId !== undefined && { channelId: input.ChannelId })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1RotateChannelCredentialsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/channels/{Id}/credentials";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restJson1RotateIngestEndpointCredentialsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/channels/{Id}/ingest_endpoints/{IngestEndpointId}/credentials";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                if (input.IngestEndpointId !== undefined) {
                    labelValue = input.IngestEndpointId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: IngestEndpointId.");
                    }
                    resolvedPath = resolvedPath.replace("{IngestEndpointId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: IngestEndpointId.");
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
                resolvedPath = "/channels/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                body = JSON.stringify(__assign({}, (input.Description !== undefined && input.Description !== null && { description: input.Description })));
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
export var serializeAws_restJson1UpdateOriginEndpointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/origin_endpoints/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Authorization !== undefined &&
                    input.Authorization !== null && {
                    authorization: serializeAws_restJson1Authorization(input.Authorization, context),
                })), (input.CmafPackage !== undefined &&
                    input.CmafPackage !== null && {
                    cmafPackage: serializeAws_restJson1CmafPackageCreateOrUpdateParameters(input.CmafPackage, context),
                })), (input.DashPackage !== undefined &&
                    input.DashPackage !== null && { dashPackage: serializeAws_restJson1DashPackage(input.DashPackage, context) })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.HlsPackage !== undefined &&
                    input.HlsPackage !== null && { hlsPackage: serializeAws_restJson1HlsPackage(input.HlsPackage, context) })), (input.ManifestName !== undefined && input.ManifestName !== null && { manifestName: input.ManifestName })), (input.MssPackage !== undefined &&
                    input.MssPackage !== null && { mssPackage: serializeAws_restJson1MssPackage(input.MssPackage, context) })), (input.Origination !== undefined && input.Origination !== null && { origination: input.Origination })), (input.StartoverWindowSeconds !== undefined &&
                    input.StartoverWindowSeconds !== null && { startoverWindowSeconds: input.StartoverWindowSeconds })), (input.TimeDelaySeconds !== undefined &&
                    input.TimeDelaySeconds !== null && { timeDelaySeconds: input.TimeDelaySeconds })), (input.Whitelist !== undefined &&
                    input.Whitelist !== null && { whitelist: serializeAws_restJson1__listOf__string(input.Whitelist, context) })));
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
export var deserializeAws_restJson1ConfigureLogsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ConfigureLogsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    Description: undefined,
                    EgressAccessLogs: undefined,
                    HlsIngest: undefined,
                    Id: undefined,
                    IngressAccessLogs: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.Description = data.description;
                }
                if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
                    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
                }
                if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
                    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.Id = data.id;
                }
                if (data.ingressAccessLogs !== undefined && data.ingressAccessLogs !== null) {
                    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ConfigureLogsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
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
                    Description: undefined,
                    EgressAccessLogs: undefined,
                    HlsIngest: undefined,
                    Id: undefined,
                    IngressAccessLogs: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.Description = data.description;
                }
                if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
                    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
                }
                if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
                    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.Id = data.id;
                }
                if (data.ingressAccessLogs !== undefined && data.ingressAccessLogs !== null) {
                    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateChannelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateHarvestJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateHarvestJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    ChannelId: undefined,
                    CreatedAt: undefined,
                    EndTime: undefined,
                    Id: undefined,
                    OriginEndpointId: undefined,
                    S3Destination: undefined,
                    StartTime: undefined,
                    Status: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.channelId !== undefined && data.channelId !== null) {
                    contents.ChannelId = data.channelId;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.CreatedAt = data.createdAt;
                }
                if (data.endTime !== undefined && data.endTime !== null) {
                    contents.EndTime = data.endTime;
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.Id = data.id;
                }
                if (data.originEndpointId !== undefined && data.originEndpointId !== null) {
                    contents.OriginEndpointId = data.originEndpointId;
                }
                if (data.s3Destination !== undefined && data.s3Destination !== null) {
                    contents.S3Destination = deserializeAws_restJson1S3Destination(data.s3Destination, context);
                }
                if (data.startTime !== undefined && data.startTime !== null) {
                    contents.StartTime = data.startTime;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.Status = data.status;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateHarvestJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateOriginEndpointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateOriginEndpointCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    Authorization: undefined,
                    ChannelId: undefined,
                    CmafPackage: undefined,
                    DashPackage: undefined,
                    Description: undefined,
                    HlsPackage: undefined,
                    Id: undefined,
                    ManifestName: undefined,
                    MssPackage: undefined,
                    Origination: undefined,
                    StartoverWindowSeconds: undefined,
                    Tags: undefined,
                    TimeDelaySeconds: undefined,
                    Url: undefined,
                    Whitelist: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.authorization !== undefined && data.authorization !== null) {
                    contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
                }
                if (data.channelId !== undefined && data.channelId !== null) {
                    contents.ChannelId = data.channelId;
                }
                if (data.cmafPackage !== undefined && data.cmafPackage !== null) {
                    contents.CmafPackage = deserializeAws_restJson1CmafPackage(data.cmafPackage, context);
                }
                if (data.dashPackage !== undefined && data.dashPackage !== null) {
                    contents.DashPackage = deserializeAws_restJson1DashPackage(data.dashPackage, context);
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.Description = data.description;
                }
                if (data.hlsPackage !== undefined && data.hlsPackage !== null) {
                    contents.HlsPackage = deserializeAws_restJson1HlsPackage(data.hlsPackage, context);
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.Id = data.id;
                }
                if (data.manifestName !== undefined && data.manifestName !== null) {
                    contents.ManifestName = data.manifestName;
                }
                if (data.mssPackage !== undefined && data.mssPackage !== null) {
                    contents.MssPackage = deserializeAws_restJson1MssPackage(data.mssPackage, context);
                }
                if (data.origination !== undefined && data.origination !== null) {
                    contents.Origination = data.origination;
                }
                if (data.startoverWindowSeconds !== undefined && data.startoverWindowSeconds !== null) {
                    contents.StartoverWindowSeconds = data.startoverWindowSeconds;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
                }
                if (data.timeDelaySeconds !== undefined && data.timeDelaySeconds !== null) {
                    contents.TimeDelaySeconds = data.timeDelaySeconds;
                }
                if (data.url !== undefined && data.url !== null) {
                    contents.Url = data.url;
                }
                if (data.whitelist !== undefined && data.whitelist !== null) {
                    contents.Whitelist = deserializeAws_restJson1__listOf__string(data.whitelist, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateOriginEndpointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
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
                if (output.statusCode !== 202 && output.statusCode >= 300) {
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
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteOriginEndpointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteOriginEndpointCommandError(output, context)];
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
var deserializeAws_restJson1DeleteOriginEndpointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
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
                    Description: undefined,
                    EgressAccessLogs: undefined,
                    HlsIngest: undefined,
                    Id: undefined,
                    IngressAccessLogs: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.Description = data.description;
                }
                if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
                    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
                }
                if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
                    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.Id = data.id;
                }
                if (data.ingressAccessLogs !== undefined && data.ingressAccessLogs !== null) {
                    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeChannelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeHarvestJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeHarvestJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    ChannelId: undefined,
                    CreatedAt: undefined,
                    EndTime: undefined,
                    Id: undefined,
                    OriginEndpointId: undefined,
                    S3Destination: undefined,
                    StartTime: undefined,
                    Status: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.channelId !== undefined && data.channelId !== null) {
                    contents.ChannelId = data.channelId;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.CreatedAt = data.createdAt;
                }
                if (data.endTime !== undefined && data.endTime !== null) {
                    contents.EndTime = data.endTime;
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.Id = data.id;
                }
                if (data.originEndpointId !== undefined && data.originEndpointId !== null) {
                    contents.OriginEndpointId = data.originEndpointId;
                }
                if (data.s3Destination !== undefined && data.s3Destination !== null) {
                    contents.S3Destination = deserializeAws_restJson1S3Destination(data.s3Destination, context);
                }
                if (data.startTime !== undefined && data.startTime !== null) {
                    contents.StartTime = data.startTime;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.Status = data.status;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeHarvestJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeOriginEndpointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeOriginEndpointCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    Authorization: undefined,
                    ChannelId: undefined,
                    CmafPackage: undefined,
                    DashPackage: undefined,
                    Description: undefined,
                    HlsPackage: undefined,
                    Id: undefined,
                    ManifestName: undefined,
                    MssPackage: undefined,
                    Origination: undefined,
                    StartoverWindowSeconds: undefined,
                    Tags: undefined,
                    TimeDelaySeconds: undefined,
                    Url: undefined,
                    Whitelist: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.authorization !== undefined && data.authorization !== null) {
                    contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
                }
                if (data.channelId !== undefined && data.channelId !== null) {
                    contents.ChannelId = data.channelId;
                }
                if (data.cmafPackage !== undefined && data.cmafPackage !== null) {
                    contents.CmafPackage = deserializeAws_restJson1CmafPackage(data.cmafPackage, context);
                }
                if (data.dashPackage !== undefined && data.dashPackage !== null) {
                    contents.DashPackage = deserializeAws_restJson1DashPackage(data.dashPackage, context);
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.Description = data.description;
                }
                if (data.hlsPackage !== undefined && data.hlsPackage !== null) {
                    contents.HlsPackage = deserializeAws_restJson1HlsPackage(data.hlsPackage, context);
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.Id = data.id;
                }
                if (data.manifestName !== undefined && data.manifestName !== null) {
                    contents.ManifestName = data.manifestName;
                }
                if (data.mssPackage !== undefined && data.mssPackage !== null) {
                    contents.MssPackage = deserializeAws_restJson1MssPackage(data.mssPackage, context);
                }
                if (data.origination !== undefined && data.origination !== null) {
                    contents.Origination = data.origination;
                }
                if (data.startoverWindowSeconds !== undefined && data.startoverWindowSeconds !== null) {
                    contents.StartoverWindowSeconds = data.startoverWindowSeconds;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
                }
                if (data.timeDelaySeconds !== undefined && data.timeDelaySeconds !== null) {
                    contents.TimeDelaySeconds = data.timeDelaySeconds;
                }
                if (data.url !== undefined && data.url !== null) {
                    contents.Url = data.url;
                }
                if (data.whitelist !== undefined && data.whitelist !== null) {
                    contents.Whitelist = deserializeAws_restJson1__listOf__string(data.whitelist, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeOriginEndpointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
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
                    Channels: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.channels !== undefined && data.channels !== null) {
                    contents.Channels = deserializeAws_restJson1__listOfChannel(data.channels, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListChannelsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListHarvestJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListHarvestJobsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HarvestJobs: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.harvestJobs !== undefined && data.harvestJobs !== null) {
                    contents.HarvestJobs = deserializeAws_restJson1__listOfHarvestJob(data.harvestJobs, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListHarvestJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListOriginEndpointsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListOriginEndpointsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    OriginEndpoints: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                if (data.originEndpoints !== undefined && data.originEndpoints !== null) {
                    contents.OriginEndpoints = deserializeAws_restJson1__listOfOriginEndpoint(data.originEndpoints, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListOriginEndpointsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
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
export var deserializeAws_restJson1RotateChannelCredentialsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RotateChannelCredentialsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    Description: undefined,
                    EgressAccessLogs: undefined,
                    HlsIngest: undefined,
                    Id: undefined,
                    IngressAccessLogs: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.Description = data.description;
                }
                if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
                    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
                }
                if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
                    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.Id = data.id;
                }
                if (data.ingressAccessLogs !== undefined && data.ingressAccessLogs !== null) {
                    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1RotateChannelCredentialsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1RotateIngestEndpointCredentialsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RotateIngestEndpointCredentialsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    Description: undefined,
                    EgressAccessLogs: undefined,
                    HlsIngest: undefined,
                    Id: undefined,
                    IngressAccessLogs: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.Description = data.description;
                }
                if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
                    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
                }
                if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
                    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.Id = data.id;
                }
                if (data.ingressAccessLogs !== undefined && data.ingressAccessLogs !== null) {
                    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1RotateIngestEndpointCredentialsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
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
                    Description: undefined,
                    EgressAccessLogs: undefined,
                    HlsIngest: undefined,
                    Id: undefined,
                    IngressAccessLogs: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.Description = data.description;
                }
                if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
                    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
                }
                if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
                    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.Id = data.id;
                }
                if (data.ingressAccessLogs !== undefined && data.ingressAccessLogs !== null) {
                    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateChannelCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateOriginEndpointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateOriginEndpointCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    Authorization: undefined,
                    ChannelId: undefined,
                    CmafPackage: undefined,
                    DashPackage: undefined,
                    Description: undefined,
                    HlsPackage: undefined,
                    Id: undefined,
                    ManifestName: undefined,
                    MssPackage: undefined,
                    Origination: undefined,
                    StartoverWindowSeconds: undefined,
                    Tags: undefined,
                    TimeDelaySeconds: undefined,
                    Url: undefined,
                    Whitelist: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.authorization !== undefined && data.authorization !== null) {
                    contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
                }
                if (data.channelId !== undefined && data.channelId !== null) {
                    contents.ChannelId = data.channelId;
                }
                if (data.cmafPackage !== undefined && data.cmafPackage !== null) {
                    contents.CmafPackage = deserializeAws_restJson1CmafPackage(data.cmafPackage, context);
                }
                if (data.dashPackage !== undefined && data.dashPackage !== null) {
                    contents.DashPackage = deserializeAws_restJson1DashPackage(data.dashPackage, context);
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.Description = data.description;
                }
                if (data.hlsPackage !== undefined && data.hlsPackage !== null) {
                    contents.HlsPackage = deserializeAws_restJson1HlsPackage(data.hlsPackage, context);
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.Id = data.id;
                }
                if (data.manifestName !== undefined && data.manifestName !== null) {
                    contents.ManifestName = data.manifestName;
                }
                if (data.mssPackage !== undefined && data.mssPackage !== null) {
                    contents.MssPackage = deserializeAws_restJson1MssPackage(data.mssPackage, context);
                }
                if (data.origination !== undefined && data.origination !== null) {
                    contents.Origination = data.origination;
                }
                if (data.startoverWindowSeconds !== undefined && data.startoverWindowSeconds !== null) {
                    contents.StartoverWindowSeconds = data.startoverWindowSeconds;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
                }
                if (data.timeDelaySeconds !== undefined && data.timeDelaySeconds !== null) {
                    contents.TimeDelaySeconds = data.timeDelaySeconds;
                }
                if (data.url !== undefined && data.url !== null) {
                    contents.Url = data.url;
                }
                if (data.whitelist !== undefined && data.whitelist !== null) {
                    contents.Whitelist = deserializeAws_restJson1__listOf__string(data.whitelist, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateOriginEndpointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ForbiddenException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediapackage#ForbiddenException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediapackage#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediapackage#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediapackage#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediapackage#TooManyRequestsException": return [3 /*break*/, 10];
                    case "UnprocessableEntityException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediapackage#UnprocessableEntityException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1ForbiddenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ForbiddenException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InternalServerErrorExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalServerErrorException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1NotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NotFoundException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ServiceUnavailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ServiceUnavailableException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1TooManyRequestsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TooManyRequestsException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1UnprocessableEntityExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "UnprocessableEntityException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1__listOf__PeriodTriggersElement = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1__listOf__string = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1__listOfHlsManifestCreateOrUpdateParameters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1HlsManifestCreateOrUpdateParameters(entry, context);
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
var serializeAws_restJson1AdTriggers = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Authorization = function (input, context) {
    return __assign(__assign({}, (input.CdnIdentifierSecret !== undefined &&
        input.CdnIdentifierSecret !== null && { cdnIdentifierSecret: input.CdnIdentifierSecret })), (input.SecretsRoleArn !== undefined &&
        input.SecretsRoleArn !== null && { secretsRoleArn: input.SecretsRoleArn }));
};
var serializeAws_restJson1CmafEncryption = function (input, context) {
    return __assign(__assign(__assign({}, (input.ConstantInitializationVector !== undefined &&
        input.ConstantInitializationVector !== null && {
        constantInitializationVector: input.ConstantInitializationVector,
    })), (input.KeyRotationIntervalSeconds !== undefined &&
        input.KeyRotationIntervalSeconds !== null && { keyRotationIntervalSeconds: input.KeyRotationIntervalSeconds })), (input.SpekeKeyProvider !== undefined &&
        input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
    }));
};
var serializeAws_restJson1CmafPackageCreateOrUpdateParameters = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Encryption !== undefined &&
        input.Encryption !== null && { encryption: serializeAws_restJson1CmafEncryption(input.Encryption, context) })), (input.HlsManifests !== undefined &&
        input.HlsManifests !== null && {
        hlsManifests: serializeAws_restJson1__listOfHlsManifestCreateOrUpdateParameters(input.HlsManifests, context),
    })), (input.SegmentDurationSeconds !== undefined &&
        input.SegmentDurationSeconds !== null && { segmentDurationSeconds: input.SegmentDurationSeconds })), (input.SegmentPrefix !== undefined && input.SegmentPrefix !== null && { segmentPrefix: input.SegmentPrefix })), (input.StreamSelection !== undefined &&
        input.StreamSelection !== null && {
        streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
    }));
};
var serializeAws_restJson1DashEncryption = function (input, context) {
    return __assign(__assign({}, (input.KeyRotationIntervalSeconds !== undefined &&
        input.KeyRotationIntervalSeconds !== null && { keyRotationIntervalSeconds: input.KeyRotationIntervalSeconds })), (input.SpekeKeyProvider !== undefined &&
        input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
    }));
};
var serializeAws_restJson1DashPackage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdTriggers !== undefined &&
        input.AdTriggers !== null && { adTriggers: serializeAws_restJson1AdTriggers(input.AdTriggers, context) })), (input.AdsOnDeliveryRestrictions !== undefined &&
        input.AdsOnDeliveryRestrictions !== null && { adsOnDeliveryRestrictions: input.AdsOnDeliveryRestrictions })), (input.Encryption !== undefined &&
        input.Encryption !== null && { encryption: serializeAws_restJson1DashEncryption(input.Encryption, context) })), (input.ManifestLayout !== undefined &&
        input.ManifestLayout !== null && { manifestLayout: input.ManifestLayout })), (input.ManifestWindowSeconds !== undefined &&
        input.ManifestWindowSeconds !== null && { manifestWindowSeconds: input.ManifestWindowSeconds })), (input.MinBufferTimeSeconds !== undefined &&
        input.MinBufferTimeSeconds !== null && { minBufferTimeSeconds: input.MinBufferTimeSeconds })), (input.MinUpdatePeriodSeconds !== undefined &&
        input.MinUpdatePeriodSeconds !== null && { minUpdatePeriodSeconds: input.MinUpdatePeriodSeconds })), (input.PeriodTriggers !== undefined &&
        input.PeriodTriggers !== null && {
        periodTriggers: serializeAws_restJson1__listOf__PeriodTriggersElement(input.PeriodTriggers, context),
    })), (input.Profile !== undefined && input.Profile !== null && { profile: input.Profile })), (input.SegmentDurationSeconds !== undefined &&
        input.SegmentDurationSeconds !== null && { segmentDurationSeconds: input.SegmentDurationSeconds })), (input.SegmentTemplateFormat !== undefined &&
        input.SegmentTemplateFormat !== null && { segmentTemplateFormat: input.SegmentTemplateFormat })), (input.StreamSelection !== undefined &&
        input.StreamSelection !== null && {
        streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
    })), (input.SuggestedPresentationDelaySeconds !== undefined &&
        input.SuggestedPresentationDelaySeconds !== null && {
        suggestedPresentationDelaySeconds: input.SuggestedPresentationDelaySeconds,
    })), (input.UtcTiming !== undefined && input.UtcTiming !== null && { utcTiming: input.UtcTiming })), (input.UtcTimingUri !== undefined && input.UtcTimingUri !== null && { utcTimingUri: input.UtcTimingUri }));
};
var serializeAws_restJson1EgressAccessLogs = function (input, context) {
    return __assign({}, (input.LogGroupName !== undefined && input.LogGroupName !== null && { logGroupName: input.LogGroupName }));
};
var serializeAws_restJson1EncryptionContractConfiguration = function (input, context) {
    return __assign(__assign({}, (input.PresetSpeke20Audio !== undefined &&
        input.PresetSpeke20Audio !== null && { presetSpeke20Audio: input.PresetSpeke20Audio })), (input.PresetSpeke20Video !== undefined &&
        input.PresetSpeke20Video !== null && { presetSpeke20Video: input.PresetSpeke20Video }));
};
var serializeAws_restJson1HlsEncryption = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ConstantInitializationVector !== undefined &&
        input.ConstantInitializationVector !== null && {
        constantInitializationVector: input.ConstantInitializationVector,
    })), (input.EncryptionMethod !== undefined &&
        input.EncryptionMethod !== null && { encryptionMethod: input.EncryptionMethod })), (input.KeyRotationIntervalSeconds !== undefined &&
        input.KeyRotationIntervalSeconds !== null && { keyRotationIntervalSeconds: input.KeyRotationIntervalSeconds })), (input.RepeatExtXKey !== undefined && input.RepeatExtXKey !== null && { repeatExtXKey: input.RepeatExtXKey })), (input.SpekeKeyProvider !== undefined &&
        input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
    }));
};
var serializeAws_restJson1HlsManifestCreateOrUpdateParameters = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdMarkers !== undefined && input.AdMarkers !== null && { adMarkers: input.AdMarkers })), (input.AdTriggers !== undefined &&
        input.AdTriggers !== null && { adTriggers: serializeAws_restJson1AdTriggers(input.AdTriggers, context) })), (input.AdsOnDeliveryRestrictions !== undefined &&
        input.AdsOnDeliveryRestrictions !== null && { adsOnDeliveryRestrictions: input.AdsOnDeliveryRestrictions })), (input.Id !== undefined && input.Id !== null && { id: input.Id })), (input.IncludeIframeOnlyStream !== undefined &&
        input.IncludeIframeOnlyStream !== null && { includeIframeOnlyStream: input.IncludeIframeOnlyStream })), (input.ManifestName !== undefined && input.ManifestName !== null && { manifestName: input.ManifestName })), (input.PlaylistType !== undefined && input.PlaylistType !== null && { playlistType: input.PlaylistType })), (input.PlaylistWindowSeconds !== undefined &&
        input.PlaylistWindowSeconds !== null && { playlistWindowSeconds: input.PlaylistWindowSeconds })), (input.ProgramDateTimeIntervalSeconds !== undefined &&
        input.ProgramDateTimeIntervalSeconds !== null && {
        programDateTimeIntervalSeconds: input.ProgramDateTimeIntervalSeconds,
    }));
};
var serializeAws_restJson1HlsPackage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdMarkers !== undefined && input.AdMarkers !== null && { adMarkers: input.AdMarkers })), (input.AdTriggers !== undefined &&
        input.AdTriggers !== null && { adTriggers: serializeAws_restJson1AdTriggers(input.AdTriggers, context) })), (input.AdsOnDeliveryRestrictions !== undefined &&
        input.AdsOnDeliveryRestrictions !== null && { adsOnDeliveryRestrictions: input.AdsOnDeliveryRestrictions })), (input.Encryption !== undefined &&
        input.Encryption !== null && { encryption: serializeAws_restJson1HlsEncryption(input.Encryption, context) })), (input.IncludeIframeOnlyStream !== undefined &&
        input.IncludeIframeOnlyStream !== null && { includeIframeOnlyStream: input.IncludeIframeOnlyStream })), (input.PlaylistType !== undefined && input.PlaylistType !== null && { playlistType: input.PlaylistType })), (input.PlaylistWindowSeconds !== undefined &&
        input.PlaylistWindowSeconds !== null && { playlistWindowSeconds: input.PlaylistWindowSeconds })), (input.ProgramDateTimeIntervalSeconds !== undefined &&
        input.ProgramDateTimeIntervalSeconds !== null && {
        programDateTimeIntervalSeconds: input.ProgramDateTimeIntervalSeconds,
    })), (input.SegmentDurationSeconds !== undefined &&
        input.SegmentDurationSeconds !== null && { segmentDurationSeconds: input.SegmentDurationSeconds })), (input.StreamSelection !== undefined &&
        input.StreamSelection !== null && {
        streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
    })), (input.UseAudioRenditionGroup !== undefined &&
        input.UseAudioRenditionGroup !== null && { useAudioRenditionGroup: input.UseAudioRenditionGroup }));
};
var serializeAws_restJson1IngressAccessLogs = function (input, context) {
    return __assign({}, (input.LogGroupName !== undefined && input.LogGroupName !== null && { logGroupName: input.LogGroupName }));
};
var serializeAws_restJson1MssEncryption = function (input, context) {
    return __assign({}, (input.SpekeKeyProvider !== undefined &&
        input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
    }));
};
var serializeAws_restJson1MssPackage = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Encryption !== undefined &&
        input.Encryption !== null && { encryption: serializeAws_restJson1MssEncryption(input.Encryption, context) })), (input.ManifestWindowSeconds !== undefined &&
        input.ManifestWindowSeconds !== null && { manifestWindowSeconds: input.ManifestWindowSeconds })), (input.SegmentDurationSeconds !== undefined &&
        input.SegmentDurationSeconds !== null && { segmentDurationSeconds: input.SegmentDurationSeconds })), (input.StreamSelection !== undefined &&
        input.StreamSelection !== null && {
        streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
    }));
};
var serializeAws_restJson1S3Destination = function (input, context) {
    return __assign(__assign(__assign({}, (input.BucketName !== undefined && input.BucketName !== null && { bucketName: input.BucketName })), (input.ManifestKey !== undefined && input.ManifestKey !== null && { manifestKey: input.ManifestKey })), (input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn }));
};
var serializeAws_restJson1SpekeKeyProvider = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.CertificateArn !== undefined &&
        input.CertificateArn !== null && { certificateArn: input.CertificateArn })), (input.EncryptionContractConfiguration !== undefined &&
        input.EncryptionContractConfiguration !== null && {
        encryptionContractConfiguration: serializeAws_restJson1EncryptionContractConfiguration(input.EncryptionContractConfiguration, context),
    })), (input.ResourceId !== undefined && input.ResourceId !== null && { resourceId: input.ResourceId })), (input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn })), (input.SystemIds !== undefined &&
        input.SystemIds !== null && { systemIds: serializeAws_restJson1__listOf__string(input.SystemIds, context) })), (input.Url !== undefined && input.Url !== null && { url: input.Url }));
};
var serializeAws_restJson1StreamSelection = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxVideoBitsPerSecond !== undefined &&
        input.MaxVideoBitsPerSecond !== null && { maxVideoBitsPerSecond: input.MaxVideoBitsPerSecond })), (input.MinVideoBitsPerSecond !== undefined &&
        input.MinVideoBitsPerSecond !== null && { minVideoBitsPerSecond: input.MinVideoBitsPerSecond })), (input.StreamOrder !== undefined && input.StreamOrder !== null && { streamOrder: input.StreamOrder }));
};
var serializeAws_restJson1Tags = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1__listOf__PeriodTriggersElement = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1__listOf__string = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
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
var deserializeAws_restJson1__listOfHarvestJob = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HarvestJob(entry, context);
    });
};
var deserializeAws_restJson1__listOfHlsManifest = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HlsManifest(entry, context);
    });
};
var deserializeAws_restJson1__listOfIngestEndpoint = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IngestEndpoint(entry, context);
    });
};
var deserializeAws_restJson1__listOfOriginEndpoint = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1OriginEndpoint(entry, context);
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
var deserializeAws_restJson1AdTriggers = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Authorization = function (output, context) {
    return {
        CdnIdentifierSecret: output.cdnIdentifierSecret !== undefined && output.cdnIdentifierSecret !== null
            ? output.cdnIdentifierSecret
            : undefined,
        SecretsRoleArn: output.secretsRoleArn !== undefined && output.secretsRoleArn !== null ? output.secretsRoleArn : undefined,
    };
};
var deserializeAws_restJson1Channel = function (output, context) {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        EgressAccessLogs: output.egressAccessLogs !== undefined && output.egressAccessLogs !== null
            ? deserializeAws_restJson1EgressAccessLogs(output.egressAccessLogs, context)
            : undefined,
        HlsIngest: output.hlsIngest !== undefined && output.hlsIngest !== null
            ? deserializeAws_restJson1HlsIngest(output.hlsIngest, context)
            : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        IngressAccessLogs: output.ingressAccessLogs !== undefined && output.ingressAccessLogs !== null
            ? deserializeAws_restJson1IngressAccessLogs(output.ingressAccessLogs, context)
            : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1CmafEncryption = function (output, context) {
    return {
        ConstantInitializationVector: output.constantInitializationVector !== undefined && output.constantInitializationVector !== null
            ? output.constantInitializationVector
            : undefined,
        KeyRotationIntervalSeconds: output.keyRotationIntervalSeconds !== undefined && output.keyRotationIntervalSeconds !== null
            ? output.keyRotationIntervalSeconds
            : undefined,
        SpekeKeyProvider: output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
            ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
            : undefined,
    };
};
var deserializeAws_restJson1CmafPackage = function (output, context) {
    return {
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1CmafEncryption(output.encryption, context)
            : undefined,
        HlsManifests: output.hlsManifests !== undefined && output.hlsManifests !== null
            ? deserializeAws_restJson1__listOfHlsManifest(output.hlsManifests, context)
            : undefined,
        SegmentDurationSeconds: output.segmentDurationSeconds !== undefined && output.segmentDurationSeconds !== null
            ? output.segmentDurationSeconds
            : undefined,
        SegmentPrefix: output.segmentPrefix !== undefined && output.segmentPrefix !== null ? output.segmentPrefix : undefined,
        StreamSelection: output.streamSelection !== undefined && output.streamSelection !== null
            ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
            : undefined,
    };
};
var deserializeAws_restJson1DashEncryption = function (output, context) {
    return {
        KeyRotationIntervalSeconds: output.keyRotationIntervalSeconds !== undefined && output.keyRotationIntervalSeconds !== null
            ? output.keyRotationIntervalSeconds
            : undefined,
        SpekeKeyProvider: output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
            ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
            : undefined,
    };
};
var deserializeAws_restJson1DashPackage = function (output, context) {
    return {
        AdTriggers: output.adTriggers !== undefined && output.adTriggers !== null
            ? deserializeAws_restJson1AdTriggers(output.adTriggers, context)
            : undefined,
        AdsOnDeliveryRestrictions: output.adsOnDeliveryRestrictions !== undefined && output.adsOnDeliveryRestrictions !== null
            ? output.adsOnDeliveryRestrictions
            : undefined,
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1DashEncryption(output.encryption, context)
            : undefined,
        ManifestLayout: output.manifestLayout !== undefined && output.manifestLayout !== null ? output.manifestLayout : undefined,
        ManifestWindowSeconds: output.manifestWindowSeconds !== undefined && output.manifestWindowSeconds !== null
            ? output.manifestWindowSeconds
            : undefined,
        MinBufferTimeSeconds: output.minBufferTimeSeconds !== undefined && output.minBufferTimeSeconds !== null
            ? output.minBufferTimeSeconds
            : undefined,
        MinUpdatePeriodSeconds: output.minUpdatePeriodSeconds !== undefined && output.minUpdatePeriodSeconds !== null
            ? output.minUpdatePeriodSeconds
            : undefined,
        PeriodTriggers: output.periodTriggers !== undefined && output.periodTriggers !== null
            ? deserializeAws_restJson1__listOf__PeriodTriggersElement(output.periodTriggers, context)
            : undefined,
        Profile: output.profile !== undefined && output.profile !== null ? output.profile : undefined,
        SegmentDurationSeconds: output.segmentDurationSeconds !== undefined && output.segmentDurationSeconds !== null
            ? output.segmentDurationSeconds
            : undefined,
        SegmentTemplateFormat: output.segmentTemplateFormat !== undefined && output.segmentTemplateFormat !== null
            ? output.segmentTemplateFormat
            : undefined,
        StreamSelection: output.streamSelection !== undefined && output.streamSelection !== null
            ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
            : undefined,
        SuggestedPresentationDelaySeconds: output.suggestedPresentationDelaySeconds !== undefined && output.suggestedPresentationDelaySeconds !== null
            ? output.suggestedPresentationDelaySeconds
            : undefined,
        UtcTiming: output.utcTiming !== undefined && output.utcTiming !== null ? output.utcTiming : undefined,
        UtcTimingUri: output.utcTimingUri !== undefined && output.utcTimingUri !== null ? output.utcTimingUri : undefined,
    };
};
var deserializeAws_restJson1EgressAccessLogs = function (output, context) {
    return {
        LogGroupName: output.logGroupName !== undefined && output.logGroupName !== null ? output.logGroupName : undefined,
    };
};
var deserializeAws_restJson1EncryptionContractConfiguration = function (output, context) {
    return {
        PresetSpeke20Audio: output.presetSpeke20Audio !== undefined && output.presetSpeke20Audio !== null
            ? output.presetSpeke20Audio
            : undefined,
        PresetSpeke20Video: output.presetSpeke20Video !== undefined && output.presetSpeke20Video !== null
            ? output.presetSpeke20Video
            : undefined,
    };
};
var deserializeAws_restJson1HarvestJob = function (output, context) {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        ChannelId: output.channelId !== undefined && output.channelId !== null ? output.channelId : undefined,
        CreatedAt: output.createdAt !== undefined && output.createdAt !== null ? output.createdAt : undefined,
        EndTime: output.endTime !== undefined && output.endTime !== null ? output.endTime : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        OriginEndpointId: output.originEndpointId !== undefined && output.originEndpointId !== null ? output.originEndpointId : undefined,
        S3Destination: output.s3Destination !== undefined && output.s3Destination !== null
            ? deserializeAws_restJson1S3Destination(output.s3Destination, context)
            : undefined,
        StartTime: output.startTime !== undefined && output.startTime !== null ? output.startTime : undefined,
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1HlsEncryption = function (output, context) {
    return {
        ConstantInitializationVector: output.constantInitializationVector !== undefined && output.constantInitializationVector !== null
            ? output.constantInitializationVector
            : undefined,
        EncryptionMethod: output.encryptionMethod !== undefined && output.encryptionMethod !== null ? output.encryptionMethod : undefined,
        KeyRotationIntervalSeconds: output.keyRotationIntervalSeconds !== undefined && output.keyRotationIntervalSeconds !== null
            ? output.keyRotationIntervalSeconds
            : undefined,
        RepeatExtXKey: output.repeatExtXKey !== undefined && output.repeatExtXKey !== null ? output.repeatExtXKey : undefined,
        SpekeKeyProvider: output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
            ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
            : undefined,
    };
};
var deserializeAws_restJson1HlsIngest = function (output, context) {
    return {
        IngestEndpoints: output.ingestEndpoints !== undefined && output.ingestEndpoints !== null
            ? deserializeAws_restJson1__listOfIngestEndpoint(output.ingestEndpoints, context)
            : undefined,
    };
};
var deserializeAws_restJson1HlsManifest = function (output, context) {
    return {
        AdMarkers: output.adMarkers !== undefined && output.adMarkers !== null ? output.adMarkers : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        IncludeIframeOnlyStream: output.includeIframeOnlyStream !== undefined && output.includeIframeOnlyStream !== null
            ? output.includeIframeOnlyStream
            : undefined,
        ManifestName: output.manifestName !== undefined && output.manifestName !== null ? output.manifestName : undefined,
        PlaylistType: output.playlistType !== undefined && output.playlistType !== null ? output.playlistType : undefined,
        PlaylistWindowSeconds: output.playlistWindowSeconds !== undefined && output.playlistWindowSeconds !== null
            ? output.playlistWindowSeconds
            : undefined,
        ProgramDateTimeIntervalSeconds: output.programDateTimeIntervalSeconds !== undefined && output.programDateTimeIntervalSeconds !== null
            ? output.programDateTimeIntervalSeconds
            : undefined,
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
var deserializeAws_restJson1HlsPackage = function (output, context) {
    return {
        AdMarkers: output.adMarkers !== undefined && output.adMarkers !== null ? output.adMarkers : undefined,
        AdTriggers: output.adTriggers !== undefined && output.adTriggers !== null
            ? deserializeAws_restJson1AdTriggers(output.adTriggers, context)
            : undefined,
        AdsOnDeliveryRestrictions: output.adsOnDeliveryRestrictions !== undefined && output.adsOnDeliveryRestrictions !== null
            ? output.adsOnDeliveryRestrictions
            : undefined,
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1HlsEncryption(output.encryption, context)
            : undefined,
        IncludeIframeOnlyStream: output.includeIframeOnlyStream !== undefined && output.includeIframeOnlyStream !== null
            ? output.includeIframeOnlyStream
            : undefined,
        PlaylistType: output.playlistType !== undefined && output.playlistType !== null ? output.playlistType : undefined,
        PlaylistWindowSeconds: output.playlistWindowSeconds !== undefined && output.playlistWindowSeconds !== null
            ? output.playlistWindowSeconds
            : undefined,
        ProgramDateTimeIntervalSeconds: output.programDateTimeIntervalSeconds !== undefined && output.programDateTimeIntervalSeconds !== null
            ? output.programDateTimeIntervalSeconds
            : undefined,
        SegmentDurationSeconds: output.segmentDurationSeconds !== undefined && output.segmentDurationSeconds !== null
            ? output.segmentDurationSeconds
            : undefined,
        StreamSelection: output.streamSelection !== undefined && output.streamSelection !== null
            ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
            : undefined,
        UseAudioRenditionGroup: output.useAudioRenditionGroup !== undefined && output.useAudioRenditionGroup !== null
            ? output.useAudioRenditionGroup
            : undefined,
    };
};
var deserializeAws_restJson1IngestEndpoint = function (output, context) {
    return {
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        Password: output.password !== undefined && output.password !== null ? output.password : undefined,
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
        Username: output.username !== undefined && output.username !== null ? output.username : undefined,
    };
};
var deserializeAws_restJson1IngressAccessLogs = function (output, context) {
    return {
        LogGroupName: output.logGroupName !== undefined && output.logGroupName !== null ? output.logGroupName : undefined,
    };
};
var deserializeAws_restJson1MssEncryption = function (output, context) {
    return {
        SpekeKeyProvider: output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
            ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
            : undefined,
    };
};
var deserializeAws_restJson1MssPackage = function (output, context) {
    return {
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1MssEncryption(output.encryption, context)
            : undefined,
        ManifestWindowSeconds: output.manifestWindowSeconds !== undefined && output.manifestWindowSeconds !== null
            ? output.manifestWindowSeconds
            : undefined,
        SegmentDurationSeconds: output.segmentDurationSeconds !== undefined && output.segmentDurationSeconds !== null
            ? output.segmentDurationSeconds
            : undefined,
        StreamSelection: output.streamSelection !== undefined && output.streamSelection !== null
            ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
            : undefined,
    };
};
var deserializeAws_restJson1OriginEndpoint = function (output, context) {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Authorization: output.authorization !== undefined && output.authorization !== null
            ? deserializeAws_restJson1Authorization(output.authorization, context)
            : undefined,
        ChannelId: output.channelId !== undefined && output.channelId !== null ? output.channelId : undefined,
        CmafPackage: output.cmafPackage !== undefined && output.cmafPackage !== null
            ? deserializeAws_restJson1CmafPackage(output.cmafPackage, context)
            : undefined,
        DashPackage: output.dashPackage !== undefined && output.dashPackage !== null
            ? deserializeAws_restJson1DashPackage(output.dashPackage, context)
            : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        HlsPackage: output.hlsPackage !== undefined && output.hlsPackage !== null
            ? deserializeAws_restJson1HlsPackage(output.hlsPackage, context)
            : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        ManifestName: output.manifestName !== undefined && output.manifestName !== null ? output.manifestName : undefined,
        MssPackage: output.mssPackage !== undefined && output.mssPackage !== null
            ? deserializeAws_restJson1MssPackage(output.mssPackage, context)
            : undefined,
        Origination: output.origination !== undefined && output.origination !== null ? output.origination : undefined,
        StartoverWindowSeconds: output.startoverWindowSeconds !== undefined && output.startoverWindowSeconds !== null
            ? output.startoverWindowSeconds
            : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
        TimeDelaySeconds: output.timeDelaySeconds !== undefined && output.timeDelaySeconds !== null ? output.timeDelaySeconds : undefined,
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
        Whitelist: output.whitelist !== undefined && output.whitelist !== null
            ? deserializeAws_restJson1__listOf__string(output.whitelist, context)
            : undefined,
    };
};
var deserializeAws_restJson1S3Destination = function (output, context) {
    return {
        BucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
        ManifestKey: output.manifestKey !== undefined && output.manifestKey !== null ? output.manifestKey : undefined,
        RoleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    };
};
var deserializeAws_restJson1SpekeKeyProvider = function (output, context) {
    return {
        CertificateArn: output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
        EncryptionContractConfiguration: output.encryptionContractConfiguration !== undefined && output.encryptionContractConfiguration !== null
            ? deserializeAws_restJson1EncryptionContractConfiguration(output.encryptionContractConfiguration, context)
            : undefined,
        ResourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        RoleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        SystemIds: output.systemIds !== undefined && output.systemIds !== null
            ? deserializeAws_restJson1__listOf__string(output.systemIds, context)
            : undefined,
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
var deserializeAws_restJson1StreamSelection = function (output, context) {
    return {
        MaxVideoBitsPerSecond: output.maxVideoBitsPerSecond !== undefined && output.maxVideoBitsPerSecond !== null
            ? output.maxVideoBitsPerSecond
            : undefined,
        MinVideoBitsPerSecond: output.minVideoBitsPerSecond !== undefined && output.minVideoBitsPerSecond !== null
            ? output.minVideoBitsPerSecond
            : undefined,
        StreamOrder: output.streamOrder !== undefined && output.streamOrder !== null ? output.streamOrder : undefined,
    };
};
var deserializeAws_restJson1Tags = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
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