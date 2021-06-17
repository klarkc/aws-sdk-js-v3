import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_restJson1AssociateApprovedOriginCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/instance/{InstanceId}/approved-origin";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign({}, (input.Origin !== undefined && input.Origin !== null && { Origin: input.Origin })));
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
export var serializeAws_restJson1AssociateInstanceStorageConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/instance/{InstanceId}/storage-config";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType })), (input.StorageConfig !== undefined &&
                    input.StorageConfig !== null && {
                    StorageConfig: serializeAws_restJson1InstanceStorageConfig(input.StorageConfig, context),
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
export var serializeAws_restJson1AssociateLambdaFunctionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/instance/{InstanceId}/lambda-function";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign({}, (input.FunctionArn !== undefined && input.FunctionArn !== null && { FunctionArn: input.FunctionArn })));
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
export var serializeAws_restJson1AssociateLexBotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/instance/{InstanceId}/lex-bot";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign({}, (input.LexBot !== undefined &&
                    input.LexBot !== null && { LexBot: serializeAws_restJson1LexBot(input.LexBot, context) })));
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
export var serializeAws_restJson1AssociateQueueQuickConnectsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/queues/{InstanceId}/{QueueId}/associate-quick-connects";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.QueueId !== undefined) {
                    labelValue = input.QueueId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: QueueId.");
                    }
                    resolvedPath = resolvedPath.replace("{QueueId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: QueueId.");
                }
                body = JSON.stringify(__assign({}, (input.QuickConnectIds !== undefined &&
                    input.QuickConnectIds !== null && {
                    QuickConnectIds: serializeAws_restJson1QuickConnectsList(input.QuickConnectIds, context),
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
export var serializeAws_restJson1AssociateRoutingProfileQueuesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}/associate-queues";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.RoutingProfileId !== undefined) {
                    labelValue = input.RoutingProfileId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
                    }
                    resolvedPath = resolvedPath.replace("{RoutingProfileId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: RoutingProfileId.");
                }
                body = JSON.stringify(__assign({}, (input.QueueConfigs !== undefined &&
                    input.QueueConfigs !== null && {
                    QueueConfigs: serializeAws_restJson1RoutingProfileQueueConfigList(input.QueueConfigs, context),
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
export var serializeAws_restJson1AssociateSecurityKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/instance/{InstanceId}/security-key";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })));
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
export var serializeAws_restJson1CreateContactFlowCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/contact-flows/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.Content !== undefined && input.Content !== null && { Content: input.Content })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })), (input.Type !== undefined && input.Type !== null && { Type: input.Type })));
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
export var serializeAws_restJson1CreateInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/instance";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken })), (input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId })), (input.IdentityManagementType !== undefined &&
                    input.IdentityManagementType !== null && { IdentityManagementType: input.IdentityManagementType })), (input.InboundCallsEnabled !== undefined &&
                    input.InboundCallsEnabled !== null && { InboundCallsEnabled: input.InboundCallsEnabled })), (input.InstanceAlias !== undefined && input.InstanceAlias !== null && { InstanceAlias: input.InstanceAlias })), (input.OutboundCallsEnabled !== undefined &&
                    input.OutboundCallsEnabled !== null && { OutboundCallsEnabled: input.OutboundCallsEnabled })));
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
export var serializeAws_restJson1CreateIntegrationAssociationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/instance/{InstanceId}/integration-associations";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.IntegrationArn !== undefined &&
                    input.IntegrationArn !== null && { IntegrationArn: input.IntegrationArn })), (input.IntegrationType !== undefined &&
                    input.IntegrationType !== null && { IntegrationType: input.IntegrationType })), (input.SourceApplicationName !== undefined &&
                    input.SourceApplicationName !== null && { SourceApplicationName: input.SourceApplicationName })), (input.SourceApplicationUrl !== undefined &&
                    input.SourceApplicationUrl !== null && { SourceApplicationUrl: input.SourceApplicationUrl })), (input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })));
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
export var serializeAws_restJson1CreateQueueCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/queues/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.HoursOfOperationId !== undefined &&
                    input.HoursOfOperationId !== null && { HoursOfOperationId: input.HoursOfOperationId })), (input.MaxContacts !== undefined && input.MaxContacts !== null && { MaxContacts: input.MaxContacts })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.OutboundCallerConfig !== undefined &&
                    input.OutboundCallerConfig !== null && {
                    OutboundCallerConfig: serializeAws_restJson1OutboundCallerConfig(input.OutboundCallerConfig, context),
                })), (input.QuickConnectIds !== undefined &&
                    input.QuickConnectIds !== null && {
                    QuickConnectIds: serializeAws_restJson1QuickConnectsList(input.QuickConnectIds, context),
                })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })));
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
export var serializeAws_restJson1CreateQuickConnectCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/quick-connects/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.QuickConnectConfig !== undefined &&
                    input.QuickConnectConfig !== null && {
                    QuickConnectConfig: serializeAws_restJson1QuickConnectConfig(input.QuickConnectConfig, context),
                })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })));
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
export var serializeAws_restJson1CreateRoutingProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/routing-profiles/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.DefaultOutboundQueueId !== undefined &&
                    input.DefaultOutboundQueueId !== null && { DefaultOutboundQueueId: input.DefaultOutboundQueueId })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.MediaConcurrencies !== undefined &&
                    input.MediaConcurrencies !== null && {
                    MediaConcurrencies: serializeAws_restJson1MediaConcurrencies(input.MediaConcurrencies, context),
                })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.QueueConfigs !== undefined &&
                    input.QueueConfigs !== null && {
                    QueueConfigs: serializeAws_restJson1RoutingProfileQueueConfigList(input.QueueConfigs, context),
                })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })));
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
export var serializeAws_restJson1CreateUseCaseCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.IntegrationAssociationId !== undefined) {
                    labelValue = input.IntegrationAssociationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: IntegrationAssociationId.");
                    }
                    resolvedPath = resolvedPath.replace("{IntegrationAssociationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: IntegrationAssociationId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })), (input.UseCaseType !== undefined && input.UseCaseType !== null && { UseCaseType: input.UseCaseType })));
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
export var serializeAws_restJson1CreateUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/users/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.DirectoryUserId !== undefined &&
                    input.DirectoryUserId !== null && { DirectoryUserId: input.DirectoryUserId })), (input.HierarchyGroupId !== undefined &&
                    input.HierarchyGroupId !== null && { HierarchyGroupId: input.HierarchyGroupId })), (input.IdentityInfo !== undefined &&
                    input.IdentityInfo !== null && {
                    IdentityInfo: serializeAws_restJson1UserIdentityInfo(input.IdentityInfo, context),
                })), (input.Password !== undefined && input.Password !== null && { Password: input.Password })), (input.PhoneConfig !== undefined &&
                    input.PhoneConfig !== null && { PhoneConfig: serializeAws_restJson1UserPhoneConfig(input.PhoneConfig, context) })), (input.RoutingProfileId !== undefined &&
                    input.RoutingProfileId !== null && { RoutingProfileId: input.RoutingProfileId })), (input.SecurityProfileIds !== undefined &&
                    input.SecurityProfileIds !== null && {
                    SecurityProfileIds: serializeAws_restJson1SecurityProfileIds(input.SecurityProfileIds, context),
                })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })), (input.Username !== undefined && input.Username !== null && { Username: input.Username })));
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
export var serializeAws_restJson1CreateUserHierarchyGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/user-hierarchy-groups/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.ParentGroupId !== undefined && input.ParentGroupId !== null && { ParentGroupId: input.ParentGroupId })));
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
export var serializeAws_restJson1DeleteInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
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
export var serializeAws_restJson1DeleteIntegrationAssociationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.IntegrationAssociationId !== undefined) {
                    labelValue = input.IntegrationAssociationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: IntegrationAssociationId.");
                    }
                    resolvedPath = resolvedPath.replace("{IntegrationAssociationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: IntegrationAssociationId.");
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
export var serializeAws_restJson1DeleteQuickConnectCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/quick-connects/{InstanceId}/{QuickConnectId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.QuickConnectId !== undefined) {
                    labelValue = input.QuickConnectId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: QuickConnectId.");
                    }
                    resolvedPath = resolvedPath.replace("{QuickConnectId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: QuickConnectId.");
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
export var serializeAws_restJson1DeleteUseCaseCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases/{UseCaseId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.IntegrationAssociationId !== undefined) {
                    labelValue = input.IntegrationAssociationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: IntegrationAssociationId.");
                    }
                    resolvedPath = resolvedPath.replace("{IntegrationAssociationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: IntegrationAssociationId.");
                }
                if (input.UseCaseId !== undefined) {
                    labelValue = input.UseCaseId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: UseCaseId.");
                    }
                    resolvedPath = resolvedPath.replace("{UseCaseId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: UseCaseId.");
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
export var serializeAws_restJson1DeleteUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/users/{InstanceId}/{UserId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.UserId !== undefined) {
                    labelValue = input.UserId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: UserId.");
                    }
                    resolvedPath = resolvedPath.replace("{UserId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: UserId.");
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
export var serializeAws_restJson1DeleteUserHierarchyGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}";
                if (input.HierarchyGroupId !== undefined) {
                    labelValue = input.HierarchyGroupId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HierarchyGroupId.");
                    }
                    resolvedPath = resolvedPath.replace("{HierarchyGroupId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HierarchyGroupId.");
                }
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
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
export var serializeAws_restJson1DescribeContactFlowCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/contact-flows/{InstanceId}/{ContactFlowId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.ContactFlowId !== undefined) {
                    labelValue = input.ContactFlowId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ContactFlowId.");
                    }
                    resolvedPath = resolvedPath.replace("{ContactFlowId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ContactFlowId.");
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
export var serializeAws_restJson1DescribeHoursOfOperationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/hours-of-operations/{InstanceId}/{HoursOfOperationId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.HoursOfOperationId !== undefined) {
                    labelValue = input.HoursOfOperationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HoursOfOperationId.");
                    }
                    resolvedPath = resolvedPath.replace("{HoursOfOperationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HoursOfOperationId.");
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
export var serializeAws_restJson1DescribeInstanceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
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
export var serializeAws_restJson1DescribeInstanceAttributeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/attribute/{AttributeType}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.AttributeType !== undefined) {
                    labelValue = input.AttributeType;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: AttributeType.");
                    }
                    resolvedPath = resolvedPath.replace("{AttributeType}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: AttributeType.");
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
export var serializeAws_restJson1DescribeInstanceStorageConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/storage-config/{AssociationId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.AssociationId !== undefined) {
                    labelValue = input.AssociationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: AssociationId.");
                    }
                    resolvedPath = resolvedPath.replace("{AssociationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: AssociationId.");
                }
                query = __assign({}, (input.ResourceType !== undefined && { resourceType: input.ResourceType }));
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
export var serializeAws_restJson1DescribeQueueCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/queues/{InstanceId}/{QueueId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.QueueId !== undefined) {
                    labelValue = input.QueueId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: QueueId.");
                    }
                    resolvedPath = resolvedPath.replace("{QueueId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: QueueId.");
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
export var serializeAws_restJson1DescribeQuickConnectCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/quick-connects/{InstanceId}/{QuickConnectId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.QuickConnectId !== undefined) {
                    labelValue = input.QuickConnectId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: QuickConnectId.");
                    }
                    resolvedPath = resolvedPath.replace("{QuickConnectId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: QuickConnectId.");
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
export var serializeAws_restJson1DescribeRoutingProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.RoutingProfileId !== undefined) {
                    labelValue = input.RoutingProfileId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
                    }
                    resolvedPath = resolvedPath.replace("{RoutingProfileId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: RoutingProfileId.");
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
export var serializeAws_restJson1DescribeUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/users/{InstanceId}/{UserId}";
                if (input.UserId !== undefined) {
                    labelValue = input.UserId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: UserId.");
                    }
                    resolvedPath = resolvedPath.replace("{UserId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: UserId.");
                }
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
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
export var serializeAws_restJson1DescribeUserHierarchyGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}";
                if (input.HierarchyGroupId !== undefined) {
                    labelValue = input.HierarchyGroupId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HierarchyGroupId.");
                    }
                    resolvedPath = resolvedPath.replace("{HierarchyGroupId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HierarchyGroupId.");
                }
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
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
export var serializeAws_restJson1DescribeUserHierarchyStructureCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/user-hierarchy-structure/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
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
export var serializeAws_restJson1DisassociateApprovedOriginCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/approved-origin";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign({}, (input.Origin !== undefined && { origin: input.Origin }));
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
export var serializeAws_restJson1DisassociateInstanceStorageConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/storage-config/{AssociationId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.AssociationId !== undefined) {
                    labelValue = input.AssociationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: AssociationId.");
                    }
                    resolvedPath = resolvedPath.replace("{AssociationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: AssociationId.");
                }
                query = __assign({}, (input.ResourceType !== undefined && { resourceType: input.ResourceType }));
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
export var serializeAws_restJson1DisassociateLambdaFunctionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/lambda-function";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign({}, (input.FunctionArn !== undefined && { functionArn: input.FunctionArn }));
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
export var serializeAws_restJson1DisassociateLexBotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/lex-bot";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign({}, (input.BotName !== undefined && { botName: input.BotName })), (input.LexRegion !== undefined && { lexRegion: input.LexRegion }));
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
export var serializeAws_restJson1DisassociateQueueQuickConnectsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/queues/{InstanceId}/{QueueId}/disassociate-quick-connects";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.QueueId !== undefined) {
                    labelValue = input.QueueId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: QueueId.");
                    }
                    resolvedPath = resolvedPath.replace("{QueueId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: QueueId.");
                }
                body = JSON.stringify(__assign({}, (input.QuickConnectIds !== undefined &&
                    input.QuickConnectIds !== null && {
                    QuickConnectIds: serializeAws_restJson1QuickConnectsList(input.QuickConnectIds, context),
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
export var serializeAws_restJson1DisassociateRoutingProfileQueuesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}/disassociate-queues";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.RoutingProfileId !== undefined) {
                    labelValue = input.RoutingProfileId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
                    }
                    resolvedPath = resolvedPath.replace("{RoutingProfileId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: RoutingProfileId.");
                }
                body = JSON.stringify(__assign({}, (input.QueueReferences !== undefined &&
                    input.QueueReferences !== null && {
                    QueueReferences: serializeAws_restJson1RoutingProfileQueueReferenceList(input.QueueReferences, context),
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
export var serializeAws_restJson1DisassociateSecurityKeyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/security-key/{AssociationId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.AssociationId !== undefined) {
                    labelValue = input.AssociationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: AssociationId.");
                    }
                    resolvedPath = resolvedPath.replace("{AssociationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: AssociationId.");
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
export var serializeAws_restJson1GetContactAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/contact/attributes/{InstanceId}/{InitialContactId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.InitialContactId !== undefined) {
                    labelValue = input.InitialContactId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InitialContactId.");
                    }
                    resolvedPath = resolvedPath.replace("{InitialContactId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InitialContactId.");
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
export var serializeAws_restJson1GetCurrentMetricDataCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/metrics/current/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.CurrentMetrics !== undefined &&
                    input.CurrentMetrics !== null && {
                    CurrentMetrics: serializeAws_restJson1CurrentMetrics(input.CurrentMetrics, context),
                })), (input.Filters !== undefined &&
                    input.Filters !== null && { Filters: serializeAws_restJson1Filters(input.Filters, context) })), (input.Groupings !== undefined &&
                    input.Groupings !== null && { Groupings: serializeAws_restJson1Groupings(input.Groupings, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })));
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
export var serializeAws_restJson1GetFederationTokenCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/user/federate/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
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
export var serializeAws_restJson1GetMetricDataCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/metrics/historical/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.EndTime !== undefined &&
                    input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.Filters !== undefined &&
                    input.Filters !== null && { Filters: serializeAws_restJson1Filters(input.Filters, context) })), (input.Groupings !== undefined &&
                    input.Groupings !== null && { Groupings: serializeAws_restJson1Groupings(input.Groupings, context) })), (input.HistoricalMetrics !== undefined &&
                    input.HistoricalMetrics !== null && {
                    HistoricalMetrics: serializeAws_restJson1HistoricalMetrics(input.HistoricalMetrics, context),
                })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.StartTime !== undefined &&
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
export var serializeAws_restJson1ListApprovedOriginsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/approved-origins";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListContactFlowsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/contact-flows-summary/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign(__assign({}, (input.ContactFlowTypes !== undefined && {
                    contactFlowTypes: (input.ContactFlowTypes || []).map(function (_entry) { return _entry; }),
                })), (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListHoursOfOperationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/hours-of-operations-summary/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListInstanceAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/attributes";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance";
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListInstanceStorageConfigsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/storage-configs";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign(__assign({}, (input.ResourceType !== undefined && { resourceType: input.ResourceType })), (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListIntegrationAssociationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/integration-associations";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListLambdaFunctionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/lambda-functions";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListLexBotsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/lex-bots";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListPhoneNumbersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/phone-numbers-summary/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign(__assign(__assign({}, (input.PhoneNumberTypes !== undefined && {
                    phoneNumberTypes: (input.PhoneNumberTypes || []).map(function (_entry) { return _entry; }),
                })), (input.PhoneNumberCountryCodes !== undefined && {
                    phoneNumberCountryCodes: (input.PhoneNumberCountryCodes || []).map(function (_entry) { return _entry; }),
                })), (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListPromptsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/prompts-summary/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListQueueQuickConnectsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/queues/{InstanceId}/{QueueId}/quick-connects";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.QueueId !== undefined) {
                    labelValue = input.QueueId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: QueueId.");
                    }
                    resolvedPath = resolvedPath.replace("{QueueId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: QueueId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListQueuesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/queues-summary/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign(__assign({}, (input.QueueTypes !== undefined && { queueTypes: (input.QueueTypes || []).map(function (_entry) { return _entry; }) })), (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListQuickConnectsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/quick-connects/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.QuickConnectTypes !== undefined && {
                    QuickConnectTypes: (input.QuickConnectTypes || []).map(function (_entry) { return _entry; }),
                }));
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
export var serializeAws_restJson1ListRoutingProfileQueuesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}/queues";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.RoutingProfileId !== undefined) {
                    labelValue = input.RoutingProfileId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
                    }
                    resolvedPath = resolvedPath.replace("{RoutingProfileId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: RoutingProfileId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListRoutingProfilesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/routing-profiles-summary/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListSecurityKeysCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/security-keys";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListSecurityProfilesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/security-profiles-summary/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListUseCasesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.IntegrationAssociationId !== undefined) {
                    labelValue = input.IntegrationAssociationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: IntegrationAssociationId.");
                    }
                    resolvedPath = resolvedPath.replace("{IntegrationAssociationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: IntegrationAssociationId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListUserHierarchyGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/user-hierarchy-groups-summary/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ListUsersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/users-summary/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1ResumeContactRecordingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/contact/resume-recording";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId })), (input.InitialContactId !== undefined &&
                    input.InitialContactId !== null && { InitialContactId: input.InitialContactId })), (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId })));
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
export var serializeAws_restJson1StartChatContactCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/contact/chat";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Attributes !== undefined &&
                    input.Attributes !== null && { Attributes: serializeAws_restJson1Attributes(input.Attributes, context) })), { ClientToken: (_c = input.ClientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.ContactFlowId !== undefined && input.ContactFlowId !== null && { ContactFlowId: input.ContactFlowId })), (input.InitialMessage !== undefined &&
                    input.InitialMessage !== null && {
                    InitialMessage: serializeAws_restJson1ChatMessage(input.InitialMessage, context),
                })), (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId })), (input.ParticipantDetails !== undefined &&
                    input.ParticipantDetails !== null && {
                    ParticipantDetails: serializeAws_restJson1ParticipantDetails(input.ParticipantDetails, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1StartContactRecordingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/contact/start-recording";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId })), (input.InitialContactId !== undefined &&
                    input.InitialContactId !== null && { InitialContactId: input.InitialContactId })), (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId })), (input.VoiceRecordingConfiguration !== undefined &&
                    input.VoiceRecordingConfiguration !== null && {
                    VoiceRecordingConfiguration: serializeAws_restJson1VoiceRecordingConfiguration(input.VoiceRecordingConfiguration, context),
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
export var serializeAws_restJson1StartOutboundVoiceContactCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/contact/outbound-voice";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Attributes !== undefined &&
                    input.Attributes !== null && { Attributes: serializeAws_restJson1Attributes(input.Attributes, context) })), { ClientToken: (_c = input.ClientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.ContactFlowId !== undefined && input.ContactFlowId !== null && { ContactFlowId: input.ContactFlowId })), (input.DestinationPhoneNumber !== undefined &&
                    input.DestinationPhoneNumber !== null && { DestinationPhoneNumber: input.DestinationPhoneNumber })), (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId })), (input.QueueId !== undefined && input.QueueId !== null && { QueueId: input.QueueId })), (input.SourcePhoneNumber !== undefined &&
                    input.SourcePhoneNumber !== null && { SourcePhoneNumber: input.SourcePhoneNumber })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1StartTaskContactCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/contact/task";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Attributes !== undefined &&
                    input.Attributes !== null && { Attributes: serializeAws_restJson1Attributes(input.Attributes, context) })), { ClientToken: (_c = input.ClientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.ContactFlowId !== undefined && input.ContactFlowId !== null && { ContactFlowId: input.ContactFlowId })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.PreviousContactId !== undefined &&
                    input.PreviousContactId !== null && { PreviousContactId: input.PreviousContactId })), (input.References !== undefined &&
                    input.References !== null && { References: serializeAws_restJson1ContactReferences(input.References, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1StopContactCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/contact/stop";
                body = JSON.stringify(__assign(__assign({}, (input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId })), (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId })));
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
export var serializeAws_restJson1StopContactRecordingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/contact/stop-recording";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId })), (input.InitialContactId !== undefined &&
                    input.InitialContactId !== null && { InitialContactId: input.InitialContactId })), (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId })));
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
export var serializeAws_restJson1SuspendContactRecordingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/contact/suspend-recording";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.ContactId !== undefined && input.ContactId !== null && { ContactId: input.ContactId })), (input.InitialContactId !== undefined &&
                    input.InitialContactId !== null && { InitialContactId: input.InitialContactId })), (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId })));
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
export var serializeAws_restJson1UpdateContactAttributesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/contact/attributes";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Attributes !== undefined &&
                    input.Attributes !== null && { Attributes: serializeAws_restJson1Attributes(input.Attributes, context) })), (input.InitialContactId !== undefined &&
                    input.InitialContactId !== null && { InitialContactId: input.InitialContactId })), (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId })));
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
export var serializeAws_restJson1UpdateContactFlowContentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/contact-flows/{InstanceId}/{ContactFlowId}/content";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.ContactFlowId !== undefined) {
                    labelValue = input.ContactFlowId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ContactFlowId.");
                    }
                    resolvedPath = resolvedPath.replace("{ContactFlowId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ContactFlowId.");
                }
                body = JSON.stringify(__assign({}, (input.Content !== undefined && input.Content !== null && { Content: input.Content })));
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
export var serializeAws_restJson1UpdateContactFlowNameCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/contact-flows/{InstanceId}/{ContactFlowId}/name";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.ContactFlowId !== undefined) {
                    labelValue = input.ContactFlowId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ContactFlowId.");
                    }
                    resolvedPath = resolvedPath.replace("{ContactFlowId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ContactFlowId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })));
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
export var serializeAws_restJson1UpdateInstanceAttributeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/instance/{InstanceId}/attribute/{AttributeType}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.AttributeType !== undefined) {
                    labelValue = input.AttributeType;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: AttributeType.");
                    }
                    resolvedPath = resolvedPath.replace("{AttributeType}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: AttributeType.");
                }
                body = JSON.stringify(__assign({}, (input.Value !== undefined && input.Value !== null && { Value: input.Value })));
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
export var serializeAws_restJson1UpdateInstanceStorageConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/instance/{InstanceId}/storage-config/{AssociationId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.AssociationId !== undefined) {
                    labelValue = input.AssociationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: AssociationId.");
                    }
                    resolvedPath = resolvedPath.replace("{AssociationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: AssociationId.");
                }
                query = __assign({}, (input.ResourceType !== undefined && { resourceType: input.ResourceType }));
                body = JSON.stringify(__assign({}, (input.StorageConfig !== undefined &&
                    input.StorageConfig !== null && {
                    StorageConfig: serializeAws_restJson1InstanceStorageConfig(input.StorageConfig, context),
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
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateQueueHoursOfOperationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/queues/{InstanceId}/{QueueId}/hours-of-operation";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.QueueId !== undefined) {
                    labelValue = input.QueueId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: QueueId.");
                    }
                    resolvedPath = resolvedPath.replace("{QueueId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: QueueId.");
                }
                body = JSON.stringify(__assign({}, (input.HoursOfOperationId !== undefined &&
                    input.HoursOfOperationId !== null && { HoursOfOperationId: input.HoursOfOperationId })));
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
export var serializeAws_restJson1UpdateQueueMaxContactsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/queues/{InstanceId}/{QueueId}/max-contacts";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.QueueId !== undefined) {
                    labelValue = input.QueueId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: QueueId.");
                    }
                    resolvedPath = resolvedPath.replace("{QueueId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: QueueId.");
                }
                body = JSON.stringify(__assign({}, (input.MaxContacts !== undefined && input.MaxContacts !== null && { MaxContacts: input.MaxContacts })));
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
export var serializeAws_restJson1UpdateQueueNameCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/queues/{InstanceId}/{QueueId}/name";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.QueueId !== undefined) {
                    labelValue = input.QueueId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: QueueId.");
                    }
                    resolvedPath = resolvedPath.replace("{QueueId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: QueueId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })));
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
export var serializeAws_restJson1UpdateQueueOutboundCallerConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/queues/{InstanceId}/{QueueId}/outbound-caller-config";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.QueueId !== undefined) {
                    labelValue = input.QueueId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: QueueId.");
                    }
                    resolvedPath = resolvedPath.replace("{QueueId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: QueueId.");
                }
                body = JSON.stringify(__assign({}, (input.OutboundCallerConfig !== undefined &&
                    input.OutboundCallerConfig !== null && {
                    OutboundCallerConfig: serializeAws_restJson1OutboundCallerConfig(input.OutboundCallerConfig, context),
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
export var serializeAws_restJson1UpdateQueueStatusCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/queues/{InstanceId}/{QueueId}/status";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.QueueId !== undefined) {
                    labelValue = input.QueueId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: QueueId.");
                    }
                    resolvedPath = resolvedPath.replace("{QueueId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: QueueId.");
                }
                body = JSON.stringify(__assign({}, (input.Status !== undefined && input.Status !== null && { Status: input.Status })));
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
export var serializeAws_restJson1UpdateQuickConnectConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/quick-connects/{InstanceId}/{QuickConnectId}/config";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.QuickConnectId !== undefined) {
                    labelValue = input.QuickConnectId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: QuickConnectId.");
                    }
                    resolvedPath = resolvedPath.replace("{QuickConnectId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: QuickConnectId.");
                }
                body = JSON.stringify(__assign({}, (input.QuickConnectConfig !== undefined &&
                    input.QuickConnectConfig !== null && {
                    QuickConnectConfig: serializeAws_restJson1QuickConnectConfig(input.QuickConnectConfig, context),
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
export var serializeAws_restJson1UpdateQuickConnectNameCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/quick-connects/{InstanceId}/{QuickConnectId}/name";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.QuickConnectId !== undefined) {
                    labelValue = input.QuickConnectId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: QuickConnectId.");
                    }
                    resolvedPath = resolvedPath.replace("{QuickConnectId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: QuickConnectId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })));
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
export var serializeAws_restJson1UpdateRoutingProfileConcurrencyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}/concurrency";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.RoutingProfileId !== undefined) {
                    labelValue = input.RoutingProfileId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
                    }
                    resolvedPath = resolvedPath.replace("{RoutingProfileId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: RoutingProfileId.");
                }
                body = JSON.stringify(__assign({}, (input.MediaConcurrencies !== undefined &&
                    input.MediaConcurrencies !== null && {
                    MediaConcurrencies: serializeAws_restJson1MediaConcurrencies(input.MediaConcurrencies, context),
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
export var serializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}/default-outbound-queue";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.RoutingProfileId !== undefined) {
                    labelValue = input.RoutingProfileId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
                    }
                    resolvedPath = resolvedPath.replace("{RoutingProfileId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: RoutingProfileId.");
                }
                body = JSON.stringify(__assign({}, (input.DefaultOutboundQueueId !== undefined &&
                    input.DefaultOutboundQueueId !== null && { DefaultOutboundQueueId: input.DefaultOutboundQueueId })));
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
export var serializeAws_restJson1UpdateRoutingProfileNameCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}/name";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.RoutingProfileId !== undefined) {
                    labelValue = input.RoutingProfileId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
                    }
                    resolvedPath = resolvedPath.replace("{RoutingProfileId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: RoutingProfileId.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })));
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
export var serializeAws_restJson1UpdateRoutingProfileQueuesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/routing-profiles/{InstanceId}/{RoutingProfileId}/queues";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                if (input.RoutingProfileId !== undefined) {
                    labelValue = input.RoutingProfileId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: RoutingProfileId.");
                    }
                    resolvedPath = resolvedPath.replace("{RoutingProfileId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: RoutingProfileId.");
                }
                body = JSON.stringify(__assign({}, (input.QueueConfigs !== undefined &&
                    input.QueueConfigs !== null && {
                    QueueConfigs: serializeAws_restJson1RoutingProfileQueueConfigList(input.QueueConfigs, context),
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
export var serializeAws_restJson1UpdateUserHierarchyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/users/{InstanceId}/{UserId}/hierarchy";
                if (input.UserId !== undefined) {
                    labelValue = input.UserId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: UserId.");
                    }
                    resolvedPath = resolvedPath.replace("{UserId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: UserId.");
                }
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign({}, (input.HierarchyGroupId !== undefined &&
                    input.HierarchyGroupId !== null && { HierarchyGroupId: input.HierarchyGroupId })));
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
export var serializeAws_restJson1UpdateUserHierarchyGroupNameCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}/name";
                if (input.HierarchyGroupId !== undefined) {
                    labelValue = input.HierarchyGroupId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: HierarchyGroupId.");
                    }
                    resolvedPath = resolvedPath.replace("{HierarchyGroupId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: HierarchyGroupId.");
                }
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })));
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
export var serializeAws_restJson1UpdateUserHierarchyStructureCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/user-hierarchy-structure/{InstanceId}";
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign({}, (input.HierarchyStructure !== undefined &&
                    input.HierarchyStructure !== null && {
                    HierarchyStructure: serializeAws_restJson1HierarchyStructureUpdate(input.HierarchyStructure, context),
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
export var serializeAws_restJson1UpdateUserIdentityInfoCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/users/{InstanceId}/{UserId}/identity-info";
                if (input.UserId !== undefined) {
                    labelValue = input.UserId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: UserId.");
                    }
                    resolvedPath = resolvedPath.replace("{UserId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: UserId.");
                }
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign({}, (input.IdentityInfo !== undefined &&
                    input.IdentityInfo !== null && {
                    IdentityInfo: serializeAws_restJson1UserIdentityInfo(input.IdentityInfo, context),
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
export var serializeAws_restJson1UpdateUserPhoneConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/users/{InstanceId}/{UserId}/phone-config";
                if (input.UserId !== undefined) {
                    labelValue = input.UserId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: UserId.");
                    }
                    resolvedPath = resolvedPath.replace("{UserId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: UserId.");
                }
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign({}, (input.PhoneConfig !== undefined &&
                    input.PhoneConfig !== null && { PhoneConfig: serializeAws_restJson1UserPhoneConfig(input.PhoneConfig, context) })));
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
export var serializeAws_restJson1UpdateUserRoutingProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/users/{InstanceId}/{UserId}/routing-profile";
                if (input.UserId !== undefined) {
                    labelValue = input.UserId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: UserId.");
                    }
                    resolvedPath = resolvedPath.replace("{UserId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: UserId.");
                }
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign({}, (input.RoutingProfileId !== undefined &&
                    input.RoutingProfileId !== null && { RoutingProfileId: input.RoutingProfileId })));
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
export var serializeAws_restJson1UpdateUserSecurityProfilesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/users/{InstanceId}/{UserId}/security-profiles";
                if (input.UserId !== undefined) {
                    labelValue = input.UserId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: UserId.");
                    }
                    resolvedPath = resolvedPath.replace("{UserId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: UserId.");
                }
                if (input.InstanceId !== undefined) {
                    labelValue = input.InstanceId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InstanceId.");
                    }
                    resolvedPath = resolvedPath.replace("{InstanceId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InstanceId.");
                }
                body = JSON.stringify(__assign({}, (input.SecurityProfileIds !== undefined &&
                    input.SecurityProfileIds !== null && {
                    SecurityProfileIds: serializeAws_restJson1SecurityProfileIds(input.SecurityProfileIds, context),
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
export var deserializeAws_restJson1AssociateApprovedOriginCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AssociateApprovedOriginCommandError(output, context)];
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
var deserializeAws_restJson1AssociateApprovedOriginCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceConflictException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceConflictException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ServiceQuotaExceededException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1AssociateInstanceStorageConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AssociateInstanceStorageConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AssociationId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AssociationId !== undefined && data.AssociationId !== null) {
                    contents.AssociationId = data.AssociationId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1AssociateInstanceStorageConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceConflictException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceConflictException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1AssociateLambdaFunctionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AssociateLambdaFunctionCommandError(output, context)];
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
var deserializeAws_restJson1AssociateLambdaFunctionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceConflictException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceConflictException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ServiceQuotaExceededException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1AssociateLexBotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AssociateLexBotCommandError(output, context)];
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
var deserializeAws_restJson1AssociateLexBotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceConflictException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceConflictException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ServiceQuotaExceededException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1AssociateQueueQuickConnectsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AssociateQueueQuickConnectsCommandError(output, context)];
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
var deserializeAws_restJson1AssociateQueueQuickConnectsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1AssociateRoutingProfileQueuesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AssociateRoutingProfileQueuesCommandError(output, context)];
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
var deserializeAws_restJson1AssociateRoutingProfileQueuesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1AssociateSecurityKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AssociateSecurityKeyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AssociationId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AssociationId !== undefined && data.AssociationId !== null) {
                    contents.AssociationId = data.AssociationId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1AssociateSecurityKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceConflictException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceConflictException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ServiceQuotaExceededException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateContactFlowCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateContactFlowCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ContactFlowArn: undefined,
                    ContactFlowId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ContactFlowArn !== undefined && data.ContactFlowArn !== null) {
                    contents.ContactFlowArn = data.ContactFlowArn;
                }
                if (data.ContactFlowId !== undefined && data.ContactFlowId !== null) {
                    contents.ContactFlowId = data.ContactFlowId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateContactFlowCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidContactFlowException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidContactFlowException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 10];
                    case "LimitExceededException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#LimitExceededException": return [3 /*break*/, 12];
                    case "ResourceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 14];
                    case "ThrottlingException": return [3 /*break*/, 16];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidContactFlowExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateInstanceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    Id: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                if (data.Id !== undefined && data.Id !== null) {
                    contents.Id = data.Id;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ServiceQuotaExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateIntegrationAssociationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateIntegrationAssociationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    IntegrationAssociationArn: undefined,
                    IntegrationAssociationId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.IntegrationAssociationArn !== undefined && data.IntegrationAssociationArn !== null) {
                    contents.IntegrationAssociationArn = data.IntegrationAssociationArn;
                }
                if (data.IntegrationAssociationId !== undefined && data.IntegrationAssociationId !== null) {
                    contents.IntegrationAssociationId = data.IntegrationAssociationId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateIntegrationAssociationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateQueueCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateQueueCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    QueueArn: undefined,
                    QueueId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.QueueArn !== undefined && data.QueueArn !== null) {
                    contents.QueueArn = data.QueueArn;
                }
                if (data.QueueId !== undefined && data.QueueId !== null) {
                    contents.QueueId = data.QueueId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateQueueCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#LimitExceededException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateQuickConnectCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateQuickConnectCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    QuickConnectARN: undefined,
                    QuickConnectId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.QuickConnectARN !== undefined && data.QuickConnectARN !== null) {
                    contents.QuickConnectARN = data.QuickConnectARN;
                }
                if (data.QuickConnectId !== undefined && data.QuickConnectId !== null) {
                    contents.QuickConnectId = data.QuickConnectId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateQuickConnectCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#LimitExceededException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateRoutingProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateRoutingProfileCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    RoutingProfileArn: undefined,
                    RoutingProfileId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.RoutingProfileArn !== undefined && data.RoutingProfileArn !== null) {
                    contents.RoutingProfileArn = data.RoutingProfileArn;
                }
                if (data.RoutingProfileId !== undefined && data.RoutingProfileId !== null) {
                    contents.RoutingProfileId = data.RoutingProfileId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateRoutingProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#LimitExceededException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateUseCaseCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateUseCaseCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    UseCaseArn: undefined,
                    UseCaseId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.UseCaseArn !== undefined && data.UseCaseArn !== null) {
                    contents.UseCaseArn = data.UseCaseArn;
                }
                if (data.UseCaseId !== undefined && data.UseCaseId !== null) {
                    contents.UseCaseId = data.UseCaseId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateUseCaseCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateUserCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    UserArn: undefined,
                    UserId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.UserArn !== undefined && data.UserArn !== null) {
                    contents.UserArn = data.UserArn;
                }
                if (data.UserId !== undefined && data.UserId !== null) {
                    contents.UserId = data.UserId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#LimitExceededException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateUserHierarchyGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateUserHierarchyGroupCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HierarchyGroupArn: undefined,
                    HierarchyGroupId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.HierarchyGroupArn !== undefined && data.HierarchyGroupArn !== null) {
                    contents.HierarchyGroupArn = data.HierarchyGroupArn;
                }
                if (data.HierarchyGroupId !== undefined && data.HierarchyGroupId !== null) {
                    contents.HierarchyGroupId = data.HierarchyGroupId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateUserHierarchyGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#LimitExceededException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteInstanceCommandError(output, context)];
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
var deserializeAws_restJson1DeleteInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteIntegrationAssociationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteIntegrationAssociationCommandError(output, context)];
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
var deserializeAws_restJson1DeleteIntegrationAssociationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteQuickConnectCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteQuickConnectCommandError(output, context)];
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
var deserializeAws_restJson1DeleteQuickConnectCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteUseCaseCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteUseCaseCommandError(output, context)];
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
var deserializeAws_restJson1DeleteUseCaseCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteUserCommandError(output, context)];
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
var deserializeAws_restJson1DeleteUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteUserHierarchyGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteUserHierarchyGroupCommandError(output, context)];
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
var deserializeAws_restJson1DeleteUserHierarchyGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeContactFlowCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeContactFlowCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ContactFlow: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ContactFlow !== undefined && data.ContactFlow !== null) {
                    contents.ContactFlow = deserializeAws_restJson1ContactFlow(data.ContactFlow, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeContactFlowCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ContactFlowNotPublishedException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#ContactFlowNotPublishedException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ContactFlowNotPublishedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeHoursOfOperationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeHoursOfOperationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HoursOfOperation: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.HoursOfOperation !== undefined && data.HoursOfOperation !== null) {
                    contents.HoursOfOperation = deserializeAws_restJson1HoursOfOperation(data.HoursOfOperation, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeHoursOfOperationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeInstanceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeInstanceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Instance: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Instance !== undefined && data.Instance !== null) {
                    contents.Instance = deserializeAws_restJson1Instance(data.Instance, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeInstanceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeInstanceAttributeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeInstanceAttributeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Attribute: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Attribute !== undefined && data.Attribute !== null) {
                    contents.Attribute = deserializeAws_restJson1Attribute(data.Attribute, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeInstanceAttributeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeInstanceStorageConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeInstanceStorageConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    StorageConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.StorageConfig !== undefined && data.StorageConfig !== null) {
                    contents.StorageConfig = deserializeAws_restJson1InstanceStorageConfig(data.StorageConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeInstanceStorageConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeQueueCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeQueueCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Queue: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Queue !== undefined && data.Queue !== null) {
                    contents.Queue = deserializeAws_restJson1Queue(data.Queue, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeQueueCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeQuickConnectCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeQuickConnectCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    QuickConnect: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.QuickConnect !== undefined && data.QuickConnect !== null) {
                    contents.QuickConnect = deserializeAws_restJson1QuickConnect(data.QuickConnect, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeQuickConnectCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeRoutingProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeRoutingProfileCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    RoutingProfile: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.RoutingProfile !== undefined && data.RoutingProfile !== null) {
                    contents.RoutingProfile = deserializeAws_restJson1RoutingProfile(data.RoutingProfile, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeRoutingProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeUserCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    User: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.User !== undefined && data.User !== null) {
                    contents.User = deserializeAws_restJson1User(data.User, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeUserHierarchyGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeUserHierarchyGroupCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HierarchyGroup: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.HierarchyGroup !== undefined && data.HierarchyGroup !== null) {
                    contents.HierarchyGroup = deserializeAws_restJson1HierarchyGroup(data.HierarchyGroup, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeUserHierarchyGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeUserHierarchyStructureCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeUserHierarchyStructureCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HierarchyStructure: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.HierarchyStructure !== undefined && data.HierarchyStructure !== null) {
                    contents.HierarchyStructure = deserializeAws_restJson1HierarchyStructure(data.HierarchyStructure, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeUserHierarchyStructureCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DisassociateApprovedOriginCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisassociateApprovedOriginCommandError(output, context)];
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
var deserializeAws_restJson1DisassociateApprovedOriginCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DisassociateInstanceStorageConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisassociateInstanceStorageConfigCommandError(output, context)];
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
var deserializeAws_restJson1DisassociateInstanceStorageConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DisassociateLambdaFunctionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisassociateLambdaFunctionCommandError(output, context)];
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
var deserializeAws_restJson1DisassociateLambdaFunctionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DisassociateLexBotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisassociateLexBotCommandError(output, context)];
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
var deserializeAws_restJson1DisassociateLexBotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DisassociateQueueQuickConnectsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisassociateQueueQuickConnectsCommandError(output, context)];
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
var deserializeAws_restJson1DisassociateQueueQuickConnectsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DisassociateRoutingProfileQueuesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisassociateRoutingProfileQueuesCommandError(output, context)];
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
var deserializeAws_restJson1DisassociateRoutingProfileQueuesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DisassociateSecurityKeyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisassociateSecurityKeyCommandError(output, context)];
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
var deserializeAws_restJson1DisassociateSecurityKeyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetContactAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetContactAttributesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Attributes: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Attributes !== undefined && data.Attributes !== null) {
                    contents.Attributes = deserializeAws_restJson1Attributes(data.Attributes, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetContactAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetCurrentMetricDataCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetCurrentMetricDataCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DataSnapshotTime: undefined,
                    MetricResults: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DataSnapshotTime !== undefined && data.DataSnapshotTime !== null) {
                    contents.DataSnapshotTime = new Date(Math.round(data.DataSnapshotTime * 1000));
                }
                if (data.MetricResults !== undefined && data.MetricResults !== null) {
                    contents.MetricResults = deserializeAws_restJson1CurrentMetricResults(data.MetricResults, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetCurrentMetricDataCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetFederationTokenCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetFederationTokenCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Credentials: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Credentials !== undefined && data.Credentials !== null) {
                    contents.Credentials = deserializeAws_restJson1Credentials(data.Credentials, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetFederationTokenCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "UserNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#UserNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1UserNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetMetricDataCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetMetricDataCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    MetricResults: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.MetricResults !== undefined && data.MetricResults !== null) {
                    contents.MetricResults = deserializeAws_restJson1HistoricalMetricResults(data.MetricResults, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetMetricDataCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListApprovedOriginsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListApprovedOriginsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    Origins: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.Origins !== undefined && data.Origins !== null) {
                    contents.Origins = deserializeAws_restJson1OriginsList(data.Origins, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListApprovedOriginsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListContactFlowsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListContactFlowsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ContactFlowSummaryList: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ContactFlowSummaryList !== undefined && data.ContactFlowSummaryList !== null) {
                    contents.ContactFlowSummaryList = deserializeAws_restJson1ContactFlowSummaryList(data.ContactFlowSummaryList, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListContactFlowsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListHoursOfOperationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListHoursOfOperationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    HoursOfOperationSummaryList: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.HoursOfOperationSummaryList !== undefined && data.HoursOfOperationSummaryList !== null) {
                    contents.HoursOfOperationSummaryList = deserializeAws_restJson1HoursOfOperationSummaryList(data.HoursOfOperationSummaryList, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListHoursOfOperationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListInstanceAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListInstanceAttributesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Attributes: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Attributes !== undefined && data.Attributes !== null) {
                    contents.Attributes = deserializeAws_restJson1AttributesList(data.Attributes, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListInstanceAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListInstancesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    InstanceSummaryList: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.InstanceSummaryList !== undefined && data.InstanceSummaryList !== null) {
                    contents.InstanceSummaryList = deserializeAws_restJson1InstanceSummaryList(data.InstanceSummaryList, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListInstanceStorageConfigsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListInstanceStorageConfigsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    StorageConfigs: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.StorageConfigs !== undefined && data.StorageConfigs !== null) {
                    contents.StorageConfigs = deserializeAws_restJson1InstanceStorageConfigs(data.StorageConfigs, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListInstanceStorageConfigsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListIntegrationAssociationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListIntegrationAssociationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    IntegrationAssociationSummaryList: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.IntegrationAssociationSummaryList !== undefined && data.IntegrationAssociationSummaryList !== null) {
                    contents.IntegrationAssociationSummaryList = deserializeAws_restJson1IntegrationAssociationSummaryList(data.IntegrationAssociationSummaryList, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListIntegrationAssociationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListLambdaFunctionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListLambdaFunctionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    LambdaFunctions: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.LambdaFunctions !== undefined && data.LambdaFunctions !== null) {
                    contents.LambdaFunctions = deserializeAws_restJson1FunctionArnsList(data.LambdaFunctions, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListLambdaFunctionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListLexBotsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListLexBotsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    LexBots: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.LexBots !== undefined && data.LexBots !== null) {
                    contents.LexBots = deserializeAws_restJson1LexBotsList(data.LexBots, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListLexBotsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListPhoneNumbersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListPhoneNumbersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    PhoneNumberSummaryList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.PhoneNumberSummaryList !== undefined && data.PhoneNumberSummaryList !== null) {
                    contents.PhoneNumberSummaryList = deserializeAws_restJson1PhoneNumberSummaryList(data.PhoneNumberSummaryList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListPhoneNumbersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListPromptsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListPromptsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    PromptSummaryList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.PromptSummaryList !== undefined && data.PromptSummaryList !== null) {
                    contents.PromptSummaryList = deserializeAws_restJson1PromptSummaryList(data.PromptSummaryList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListPromptsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListQueueQuickConnectsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListQueueQuickConnectsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    QuickConnectSummaryList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.QuickConnectSummaryList !== undefined && data.QuickConnectSummaryList !== null) {
                    contents.QuickConnectSummaryList = deserializeAws_restJson1QuickConnectSummaryList(data.QuickConnectSummaryList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListQueueQuickConnectsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListQueuesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListQueuesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    QueueSummaryList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.QueueSummaryList !== undefined && data.QueueSummaryList !== null) {
                    contents.QueueSummaryList = deserializeAws_restJson1QueueSummaryList(data.QueueSummaryList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListQueuesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListQuickConnectsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListQuickConnectsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    QuickConnectSummaryList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.QuickConnectSummaryList !== undefined && data.QuickConnectSummaryList !== null) {
                    contents.QuickConnectSummaryList = deserializeAws_restJson1QuickConnectSummaryList(data.QuickConnectSummaryList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListQuickConnectsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListRoutingProfileQueuesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListRoutingProfileQueuesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    RoutingProfileQueueConfigSummaryList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.RoutingProfileQueueConfigSummaryList !== undefined && data.RoutingProfileQueueConfigSummaryList !== null) {
                    contents.RoutingProfileQueueConfigSummaryList = deserializeAws_restJson1RoutingProfileQueueConfigSummaryList(data.RoutingProfileQueueConfigSummaryList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListRoutingProfileQueuesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListRoutingProfilesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListRoutingProfilesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    RoutingProfileSummaryList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.RoutingProfileSummaryList !== undefined && data.RoutingProfileSummaryList !== null) {
                    contents.RoutingProfileSummaryList = deserializeAws_restJson1RoutingProfileSummaryList(data.RoutingProfileSummaryList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListRoutingProfilesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListSecurityKeysCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListSecurityKeysCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    SecurityKeys: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.SecurityKeys !== undefined && data.SecurityKeys !== null) {
                    contents.SecurityKeys = deserializeAws_restJson1SecurityKeysList(data.SecurityKeys, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListSecurityKeysCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListSecurityProfilesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListSecurityProfilesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    SecurityProfileSummaryList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.SecurityProfileSummaryList !== undefined && data.SecurityProfileSummaryList !== null) {
                    contents.SecurityProfileSummaryList = deserializeAws_restJson1SecurityProfileSummaryList(data.SecurityProfileSummaryList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListSecurityProfilesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListUseCasesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListUseCasesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    UseCaseSummaryList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.UseCaseSummaryList !== undefined && data.UseCaseSummaryList !== null) {
                    contents.UseCaseSummaryList = deserializeAws_restJson1UseCaseSummaryList(data.UseCaseSummaryList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListUseCasesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListUserHierarchyGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListUserHierarchyGroupsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    UserHierarchyGroupSummaryList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.UserHierarchyGroupSummaryList !== undefined && data.UserHierarchyGroupSummaryList !== null) {
                    contents.UserHierarchyGroupSummaryList = deserializeAws_restJson1HierarchyGroupSummaryList(data.UserHierarchyGroupSummaryList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListUserHierarchyGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListUsersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListUsersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    UserSummaryList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.UserSummaryList !== undefined && data.UserSummaryList !== null) {
                    contents.UserSummaryList = deserializeAws_restJson1UserSummaryList(data.UserSummaryList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListUsersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ResumeContactRecordingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ResumeContactRecordingCommandError(output, context)];
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
var deserializeAws_restJson1ResumeContactRecordingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartChatContactCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartChatContactCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ContactId: undefined,
                    ParticipantId: undefined,
                    ParticipantToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ContactId !== undefined && data.ContactId !== null) {
                    contents.ContactId = data.ContactId;
                }
                if (data.ParticipantId !== undefined && data.ParticipantId !== null) {
                    contents.ParticipantId = data.ParticipantId;
                }
                if (data.ParticipantToken !== undefined && data.ParticipantToken !== null) {
                    contents.ParticipantToken = data.ParticipantToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StartChatContactCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartContactRecordingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartContactRecordingCommandError(output, context)];
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
var deserializeAws_restJson1StartContactRecordingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartOutboundVoiceContactCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartOutboundVoiceContactCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ContactId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ContactId !== undefined && data.ContactId !== null) {
                    contents.ContactId = data.ContactId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StartOutboundVoiceContactCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DestinationNotAllowedException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#DestinationNotAllowedException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#LimitExceededException": return [3 /*break*/, 10];
                    case "OutboundContactNotPermittedException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#OutboundContactNotPermittedException": return [3 /*break*/, 12];
                    case "ResourceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DestinationNotAllowedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1OutboundContactNotPermittedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartTaskContactCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartTaskContactCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ContactId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ContactId !== undefined && data.ContactId !== null) {
                    contents.ContactId = data.ContactId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StartTaskContactCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StopContactCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StopContactCommandError(output, context)];
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
var deserializeAws_restJson1StopContactCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ContactNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#ContactNotFoundException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ContactNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StopContactRecordingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StopContactRecordingCommandError(output, context)];
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
var deserializeAws_restJson1StopContactRecordingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1SuspendContactRecordingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1SuspendContactRecordingCommandError(output, context)];
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
var deserializeAws_restJson1SuspendContactRecordingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateContactAttributesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateContactAttributesCommandError(output, context)];
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
var deserializeAws_restJson1UpdateContactAttributesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateContactFlowContentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateContactFlowContentCommandError(output, context)];
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
var deserializeAws_restJson1UpdateContactFlowContentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidContactFlowException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidContactFlowException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidContactFlowExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateContactFlowNameCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateContactFlowNameCommandError(output, context)];
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
var deserializeAws_restJson1UpdateContactFlowNameCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateInstanceAttributeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateInstanceAttributeCommandError(output, context)];
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
var deserializeAws_restJson1UpdateInstanceAttributeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateInstanceStorageConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateInstanceStorageConfigCommandError(output, context)];
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
var deserializeAws_restJson1UpdateInstanceStorageConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateQueueHoursOfOperationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateQueueHoursOfOperationCommandError(output, context)];
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
var deserializeAws_restJson1UpdateQueueHoursOfOperationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateQueueMaxContactsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateQueueMaxContactsCommandError(output, context)];
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
var deserializeAws_restJson1UpdateQueueMaxContactsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateQueueNameCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateQueueNameCommandError(output, context)];
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
var deserializeAws_restJson1UpdateQueueNameCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommandError(output, context)];
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
var deserializeAws_restJson1UpdateQueueOutboundCallerConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateQueueStatusCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateQueueStatusCommandError(output, context)];
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
var deserializeAws_restJson1UpdateQueueStatusCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateQuickConnectConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateQuickConnectConfigCommandError(output, context)];
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
var deserializeAws_restJson1UpdateQuickConnectConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateQuickConnectNameCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateQuickConnectNameCommandError(output, context)];
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
var deserializeAws_restJson1UpdateQuickConnectNameCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommandError(output, context)];
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
var deserializeAws_restJson1UpdateRoutingProfileConcurrencyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommandError(output, context)];
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
var deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateRoutingProfileNameCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateRoutingProfileNameCommandError(output, context)];
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
var deserializeAws_restJson1UpdateRoutingProfileNameCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateRoutingProfileQueuesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateRoutingProfileQueuesCommandError(output, context)];
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
var deserializeAws_restJson1UpdateRoutingProfileQueuesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateUserHierarchyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateUserHierarchyCommandError(output, context)];
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
var deserializeAws_restJson1UpdateUserHierarchyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateUserHierarchyGroupNameCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateUserHierarchyGroupNameCommandError(output, context)];
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
var deserializeAws_restJson1UpdateUserHierarchyGroupNameCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DuplicateResourceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#DuplicateResourceException": return [3 /*break*/, 2];
                    case "InternalServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1DuplicateResourceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateUserHierarchyStructureCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateUserHierarchyStructureCommandError(output, context)];
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
var deserializeAws_restJson1UpdateUserHierarchyStructureCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateUserIdentityInfoCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateUserIdentityInfoCommandError(output, context)];
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
var deserializeAws_restJson1UpdateUserIdentityInfoCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateUserPhoneConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateUserPhoneConfigCommandError(output, context)];
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
var deserializeAws_restJson1UpdateUserPhoneConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateUserRoutingProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateUserRoutingProfileCommandError(output, context)];
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
var deserializeAws_restJson1UpdateUserRoutingProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateUserSecurityProfilesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateUserSecurityProfilesCommandError(output, context)];
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
var deserializeAws_restJson1UpdateUserSecurityProfilesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.connect#InternalServiceException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.connect#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.connect#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.connect#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.connect#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1ContactFlowNotPublishedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ContactFlowNotPublishedException",
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
var deserializeAws_restJson1ContactNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ContactNotFoundException",
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
var deserializeAws_restJson1DestinationNotAllowedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "DestinationNotAllowedException",
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
var deserializeAws_restJson1DuplicateResourceExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "DuplicateResourceException",
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
var deserializeAws_restJson1InternalServiceExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalServiceException",
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
var deserializeAws_restJson1InvalidContactFlowExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidContactFlowException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            problems: undefined,
        };
        data = parsedOutput.body;
        if (data.problems !== undefined && data.problems !== null) {
            contents.problems = deserializeAws_restJson1Problems(data.problems, context);
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InvalidParameterExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidParameterException",
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
var deserializeAws_restJson1LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "LimitExceededException",
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
var deserializeAws_restJson1OutboundContactNotPermittedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "OutboundContactNotPermittedException",
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
var deserializeAws_restJson1ResourceConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceConflictException",
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
var deserializeAws_restJson1ResourceInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceInUseException",
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
var deserializeAws_restJson1ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceNotFoundException",
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
var deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ServiceQuotaExceededException",
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
var deserializeAws_restJson1UserNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "UserNotFoundException",
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
var serializeAws_restJson1Attributes = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1Channels = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1ChatMessage = function (input, context) {
    return __assign(__assign({}, (input.Content !== undefined && input.Content !== null && { Content: input.Content })), (input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType }));
};
var serializeAws_restJson1ContactReferences = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1Reference(value, context), _b));
    }, {});
};
var serializeAws_restJson1CurrentMetric = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }));
};
var serializeAws_restJson1CurrentMetrics = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CurrentMetric(entry, context);
    });
};
var serializeAws_restJson1EncryptionConfig = function (input, context) {
    return __assign(__assign({}, (input.EncryptionType !== undefined &&
        input.EncryptionType !== null && { EncryptionType: input.EncryptionType })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }));
};
var serializeAws_restJson1Filters = function (input, context) {
    return __assign(__assign({}, (input.Channels !== undefined &&
        input.Channels !== null && { Channels: serializeAws_restJson1Channels(input.Channels, context) })), (input.Queues !== undefined &&
        input.Queues !== null && { Queues: serializeAws_restJson1Queues(input.Queues, context) }));
};
var serializeAws_restJson1Groupings = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1HierarchyLevelUpdate = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_restJson1HierarchyStructureUpdate = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.LevelFive !== undefined &&
        input.LevelFive !== null && { LevelFive: serializeAws_restJson1HierarchyLevelUpdate(input.LevelFive, context) })), (input.LevelFour !== undefined &&
        input.LevelFour !== null && { LevelFour: serializeAws_restJson1HierarchyLevelUpdate(input.LevelFour, context) })), (input.LevelOne !== undefined &&
        input.LevelOne !== null && { LevelOne: serializeAws_restJson1HierarchyLevelUpdate(input.LevelOne, context) })), (input.LevelThree !== undefined &&
        input.LevelThree !== null && {
        LevelThree: serializeAws_restJson1HierarchyLevelUpdate(input.LevelThree, context),
    })), (input.LevelTwo !== undefined &&
        input.LevelTwo !== null && { LevelTwo: serializeAws_restJson1HierarchyLevelUpdate(input.LevelTwo, context) }));
};
var serializeAws_restJson1HistoricalMetric = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Statistic !== undefined && input.Statistic !== null && { Statistic: input.Statistic })), (input.Threshold !== undefined &&
        input.Threshold !== null && { Threshold: serializeAws_restJson1Threshold(input.Threshold, context) })), (input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }));
};
var serializeAws_restJson1HistoricalMetrics = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1HistoricalMetric(entry, context);
    });
};
var serializeAws_restJson1InstanceStorageConfig = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AssociationId !== undefined && input.AssociationId !== null && { AssociationId: input.AssociationId })), (input.KinesisFirehoseConfig !== undefined &&
        input.KinesisFirehoseConfig !== null && {
        KinesisFirehoseConfig: serializeAws_restJson1KinesisFirehoseConfig(input.KinesisFirehoseConfig, context),
    })), (input.KinesisStreamConfig !== undefined &&
        input.KinesisStreamConfig !== null && {
        KinesisStreamConfig: serializeAws_restJson1KinesisStreamConfig(input.KinesisStreamConfig, context),
    })), (input.KinesisVideoStreamConfig !== undefined &&
        input.KinesisVideoStreamConfig !== null && {
        KinesisVideoStreamConfig: serializeAws_restJson1KinesisVideoStreamConfig(input.KinesisVideoStreamConfig, context),
    })), (input.S3Config !== undefined &&
        input.S3Config !== null && { S3Config: serializeAws_restJson1S3Config(input.S3Config, context) })), (input.StorageType !== undefined && input.StorageType !== null && { StorageType: input.StorageType }));
};
var serializeAws_restJson1KinesisFirehoseConfig = function (input, context) {
    return __assign({}, (input.FirehoseArn !== undefined && input.FirehoseArn !== null && { FirehoseArn: input.FirehoseArn }));
};
var serializeAws_restJson1KinesisStreamConfig = function (input, context) {
    return __assign({}, (input.StreamArn !== undefined && input.StreamArn !== null && { StreamArn: input.StreamArn }));
};
var serializeAws_restJson1KinesisVideoStreamConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.EncryptionConfig !== undefined &&
        input.EncryptionConfig !== null && {
        EncryptionConfig: serializeAws_restJson1EncryptionConfig(input.EncryptionConfig, context),
    })), (input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix })), (input.RetentionPeriodHours !== undefined &&
        input.RetentionPeriodHours !== null && { RetentionPeriodHours: input.RetentionPeriodHours }));
};
var serializeAws_restJson1LexBot = function (input, context) {
    return __assign(__assign({}, (input.LexRegion !== undefined && input.LexRegion !== null && { LexRegion: input.LexRegion })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_restJson1MediaConcurrencies = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MediaConcurrency(entry, context);
    });
};
var serializeAws_restJson1MediaConcurrency = function (input, context) {
    return __assign(__assign({}, (input.Channel !== undefined && input.Channel !== null && { Channel: input.Channel })), (input.Concurrency !== undefined && input.Concurrency !== null && { Concurrency: input.Concurrency }));
};
var serializeAws_restJson1OutboundCallerConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.OutboundCallerIdName !== undefined &&
        input.OutboundCallerIdName !== null && { OutboundCallerIdName: input.OutboundCallerIdName })), (input.OutboundCallerIdNumberId !== undefined &&
        input.OutboundCallerIdNumberId !== null && { OutboundCallerIdNumberId: input.OutboundCallerIdNumberId })), (input.OutboundFlowId !== undefined &&
        input.OutboundFlowId !== null && { OutboundFlowId: input.OutboundFlowId }));
};
var serializeAws_restJson1ParticipantDetails = function (input, context) {
    return __assign({}, (input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }));
};
var serializeAws_restJson1PhoneNumberQuickConnectConfig = function (input, context) {
    return __assign({}, (input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }));
};
var serializeAws_restJson1QueueQuickConnectConfig = function (input, context) {
    return __assign(__assign({}, (input.ContactFlowId !== undefined && input.ContactFlowId !== null && { ContactFlowId: input.ContactFlowId })), (input.QueueId !== undefined && input.QueueId !== null && { QueueId: input.QueueId }));
};
var serializeAws_restJson1Queues = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1QuickConnectConfig = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.PhoneConfig !== undefined &&
        input.PhoneConfig !== null && {
        PhoneConfig: serializeAws_restJson1PhoneNumberQuickConnectConfig(input.PhoneConfig, context),
    })), (input.QueueConfig !== undefined &&
        input.QueueConfig !== null && {
        QueueConfig: serializeAws_restJson1QueueQuickConnectConfig(input.QueueConfig, context),
    })), (input.QuickConnectType !== undefined &&
        input.QuickConnectType !== null && { QuickConnectType: input.QuickConnectType })), (input.UserConfig !== undefined &&
        input.UserConfig !== null && {
        UserConfig: serializeAws_restJson1UserQuickConnectConfig(input.UserConfig, context),
    }));
};
var serializeAws_restJson1QuickConnectsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Reference = function (input, context) {
    return __assign(__assign({}, (input.Type !== undefined && input.Type !== null && { Type: input.Type })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1RoutingProfileQueueConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.Delay !== undefined && input.Delay !== null && { Delay: input.Delay })), (input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority })), (input.QueueReference !== undefined &&
        input.QueueReference !== null && {
        QueueReference: serializeAws_restJson1RoutingProfileQueueReference(input.QueueReference, context),
    }));
};
var serializeAws_restJson1RoutingProfileQueueConfigList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RoutingProfileQueueConfig(entry, context);
    });
};
var serializeAws_restJson1RoutingProfileQueueReference = function (input, context) {
    return __assign(__assign({}, (input.Channel !== undefined && input.Channel !== null && { Channel: input.Channel })), (input.QueueId !== undefined && input.QueueId !== null && { QueueId: input.QueueId }));
};
var serializeAws_restJson1RoutingProfileQueueReferenceList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RoutingProfileQueueReference(entry, context);
    });
};
var serializeAws_restJson1S3Config = function (input, context) {
    return __assign(__assign(__assign({}, (input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName })), (input.BucketPrefix !== undefined && input.BucketPrefix !== null && { BucketPrefix: input.BucketPrefix })), (input.EncryptionConfig !== undefined &&
        input.EncryptionConfig !== null && {
        EncryptionConfig: serializeAws_restJson1EncryptionConfig(input.EncryptionConfig, context),
    }));
};
var serializeAws_restJson1SecurityProfileIds = function (input, context) {
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
var serializeAws_restJson1Threshold = function (input, context) {
    return __assign(__assign({}, (input.Comparison !== undefined && input.Comparison !== null && { Comparison: input.Comparison })), (input.ThresholdValue !== undefined &&
        input.ThresholdValue !== null && { ThresholdValue: input.ThresholdValue }));
};
var serializeAws_restJson1UserIdentityInfo = function (input, context) {
    return __assign(__assign(__assign({}, (input.Email !== undefined && input.Email !== null && { Email: input.Email })), (input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName })), (input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }));
};
var serializeAws_restJson1UserPhoneConfig = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AfterContactWorkTimeLimit !== undefined &&
        input.AfterContactWorkTimeLimit !== null && { AfterContactWorkTimeLimit: input.AfterContactWorkTimeLimit })), (input.AutoAccept !== undefined && input.AutoAccept !== null && { AutoAccept: input.AutoAccept })), (input.DeskPhoneNumber !== undefined &&
        input.DeskPhoneNumber !== null && { DeskPhoneNumber: input.DeskPhoneNumber })), (input.PhoneType !== undefined && input.PhoneType !== null && { PhoneType: input.PhoneType }));
};
var serializeAws_restJson1UserQuickConnectConfig = function (input, context) {
    return __assign(__assign({}, (input.ContactFlowId !== undefined && input.ContactFlowId !== null && { ContactFlowId: input.ContactFlowId })), (input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }));
};
var serializeAws_restJson1VoiceRecordingConfiguration = function (input, context) {
    return __assign({}, (input.VoiceRecordingTrack !== undefined &&
        input.VoiceRecordingTrack !== null && { VoiceRecordingTrack: input.VoiceRecordingTrack }));
};
var deserializeAws_restJson1Attribute = function (output, context) {
    return {
        AttributeType: output.AttributeType !== undefined && output.AttributeType !== null ? output.AttributeType : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1Attributes = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1AttributesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Attribute(entry, context);
    });
};
var deserializeAws_restJson1ContactFlow = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1ContactFlowSummary = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        ContactFlowType: output.ContactFlowType !== undefined && output.ContactFlowType !== null ? output.ContactFlowType : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1ContactFlowSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ContactFlowSummary(entry, context);
    });
};
var deserializeAws_restJson1Credentials = function (output, context) {
    return {
        AccessToken: output.AccessToken !== undefined && output.AccessToken !== null ? output.AccessToken : undefined,
        AccessTokenExpiration: output.AccessTokenExpiration !== undefined && output.AccessTokenExpiration !== null
            ? new Date(Math.round(output.AccessTokenExpiration * 1000))
            : undefined,
        RefreshToken: output.RefreshToken !== undefined && output.RefreshToken !== null ? output.RefreshToken : undefined,
        RefreshTokenExpiration: output.RefreshTokenExpiration !== undefined && output.RefreshTokenExpiration !== null
            ? new Date(Math.round(output.RefreshTokenExpiration * 1000))
            : undefined,
    };
};
var deserializeAws_restJson1CurrentMetric = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    };
};
var deserializeAws_restJson1CurrentMetricData = function (output, context) {
    return {
        Metric: output.Metric !== undefined && output.Metric !== null
            ? deserializeAws_restJson1CurrentMetric(output.Metric, context)
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1CurrentMetricDataCollections = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CurrentMetricData(entry, context);
    });
};
var deserializeAws_restJson1CurrentMetricResult = function (output, context) {
    return {
        Collections: output.Collections !== undefined && output.Collections !== null
            ? deserializeAws_restJson1CurrentMetricDataCollections(output.Collections, context)
            : undefined,
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_restJson1Dimensions(output.Dimensions, context)
            : undefined,
    };
};
var deserializeAws_restJson1CurrentMetricResults = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CurrentMetricResult(entry, context);
    });
};
var deserializeAws_restJson1Dimensions = function (output, context) {
    return {
        Channel: output.Channel !== undefined && output.Channel !== null ? output.Channel : undefined,
        Queue: output.Queue !== undefined && output.Queue !== null
            ? deserializeAws_restJson1QueueReference(output.Queue, context)
            : undefined,
    };
};
var deserializeAws_restJson1EncryptionConfig = function (output, context) {
    return {
        EncryptionType: output.EncryptionType !== undefined && output.EncryptionType !== null ? output.EncryptionType : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    };
};
var deserializeAws_restJson1FunctionArnsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1HierarchyGroup = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        HierarchyPath: output.HierarchyPath !== undefined && output.HierarchyPath !== null
            ? deserializeAws_restJson1HierarchyPath(output.HierarchyPath, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LevelId: output.LevelId !== undefined && output.LevelId !== null ? output.LevelId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1HierarchyGroupSummary = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1HierarchyGroupSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HierarchyGroupSummary(entry, context);
    });
};
var deserializeAws_restJson1HierarchyLevel = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1HierarchyPath = function (output, context) {
    return {
        LevelFive: output.LevelFive !== undefined && output.LevelFive !== null
            ? deserializeAws_restJson1HierarchyGroupSummary(output.LevelFive, context)
            : undefined,
        LevelFour: output.LevelFour !== undefined && output.LevelFour !== null
            ? deserializeAws_restJson1HierarchyGroupSummary(output.LevelFour, context)
            : undefined,
        LevelOne: output.LevelOne !== undefined && output.LevelOne !== null
            ? deserializeAws_restJson1HierarchyGroupSummary(output.LevelOne, context)
            : undefined,
        LevelThree: output.LevelThree !== undefined && output.LevelThree !== null
            ? deserializeAws_restJson1HierarchyGroupSummary(output.LevelThree, context)
            : undefined,
        LevelTwo: output.LevelTwo !== undefined && output.LevelTwo !== null
            ? deserializeAws_restJson1HierarchyGroupSummary(output.LevelTwo, context)
            : undefined,
    };
};
var deserializeAws_restJson1HierarchyStructure = function (output, context) {
    return {
        LevelFive: output.LevelFive !== undefined && output.LevelFive !== null
            ? deserializeAws_restJson1HierarchyLevel(output.LevelFive, context)
            : undefined,
        LevelFour: output.LevelFour !== undefined && output.LevelFour !== null
            ? deserializeAws_restJson1HierarchyLevel(output.LevelFour, context)
            : undefined,
        LevelOne: output.LevelOne !== undefined && output.LevelOne !== null
            ? deserializeAws_restJson1HierarchyLevel(output.LevelOne, context)
            : undefined,
        LevelThree: output.LevelThree !== undefined && output.LevelThree !== null
            ? deserializeAws_restJson1HierarchyLevel(output.LevelThree, context)
            : undefined,
        LevelTwo: output.LevelTwo !== undefined && output.LevelTwo !== null
            ? deserializeAws_restJson1HierarchyLevel(output.LevelTwo, context)
            : undefined,
    };
};
var deserializeAws_restJson1HistoricalMetric = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Statistic: output.Statistic !== undefined && output.Statistic !== null ? output.Statistic : undefined,
        Threshold: output.Threshold !== undefined && output.Threshold !== null
            ? deserializeAws_restJson1Threshold(output.Threshold, context)
            : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    };
};
var deserializeAws_restJson1HistoricalMetricData = function (output, context) {
    return {
        Metric: output.Metric !== undefined && output.Metric !== null
            ? deserializeAws_restJson1HistoricalMetric(output.Metric, context)
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1HistoricalMetricDataCollections = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HistoricalMetricData(entry, context);
    });
};
var deserializeAws_restJson1HistoricalMetricResult = function (output, context) {
    return {
        Collections: output.Collections !== undefined && output.Collections !== null
            ? deserializeAws_restJson1HistoricalMetricDataCollections(output.Collections, context)
            : undefined,
        Dimensions: output.Dimensions !== undefined && output.Dimensions !== null
            ? deserializeAws_restJson1Dimensions(output.Dimensions, context)
            : undefined,
    };
};
var deserializeAws_restJson1HistoricalMetricResults = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HistoricalMetricResult(entry, context);
    });
};
var deserializeAws_restJson1HoursOfOperation = function (output, context) {
    return {
        Config: output.Config !== undefined && output.Config !== null
            ? deserializeAws_restJson1HoursOfOperationConfigList(output.Config, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        HoursOfOperationArn: output.HoursOfOperationArn !== undefined && output.HoursOfOperationArn !== null
            ? output.HoursOfOperationArn
            : undefined,
        HoursOfOperationId: output.HoursOfOperationId !== undefined && output.HoursOfOperationId !== null
            ? output.HoursOfOperationId
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
        TimeZone: output.TimeZone !== undefined && output.TimeZone !== null ? output.TimeZone : undefined,
    };
};
var deserializeAws_restJson1HoursOfOperationConfig = function (output, context) {
    return {
        Day: output.Day !== undefined && output.Day !== null ? output.Day : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null
            ? deserializeAws_restJson1HoursOfOperationTimeSlice(output.EndTime, context)
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? deserializeAws_restJson1HoursOfOperationTimeSlice(output.StartTime, context)
            : undefined,
    };
};
var deserializeAws_restJson1HoursOfOperationConfigList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HoursOfOperationConfig(entry, context);
    });
};
var deserializeAws_restJson1HoursOfOperationSummary = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1HoursOfOperationSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HoursOfOperationSummary(entry, context);
    });
};
var deserializeAws_restJson1HoursOfOperationTimeSlice = function (output, context) {
    return {
        Hours: output.Hours !== undefined && output.Hours !== null ? output.Hours : undefined,
        Minutes: output.Minutes !== undefined && output.Minutes !== null ? output.Minutes : undefined,
    };
};
var deserializeAws_restJson1Instance = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IdentityManagementType: output.IdentityManagementType !== undefined && output.IdentityManagementType !== null
            ? output.IdentityManagementType
            : undefined,
        InboundCallsEnabled: output.InboundCallsEnabled !== undefined && output.InboundCallsEnabled !== null
            ? output.InboundCallsEnabled
            : undefined,
        InstanceAlias: output.InstanceAlias !== undefined && output.InstanceAlias !== null ? output.InstanceAlias : undefined,
        InstanceStatus: output.InstanceStatus !== undefined && output.InstanceStatus !== null ? output.InstanceStatus : undefined,
        OutboundCallsEnabled: output.OutboundCallsEnabled !== undefined && output.OutboundCallsEnabled !== null
            ? output.OutboundCallsEnabled
            : undefined,
        ServiceRole: output.ServiceRole !== undefined && output.ServiceRole !== null ? output.ServiceRole : undefined,
        StatusReason: output.StatusReason !== undefined && output.StatusReason !== null
            ? deserializeAws_restJson1InstanceStatusReason(output.StatusReason, context)
            : undefined,
    };
};
var deserializeAws_restJson1InstanceStatusReason = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_restJson1InstanceStorageConfig = function (output, context) {
    return {
        AssociationId: output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
        KinesisFirehoseConfig: output.KinesisFirehoseConfig !== undefined && output.KinesisFirehoseConfig !== null
            ? deserializeAws_restJson1KinesisFirehoseConfig(output.KinesisFirehoseConfig, context)
            : undefined,
        KinesisStreamConfig: output.KinesisStreamConfig !== undefined && output.KinesisStreamConfig !== null
            ? deserializeAws_restJson1KinesisStreamConfig(output.KinesisStreamConfig, context)
            : undefined,
        KinesisVideoStreamConfig: output.KinesisVideoStreamConfig !== undefined && output.KinesisVideoStreamConfig !== null
            ? deserializeAws_restJson1KinesisVideoStreamConfig(output.KinesisVideoStreamConfig, context)
            : undefined,
        S3Config: output.S3Config !== undefined && output.S3Config !== null
            ? deserializeAws_restJson1S3Config(output.S3Config, context)
            : undefined,
        StorageType: output.StorageType !== undefined && output.StorageType !== null ? output.StorageType : undefined,
    };
};
var deserializeAws_restJson1InstanceStorageConfigs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InstanceStorageConfig(entry, context);
    });
};
var deserializeAws_restJson1InstanceSummary = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IdentityManagementType: output.IdentityManagementType !== undefined && output.IdentityManagementType !== null
            ? output.IdentityManagementType
            : undefined,
        InboundCallsEnabled: output.InboundCallsEnabled !== undefined && output.InboundCallsEnabled !== null
            ? output.InboundCallsEnabled
            : undefined,
        InstanceAlias: output.InstanceAlias !== undefined && output.InstanceAlias !== null ? output.InstanceAlias : undefined,
        InstanceStatus: output.InstanceStatus !== undefined && output.InstanceStatus !== null ? output.InstanceStatus : undefined,
        OutboundCallsEnabled: output.OutboundCallsEnabled !== undefined && output.OutboundCallsEnabled !== null
            ? output.OutboundCallsEnabled
            : undefined,
        ServiceRole: output.ServiceRole !== undefined && output.ServiceRole !== null ? output.ServiceRole : undefined,
    };
};
var deserializeAws_restJson1InstanceSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InstanceSummary(entry, context);
    });
};
var deserializeAws_restJson1IntegrationAssociationSummary = function (output, context) {
    return {
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        IntegrationArn: output.IntegrationArn !== undefined && output.IntegrationArn !== null ? output.IntegrationArn : undefined,
        IntegrationAssociationArn: output.IntegrationAssociationArn !== undefined && output.IntegrationAssociationArn !== null
            ? output.IntegrationAssociationArn
            : undefined,
        IntegrationAssociationId: output.IntegrationAssociationId !== undefined && output.IntegrationAssociationId !== null
            ? output.IntegrationAssociationId
            : undefined,
        IntegrationType: output.IntegrationType !== undefined && output.IntegrationType !== null ? output.IntegrationType : undefined,
        SourceApplicationName: output.SourceApplicationName !== undefined && output.SourceApplicationName !== null
            ? output.SourceApplicationName
            : undefined,
        SourceApplicationUrl: output.SourceApplicationUrl !== undefined && output.SourceApplicationUrl !== null
            ? output.SourceApplicationUrl
            : undefined,
        SourceType: output.SourceType !== undefined && output.SourceType !== null ? output.SourceType : undefined,
    };
};
var deserializeAws_restJson1IntegrationAssociationSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IntegrationAssociationSummary(entry, context);
    });
};
var deserializeAws_restJson1KinesisFirehoseConfig = function (output, context) {
    return {
        FirehoseArn: output.FirehoseArn !== undefined && output.FirehoseArn !== null ? output.FirehoseArn : undefined,
    };
};
var deserializeAws_restJson1KinesisStreamConfig = function (output, context) {
    return {
        StreamArn: output.StreamArn !== undefined && output.StreamArn !== null ? output.StreamArn : undefined,
    };
};
var deserializeAws_restJson1KinesisVideoStreamConfig = function (output, context) {
    return {
        EncryptionConfig: output.EncryptionConfig !== undefined && output.EncryptionConfig !== null
            ? deserializeAws_restJson1EncryptionConfig(output.EncryptionConfig, context)
            : undefined,
        Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
        RetentionPeriodHours: output.RetentionPeriodHours !== undefined && output.RetentionPeriodHours !== null
            ? output.RetentionPeriodHours
            : undefined,
    };
};
var deserializeAws_restJson1LexBot = function (output, context) {
    return {
        LexRegion: output.LexRegion !== undefined && output.LexRegion !== null ? output.LexRegion : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1LexBotsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LexBot(entry, context);
    });
};
var deserializeAws_restJson1MediaConcurrencies = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MediaConcurrency(entry, context);
    });
};
var deserializeAws_restJson1MediaConcurrency = function (output, context) {
    return {
        Channel: output.Channel !== undefined && output.Channel !== null ? output.Channel : undefined,
        Concurrency: output.Concurrency !== undefined && output.Concurrency !== null ? output.Concurrency : undefined,
    };
};
var deserializeAws_restJson1OriginsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1OutboundCallerConfig = function (output, context) {
    return {
        OutboundCallerIdName: output.OutboundCallerIdName !== undefined && output.OutboundCallerIdName !== null
            ? output.OutboundCallerIdName
            : undefined,
        OutboundCallerIdNumberId: output.OutboundCallerIdNumberId !== undefined && output.OutboundCallerIdNumberId !== null
            ? output.OutboundCallerIdNumberId
            : undefined,
        OutboundFlowId: output.OutboundFlowId !== undefined && output.OutboundFlowId !== null ? output.OutboundFlowId : undefined,
    };
};
var deserializeAws_restJson1PhoneNumberQuickConnectConfig = function (output, context) {
    return {
        PhoneNumber: output.PhoneNumber !== undefined && output.PhoneNumber !== null ? output.PhoneNumber : undefined,
    };
};
var deserializeAws_restJson1PhoneNumberSummary = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        PhoneNumber: output.PhoneNumber !== undefined && output.PhoneNumber !== null ? output.PhoneNumber : undefined,
        PhoneNumberCountryCode: output.PhoneNumberCountryCode !== undefined && output.PhoneNumberCountryCode !== null
            ? output.PhoneNumberCountryCode
            : undefined,
        PhoneNumberType: output.PhoneNumberType !== undefined && output.PhoneNumberType !== null ? output.PhoneNumberType : undefined,
    };
};
var deserializeAws_restJson1PhoneNumberSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PhoneNumberSummary(entry, context);
    });
};
var deserializeAws_restJson1ProblemDetail = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_restJson1Problems = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ProblemDetail(entry, context);
    });
};
var deserializeAws_restJson1PromptSummary = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1PromptSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PromptSummary(entry, context);
    });
};
var deserializeAws_restJson1Queue = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        HoursOfOperationId: output.HoursOfOperationId !== undefined && output.HoursOfOperationId !== null
            ? output.HoursOfOperationId
            : undefined,
        MaxContacts: output.MaxContacts !== undefined && output.MaxContacts !== null ? output.MaxContacts : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OutboundCallerConfig: output.OutboundCallerConfig !== undefined && output.OutboundCallerConfig !== null
            ? deserializeAws_restJson1OutboundCallerConfig(output.OutboundCallerConfig, context)
            : undefined,
        QueueArn: output.QueueArn !== undefined && output.QueueArn !== null ? output.QueueArn : undefined,
        QueueId: output.QueueId !== undefined && output.QueueId !== null ? output.QueueId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1QueueQuickConnectConfig = function (output, context) {
    return {
        ContactFlowId: output.ContactFlowId !== undefined && output.ContactFlowId !== null ? output.ContactFlowId : undefined,
        QueueId: output.QueueId !== undefined && output.QueueId !== null ? output.QueueId : undefined,
    };
};
var deserializeAws_restJson1QueueReference = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
var deserializeAws_restJson1QueueSummary = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        QueueType: output.QueueType !== undefined && output.QueueType !== null ? output.QueueType : undefined,
    };
};
var deserializeAws_restJson1QueueSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1QueueSummary(entry, context);
    });
};
var deserializeAws_restJson1QuickConnect = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        QuickConnectARN: output.QuickConnectARN !== undefined && output.QuickConnectARN !== null ? output.QuickConnectARN : undefined,
        QuickConnectConfig: output.QuickConnectConfig !== undefined && output.QuickConnectConfig !== null
            ? deserializeAws_restJson1QuickConnectConfig(output.QuickConnectConfig, context)
            : undefined,
        QuickConnectId: output.QuickConnectId !== undefined && output.QuickConnectId !== null ? output.QuickConnectId : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1QuickConnectConfig = function (output, context) {
    return {
        PhoneConfig: output.PhoneConfig !== undefined && output.PhoneConfig !== null
            ? deserializeAws_restJson1PhoneNumberQuickConnectConfig(output.PhoneConfig, context)
            : undefined,
        QueueConfig: output.QueueConfig !== undefined && output.QueueConfig !== null
            ? deserializeAws_restJson1QueueQuickConnectConfig(output.QueueConfig, context)
            : undefined,
        QuickConnectType: output.QuickConnectType !== undefined && output.QuickConnectType !== null ? output.QuickConnectType : undefined,
        UserConfig: output.UserConfig !== undefined && output.UserConfig !== null
            ? deserializeAws_restJson1UserQuickConnectConfig(output.UserConfig, context)
            : undefined,
    };
};
var deserializeAws_restJson1QuickConnectSummary = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        QuickConnectType: output.QuickConnectType !== undefined && output.QuickConnectType !== null ? output.QuickConnectType : undefined,
    };
};
var deserializeAws_restJson1QuickConnectSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1QuickConnectSummary(entry, context);
    });
};
var deserializeAws_restJson1RoutingProfile = function (output, context) {
    return {
        DefaultOutboundQueueId: output.DefaultOutboundQueueId !== undefined && output.DefaultOutboundQueueId !== null
            ? output.DefaultOutboundQueueId
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        MediaConcurrencies: output.MediaConcurrencies !== undefined && output.MediaConcurrencies !== null
            ? deserializeAws_restJson1MediaConcurrencies(output.MediaConcurrencies, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RoutingProfileArn: output.RoutingProfileArn !== undefined && output.RoutingProfileArn !== null
            ? output.RoutingProfileArn
            : undefined,
        RoutingProfileId: output.RoutingProfileId !== undefined && output.RoutingProfileId !== null ? output.RoutingProfileId : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1RoutingProfileQueueConfigSummary = function (output, context) {
    return {
        Channel: output.Channel !== undefined && output.Channel !== null ? output.Channel : undefined,
        Delay: output.Delay !== undefined && output.Delay !== null ? output.Delay : undefined,
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        QueueArn: output.QueueArn !== undefined && output.QueueArn !== null ? output.QueueArn : undefined,
        QueueId: output.QueueId !== undefined && output.QueueId !== null ? output.QueueId : undefined,
        QueueName: output.QueueName !== undefined && output.QueueName !== null ? output.QueueName : undefined,
    };
};
var deserializeAws_restJson1RoutingProfileQueueConfigSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RoutingProfileQueueConfigSummary(entry, context);
    });
};
var deserializeAws_restJson1RoutingProfileSummary = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1RoutingProfileSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RoutingProfileSummary(entry, context);
    });
};
var deserializeAws_restJson1S3Config = function (output, context) {
    return {
        BucketName: output.BucketName !== undefined && output.BucketName !== null ? output.BucketName : undefined,
        BucketPrefix: output.BucketPrefix !== undefined && output.BucketPrefix !== null ? output.BucketPrefix : undefined,
        EncryptionConfig: output.EncryptionConfig !== undefined && output.EncryptionConfig !== null
            ? deserializeAws_restJson1EncryptionConfig(output.EncryptionConfig, context)
            : undefined,
    };
};
var deserializeAws_restJson1SecurityKey = function (output, context) {
    return {
        AssociationId: output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    };
};
var deserializeAws_restJson1SecurityKeysList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SecurityKey(entry, context);
    });
};
var deserializeAws_restJson1SecurityProfileIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1SecurityProfileSummary = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1SecurityProfileSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SecurityProfileSummary(entry, context);
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
var deserializeAws_restJson1Threshold = function (output, context) {
    return {
        Comparison: output.Comparison !== undefined && output.Comparison !== null ? output.Comparison : undefined,
        ThresholdValue: output.ThresholdValue !== undefined && output.ThresholdValue !== null ? output.ThresholdValue : undefined,
    };
};
var deserializeAws_restJson1UseCase = function (output, context) {
    return {
        UseCaseArn: output.UseCaseArn !== undefined && output.UseCaseArn !== null ? output.UseCaseArn : undefined,
        UseCaseId: output.UseCaseId !== undefined && output.UseCaseId !== null ? output.UseCaseId : undefined,
        UseCaseType: output.UseCaseType !== undefined && output.UseCaseType !== null ? output.UseCaseType : undefined,
    };
};
var deserializeAws_restJson1UseCaseSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UseCase(entry, context);
    });
};
var deserializeAws_restJson1User = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        DirectoryUserId: output.DirectoryUserId !== undefined && output.DirectoryUserId !== null ? output.DirectoryUserId : undefined,
        HierarchyGroupId: output.HierarchyGroupId !== undefined && output.HierarchyGroupId !== null ? output.HierarchyGroupId : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        IdentityInfo: output.IdentityInfo !== undefined && output.IdentityInfo !== null
            ? deserializeAws_restJson1UserIdentityInfo(output.IdentityInfo, context)
            : undefined,
        PhoneConfig: output.PhoneConfig !== undefined && output.PhoneConfig !== null
            ? deserializeAws_restJson1UserPhoneConfig(output.PhoneConfig, context)
            : undefined,
        RoutingProfileId: output.RoutingProfileId !== undefined && output.RoutingProfileId !== null ? output.RoutingProfileId : undefined,
        SecurityProfileIds: output.SecurityProfileIds !== undefined && output.SecurityProfileIds !== null
            ? deserializeAws_restJson1SecurityProfileIds(output.SecurityProfileIds, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
var deserializeAws_restJson1UserIdentityInfo = function (output, context) {
    return {
        Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
        FirstName: output.FirstName !== undefined && output.FirstName !== null ? output.FirstName : undefined,
        LastName: output.LastName !== undefined && output.LastName !== null ? output.LastName : undefined,
    };
};
var deserializeAws_restJson1UserPhoneConfig = function (output, context) {
    return {
        AfterContactWorkTimeLimit: output.AfterContactWorkTimeLimit !== undefined && output.AfterContactWorkTimeLimit !== null
            ? output.AfterContactWorkTimeLimit
            : undefined,
        AutoAccept: output.AutoAccept !== undefined && output.AutoAccept !== null ? output.AutoAccept : undefined,
        DeskPhoneNumber: output.DeskPhoneNumber !== undefined && output.DeskPhoneNumber !== null ? output.DeskPhoneNumber : undefined,
        PhoneType: output.PhoneType !== undefined && output.PhoneType !== null ? output.PhoneType : undefined,
    };
};
var deserializeAws_restJson1UserQuickConnectConfig = function (output, context) {
    return {
        ContactFlowId: output.ContactFlowId !== undefined && output.ContactFlowId !== null ? output.ContactFlowId : undefined,
        UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
    };
};
var deserializeAws_restJson1UserSummary = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
var deserializeAws_restJson1UserSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UserSummary(entry, context);
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