import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_restJson1CreateAccessPointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-02-01/access-points";
                body = JSON.stringify(__assign(__assign(__assign(__assign({ ClientToken: (_c = input.ClientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId })), (input.PosixUser !== undefined &&
                    input.PosixUser !== null && { PosixUser: serializeAws_restJson1PosixUser(input.PosixUser, context) })), (input.RootDirectory !== undefined &&
                    input.RootDirectory !== null && {
                    RootDirectory: serializeAws_restJson1RootDirectory(input.RootDirectory, context),
                })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) })));
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
export var serializeAws_restJson1CreateFileSystemCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-02-01/file-systems";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AvailabilityZoneName !== undefined &&
                    input.AvailabilityZoneName !== null && { AvailabilityZoneName: input.AvailabilityZoneName })), (input.Backup !== undefined && input.Backup !== null && { Backup: input.Backup })), { CreationToken: (_c = input.CreationToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.PerformanceMode !== undefined &&
                    input.PerformanceMode !== null && { PerformanceMode: input.PerformanceMode })), (input.ProvisionedThroughputInMibps !== undefined &&
                    input.ProvisionedThroughputInMibps !== null && {
                    ProvisionedThroughputInMibps: input.ProvisionedThroughputInMibps,
                })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) })), (input.ThroughputMode !== undefined &&
                    input.ThroughputMode !== null && { ThroughputMode: input.ThroughputMode })));
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
export var serializeAws_restJson1CreateMountTargetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-02-01/mount-targets";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId })), (input.IpAddress !== undefined && input.IpAddress !== null && { IpAddress: input.IpAddress })), (input.SecurityGroups !== undefined &&
                    input.SecurityGroups !== null && {
                    SecurityGroups: serializeAws_restJson1SecurityGroups(input.SecurityGroups, context),
                })), (input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId })));
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
export var serializeAws_restJson1CreateTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-02-01/create-tags/{FileSystemId}";
                if (input.FileSystemId !== undefined) {
                    labelValue = input.FileSystemId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FileSystemId.");
                    }
                    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FileSystemId.");
                }
                body = JSON.stringify(__assign({}, (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) })));
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
export var serializeAws_restJson1DeleteAccessPointCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-02-01/access-points/{AccessPointId}";
                if (input.AccessPointId !== undefined) {
                    labelValue = input.AccessPointId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: AccessPointId.");
                    }
                    resolvedPath = resolvedPath.replace("{AccessPointId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: AccessPointId.");
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
export var serializeAws_restJson1DeleteFileSystemCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-02-01/file-systems/{FileSystemId}";
                if (input.FileSystemId !== undefined) {
                    labelValue = input.FileSystemId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FileSystemId.");
                    }
                    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FileSystemId.");
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
export var serializeAws_restJson1DeleteFileSystemPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/policy";
                if (input.FileSystemId !== undefined) {
                    labelValue = input.FileSystemId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FileSystemId.");
                    }
                    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FileSystemId.");
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
export var serializeAws_restJson1DeleteMountTargetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-02-01/mount-targets/{MountTargetId}";
                if (input.MountTargetId !== undefined) {
                    labelValue = input.MountTargetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: MountTargetId.");
                    }
                    resolvedPath = resolvedPath.replace("{MountTargetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: MountTargetId.");
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
export var serializeAws_restJson1DeleteTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-02-01/delete-tags/{FileSystemId}";
                if (input.FileSystemId !== undefined) {
                    labelValue = input.FileSystemId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FileSystemId.");
                    }
                    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FileSystemId.");
                }
                body = JSON.stringify(__assign({}, (input.TagKeys !== undefined &&
                    input.TagKeys !== null && { TagKeys: serializeAws_restJson1TagKeys(input.TagKeys, context) })));
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
export var serializeAws_restJson1DescribeAccessPointsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-02-01/access-points";
                query = __assign(__assign(__assign(__assign({}, (input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { NextToken: input.NextToken })), (input.AccessPointId !== undefined && { AccessPointId: input.AccessPointId })), (input.FileSystemId !== undefined && { FileSystemId: input.FileSystemId }));
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
export var serializeAws_restJson1DescribeAccountPreferencesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-02-01/account-preferences";
                body = JSON.stringify(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })));
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
export var serializeAws_restJson1DescribeBackupPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/backup-policy";
                if (input.FileSystemId !== undefined) {
                    labelValue = input.FileSystemId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FileSystemId.");
                    }
                    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FileSystemId.");
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
export var serializeAws_restJson1DescribeFileSystemPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/policy";
                if (input.FileSystemId !== undefined) {
                    labelValue = input.FileSystemId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FileSystemId.");
                    }
                    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FileSystemId.");
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
export var serializeAws_restJson1DescribeFileSystemsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-02-01/file-systems";
                query = __assign(__assign(__assign(__assign({}, (input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() })), (input.Marker !== undefined && { Marker: input.Marker })), (input.CreationToken !== undefined && { CreationToken: input.CreationToken })), (input.FileSystemId !== undefined && { FileSystemId: input.FileSystemId }));
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
export var serializeAws_restJson1DescribeLifecycleConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration";
                if (input.FileSystemId !== undefined) {
                    labelValue = input.FileSystemId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FileSystemId.");
                    }
                    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FileSystemId.");
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
export var serializeAws_restJson1DescribeMountTargetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-02-01/mount-targets";
                query = __assign(__assign(__assign(__assign(__assign({}, (input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() })), (input.Marker !== undefined && { Marker: input.Marker })), (input.FileSystemId !== undefined && { FileSystemId: input.FileSystemId })), (input.MountTargetId !== undefined && { MountTargetId: input.MountTargetId })), (input.AccessPointId !== undefined && { AccessPointId: input.AccessPointId }));
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
export var serializeAws_restJson1DescribeMountTargetSecurityGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-02-01/mount-targets/{MountTargetId}/security-groups";
                if (input.MountTargetId !== undefined) {
                    labelValue = input.MountTargetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: MountTargetId.");
                    }
                    resolvedPath = resolvedPath.replace("{MountTargetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: MountTargetId.");
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
export var serializeAws_restJson1DescribeTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-02-01/tags/{FileSystemId}";
                if (input.FileSystemId !== undefined) {
                    labelValue = input.FileSystemId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FileSystemId.");
                    }
                    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FileSystemId.");
                }
                query = __assign(__assign({}, (input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() })), (input.Marker !== undefined && { Marker: input.Marker }));
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
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-02-01/resource-tags/{ResourceId}";
                if (input.ResourceId !== undefined) {
                    labelValue = input.ResourceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceId.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceId.");
                }
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
export var serializeAws_restJson1ModifyMountTargetSecurityGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-02-01/mount-targets/{MountTargetId}/security-groups";
                if (input.MountTargetId !== undefined) {
                    labelValue = input.MountTargetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: MountTargetId.");
                    }
                    resolvedPath = resolvedPath.replace("{MountTargetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: MountTargetId.");
                }
                body = JSON.stringify(__assign({}, (input.SecurityGroups !== undefined &&
                    input.SecurityGroups !== null && {
                    SecurityGroups: serializeAws_restJson1SecurityGroups(input.SecurityGroups, context),
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
export var serializeAws_restJson1PutAccountPreferencesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-02-01/account-preferences";
                body = JSON.stringify(__assign({}, (input.ResourceIdType !== undefined &&
                    input.ResourceIdType !== null && { ResourceIdType: input.ResourceIdType })));
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
export var serializeAws_restJson1PutBackupPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/backup-policy";
                if (input.FileSystemId !== undefined) {
                    labelValue = input.FileSystemId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FileSystemId.");
                    }
                    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FileSystemId.");
                }
                body = JSON.stringify(__assign({}, (input.BackupPolicy !== undefined &&
                    input.BackupPolicy !== null && { BackupPolicy: serializeAws_restJson1BackupPolicy(input.BackupPolicy, context) })));
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
export var serializeAws_restJson1PutFileSystemPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/policy";
                if (input.FileSystemId !== undefined) {
                    labelValue = input.FileSystemId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FileSystemId.");
                    }
                    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FileSystemId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.BypassPolicyLockoutSafetyCheck !== undefined &&
                    input.BypassPolicyLockoutSafetyCheck !== null && {
                    BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck,
                })), (input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy })));
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
export var serializeAws_restJson1PutLifecycleConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration";
                if (input.FileSystemId !== undefined) {
                    labelValue = input.FileSystemId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FileSystemId.");
                    }
                    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FileSystemId.");
                }
                body = JSON.stringify(__assign({}, (input.LifecyclePolicies !== undefined &&
                    input.LifecyclePolicies !== null && {
                    LifecyclePolicies: serializeAws_restJson1LifecyclePolicies(input.LifecyclePolicies, context),
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
export var serializeAws_restJson1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-02-01/resource-tags/{ResourceId}";
                if (input.ResourceId !== undefined) {
                    labelValue = input.ResourceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceId.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceId.");
                }
                body = JSON.stringify(__assign({}, (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) })));
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
                resolvedPath = "/2015-02-01/resource-tags/{ResourceId}";
                if (input.ResourceId !== undefined) {
                    labelValue = input.ResourceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceId.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceId.");
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
export var serializeAws_restJson1UpdateFileSystemCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-02-01/file-systems/{FileSystemId}";
                if (input.FileSystemId !== undefined) {
                    labelValue = input.FileSystemId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FileSystemId.");
                    }
                    resolvedPath = resolvedPath.replace("{FileSystemId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FileSystemId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.ProvisionedThroughputInMibps !== undefined &&
                    input.ProvisionedThroughputInMibps !== null && {
                    ProvisionedThroughputInMibps: input.ProvisionedThroughputInMibps,
                })), (input.ThroughputMode !== undefined &&
                    input.ThroughputMode !== null && { ThroughputMode: input.ThroughputMode })));
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
export var deserializeAws_restJson1CreateAccessPointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateAccessPointCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AccessPointArn: undefined,
                    AccessPointId: undefined,
                    ClientToken: undefined,
                    FileSystemId: undefined,
                    LifeCycleState: undefined,
                    Name: undefined,
                    OwnerId: undefined,
                    PosixUser: undefined,
                    RootDirectory: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AccessPointArn !== undefined && data.AccessPointArn !== null) {
                    contents.AccessPointArn = data.AccessPointArn;
                }
                if (data.AccessPointId !== undefined && data.AccessPointId !== null) {
                    contents.AccessPointId = data.AccessPointId;
                }
                if (data.ClientToken !== undefined && data.ClientToken !== null) {
                    contents.ClientToken = data.ClientToken;
                }
                if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
                    contents.FileSystemId = data.FileSystemId;
                }
                if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
                    contents.LifeCycleState = data.LifeCycleState;
                }
                if (data.Name !== undefined && data.Name !== null) {
                    contents.Name = data.Name;
                }
                if (data.OwnerId !== undefined && data.OwnerId !== null) {
                    contents.OwnerId = data.OwnerId;
                }
                if (data.PosixUser !== undefined && data.PosixUser !== null) {
                    contents.PosixUser = deserializeAws_restJson1PosixUser(data.PosixUser, context);
                }
                if (data.RootDirectory !== undefined && data.RootDirectory !== null) {
                    contents.RootDirectory = deserializeAws_restJson1RootDirectory(data.RootDirectory, context);
                }
                if (data.Tags !== undefined && data.Tags !== null) {
                    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateAccessPointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessPointAlreadyExists": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#AccessPointAlreadyExists": return [3 /*break*/, 2];
                    case "AccessPointLimitExceeded": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#AccessPointLimitExceeded": return [3 /*break*/, 4];
                    case "BadRequest": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 6];
                    case "FileSystemNotFound": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 8];
                    case "IncorrectFileSystemLifeCycleState": return [3 /*break*/, 10];
                    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState": return [3 /*break*/, 10];
                    case "InternalServerError": return [3 /*break*/, 12];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessPointAlreadyExistsResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessPointLimitExceededResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateFileSystemCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateFileSystemCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AvailabilityZoneId: undefined,
                    AvailabilityZoneName: undefined,
                    CreationTime: undefined,
                    CreationToken: undefined,
                    Encrypted: undefined,
                    FileSystemArn: undefined,
                    FileSystemId: undefined,
                    KmsKeyId: undefined,
                    LifeCycleState: undefined,
                    Name: undefined,
                    NumberOfMountTargets: undefined,
                    OwnerId: undefined,
                    PerformanceMode: undefined,
                    ProvisionedThroughputInMibps: undefined,
                    SizeInBytes: undefined,
                    Tags: undefined,
                    ThroughputMode: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AvailabilityZoneId !== undefined && data.AvailabilityZoneId !== null) {
                    contents.AvailabilityZoneId = data.AvailabilityZoneId;
                }
                if (data.AvailabilityZoneName !== undefined && data.AvailabilityZoneName !== null) {
                    contents.AvailabilityZoneName = data.AvailabilityZoneName;
                }
                if (data.CreationTime !== undefined && data.CreationTime !== null) {
                    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
                }
                if (data.CreationToken !== undefined && data.CreationToken !== null) {
                    contents.CreationToken = data.CreationToken;
                }
                if (data.Encrypted !== undefined && data.Encrypted !== null) {
                    contents.Encrypted = data.Encrypted;
                }
                if (data.FileSystemArn !== undefined && data.FileSystemArn !== null) {
                    contents.FileSystemArn = data.FileSystemArn;
                }
                if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
                    contents.FileSystemId = data.FileSystemId;
                }
                if (data.KmsKeyId !== undefined && data.KmsKeyId !== null) {
                    contents.KmsKeyId = data.KmsKeyId;
                }
                if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
                    contents.LifeCycleState = data.LifeCycleState;
                }
                if (data.Name !== undefined && data.Name !== null) {
                    contents.Name = data.Name;
                }
                if (data.NumberOfMountTargets !== undefined && data.NumberOfMountTargets !== null) {
                    contents.NumberOfMountTargets = data.NumberOfMountTargets;
                }
                if (data.OwnerId !== undefined && data.OwnerId !== null) {
                    contents.OwnerId = data.OwnerId;
                }
                if (data.PerformanceMode !== undefined && data.PerformanceMode !== null) {
                    contents.PerformanceMode = data.PerformanceMode;
                }
                if (data.ProvisionedThroughputInMibps !== undefined && data.ProvisionedThroughputInMibps !== null) {
                    contents.ProvisionedThroughputInMibps = data.ProvisionedThroughputInMibps;
                }
                if (data.SizeInBytes !== undefined && data.SizeInBytes !== null) {
                    contents.SizeInBytes = deserializeAws_restJson1FileSystemSize(data.SizeInBytes, context);
                }
                if (data.Tags !== undefined && data.Tags !== null) {
                    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
                }
                if (data.ThroughputMode !== undefined && data.ThroughputMode !== null) {
                    contents.ThroughputMode = data.ThroughputMode;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateFileSystemCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemAlreadyExists": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#FileSystemAlreadyExists": return [3 /*break*/, 4];
                    case "FileSystemLimitExceeded": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#FileSystemLimitExceeded": return [3 /*break*/, 6];
                    case "InsufficientThroughputCapacity": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#InsufficientThroughputCapacity": return [3 /*break*/, 8];
                    case "InternalServerError": return [3 /*break*/, 10];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 10];
                    case "ThroughputLimitExceeded": return [3 /*break*/, 12];
                    case "com.amazonaws.efs#ThroughputLimitExceeded": return [3 /*break*/, 12];
                    case "UnsupportedAvailabilityZone": return [3 /*break*/, 14];
                    case "com.amazonaws.efs#UnsupportedAvailabilityZone": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemAlreadyExistsResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemLimitExceededResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InsufficientThroughputCapacityResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThroughputLimitExceededResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnsupportedAvailabilityZoneResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateMountTargetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateMountTargetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AvailabilityZoneId: undefined,
                    AvailabilityZoneName: undefined,
                    FileSystemId: undefined,
                    IpAddress: undefined,
                    LifeCycleState: undefined,
                    MountTargetId: undefined,
                    NetworkInterfaceId: undefined,
                    OwnerId: undefined,
                    SubnetId: undefined,
                    VpcId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AvailabilityZoneId !== undefined && data.AvailabilityZoneId !== null) {
                    contents.AvailabilityZoneId = data.AvailabilityZoneId;
                }
                if (data.AvailabilityZoneName !== undefined && data.AvailabilityZoneName !== null) {
                    contents.AvailabilityZoneName = data.AvailabilityZoneName;
                }
                if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
                    contents.FileSystemId = data.FileSystemId;
                }
                if (data.IpAddress !== undefined && data.IpAddress !== null) {
                    contents.IpAddress = data.IpAddress;
                }
                if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
                    contents.LifeCycleState = data.LifeCycleState;
                }
                if (data.MountTargetId !== undefined && data.MountTargetId !== null) {
                    contents.MountTargetId = data.MountTargetId;
                }
                if (data.NetworkInterfaceId !== undefined && data.NetworkInterfaceId !== null) {
                    contents.NetworkInterfaceId = data.NetworkInterfaceId;
                }
                if (data.OwnerId !== undefined && data.OwnerId !== null) {
                    contents.OwnerId = data.OwnerId;
                }
                if (data.SubnetId !== undefined && data.SubnetId !== null) {
                    contents.SubnetId = data.SubnetId;
                }
                if (data.VpcId !== undefined && data.VpcId !== null) {
                    contents.VpcId = data.VpcId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateMountTargetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, parsedBody, message;
    var _r;
    return __generator(this, function (_s) {
        switch (_s.label) {
            case 0:
                _a = [__assign({}, output)];
                _r = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_r.body = _s.sent(), _r)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AvailabilityZonesMismatch": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#AvailabilityZonesMismatch": return [3 /*break*/, 2];
                    case "BadRequest": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 4];
                    case "FileSystemNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 6];
                    case "IncorrectFileSystemLifeCycleState": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState": return [3 /*break*/, 8];
                    case "InternalServerError": return [3 /*break*/, 10];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 10];
                    case "IpAddressInUse": return [3 /*break*/, 12];
                    case "com.amazonaws.efs#IpAddressInUse": return [3 /*break*/, 12];
                    case "MountTargetConflict": return [3 /*break*/, 14];
                    case "com.amazonaws.efs#MountTargetConflict": return [3 /*break*/, 14];
                    case "NetworkInterfaceLimitExceeded": return [3 /*break*/, 16];
                    case "com.amazonaws.efs#NetworkInterfaceLimitExceeded": return [3 /*break*/, 16];
                    case "NoFreeAddressesInSubnet": return [3 /*break*/, 18];
                    case "com.amazonaws.efs#NoFreeAddressesInSubnet": return [3 /*break*/, 18];
                    case "SecurityGroupLimitExceeded": return [3 /*break*/, 20];
                    case "com.amazonaws.efs#SecurityGroupLimitExceeded": return [3 /*break*/, 20];
                    case "SecurityGroupNotFound": return [3 /*break*/, 22];
                    case "com.amazonaws.efs#SecurityGroupNotFound": return [3 /*break*/, 22];
                    case "SubnetNotFound": return [3 /*break*/, 24];
                    case "com.amazonaws.efs#SubnetNotFound": return [3 /*break*/, 24];
                    case "UnsupportedAvailabilityZone": return [3 /*break*/, 26];
                    case "com.amazonaws.efs#UnsupportedAvailabilityZone": return [3 /*break*/, 26];
                }
                return [3 /*break*/, 28];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AvailabilityZonesMismatchResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IpAddressInUseResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MountTargetConflictResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NetworkInterfaceLimitExceededResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NoFreeAddressesInSubnetResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_restJson1SecurityGroupLimitExceededResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_restJson1SecurityGroupNotFoundResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_restJson1SubnetNotFoundResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnsupportedAvailabilityZoneResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_s.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 29];
            case 28:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _s.label = 29;
            case 29:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateTagsCommandError(output, context)];
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
var deserializeAws_restJson1CreateTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteAccessPointCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteAccessPointCommandError(output, context)];
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
var deserializeAws_restJson1DeleteAccessPointCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessPointNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#AccessPointNotFound": return [3 /*break*/, 2];
                    case "BadRequest": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteFileSystemCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteFileSystemCommandError(output, context)];
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
var deserializeAws_restJson1DeleteFileSystemCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemInUse": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#FileSystemInUse": return [3 /*break*/, 4];
                    case "FileSystemNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemInUseResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteFileSystemPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteFileSystemPolicyCommandError(output, context)];
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
var deserializeAws_restJson1DeleteFileSystemPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "FileSystemNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 2];
                    case "IncorrectFileSystemLifeCycleState": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteMountTargetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteMountTargetCommandError(output, context)];
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
var deserializeAws_restJson1DeleteMountTargetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 2];
                    case "DependencyTimeout": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#DependencyTimeout": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 6];
                    case "MountTargetNotFound": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#MountTargetNotFound": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DependencyTimeoutResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MountTargetNotFoundResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteTagsCommandError(output, context)];
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
var deserializeAws_restJson1DeleteTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeAccessPointsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeAccessPointsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AccessPoints: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AccessPoints !== undefined && data.AccessPoints !== null) {
                    contents.AccessPoints = deserializeAws_restJson1AccessPointDescriptions(data.AccessPoints, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeAccessPointsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessPointNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#AccessPointNotFound": return [3 /*break*/, 2];
                    case "BadRequest": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 4];
                    case "FileSystemNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeAccountPreferencesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeAccountPreferencesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    ResourceIdPreference: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.ResourceIdPreference !== undefined && data.ResourceIdPreference !== null) {
                    contents.ResourceIdPreference = deserializeAws_restJson1ResourceIdPreference(data.ResourceIdPreference, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeAccountPreferencesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeBackupPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeBackupPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    BackupPolicy: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.BackupPolicy !== undefined && data.BackupPolicy !== null) {
                    contents.BackupPolicy = deserializeAws_restJson1BackupPolicy(data.BackupPolicy, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeBackupPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 6];
                    case "PolicyNotFound": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#PolicyNotFound": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.efs#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PolicyNotFoundResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeFileSystemPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeFileSystemPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FileSystemId: undefined,
                    Policy: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
                    contents.FileSystemId = data.FileSystemId;
                }
                if (data.Policy !== undefined && data.Policy !== null) {
                    contents.Policy = data.Policy;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeFileSystemPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "FileSystemNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 4];
                    case "PolicyNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#PolicyNotFound": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PolicyNotFoundResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeFileSystemsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeFileSystemsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FileSystems: undefined,
                    Marker: undefined,
                    NextMarker: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.FileSystems !== undefined && data.FileSystems !== null) {
                    contents.FileSystems = deserializeAws_restJson1FileSystemDescriptions(data.FileSystems, context);
                }
                if (data.Marker !== undefined && data.Marker !== null) {
                    contents.Marker = data.Marker;
                }
                if (data.NextMarker !== undefined && data.NextMarker !== null) {
                    contents.NextMarker = data.NextMarker;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeFileSystemsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeLifecycleConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeLifecycleConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    LifecyclePolicies: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.LifecyclePolicies !== undefined && data.LifecyclePolicies !== null) {
                    contents.LifecyclePolicies = deserializeAws_restJson1LifecyclePolicies(data.LifecyclePolicies, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeLifecycleConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeMountTargetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeMountTargetsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Marker: undefined,
                    MountTargets: undefined,
                    NextMarker: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Marker !== undefined && data.Marker !== null) {
                    contents.Marker = data.Marker;
                }
                if (data.MountTargets !== undefined && data.MountTargets !== null) {
                    contents.MountTargets = deserializeAws_restJson1MountTargetDescriptions(data.MountTargets, context);
                }
                if (data.NextMarker !== undefined && data.NextMarker !== null) {
                    contents.NextMarker = data.NextMarker;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeMountTargetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessPointNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#AccessPointNotFound": return [3 /*break*/, 2];
                    case "BadRequest": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 4];
                    case "FileSystemNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 8];
                    case "MountTargetNotFound": return [3 /*break*/, 10];
                    case "com.amazonaws.efs#MountTargetNotFound": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MountTargetNotFoundResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    SecurityGroups: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.SecurityGroups !== undefined && data.SecurityGroups !== null) {
                    contents.SecurityGroups = deserializeAws_restJson1SecurityGroups(data.SecurityGroups, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 2];
                    case "IncorrectMountTargetState": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#IncorrectMountTargetState": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 6];
                    case "MountTargetNotFound": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#MountTargetNotFound": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncorrectMountTargetStateResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MountTargetNotFoundResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeTagsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Marker: undefined,
                    NextMarker: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Marker !== undefined && data.Marker !== null) {
                    contents.Marker = data.Marker;
                }
                if (data.NextMarker !== undefined && data.NextMarker !== null) {
                    contents.NextMarker = data.NextMarker;
                }
                if (data.Tags !== undefined && data.Tags !== null) {
                    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
                    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessPointNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#AccessPointNotFound": return [3 /*break*/, 2];
                    case "BadRequest": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 4];
                    case "FileSystemNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommandError(output, context)];
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
var deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 2];
                    case "IncorrectMountTargetState": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#IncorrectMountTargetState": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 6];
                    case "MountTargetNotFound": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#MountTargetNotFound": return [3 /*break*/, 8];
                    case "SecurityGroupLimitExceeded": return [3 /*break*/, 10];
                    case "com.amazonaws.efs#SecurityGroupLimitExceeded": return [3 /*break*/, 10];
                    case "SecurityGroupNotFound": return [3 /*break*/, 12];
                    case "com.amazonaws.efs#SecurityGroupNotFound": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncorrectMountTargetStateResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1MountTargetNotFoundResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1SecurityGroupLimitExceededResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1SecurityGroupNotFoundResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutAccountPreferencesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutAccountPreferencesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ResourceIdPreference: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ResourceIdPreference !== undefined && data.ResourceIdPreference !== null) {
                    contents.ResourceIdPreference = deserializeAws_restJson1ResourceIdPreference(data.ResourceIdPreference, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutAccountPreferencesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutBackupPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutBackupPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    BackupPolicy: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.BackupPolicy !== undefined && data.BackupPolicy !== null) {
                    contents.BackupPolicy = deserializeAws_restJson1BackupPolicy(data.BackupPolicy, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutBackupPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 4];
                    case "IncorrectFileSystemLifeCycleState": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.efs#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutFileSystemPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutFileSystemPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FileSystemId: undefined,
                    Policy: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
                    contents.FileSystemId = data.FileSystemId;
                }
                if (data.Policy !== undefined && data.Policy !== null) {
                    contents.Policy = data.Policy;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutFileSystemPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "FileSystemNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 2];
                    case "IncorrectFileSystemLifeCycleState": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 6];
                    case "InvalidPolicyException": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#InvalidPolicyException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidPolicyExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutLifecycleConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutLifecycleConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    LifecyclePolicies: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.LifecyclePolicies !== undefined && data.LifecyclePolicies !== null) {
                    contents.LifecyclePolicies = deserializeAws_restJson1LifecyclePolicies(data.LifecyclePolicies, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutLifecycleConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 4];
                    case "IncorrectFileSystemLifeCycleState": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
                    case "AccessPointNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#AccessPointNotFound": return [3 /*break*/, 2];
                    case "BadRequest": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 4];
                    case "FileSystemNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
                    case "AccessPointNotFound": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#AccessPointNotFound": return [3 /*break*/, 2];
                    case "BadRequest": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 4];
                    case "FileSystemNotFound": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 6];
                    case "InternalServerError": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateFileSystemCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateFileSystemCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AvailabilityZoneId: undefined,
                    AvailabilityZoneName: undefined,
                    CreationTime: undefined,
                    CreationToken: undefined,
                    Encrypted: undefined,
                    FileSystemArn: undefined,
                    FileSystemId: undefined,
                    KmsKeyId: undefined,
                    LifeCycleState: undefined,
                    Name: undefined,
                    NumberOfMountTargets: undefined,
                    OwnerId: undefined,
                    PerformanceMode: undefined,
                    ProvisionedThroughputInMibps: undefined,
                    SizeInBytes: undefined,
                    Tags: undefined,
                    ThroughputMode: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AvailabilityZoneId !== undefined && data.AvailabilityZoneId !== null) {
                    contents.AvailabilityZoneId = data.AvailabilityZoneId;
                }
                if (data.AvailabilityZoneName !== undefined && data.AvailabilityZoneName !== null) {
                    contents.AvailabilityZoneName = data.AvailabilityZoneName;
                }
                if (data.CreationTime !== undefined && data.CreationTime !== null) {
                    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
                }
                if (data.CreationToken !== undefined && data.CreationToken !== null) {
                    contents.CreationToken = data.CreationToken;
                }
                if (data.Encrypted !== undefined && data.Encrypted !== null) {
                    contents.Encrypted = data.Encrypted;
                }
                if (data.FileSystemArn !== undefined && data.FileSystemArn !== null) {
                    contents.FileSystemArn = data.FileSystemArn;
                }
                if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
                    contents.FileSystemId = data.FileSystemId;
                }
                if (data.KmsKeyId !== undefined && data.KmsKeyId !== null) {
                    contents.KmsKeyId = data.KmsKeyId;
                }
                if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
                    contents.LifeCycleState = data.LifeCycleState;
                }
                if (data.Name !== undefined && data.Name !== null) {
                    contents.Name = data.Name;
                }
                if (data.NumberOfMountTargets !== undefined && data.NumberOfMountTargets !== null) {
                    contents.NumberOfMountTargets = data.NumberOfMountTargets;
                }
                if (data.OwnerId !== undefined && data.OwnerId !== null) {
                    contents.OwnerId = data.OwnerId;
                }
                if (data.PerformanceMode !== undefined && data.PerformanceMode !== null) {
                    contents.PerformanceMode = data.PerformanceMode;
                }
                if (data.ProvisionedThroughputInMibps !== undefined && data.ProvisionedThroughputInMibps !== null) {
                    contents.ProvisionedThroughputInMibps = data.ProvisionedThroughputInMibps;
                }
                if (data.SizeInBytes !== undefined && data.SizeInBytes !== null) {
                    contents.SizeInBytes = deserializeAws_restJson1FileSystemSize(data.SizeInBytes, context);
                }
                if (data.Tags !== undefined && data.Tags !== null) {
                    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
                }
                if (data.ThroughputMode !== undefined && data.ThroughputMode !== null) {
                    contents.ThroughputMode = data.ThroughputMode;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateFileSystemCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequest": return [3 /*break*/, 2];
                    case "com.amazonaws.efs#BadRequest": return [3 /*break*/, 2];
                    case "FileSystemNotFound": return [3 /*break*/, 4];
                    case "com.amazonaws.efs#FileSystemNotFound": return [3 /*break*/, 4];
                    case "IncorrectFileSystemLifeCycleState": return [3 /*break*/, 6];
                    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState": return [3 /*break*/, 6];
                    case "InsufficientThroughputCapacity": return [3 /*break*/, 8];
                    case "com.amazonaws.efs#InsufficientThroughputCapacity": return [3 /*break*/, 8];
                    case "InternalServerError": return [3 /*break*/, 10];
                    case "com.amazonaws.efs#InternalServerError": return [3 /*break*/, 10];
                    case "ThroughputLimitExceeded": return [3 /*break*/, 12];
                    case "com.amazonaws.efs#ThroughputLimitExceeded": return [3 /*break*/, 12];
                    case "TooManyRequests": return [3 /*break*/, 14];
                    case "com.amazonaws.efs#TooManyRequests": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InsufficientThroughputCapacityResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThroughputLimitExceededResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1AccessPointAlreadyExistsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "AccessPointAlreadyExists",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            AccessPointId: undefined,
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.AccessPointId !== undefined && data.AccessPointId !== null) {
            contents.AccessPointId = data.AccessPointId;
        }
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1AccessPointLimitExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "AccessPointLimitExceeded",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1AccessPointNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "AccessPointNotFound",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1AvailabilityZonesMismatchResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "AvailabilityZonesMismatch",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1BadRequestResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "BadRequest",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1DependencyTimeoutResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "DependencyTimeout",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1FileSystemAlreadyExistsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "FileSystemAlreadyExists",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            FileSystemId: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
            contents.FileSystemId = data.FileSystemId;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1FileSystemInUseResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "FileSystemInUse",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1FileSystemLimitExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "FileSystemLimitExceeded",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1FileSystemNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "FileSystemNotFound",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "IncorrectFileSystemLifeCycleState",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1IncorrectMountTargetStateResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "IncorrectMountTargetState",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InsufficientThroughputCapacityResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InsufficientThroughputCapacity",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InternalServerErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalServerError",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InvalidPolicyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidPolicyException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1IpAddressInUseResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "IpAddressInUse",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1MountTargetConflictResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "MountTargetConflict",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1MountTargetNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "MountTargetNotFound",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1NetworkInterfaceLimitExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NetworkInterfaceLimitExceeded",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1NoFreeAddressesInSubnetResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NoFreeAddressesInSubnet",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1PolicyNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "PolicyNotFound",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1SecurityGroupLimitExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "SecurityGroupLimitExceeded",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1SecurityGroupNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "SecurityGroupNotFound",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1SubnetNotFoundResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "SubnetNotFound",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ThroughputLimitExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ThroughputLimitExceeded",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1TooManyRequestsResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TooManyRequests",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1UnsupportedAvailabilityZoneResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "UnsupportedAvailabilityZone",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
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
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
            contents.ErrorCode = data.ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1BackupPolicy = function (input, context) {
    return __assign({}, (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1CreationInfo = function (input, context) {
    return __assign(__assign(__assign({}, (input.OwnerGid !== undefined && input.OwnerGid !== null && { OwnerGid: input.OwnerGid })), (input.OwnerUid !== undefined && input.OwnerUid !== null && { OwnerUid: input.OwnerUid })), (input.Permissions !== undefined && input.Permissions !== null && { Permissions: input.Permissions }));
};
var serializeAws_restJson1LifecyclePolicies = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1LifecyclePolicy(entry, context);
    });
};
var serializeAws_restJson1LifecyclePolicy = function (input, context) {
    return __assign({}, (input.TransitionToIA !== undefined &&
        input.TransitionToIA !== null && { TransitionToIA: input.TransitionToIA }));
};
var serializeAws_restJson1PosixUser = function (input, context) {
    return __assign(__assign(__assign({}, (input.Gid !== undefined && input.Gid !== null && { Gid: input.Gid })), (input.SecondaryGids !== undefined &&
        input.SecondaryGids !== null && {
        SecondaryGids: serializeAws_restJson1SecondaryGids(input.SecondaryGids, context),
    })), (input.Uid !== undefined && input.Uid !== null && { Uid: input.Uid }));
};
var serializeAws_restJson1RootDirectory = function (input, context) {
    return __assign(__assign({}, (input.CreationInfo !== undefined &&
        input.CreationInfo !== null && { CreationInfo: serializeAws_restJson1CreationInfo(input.CreationInfo, context) })), (input.Path !== undefined && input.Path !== null && { Path: input.Path }));
};
var serializeAws_restJson1SecondaryGids = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1SecurityGroups = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1TagKeys = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Tags = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
var deserializeAws_restJson1AccessPointDescription = function (output, context) {
    return {
        AccessPointArn: output.AccessPointArn !== undefined && output.AccessPointArn !== null ? output.AccessPointArn : undefined,
        AccessPointId: output.AccessPointId !== undefined && output.AccessPointId !== null ? output.AccessPointId : undefined,
        ClientToken: output.ClientToken !== undefined && output.ClientToken !== null ? output.ClientToken : undefined,
        FileSystemId: output.FileSystemId !== undefined && output.FileSystemId !== null ? output.FileSystemId : undefined,
        LifeCycleState: output.LifeCycleState !== undefined && output.LifeCycleState !== null ? output.LifeCycleState : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        PosixUser: output.PosixUser !== undefined && output.PosixUser !== null
            ? deserializeAws_restJson1PosixUser(output.PosixUser, context)
            : undefined,
        RootDirectory: output.RootDirectory !== undefined && output.RootDirectory !== null
            ? deserializeAws_restJson1RootDirectory(output.RootDirectory, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1Tags(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1AccessPointDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AccessPointDescription(entry, context);
    });
};
var deserializeAws_restJson1BackupPolicy = function (output, context) {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1CreationInfo = function (output, context) {
    return {
        OwnerGid: output.OwnerGid !== undefined && output.OwnerGid !== null ? output.OwnerGid : undefined,
        OwnerUid: output.OwnerUid !== undefined && output.OwnerUid !== null ? output.OwnerUid : undefined,
        Permissions: output.Permissions !== undefined && output.Permissions !== null ? output.Permissions : undefined,
    };
};
var deserializeAws_restJson1FileSystemDescription = function (output, context) {
    return {
        AvailabilityZoneId: output.AvailabilityZoneId !== undefined && output.AvailabilityZoneId !== null
            ? output.AvailabilityZoneId
            : undefined,
        AvailabilityZoneName: output.AvailabilityZoneName !== undefined && output.AvailabilityZoneName !== null
            ? output.AvailabilityZoneName
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        CreationToken: output.CreationToken !== undefined && output.CreationToken !== null ? output.CreationToken : undefined,
        Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
        FileSystemArn: output.FileSystemArn !== undefined && output.FileSystemArn !== null ? output.FileSystemArn : undefined,
        FileSystemId: output.FileSystemId !== undefined && output.FileSystemId !== null ? output.FileSystemId : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        LifeCycleState: output.LifeCycleState !== undefined && output.LifeCycleState !== null ? output.LifeCycleState : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NumberOfMountTargets: output.NumberOfMountTargets !== undefined && output.NumberOfMountTargets !== null
            ? output.NumberOfMountTargets
            : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        PerformanceMode: output.PerformanceMode !== undefined && output.PerformanceMode !== null ? output.PerformanceMode : undefined,
        ProvisionedThroughputInMibps: output.ProvisionedThroughputInMibps !== undefined && output.ProvisionedThroughputInMibps !== null
            ? output.ProvisionedThroughputInMibps
            : undefined,
        SizeInBytes: output.SizeInBytes !== undefined && output.SizeInBytes !== null
            ? deserializeAws_restJson1FileSystemSize(output.SizeInBytes, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1Tags(output.Tags, context)
            : undefined,
        ThroughputMode: output.ThroughputMode !== undefined && output.ThroughputMode !== null ? output.ThroughputMode : undefined,
    };
};
var deserializeAws_restJson1FileSystemDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FileSystemDescription(entry, context);
    });
};
var deserializeAws_restJson1FileSystemSize = function (output, context) {
    return {
        Timestamp: output.Timestamp !== undefined && output.Timestamp !== null
            ? new Date(Math.round(output.Timestamp * 1000))
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
        ValueInIA: output.ValueInIA !== undefined && output.ValueInIA !== null ? output.ValueInIA : undefined,
        ValueInStandard: output.ValueInStandard !== undefined && output.ValueInStandard !== null ? output.ValueInStandard : undefined,
    };
};
var deserializeAws_restJson1LifecyclePolicies = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LifecyclePolicy(entry, context);
    });
};
var deserializeAws_restJson1LifecyclePolicy = function (output, context) {
    return {
        TransitionToIA: output.TransitionToIA !== undefined && output.TransitionToIA !== null ? output.TransitionToIA : undefined,
    };
};
var deserializeAws_restJson1MountTargetDescription = function (output, context) {
    return {
        AvailabilityZoneId: output.AvailabilityZoneId !== undefined && output.AvailabilityZoneId !== null
            ? output.AvailabilityZoneId
            : undefined,
        AvailabilityZoneName: output.AvailabilityZoneName !== undefined && output.AvailabilityZoneName !== null
            ? output.AvailabilityZoneName
            : undefined,
        FileSystemId: output.FileSystemId !== undefined && output.FileSystemId !== null ? output.FileSystemId : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        LifeCycleState: output.LifeCycleState !== undefined && output.LifeCycleState !== null ? output.LifeCycleState : undefined,
        MountTargetId: output.MountTargetId !== undefined && output.MountTargetId !== null ? output.MountTargetId : undefined,
        NetworkInterfaceId: output.NetworkInterfaceId !== undefined && output.NetworkInterfaceId !== null
            ? output.NetworkInterfaceId
            : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_restJson1MountTargetDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MountTargetDescription(entry, context);
    });
};
var deserializeAws_restJson1PosixUser = function (output, context) {
    return {
        Gid: output.Gid !== undefined && output.Gid !== null ? output.Gid : undefined,
        SecondaryGids: output.SecondaryGids !== undefined && output.SecondaryGids !== null
            ? deserializeAws_restJson1SecondaryGids(output.SecondaryGids, context)
            : undefined,
        Uid: output.Uid !== undefined && output.Uid !== null ? output.Uid : undefined,
    };
};
var deserializeAws_restJson1ResourceIdPreference = function (output, context) {
    return {
        ResourceIdType: output.ResourceIdType !== undefined && output.ResourceIdType !== null ? output.ResourceIdType : undefined,
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_restJson1Resources(output.Resources, context)
            : undefined,
    };
};
var deserializeAws_restJson1Resources = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1RootDirectory = function (output, context) {
    return {
        CreationInfo: output.CreationInfo !== undefined && output.CreationInfo !== null
            ? deserializeAws_restJson1CreationInfo(output.CreationInfo, context)
            : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    };
};
var deserializeAws_restJson1SecondaryGids = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1SecurityGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Tag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1Tags = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
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