import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CancelJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/jobs/{JobId}";
                if (input.JobId !== undefined) {
                    labelValue = input.JobId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: JobId.");
                    }
                    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: JobId.");
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
export var serializeAws_restJson1CreateDataSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/data-sets";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.AssetType !== undefined && input.AssetType !== null && { AssetType: input.AssetType })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Tags !== undefined &&
                    input.Tags !== null && { Tags: serializeAws_restJson1MapOf__string(input.Tags, context) })));
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
export var serializeAws_restJson1CreateJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/jobs";
                body = JSON.stringify(__assign(__assign({}, (input.Details !== undefined &&
                    input.Details !== null && { Details: serializeAws_restJson1RequestDetails(input.Details, context) })), (input.Type !== undefined && input.Type !== null && { Type: input.Type })));
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
export var serializeAws_restJson1CreateRevisionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/data-sets/{DataSetId}/revisions";
                if (input.DataSetId !== undefined) {
                    labelValue = input.DataSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DataSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DataSetId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.Comment !== undefined && input.Comment !== null && { Comment: input.Comment })), (input.Tags !== undefined &&
                    input.Tags !== null && { Tags: serializeAws_restJson1MapOf__string(input.Tags, context) })));
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
export var serializeAws_restJson1DeleteAssetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}";
                if (input.AssetId !== undefined) {
                    labelValue = input.AssetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: AssetId.");
                    }
                    resolvedPath = resolvedPath.replace("{AssetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: AssetId.");
                }
                if (input.DataSetId !== undefined) {
                    labelValue = input.DataSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DataSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DataSetId.");
                }
                if (input.RevisionId !== undefined) {
                    labelValue = input.RevisionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: RevisionId.");
                    }
                    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: RevisionId.");
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
export var serializeAws_restJson1DeleteDataSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/data-sets/{DataSetId}";
                if (input.DataSetId !== undefined) {
                    labelValue = input.DataSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DataSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DataSetId.");
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
export var serializeAws_restJson1DeleteRevisionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
                if (input.DataSetId !== undefined) {
                    labelValue = input.DataSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DataSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DataSetId.");
                }
                if (input.RevisionId !== undefined) {
                    labelValue = input.RevisionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: RevisionId.");
                    }
                    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: RevisionId.");
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
export var serializeAws_restJson1GetAssetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}";
                if (input.AssetId !== undefined) {
                    labelValue = input.AssetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: AssetId.");
                    }
                    resolvedPath = resolvedPath.replace("{AssetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: AssetId.");
                }
                if (input.DataSetId !== undefined) {
                    labelValue = input.DataSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DataSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DataSetId.");
                }
                if (input.RevisionId !== undefined) {
                    labelValue = input.RevisionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: RevisionId.");
                    }
                    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: RevisionId.");
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
export var serializeAws_restJson1GetDataSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/data-sets/{DataSetId}";
                if (input.DataSetId !== undefined) {
                    labelValue = input.DataSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DataSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DataSetId.");
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
export var serializeAws_restJson1GetJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/jobs/{JobId}";
                if (input.JobId !== undefined) {
                    labelValue = input.JobId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: JobId.");
                    }
                    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: JobId.");
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
export var serializeAws_restJson1GetRevisionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
                if (input.DataSetId !== undefined) {
                    labelValue = input.DataSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DataSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DataSetId.");
                }
                if (input.RevisionId !== undefined) {
                    labelValue = input.RevisionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: RevisionId.");
                    }
                    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: RevisionId.");
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
export var serializeAws_restJson1ListDataSetRevisionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/data-sets/{DataSetId}/revisions";
                if (input.DataSetId !== undefined) {
                    labelValue = input.DataSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DataSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DataSetId.");
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
export var serializeAws_restJson1ListDataSetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/data-sets";
                query = __assign(__assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.Origin !== undefined && { origin: input.Origin }));
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
export var serializeAws_restJson1ListJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/jobs";
                query = __assign(__assign(__assign(__assign({}, (input.DataSetId !== undefined && { dataSetId: input.DataSetId })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.RevisionId !== undefined && { revisionId: input.RevisionId }));
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
export var serializeAws_restJson1ListRevisionAssetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets";
                if (input.DataSetId !== undefined) {
                    labelValue = input.DataSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DataSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DataSetId.");
                }
                if (input.RevisionId !== undefined) {
                    labelValue = input.RevisionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: RevisionId.");
                    }
                    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: RevisionId.");
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
export var serializeAws_restJson1StartJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/jobs/{JobId}";
                if (input.JobId !== undefined) {
                    labelValue = input.JobId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: JobId.");
                    }
                    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: JobId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PATCH",
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
                    input.Tags !== null && { tags: serializeAws_restJson1MapOf__string(input.Tags, context) })));
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
export var serializeAws_restJson1UpdateAssetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}";
                if (input.AssetId !== undefined) {
                    labelValue = input.AssetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: AssetId.");
                    }
                    resolvedPath = resolvedPath.replace("{AssetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: AssetId.");
                }
                if (input.DataSetId !== undefined) {
                    labelValue = input.DataSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DataSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DataSetId.");
                }
                if (input.RevisionId !== undefined) {
                    labelValue = input.RevisionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: RevisionId.");
                    }
                    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: RevisionId.");
                }
                body = JSON.stringify(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateDataSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/data-sets/{DataSetId}";
                if (input.DataSetId !== undefined) {
                    labelValue = input.DataSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DataSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DataSetId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateRevisionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
                if (input.DataSetId !== undefined) {
                    labelValue = input.DataSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DataSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{DataSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DataSetId.");
                }
                if (input.RevisionId !== undefined) {
                    labelValue = input.RevisionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: RevisionId.");
                    }
                    resolvedPath = resolvedPath.replace("{RevisionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: RevisionId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.Comment !== undefined && input.Comment !== null && { Comment: input.Comment })), (input.Finalized !== undefined && input.Finalized !== null && { Finalized: input.Finalized })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1CancelJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CancelJobCommandError(output, context)];
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
var deserializeAws_restJson1CancelJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#ConflictException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateDataSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateDataSetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    AssetType: undefined,
                    CreatedAt: undefined,
                    Description: undefined,
                    Id: undefined,
                    Name: undefined,
                    Origin: undefined,
                    OriginDetails: undefined,
                    SourceId: undefined,
                    Tags: undefined,
                    UpdatedAt: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.AssetType !== undefined && data.AssetType !== null) {
                    contents.AssetType = data.AssetType;
                }
                if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
                    contents.CreatedAt = new Date(data.CreatedAt);
                }
                if (data.Description !== undefined && data.Description !== null) {
                    contents.Description = data.Description;
                }
                if (data.Id !== undefined && data.Id !== null) {
                    contents.Id = data.Id;
                }
                if (data.Name !== undefined && data.Name !== null) {
                    contents.Name = data.Name;
                }
                if (data.Origin !== undefined && data.Origin !== null) {
                    contents.Origin = data.Origin;
                }
                if (data.OriginDetails !== undefined && data.OriginDetails !== null) {
                    contents.OriginDetails = deserializeAws_restJson1OriginDetails(data.OriginDetails, context);
                }
                if (data.SourceId !== undefined && data.SourceId !== null) {
                    contents.SourceId = data.SourceId;
                }
                if (data.Tags !== undefined && data.Tags !== null) {
                    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
                }
                if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
                    contents.UpdatedAt = new Date(data.UpdatedAt);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateDataSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 4];
                    case "ServiceLimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#ServiceLimitExceededException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    CreatedAt: undefined,
                    Details: undefined,
                    Errors: undefined,
                    Id: undefined,
                    State: undefined,
                    Type: undefined,
                    UpdatedAt: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
                    contents.CreatedAt = new Date(data.CreatedAt);
                }
                if (data.Details !== undefined && data.Details !== null) {
                    contents.Details = deserializeAws_restJson1ResponseDetails(data.Details, context);
                }
                if (data.Errors !== undefined && data.Errors !== null) {
                    contents.Errors = deserializeAws_restJson1ListOfJobError(data.Errors, context);
                }
                if (data.Id !== undefined && data.Id !== null) {
                    contents.Id = data.Id;
                }
                if (data.State !== undefined && data.State !== null) {
                    contents.State = data.State;
                }
                if (data.Type !== undefined && data.Type !== null) {
                    contents.Type = data.Type;
                }
                if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
                    contents.UpdatedAt = new Date(data.UpdatedAt);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateRevisionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateRevisionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    Comment: undefined,
                    CreatedAt: undefined,
                    DataSetId: undefined,
                    Finalized: undefined,
                    Id: undefined,
                    SourceId: undefined,
                    Tags: undefined,
                    UpdatedAt: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.Comment !== undefined && data.Comment !== null) {
                    contents.Comment = data.Comment;
                }
                if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
                    contents.CreatedAt = new Date(data.CreatedAt);
                }
                if (data.DataSetId !== undefined && data.DataSetId !== null) {
                    contents.DataSetId = data.DataSetId;
                }
                if (data.Finalized !== undefined && data.Finalized !== null) {
                    contents.Finalized = data.Finalized;
                }
                if (data.Id !== undefined && data.Id !== null) {
                    contents.Id = data.Id;
                }
                if (data.SourceId !== undefined && data.SourceId !== null) {
                    contents.SourceId = data.SourceId;
                }
                if (data.Tags !== undefined && data.Tags !== null) {
                    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
                }
                if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
                    contents.UpdatedAt = new Date(data.UpdatedAt);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateRevisionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteAssetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteAssetCommandError(output, context)];
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
var deserializeAws_restJson1DeleteAssetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteDataSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteDataSetCommandError(output, context)];
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
var deserializeAws_restJson1DeleteDataSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteRevisionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteRevisionCommandError(output, context)];
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
var deserializeAws_restJson1DeleteRevisionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetAssetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetAssetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    AssetDetails: undefined,
                    AssetType: undefined,
                    CreatedAt: undefined,
                    DataSetId: undefined,
                    Id: undefined,
                    Name: undefined,
                    RevisionId: undefined,
                    SourceId: undefined,
                    UpdatedAt: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.AssetDetails !== undefined && data.AssetDetails !== null) {
                    contents.AssetDetails = deserializeAws_restJson1AssetDetails(data.AssetDetails, context);
                }
                if (data.AssetType !== undefined && data.AssetType !== null) {
                    contents.AssetType = data.AssetType;
                }
                if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
                    contents.CreatedAt = new Date(data.CreatedAt);
                }
                if (data.DataSetId !== undefined && data.DataSetId !== null) {
                    contents.DataSetId = data.DataSetId;
                }
                if (data.Id !== undefined && data.Id !== null) {
                    contents.Id = data.Id;
                }
                if (data.Name !== undefined && data.Name !== null) {
                    contents.Name = data.Name;
                }
                if (data.RevisionId !== undefined && data.RevisionId !== null) {
                    contents.RevisionId = data.RevisionId;
                }
                if (data.SourceId !== undefined && data.SourceId !== null) {
                    contents.SourceId = data.SourceId;
                }
                if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
                    contents.UpdatedAt = new Date(data.UpdatedAt);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetAssetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetDataSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetDataSetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    AssetType: undefined,
                    CreatedAt: undefined,
                    Description: undefined,
                    Id: undefined,
                    Name: undefined,
                    Origin: undefined,
                    OriginDetails: undefined,
                    SourceId: undefined,
                    Tags: undefined,
                    UpdatedAt: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.AssetType !== undefined && data.AssetType !== null) {
                    contents.AssetType = data.AssetType;
                }
                if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
                    contents.CreatedAt = new Date(data.CreatedAt);
                }
                if (data.Description !== undefined && data.Description !== null) {
                    contents.Description = data.Description;
                }
                if (data.Id !== undefined && data.Id !== null) {
                    contents.Id = data.Id;
                }
                if (data.Name !== undefined && data.Name !== null) {
                    contents.Name = data.Name;
                }
                if (data.Origin !== undefined && data.Origin !== null) {
                    contents.Origin = data.Origin;
                }
                if (data.OriginDetails !== undefined && data.OriginDetails !== null) {
                    contents.OriginDetails = deserializeAws_restJson1OriginDetails(data.OriginDetails, context);
                }
                if (data.SourceId !== undefined && data.SourceId !== null) {
                    contents.SourceId = data.SourceId;
                }
                if (data.Tags !== undefined && data.Tags !== null) {
                    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
                }
                if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
                    contents.UpdatedAt = new Date(data.UpdatedAt);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetDataSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    CreatedAt: undefined,
                    Details: undefined,
                    Errors: undefined,
                    Id: undefined,
                    State: undefined,
                    Type: undefined,
                    UpdatedAt: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
                    contents.CreatedAt = new Date(data.CreatedAt);
                }
                if (data.Details !== undefined && data.Details !== null) {
                    contents.Details = deserializeAws_restJson1ResponseDetails(data.Details, context);
                }
                if (data.Errors !== undefined && data.Errors !== null) {
                    contents.Errors = deserializeAws_restJson1ListOfJobError(data.Errors, context);
                }
                if (data.Id !== undefined && data.Id !== null) {
                    contents.Id = data.Id;
                }
                if (data.State !== undefined && data.State !== null) {
                    contents.State = data.State;
                }
                if (data.Type !== undefined && data.Type !== null) {
                    contents.Type = data.Type;
                }
                if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
                    contents.UpdatedAt = new Date(data.UpdatedAt);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetRevisionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetRevisionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    Comment: undefined,
                    CreatedAt: undefined,
                    DataSetId: undefined,
                    Finalized: undefined,
                    Id: undefined,
                    SourceId: undefined,
                    Tags: undefined,
                    UpdatedAt: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.Comment !== undefined && data.Comment !== null) {
                    contents.Comment = data.Comment;
                }
                if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
                    contents.CreatedAt = new Date(data.CreatedAt);
                }
                if (data.DataSetId !== undefined && data.DataSetId !== null) {
                    contents.DataSetId = data.DataSetId;
                }
                if (data.Finalized !== undefined && data.Finalized !== null) {
                    contents.Finalized = data.Finalized;
                }
                if (data.Id !== undefined && data.Id !== null) {
                    contents.Id = data.Id;
                }
                if (data.SourceId !== undefined && data.SourceId !== null) {
                    contents.SourceId = data.SourceId;
                }
                if (data.Tags !== undefined && data.Tags !== null) {
                    contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
                }
                if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
                    contents.UpdatedAt = new Date(data.UpdatedAt);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetRevisionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListDataSetRevisionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListDataSetRevisionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    Revisions: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.Revisions !== undefined && data.Revisions !== null) {
                    contents.Revisions = deserializeAws_restJson1ListOfRevisionEntry(data.Revisions, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListDataSetRevisionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListDataSetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListDataSetsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DataSets: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DataSets !== undefined && data.DataSets !== null) {
                    contents.DataSets = deserializeAws_restJson1ListOfDataSetEntry(data.DataSets, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListDataSetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListJobsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Jobs: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Jobs !== undefined && data.Jobs !== null) {
                    contents.Jobs = deserializeAws_restJson1ListOfJobEntry(data.Jobs, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListRevisionAssetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListRevisionAssetsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Assets: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Assets !== undefined && data.Assets !== null) {
                    contents.Assets = deserializeAws_restJson1ListOfAssetEntry(data.Assets, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListRevisionAssetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
                    contents.Tags = deserializeAws_restJson1MapOf__string(data.tags, context);
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
export var deserializeAws_restJson1StartJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartJobCommandError(output, context)];
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
var deserializeAws_restJson1StartJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateAssetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateAssetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    AssetDetails: undefined,
                    AssetType: undefined,
                    CreatedAt: undefined,
                    DataSetId: undefined,
                    Id: undefined,
                    Name: undefined,
                    RevisionId: undefined,
                    SourceId: undefined,
                    UpdatedAt: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.AssetDetails !== undefined && data.AssetDetails !== null) {
                    contents.AssetDetails = deserializeAws_restJson1AssetDetails(data.AssetDetails, context);
                }
                if (data.AssetType !== undefined && data.AssetType !== null) {
                    contents.AssetType = data.AssetType;
                }
                if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
                    contents.CreatedAt = new Date(data.CreatedAt);
                }
                if (data.DataSetId !== undefined && data.DataSetId !== null) {
                    contents.DataSetId = data.DataSetId;
                }
                if (data.Id !== undefined && data.Id !== null) {
                    contents.Id = data.Id;
                }
                if (data.Name !== undefined && data.Name !== null) {
                    contents.Name = data.Name;
                }
                if (data.RevisionId !== undefined && data.RevisionId !== null) {
                    contents.RevisionId = data.RevisionId;
                }
                if (data.SourceId !== undefined && data.SourceId !== null) {
                    contents.SourceId = data.SourceId;
                }
                if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
                    contents.UpdatedAt = new Date(data.UpdatedAt);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateAssetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateDataSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateDataSetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    AssetType: undefined,
                    CreatedAt: undefined,
                    Description: undefined,
                    Id: undefined,
                    Name: undefined,
                    Origin: undefined,
                    OriginDetails: undefined,
                    SourceId: undefined,
                    UpdatedAt: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.AssetType !== undefined && data.AssetType !== null) {
                    contents.AssetType = data.AssetType;
                }
                if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
                    contents.CreatedAt = new Date(data.CreatedAt);
                }
                if (data.Description !== undefined && data.Description !== null) {
                    contents.Description = data.Description;
                }
                if (data.Id !== undefined && data.Id !== null) {
                    contents.Id = data.Id;
                }
                if (data.Name !== undefined && data.Name !== null) {
                    contents.Name = data.Name;
                }
                if (data.Origin !== undefined && data.Origin !== null) {
                    contents.Origin = data.Origin;
                }
                if (data.OriginDetails !== undefined && data.OriginDetails !== null) {
                    contents.OriginDetails = deserializeAws_restJson1OriginDetails(data.OriginDetails, context);
                }
                if (data.SourceId !== undefined && data.SourceId !== null) {
                    contents.SourceId = data.SourceId;
                }
                if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
                    contents.UpdatedAt = new Date(data.UpdatedAt);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateDataSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateRevisionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateRevisionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    Comment: undefined,
                    CreatedAt: undefined,
                    DataSetId: undefined,
                    Finalized: undefined,
                    Id: undefined,
                    SourceId: undefined,
                    UpdatedAt: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.Comment !== undefined && data.Comment !== null) {
                    contents.Comment = data.Comment;
                }
                if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
                    contents.CreatedAt = new Date(data.CreatedAt);
                }
                if (data.DataSetId !== undefined && data.DataSetId !== null) {
                    contents.DataSetId = data.DataSetId;
                }
                if (data.Finalized !== undefined && data.Finalized !== null) {
                    contents.Finalized = data.Finalized;
                }
                if (data.Id !== undefined && data.Id !== null) {
                    contents.Id = data.Id;
                }
                if (data.SourceId !== undefined && data.SourceId !== null) {
                    contents.SourceId = data.SourceId;
                }
                if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
                    contents.UpdatedAt = new Date(data.UpdatedAt);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateRevisionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.dataexchange#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.dataexchange#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.dataexchange#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.dataexchange#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.dataexchange#ThrottlingException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.dataexchange#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1AccessDeniedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "AccessDeniedException",
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
var deserializeAws_restJson1ConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ConflictException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            ResourceId: undefined,
            ResourceType: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.ResourceId !== undefined && data.ResourceId !== null) {
            contents.ResourceId = data.ResourceId;
        }
        if (data.ResourceType !== undefined && data.ResourceType !== null) {
            contents.ResourceType = data.ResourceType;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InternalServerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalServerException",
            $fault: "server",
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
            ResourceId: undefined,
            ResourceType: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.ResourceId !== undefined && data.ResourceId !== null) {
            contents.ResourceId = data.ResourceId;
        }
        if (data.ResourceType !== undefined && data.ResourceType !== null) {
            contents.ResourceType = data.ResourceType;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ServiceLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ServiceLimitExceededException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            LimitName: undefined,
            LimitValue: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.LimitName !== undefined && data.LimitName !== null) {
            contents.LimitName = data.LimitName;
        }
        if (data.LimitValue !== undefined && data.LimitValue !== null) {
            contents.LimitValue = data.LimitValue;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ThrottlingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ThrottlingException",
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
var deserializeAws_restJson1ValidationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ValidationException",
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
var serializeAws_restJson1AssetDestinationEntry = function (input, context) {
    return __assign(__assign(__assign({}, (input.AssetId !== undefined && input.AssetId !== null && { AssetId: input.AssetId })), (input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket })), (input.Key !== undefined && input.Key !== null && { Key: input.Key }));
};
var serializeAws_restJson1AssetSourceEntry = function (input, context) {
    return __assign(__assign({}, (input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket })), (input.Key !== undefined && input.Key !== null && { Key: input.Key }));
};
var serializeAws_restJson1ExportAssetsToS3RequestDetails = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AssetDestinations !== undefined &&
        input.AssetDestinations !== null && {
        AssetDestinations: serializeAws_restJson1ListOfAssetDestinationEntry(input.AssetDestinations, context),
    })), (input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId })), (input.Encryption !== undefined &&
        input.Encryption !== null && {
        Encryption: serializeAws_restJson1ExportServerSideEncryption(input.Encryption, context),
    })), (input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }));
};
var serializeAws_restJson1ExportAssetToSignedUrlRequestDetails = function (input, context) {
    return __assign(__assign(__assign({}, (input.AssetId !== undefined && input.AssetId !== null && { AssetId: input.AssetId })), (input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId })), (input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }));
};
var serializeAws_restJson1ExportRevisionsToS3RequestDetails = function (input, context) {
    return __assign(__assign(__assign({}, (input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId })), (input.Encryption !== undefined &&
        input.Encryption !== null && {
        Encryption: serializeAws_restJson1ExportServerSideEncryption(input.Encryption, context),
    })), (input.RevisionDestinations !== undefined &&
        input.RevisionDestinations !== null && {
        RevisionDestinations: serializeAws_restJson1ListOfRevisionDestinationEntry(input.RevisionDestinations, context),
    }));
};
var serializeAws_restJson1ExportServerSideEncryption = function (input, context) {
    return __assign(__assign({}, (input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_restJson1ImportAssetFromSignedUrlRequestDetails = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AssetName !== undefined && input.AssetName !== null && { AssetName: input.AssetName })), (input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId })), (input.Md5Hash !== undefined && input.Md5Hash !== null && { Md5Hash: input.Md5Hash })), (input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }));
};
var serializeAws_restJson1ImportAssetsFromS3RequestDetails = function (input, context) {
    return __assign(__assign(__assign({}, (input.AssetSources !== undefined &&
        input.AssetSources !== null && {
        AssetSources: serializeAws_restJson1ListOfAssetSourceEntry(input.AssetSources, context),
    })), (input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId })), (input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }));
};
var serializeAws_restJson1ListOfAssetDestinationEntry = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AssetDestinationEntry(entry, context);
    });
};
var serializeAws_restJson1ListOfAssetSourceEntry = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AssetSourceEntry(entry, context);
    });
};
var serializeAws_restJson1ListOfRevisionDestinationEntry = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RevisionDestinationEntry(entry, context);
    });
};
var serializeAws_restJson1MapOf__string = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1RequestDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ExportAssetToSignedUrl !== undefined &&
        input.ExportAssetToSignedUrl !== null && {
        ExportAssetToSignedUrl: serializeAws_restJson1ExportAssetToSignedUrlRequestDetails(input.ExportAssetToSignedUrl, context),
    })), (input.ExportAssetsToS3 !== undefined &&
        input.ExportAssetsToS3 !== null && {
        ExportAssetsToS3: serializeAws_restJson1ExportAssetsToS3RequestDetails(input.ExportAssetsToS3, context),
    })), (input.ExportRevisionsToS3 !== undefined &&
        input.ExportRevisionsToS3 !== null && {
        ExportRevisionsToS3: serializeAws_restJson1ExportRevisionsToS3RequestDetails(input.ExportRevisionsToS3, context),
    })), (input.ImportAssetFromSignedUrl !== undefined &&
        input.ImportAssetFromSignedUrl !== null && {
        ImportAssetFromSignedUrl: serializeAws_restJson1ImportAssetFromSignedUrlRequestDetails(input.ImportAssetFromSignedUrl, context),
    })), (input.ImportAssetsFromS3 !== undefined &&
        input.ImportAssetsFromS3 !== null && {
        ImportAssetsFromS3: serializeAws_restJson1ImportAssetsFromS3RequestDetails(input.ImportAssetsFromS3, context),
    }));
};
var serializeAws_restJson1RevisionDestinationEntry = function (input, context) {
    return __assign(__assign(__assign({}, (input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket })), (input.KeyPattern !== undefined && input.KeyPattern !== null && { KeyPattern: input.KeyPattern })), (input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }));
};
var deserializeAws_restJson1AssetDestinationEntry = function (output, context) {
    return {
        AssetId: output.AssetId !== undefined && output.AssetId !== null ? output.AssetId : undefined,
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    };
};
var deserializeAws_restJson1AssetDetails = function (output, context) {
    return {
        S3SnapshotAsset: output.S3SnapshotAsset !== undefined && output.S3SnapshotAsset !== null
            ? deserializeAws_restJson1S3SnapshotAsset(output.S3SnapshotAsset, context)
            : undefined,
    };
};
var deserializeAws_restJson1AssetEntry = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        AssetDetails: output.AssetDetails !== undefined && output.AssetDetails !== null
            ? deserializeAws_restJson1AssetDetails(output.AssetDetails, context)
            : undefined,
        AssetType: output.AssetType !== undefined && output.AssetType !== null ? output.AssetType : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
        SourceId: output.SourceId !== undefined && output.SourceId !== null ? output.SourceId : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
    };
};
var deserializeAws_restJson1AssetSourceEntry = function (output, context) {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    };
};
var deserializeAws_restJson1DataSetEntry = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        AssetType: output.AssetType !== undefined && output.AssetType !== null ? output.AssetType : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Origin: output.Origin !== undefined && output.Origin !== null ? output.Origin : undefined,
        OriginDetails: output.OriginDetails !== undefined && output.OriginDetails !== null
            ? deserializeAws_restJson1OriginDetails(output.OriginDetails, context)
            : undefined,
        SourceId: output.SourceId !== undefined && output.SourceId !== null ? output.SourceId : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
    };
};
var deserializeAws_restJson1Details = function (output, context) {
    return {
        ImportAssetFromSignedUrlJobErrorDetails: output.ImportAssetFromSignedUrlJobErrorDetails !== undefined &&
            output.ImportAssetFromSignedUrlJobErrorDetails !== null
            ? deserializeAws_restJson1ImportAssetFromSignedUrlJobErrorDetails(output.ImportAssetFromSignedUrlJobErrorDetails, context)
            : undefined,
        ImportAssetsFromS3JobErrorDetails: output.ImportAssetsFromS3JobErrorDetails !== undefined && output.ImportAssetsFromS3JobErrorDetails !== null
            ? deserializeAws_restJson1ListOfAssetSourceEntry(output.ImportAssetsFromS3JobErrorDetails, context)
            : undefined,
    };
};
var deserializeAws_restJson1ExportAssetsToS3ResponseDetails = function (output, context) {
    return {
        AssetDestinations: output.AssetDestinations !== undefined && output.AssetDestinations !== null
            ? deserializeAws_restJson1ListOfAssetDestinationEntry(output.AssetDestinations, context)
            : undefined,
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1ExportServerSideEncryption(output.Encryption, context)
            : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
    };
};
var deserializeAws_restJson1ExportAssetToSignedUrlResponseDetails = function (output, context) {
    return {
        AssetId: output.AssetId !== undefined && output.AssetId !== null ? output.AssetId : undefined,
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
        SignedUrl: output.SignedUrl !== undefined && output.SignedUrl !== null ? output.SignedUrl : undefined,
        SignedUrlExpiresAt: output.SignedUrlExpiresAt !== undefined && output.SignedUrlExpiresAt !== null
            ? new Date(output.SignedUrlExpiresAt)
            : undefined,
    };
};
var deserializeAws_restJson1ExportRevisionsToS3ResponseDetails = function (output, context) {
    return {
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1ExportServerSideEncryption(output.Encryption, context)
            : undefined,
        RevisionDestinations: output.RevisionDestinations !== undefined && output.RevisionDestinations !== null
            ? deserializeAws_restJson1ListOfRevisionDestinationEntry(output.RevisionDestinations, context)
            : undefined,
    };
};
var deserializeAws_restJson1ExportServerSideEncryption = function (output, context) {
    return {
        KmsKeyArn: output.KmsKeyArn !== undefined && output.KmsKeyArn !== null ? output.KmsKeyArn : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1ImportAssetFromSignedUrlJobErrorDetails = function (output, context) {
    return {
        AssetName: output.AssetName !== undefined && output.AssetName !== null ? output.AssetName : undefined,
    };
};
var deserializeAws_restJson1ImportAssetFromSignedUrlResponseDetails = function (output, context) {
    return {
        AssetName: output.AssetName !== undefined && output.AssetName !== null ? output.AssetName : undefined,
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        Md5Hash: output.Md5Hash !== undefined && output.Md5Hash !== null ? output.Md5Hash : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
        SignedUrl: output.SignedUrl !== undefined && output.SignedUrl !== null ? output.SignedUrl : undefined,
        SignedUrlExpiresAt: output.SignedUrlExpiresAt !== undefined && output.SignedUrlExpiresAt !== null
            ? new Date(output.SignedUrlExpiresAt)
            : undefined,
    };
};
var deserializeAws_restJson1ImportAssetsFromS3ResponseDetails = function (output, context) {
    return {
        AssetSources: output.AssetSources !== undefined && output.AssetSources !== null
            ? deserializeAws_restJson1ListOfAssetSourceEntry(output.AssetSources, context)
            : undefined,
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
    };
};
var deserializeAws_restJson1JobEntry = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
        Details: output.Details !== undefined && output.Details !== null
            ? deserializeAws_restJson1ResponseDetails(output.Details, context)
            : undefined,
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_restJson1ListOfJobError(output.Errors, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
    };
};
var deserializeAws_restJson1JobError = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Details: output.Details !== undefined && output.Details !== null
            ? deserializeAws_restJson1Details(output.Details, context)
            : undefined,
        LimitName: output.LimitName !== undefined && output.LimitName !== null ? output.LimitName : undefined,
        LimitValue: output.LimitValue !== undefined && output.LimitValue !== null ? output.LimitValue : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
var deserializeAws_restJson1ListOfAssetDestinationEntry = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetDestinationEntry(entry, context);
    });
};
var deserializeAws_restJson1ListOfAssetEntry = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetEntry(entry, context);
    });
};
var deserializeAws_restJson1ListOfAssetSourceEntry = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetSourceEntry(entry, context);
    });
};
var deserializeAws_restJson1ListOfDataSetEntry = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataSetEntry(entry, context);
    });
};
var deserializeAws_restJson1ListOfJobEntry = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobEntry(entry, context);
    });
};
var deserializeAws_restJson1ListOfJobError = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobError(entry, context);
    });
};
var deserializeAws_restJson1ListOfRevisionDestinationEntry = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RevisionDestinationEntry(entry, context);
    });
};
var deserializeAws_restJson1ListOfRevisionEntry = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RevisionEntry(entry, context);
    });
};
var deserializeAws_restJson1MapOf__string = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1OriginDetails = function (output, context) {
    return {
        ProductId: output.ProductId !== undefined && output.ProductId !== null ? output.ProductId : undefined,
    };
};
var deserializeAws_restJson1ResponseDetails = function (output, context) {
    return {
        ExportAssetToSignedUrl: output.ExportAssetToSignedUrl !== undefined && output.ExportAssetToSignedUrl !== null
            ? deserializeAws_restJson1ExportAssetToSignedUrlResponseDetails(output.ExportAssetToSignedUrl, context)
            : undefined,
        ExportAssetsToS3: output.ExportAssetsToS3 !== undefined && output.ExportAssetsToS3 !== null
            ? deserializeAws_restJson1ExportAssetsToS3ResponseDetails(output.ExportAssetsToS3, context)
            : undefined,
        ExportRevisionsToS3: output.ExportRevisionsToS3 !== undefined && output.ExportRevisionsToS3 !== null
            ? deserializeAws_restJson1ExportRevisionsToS3ResponseDetails(output.ExportRevisionsToS3, context)
            : undefined,
        ImportAssetFromSignedUrl: output.ImportAssetFromSignedUrl !== undefined && output.ImportAssetFromSignedUrl !== null
            ? deserializeAws_restJson1ImportAssetFromSignedUrlResponseDetails(output.ImportAssetFromSignedUrl, context)
            : undefined,
        ImportAssetsFromS3: output.ImportAssetsFromS3 !== undefined && output.ImportAssetsFromS3 !== null
            ? deserializeAws_restJson1ImportAssetsFromS3ResponseDetails(output.ImportAssetsFromS3, context)
            : undefined,
    };
};
var deserializeAws_restJson1RevisionDestinationEntry = function (output, context) {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        KeyPattern: output.KeyPattern !== undefined && output.KeyPattern !== null ? output.KeyPattern : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
    };
};
var deserializeAws_restJson1RevisionEntry = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Comment: output.Comment !== undefined && output.Comment !== null ? output.Comment : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        Finalized: output.Finalized !== undefined && output.Finalized !== null ? output.Finalized : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        SourceId: output.SourceId !== undefined && output.SourceId !== null ? output.SourceId : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
    };
};
var deserializeAws_restJson1S3SnapshotAsset = function (output, context) {
    return {
        Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
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