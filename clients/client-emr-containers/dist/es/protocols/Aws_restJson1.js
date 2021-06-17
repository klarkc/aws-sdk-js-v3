import { __assign, __awaiter, __generator, __read } from "tslib";
import { ContainerInfo, } from "../models/models_0";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_restJson1CancelJobRunCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/virtualclusters/{virtualClusterId}/jobruns/{id}";
                if (input.id !== undefined) {
                    labelValue = input.id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: id.");
                    }
                    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: id.");
                }
                if (input.virtualClusterId !== undefined) {
                    labelValue = input.virtualClusterId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
                    }
                    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: virtualClusterId.");
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
export var serializeAws_restJson1CreateManagedEndpointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/virtualclusters/{virtualClusterId}/endpoints";
                if (input.virtualClusterId !== undefined) {
                    labelValue = input.virtualClusterId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
                    }
                    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: virtualClusterId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.certificateArn !== undefined &&
                    input.certificateArn !== null && { certificateArn: input.certificateArn })), { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.configurationOverrides !== undefined &&
                    input.configurationOverrides !== null && {
                    configurationOverrides: serializeAws_restJson1ConfigurationOverrides(input.configurationOverrides, context),
                })), (input.executionRoleArn !== undefined &&
                    input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.releaseLabel !== undefined && input.releaseLabel !== null && { releaseLabel: input.releaseLabel })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })), (input.type !== undefined && input.type !== null && { type: input.type })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1CreateVirtualClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/virtualclusters";
                body = JSON.stringify(__assign(__assign(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.containerProvider !== undefined &&
                    input.containerProvider !== null && {
                    containerProvider: serializeAws_restJson1ContainerProvider(input.containerProvider, context),
                })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1DeleteManagedEndpointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/virtualclusters/{virtualClusterId}/endpoints/{id}";
                if (input.id !== undefined) {
                    labelValue = input.id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: id.");
                    }
                    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: id.");
                }
                if (input.virtualClusterId !== undefined) {
                    labelValue = input.virtualClusterId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
                    }
                    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: virtualClusterId.");
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
export var serializeAws_restJson1DeleteVirtualClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/virtualclusters/{id}";
                if (input.id !== undefined) {
                    labelValue = input.id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: id.");
                    }
                    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: id.");
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
export var serializeAws_restJson1DescribeJobRunCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/virtualclusters/{virtualClusterId}/jobruns/{id}";
                if (input.id !== undefined) {
                    labelValue = input.id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: id.");
                    }
                    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: id.");
                }
                if (input.virtualClusterId !== undefined) {
                    labelValue = input.virtualClusterId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
                    }
                    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: virtualClusterId.");
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
export var serializeAws_restJson1DescribeManagedEndpointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/virtualclusters/{virtualClusterId}/endpoints/{id}";
                if (input.id !== undefined) {
                    labelValue = input.id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: id.");
                    }
                    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: id.");
                }
                if (input.virtualClusterId !== undefined) {
                    labelValue = input.virtualClusterId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
                    }
                    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: virtualClusterId.");
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
export var serializeAws_restJson1DescribeVirtualClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/virtualclusters/{id}";
                if (input.id !== undefined) {
                    labelValue = input.id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: id.");
                    }
                    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: id.");
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
export var serializeAws_restJson1ListJobRunsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/virtualclusters/{virtualClusterId}/jobruns";
                if (input.virtualClusterId !== undefined) {
                    labelValue = input.virtualClusterId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
                    }
                    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: virtualClusterId.");
                }
                query = __assign(__assign(__assign(__assign(__assign(__assign({}, (input.createdBefore !== undefined && {
                    createdBefore: (input.createdBefore.toISOString().split(".")[0] + "Z").toString(),
                })), (input.createdAfter !== undefined && {
                    createdAfter: (input.createdAfter.toISOString().split(".")[0] + "Z").toString(),
                })), (input.name !== undefined && { name: input.name })), (input.states !== undefined && { states: (input.states || []).map(function (_entry) { return _entry; }) })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nextToken !== undefined && { nextToken: input.nextToken }));
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
export var serializeAws_restJson1ListManagedEndpointsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/virtualclusters/{virtualClusterId}/endpoints";
                if (input.virtualClusterId !== undefined) {
                    labelValue = input.virtualClusterId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
                    }
                    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: virtualClusterId.");
                }
                query = __assign(__assign(__assign(__assign(__assign(__assign({}, (input.createdBefore !== undefined && {
                    createdBefore: (input.createdBefore.toISOString().split(".")[0] + "Z").toString(),
                })), (input.createdAfter !== undefined && {
                    createdAfter: (input.createdAfter.toISOString().split(".")[0] + "Z").toString(),
                })), (input.types !== undefined && { types: (input.types || []).map(function (_entry) { return _entry; }) })), (input.states !== undefined && { states: (input.states || []).map(function (_entry) { return _entry; }) })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nextToken !== undefined && { nextToken: input.nextToken }));
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
                resolvedPath = "/tags/{resourceArn}";
                if (input.resourceArn !== undefined) {
                    labelValue = input.resourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceArn.");
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
export var serializeAws_restJson1ListVirtualClustersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/virtualclusters";
                query = __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.containerProviderId !== undefined && { containerProviderId: input.containerProviderId })), (input.containerProviderType !== undefined && { containerProviderType: input.containerProviderType })), (input.createdAfter !== undefined && {
                    createdAfter: (input.createdAfter.toISOString().split(".")[0] + "Z").toString(),
                })), (input.createdBefore !== undefined && {
                    createdBefore: (input.createdBefore.toISOString().split(".")[0] + "Z").toString(),
                })), (input.states !== undefined && { states: (input.states || []).map(function (_entry) { return _entry; }) })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nextToken !== undefined && { nextToken: input.nextToken }));
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
export var serializeAws_restJson1StartJobRunCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/virtualclusters/{virtualClusterId}/jobruns";
                if (input.virtualClusterId !== undefined) {
                    labelValue = input.virtualClusterId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
                    }
                    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: virtualClusterId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.configurationOverrides !== undefined &&
                    input.configurationOverrides !== null && {
                    configurationOverrides: serializeAws_restJson1ConfigurationOverrides(input.configurationOverrides, context),
                })), (input.executionRoleArn !== undefined &&
                    input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn })), (input.jobDriver !== undefined &&
                    input.jobDriver !== null && { jobDriver: serializeAws_restJson1JobDriver(input.jobDriver, context) })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.releaseLabel !== undefined && input.releaseLabel !== null && { releaseLabel: input.releaseLabel })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/tags/{resourceArn}";
                if (input.resourceArn !== undefined) {
                    labelValue = input.resourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceArn.");
                }
                body = JSON.stringify(__assign({}, (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
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
                resolvedPath = "/tags/{resourceArn}";
                if (input.resourceArn !== undefined) {
                    labelValue = input.resourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceArn.");
                }
                query = __assign({}, (input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map(function (_entry) { return _entry; }) }));
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
export var deserializeAws_restJson1CancelJobRunCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CancelJobRunCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    id: undefined,
                    virtualClusterId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.id !== undefined && data.id !== null) {
                    contents.id = data.id;
                }
                if (data.virtualClusterId !== undefined && data.virtualClusterId !== null) {
                    contents.virtualClusterId = data.virtualClusterId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CancelJobRunCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emrcontainers#InternalServerException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.emrcontainers#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateManagedEndpointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateManagedEndpointCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    id: undefined,
                    name: undefined,
                    virtualClusterId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.id = data.id;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.virtualClusterId !== undefined && data.virtualClusterId !== null) {
                    contents.virtualClusterId = data.virtualClusterId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateManagedEndpointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emrcontainers#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.emrcontainers#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.emrcontainers#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateVirtualClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateVirtualClusterCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    id: undefined,
                    name: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.id = data.id;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateVirtualClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emrcontainers#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.emrcontainers#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.emrcontainers#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteManagedEndpointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteManagedEndpointCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    id: undefined,
                    virtualClusterId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.id !== undefined && data.id !== null) {
                    contents.id = data.id;
                }
                if (data.virtualClusterId !== undefined && data.virtualClusterId !== null) {
                    contents.virtualClusterId = data.virtualClusterId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteManagedEndpointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emrcontainers#InternalServerException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.emrcontainers#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteVirtualClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteVirtualClusterCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    id: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.id !== undefined && data.id !== null) {
                    contents.id = data.id;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteVirtualClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emrcontainers#InternalServerException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.emrcontainers#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeJobRunCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeJobRunCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    jobRun: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.jobRun !== undefined && data.jobRun !== null) {
                    contents.jobRun = deserializeAws_restJson1JobRun(data.jobRun, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeJobRunCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emrcontainers#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.emrcontainers#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.emrcontainers#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeManagedEndpointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeManagedEndpointCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    endpoint: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.endpoint !== undefined && data.endpoint !== null) {
                    contents.endpoint = deserializeAws_restJson1Endpoint(data.endpoint, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeManagedEndpointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emrcontainers#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.emrcontainers#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.emrcontainers#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeVirtualClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeVirtualClusterCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    virtualCluster: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.virtualCluster !== undefined && data.virtualCluster !== null) {
                    contents.virtualCluster = deserializeAws_restJson1VirtualCluster(data.virtualCluster, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeVirtualClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emrcontainers#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.emrcontainers#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.emrcontainers#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListJobRunsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListJobRunsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    jobRuns: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.jobRuns !== undefined && data.jobRuns !== null) {
                    contents.jobRuns = deserializeAws_restJson1JobRuns(data.jobRuns, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListJobRunsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emrcontainers#InternalServerException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.emrcontainers#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListManagedEndpointsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListManagedEndpointsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    endpoints: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.endpoints !== undefined && data.endpoints !== null) {
                    contents.endpoints = deserializeAws_restJson1Endpoints(data.endpoints, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListManagedEndpointsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emrcontainers#InternalServerException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.emrcontainers#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emrcontainers#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.emrcontainers#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.emrcontainers#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListVirtualClustersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListVirtualClustersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    virtualClusters: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.virtualClusters !== undefined && data.virtualClusters !== null) {
                    contents.virtualClusters = deserializeAws_restJson1VirtualClusters(data.virtualClusters, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListVirtualClustersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emrcontainers#InternalServerException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.emrcontainers#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartJobRunCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartJobRunCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    id: undefined,
                    name: undefined,
                    virtualClusterId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.id = data.id;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.virtualClusterId !== undefined && data.virtualClusterId !== null) {
                    contents.virtualClusterId = data.virtualClusterId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StartJobRunCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emrcontainers#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.emrcontainers#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.emrcontainers#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emrcontainers#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.emrcontainers#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.emrcontainers#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.emrcontainers#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.emrcontainers#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.emrcontainers#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1InternalServerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalServerException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
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
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ValidationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ValidationException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1CloudWatchMonitoringConfiguration = function (input, context) {
    return __assign(__assign({}, (input.logGroupName !== undefined && input.logGroupName !== null && { logGroupName: input.logGroupName })), (input.logStreamNamePrefix !== undefined &&
        input.logStreamNamePrefix !== null && { logStreamNamePrefix: input.logStreamNamePrefix }));
};
var serializeAws_restJson1Configuration = function (input, context) {
    return __assign(__assign(__assign({}, (input.classification !== undefined &&
        input.classification !== null && { classification: input.classification })), (input.configurations !== undefined &&
        input.configurations !== null && {
        configurations: serializeAws_restJson1ConfigurationList(input.configurations, context),
    })), (input.properties !== undefined &&
        input.properties !== null && {
        properties: serializeAws_restJson1SensitivePropertiesMap(input.properties, context),
    }));
};
var serializeAws_restJson1ConfigurationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Configuration(entry, context);
    });
};
var serializeAws_restJson1ConfigurationOverrides = function (input, context) {
    return __assign(__assign({}, (input.applicationConfiguration !== undefined &&
        input.applicationConfiguration !== null && {
        applicationConfiguration: serializeAws_restJson1ConfigurationList(input.applicationConfiguration, context),
    })), (input.monitoringConfiguration !== undefined &&
        input.monitoringConfiguration !== null && {
        monitoringConfiguration: serializeAws_restJson1MonitoringConfiguration(input.monitoringConfiguration, context),
    }));
};
var serializeAws_restJson1ContainerInfo = function (input, context) {
    return ContainerInfo.visit(input, {
        eksInfo: function (value) { return ({ eksInfo: serializeAws_restJson1EksInfo(value, context) }); },
        _: function (name, value) { return ({ name: value }); },
    });
};
var serializeAws_restJson1ContainerProvider = function (input, context) {
    return __assign(__assign(__assign({}, (input.id !== undefined && input.id !== null && { id: input.id })), (input.info !== undefined &&
        input.info !== null && { info: serializeAws_restJson1ContainerInfo(input.info, context) })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_restJson1EksInfo = function (input, context) {
    return __assign({}, (input.namespace !== undefined && input.namespace !== null && { namespace: input.namespace }));
};
var serializeAws_restJson1EntryPointArguments = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1JobDriver = function (input, context) {
    return __assign({}, (input.sparkSubmitJobDriver !== undefined &&
        input.sparkSubmitJobDriver !== null && {
        sparkSubmitJobDriver: serializeAws_restJson1SparkSubmitJobDriver(input.sparkSubmitJobDriver, context),
    }));
};
var serializeAws_restJson1MonitoringConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.cloudWatchMonitoringConfiguration !== undefined &&
        input.cloudWatchMonitoringConfiguration !== null && {
        cloudWatchMonitoringConfiguration: serializeAws_restJson1CloudWatchMonitoringConfiguration(input.cloudWatchMonitoringConfiguration, context),
    })), (input.persistentAppUI !== undefined &&
        input.persistentAppUI !== null && { persistentAppUI: input.persistentAppUI })), (input.s3MonitoringConfiguration !== undefined &&
        input.s3MonitoringConfiguration !== null && {
        s3MonitoringConfiguration: serializeAws_restJson1S3MonitoringConfiguration(input.s3MonitoringConfiguration, context),
    }));
};
var serializeAws_restJson1S3MonitoringConfiguration = function (input, context) {
    return __assign({}, (input.logUri !== undefined && input.logUri !== null && { logUri: input.logUri }));
};
var serializeAws_restJson1SensitivePropertiesMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1SparkSubmitJobDriver = function (input, context) {
    return __assign(__assign(__assign({}, (input.entryPoint !== undefined && input.entryPoint !== null && { entryPoint: input.entryPoint })), (input.entryPointArguments !== undefined &&
        input.entryPointArguments !== null && {
        entryPointArguments: serializeAws_restJson1EntryPointArguments(input.entryPointArguments, context),
    })), (input.sparkSubmitParameters !== undefined &&
        input.sparkSubmitParameters !== null && { sparkSubmitParameters: input.sparkSubmitParameters }));
};
var serializeAws_restJson1TagMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1CloudWatchMonitoringConfiguration = function (output, context) {
    return {
        logGroupName: output.logGroupName !== undefined && output.logGroupName !== null ? output.logGroupName : undefined,
        logStreamNamePrefix: output.logStreamNamePrefix !== undefined && output.logStreamNamePrefix !== null
            ? output.logStreamNamePrefix
            : undefined,
    };
};
var deserializeAws_restJson1Configuration = function (output, context) {
    return {
        classification: output.classification !== undefined && output.classification !== null ? output.classification : undefined,
        configurations: output.configurations !== undefined && output.configurations !== null
            ? deserializeAws_restJson1ConfigurationList(output.configurations, context)
            : undefined,
        properties: output.properties !== undefined && output.properties !== null
            ? deserializeAws_restJson1SensitivePropertiesMap(output.properties, context)
            : undefined,
    };
};
var deserializeAws_restJson1ConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Configuration(entry, context);
    });
};
var deserializeAws_restJson1ConfigurationOverrides = function (output, context) {
    return {
        applicationConfiguration: output.applicationConfiguration !== undefined && output.applicationConfiguration !== null
            ? deserializeAws_restJson1ConfigurationList(output.applicationConfiguration, context)
            : undefined,
        monitoringConfiguration: output.monitoringConfiguration !== undefined && output.monitoringConfiguration !== null
            ? deserializeAws_restJson1MonitoringConfiguration(output.monitoringConfiguration, context)
            : undefined,
    };
};
var deserializeAws_restJson1ContainerInfo = function (output, context) {
    if (output.eksInfo !== undefined && output.eksInfo !== null) {
        return {
            eksInfo: deserializeAws_restJson1EksInfo(output.eksInfo, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_restJson1ContainerProvider = function (output, context) {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        info: output.info !== undefined && output.info !== null
            ? deserializeAws_restJson1ContainerInfo(output.info, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1EksInfo = function (output, context) {
    return {
        namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
    };
};
var deserializeAws_restJson1Endpoint = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        certificateArn: output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
        configurationOverrides: output.configurationOverrides !== undefined && output.configurationOverrides !== null
            ? deserializeAws_restJson1ConfigurationOverrides(output.configurationOverrides, context)
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        executionRoleArn: output.executionRoleArn !== undefined && output.executionRoleArn !== null ? output.executionRoleArn : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        releaseLabel: output.releaseLabel !== undefined && output.releaseLabel !== null ? output.releaseLabel : undefined,
        securityGroup: output.securityGroup !== undefined && output.securityGroup !== null ? output.securityGroup : undefined,
        serverUrl: output.serverUrl !== undefined && output.serverUrl !== null ? output.serverUrl : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        subnetIds: output.subnetIds !== undefined && output.subnetIds !== null
            ? deserializeAws_restJson1SubnetIds(output.subnetIds, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        virtualClusterId: output.virtualClusterId !== undefined && output.virtualClusterId !== null ? output.virtualClusterId : undefined,
    };
};
var deserializeAws_restJson1Endpoints = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Endpoint(entry, context);
    });
};
var deserializeAws_restJson1EntryPointArguments = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1JobDriver = function (output, context) {
    return {
        sparkSubmitJobDriver: output.sparkSubmitJobDriver !== undefined && output.sparkSubmitJobDriver !== null
            ? deserializeAws_restJson1SparkSubmitJobDriver(output.sparkSubmitJobDriver, context)
            : undefined,
    };
};
var deserializeAws_restJson1JobRun = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        clientToken: output.clientToken !== undefined && output.clientToken !== null ? output.clientToken : undefined,
        configurationOverrides: output.configurationOverrides !== undefined && output.configurationOverrides !== null
            ? deserializeAws_restJson1ConfigurationOverrides(output.configurationOverrides, context)
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
        executionRoleArn: output.executionRoleArn !== undefined && output.executionRoleArn !== null ? output.executionRoleArn : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        finishedAt: output.finishedAt !== undefined && output.finishedAt !== null
            ? new Date(Math.round(output.finishedAt * 1000))
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        jobDriver: output.jobDriver !== undefined && output.jobDriver !== null
            ? deserializeAws_restJson1JobDriver(output.jobDriver, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        releaseLabel: output.releaseLabel !== undefined && output.releaseLabel !== null ? output.releaseLabel : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        stateDetails: output.stateDetails !== undefined && output.stateDetails !== null ? output.stateDetails : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        virtualClusterId: output.virtualClusterId !== undefined && output.virtualClusterId !== null ? output.virtualClusterId : undefined,
    };
};
var deserializeAws_restJson1JobRuns = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobRun(entry, context);
    });
};
var deserializeAws_restJson1MonitoringConfiguration = function (output, context) {
    return {
        cloudWatchMonitoringConfiguration: output.cloudWatchMonitoringConfiguration !== undefined && output.cloudWatchMonitoringConfiguration !== null
            ? deserializeAws_restJson1CloudWatchMonitoringConfiguration(output.cloudWatchMonitoringConfiguration, context)
            : undefined,
        persistentAppUI: output.persistentAppUI !== undefined && output.persistentAppUI !== null ? output.persistentAppUI : undefined,
        s3MonitoringConfiguration: output.s3MonitoringConfiguration !== undefined && output.s3MonitoringConfiguration !== null
            ? deserializeAws_restJson1S3MonitoringConfiguration(output.s3MonitoringConfiguration, context)
            : undefined,
    };
};
var deserializeAws_restJson1S3MonitoringConfiguration = function (output, context) {
    return {
        logUri: output.logUri !== undefined && output.logUri !== null ? output.logUri : undefined,
    };
};
var deserializeAws_restJson1SensitivePropertiesMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1SparkSubmitJobDriver = function (output, context) {
    return {
        entryPoint: output.entryPoint !== undefined && output.entryPoint !== null ? output.entryPoint : undefined,
        entryPointArguments: output.entryPointArguments !== undefined && output.entryPointArguments !== null
            ? deserializeAws_restJson1EntryPointArguments(output.entryPointArguments, context)
            : undefined,
        sparkSubmitParameters: output.sparkSubmitParameters !== undefined && output.sparkSubmitParameters !== null
            ? output.sparkSubmitParameters
            : undefined,
    };
};
var deserializeAws_restJson1SubnetIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1TagMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1VirtualCluster = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        containerProvider: output.containerProvider !== undefined && output.containerProvider !== null
            ? deserializeAws_restJson1ContainerProvider(output.containerProvider, context)
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1VirtualClusters = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1VirtualCluster(entry, context);
    });
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