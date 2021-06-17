import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/accept";
                if (input.CrossClusterSearchConnectionId !== undefined) {
                    labelValue = input.CrossClusterSearchConnectionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: CrossClusterSearchConnectionId.");
                    }
                    resolvedPath = resolvedPath.replace("{CrossClusterSearchConnectionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: CrossClusterSearchConnectionId.");
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
export var serializeAws_restJson1AddTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/tags";
                body = JSON.stringify(__assign(__assign({}, (input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN })), (input.TagList !== undefined &&
                    input.TagList !== null && { TagList: serializeAws_restJson1TagList(input.TagList, context) })));
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
export var serializeAws_restJson1AssociatePackageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/packages/associate/{PackageID}/{DomainName}";
                if (input.PackageID !== undefined) {
                    labelValue = input.PackageID;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: PackageID.");
                    }
                    resolvedPath = resolvedPath.replace("{PackageID}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: PackageID.");
                }
                if (input.DomainName !== undefined) {
                    labelValue = input.DomainName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DomainName.");
                    }
                    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DomainName.");
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
export var serializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/es/serviceSoftwareUpdate/cancel";
                body = JSON.stringify(__assign({}, (input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName })));
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
export var serializeAws_restJson1CreateElasticsearchDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/es/domain";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccessPolicies !== undefined &&
                    input.AccessPolicies !== null && { AccessPolicies: input.AccessPolicies })), (input.AdvancedOptions !== undefined &&
                    input.AdvancedOptions !== null && {
                    AdvancedOptions: serializeAws_restJson1AdvancedOptions(input.AdvancedOptions, context),
                })), (input.AdvancedSecurityOptions !== undefined &&
                    input.AdvancedSecurityOptions !== null && {
                    AdvancedSecurityOptions: serializeAws_restJson1AdvancedSecurityOptionsInput(input.AdvancedSecurityOptions, context),
                })), (input.AutoTuneOptions !== undefined &&
                    input.AutoTuneOptions !== null && {
                    AutoTuneOptions: serializeAws_restJson1AutoTuneOptionsInput(input.AutoTuneOptions, context),
                })), (input.CognitoOptions !== undefined &&
                    input.CognitoOptions !== null && {
                    CognitoOptions: serializeAws_restJson1CognitoOptions(input.CognitoOptions, context),
                })), (input.DomainEndpointOptions !== undefined &&
                    input.DomainEndpointOptions !== null && {
                    DomainEndpointOptions: serializeAws_restJson1DomainEndpointOptions(input.DomainEndpointOptions, context),
                })), (input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName })), (input.EBSOptions !== undefined &&
                    input.EBSOptions !== null && { EBSOptions: serializeAws_restJson1EBSOptions(input.EBSOptions, context) })), (input.ElasticsearchClusterConfig !== undefined &&
                    input.ElasticsearchClusterConfig !== null && {
                    ElasticsearchClusterConfig: serializeAws_restJson1ElasticsearchClusterConfig(input.ElasticsearchClusterConfig, context),
                })), (input.ElasticsearchVersion !== undefined &&
                    input.ElasticsearchVersion !== null && { ElasticsearchVersion: input.ElasticsearchVersion })), (input.EncryptionAtRestOptions !== undefined &&
                    input.EncryptionAtRestOptions !== null && {
                    EncryptionAtRestOptions: serializeAws_restJson1EncryptionAtRestOptions(input.EncryptionAtRestOptions, context),
                })), (input.LogPublishingOptions !== undefined &&
                    input.LogPublishingOptions !== null && {
                    LogPublishingOptions: serializeAws_restJson1LogPublishingOptions(input.LogPublishingOptions, context),
                })), (input.NodeToNodeEncryptionOptions !== undefined &&
                    input.NodeToNodeEncryptionOptions !== null && {
                    NodeToNodeEncryptionOptions: serializeAws_restJson1NodeToNodeEncryptionOptions(input.NodeToNodeEncryptionOptions, context),
                })), (input.SnapshotOptions !== undefined &&
                    input.SnapshotOptions !== null && {
                    SnapshotOptions: serializeAws_restJson1SnapshotOptions(input.SnapshotOptions, context),
                })), (input.TagList !== undefined &&
                    input.TagList !== null && { TagList: serializeAws_restJson1TagList(input.TagList, context) })), (input.VPCOptions !== undefined &&
                    input.VPCOptions !== null && { VPCOptions: serializeAws_restJson1VPCOptions(input.VPCOptions, context) })));
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
export var serializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/es/ccs/outboundConnection";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.ConnectionAlias !== undefined &&
                    input.ConnectionAlias !== null && { ConnectionAlias: input.ConnectionAlias })), (input.DestinationDomainInfo !== undefined &&
                    input.DestinationDomainInfo !== null && {
                    DestinationDomainInfo: serializeAws_restJson1DomainInformation(input.DestinationDomainInfo, context),
                })), (input.SourceDomainInfo !== undefined &&
                    input.SourceDomainInfo !== null && {
                    SourceDomainInfo: serializeAws_restJson1DomainInformation(input.SourceDomainInfo, context),
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
export var serializeAws_restJson1CreatePackageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/packages";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.PackageDescription !== undefined &&
                    input.PackageDescription !== null && { PackageDescription: input.PackageDescription })), (input.PackageName !== undefined && input.PackageName !== null && { PackageName: input.PackageName })), (input.PackageSource !== undefined &&
                    input.PackageSource !== null && {
                    PackageSource: serializeAws_restJson1PackageSource(input.PackageSource, context),
                })), (input.PackageType !== undefined && input.PackageType !== null && { PackageType: input.PackageType })));
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
export var serializeAws_restJson1DeleteElasticsearchDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/es/domain/{DomainName}";
                if (input.DomainName !== undefined) {
                    labelValue = input.DomainName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DomainName.");
                    }
                    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DomainName.");
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
export var serializeAws_restJson1DeleteElasticsearchServiceRoleCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/es/role";
                body = "";
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
export var serializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}";
                if (input.CrossClusterSearchConnectionId !== undefined) {
                    labelValue = input.CrossClusterSearchConnectionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: CrossClusterSearchConnectionId.");
                    }
                    resolvedPath = resolvedPath.replace("{CrossClusterSearchConnectionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: CrossClusterSearchConnectionId.");
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
export var serializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/es/ccs/outboundConnection/{CrossClusterSearchConnectionId}";
                if (input.CrossClusterSearchConnectionId !== undefined) {
                    labelValue = input.CrossClusterSearchConnectionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: CrossClusterSearchConnectionId.");
                    }
                    resolvedPath = resolvedPath.replace("{CrossClusterSearchConnectionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: CrossClusterSearchConnectionId.");
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
export var serializeAws_restJson1DeletePackageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/packages/{PackageID}";
                if (input.PackageID !== undefined) {
                    labelValue = input.PackageID;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: PackageID.");
                    }
                    resolvedPath = resolvedPath.replace("{PackageID}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: PackageID.");
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
export var serializeAws_restJson1DescribeDomainAutoTunesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/es/domain/{DomainName}/autoTunes";
                if (input.DomainName !== undefined) {
                    labelValue = input.DomainName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DomainName.");
                    }
                    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DomainName.");
                }
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
export var serializeAws_restJson1DescribeElasticsearchDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/es/domain/{DomainName}";
                if (input.DomainName !== undefined) {
                    labelValue = input.DomainName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DomainName.");
                    }
                    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DomainName.");
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
export var serializeAws_restJson1DescribeElasticsearchDomainConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/es/domain/{DomainName}/config";
                if (input.DomainName !== undefined) {
                    labelValue = input.DomainName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DomainName.");
                    }
                    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DomainName.");
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
export var serializeAws_restJson1DescribeElasticsearchDomainsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/es/domain-info";
                body = JSON.stringify(__assign({}, (input.DomainNames !== undefined &&
                    input.DomainNames !== null && { DomainNames: serializeAws_restJson1DomainNameList(input.DomainNames, context) })));
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
export var serializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}";
                if (input.InstanceType !== undefined) {
                    labelValue = input.InstanceType;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceType.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceType}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceType.");
                }
                if (input.ElasticsearchVersion !== undefined) {
                    labelValue = input.ElasticsearchVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ElasticsearchVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{ElasticsearchVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ElasticsearchVersion.");
                }
                query = __assign({}, (input.DomainName !== undefined && { domainName: input.DomainName }));
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
export var serializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/es/ccs/inboundConnection/search";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Filters !== undefined &&
                    input.Filters !== null && { Filters: serializeAws_restJson1FilterList(input.Filters, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })));
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
export var serializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/es/ccs/outboundConnection/search";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Filters !== undefined &&
                    input.Filters !== null && { Filters: serializeAws_restJson1FilterList(input.Filters, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })));
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
export var serializeAws_restJson1DescribePackagesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/packages/describe";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Filters !== undefined &&
                    input.Filters !== null && { Filters: serializeAws_restJson1DescribePackagesFilterList(input.Filters, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })));
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
export var serializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/es/reservedInstanceOfferings";
                query = __assign(__assign(__assign({}, (input.ReservedElasticsearchInstanceOfferingId !== undefined && {
                    offeringId: input.ReservedElasticsearchInstanceOfferingId,
                })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1DescribeReservedElasticsearchInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/es/reservedInstances";
                query = __assign(__assign(__assign({}, (input.ReservedElasticsearchInstanceId !== undefined && {
                    reservationId: input.ReservedElasticsearchInstanceId,
                })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1DissociatePackageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/packages/dissociate/{PackageID}/{DomainName}";
                if (input.PackageID !== undefined) {
                    labelValue = input.PackageID;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: PackageID.");
                    }
                    resolvedPath = resolvedPath.replace("{PackageID}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: PackageID.");
                }
                if (input.DomainName !== undefined) {
                    labelValue = input.DomainName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DomainName.");
                    }
                    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DomainName.");
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
export var serializeAws_restJson1GetCompatibleElasticsearchVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/es/compatibleVersions";
                query = __assign({}, (input.DomainName !== undefined && { domainName: input.DomainName }));
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
export var serializeAws_restJson1GetPackageVersionHistoryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/packages/{PackageID}/history";
                if (input.PackageID !== undefined) {
                    labelValue = input.PackageID;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: PackageID.");
                    }
                    resolvedPath = resolvedPath.replace("{PackageID}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: PackageID.");
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
export var serializeAws_restJson1GetUpgradeHistoryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/es/upgradeDomain/{DomainName}/history";
                if (input.DomainName !== undefined) {
                    labelValue = input.DomainName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DomainName.");
                    }
                    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DomainName.");
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
export var serializeAws_restJson1GetUpgradeStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/es/upgradeDomain/{DomainName}/status";
                if (input.DomainName !== undefined) {
                    labelValue = input.DomainName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DomainName.");
                    }
                    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DomainName.");
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
export var serializeAws_restJson1ListDomainNamesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/domain";
                body = "";
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
export var serializeAws_restJson1ListDomainsForPackageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/packages/{PackageID}/domains";
                if (input.PackageID !== undefined) {
                    labelValue = input.PackageID;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: PackageID.");
                    }
                    resolvedPath = resolvedPath.replace("{PackageID}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: PackageID.");
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
export var serializeAws_restJson1ListElasticsearchInstanceTypesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/es/instanceTypes/{ElasticsearchVersion}";
                if (input.ElasticsearchVersion !== undefined) {
                    labelValue = input.ElasticsearchVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ElasticsearchVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{ElasticsearchVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ElasticsearchVersion.");
                }
                query = __assign(__assign(__assign({}, (input.DomainName !== undefined && { domainName: input.DomainName })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1ListElasticsearchVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/es/versions";
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
export var serializeAws_restJson1ListPackagesForDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/domain/{DomainName}/packages";
                if (input.DomainName !== undefined) {
                    labelValue = input.DomainName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DomainName.");
                    }
                    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DomainName.");
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
export var serializeAws_restJson1ListTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/tags";
                query = __assign({}, (input.ARN !== undefined && { arn: input.ARN }));
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
export var serializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/es/purchaseReservedInstanceOffering";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount })), (input.ReservationName !== undefined &&
                    input.ReservationName !== null && { ReservationName: input.ReservationName })), (input.ReservedElasticsearchInstanceOfferingId !== undefined &&
                    input.ReservedElasticsearchInstanceOfferingId !== null && {
                    ReservedElasticsearchInstanceOfferingId: input.ReservedElasticsearchInstanceOfferingId,
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
export var serializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/reject";
                if (input.CrossClusterSearchConnectionId !== undefined) {
                    labelValue = input.CrossClusterSearchConnectionId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: CrossClusterSearchConnectionId.");
                    }
                    resolvedPath = resolvedPath.replace("{CrossClusterSearchConnectionId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: CrossClusterSearchConnectionId.");
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
export var serializeAws_restJson1RemoveTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/tags-removal";
                body = JSON.stringify(__assign(__assign({}, (input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN })), (input.TagKeys !== undefined &&
                    input.TagKeys !== null && { TagKeys: serializeAws_restJson1StringList(input.TagKeys, context) })));
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
export var serializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/es/serviceSoftwareUpdate/start";
                body = JSON.stringify(__assign({}, (input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName })));
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
export var serializeAws_restJson1UpdateElasticsearchDomainConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/es/domain/{DomainName}/config";
                if (input.DomainName !== undefined) {
                    labelValue = input.DomainName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DomainName.");
                    }
                    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DomainName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccessPolicies !== undefined &&
                    input.AccessPolicies !== null && { AccessPolicies: input.AccessPolicies })), (input.AdvancedOptions !== undefined &&
                    input.AdvancedOptions !== null && {
                    AdvancedOptions: serializeAws_restJson1AdvancedOptions(input.AdvancedOptions, context),
                })), (input.AdvancedSecurityOptions !== undefined &&
                    input.AdvancedSecurityOptions !== null && {
                    AdvancedSecurityOptions: serializeAws_restJson1AdvancedSecurityOptionsInput(input.AdvancedSecurityOptions, context),
                })), (input.AutoTuneOptions !== undefined &&
                    input.AutoTuneOptions !== null && {
                    AutoTuneOptions: serializeAws_restJson1AutoTuneOptions(input.AutoTuneOptions, context),
                })), (input.CognitoOptions !== undefined &&
                    input.CognitoOptions !== null && {
                    CognitoOptions: serializeAws_restJson1CognitoOptions(input.CognitoOptions, context),
                })), (input.DomainEndpointOptions !== undefined &&
                    input.DomainEndpointOptions !== null && {
                    DomainEndpointOptions: serializeAws_restJson1DomainEndpointOptions(input.DomainEndpointOptions, context),
                })), (input.EBSOptions !== undefined &&
                    input.EBSOptions !== null && { EBSOptions: serializeAws_restJson1EBSOptions(input.EBSOptions, context) })), (input.ElasticsearchClusterConfig !== undefined &&
                    input.ElasticsearchClusterConfig !== null && {
                    ElasticsearchClusterConfig: serializeAws_restJson1ElasticsearchClusterConfig(input.ElasticsearchClusterConfig, context),
                })), (input.EncryptionAtRestOptions !== undefined &&
                    input.EncryptionAtRestOptions !== null && {
                    EncryptionAtRestOptions: serializeAws_restJson1EncryptionAtRestOptions(input.EncryptionAtRestOptions, context),
                })), (input.LogPublishingOptions !== undefined &&
                    input.LogPublishingOptions !== null && {
                    LogPublishingOptions: serializeAws_restJson1LogPublishingOptions(input.LogPublishingOptions, context),
                })), (input.NodeToNodeEncryptionOptions !== undefined &&
                    input.NodeToNodeEncryptionOptions !== null && {
                    NodeToNodeEncryptionOptions: serializeAws_restJson1NodeToNodeEncryptionOptions(input.NodeToNodeEncryptionOptions, context),
                })), (input.SnapshotOptions !== undefined &&
                    input.SnapshotOptions !== null && {
                    SnapshotOptions: serializeAws_restJson1SnapshotOptions(input.SnapshotOptions, context),
                })), (input.VPCOptions !== undefined &&
                    input.VPCOptions !== null && { VPCOptions: serializeAws_restJson1VPCOptions(input.VPCOptions, context) })));
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
export var serializeAws_restJson1UpdatePackageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/packages/update";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.CommitMessage !== undefined && input.CommitMessage !== null && { CommitMessage: input.CommitMessage })), (input.PackageDescription !== undefined &&
                    input.PackageDescription !== null && { PackageDescription: input.PackageDescription })), (input.PackageID !== undefined && input.PackageID !== null && { PackageID: input.PackageID })), (input.PackageSource !== undefined &&
                    input.PackageSource !== null && {
                    PackageSource: serializeAws_restJson1PackageSource(input.PackageSource, context),
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
export var serializeAws_restJson1UpgradeElasticsearchDomainCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-01-01/es/upgradeDomain";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName })), (input.PerformCheckOnly !== undefined &&
                    input.PerformCheckOnly !== null && { PerformCheckOnly: input.PerformCheckOnly })), (input.TargetVersion !== undefined && input.TargetVersion !== null && { TargetVersion: input.TargetVersion })));
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
export var deserializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CrossClusterSearchConnection: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CrossClusterSearchConnection !== undefined && data.CrossClusterSearchConnection !== null) {
                    contents.CrossClusterSearchConnection = deserializeAws_restJson1InboundCrossClusterSearchConnection(data.CrossClusterSearchConnection, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DisabledOperationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#DisabledOperationException": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1AddTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AddTagsCommandError(output, context)];
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
var deserializeAws_restJson1AddTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#LimitExceededException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1AssociatePackageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AssociatePackageCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DomainPackageDetails: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DomainPackageDetails !== undefined && data.DomainPackageDetails !== null) {
                    contents.DomainPackageDetails = deserializeAws_restJson1DomainPackageDetails(data.DomainPackageDetails, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1AssociatePackageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.elasticsearchservice#AccessDeniedException": return [3 /*break*/, 2];
                    case "BaseException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 4];
                    case "ConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ConflictException": return [3 /*break*/, 6];
                    case "InternalException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ServiceSoftwareOptions: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ServiceSoftwareOptions !== undefined && data.ServiceSoftwareOptions !== null) {
                    contents.ServiceSoftwareOptions = deserializeAws_restJson1ServiceSoftwareOptions(data.ServiceSoftwareOptions, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateElasticsearchDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateElasticsearchDomainCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DomainStatus: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
                    contents.DomainStatus = deserializeAws_restJson1ElasticsearchDomainStatus(data.DomainStatus, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateElasticsearchDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "DisabledOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#DisabledOperationException": return [3 /*break*/, 4];
                    case "InternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 6];
                    case "InvalidTypeException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#InvalidTypeException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#LimitExceededException": return [3 /*break*/, 10];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ConnectionAlias: undefined,
                    ConnectionStatus: undefined,
                    CrossClusterSearchConnectionId: undefined,
                    DestinationDomainInfo: undefined,
                    SourceDomainInfo: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ConnectionAlias !== undefined && data.ConnectionAlias !== null) {
                    contents.ConnectionAlias = data.ConnectionAlias;
                }
                if (data.ConnectionStatus !== undefined && data.ConnectionStatus !== null) {
                    contents.ConnectionStatus = deserializeAws_restJson1OutboundCrossClusterSearchConnectionStatus(data.ConnectionStatus, context);
                }
                if (data.CrossClusterSearchConnectionId !== undefined && data.CrossClusterSearchConnectionId !== null) {
                    contents.CrossClusterSearchConnectionId = data.CrossClusterSearchConnectionId;
                }
                if (data.DestinationDomainInfo !== undefined && data.DestinationDomainInfo !== null) {
                    contents.DestinationDomainInfo = deserializeAws_restJson1DomainInformation(data.DestinationDomainInfo, context);
                }
                if (data.SourceDomainInfo !== undefined && data.SourceDomainInfo !== null) {
                    contents.SourceDomainInfo = deserializeAws_restJson1DomainInformation(data.SourceDomainInfo, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DisabledOperationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#DisabledOperationException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreatePackageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreatePackageCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    PackageDetails: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.PackageDetails !== undefined && data.PackageDetails !== null) {
                    contents.PackageDetails = deserializeAws_restJson1PackageDetails(data.PackageDetails, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreatePackageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#AccessDeniedException": return [3 /*break*/, 2];
                    case "BaseException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 4];
                    case "InternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 6];
                    case "InvalidTypeException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#InvalidTypeException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#LimitExceededException": return [3 /*break*/, 10];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteElasticsearchDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteElasticsearchDomainCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DomainStatus: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
                    contents.DomainStatus = deserializeAws_restJson1ElasticsearchDomainStatus(data.DomainStatus, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteElasticsearchDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteElasticsearchServiceRoleCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteElasticsearchServiceRoleCommandError(output, context)];
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
var deserializeAws_restJson1DeleteElasticsearchServiceRoleCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CrossClusterSearchConnection: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CrossClusterSearchConnection !== undefined && data.CrossClusterSearchConnection !== null) {
                    contents.CrossClusterSearchConnection = deserializeAws_restJson1InboundCrossClusterSearchConnection(data.CrossClusterSearchConnection, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DisabledOperationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#DisabledOperationException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CrossClusterSearchConnection: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CrossClusterSearchConnection !== undefined && data.CrossClusterSearchConnection !== null) {
                    contents.CrossClusterSearchConnection = deserializeAws_restJson1OutboundCrossClusterSearchConnection(data.CrossClusterSearchConnection, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DisabledOperationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#DisabledOperationException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeletePackageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeletePackageCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    PackageDetails: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.PackageDetails !== undefined && data.PackageDetails !== null) {
                    contents.PackageDetails = deserializeAws_restJson1PackageDetails(data.PackageDetails, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeletePackageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.elasticsearchservice#AccessDeniedException": return [3 /*break*/, 2];
                    case "BaseException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 4];
                    case "ConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ConflictException": return [3 /*break*/, 6];
                    case "InternalException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeDomainAutoTunesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeDomainAutoTunesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AutoTunes: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AutoTunes !== undefined && data.AutoTunes !== null) {
                    contents.AutoTunes = deserializeAws_restJson1AutoTuneList(data.AutoTunes, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeDomainAutoTunesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeElasticsearchDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeElasticsearchDomainCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DomainStatus: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
                    contents.DomainStatus = deserializeAws_restJson1ElasticsearchDomainStatus(data.DomainStatus, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeElasticsearchDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeElasticsearchDomainConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeElasticsearchDomainConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DomainConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DomainConfig !== undefined && data.DomainConfig !== null) {
                    contents.DomainConfig = deserializeAws_restJson1ElasticsearchDomainConfig(data.DomainConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeElasticsearchDomainConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeElasticsearchDomainsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeElasticsearchDomainsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DomainStatusList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DomainStatusList !== undefined && data.DomainStatusList !== null) {
                    contents.DomainStatusList = deserializeAws_restJson1ElasticsearchDomainStatusList(data.DomainStatusList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeElasticsearchDomainsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    LimitsByRole: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.LimitsByRole !== undefined && data.LimitsByRole !== null) {
                    contents.LimitsByRole = deserializeAws_restJson1LimitsByRole(data.LimitsByRole, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "InvalidTypeException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#InvalidTypeException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CrossClusterSearchConnections: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CrossClusterSearchConnections !== undefined && data.CrossClusterSearchConnections !== null) {
                    contents.CrossClusterSearchConnections = deserializeAws_restJson1InboundCrossClusterSearchConnections(data.CrossClusterSearchConnections, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DisabledOperationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#DisabledOperationException": return [3 /*break*/, 2];
                    case "InvalidPaginationTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InvalidPaginationTokenException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CrossClusterSearchConnections: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CrossClusterSearchConnections !== undefined && data.CrossClusterSearchConnections !== null) {
                    contents.CrossClusterSearchConnections = deserializeAws_restJson1OutboundCrossClusterSearchConnections(data.CrossClusterSearchConnections, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DisabledOperationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#DisabledOperationException": return [3 /*break*/, 2];
                    case "InvalidPaginationTokenException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InvalidPaginationTokenException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribePackagesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribePackagesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    PackageDetailsList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.PackageDetailsList !== undefined && data.PackageDetailsList !== null) {
                    contents.PackageDetailsList = deserializeAws_restJson1PackageDetailsList(data.PackageDetailsList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribePackagesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.elasticsearchservice#AccessDeniedException": return [3 /*break*/, 2];
                    case "BaseException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 4];
                    case "InternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    ReservedElasticsearchInstanceOfferings: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.ReservedElasticsearchInstanceOfferings !== undefined &&
                    data.ReservedElasticsearchInstanceOfferings !== null) {
                    contents.ReservedElasticsearchInstanceOfferings = deserializeAws_restJson1ReservedElasticsearchInstanceOfferingList(data.ReservedElasticsearchInstanceOfferings, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DisabledOperationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#DisabledOperationException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    ReservedElasticsearchInstances: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.ReservedElasticsearchInstances !== undefined && data.ReservedElasticsearchInstances !== null) {
                    contents.ReservedElasticsearchInstances = deserializeAws_restJson1ReservedElasticsearchInstanceList(data.ReservedElasticsearchInstances, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DisabledOperationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#DisabledOperationException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DissociatePackageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DissociatePackageCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DomainPackageDetails: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DomainPackageDetails !== undefined && data.DomainPackageDetails !== null) {
                    contents.DomainPackageDetails = deserializeAws_restJson1DomainPackageDetails(data.DomainPackageDetails, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DissociatePackageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.elasticsearchservice#AccessDeniedException": return [3 /*break*/, 2];
                    case "BaseException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 4];
                    case "ConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ConflictException": return [3 /*break*/, 6];
                    case "InternalException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CompatibleElasticsearchVersions: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CompatibleElasticsearchVersions !== undefined && data.CompatibleElasticsearchVersions !== null) {
                    contents.CompatibleElasticsearchVersions = deserializeAws_restJson1CompatibleElasticsearchVersionsList(data.CompatibleElasticsearchVersions, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "DisabledOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#DisabledOperationException": return [3 /*break*/, 4];
                    case "InternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetPackageVersionHistoryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetPackageVersionHistoryCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    PackageID: undefined,
                    PackageVersionHistoryList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.PackageID !== undefined && data.PackageID !== null) {
                    contents.PackageID = data.PackageID;
                }
                if (data.PackageVersionHistoryList !== undefined && data.PackageVersionHistoryList !== null) {
                    contents.PackageVersionHistoryList = deserializeAws_restJson1PackageVersionHistoryList(data.PackageVersionHistoryList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetPackageVersionHistoryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.elasticsearchservice#AccessDeniedException": return [3 /*break*/, 2];
                    case "BaseException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 4];
                    case "InternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetUpgradeHistoryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetUpgradeHistoryCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    UpgradeHistories: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.UpgradeHistories !== undefined && data.UpgradeHistories !== null) {
                    contents.UpgradeHistories = deserializeAws_restJson1UpgradeHistoryList(data.UpgradeHistories, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetUpgradeHistoryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "DisabledOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#DisabledOperationException": return [3 /*break*/, 4];
                    case "InternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetUpgradeStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetUpgradeStatusCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    StepStatus: undefined,
                    UpgradeName: undefined,
                    UpgradeStep: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.StepStatus !== undefined && data.StepStatus !== null) {
                    contents.StepStatus = data.StepStatus;
                }
                if (data.UpgradeName !== undefined && data.UpgradeName !== null) {
                    contents.UpgradeName = data.UpgradeName;
                }
                if (data.UpgradeStep !== undefined && data.UpgradeStep !== null) {
                    contents.UpgradeStep = data.UpgradeStep;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetUpgradeStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "DisabledOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#DisabledOperationException": return [3 /*break*/, 4];
                    case "InternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListDomainNamesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListDomainNamesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DomainNames: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DomainNames !== undefined && data.DomainNames !== null) {
                    contents.DomainNames = deserializeAws_restJson1DomainInfoList(data.DomainNames, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListDomainNamesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListDomainsForPackageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListDomainsForPackageCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DomainPackageDetailsList: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DomainPackageDetailsList !== undefined && data.DomainPackageDetailsList !== null) {
                    contents.DomainPackageDetailsList = deserializeAws_restJson1DomainPackageDetailsList(data.DomainPackageDetailsList, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListDomainsForPackageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.elasticsearchservice#AccessDeniedException": return [3 /*break*/, 2];
                    case "BaseException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 4];
                    case "InternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListElasticsearchInstanceTypesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListElasticsearchInstanceTypesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ElasticsearchInstanceTypes: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ElasticsearchInstanceTypes !== undefined && data.ElasticsearchInstanceTypes !== null) {
                    contents.ElasticsearchInstanceTypes = deserializeAws_restJson1ElasticsearchInstanceTypeList(data.ElasticsearchInstanceTypes, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListElasticsearchInstanceTypesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListElasticsearchVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListElasticsearchVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ElasticsearchVersions: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ElasticsearchVersions !== undefined && data.ElasticsearchVersions !== null) {
                    contents.ElasticsearchVersions = deserializeAws_restJson1ElasticsearchVersionList(data.ElasticsearchVersions, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListElasticsearchVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListPackagesForDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListPackagesForDomainCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DomainPackageDetailsList: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DomainPackageDetailsList !== undefined && data.DomainPackageDetailsList !== null) {
                    contents.DomainPackageDetailsList = deserializeAws_restJson1DomainPackageDetailsList(data.DomainPackageDetailsList, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListPackagesForDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.elasticsearchservice#AccessDeniedException": return [3 /*break*/, 2];
                    case "BaseException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 4];
                    case "InternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListTagsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    TagList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.TagList !== undefined && data.TagList !== null) {
                    contents.TagList = deserializeAws_restJson1TagList(data.TagList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ReservationName: undefined,
                    ReservedElasticsearchInstanceId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ReservationName !== undefined && data.ReservationName !== null) {
                    contents.ReservationName = data.ReservationName;
                }
                if (data.ReservedElasticsearchInstanceId !== undefined && data.ReservedElasticsearchInstanceId !== null) {
                    contents.ReservedElasticsearchInstanceId = data.ReservedElasticsearchInstanceId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DisabledOperationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#DisabledOperationException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CrossClusterSearchConnection: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CrossClusterSearchConnection !== undefined && data.CrossClusterSearchConnection !== null) {
                    contents.CrossClusterSearchConnection = deserializeAws_restJson1InboundCrossClusterSearchConnection(data.CrossClusterSearchConnection, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DisabledOperationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#DisabledOperationException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RemoveTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RemoveTagsCommandError(output, context)];
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
var deserializeAws_restJson1RemoveTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ServiceSoftwareOptions: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ServiceSoftwareOptions !== undefined && data.ServiceSoftwareOptions !== null) {
                    contents.ServiceSoftwareOptions = deserializeAws_restJson1ServiceSoftwareOptions(data.ServiceSoftwareOptions, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateElasticsearchDomainConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateElasticsearchDomainConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DomainConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DomainConfig !== undefined && data.DomainConfig !== null) {
                    contents.DomainConfig = deserializeAws_restJson1ElasticsearchDomainConfig(data.DomainConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateElasticsearchDomainConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 4];
                    case "InvalidTypeException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#InvalidTypeException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdatePackageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdatePackageCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    PackageDetails: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.PackageDetails !== undefined && data.PackageDetails !== null) {
                    contents.PackageDetails = deserializeAws_restJson1PackageDetails(data.PackageDetails, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdatePackageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.elasticsearchservice#AccessDeniedException": return [3 /*break*/, 2];
                    case "BaseException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 4];
                    case "InternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpgradeElasticsearchDomainCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpgradeElasticsearchDomainCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DomainName: undefined,
                    PerformCheckOnly: undefined,
                    TargetVersion: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DomainName !== undefined && data.DomainName !== null) {
                    contents.DomainName = data.DomainName;
                }
                if (data.PerformCheckOnly !== undefined && data.PerformCheckOnly !== null) {
                    contents.PerformCheckOnly = data.PerformCheckOnly;
                }
                if (data.TargetVersion !== undefined && data.TargetVersion !== null) {
                    contents.TargetVersion = data.TargetVersion;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpgradeElasticsearchDomainCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BaseException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticsearchservice#BaseException": return [3 /*break*/, 2];
                    case "DisabledOperationException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticsearchservice#DisabledOperationException": return [3 /*break*/, 4];
                    case "InternalException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticsearchservice#InternalException": return [3 /*break*/, 6];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ValidationException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticsearchservice#ValidationException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
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
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1BaseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "BaseException",
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
var deserializeAws_restJson1ConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ConflictException",
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
var deserializeAws_restJson1DisabledOperationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "DisabledOperationException",
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
var deserializeAws_restJson1InternalExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalException",
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
var deserializeAws_restJson1InvalidPaginationTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidPaginationTokenException",
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
var deserializeAws_restJson1InvalidTypeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidTypeException",
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
var deserializeAws_restJson1LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "LimitExceededException",
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
var deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceAlreadyExistsException",
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
var serializeAws_restJson1AdvancedOptions = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1AdvancedSecurityOptionsInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.InternalUserDatabaseEnabled !== undefined &&
        input.InternalUserDatabaseEnabled !== null && { InternalUserDatabaseEnabled: input.InternalUserDatabaseEnabled })), (input.MasterUserOptions !== undefined &&
        input.MasterUserOptions !== null && {
        MasterUserOptions: serializeAws_restJson1MasterUserOptions(input.MasterUserOptions, context),
    })), (input.SAMLOptions !== undefined &&
        input.SAMLOptions !== null && {
        SAMLOptions: serializeAws_restJson1SAMLOptionsInput(input.SAMLOptions, context),
    }));
};
var serializeAws_restJson1AutoTuneMaintenanceSchedule = function (input, context) {
    return __assign(__assign(__assign({}, (input.CronExpressionForRecurrence !== undefined &&
        input.CronExpressionForRecurrence !== null && { CronExpressionForRecurrence: input.CronExpressionForRecurrence })), (input.Duration !== undefined &&
        input.Duration !== null && { Duration: serializeAws_restJson1Duration(input.Duration, context) })), (input.StartAt !== undefined &&
        input.StartAt !== null && { StartAt: Math.round(input.StartAt.getTime() / 1000) }));
};
var serializeAws_restJson1AutoTuneMaintenanceScheduleList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AutoTuneMaintenanceSchedule(entry, context);
    });
};
var serializeAws_restJson1AutoTuneOptions = function (input, context) {
    return __assign(__assign(__assign({}, (input.DesiredState !== undefined && input.DesiredState !== null && { DesiredState: input.DesiredState })), (input.MaintenanceSchedules !== undefined &&
        input.MaintenanceSchedules !== null && {
        MaintenanceSchedules: serializeAws_restJson1AutoTuneMaintenanceScheduleList(input.MaintenanceSchedules, context),
    })), (input.RollbackOnDisable !== undefined &&
        input.RollbackOnDisable !== null && { RollbackOnDisable: input.RollbackOnDisable }));
};
var serializeAws_restJson1AutoTuneOptionsInput = function (input, context) {
    return __assign(__assign({}, (input.DesiredState !== undefined && input.DesiredState !== null && { DesiredState: input.DesiredState })), (input.MaintenanceSchedules !== undefined &&
        input.MaintenanceSchedules !== null && {
        MaintenanceSchedules: serializeAws_restJson1AutoTuneMaintenanceScheduleList(input.MaintenanceSchedules, context),
    }));
};
var serializeAws_restJson1CognitoOptions = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.IdentityPoolId !== undefined &&
        input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }));
};
var serializeAws_restJson1ColdStorageOptions = function (input, context) {
    return __assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }));
};
var serializeAws_restJson1DescribePackagesFilter = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Value !== undefined &&
        input.Value !== null && { Value: serializeAws_restJson1DescribePackagesFilterValues(input.Value, context) }));
};
var serializeAws_restJson1DescribePackagesFilterList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DescribePackagesFilter(entry, context);
    });
};
var serializeAws_restJson1DescribePackagesFilterValues = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1DomainEndpointOptions = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.CustomEndpoint !== undefined &&
        input.CustomEndpoint !== null && { CustomEndpoint: input.CustomEndpoint })), (input.CustomEndpointCertificateArn !== undefined &&
        input.CustomEndpointCertificateArn !== null && {
        CustomEndpointCertificateArn: input.CustomEndpointCertificateArn,
    })), (input.CustomEndpointEnabled !== undefined &&
        input.CustomEndpointEnabled !== null && { CustomEndpointEnabled: input.CustomEndpointEnabled })), (input.EnforceHTTPS !== undefined && input.EnforceHTTPS !== null && { EnforceHTTPS: input.EnforceHTTPS })), (input.TLSSecurityPolicy !== undefined &&
        input.TLSSecurityPolicy !== null && { TLSSecurityPolicy: input.TLSSecurityPolicy }));
};
var serializeAws_restJson1DomainInformation = function (input, context) {
    return __assign(__assign(__assign({}, (input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName })), (input.OwnerId !== undefined && input.OwnerId !== null && { OwnerId: input.OwnerId })), (input.Region !== undefined && input.Region !== null && { Region: input.Region }));
};
var serializeAws_restJson1DomainNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Duration = function (input, context) {
    return __assign(__assign({}, (input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1EBSOptions = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.EBSEnabled !== undefined && input.EBSEnabled !== null && { EBSEnabled: input.EBSEnabled })), (input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops })), (input.VolumeSize !== undefined && input.VolumeSize !== null && { VolumeSize: input.VolumeSize })), (input.VolumeType !== undefined && input.VolumeType !== null && { VolumeType: input.VolumeType }));
};
var serializeAws_restJson1ElasticsearchClusterConfig = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ColdStorageOptions !== undefined &&
        input.ColdStorageOptions !== null && {
        ColdStorageOptions: serializeAws_restJson1ColdStorageOptions(input.ColdStorageOptions, context),
    })), (input.DedicatedMasterCount !== undefined &&
        input.DedicatedMasterCount !== null && { DedicatedMasterCount: input.DedicatedMasterCount })), (input.DedicatedMasterEnabled !== undefined &&
        input.DedicatedMasterEnabled !== null && { DedicatedMasterEnabled: input.DedicatedMasterEnabled })), (input.DedicatedMasterType !== undefined &&
        input.DedicatedMasterType !== null && { DedicatedMasterType: input.DedicatedMasterType })), (input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount })), (input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType })), (input.WarmCount !== undefined && input.WarmCount !== null && { WarmCount: input.WarmCount })), (input.WarmEnabled !== undefined && input.WarmEnabled !== null && { WarmEnabled: input.WarmEnabled })), (input.WarmType !== undefined && input.WarmType !== null && { WarmType: input.WarmType })), (input.ZoneAwarenessConfig !== undefined &&
        input.ZoneAwarenessConfig !== null && {
        ZoneAwarenessConfig: serializeAws_restJson1ZoneAwarenessConfig(input.ZoneAwarenessConfig, context),
    })), (input.ZoneAwarenessEnabled !== undefined &&
        input.ZoneAwarenessEnabled !== null && { ZoneAwarenessEnabled: input.ZoneAwarenessEnabled }));
};
var serializeAws_restJson1EncryptionAtRestOptions = function (input, context) {
    return __assign(__assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }));
};
var serializeAws_restJson1Filter = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Values !== undefined &&
        input.Values !== null && { Values: serializeAws_restJson1ValueStringList(input.Values, context) }));
};
var serializeAws_restJson1FilterList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Filter(entry, context);
    });
};
var serializeAws_restJson1LogPublishingOption = function (input, context) {
    return __assign(__assign({}, (input.CloudWatchLogsLogGroupArn !== undefined &&
        input.CloudWatchLogsLogGroupArn !== null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn })), (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }));
};
var serializeAws_restJson1LogPublishingOptions = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1LogPublishingOption(value, context), _b));
    }, {});
};
var serializeAws_restJson1MasterUserOptions = function (input, context) {
    return __assign(__assign(__assign({}, (input.MasterUserARN !== undefined && input.MasterUserARN !== null && { MasterUserARN: input.MasterUserARN })), (input.MasterUserName !== undefined &&
        input.MasterUserName !== null && { MasterUserName: input.MasterUserName })), (input.MasterUserPassword !== undefined &&
        input.MasterUserPassword !== null && { MasterUserPassword: input.MasterUserPassword }));
};
var serializeAws_restJson1NodeToNodeEncryptionOptions = function (input, context) {
    return __assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }));
};
var serializeAws_restJson1PackageSource = function (input, context) {
    return __assign(__assign({}, (input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName })), (input.S3Key !== undefined && input.S3Key !== null && { S3Key: input.S3Key }));
};
var serializeAws_restJson1SAMLIdp = function (input, context) {
    return __assign(__assign({}, (input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId })), (input.MetadataContent !== undefined &&
        input.MetadataContent !== null && { MetadataContent: input.MetadataContent }));
};
var serializeAws_restJson1SAMLOptionsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.Idp !== undefined && input.Idp !== null && { Idp: serializeAws_restJson1SAMLIdp(input.Idp, context) })), (input.MasterBackendRole !== undefined &&
        input.MasterBackendRole !== null && { MasterBackendRole: input.MasterBackendRole })), (input.MasterUserName !== undefined &&
        input.MasterUserName !== null && { MasterUserName: input.MasterUserName })), (input.RolesKey !== undefined && input.RolesKey !== null && { RolesKey: input.RolesKey })), (input.SessionTimeoutMinutes !== undefined &&
        input.SessionTimeoutMinutes !== null && { SessionTimeoutMinutes: input.SessionTimeoutMinutes })), (input.SubjectKey !== undefined && input.SubjectKey !== null && { SubjectKey: input.SubjectKey }));
};
var serializeAws_restJson1SnapshotOptions = function (input, context) {
    return __assign({}, (input.AutomatedSnapshotStartHour !== undefined &&
        input.AutomatedSnapshotStartHour !== null && { AutomatedSnapshotStartHour: input.AutomatedSnapshotStartHour }));
};
var serializeAws_restJson1StringList = function (input, context) {
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
var serializeAws_restJson1ValueStringList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1VPCOptions = function (input, context) {
    return __assign(__assign({}, (input.SecurityGroupIds !== undefined &&
        input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_restJson1StringList(input.SecurityGroupIds, context),
    })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_restJson1StringList(input.SubnetIds, context) }));
};
var serializeAws_restJson1ZoneAwarenessConfig = function (input, context) {
    return __assign({}, (input.AvailabilityZoneCount !== undefined &&
        input.AvailabilityZoneCount !== null && { AvailabilityZoneCount: input.AvailabilityZoneCount }));
};
var deserializeAws_restJson1AccessPoliciesStatus = function (output, context) {
    return {
        Options: output.Options !== undefined && output.Options !== null ? output.Options : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_restJson1AdditionalLimit = function (output, context) {
    return {
        LimitName: output.LimitName !== undefined && output.LimitName !== null ? output.LimitName : undefined,
        LimitValues: output.LimitValues !== undefined && output.LimitValues !== null
            ? deserializeAws_restJson1LimitValueList(output.LimitValues, context)
            : undefined,
    };
};
var deserializeAws_restJson1AdditionalLimitList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AdditionalLimit(entry, context);
    });
};
var deserializeAws_restJson1AdvancedOptions = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1AdvancedOptionsStatus = function (output, context) {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1AdvancedOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_restJson1AdvancedSecurityOptions = function (output, context) {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        InternalUserDatabaseEnabled: output.InternalUserDatabaseEnabled !== undefined && output.InternalUserDatabaseEnabled !== null
            ? output.InternalUserDatabaseEnabled
            : undefined,
        SAMLOptions: output.SAMLOptions !== undefined && output.SAMLOptions !== null
            ? deserializeAws_restJson1SAMLOptionsOutput(output.SAMLOptions, context)
            : undefined,
    };
};
var deserializeAws_restJson1AdvancedSecurityOptionsStatus = function (output, context) {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1AdvancedSecurityOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_restJson1AutoTune = function (output, context) {
    return {
        AutoTuneDetails: output.AutoTuneDetails !== undefined && output.AutoTuneDetails !== null
            ? deserializeAws_restJson1AutoTuneDetails(output.AutoTuneDetails, context)
            : undefined,
        AutoTuneType: output.AutoTuneType !== undefined && output.AutoTuneType !== null ? output.AutoTuneType : undefined,
    };
};
var deserializeAws_restJson1AutoTuneDetails = function (output, context) {
    return {
        ScheduledAutoTuneDetails: output.ScheduledAutoTuneDetails !== undefined && output.ScheduledAutoTuneDetails !== null
            ? deserializeAws_restJson1ScheduledAutoTuneDetails(output.ScheduledAutoTuneDetails, context)
            : undefined,
    };
};
var deserializeAws_restJson1AutoTuneList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AutoTune(entry, context);
    });
};
var deserializeAws_restJson1AutoTuneMaintenanceSchedule = function (output, context) {
    return {
        CronExpressionForRecurrence: output.CronExpressionForRecurrence !== undefined && output.CronExpressionForRecurrence !== null
            ? output.CronExpressionForRecurrence
            : undefined,
        Duration: output.Duration !== undefined && output.Duration !== null
            ? deserializeAws_restJson1Duration(output.Duration, context)
            : undefined,
        StartAt: output.StartAt !== undefined && output.StartAt !== null ? new Date(Math.round(output.StartAt * 1000)) : undefined,
    };
};
var deserializeAws_restJson1AutoTuneMaintenanceScheduleList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AutoTuneMaintenanceSchedule(entry, context);
    });
};
var deserializeAws_restJson1AutoTuneOptions = function (output, context) {
    return {
        DesiredState: output.DesiredState !== undefined && output.DesiredState !== null ? output.DesiredState : undefined,
        MaintenanceSchedules: output.MaintenanceSchedules !== undefined && output.MaintenanceSchedules !== null
            ? deserializeAws_restJson1AutoTuneMaintenanceScheduleList(output.MaintenanceSchedules, context)
            : undefined,
        RollbackOnDisable: output.RollbackOnDisable !== undefined && output.RollbackOnDisable !== null
            ? output.RollbackOnDisable
            : undefined,
    };
};
var deserializeAws_restJson1AutoTuneOptionsOutput = function (output, context) {
    return {
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
var deserializeAws_restJson1AutoTuneOptionsStatus = function (output, context) {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1AutoTuneOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1AutoTuneStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_restJson1AutoTuneStatus = function (output, context) {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        PendingDeletion: output.PendingDeletion !== undefined && output.PendingDeletion !== null ? output.PendingDeletion : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        UpdateDate: output.UpdateDate !== undefined && output.UpdateDate !== null
            ? new Date(Math.round(output.UpdateDate * 1000))
            : undefined,
        UpdateVersion: output.UpdateVersion !== undefined && output.UpdateVersion !== null ? output.UpdateVersion : undefined,
    };
};
var deserializeAws_restJson1CognitoOptions = function (output, context) {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        IdentityPoolId: output.IdentityPoolId !== undefined && output.IdentityPoolId !== null ? output.IdentityPoolId : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined,
    };
};
var deserializeAws_restJson1CognitoOptionsStatus = function (output, context) {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1CognitoOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_restJson1ColdStorageOptions = function (output, context) {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
var deserializeAws_restJson1CompatibleElasticsearchVersionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CompatibleVersionsMap(entry, context);
    });
};
var deserializeAws_restJson1CompatibleVersionsMap = function (output, context) {
    return {
        SourceVersion: output.SourceVersion !== undefined && output.SourceVersion !== null ? output.SourceVersion : undefined,
        TargetVersions: output.TargetVersions !== undefined && output.TargetVersions !== null
            ? deserializeAws_restJson1ElasticsearchVersionList(output.TargetVersions, context)
            : undefined,
    };
};
var deserializeAws_restJson1DomainEndpointOptions = function (output, context) {
    return {
        CustomEndpoint: output.CustomEndpoint !== undefined && output.CustomEndpoint !== null ? output.CustomEndpoint : undefined,
        CustomEndpointCertificateArn: output.CustomEndpointCertificateArn !== undefined && output.CustomEndpointCertificateArn !== null
            ? output.CustomEndpointCertificateArn
            : undefined,
        CustomEndpointEnabled: output.CustomEndpointEnabled !== undefined && output.CustomEndpointEnabled !== null
            ? output.CustomEndpointEnabled
            : undefined,
        EnforceHTTPS: output.EnforceHTTPS !== undefined && output.EnforceHTTPS !== null ? output.EnforceHTTPS : undefined,
        TLSSecurityPolicy: output.TLSSecurityPolicy !== undefined && output.TLSSecurityPolicy !== null
            ? output.TLSSecurityPolicy
            : undefined,
    };
};
var deserializeAws_restJson1DomainEndpointOptionsStatus = function (output, context) {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1DomainEndpointOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_restJson1DomainInfo = function (output, context) {
    return {
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
    };
};
var deserializeAws_restJson1DomainInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DomainInfo(entry, context);
    });
};
var deserializeAws_restJson1DomainInformation = function (output, context) {
    return {
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    };
};
var deserializeAws_restJson1DomainPackageDetails = function (output, context) {
    return {
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        DomainPackageStatus: output.DomainPackageStatus !== undefined && output.DomainPackageStatus !== null
            ? output.DomainPackageStatus
            : undefined,
        ErrorDetails: output.ErrorDetails !== undefined && output.ErrorDetails !== null
            ? deserializeAws_restJson1ErrorDetails(output.ErrorDetails, context)
            : undefined,
        LastUpdated: output.LastUpdated !== undefined && output.LastUpdated !== null
            ? new Date(Math.round(output.LastUpdated * 1000))
            : undefined,
        PackageID: output.PackageID !== undefined && output.PackageID !== null ? output.PackageID : undefined,
        PackageName: output.PackageName !== undefined && output.PackageName !== null ? output.PackageName : undefined,
        PackageType: output.PackageType !== undefined && output.PackageType !== null ? output.PackageType : undefined,
        PackageVersion: output.PackageVersion !== undefined && output.PackageVersion !== null ? output.PackageVersion : undefined,
        ReferencePath: output.ReferencePath !== undefined && output.ReferencePath !== null ? output.ReferencePath : undefined,
    };
};
var deserializeAws_restJson1DomainPackageDetailsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DomainPackageDetails(entry, context);
    });
};
var deserializeAws_restJson1Duration = function (output, context) {
    return {
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1EBSOptions = function (output, context) {
    return {
        EBSEnabled: output.EBSEnabled !== undefined && output.EBSEnabled !== null ? output.EBSEnabled : undefined,
        Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
        VolumeSize: output.VolumeSize !== undefined && output.VolumeSize !== null ? output.VolumeSize : undefined,
        VolumeType: output.VolumeType !== undefined && output.VolumeType !== null ? output.VolumeType : undefined,
    };
};
var deserializeAws_restJson1EBSOptionsStatus = function (output, context) {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1EBSOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_restJson1ElasticsearchClusterConfig = function (output, context) {
    return {
        ColdStorageOptions: output.ColdStorageOptions !== undefined && output.ColdStorageOptions !== null
            ? deserializeAws_restJson1ColdStorageOptions(output.ColdStorageOptions, context)
            : undefined,
        DedicatedMasterCount: output.DedicatedMasterCount !== undefined && output.DedicatedMasterCount !== null
            ? output.DedicatedMasterCount
            : undefined,
        DedicatedMasterEnabled: output.DedicatedMasterEnabled !== undefined && output.DedicatedMasterEnabled !== null
            ? output.DedicatedMasterEnabled
            : undefined,
        DedicatedMasterType: output.DedicatedMasterType !== undefined && output.DedicatedMasterType !== null
            ? output.DedicatedMasterType
            : undefined,
        InstanceCount: output.InstanceCount !== undefined && output.InstanceCount !== null ? output.InstanceCount : undefined,
        InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
        WarmCount: output.WarmCount !== undefined && output.WarmCount !== null ? output.WarmCount : undefined,
        WarmEnabled: output.WarmEnabled !== undefined && output.WarmEnabled !== null ? output.WarmEnabled : undefined,
        WarmType: output.WarmType !== undefined && output.WarmType !== null ? output.WarmType : undefined,
        ZoneAwarenessConfig: output.ZoneAwarenessConfig !== undefined && output.ZoneAwarenessConfig !== null
            ? deserializeAws_restJson1ZoneAwarenessConfig(output.ZoneAwarenessConfig, context)
            : undefined,
        ZoneAwarenessEnabled: output.ZoneAwarenessEnabled !== undefined && output.ZoneAwarenessEnabled !== null
            ? output.ZoneAwarenessEnabled
            : undefined,
    };
};
var deserializeAws_restJson1ElasticsearchClusterConfigStatus = function (output, context) {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1ElasticsearchClusterConfig(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_restJson1ElasticsearchDomainConfig = function (output, context) {
    return {
        AccessPolicies: output.AccessPolicies !== undefined && output.AccessPolicies !== null
            ? deserializeAws_restJson1AccessPoliciesStatus(output.AccessPolicies, context)
            : undefined,
        AdvancedOptions: output.AdvancedOptions !== undefined && output.AdvancedOptions !== null
            ? deserializeAws_restJson1AdvancedOptionsStatus(output.AdvancedOptions, context)
            : undefined,
        AdvancedSecurityOptions: output.AdvancedSecurityOptions !== undefined && output.AdvancedSecurityOptions !== null
            ? deserializeAws_restJson1AdvancedSecurityOptionsStatus(output.AdvancedSecurityOptions, context)
            : undefined,
        AutoTuneOptions: output.AutoTuneOptions !== undefined && output.AutoTuneOptions !== null
            ? deserializeAws_restJson1AutoTuneOptionsStatus(output.AutoTuneOptions, context)
            : undefined,
        CognitoOptions: output.CognitoOptions !== undefined && output.CognitoOptions !== null
            ? deserializeAws_restJson1CognitoOptionsStatus(output.CognitoOptions, context)
            : undefined,
        DomainEndpointOptions: output.DomainEndpointOptions !== undefined && output.DomainEndpointOptions !== null
            ? deserializeAws_restJson1DomainEndpointOptionsStatus(output.DomainEndpointOptions, context)
            : undefined,
        EBSOptions: output.EBSOptions !== undefined && output.EBSOptions !== null
            ? deserializeAws_restJson1EBSOptionsStatus(output.EBSOptions, context)
            : undefined,
        ElasticsearchClusterConfig: output.ElasticsearchClusterConfig !== undefined && output.ElasticsearchClusterConfig !== null
            ? deserializeAws_restJson1ElasticsearchClusterConfigStatus(output.ElasticsearchClusterConfig, context)
            : undefined,
        ElasticsearchVersion: output.ElasticsearchVersion !== undefined && output.ElasticsearchVersion !== null
            ? deserializeAws_restJson1ElasticsearchVersionStatus(output.ElasticsearchVersion, context)
            : undefined,
        EncryptionAtRestOptions: output.EncryptionAtRestOptions !== undefined && output.EncryptionAtRestOptions !== null
            ? deserializeAws_restJson1EncryptionAtRestOptionsStatus(output.EncryptionAtRestOptions, context)
            : undefined,
        LogPublishingOptions: output.LogPublishingOptions !== undefined && output.LogPublishingOptions !== null
            ? deserializeAws_restJson1LogPublishingOptionsStatus(output.LogPublishingOptions, context)
            : undefined,
        NodeToNodeEncryptionOptions: output.NodeToNodeEncryptionOptions !== undefined && output.NodeToNodeEncryptionOptions !== null
            ? deserializeAws_restJson1NodeToNodeEncryptionOptionsStatus(output.NodeToNodeEncryptionOptions, context)
            : undefined,
        SnapshotOptions: output.SnapshotOptions !== undefined && output.SnapshotOptions !== null
            ? deserializeAws_restJson1SnapshotOptionsStatus(output.SnapshotOptions, context)
            : undefined,
        VPCOptions: output.VPCOptions !== undefined && output.VPCOptions !== null
            ? deserializeAws_restJson1VPCDerivedInfoStatus(output.VPCOptions, context)
            : undefined,
    };
};
var deserializeAws_restJson1ElasticsearchDomainStatus = function (output, context) {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        AccessPolicies: output.AccessPolicies !== undefined && output.AccessPolicies !== null ? output.AccessPolicies : undefined,
        AdvancedOptions: output.AdvancedOptions !== undefined && output.AdvancedOptions !== null
            ? deserializeAws_restJson1AdvancedOptions(output.AdvancedOptions, context)
            : undefined,
        AdvancedSecurityOptions: output.AdvancedSecurityOptions !== undefined && output.AdvancedSecurityOptions !== null
            ? deserializeAws_restJson1AdvancedSecurityOptions(output.AdvancedSecurityOptions, context)
            : undefined,
        AutoTuneOptions: output.AutoTuneOptions !== undefined && output.AutoTuneOptions !== null
            ? deserializeAws_restJson1AutoTuneOptionsOutput(output.AutoTuneOptions, context)
            : undefined,
        CognitoOptions: output.CognitoOptions !== undefined && output.CognitoOptions !== null
            ? deserializeAws_restJson1CognitoOptions(output.CognitoOptions, context)
            : undefined,
        Created: output.Created !== undefined && output.Created !== null ? output.Created : undefined,
        Deleted: output.Deleted !== undefined && output.Deleted !== null ? output.Deleted : undefined,
        DomainEndpointOptions: output.DomainEndpointOptions !== undefined && output.DomainEndpointOptions !== null
            ? deserializeAws_restJson1DomainEndpointOptions(output.DomainEndpointOptions, context)
            : undefined,
        DomainId: output.DomainId !== undefined && output.DomainId !== null ? output.DomainId : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        EBSOptions: output.EBSOptions !== undefined && output.EBSOptions !== null
            ? deserializeAws_restJson1EBSOptions(output.EBSOptions, context)
            : undefined,
        ElasticsearchClusterConfig: output.ElasticsearchClusterConfig !== undefined && output.ElasticsearchClusterConfig !== null
            ? deserializeAws_restJson1ElasticsearchClusterConfig(output.ElasticsearchClusterConfig, context)
            : undefined,
        ElasticsearchVersion: output.ElasticsearchVersion !== undefined && output.ElasticsearchVersion !== null
            ? output.ElasticsearchVersion
            : undefined,
        EncryptionAtRestOptions: output.EncryptionAtRestOptions !== undefined && output.EncryptionAtRestOptions !== null
            ? deserializeAws_restJson1EncryptionAtRestOptions(output.EncryptionAtRestOptions, context)
            : undefined,
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null ? output.Endpoint : undefined,
        Endpoints: output.Endpoints !== undefined && output.Endpoints !== null
            ? deserializeAws_restJson1EndpointsMap(output.Endpoints, context)
            : undefined,
        LogPublishingOptions: output.LogPublishingOptions !== undefined && output.LogPublishingOptions !== null
            ? deserializeAws_restJson1LogPublishingOptions(output.LogPublishingOptions, context)
            : undefined,
        NodeToNodeEncryptionOptions: output.NodeToNodeEncryptionOptions !== undefined && output.NodeToNodeEncryptionOptions !== null
            ? deserializeAws_restJson1NodeToNodeEncryptionOptions(output.NodeToNodeEncryptionOptions, context)
            : undefined,
        Processing: output.Processing !== undefined && output.Processing !== null ? output.Processing : undefined,
        ServiceSoftwareOptions: output.ServiceSoftwareOptions !== undefined && output.ServiceSoftwareOptions !== null
            ? deserializeAws_restJson1ServiceSoftwareOptions(output.ServiceSoftwareOptions, context)
            : undefined,
        SnapshotOptions: output.SnapshotOptions !== undefined && output.SnapshotOptions !== null
            ? deserializeAws_restJson1SnapshotOptions(output.SnapshotOptions, context)
            : undefined,
        UpgradeProcessing: output.UpgradeProcessing !== undefined && output.UpgradeProcessing !== null
            ? output.UpgradeProcessing
            : undefined,
        VPCOptions: output.VPCOptions !== undefined && output.VPCOptions !== null
            ? deserializeAws_restJson1VPCDerivedInfo(output.VPCOptions, context)
            : undefined,
    };
};
var deserializeAws_restJson1ElasticsearchDomainStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ElasticsearchDomainStatus(entry, context);
    });
};
var deserializeAws_restJson1ElasticsearchInstanceTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1ElasticsearchVersionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1ElasticsearchVersionStatus = function (output, context) {
    return {
        Options: output.Options !== undefined && output.Options !== null ? output.Options : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_restJson1EncryptionAtRestOptions = function (output, context) {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    };
};
var deserializeAws_restJson1EncryptionAtRestOptionsStatus = function (output, context) {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1EncryptionAtRestOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_restJson1EndpointsMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1ErrorDetails = function (output, context) {
    return {
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        ErrorType: output.ErrorType !== undefined && output.ErrorType !== null ? output.ErrorType : undefined,
    };
};
var deserializeAws_restJson1InboundCrossClusterSearchConnection = function (output, context) {
    return {
        ConnectionStatus: output.ConnectionStatus !== undefined && output.ConnectionStatus !== null
            ? deserializeAws_restJson1InboundCrossClusterSearchConnectionStatus(output.ConnectionStatus, context)
            : undefined,
        CrossClusterSearchConnectionId: output.CrossClusterSearchConnectionId !== undefined && output.CrossClusterSearchConnectionId !== null
            ? output.CrossClusterSearchConnectionId
            : undefined,
        DestinationDomainInfo: output.DestinationDomainInfo !== undefined && output.DestinationDomainInfo !== null
            ? deserializeAws_restJson1DomainInformation(output.DestinationDomainInfo, context)
            : undefined,
        SourceDomainInfo: output.SourceDomainInfo !== undefined && output.SourceDomainInfo !== null
            ? deserializeAws_restJson1DomainInformation(output.SourceDomainInfo, context)
            : undefined,
    };
};
var deserializeAws_restJson1InboundCrossClusterSearchConnections = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InboundCrossClusterSearchConnection(entry, context);
    });
};
var deserializeAws_restJson1InboundCrossClusterSearchConnectionStatus = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
    };
};
var deserializeAws_restJson1InstanceCountLimits = function (output, context) {
    return {
        MaximumInstanceCount: output.MaximumInstanceCount !== undefined && output.MaximumInstanceCount !== null
            ? output.MaximumInstanceCount
            : undefined,
        MinimumInstanceCount: output.MinimumInstanceCount !== undefined && output.MinimumInstanceCount !== null
            ? output.MinimumInstanceCount
            : undefined,
    };
};
var deserializeAws_restJson1InstanceLimits = function (output, context) {
    return {
        InstanceCountLimits: output.InstanceCountLimits !== undefined && output.InstanceCountLimits !== null
            ? deserializeAws_restJson1InstanceCountLimits(output.InstanceCountLimits, context)
            : undefined,
    };
};
var deserializeAws_restJson1Issues = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Limits = function (output, context) {
    return {
        AdditionalLimits: output.AdditionalLimits !== undefined && output.AdditionalLimits !== null
            ? deserializeAws_restJson1AdditionalLimitList(output.AdditionalLimits, context)
            : undefined,
        InstanceLimits: output.InstanceLimits !== undefined && output.InstanceLimits !== null
            ? deserializeAws_restJson1InstanceLimits(output.InstanceLimits, context)
            : undefined,
        StorageTypes: output.StorageTypes !== undefined && output.StorageTypes !== null
            ? deserializeAws_restJson1StorageTypeList(output.StorageTypes, context)
            : undefined,
    };
};
var deserializeAws_restJson1LimitsByRole = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1Limits(value, context), _b));
    }, {});
};
var deserializeAws_restJson1LimitValueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1LogPublishingOption = function (output, context) {
    return {
        CloudWatchLogsLogGroupArn: output.CloudWatchLogsLogGroupArn !== undefined && output.CloudWatchLogsLogGroupArn !== null
            ? output.CloudWatchLogsLogGroupArn
            : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
var deserializeAws_restJson1LogPublishingOptions = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1LogPublishingOption(value, context), _b));
    }, {});
};
var deserializeAws_restJson1LogPublishingOptionsStatus = function (output, context) {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1LogPublishingOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_restJson1NodeToNodeEncryptionOptions = function (output, context) {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
var deserializeAws_restJson1NodeToNodeEncryptionOptionsStatus = function (output, context) {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1NodeToNodeEncryptionOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_restJson1OptionStatus = function (output, context) {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        PendingDeletion: output.PendingDeletion !== undefined && output.PendingDeletion !== null ? output.PendingDeletion : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        UpdateDate: output.UpdateDate !== undefined && output.UpdateDate !== null
            ? new Date(Math.round(output.UpdateDate * 1000))
            : undefined,
        UpdateVersion: output.UpdateVersion !== undefined && output.UpdateVersion !== null ? output.UpdateVersion : undefined,
    };
};
var deserializeAws_restJson1OutboundCrossClusterSearchConnection = function (output, context) {
    return {
        ConnectionAlias: output.ConnectionAlias !== undefined && output.ConnectionAlias !== null ? output.ConnectionAlias : undefined,
        ConnectionStatus: output.ConnectionStatus !== undefined && output.ConnectionStatus !== null
            ? deserializeAws_restJson1OutboundCrossClusterSearchConnectionStatus(output.ConnectionStatus, context)
            : undefined,
        CrossClusterSearchConnectionId: output.CrossClusterSearchConnectionId !== undefined && output.CrossClusterSearchConnectionId !== null
            ? output.CrossClusterSearchConnectionId
            : undefined,
        DestinationDomainInfo: output.DestinationDomainInfo !== undefined && output.DestinationDomainInfo !== null
            ? deserializeAws_restJson1DomainInformation(output.DestinationDomainInfo, context)
            : undefined,
        SourceDomainInfo: output.SourceDomainInfo !== undefined && output.SourceDomainInfo !== null
            ? deserializeAws_restJson1DomainInformation(output.SourceDomainInfo, context)
            : undefined,
    };
};
var deserializeAws_restJson1OutboundCrossClusterSearchConnections = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1OutboundCrossClusterSearchConnection(entry, context);
    });
};
var deserializeAws_restJson1OutboundCrossClusterSearchConnectionStatus = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
    };
};
var deserializeAws_restJson1PackageDetails = function (output, context) {
    return {
        AvailablePackageVersion: output.AvailablePackageVersion !== undefined && output.AvailablePackageVersion !== null
            ? output.AvailablePackageVersion
            : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        ErrorDetails: output.ErrorDetails !== undefined && output.ErrorDetails !== null
            ? deserializeAws_restJson1ErrorDetails(output.ErrorDetails, context)
            : undefined,
        LastUpdatedAt: output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
            ? new Date(Math.round(output.LastUpdatedAt * 1000))
            : undefined,
        PackageDescription: output.PackageDescription !== undefined && output.PackageDescription !== null
            ? output.PackageDescription
            : undefined,
        PackageID: output.PackageID !== undefined && output.PackageID !== null ? output.PackageID : undefined,
        PackageName: output.PackageName !== undefined && output.PackageName !== null ? output.PackageName : undefined,
        PackageStatus: output.PackageStatus !== undefined && output.PackageStatus !== null ? output.PackageStatus : undefined,
        PackageType: output.PackageType !== undefined && output.PackageType !== null ? output.PackageType : undefined,
    };
};
var deserializeAws_restJson1PackageDetailsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PackageDetails(entry, context);
    });
};
var deserializeAws_restJson1PackageVersionHistory = function (output, context) {
    return {
        CommitMessage: output.CommitMessage !== undefined && output.CommitMessage !== null ? output.CommitMessage : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        PackageVersion: output.PackageVersion !== undefined && output.PackageVersion !== null ? output.PackageVersion : undefined,
    };
};
var deserializeAws_restJson1PackageVersionHistoryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PackageVersionHistory(entry, context);
    });
};
var deserializeAws_restJson1RecurringCharge = function (output, context) {
    return {
        RecurringChargeAmount: output.RecurringChargeAmount !== undefined && output.RecurringChargeAmount !== null
            ? output.RecurringChargeAmount
            : undefined,
        RecurringChargeFrequency: output.RecurringChargeFrequency !== undefined && output.RecurringChargeFrequency !== null
            ? output.RecurringChargeFrequency
            : undefined,
    };
};
var deserializeAws_restJson1RecurringChargeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RecurringCharge(entry, context);
    });
};
var deserializeAws_restJson1ReservedElasticsearchInstance = function (output, context) {
    return {
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
        ElasticsearchInstanceCount: output.ElasticsearchInstanceCount !== undefined && output.ElasticsearchInstanceCount !== null
            ? output.ElasticsearchInstanceCount
            : undefined,
        ElasticsearchInstanceType: output.ElasticsearchInstanceType !== undefined && output.ElasticsearchInstanceType !== null
            ? output.ElasticsearchInstanceType
            : undefined,
        FixedPrice: output.FixedPrice !== undefined && output.FixedPrice !== null ? output.FixedPrice : undefined,
        PaymentOption: output.PaymentOption !== undefined && output.PaymentOption !== null ? output.PaymentOption : undefined,
        RecurringCharges: output.RecurringCharges !== undefined && output.RecurringCharges !== null
            ? deserializeAws_restJson1RecurringChargeList(output.RecurringCharges, context)
            : undefined,
        ReservationName: output.ReservationName !== undefined && output.ReservationName !== null ? output.ReservationName : undefined,
        ReservedElasticsearchInstanceId: output.ReservedElasticsearchInstanceId !== undefined && output.ReservedElasticsearchInstanceId !== null
            ? output.ReservedElasticsearchInstanceId
            : undefined,
        ReservedElasticsearchInstanceOfferingId: output.ReservedElasticsearchInstanceOfferingId !== undefined &&
            output.ReservedElasticsearchInstanceOfferingId !== null
            ? output.ReservedElasticsearchInstanceOfferingId
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        UsagePrice: output.UsagePrice !== undefined && output.UsagePrice !== null ? output.UsagePrice : undefined,
    };
};
var deserializeAws_restJson1ReservedElasticsearchInstanceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ReservedElasticsearchInstance(entry, context);
    });
};
var deserializeAws_restJson1ReservedElasticsearchInstanceOffering = function (output, context) {
    return {
        CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
        Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
        ElasticsearchInstanceType: output.ElasticsearchInstanceType !== undefined && output.ElasticsearchInstanceType !== null
            ? output.ElasticsearchInstanceType
            : undefined,
        FixedPrice: output.FixedPrice !== undefined && output.FixedPrice !== null ? output.FixedPrice : undefined,
        PaymentOption: output.PaymentOption !== undefined && output.PaymentOption !== null ? output.PaymentOption : undefined,
        RecurringCharges: output.RecurringCharges !== undefined && output.RecurringCharges !== null
            ? deserializeAws_restJson1RecurringChargeList(output.RecurringCharges, context)
            : undefined,
        ReservedElasticsearchInstanceOfferingId: output.ReservedElasticsearchInstanceOfferingId !== undefined &&
            output.ReservedElasticsearchInstanceOfferingId !== null
            ? output.ReservedElasticsearchInstanceOfferingId
            : undefined,
        UsagePrice: output.UsagePrice !== undefined && output.UsagePrice !== null ? output.UsagePrice : undefined,
    };
};
var deserializeAws_restJson1ReservedElasticsearchInstanceOfferingList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ReservedElasticsearchInstanceOffering(entry, context);
    });
};
var deserializeAws_restJson1SAMLIdp = function (output, context) {
    return {
        EntityId: output.EntityId !== undefined && output.EntityId !== null ? output.EntityId : undefined,
        MetadataContent: output.MetadataContent !== undefined && output.MetadataContent !== null ? output.MetadataContent : undefined,
    };
};
var deserializeAws_restJson1SAMLOptionsOutput = function (output, context) {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        Idp: output.Idp !== undefined && output.Idp !== null
            ? deserializeAws_restJson1SAMLIdp(output.Idp, context)
            : undefined,
        RolesKey: output.RolesKey !== undefined && output.RolesKey !== null ? output.RolesKey : undefined,
        SessionTimeoutMinutes: output.SessionTimeoutMinutes !== undefined && output.SessionTimeoutMinutes !== null
            ? output.SessionTimeoutMinutes
            : undefined,
        SubjectKey: output.SubjectKey !== undefined && output.SubjectKey !== null ? output.SubjectKey : undefined,
    };
};
var deserializeAws_restJson1ScheduledAutoTuneDetails = function (output, context) {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        ActionType: output.ActionType !== undefined && output.ActionType !== null ? output.ActionType : undefined,
        Date: output.Date !== undefined && output.Date !== null ? new Date(Math.round(output.Date * 1000)) : undefined,
        Severity: output.Severity !== undefined && output.Severity !== null ? output.Severity : undefined,
    };
};
var deserializeAws_restJson1ServiceSoftwareOptions = function (output, context) {
    return {
        AutomatedUpdateDate: output.AutomatedUpdateDate !== undefined && output.AutomatedUpdateDate !== null
            ? new Date(Math.round(output.AutomatedUpdateDate * 1000))
            : undefined,
        Cancellable: output.Cancellable !== undefined && output.Cancellable !== null ? output.Cancellable : undefined,
        CurrentVersion: output.CurrentVersion !== undefined && output.CurrentVersion !== null ? output.CurrentVersion : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        NewVersion: output.NewVersion !== undefined && output.NewVersion !== null ? output.NewVersion : undefined,
        OptionalDeployment: output.OptionalDeployment !== undefined && output.OptionalDeployment !== null
            ? output.OptionalDeployment
            : undefined,
        UpdateAvailable: output.UpdateAvailable !== undefined && output.UpdateAvailable !== null ? output.UpdateAvailable : undefined,
        UpdateStatus: output.UpdateStatus !== undefined && output.UpdateStatus !== null ? output.UpdateStatus : undefined,
    };
};
var deserializeAws_restJson1SnapshotOptions = function (output, context) {
    return {
        AutomatedSnapshotStartHour: output.AutomatedSnapshotStartHour !== undefined && output.AutomatedSnapshotStartHour !== null
            ? output.AutomatedSnapshotStartHour
            : undefined,
    };
};
var deserializeAws_restJson1SnapshotOptionsStatus = function (output, context) {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1SnapshotOptions(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_restJson1StorageType = function (output, context) {
    return {
        StorageSubTypeName: output.StorageSubTypeName !== undefined && output.StorageSubTypeName !== null
            ? output.StorageSubTypeName
            : undefined,
        StorageTypeLimits: output.StorageTypeLimits !== undefined && output.StorageTypeLimits !== null
            ? deserializeAws_restJson1StorageTypeLimitList(output.StorageTypeLimits, context)
            : undefined,
        StorageTypeName: output.StorageTypeName !== undefined && output.StorageTypeName !== null ? output.StorageTypeName : undefined,
    };
};
var deserializeAws_restJson1StorageTypeLimit = function (output, context) {
    return {
        LimitName: output.LimitName !== undefined && output.LimitName !== null ? output.LimitName : undefined,
        LimitValues: output.LimitValues !== undefined && output.LimitValues !== null
            ? deserializeAws_restJson1LimitValueList(output.LimitValues, context)
            : undefined,
    };
};
var deserializeAws_restJson1StorageTypeLimitList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1StorageTypeLimit(entry, context);
    });
};
var deserializeAws_restJson1StorageTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1StorageType(entry, context);
    });
};
var deserializeAws_restJson1StringList = function (output, context) {
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
var deserializeAws_restJson1UpgradeHistory = function (output, context) {
    return {
        StartTimestamp: output.StartTimestamp !== undefined && output.StartTimestamp !== null
            ? new Date(Math.round(output.StartTimestamp * 1000))
            : undefined,
        StepsList: output.StepsList !== undefined && output.StepsList !== null
            ? deserializeAws_restJson1UpgradeStepsList(output.StepsList, context)
            : undefined,
        UpgradeName: output.UpgradeName !== undefined && output.UpgradeName !== null ? output.UpgradeName : undefined,
        UpgradeStatus: output.UpgradeStatus !== undefined && output.UpgradeStatus !== null ? output.UpgradeStatus : undefined,
    };
};
var deserializeAws_restJson1UpgradeHistoryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UpgradeHistory(entry, context);
    });
};
var deserializeAws_restJson1UpgradeStepItem = function (output, context) {
    return {
        Issues: output.Issues !== undefined && output.Issues !== null
            ? deserializeAws_restJson1Issues(output.Issues, context)
            : undefined,
        ProgressPercent: output.ProgressPercent !== undefined && output.ProgressPercent !== null ? output.ProgressPercent : undefined,
        UpgradeStep: output.UpgradeStep !== undefined && output.UpgradeStep !== null ? output.UpgradeStep : undefined,
        UpgradeStepStatus: output.UpgradeStepStatus !== undefined && output.UpgradeStepStatus !== null
            ? output.UpgradeStepStatus
            : undefined,
    };
};
var deserializeAws_restJson1UpgradeStepsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UpgradeStepItem(entry, context);
    });
};
var deserializeAws_restJson1VPCDerivedInfo = function (output, context) {
    return {
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
            : undefined,
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_restJson1StringList(output.SecurityGroupIds, context)
            : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_restJson1StringList(output.SubnetIds, context)
            : undefined,
        VPCId: output.VPCId !== undefined && output.VPCId !== null ? output.VPCId : undefined,
    };
};
var deserializeAws_restJson1VPCDerivedInfoStatus = function (output, context) {
    return {
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1VPCDerivedInfo(output.Options, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1OptionStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_restJson1ZoneAwarenessConfig = function (output, context) {
    return {
        AvailabilityZoneCount: output.AvailabilityZoneCount !== undefined && output.AvailabilityZoneCount !== null
            ? output.AvailabilityZoneCount
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