import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1AbortMultipartUploadCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                if (input.uploadId !== undefined) {
                    labelValue = input.uploadId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: uploadId.");
                    }
                    resolvedPath = resolvedPath.replace("{uploadId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: uploadId.");
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
export var serializeAws_restJson1AbortVaultLockCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
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
export var serializeAws_restJson1AddTagsToVaultCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/{accountId}/vaults/{vaultName}/tags";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                query = {
                    operation: "add",
                };
                body = JSON.stringify(__assign({}, (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })));
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
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CompleteMultipartUploadCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign(__assign({}, (isSerializableHeaderValue(input.archiveSize) && { "x-amz-archive-size": input.archiveSize })), (isSerializableHeaderValue(input.checksum) && { "x-amz-sha256-tree-hash": input.checksum }));
                resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                if (input.uploadId !== undefined) {
                    labelValue = input.uploadId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: uploadId.");
                    }
                    resolvedPath = resolvedPath.replace("{uploadId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: uploadId.");
                }
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
export var serializeAws_restJson1CompleteVaultLockCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy/{lockId}";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                if (input.lockId !== undefined) {
                    labelValue = input.lockId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: lockId.");
                    }
                    resolvedPath = resolvedPath.replace("{lockId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: lockId.");
                }
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
export var serializeAws_restJson1CreateVaultCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
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
export var serializeAws_restJson1DeleteArchiveCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}/archives/{archiveId}";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                if (input.archiveId !== undefined) {
                    labelValue = input.archiveId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: archiveId.");
                    }
                    resolvedPath = resolvedPath.replace("{archiveId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: archiveId.");
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
export var serializeAws_restJson1DeleteVaultCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
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
export var serializeAws_restJson1DeleteVaultAccessPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}/access-policy";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
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
export var serializeAws_restJson1DeleteVaultNotificationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}/notification-configuration";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
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
export var serializeAws_restJson1DescribeJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}/jobs/{jobId}";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                if (input.jobId !== undefined) {
                    labelValue = input.jobId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: jobId.");
                    }
                    resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: jobId.");
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
export var serializeAws_restJson1DescribeVaultCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
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
export var serializeAws_restJson1GetDataRetrievalPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/policies/data-retrieval";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
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
export var serializeAws_restJson1GetJobOutputCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign({}, (isSerializableHeaderValue(input.range) && { range: input.range }));
                resolvedPath = "/{accountId}/vaults/{vaultName}/jobs/{jobId}/output";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                if (input.jobId !== undefined) {
                    labelValue = input.jobId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: jobId.");
                    }
                    resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: jobId.");
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
export var serializeAws_restJson1GetVaultAccessPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}/access-policy";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
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
export var serializeAws_restJson1GetVaultLockCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
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
export var serializeAws_restJson1GetVaultNotificationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}/notification-configuration";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
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
export var serializeAws_restJson1InitiateJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/{accountId}/vaults/{vaultName}/jobs";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                if (input.jobParameters !== undefined) {
                    body = serializeAws_restJson1JobParameters(input.jobParameters, context);
                }
                if (body === undefined) {
                    body = {};
                }
                body = JSON.stringify(body);
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
export var serializeAws_restJson1InitiateMultipartUploadCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign(__assign({}, (isSerializableHeaderValue(input.archiveDescription) && {
                    "x-amz-archive-description": input.archiveDescription,
                })), (isSerializableHeaderValue(input.partSize) && { "x-amz-part-size": input.partSize }));
                resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
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
export var serializeAws_restJson1InitiateVaultLockCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                if (input.policy !== undefined) {
                    body = serializeAws_restJson1VaultLockPolicy(input.policy, context);
                }
                if (body === undefined) {
                    body = {};
                }
                body = JSON.stringify(body);
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
export var serializeAws_restJson1ListJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}/jobs";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                query = __assign(__assign(__assign(__assign({}, (input.limit !== undefined && { limit: input.limit.toString() })), (input.marker !== undefined && { marker: input.marker })), (input.statuscode !== undefined && { statuscode: input.statuscode })), (input.completed !== undefined && { completed: input.completed }));
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
export var serializeAws_restJson1ListMultipartUploadsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                query = __assign(__assign({}, (input.limit !== undefined && { limit: input.limit.toString() })), (input.marker !== undefined && { marker: input.marker }));
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
export var serializeAws_restJson1ListPartsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                if (input.uploadId !== undefined) {
                    labelValue = input.uploadId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: uploadId.");
                    }
                    resolvedPath = resolvedPath.replace("{uploadId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: uploadId.");
                }
                query = __assign(__assign({}, (input.marker !== undefined && { marker: input.marker })), (input.limit !== undefined && { limit: input.limit.toString() }));
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
export var serializeAws_restJson1ListProvisionedCapacityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/provisioned-capacity";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
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
export var serializeAws_restJson1ListTagsForVaultCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults/{vaultName}/tags";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
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
export var serializeAws_restJson1ListVaultsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/vaults";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                query = __assign(__assign({}, (input.marker !== undefined && { marker: input.marker })), (input.limit !== undefined && { limit: input.limit.toString() }));
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
export var serializeAws_restJson1PurchaseProvisionedCapacityCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/{accountId}/provisioned-capacity";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
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
export var serializeAws_restJson1RemoveTagsFromVaultCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/{accountId}/vaults/{vaultName}/tags";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                query = {
                    operation: "remove",
                };
                body = JSON.stringify(__assign({}, (input.TagKeys !== undefined &&
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
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1SetDataRetrievalPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/{accountId}/policies/data-retrieval";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                body = JSON.stringify(__assign({}, (input.Policy !== undefined &&
                    input.Policy !== null && { Policy: serializeAws_restJson1DataRetrievalPolicy(input.Policy, context) })));
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
export var serializeAws_restJson1SetVaultAccessPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/{accountId}/vaults/{vaultName}/access-policy";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                if (input.policy !== undefined) {
                    body = serializeAws_restJson1VaultAccessPolicy(input.policy, context);
                }
                if (body === undefined) {
                    body = {};
                }
                body = JSON.stringify(body);
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
export var serializeAws_restJson1SetVaultNotificationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/{accountId}/vaults/{vaultName}/notification-configuration";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                if (input.vaultNotificationConfig !== undefined) {
                    body = serializeAws_restJson1VaultNotificationConfig(input.vaultNotificationConfig, context);
                }
                if (body === undefined) {
                    body = {};
                }
                body = JSON.stringify(body);
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
export var serializeAws_restJson1UploadArchiveCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign(__assign({ "content-type": "application/octet-stream" }, (isSerializableHeaderValue(input.archiveDescription) && {
                    "x-amz-archive-description": input.archiveDescription,
                })), (isSerializableHeaderValue(input.checksum) && { "x-amz-sha256-tree-hash": input.checksum }));
                resolvedPath = "/{accountId}/vaults/{vaultName}/archives";
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.body !== undefined) {
                    body = input.body;
                }
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
export var serializeAws_restJson1UploadMultipartPartCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign(__assign({ "content-type": "application/octet-stream" }, (isSerializableHeaderValue(input.checksum) && { "x-amz-sha256-tree-hash": input.checksum })), (isSerializableHeaderValue(input.range) && { "content-range": input.range }));
                resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
                if (input.accountId !== undefined) {
                    labelValue = input.accountId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: accountId.");
                    }
                    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: accountId.");
                }
                if (input.vaultName !== undefined) {
                    labelValue = input.vaultName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: vaultName.");
                    }
                    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: vaultName.");
                }
                if (input.uploadId !== undefined) {
                    labelValue = input.uploadId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: uploadId.");
                    }
                    resolvedPath = resolvedPath.replace("{uploadId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: uploadId.");
                }
                if (input.body !== undefined) {
                    body = input.body;
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
export var deserializeAws_restJson1AbortMultipartUploadCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AbortMultipartUploadCommandError(output, context)];
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
var deserializeAws_restJson1AbortMultipartUploadCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1AbortVaultLockCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AbortVaultLockCommandError(output, context)];
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
var deserializeAws_restJson1AbortVaultLockCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1AddTagsToVaultCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AddTagsToVaultCommandError(output, context)];
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
var deserializeAws_restJson1AddTagsToVaultCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#LimitExceededException": return [3 /*break*/, 4];
                    case "MissingParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CompleteMultipartUploadCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CompleteMultipartUploadCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    archiveId: undefined,
                    checksum: undefined,
                    location: undefined,
                };
                if (output.headers["location"] !== undefined) {
                    contents.location = output.headers["location"];
                }
                if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
                    contents.checksum = output.headers["x-amz-sha256-tree-hash"];
                }
                if (output.headers["x-amz-archive-id"] !== undefined) {
                    contents.archiveId = output.headers["x-amz-archive-id"];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CompleteMultipartUploadCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CompleteVaultLockCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CompleteVaultLockCommandError(output, context)];
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
var deserializeAws_restJson1CompleteVaultLockCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateVaultCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateVaultCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    location: undefined,
                };
                if (output.headers["location"] !== undefined) {
                    contents.location = output.headers["location"];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateVaultCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#LimitExceededException": return [3 /*break*/, 4];
                    case "MissingParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteArchiveCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteArchiveCommandError(output, context)];
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
var deserializeAws_restJson1DeleteArchiveCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteVaultCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteVaultCommandError(output, context)];
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
var deserializeAws_restJson1DeleteVaultCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteVaultAccessPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteVaultAccessPolicyCommandError(output, context)];
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
var deserializeAws_restJson1DeleteVaultAccessPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteVaultNotificationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteVaultNotificationsCommandError(output, context)];
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
var deserializeAws_restJson1DeleteVaultNotificationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Action: undefined,
                    ArchiveId: undefined,
                    ArchiveSHA256TreeHash: undefined,
                    ArchiveSizeInBytes: undefined,
                    Completed: undefined,
                    CompletionDate: undefined,
                    CreationDate: undefined,
                    InventoryRetrievalParameters: undefined,
                    InventorySizeInBytes: undefined,
                    JobDescription: undefined,
                    JobId: undefined,
                    JobOutputPath: undefined,
                    OutputLocation: undefined,
                    RetrievalByteRange: undefined,
                    SHA256TreeHash: undefined,
                    SNSTopic: undefined,
                    SelectParameters: undefined,
                    StatusCode: undefined,
                    StatusMessage: undefined,
                    Tier: undefined,
                    VaultARN: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Action !== undefined && data.Action !== null) {
                    contents.Action = data.Action;
                }
                if (data.ArchiveId !== undefined && data.ArchiveId !== null) {
                    contents.ArchiveId = data.ArchiveId;
                }
                if (data.ArchiveSHA256TreeHash !== undefined && data.ArchiveSHA256TreeHash !== null) {
                    contents.ArchiveSHA256TreeHash = data.ArchiveSHA256TreeHash;
                }
                if (data.ArchiveSizeInBytes !== undefined && data.ArchiveSizeInBytes !== null) {
                    contents.ArchiveSizeInBytes = data.ArchiveSizeInBytes;
                }
                if (data.Completed !== undefined && data.Completed !== null) {
                    contents.Completed = data.Completed;
                }
                if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
                    contents.CompletionDate = data.CompletionDate;
                }
                if (data.CreationDate !== undefined && data.CreationDate !== null) {
                    contents.CreationDate = data.CreationDate;
                }
                if (data.InventoryRetrievalParameters !== undefined && data.InventoryRetrievalParameters !== null) {
                    contents.InventoryRetrievalParameters = deserializeAws_restJson1InventoryRetrievalJobDescription(data.InventoryRetrievalParameters, context);
                }
                if (data.InventorySizeInBytes !== undefined && data.InventorySizeInBytes !== null) {
                    contents.InventorySizeInBytes = data.InventorySizeInBytes;
                }
                if (data.JobDescription !== undefined && data.JobDescription !== null) {
                    contents.JobDescription = data.JobDescription;
                }
                if (data.JobId !== undefined && data.JobId !== null) {
                    contents.JobId = data.JobId;
                }
                if (data.JobOutputPath !== undefined && data.JobOutputPath !== null) {
                    contents.JobOutputPath = data.JobOutputPath;
                }
                if (data.OutputLocation !== undefined && data.OutputLocation !== null) {
                    contents.OutputLocation = deserializeAws_restJson1OutputLocation(data.OutputLocation, context);
                }
                if (data.RetrievalByteRange !== undefined && data.RetrievalByteRange !== null) {
                    contents.RetrievalByteRange = data.RetrievalByteRange;
                }
                if (data.SHA256TreeHash !== undefined && data.SHA256TreeHash !== null) {
                    contents.SHA256TreeHash = data.SHA256TreeHash;
                }
                if (data.SNSTopic !== undefined && data.SNSTopic !== null) {
                    contents.SNSTopic = data.SNSTopic;
                }
                if (data.SelectParameters !== undefined && data.SelectParameters !== null) {
                    contents.SelectParameters = deserializeAws_restJson1SelectParameters(data.SelectParameters, context);
                }
                if (data.StatusCode !== undefined && data.StatusCode !== null) {
                    contents.StatusCode = data.StatusCode;
                }
                if (data.StatusMessage !== undefined && data.StatusMessage !== null) {
                    contents.StatusMessage = data.StatusMessage;
                }
                if (data.Tier !== undefined && data.Tier !== null) {
                    contents.Tier = data.Tier;
                }
                if (data.VaultARN !== undefined && data.VaultARN !== null) {
                    contents.VaultARN = data.VaultARN;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeVaultCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeVaultCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CreationDate: undefined,
                    LastInventoryDate: undefined,
                    NumberOfArchives: undefined,
                    SizeInBytes: undefined,
                    VaultARN: undefined,
                    VaultName: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CreationDate !== undefined && data.CreationDate !== null) {
                    contents.CreationDate = data.CreationDate;
                }
                if (data.LastInventoryDate !== undefined && data.LastInventoryDate !== null) {
                    contents.LastInventoryDate = data.LastInventoryDate;
                }
                if (data.NumberOfArchives !== undefined && data.NumberOfArchives !== null) {
                    contents.NumberOfArchives = data.NumberOfArchives;
                }
                if (data.SizeInBytes !== undefined && data.SizeInBytes !== null) {
                    contents.SizeInBytes = data.SizeInBytes;
                }
                if (data.VaultARN !== undefined && data.VaultARN !== null) {
                    contents.VaultARN = data.VaultARN;
                }
                if (data.VaultName !== undefined && data.VaultName !== null) {
                    contents.VaultName = data.VaultName;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeVaultCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetDataRetrievalPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetDataRetrievalPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Policy: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Policy !== undefined && data.Policy !== null) {
                    contents.Policy = deserializeAws_restJson1DataRetrievalPolicy(data.Policy, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetDataRetrievalPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ServiceUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetJobOutputCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2 /*return*/, deserializeAws_restJson1GetJobOutputCommandError(output, context)];
        }
        contents = {
            $metadata: deserializeMetadata(output),
            acceptRanges: undefined,
            archiveDescription: undefined,
            body: undefined,
            checksum: undefined,
            contentRange: undefined,
            contentType: undefined,
            status: undefined,
        };
        if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
            contents.checksum = output.headers["x-amz-sha256-tree-hash"];
        }
        if (output.headers["content-range"] !== undefined) {
            contents.contentRange = output.headers["content-range"];
        }
        if (output.headers["accept-ranges"] !== undefined) {
            contents.acceptRanges = output.headers["accept-ranges"];
        }
        if (output.headers["content-type"] !== undefined) {
            contents.contentType = output.headers["content-type"];
        }
        if (output.headers["x-amz-archive-description"] !== undefined) {
            contents.archiveDescription = output.headers["x-amz-archive-description"];
        }
        data = output.body;
        contents.body = data;
        return [2 /*return*/, Promise.resolve(contents)];
    });
}); };
var deserializeAws_restJson1GetJobOutputCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetVaultAccessPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetVaultAccessPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    policy: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents.policy = deserializeAws_restJson1VaultAccessPolicy(data, context);
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetVaultAccessPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetVaultLockCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetVaultLockCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CreationDate: undefined,
                    ExpirationDate: undefined,
                    Policy: undefined,
                    State: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CreationDate !== undefined && data.CreationDate !== null) {
                    contents.CreationDate = data.CreationDate;
                }
                if (data.ExpirationDate !== undefined && data.ExpirationDate !== null) {
                    contents.ExpirationDate = data.ExpirationDate;
                }
                if (data.Policy !== undefined && data.Policy !== null) {
                    contents.Policy = data.Policy;
                }
                if (data.State !== undefined && data.State !== null) {
                    contents.State = data.State;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetVaultLockCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetVaultNotificationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetVaultNotificationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    vaultNotificationConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents.vaultNotificationConfig = deserializeAws_restJson1VaultNotificationConfig(data, context);
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetVaultNotificationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1InitiateJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1InitiateJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    jobId: undefined,
                    jobOutputPath: undefined,
                    location: undefined,
                };
                if (output.headers["location"] !== undefined) {
                    contents.location = output.headers["location"];
                }
                if (output.headers["x-amz-job-id"] !== undefined) {
                    contents.jobId = output.headers["x-amz-job-id"];
                }
                if (output.headers["x-amz-job-output-path"] !== undefined) {
                    contents.jobOutputPath = output.headers["x-amz-job-output-path"];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1InitiateJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsufficientCapacityException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InsufficientCapacityException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "MissingParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 6];
                    case "PolicyEnforcedException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#PolicyEnforcedException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InsufficientCapacityExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PolicyEnforcedExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1InitiateMultipartUploadCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1InitiateMultipartUploadCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    location: undefined,
                    uploadId: undefined,
                };
                if (output.headers["location"] !== undefined) {
                    contents.location = output.headers["location"];
                }
                if (output.headers["x-amz-multipart-upload-id"] !== undefined) {
                    contents.uploadId = output.headers["x-amz-multipart-upload-id"];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1InitiateMultipartUploadCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1InitiateVaultLockCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1InitiateVaultLockCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    lockId: undefined,
                };
                if (output.headers["x-amz-lock-id"] !== undefined) {
                    contents.lockId = output.headers["x-amz-lock-id"];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1InitiateVaultLockCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
                    JobList: undefined,
                    Marker: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.JobList !== undefined && data.JobList !== null) {
                    contents.JobList = deserializeAws_restJson1JobList(data.JobList, context);
                }
                if (data.Marker !== undefined && data.Marker !== null) {
                    contents.Marker = data.Marker;
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListMultipartUploadsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListMultipartUploadsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Marker: undefined,
                    UploadsList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Marker !== undefined && data.Marker !== null) {
                    contents.Marker = data.Marker;
                }
                if (data.UploadsList !== undefined && data.UploadsList !== null) {
                    contents.UploadsList = deserializeAws_restJson1UploadsList(data.UploadsList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListMultipartUploadsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListPartsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListPartsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ArchiveDescription: undefined,
                    CreationDate: undefined,
                    Marker: undefined,
                    MultipartUploadId: undefined,
                    PartSizeInBytes: undefined,
                    Parts: undefined,
                    VaultARN: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ArchiveDescription !== undefined && data.ArchiveDescription !== null) {
                    contents.ArchiveDescription = data.ArchiveDescription;
                }
                if (data.CreationDate !== undefined && data.CreationDate !== null) {
                    contents.CreationDate = data.CreationDate;
                }
                if (data.Marker !== undefined && data.Marker !== null) {
                    contents.Marker = data.Marker;
                }
                if (data.MultipartUploadId !== undefined && data.MultipartUploadId !== null) {
                    contents.MultipartUploadId = data.MultipartUploadId;
                }
                if (data.PartSizeInBytes !== undefined && data.PartSizeInBytes !== null) {
                    contents.PartSizeInBytes = data.PartSizeInBytes;
                }
                if (data.Parts !== undefined && data.Parts !== null) {
                    contents.Parts = deserializeAws_restJson1PartList(data.Parts, context);
                }
                if (data.VaultARN !== undefined && data.VaultARN !== null) {
                    contents.VaultARN = data.VaultARN;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListPartsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListProvisionedCapacityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListProvisionedCapacityCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ProvisionedCapacityList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ProvisionedCapacityList !== undefined && data.ProvisionedCapacityList !== null) {
                    contents.ProvisionedCapacityList = deserializeAws_restJson1ProvisionedCapacityList(data.ProvisionedCapacityList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListProvisionedCapacityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ServiceUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListTagsForVaultCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListTagsForVaultCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Tags !== undefined && data.Tags !== null) {
                    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsForVaultCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListVaultsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListVaultsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Marker: undefined,
                    VaultList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Marker !== undefined && data.Marker !== null) {
                    contents.Marker = data.Marker;
                }
                if (data.VaultList !== undefined && data.VaultList !== null) {
                    contents.VaultList = deserializeAws_restJson1VaultList(data.VaultList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListVaultsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PurchaseProvisionedCapacityCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PurchaseProvisionedCapacityCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    capacityId: undefined,
                };
                if (output.headers["x-amz-capacity-id"] !== undefined) {
                    contents.capacityId = output.headers["x-amz-capacity-id"];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PurchaseProvisionedCapacityCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#LimitExceededException": return [3 /*break*/, 4];
                    case "MissingParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RemoveTagsFromVaultCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RemoveTagsFromVaultCommandError(output, context)];
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
var deserializeAws_restJson1RemoveTagsFromVaultCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1SetDataRetrievalPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1SetDataRetrievalPolicyCommandError(output, context)];
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
var deserializeAws_restJson1SetDataRetrievalPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ServiceUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1SetVaultAccessPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1SetVaultAccessPolicyCommandError(output, context)];
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
var deserializeAws_restJson1SetVaultAccessPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1SetVaultNotificationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1SetVaultNotificationsCommandError(output, context)];
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
var deserializeAws_restJson1SetVaultNotificationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UploadArchiveCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UploadArchiveCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    archiveId: undefined,
                    checksum: undefined,
                    location: undefined,
                };
                if (output.headers["location"] !== undefined) {
                    contents.location = output.headers["location"];
                }
                if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
                    contents.checksum = output.headers["x-amz-sha256-tree-hash"];
                }
                if (output.headers["x-amz-archive-id"] !== undefined) {
                    contents.archiveId = output.headers["x-amz-archive-id"];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UploadArchiveCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "RequestTimeoutException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#RequestTimeoutException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UploadMultipartPartCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UploadMultipartPartCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    checksum: undefined,
                };
                if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
                    contents.checksum = output.headers["x-amz-sha256-tree-hash"];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UploadMultipartPartCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.glacier#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "MissingParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.glacier#MissingParameterValueException": return [3 /*break*/, 4];
                    case "RequestTimeoutException": return [3 /*break*/, 6];
                    case "com.amazonaws.glacier#RequestTimeoutException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.glacier#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.glacier#ServiceUnavailableException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1InsufficientCapacityExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InsufficientCapacityException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            code: undefined,
            message: undefined,
            type: undefined,
        };
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = data.code;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InvalidParameterValueExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidParameterValueException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            code: undefined,
            message: undefined,
            type: undefined,
        };
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = data.code;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "LimitExceededException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            code: undefined,
            message: undefined,
            type: undefined,
        };
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = data.code;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1MissingParameterValueExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "MissingParameterValueException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            code: undefined,
            message: undefined,
            type: undefined,
        };
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = data.code;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1PolicyEnforcedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "PolicyEnforcedException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            code: undefined,
            message: undefined,
            type: undefined,
        };
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = data.code;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1RequestTimeoutExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "RequestTimeoutException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            code: undefined,
            message: undefined,
            type: undefined,
        };
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = data.code;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
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
            code: undefined,
            message: undefined,
            type: undefined,
        };
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = data.code;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
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
            code: undefined,
            message: undefined,
            type: undefined,
        };
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = data.code;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        if (data.type !== undefined && data.type !== null) {
            contents.type = data.type;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1AccessControlPolicyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Grant(entry, context);
    });
};
var serializeAws_restJson1CSVInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Comments !== undefined && input.Comments !== null && { Comments: input.Comments })), (input.FieldDelimiter !== undefined &&
        input.FieldDelimiter !== null && { FieldDelimiter: input.FieldDelimiter })), (input.FileHeaderInfo !== undefined &&
        input.FileHeaderInfo !== null && { FileHeaderInfo: input.FileHeaderInfo })), (input.QuoteCharacter !== undefined &&
        input.QuoteCharacter !== null && { QuoteCharacter: input.QuoteCharacter })), (input.QuoteEscapeCharacter !== undefined &&
        input.QuoteEscapeCharacter !== null && { QuoteEscapeCharacter: input.QuoteEscapeCharacter })), (input.RecordDelimiter !== undefined &&
        input.RecordDelimiter !== null && { RecordDelimiter: input.RecordDelimiter }));
};
var serializeAws_restJson1CSVOutput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.FieldDelimiter !== undefined &&
        input.FieldDelimiter !== null && { FieldDelimiter: input.FieldDelimiter })), (input.QuoteCharacter !== undefined &&
        input.QuoteCharacter !== null && { QuoteCharacter: input.QuoteCharacter })), (input.QuoteEscapeCharacter !== undefined &&
        input.QuoteEscapeCharacter !== null && { QuoteEscapeCharacter: input.QuoteEscapeCharacter })), (input.QuoteFields !== undefined && input.QuoteFields !== null && { QuoteFields: input.QuoteFields })), (input.RecordDelimiter !== undefined &&
        input.RecordDelimiter !== null && { RecordDelimiter: input.RecordDelimiter }));
};
var serializeAws_restJson1DataRetrievalPolicy = function (input, context) {
    return __assign({}, (input.Rules !== undefined &&
        input.Rules !== null && { Rules: serializeAws_restJson1DataRetrievalRulesList(input.Rules, context) }));
};
var serializeAws_restJson1DataRetrievalRule = function (input, context) {
    return __assign(__assign({}, (input.BytesPerHour !== undefined && input.BytesPerHour !== null && { BytesPerHour: input.BytesPerHour })), (input.Strategy !== undefined && input.Strategy !== null && { Strategy: input.Strategy }));
};
var serializeAws_restJson1DataRetrievalRulesList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DataRetrievalRule(entry, context);
    });
};
var serializeAws_restJson1Encryption = function (input, context) {
    return __assign(__assign(__assign({}, (input.EncryptionType !== undefined &&
        input.EncryptionType !== null && { EncryptionType: input.EncryptionType })), (input.KMSContext !== undefined && input.KMSContext !== null && { KMSContext: input.KMSContext })), (input.KMSKeyId !== undefined && input.KMSKeyId !== null && { KMSKeyId: input.KMSKeyId }));
};
var serializeAws_restJson1Grant = function (input, context) {
    return __assign(__assign({}, (input.Grantee !== undefined &&
        input.Grantee !== null && { Grantee: serializeAws_restJson1Grantee(input.Grantee, context) })), (input.Permission !== undefined && input.Permission !== null && { Permission: input.Permission }));
};
var serializeAws_restJson1Grantee = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName })), (input.EmailAddress !== undefined && input.EmailAddress !== null && { EmailAddress: input.EmailAddress })), (input.ID !== undefined && input.ID !== null && { ID: input.ID })), (input.Type !== undefined && input.Type !== null && { Type: input.Type })), (input.URI !== undefined && input.URI !== null && { URI: input.URI }));
};
var serializeAws_restJson1hashmap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1InputSerialization = function (input, context) {
    return __assign({}, (input.csv !== undefined && input.csv !== null && { csv: serializeAws_restJson1CSVInput(input.csv, context) }));
};
var serializeAws_restJson1InventoryRetrievalJobInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.EndDate !== undefined && input.EndDate !== null && { EndDate: input.EndDate })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker })), (input.StartDate !== undefined && input.StartDate !== null && { StartDate: input.StartDate }));
};
var serializeAws_restJson1JobParameters = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ArchiveId !== undefined && input.ArchiveId !== null && { ArchiveId: input.ArchiveId })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Format !== undefined && input.Format !== null && { Format: input.Format })), (input.InventoryRetrievalParameters !== undefined &&
        input.InventoryRetrievalParameters !== null && {
        InventoryRetrievalParameters: serializeAws_restJson1InventoryRetrievalJobInput(input.InventoryRetrievalParameters, context),
    })), (input.OutputLocation !== undefined &&
        input.OutputLocation !== null && {
        OutputLocation: serializeAws_restJson1OutputLocation(input.OutputLocation, context),
    })), (input.RetrievalByteRange !== undefined &&
        input.RetrievalByteRange !== null && { RetrievalByteRange: input.RetrievalByteRange })), (input.SNSTopic !== undefined && input.SNSTopic !== null && { SNSTopic: input.SNSTopic })), (input.SelectParameters !== undefined &&
        input.SelectParameters !== null && {
        SelectParameters: serializeAws_restJson1SelectParameters(input.SelectParameters, context),
    })), (input.Tier !== undefined && input.Tier !== null && { Tier: input.Tier })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_restJson1NotificationEventList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1OutputLocation = function (input, context) {
    return __assign({}, (input.S3 !== undefined && input.S3 !== null && { S3: serializeAws_restJson1S3Location(input.S3, context) }));
};
var serializeAws_restJson1OutputSerialization = function (input, context) {
    return __assign({}, (input.csv !== undefined && input.csv !== null && { csv: serializeAws_restJson1CSVOutput(input.csv, context) }));
};
var serializeAws_restJson1S3Location = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccessControlList !== undefined &&
        input.AccessControlList !== null && {
        AccessControlList: serializeAws_restJson1AccessControlPolicyList(input.AccessControlList, context),
    })), (input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName })), (input.CannedACL !== undefined && input.CannedACL !== null && { CannedACL: input.CannedACL })), (input.Encryption !== undefined &&
        input.Encryption !== null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) })), (input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix })), (input.StorageClass !== undefined && input.StorageClass !== null && { StorageClass: input.StorageClass })), (input.Tagging !== undefined &&
        input.Tagging !== null && { Tagging: serializeAws_restJson1hashmap(input.Tagging, context) })), (input.UserMetadata !== undefined &&
        input.UserMetadata !== null && { UserMetadata: serializeAws_restJson1hashmap(input.UserMetadata, context) }));
};
var serializeAws_restJson1SelectParameters = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression })), (input.ExpressionType !== undefined &&
        input.ExpressionType !== null && { ExpressionType: input.ExpressionType })), (input.InputSerialization !== undefined &&
        input.InputSerialization !== null && {
        InputSerialization: serializeAws_restJson1InputSerialization(input.InputSerialization, context),
    })), (input.OutputSerialization !== undefined &&
        input.OutputSerialization !== null && {
        OutputSerialization: serializeAws_restJson1OutputSerialization(input.OutputSerialization, context),
    }));
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
var serializeAws_restJson1VaultAccessPolicy = function (input, context) {
    return __assign({}, (input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }));
};
var serializeAws_restJson1VaultLockPolicy = function (input, context) {
    return __assign({}, (input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }));
};
var serializeAws_restJson1VaultNotificationConfig = function (input, context) {
    return __assign(__assign({}, (input.Events !== undefined &&
        input.Events !== null && { Events: serializeAws_restJson1NotificationEventList(input.Events, context) })), (input.SNSTopic !== undefined && input.SNSTopic !== null && { SNSTopic: input.SNSTopic }));
};
var deserializeAws_restJson1AccessControlPolicyList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Grant(entry, context);
    });
};
var deserializeAws_restJson1CSVInput = function (output, context) {
    return {
        Comments: output.Comments !== undefined && output.Comments !== null ? output.Comments : undefined,
        FieldDelimiter: output.FieldDelimiter !== undefined && output.FieldDelimiter !== null ? output.FieldDelimiter : undefined,
        FileHeaderInfo: output.FileHeaderInfo !== undefined && output.FileHeaderInfo !== null ? output.FileHeaderInfo : undefined,
        QuoteCharacter: output.QuoteCharacter !== undefined && output.QuoteCharacter !== null ? output.QuoteCharacter : undefined,
        QuoteEscapeCharacter: output.QuoteEscapeCharacter !== undefined && output.QuoteEscapeCharacter !== null
            ? output.QuoteEscapeCharacter
            : undefined,
        RecordDelimiter: output.RecordDelimiter !== undefined && output.RecordDelimiter !== null ? output.RecordDelimiter : undefined,
    };
};
var deserializeAws_restJson1CSVOutput = function (output, context) {
    return {
        FieldDelimiter: output.FieldDelimiter !== undefined && output.FieldDelimiter !== null ? output.FieldDelimiter : undefined,
        QuoteCharacter: output.QuoteCharacter !== undefined && output.QuoteCharacter !== null ? output.QuoteCharacter : undefined,
        QuoteEscapeCharacter: output.QuoteEscapeCharacter !== undefined && output.QuoteEscapeCharacter !== null
            ? output.QuoteEscapeCharacter
            : undefined,
        QuoteFields: output.QuoteFields !== undefined && output.QuoteFields !== null ? output.QuoteFields : undefined,
        RecordDelimiter: output.RecordDelimiter !== undefined && output.RecordDelimiter !== null ? output.RecordDelimiter : undefined,
    };
};
var deserializeAws_restJson1DataRetrievalPolicy = function (output, context) {
    return {
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_restJson1DataRetrievalRulesList(output.Rules, context)
            : undefined,
    };
};
var deserializeAws_restJson1DataRetrievalRule = function (output, context) {
    return {
        BytesPerHour: output.BytesPerHour !== undefined && output.BytesPerHour !== null ? output.BytesPerHour : undefined,
        Strategy: output.Strategy !== undefined && output.Strategy !== null ? output.Strategy : undefined,
    };
};
var deserializeAws_restJson1DataRetrievalRulesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataRetrievalRule(entry, context);
    });
};
var deserializeAws_restJson1DescribeVaultOutput = function (output, context) {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        LastInventoryDate: output.LastInventoryDate !== undefined && output.LastInventoryDate !== null
            ? output.LastInventoryDate
            : undefined,
        NumberOfArchives: output.NumberOfArchives !== undefined && output.NumberOfArchives !== null ? output.NumberOfArchives : undefined,
        SizeInBytes: output.SizeInBytes !== undefined && output.SizeInBytes !== null ? output.SizeInBytes : undefined,
        VaultARN: output.VaultARN !== undefined && output.VaultARN !== null ? output.VaultARN : undefined,
        VaultName: output.VaultName !== undefined && output.VaultName !== null ? output.VaultName : undefined,
    };
};
var deserializeAws_restJson1Encryption = function (output, context) {
    return {
        EncryptionType: output.EncryptionType !== undefined && output.EncryptionType !== null ? output.EncryptionType : undefined,
        KMSContext: output.KMSContext !== undefined && output.KMSContext !== null ? output.KMSContext : undefined,
        KMSKeyId: output.KMSKeyId !== undefined && output.KMSKeyId !== null ? output.KMSKeyId : undefined,
    };
};
var deserializeAws_restJson1GlacierJobDescription = function (output, context) {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        ArchiveId: output.ArchiveId !== undefined && output.ArchiveId !== null ? output.ArchiveId : undefined,
        ArchiveSHA256TreeHash: output.ArchiveSHA256TreeHash !== undefined && output.ArchiveSHA256TreeHash !== null
            ? output.ArchiveSHA256TreeHash
            : undefined,
        ArchiveSizeInBytes: output.ArchiveSizeInBytes !== undefined && output.ArchiveSizeInBytes !== null
            ? output.ArchiveSizeInBytes
            : undefined,
        Completed: output.Completed !== undefined && output.Completed !== null ? output.Completed : undefined,
        CompletionDate: output.CompletionDate !== undefined && output.CompletionDate !== null ? output.CompletionDate : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        InventoryRetrievalParameters: output.InventoryRetrievalParameters !== undefined && output.InventoryRetrievalParameters !== null
            ? deserializeAws_restJson1InventoryRetrievalJobDescription(output.InventoryRetrievalParameters, context)
            : undefined,
        InventorySizeInBytes: output.InventorySizeInBytes !== undefined && output.InventorySizeInBytes !== null
            ? output.InventorySizeInBytes
            : undefined,
        JobDescription: output.JobDescription !== undefined && output.JobDescription !== null ? output.JobDescription : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        JobOutputPath: output.JobOutputPath !== undefined && output.JobOutputPath !== null ? output.JobOutputPath : undefined,
        OutputLocation: output.OutputLocation !== undefined && output.OutputLocation !== null
            ? deserializeAws_restJson1OutputLocation(output.OutputLocation, context)
            : undefined,
        RetrievalByteRange: output.RetrievalByteRange !== undefined && output.RetrievalByteRange !== null
            ? output.RetrievalByteRange
            : undefined,
        SHA256TreeHash: output.SHA256TreeHash !== undefined && output.SHA256TreeHash !== null ? output.SHA256TreeHash : undefined,
        SNSTopic: output.SNSTopic !== undefined && output.SNSTopic !== null ? output.SNSTopic : undefined,
        SelectParameters: output.SelectParameters !== undefined && output.SelectParameters !== null
            ? deserializeAws_restJson1SelectParameters(output.SelectParameters, context)
            : undefined,
        StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        Tier: output.Tier !== undefined && output.Tier !== null ? output.Tier : undefined,
        VaultARN: output.VaultARN !== undefined && output.VaultARN !== null ? output.VaultARN : undefined,
    };
};
var deserializeAws_restJson1Grant = function (output, context) {
    return {
        Grantee: output.Grantee !== undefined && output.Grantee !== null
            ? deserializeAws_restJson1Grantee(output.Grantee, context)
            : undefined,
        Permission: output.Permission !== undefined && output.Permission !== null ? output.Permission : undefined,
    };
};
var deserializeAws_restJson1Grantee = function (output, context) {
    return {
        DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
        EmailAddress: output.EmailAddress !== undefined && output.EmailAddress !== null ? output.EmailAddress : undefined,
        ID: output.ID !== undefined && output.ID !== null ? output.ID : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        URI: output.URI !== undefined && output.URI !== null ? output.URI : undefined,
    };
};
var deserializeAws_restJson1hashmap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1InputSerialization = function (output, context) {
    return {
        csv: output.csv !== undefined && output.csv !== null
            ? deserializeAws_restJson1CSVInput(output.csv, context)
            : undefined,
    };
};
var deserializeAws_restJson1InventoryRetrievalJobDescription = function (output, context) {
    return {
        EndDate: output.EndDate !== undefined && output.EndDate !== null ? output.EndDate : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        Limit: output.Limit !== undefined && output.Limit !== null ? output.Limit : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        StartDate: output.StartDate !== undefined && output.StartDate !== null ? output.StartDate : undefined,
    };
};
var deserializeAws_restJson1JobList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GlacierJobDescription(entry, context);
    });
};
var deserializeAws_restJson1NotificationEventList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1OutputLocation = function (output, context) {
    return {
        S3: output.S3 !== undefined && output.S3 !== null
            ? deserializeAws_restJson1S3Location(output.S3, context)
            : undefined,
    };
};
var deserializeAws_restJson1OutputSerialization = function (output, context) {
    return {
        csv: output.csv !== undefined && output.csv !== null
            ? deserializeAws_restJson1CSVOutput(output.csv, context)
            : undefined,
    };
};
var deserializeAws_restJson1PartList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PartListElement(entry, context);
    });
};
var deserializeAws_restJson1PartListElement = function (output, context) {
    return {
        RangeInBytes: output.RangeInBytes !== undefined && output.RangeInBytes !== null ? output.RangeInBytes : undefined,
        SHA256TreeHash: output.SHA256TreeHash !== undefined && output.SHA256TreeHash !== null ? output.SHA256TreeHash : undefined,
    };
};
var deserializeAws_restJson1ProvisionedCapacityDescription = function (output, context) {
    return {
        CapacityId: output.CapacityId !== undefined && output.CapacityId !== null ? output.CapacityId : undefined,
        ExpirationDate: output.ExpirationDate !== undefined && output.ExpirationDate !== null ? output.ExpirationDate : undefined,
        StartDate: output.StartDate !== undefined && output.StartDate !== null ? output.StartDate : undefined,
    };
};
var deserializeAws_restJson1ProvisionedCapacityList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ProvisionedCapacityDescription(entry, context);
    });
};
var deserializeAws_restJson1S3Location = function (output, context) {
    return {
        AccessControlList: output.AccessControlList !== undefined && output.AccessControlList !== null
            ? deserializeAws_restJson1AccessControlPolicyList(output.AccessControlList, context)
            : undefined,
        BucketName: output.BucketName !== undefined && output.BucketName !== null ? output.BucketName : undefined,
        CannedACL: output.CannedACL !== undefined && output.CannedACL !== null ? output.CannedACL : undefined,
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1Encryption(output.Encryption, context)
            : undefined,
        Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
        StorageClass: output.StorageClass !== undefined && output.StorageClass !== null ? output.StorageClass : undefined,
        Tagging: output.Tagging !== undefined && output.Tagging !== null
            ? deserializeAws_restJson1hashmap(output.Tagging, context)
            : undefined,
        UserMetadata: output.UserMetadata !== undefined && output.UserMetadata !== null
            ? deserializeAws_restJson1hashmap(output.UserMetadata, context)
            : undefined,
    };
};
var deserializeAws_restJson1SelectParameters = function (output, context) {
    return {
        Expression: output.Expression !== undefined && output.Expression !== null ? output.Expression : undefined,
        ExpressionType: output.ExpressionType !== undefined && output.ExpressionType !== null ? output.ExpressionType : undefined,
        InputSerialization: output.InputSerialization !== undefined && output.InputSerialization !== null
            ? deserializeAws_restJson1InputSerialization(output.InputSerialization, context)
            : undefined,
        OutputSerialization: output.OutputSerialization !== undefined && output.OutputSerialization !== null
            ? deserializeAws_restJson1OutputSerialization(output.OutputSerialization, context)
            : undefined,
    };
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
var deserializeAws_restJson1UploadListElement = function (output, context) {
    return {
        ArchiveDescription: output.ArchiveDescription !== undefined && output.ArchiveDescription !== null
            ? output.ArchiveDescription
            : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        MultipartUploadId: output.MultipartUploadId !== undefined && output.MultipartUploadId !== null
            ? output.MultipartUploadId
            : undefined,
        PartSizeInBytes: output.PartSizeInBytes !== undefined && output.PartSizeInBytes !== null ? output.PartSizeInBytes : undefined,
        VaultARN: output.VaultARN !== undefined && output.VaultARN !== null ? output.VaultARN : undefined,
    };
};
var deserializeAws_restJson1UploadsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UploadListElement(entry, context);
    });
};
var deserializeAws_restJson1VaultAccessPolicy = function (output, context) {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
    };
};
var deserializeAws_restJson1VaultList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DescribeVaultOutput(entry, context);
    });
};
var deserializeAws_restJson1VaultNotificationConfig = function (output, context) {
    return {
        Events: output.Events !== undefined && output.Events !== null
            ? deserializeAws_restJson1NotificationEventList(output.Events, context)
            : undefined,
        SNSTopic: output.SNSTopic !== undefined && output.SNSTopic !== null ? output.SNSTopic : undefined,
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