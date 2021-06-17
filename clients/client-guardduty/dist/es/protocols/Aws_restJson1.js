import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_restJson1AcceptInvitationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/master";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.InvitationId !== undefined && input.InvitationId !== null && { invitationId: input.InvitationId })), (input.MasterId !== undefined && input.MasterId !== null && { masterId: input.MasterId })));
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
export var serializeAws_restJson1ArchiveFindingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/findings/archive";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign({}, (input.FindingIds !== undefined &&
                    input.FindingIds !== null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) })));
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
export var serializeAws_restJson1CreateDetectorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector";
                body = JSON.stringify(__assign(__assign(__assign(__assign({ clientToken: (_c = input.ClientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.DataSources !== undefined &&
                    input.DataSources !== null && {
                    dataSources: serializeAws_restJson1DataSourceConfigurations(input.DataSources, context),
                })), (input.Enable !== undefined && input.Enable !== null && { enable: input.Enable })), (input.FindingPublishingFrequency !== undefined &&
                    input.FindingPublishingFrequency !== null && { findingPublishingFrequency: input.FindingPublishingFrequency })), (input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) })));
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
export var serializeAws_restJson1CreateFilterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/filter";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Action !== undefined && input.Action !== null && { action: input.Action })), { clientToken: (_c = input.ClientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.FindingCriteria !== undefined &&
                    input.FindingCriteria !== null && {
                    findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
                })), (input.Name !== undefined && input.Name !== null && { name: input.Name })), (input.Rank !== undefined && input.Rank !== null && { rank: input.Rank })), (input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) })));
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
export var serializeAws_restJson1CreateIPSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/ipset";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Activate !== undefined && input.Activate !== null && { activate: input.Activate })), { clientToken: (_c = input.ClientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.Format !== undefined && input.Format !== null && { format: input.Format })), (input.Location !== undefined && input.Location !== null && { location: input.Location })), (input.Name !== undefined && input.Name !== null && { name: input.Name })), (input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) })));
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
export var serializeAws_restJson1CreateMembersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/member";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign({}, (input.AccountDetails !== undefined &&
                    input.AccountDetails !== null && {
                    accountDetails: serializeAws_restJson1AccountDetails(input.AccountDetails, context),
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
export var serializeAws_restJson1CreatePublishingDestinationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/publishingDestination";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign(__assign({ clientToken: (_c = input.ClientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.DestinationProperties !== undefined &&
                    input.DestinationProperties !== null && {
                    destinationProperties: serializeAws_restJson1DestinationProperties(input.DestinationProperties, context),
                })), (input.DestinationType !== undefined &&
                    input.DestinationType !== null && { destinationType: input.DestinationType })));
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
export var serializeAws_restJson1CreateSampleFindingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/findings/create";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign({}, (input.FindingTypes !== undefined &&
                    input.FindingTypes !== null && { findingTypes: serializeAws_restJson1FindingTypes(input.FindingTypes, context) })));
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
export var serializeAws_restJson1CreateThreatIntelSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/threatintelset";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Activate !== undefined && input.Activate !== null && { activate: input.Activate })), { clientToken: (_c = input.ClientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.Format !== undefined && input.Format !== null && { format: input.Format })), (input.Location !== undefined && input.Location !== null && { location: input.Location })), (input.Name !== undefined && input.Name !== null && { name: input.Name })), (input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) })));
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
export var serializeAws_restJson1DeclineInvitationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/invitation/decline";
                body = JSON.stringify(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) })));
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
export var serializeAws_restJson1DeleteDetectorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
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
export var serializeAws_restJson1DeleteFilterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/filter/{FilterName}";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                if (input.FilterName !== undefined) {
                    labelValue = input.FilterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FilterName.");
                    }
                    resolvedPath = resolvedPath.replace("{FilterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FilterName.");
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
export var serializeAws_restJson1DeleteInvitationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/invitation/delete";
                body = JSON.stringify(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) })));
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
export var serializeAws_restJson1DeleteIPSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/ipset/{IpSetId}";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                if (input.IpSetId !== undefined) {
                    labelValue = input.IpSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: IpSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{IpSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: IpSetId.");
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
export var serializeAws_restJson1DeleteMembersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/member/delete";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) })));
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
export var serializeAws_restJson1DeletePublishingDestinationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/publishingDestination/{DestinationId}";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                if (input.DestinationId !== undefined) {
                    labelValue = input.DestinationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DestinationId.");
                    }
                    resolvedPath = resolvedPath.replace("{DestinationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DestinationId.");
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
export var serializeAws_restJson1DeleteThreatIntelSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                if (input.ThreatIntelSetId !== undefined) {
                    labelValue = input.ThreatIntelSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ThreatIntelSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{ThreatIntelSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ThreatIntelSetId.");
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
export var serializeAws_restJson1DescribeOrganizationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/admin";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
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
export var serializeAws_restJson1DescribePublishingDestinationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/publishingDestination/{DestinationId}";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                if (input.DestinationId !== undefined) {
                    labelValue = input.DestinationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DestinationId.");
                    }
                    resolvedPath = resolvedPath.replace("{DestinationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DestinationId.");
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
export var serializeAws_restJson1DisableOrganizationAdminAccountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/admin/disable";
                body = JSON.stringify(__assign({}, (input.AdminAccountId !== undefined &&
                    input.AdminAccountId !== null && { adminAccountId: input.AdminAccountId })));
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
export var serializeAws_restJson1DisassociateFromMasterAccountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/master/disassociate";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
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
export var serializeAws_restJson1DisassociateMembersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/member/disassociate";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) })));
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
export var serializeAws_restJson1EnableOrganizationAdminAccountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/admin/enable";
                body = JSON.stringify(__assign({}, (input.AdminAccountId !== undefined &&
                    input.AdminAccountId !== null && { adminAccountId: input.AdminAccountId })));
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
export var serializeAws_restJson1GetDetectorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
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
export var serializeAws_restJson1GetFilterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/filter/{FilterName}";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                if (input.FilterName !== undefined) {
                    labelValue = input.FilterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FilterName.");
                    }
                    resolvedPath = resolvedPath.replace("{FilterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FilterName.");
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
export var serializeAws_restJson1GetFindingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/findings/get";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.FindingIds !== undefined &&
                    input.FindingIds !== null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) })), (input.SortCriteria !== undefined &&
                    input.SortCriteria !== null && { sortCriteria: serializeAws_restJson1SortCriteria(input.SortCriteria, context) })));
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
export var serializeAws_restJson1GetFindingsStatisticsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/findings/statistics";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.FindingCriteria !== undefined &&
                    input.FindingCriteria !== null && {
                    findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
                })), (input.FindingStatisticTypes !== undefined &&
                    input.FindingStatisticTypes !== null && {
                    findingStatisticTypes: serializeAws_restJson1FindingStatisticTypes(input.FindingStatisticTypes, context),
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
export var serializeAws_restJson1GetInvitationsCountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/invitation/count";
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
export var serializeAws_restJson1GetIPSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/ipset/{IpSetId}";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                if (input.IpSetId !== undefined) {
                    labelValue = input.IpSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: IpSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{IpSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: IpSetId.");
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
export var serializeAws_restJson1GetMasterAccountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/master";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
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
export var serializeAws_restJson1GetMemberDetectorsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/member/detector/get";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) })));
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
export var serializeAws_restJson1GetMembersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/member/get";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) })));
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
export var serializeAws_restJson1GetThreatIntelSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                if (input.ThreatIntelSetId !== undefined) {
                    labelValue = input.ThreatIntelSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ThreatIntelSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{ThreatIntelSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ThreatIntelSetId.");
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
export var serializeAws_restJson1GetUsageStatisticsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/usage/statistics";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { maxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { nextToken: input.NextToken })), (input.Unit !== undefined && input.Unit !== null && { unit: input.Unit })), (input.UsageCriteria !== undefined &&
                    input.UsageCriteria !== null && {
                    usageCriteria: serializeAws_restJson1UsageCriteria(input.UsageCriteria, context),
                })), (input.UsageStatisticType !== undefined &&
                    input.UsageStatisticType !== null && { usageStatisticsType: input.UsageStatisticType })));
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
export var serializeAws_restJson1InviteMembersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/member/invite";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) })), (input.DisableEmailNotification !== undefined &&
                    input.DisableEmailNotification !== null && { disableEmailNotification: input.DisableEmailNotification })), (input.Message !== undefined && input.Message !== null && { message: input.Message })));
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
export var serializeAws_restJson1ListDetectorsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector";
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
export var serializeAws_restJson1ListFiltersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/filter";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
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
export var serializeAws_restJson1ListFindingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/findings";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.FindingCriteria !== undefined &&
                    input.FindingCriteria !== null && {
                    findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
                })), (input.MaxResults !== undefined && input.MaxResults !== null && { maxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { nextToken: input.NextToken })), (input.SortCriteria !== undefined &&
                    input.SortCriteria !== null && { sortCriteria: serializeAws_restJson1SortCriteria(input.SortCriteria, context) })));
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
export var serializeAws_restJson1ListInvitationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/invitation";
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
export var serializeAws_restJson1ListIPSetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/ipset";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
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
export var serializeAws_restJson1ListMembersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/member";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                query = __assign(__assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.OnlyAssociated !== undefined && { onlyAssociated: input.OnlyAssociated }));
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
export var serializeAws_restJson1ListOrganizationAdminAccountsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/admin";
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
export var serializeAws_restJson1ListPublishingDestinationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/publishingDestination";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
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
export var serializeAws_restJson1ListThreatIntelSetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/detector/{DetectorId}/threatintelset";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
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
export var serializeAws_restJson1StartMonitoringMembersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/member/start";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) })));
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
export var serializeAws_restJson1StopMonitoringMembersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/member/stop";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) })));
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
                body = JSON.stringify(__assign({}, (input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1TagMap(input.Tags, context) })));
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
export var serializeAws_restJson1UnarchiveFindingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/findings/unarchive";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign({}, (input.FindingIds !== undefined &&
                    input.FindingIds !== null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) })));
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
export var serializeAws_restJson1UpdateDetectorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.DataSources !== undefined &&
                    input.DataSources !== null && {
                    dataSources: serializeAws_restJson1DataSourceConfigurations(input.DataSources, context),
                })), (input.Enable !== undefined && input.Enable !== null && { enable: input.Enable })), (input.FindingPublishingFrequency !== undefined &&
                    input.FindingPublishingFrequency !== null && { findingPublishingFrequency: input.FindingPublishingFrequency })));
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
export var serializeAws_restJson1UpdateFilterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/filter/{FilterName}";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                if (input.FilterName !== undefined) {
                    labelValue = input.FilterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FilterName.");
                    }
                    resolvedPath = resolvedPath.replace("{FilterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FilterName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.Action !== undefined && input.Action !== null && { action: input.Action })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.FindingCriteria !== undefined &&
                    input.FindingCriteria !== null && {
                    findingCriteria: serializeAws_restJson1FindingCriteria(input.FindingCriteria, context),
                })), (input.Rank !== undefined && input.Rank !== null && { rank: input.Rank })));
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
export var serializeAws_restJson1UpdateFindingsFeedbackCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/findings/feedback";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Comments !== undefined && input.Comments !== null && { comments: input.Comments })), (input.Feedback !== undefined && input.Feedback !== null && { feedback: input.Feedback })), (input.FindingIds !== undefined &&
                    input.FindingIds !== null && { findingIds: serializeAws_restJson1FindingIds(input.FindingIds, context) })));
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
export var serializeAws_restJson1UpdateIPSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/ipset/{IpSetId}";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                if (input.IpSetId !== undefined) {
                    labelValue = input.IpSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: IpSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{IpSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: IpSetId.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Activate !== undefined && input.Activate !== null && { activate: input.Activate })), (input.Location !== undefined && input.Location !== null && { location: input.Location })), (input.Name !== undefined && input.Name !== null && { name: input.Name })));
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
export var serializeAws_restJson1UpdateMemberDetectorsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/member/detector/update";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) })), (input.DataSources !== undefined &&
                    input.DataSources !== null && {
                    dataSources: serializeAws_restJson1DataSourceConfigurations(input.DataSources, context),
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
export var serializeAws_restJson1UpdateOrganizationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/admin";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.AutoEnable !== undefined && input.AutoEnable !== null && { autoEnable: input.AutoEnable })), (input.DataSources !== undefined &&
                    input.DataSources !== null && {
                    dataSources: serializeAws_restJson1OrganizationDataSourceConfigurations(input.DataSources, context),
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
export var serializeAws_restJson1UpdatePublishingDestinationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/publishingDestination/{DestinationId}";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                if (input.DestinationId !== undefined) {
                    labelValue = input.DestinationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DestinationId.");
                    }
                    resolvedPath = resolvedPath.replace("{DestinationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DestinationId.");
                }
                body = JSON.stringify(__assign({}, (input.DestinationProperties !== undefined &&
                    input.DestinationProperties !== null && {
                    destinationProperties: serializeAws_restJson1DestinationProperties(input.DestinationProperties, context),
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
export var serializeAws_restJson1UpdateThreatIntelSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}";
                if (input.DetectorId !== undefined) {
                    labelValue = input.DetectorId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: DetectorId.");
                    }
                    resolvedPath = resolvedPath.replace("{DetectorId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: DetectorId.");
                }
                if (input.ThreatIntelSetId !== undefined) {
                    labelValue = input.ThreatIntelSetId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ThreatIntelSetId.");
                    }
                    resolvedPath = resolvedPath.replace("{ThreatIntelSetId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ThreatIntelSetId.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Activate !== undefined && input.Activate !== null && { activate: input.Activate })), (input.Location !== undefined && input.Location !== null && { location: input.Location })), (input.Name !== undefined && input.Name !== null && { name: input.Name })));
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
export var deserializeAws_restJson1AcceptInvitationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AcceptInvitationCommandError(output, context)];
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
var deserializeAws_restJson1AcceptInvitationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ArchiveFindingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ArchiveFindingsCommandError(output, context)];
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
var deserializeAws_restJson1ArchiveFindingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateDetectorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateDetectorCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DetectorId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.detectorId !== undefined && data.detectorId !== null) {
                    contents.DetectorId = data.detectorId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateDetectorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateFilterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateFilterCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Name: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.name !== undefined && data.name !== null) {
                    contents.Name = data.name;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateFilterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateIPSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateIPSetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    IpSetId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ipSetId !== undefined && data.ipSetId !== null) {
                    contents.IpSetId = data.ipSetId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateIPSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateMembersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateMembersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateMembersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreatePublishingDestinationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreatePublishingDestinationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DestinationId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.destinationId !== undefined && data.destinationId !== null) {
                    contents.DestinationId = data.destinationId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreatePublishingDestinationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateSampleFindingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateSampleFindingsCommandError(output, context)];
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
var deserializeAws_restJson1CreateSampleFindingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateThreatIntelSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateThreatIntelSetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ThreatIntelSetId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.threatIntelSetId !== undefined && data.threatIntelSetId !== null) {
                    contents.ThreatIntelSetId = data.threatIntelSetId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateThreatIntelSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeclineInvitationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeclineInvitationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeclineInvitationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteDetectorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteDetectorCommandError(output, context)];
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
var deserializeAws_restJson1DeleteDetectorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteFilterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteFilterCommandError(output, context)];
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
var deserializeAws_restJson1DeleteFilterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteInvitationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteInvitationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteInvitationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteIPSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteIPSetCommandError(output, context)];
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
var deserializeAws_restJson1DeleteIPSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteMembersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteMembersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteMembersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeletePublishingDestinationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeletePublishingDestinationCommandError(output, context)];
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
var deserializeAws_restJson1DeletePublishingDestinationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteThreatIntelSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteThreatIntelSetCommandError(output, context)];
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
var deserializeAws_restJson1DeleteThreatIntelSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeOrganizationConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeOrganizationConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AutoEnable: undefined,
                    DataSources: undefined,
                    MemberAccountLimitReached: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.autoEnable !== undefined && data.autoEnable !== null) {
                    contents.AutoEnable = data.autoEnable;
                }
                if (data.dataSources !== undefined && data.dataSources !== null) {
                    contents.DataSources = deserializeAws_restJson1OrganizationDataSourceConfigurationsResult(data.dataSources, context);
                }
                if (data.memberAccountLimitReached !== undefined && data.memberAccountLimitReached !== null) {
                    contents.MemberAccountLimitReached = data.memberAccountLimitReached;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeOrganizationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribePublishingDestinationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribePublishingDestinationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DestinationId: undefined,
                    DestinationProperties: undefined,
                    DestinationType: undefined,
                    PublishingFailureStartTimestamp: undefined,
                    Status: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.destinationId !== undefined && data.destinationId !== null) {
                    contents.DestinationId = data.destinationId;
                }
                if (data.destinationProperties !== undefined && data.destinationProperties !== null) {
                    contents.DestinationProperties = deserializeAws_restJson1DestinationProperties(data.destinationProperties, context);
                }
                if (data.destinationType !== undefined && data.destinationType !== null) {
                    contents.DestinationType = data.destinationType;
                }
                if (data.publishingFailureStartTimestamp !== undefined && data.publishingFailureStartTimestamp !== null) {
                    contents.PublishingFailureStartTimestamp = data.publishingFailureStartTimestamp;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.Status = data.status;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribePublishingDestinationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DisableOrganizationAdminAccountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisableOrganizationAdminAccountCommandError(output, context)];
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
var deserializeAws_restJson1DisableOrganizationAdminAccountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DisassociateFromMasterAccountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisassociateFromMasterAccountCommandError(output, context)];
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
var deserializeAws_restJson1DisassociateFromMasterAccountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DisassociateMembersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisassociateMembersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DisassociateMembersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1EnableOrganizationAdminAccountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1EnableOrganizationAdminAccountCommandError(output, context)];
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
var deserializeAws_restJson1EnableOrganizationAdminAccountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetDetectorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetDetectorCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CreatedAt: undefined,
                    DataSources: undefined,
                    FindingPublishingFrequency: undefined,
                    ServiceRole: undefined,
                    Status: undefined,
                    Tags: undefined,
                    UpdatedAt: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.CreatedAt = data.createdAt;
                }
                if (data.dataSources !== undefined && data.dataSources !== null) {
                    contents.DataSources = deserializeAws_restJson1DataSourceConfigurationsResult(data.dataSources, context);
                }
                if (data.findingPublishingFrequency !== undefined && data.findingPublishingFrequency !== null) {
                    contents.FindingPublishingFrequency = data.findingPublishingFrequency;
                }
                if (data.serviceRole !== undefined && data.serviceRole !== null) {
                    contents.ServiceRole = data.serviceRole;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.Status = data.status;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                if (data.updatedAt !== undefined && data.updatedAt !== null) {
                    contents.UpdatedAt = data.updatedAt;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetDetectorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetFilterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetFilterCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Action: undefined,
                    Description: undefined,
                    FindingCriteria: undefined,
                    Name: undefined,
                    Rank: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.action !== undefined && data.action !== null) {
                    contents.Action = data.action;
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.Description = data.description;
                }
                if (data.findingCriteria !== undefined && data.findingCriteria !== null) {
                    contents.FindingCriteria = deserializeAws_restJson1FindingCriteria(data.findingCriteria, context);
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.Name = data.name;
                }
                if (data.rank !== undefined && data.rank !== null) {
                    contents.Rank = data.rank;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetFilterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetFindingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetFindingsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Findings: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.findings !== undefined && data.findings !== null) {
                    contents.Findings = deserializeAws_restJson1Findings(data.findings, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetFindingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetFindingsStatisticsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetFindingsStatisticsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FindingStatistics: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.findingStatistics !== undefined && data.findingStatistics !== null) {
                    contents.FindingStatistics = deserializeAws_restJson1FindingStatistics(data.findingStatistics, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetFindingsStatisticsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetInvitationsCountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetInvitationsCountCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    InvitationsCount: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.invitationsCount !== undefined && data.invitationsCount !== null) {
                    contents.InvitationsCount = data.invitationsCount;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetInvitationsCountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetIPSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetIPSetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Format: undefined,
                    Location: undefined,
                    Name: undefined,
                    Status: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.format !== undefined && data.format !== null) {
                    contents.Format = data.format;
                }
                if (data.location !== undefined && data.location !== null) {
                    contents.Location = data.location;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.Name = data.name;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.Status = data.status;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetIPSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetMasterAccountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetMasterAccountCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Master: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.master !== undefined && data.master !== null) {
                    contents.Master = deserializeAws_restJson1Master(data.master, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetMasterAccountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetMemberDetectorsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetMemberDetectorsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    MemberDataSourceConfigurations: undefined,
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.members !== undefined && data.members !== null) {
                    contents.MemberDataSourceConfigurations = deserializeAws_restJson1MemberDataSourceConfigurations(data.members, context);
                }
                if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetMemberDetectorsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetMembersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetMembersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Members: undefined,
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.members !== undefined && data.members !== null) {
                    contents.Members = deserializeAws_restJson1Members(data.members, context);
                }
                if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetMembersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetThreatIntelSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetThreatIntelSetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Format: undefined,
                    Location: undefined,
                    Name: undefined,
                    Status: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.format !== undefined && data.format !== null) {
                    contents.Format = data.format;
                }
                if (data.location !== undefined && data.location !== null) {
                    contents.Location = data.location;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.Name = data.name;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.Status = data.status;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetThreatIntelSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetUsageStatisticsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetUsageStatisticsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    UsageStatistics: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                if (data.usageStatistics !== undefined && data.usageStatistics !== null) {
                    contents.UsageStatistics = deserializeAws_restJson1UsageStatistics(data.usageStatistics, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetUsageStatisticsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1InviteMembersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1InviteMembersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1InviteMembersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListDetectorsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListDetectorsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DetectorIds: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.detectorIds !== undefined && data.detectorIds !== null) {
                    contents.DetectorIds = deserializeAws_restJson1DetectorIds(data.detectorIds, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListDetectorsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListFiltersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListFiltersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FilterNames: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.filterNames !== undefined && data.filterNames !== null) {
                    contents.FilterNames = deserializeAws_restJson1FilterNames(data.filterNames, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListFiltersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListFindingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListFindingsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FindingIds: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.findingIds !== undefined && data.findingIds !== null) {
                    contents.FindingIds = deserializeAws_restJson1FindingIds(data.findingIds, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListFindingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListInvitationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListInvitationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Invitations: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.invitations !== undefined && data.invitations !== null) {
                    contents.Invitations = deserializeAws_restJson1Invitations(data.invitations, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListInvitationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListIPSetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListIPSetsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    IpSetIds: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ipSetIds !== undefined && data.ipSetIds !== null) {
                    contents.IpSetIds = deserializeAws_restJson1IpSetIds(data.ipSetIds, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListIPSetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListMembersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListMembersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Members: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.members !== undefined && data.members !== null) {
                    contents.Members = deserializeAws_restJson1Members(data.members, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListMembersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListOrganizationAdminAccountsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListOrganizationAdminAccountsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AdminAccounts: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.adminAccounts !== undefined && data.adminAccounts !== null) {
                    contents.AdminAccounts = deserializeAws_restJson1AdminAccounts(data.adminAccounts, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListOrganizationAdminAccountsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListPublishingDestinationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListPublishingDestinationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Destinations: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.destinations !== undefined && data.destinations !== null) {
                    contents.Destinations = deserializeAws_restJson1Destinations(data.destinations, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListPublishingDestinationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListThreatIntelSetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListThreatIntelSetsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    ThreatIntelSetIds: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                if (data.threatIntelSetIds !== undefined && data.threatIntelSetIds !== null) {
                    contents.ThreatIntelSetIds = deserializeAws_restJson1ThreatIntelSetIds(data.threatIntelSetIds, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListThreatIntelSetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartMonitoringMembersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartMonitoringMembersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StartMonitoringMembersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StopMonitoringMembersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StopMonitoringMembersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StopMonitoringMembersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UnarchiveFindingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UnarchiveFindingsCommandError(output, context)];
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
var deserializeAws_restJson1UnarchiveFindingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateDetectorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateDetectorCommandError(output, context)];
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
var deserializeAws_restJson1UpdateDetectorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateFilterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateFilterCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Name: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.name !== undefined && data.name !== null) {
                    contents.Name = data.name;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateFilterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateFindingsFeedbackCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateFindingsFeedbackCommandError(output, context)];
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
var deserializeAws_restJson1UpdateFindingsFeedbackCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateIPSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateIPSetCommandError(output, context)];
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
var deserializeAws_restJson1UpdateIPSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateMemberDetectorsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateMemberDetectorsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1UnprocessedAccounts(data.unprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateMemberDetectorsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateOrganizationConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateOrganizationConfigurationCommandError(output, context)];
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
var deserializeAws_restJson1UpdateOrganizationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdatePublishingDestinationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdatePublishingDestinationCommandError(output, context)];
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
var deserializeAws_restJson1UpdatePublishingDestinationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateThreatIntelSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateThreatIntelSetCommandError(output, context)];
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
var deserializeAws_restJson1UpdateThreatIntelSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.guardduty#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.guardduty#InternalServerErrorException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1BadRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "BadRequestException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        if (data.__type !== undefined && data.__type !== null) {
            contents.Type = data.__type;
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
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        if (data.__type !== undefined && data.__type !== null) {
            contents.Type = data.__type;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1AccountDetail = function (input, context) {
    return __assign(__assign({}, (input.AccountId !== undefined && input.AccountId !== null && { accountId: input.AccountId })), (input.Email !== undefined && input.Email !== null && { email: input.Email }));
};
var serializeAws_restJson1AccountDetails = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AccountDetail(entry, context);
    });
};
var serializeAws_restJson1AccountIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Condition = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Eq !== undefined && input.Eq !== null && { eq: serializeAws_restJson1Eq(input.Eq, context) })), (input.Equals !== undefined &&
        input.Equals !== null && { equals: serializeAws_restJson1Equals(input.Equals, context) })), (input.GreaterThan !== undefined && input.GreaterThan !== null && { greaterThan: input.GreaterThan })), (input.GreaterThanOrEqual !== undefined &&
        input.GreaterThanOrEqual !== null && { greaterThanOrEqual: input.GreaterThanOrEqual })), (input.Gt !== undefined && input.Gt !== null && { gt: input.Gt })), (input.Gte !== undefined && input.Gte !== null && { gte: input.Gte })), (input.LessThan !== undefined && input.LessThan !== null && { lessThan: input.LessThan })), (input.LessThanOrEqual !== undefined &&
        input.LessThanOrEqual !== null && { lessThanOrEqual: input.LessThanOrEqual })), (input.Lt !== undefined && input.Lt !== null && { lt: input.Lt })), (input.Lte !== undefined && input.Lte !== null && { lte: input.Lte })), (input.Neq !== undefined && input.Neq !== null && { neq: serializeAws_restJson1Neq(input.Neq, context) })), (input.NotEquals !== undefined &&
        input.NotEquals !== null && { notEquals: serializeAws_restJson1NotEquals(input.NotEquals, context) }));
};
var serializeAws_restJson1Criterion = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1Condition(value, context), _b));
    }, {});
};
var serializeAws_restJson1DataSourceConfigurations = function (input, context) {
    return __assign({}, (input.S3Logs !== undefined &&
        input.S3Logs !== null && { s3Logs: serializeAws_restJson1S3LogsConfiguration(input.S3Logs, context) }));
};
var serializeAws_restJson1DataSourceList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1DestinationProperties = function (input, context) {
    return __assign(__assign({}, (input.DestinationArn !== undefined &&
        input.DestinationArn !== null && { destinationArn: input.DestinationArn })), (input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { kmsKeyArn: input.KmsKeyArn }));
};
var serializeAws_restJson1Eq = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Equals = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1FindingCriteria = function (input, context) {
    return __assign({}, (input.Criterion !== undefined &&
        input.Criterion !== null && { criterion: serializeAws_restJson1Criterion(input.Criterion, context) }));
};
var serializeAws_restJson1FindingIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1FindingStatisticTypes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1FindingTypes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Neq = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1NotEquals = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1OrganizationDataSourceConfigurations = function (input, context) {
    return __assign({}, (input.S3Logs !== undefined &&
        input.S3Logs !== null && {
        s3Logs: serializeAws_restJson1OrganizationS3LogsConfiguration(input.S3Logs, context),
    }));
};
var serializeAws_restJson1OrganizationS3LogsConfiguration = function (input, context) {
    return __assign({}, (input.AutoEnable !== undefined && input.AutoEnable !== null && { autoEnable: input.AutoEnable }));
};
var serializeAws_restJson1ResourceList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1S3LogsConfiguration = function (input, context) {
    return __assign({}, (input.Enable !== undefined && input.Enable !== null && { enable: input.Enable }));
};
var serializeAws_restJson1SortCriteria = function (input, context) {
    return __assign(__assign({}, (input.AttributeName !== undefined && input.AttributeName !== null && { attributeName: input.AttributeName })), (input.OrderBy !== undefined && input.OrderBy !== null && { orderBy: input.OrderBy }));
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
var serializeAws_restJson1UsageCriteria = function (input, context) {
    return __assign(__assign(__assign({}, (input.AccountIds !== undefined &&
        input.AccountIds !== null && { accountIds: serializeAws_restJson1AccountIds(input.AccountIds, context) })), (input.DataSources !== undefined &&
        input.DataSources !== null && { dataSources: serializeAws_restJson1DataSourceList(input.DataSources, context) })), (input.Resources !== undefined &&
        input.Resources !== null && { resources: serializeAws_restJson1ResourceList(input.Resources, context) }));
};
var deserializeAws_restJson1AccessControlList = function (output, context) {
    return {
        AllowsPublicReadAccess: output.allowsPublicReadAccess !== undefined && output.allowsPublicReadAccess !== null
            ? output.allowsPublicReadAccess
            : undefined,
        AllowsPublicWriteAccess: output.allowsPublicWriteAccess !== undefined && output.allowsPublicWriteAccess !== null
            ? output.allowsPublicWriteAccess
            : undefined,
    };
};
var deserializeAws_restJson1AccessKeyDetails = function (output, context) {
    return {
        AccessKeyId: output.accessKeyId !== undefined && output.accessKeyId !== null ? output.accessKeyId : undefined,
        PrincipalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
        UserName: output.userName !== undefined && output.userName !== null ? output.userName : undefined,
        UserType: output.userType !== undefined && output.userType !== null ? output.userType : undefined,
    };
};
var deserializeAws_restJson1AccountLevelPermissions = function (output, context) {
    return {
        BlockPublicAccess: output.blockPublicAccess !== undefined && output.blockPublicAccess !== null
            ? deserializeAws_restJson1BlockPublicAccess(output.blockPublicAccess, context)
            : undefined,
    };
};
var deserializeAws_restJson1Action = function (output, context) {
    return {
        ActionType: output.actionType !== undefined && output.actionType !== null ? output.actionType : undefined,
        AwsApiCallAction: output.awsApiCallAction !== undefined && output.awsApiCallAction !== null
            ? deserializeAws_restJson1AwsApiCallAction(output.awsApiCallAction, context)
            : undefined,
        DnsRequestAction: output.dnsRequestAction !== undefined && output.dnsRequestAction !== null
            ? deserializeAws_restJson1DnsRequestAction(output.dnsRequestAction, context)
            : undefined,
        NetworkConnectionAction: output.networkConnectionAction !== undefined && output.networkConnectionAction !== null
            ? deserializeAws_restJson1NetworkConnectionAction(output.networkConnectionAction, context)
            : undefined,
        PortProbeAction: output.portProbeAction !== undefined && output.portProbeAction !== null
            ? deserializeAws_restJson1PortProbeAction(output.portProbeAction, context)
            : undefined,
    };
};
var deserializeAws_restJson1AdminAccount = function (output, context) {
    return {
        AdminAccountId: output.adminAccountId !== undefined && output.adminAccountId !== null ? output.adminAccountId : undefined,
        AdminStatus: output.adminStatus !== undefined && output.adminStatus !== null ? output.adminStatus : undefined,
    };
};
var deserializeAws_restJson1AdminAccounts = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AdminAccount(entry, context);
    });
};
var deserializeAws_restJson1AwsApiCallAction = function (output, context) {
    return {
        Api: output.api !== undefined && output.api !== null ? output.api : undefined,
        CallerType: output.callerType !== undefined && output.callerType !== null ? output.callerType : undefined,
        DomainDetails: output.domainDetails !== undefined && output.domainDetails !== null
            ? deserializeAws_restJson1DomainDetails(output.domainDetails, context)
            : undefined,
        ErrorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        RemoteIpDetails: output.remoteIpDetails !== undefined && output.remoteIpDetails !== null
            ? deserializeAws_restJson1RemoteIpDetails(output.remoteIpDetails, context)
            : undefined,
        ServiceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
    };
};
var deserializeAws_restJson1BlockPublicAccess = function (output, context) {
    return {
        BlockPublicAcls: output.blockPublicAcls !== undefined && output.blockPublicAcls !== null ? output.blockPublicAcls : undefined,
        BlockPublicPolicy: output.blockPublicPolicy !== undefined && output.blockPublicPolicy !== null
            ? output.blockPublicPolicy
            : undefined,
        IgnorePublicAcls: output.ignorePublicAcls !== undefined && output.ignorePublicAcls !== null ? output.ignorePublicAcls : undefined,
        RestrictPublicBuckets: output.restrictPublicBuckets !== undefined && output.restrictPublicBuckets !== null
            ? output.restrictPublicBuckets
            : undefined,
    };
};
var deserializeAws_restJson1BucketLevelPermissions = function (output, context) {
    return {
        AccessControlList: output.accessControlList !== undefined && output.accessControlList !== null
            ? deserializeAws_restJson1AccessControlList(output.accessControlList, context)
            : undefined,
        BlockPublicAccess: output.blockPublicAccess !== undefined && output.blockPublicAccess !== null
            ? deserializeAws_restJson1BlockPublicAccess(output.blockPublicAccess, context)
            : undefined,
        BucketPolicy: output.bucketPolicy !== undefined && output.bucketPolicy !== null
            ? deserializeAws_restJson1BucketPolicy(output.bucketPolicy, context)
            : undefined,
    };
};
var deserializeAws_restJson1BucketPolicy = function (output, context) {
    return {
        AllowsPublicReadAccess: output.allowsPublicReadAccess !== undefined && output.allowsPublicReadAccess !== null
            ? output.allowsPublicReadAccess
            : undefined,
        AllowsPublicWriteAccess: output.allowsPublicWriteAccess !== undefined && output.allowsPublicWriteAccess !== null
            ? output.allowsPublicWriteAccess
            : undefined,
    };
};
var deserializeAws_restJson1City = function (output, context) {
    return {
        CityName: output.cityName !== undefined && output.cityName !== null ? output.cityName : undefined,
    };
};
var deserializeAws_restJson1CloudTrailConfigurationResult = function (output, context) {
    return {
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1Condition = function (output, context) {
    return {
        Eq: output.eq !== undefined && output.eq !== null ? deserializeAws_restJson1Eq(output.eq, context) : undefined,
        Equals: output.equals !== undefined && output.equals !== null
            ? deserializeAws_restJson1Equals(output.equals, context)
            : undefined,
        GreaterThan: output.greaterThan !== undefined && output.greaterThan !== null ? output.greaterThan : undefined,
        GreaterThanOrEqual: output.greaterThanOrEqual !== undefined && output.greaterThanOrEqual !== null
            ? output.greaterThanOrEqual
            : undefined,
        Gt: output.gt !== undefined && output.gt !== null ? output.gt : undefined,
        Gte: output.gte !== undefined && output.gte !== null ? output.gte : undefined,
        LessThan: output.lessThan !== undefined && output.lessThan !== null ? output.lessThan : undefined,
        LessThanOrEqual: output.lessThanOrEqual !== undefined && output.lessThanOrEqual !== null ? output.lessThanOrEqual : undefined,
        Lt: output.lt !== undefined && output.lt !== null ? output.lt : undefined,
        Lte: output.lte !== undefined && output.lte !== null ? output.lte : undefined,
        Neq: output.neq !== undefined && output.neq !== null ? deserializeAws_restJson1Neq(output.neq, context) : undefined,
        NotEquals: output.notEquals !== undefined && output.notEquals !== null
            ? deserializeAws_restJson1NotEquals(output.notEquals, context)
            : undefined,
    };
};
var deserializeAws_restJson1CountBySeverity = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1Country = function (output, context) {
    return {
        CountryCode: output.countryCode !== undefined && output.countryCode !== null ? output.countryCode : undefined,
        CountryName: output.countryName !== undefined && output.countryName !== null ? output.countryName : undefined,
    };
};
var deserializeAws_restJson1Criterion = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1Condition(value, context), _b));
    }, {});
};
var deserializeAws_restJson1DataSourceConfigurationsResult = function (output, context) {
    return {
        CloudTrail: output.cloudTrail !== undefined && output.cloudTrail !== null
            ? deserializeAws_restJson1CloudTrailConfigurationResult(output.cloudTrail, context)
            : undefined,
        DNSLogs: output.dnsLogs !== undefined && output.dnsLogs !== null
            ? deserializeAws_restJson1DNSLogsConfigurationResult(output.dnsLogs, context)
            : undefined,
        FlowLogs: output.flowLogs !== undefined && output.flowLogs !== null
            ? deserializeAws_restJson1FlowLogsConfigurationResult(output.flowLogs, context)
            : undefined,
        S3Logs: output.s3Logs !== undefined && output.s3Logs !== null
            ? deserializeAws_restJson1S3LogsConfigurationResult(output.s3Logs, context)
            : undefined,
    };
};
var deserializeAws_restJson1DefaultServerSideEncryption = function (output, context) {
    return {
        EncryptionType: output.encryptionType !== undefined && output.encryptionType !== null ? output.encryptionType : undefined,
        KmsMasterKeyArn: output.kmsMasterKeyArn !== undefined && output.kmsMasterKeyArn !== null ? output.kmsMasterKeyArn : undefined,
    };
};
var deserializeAws_restJson1Destination = function (output, context) {
    return {
        DestinationId: output.destinationId !== undefined && output.destinationId !== null ? output.destinationId : undefined,
        DestinationType: output.destinationType !== undefined && output.destinationType !== null ? output.destinationType : undefined,
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1DestinationProperties = function (output, context) {
    return {
        DestinationArn: output.destinationArn !== undefined && output.destinationArn !== null ? output.destinationArn : undefined,
        KmsKeyArn: output.kmsKeyArn !== undefined && output.kmsKeyArn !== null ? output.kmsKeyArn : undefined,
    };
};
var deserializeAws_restJson1Destinations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Destination(entry, context);
    });
};
var deserializeAws_restJson1DetectorIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1DNSLogsConfigurationResult = function (output, context) {
    return {
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1DnsRequestAction = function (output, context) {
    return {
        Domain: output.domain !== undefined && output.domain !== null ? output.domain : undefined,
    };
};
var deserializeAws_restJson1DomainDetails = function (output, context) {
    return {
        Domain: output.domain !== undefined && output.domain !== null ? output.domain : undefined,
    };
};
var deserializeAws_restJson1Eq = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Equals = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Evidence = function (output, context) {
    return {
        ThreatIntelligenceDetails: output.threatIntelligenceDetails !== undefined && output.threatIntelligenceDetails !== null
            ? deserializeAws_restJson1ThreatIntelligenceDetails(output.threatIntelligenceDetails, context)
            : undefined,
    };
};
var deserializeAws_restJson1FilterNames = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Finding = function (output, context) {
    return {
        AccountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Confidence: output.confidence !== undefined && output.confidence !== null ? output.confidence : undefined,
        CreatedAt: output.createdAt !== undefined && output.createdAt !== null ? output.createdAt : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        Partition: output.partition !== undefined && output.partition !== null ? output.partition : undefined,
        Region: output.region !== undefined && output.region !== null ? output.region : undefined,
        Resource: output.resource !== undefined && output.resource !== null
            ? deserializeAws_restJson1Resource(output.resource, context)
            : undefined,
        SchemaVersion: output.schemaVersion !== undefined && output.schemaVersion !== null ? output.schemaVersion : undefined,
        Service: output.service !== undefined && output.service !== null
            ? deserializeAws_restJson1Service(output.service, context)
            : undefined,
        Severity: output.severity !== undefined && output.severity !== null ? output.severity : undefined,
        Title: output.title !== undefined && output.title !== null ? output.title : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
        UpdatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? output.updatedAt : undefined,
    };
};
var deserializeAws_restJson1FindingCriteria = function (output, context) {
    return {
        Criterion: output.criterion !== undefined && output.criterion !== null
            ? deserializeAws_restJson1Criterion(output.criterion, context)
            : undefined,
    };
};
var deserializeAws_restJson1FindingIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Findings = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Finding(entry, context);
    });
};
var deserializeAws_restJson1FindingStatistics = function (output, context) {
    return {
        CountBySeverity: output.countBySeverity !== undefined && output.countBySeverity !== null
            ? deserializeAws_restJson1CountBySeverity(output.countBySeverity, context)
            : undefined,
    };
};
var deserializeAws_restJson1FlowLogsConfigurationResult = function (output, context) {
    return {
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1GeoLocation = function (output, context) {
    return {
        Lat: output.lat !== undefined && output.lat !== null ? output.lat : undefined,
        Lon: output.lon !== undefined && output.lon !== null ? output.lon : undefined,
    };
};
var deserializeAws_restJson1IamInstanceProfile = function (output, context) {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
var deserializeAws_restJson1InstanceDetails = function (output, context) {
    return {
        AvailabilityZone: output.availabilityZone !== undefined && output.availabilityZone !== null ? output.availabilityZone : undefined,
        IamInstanceProfile: output.iamInstanceProfile !== undefined && output.iamInstanceProfile !== null
            ? deserializeAws_restJson1IamInstanceProfile(output.iamInstanceProfile, context)
            : undefined,
        ImageDescription: output.imageDescription !== undefined && output.imageDescription !== null ? output.imageDescription : undefined,
        ImageId: output.imageId !== undefined && output.imageId !== null ? output.imageId : undefined,
        InstanceId: output.instanceId !== undefined && output.instanceId !== null ? output.instanceId : undefined,
        InstanceState: output.instanceState !== undefined && output.instanceState !== null ? output.instanceState : undefined,
        InstanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
        LaunchTime: output.launchTime !== undefined && output.launchTime !== null ? output.launchTime : undefined,
        NetworkInterfaces: output.networkInterfaces !== undefined && output.networkInterfaces !== null
            ? deserializeAws_restJson1NetworkInterfaces(output.networkInterfaces, context)
            : undefined,
        OutpostArn: output.outpostArn !== undefined && output.outpostArn !== null ? output.outpostArn : undefined,
        Platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        ProductCodes: output.productCodes !== undefined && output.productCodes !== null
            ? deserializeAws_restJson1ProductCodes(output.productCodes, context)
            : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1Invitation = function (output, context) {
    return {
        AccountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        InvitationId: output.invitationId !== undefined && output.invitationId !== null ? output.invitationId : undefined,
        InvitedAt: output.invitedAt !== undefined && output.invitedAt !== null ? output.invitedAt : undefined,
        RelationshipStatus: output.relationshipStatus !== undefined && output.relationshipStatus !== null
            ? output.relationshipStatus
            : undefined,
    };
};
var deserializeAws_restJson1Invitations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Invitation(entry, context);
    });
};
var deserializeAws_restJson1IpSetIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Ipv6Addresses = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1LocalIpDetails = function (output, context) {
    return {
        IpAddressV4: output.ipAddressV4 !== undefined && output.ipAddressV4 !== null ? output.ipAddressV4 : undefined,
    };
};
var deserializeAws_restJson1LocalPortDetails = function (output, context) {
    return {
        Port: output.port !== undefined && output.port !== null ? output.port : undefined,
        PortName: output.portName !== undefined && output.portName !== null ? output.portName : undefined,
    };
};
var deserializeAws_restJson1Master = function (output, context) {
    return {
        AccountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        InvitationId: output.invitationId !== undefined && output.invitationId !== null ? output.invitationId : undefined,
        InvitedAt: output.invitedAt !== undefined && output.invitedAt !== null ? output.invitedAt : undefined,
        RelationshipStatus: output.relationshipStatus !== undefined && output.relationshipStatus !== null
            ? output.relationshipStatus
            : undefined,
    };
};
var deserializeAws_restJson1Member = function (output, context) {
    return {
        AccountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        DetectorId: output.detectorId !== undefined && output.detectorId !== null ? output.detectorId : undefined,
        Email: output.email !== undefined && output.email !== null ? output.email : undefined,
        InvitedAt: output.invitedAt !== undefined && output.invitedAt !== null ? output.invitedAt : undefined,
        MasterId: output.masterId !== undefined && output.masterId !== null ? output.masterId : undefined,
        RelationshipStatus: output.relationshipStatus !== undefined && output.relationshipStatus !== null
            ? output.relationshipStatus
            : undefined,
        UpdatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? output.updatedAt : undefined,
    };
};
var deserializeAws_restJson1MemberDataSourceConfiguration = function (output, context) {
    return {
        AccountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        DataSources: output.dataSources !== undefined && output.dataSources !== null
            ? deserializeAws_restJson1DataSourceConfigurationsResult(output.dataSources, context)
            : undefined,
    };
};
var deserializeAws_restJson1MemberDataSourceConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MemberDataSourceConfiguration(entry, context);
    });
};
var deserializeAws_restJson1Members = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Member(entry, context);
    });
};
var deserializeAws_restJson1Neq = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1NetworkConnectionAction = function (output, context) {
    return {
        Blocked: output.blocked !== undefined && output.blocked !== null ? output.blocked : undefined,
        ConnectionDirection: output.connectionDirection !== undefined && output.connectionDirection !== null
            ? output.connectionDirection
            : undefined,
        LocalIpDetails: output.localIpDetails !== undefined && output.localIpDetails !== null
            ? deserializeAws_restJson1LocalIpDetails(output.localIpDetails, context)
            : undefined,
        LocalPortDetails: output.localPortDetails !== undefined && output.localPortDetails !== null
            ? deserializeAws_restJson1LocalPortDetails(output.localPortDetails, context)
            : undefined,
        Protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
        RemoteIpDetails: output.remoteIpDetails !== undefined && output.remoteIpDetails !== null
            ? deserializeAws_restJson1RemoteIpDetails(output.remoteIpDetails, context)
            : undefined,
        RemotePortDetails: output.remotePortDetails !== undefined && output.remotePortDetails !== null
            ? deserializeAws_restJson1RemotePortDetails(output.remotePortDetails, context)
            : undefined,
    };
};
var deserializeAws_restJson1NetworkInterface = function (output, context) {
    return {
        Ipv6Addresses: output.ipv6Addresses !== undefined && output.ipv6Addresses !== null
            ? deserializeAws_restJson1Ipv6Addresses(output.ipv6Addresses, context)
            : undefined,
        NetworkInterfaceId: output.networkInterfaceId !== undefined && output.networkInterfaceId !== null
            ? output.networkInterfaceId
            : undefined,
        PrivateDnsName: output.privateDnsName !== undefined && output.privateDnsName !== null ? output.privateDnsName : undefined,
        PrivateIpAddress: output.privateIpAddress !== undefined && output.privateIpAddress !== null ? output.privateIpAddress : undefined,
        PrivateIpAddresses: output.privateIpAddresses !== undefined && output.privateIpAddresses !== null
            ? deserializeAws_restJson1PrivateIpAddresses(output.privateIpAddresses, context)
            : undefined,
        PublicDnsName: output.publicDnsName !== undefined && output.publicDnsName !== null ? output.publicDnsName : undefined,
        PublicIp: output.publicIp !== undefined && output.publicIp !== null ? output.publicIp : undefined,
        SecurityGroups: output.securityGroups !== undefined && output.securityGroups !== null
            ? deserializeAws_restJson1SecurityGroups(output.securityGroups, context)
            : undefined,
        SubnetId: output.subnetId !== undefined && output.subnetId !== null ? output.subnetId : undefined,
        VpcId: output.vpcId !== undefined && output.vpcId !== null ? output.vpcId : undefined,
    };
};
var deserializeAws_restJson1NetworkInterfaces = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1NetworkInterface(entry, context);
    });
};
var deserializeAws_restJson1NotEquals = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Organization = function (output, context) {
    return {
        Asn: output.asn !== undefined && output.asn !== null ? output.asn : undefined,
        AsnOrg: output.asnOrg !== undefined && output.asnOrg !== null ? output.asnOrg : undefined,
        Isp: output.isp !== undefined && output.isp !== null ? output.isp : undefined,
        Org: output.org !== undefined && output.org !== null ? output.org : undefined,
    };
};
var deserializeAws_restJson1OrganizationDataSourceConfigurationsResult = function (output, context) {
    return {
        S3Logs: output.s3Logs !== undefined && output.s3Logs !== null
            ? deserializeAws_restJson1OrganizationS3LogsConfigurationResult(output.s3Logs, context)
            : undefined,
    };
};
var deserializeAws_restJson1OrganizationS3LogsConfigurationResult = function (output, context) {
    return {
        AutoEnable: output.autoEnable !== undefined && output.autoEnable !== null ? output.autoEnable : undefined,
    };
};
var deserializeAws_restJson1Owner = function (output, context) {
    return {
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
var deserializeAws_restJson1PermissionConfiguration = function (output, context) {
    return {
        AccountLevelPermissions: output.accountLevelPermissions !== undefined && output.accountLevelPermissions !== null
            ? deserializeAws_restJson1AccountLevelPermissions(output.accountLevelPermissions, context)
            : undefined,
        BucketLevelPermissions: output.bucketLevelPermissions !== undefined && output.bucketLevelPermissions !== null
            ? deserializeAws_restJson1BucketLevelPermissions(output.bucketLevelPermissions, context)
            : undefined,
    };
};
var deserializeAws_restJson1PortProbeAction = function (output, context) {
    return {
        Blocked: output.blocked !== undefined && output.blocked !== null ? output.blocked : undefined,
        PortProbeDetails: output.portProbeDetails !== undefined && output.portProbeDetails !== null
            ? deserializeAws_restJson1PortProbeDetails(output.portProbeDetails, context)
            : undefined,
    };
};
var deserializeAws_restJson1PortProbeDetail = function (output, context) {
    return {
        LocalIpDetails: output.localIpDetails !== undefined && output.localIpDetails !== null
            ? deserializeAws_restJson1LocalIpDetails(output.localIpDetails, context)
            : undefined,
        LocalPortDetails: output.localPortDetails !== undefined && output.localPortDetails !== null
            ? deserializeAws_restJson1LocalPortDetails(output.localPortDetails, context)
            : undefined,
        RemoteIpDetails: output.remoteIpDetails !== undefined && output.remoteIpDetails !== null
            ? deserializeAws_restJson1RemoteIpDetails(output.remoteIpDetails, context)
            : undefined,
    };
};
var deserializeAws_restJson1PortProbeDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PortProbeDetail(entry, context);
    });
};
var deserializeAws_restJson1PrivateIpAddressDetails = function (output, context) {
    return {
        PrivateDnsName: output.privateDnsName !== undefined && output.privateDnsName !== null ? output.privateDnsName : undefined,
        PrivateIpAddress: output.privateIpAddress !== undefined && output.privateIpAddress !== null ? output.privateIpAddress : undefined,
    };
};
var deserializeAws_restJson1PrivateIpAddresses = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PrivateIpAddressDetails(entry, context);
    });
};
var deserializeAws_restJson1ProductCode = function (output, context) {
    return {
        Code: output.code !== undefined && output.code !== null ? output.code : undefined,
        ProductType: output.productType !== undefined && output.productType !== null ? output.productType : undefined,
    };
};
var deserializeAws_restJson1ProductCodes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ProductCode(entry, context);
    });
};
var deserializeAws_restJson1PublicAccess = function (output, context) {
    return {
        EffectivePermission: output.effectivePermission !== undefined && output.effectivePermission !== null
            ? output.effectivePermission
            : undefined,
        PermissionConfiguration: output.permissionConfiguration !== undefined && output.permissionConfiguration !== null
            ? deserializeAws_restJson1PermissionConfiguration(output.permissionConfiguration, context)
            : undefined,
    };
};
var deserializeAws_restJson1RemoteIpDetails = function (output, context) {
    return {
        City: output.city !== undefined && output.city !== null
            ? deserializeAws_restJson1City(output.city, context)
            : undefined,
        Country: output.country !== undefined && output.country !== null
            ? deserializeAws_restJson1Country(output.country, context)
            : undefined,
        GeoLocation: output.geoLocation !== undefined && output.geoLocation !== null
            ? deserializeAws_restJson1GeoLocation(output.geoLocation, context)
            : undefined,
        IpAddressV4: output.ipAddressV4 !== undefined && output.ipAddressV4 !== null ? output.ipAddressV4 : undefined,
        Organization: output.organization !== undefined && output.organization !== null
            ? deserializeAws_restJson1Organization(output.organization, context)
            : undefined,
    };
};
var deserializeAws_restJson1RemotePortDetails = function (output, context) {
    return {
        Port: output.port !== undefined && output.port !== null ? output.port : undefined,
        PortName: output.portName !== undefined && output.portName !== null ? output.portName : undefined,
    };
};
var deserializeAws_restJson1Resource = function (output, context) {
    return {
        AccessKeyDetails: output.accessKeyDetails !== undefined && output.accessKeyDetails !== null
            ? deserializeAws_restJson1AccessKeyDetails(output.accessKeyDetails, context)
            : undefined,
        InstanceDetails: output.instanceDetails !== undefined && output.instanceDetails !== null
            ? deserializeAws_restJson1InstanceDetails(output.instanceDetails, context)
            : undefined,
        ResourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        S3BucketDetails: output.s3BucketDetails !== undefined && output.s3BucketDetails !== null
            ? deserializeAws_restJson1S3BucketDetails(output.s3BucketDetails, context)
            : undefined,
    };
};
var deserializeAws_restJson1S3BucketDetail = function (output, context) {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        CreatedAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        DefaultServerSideEncryption: output.defaultServerSideEncryption !== undefined && output.defaultServerSideEncryption !== null
            ? deserializeAws_restJson1DefaultServerSideEncryption(output.defaultServerSideEncryption, context)
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        Owner: output.owner !== undefined && output.owner !== null
            ? deserializeAws_restJson1Owner(output.owner, context)
            : undefined,
        PublicAccess: output.publicAccess !== undefined && output.publicAccess !== null
            ? deserializeAws_restJson1PublicAccess(output.publicAccess, context)
            : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1S3BucketDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1S3BucketDetail(entry, context);
    });
};
var deserializeAws_restJson1S3LogsConfigurationResult = function (output, context) {
    return {
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1SecurityGroup = function (output, context) {
    return {
        GroupId: output.groupId !== undefined && output.groupId !== null ? output.groupId : undefined,
        GroupName: output.groupName !== undefined && output.groupName !== null ? output.groupName : undefined,
    };
};
var deserializeAws_restJson1SecurityGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SecurityGroup(entry, context);
    });
};
var deserializeAws_restJson1Service = function (output, context) {
    return {
        Action: output.action !== undefined && output.action !== null
            ? deserializeAws_restJson1Action(output.action, context)
            : undefined,
        Archived: output.archived !== undefined && output.archived !== null ? output.archived : undefined,
        Count: output.count !== undefined && output.count !== null ? output.count : undefined,
        DetectorId: output.detectorId !== undefined && output.detectorId !== null ? output.detectorId : undefined,
        EventFirstSeen: output.eventFirstSeen !== undefined && output.eventFirstSeen !== null ? output.eventFirstSeen : undefined,
        EventLastSeen: output.eventLastSeen !== undefined && output.eventLastSeen !== null ? output.eventLastSeen : undefined,
        Evidence: output.evidence !== undefined && output.evidence !== null
            ? deserializeAws_restJson1Evidence(output.evidence, context)
            : undefined,
        ResourceRole: output.resourceRole !== undefined && output.resourceRole !== null ? output.resourceRole : undefined,
        ServiceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
        UserFeedback: output.userFeedback !== undefined && output.userFeedback !== null ? output.userFeedback : undefined,
    };
};
var deserializeAws_restJson1Tag = function (output, context) {
    return {
        Key: output.key !== undefined && output.key !== null ? output.key : undefined,
        Value: output.value !== undefined && output.value !== null ? output.value : undefined,
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
var deserializeAws_restJson1ThreatIntelligenceDetail = function (output, context) {
    return {
        ThreatListName: output.threatListName !== undefined && output.threatListName !== null ? output.threatListName : undefined,
        ThreatNames: output.threatNames !== undefined && output.threatNames !== null
            ? deserializeAws_restJson1ThreatNames(output.threatNames, context)
            : undefined,
    };
};
var deserializeAws_restJson1ThreatIntelligenceDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ThreatIntelligenceDetail(entry, context);
    });
};
var deserializeAws_restJson1ThreatIntelSetIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1ThreatNames = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Total = function (output, context) {
    return {
        Amount: output.amount !== undefined && output.amount !== null ? output.amount : undefined,
        Unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
    };
};
var deserializeAws_restJson1UnprocessedAccount = function (output, context) {
    return {
        AccountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        Result: output.result !== undefined && output.result !== null ? output.result : undefined,
    };
};
var deserializeAws_restJson1UnprocessedAccounts = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UnprocessedAccount(entry, context);
    });
};
var deserializeAws_restJson1UsageAccountResult = function (output, context) {
    return {
        AccountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        Total: output.total !== undefined && output.total !== null
            ? deserializeAws_restJson1Total(output.total, context)
            : undefined,
    };
};
var deserializeAws_restJson1UsageAccountResultList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UsageAccountResult(entry, context);
    });
};
var deserializeAws_restJson1UsageDataSourceResult = function (output, context) {
    return {
        DataSource: output.dataSource !== undefined && output.dataSource !== null ? output.dataSource : undefined,
        Total: output.total !== undefined && output.total !== null
            ? deserializeAws_restJson1Total(output.total, context)
            : undefined,
    };
};
var deserializeAws_restJson1UsageDataSourceResultList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UsageDataSourceResult(entry, context);
    });
};
var deserializeAws_restJson1UsageResourceResult = function (output, context) {
    return {
        Resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
        Total: output.total !== undefined && output.total !== null
            ? deserializeAws_restJson1Total(output.total, context)
            : undefined,
    };
};
var deserializeAws_restJson1UsageResourceResultList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UsageResourceResult(entry, context);
    });
};
var deserializeAws_restJson1UsageStatistics = function (output, context) {
    return {
        SumByAccount: output.sumByAccount !== undefined && output.sumByAccount !== null
            ? deserializeAws_restJson1UsageAccountResultList(output.sumByAccount, context)
            : undefined,
        SumByDataSource: output.sumByDataSource !== undefined && output.sumByDataSource !== null
            ? deserializeAws_restJson1UsageDataSourceResultList(output.sumByDataSource, context)
            : undefined,
        SumByResource: output.sumByResource !== undefined && output.sumByResource !== null
            ? deserializeAws_restJson1UsageResourceResultList(output.sumByResource, context)
            : undefined,
        TopResources: output.topResources !== undefined && output.topResources !== null
            ? deserializeAws_restJson1UsageResourceResultList(output.topResources, context)
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